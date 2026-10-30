import { Fragment } from "react";
import type { CalcResult } from "@/app/ecommerce-calculator/_lib/calculator-engine";
import { pct, signOf, x, type Formatter } from "@/app/ecommerce-calculator/_lib/format";
import { beCpaText, beRoasText, beSign } from "./ResultsPanel";

const clampPct = (n: number) => Math.max(0, Math.min(100, n));

function CostChart({ r, f }: { r: CalcResult; f: Formatter }) {
  const gmv = r.deliveredGMV;
  const rows = [
    { label: "Delivered revenue", value: gmv, cls: "rev" },
    { label: "Product cost", value: r.cogs },
    { label: "Advertising", value: r.adSpend },
    { label: "Forward shipping", value: r.forwardShippingCost },
    { label: "RTO shipping", value: r.rtoCost },
    { label: "Fulfilment", value: r.fulfillmentCost },
    { label: "Payment & COD fees", value: r.paymentGatewayFees + r.codCharges },
    { label: "Other costs", value: r.miscCost + r.taxCost + r.fixedCosts, note: "Other per-order, tax and fixed costs" },
    { label: r.netProfit < 0 ? "Net loss" : "Net profit", value: r.netProfit, cls: r.netProfit < 0 ? "loss" : "profit" },
  ];
  // Scale bars to revenue, or to the largest value if revenue is zero.
  const base = gmv > 0 ? gmv : Math.max(...rows.map((row) => Math.abs(row.value))) || 1;

  return (
    <ol className="bars">
      {rows.map((row) => (
        <li key={row.label} className={"bar-row" + (row.cls ? " " + row.cls : "")}>
          <span className="lbl" title={row.note}>{row.label}</span>
          <span className="amt">
            {f.money(row.value, 0)}
            {gmv > 0 && row.cls !== "rev" && <small>{pct((row.value / gmv) * 100)}</small>}
          </span>
          <span className="track" aria-hidden="true">
            <span style={{ width: Math.min(100, (Math.abs(row.value) / base) * 100) + "%" }} />
          </span>
        </li>
      ))}
    </ol>
  );
}

function Funnel({ r, f }: { r: CalcResult; f: Formatter }) {
  const o = r.ordersGenerated, gmv = r.deliveredGMV;
  const steps = [
    { label: "Orders generated", value: f.count(o), w: o > 0 ? 100 : 0 },
    { label: "Orders delivered", value: f.count(r.deliveredOrders), w: o > 0 ? (r.deliveredOrders / o) * 100 : 0, sub: pct(r.overallDeliveryRate) + " delivered" },
    { label: "Delivered revenue", value: f.money(gmv, 0), w: gmv > 0 ? 100 : 0, money: true },
    { label: "Contribution profit", value: f.money(r.contributionProfit, 0), w: gmv > 0 ? (Math.abs(r.contributionProfit) / gmv) * 100 : 0, money: true, neg: r.contributionProfit < 0, sub: "after variable costs and ads" },
    { label: "Net profit", value: f.money(r.netProfit, 0), w: gmv > 0 ? (Math.abs(r.netProfit) / gmv) * 100 : 0, money: true, neg: r.netProfit < 0, sub: "after fixed costs" },
  ];
  return (
    <ol className="funnel">
      {steps.map((s, idx) => (
        <Fragment key={s.label}>
          {idx > 0 && <li className="arrow" aria-hidden="true">↓</li>}
          <li>
            <div className="stage"><span>{s.label}</span><b>{s.value}</b></div>
            <div className={"fbar" + (s.money ? " money" : "") + (s.neg ? " neg" : "")} aria-hidden="true" style={{ width: clampPct(s.w) + "%" }} />
            {s.sub && <span className="sub">{s.sub}</span>}
          </li>
        </Fragment>
      ))}
    </ol>
  );
}

function Group({ title }: { title: string }) {
  return <tbody className="group"><tr><th scope="rowgroup" colSpan={2}>{title}</th></tr></tbody>;
}

export function Breakdown({ r, f }: { r: CalcResult; f: Formatter }) {
  const m = (n: number) => f.money(n, 0);
  return (
    <div className="breakdown">
      <figure className="panel" aria-labelledby="chart-title">
        <h3 id="chart-title">Where the revenue goes</h3>
        <p className="lede">Each cost as a share of delivered revenue. Values are listed in text, so the chart reads the same without the bars.</p>
        <CostChart r={r} f={f} />
      </figure>

      <figure className="panel" aria-labelledby="funnel-title">
        <h3 id="funnel-title">Profit funnel</h3>
        <p className="lede">How orders turn into money. Order bars scale to orders generated; money bars scale to delivered revenue.</p>
        <Funnel r={r} f={f} />
      </figure>

      <section className="panel full" aria-labelledby="table-title">
        <h3 id="table-title">Full breakdown</h3>
        <p className="lede">Order counts are averages, so they may include fractions before rounding.</p>
        <div className="table-cols">
          <div className="table-wrap">
            <table>
              <caption className="sr-only">Orders and revenue</caption>
              <Group title="Orders" />
              <tbody>
                <tr><th scope="row">Orders generated</th><td>{f.count(r.ordersGenerated)}</td></tr>
                <tr><th scope="row">Cancelled before dispatch</th><td>{f.count(r.cancelledOrders)}</td></tr>
                <tr><th scope="row">Dispatched orders</th><td>{f.count(r.dispatchedOrders)}</td></tr>
                <tr><th scope="row">COD orders</th><td>{f.count(r.codOrders)}</td></tr>
                <tr><th scope="row">Prepaid orders</th><td>{f.count(r.prepaidOrders)}</td></tr>
                <tr><th scope="row">Delivered orders<small>COD {f.count(r.deliveredCod)} · prepaid {f.count(r.deliveredPrepaid)}</small></th><td>{f.count(r.deliveredOrders)}</td></tr>
                <tr><th scope="row">COD RTO orders</th><td>{f.count(r.codRtoOrders)}</td></tr>
                <tr><th scope="row">Prepaid failed deliveries</th><td>{f.count(r.prepaidFailedOrders)}</td></tr>
                <tr><th scope="row">Overall delivery rate</th><td>{pct(r.overallDeliveryRate)}</td></tr>
              </tbody>
              <Group title="Revenue" />
              <tbody>
                <tr><th scope="row">Delivered revenue (GMV)</th><td>{m(r.deliveredGMV)}</td></tr>
                <tr><th scope="row">Revenue per generated order</th><td>{f.money(r.revenuePerGeneratedOrder, 2)}</td></tr>
              </tbody>
              <Group title="Advertising" />
              <tbody>
                <tr><th scope="row">Current CPA</th><td>{f.money(r.currentCPA, 2)}</td></tr>
                <tr><th scope="row">Break-even CPA</th><td data-sign={beSign(r.breakEvenCPA)}>{beCpaText(r, f)}</td></tr>
                <tr><th scope="row">Current ROAS</th><td>{x(r.currentROAS)}</td></tr>
                <tr><th scope="row">Break-even ROAS</th><td>{beRoasText(r)}</td></tr>
                <tr><th scope="row">Ad cost as % of delivered revenue</th><td>{pct(r.adCostPctOfRevenue)}</td></tr>
              </tbody>
            </table>
          </div>
          <div className="table-wrap">
            <table>
              <caption className="sr-only">Costs and profit</caption>
              <Group title="Costs" />
              <tbody>
                <tr><th scope="row">Advertising spend</th><td>{m(r.adSpend)}</td></tr>
                <tr><th scope="row">Product cost (COGS)</th><td>{m(r.cogs)}</td></tr>
                <tr><th scope="row">Forward shipping</th><td>{m(r.forwardShippingCost)}</td></tr>
                <tr><th scope="row">RTO cost<small>COD {m(r.codRtoCost)} · prepaid {m(r.prepaidRtoCost)}</small></th><td>{m(r.rtoCost)}</td></tr>
                <tr><th scope="row">Fulfilment cost</th><td>{m(r.fulfillmentCost)}</td></tr>
                <tr><th scope="row">COD charges</th><td>{m(r.codCharges)}</td></tr>
                <tr><th scope="row">Payment gateway fees</th><td>{m(r.paymentGatewayFees)}</td></tr>
                <tr><th scope="row">Other per-order costs</th><td>{m(r.miscCost)}</td></tr>
                <tr hidden={!r.inputs.includeTax}><th scope="row">Tax (estimated)</th><td>{m(r.taxCost)}</td></tr>
                <tr><th scope="row">Fixed costs</th><td>{m(r.fixedCosts)}</td></tr>
                <tr className="total"><th scope="row">Total cost</th><td>{m(r.totalCost)}</td></tr>
              </tbody>
              <Group title="Profit" />
              <tbody>
                <tr><th scope="row">Contribution profit<small>After ads, before fixed costs</small></th><td data-sign={signOf(r.contributionProfit)}>{m(r.contributionProfit)}</td></tr>
                <tr className="total"><th scope="row">Net profit</th><td data-sign={signOf(r.netProfit)}>{m(r.netProfit)}</td></tr>
                <tr><th scope="row">Net profit margin</th><td data-sign={signOf(r.netMargin)}>{pct(r.netMargin)}</td></tr>
                <tr><th scope="row">Profit per delivered order</th><td data-sign={signOf(r.profitPerDeliveredOrder)}>{f.money(r.profitPerDeliveredOrder, 2)}</td></tr>
                <tr><th scope="row">ROI <small>Net profit ÷ total cost × 100</small></th><td data-sign={signOf(r.roi)}>{pct(r.roi)}</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
