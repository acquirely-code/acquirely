import type { CalcResult } from "@/app/roi-calculator/_lib/calculator-engine";
import { pct, type Formatter } from "@/app/ecommerce-calculator/_lib/format";

/** One simple bar chart: revenue, each cost, and what is left. */
export function Breakdown({ r, f }: { r: CalcResult; f: Formatter }) {
  const rev = r.revenue;
  const rows = [
    { label: "Revenue", value: rev, cls: "rev" },
    { label: "Meta & Google Ads", value: r.adSpend },
    { label: "Sales salaries", value: r.salaries },
    { label: "Office cost", value: r.officeCost },
    { label: r.profit < 0 ? "Loss" : "Profit", value: r.profit, cls: r.profit < 0 ? "loss" : "profit" },
  ];
  // Scale bars to revenue, or to the largest value if revenue is zero.
  const base = rev > 0 ? rev : Math.max(...rows.map((row) => Math.abs(row.value))) || 1;

  return (
    <div className="breakdown">
      <figure className="panel full" aria-labelledby="chart-title">
        <h3 id="chart-title">Where the money goes</h3>
        <ol className="bars">
          {rows.map((row) => (
            <li key={row.label} className={"bar-row" + (row.cls ? " " + row.cls : "")}>
              <span className="lbl">{row.label}</span>
              <span className="amt">
                {f.money(row.value, 0)}
                {rev > 0 && row.cls !== "rev" && <small>{pct((row.value / rev) * 100)}</small>}
              </span>
              <span className="track" aria-hidden="true">
                <span style={{ width: Math.min(100, (Math.abs(row.value) / base) * 100) + "%" }} />
              </span>
            </li>
          ))}
        </ol>
      </figure>
    </div>
  );
}
