import type { CalcResult, StatusKey } from "@/app/roi-calculator/_lib/calculator-engine";
import { pct, signOf, type Formatter } from "@/app/ecommerce-calculator/_lib/format";

const STATUS_COPY: Record<StatusKey, { ico: string; text: string }> = {
  profitable: { ico: "✓", text: "Your new customers bring in more money than this month's costs." },
  near: { ico: "≈", text: "Revenue and costs are almost equal. A small change could turn this into a loss." },
  unprofitable: { ico: "!", text: "This month's costs are more than your new customers will pay." },
  empty: { ico: "–", text: "Enter your numbers to see your result." },
};

interface Props {
  r: CalcResult;
  f: Formatter;
  panelRef: React.Ref<HTMLElement>;
  actionStatus: string;
  onCopy: () => void;
  onShare: () => void;
  onPrint: () => void;
}

export function ResultsPanel({ r, f, panelRef, actionStatus, onCopy, onShare, onPrint }: Props) {
  const copy = STATUS_COPY[r.status.key];
  const recurring = r.inputs.payments > 1;

  return (
    <section className="panel results-panel" id="results" aria-labelledby="results-title" ref={panelRef}>
      <div className="panel-title">
        <h3 id="results-title">Your Result</h3>
        <span className="pill">Per month</span>
      </div>

      <div className="status" data-status={r.status.key}>
        <span className="ico" aria-hidden="true">{copy.ico}</span>
        <div><strong>{r.status.label}</strong><p>{copy.text}</p></div>
      </div>

      <ul className="cards" aria-label="Key results">
        <li className="card hero-card">
          <span className="k">{r.profit < 0 ? "Loss" : "Profit"}</span>
          <output className="v" data-sign={signOf(r.profit)}>{f.moneyCompact(r.profit)}</output>
          <span className="s">Revenue − total cost</span>
        </li>
        <li className="card">
          <span className="k">ROI</span>
          <output className="v" data-sign={signOf(r.roi)}>{pct(r.roi)}</output>
          <span className="s">Profit ÷ total cost</span>
        </li>
        <li className="card">
          <span className="k">Revenue</span>
          <output className="v">{f.moneyCompact(r.revenue)}</output>
          <span className="s">{recurring ? f.money(r.firstMonthRevenue, 0) + " this month" : "One-time sales"}</span>
        </li>
        <li className="card">
          <span className="k">Total cost</span>
          <output className="v">{f.moneyCompact(r.totalCost)}</output>
          <span className="s">Ads, salaries, office</span>
        </li>
        <li className="card">
          <span className="k">New customers</span>
          <output className="v">{f.count(r.customers)}</output>
          <span className="s">from {f.count(r.inputs.leads)} leads</span>
        </li>
        <li className="card">
          <span className="k">Cost per customer</span>
          <output className="v">{r.customers > 0 ? f.money(r.costPerCustomer, 0) : "–"}</output>
          <span className="s">Cost per lead {r.inputs.leads > 0 ? f.money(r.costPerLead, 0) : "–"}</span>
        </li>
      </ul>

      <p className="breakeven">
        {r.canBreakEven
          ? <>You need <strong>{f.count(r.breakEvenCustomers)} customers</strong> a month to cover your costs. You are getting <strong>{f.count(r.customers)}</strong>.</>
          : <>Enter a price and how many times customers pay to see how many customers you need.</>}
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
