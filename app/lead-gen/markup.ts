import { withImgDims } from "@/lib/img-dims";
// Page markup for /lead-gen, rendered by LeadGenLanding. Shares ecommerce.css; lead-gen-only styles live in lead-gen.css.
const BOOK = "https://forms.acquirely.in/acquirely/form/LeadGenFunnelReviewCall/formperma/DEijNOw1e1C4Wd8r6luSZlNxj1zQVtObr106aUYe4-0";
const CTA = `href="${BOOK}" target="_blank" rel="noopener"`;
const ARROW = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`;
const TICK = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16A34A" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>`;
const LINKEDIN = `<svg width="14" height="14" viewBox="0 0 24 24" fill="#0A66C2"><path d="M4.98 3.5a2.5 2.5 0 11.02 5 2.5 2.5 0 01-.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.6 8.65 21 11.2 21 14.5V21h-4v-5.8c0-1.4 0-3.2-1.95-3.2S12.8 13.5 12.8 15.1V21H9z"/></svg>`;

const phone = (domain: string, img: string, name: string, cat: string) =>
  `<figure class="ph"><div class="ph-frame"><div class="ph-bar"><span></span><b>${domain}</b><span></span></div><div class="ph-screen"><img src="${img}" alt="${name} website on mobile" loading="lazy"></div></div><figcaption><b>${name}</b><span class="ph-cat">${cat}</span></figcaption></figure>`;

// Results band card. `before` is optional: "₹1,000+" renders as "₹1,000+ → ₹13.39".
const rc = (brand: string, label: string, big: string, note: string, before = "") =>
  `<div class="rc reveal"><div class="rc-who"><b>${brand}</b><small>${label}</small></div><div class="rc-mv">${before ? `<s>${before} →</s>` : ""}<b>${big}</b></div><p class="rc-note">${note}</p></div>`;

// Proof panel, option 1: screenshots. A null src shows a "Screenshot coming" placeholder.
// Only real, unedited Ads Manager / CRM screenshots go here. Cropping is fine, changing numbers is not.
type Shot = { src: string | null; alt?: string; cap: string; sub: string };
const shots = (list: Shot[]) => `
          <div class="proofs">
            ${list.map((s) => s.src
              ? `<figure class="proof-shot"><img src="${s.src}" alt="${s.alt}" loading="lazy"><figcaption><b>${s.cap}</b> ${s.sub}</figcaption></figure>`
              : `<figure class="proof-shot lg-shot-ph"><div><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="10" r="1.6"/><path d="M21 16l-5-5-8 8"/></svg><span>Screenshot coming</span></div><figcaption><b>${s.cap}</b> ${s.sub}</figcaption></figure>`).join("\n            ")}
            ${list.some((s) => s.src) ? `<p class="proof-hint">Tap a screenshot to enlarge</p>` : ""}
          </div>`;

// Proof panel, option 2: before/after bars. Widths are % of the larger value.
type Bar = { label: string; before: string; after: string; bw: number; aw: number; lower?: boolean };
const bars = (list: Bar[], note = "") => `
          <div class="lg-bars">
            ${list.map((b) => `<div class="lg-bar">
              <p class="lg-bar-l">${b.label}${b.lower ? ` <small>(lower is better)</small>` : ""}</p>
              <div class="lg-bar-r"><span>Before</span><i style="width:${b.bw}%"></i><b>${b.before}</b></div>
              <div class="lg-bar-r after"><span>After</span><i style="width:${b.aw}%"></i><b>${b.after}</b></div>
            </div>`).join("\n            ")}
            ${note ? `<p class="lg-bar-note">${note}</p>` : ""}
          </div>`;

type Case = {
  n: string; stat: string; statLabel: string; proof: string; chip: string; live?: boolean;
  title: string; facts: [string, string][]; story: string; cta: string;
};
const caseStudy = (c: Case) => `
      <article class="card case reveal">
        <div class="case-data">
          <div class="k"><small>Result</small><b class="grad">${c.stat}</b><span>${c.statLabel}</span></div>${c.proof}
        </div>
        <div class="case-body">
          <div class="case-top"><span class="num${Number(c.n) % 2 === 0 ? " o" : ""}">${c.n}</span><span class="chip">${c.chip}</span>${c.live ? `<span class="chip lg-live"><i></i>Live</span>` : ""}</div>
          <h3>${c.title}</h3>
          <dl class="facts">
            ${c.facts.map(([t, d], i) => `<div><dt>${t}</dt><dd>${i === c.facts.length - 1 ? `<b>${d}</b>` : d}</dd></div>`).join("\n            ")}
          </dl>
          <p class="story">${c.story}</p>
          <a class="btn line" ${CTA}>${c.cta}</a>
        </div>
      </article>`;

const cases: Case[] = [
  {
    n: "01", stat: "150+", statLabel: "Paid principal registrations in 2 months",
    proof: shots([
      { src: "/publishers/img/propel-immersion-highlights-poster.jpg", alt: "Moments from Immersion 2024, Propel's PBL conference for school leaders", cap: "Immersion", sub: "The conference principals paid to attend" },
    ]),
    chip: "B2B · Paid conference",
    title: "150+ principals paid ₹20K each to attend a conference",
    facts: [
      ["Client", "A PBL curriculum provider with fewer than 10 full-time staff"],
      ["Starting point", "No sales force, and a goal of 100 paid seats in 60 days"],
      ["2-month result", "150+ registrations. ₹2.3Cr+ revenue on ₹3L spend."],
    ],
    story: "Instead of hiring salespeople, we proposed that Propel host Immersion, a 3-day residential conference in Delhi for school leaders, priced at ₹20,000. Principals are among the hardest audiences to reach on Meta, and asking them to pay for a conference is harder still. Through the A3 Flywheel, we tested new creative angles every week and scaled the winners. The result: 150+ paid seats at about ₹2,000 each, ₹2Cr+ in curriculum orders after the event, and adoption by City Montessori School, Lucknow, the world's largest school.",
    cta: "Get the same diagnosis →",
  },
  {
    n: "02", stat: "−99%", statLabel: "Cost per registered user, Mar → Jun 2026",
    proof: bars([
      { label: "Cost per registration", before: "₹1,000–2,000", after: "₹13.39", bw: 100, aw: 4, lower: true },
      { label: "Reach", before: "1x", after: "4.75x", bw: 21, aw: 100 },
    ]),
    chip: "Fintech · App registrations",
    title: "\"Meta never works for us.\" Now it's ~25.7K registrations a month.",
    facts: [
      ["Client", "Kashti, loan marketplace connecting borrowers with banks and NBFCs"],
      ["Starting point", "Offer-led leads at ₹1,000–2,000 each"],
      ["Result", "Brand-led registrations at ₹13.39. ~25.7K a month."],
    ],
    story: "Kashti came to us in March 2026 convinced Meta didn't work, and at over ₹1,000 a lead the numbers agreed. Structured creative testing showed the offer-led angle was the problem. We shifted to brand-led creative that drove registrations instead of one-off leads. Cost per registered user fell 99% to ₹13.39, reach grew 4.75x, and the account now brings in around 25,700 registrations a month.",
    cta: "Get the same audit →",
  },
  {
    n: "03", stat: "5x", statLabel: "More sales-qualified leads at the same spend",
    proof: bars([
      { label: "Sales-qualified lead rate", before: "10%", after: "50%", bw: 20, aw: 100 },
      { label: "Cost per qualified lead", before: "₹1,500", after: "₹300", bw: 100, aw: 20, lower: true },
    ], "Cost per lead held at ~₹150, unchanged."),
    chip: "High-ticket training · ₹ lakhs per enrolment",
    title: "Same cost per lead. 5x more leads worth calling.",
    facts: [
      ["Client", "RSA Aviation (Right Source Aviation), pilot training academy"],
      ["Starting point", "1 in 10 leads sales-qualified. ₹1,500 per qualified lead."],
      ["Result", "1 in 2 leads sales-qualified. ₹300 per qualified lead."],
    ],
    story: "Pilot training is a high-ticket decision, and most leads were students who couldn't fund it. Cheap leads were flooding the sales team with calls that went nowhere. We rebuilt targeting around who can actually enrol: income-screened audiences (household income ₹10L+), and excluding Grade 9–10 students. Cost per lead stayed around ₹150, but the share of leads the sales team could work went from 10% to 50%.",
    cta: "Get the same audit →",
  },
  {
    n: "04", stat: "&lt;₹150", statLabel: "Cost per school lead, 300+ leads",
    proof: shots([
      { src: "/publishers/img/ipstudy-meta-ads-manager-323-school-leads.jpg", alt: "IP Study Meta Ads Manager: 323 school leads", cap: "Meta Ads Manager", sub: "School leads" },
    ]),
    chip: "B2B · Field sales team",
    title: "300+ school leads in under a month, at under ₹150 each",
    facts: [
      ["Client", "A school books publisher with a 100+ person field sales force"],
      ["Starting point", "10,000 cold school visits a year, most of them wasted"],
      ["30-day result", "300+ genuine leads. About 40% lower cost per school won (projected)."],
    ],
    story: "IP Study's reps visited about 10,000 schools a year. Most samples never reached a decision-maker, and the company kept paying travel, hotel and sampling costs regardless. We flipped the model: Meta Ads find interested schools first. A product expert gives the demo, and reps visit only for scheduled meetings with principals and HoDs. Running on the A3 Flywheel, the campaign delivered 300+ leads in under a month. The projection for this year is 30% higher conversion and about 40% lower cost per school won.",
    cta: "Get the same diagnosis →",
  },
  {
    n: "05", stat: "+40%", statLabel: "Qualified enrolment leads, across 9+ countries",
    proof: bars([
      { label: "Qualified enrolment leads", before: "Baseline", after: "+40%", bw: 71, aw: 100 },
      { label: "Consultation show-rate", before: "Baseline", after: "+25%", bw: 80, aw: 100 },
    ]),
    chip: "Online school · 9+ countries",
    title: "One budget, nine countries, and qualified leads up 40%",
    facts: [
      ["Client", "International Schooling, global online K-12 school (American curriculum)"],
      ["Scale", "SGD 3,000/day across 9+ countries. Fees ₹1L–₹6L per enrolment."],
      ["Result", "Qualified enrolment leads +40%. Consultation show-rate +25%."],
    ],
    story: "With fees between ₹1L and ₹6L, a lead that never shows up to the consultation is expensive. Running one budget across 9+ countries also meant cost per qualified lead could swing wildly by market. We structured spend so every geography was judged on qualified leads, not raw volume, and kept cost per qualified lead stable across markets while lifting qualified enrolment leads 40% and consultation show-rate 25%.",
    cta: "Get the same audit →",
  },
  {
    n: "06", stat: "40+", statLabel: "Paid registrations, six weeks before the event",
    proof: shots([
      { src: "/publishers/img/agastya-meta-ads-manager-cost-per-lead-803-to-80.jpg", alt: "Agastya Meta Ads Manager, last 30 days: Conclave 2026 form campaign with 729 leads at ₹80.50 per lead, down from ₹803–₹903 on earlier campaigns", cap: "Meta Ads Manager", sub: "Last 30 days: 729 leads at ₹80.50, down from ₹803–₹903" },
    ]),
    chip: "Nonprofit · Paid event", live: true,
    title: "School leaders paying ₹20K to travel to Kuppam",
    facts: [
      ["Client", "One of India's leading education nonprofits, reaching 40M+ children"],
      ["Starting point", "A cold ad account, a remote venue and a 100-seat target"],
      ["Results so far (live)", "40+ paid registrations at about ₹5,000 each."],
    ],
    story: "Agastya's Education Leaders Conclave 2026, The Future of Learning in the AI Era, runs 10–12 December at its campus in Kuppam, Andhra Pradesh. The goal is 100 school founders, principals and academic heads at up to ₹20,000 each. That meant a premium ticket, a trip most attendees had never made, and an ad account with almost no history. Building on the Propel playbook and the A3 Flywheel, we tested new angles every week. Within ₹2L of spend, 40+ leaders had paid, and the campaign is now scaling toward the target.",
    cta: "Get the same diagnosis →",
  },
];

// Pricing tier. `off` items render greyed out with ✕; `more` fills the "See everything included" dropdown.
type Tier = {
  id: string; name: string; price: string; line: string; tagline: string; inc: [string, string?][]; off?: string[];
  more: [string, string][]; btn: string; btnClass: string; flag?: string; badge?: string; under?: string;
};
const tier = (t: Tier) => `
      <article class="card lg-tier lg-tier-${t.id}">
        ${t.flag ? `<span class="lg-flag">${t.flag}</span>` : ""}
        <div class="lg-tier-top"><h3>${t.name}</h3>${t.badge ? `<span class="lg-save">${t.badge}</span>` : ""}</div>
        <p class="lg-tagline">${t.tagline}</p>
        <div class="lg-amt">${t.price}<small>+ GST / month</small></div>
        <p class="lg-strike">${t.line}</p>
        <ul class="lg-inc">
          ${t.inc.map(([s, tag]) => `<li><span>${s}${tag ? ` <em>${tag}</em>` : ""}</span></li>`).join("\n          ")}
          ${(t.off || []).map((s) => `<li class="off">${s}</li>`).join("\n          ")}
        </ul>
        <details class="lg-more"><summary>See everything included</summary><dl>
          ${t.more.map(([a, b]) => `<div><dt>${a}</dt><dd>${b}</dd></div>`).join("\n          ")}
        </dl></details>
        <a class="btn ${t.btnClass}" ${CTA}>${t.btn}</a>
        ${t.under ? `<p class="lg-under">${t.under}</p>` : ""}
      </article>`;

const tiers: Tier[] = [
  {
    id: "lead", name: "Lead Engine", price: "₹75,000", line: "Founding rate · <s>₹1,00,000</s>",
    tagline: "Meta ads that bring in screened leads.",
    inc: [["Facebook &amp; Instagram Ads, fully managed"], ["Unlimited creatives + landing pages"], ["Lead scoring + OTP validation"]],
    off: ["Google, YouTube &amp; LinkedIn Ads", "No-show reminders + nurture sequences", "Closed deals fed back to Meta &amp; Google", "Qualified-Lead Floor guarantee"],
    more: [
      ["Full Facebook &amp; Instagram Ads", "Launch, management and daily optimisation."],
      ["GTM + conversion tracking", "Every lead traced to the ad, audience and city that brought it."],
      ["All static creatives + video editing", "Unlimited angle testing, never billed per asset."],
      ["Landing pages + lead capture", "Mobile-first pages built to turn a click into a booked call."],
      ["Lead scoring + intent filtering", "People who can't buy, filtered out before your team sees them."],
      ["Phone / OTP validation", "Fake numbers killed at the source."],
    ],
    btn: "Start with Lead Engine", btnClass: "line",
  },
  {
    id: "growth", name: "Growth Engine", price: "₹1,00,000", line: "Founding rate · <s>₹1,50,000</s>",
    flag: "Most clients pick this", badge: "Save ₹50,000/month",
    tagline: "Leads and the follow-up system that turns them into closed deals.",
    inc: [
      ["Everything in Lead Engine"], ["Google Search, PMax, YouTube &amp; LinkedIn Ads"], ["WhatsApp + email no-show reminders"],
      ["Automated nurture for leads not ready yet"], ["Closed deals fed back to Meta &amp; Google", "The big lever"],
      ["<b>Qualified-Lead Floor:</b> we work free until we hit your number"],
    ],
    more: [
      ["Everything in Lead Engine", "Meta ads, tracking, creatives, landing pages, lead scoring, OTP validation."],
      ["Google Ads (Search, PMax &amp; YouTube)", "Meta creates demand; Google captures it the moment someone searches."],
      ["LinkedIn Ads", "Reach owners and directors by job title and company."],
      ["WhatsApp + email reminders", "Cuts no-shows. The lead who booked actually turns up."],
      ["Automated nurture sequences", "Leads not ready this month stay warm."],
      ["Conversion API + offline conversions", "Closed deals fed back to Meta &amp; Google so they hunt buyers, not clicks."],
      ["Weekly reporting + strategy call", "Cost per qualified lead every week."],
    ],
    btn: "Get the Growth Engine", btnClass: "", under: "Only ₹25,000 more than Lead Engine",
  },
  {
    id: "dfy", name: "Done-For-You Engine", price: "₹2,50,000", line: "Limited to a few clients at a time",
    tagline: "Your entire marketing team, outsourced.",
    inc: [["Everything in Growth Engine"], ["Our team calls, screens &amp; warms every lead"], ["SEO + AEO (Google &amp; AI search)"], ["Google Business Profile"], ["Social media management"], ["Website + landing pages"]],
    more: [
      ["Everything in Growth Engine", "The complete Meta + Google + LinkedIn system."],
      ["Pre-screened, warmed leads", "Our team calls every lead, screens for fit and budget, and warms them up."],
      ["SEO + AEO", "Rank on Google and get cited in ChatGPT, Perplexity and AI Overviews."],
      ["Google Business Profile", "Optimised and managed for local search and Maps."],
      ["Social media management", "Content and posting on your brand handles."],
      ["Website + landing pages", "Built, maintained and conversion-tested by us."],
    ],
    btn: "Apply for Done-For-You", btnClass: "line dk",
  },
];

const faqs: [string, string][] = [
  ["How quickly will I see results?", "Lead volume usually moves in the first 2–4 weeks. Lead quality takes longer, because we need your team's feedback on which leads qualified. Give it 60–90 days to see the full picture."],
  ["Do you close the leads too?", "No. We generate and qualify leads; your sales or counselling team closes them. That's why we ask for feedback on lead outcomes, and why we're picky about fit."],
  ["Will my cost per lead go up?", "Sometimes, a little. At RSA it held steady at ~₹150 while the qualified share went from 10% to 50%. A slightly higher CPL that brings 5x more qualified leads is a much cheaper cost per sale."],
  ["Which industries do you work with?", "Education and EdTech, pilot and professional training, fintech and lending, real estate, B2B and healthcare. Anywhere a sale starts with a lead and a conversation."],
  ["Are creatives and landing pages included?", "Yes. A weekly creative Pack and lead form / landing page testing are part of the fee. Paid creator fees and shoots are billed separately."],
  ["Do you run campaigns outside India?", "Yes. International Schooling runs across 9+ countries with us, and we manage accounts in Canada, the USA and other markets with the same system."],
];

const markup = `
<!--
  TO FINISH BEFORE GOING LIVE
  1. VSL: the hero plays the existing Wistia lead-gen video (nm2ou94x6d). Swap data-video if there's a new cut.
  2. More screenshots (real, unedited only): add entries to a case's shots() list. Propel Ads Manager, IP Study lead sheet / CRM
     and Agastya registrations would fill the gaps. A { src: null } entry shows a "Screenshot coming" placeholder.
  3. Agastya numbers: this page says 40+ live; /publishers says 100+, ₹16L and 8x ROAS. Pick one.
  4. IP Study numbers: <₹150 vs ~₹155, and 30% vs 300% conversion. Align with /publishers.
  5. Logo circles: Kashti and Global Proptech have no logo files yet, so they show as text.
  6. Non-education proof: 5 of 6 case studies are education. Add Global Proptech when you have its numbers.
-->

<!-- ============ NAV ============ -->
<div class="nav">
  <div class="nav-in">
    <a class="logo" href="#top" aria-label="Acquirely home"><img src="/ecommerce/img/01-acquirely-the-science-behind-scale.png" alt="Acquirely — The Science Behind Scale"></a>
    <nav class="nav-links" aria-label="Page sections">
      <a href="#results">Case Studies</a>
      <a href="#flywheel">How It Works</a>
      <a href="#pricing">Pricing</a>
      <a href="#faq">FAQ</a>
    </nav>
    <a class="btn blue" ${CTA}>Book a Call</a>
  </div>
</div>

<!-- ============ HERO ============ -->
<section class="hero" id="top">
  <div class="wrap hero-grid">
    <div>
      <span class="audience"><b>For founders</b><span>Education, fintech, real estate &amp; B2B businesses that <strong>sell through leads</strong></span></span>
      <h1><span class="ln">Learn why <span class="grad">fast-growing lead-gen businesses</span></span> <span class="ln">trust Acquirely to fill their sales pipeline</span></h1>
      <p class="lede">From principals paying <b>₹20K for a conference</b> to fintech registrations at <b>₹13.39</b>, we turn Meta and Google Ads into leads your team actually wants to call.</p>
      <div class="hero-cta">
        <a class="btn" ${CTA}>Book a Lead Quality Audit ${ARROW}</a>
        <div class="blogos" aria-label="Businesses growing with Acquirely"><span class="bl lg-bl-txt" title="Kashti">Kashti</span><span class="bl" style="background:#FFFFFF" title="RSA Aviation"><img src="/publishers/img/logo-rsa-aviation.png" alt="RSA Aviation"></span><span class="bl wide" style="background:#FFFFFF" title="International Schooling"><img src="/publishers/img/logo-international-schooling.png" alt="International Schooling"></span><span class="bl lg-bl-txt" title="Global Proptech">Global<br>Proptech</span></div>
      </div>
      <div class="trust-row">
        <span>${TICK}Optimised for qualified leads, not form fills</span>
        <span>${TICK}Founders on your account</span>
        <span class="spots"><i></i>Only 3 onboarding spots open this month</span>
      </div>
    </div>

    <!-- VIDEO: Wistia lead-gen VSL (media nm2ou94x6d). Clicking the poster swaps in the player. -->
    <div class="vid" data-video="https://fast.wistia.net/embed/iframe/nm2ou94x6d?autoPlay=true&playerColor=2949E5">
      <div class="vid-bar">Learn how it works</div>
      <button class="vid-screen" type="button" aria-label="Play: why cheap leads don't close, and what we do instead">
        <img src="https://fast.wistia.com/embed/medias/nm2ou94x6d/swatch" alt="" aria-hidden="true">
        <span class="vid-card"><b>Why cheap leads don't close, and what we do instead</b><small>The lead-quality system, explained</small></span>
        <span class="vid-play"><svg width="30" height="30" viewBox="0 0 24 24" fill="#fff"><path d="M8 5.5v13a1 1 0 001.5.86l10.5-6.5a1 1 0 000-1.72L9.5 4.64A1 1 0 008 5.5z"/></svg></span>
      </button>
    </div>
  </div>
</section>

<!-- ============ TRUSTED BY (phone mockups) ============ -->
<section class="trusted" aria-label="Businesses growing with Acquirely">
  <p class="trusted-h">The lead-gen agency trusted by</p>
  <div class="ph-viewport">
    <div class="ph-track">
      ${phone("kashti.com", "/ecommerce/img/31-kashti-website-on-mobile.jpg", "Kashti", "Fintech app")}
      ${phone("rightsourceaviation.com", "/ecommerce/img/33-rsa-aviation-website-on-mobile.jpg", "RSA Aviation", "Pilot training academy")}
      ${phone("internationalschooling.org", "/ecommerce/img/30-international-schooling-website-on-mobile.jpg", "International Schooling", "Online school · 9+ countries")}
      ${phone("globalproptech.in", "/ecommerce/img/29-global-proptech-website-on-mobile.jpg", "Global Proptech", "Luxury real estate · Gurugram")}
    </div>
  </div>
</section>

<!-- ============ RESULTS (dark) ============ -->
<section class="band dark">
  <div class="wrap">
    <div class="head">
      <h2>These founders thought paid ads only brought junk leads</h2>
      <p style="color:var(--orange);font-weight:600;margin-top:10px">Here's what happened next.</p>
      <p style="font-size:14.5px;margin-top:6px">No vanity metrics. Qualified leads, measured by the client's own sales team.</p>
    </div>
    <div class="rcs lg-rcs">
      ${rc("Propel Curriculum", "B2B · paid conference seats", "150+", "₹2.3Cr+ revenue on ₹3L spend")}
      ${rc("Kashti", "Fintech · cost per registration", "₹13.39", "~25.7K registrations a month", "₹1,000+")}
      ${rc("RSA Aviation", "High-ticket training · sales-qualified rate", "50%", "Cost per qualified lead ₹1,500 → ₹300", "10%")}
      ${rc("IP Study", "B2B publisher · cost per school lead", "&lt;₹150", "300+ school leads in under a month")}
      ${rc("International Schooling", "Global online school · qualified leads", "+40%", "Across 9+ countries, show-rate +25%")}
      ${rc("Agastya Foundation", "Nonprofit event · paid registrations", "40+", "~₹5,000 each · campaign live")}
    </div>
  </div>
</section>

<!-- ============ CASE STUDIES ============ -->
<section class="band" id="results">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow">Case studies</span>
      <h2>Don't take our word for it. <span class="grad">Look at the numbers.</span></h2>
      <p>Paid events, field sales, fintech, high-ticket training. Same system in every account, a different problem in each one.</p>
    </div>
    <div class="cases">
      ${cases.map(caseStudy).join("\n")}
    </div>
  </div>
</section>

<!-- ============ PROBLEM ============ -->
<section class="band white">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow">Why lead gen stalls</span>
      <h2>You don't have a lead problem. You have a <span class="grad">lead-quality problem</span>.</h2>
      <p>Most agencies are paid on cost per lead, so that's what they optimise. The result is a cheap CPL on the report and a sales team calling people who were never going to buy.</p>
    </div>
    <div class="split">
      <div class="card">
        <h3>Sound familiar?</h3>
        <ul class="x-list">
          <li>Cost per lead looks great, but sales says the leads are junk</li>
          <li>Half the numbers are switched off or never pick up</li>
          <li>Students, wrong cities or people who can't afford it filling your forms</li>
          <li>Meta optimising for form fills because it never hears what closed</li>
          <li>Your sales team calls leads a day late, and they've gone cold</li>
          <li>Nobody can tell you your real cost per enrolment, demo or sale</li>
        </ul>
      </div>
      <div class="andro">
        <span class="tag"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v4M12 17h.01"/><path d="M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z"/></svg>What changed with Andromeda</span>
        <h3>Meta finds whoever you tell it to find. Most accounts tell it "anyone who fills a form."</h3>
        <p>Creative now decides who sees your ads more than targeting does. If your creative and your optimisation event reward cheap form fills, that's exactly what you'll get, at scale.</p>
        <p class="lg-callout">RSA's cost per lead never changed. What changed was who the ads were built to attract.</p>
      </div>
    </div>
  </div>
</section>

<!-- ============ WHY ACQUIRELY ============ -->
<section class="band">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow">Why founders pick us</span>
      <h2>We're judged on leads you can close, not leads we can count</h2>
    </div>
    <div class="reasons">
      <div class="reveal">
        <div class="r-head"><span class="num">01</span><h3>Built for qualified leads</h3></div>
        <div class="r-body">
          <div class="card"><span class="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2B7FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 4h18l-7 8.5V19l-4 2v-8.5z"/></svg></span><h4>Screened at the source</h4><p>Audiences, questions and creative built to filter out people who can't buy.</p></div>
          <div class="card"><span class="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2B7FFF" stroke-width="2" stroke-linecap="round"><path d="M20 12a8 8 0 1 1-2.3-5.7"/><path d="M20 4v4h-4"/></svg></span><h4>Sales feedback loop</h4><p>Your team's lead outcomes feed back into how we target and what we scale.</p></div>
          <div class="card"><span class="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2B7FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/></svg></span><h4>The right number on the report</h4><p>Cost per qualified lead, not just cost per lead.</p></div>
        </div>
      </div>
      <div class="reveal">
        <div class="r-head"><span class="num o">02</span><h3>Creative that attracts buyers, not browsers</h3></div>
        <div class="r-body">
          <div class="card"><span class="ic o"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F37513" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M4 12h16M4 17h10"/></svg></span><h4>A new Pack every week</h4><p>Kashti's 99% drop came from one creative insight, not a settings change.</p></div>
          <div class="card"><span class="ic o"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F37513" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0116 0"/></svg></span><h4>Speaks to the right buyer</h4><p>Messaging that pre-qualifies, so the wrong people self-select out.</p></div>
          <div class="card"><span class="ic o"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F37513" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M8 14h8"/></svg></span><h4>Forms and landing pages</h4><p>Built and tested alongside the ads, because they decide lead quality too.</p></div>
        </div>
      </div>
      <div class="reveal">
        <div class="r-head"><span class="num">03</span><h3>We carry the risk with you</h3></div>
        <div class="r-body">
          <div class="card"><span class="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2B7FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 017.5-2"/></svg></span><h4>One fixed monthly fee</h4><p>No per-lead charges, no hidden fees.</p></div>
          <div class="card"><span class="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2B7FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3z"/></svg></span><h4>Every decision, shown to you</h4><p>Every scale or cut comes with the numbers behind it.</p></div>
          <div class="card"><span class="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2B7FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0113 0"/><path d="M16 4.5a3.5 3.5 0 010 7M21.5 20a6.5 6.5 0 00-4-6"/></svg></span><h4>Founders on your account</h4><p>Not a junior with a template.</p></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ============ FLYWHEEL ============ -->
<section class="band white" id="flywheel">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow">How we help you grow</span>
      <h2>The <span class="grad">A3 Flywheel</span>, built for lead generation</h2>
      <p>The same weekly system behind our ecommerce results, tuned for one goal: more leads your sales team can close, at a cost that makes sense.</p>
    </div>
    <div class="card fly">
      <svg viewBox="0 0 400 400" role="img" aria-label="A3 Flywheel: A1 Foundation Structure feeds A2 Creative Framework, which feeds A3 Lead-Quality Analysis, which feeds back into A1">
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
          <text x="200" y="82" fill="#E0ECFF" font-size="10.5" font-weight="600">Foundation</text>
          <circle cx="316" cy="270" r="44" fill="#F37513"/>
          <text x="316" y="268" fill="#fff" font-weight="800" font-size="20">A2</text>
          <text x="316" y="286" fill="#FFE8D6" font-size="10.5" font-weight="600">Creative</text>
          <circle cx="84" cy="270" r="44" fill="#6366F1"/>
          <text x="84" y="268" fill="#fff" font-weight="800" font-size="20">A3</text>
          <text x="84" y="286" fill="#E0E7FF" font-size="9.5" font-weight="600">Lead Quality</text>
          <text x="200" y="194" fill="#71717B" font-weight="700" font-size="12" letter-spacing="1">A3 =</text>
          <text x="200" y="220" fill="#0F172A" font-weight="800" font-size="21">LEAD QUALITY</text>
        </g>
      </svg>
      <div class="stages">
        <div class="stage"><span class="code">A1</span><div><h3>Foundation Structure</h3><p>A simple account built around who can actually buy: screened audiences, qualifying questions on the form, and one campaign that tests and scales, instead of five fighting each other.</p></div></div>
        <div class="stage"><span class="code">A2</span><div><h3>Creative Framework</h3><p>A new creative Pack every week, from competitor research, net-new concepts and iterations of proven winners. Every Pack is written to attract buyers and turn away browsers.</p></div></div>
        <div class="stage"><span class="code">A3</span><div><h3>Lead-Quality Analysis</h3><p>Every week we look past cost per lead: which ads, audiences and days bring leads your team actually qualifies, and we move budget there.</p></div></div>
      </div>
    </div>
    <div class="lg-inds" aria-label="Industries we work with">
      <span class="chip">Education &amp; EdTech</span><span class="chip">Pilot &amp; professional training</span><span class="chip">Fintech &amp; lending</span><span class="chip">Real estate</span><span class="chip">B2B &amp; SaaS</span><span class="chip">Healthcare &amp; clinics</span>
    </div>
  </div>
</section>

<!-- ============ FIT ============ -->
<section class="band">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow">Who this is for</span>
      <h2>We say no to most businesses. Here's why.</h2>
      <p>Lead gen only works when someone follows up. If your sales process isn't ready for more qualified leads yet, we'll tell you on the call.</p>
    </div>
    <div class="fit">
      <div class="card yes">
        <h3>A good fit if you</h3>
        <ul>
          <li>Can invest ₹75K+ a month in the system, plus your ad spend</li>
          <li>Sell something high-ticket, or with long customer value</li>
          <li>Have a sales or counselling team that calls leads within 24 hours</li>
          <li>Can tell us which leads qualified and which closed</li>
          <li>Want qualified pipeline, not a cheaper CPL screenshot</li>
        </ul>
      </div>
      <div class="card no">
        <h3>Not a fit if you</h3>
        <ul>
          <li>Have no one to follow up on leads</li>
          <li>Judge success on cost per lead alone</li>
          <li>Are shopping for the cheapest option</li>
          <li>Expect results in week one without data</li>
        </ul>
      </div>
    </div>
    <div class="center-cta">
      <a class="btn" ${CTA}>Yes, I'm Ready. Apply Now ${ARROW}</a>
      <small>Not sure? Apply anyway. We reply within 24 hours.</small>
    </div>
  </div>
</section>

<!-- ============ PRICING ============ -->
<section class="band white" id="pricing">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow">Pick your engine</span>
      <h2>Three ways to fill your pipeline</h2>
      <p>Pay for the system, not per lead. You keep control of your ad spend; we run everything else.</p>
    </div>
    <div class="lg-tiers">
      ${tiers.map(tier).join("\n")}
    </div>

    <div class="lg-allin reveal">
      <div>
        <span class="lg-allin-tag">Go all-in · Growth Engine</span>
        <h3>6 months for the price of 5</h3>
        <p>Most buying decisions run on monthly and quarterly cycles. Six months spans a full one: months 1–2 we fix the leaks and find winning angles, months 3–6 the pipeline compounds. Founding rate locked, priority onboarding, and the Qualified-Lead Floor from day one.</p>
      </div>
      <div class="lg-allin-price">
        <p><s>₹6,00,000</s> <b>₹5,00,000</b> <small>+ GST</small></p>
        <span>One month free · rate-locked</span>
        <a class="btn" ${CTA}>Go All-In ${ARROW}</a>
      </div>
    </div>

    <div class="lg-floor">
      <span class="ic"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3z"/><path d="M9 12l2 2 4-4"/></svg></span>
      <div>
        <h3>The Qualified-Lead Floor <em>Growth Engine &amp; above</em></h3>
        <p>We agree a monthly number of qualified leads or meetings with you upfront, in writing. If the first 90 days don't clear it, we work free until they do. You carry the ad spend; we carry the risk on our fee. No lock-in after.</p>
      </div>
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
      <div class="stat"><b style="font-size:18px">A fair 60–90 day window</b><span>Lead quality needs a few sales cycles of feedback. That's when the system shows what it can do.</span></div>
      <div class="stat"><b style="font-size:18px">Top 1% experts only</b><span>5+ years running ads and ₹10Cr+ managed in a year, each. A Meta and a Google specialist on every account.</span></div>
      <div class="stat"><b style="font-size:18px">The Qualified-Lead Floor</b><span>On Growth Engine and above: a monthly qualified-lead number agreed in writing. Miss it in 90 days and we work free until we hit it.</span></div>
      <div class="stat"><b style="font-size:18px">Qualified-lead reporting</b><span>Every week: cost per qualified lead, not just cost per lead.</span></div>
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
        <div class="avatar"><img src="/ecommerce/img/mausam-arora.jpg" alt="Mausam Arora"></div>
        <div>
          <h3>Mausam Arora</h3>
          <p class="role">Co-founder · Funnels &amp; GTM</p>
          <p>12 years building businesses in education: curricula, 300+ books, and distribution to 2,000+ schools. Knows what a qualified lead looks like from the sales side, and builds funnels around it.</p>
          <a href="https://www.linkedin.com/in/mausamarora/" target="_blank" rel="noopener">${LINKEDIN}LinkedIn</a>
        </div>
      </div>
      <div class="card person">
        <div class="avatar"><img src="/ecommerce/img/kunal-mondal.jpg" alt="Kunal Mondal"></div>
        <div>
          <h3>Kunal Mondal</h3>
          <p class="role">Co-founder · Meta strategy</p>
          <p>₹30Cr+ managed across 30+ brands in ecommerce, EdTech and real estate. A hands-on Meta strategist who runs full-funnel systems across Meta and Google.</p>
          <a href="https://www.linkedin.com/in/kunal-meta-ads/" target="_blank" rel="noopener">${LINKEDIN}LinkedIn</a>
        </div>
      </div>
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
    <div class="faq">
      ${faqs.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join("\n      ")}
    </div>
  </div>
</section>

<!-- ============ FINAL CTA ============ -->
<section class="band" id="book">
  <div class="wrap">
    <div class="dcard">
      <div>
        <h2>Cheap leads that never close? <span class="grad">So were theirs.</span></h2>
        <p style="margin-top:12px">Book a 30-minute Lead Quality Audit. We'll look at your ads, forms and lead data, show you where qualified leads are leaking, and tell you straight whether we can fix it.</p>
        <ul class="ticks">
          <li>Free Meta &amp; Google ad account and lead-funnel audit</li>
          <li>30-minute call, no obligation</li>
          <li>A straight answer on whether we're the right fit</li>
        </ul>
      </div>
      <div style="display:grid;align-content:center">
        <span class="eyebrow">Your move</span>
        <h3 style="margin-top:10px">Book your lead quality audit</h3>
        <a class="btn blue" ${CTA} style="margin-top:22px;width:100%;padding:16px 22px;font-size:16px">Book Your Free Audit! ${ARROW.replace(/18/g, "16")}</a>
        <p class="note"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>3 spots open this month. We reply within 24 hours.</p>
      </div>
    </div>
  </div>
</section>

<footer>
  <div class="wrap">
    <div class="foot">
      <div>
        <div class="brand"><img src="/ecommerce/img/28-acquirely-the-science-behind-scale.png" alt="Acquirely — The Science Behind Scale" style="height:52px;width:auto"></div>
        <p style="margin-top:10px;max-width:32ch">Qualified leads and profitable scale through Meta Ads &amp; Google Ads.</p>
      </div>
      <div><p class="fh">On this page</p><ul><li><a href="#results">Case Studies</a></li><li><a href="#flywheel">How It Works</a></li><li><a href="#pricing">Pricing</a></li><li><a href="#faq">FAQ</a></li></ul></div>
      <div><p class="fh">More from Acquirely</p><ul><li><a href="/ecommerce">For D2C &amp; ecommerce</a></li><li><a href="/">acquirely.in</a></li><li>New Delhi, India</li></ul></div>
      <div><p class="fh">Legal</p><ul><li><a href="/privacy-policy">Privacy policy</a></li><li><a href="/terms-and-condition">Terms of service</a></li></ul></div>
    </div>
    <div class="fine">
      <p>© 2026 Acquirely. All rights reserved.</p>
      <p>This site is not part of the Meta or Facebook website and is not endorsed by Meta Platforms, Inc. Meta and Facebook are trademarks of Meta Platforms, Inc.</p>
    </div>
  </div>
</footer>

<div class="mcta"><a class="btn" ${CTA}>Book a Lead Quality Audit</a></div>
`;

export default withImgDims(markup);
