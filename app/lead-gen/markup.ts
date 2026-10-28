import { withImgDims } from "@/lib/img-dims";
// Page markup for /lead-gen, rendered by LeadGenLanding. Shares ecommerce.css; lead-gen-only styles live in lead-gen.css.
const BOOK = "https://forms.acquirely.in/acquirely/form/LeadGenFunnelReviewCall/formperma/DEijNOw1e1C4Wd8r6luSZlNxj1zQVtObr106aUYe4-0";
const ARROW = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`;
const TICK = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16A34A" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>`;
const LINKEDIN = `<svg width="14" height="14" viewBox="0 0 24 24" fill="#0A66C2"><path d="M4.98 3.5a2.5 2.5 0 11.02 5 2.5 2.5 0 01-.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.6 8.65 21 11.2 21 14.5V21h-4v-5.8c0-1.4 0-3.2-1.95-3.2S12.8 13.5 12.8 15.1V21H9z"/></svg>`;

const phone = (domain: string, img: string, name: string, cat: string) =>
  `<figure class="ph"><div class="ph-frame"><div class="ph-bar"><span></span><b>${domain}</b><span></span></div><div class="ph-screen"><img src="${img}" alt="${name} website on mobile" loading="lazy"></div></div><figcaption><b>${name}</b><span class="ph-cat">${cat}</span></figcaption></figure>`;

// Before/after table + quote for each client result.
const caseStudy = (n: string, title: string, afterLabel: string, rows: [string, string, string, boolean?][], quote: string, author: string) => `
      <article class="card case lg-case reveal">
        <div class="case-data">
          <blockquote class="lg-quote">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="#BEDBFF" aria-hidden="true"><path d="M7.2 6C4.9 7.3 3.5 9.6 3.5 12.6V18h6v-6H6.6c.1-1.8 1-3.1 2.6-4zM17.2 6c-2.3 1.3-3.7 3.6-3.7 6.6V18h6v-6h-2.9c.1-1.8 1-3.1 2.6-4z"/></svg>
            <p>${quote}</p>
            <cite>${author}</cite>
          </blockquote>
        </div>
        <div class="case-body">
          <div class="case-top"><span class="num${n === "03" ? " o" : ""}">${n}</span></div>
          <h3>${title}</h3>
          <table class="lg-table">
            <thead><tr><th>Metric</th><th>Before</th><th>${afterLabel}</th></tr></thead>
            <tbody>${rows.map(([m, b, a, spend]) => `<tr><td>${m}</td><td>${b}</td><td class="${spend ? "spend" : "up"}">${a}</td></tr>`).join("")}</tbody>
          </table>
          <a class="btn line" href="${BOOK}" target="_blank" rel="noopener">Get Leads Your Sales Team Will Love →</a>
        </div>
      </article>`;

const faqs: [string, string][] = [
  ["How quickly can results be seen?", "You'll see early signals — CTR, CPM, add-to-cart rates — within the first 2 weeks. Meaningful ROAS data takes 4–6 weeks as the algorithm learns and we iterate on creatives. Anyone promising results in week one is lying."],
  ["How soon do campaigns launch?", "7 days from onboarding. We use that time to audit your store, set up tracking, build the first creative set, and structure campaigns properly. Fast launches without this groundwork just burn budget."],
  ["What if ROAS targets aren't met?", "Missing ROAS is a signal, not a dead end. We run a full diagnostic — creative fatigue, audience overlap, funnel drop-offs, offer-market fit — and fix the actual problem. You get clear reasoning and faster iteration, not vague 'we're optimising' updates."],
  ["What kind of ecommerce brands do you work with?", "DTC brands with a proven product and a functional Shopify store. Ideally you've got some organic traction or prior ad spend — it gives us data to work with. We're not the right fit for brands still validating their offer."],
  ["Are creatives included?", "Yes — static creatives with multiple hook and angle variations are included. For video, we handle the editing and testing framework but you'll need to provide the raw footage. Influencer content is a separate engagement. Either way, every creative decision is driven by data, not gut feel."],
  ["Do you offer SEO or organic social media?", "No. We're a paid media agency — that's intentional. Doing one thing exceptionally beats doing five things averagely. If you need SEO or organic, we'll point you to people who actually specialise in it."],
  ["Do you run international campaigns?", "Yes. We run campaigns across the US, UK, UAE, Australia, and beyond. Platform mechanics are the same globally — creative angle, offer positioning, and audience behaviour is what we adapt per market."],
  ["What does working with you actually look like?", "Weekly performance reports, bi-weekly strategy calls, and a shared dashboard so you're never in the dark. You'll always know what's running, why, and what's next — no account manager runaround."],
];

const markup = `
<!-- ============ NAV ============ -->
<div class="nav">
  <div class="nav-in">
    <a class="logo" href="#top" aria-label="Acquirely home"><img src="/ecommerce/img/01-acquirely-the-science-behind-scale.png" alt="Acquirely — The Science Behind Scale"></a>
    <nav class="nav-links" aria-label="Page sections">
      <a href="#results">Case Studies</a>
      <a href="#flywheel">A3 Framework</a>
      <a href="#pricing">Pricing</a>
      <a href="#faq">FAQ</a>
    </nav>
    <a class="btn blue" href="${BOOK}" target="_blank" rel="noopener">Book a Call</a>
  </div>
</div>

<!-- ============ HERO ============ -->
<section class="hero" id="top">
  <div class="wrap hero-grid">
    <div>
      <h1><span class="ln"><span class="grad">Running Facebook Ads for Leads!</span></span> <span class="ln">But Your Sales Team Calls Them Junk</span></h1>
      <p class="lg-fix">We Fix It.</p>
      <p class="lede">Same ad spend. Better lead quality. Higher ROI. Powered by our <b>A3 Flywheel for Lead Gen</b>.</p>
      <div class="hero-cta">
        <a class="btn" href="${BOOK}" target="_blank" rel="noopener">Get Leads Your Sales Team Will Love ${ARROW}</a>
      </div>
      <div class="trust-row">
        <span>${TICK}Rs.30Cr+ Ad Spend Managed</span>
        <span>${TICK}9+ Regions Active</span>
        <span>${TICK}75-Day Risk Reversal</span>
      </div>
    </div>

    <!-- VIDEO: Wistia lead gen VSL (media nm2ou94x6d). Clicking the poster swaps in the player. -->
    <div class="vid" data-video="https://fast.wistia.net/embed/iframe/nm2ou94x6d?autoPlay=true&playerColor=2949E5">
      <div class="vid-bar">Learn how it works</div>
      <button class="vid-screen" type="button" aria-label="Play: how Acquirely fixes lead quality">
        <img src="https://fast.wistia.com/embed/medias/nm2ou94x6d/swatch" alt="" aria-hidden="true">
        <span class="vid-play"><svg width="30" height="30" viewBox="0 0 24 24" fill="#fff"><path d="M8 5.5v13a1 1 0 001.5.86l10.5-6.5a1 1 0 000-1.72L9.5 4.64A1 1 0 008 5.5z"/></svg></span>
      </button>
    </div>
  </div>
</section>

<!-- ============ TRUSTED BY (phone mockups) ============ -->
<section class="trusted" aria-label="Brands growing with Acquirely">
  <p class="trusted-h">The lead gen agency trusted by</p>
  <div class="ph-viewport">
    <div class="ph-track">
      ${phone("kashti.com", "/ecommerce/img/31-kashti-website-on-mobile.jpg", "Kashti", "Fintech app")}
      ${phone("internationalschooling.org", "/ecommerce/img/30-international-schooling-website-on-mobile.jpg", "International Schooling", "Online school")}
      ${phone("rightsourceaviation.com", "/ecommerce/img/33-rsa-aviation-website-on-mobile.jpg", "RSA Aviation", "Pilot training academy")}
      ${phone("globalproptech.in", "/ecommerce/img/29-global-proptech-website-on-mobile.jpg", "Global Proptech", "Luxury real estate · Gurugram")}
      ${phone("ipstudyhub.com", "/publishers/img/ipstudyhub-website-on-mobile.jpg", "IP Study Hub", "Books &amp; digital learning")}
      ${phone("ipropel.org", "/publishers/img/propel-website-on-mobile.jpg", "Propel Curriculum", "Project-based learning curriculum")}
      ${phone("agastya.org", "/publishers/img/agastya-website-on-mobile.jpg", "Agastya Foundation", "Science education foundation")}
    </div>
  </div>
</section>

<!-- ============ THE HIDDEN COST ============ -->
<section class="band white">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow">The hidden cost</span>
      <h2>Every Unqualified Lead Is a <span class="grad">Tax on Your Growth.</span></h2>
      <p>You celebrate 500 leads this month. Your sales team closes 10. The rest? Wasted time, wasted follow-up, wasted budget.</p>
    </div>
    <div class="fit">
      <div class="card no">
        <h3>What Most Agencies Optimize For</h3>
        <ul>
          <li>Cost per lead (CPL)</li>
          <li>Lead volume</li>
          <li>Form fills</li>
          <li>Daily spend</li>
        </ul>
      </div>
      <div class="card yes">
        <h3>What Actually Matters</h3>
        <ul>
          <li>Cost per qualified lead (CPQL)</li>
          <li>Lead-to-close rate</li>
          <li>Sales-accepted leads</li>
          <li>Predictable pipeline</li>
        </ul>
      </div>
    </div>
    <div class="lg-note">
      <p>When you optimize for the wrong metric, scaling just multiplies waste.</p>
      <p><b>You stay stuck at Rs.3L-Rs.10L monthly ad spend - because going bigger means more junk leads.</b></p>
    </div>
  </div>
</section>

<!-- ============ MARKET SHIFT ============ -->
<section class="band">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow">Market shift</span>
      <h2><span class="grad">Meta's Algorithm Made Lead Gen Harder.</span><br> We Made It Smarter.</h2>
      <p>With updates like Andromeda, Meta's AI now prioritizes creative signals over interest targeting. Lead forms still work - but scaling without structure now kills lead quality.</p>
    </div>
    <div class="split">
      <div class="card">
        <h3>Most brands kept doing the same:</h3>
        <ul class="x-list">
          <li>Minor creative tweaks</li>
          <li>Changing audience interests blindly</li>
          <li>Increasing budgets without a system</li>
          <li>Switching Campaigns on &amp; off</li>
        </ul>
      </div>
      <div class="andro">
        <span class="tag"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 12a8 8 0 1 1-2.3-5.7"/><path d="M20 4v4h-4"/></svg>A3 Flywheel</span>
        <h3>The game changed. We leaned in.</h3>
        <p>After analyzing Rs.30Cr+ in lead gen ad spend (across loans, education, aviation, real estate), we built the <b>A3 Flywheel</b> - a lead intelligence engine for the new Meta era.</p>
      </div>
    </div>
  </div>
</section>

<!-- ============ THE A3 FRAMEWORK ============ -->
<section class="band white" id="flywheel">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow">The A3 framework</span>
      <h2>The System That Scales Lead Volume <span class="grad">Without Crashing Quality.</span></h2>
    </div>
    <div class="card fly">
      <svg viewBox="0 0 400 400" role="img" aria-label="A3 Flywheel: A1 Testing to Scale feeds A2 Lock and Scale, which feeds A3 Micro Analysis, which feeds back into A1">
        <defs>
          <marker id="ar" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="#6366F1"/></marker>
          <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#6366F1"/><stop offset="1" stop-color="#F97316"/></linearGradient>
        </defs>
        <circle cx="200" cy="200" r="135" fill="#F7F9FC" stroke="#E4E4E7" stroke-width="1.5" stroke-dasharray="4 7"/>
        <path d="M238 70 A135 135 0 0 1 318 268" fill="none" stroke="url(#ring)" stroke-width="3" stroke-linecap="round" marker-end="url(#ar)"/>
        <path d="M285 316 A135 135 0 0 1 112 304" fill="none" stroke="url(#ring)" stroke-width="3" stroke-linecap="round" marker-end="url(#ar)"/>
        <path d="M78 258 A135 135 0 0 1 154 74" fill="none" stroke="url(#ring)" stroke-width="3" stroke-linecap="round" marker-end="url(#ar)"/>
        <g font-family="Montserrat,sans-serif" text-anchor="middle">
          <circle cx="200" cy="66" r="44" fill="#2B7FFF"/>
          <text x="200" y="64" fill="#fff" font-weight="800" font-size="20">A1</text>
          <text x="200" y="82" fill="#E0ECFF" font-size="9.5" font-weight="600">Testing → Scale</text>
          <circle cx="316" cy="270" r="44" fill="#F37513"/>
          <text x="316" y="268" fill="#fff" font-weight="800" font-size="20">A2</text>
          <text x="316" y="286" fill="#FFE8D6" font-size="9.5" font-weight="600">Lock &amp; Scale</text>
          <circle cx="84" cy="270" r="44" fill="#6366F1"/>
          <text x="84" y="268" fill="#fff" font-weight="800" font-size="20">A3</text>
          <text x="84" y="286" fill="#E0E7FF" font-size="9.5" font-weight="600">Micro Analysis</text>
          <text x="200" y="196" fill="#71717B" font-weight="700" font-size="11" letter-spacing="3">RUNS</text>
          <text x="200" y="222" fill="#0F172A" font-weight="800" font-size="24">WEEKLY</text>
        </g>
      </svg>
      <div class="stages">
        <div class="stage"><span class="code">A1</span><div><h3>A1 — Testing → Scale</h3><p>Launch structured tests: multiple creatives, offers, regional angles. Winners flow immediately to a dedicated scale campaign.</p><p class="lg-goal"><b>Goal</b> Find lead magnets that convert. Isolate. Pour budget.</p></div></div>
        <div class="stage"><span class="code">A2</span><div><h3>A2 — Lock &amp; Scale Aggressively</h3><p>After ~90 days, we lock cost per qualified lead. No more fluctuations. Then drastically scale ad spend across regions.</p><p class="lg-goal"><b>Goal</b> Predictable volume. Aggressive growth.</p></div></div>
        <div class="stage"><span class="code">A3</span><div><h3>A3 — Micro Analysis &amp; Redistribution</h3><p>Analyze by day of week, hour, region. Redistribute budget to high-performing segments daily.</p><p class="lg-goal"><b>Goal</b> Squeeze every rupee from your lead budget.</p></div></div>
      </div>
    </div>
    <p class="lg-loop">This runs every week. Not occasionally. Religiously.<br> A1 feeds A2. A2 enables A3.<br> Insights from A3 make A1 smarter.</p>
  </div>
</section>

<!-- ============ CLIENT RESULTS ============ -->
<section class="band" id="results">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow">Client results</span>
      <h2>From <span class="grad">"Junk Leads"</span> to <span class="grad">Predictable Pipelines.</span></h2>
    </div>
    <div class="cases">
      ${caseStudy("01", "Kashti Finserv (Loan Lead Gen)", "After (90 days)", [
        ["Monthly lead volume", "1,200", "2,880 (+140%)"],
        ["Cost per lead", "Rs.420", "Rs.285 (-32%)"],
        ["Qualified lead rate", "28%", "41% (stable)"],
        ["Ad spend", "Rs.8L", "Rs.22L (scaled)", true],
      ], "\"Acquirely didn't just run ads. They built a system that lets us predict how many qualified leads we'll get at what cost. That's rare.\"", "- Founder, Kashti Finserv")}
      ${caseStudy("02", "International Schooling (9 Regions, SGD 3K/day)", "After (6 months)", [
        ["Active regions", "4", "9"],
        ["Cost per lead (avg)", "$18", "$13 (-28%)"],
        ["Daily ad spend", "SGD 1K", "SGD 3K (scaled)", true],
        ["Inquiry-to-enrollment", "Baseline", "+22%"],
      ], "\"We were spending SGD 90K/month with no predictability. Now we know exactly what each region delivers.\"", "- CMO, International Schooling")}
      ${caseStudy("03", "Right Source Aviation (Pilot Training - Rs.60-80L Course)", "After (4 months)", [
        ["Qualified leads/month", "18", "30 (+67%)"],
        ["Cost per qualified lead", "Rs.28,000", "Rs.16,500 (-41%)"],
        ["Enrollment inquiries", "6", "18 (3x)"],
        ["Ad spend", "Rs.3L", "Rs.12L (scaled)", true],
      ], "\"Selling a Rs.70L course via Facebook? Everyone said it's impossible. Acquirely built a system that actually works.\"", "- Director, Right Source Aviation")}
    </div>
  </div>
</section>

<!-- ============ PRICING ============ -->
<section class="band white" id="pricing">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow">Pricing</span>
      <h2><span class="grad">Transparent, Performance-</span>Aligned Pricing</h2>
      <p>It includes Structured Meta Campaign Management, Generating regular creative variations, editing UGC &amp; influencer videos and regular monitoring &amp; optimization.</p>
    </div>
    <div class="price">
      <div class="card tier">
        <span class="eyebrow">For ₹3L–₹10L ad spend</span>
        <div class="big grad">₹75,000</div>
        <p class="sub">+ GST</p>
        <a class="btn" href="${BOOK}" target="_blank" rel="noopener">Get Leads Your Sales Team Will Love</a>
      </div>
      <div class="card tier">
        <span class="eyebrow">For ₹10L+ ad spend</span>
        <div class="big grad">10%</div>
        <p class="sub">of total ad spend</p>
        <a class="btn" href="${BOOK}" target="_blank" rel="noopener">Get Leads Your Sales Team Will Love</a>
      </div>
    </div>
    <div class="card inhouse lg-inhouse">
      <h3>Compare That to Hiring In-House</h3>
      <table>
        <thead><tr><th>Role</th><th>Monthly Cost</th></tr></thead>
        <tbody>
          <tr><td>A Standard Meta Ads Specialist</td><td>₹80K</td></tr>
          <tr><td>A Conventional Creative Strategist</td><td>₹60K</td></tr>
          <tr><td>A Junior Video Editor</td><td>₹40K</td></tr>
          <tr><td>A Basic Graphic Designer</td><td>₹40K</td></tr>
          <tr class="total"><td>Total In-House Cost</td><td>₹2.2L+ <small>per month</small></td></tr>
        </tbody>
      </table>
      <h4>And that still doesn't include:</h4>
      <ul class="x-list lg-missing">
        <li>A proven scaling framework</li>
        <li>A structured creative testing system</li>
        <li>Performance optimisation workflows</li>
      </ul>
      <div class="lg-risk"><b>The real risk?</b> Continuing with an agency that spends budget but never learns from the data.</div>
    </div>
  </div>
</section>

<!-- ============ GUARANTEE (dark) ============ -->
<section class="band dark">
  <div class="wrap">
    <div class="promise-top">
      <span class="ic"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3z"/><path d="M9 12l2 2 4-4"/></svg></span>
      <div><b>If We Don't Improve Your Lead Economics... We Work Free.</b><span>We don't believe in unrealistic guarantees-only accountability.</span></div>
    </div>
    <div class="lg-commit">
      <div class="stat">
        <span class="eyebrow">Our commitments</span>
        <span>After a 75-90 day stabilisation period, if there's no clear improvement in:</span>
        <ul class="ticks">
          <li><b>Cost per qualified lead</b></li>
          <li><b>Lead volume at consistent CPQL</b></li>
        </ul>
      </div>
      <div class="stat"><b>01</b><span>Work the next month at zero management fee to fix performance</span></div>
      <div class="stat"><b>02</b><span>End the engagement with a clean, no-lock-in exit and full learning handover</span></div>
    </div>
    <p class="lg-earn">If we're not creating value, we don't earn the retainer.</p>
  </div>
</section>

<!-- ============ FIT ============ -->
<section class="band">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow">Not for everyone</span>
      <h2>This Is for <span class="grad">Multi-Location &amp; Online Lead Gen Brands.</span><br> Not for Local Businesses.</h2>
    </div>
    <div class="fit">
      <div class="card yes">
        <h3>This is for you</h3>
        <ul>
          <li>Pan-India or multi-city operations</li>
          <li>Online lead gen (service available nationally)</li>
          <li>High-ticket LTV &gt; Rs.50,000</li>
          <li>Spending Rs.3L+ monthly on Facebook Ads</li>
          <li>Loans, education, real estate, training, B2B, healthcare chains</li>
          <li>You have a sales team that needs qualified leads</li>
        </ul>
      </div>
      <div class="card no">
        <h3>Not for you</h3>
        <ul>
          <li>Single-location business (one clinic, one office)</li>
          <li>Local service with catchment area &lt; 50km</li>
          <li>Low-ticket leads (&lt;Rs.10K LTV)</li>
          <li>Spending &lt;Rs.3L and not willing to scale</li>
          <li>No CRM or sales follow-up process</li>
          <li>You just want "cheap leads"</li>
        </ul>
      </div>
    </div>
    <div class="center-cta">
      <a class="btn" href="${BOOK}" target="_blank" rel="noopener">Get Leads Your Sales Team Will Love ${ARROW}</a>
    </div>
  </div>
</section>

<!-- ============ FOUNDERS ============ -->
<section class="band white">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow">Meet the founders</span>
      <h2>The Minds Behind Acquirely</h2>
      <p>Built by Operators - Not Just Agency Owners</p>
    </div>
    <div class="team">
      <div class="card person">
        <div class="avatar"><img src="/ecommerce/img/mausam-arora.jpg" alt="Mausam Arora"></div>
        <div>
          <h3>Mausam Arora</h3>
          <p class="role">Founder, Acquirely · Growth &amp; Strategy Head</p>
          <p>Mausam spent 12 years inside education - building curricula, publishing 300+ books, and reaching 2,000+ schools. That journey taught him one thing: great products don't grow themselves. He built Acquirely to turn scattered ad spend into acquisition systems that compound.</p>
          <ul class="lg-bullets">
            <li>Founder-level understanding of what happens before and after the click</li>
            <li>Managed Rs.30Cr+ in annual ad spend</li>
            <li>Specialises in funnel strategy, GTM thinking, and scaling systems</li>
          </ul>
          <a href="https://www.linkedin.com/in/mausamarora/" target="_blank" rel="noopener">${LINKEDIN}LinkedIn</a>
        </div>
      </div>
      <div class="card person">
        <div class="avatar"><img src="/ecommerce/img/kunal-mondal.jpg" alt="Kunal Mondal"></div>
        <div>
          <h3>Kunal Mondal</h3>
          <p class="role">Founder, Acquirely · Performance Marketing Lead</p>
          <p>Kunal has managed over Rs.30Cr in ad spend across 30+ brands in E-Commerce, EdTech, and Real Estate. He builds acquisition systems that drive predictable revenue, not just traffic. His hands-on approach ensures the A3 Flywheel runs without friction.</p>
          <ul class="lg-bullets">
            <li>Hands-on Meta and Growth strategist</li>
            <li>Full-funnel acquisition systems using Google &amp; Meta</li>
            <li>ROAS-focused scaling without wasted spend</li>
          </ul>
          <a href="https://www.linkedin.com/in/kunal-meta-ads/" target="_blank" rel="noopener">${LINKEDIN}LinkedIn</a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ============ FAQ ============ -->
<section class="band" id="faq">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow">Got questions?</span>
      <h2>Frequently Asked Questions</h2>
    </div>
    <div class="faq">
      ${faqs.map(([q, a], i) => `<details${i === 0 ? " open" : ""}><summary>${q}</summary><p>${a}</p></details>`).join("\n      ")}
    </div>
  </div>
</section>

<!-- ============ FINAL CTA ============ -->
<section class="band white" id="book">
  <div class="wrap">
    <div class="dcard">
      <div>
        <h2>Ready to Turn <span class="grad">"Junk Leads"</span> Into a Predictable Pipeline?</h2>
        <p style="margin-top:12px">If you're a pan-India, multi-location, or online lead gen brand spending Rs.3L+ monthly on Facebook Ads...</p>
        <ul class="ticks">
          <li>No lock-in</li>
          <li>75-day risk reversal</li>
          <li>Full transparency</li>
        </ul>
      </div>
      <div style="display:grid;align-content:center">
        <h3>Stop optimizing for volume. Start optimizing for qualified leads.</h3>
        <a class="btn blue" href="${BOOK}" target="_blank" rel="noopener" style="margin-top:22px;width:100%;padding:16px 22px;font-size:16px">Book Your Lead Gen Growth Audit ${ARROW.replace(/18/g, "16")}</a>
      </div>
    </div>
  </div>
</section>

<footer>
  <div class="wrap">
    <div class="foot">
      <div>
        <div class="brand"><img src="/ecommerce/img/28-acquirely-the-science-behind-scale.png" alt="Acquirely — The Science Behind Scale" style="height:52px;width:auto"></div>
        <p style="margin-top:10px;max-width:32ch">Meta Ads lead generation for multi-location and online brands.</p>
      </div>
      <div><p class="fh">On this page</p><ul><li><a href="#results">Case Studies</a></li><li><a href="#flywheel">A3 Framework</a></li><li><a href="#pricing">Pricing</a></li><li><a href="#faq">FAQ</a></li></ul></div>
      <div><p class="fh">More from Acquirely</p><ul><li><a href="/case-studies">Case studies</a></li><li><a href="/about-us">About us</a></li><li><a href="/blog">Blog</a></li></ul></div>
      <div><p class="fh">Contact</p><ul><li>team@acquirely.in</li><li><a href="/">acquirely.in</a></li><li><a href="/privacy-policy">Privacy policy</a></li><li><a href="/terms-and-condition">Terms of service</a></li></ul></div>
    </div>
    <div class="fine">
      <p>© 2026 Acquirely. All rights reserved.</p>
      <p>This site is not a part of the Facebook™ website or Facebook™ Inc. Additionally, This site is NOT endorsed by Facebook™ in any way. FACEBOOK™ is a trademark of FACEBOOK™, Inc.</p>
    </div>
  </div>
</footer>

<div class="mcta"><a class="btn" href="${BOOK}" target="_blank" rel="noopener">Book a Call</a></div>
`;

export default withImgDims(markup);
