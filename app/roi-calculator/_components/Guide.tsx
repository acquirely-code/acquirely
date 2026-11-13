import { ABOUT_URL, CONTACT_EMAIL, LAST_UPDATED, REVIEWER, SITE_URL } from "@/app/roi-calculator/_lib/site";
import { FAQ } from "@/app/roi-calculator/_lib/seo";

/** Renders `**bold**` markers from FAQ copy as <strong>. */
const rich = (s: string) =>
  s.split(/\*\*(.+?)\*\*/g).map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part));

/** H2 sections, in page order. Feeds the table of contents (Google can show these as jump links). */
const TOC = [
  { id: "how-to-calculate-roi", label: "How to calculate ROI for your business" },
  { id: "what-calculators-miss", label: "What most ROI calculators leave out" },
  { id: "roi-vs-roas", label: "ROI vs ROAS: what's the difference?" },
  { id: "recurring", label: "How recurring payments change ROI" },
  { id: "good-roi", label: "What is a good ROI for a business?" },
  { id: "meta-google-roi", label: "How to calculate ROI on Meta and Google Ads" },
  { id: "improve", label: "How to improve your ROI" },
  { id: "who-its-for", label: "Who this calculator is for" },
  { id: "faq", label: "FAQ" },
];

const updated = new Date(`${LAST_UPDATED}T00:00:00Z`).toLocaleDateString("en-IN", {
  day: "numeric", month: "long", year: "numeric", timeZone: "UTC",
});

const Yes = () => <><span aria-hidden="true">✅ </span><span className="sr-only">Included: </span></>;
const No = () => <><span aria-hidden="true">❌ </span><span className="sr-only">Not included: </span></>;

/**
 * Guide + FAQ below the calculator. Static, server-rendered.
 * Every number here comes from the calculator's example values (500 leads,
 * 25 customers, ₹5,000 × 6 payments, ₹3.15 lakh monthly cost), so a reader can
 * reproduce it. Short paragraphs, second person, no em-dashes.
 */
export function Guide() {
  return (
    <article className="content" aria-labelledby="guide-title">
      <div className="wrap narrow">

        <h2 id="guide-title" className="sr-only">ROI guide for business owners</h2>

        {/* "Because" opener + Preview, Benefits, Call to action */}
        <p className="lead">Read this before you spend more on ads, because most ROI numbers ignore your sales team and office, and that hides whether you are really making money.</p>

        {/* Answer first: the 40-60 word answer AI Overviews and snippets lift. */}
        <div className="quick-answer">
          <span className="eyebrow">Quick answer</span>
          <p><strong>ROI (return on investment)</strong> = (revenue − total cost) ÷ total cost × 100. For a business that runs ads, total cost means ad spend <strong>plus sales salaries and office cost</strong>. Revenue means new customers × price × how many times each customer pays. Anything above 0% is profit.</p>
        </div>

        <p>In this guide you&apos;ll see the ROI formula with a real example, what most calculators leave out, and how ROI differs from ROAS.</p>
        <p>You&apos;ll also learn how recurring payments change the answer and three ways to raise your ROI. <a href="#calculator">Try your own numbers in the calculator</a> as you read.</p>

        <nav className="toc" aria-labelledby="toc-title">
          <p id="toc-title" className="toc-title">On this page</p>
          <ol>
            {TOC.map(({ id, label }) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}
          </ol>
        </nav>

        <h2 id="how-to-calculate-roi">How to Calculate ROI for Your Business</h2>
        <p>To calculate ROI for your business, add up everything you spent in a month, then compare it with what the customers from that month will pay you.</p>
        <p className="formula">{`Total cost = Meta Ads + Google Ads + sales salaries + office cost
Revenue    = new customers × price × number of payments
Profit     = revenue − total cost
ROI        = profit ÷ total cost × 100`}</p>
        <div className="example">
          <span className="eyebrow">Worked example</span>
          <p>You spend ₹1.6 lakh on ads, ₹90,000 on 3 salespeople and ₹65,000 on the office. That&apos;s ₹3.15 lakh in total.</p>
          <p>Your 500 leads bring 25 customers. Each pays ₹5,000 six times, so revenue is ₹7.5 lakh. Profit is ₹4.35 lakh and <strong>ROI is 138%</strong>.</p>
        </div>

        <h2 id="what-calculators-miss">What Most ROI Calculators Leave Out</h2>
        <p>Most free ROI calculators ask for just two numbers: what you invested and what you got back. That works for a one-off purchase. It doesn&apos;t work for a business that turns leads into sales.</p>
        <div className="table-wrap">
          <table className="compare-table">
            <caption className="sr-only">Typical ROI calculator vs this calculator</caption>
            <thead>
              <tr><th scope="col">What gets counted</th><th scope="col">Typical ROI calculator</th><th scope="col">This calculator</th></tr>
            </thead>
            <tbody>
              <tr><th scope="row">Meta and Google Ads spend</th><td><Yes />As one total</td><td><Yes />Each platform</td></tr>
              <tr><th scope="row">Sales team salaries</th><td><No />Usually missing</td><td><Yes />Included</td></tr>
              <tr><th scope="row">Office rent, bills, software</th><td><No />Usually missing</td><td><Yes />Included</td></tr>
              <tr><th scope="row">Customers who pay many times</th><td><No />First sale only</td><td><Yes />Every payment</td></tr>
              <tr><th scope="row">Cost per customer</th><td><No />Not shown</td><td><Yes />Shown</td></tr>
              <tr><th scope="row">Customers needed to break even</th><td><No />Not shown</td><td><Yes />Shown</td></tr>
            </tbody>
          </table>
        </div>
        <p>Here&apos;s why it matters. Count only ads in the example and ROI looks like <strong>369%</strong>. Add the sales team and office, and the real ROI is <strong>138%</strong>.</p>
        <p>Both are profitable here. But in a tighter month, the ads-only number can say &quot;profit&quot; while your bank account says &quot;loss&quot;.</p>

        <h2 id="roi-vs-roas">ROI vs ROAS: What&apos;s the Difference?</h2>
        <p>The main difference between <strong>ROI and ROAS</strong> is what they count as cost. ROAS divides revenue by ad spend only. ROI subtracts every cost, including salaries and office, and divides the profit by that total. ROAS tells you how ads perform; ROI tells you if the business makes money.</p>
        <div className="table-wrap">
          <table className="compare-table">
            <caption className="sr-only">ROI vs ROAS using the example values</caption>
            <thead>
              <tr><th scope="col">Factor</th><th scope="col">📈 ROI</th><th scope="col">📣 ROAS</th></tr>
            </thead>
            <tbody>
              <tr><th scope="row">Formula</th><td>(Revenue − total cost) ÷ total cost</td><td>Revenue ÷ ad spend</td></tr>
              <tr><th scope="row">Costs counted</th><td>Ads, salaries, office</td><td>Ads only</td></tr>
              <tr><th scope="row">Shown as</th><td>A percentage</td><td>A multiple (x)</td></tr>
              <tr><th scope="row">Example result</th><td>138%</td><td>4.7x</td></tr>
              <tr><th scope="row">Best for</th><td>Is my business profitable?</td><td>Which ad or campaign works best?</td></tr>
            </tbody>
          </table>
        </div>
        <p>Use ROAS to compare campaigns inside Meta Ads Manager or Google Ads. Use ROI to decide whether to spend more at all.</p>

        <h2 id="recurring">How Recurring Payments Change ROI</h2>
        <p>You pay once to win a customer. If they pay you every month, that one cost earns again and again. Keep everything else from the example the same and only change the number of payments:</p>
        <div className="table-wrap">
          <table className="compare-table">
            <caption className="sr-only">ROI by number of payments, using the example values</caption>
            <thead>
              <tr><th scope="col">Payments per customer</th><th scope="col">Revenue</th><th scope="col">Profit</th><th scope="col">ROI</th></tr>
            </thead>
            <tbody>
              <tr><th scope="row">1 (one-time)</th><td>₹1.25 lakh</td><td><span aria-hidden="true">🔴 </span>−₹1.9 lakh</td><td>−60%</td></tr>
              <tr><th scope="row">3</th><td>₹3.75 lakh</td><td><span aria-hidden="true">🟢 </span>₹60,000</td><td>19%</td></tr>
              <tr><th scope="row">6 (example)</th><td>₹7.5 lakh</td><td><span aria-hidden="true">🟢 </span>₹4.35 lakh</td><td>138%</td></tr>
              <tr><th scope="row">12</th><td>₹15 lakh</td><td><span aria-hidden="true">🟢 </span>₹11.85 lakh</td><td>376%</td></tr>
            </tbody>
          </table>
        </div>
        <p>Enter how many times an average customer really pays, not the longest plan you sell. If many customers cancel early, your real number is lower.</p>
        <p>Also remember that only the first payment arrives this month. You need cash to cover costs until the rest comes in.</p>

        <h2 id="good-roi">What Is a Good ROI for a Business?</h2>
        <p>A good ROI for a business is any number comfortably above 0%. At 0% you only got your money back; below 0% you lost money.</p>
        <p>There&apos;s no single target, because margins and risk differ by industry. A safer test: would you still be profitable in a bad month?</p>
        <p>The calculator helps here. It shows how many customers you need to cover your costs. In the example you need <strong>10.5 customers</strong> and you get 25, so you have room for a weak month.</p>

        <h2 id="meta-google-roi">How to Calculate ROI on Meta and Google Ads</h2>
        <p>Follow these steps with last month&apos;s numbers:</p>
        <ol>
          <li>Open Meta Ads Manager and Google Ads. Note the amount spent on each.</li>
          <li>Count the leads both platforms brought in, from your CRM or forms.</li>
          <li>Count how many of those leads paid you. Give slow deals a few weeks to close.</li>
          <li>Add your sales team&apos;s salaries and your monthly office bills.</li>
          <li>Enter your price and how many times a customer pays.</li>
        </ol>
        <p>The calculator does the rest. Rerun it every month, so you spot a falling ROI before it becomes a loss.</p>

        <h2 id="improve">How to Improve Your ROI</h2>
        <ul>
          <li><strong>Close more of your leads.</strong> Turning 35 of your 500 leads into customers instead of 25 adds ₹3 lakh revenue with the same ad spend.</li>
          <li><strong>Keep customers paying longer.</strong> Going from 6 to 12 payments lifts ROI from 138% to 376% in the example.</li>
          <li><strong>Get cheaper leads that still buy.</strong> Compare Meta and Google, and move budget to the platform that brings customers, not just leads.</li>
        </ul>

        <h2 id="who-its-for">Who This Calculator Is For</h2>
        <ul>
          <li><strong>Service businesses</strong> such as coaching, education, clinics, home services and agencies.</li>
          <li><strong>Real estate, finance and B2B</strong> teams with in-house callers.</li>
          <li><strong>Subscription and retainer businesses</strong> where each customer pays many times.</li>
        </ul>
        <p>Selling products online instead? Use our <a href={`${SITE_URL}/ecommerce-calculator`}>ecommerce profit calculator</a>.</p>

        <h2 id="faq">Frequently Asked Questions</h2>
        <div className="faq">
          {FAQ.map(({ q, a }) => (
            <section key={q} className="faq-item">
              <h3>{q}</h3>
              <p>{rich(a)}</p>
            </section>
          ))}
        </div>

        {/* E-E-A-T: who made this, who checked it, and how to reach them. */}
        <aside className="about-box" aria-labelledby="about-title">
          <h2 id="about-title">About this calculator</h2>
          <p>Built by <a href={`${SITE_URL}/`}>Acquirely</a>, a full-funnel growth team for D2C and lead-gen brands, based in New Delhi. The formulas and every example on this page are checked against the calculator itself.</p>
          <p className="reviewer">Reviewed by <a href={REVIEWER.linkedin} rel="author">{REVIEWER.name}</a>, {REVIEWER.role}. {REVIEWER.bio}</p>
          <p>Learn more <a href={ABOUT_URL}>about Acquirely</a>, or send questions and corrections to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
          <p className="updated">Last updated: <time dateTime={LAST_UPDATED}>{updated}</time></p>
        </aside>
      </div>
    </article>
  );
}
