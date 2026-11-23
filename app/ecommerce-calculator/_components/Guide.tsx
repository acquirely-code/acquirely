import Image from "next/image";
import { ABOUT_URL, AUDIT_HREF, BASE_PATH, CONTACT_EMAIL, LAST_UPDATED, REVIEWER, SITE_URL } from "@/app/ecommerce-calculator/_lib/site";
import { FAQ } from "@/app/ecommerce-calculator/_lib/seo";

/** Renders `**bold**` markers from FAQ copy as <strong>. */
const rich = (s: string) =>
  s.split(/\*\*(.+?)\*\*/g).map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part));

/** 1280×720 WebP illustration from public/ecommerce-calculator/assets/guide/. Lazy-loaded: all of them sit below the calculator. */
const Figure = ({ name, alt, caption }: { name: string; alt: string; caption: string }) => (
  <figure className="figure">
    <Image src={`${BASE_PATH}/assets/guide/ecommerce-${name}.webp`} alt={alt} width={1280} height={720} unoptimized loading="lazy" sizes="(max-width: 800px) 100vw, 760px" />
    <figcaption>{caption}</figcaption>
  </figure>
);

const Example = ({ children }: { children: React.ReactNode }) => (
  <div className="example">
    <span className="eyebrow">Illustrative example</span>
    <p>{children}</p>
  </div>
);

const Yes = () => <span aria-hidden="true">✅ </span>;
const Warn = () => <span aria-hidden="true">⚠️ </span>;
const No = () => <span aria-hidden="true">❌ </span>;

/** H2 sections, in page order. Feeds the table of contents (Google can show these as jump links). */
const TOC = [
  { id: "what-is", label: "What is an ecommerce calculator?" },
  { id: "how-it-works", label: "How the ecommerce calculator works" },
  { id: "profit-calculation", label: "How to calculate ecommerce profit" },
  { id: "profit-margin", label: "Ecommerce profit margin: gross vs net" },
  { id: "rto", label: "How RTO impacts COD profitability" },
  { id: "cod-vs-prepaid", label: "COD vs prepaid orders" },
  { id: "break-even-cpa", label: "How to calculate break-even CPA" },
  { id: "break-even-roas", label: "How to calculate break-even ROAS" },
  { id: "pricing", label: "How to price a product with the calculator" },
  { id: "marketplaces", label: "Shopify, Amazon, Flipkart and Meesho fees" },
  { id: "who-its-for", label: "Who this ecommerce calculator is for" },
  { id: "faq", label: "FAQ" },
];

const updated = new Date(`${LAST_UPDATED}T00:00:00Z`).toLocaleDateString("en-IN", {
  day: "numeric", month: "long", year: "numeric", timeZone: "UTC",
});

/** Educational content + FAQ below the calculator. Static, server-rendered. */
export function Guide() {
  return (
    <article className="content" aria-labelledby="guide-title">
      <div className="wrap narrow">

        <h2 id="guide-title" className="sr-only">Ecommerce calculator guide</h2>

        <Figure name="cover" alt="Ecommerce profit breakdown from the calculator: ₹11,61,725 delivered revenue minus ads, product, shipping, RTO and fees leaves ₹3,52,931 net profit" caption="What a store really keeps: the ecommerce calculator's example month, cost by cost." />

        <p className="lead">Read this before you raise your ad budget, because a store can show a strong ROAS in Meta Ads and still lose money once shipping, RTO and fees are paid.</p>

        {/* Answer first: the 2-3 sentence answer AI Overviews and snippets lift. */}
        <div className="quick-answer">
          <span className="eyebrow">Quick answer</span>
          <p>An <strong>ecommerce calculator</strong> turns your orders, prices, costs and ad spend into net profit, margin, ROAS and break-even numbers. To calculate <strong>ecommerce profit</strong>, take revenue from delivered orders and subtract product cost, ads, shipping, RTO, fees and fixed costs. Your <strong>break-even CPA</strong> is the most you can pay per order before that profit hits zero.</p>
        </div>

        <p>In this guide you&apos;ll see how each ecommerce metric is calculated, with worked examples taken straight from the calculator above.</p>
        <p>You&apos;ll learn the difference between gross and net margin, how RTO and COD change your profit, and how to find your break-even CPA and ROAS. <a href="#calculator">Try your own numbers in the ecommerce calculator</a> as you read.</p>

        <nav className="toc" aria-labelledby="toc-title">
          <p id="toc-title" className="toc-title">On this page</p>
          <ol>
            {TOC.map(({ id, label }) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}
          </ol>
        </nav>

        <h2 id="what-is">What Is an Ecommerce Calculator?</h2>
        <p>An <strong>ecommerce calculator</strong> is a free online tool that shows whether your store, product or campaign makes money. You enter orders, prices, costs and ad spend. It returns net profit, profit margin, ROAS and the break-even numbers you need before scaling ads.</p>
        <p>Most free ecommerce calculators answer one question at a time. This one connects them, so a change in delivery rate or CPA flows through to profit, margin and break-even in one step.</p>
        <div className="table-wrap">
          <table className="compare-table">
            <caption className="sr-only">Types of ecommerce calculators and which ones this tool covers</caption>
            <thead>
              <tr><th scope="col">Ecommerce calculator</th><th scope="col">What it tells you</th><th scope="col">In this tool</th></tr>
            </thead>
            <tbody>
              <tr><th scope="row">Profit calculator</th><td>What you keep after every cost</td><td><Yes />Net profit per month and per order</td></tr>
              <tr><th scope="row">Profit margin calculator</th><td>Profit as a share of revenue</td><td><Yes />Net margin on delivered revenue</td></tr>
              <tr><th scope="row">ROAS calculator</th><td>Revenue per rupee of ad spend</td><td><Yes />ROAS on delivered revenue</td></tr>
              <tr><th scope="row">Break-even calculator</th><td>The ad cost where profit hits zero</td><td><Yes />Break-even CPA and ROAS</td></tr>
              <tr><th scope="row">COD and RTO calculator</th><td>What failed deliveries cost you</td><td><Yes />Separate COD and prepaid rates</td></tr>
              <tr><th scope="row">Pricing calculator</th><td>What price to charge</td><td><Warn />Test prices by changing order value</td></tr>
              <tr><th scope="row">Marketplace fee calculator</th><td>Amazon, Flipkart or Meesho fees</td><td><Warn />Add fees as other cost per order</td></tr>
              <tr><th scope="row">Shipping rate calculator</th><td>Courier price per parcel</td><td><No />Use your courier&apos;s rate card</td></tr>
            </tbody>
          </table>
        </div>

        <h2 id="how-it-works">How the Ecommerce Calculator Works</h2>
        <p>This ecommerce calculator turns the numbers you already track into one answer: after every cost, is this product making money?</p>
        <p>Your ads dashboard can&apos;t tell you that, because it has no idea how many orders were actually delivered. This calculator follows an order from click to cash:</p>
        <ol>
          <li><strong>Orders generated</strong>: what your ads and store produce in a month.</li>
          <li><strong>Cancellations</strong>: orders dropped before dispatch, for example after a failed confirmation call.</li>
          <li><strong>Dispatched orders</strong>: split into COD and prepaid by your order mix.</li>
          <li><strong>Delivered orders</strong>: dispatched orders multiplied by the delivery rate for each payment type. The rest come back as RTO.</li>
          <li><strong>Revenue and costs</strong>: each cost is charged at the stage where it actually happens.</li>
        </ol>
        <Figure name="order-flow" alt="Order flow funnel: 1,000 orders generated, 1,000 dispatched, 775 delivered and 225 returned as RTO" caption="Ads are paid on every order, shipping on every dispatch, and revenue arrives only on delivered orders." />
        <p>That last step is where most spreadsheets go wrong. Ad spend is paid on every order. Shipping and packing are paid on every dispatched order. Revenue only arrives on delivered orders.</p>
        <p>Mix up those three bases and a losing product can look healthy.</p>

        <h2 id="profit-calculation">How to Calculate Ecommerce Profit</h2>
        <p>To calculate ecommerce profit, take delivered revenue and subtract everything it cost to get there:</p>
        <p className="formula">{`Delivered revenue = delivered orders × average order value

Net profit = delivered revenue
  − product cost − ad spend − forward shipping − RTO shipping
  − fulfilment − COD fees − payment gateway fees
  − other per-order costs − fixed costs`}</p>
        <p>Each cost uses its own base:</p>
        <div className="table-wrap">
          <table>
            <caption className="sr-only">Which orders each cost is charged on</caption>
            <thead><tr><th scope="col">Cost</th><th scope="col" style={{ textAlign: "right" }}>Charged on</th></tr></thead>
            <tbody>
              <tr><th scope="row">Advertising (CPA)</th><td>Every generated order</td></tr>
              <tr><th scope="row">Forward shipping, fulfilment, other costs</th><td>Every dispatched order</td></tr>
              <tr><th scope="row">RTO shipping</th><td>Every failed delivery</td></tr>
              <tr><th scope="row">COD fee</th><td>Delivered COD orders</td></tr>
              <tr><th scope="row">Payment gateway</th><td>Delivered prepaid revenue</td></tr>
              <tr><th scope="row">Product cost</th><td>Delivered or dispatched (your choice)</td></tr>
            </tbody>
          </table>
        </div>

        <h3>Revenue is not profit</h3>
        <p>Revenue tells you how much money moved through your store. Profit is what you keep.</p>
        <p>A store doing ₹10 lakh a month in delivered revenue can easily keep less than ₹1 lakh once ads, shipping and returns are paid. Net margin (net profit ÷ delivered revenue) shows whether growth is worth it.</p>
        <Figure name="revenue-breakdown" alt="Stacked bar of where ₹11.6 lakh delivered revenue goes: ads 30.1%, product 26.7%, shipping 6.9%, fulfilment 2.6%, RTO 1.5%, fees 1.8%, net profit 30.4%" caption="Ads and product cost take more than half of delivered revenue in the example." />

        <h2 id="profit-margin">Ecommerce Profit Margin: Gross vs Net</h2>
        <p>The main difference between <strong>gross margin and net margin</strong> is which costs you subtract. Gross margin only removes product cost. Net margin removes every cost, including ads, shipping, RTO, fees and fixed costs.</p>
        <p className="formula">{`Gross margin = (price − product cost) ÷ price × 100
Net margin   = net profit ÷ delivered revenue × 100`}</p>
        <Example>The calculator&apos;s example product sells for ₹1,499 and costs ₹400. Its gross margin is <strong>73.3%</strong>. After ads, shipping, RTO and fees, the store keeps a net margin of <strong>30.4%</strong>. Plan your ad budget on the second number, not the first.</Example>

        <h3>What is a good ecommerce profit margin?</h3>
        <p>A good ecommerce profit margin is one that survives a bad month. There&apos;s no single target, because category, price, ad costs and COD share all change it.</p>
        <p>A safer test is to stress your numbers. In the example, a 20% jump in CPA (₹350 to ₹420) drops net margin from 30.4% to 24.4%. The store is still comfortably profitable.</p>
        <p>The calculator flags any result within 5% of zero as <strong>near break-even</strong>. If one bad week of CPA or RTO would push you there, fix the margin before you scale.</p>

        <h3>Markup vs margin</h3>
        <p>Markup is profit divided by cost. Margin is profit divided by selling price. A product bought at ₹400 and sold at ₹1,000 has a 150% markup but only a 60% gross margin.</p>
        <p>Always plan ad budgets on margin. Planning on markup makes every product look far more profitable than it is.</p>

        <h3>How product cost affects contribution margin</h3>
        <p>Contribution margin is what each order leaves you after its variable costs and before fixed costs. Product cost is usually the largest piece after ads, so small changes matter.</p>
        <Example>With the example values in the calculator (1,000 orders, ₹1,499 AOV, 70% COD), raising product cost from ₹400 to ₹550 lowers estimated net profit from about ₹3.53 lakh to ₹2.37 lakh. Break-even CPA falls from ₹703 to ₹587. A ₹150 supplier increase takes ₹116 off the most you can pay per order in ads.</Example>
        <p>The &quot;Charge product cost on&quot; setting matters here too. If returned units are resold, charge product cost on delivered orders only.</p>
        <p>If returns are often damaged, or your supplier bills every dispatched unit, charge it on all dispatched orders.</p>

        <h2 id="rto">How RTO Impacts COD Profitability</h2>
        <p>RTO (return to origin) happens when a COD customer refuses the parcel or can&apos;t be reached. By then you have already paid for the ad click, the product pick, the packing and the outbound shipping.</p>
        <p>Then you pay again for the parcel to come back, and you collect nothing. That&apos;s why delivery rate matters so much for COD sellers: a lower rate cuts revenue and adds costs at the same time.</p>
        <Figure name="rto-cost" alt="One RTO order costs ₹540: ₹350 ad cost, ₹80 forward shipping, ₹30 fulfilment and ₹80 return shipping, with ₹0 revenue" caption="Every refused COD parcel is a loss of about ₹540 in the example, before counting any product damage." />
        <Example>Keep every other example value the same and drop COD delivery rate from 70% to 55%. Delivered orders fall from 775 to 670, RTO cost rises from ₹18,000 to ₹26,400, and estimated net profit falls from about ₹3.53 lakh to ₹2.32 lakh. If returned stock also can&apos;t be resold, profit drops to about ₹1.0 lakh.</Example>

        <h2 id="cod-vs-prepaid">COD vs Prepaid Orders: What&apos;s the Difference?</h2>
        <p>The main difference between COD and prepaid orders is when the money arrives. Prepaid customers pay at checkout, so most parcels are delivered and the main cost is a gateway fee. COD customers pay on delivery, which lifts conversion but brings more RTO and a flat COD fee.</p>
        <Figure name="cod-vs-prepaid" alt="All-COD vs all-prepaid: 700 vs 950 delivered orders, ₹24,000 vs ₹4,000 RTO cost, ₹2.68 lakh vs ₹5.52 lakh net profit" caption="At the same ₹350 CPA, the same 1,000 orders earn ₹2.84 lakh more when every order is prepaid." />
        <div className="table-wrap">
          <table className="compare-table">
            <caption className="sr-only">COD vs prepaid orders, using the calculator&apos;s example values</caption>
            <thead>
              <tr><th scope="col">Factor</th><th scope="col">💵 COD</th><th scope="col">💳 Prepaid</th></tr>
            </thead>
            <tbody>
              <tr><th scope="row">When you get paid</th><td>After delivery, via the courier</td><td>At checkout</td></tr>
              <tr><th scope="row">Conversion rate</th><td><Yes />Usually higher</td><td><Warn />Usually lower</td></tr>
              <tr><th scope="row">Delivery rate (example)</th><td><Warn />70%</td><td><Yes />95%</td></tr>
              <tr><th scope="row">Payment fee</th><td>Flat COD fee per delivered order</td><td>Gateway % of revenue</td></tr>
              <tr><th scope="row">RTO cost on 1,000 orders</th><td><Warn />₹24,000</td><td><Yes />₹4,000</td></tr>
              <tr><th scope="row">Net profit on 1,000 orders</th><td>₹2.68 lakh</td><td><Yes />₹5.52 lakh</td></tr>
              <tr><th scope="row">Break-even CPA</th><td>₹618</td><td><Yes />₹902</td></tr>
            </tbody>
          </table>
        </div>
        <p>The last three rows compare an all-COD mix with an all-prepaid mix, keeping every other example value the same. Switching the whole mix to prepaid lifts delivered orders from 700 to 950.</p>
        <p>That&apos;s why many Indian D2C brands offer a small prepaid discount: it often costs less than the RTO it prevents. Use the COD share and the two delivery-rate fields to test a prepaid incentive before you launch it.</p>

        <h2 id="break-even-cpa">How to Calculate Break-Even CPA</h2>
        <p><strong>CPA (cost per acquisition)</strong> is your ad spend divided by the orders it generated. In Meta Ads this is usually &quot;cost per purchase&quot;; in Google Ads, &quot;cost per conversion&quot;.</p>
        <p><strong>Break-even CPA</strong> is the highest CPA at which you still make zero profit, not a loss. To find it, work out what one generated order is worth before advertising:</p>
        <p className="formula">{`Contribution per order (before ads) =
  AOV × delivered share
  − product cost − shipping − RTO − fulfilment
  − COD fee − gateway fee − other costs   (each per generated order)

Break-even CPA = contribution per order − (fixed costs ÷ orders)
CPA headroom   = break-even CPA − current CPA`}</p>
        <p>Because delivery rate is built in, break-even CPA is often far lower than sellers expect. In the default example it&apos;s ₹703 on a ₹1,499 product.</p>
        <p>Positive headroom means you have room to scale into higher CPAs. Negative headroom means every extra order loses money under your assumptions.</p>

        <h2 id="break-even-roas">How to Calculate Break-Even ROAS</h2>
        <p><strong>ROAS (return on ad spend)</strong> is revenue divided by ad spend. This calculator uses <em>delivered</em> revenue. That&apos;s usually lower than the purchase value your ad platform reports, because the platform counts orders that later go RTO.</p>
        <p><strong>Break-even ROAS</strong> is the ROAS at which net profit is zero:</p>
        <p className="formula">{`Break-even ad spend = orders × break-even CPA
Break-even ROAS     = delivered revenue ÷ break-even ad spend`}</p>
        <p>In the example, current ROAS is 3.32x and break-even ROAS is 1.65x. If break-even ad spend is zero or negative, the product can&apos;t break even at any ad cost, and the calculator says so instead of showing a meaningless number.</p>

        <h3>Why the &quot;1 ÷ margin&quot; shortcut fails for COD stores</h3>
        <p>Many ROAS calculators use break-even ROAS = 1 ÷ gross margin. On the example product (₹1,499 price, ₹400 product cost, ₹80 shipping) that gives a 68% margin and a break-even ROAS of <strong>1.47x</strong>.</p>
        <p>The shortcut ignores RTO, failed deliveries and fees. Counting them, the real break-even is <strong>1.65x</strong> on delivered revenue.</p>
        <p>Meta Ads reports ROAS on every purchase, delivered or not. In those platform terms the same product needs <strong>2.13x</strong> just to break even.</p>
        <p>Run it at the 1.47x the shortcut suggests and you pay about ₹1,020 per order against a break-even CPA of ₹703. Every sale loses money.</p>
        <Figure name="break-even-roas" alt="Break-even ROAS comparison: 1.47x shortcut, 1.65x real on delivered revenue, 2.13x real in Meta Ads terms" caption="The shortcut target sits well below the real break-even once RTO and platform reporting are counted." />

        <h3>Using the calculator before scaling Meta or Google Ads</h3>
        <ol>
          <li>Pull the last 30 days of orders, AOV and COD share from your store.</li>
          <li>Get delivery rates by payment type from your courier or shipping aggregator. Use settled numbers, not in-transit.</li>
          <li>Enter your actual cost per purchase from the ad platform as CPA.</li>
          <li>Check CPA headroom. Scaling usually raises CPA, so small headroom means little room to grow.</li>
          <li>Set your ad platform&apos;s target ROAS or cost cap using platform-reported numbers, adjusted for your delivery rate.</li>
        </ol>
        <p>Rerun the numbers whenever your courier, product cost or COD share changes.</p>

        <h2 id="pricing">How to Price a Product With the Calculator</h2>
        <p>Price is the lever most sellers test last, but it moves profit fastest. Every extra rupee of price on a delivered order goes straight to profit, while most costs stay the same.</p>
        <Example>Keep every other example value the same. At ₹1,299, estimated net profit is about ₹1.99 lakh. At ₹1,499 it&apos;s ₹3.53 lakh, and at ₹1,699 it&apos;s ₹5.07 lakh. Break-even CPA moves from ₹549 to ₹703 to ₹857.</Example>
        <p>A higher price can lower your conversion rate, which raises CPA. So change the average order value and the CPA together, and check which combination leaves the most headroom.</p>

        <h2 id="marketplaces">Using the Calculator for Shopify, Amazon, Flipkart and Meesho</h2>
        <p>The calculator doesn&apos;t connect to any platform, so it works with any store or marketplace. Map each fee to the closest field:</p>
        <ul>
          <li><strong>Shopify or WooCommerce:</strong> enter your payment gateway percentage, and add app or platform fees as other cost per order.</li>
          <li><strong>Amazon, Flipkart or Meesho:</strong> convert commission and closing fees to rupees per order, then enter them as other cost per order.</li>
          <li><strong>Fixed costs:</strong> add your plan fees, staff and software as monthly fixed costs.</li>
        </ul>
        <Example>A 10% commission on the ₹1,499 example product is about ₹150 per order. Adding it cuts estimated net profit from ₹3.53 lakh to ₹2.03 lakh, and break-even CPA from ₹703 to ₹553.</Example>
        <p>Other cost per order is charged on every dispatched order, so this is a slightly cautious estimate. Check each marketplace&apos;s own fee page for exact rates.</p>

        <h2 id="who-its-for">Who This Ecommerce Calculator Is For</h2>
        <ul>
          <li><strong>D2C brands and dropshippers</strong> selling on Shopify, WooCommerce or their own store.</li>
          <li><strong>Marketplace sellers</strong> on Amazon, Flipkart or Meesho who want profit after every fee.</li>
          <li><strong>COD-heavy sellers</strong>, especially in India, where RTO decides whether a product makes money.</li>
          <li><strong>Media buyers</strong> who need a break-even CPA or ROAS target before scaling Meta or Google Ads.</li>
        </ul>
        <p>If your numbers show thin or negative headroom, <a href="#calculator">adjust one input at a time</a> to see which lever moves profit most. Want a second pair of eyes? <a href={AUDIT_HREF} target="_blank" rel="noopener nofollow">Ask us for a profitability audit</a>.</p>

        <h2 id="faq">Frequently Asked Questions</h2>
        <div className="faq">
          {FAQ.map(({ q, a }) => (
            <section key={q} className="faq-item">
              <h3>{q}</h3>
              <p>{rich(a)}</p>
            </section>
          ))}
        </div>

        {/* E-E-A-T: who made this, who checked it and how to reach them. */}
        <aside className="about-box" aria-labelledby="about-title">
          <h2 id="about-title">About this ecommerce calculator</h2>
          <p>Built by <a href={`${SITE_URL}/`}>Acquirely</a>, a full-funnel growth team for D2C and lead-gen brands, based in New Delhi. The formulas and every example on this page are checked against the calculator itself.</p>
          <p className="reviewer">Reviewed by <a href={REVIEWER.linkedin} rel="author">{REVIEWER.name}</a>, {REVIEWER.role}. {REVIEWER.bio}</p>
          <p>Learn more <a href={ABOUT_URL}>about Acquirely</a>, or send questions and corrections to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
          <p className="updated">Last updated: <time dateTime={LAST_UPDATED}>{updated}</time></p>
        </aside>
      </div>
    </article>
  );
}
