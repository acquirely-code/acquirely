"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { flushSync } from "react-dom";
import {
  FIELD_NAMES,
  FIELDS,
  calculateLeadGenROI,
  getDefaultInputs,
  isPercent,
  parseNumber,
  roundTo,
  validateField,
  type CalcResult,
  type FieldName,
  type Inputs,
} from "../_lib/calculator-engine";
import {
  CURRENCIES,
  DEFAULT_CURRENCY,
  MINUS,
  createFormatter,
  isCurrencyCode,
  pct,
  signOf,
  type CurrencyCode,
  type Formatter,
} from "@/app/ecommerce-calculator/_lib/format";
import { track, trackOnce } from "@/app/ecommerce-calculator/_lib/analytics";

type Texts = Record<FieldName, string>;
type Errors = Partial<Record<FieldName, string | null>>;

const PAYMENT_PRESETS = [
  { value: 1, label: "One-time" },
  { value: 3, label: "3 months" },
  { value: 6, label: "6 months" },
  { value: 12, label: "1 year" },
  { value: 24, label: "2 years" },
];

function displayValue(name: FieldName, value: number, formatter: Formatter) {
  if (!Number.isFinite(value)) return "";
  return isPercent(name) ? String(roundTo(value, 4)) : formatter.groupNumber(value, 2);
}

function textsFrom(values: Inputs, formatter: Formatter): Texts {
  const texts = {} as Texts;
  FIELD_NAMES.forEach((name) => {
    texts[name] = displayValue(name, values[name], formatter);
  });
  return texts;
}

function loadFromQuery(): { values: Inputs; currency: CurrencyCode | null } | null {
  const params = new URLSearchParams(window.location.search);
  const values = getDefaultInputs();
  let found = false;

  FIELD_NAMES.forEach((name) => {
    const raw = params.get(name);
    if (raw === null) return;
    const parsed = validateField(name, raw.slice(0, 32));
    if (parsed.error === "Enter a number.") return;
    values[name] = parsed.value;
    found = true;
  });

  const rawCurrency = params.get("currency");
  const currency = isCurrencyCode(rawCurrency) ? rawCurrency : null;
  return found || currency ? { values, currency } : null;
}

function copyText(text: string): Promise<void> {
  if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  try {
    if (!document.execCommand("copy")) return Promise.reject(new Error("Clipboard copy was not available."));
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  } finally {
    document.body.removeChild(textarea);
  }
}

function summaryText(result: CalcResult, formatter: Formatter) {
  return [
    "ROI Calculator for Business Owners",
    `Total cost: ${formatter.money(result.totalCost)} (ads ${formatter.money(result.adSpend)}, salaries ${formatter.money(result.salaries)}, office ${formatter.money(result.officeCost)})`,
    `Leads: ${formatter.count(result.inputs.leads)} | New customers: ${formatter.count(result.customers)}`,
    `Revenue: ${formatter.money(result.revenue)}`,
    `Profit: ${formatter.money(result.profit)}`,
    `ROI: ${pct(result.roi).replace(MINUS, "-")}`,
    `Cost per customer: ${formatter.money(result.costPerCustomer)}`,
    "",
    `https://acquirely.in/roi-calculator`,
  ].join("\n");
}

function Field({
  name,
  label,
  value,
  error,
  formatter,
  onChange,
  onBlur,
  help,
  suffix,
  children,
}: {
  name: FieldName;
  label: string;
  value: string;
  error?: string | null;
  formatter: Formatter;
  onChange: (name: FieldName, value: string) => void;
  onBlur: (name: FieldName) => void;
  help?: React.ReactNode;
  suffix?: string;
  children?: React.ReactNode;
}) {
  const kind = FIELDS[name].kind;
  return (
    <div className={`field${error ? " invalid" : ""}`}>
      <label htmlFor={name}>
        {label} {kind === "money" && <span className="sr-only">in {formatter.name}</span>}
      </label>
      <div className="control">
        {kind === "money" && <span className="affix pre" aria-hidden="true">{formatter.symbol}</span>}
        <input
          id={name}
          name={name}
          type="text"
          inputMode={kind === "count" ? "numeric" : "decimal"}
          value={value}
          aria-describedby={`${name}-help ${name}-err`}
          aria-invalid={error ? true : undefined}
          onChange={(event) => onChange(name, event.target.value)}
          onBlur={() => onBlur(name)}
        />
        {suffix && <span className="affix suf" aria-hidden="true">{suffix}</span>}
      </div>
      {children}
      {help && <p className="help" id={`${name}-help`}>{help}</p>}
      <p className="err" id={`${name}-err`}>{error || ""}</p>
    </div>
  );
}

function Results({
  result,
  formatter,
  actionStatus,
  panelRef,
  onCopy,
  onShare,
  onPrint,
}: {
  result: CalcResult;
  formatter: Formatter;
  actionStatus: string;
  panelRef: React.Ref<HTMLElement>;
  onCopy: () => void;
  onShare: () => void;
  onPrint: () => void;
}) {
  const statusText = {
    profitable: "Your new customers bring in more money than this month's costs.",
    near: "Revenue and costs are almost equal. A small change could turn this into a loss.",
    unprofitable: "This month's costs are more than your new customers will pay.",
    empty: "Enter your numbers to see your result.",
  }[result.status.key];

  return (
    <section className="panel results-panel" id="results" aria-labelledby="results-title" ref={panelRef}>
      <div className="panel-title">
        <h3 id="results-title">Your Result</h3>
        <span className="pill">Per month</span>
      </div>
      <div className="status" data-status={result.status.key}>
        <span className="ico" aria-hidden="true">{result.status.key === "profitable" ? "✓" : result.status.key === "near" ? "≈" : "!"}</span>
        <div><strong>{result.status.label}</strong><p>{statusText}</p></div>
      </div>
      <ul className="cards" aria-label="Key results">
        <li className="card hero-card">
          <span className="k">{result.profit < 0 ? "Loss" : "Profit"}</span>
          <output className="v" data-sign={signOf(result.profit)}>{formatter.moneyCompact(result.profit)}</output>
          <span className="s">Revenue − total cost</span>
        </li>
        <li className="card"><span className="k">ROI</span><output className="v" data-sign={signOf(result.roi)}>{pct(result.roi)}</output><span className="s">Profit ÷ total cost</span></li>
        <li className="card"><span className="k">Revenue</span><output className="v">{formatter.moneyCompact(result.revenue)}</output><span className="s">{result.inputs.payments > 1 ? `${formatter.money(result.firstMonthRevenue)} this month` : "One-time sales"}</span></li>
        <li className="card"><span className="k">Total cost</span><output className="v">{formatter.moneyCompact(result.totalCost)}</output><span className="s">Ads, salaries, office</span></li>
        <li className="card"><span className="k">New customers</span><output className="v">{formatter.count(result.customers)}</output><span className="s">from {formatter.count(result.inputs.leads)} leads</span></li>
        <li className="card"><span className="k">Cost per customer</span><output className="v">{result.customers > 0 ? formatter.money(result.costPerCustomer) : "–"}</output><span className="s">Cost per lead {result.inputs.leads > 0 ? formatter.money(result.costPerLead) : "–"}</span></li>
      </ul>
      <p className="breakeven">
        {result.canBreakEven
          ? <>You need <strong>{formatter.count(result.breakEvenCustomers)} customers</strong> a month to cover your costs. You are getting <strong>{formatter.count(result.customers)}</strong>.</>
          : "Enter a price and payment count to see how many customers you need to break even."}
      </p>
      <div className="actions">
        <button type="button" className="btn btn-sm" onClick={onCopy}>Copy results</button>
        <button type="button" className="btn btn-ghost btn-sm" onClick={onShare}>Share link</button>
        <button type="button" className="btn btn-ghost btn-sm" onClick={onPrint}>Print / PDF</button>
      </div>
      <p className="action-status" role="status">{actionStatus}</p>
      <p className="disclaimer">Estimate based on the numbers you enter. Revenue assumes every customer makes every payment.</p>
    </section>
  );
}

function Breakdown({ result, formatter }: { result: CalcResult; formatter: Formatter }) {
  const rows = [
    { label: "Revenue", value: result.revenue, className: "rev" },
    { label: "Meta & Google Ads", value: result.adSpend, className: "" },
    { label: "Sales salaries", value: result.salaries, className: "" },
    { label: "Office cost", value: result.officeCost, className: "" },
    { label: result.profit < 0 ? "Loss" : "Profit", value: result.profit, className: result.profit < 0 ? "loss" : "profit" },
  ];
  const base = result.revenue > 0 ? result.revenue : Math.max(...rows.map((row) => Math.abs(row.value))) || 1;

  return (
    <div className="breakdown">
      <figure className="panel full" aria-labelledby="chart-title">
        <h3 id="chart-title">Where the money goes</h3>
        <ol className="bars">
          {rows.map((row) => (
            <li key={row.label} className={`bar-row${row.className ? ` ${row.className}` : ""}`}>
              <span className="lbl">{row.label}</span>
              <span className="amt">
                {formatter.money(row.value)}
                {result.revenue > 0 && row.className !== "rev" && <small>{pct((row.value / result.revenue) * 100)}</small>}
              </span>
              <span className="track" aria-hidden="true">
                <span style={{ width: `${Math.min(100, (Math.abs(row.value) / base) * 100)}%` }} />
              </span>
            </li>
          ))}
        </ol>
      </figure>
    </div>
  );
}

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
  const formatter = useMemo(() => createFormatter(currency), [currency]);
  const sectionRef = useRef<HTMLElement>(null);
  const resultsRef = useRef<HTMLElement>(null);
  const announce = useRef<() => void>(() => {});
  const statusTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const result = useMemo(() => {
    const raw: Record<string, unknown> = {};
    FIELD_NAMES.forEach((name) => {
      raw[name] = validateField(name, texts[name]).value;
    });
    return calculateLeadGenROI(raw);
  }, [texts]);

  announce.current = () => {
    setLiveSummary(`Results updated. ${result.status.label}. Profit ${formatter.money(result.profit)}, ROI ${pct(result.roi)}.`);
  };

  useEffect(() => {
    if (!announceTick) return;
    const timer = setTimeout(() => announce.current(), 1200);
    return () => clearTimeout(timer);
  }, [announceTick]);

  useEffect(() => () => clearTimeout(statusTimer.current), []);

  useEffect(() => {
    const shared = loadFromQuery();
    if (!shared) return;
    const code = shared.currency ?? DEFAULT_CURRENCY;
    setCurrency(code);
    setTexts(textsFrom(shared.values, createFormatter(code)));
    setSharedNotice(true);
  }, []);

  useEffect(() => {
    const beforePrint = () => flushSync(() => setPrintDate(
      `Lead generation ROI estimate · Calculated on ${new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })} · https://acquirely.in/roi-calculator`,
    ));
    window.addEventListener("beforeprint", beforePrint);
    return () => window.removeEventListener("beforeprint", beforePrint);
  }, []);

  function status(message: string) {
    setActionStatus(message);
    clearTimeout(statusTimer.current);
    statusTimer.current = setTimeout(() => setActionStatus(""), 4000);
  }

  function updateField(name: FieldName, value: string) {
    setTexts((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: validateField(name, value).error }));
    trackOnce("roi_calculator_started");
    track("roi_calculator_input_changed", { field: name });
    setAnnounceTick((current) => current + 1);
  }

  function blurField(name: FieldName) {
    const raw = texts[name];
    if (!raw.trim()) {
      setErrors((current) => ({ ...current, [name]: null }));
      return;
    }
    const validated = validateField(name, raw);
    setErrors((current) => ({ ...current, [name]: validated.error }));
    if (!validated.error) {
      setTexts((current) => ({ ...current, [name]: displayValue(name, validated.value, formatter) }));
    }
  }

  function applyValues(values: Inputs, nextFormatter = formatter) {
    setTexts(textsFrom(values, nextFormatter));
    setErrors({});
  }

  function resetExample() {
    applyValues(getDefaultInputs());
    setSharedNotice(false);
    setAnnounceTick((current) => current + 1);
    status("Example values restored.");
    track("roi_calculator_reset", { type: "example" });
  }

  function clearAll() {
    const cleared = {} as Texts;
    FIELD_NAMES.forEach((name) => { cleared[name] = ""; });
    setTexts(cleared);
    setErrors({});
    document.getElementById("metaSpend")?.focus();
    setAnnounceTick((current) => current + 1);
    status("All fields cleared.");
    track("roi_calculator_reset", { type: "clear" });
  }

  function onCurrencyChange(rawCode: string) {
    const code = isCurrencyCode(rawCode) ? rawCode : DEFAULT_CURRENCY;
    const nextFormatter = createFormatter(code);
    setCurrency(code);
    setTexts((current) => {
      const next = { ...current };
      FIELD_NAMES.forEach((name) => {
        if (isPercent(name) || !current[name].trim()) return;
        const value = parseNumber(current[name]);
        if (Number.isFinite(value)) next[name] = displayValue(name, value, nextFormatter);
      });
      return next;
    });
    track("roi_calculator_currency_changed", { currency: code });
  }

  function buildShareUrl() {
    const params = new URLSearchParams();
    FIELD_NAMES.forEach((name) => {
      params.set(name, String(roundTo(validateField(name, texts[name]).value, 4)));
    });
    if (currency !== DEFAULT_CURRENCY) params.set("currency", currency);
    return `${window.location.origin}${window.location.pathname}?${params.toString()}`;
  }

  function onCopy() {
    void copyText(summaryText(result, formatter)).then(
      () => status("Results copied to clipboard."),
      () => status("Could not copy results automatically."),
    );
    track("roi_calculator_results_copied");
  }

  function onShare() {
    const url = buildShareUrl();
    track("roi_calculator_share_clicked");
    if (typeof navigator.share === "function" && window.matchMedia("(pointer: coarse)").matches) {
      void navigator.share({ title: "Lead generation ROI estimate", url }).catch(() => status("Sharing was not completed."));
      return;
    }
    void copyText(url).then(
      () => status("Link with your numbers copied."),
      () => status("Could not copy the link automatically."),
    );
  }

  function onPrint() {
    flushSync(() => setPrintDate(
      `Lead generation ROI estimate · Calculated on ${new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })} · https://acquirely.in/roi-calculator`,
    ));
    track("roi_calculator_printed");
    window.print();
  }

  const field = (name: FieldName) => ({
    name,
    value: texts[name],
    error: errors[name],
    formatter,
    onChange: updateField,
    onBlur: blurField,
  });
  const paymentCount = validateField("payments", texts.payments).value;

  return (
    <section className="calc-section" id="calculator" aria-labelledby="calc-title" ref={sectionRef}>
      <div className="wrap">
        <div className="calc-head">
          <div>
            <h2 id="calc-title">Calculate Your Business ROI</h2>
            <p>Enter your monthly numbers. Results update as you type.</p>
          </div>
          <div className="toolbar">
            <label htmlFor="currency">Currency</label>
            <select id="currency" className="select" aria-describedby="currency-help" value={currency} onChange={(event) => onCurrencyChange(event.target.value)}>
              {Object.entries(CURRENCIES).map(([code, value]) => <option key={code} value={code}>{value.label}</option>)}
            </select>
            <span id="currency-help" className="sr-only">Changes the currency symbol and number format only. No currency conversion is applied.</span>
            <button type="button" className="btn btn-ghost btn-sm" onClick={resetExample}>Reset</button>
            <button type="button" className="btn btn-ghost btn-sm" onClick={clearAll}>Clear all</button>
          </div>
        </div>

        {sharedNotice && <p className="notice">You&apos;re viewing numbers from a shared link. <button type="button" className="linkish" onClick={resetExample}>Reset to example values</button></p>}
        <p className="print-only">{printDate}</p>
        <div className="calc-grid">
          <form className="panel" aria-labelledby="inputs-title" noValidate autoComplete="off" onSubmit={(event) => event.preventDefault()}>
            <div className="panel-title"><h3 id="inputs-title">Your Numbers</h3><span className="pill">Example values</span></div>
            <fieldset>
              <legend>1 · Marketing cost</legend>
              <div className="fields">
                <Field {...field("metaSpend")} label="Meta Ads (per month)" />
                <Field {...field("googleSpend")} label="Google Ads (per month)" />
                <Field {...field("leads")} label="Leads you get (per month)" suffix="leads" />
                <Field {...field("customers")} label="Leads that become customers" suffix="customers" help={result.inputs.leads > 0 && result.customers > 0 ? `That's ${pct(result.conversionRate).replace(".0%", "%")} of your leads.` : "How many of these leads paid you?"} />
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
              <div className="fields"><Field {...field("price")} label="Price" help="What a customer pays each time." /></div>
            </fieldset>
            <fieldset>
              <legend>4 · How many times the customer pays</legend>
              <div className="fields">
                <Field
                  {...field("payments")}
                  label="How many times does a customer pay you?"
                  suffix="times"
                  help={paymentCount > 0 && result.inputs.price > 0
                    ? `Each customer pays ${formatter.money(result.inputs.price)} × ${formatter.count(paymentCount)} = ${formatter.money(result.revenuePerCustomer)} in total.`
                    : "Pick an option or type your own number."}
                >
                  <div className="segmented" role="group" aria-label="Payment frequency quick picks">
                    {PAYMENT_PRESETS.map((preset) => (
                      <button key={preset.value} type="button" aria-pressed={paymentCount === preset.value} onClick={() => updateField("payments", String(preset.value))}>
                        <b>{preset.value}×</b><small>{preset.label}</small>
                      </button>
                    ))}
                  </div>
                </Field>
              </div>
            </fieldset>
            <fieldset>
              <legend>5 · In-house office cost</legend>
              <div className="fields"><Field {...field("officeCost")} label="Office cost (per month)" help="Rent, electricity, internet, software and other office bills." /></div>
            </fieldset>
          </form>

          <Results
            result={result}
            formatter={formatter}
            actionStatus={actionStatus}
            panelRef={resultsRef}
            onCopy={onCopy}
            onShare={onShare}
            onPrint={onPrint}
          />
        </div>
        <p className="sr-only" aria-live="polite" aria-atomic="true">{liveSummary}</p>
        <Breakdown result={result} formatter={formatter} />
      </div>
    </section>
  );
}
