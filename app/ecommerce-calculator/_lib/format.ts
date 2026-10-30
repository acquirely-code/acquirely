/**
 * Currency & number formatting (display only; no conversion is performed).
 */
import { roundMoney } from "./calculator-engine";

export const CURRENCIES = {
  INR: { label: "INR ₹", symbol: "₹", locale: "en-IN", name: "rupees", indian: true },
  USD: { label: "USD $", symbol: "$", locale: "en-US", name: "US dollars", indian: false },
  GBP: { label: "GBP £", symbol: "£", locale: "en-GB", name: "pounds", indian: false },
  AED: { label: "AED د.إ", symbol: "AED ", locale: "en-US", name: "UAE dirhams", indian: false }, // Latin code avoids RTL reordering of د.إ next to digits
  EUR: { label: "EUR €", symbol: "€", locale: "en-IE", name: "euros", indian: false },
} as const;

export type CurrencyCode = keyof typeof CURRENCIES;
export const DEFAULT_CURRENCY: CurrencyCode = "INR";

export function isCurrencyCode(code: unknown): code is CurrencyCode {
  return typeof code === "string" && Object.prototype.hasOwnProperty.call(CURRENCIES, code);
}

export const MINUS = "−";

const nfCache: Record<string, Intl.NumberFormat> = {};
function nf(locale: string, maxFrac: number, minFrac = 0) {
  const key = locale + "|" + maxFrac + "|" + minFrac;
  return (nfCache[key] ??= new Intl.NumberFormat(locale, { maximumFractionDigits: maxFrac, minimumFractionDigits: minFrac }));
}

export type Formatter = ReturnType<typeof createFormatter>;

/** All formatters for one currency. Values are grouped Indian-style (lakh/crore) for INR. */
export function createFormatter(code: CurrencyCode) {
  const cur = CURRENCIES[code];

  function groupNumber(n: number, maxFrac: number, minFrac = 0) {
    return nf(cur.locale, maxFrac, minFrac).format(n);
  }

  /** ₹1,50,000 / −₹2,300. decimals: 0 for totals, 2 for per-order values. */
  function money(n: number, decimals = 0, ascii = false) {
    if (!isFinite(n)) n = 0;
    const abs = Math.abs(n);
    const minFrac = decimals && abs % 1 !== 0 ? 2 : 0;
    const s = cur.symbol + groupNumber(decimals ? roundMoney(abs) : Math.round(abs), decimals, minFrac);
    if (Math.round(abs * (decimals ? 100 : 1)) === 0) return s; // no "−₹0"
    return n < 0 ? (ascii ? "-" : MINUS) + s : s;
  }

  /** Compact for cards so huge values never overflow: ₹12.5 Cr, $1.25M. */
  function moneyCompact(n: number) {
    const abs = Math.abs(n), sign = n < 0 ? MINUS : "";
    if (cur.indian && abs >= 1e7) return sign + cur.symbol + nf("en-IN", 2).format(abs / 1e7) + " Cr";
    if (!cur.indian && abs >= 1e9) return sign + cur.symbol + nf(cur.locale, 2).format(abs / 1e9) + "B";
    if (!cur.indian && abs >= 1e7) return sign + cur.symbol + nf(cur.locale, 2).format(abs / 1e6) + "M";
    return money(n, 0);
  }

  return {
    code,
    symbol: cur.symbol.trim(),
    name: cur.name,
    groupNumber,
    money,
    moneyCompact,
    count: (n: number) => groupNumber(Math.abs(n) < 100 ? Math.round(n * 10) / 10 : Math.round(n), 1),
    pct,
    x,
  };
}

export function pct(n: number) {
  return (n < 0 ? MINUS : "") + nf("en-US", 1, 1).format(Math.abs(n)) + "%";
}

export function x(n: number) {
  return nf("en-US", 2, 2).format(n) + "x";
}

export type Sign = "neg" | "pos" | "zero";
export function signOf(n: number): Sign {
  return n < -0.004 ? "neg" : n > 0.004 ? "pos" : "zero";
}
