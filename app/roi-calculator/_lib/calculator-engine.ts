export type FieldKind = "count" | "money" | "percent";

export interface FieldSpec {
  def: number;
  min: number;
  max: number;
  kind: FieldKind;
}

export const FIELDS = {
  metaSpend: { def: 100000, min: 0, max: 1e11, kind: "money" },
  googleSpend: { def: 60000, min: 0, max: 1e11, kind: "money" },
  leads: { def: 500, min: 0, max: 1e9, kind: "count" },
  customers: { def: 25, min: 0, max: 1e9, kind: "count" },
  salesPeople: { def: 3, min: 0, max: 1e5, kind: "count" },
  salaryPerPerson: { def: 30000, min: 0, max: 1e9, kind: "money" },
  price: { def: 5000, min: 0, max: 1e10, kind: "money" },
  payments: { def: 6, min: 0, max: 1200, kind: "count" },
  officeCost: { def: 65000, min: 0, max: 1e11, kind: "money" },
} as const satisfies Record<string, FieldSpec>;

export type FieldName = keyof typeof FIELDS;
export const FIELD_NAMES = Object.keys(FIELDS) as FieldName[];
export const isPercent = (name: FieldName) => (FIELDS[name].kind as FieldKind) === "percent";
export const NEAR_BREAKEVEN_MARGIN = 5;
export type Inputs = Record<FieldName, number>;
export type RawInputs = Partial<Record<FieldName, unknown>>;
export type StatusKey = "profitable" | "near" | "unprofitable" | "empty";

export interface Status {
  key: StatusKey;
  label: string;
}

export function parseNumber(value: unknown): number {
  if (typeof value === "number") return value;
  if (value === null || value === undefined) return NaN;
  let input = String(value).trim();
  if (!input) return NaN;
  input = input.replace(/[\s,_]/g, "").replace(/[^0-9.\-eE+]/g, "");
  if (input === "" || input === "-" || input === ".") return NaN;
  return Number(input);
}

export function clamp(value: number, min: number, max: number, fallback: number): number {
  if (!Number.isFinite(value)) return fallback;
  return Math.min(max, Math.max(min, value));
}

export function safeDivide(numerator: number, denominator: number, fallback = 0): number {
  if (!Number.isFinite(numerator) || !Number.isFinite(denominator) || denominator === 0) return fallback;
  const result = numerator / denominator;
  return Number.isFinite(result) ? result : fallback;
}

export function roundTo(value: number, decimals: number): number {
  if (!Number.isFinite(value)) return 0;
  const sign = value < 0 ? -1 : 1;
  const shifted = Math.round(Number(Math.abs(value) + "e" + decimals));
  let result = sign * Number(shifted + "e-" + decimals);
  if (!Number.isFinite(result)) result = value;
  return Object.is(result, -0) ? 0 : result;
}

export function roundMoney(value: number): number {
  return roundTo(value, 2);
}

export interface FieldValidation {
  value: number;
  error: string | null;
}

export function validateField(name: FieldName, raw: unknown): FieldValidation {
  const spec = FIELDS[name] as FieldSpec;
  if (raw === "" || raw === null || raw === undefined) return { value: 0, error: null };
  const value = parseNumber(raw);
  if (!Number.isFinite(value)) return { value: 0, error: "Enter a number." };
  if (value < spec.min) return { value: spec.min, error: "Enter a value of 0 or more." };
  if (value > spec.max) return { value: spec.max, error: "That value is too large for this calculator." };
  return { value, error: null };
}

export function sanitizeInputs(raw?: RawInputs | null): Inputs {
  const clean = {} as Inputs;
  FIELD_NAMES.forEach((name) => {
    const spec = FIELDS[name] as FieldSpec;
    const rawValue = raw?.[name];
    const value = rawValue === "" || rawValue === null || rawValue === undefined ? 0 : parseNumber(rawValue);
    clean[name] = clamp(value, spec.min, spec.max, 0);
  });
  return clean;
}

export function getDefaultInputs(): Inputs {
  const defaults = {} as Inputs;
  FIELD_NAMES.forEach((name) => {
    defaults[name] = FIELDS[name].def;
  });
  return defaults;
}

export function calculateLeadGenROI(rawInputs?: RawInputs | null) {
  const inputs = sanitizeInputs(rawInputs);
  const adSpend = inputs.metaSpend + inputs.googleSpend;
  const salaries = inputs.salesPeople * inputs.salaryPerPerson;
  const totalCost = adSpend + salaries + inputs.officeCost;
  const customers = inputs.customers;
  const conversionRate = safeDivide(customers, inputs.leads) * 100;
  const revenuePerCustomer = inputs.price * inputs.payments;
  const revenue = customers * revenuePerCustomer;
  const firstMonthRevenue = customers * inputs.price * Math.min(1, inputs.payments);
  const profit = revenue - totalCost;
  const margin = safeDivide(profit, revenue) * 100;
  const roi = safeDivide(profit, totalCost) * 100;
  const costPerLead = safeDivide(adSpend, inputs.leads);
  const costPerCustomer = safeDivide(totalCost, customers);
  const breakEvenCustomers = safeDivide(totalCost, revenuePerCustomer);

  return {
    inputs,
    adSpend: roundMoney(adSpend),
    salaries: roundMoney(salaries),
    officeCost: roundMoney(inputs.officeCost),
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
    canBreakEven: revenuePerCustomer > 0,
    status: getProfitabilityStatus(profit, margin, revenue, totalCost),
  };
}

export type CalcResult = ReturnType<typeof calculateLeadGenROI>;

export function getProfitabilityStatus(profit: number, margin: number, revenue: number, totalCost: number): Status {
  if (!(revenue > 0)) {
    return totalCost > 0
      ? { key: "unprofitable", label: "Making a loss" }
      : { key: "empty", label: "Enter your numbers" };
  }
  if (Math.abs(margin) < NEAR_BREAKEVEN_MARGIN) return { key: "near", label: "Near break-even" };
  return profit > 0
    ? { key: "profitable", label: "Profitable" }
    : { key: "unprofitable", label: "Making a loss" };
}
