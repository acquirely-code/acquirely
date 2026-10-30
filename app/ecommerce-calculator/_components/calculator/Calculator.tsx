"use client";

/**
 * Ecommerce Profit & ROI Calculator: UI layer.
 * All business logic lives in lib/calculator-engine.ts. This component only
 * holds input text, formats numbers and renders results.
 */
import { useEffect, useMemo, useRef, useState } from "react";
import { flushSync } from "react-dom";
import {
  FIELD_NAMES,
  FIELDS,
  calculateEcommerceProfitability,
  getDefaultInputs,
  parseNumber,
  roundTo,
  validateField,
  type CalcResult,
  type FieldName,
  type Inputs,
  type ProductCostBasis,
} from "@/app/ecommerce-calculator/_lib/calculator-engine";
import { CURRENCIES, DEFAULT_CURRENCY, MINUS, createFormatter, isCurrencyCode, pct, signOf, x, type CurrencyCode, type Formatter } from "@/app/ecommerce-calculator/_lib/format";
import { track, trackOnce } from "@/app/ecommerce-calculator/_lib/analytics";
import { AUDIT_HREF, PAGE_URL, SITE_NAME } from "@/app/ecommerce-calculator/_lib/site";
import { Field, type FieldHandlers } from "./Field";
import { Toggletip } from "./Toggletip";
import { ResultsPanel } from "./ResultsPanel";
import { Breakdown } from "./Breakdown";
import { CtaLink } from "../CtaLink";

type Texts = Record<FieldName, string>;
type Errors = Partial<Record<FieldName, string | null>>;

/** Show an input value formatted (grouping for money/counts, plain for %). */
function displayValue(name: FieldName, n: number, f: Formatter) {
  if (!isFinite(n)) return "";
  if (FIELDS[name].kind === "percent") return String(roundTo(n, 4));
  return f.groupNumber(n, 2);
}

function textsFrom(values: Inputs, f: Formatter): Texts {
  const t = {} as Texts;
  FIELD_NAMES.forEach((name) => { t[name] = displayValue(name, values[name], f); });
  return t;
}

const hasAdvancedValues = (v: Inputs) => v.cancellationRate > 0 || v.miscCost > 0 || v.fixedCosts > 0 || v.includeTax;

/**
 * Shared links (?orders=1000&aov=1499…). Values are validated on the way in and
 * only whitelisted keys are read; canonical stays the clean URL.
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
  if (params.get("productCostBasis") === "dispatched") { values.productCostBasis = "dispatched"; found = true; }
  if (params.get("includeTax") === "1") { values.includeTax = true; found = true; }
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
  const m = (n: number, d: number) => f.money(n, d, true);
  return [
    "Ecommerce Profitability (monthly estimate)",
    "Orders: " + f.count(r.ordersGenerated),
    "Delivered: " + f.count(r.deliveredOrders) + " (" + pct(r.overallDeliveryRate) + ")",
    "Delivered revenue: " + m(r.deliveredGMV, 0),
    "Total cost: " + m(r.totalCost, 0),
    "RTO cost: " + m(r.rtoCost, 0),
    "Net profit: " + m(r.netProfit, 0),
    "Margin: " + pct(r.netMargin).replace(MINUS, "-"),
    "ROAS: " + x(r.currentROAS) + " (break-even " + (r.canBreakEven ? x(r.breakEvenROAS) : "not reachable") + ")",
    "CPA: " + m(r.currentCPA, 2) + " | Break-even CPA: " + m(r.breakEvenCPA, 2),
    "Status: " + r.status.label,
    "",
    "Estimate based on the values entered. Calculated using " + SITE_NAME + ":",
    PAGE_URL,
  ].join("\n");
}

const printDateText = () =>
  "Ecommerce profitability estimate · Calculated on " +
  new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" }) + " · " + PAGE_URL;

const INITIAL_TEXTS = textsFrom(getDefaultInputs(), createFormatter(DEFAULT_CURRENCY));

export function Calculator() {
  const [currency, setCurrency] = useState<CurrencyCode>(DEFAULT_CURRENCY);
  const [texts, setTexts] = useState<Texts>(INITIAL_TEXTS);
  const [errors, setErrors] = useState<Errors>({});
  const [basis, setBasis] = useState<ProductCostBasis>("delivered");
  const [includeTax, setIncludeTax] = useState(false);
  const [sharedNotice, setSharedNotice] = useState(false);
  const [actionStatus, setActionStatus] = useState("");
  const [liveSummary, setLiveSummary] = useState("");
  const [announceTick, setAnnounceTick] = useState(0);
  const [printDate, setPrintDate] = useState("");
  const [mbarReady, setMbarReady] = useState(false);
  const [mbarAway, setMbarAway] = useState(true);

  const f = useMemo(() => createFormatter(currency), [currency]);
  const advancedRef = useRef<HTMLDetailsElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const resultsRef = useRef<HTMLElement>(null);
  const statusTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  // The engine is a handful of arithmetic operations, so recalculating on every
  // keystroke keeps results instant without hurting INP.
  const r = useMemo(() => {
    const raw: Record<string, unknown> = { productCostBasis: basis, includeTax };
    FIELD_NAMES.forEach((name) => { raw[name] = validateField(name, texts[name]).value; });
    return calculateEcommerceProfitability(raw);
  }, [texts, basis, includeTax]);

  function applyValues(values: Inputs, fmt: Formatter) {
    setTexts(textsFrom(values, fmt));
    setErrors({});
    setBasis(values.productCostBasis);
    setIncludeTax(values.includeTax);
    if (hasAdvancedValues(values) && advancedRef.current) advancedRef.current.open = true;
  }

  // Debounced, concise screen-reader summary (not every number, not every keystroke).
  // Ref keeps the latest results without re-running the debounce effect (React 18 has no useEffectEvent).
  const announce = useRef(() => {});
  announce.current = () => {
    setLiveSummary(
      "Results updated. " + r.status.label + ". Net profit " + f.money(r.netProfit, 0) +
      ", margin " + pct(r.netMargin) + ", break-even CPA " + f.money(r.breakEvenCPA, 2) + ".",
    );
  };
  useEffect(() => {
    if (!announceTick) return;
    const t = setTimeout(() => announce.current(), 1400);
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

  // Open "Advanced costs" while printing so every assumption appears on paper.
  useEffect(() => {
    let wasOpen = false;
    const before = () => {
      flushSync(() => setPrintDate(printDateText()));
      const adv = advancedRef.current;
      if (adv) { wasOpen = adv.open; adv.open = true; }
    };
    const after = () => { if (advancedRef.current) advancedRef.current.open = wasOpen; };
    window.addEventListener("beforeprint", before);
    window.addEventListener("afterprint", after);
    return () => {
      window.removeEventListener("beforeprint", before);
      window.removeEventListener("afterprint", after);
    };
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
        if (FIELDS[name].kind === "percent" || t[name].trim() === "") return;
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
    setBasis("delivered");
    setIncludeTax(false);
    document.getElementById("orders")?.focus();
    setAnnounceTick((n) => n + 1);
    status("All fields cleared.");
    track("calculator_reset", { type: "clear" });
  }

  function onCopy() {
    copyText(buildSummary(r, f)).then(
      () => status("Results copied to clipboard."),
      () => status("Couldn't copy automatically. Select the breakdown table and copy it instead."),
    );
    track("calculator_results_copied");
  }

  function buildShareUrl() {
    const params = new URLSearchParams();
    FIELD_NAMES.forEach((name) => {
      if (name === "taxPercentage" && !includeTax) return;
      params.set(name, String(roundTo(validateField(name, texts[name]).value, 4)));
    });
    if (basis !== "delivered") params.set("productCostBasis", basis);
    if (includeTax) params.set("includeTax", "1");
    if (currency !== DEFAULT_CURRENCY) params.set("currency", currency);
    // Use the page's own location so the link also works on staging/local.
    return window.location.origin + window.location.pathname + "?" + params.toString();
  }

  function onShare() {
    const url = buildShareUrl();
    track("calculator_share_clicked");
    if (typeof navigator.share === "function" && window.matchMedia("(pointer: coarse)").matches) {
      navigator.share({ title: "Ecommerce profit estimate", url }).catch(() => {});
      return;
    }
    copyText(url).then(
      () => status("Link with your assumptions copied."),
      () => status("Couldn't copy the link automatically."),
    );
  }

  function onPrint() {
    flushSync(() => setPrintDate(printDateText()));
    track("calculator_printed");
    window.print();
  }

  return (
    <section className="calc-section" id="calculator" aria-labelledby="calc-title" ref={sectionRef}>
      <div className="wrap">
        <div className="calc-head">
          <div>
            <h2 id="calc-title">Ecommerce Profit Calculator</h2>
            <p>Results update as you type. Enter monthly averages from your store, courier and ad accounts.</p>
          </div>
          <div className="toolbar">
            <label htmlFor="currency">Currency</label>
            <select id="currency" className="select" aria-describedby="currency-help" value={currency} onChange={(e) => onCurrencyChange(e.target.value)}>
              {Object.entries(CURRENCIES).map(([code, c]) => <option key={code} value={code}>{c.label}</option>)}
            </select>
            <span id="currency-help" className="sr-only">Changes the currency symbol and number format only. No conversion is applied.</span>
            <button type="button" className="btn btn-ghost btn-sm" onClick={resetExample}>Reset to example</button>
            <button type="button" className="btn btn-ghost btn-sm" onClick={clearAll}>Clear all</button>
          </div>
        </div>

        <p className="notice" hidden={!sharedNotice}>
          You&apos;re viewing assumptions from a shared link.{" "}
          <button type="button" className="linkish" onClick={resetExample}>Reset to example values</button>
        </p>

        <noscript><p className="notice">The calculator needs JavaScript to work. The guide below explains every formula, so you can also work the numbers out by hand.</p></noscript>

        <p className="print-only">{printDate}</p>

        <div className="calc-grid">
          {/* ============ INPUTS ============ */}
          <form className="panel" aria-labelledby="inputs-title" noValidate autoComplete="off" onSubmit={(e) => e.preventDefault()}>
            <div className="panel-title">
              <h3 id="inputs-title">Enter Your Numbers</h3>
              <span className="pill">Pre-filled with example values</span>
            </div>

            <fieldset>
              <legend>Volume &amp; revenue</legend>
              <div className="fields">
                <Field {...field("orders")} label="Orders per month" help="All orders generated, before cancellations or failed deliveries." />
                <Field {...field("aov")} label="Average order value" help="What a customer pays per order on average." />
              </div>
            </fieldset>

            <fieldset>
              <legend>Per-order costs</legend>
              <div className="fields">
                <Field {...field("productCost")} label="Product cost per order" help="Average supplier or product cost for one order." />
                <Field {...field("advertisingCPA")} label={<>Advertising cost per order <span className="alt">(CPA)</span></>} help="Ad spend ÷ orders generated. Charged on every order, delivered or not." />
                <Field {...field("forwardShipping")} label="Forward shipping cost" help="Paid on every dispatched order." />
                <Field {...field("rtoShipping")} label="RTO / return shipping cost" help="Extra charge when an undelivered order returns to origin." />
                <Field {...field("fulfillmentCost")} label="Fulfilment / packaging cost" help="Packing, pick-and-pack or warehouse fee per dispatched order." />
                <Field {...field("codFee")} label="COD fee" help="Collection fee per successfully delivered COD order." />
                <Field {...field("paymentGatewayPercentage")} label="Payment gateway fee" help="Deducted from delivered prepaid revenue." />
              </div>
            </fieldset>

            <fieldset>
              <legend>Order mix &amp; delivery</legend>
              <div className="fields">
                <Field {...field("codPercentage")} label="COD order share" help="Blue bar is COD, orange bar is prepaid.">
                  <div className="split" aria-hidden="true">
                    <span className="s-cod" style={{ width: r.inputs.codPercentage + "%" }} />
                    <span className="s-pre" style={{ width: r.prepaidPercentage + "%" }} />
                  </div>
                </Field>
                <div className="field">
                  <span className="label" id="prepaid-label">Prepaid order share</span>
                  <div className="control readonly">
                    <output htmlFor="codPercentage" aria-labelledby="prepaid-label" className="num">{pct(r.prepaidPercentage).replace(".0%", "%")}</output>
                  </div>
                  <p className="help">Calculated automatically: 100% minus COD share.</p>
                </div>
                <Field {...field("codDeliveryRate")} label="COD delivery rate" help="Share of dispatched COD orders that customers accept. The rest are RTO." />
                <Field {...field("prepaidDeliveryRate")} label="Prepaid delivery rate" help="Share of dispatched prepaid orders delivered successfully." />
              </div>
            </fieldset>

            <fieldset>
              <legend>
                Charge product cost on
                <Toggletip label="About product cost basis">Choose &quot;Delivered orders only&quot; if returned stock comes back usable and goes back on the shelf. Choose &quot;All dispatched orders&quot; if you pay the supplier for every shipped unit or returns are often damaged or lost.</Toggletip>
              </legend>
              <div className="choices">
                {([
                  ["delivered", "Delivered orders only", "Returned stock is reusable"],
                  ["dispatched", "All dispatched orders", "Returned units are a loss"],
                ] as const).map(([value, title, sub]) => (
                  <label className="choice" key={value}>
                    <input
                      type="radio"
                      name="productCostBasis"
                      value={value}
                      checked={basis === value}
                      onChange={() => {
                        setBasis(value);
                        userChanged();
                        trackOnce("calculator_input_changed", { field: "productCostBasis" }, "changed:productCostBasis");
                      }}
                    />
                    <span><b>{title}</b><small>{sub}</small></span>
                  </label>
                ))}
              </div>
            </fieldset>

            <details className="advanced" ref={advancedRef}>
              <summary>
                <span>Advanced costs<small>Cancellations, other costs, fixed costs, tax</small></span>
                <svg className="chev" viewBox="0 0 20 20" aria-hidden="true"><path d="M5 7.5l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
              </summary>
              <div className="adv-body">
                <div className="fields">
                  <Field {...field("cancellationRate")} label="Cancellation rate" help={<>Orders cancelled <strong>before dispatch</strong>, for example after a confirmation call. They cost ad spend but no shipping, fulfilment or per-order extras.</>} />
                  <Field {...field("miscCost")} label="Other cost per order" help="Per dispatched order: apps, support, confirmation calls, SMS, WhatsApp, tech fees." />
                  <Field {...field("fixedCosts")} label="Monthly fixed costs" help="Staff, software, warehouse rent, agency fees, subscriptions." />
                </div>
                <div className="form-block">
                  <label className="switch">
                    <input
                      type="checkbox"
                      name="includeTax"
                      checked={includeTax}
                      aria-describedby="tax-note"
                      onChange={(e) => {
                        setIncludeTax(e.target.checked);
                        userChanged();
                        trackOnce("calculator_input_changed", { field: "includeTax" }, "changed:includeTax");
                      }}
                    />
                    Include tax in profitability calculation
                  </label>
                  {includeTax && (
                    <Field {...field("taxPercentage")} label="Tax rate on delivered revenue" describedBy="taxPercentage-err tax-note" />
                  )}
                  <p className="note" id="tax-note">Off by default. When on, tax is estimated as a flat % of delivered revenue. Real treatment (GST input credits, inclusive vs exclusive pricing, VAT) depends on your jurisdiction and accounts, so check with your accountant.</p>
                </div>
              </div>
            </details>
          </form>

          {/* ============ RESULTS ============ */}
          <ResultsPanel r={r} f={f} panelRef={resultsRef} actionStatus={actionStatus} onCopy={onCopy} onShare={onShare} onPrint={onPrint} />
        </div>

        {/* Polite, debounced summary for screen readers */}
        <p className="sr-only" aria-live="polite" aria-atomic="true">{liveSummary}</p>

        <Breakdown r={r} f={f} />

        {/* ============ SOFT CTA ============ */}
        <aside className="cta-card" aria-labelledby="audit-title">
          <div>
            <h3 id="audit-title">Want help improving your eCommerce unit economics?</h3>
            <p>We&apos;ll go through your numbers with you: delivery rate, CPA and pricing.</p>
          </div>
          <CtaLink className="btn" href={AUDIT_HREF} cta="audit">Get a Profitability Audit</CtaLink>
        </aside>
      </div>

      {/* Mobile results bar (below 1024px). Hidden while the results panel is on screen. */}
      <div className={"mbar" + (mbarAway ? " away" : "")} hidden={!mbarReady}>
        <div>
          <span className="m-k">Est. net profit · <span>{pct(r.netMargin)}</span> margin</span>
          <span className="m-v" data-sign={signOf(r.netProfit)}>{f.moneyCompact(r.netProfit)}</span>
        </div>
        <a className="btn btn-sm" href="#results">View results</a>
      </div>
    </section>
  );
}
