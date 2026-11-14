// /about-us page body (between the shared SiteHeader and SiteFooter). Styles: ./about.css, scoped under .ab.
const BOOK =
  "https://forms.acquirely.in/acquirely/form/FunnelReviewCallECom/formperma/muJYVHXbKDbQ7N3xEPr_lrjkOuBMe33JPNULGFJm9Kg";
const IMG = "/ecommerce/img";
const LINKEDIN = `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 11.02 5 2.5 2.5 0 01-.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.6 8.65 21 11.2 21 14.5V21h-4v-5.8c0-1.4 0-3.2-1.95-3.2S12.8 13.5 12.8 15.1V21H9z"/></svg>`;

// Shown on the page and emitted as FAQPage schema (page.tsx), so the two never drift apart.
export const faqs: { q: string; a: string }[] = [
  {
    q: "What is Acquirely?",
    a: "<b>Acquirely is a full-funnel growth team</b> based in New Delhi, India. Founded in 2025 by Mausam Arora and Kunal Mondal, it scales D2C ecommerce and lead-generation brands with <b>Meta Ads and Google Ads</b>, using a weekly system called the A3 Flywheel. Clients are in India, Canada and the USA.",
  },
  {
    q: "Who founded Acquirely?",
    a: "<b>Acquirely was founded by Mausam Arora</b>, who leads funnels and go-to-market, <b>and Kunal Mondal</b>, who leads Meta strategy. Mausam spent 12 years building education businesses. Kunal has managed ₹30Cr+ in ad spend across 30+ brands. Both stay hands-on in client accounts.",
  },
  {
    q: "What is the A3 Flywheel?",
    a: "<b>The A3 Flywheel is Acquirely's weekly system for scaling paid ads.</b> A1 is Foundation Structure: one Prospecting CBO and one Retention campaign. A2 is Creative Framework: a new creative Pack every week. A3 is Micro Analysis: moving budget from weak days to strong ones using 90 days of data.",
  },
  {
    q: "Who owns the ad accounts when you work with Acquirely?",
    a: "<b>You do, always.</b> When you work with Acquirely, your ad accounts, pixel, data and website stay in your name. Every scale or cut decision comes with the numbers behind it, so you keep full visibility and full control of your growth assets.",
  },
  {
    q: "How long does it take to see results with Acquirely?",
    a: "With Acquirely, <b>first winning creatives usually show up in 3 to 6 weeks.</b> Structured scaling follows once there is a baseline. Micro Analysis needs about 90 days of your data, so a fair window to judge the full system is 75 to 90 days.",
  },
];

const markup = `
<main id="main">

  <section class="hero" aria-labelledby="page-title">
    <div class="wrap">
      <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a> / <span aria-current="page">About Us</span></nav>
      <span class="eyebrow">About Acquirely</span>
      <h1 id="page-title">We build <span class="grad">growth systems</span>, not just ad campaigns</h1>
      <p class="because">Read this before you hire your next agency, because knowing who will actually run your budget tells you more than any sales deck.</p>
      <p class="lede"><b>Acquirely is a full-funnel growth team in New Delhi, India.</b> Founded in 2025 by Mausam Arora and Kunal Mondal, we scale D2C ecommerce and lead-gen brands on <b>Meta Ads and Google Ads</b> with the A3 Flywheel, a weekly system that makes every month build on the last.</p>
      <ul class="quick" aria-label="What we do">
        <li><a href="/ecommerce"><span class="dot"></span>D2C &amp; ecommerce growth</a></li>
        <li><a href="/lead-gen"><span class="dot"></span>Lead generation ads</a></li>
        <li><a href="/edtech"><span class="dot"></span>EdTech for schools</a></li>
        <li><a href="/publishers"><span class="dot"></span>Education publishers</a></li>
      </ul>
    </div>
  </section>

  <div class="strip">
    <div class="wrap">
      <ul class="facts">
        <li><small>Founded</small><b>2025</b></li>
        <li><small>Based in</small><b>New Delhi, India</b></li>
        <li><small>Clients in</small><b>India, Canada &amp; USA</b></li>
        <li><small>Channels</small><b>Meta &amp; Google Ads</b></li>
      </ul>
    </div>
  </div>

  <section class="band" style="padding-block:40px 0" aria-label="Contents">
    <div class="wrap">
      <nav class="card toc" aria-labelledby="toc-title">
        <h2 id="toc-title">On this page</h2>
        <ol>
          <li><a href="#who-we-are">Who is Acquirely?</a></li>
          <li><a href="#why-we-exist">Why we started Acquirely</a></li>
          <li><a href="#results">Results by the numbers</a></li>
          <li><a href="#what-makes-us-different">What makes us different</a></li>
          <li><a href="#a3-flywheel">How the A3 Flywheel works</a></li>
          <li><a href="#who-we-work-with">Who we work with</a></li>
          <li><a href="#founders">Meet the founders</a></li>
          <li><a href="#how-we-work">Our commitments</a></li>
          <li><a href="#contact">How to contact us</a></li>
          <li><a href="#faq">FAQs about Acquirely</a></li>
        </ol>
      </nav>
    </div>
  </section>

  <section class="band" id="who-we-are" aria-labelledby="h-who">
    <div class="wrap">
      <div class="head">
        <span class="eyebrow">Who we are</span>
        <h2 id="h-who">Who is Acquirely?</h2>
        <p>Not a full-service agency. <span class="grad" style="font-weight:700">A full-funnel one.</span></p>
      </div>
      <div class="split">
        <div class="card prose">
          <h3>One team, measured on revenue</h3>
          <p>Since 2025, we have helped premium D2C and lead-gen brands grow profitably. You get predictable, scalable growth, not random spikes followed by a crash.</p>
          <p>Full-service agencies sell you a menu. We sell you an outcome. One strategist decides where your next rupee goes: which channel, which page, or fixing checkout first.</p>
        </div>
        <div class="card prose">
          <h3>Two growth engines</h3>
          <p>A ₹500 snack and a ₹6 lakh enrolment need completely different funnels. So we run two specialist practices, each with its own playbook.</p>
          <p>Explore <a href="/ecommerce">D2C and ecommerce growth</a> or <a href="/lead-gen">lead generation for high-ticket offers</a>. Want to check your numbers first? Try the free <a href="/ecommerce-calculator">ecommerce profit calculator</a> or <a href="/roi-calculator">ROI calculator</a>.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="band white" id="why-we-exist" aria-labelledby="h-why">
    <div class="wrap">
      <div class="head">
        <span class="eyebrow">Why we exist</span>
        <h2 id="h-why">Why we started Acquirely: we have been in your shoes</h2>
      </div>
      <div class="split" style="align-items:stretch">
        <div class="card prose">
          <h3>We sat on the brand side first</h3>
          <p>Before Acquirely, we led marketing for UMG and helped scale Propel's Immersion conference.</p>
          <p>Again and again, we watched agencies overpromise in the pitch and underdeliver in the account. Reporting was vague, and nobody owned the outcome.</p>
          <p>So in 2025 we built the agency we wished we could have hired, around three ideas: <b style="color:var(--ink)">accountability, transparency and real business results</b>.</p>
        </div>
        <figure class="dcard" style="margin:0">
          <span class="eyebrow" style="color:var(--orange)">From the founder</span>
          <blockquote class="quote">"We couldn't find an agency we'd trust with our own money. So we built one."</blockquote>
          <figcaption class="quote-by">
            <img src="${IMG}/mausam-arora.jpg" width="256" height="256" alt="Mausam Arora" loading="lazy">
            <span><b>Mausam Arora</b>Co-founder, Acquirely</span>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>

  <section class="band dark" id="results" aria-labelledby="h-results">
    <div class="wrap">
      <div class="head">
        <span class="eyebrow">By the numbers</span>
        <h2 id="h-results">Numbers don't lie</h2>
        <p>Revenue for D2C brands. Qualified leads for lead-gen businesses. No vanity metrics.</p>
      </div>
      <div class="stats">
        <div class="stat"><b>20+</b><span>D2C and lead-gen brands scaled with the A3 Flywheel</span></div>
        <div class="stat"><b>5x</b><span>Revenue growth for a D2C puzzle brand in one quarter</span></div>
        <div class="stat"><b>98.7%</b><span>Drop in cost per lead for a fintech marketplace</span></div>
        <div class="stat"><b>₹30Cr+</b><span>Ad spend managed by the founding team</span></div>
      </div>
      <p class="stats-link">See the results behind these numbers for <a href="/ecommerce#results">D2C and ecommerce brands</a> and <a href="/lead-gen#results">lead generation</a>.</p>
    </div>
  </section>

  <section class="band" id="what-makes-us-different" aria-labelledby="h-diff">
    <div class="wrap">
      <div class="head">
        <span class="eyebrow">Our principles</span>
        <h2 id="h-diff">What makes Acquirely different from a typical ad agency?</h2>
        <p>Five principles shape every decision we make inside your ad account.</p>
      </div>
      <div class="pillars">
        <article class="card pillar"><div class="pillar-top"><span class="num">01</span><h3>We think like founders</h3></div><p>Every decision is one we would make if our own money were on the line.</p></article>
        <article class="card pillar"><div class="pillar-top"><span class="num o">02</span><h3>We take ownership</h3></div><p>We focus on revenue and profit, not vanity metrics. When results dip, we act first and explain why.</p></article>
        <article class="card pillar"><div class="pillar-top"><span class="num">03</span><h3>We test with purpose</h3></div><p>Every creative, audience and offer gets a clear hypothesis. Data, not opinion, decides what stays.</p></article>
        <article class="card pillar"><div class="pillar-top"><span class="num o">04</span><h3>We build systems, not campaigns</h3></div><p>Winning tests feed a repeatable weekly process, so performance improves month after month.</p></article>
        <article class="card pillar"><div class="pillar-top"><span class="num">05</span><h3>We are radically transparent</h3></div><p>You see your spend, performance and strategy in one live dashboard. No black-box reporting, ever.</p></article>
        <article class="card pillar" style="background:var(--blue-soft);border-color:#c7d2fe"><div class="pillar-top"><span class="num o">✓</span><h3>Founders in your account</h3></div><p>At most agencies the founder sells and a junior delivers. Here, the people on your diagnosis call are the people in your account.</p></article>
      </div>

      <div class="card table-wrap">
        <table>
          <caption>Acquirely vs a typical performance marketing agency</caption>
          <thead><tr><th scope="col">What you get</th><th scope="col">Typical agency</th><th scope="col">Acquirely</th></tr></thead>
          <tbody>
            <tr><th scope="row">Who runs your account</th><td class="no">A junior account manager</td><td class="yes">Founders plus a Meta and a Google specialist</td></tr>
            <tr><th scope="row">Month to month</th><td class="no">Restarts from scratch</td><td class="yes">Builds on every past test (A3 Flywheel)</td></tr>
            <tr><th scope="row">Scaling budgets</th><td class="no">Raised on gut feel</td><td class="yes">Raised only when the data supports it</td></tr>
            <tr><th scope="row">Reporting</th><td class="no">Vanity metrics, black box</td><td class="yes">One live dashboard, one monthly review</td></tr>
            <tr><th scope="row">Ad accounts and data</th><td class="no">Often held by the agency</td><td class="yes">Always stay in your name</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <section class="band white" id="a3-flywheel" aria-labelledby="h-a3">
    <div class="wrap">
      <div class="head">
        <span class="eyebrow">The method</span>
        <h2 id="h-a3">How does the A3 Flywheel work?</h2>
        <p><b style="color:var(--ink)">The A3 Flywheel is our weekly system for scaling Meta and Google Ads.</b> One structure, three systems, run every week, refined across 20+ ad accounts after Meta's Andromeda update.</p>
      </div>
      <div class="card fly">
        <svg viewBox="0 0 400 400" role="img" aria-label="A3 Flywheel: A1 Structure feeds A2 Creative, which feeds A3 Micro Analysis, which feeds back into A1">
          <defs>
            <marker id="ab-ar" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="#6366F1"/></marker>
            <linearGradient id="ab-ring" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#6366F1"/><stop offset="1" stop-color="#F97316"/></linearGradient>
          </defs>
          <circle class="fly-ring" cx="200" cy="200" r="135" stroke-width="1.5" stroke-dasharray="4 7"/>
          <path d="M238 70 A135 135 0 0 1 318 268" fill="none" stroke="url(#ab-ring)" stroke-width="3" stroke-linecap="round" marker-end="url(#ab-ar)"/>
          <path d="M285 316 A135 135 0 0 1 112 304" fill="none" stroke="url(#ab-ring)" stroke-width="3" stroke-linecap="round" marker-end="url(#ab-ar)"/>
          <path d="M78 258 A135 135 0 0 1 154 74" fill="none" stroke="url(#ab-ring)" stroke-width="3" stroke-linecap="round" marker-end="url(#ab-ar)"/>
          <g font-family="Montserrat,sans-serif" text-anchor="middle">
            <circle cx="200" cy="66" r="44" fill="#2B7FFF"/>
            <text x="200" y="64" fill="#fff" font-weight="800" font-size="20">A1</text>
            <text x="200" y="82" fill="#E0ECFF" font-size="10.5" font-weight="600">Structure</text>
            <circle cx="316" cy="270" r="44" fill="#F37513"/>
            <text x="316" y="268" fill="#fff" font-weight="800" font-size="20">A2</text>
            <text x="316" y="286" fill="#FFE8D6" font-size="10.5" font-weight="600">Creative</text>
            <circle cx="84" cy="270" r="44" fill="#6366F1"/>
            <text x="84" y="268" fill="#fff" font-weight="800" font-size="20">A3</text>
            <text x="84" y="286" fill="#E0E7FF" font-size="9.5" font-weight="600">Micro Analysis</text>
            <text class="fly-sub" x="200" y="196" font-weight="700" font-size="11" letter-spacing="3">RUNS</text>
            <text class="fly-main" x="200" y="222" font-weight="800" font-size="24">WEEKLY</text>
          </g>
        </svg>
        <div class="stages">
          <div class="stage"><span class="code">A1</span><div><h3>Foundation Structure</h3><p>Two campaigns, not five. One Prospecting CBO that tests and scales new-customer ads, and one Retention campaign for people who have already bought.</p></div></div>
          <div class="stage"><span class="code">A2</span><div><h3>Creative Framework</h3><p>A new creative Pack every week, built from competitor research, net-new concepts and iterations of proven winners.</p></div></div>
          <div class="stage"><span class="code">A3</span><div><h3>Micro Analysis</h3><p>Meta doesn't perform the same every day, so your budget shouldn't either. With 90 days of data, spend moves from weak days to strong ones.</p></div></div>
        </div>
      </div>
      <div class="split fly-after">
        <div class="card" style="padding:28px">
          <h3>Why this model works</h3>
          <p>Most agencies restart from scratch every month. We don't. The flywheel learns from every test, so each week starts smarter than the last.</p>
        </div>
        <div class="card" style="padding:28px">
          <h3>What this means for you</h3>
          <p>Smarter campaigns over time, more consistent revenue, lower acquisition costs and performance that holds up as you scale.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="band" id="who-we-work-with" aria-labelledby="h-fit">
    <div class="wrap">
      <div class="head">
        <span class="eyebrow">Who this is for</span>
        <h2 id="h-fit">Who is Acquirely the right fit for?</h2>
        <p>We work with two kinds of founders: brands ready to scale, and new brands ready to launch properly. If that's not you yet, we'll tell you on the call.</p>
      </div>
      <div class="fit">
        <div class="card yes">
          <h3>Scaling brands</h3>
          <ul>
            <li>You spend ₹5L+ a month on ads</li>
            <li>Your product or service already sells</li>
            <li>You hit a ceiling when you try to scale</li>
            <li>You are tired of four vendors who blame each other</li>
          </ul>
        </div>
        <div class="card yes">
          <h3>New brands, launched right</h3>
          <ul>
            <li>You have a clear vision for the brand and who it's for</li>
            <li>You have a planned launch budget, not just money for the first ads</li>
            <li>You want one team to build the whole funnel from day one</li>
          </ul>
        </div>
        <div class="card no">
          <h3>Not a fit if you</h3>
          <ul>
            <li>Have an idea but no clear vision or launch budget yet</li>
            <li>Are shopping for the cheapest option</li>
            <li>Aren't ready to scale spend when it works</li>
            <li>Expect results in week one without data</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="band white" id="founders" aria-labelledby="h-founders">
    <div class="wrap">
      <div class="head">
        <span class="eyebrow">Meet the founders</span>
        <h2 id="h-founders">Who runs Acquirely? Built by operators, not just agency owners</h2>
        <p>You work directly with the people who built the system. Both founders stay hands-on inside client accounts.</p>
      </div>
      <div class="team">
        <article class="card person" id="mausam-arora">
          <div class="avatar"><img src="${IMG}/mausam-arora.jpg" width="256" height="256" alt="Mausam Arora, co-founder of Acquirely" loading="lazy"></div>
          <div>
            <h3>Mausam Arora</h3>
            <p class="role">Co-founder · Funnels &amp; GTM</p>
            <p>Mausam spent 12 years building businesses in education: curricula, 300+ books, and distribution to 2,000+ schools. That journey taught him that great products don't grow themselves.</p>
            <p>He built Acquirely to turn scattered ad spend into acquisition systems that compound.</p>
            <ul>
              <li>Founder-level view of what happens before and after the click</li>
              <li>Specialises in funnel strategy, GTM thinking and scaling systems</li>
            </ul>
            <a class="li-link" href="https://www.linkedin.com/in/mausamarora/" target="_blank" rel="noopener">${LINKEDIN}Mausam on LinkedIn</a>
          </div>
        </article>
        <article class="card person" id="kunal-mondal">
          <div class="avatar"><img src="${IMG}/kunal-mondal.jpg" width="256" height="256" alt="Kunal Mondal, co-founder of Acquirely" loading="lazy"></div>
          <div>
            <h3>Kunal Mondal</h3>
            <p class="role">Co-founder · Meta strategy</p>
            <p>Kunal has managed ₹30Cr+ in ad spend across 30+ brands in ecommerce, EdTech and real estate. He builds acquisition systems that drive predictable revenue, not just traffic.</p>
            <p>His hands-on approach keeps the A3 Flywheel running without friction.</p>
            <ul>
              <li>Hands-on Meta strategist running full-funnel systems across Meta and Google</li>
              <li>ROAS-focused scaling without wasted spend</li>
            </ul>
            <a class="li-link" href="https://www.linkedin.com/in/kunal-meta-ads/" target="_blank" rel="noopener">${LINKEDIN}Kunal on LinkedIn</a>
          </div>
        </article>
      </div>
      <div class="team-strip">
        <div class="faces">
          <img src="${IMG}/founder1.png" width="96" height="96" alt="Acquirely team member" loading="lazy">
          <img src="${IMG}/founder2.png" width="96" height="96" alt="Acquirely team member" loading="lazy">
          <img src="${IMG}/founder3.png" width="96" height="96" alt="Acquirely team member" loading="lazy">
          <img src="${IMG}/founder4.png" width="96" height="96" alt="Acquirely team member" loading="lazy">
          <img src="${IMG}/founder5.png" width="96" height="96" alt="Acquirely team member" loading="lazy">
        </div>
        <span>Plus the strategists, editors, designers and developers behind every account</span>
      </div>
    </div>
  </section>

  <section class="band dark" id="how-we-work" aria-labelledby="h-how">
    <div class="wrap">
      <div class="head">
        <span class="eyebrow">Our commitments</span>
        <h2 id="h-how">Built on accountability, not empty promises</h2>
        <p>We don't promise overnight success. We build growth that lasts, and we put these commitments in writing.</p>
      </div>
      <div class="stats promise">
        <div class="stat"><span class="ic" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a5b4fc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg></span><b>A fair 75 to 90 day window</b><span>Micro Analysis needs 90 days of your data. That's when the system shows what it can do.</span></div>
        <div class="stat"><span class="ic" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a5b4fc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3 6 6 1-4.5 4.5L18 20l-6-3-6 3 1.5-6.5L3 9l6-1z"/></svg></span><b>Top 1% experts only</b><span>A Meta and a Google specialist on every account, each with 5+ years and ₹10Cr+ managed a year.</span></div>
        <div class="stat"><span class="ic" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a5b4fc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg></span><b>You own everything</b><span>Your ad accounts, pixel, data and website stay in your name. Always. No unnecessary lock-ins.</span></div>
        <div class="stat"><span class="ic" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a5b4fc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/></svg></span><b>Data-backed decisions</b><span>Every scale or cut has a number behind it you can see, in one live dashboard.</span></div>
      </div>
    </div>
  </section>

  <section class="band white" id="contact" aria-labelledby="h-contact">
    <div class="wrap">
      <div class="head">
        <span class="eyebrow">Get in touch</span>
        <h2 id="h-contact">How can you contact Acquirely?</h2>
        <p>The fastest way is a free Growth Diagnosis call. You will speak directly with the people who would run your account.</p>
      </div>
      <div class="contact">
        <div class="card"><small>Email</small><a href="mailto:team@acquirely.in">team@acquirely.in</a></div>
        <div class="card"><small>Phone</small><a href="tel:+917060250253">+91 70602 50253</a></div>
        <div class="card"><small>Office</small><b>New Delhi, India</b></div>
      </div>
    </div>
  </section>

  <section class="band" id="faq" aria-labelledby="h-faq">
    <div class="wrap">
      <div class="head">
        <span class="eyebrow">FAQ</span>
        <h2 id="h-faq">Frequently asked questions about Acquirely</h2>
      </div>
      <div class="faq">
        ${faqs
          .map(
            (f, i) =>
              `<details class="q"${i === 0 ? " open" : ""}><summary><h3>${f.q}</h3></summary><p>${f.a}</p></details>`
          )
          .join("\n        ")}
      </div>
    </div>
  </section>

  <section class="band white" aria-labelledby="h-final">
    <div class="wrap">
      <div class="final">
        <div>
          <span class="eyebrow">Work with us</span>
          <h2 id="h-final">Want an agency that treats your budget <span class="grad">like its own?</span></h2>
          <p>Book a 30-minute Growth Diagnosis. We'll look at your ads, website and funnel, show you where it's leaking, and tell you straight whether we can help.</p>
          <a class="btn" href="${BOOK}" target="_blank" rel="noopener">Book a Growth Diagnosis Call</a>
        </div>
      </div>
    </div>
  </section>
</main>`;

export default markup;
