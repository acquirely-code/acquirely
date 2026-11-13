/**
 * Lead Generation ROI Calculator — calculation engine
 *
 * Pure functions only: no DOM access, no side effects. Imported by the
 * calculator UI and by tests/calculator-engine.test.ts.
 *
 * ---------------------------------------------------------------------------
 * SIMPLE MONTHLY MODEL
 * ---------------------------------------------------------------------------
 *   Monthly cost  = Meta Ads + Google Ads + sales salaries + office cost
 *   Customers     = entered directly (new customers from this month's leads)
 *   Revenue       = customers × price × times each customer pays
 *   Profit        = revenue − monthly cost
 *   ROI           = profit ÷ monthly cost × 100
 *
 * Revenue counts every payment the month's new customers will make (1 = a
 * one-time sale, 6 = six monthly payments). "This month" revenue counts only
 * the first payment.
 *
 * Every reported money value is rounded to paise/cents with decimal-safe
 * roundMoney(). Customer counts are kept as fractional expectations and only
 * rounded for display.
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
  metaSpend:       { def: 100000, min: 0, max: 1e11, kind: "money" },
  googleSpend:     { def: 60000,  min: 0, max: 1e11, kind: "money" },
  leads:           { def: 500,    min: 0, max: 1e9,  kind: "count" },
  customers:       { def: 25,     min: 0, max: 1e9,  kind: "count" },
  salesPeople:     { def: 3,      min: 0, max: 1e5,  kind: "count" },
  salaryPerPerson: { def: 30000,  min: 0, max: 1e9,  kind: "money" },
  price:           { def: 5000,   min: 0, max: 1e10, kind: "money" },
  payments:        { def: 6,      min: 0, max: 1200, kind: "count" },
  officeCost:      { def: 65000,  min: 0, max: 1e11, kind: "money" },
} as const satisfies Record<string, FieldSpec>;

export type FieldName = keyof typeof FIELDS;
export const FIELD_NAMES = Object.keys(FIELDS) as FieldName[];
/** True for % fields. Widened so it still type-checks while no field is a percentage. */
export const isPercent = (name: FieldName) => (FIELDS[name].kind as FieldKind) === "percent";

export const NEAR_BREAKEVEN_MARGIN = 5; // % of revenue; |margin| below this = "near break-even"

/** Clean, fully-populated inputs as used by the model. */
export type Inputs = Record<FieldName, number>;

/** Anything the engine will accept: strings, numbers, missing keys. */
export type RawInputs = Partial<Record<FieldName, unknown>>;

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
  return clean;
}

/** Example values shown on first load and on "Reset to example". */
export function getDefaultInputs(): Inputs {
  const d = {} as Inputs;
  FIELD_NAMES.forEach((k) => { d[k] = FIELDS[k].def; });
  return d;
}

// ---------------------------------------------------------------------------
// Core model
// ---------------------------------------------------------------------------

/**
 * Full calculation. Accepts raw or clean inputs; always sanitises first.
 * Nothing returned is NaN or ±Infinity.
 */
export function calculateLeadGenROI(rawInputs?: RawInputs | null) {
  const i = sanitizeInputs(rawInputs);

  // --- Monthly cost -------------------------------------------------------
  const adSpend = i.metaSpend + i.googleSpend;
  const salaries = i.salesPeople * i.salaryPerPerson;
  const totalCost = adSpend + salaries + i.officeCost;

  // --- Customers & revenue ------------------------------------------------
  const customers = i.customers;
  // Shown back to the user as "that's X% of your leads"; can exceed 100% if mistyped.
  const conversionRate = safeDivide(customers, i.leads, 0) * 100;
  const revenuePerCustomer = i.price * i.payments;
  const revenue = customers * revenuePerCustomer;
  const firstMonthRevenue = customers * i.price * Math.min(1, i.payments);

  // --- Profit -------------------------------------------------------------
  const profit = revenue - totalCost;
  const margin = safeDivide(profit, revenue, 0) * 100;
  const roi = safeDivide(profit, totalCost, 0) * 100;

  // --- Per lead / customer ------------------------------------------------
  const costPerLead = safeDivide(adSpend, i.leads, 0);
  const costPerCustomer = safeDivide(totalCost, customers, 0);
  // Customers needed each month for revenue to cover the month's cost.
  const breakEvenCustomers = safeDivide(totalCost, revenuePerCustomer, 0);
  const canBreakEven = revenuePerCustomer > 0;

  return {
    inputs: i,
    adSpend: roundMoney(adSpend),
    salaries: roundMoney(salaries),
    officeCost: roundMoney(i.officeCost),
    totalCost: roundMoney(totalCost),
    customers,
    conversionRate: roundTo(conversionRate, 4),
    revenuePerCustomer: roundMoney(revenuePerCustomer),
    revenue: roundMoney(revenue),
    firstMonthRevenue: roundMoney(firstMonthRevenue),
    profit: roundMoney(profit),
    margin: roundTo(margin, 4),
    roi: roundTo(roi, 4),
    costPerLead: roundMoney(costPerLead),
    costPerCustomer: roundMoney(costPerCustomer),
    breakEvenCustomers: roundTo(breakEvenCustomers, 4),
    canBreakEven,
    status: getProfitabilityStatus(profit, margin, revenue, totalCost),
  };
}

export type CalcResult = ReturnType<typeof calculateLeadGenROI>;

/**
 * Neutral, threshold-based status. No promises, just maths.
 *   |margin| < 5%       → near break-even
 *   otherwise positive  → profitable
 */
export function getProfitabilityStatus(profit: number, margin: number, revenue: number, totalCost: number): Status {
  if (!(revenue > 0)) {
    if (totalCost > 0) return { key: "unprofitable", label: "Making a loss" };
    return { key: "empty", label: "Enter your numbers" };
  }
  if (Math.abs(margin) < NEAR_BREAKEVEN_MARGIN) return { key: "near", label: "Near break-even" };
  if (profit > 0) return { key: "profitable", label: "Profitable" };
  return { key: "unprofitable", label: "Making a loss" };
}
