/**
 * Ecommerce Profit & ROI Calculator — calculation engine
 *
 * Pure functions only: no DOM access, no side effects. Imported by the
 * calculator UI and by tests/calculator-engine.test.ts.
 *
 * ---------------------------------------------------------------------------
 * ORDER FLOW MODEL
 * ---------------------------------------------------------------------------
 *   Generated orders (O)                      ← every order your ads produce
 *     − Cancelled before dispatch (O × CANCEL%)   no shipping / fulfilment / misc cost
 *     = Dispatched orders
 *         split by payment mode: COD% / PRE% (= 100 − COD%)
 *         COD dispatched    × COD delivery rate      = Delivered COD
 *         Prepaid dispatched × prepaid delivery rate = Delivered prepaid
 *         the rest return to origin (RTO)
 *
 * Advertising is charged on GENERATED orders (CPA = ad spend ÷ orders generated),
 * because the ad platform bills you for the order whether or not it later ships.
 *
 * Intermediate maths uses plain floats; every reported money value is rounded
 * to paise/cents with decimal-safe roundMoney() (exponent shifting, so 1.005
 * → 1.01, not 1.00). Order counts are kept as
 * fractional expectations (e.g. 612.5 delivered) and only rounded for display,
 * so totals stay internally consistent.
 * ---------------------------------------------------------------------------
 */

export type FieldKind = "count" | "money" | "percent";

export interface FieldSpec {
  def: number;
  min: number;
  max: number;
  kind: FieldKind;
}

/** Input schema: default (example) value, min, max and kind for each field. */
export const FIELDS = {
  orders:                   { def: 1000, min: 0, max: 1e8,  kind: "count" },
  aov:                      { def: 1499, min: 0, max: 1e8,  kind: "money" },
  productCost:              { def: 400,  min: 0, max: 1e8,  kind: "money" },
  advertisingCPA:           { def: 350,  min: 0, max: 1e8,  kind: "money" },
  forwardShipping:          { def: 80,   min: 0, max: 1e8,  kind: "money" },
  rtoShipping:              { def: 80,   min: 0, max: 1e8,  kind: "money" },
  fulfillmentCost:          { def: 30,   min: 0, max: 1e8,  kind: "money" },
  codFee:                   { def: 25,   min: 0, max: 1e8,  kind: "money" },
  paymentGatewayPercentage: { def: 2,    min: 0, max: 100,  kind: "percent" },
  codPercentage:            { def: 70,   min: 0, max: 100,  kind: "percent" },
  codDeliveryRate:          { def: 70,   min: 0, max: 100,  kind: "percent" },
  prepaidDeliveryRate:      { def: 95,   min: 0, max: 100,  kind: "percent" },
  cancellationRate:         { def: 0,    min: 0, max: 100,  kind: "percent" },
  miscCost:                 { def: 0,    min: 0, max: 1e8,  kind: "money" },
  fixedCosts:               { def: 0,    min: 0, max: 1e11, kind: "money" },
  taxPercentage:            { def: 18,   min: 0, max: 100,  kind: "percent" },
} as const satisfies Record<string, FieldSpec>;

export type FieldName = keyof typeof FIELDS;
export const FIELD_NAMES = Object.keys(FIELDS) as FieldName[];

export type ProductCostBasis = "delivered" | "dispatched";

/** Non-numeric options. */
export const OPTIONS = {
  productCostBasis: { def: "delivered" as ProductCostBasis, values: ["delivered", "dispatched"] as ProductCostBasis[] },
  includeTax: { def: false },
};

export const NEAR_BREAKEVEN_MARGIN = 5; // % of delivered GMV; |margin| below this = "near break-even"

/** Clean, fully-populated inputs as used by the model. */
export type Inputs = Record<FieldName, number> & {
  productCostBasis: ProductCostBasis;
  includeTax: boolean;
};

/** Anything the engine will accept: strings, numbers, missing keys. */
export type RawInputs = Partial<Record<FieldName, unknown>> & {
  productCostBasis?: unknown;
  includeTax?: unknown;
};

export type StatusKey = "profitable" | "near" | "unprofitable" | "empty";
export interface Status {
  key: StatusKey;
  label: string;
}

// ---------------------------------------------------------------------------
// Sanitisation helpers
// ---------------------------------------------------------------------------

/**
 * Parse anything (number, "₹1,50,000", "12.5%", "", null, "abc") into a finite
 * number, or NaN if it is not a number at all. Grouping separators, currency
 * symbols, spaces and % are ignored.
 */
export function parseNumber(value: unknown): number {
  if (typeof value === "number") return value;
  if (value === null || value === undefined) return NaN;
  let s = String(value).trim();
  if (s === "") return NaN;
  s = s.replace(/[\s,_]/g, "").replace(/[^0-9.\-eE+]/g, "");
  if (s === "" || s === "-" || s === ".") return NaN;
  return Number(s);
}

/** Clamp a finite number into [min, max]. Non-finite → fallback. */
export function clamp(n: number, min: number, max: number, fallback: number): number {
  if (typeof n !== "number" || !isFinite(n)) return fallback;
  if (n < min) return min;
  if (n > max) return max;
  return n;
}

/** Division that never returns NaN or ±Infinity. */
export function safeDivide(numerator: number, denominator: number, fallback = 0): number {
  if (!isFinite(numerator) || !isFinite(denominator) || denominator === 0) return fallback;
  const r = numerator / denominator;
  return isFinite(r) ? r : fallback;
}

/**
 * Round half away from zero at a decimal place using exponent-string shifting
 * ("1161.725e2"), which avoids binary float errors such as 1.005 → 1.00.
 */
export function roundTo(n: number, decimals: number): number {
  if (typeof n !== "number" || !isFinite(n)) return 0;
  const sign = n < 0 ? -1 : 1;
  const shifted = Math.round(Number(Math.abs(n) + "e" + decimals));
  let r = sign * Number(shifted + "e-" + decimals);
  if (!isFinite(r)) r = n; // extremely large values: already beyond 2-decimal precision
  return r === 0 ? 0 : r; // normalise -0
}

/** Round a money value to 2 decimals (paise / cents). */
export function roundMoney(n: number): number {
  return roundTo(n, 2);
}

export interface FieldValidation {
  value: number;
  error: string | null;
}

/**
 * Validate one field. Returns { value, error } where value is the sanitised
 * number used for calculation and error is a user-facing message or null.
 * Blank → 0 with no error (blank simply means "none").
 */
export function validateField(name: FieldName, raw: unknown): FieldValidation {
  const spec: FieldSpec = FIELDS[name];
  if (!spec) throw new Error("Unknown field: " + name);
  if (raw === "" || raw === null || raw === undefined) return { value: 0, error: null };
  const n = parseNumber(raw);
  if (!isFinite(n)) return { value: 0, error: "Enter a number." };
  if (n < spec.min) {
    return { value: spec.min, error: spec.kind === "percent" ? "Enter a percentage between 0 and 100." : "Enter a value of 0 or more." };
  }
  if (n > spec.max) {
    return {
      value: spec.max,
      error: spec.kind === "percent" ? "Enter a percentage between 0 and 100." : "That value is too large for this calculator.",
    };
  }
  // Fractional counts are allowed (e.g. 33.3 orders/day × 30).
  return { value: n, error: null };
}

/**
 * Normalise a raw input object (strings, numbers, missing keys) into a clean,
 * fully-populated numeric object. Missing keys fall back to 0, not the example
 * value, so an empty field never silently re-inserts a default.
 */
export function sanitizeInputs(raw?: RawInputs | null): Inputs {
  const src: RawInputs = raw || {};
  const clean = {} as Inputs;
  FIELD_NAMES.forEach((key) => {
    const spec: FieldSpec = FIELDS[key];
    const v = src[key];
    const n = v === "" || v === null || v === undefined ? 0 : parseNumber(v);
    clean[key] = clamp(n, spec.min, spec.max, 0);
  });
  clean.productCostBasis = OPTIONS.productCostBasis.values.includes(src.productCostBasis as ProductCostBasis)
    ? (src.productCostBasis as ProductCostBasis)
    : OPTIONS.productCostBasis.def;
  const t = src.includeTax;
  clean.includeTax = t === true || t === "true" || t === "1" || t === 1;
  return clean;
}

/** Example values shown on first load and on "Reset to example". */
export function getDefaultInputs(): Inputs {
  const d = {} as Inputs;
  FIELD_NAMES.forEach((k) => { d[k] = FIELDS[k].def; });
  d.productCostBasis = OPTIONS.productCostBasis.def;
  d.includeTax = OPTIONS.includeTax.def;
  return d;
}

// ---------------------------------------------------------------------------
// Core model
// ---------------------------------------------------------------------------

/**
 * Order volumes. All counts are expected values (may be fractional).
 */
export function calculateOrderFlow(i: Inputs) {
  const codShare = i.codPercentage / 100;
  const prepaidShare = 1 - codShare;
  const cancelled = i.orders * (i.cancellationRate / 100);
  const dispatched = i.orders - cancelled;

  const codOrders = i.orders * codShare;          // generated COD orders (before cancellations)
  const prepaidOrders = i.orders * prepaidShare;  // generated prepaid orders
  const codDispatched = dispatched * codShare;
  const prepaidDispatched = dispatched * prepaidShare;

  const deliveredCod = codDispatched * (i.codDeliveryRate / 100);
  const deliveredPrepaid = prepaidDispatched * (i.prepaidDeliveryRate / 100);
  const codRto = codDispatched - deliveredCod;
  const prepaidFailed = prepaidDispatched - deliveredPrepaid;
  const delivered = deliveredCod + deliveredPrepaid;

  return {
    codShare,
    prepaidShare,
    ordersGenerated: i.orders,
    cancelledOrders: cancelled,
    dispatchedOrders: dispatched,
    codOrders,
    prepaidOrders,
    codDispatched,
    prepaidDispatched,
    deliveredCod,
    deliveredPrepaid,
    deliveredOrders: delivered,
    codRtoOrders: codRto,
    prepaidFailedOrders: prepaidFailed,
    totalRtoOrders: codRto + prepaidFailed,
  };
}

/**
 * Per-GENERATED-order economics excluding advertising. This is the backbone of
 * the break-even maths: everything except CPA scales linearly with orders, so
 *
 *   profit = O × (contributionPerOrderBeforeAds − CPA) − FIXED
 *
 * and break-even CPA follows directly.
 *
 * Fractions below are "per generated order":
 *   k  = 1 − cancel%                              (dispatched per generated order)
 *   dC = k × COD% × CDR                           (delivered COD per order)
 *   dP = k × PRE% × PDR                           (delivered prepaid per order)
 *   d  = dC + dP                                  (delivered per order)
 *   rC = k × COD% × (1 − CDR)                     (COD RTO per order)
 *   rP = k × PRE% × (1 − PDR)                     (prepaid failed per order)
 */
export function calculateUnitRates(i: Inputs) {
  const k = 1 - i.cancellationRate / 100;
  const cod = i.codPercentage / 100;
  const pre = 1 - cod;
  const cdr = i.codDeliveryRate / 100;
  const pdr = i.prepaidDeliveryRate / 100;
  const dC = k * cod * cdr;
  const dP = k * pre * pdr;
  return {
    dispatchedPerOrder: k,
    deliveredCodPerOrder: dC,
    deliveredPrepaidPerOrder: dP,
    deliveredPerOrder: dC + dP,
    codRtoPerOrder: k * cod * (1 - cdr),
    prepaidFailedPerOrder: k * pre * (1 - pdr),
  };
}

/**
 * Full calculation. Accepts raw or clean inputs; always sanitises first.
 * Returns a flat object of metrics. Money values are rounded to 2 decimals,
 * ratios to 4 significant decimals. Nothing returned is NaN or ±Infinity.
 */
export function calculateEcommerceProfitability(rawInputs?: RawInputs | null) {
  const i = sanitizeInputs(rawInputs);
  const f = calculateOrderFlow(i);
  const u = calculateUnitRates(i);

  // --- Revenue ------------------------------------------------------------
  // Only delivered orders produce revenue. RTO'd COD orders are never GMV.
  const codRevenue = f.deliveredCod * i.aov;
  const prepaidRevenue = f.deliveredPrepaid * i.aov;
  const deliveredGMV = codRevenue + prepaidRevenue;

  // --- Variable costs -----------------------------------------------------
  // Product cost: "delivered" assumes returned stock is restocked/reusable;
  // "dispatched" assumes every shipped unit is paid for (lost, damaged, or
  // supplier charges regardless of outcome).
  const cogsBase = i.productCostBasis === "dispatched" ? f.dispatchedOrders : f.deliveredOrders;
  const cogs = cogsBase * i.productCost;
  const adSpend = i.orders * i.advertisingCPA;
  const forwardShippingCost = f.dispatchedOrders * i.forwardShipping;
  // RTO shipping applies to every failed delivery, COD and prepaid alike.
  const codRtoCost = f.codRtoOrders * i.rtoShipping;
  const prepaidRtoCost = f.prepaidFailedOrders * i.rtoShipping;
  const rtoCost = codRtoCost + prepaidRtoCost;
  const fulfillmentCost = f.dispatchedOrders * i.fulfillmentCost;
  const codCharges = f.deliveredCod * i.codFee;
  const paymentGatewayFees = prepaidRevenue * (i.paymentGatewayPercentage / 100);
  const miscCost = f.dispatchedOrders * i.miscCost;
  // Optional tax: simplified as a % of delivered GMV (e.g. output GST when
  // prices are tax-inclusive). Actual treatment depends on jurisdiction.
  const taxCost = i.includeTax ? deliveredGMV * (i.taxPercentage / 100) : 0;

  const variableCostExAds = cogs + forwardShippingCost + rtoCost + fulfillmentCost +
    codCharges + paymentGatewayFees + miscCost + taxCost;
  const totalVariableCost = variableCostExAds + adSpend;
  const fixedCosts = i.fixedCosts;
  const totalCost = totalVariableCost + fixedCosts;

  // --- Profit -------------------------------------------------------------
  const contributionBeforeAds = deliveredGMV - variableCostExAds;   // "gross contribution"
  const contributionProfit = contributionBeforeAds - adSpend;        // after ads, before fixed
  const netProfit = contributionProfit - fixedCosts;

  // --- Break-even CPA -----------------------------------------------------
  // Contribution per GENERATED order before ads (c):
  //   c = AOV×d − PC×(d or k) − FS×k − RS×(rC+rP) − FC×k − CODF×dC
  //       − AOV×dP×PG − MISC×k − AOV×d×TAX
  // Net profit = O×(c − CPA) − FIXED = 0  ⇒  break-even CPA = c − FIXED/O
  // Fixed costs are spread across the entered monthly order volume.
  const cogsPerOrder = i.productCost * (i.productCostBasis === "dispatched" ? u.dispatchedPerOrder : u.deliveredPerOrder);
  const contributionPerOrderBeforeAds =
    i.aov * u.deliveredPerOrder
    - cogsPerOrder
    - i.forwardShipping * u.dispatchedPerOrder
    - i.rtoShipping * (u.codRtoPerOrder + u.prepaidFailedPerOrder)
    - i.fulfillmentCost * u.dispatchedPerOrder
    - i.codFee * u.deliveredCodPerOrder
    - i.aov * u.deliveredPrepaidPerOrder * (i.paymentGatewayPercentage / 100)
    - i.miscCost * u.dispatchedPerOrder
    - (i.includeTax ? i.aov * u.deliveredPerOrder * (i.taxPercentage / 100) : 0);
  const fixedPerOrder = safeDivide(fixedCosts, i.orders, 0);
  const hasOrders = i.orders > 0;
  const breakEvenCPA = hasOrders ? contributionPerOrderBeforeAds - fixedPerOrder : 0;
  const cpaHeadroom = hasOrders ? breakEvenCPA - i.advertisingCPA : 0;

  // --- ROAS ---------------------------------------------------------------
  // ROAS = delivered GMV ÷ ad spend.
  // Break-even ROAS = delivered GMV ÷ break-even ad spend, where break-even
  // ad spend = O × break-even CPA (the spend at which net profit = 0). This is
  // algebraically the same as GMV ÷ (GMV − all non-ad costs). If break-even
  // spend ≤ 0 the product cannot break even at any ad spend → no finite ROAS.
  const currentROAS = safeDivide(deliveredGMV, adSpend, 0);
  const breakEvenAdSpend = i.orders * breakEvenCPA;
  const breakEvenROAS = breakEvenAdSpend > 0 ? safeDivide(deliveredGMV, breakEvenAdSpend, 0) : 0;
  const canBreakEven = hasOrders && breakEvenCPA > 0 && deliveredGMV > 0;

  // --- Ratios -------------------------------------------------------------
  const netMargin = safeDivide(netProfit, deliveredGMV, 0) * 100;
  // ROI = net profit ÷ total cost (all variable + fixed costs, including ads).
  const roi = safeDivide(netProfit, totalCost, 0) * 100;
  const profitPerDeliveredOrder = safeDivide(netProfit, f.deliveredOrders, 0);
  const overallDeliveryRate = safeDivide(f.deliveredOrders, i.orders, 0) * 100;
  const revenuePerGeneratedOrder = safeDivide(deliveredGMV, i.orders, 0);
  const adCostPctOfRevenue = safeDivide(adSpend, deliveredGMV, 0) * 100;

  const status = getProfitabilityStatus(netProfit, netMargin, deliveredGMV, i.orders);

  return {
    inputs: i,
    // volumes (expected values)
    ordersGenerated: f.ordersGenerated,
    cancelledOrders: f.cancelledOrders,
    dispatchedOrders: f.dispatchedOrders,
    codOrders: f.codOrders,
    prepaidOrders: f.prepaidOrders,
    codDispatched: f.codDispatched,
    prepaidDispatched: f.prepaidDispatched,
    deliveredCod: f.deliveredCod,
    deliveredPrepaid: f.deliveredPrepaid,
    deliveredOrders: f.deliveredOrders,
    codRtoOrders: f.codRtoOrders,
    prepaidFailedOrders: f.prepaidFailedOrders,
    totalRtoOrders: f.totalRtoOrders,
    overallDeliveryRate: roundTo(overallDeliveryRate, 4),
    prepaidPercentage: roundTo(100 - i.codPercentage, 4),
    // revenue
    deliveredGMV: roundMoney(deliveredGMV),
    codRevenue: roundMoney(codRevenue),
    prepaidRevenue: roundMoney(prepaidRevenue),
    revenuePerGeneratedOrder: roundMoney(revenuePerGeneratedOrder),
    // costs
    cogs: roundMoney(cogs),
    adSpend: roundMoney(adSpend),
    forwardShippingCost: roundMoney(forwardShippingCost),
    codRtoCost: roundMoney(codRtoCost),
    prepaidRtoCost: roundMoney(prepaidRtoCost),
    rtoCost: roundMoney(rtoCost),
    fulfillmentCost: roundMoney(fulfillmentCost),
    codCharges: roundMoney(codCharges),
    paymentGatewayFees: roundMoney(paymentGatewayFees),
    miscCost: roundMoney(miscCost),
    taxCost: roundMoney(taxCost),
    fixedCosts: roundMoney(fixedCosts),
    totalVariableCost: roundMoney(totalVariableCost),
    totalCost: roundMoney(totalCost),
    // profit
    contributionBeforeAds: roundMoney(contributionBeforeAds),
    contributionProfit: roundMoney(contributionProfit),
    netProfit: roundMoney(netProfit),
    netMargin: roundTo(netMargin, 4),
    profitPerDeliveredOrder: roundMoney(profitPerDeliveredOrder),
    roi: roundTo(roi, 4),
    // advertising
    currentCPA: roundMoney(i.advertisingCPA),
    adCostPctOfRevenue: roundTo(adCostPctOfRevenue, 4),
    currentROAS: roundTo(currentROAS, 4),
    breakEvenCPA: roundMoney(breakEvenCPA),
    cpaHeadroom: roundMoney(cpaHeadroom),
    contributionPerOrderBeforeAds: roundMoney(contributionPerOrderBeforeAds),
    breakEvenAdSpend: roundMoney(breakEvenAdSpend),
    breakEvenROAS: roundTo(breakEvenROAS, 4),
    canBreakEven,
    status,
  };
}

export type CalcResult = ReturnType<typeof calculateEcommerceProfitability>;

/**
 * Neutral, threshold-based status. No promises, just maths.
 *   netProfit ≤ 0 and margin < −5%  → unprofitable
 *   |margin| < 5%                   → near break-even
 *   otherwise positive              → profitable
 */
export function getProfitabilityStatus(netProfit: number, netMargin: number, deliveredGMV: number, orders: number): Status {
  if (!(orders > 0) || !(deliveredGMV > 0)) {
    if (netProfit < 0) return { key: "unprofitable", label: "Currently unprofitable" };
    return { key: "empty", label: "Enter your numbers" };
  }
  if (Math.abs(netMargin) < NEAR_BREAKEVEN_MARGIN) return { key: "near", label: "Near break-even" };
  if (netProfit > 0) return { key: "profitable", label: "Profitable" };
  return { key: "unprofitable", label: "Currently unprofitable" };
}
