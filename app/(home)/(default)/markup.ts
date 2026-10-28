// Page markup for the homepage, rendered by HomeLanding. Shares ecommerce.css; homepage-only styles live in home.css.
const BOOK = "https://forms.acquirely.in/acquirely/form/FunnelReviewCallECom/formperma/muJYVHXbKDbQ7N3xEPr_lrjkOuBMe33JPNULGFJm9Kg";
const PLAYBOOK = "https://forms.zoho.in/acquirely/form/A3Playbook";
const IMG = "/ecommerce/img";
const ARROW = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`;
const TICK = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16A34A" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>`;
const LINKEDIN = `<svg width="14" height="14" viewBox="0 0 24 24" fill="#0A66C2"><path d="M4.98 3.5a2.5 2.5 0 11.02 5 2.5 2.5 0 01-.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.6 8.65 21 11.2 21 14.5V21h-4v-5.8c0-1.4 0-3.2-1.95-3.2S12.8 13.5 12.8 15.1V21H9z"/></svg>`;
const ext = `target="_blank" rel="noopener"`;
const icon = (path: string, stroke = "#2B7FFF") =>
  `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${stroke}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${path}</svg>`;

const phone = (domain: string, img: string, name: string, cat: string) =>
  `<figure class="ph"><div class="ph-frame"><div class="ph-bar"><span></span><b>${domain}</b><span></span></div><div class="ph-screen"><img src="${IMG}/${img}" alt="${name} website on mobile" loading="lazy"></div></div><figcaption><b>${name}</b><span class="ph-cat">${cat}</span></figcaption></figure>`;

type Case = {
  e: "d2c" | "lead"; chip: string; title: string; result: string; resultLabel: string;
  bar: [string, string, string, number]; // label, before, after, before width % (after is 100%, or reversed when lower is better)
  lowerIsBetter?: boolean; facts: [string, string, string]; story: string; shot?: [string, string, string];
};

const cases: Case[] = [
  { e: "d2c", chip: "Toys &amp; puzzles · D2C", title: "From ₹8L to ₹40L per month in 90 days", result: "5x", resultLabel: "Monthly revenue in 90 days", bar: ["Monthly revenue", "₹8L", "₹40L", 20], facts: ["TacTow, 3D wooden puzzles made in Bengaluru", "₹8L/month, built by the founder on his own", "<b>₹40L/month. 5x revenue in one quarter.</b>"], story: "We consolidated the ad accounts around the hero product and ran the A3 Flywheel, turning one winning creator ad into a weekly stream of iterations. Levers: Meta structure, creative engine, creator ads.", shot: ["15-tactow-shopify-dashboard-26-1-lakh-total.jpg", "TacTow Shopify dashboard: ₹26.1 lakh total sales, Sep 13 to Oct 13 2026, up 53%", "<b>Shopify</b> Total sales, last 30 days, vs previous period"] },
  { e: "lead", chip: "Pilot training · Lead gen", title: "Qualified leads from 10% to 50%", result: "5x", resultLabel: "More sales-ready conversations, same enquiry flow", bar: ["Qualified lead rate", "10%", "50%", 20], facts: ["RSA Pilot Training Academy, Mumbai", "1 in 10 enquiries was sales-ready", "<b>1 in 2 enquiries now qualified, since Aug 2025.</b>"], story: "We moved lead capture from WhatsApp to a website form. The extra step filtered casual enquiries, so Meta learned to find serious aspiring pilots for a ₹35L–₹60L programme. Levers: lead capture fix, A3 Flywheel, intent filtering." },
  { e: "d2c", chip: "Furniture · D2C", title: "ROAS from 2.7 to 4.2 while revenue nearly tripled", result: "2.7 → 4.2", resultLabel: "ROAS in 5 months", bar: ["Monthly revenue", "₹20L", "₹57L", 35], facts: ["Gharaana, furniture ecommerce", "2.7 ROAS, ₹20L/month", "<b>4.2 ROAS, ₹57L/month.</b>"], story: "The founder was sure open targeting would fail after Andromeda. Broad audiences in one Prospecting CBO, fed a fresh creative Pack every week, proved otherwise. Levers: broad targeting, weekly creative Packs.", shot: ["17-gharaana-meta-ads-manager-before-and-aft.jpg", "Gharaana Meta Ads Manager before and after: account average purchase ROAS 2.30 in August 2026, 4.04 in the last 30 days, all 39 campaigns", "<b>Meta Ads Manager</b> Purchase ROAS 2.30 → 4.04"] },
  { e: "lead", chip: "Online school, 190+ countries · Lead gen", title: "Spend up 80% at the same cost per lead", result: "$50K → $90K", resultLabel: "Monthly ad spend in 2 months", bar: ["Monthly ad spend", "$50K", "$90K", 56], facts: ["International Schooling, accredited American online school", "60%+ of budget recycling existing audiences", "<b>$90K/month, cost per lead held steady.</b>"], story: "The wrong creatives were being scaled and most of the budget kept reaching people who already knew the brand. We moved spend to broad prospecting with existing audiences excluded, and backed creatives proven incremental. Levers: audience exclusions, incremental attribution, A3 Flywheel." },
  { e: "d2c", chip: "Fashion · D2C", title: "From ₹3.5L to ₹10L a month in 2 months", result: "2.9x", resultLabel: "Monthly revenue in 2 months", bar: ["Monthly revenue", "₹3.5L", "₹10L", 35], facts: ["Patoola, Indo-Western fashion, Bengaluru", "Every ad creator-led, capping scale", "<b>₹10L/month, ROAS up from 3.6 to 4.2.</b>"], story: "We added founder-led ads telling the story behind the label, tested in weekly Packs alongside creator content. Levers: founder-led creative, weekly Packs.", shot: ["19-patoola-meta-ads-manager-before-and-afte.jpg", "Patoola Meta Ads Manager before and after: account average purchase ROAS 3.6 in August 2026, 4.02 in the last 30 days, all campaigns", "<b>Meta Ads Manager</b> Purchase ROAS 3.6 → 4.02"] },
  { e: "lead", chip: "Fintech · Lead gen", title: "Cost per lead from ₹1,000 to ₹13", result: "−98.7%", resultLabel: "Cost per lead, with spend up 20x", bar: ["Cost per lead", "₹1,000", "₹13", 100], lowerIsBetter: true, facts: ["Kashti, loan marketplace, Bengaluru", "Convinced Meta didn't work", "<b>₹13 per lead at ₹30L/month spend.</b>"], story: "Structured creative testing surfaced one winning angle that cut cost per lead 98% and made 20x spend safe. Levers: structured creative testing, one winning angle. Running since March 2026." },
  { e: "d2c", chip: "Kids DIY kits · D2C", title: "ROAS from 2.5 to 3.5 after two flat years", result: "2.5 → 3.5", resultLabel: "ROAS in 2 months", bar: ["ROAS", "2.5", "3.5", 71], facts: ["Creste Kids, DIY craft kits", "Two years of tweaking settings", "<b>3.5 ROAS in two months.</b>"], story: "We diagnosed creative as the bottleneck, built a creator pipeline, and split past buyers into a Retention campaign. Levers: creator pipeline, Prospecting + Retention.", shot: ["20-creste-meta-ads-manager-before-and-after.jpg", "Creste Meta Ads Manager before and after: all-time account average purchase ROAS 2.07 across 96 campaigns, 3.65 in the last 30 days", "<b>Meta Ads Manager</b> Purchase ROAS 2.07 → 3.65"] },
];

const caseCard = (c: Case, i: number) => {
  const [label, before, after, w] = c.bar;
  const [bw, aw] = c.lowerIsBetter ? [100, 4] : [w, 100];
  return `
      <article class="card case reveal" data-engine="${c.e}">
        <div class="case-data">
          <div class="k"><small>Result</small><b class="grad">${c.result}</b><span>${c.resultLabel}</span></div>
          <div class="bars"><div class="bar-g"><div class="bar-t">${label}<em>${c.lowerIsBetter ? "lower is better" : "before → after"}</em></div>
            <div class="bar"><span>Before</span><div class="track"><div class="fill b" style="width:${bw}%">${before}</div></div></div>
            <div class="bar"><span>After</span><div class="track"><div class="fill a" style="width:${aw}%">${after}</div></div></div>
          </div></div>
          ${c.shot ? `<div class="proofs"><figure class="proof-shot"><img src="${IMG}/${c.shot[0]}" alt="${c.shot[1]}" loading="lazy"><figcaption>${c.shot[2]}</figcaption></figure><p class="proof-hint">Tap the screenshot to enlarge</p></div>` : ""}
        </div>
        <div class="case-body">
          <div class="case-top"><span class="num${c.e === "lead" ? " o" : ""}">${String(i + 1).padStart(2, "0")}</span><span class="chip">${c.chip}</span></div>
          <h3>${c.title}</h3>
          <dl class="facts">
            <div><dt>Client</dt><dd>${c.facts[0]}</dd></div>
            <div><dt>Starting point</dt><dd>${c.facts[1]}</dd></div>
            <div><dt>Result</dt><dd>${c.facts[2]}</dd></div>
          </dl>
          <p class="story">${c.story}</p>
          <a class="btn line" href="${BOOK}" ${ext}>Get the same diagnosis →</a>
        </div>
      </article>`;
};

const reason = (n: string, o: boolean, title: string, cards: [string, string, string][], quote: string) => `
      <div class="reveal">
        <div class="r-head"><span class="num${o ? " o" : ""}">${n}</span><h3>${title}</h3></div>
        <div class="r-body">${cards.map(([ic, h, p]) => `<div class="card"><span class="ic${o ? " o" : ""}">${icon(ic, o ? "#F37513" : "#2B7FFF")}</span><h4>${h}</h4><p>${p}</p></div>`).join("")}</div>
        <blockquote class="hm-quote"><img src="${IMG}/mausam-arora-portrait.jpg" alt="" loading="lazy"><div><p>"${quote}"</p><cite>Mausam Arora, Co-founder</cite></div></blockquote>
      </div>`;

const chips = (proven: string[], soon: string[] = []) =>
  `<div class="hm-chips">${proven.map((c) => `<span class="chip">${c}</span>`).join("")}${soon.map((c) => `<span class="chip soon">${c}</span>`).join("")}</div>`;

const svcCard = (path: string, o: boolean, title: string, intro: string, items: string[]) => `
      <div class="card hm-svc reveal">
        <span class="ic${o ? " o" : ""}">${icon(path, o ? "#F37513" : "#2B7FFF")}</span>
        <h3>${title}</h3>
        <p>${intro}</p>
        <ul>${items.map((x) => `<li>${x}</li>`).join("")}</ul>
      </div>`;

const wins: [string, string, string, string][] = [
  ["22-meta-ads-app-kenzai-puzzles-prospecting.jpg", "Meta Ads app: Kenzai Puzzles prospecting campaign with 954 website purchases", "TacTow · formerly Kenzai Puzzles", "954 purchases from one prospecting campaign."],
  ["23-whatsapp-creste-team-says-dussehra-kits.jpg", "WhatsApp: Creste team says Dussehra kits almost sold out, asks to pause ads", "Creste Kids", "Sold out before Dussehra. The client asked us to pause."],
  ["34-whatsapp-payal-patoola-testimonial.png", "WhatsApp from Payal at Patoola: fewer cancellations, more prepaid orders, higher AOV and stable ROAS after a month with Acquirely", "Payal · Patoola", "\"Really encouraging results in just one month.\""],
  ["24-meta-ads-app-patoola-prospecting-campaig.jpg", "Meta Ads app: Patoola prospecting campaign with 48 website purchases", "Patoola", "48 purchases from a single prospecting campaign."],
  ["26-whatsapp-testimonial-from-karthik-recomm.jpg", "WhatsApp testimonial from Karthik recommending Kunal and the Acquirely team", "Karthik · founder, Old School Station", "\"Consistent results at scale. Highly recommend.\""],
  ["18-gharaana-shopify-10-6-lakh-total-sales-i.jpg", "Gharaana Shopify: ₹10.6 lakh total sales in the last 7 days, up 28%; sessions up 52%; orders up 30%", "Gharaana · Shopify", "₹10.6L in a week, up 28%."],
  ["25-meta-ads-app-tactow-ad-sets-broad-pack-2.jpg", "Meta Ads app: TacTow ad sets — Broad Pack 2 with 105 purchases, Winner Creatives with 35", "TacTow · ad sets", "Every weekly creative Pack tracked to purchases, not clicks."],
  ["16-tactow-meta-ads-manager-768-website-purc.jpg", "TacTow Meta Ads Manager: 768 website purchases, ₹22.7 lakh purchase value, 3.83 ROAS, last 30 days", "TacTow · Ads Manager", "768 purchases at 3.83 ROAS in 30 days."],
  ["27-meta-ads-app-gharaana-prospecting-and-re.jpg", "Meta Ads app: Gharaana prospecting and retargeting campaigns, both active", "Gharaana", "High-ticket furniture, sold through prospecting and retargeting."],
];

const faqs: [string, string][] = [
  ["How quickly will I see results?", "First winning creatives usually show up in 3–6 weeks. Structured scaling follows once we have a baseline. TacTow went 5x in one quarter; Creste moved in two months."],
  ["Do I have to buy every service?", "No. Most clients start with Meta and Google, then add LinkedIn, marketplaces, website, CRO or social once we've found where the funnel leaks. The diagnosis call tells us where to start."],
  ["Do you work with lead-gen businesses, or just ecommerce?", "Both, and lead gen is half our work. RSA Pilot Training went from 10% to 50% qualified leads, International Schooling scaled from $50K to $90K a month at the same cost per lead, and Kashti cut cost per lead by 98%. For lead gen we measure qualified leads and booked meetings, not form fills."],
  ["Do you work with brands that are just launching?", "Yes. We handhold new brands from the very beginning: positioning, website, tracking, creative and the first campaigns, built as one funnel from day one. What we need is a clear vision for the brand and a planned budget for the launch."],
  ["I already have an agency. Do I have to switch everything?", "No. We often start with one channel or one product line, so you can compare results before moving anything else."],
  ["Are creatives included?", "Yes. A weekly creative Pack and influencer management are included. Product shoots and paid creator fees are billed separately."],
  ["Do you run campaigns outside India?", "Yes. We manage accounts for brands in Canada, the USA and other markets with the same system."],
  ["Who owns the ad accounts?", "You do. Always. Your accounts, your pixel, your data, your site."],
];

const markup = `
<!-- ============ NAV ============ -->
<div class="nav">
  <div class="nav-in">
    <a class="logo" href="#top" aria-label="Acquirely home"><img src="${IMG}/01-acquirely-the-science-behind-scale.png" alt="Acquirely — The Science Behind Scale"></a>
    <nav class="nav-links" aria-label="Page sections">
      <a href="#results">Case Studies</a>
      <a href="#services">Services</a>
      <a href="#flywheel">A3 Flywheel</a>
      <a href="#industries">Industries</a>
      <a href="#faq">FAQ</a>
    </nav>
    <a class="btn blue" href="${BOOK}" ${ext}>Book a Call</a>
  </div>
</div>

<!-- ============ HERO ============ -->
<section class="hero" id="top">
  <div class="wrap hero-grid">
    <div>
      <span class="audience"><b>For founders</b><span><strong>D2C brands</strong> and <strong>lead-gen businesses</strong> who've hit a growth ceiling</span></span>
      <h1><span class="ln">Learn why <span class="grad">20+ D2C &amp; lead-gen brands</span> trust</span> <span class="ln">Acquirely to run their whole growth funnel</span></h1>
      <p class="lede">Our clients have grown revenue <b>up to 5x in 90 days</b>, lifted qualified leads <b>from 10% to 50%</b>, and scaled ad spend <b>80% at the same cost per lead</b>, with one team running their Meta, Google, LinkedIn, marketplaces, website and conversion.</p>
      <div class="hero-cta">
        <a class="btn" href="${BOOK}" ${ext}>Book a Growth Diagnosis Call ${ARROW}</a>
        <div class="blogos" aria-label="Brands growing with Acquirely"><span class="bl" style="background:#F3EEE8" title="TacTow"><img src="${IMG}/02-tactow.png" alt="TacTow"></span><span class="bl" style="background:#1F3D13" title="Gharaana"><img src="${IMG}/03-gharaana.png" alt="Gharaana"></span><span class="bl" style="background:#FFFFFF" title="Patoola"><img src="${IMG}/04-patoola.png" alt="Patoola"></span><span class="bl" style="background:#FDF7E6" title="Creste Kids"><img src="${IMG}/05-creste-kids.png" alt="Creste Kids"></span><span class="bl" style="background:#FFFFFF" title="Sevora"><img src="${IMG}/06-sevora.png" alt="Sevora"></span><span class="bl" style="background:#FFFFFF" title="Sofara"><img src="${IMG}/07-sofara.png" alt="Sofara"></span><span class="bl more">+14</span></div>
      </div>
      <div class="trust-row">
        <span>${TICK}One team for the whole funnel</span>
        <span>${TICK}Founders on your account</span>
        <span class="spots"><i></i>Only 3 onboarding spots open this month</span>
      </div>
    </div>

    <div class="card hub">
      <div class="hub-top"><h3>Client results board<small>Real numbers from live accounts</small></h3><span class="pill-live"><i></i>Live accounts</span></div>
      <div class="hub-rows">
        <div class="hub-row"><div class="who">D2C · Puzzle brand<small>Monthly revenue</small></div><div class="mv"><s>₹8L →</s><b class="grad">₹40L</b></div><span class="t">90 days</span></div>
        <div class="hub-row"><div class="who">Lead gen · Pilot training<small>Qualified lead rate</small></div><div class="mv"><s>10% →</s><b class="grad">50%</b></div><span class="t">5x sales-ready</span></div>
        <div class="hub-row"><div class="who">Lead gen · Online school<small>Monthly spend, same CPL</small></div><div class="mv"><s>$50K →</s><b class="grad">$90K</b></div><span class="t">2 months</span></div>
        <div class="hub-row"><div class="who">Lead gen · Fintech<small>Cost per lead, spend up 20x</small></div><div class="mv"><s>₹1,000 →</s><b class="grad">₹13</b></div><span class="t">−98.7%</span></div>
      </div>
    </div>
  </div>
</section>

<!-- ============ TRUSTED BY (phone mockups) ============ -->
<section class="trusted" aria-label="Brands growing with Acquirely">
  <p class="trusted-h">Trusted by founders in India, Canada &amp; the USA</p>
  <div class="ph-viewport">
    <div class="ph-track">
      ${phone("tactow.in", "09-tactow-website-on-mobile.jpg", "TacTow", "3D wooden puzzles")}
      ${phone("rightsourceaviation.com", "33-rsa-aviation-website-on-mobile.jpg", "RSA Aviation", "Pilot training academy")}
      ${phone("gharaana", "10-gharaana-website-on-mobile.jpg", "Gharaana", "Furniture")}
      ${phone("internationalschooling.org", "30-international-schooling-website-on-mobile.jpg", "International Schooling", "Online school")}
      ${phone("patoola", "11-patoola-website-on-mobile.jpg", "Patoola", "Indo-Western fashion")}
      ${phone("kashti.com", "31-kashti-website-on-mobile.jpg", "Kashti", "Fintech app")}
      ${phone("crestekids.com", "12-creste-kids-website-on-mobile.jpg", "Creste Kids", "DIY craft kits")}
      ${phone("globalproptech.in", "29-global-proptech-website-on-mobile.jpg", "Global Proptech", "Luxury real estate · Gurugram")}
      ${phone("nostrain.in", "32-nostrain-website-on-mobile.jpg", "NoStrain", "Footwear")}
      ${phone("sevora", "13-sevora-website-on-mobile.jpg", "Sevora", "Fashion")}
      ${phone("sofara", "14-sofara-website-on-mobile.jpg", "Sofara", "Furniture · Canada")}
    </div>
  </div>
</section>

<!-- ============ NUMBERS (dark) ============ -->
<section class="band dark">
  <div class="wrap">
    <div class="head">
      <h2>Numbers don't lie</h2>
      <p style="color:var(--orange);font-weight:600;margin-top:10px">Revenue for D2C brands. Qualified leads for lead-gen businesses.</p>
      <p style="font-size:14.5px;margin-top:6px">No vanity metrics. Just real numbers from real accounts.</p>
    </div>
    <div class="stats">
      <div class="stat reveal"><b>5x</b><span>Revenue growth for a D2C puzzle brand in one quarter</span></div>
      <div class="stat reveal"><b>5x</b><span>More sales-ready leads for a ₹35L–₹60L pilot programme</span></div>
      <div class="stat reveal"><b>98.7%</b><span>Drop in cost per lead for a fintech marketplace</span></div>
      <div class="stat reveal"><b>₹30Cr+</b><span>Ad spend managed by the founding team</span></div>
    </div>
  </div>
</section>

<!-- ============ CASE STUDIES ============ -->
<section class="band" id="results">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow">Case studies</span>
      <h2>Two growth engines. <span class="grad">Seven founders who broke their ceiling.</span></h2>
      <p>Same system in every account. A different bottleneck in each one.</p>
    </div>
    <div class="hm-tabs" role="group" aria-label="Filter case studies">
      <button type="button" data-filter="all" aria-pressed="true">All (7)</button>
      <button type="button" data-filter="d2c" aria-pressed="false">D2C (4)</button>
      <button type="button" data-filter="lead" aria-pressed="false">Lead gen (3)</button>
    </div>
    <div class="cases">${cases.map(caseCard).join("")}
    </div>
    <div class="center-cta">
      <a class="btn" href="${BOOK}" ${ext}>Get the Same Diagnosis ${ARROW}</a>
      <small>More results: <a href="/ecommerce#results">D2C &amp; ecommerce</a> · <a href="/lead-gen#results">Lead generation</a> · <a href="/case-studies">All case studies</a></small>
    </div>
  </div>
</section>

<!-- ============ WHY BRANDS STALL ============ -->
<section class="band white">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow">Why brands stall</span>
      <h2>You don't have an ads problem. You have a funnel problem.</h2>
      <p>Most brands get stuck between ₹3L and ₹20L a month. The product is fine. The ads are fine. The leaks sit between the people running each piece, where nobody owns the number.</p>
    </div>
    <div class="split">
      <div class="card">
        <h3>How most brands run growth</h3>
        <div class="hm-vendors">
          <div><b>Ads agency</b>"The website isn't converting."</div>
          <div><b>Web developer</b>"The traffic is low quality."</div>
          <div><b>Social freelancer</b>"Engagement is up this month."</div>
          <div><b>Sales team</b>"These leads never pick up."</div>
        </div>
        <ul class="x-list">
          <li>Creatives tested at random, with no hypothesis</li>
          <li>Budgets raised on a good day, cut on a bad one</li>
          <li>Cheap leads that never pick up, traffic that never checks out</li>
        </ul>
        <p class="hm-tally">4 vendors · 4 dashboards · 0 owners</p>
      </div>
      <div class="andro">
        <span class="tag">${icon('<path d="M20 12a8 8 0 1 1-2.3-5.7"/><path d="M20 4v4h-4"/>', "currentColor")}How we run it</span>
        <h3>One team owns every stage of the funnel</h3>
        <div class="hm-stages">
          <div><b>Attract</b>Meta, Google, LinkedIn, marketplaces, social</div>
          <div><b>Convert</b>Website, landing pages, lead forms, checkout</div>
          <div><b>Compound</b>A3 Flywheel, weekly creative, retention</div>
        </div>
        <p>RSA proves the point: the fix wasn't a new ad. Moving lead capture from WhatsApp to a website form changed who Meta went looking for.</p>
        <p><b>1 team · 1 dashboard · 1 number.</b></p>
      </div>
    </div>
  </div>
</section>

<!-- ============ WHY ACQUIRELY ============ -->
<section class="band">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow">Why founders pick us</span>
      <h2>We're not another agency that "runs your ads"</h2>
    </div>
    <div class="reasons">
      ${reason("01", false, "One team owns the whole funnel", [
        ['<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>', "Everything under one roof", "Meta, Google, LinkedIn, marketplaces, website, CRO and social."],
        ['<path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/>', "One number", "One dashboard, one monthly review: profitable revenue or qualified leads."],
        ['<path d="M4 5h16v14H4z"/><path d="M4 9h16"/>', "Pages built for the ad", "Landing pages designed for the exact ad sending traffic to them."],
      ], "Our biggest turnarounds rarely came from better targeting. The leak usually sat just outside the ad account, in a place no agency owned. So we took responsibility for it.")}
      ${reason("02", true, "A system, not guesswork", [
        ['<path d="M20 12a8 8 0 1 1-2.3-5.7"/><path d="M20 4v4h-4"/>', "Runs weekly", "The A3 Flywheel: structure, creative, micro analysis, repeat."],
        ['<path d="M4 7h16M4 12h16M4 17h10"/>', "A new Pack every week", "From research, net-new concepts and iterations of winners."],
        ['<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>', "Tested across 20+ accounts", "Built from what actually worked after Andromeda, not from theory."],
      ], "Creste, Kashti and Patoola all turned on creative, not campaign settings. That's why we built a creative engine, not just a media-buying desk.")}
      ${reason("03", false, "Expert operators, full transparency", [
        ['<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0116 0"/>', "Specialists on every account", "A Meta and a Google specialist, each with 5+ years and ₹10Cr+ managed a year."],
        ['<path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/>', "One live dashboard", "And one monthly review, built around the number that matters to you."],
        ['<path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3z"/>', "Every decision, shown to you", "Every scale or cut decision comes with the numbers behind it."],
      ], "At most agencies the founder sells and a junior delivers. Here, the people on your diagnosis call are the people in your account.")}
    </div>
    <div class="center-cta"><a class="btn" href="${BOOK}" ${ext}>Book a Growth Diagnosis Call ${ARROW}</a></div>
  </div>
</section>

<!-- ============ SERVICES ============ -->
<section class="band white" id="services">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow">What we do</span>
      <h2>Not a full-service agency. <span class="grad">A full-funnel one.</span></h2>
      <p>Full-service agencies sell you a menu. We sell you an outcome. Every service exists to make your next rupee of ad spend more profitable than the last.</p>
    </div>
    <div class="promise-top">
      <span class="ic">${icon('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>', "#fff")}</span>
      <div><b>Full-funnel strategy &amp; strategic media buying</b><span>One strategist decides where every rupee goes next: which channel, which page, or fixing checkout first.</span></div>
    </div>
    <div class="hm-svcs">
      ${svcCard('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>', false, "Attract", "Reach the right buyers on the right platform, with creative that actually gets tested.", ["Meta Ads", "Google Ads", "LinkedIn Ads", "Marketplace Ads · Amazon &amp; Flipkart", "Social Media", "Search Visibility · SEO + AEO"])}
      ${svcCard('<path d="M3 4h18l-7 8v6l-4 2v-8z"/>', true, "Convert", "Turn paid traffic into orders and qualified leads. We fix pages, checkout and tracking before we scale spend.", ["Website Design &amp; Development", "Landing Pages", "Conversion Rate Optimisation", "Checkout, COD &amp; RTO", "Tracking &amp; Attribution"])}
      ${svcCard('<path d="M21 12a9 9 0 1 1-3-6.7"/><path d="M21 4v5h-5"/>', false, "Compound", "Every month builds on the last instead of starting over. Winners get scaled, insights feed the next round.", ["The A3 Flywheel", "Creative Strategy &amp; Testing", "Retargeting &amp; Repeat Purchase", "Live Reporting"])}
    </div>
  </div>
</section>

<!-- ============ FLYWHEEL ============ -->
<section class="band" id="flywheel">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow">The method</span>
      <h2>The A3 Flywheel: how we scale after Andromeda</h2>
      <p>When Andromeda landed, interest targeting stopped working across most of the 20+ ad accounts we managed, ecommerce and lead gen alike. So we rebuilt how we run them: one structure, three systems, run every week.</p>
    </div>
    <div class="card fly">
      <svg viewBox="0 0 400 400" role="img" aria-label="A3 Flywheel: A1 Structure feeds A2 Creative, which feeds A3 Micro Analysis, which feeds back into A1">
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
          <text x="200" y="82" fill="#E0ECFF" font-size="10.5" font-weight="600">Structure</text>
          <circle cx="316" cy="270" r="44" fill="#F37513"/>
          <text x="316" y="268" fill="#fff" font-weight="800" font-size="20">A2</text>
          <text x="316" y="286" fill="#FFE8D6" font-size="10.5" font-weight="600">Creative</text>
          <circle cx="84" cy="270" r="44" fill="#6366F1"/>
          <text x="84" y="268" fill="#fff" font-weight="800" font-size="20">A3</text>
          <text x="84" y="286" fill="#E0E7FF" font-size="9.5" font-weight="600">Micro Analysis</text>
          <text x="200" y="196" fill="#71717B" font-weight="700" font-size="11" letter-spacing="3">RUNS</text>
          <text x="200" y="222" fill="#0F172A" font-weight="800" font-size="24">WEEKLY</text>
        </g>
      </svg>
      <div class="stages">
        <div class="stage"><span class="code">A1</span><div><h3>Foundation Structure</h3><p>Two campaigns, not five. One Prospecting CBO that tests and scales new-customer ads, and one Retention campaign for people who've already bought.</p></div></div>
        <div class="stage"><span class="code">A2</span><div><h3>Creative Framework</h3><p>A new creative Pack every week, from competitor research, net-new concepts and iterations of proven winners.</p></div></div>
        <div class="stage"><span class="code">A3</span><div><h3>Micro Analysis</h3><p>Meta doesn't perform the same every day, so your budget shouldn't either. With 90 days of data, spend moves from weak days to strong ones.</p></div></div>
      </div>
    </div>

    <div class="dcard" id="playbook" style="margin-top:40px">
      <div>
        <span class="eyebrow">Free playbook</span>
        <h2 style="margin-top:10px">Get the full A3 Flywheel playbook</h2>
        <p style="margin-top:10px">The exact rules we run in client accounts. Inside, you'll learn:</p>
        <ul class="ticks">
          <li><span><b>Why your new creatives get almost no spend</b>, and the one ad-set setting that gives every Pack a fair 7-day test.</span></li>
          <li><span><b>Why we killed our own Scale campaign</b>, and where scaling happens now instead.</span></li>
          <li><span><b>How to stop spending the same budget every day</b> when some days return 5x and others 2.5x.</span></li>
          <li><span><b>What to do when your best ad starts dying.</b> Pausing it is usually the mistake that crashes ROAS.</span></li>
        </ul>
      </div>
      <div class="dform pb-cta">
        <span class="eyebrow">Free · 2-minute form</span>
        <h3>Send me the playbook</h3>
        <p>Tell us where to send it and your monthly ad spend. The playbook lands in your inbox and on WhatsApp.</p>
        <a class="btn blue" href="${PLAYBOOK}" ${ext}>Send Me the Playbook ${ARROW}</a>
        <p class="note"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/></svg>No spam. We never share your details.</p>
      </div>
    </div>
  </div>
</section>

<!-- ============ INDUSTRIES ============ -->
<section class="band white" id="industries">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow">Industries</span>
      <h2>Two growth engines. Built for how your buyer decides.</h2>
      <p>A ₹500 snack and a ₹6 lakh enrolment need completely different funnels. We run two specialist practices, each with its own playbook and its own success metric.</p>
      <div class="hm-legend"><span><i class="chip">Proven</i>Categories we've grown</span><span><i class="chip soon">Onboarding</i>Playbook ready, taking first brands</span></div>
    </div>
    <div class="hm-ind">
      <div class="card reveal">
        <div class="hm-ind-top"><span class="ic">${icon('<path d="M6 7h12l-1 13H7z"/><path d="M9 7a3 3 0 0 1 6 0"/>')}</span><div><h3>D2C &amp; Ecommerce</h3><small>Measured on revenue, ROAS, RTO and repeat purchase</small></div></div>
        ${chips(["Apparel &amp; Fashion", "Jewellery &amp; Accessories", "Hair Care", "Ayurveda", "DIY Toys &amp; Learning Kits", "Furniture &amp; Home Décor", "Food &amp; Snacks", "Gaming &amp; Electronics", "Skincare &amp; Beauty"], ["Ethnic Wear", "Supplements &amp; Nutrition", "Home Appliances"])}
        <a class="btn line" href="/ecommerce">Explore D2C growth →</a>
      </div>
      <div class="card reveal">
        <div class="hm-ind-top"><span class="ic o">${icon('<circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0"/><path d="M16 11h5"/><path d="M18.5 8.5v5"/>', "#F37513")}</span><div><h3>Lead Generation</h3><small>Measured on qualified leads and booked meetings, not form fills</small></div></div>
        <div><p class="hm-sub">B2B · reach decision-makers</p>${chips(["Education Publishers", "EdTech for Schools", "Industrial &amp; Safety Supplies", "Wholesale Fashion"], ["B2B SaaS &amp; Services"])}</div>
        <div><p class="hm-sub">B2C · high-intent consumers</p>${chips(["Admissions &amp; Courses", "Fintech &amp; Financial Services", "Real Estate", "Healthcare &amp; Clinics", "Home Services"], ["Interiors &amp; Architects", "Coaching &amp; Consulting"])}</div>
        <a class="btn line" href="/lead-gen">Explore lead generation →</a>
      </div>
    </div>
  </div>
</section>

<!-- ============ WALL OF WINS ============ -->
<section class="band">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow">Wall of wins</span>
      <h2>Straight from Ads Manager and client chats</h2>
      <p>Screenshots from client accounts and chats. Cropped for privacy. Every number is exactly as the platform shows it.</p>
    </div>
    <div class="wins">${wins.map(([src, alt, who, line]) => `
      <figure class="win"><img src="${IMG}/${src}" alt="${alt}" loading="lazy"><figcaption><span>${who}</span>${line}</figcaption></figure>`).join("")}
    </div>
    <div class="center-cta"><a class="btn" href="${BOOK}" ${ext}>Book a Growth Diagnosis Call ${ARROW}</a></div>
  </div>
</section>

<!-- ============ WHO THIS IS FOR ============ -->
<section class="band white">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow">Who this is for</span>
      <h2>We say no to most brands. Here's why.</h2>
      <p>We work with two kinds of founders: brands ready to scale, and new brands ready to launch properly. What both need is clarity and commitment. If that's not you yet, we'll tell you on the call.</p>
    </div>
    <div class="fit hm-fit">
      <div class="card yes">
        <h3>Scaling brands</h3>
        <ul>
          <li>Spend ₹5L+ a month on ads</li>
          <li>Have a product or service that already sells</li>
          <li>Hit a ceiling when you try to scale</li>
          <li>Are tired of four vendors who blame each other</li>
        </ul>
      </div>
      <div class="card yes">
        <h3>New brands, launched right</h3>
        <ul>
          <li>Have a clear vision for the brand and who it's for</li>
          <li>Have a planned budget for the launch, not just the first ads</li>
          <li>Want one team to build the funnel from day one: website, tracking, creative and ads</li>
          <li>Would rather launch once, properly, than fix it later</li>
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
    <div class="center-cta">
      <a class="btn" href="${BOOK}" ${ext}>Yes, I'm Ready. Apply Now ${ARROW}</a>
      <small>Not sure? Apply anyway. We reply within 24 hours.</small>
    </div>
  </div>
</section>

<!-- ============ HOW WE WORK (dark) ============ -->
<section class="band dark">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow">How we work</span>
      <h2>Built on accountability, not empty promises</h2>
    </div>
    <div class="promise">
      <div class="stat"><b style="font-size:18px">A fair 75–90 day window</b><span>Micro Analysis needs 90 days of your data. That's when the system shows what it can do.</span></div>
      <div class="stat"><b style="font-size:18px">Top 1% experts only</b><span>5+ years running ads and ₹10Cr+ managed in a year, each. A Meta and a Google specialist on every account.</span></div>
      <div class="stat"><b style="font-size:18px">You own everything</b><span>Your ad accounts, pixel, data and website stay in your name. Always.</span></div>
      <div class="stat"><b style="font-size:18px">Data-backed decisions</b><span>Every scale or cut has a number behind it you can see.</span></div>
    </div>
  </div>
</section>

<!-- ============ FOUNDERS ============ -->
<section class="band">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow">Who you'll work with</span>
      <h2>Built by operators, not just agency owners</h2>
    </div>
    <div class="team">
      <div class="card person">
        <div class="avatar"><img src="${IMG}/mausam-arora.jpg" alt="Mausam Arora"></div>
        <div>
          <h3>Mausam Arora</h3>
          <p class="role">Co-founder · Funnels &amp; GTM</p>
          <p>12 years building businesses in education: curricula, 300+ books, and distribution to 2,000+ schools. Brings go-to-market thinking and funnel strategy to every account he scales.</p>
          <a href="https://www.linkedin.com/in/mausamarora/" ${ext}>${LINKEDIN}LinkedIn</a>
        </div>
      </div>
      <div class="card person">
        <div class="avatar"><img src="${IMG}/kunal-mondal.jpg" alt="Kunal Mondal"></div>
        <div>
          <h3>Kunal Mondal</h3>
          <p class="role">Co-founder · Meta strategy</p>
          <p>₹30Cr+ managed across 30+ brands in ecommerce, EdTech and real estate. A hands-on Meta strategist who runs full-funnel systems across Meta and Google.</p>
          <a href="https://www.linkedin.com/in/kunal-meta-ads/" ${ext}>${LINKEDIN}LinkedIn</a>
        </div>
      </div>
    </div>
    <div class="team-strip">
      <div class="faces">
        <img src="${IMG}/founder1.png" alt="">
        <img src="${IMG}/founder2.png" alt="">
        <img src="${IMG}/founder3.png" alt="">
        <img src="${IMG}/founder4.png" alt="">
        <img src="${IMG}/founder5.png" alt="">
      </div>
      <span>Plus the strategists, editors, designers and developers behind every account</span>
    </div>
  </div>
</section>

<!-- ============ FAQ ============ -->
<section class="band white" id="faq">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow">FAQ</span>
      <h2>Questions founders ask us</h2>
    </div>
    <div class="faq">${faqs.map(([q, a]) => `
      <details><summary>${q}</summary><p>${a}</p></details>`).join("")}
    </div>
  </div>
</section>

<!-- ============ FINAL CTA ============ -->
<section class="band" id="book">
  <div class="wrap">
    <div class="dcard">
      <div>
        <h2>Stuck at ₹10L, ₹20L or 2.5 ROAS? <span class="grad">So were they.</span></h2>
        <p style="margin-top:12px">Book a 30-minute Growth Diagnosis. We'll look at your ads, website and funnel, show you where it's leaking, and tell you straight whether we're the right fit.</p>
        <ul class="ticks">
          <li>Free ad account, website and funnel audit</li>
          <li>30-minute diagnosis call, no obligation</li>
          <li>A straight answer on whether we're the right fit</li>
        </ul>
      </div>
      <div style="display:grid;align-content:center">
        <span class="eyebrow">Your move</span>
        <h3 style="margin-top:10px">Book your diagnosis call</h3>
        <a class="btn blue" href="${BOOK}" ${ext} style="margin-top:22px;width:100%;padding:16px 22px;font-size:16px">Book Your Free Call! ${ARROW}</a>
        <p class="note"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>3 spots open this month. We reply within 24 hours.</p>
      </div>
    </div>
  </div>
</section>

<footer>
  <div class="wrap">
    <div class="foot">
      <div>
        <div class="brand"><img src="${IMG}/28-acquirely-the-science-behind-scale.png" alt="Acquirely — The Science Behind Scale" style="height:52px;width:auto"></div>
        <p style="margin-top:10px;max-width:32ch">A full-funnel growth team for D2C and lead-gen brands. Measured on revenue.</p>
      </div>
      <div><p class="fh">Services</p><ul><li><a href="/ecommerce">D2C &amp; ecommerce growth</a></li><li><a href="/lead-gen">Lead generation</a></li><li><a href="/publishers">Education publishers</a></li><li><a href="#services">Website &amp; CRO</a></li></ul></div>
      <div><p class="fh">More from Acquirely</p><ul><li><a href="/case-studies">Case studies</a></li><li><a href="/about-us">About us</a></li><li><a href="/blog">Blog</a></li><li><a href="/dropshipping-calculator">Dropshipping profit calculator</a></li></ul></div>
      <div><p class="fh">Contact</p><ul><li><a href="mailto:team@acquirely.in">team@acquirely.in</a></li><li><a href="tel:+917060250253">+91 70602 50253</a></li><li>New Delhi, India</li><li><a href="/privacy-policy">Privacy policy</a></li><li><a href="/terms-and-condition">Terms of service</a></li></ul></div>
    </div>
    <div class="fine">
      <p>© 2026 Acquirely. All rights reserved.</p>
      <p>This site is not part of the Meta or Facebook website and is not endorsed by Meta Platforms, Inc. Meta and Facebook are trademarks of Meta Platforms, Inc.</p>
    </div>
  </div>
</footer>

<div class="mcta"><a class="btn" href="${BOOK}" ${ext}>Book a Growth Diagnosis Call</a></div>
`;

export default markup;
