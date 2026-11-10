// "Lead Quality Audit Application" form on /lead-gen. Shared by the form and the API route so both apply the
// same validation and the same qualify/reject rules. Safe to import from the browser.

export const REVENUE_OPTIONS = ["Under ₹10L", "₹10L – ₹50L", "₹50L – ₹2Cr", "₹2Cr+"] as const;
export const AD_SPEND_OPTIONS = ["Not running ads yet", "Under ₹1L", "₹1L – ₹5L", "₹5L+"] as const;
export const PROBLEM_OPTIONS = ["Not enough leads", "Leads are junk / don't close", "Cost per lead is too high"] as const;
export const BUDGET_OPTIONS = ["Yes, that works", "Need to think about it", "Not right now"] as const;

export const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "utm_id"] as const;

export const BUDGET_QUESTION = "Our engagements start at ₹75,000 + GST/month, plus your ad spend. Does that work for you?";

// Country codes offered in the phone field. India first and default.
export const COUNTRY_CODES = [
  { code: "+91", label: "🇮🇳 +91" },
  { code: "+971", label: "🇦🇪 +971" },
  { code: "+1", label: "🇺🇸 +1" },
  { code: "+44", label: "🇬🇧 +44" },
  { code: "+65", label: "🇸🇬 +65" },
  { code: "+61", label: "🇦🇺 +61" },
  { code: "+966", label: "🇸🇦 +966" },
  { code: "+974", label: "🇶🇦 +974" },
] as const;

export type AuditFields = {
  name: string;
  email: string;
  countryCode: string;
  phone: string;
  website: string;
  revenue: string;
  adSpend: string;
  problem: string;
  budget: string;
};

export type AuditFieldName = keyof AuditFields;
export type AuditFieldErrors = Partial<Record<AuditFieldName, string>>;

// qualified: show the booking calendar. rejected: polite thank-you. nurture: matched neither rule (e.g. "Need to
// think about it"), so it gets the default thank-you, same as a Zoho form with no matching rule.
export type AuditOutcome = "qualified" | "nurture" | "rejected";

// Value (INR) sent with the Meta Lead and GA4 generate_lead events for each bucket.
export const LEAD_VALUE_INR: Record<AuditOutcome, number> = { qualified: 1000, nurture: 200, rejected: 0 };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const CONTROL_RE = /[\u0000-\u001f\u007f]/;
// A bare domain or a URL: "yourcompany.com", "www.yourcompany.co.in", "https://yourcompany.com/about".
const WEBSITE_RE = /^(https?:\/\/)?([a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}(:\d{1,5})?(\/\S*)?$/i;

const str = (value: unknown) => (typeof value === "string" ? value.trim() : "");

// Digits only. For +91, strips a pasted leading 0 or 91 so "098765 43210" and "+91 98765 43210" both work.
export function normalizePhone(raw: string, countryCode: string): string {
  let digits = raw.replace(/\D/g, "");
  if (countryCode === "+91") {
    if (digits.length === 12 && digits.startsWith("91")) digits = digits.slice(2);
    if (digits.length === 11 && digits.startsWith("0")) digits = digits.slice(1);
  }
  return digits;
}

function phoneError(phone: string, countryCode: string): string | undefined {
  if (!COUNTRY_CODES.some((c) => c.code === countryCode)) return "Please choose a country code.";
  if (countryCode === "+91") return /^[6-9]\d{9}$/.test(phone) ? undefined : "Enter a 10-digit mobile number starting with 6-9.";
  return /^\d{6,14}$/.test(phone) ? undefined : "Enter a valid phone number.";
}

const choice = (options: readonly string[], message: string) => (v: unknown) => (typeof v === "string" && options.includes(v) ? undefined : message);

const rules: { [K in AuditFieldName]: (value: unknown, all: Record<string, unknown>) => string | undefined } = {
  name: (v) => {
    const s = str(v);
    return s.length >= 2 && s.length <= 120 && !CONTROL_RE.test(s) ? undefined : "Please enter your full name.";
  },
  email: (v) => {
    const s = str(v);
    return s.length <= 254 && EMAIL_RE.test(s) ? undefined : "Enter a valid email address.";
  },
  countryCode: (v) => (COUNTRY_CODES.some((c) => c.code === v) ? undefined : "Please choose a country code."),
  phone: (v, all) => phoneError(normalizePhone(str(v), str(all.countryCode)), str(all.countryCode)),
  website: (v) => {
    const s = str(v);
    return s.length <= 300 && WEBSITE_RE.test(s) ? undefined : "Enter your company website, e.g. yourcompany.com.";
  },
  revenue: choice(REVENUE_OPTIONS, "Please choose your monthly revenue."),
  adSpend: choice(AD_SPEND_OPTIONS, "Please choose your current monthly ad spend."),
  problem: choice(PROBLEM_OPTIONS, "Please choose the main problem."),
  budget: choice(BUDGET_OPTIONS, "Please choose an answer."),
};

export const AUDIT_FIELD_ORDER = Object.keys(rules) as AuditFieldName[];

export function validateAuditField(name: AuditFieldName, all: Record<string, unknown>) {
  return rules[name](all[name], all);
}

export function validateAudit(input: Record<string, unknown>): { data: AuditFields | null; errors: AuditFieldErrors } {
  const errors: AuditFieldErrors = {};
  for (const name of AUDIT_FIELD_ORDER) {
    const error = rules[name](input[name], input);
    if (error) errors[name] = error;
  }
  if (Object.keys(errors).length) return { data: null, errors };
  const countryCode = str(input.countryCode);
  return {
    data: {
      name: str(input.name),
      email: str(input.email).toLowerCase(),
      countryCode,
      phone: normalizePhone(str(input.phone), countryCode),
      website: str(input.website),
      revenue: str(input.revenue),
      adSpend: str(input.adSpend),
      problem: str(input.problem),
      budget: str(input.budget),
    },
    errors,
  };
}

// Same rules as the Zoho form.
// Rejected if ANY: budget "Not right now", revenue "Under ₹10L", ad spend "Not running ads yet".
// Qualified if ALL: budget "Yes, that works", revenue not "Under ₹10L", ad spend "₹1L – ₹5L" or "₹5L+".
export function qualifyAudit(lead: Pick<AuditFields, "revenue" | "adSpend" | "budget">): AuditOutcome {
  if (lead.budget === "Not right now" || lead.revenue === "Under ₹10L" || lead.adSpend === "Not running ads yet") return "rejected";
  if (lead.budget === "Yes, that works" && lead.revenue !== "Under ₹10L" && (lead.adSpend === "₹1L – ₹5L" || lead.adSpend === "₹5L+")) return "qualified";
  return "nurture";
}
