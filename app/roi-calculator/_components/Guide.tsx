import { FAQ } from "../_lib/seo";

const TOC = [
  { id: "how-to-calculate-roi", label: "How to calculate business ROI" },
  { id: "what-counts-as-cost", label: "What costs to include" },
  { id: "roi-vs-roas", label: "ROI vs ROAS" },
  { id: "recurring", label: "Recurring payments" },
  { id: "faq", label: "Frequently asked questions" },
];

export function Guide() {
  return (
    <article className="content" aria-labelledby="guide-title">
      <div className="wrap narrow">
        <h2 id="guide-title" className="sr-only">ROI guide for business owners</h2>
        <p className="lead">Measure the revenue from your new customers against the full cost of acquiring and serving them, not just your ad spend.</p>
        <div className="quick-answer">
          <span className="eyebrow">Quick answer</span>
          <p><strong>ROI = (revenue − total cost) ÷ total cost × 100.</strong> For a business running ads, include Meta and Google Ads, sales salaries and office costs. Revenue is new customers multiplied by price and payment count.</p>
        </div>
        <p>Use the calculator above with one month of leads and sales. It updates profit, ROI, cost per lead, cost per customer and your break-even customer count as you change the inputs.</p>
        <nav className="toc" aria-labelledby="toc-title">
          <p id="toc-title" className="toc-title">On this page</p>
          <ol>{TOC.map(({ id, label }) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ol>
        </nav>

        <h2 id="how-to-calculate-roi">How to Calculate ROI for Your Business</h2>
        <p>Start with the total cost for the month, then compare it with the revenue from customers won from that month's leads.</p>
        <p className="formula">{`Total cost = Meta Ads + Google Ads + sales salaries + office cost
Revenue    = new customers × price × number of payments
Profit     = revenue − total cost
ROI        = profit ÷ total cost × 100`}</p>
        <div className="example">
          <span className="eyebrow">Worked example</span>
          <p>₹1.6 lakh on ads, ₹90,000 for three salespeople and ₹65,000 for office costs add up to ₹3.15 lakh in monthly costs.</p>
          <p>With 25 customers paying ₹5,000 six times, estimated revenue is ₹7.5 lakh, profit is ₹4.35 lakh and ROI is about 138%.</p>
        </div>

        <h2 id="what-counts-as-cost">What Costs Should You Include?</h2>
        <p>Ad spend is only one part of acquiring and serving a customer. Include the salaries of the people handling leads and the office costs required to operate. Leaving these out can make a campaign look profitable when the business is not.</p>
        <ul>
          <li>Monthly spend on Meta Ads and Google Ads.</li>
          <li>Sales team headcount and monthly salary per person.</li>
          <li>Office costs such as rent, utilities, internet and software.</li>
          <li>Price per customer and the number of payments they make.</li>
        </ul>

        <h2 id="roi-vs-roas">ROI vs ROAS: What&apos;s the Difference?</h2>
        <p>ROAS is revenue divided by ad spend, so it only measures advertising revenue against advertising cost. ROI measures profit against all costs entered in the calculator, including salaries and office expenses. Use ROAS to compare campaigns and ROI to assess the wider business result.</p>

        <h2 id="recurring">How Recurring Payments Change ROI</h2>
        <p>If customers pay more than once, enter the number of expected payments to estimate total revenue. The calculator also shows revenue from the first payment separately. Estimates assume each customer completes every payment, so use a realistic average rather than the longest contract term.</p>

        <h2 id="faq">Frequently Asked Questions</h2>
        <div className="faq">
          {FAQ.map(({ q, a }) => (
            <section key={q} className="faq-item">
              <h3>{q}</h3>
              <p>{a}</p>
            </section>
          ))}
        </div>

        <aside className="about-box" aria-labelledby="about-title">
          <h2 id="about-title">About this calculator</h2>
          <p>Built by <a href="/">Acquirely</a> for businesses measuring lead generation and paid advertising. The calculator runs in your browser; the values you enter are not sent to a server.</p>
          <p>Selling products online? Try our <a href="/ecommerce-calculator">ecommerce profit calculator</a>.</p>
        </aside>
      </div>
    </article>
  );
}
