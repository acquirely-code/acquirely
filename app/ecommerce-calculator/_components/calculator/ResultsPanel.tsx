import type { CalcResult, StatusKey } from "@/app/ecommerce-calculator/_lib/calculator-engine";
import { pct, signOf, x, type Formatter } from "@/app/ecommerce-calculator/_lib/format";
import { Toggletip } from "./Toggletip";

const STATUS_COPY: Record<StatusKey, { ico: string; text: string }> = {
  profitable: { ico: "✓", text: "Based on the assumptions entered, estimated net profit is positive with a margin above 5%." },
  near: { ico: "≈", text: "Based on the assumptions entered, net margin is within 5% of zero. Small changes in CPA or delivery rate could flip the result." },
  unprofitable: { ico: "!", text: "Based on the assumptions entered, estimated costs exceed delivered revenue." },
  empty: { ico: "–", text: "Add orders and an average order value to see your estimate." },
};

/** Break-even CPA is only flagged when negative; a positive one isn't "good" on its own. */
export const beSign = (n: number) => (n < 0 ? "neg" : "zero");
export const beCpaText = (r: CalcResult, f: Formatter) => (r.inputs.orders > 0 ? f.money(r.breakEvenCPA, 2) : "–");
export const beRoasText = (r: CalcResult) => (r.canBreakEven ? x(r.breakEvenROAS) : "Not reachable");

function cpaGauge(r: CalcResult, f: Formatter) {
  const cpa = r.currentCPA, be = r.breakEvenCPA;
  if (!(r.inputs.orders > 0)) {
    return { fill: 0, mark: null, over: false, explain: "Enter your order volume to see break-even CPA." };
  }
  if (!(be > 0)) {
    return {
      fill: cpa > 0 ? 100 : 0, mark: null, over: true,
      explain: "Costs other than advertising already exceed delivered revenue, so there is no CPA at which this breaks even. Improve delivery rate, price or product cost first.",
    };
  }
  const scale = Math.max(cpa, be) * 1.15;
  const over = cpa > be;
  return {
    fill: Math.min(100, (cpa / scale) * 100),
    mark: (be / scale) * 100,
    over,
    explain: over
      ? `Your current CPA is ${f.money(cpa - be, 2)} above break-even. Each order costs more to acquire than it earns under these assumptions.`
      : `You could spend up to ${f.money(be - cpa, 2)} more per order before estimated net profit reaches zero. The orange line marks break-even.`,
  };
}

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
  const g = cpaGauge(r, f);

  return (
    <section className="panel results-panel" id="results" aria-labelledby="results-title" ref={panelRef}>
      <div className="panel-title">
        <h3 id="results-title">Your Profitability</h3>
        <span className="pill">Monthly estimate</span>
      </div>

      <div className="status" data-status={r.status.key}>
        <span className="ico" aria-hidden="true">{copy.ico}</span>
        <div><strong>{r.status.label}</strong><p>{copy.text}</p></div>
      </div>

      <ul className="cards" aria-label="Key results">
        <li className="card hero-card">
          <span className="k">Net profit
            <Toggletip label="About net profit" edge="l">Delivered revenue minus every cost: product, ads, shipping, RTO, fulfilment, fees, other costs and fixed costs.</Toggletip>
          </span>
          <output className="v" data-sign={signOf(r.netProfit)}>{f.moneyCompact(r.netProfit)}</output>
          <span className="s"><span data-sign={signOf(r.profitPerDeliveredOrder)}>{f.money(r.profitPerDeliveredOrder, 2)}</span> per delivered order</span>
        </li>
        <li className="card">
          <span className="k">Net margin
            <Toggletip label="About net margin" edge="l">Net profit ÷ delivered revenue × 100. Shows how much of each rupee collected you keep.</Toggletip>
          </span>
          <output className="v" data-sign={signOf(r.netMargin)}>{pct(r.netMargin)}</output>
        </li>
        <li className="card">
          <span className="k">Delivered revenue
            <Toggletip label="About delivered revenue" edge="r">Delivered orders × average order value. RTO and failed orders never count as revenue.</Toggletip>
          </span>
          <output className="v">{f.moneyCompact(r.deliveredGMV)}</output>
        </li>
        <li className="card">
          <span className="k">ROAS
            <Toggletip label="About ROAS" edge="l">Delivered revenue divided by advertising spend. Usually lower than the ROAS your ad platform reports, because the platform counts every order, delivered or not.</Toggletip>
          </span>
          <output className="v">{x(r.currentROAS)}</output>
          <span className="s">Break-even {beRoasText(r)}</span>
        </li>
        <li className="card">
          <span className="k">Break-even CPA
            <Toggletip label="About break-even CPA" edge="r">The maximum acquisition cost per generated order at which estimated net profit reaches zero, based on the assumptions entered.</Toggletip>
          </span>
          <output className="v" data-sign={beSign(r.breakEvenCPA)}>{beCpaText(r, f)}</output>
          <span className="s">Current {f.money(r.currentCPA, 2)}</span>
        </li>
        <li className="card">
          <span className="k">Delivery rate
            <Toggletip label="About delivery rate" edge="l">Delivered orders ÷ orders generated, across COD and prepaid, after cancellations.</Toggletip>
          </span>
          <output className="v">{pct(r.overallDeliveryRate)}</output>
          <span className="s">{f.count(r.deliveredOrders)} of {f.count(r.ordersGenerated)} orders</span>
        </li>
      </ul>

      <div className="compare">
        <h4>CPA vs break-even
          <Toggletip label="About break-even CPA">Break-even CPA = (contribution per generated order before ads) − (fixed costs ÷ orders). It already accounts for delivery rate, COD/prepaid mix, product cost, shipping, RTO, fulfilment, COD and gateway fees and other costs.</Toggletip>
        </h4>
        <dl>
          <div><dt>Current CPA</dt><dd>{f.money(r.currentCPA, 2)}</dd></div>
          <div><dt>Break-even CPA</dt><dd data-sign={beSign(r.breakEvenCPA)}>{beCpaText(r, f)}</dd></div>
          <div><dt>Headroom</dt><dd data-sign={signOf(r.cpaHeadroom)}>{(r.cpaHeadroom > 0.004 ? "+" : "") + f.money(r.cpaHeadroom, 2)}</dd></div>
        </dl>
        <div className="gauge" aria-hidden="true">
          <span className={"fill" + (g.over ? " over" : "")} style={{ width: g.fill + "%" }} />
          <span className="mark" style={{ left: (g.mark ?? 0) + "%" }} hidden={g.mark === null} />
        </div>
        <p className="explain">{g.explain}</p>
      </div>

      <div className="compare">
        <h4>ROAS vs break-even
          <Toggletip label="About break-even ROAS">Break-even ROAS = delivered revenue ÷ the ad spend at which net profit is zero. Compare it with ROAS measured on delivered revenue, not the platform&apos;s purchase value.</Toggletip>
        </h4>
        <dl>
          <div><dt>Current ROAS</dt><dd>{x(r.currentROAS)}</dd></div>
          <div><dt>Break-even ROAS</dt><dd>{beRoasText(r)}</dd></div>
          <div><dt>Ad cost / revenue</dt><dd>{pct(r.adCostPctOfRevenue)}</dd></div>
        </dl>
      </div>

      <div className="actions">
        <button type="button" className="btn btn-sm" onClick={onCopy}>Copy results</button>
        <button type="button" className="btn btn-ghost btn-sm" onClick={onShare}>Share link</button>
        <button type="button" className="btn btn-ghost btn-sm" onClick={onPrint}>Print / PDF</button>
      </div>
      <p className="action-status" role="status">{actionStatus}</p>

      <p className="disclaimer">Estimates are based on the values you enter. Actual profitability can vary due to taxes, refunds, product losses, courier charges, ad attribution, platform fees, payment disputes and other operating expenses.</p>
    </section>
  );
}
