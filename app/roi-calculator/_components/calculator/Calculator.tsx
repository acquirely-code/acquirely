"use client";

/**
 * Lead Generation ROI Calculator: UI layer.
 * All business logic lives in _lib/calculator-engine.ts. This component only
 * holds input text, formats numbers and renders results.
 */
import { useEffect, useMemo, useRef, useState } from "react";
import { flushSync } from "react-dom";
import {
  FIELD_NAMES,
  calculateLeadGenROI,
  getDefaultInputs,
  isPercent,
  parseNumber,
  roundTo,
  validateField,
  type CalcResult,
  type FieldName,
  type Inputs,
} from "@/app/roi-calculator/_lib/calculator-engine";
import { CURRENCIES, DEFAULT_CURRENCY, MINUS, createFormatter, isCurrencyCode, pct, signOf, type CurrencyCode, type Formatter } from "@/app/ecommerce-calculator/_lib/format";
import { track, trackOnce } from "@/app/ecommerce-calculator/_lib/analytics";
import { PAGE_URL, SITE_NAME } from "@/app/roi-calculator/_lib/site";
import { Field, type FieldHandlers } from "./Field";
import { ResultsPanel } from "./ResultsPanel";
import { Breakdown } from "./Breakdown";

type Texts = Record<FieldName, string>;
type Errors = Partial<Record<FieldName, string | null>>;

/** Quick picks for "How many times does a customer pay?". */
const PAYMENT_PRESETS = [
  { n: 1, label: "One-time" },
  { n: 3, label: "3 months" },
  { n: 6, label: "6 months" },
  { n: 12, label: "1 year" },
  { n: 24, label: "2 years" },
];

/** Show an input value formatted (grouping for money/counts, plain for %). */
function displayValue(name: FieldName, n: number, f: Formatter) {
  if (!isFinite(n)) return "";
  if (isPercent(name)) return String(roundTo(n, 4));
  return f.groupNumber(n, 2);
}

function textsFrom(values: Inputs, f: Formatter): Texts {
  const t = {} as Texts;
  FIELD_NAMES.forEach((name) => { t[name] = displayValue(name, values[name], f); });
  return t;
}

/**
 * Shared links (?metaSpend=100000&leads=500…). Values are validated on the way
 * in and only whitelisted keys are read; canonical stays the clean URL.
 */
function loadFromQuery(): { values: Inputs; currency: CurrencyCode | null } | null {
  let params: URLSearchParams;
  try { params = new URLSearchParams(window.location.search); } catch { return null; }
  let found = false;
  const values = getDefaultInputs();
  FIELD_NAMES.forEach((name) => {
    const raw = params.get(name);
    if (raw === null) return;
    const res = validateField(name, raw.slice(0, 32));
    if (res.error === "Enter a number.") return; // junk value: keep the example value
    values[name] = res.value;
    found = true;
  });
  const c = params.get("currency");
  const currency = isCurrencyCode(c) ? c : null;
  if (currency) found = true;
  return found ? { values, currency } : null;
}

function copyText(text: string): Promise<void> {
  if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
  return new Promise((resolve, reject) => {
    const ta = document.createElement("textarea");
    ta.value = text; ta.setAttribute("readonly", ""); ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.select();
    try { if (document.execCommand("copy")) resolve(); else reject(); } catch (e) { reject(e); }
    document.body.removeChild(ta);
  });
}

function buildSummary(r: CalcResult, f: Formatter) {
  const m = (n: number) => f.money(n, 0, true);
  return [
    "ROI Calculator for Business Owners (per month)",
    "Total cost: " + m(r.totalCost) + " (ads " + m(r.adSpend) + ", salaries " + m(r.salaries) + ", office " + m(r.officeCost) + ")",
    "Leads: " + f.count(r.inputs.leads) + " | New customers: " + f.count(r.customers),
    "Revenue: " + m(r.revenue),
    "Profit: " + m(r.profit),
    "ROI: " + pct(r.roi).replace(MINUS, "-"),
    "Cost per customer: " + m(r.costPerCustomer),
    "",
    "Calculated using " + SITE_NAME + ":",
    PAGE_URL,
  ].join("\n");
}

const printDateText = () =>
  "Lead generation ROI estimate · Calculated on " +
  new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" }) + " · " + PAGE_URL;

const INITIAL_TEXTS = textsFrom(getDefaultInputs(), createFormatter(DEFAULT_CURRENCY));

export function Calculator() {
  const [currency, setCurrency] = useState<CurrencyCode>(DEFAULT_CURRENCY);
  const [texts, setTexts] = useState<Texts>(INITIAL_TEXTS);
  const [errors, setErrors] = useState<Errors>({});
  const [sharedNotice, setSharedNotice] = useState(false);
  const [actionStatus, setActionStatus] = useState("");
  const [liveSummary, setLiveSummary] = useState("");
  const [announceTick, setAnnounceTick] = useState(0);
  const [printDate, setPrintDate] = useState("");
  const [mbarReady, setMbarReady] = useState(false);
  const [mbarAway, setMbarAway] = useState(true);

  const f = useMemo(() => createFormatter(currency), [currency]);
  const sectionRef = useRef<HTMLElement>(null);
  const resultsRef = useRef<HTMLElement>(null);
  const statusTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  // The engine is a handful of arithmetic operations, so recalculating on every
  // keystroke keeps results instant without hurting INP.
  const r = useMemo(() => {
    const raw: Record<string, unknown> = {};
    FIELD_NAMES.forEach((name) => { raw[name] = validateField(name, texts[name]).value; });
    return calculateLeadGenROI(raw);
  }, [texts]);

  function applyValues(values: Inputs, fmt: Formatter) {
    setTexts(textsFrom(values, fmt));
    setErrors({});
  }

  // Debounced, concise screen-reader summary (not every number, not every keystroke).
  // React 18 has no useEffectEvent: keep the latest summary in a ref so the timer reads current results.
  const summaryRef = useRef("");
  summaryRef.current = "Results updated. " + r.status.label + ". Profit " + f.money(r.profit, 0) + ", ROI " + pct(r.roi) + ".";
  useEffect(() => {
    if (!announceTick) return;
    const t = setTimeout(() => setLiveSummary(summaryRef.current), 1400);
    return () => clearTimeout(t);
  }, [announceTick]);
  const userChanged = () => {
    trackOnce("calculator_started");
    setAnnounceTick((n) => n + 1);
  };

  // Action feedback ("Copied", etc.) via the role=status element.
  function status(msg: string) {
    setActionStatus(msg);
    clearTimeout(statusTimer.current);
    statusTimer.current = setTimeout(() => setActionStatus(""), 4000);
  }

  // Shared link: read once on mount. The server-rendered page shows the example values.
  useEffect(() => {
    const shared = loadFromQuery();
    if (!shared) return;
    const code = shared.currency ?? DEFAULT_CURRENCY;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time sync from the URL, which the server can't see
    setCurrency(code);
    applyValues(shared.values, createFormatter(code));
    setSharedNotice(true);
  }, []);

  useEffect(() => {
    const before = () => flushSync(() => setPrintDate(printDateText()));
    window.addEventListener("beforeprint", before);
    return () => window.removeEventListener("beforeprint", before);
  }, []);

  // Mobile results bar: shown below 1024px (CSS) while the calculator is on
  // screen but the results panel isn't.
  useEffect(() => {
    const section = sectionRef.current, results = resultsRef.current;
    if (!section || !results) return;
    const inView = (node: Element) => {
      const b = node.getBoundingClientRect();
      return b.top < window.innerHeight && b.bottom > 0;
    };
    // Scroll events already fire at most once per frame; this reads two rects.
    const update = () => setMbarAway(inView(results) || !inView(section));
    setMbarReady(true);
    document.body.classList.add("has-mbar");
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    update();
    return () => {
      document.body.classList.remove("has-mbar");
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  // ---------------------------------------------------------------------------
  // Field events
  // ---------------------------------------------------------------------------
  const setError = (name: FieldName, error: string | null) => setErrors((e) => ({ ...e, [name]: error }));

  const handlers: FieldHandlers = {
    // While typing, half-finished values like "12." or "-" don't flash an error; on blur they do.
    onChange(name, value) {
      setTexts((t) => ({ ...t, [name]: value }));
      const partial = /^\s*[-.]?\s*$/.test(value) && value.trim() !== "";
      setError(name, partial ? null : validateField(name, value).error);
      userChanged();
      trackOnce("calculator_input_changed", { field: name }, "changed:" + name);
    },
    // Reformat with grouping on blur only, so the caret never jumps while typing.
    onBlur(name) {
      const raw = texts[name];
      if (raw.trim() === "") { setError(name, null); return; }
      const res = validateField(name, raw);
      setError(name, res.error);
      if (!res.error) setTexts((t) => ({ ...t, [name]: displayValue(name, res.value, f) }));
    },
  };
  const field = (name: FieldName) => ({ name, value: texts[name], error: errors[name], f, ...handlers });

  function onCurrencyChange(code: string) {
    const next = isCurrencyCode(code) ? code : DEFAULT_CURRENCY;
    const nf = createFormatter(next);
    setCurrency(next);
    // Re-group money inputs in the new style (e.g. 1,50,000 → 150,000).
    setTexts((t) => {
      const out = { ...t };
      FIELD_NAMES.forEach((name) => {
        if (isPercent(name) || t[name].trim() === "") return;
        const n = parseNumber(t[name]);
        if (isFinite(n)) out[name] = displayValue(name, n, nf);
      });
      return out;
    });
    track("calculator_currency_changed", { currency: next });
  }

  function resetExample() {
    applyValues(getDefaultInputs(), f);
    setSharedNotice(false);
    setAnnounceTick((n) => n + 1);
    status("Example values restored.");
    track("calculator_reset", { type: "example" });
  }

  function clearAll() {
    setTexts(Object.fromEntries(FIELD_NAMES.map((n) => [n, ""])) as Texts);
    setErrors({});
    document.getElementById("metaSpend")?.focus();
    setAnnounceTick((n) => n + 1);
    status("All fields cleared.");
    track("calculator_reset", { type: "clear" });
  }

  function onCopy() {
    copyText(buildSummary(r, f)).then(
      () => status("Results copied to clipboard."),
      () => status("Couldn't copy automatically."),
    );
    track("calculator_results_copied");
  }

  function buildShareUrl() {
    const params = new URLSearchParams();
    FIELD_NAMES.forEach((name) => {
      params.set(name, String(roundTo(validateField(name, texts[name]).value, 4)));
    });
    if (currency !== DEFAULT_CURRENCY) params.set("currency", currency);
    // Use the page's own location so the link also works on staging/local.
    return window.location.origin + window.location.pathname + "?" + params.toString();
  }

  function onShare() {
    const url = buildShareUrl();
    track("calculator_share_clicked");
    if (typeof navigator.share === "function" && window.matchMedia("(pointer: coarse)").matches) {
      navigator.share({ title: "Lead generation ROI estimate", url }).catch(() => {});
      return;
    }
    copyText(url).then(
      () => status("Link with your numbers copied."),
      () => status("Couldn't copy the link automatically."),
    );
  }

  function onPrint() {
    flushSync(() => setPrintDate(printDateText()));
    track("calculator_printed");
    window.print();
  }

  const paymentsValue = validateField("payments", texts.payments).value;

  return (
    <section className="calc-section" id="calculator" aria-labelledby="calc-title" ref={sectionRef}>
      <div className="wrap">
        <div className="calc-head">
          <div>
            <h2 id="calc-title">Calculate Your Business ROI</h2>
            <p>Fill in your monthly numbers. Results update as you type.</p>
          </div>
          <div className="toolbar">
            <label htmlFor="currency">Currency</label>
            <select id="currency" className="select" aria-describedby="currency-help" value={currency} onChange={(e) => onCurrencyChange(e.target.value)}>
              {Object.entries(CURRENCIES).map(([code, c]) => <option key={code} value={code}>{c.label}</option>)}
            </select>
            <span id="currency-help" className="sr-only">Changes the currency symbol and number format only. No conversion is applied.</span>
            <button type="button" className="btn btn-ghost btn-sm" onClick={resetExample}>Reset</button>
            <button type="button" className="btn btn-ghost btn-sm" onClick={clearAll}>Clear all</button>
          </div>
        </div>

        <p className="notice" hidden={!sharedNotice}>
          You&apos;re viewing numbers from a shared link.{" "}
          <button type="button" className="linkish" onClick={resetExample}>Reset to example values</button>
        </p>

        <noscript><p className="notice">The calculator needs JavaScript to work.</p></noscript>

        <p className="print-only">{printDate}</p>

        <div className="calc-grid">
          {/* ============ INPUTS ============ */}
          <form className="panel" aria-labelledby="inputs-title" noValidate autoComplete="off" onSubmit={(e) => e.preventDefault()}>
            <div className="panel-title">
              <h3 id="inputs-title">Your Numbers</h3>
              <span className="pill">Example values</span>
            </div>

            <fieldset>
              <legend>1 · Marketing cost</legend>
              <div className="fields">
                <Field {...field("metaSpend")} label="Meta Ads (per month)" />
                <Field {...field("googleSpend")} label="Google Ads (per month)" />
                <Field {...field("leads")} label="Leads you get (per month)" suffix="leads" />
                <Field
                  {...field("customers")}
                  label="Leads that become customers"
                  suffix="customers"
                  help={r.inputs.leads > 0 && r.customers > 0
                    ? (r.customers > r.inputs.leads
                      ? "This is more than your leads. Please check the numbers."
                      : <>That&apos;s <strong>{pct(r.conversionRate).replace(".0%", "%")}</strong> of your leads.</>)
                    : "How many of these leads paid you?"}
                />
              </div>
            </fieldset>

            <fieldset>
              <legend>2 · Sales team</legend>
              <div className="fields">
                <Field {...field("salesPeople")} label="Number of salespeople" suffix="people" />
                <Field {...field("salaryPerPerson")} label="Salary per person (per month)" />
              </div>
            </fieldset>

            <fieldset>
              <legend>3 · Service or product price</legend>
              <div className="fields">
                <Field {...field("price")} label="Price" help="What a customer pays each time." />
              </div>
            </fieldset>

            <fieldset>
              <legend>4 · How many times the customer pays</legend>
              <div className="fields">
                <Field
                  {...field("payments")}
                  className="wide"
                  label="How many times does a customer pay you?"
                  suffix="times"
                  help={paymentsValue > 0 && r.inputs.price > 0
                    ? <>Each customer pays <strong>{f.money(r.inputs.price, 0)} × {f.count(paymentsValue)} = {f.money(r.revenuePerCustomer, 0)}</strong> in total.</>
                    : "Pick an option or type your own number."}
                >
                  <div className="segmented" role="group" aria-label="Quick picks">
                    {PAYMENT_PRESETS.map((p) => (
                      <button key={p.n} type="button" aria-pressed={paymentsValue === p.n} onClick={() => handlers.onChange("payments", String(p.n))}>
                        <b>{p.n}×</b><small>{p.label}</small>
                      </button>
                    ))}
                  </div>
                </Field>
              </div>
            </fieldset>

            <fieldset>
              <legend>5 · In-house office cost</legend>
              <div className="fields">
                <Field {...field("officeCost")} label="Office cost (per month)" help="Rent, electricity, internet, software and other office bills." />
              </div>
            </fieldset>
          </form>

          {/* ============ RESULTS ============ */}
          <ResultsPanel r={r} f={f} panelRef={resultsRef} actionStatus={actionStatus} onCopy={onCopy} onShare={onShare} onPrint={onPrint} />
        </div>

        {/* Polite, debounced summary for screen readers */}
        <p className="sr-only" aria-live="polite" aria-atomic="true">{liveSummary}</p>

        <Breakdown r={r} f={f} />
      </div>

      {/* Mobile results bar (below 1024px). Hidden while the results panel is on screen. */}
      <div className={"mbar" + (mbarAway ? " away" : "")} hidden={!mbarReady}>
        <div>
          <span className="m-k">{r.profit < 0 ? "Loss" : "Profit"} · <span>{pct(r.roi)}</span> ROI</span>
          <span className="m-v" data-sign={signOf(r.profit)}>{f.moneyCompact(r.profit)}</span>
        </div>
        <a className="btn btn-sm" href="#results">View results</a>
      </div>
    </section>
  );
}
