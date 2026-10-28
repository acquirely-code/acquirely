// Page markup for /publishers, rendered by PublishersLanding. Shares ecommerce.css; publisher-only styles live in publishers.css.
const BOOK = "https://forms.acquirely.in/acquirely/form/EdPublishers/formperma/GwtSoRSbGoFfxJLVaDTsaPNIH3wyq5jcgKxrZ7FtU0w";
const ARROW = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`;
const TICK = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16A34A" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>`;
const LINKEDIN = `<svg width="14" height="14" viewBox="0 0 24 24" fill="#0A66C2"><path d="M4.98 3.5a2.5 2.5 0 11.02 5 2.5 2.5 0 01-.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.6 8.65 21 11.2 21 14.5V21h-4v-5.8c0-1.4 0-3.2-1.95-3.2S12.8 13.5 12.8 15.1V21H9z"/></svg>`;

const markup = `
<!-- ============ NAV ============ -->
<div class="nav">
  <div class="nav-in">
    <a class="logo" href="#top" aria-label="Acquirely home"><img src="/ecommerce/img/01-acquirely-the-science-behind-scale.png" alt="Acquirely — The Science Behind Scale"></a>
    <nav class="nav-links" aria-label="Page sections">
      <a href="#results">Case Studies</a>
      <a href="#how">How It Works</a>
      <a href="#pricing">Pricing</a>
      <a href="#faq">FAQ</a>
    </nav>
    <a class="btn blue" href="${BOOK}" target="_blank" rel="noopener">Book an Appointment</a>
  </div>
</div>

<!-- ============ HERO ============ -->
<section class="hero" id="top">
  <div class="wrap hero-grid">
    <div>
      <span class="audience"><b>For publishers</b><span>School &amp; education publishers selling to <strong>K-12 schools</strong></span></span>
      <h1><span class="ln">You publish great books.</span> <span class="ln">You sell them <span class="grad">one school visit at a time.</span></span></h1>
      <p class="lede">We get school decision-makers to <b>book calls with you</b> right when they're choosing next year's books.</p>
      <div class="hero-cta">
        <a class="btn" href="${BOOK}" target="_blank" rel="noopener">Book a Call to Understand How ${ARROW}</a>
        <div class="blogos" aria-label="Education brands growing with Acquirely"><span class="bl" style="background:#0A4AA8" title="IP Study Hub"><img src="/publishers/img/logo-ipstudyhub.png" alt="IP Study Hub"></span><span class="bl" style="background:#FFFFFF" title="Propel Curriculum"><img src="/publishers/img/logo-propel.png" alt="Propel Curriculum"></span><span class="bl" style="background:#FFFFFF" title="Agastya International Foundation"><img src="/publishers/img/logo-agastya.png" alt="Agastya International Foundation"></span><span class="bl" style="background:#F8FAFF" title="International Schooling"><img src="/publishers/img/logo-international-schooling.png" alt="International Schooling"></span><span class="bl" style="background:#000000" title="RSA Aviation"><img src="/publishers/img/logo-rsa-aviation.png" alt="RSA Aviation"></span></div>
      </div>
      <div class="trust-row">
        <span>${TICK}11+ years as a book publisher</span>
        <span>${TICK}300+ titles published</span>
        <span>${TICK}2,000+ schools reached every year</span>
        <span>${TICK}₹30Cr+ ad spend managed</span>
        <span class="spots"><i></i>Only 3 spots: sampling season starts in September</span>
      </div>
    </div>

    <!-- VIDEO: Wistia publishers VSL (media tdxebzm5am). Clicking the poster opens the video on YouTube in a new tab. -->
    <div class="vid" data-video="https://fast.wistia.net/embed/iframe/tdxebzm5am?autoPlay=true&playerColor=2949E5">
      <div class="vid-bar">Learn how it works</div>
      <button class="vid-screen" type="button" aria-label="Play: how Acquirely books school decision-makers">
        <img src="https://fast.wistia.com/embed/medias/tdxebzm5am/swatch" alt="" aria-hidden="true">
        <span class="vid-card"><b>How schools start coming to you</b><small>The publisher growth system, explained</small></span>
        <span class="vid-play"><svg width="30" height="30" viewBox="0 0 24 24" fill="#fff"><path d="M8 5.5v13a1 1 0 001.5.86l10.5-6.5a1 1 0 000-1.72L9.5 4.64A1 1 0 008 5.5z"/></svg></span>
      </button>
    </div>
  </div>
</section>

<!-- ============ TRUSTED BY (phone mockups) ============ -->
<section class="trusted" aria-label="Brands scaling with Acquirely">
  <p class="trusted-h">The growth agency trusted by</p>
  <div class="ph-viewport">
    <div class="ph-track">
      <figure class="ph"><div class="ph-frame"><div class="ph-bar"><span></span><b>ipstudyhub.com</b><span></span></div><div class="ph-screen"><img src="/publishers/img/ipstudyhub-website-on-mobile.jpg" alt="IP Study Hub website on mobile" loading="lazy"></div></div><figcaption><b>IP Study Hub</b><span class="ph-cat">Books &amp; digital learning</span></figcaption></figure>
      <figure class="ph"><div class="ph-frame"><div class="ph-bar"><span></span><b>ipropel.org</b><span></span></div><div class="ph-screen"><img src="/publishers/img/propel-website-on-mobile.jpg" alt="Propel Curriculum website on mobile" loading="lazy"></div></div><figcaption><b>Propel Curriculum</b><span class="ph-cat">Project-based learning curriculum</span></figcaption></figure>
      <figure class="ph"><div class="ph-frame"><div class="ph-bar"><span></span><b>agastya.org</b><span></span></div><div class="ph-screen"><img src="/publishers/img/agastya-website-on-mobile.jpg" alt="Agastya International Foundation website on mobile" loading="lazy"></div></div><figcaption><b>Agastya Foundation</b><span class="ph-cat">Science education foundation</span></figcaption></figure>
      <figure class="ph"><div class="ph-frame"><div class="ph-bar"><span></span><b>internationalschooling.org</b><span></span></div><div class="ph-screen"><img src="/ecommerce/img/30-international-schooling-website-on-mobile.jpg" alt="International Schooling website on mobile" loading="lazy"></div></div><figcaption><b>International Schooling</b><span class="ph-cat">Online school</span></figcaption></figure>
      <figure class="ph"><div class="ph-frame"><div class="ph-bar"><span></span><b>rightsourceaviation.com</b><span></span></div><div class="ph-screen"><img src="/ecommerce/img/33-rsa-aviation-website-on-mobile.jpg" alt="RSA Aviation website on mobile" loading="lazy"></div></div><figcaption><b>RSA Aviation</b><span class="ph-cat">Pilot training academy</span></figcaption></figure>
      <figure class="ph" aria-hidden="true"><div class="ph-frame"><div class="ph-bar"><span></span><b>ipstudyhub.com</b><span></span></div><div class="ph-screen"><img src="/publishers/img/ipstudyhub-website-on-mobile.jpg" alt="IP Study Hub website on mobile" loading="lazy"></div></div><figcaption><b>IP Study Hub</b><span class="ph-cat">Books &amp; digital learning</span></figcaption></figure>
      <figure class="ph" aria-hidden="true"><div class="ph-frame"><div class="ph-bar"><span></span><b>ipropel.org</b><span></span></div><div class="ph-screen"><img src="/publishers/img/propel-website-on-mobile.jpg" alt="Propel Curriculum website on mobile" loading="lazy"></div></div><figcaption><b>Propel Curriculum</b><span class="ph-cat">Project-based learning curriculum</span></figcaption></figure>
      <figure class="ph" aria-hidden="true"><div class="ph-frame"><div class="ph-bar"><span></span><b>agastya.org</b><span></span></div><div class="ph-screen"><img src="/publishers/img/agastya-website-on-mobile.jpg" alt="Agastya International Foundation website on mobile" loading="lazy"></div></div><figcaption><b>Agastya Foundation</b><span class="ph-cat">Science education foundation</span></figcaption></figure>
      <figure class="ph" aria-hidden="true"><div class="ph-frame"><div class="ph-bar"><span></span><b>internationalschooling.org</b><span></span></div><div class="ph-screen"><img src="/ecommerce/img/30-international-schooling-website-on-mobile.jpg" alt="International Schooling website on mobile" loading="lazy"></div></div><figcaption><b>International Schooling</b><span class="ph-cat">Online school</span></figcaption></figure>
      <figure class="ph" aria-hidden="true"><div class="ph-frame"><div class="ph-bar"><span></span><b>rightsourceaviation.com</b><span></span></div><div class="ph-screen"><img src="/ecommerce/img/33-rsa-aviation-website-on-mobile.jpg" alt="RSA Aviation website on mobile" loading="lazy"></div></div><figcaption><b>RSA Aviation</b><span class="ph-cat">Pilot training academy</span></figcaption></figure>
    </div>
  </div>
</section>

<!-- ============ RECEIPTS (dark) ============ -->
<section class="band dark">
  <div class="wrap">
    <div class="head">
      <h2>It ends in a book adoption</h2>
      <p style="color:var(--orange);font-weight:600;margin-top:10px">City Montessori School, Lucknow, the world's largest school.</p>
      <p style="font-size:14.5px;margin-top:6px">We ran the same campaign for Propel Curriculum, Delhi. CMS converted into 15,000 PBL sets across Grades 3–5, and reordered the next year.</p>
    </div>
    <div class="rcs"><div class="rc reveal"><div class="rc-who"><b>Propel Curriculum × CMS</b><small>Books order</small></div><div class="rc-mv"><b>₹2Cr+</b></div><span class="rc-t">Reordered next year</span></div><div class="rc reveal"><div class="rc-who"><b>Leads</b><small>From school decision-makers</small></div><div class="rc-mv"><b>8,000+</b></div><span class="rc-t">Generated</span></div><div class="rc reveal"><div class="rc-who"><b>Appointments</b><small>On publishers' calendars</small></div><div class="rc-mv"><b>1,000+</b></div><span class="rc-t">Booked</span></div><div class="rc reveal"><div class="rc-who"><b>School leaders</b><small>Principals, HoDs, trustees</small></div><div class="rc-mv"><b>50,000+</b></div><span class="rc-t">Reached</span></div></div>
  </div>
</section>

<!-- ============ CASE STUDIES ============ -->
<section class="band" id="results">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow">Case studies</span>
      <h2>Don't take our word for it. <span class="grad">Look at the numbers.</span></h2>
      <p>Real publishers. Real adoptions.</p>
    </div>

    <div class="cases">
      <!-- CASE STUDIES: add publisher case study <article class="card case reveal"> blocks here (same structure as /ecommerce). -->

      <!-- Propel Curriculum -->
      <article class="card case reveal">
        <div class="case-data">
          <div class="k"><small>Result</small><b class="grad">150+</b><span>Paid principal registrations in 2 months</span></div>
          <!-- PROOF: add 2 screenshots here as <div class="proofs"><figure class="proof-shot">…</figure>…<p class="proof-hint">Tap a screenshot to enlarge</p></div> (1: Meta Ads Manager, 2: Registrations / payments) -->
        </div>
        <div class="case-body">
          <div class="case-top"><span class="num">01</span><span class="chip">K–12 curriculum · School GTM</span></div>
          <h3>150+ principals paid ₹20K each to attend a conference</h3>
          <dl class="facts">
            <div><dt>Client</dt><dd>A PBL curriculum provider with fewer than 10 full-time staff</dd></div>
            <div><dt>Starting point</dt><dd>No sales force, and a goal of 100 paid seats in 60 days</dd></div>
            <div><dt>2-month result</dt><dd><b>150+ registrations. ₹2.3Cr+ revenue on ₹3L spend.</b></dd></div>
          </dl>
          <p class="story">Instead of hiring salespeople, we proposed that Propel host Immersion, a 3-day residential conference in Delhi for school leaders, priced at ₹20,000. Principals are among the hardest audiences to reach on Meta, and asking them to pay for a conference is harder still. Through the A3 Flywheel, we tested new creative angles every week and scaled the winners. The result: 150+ paid seats at about ₹2,000 each, ₹2Cr+ in curriculum orders after the event, and adoption by City Montessori School, Lucknow, the world’s largest school.</p>
          <a class="btn line" href="${BOOK}" target="_blank" rel="noopener">Get the same diagnosis →</a>
        </div>
      </article>

      <!-- VIDEO: Propel Immersion highlights on YouTube (5zMJaC-6vKU). Clicking the poster swaps in the player. -->
      <div class="vid pub-case-vid reveal">
        <div class="vid-bar">Watch the Immersion highlights</div>
        <a class="vid-screen" href="https://www.youtube.com/watch?v=5zMJaC-6vKU" target="_blank" rel="noopener" aria-label="Watch Propel Curriculum Immersion conference highlights on YouTube (opens in a new tab)">
          <img src="/publishers/img/propel-immersion-highlights-poster.jpg" alt="" aria-hidden="true" loading="lazy">
          <span class="vid-play"><svg width="30" height="30" viewBox="0 0 24 24" fill="#fff"><path d="M8 5.5v13a1 1 0 001.5.86l10.5-6.5a1 1 0 000-1.72L9.5 4.64A1 1 0 008 5.5z"/></svg></span>
        </a>
      </div>

      <!-- IP Study -->
      <article class="card case reveal">
        <div class="case-data">
          <div class="k"><small>Result</small><b class="grad">&lt;₹150</b><span>Cost per school lead, 300+ leads</span></div>
          <div class="proofs">
            <figure class="proof-shot"><img src="/publishers/img/ipstudy-meta-ads-manager-323-school-leads.jpg" alt="IP Study Meta Ads Manager: Prospecting campaign with 323 website leads at ₹154.56 per lead, last 30 days, 23 Sep – 22 Oct 2026" loading="lazy"><figcaption><b>Meta Ads Manager</b> Last 30 days, 23 Sep – 22 Oct 2026</figcaption></figure>
            <!-- PROOF: add screenshot 2 (Lead sheet / CRM) here as <figure class="proof-shot">…</figure> -->
            <p class="proof-hint">Tap a screenshot to enlarge</p>
          </div>
        </div>
        <div class="case-body">
          <div class="case-top"><span class="num">02</span><span class="chip">School books publisher · School GTM</span></div>
          <h3>300+ school leads in under a month, at under ₹150 each</h3>
          <dl class="facts">
            <div><dt>Client</dt><dd>A school books publisher with a 100+ person field sales force</dd></div>
            <div><dt>Starting point</dt><dd>10,000 cold school visits a year, most of them wasted</dd></div>
            <div><dt>30-day result</dt><dd><b>300+ genuine leads. About 40% lower cost per school won (projected).</b></dd></div>
          </dl>
          <p class="story">IP Study’s reps visited about 10,000 schools a year. Most samples never reached a decision-maker, and the company kept paying travel, hotel and sampling costs regardless. We flipped the model: Meta Ads find interested schools first. A product expert gives the demo, and reps visit only for scheduled meetings with principals and HoDs. Running on the A3 Flywheel, the campaign delivered 300+ leads in under a month. The projection for this year is 30% higher conversion and about 40% lower cost per school won.</p>
          <a class="btn line" href="${BOOK}" target="_blank" rel="noopener">Get the same diagnosis →</a>
        </div>
      </article>

      <!-- Agastya -->
      <article class="card case reveal">
        <div class="case-data">
          <div class="k"><small>Result</small><b class="grad">40+</b><span>Paid registrations, six weeks before the event</span></div>
          <div class="proofs">
            <figure class="proof-shot ba-shot"><img src="/publishers/img/agastya-meta-ads-manager-cost-per-lead-803-to-80.jpg" alt="Agastya Foundation Meta Ads Manager: earlier Conclave 2026 campaigns at ₹803 and ₹903 per lead; the current Forms campaign at ₹80.50 per lead with 729 leads, last 30 days" loading="lazy"><figcaption><b>Meta Ads Manager</b> Cost per lead ₹803–₹903 → ₹80.50</figcaption></figure>
            <!-- PROOF: add screenshot 2 (Registrations dashboard) here as <figure class="proof-shot">…</figure> -->
            <p class="proof-hint">Tap a screenshot to enlarge</p>
          </div>
        </div>
        <div class="case-body">
          <div class="case-top"><span class="num o">03</span><span class="chip">Education nonprofit · Events</span><span class="pill-live"><i></i>Live</span></div>
          <h3>School leaders paying ₹20K to travel to Kuppam</h3>
          <dl class="facts">
            <div><dt>Client</dt><dd>One of India’s leading education nonprofits, reaching 40M+ children</dd></div>
            <div><dt>Starting point</dt><dd>A cold ad account, a remote venue and a 100-seat target</dd></div>
            <div><dt>Results so far (live)</dt><dd><b>40+ paid registrations at about ₹5,000 each.</b></dd></div>
          </dl>
          <p class="story">Agastya’s Education Leaders Conclave 2026, The Future of Learning in the AI Era, runs 10–12 December at its campus in Kuppam, Andhra Pradesh. The goal is 100 school founders, principals and academic heads at up to ₹20,000 each. That meant a premium ticket, a trip most attendees had never made, and an ad account with almost no history. Building on the Propel playbook and the A3 Flywheel, we tested new angles every week. Within ₹2L of spend, 40+ leaders had paid, and the campaign is now scaling toward the target.</p>
          <a class="btn line" href="${BOOK}" target="_blank" rel="noopener">Get the same diagnosis →</a>
        </div>
      </article>
    </div>
  </div>
</section>

<!-- ============ PROBLEM ============ -->
<section class="band white">
  <div class="wrap">
    <div class="head pub-shift-head">
      <span class="pub-pill">The hidden cost</span>
      <h2>Most of your field spend<br> vanishes untracked.</h2>
    </div>
    <div class="pub-waste reveal">
      <div class="pub-waste-stat">
        <b>80%</b>
        <p>Your rep reached the school. But did your sample reach the decider, or get buried under 100 others?</p>
      </div>
      <div class="pub-waste-bar">
        <div class="pub-bar" role="img" aria-label="About 80% of field spend is untracked; only about 20% is tracked">
          <span class="lost">Untracked field spend <em>80%</em></span>
          <span class="kept">Tracked <em>20%</em></span>
        </div>
        <div class="pub-bar-labels"><span>Reps, samples, visits — no attribution</span><span>Digital</span></div>
        <p class="pub-waste-note">With Acquirely, every rupee is traced to the ad, board and city that booked the meeting.</p>
      </div>
    </div>
  </div>
</section>

<!-- ============ THE SHIFT ============ -->
<section class="band">
  <div class="wrap">
    <div class="head pub-shift-head">
      <span class="pub-pill">The shift</span>
      <h2>The best book doesn't win the adoption.<br> The one in front of the decider does.</h2>
    </div>
    <div class="pub-pairs">
      <div class="pub-pair reveal"><p class="old">Your rep drives out to cold-call schools</p><span class="ar" aria-hidden="true">→</span><p class="new">Calls booked to your calendar</p></div>
      <div class="pub-pair reveal"><p class="old">Samples buried in the pile</p><span class="ar" aria-hidden="true">→</span><p class="new">In front of the real decider</p></div>
      <div class="pub-pair reveal"><p class="old">No idea what worked</p><span class="ar" aria-hidden="true">→</span><p class="new">Every rupee tracked to a meeting</p></div>
      <div class="pub-pair reveal"><p class="old">A rep-day costs ~₹10K, with no proof the book reached the decider</p><span class="ar" aria-hidden="true">→</span><p class="new">Every ₹10K books 5–10 meetings with decision-makers</p></div>
    </div>
  </div>
</section>

<!-- ============ HOW IT WORKS ============ -->
<section class="band white" id="how">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow">How it works</span>
      <h2>Five steps from first ad to signed adoption</h2>
      <p>This doesn't replace your field team. It fills their calendar.</p>
    </div>
    <ol class="pub-steps">
      <li class="card reveal"><span class="num">01</span><h3>Reach school heads</h3><p>Principals, directors and Heads of Department, targeted by role and geography.</p></li>
      <li class="card reveal"><span class="num">02</span><h3>They book a call</h3><p>On Zoom or Google Meet, straight onto your calendar.</p></li>
      <li class="card reveal"><span class="num">03</span><h3>A specialist explains</h3><p>Your books, walked through with the decider.</p></li>
      <li class="card reveal"><span class="num o">04</span><h3>Samples dispatched</h3><p>Your rep visits schools that are already warm.</p></li>
      <li class="card reveal"><span class="num o">05</span><h3>Follow up</h3><p>Direct access to the decider until the order is signed.</p></li>
    </ol>
  </div>
</section>

<!-- ============ SEASONS (dark) ============ -->
<section class="band dark">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow">The publishing calendar</span>
      <h2>Two seasons. One system.</h2>
      <p>The sooner you start, the better.</p>
    </div>
    <div class="pub-seasons">
      <div class="stat reveal"><span class="pub-season s">Sampling · Sep–Nov</span><b>Reach hard</b><span>₹1–₹5L ad spend to get your books in front of every decider before samples go out.</span></div>
      <div class="stat reveal"><span class="pub-season d">Decision · Dec–Mar</span><b>Convert warm</b><span>₹50K–₹2L ad spend to keep warm schools booking calls until the adoption is signed.</span></div>
    </div>
  </div>
</section>

<!-- ============ THE OFFER ============ -->
<section class="band" id="pricing">
  <div class="wrap">
    <div class="head">
      <span class="pub-pill">Pick your engine</span>
      <h2>Two ways to fill your calendar.</h2>
    </div>

    <div class="pub-plans">
      <!-- Lead Engine -->
      <div class="pub-plan">
        <span class="pub-plan-name">Lead Engine</span>
        <div class="pub-amt"><b>₹75,000</b><span>+ GST / month</span></div>
        <p class="pub-founding">Founding rate · <s>₹1,00,000</s> → <b>₹75,000</b></p>

        <p class="pub-group">Acquisition</p>
        <ul class="pub-feats">
          <li><b>Full Facebook &amp; Instagram Ads — launch, management &amp; daily optimization</b><span>Puts you in front of principals, directors and trustees while they scroll — not their front desk.</span></li>
          <li><b>Continuous GTM + conversion tracking</b><span>Every meeting is traced to the exact ad, board and city that booked it — so budget moves to what actually reaches deciders.</span></li>
          <li><b>All static creatives + video editing</b><span>Unlimited angle testing, built for a school-leader audience. Done in-house, never billed per asset.</span></li>
          <li><b>Conversion-built landing pages + lead capture</b><span>Fast, mobile-first pages built to turn a principal's click into a booked call.</span></li>
        </ul>

        <p class="pub-group">Qualification</p>
        <ul class="pub-feats">
          <li><b>Lead scoring + intent filtering</b><span>Coordinators and non-decision-makers filtered out — so you're not demoing to someone who can't sign off.</span></li>
          <li><b>Phone / OTP validation on every form <em class="pub-tag">Often skipped</em></b><span>Fake numbers killed at the source — one less dead meeting slot.</span></li>
          <li><b>Qualified decision-maker meetings booked</b><span>Warm, inbound meetings with budget-holders — booked and on your calendar.</span></li>
        </ul>

        <p class="pub-best"><b>Best for:</b> teams with the demo &amp; closing muscle who just need warm meetings with the right people on the calendar.</p>
        <a class="btn line" href="${BOOK}" target="_blank" rel="noopener">Start with Lead Engine</a>
      </div>

      <!-- Growth Engine -->
      <div class="pub-plan feat">
        <span class="pub-badge">Most clients pick this</span>
        <span class="pub-plan-name">Growth Engine</span>
        <div class="pub-amt"><b>₹1,00,000</b><span>+ GST / month</span></div>
        <p class="pub-founding">Founding rate · <s>₹1,50,000</s> → <b>₹1,00,000</b></p>

        <div class="pub-why">
          <p class="pub-group">Why this one converts better</p>
          <p>Running both means the decider who spots you on Instagram also finds you when they search. <b>That loop is what turns interest into signed orders.</b></p>
        </div>

        <p class="pub-group">Everything in Lead Engine</p>
        <ul class="pub-feats">
          <li><b>The full Meta base system, included</b><span>FB &amp; Instagram ads, GTM tracking, creatives, landing pages, lead scoring, OTP validation and decision-maker meetings.</span></li>
        </ul>

        <p class="pub-group">Plus — the Meta + Google engine</p>
        <ul class="pub-feats">
          <li><b>Full Google Ads — Search, Performance Max &amp; YouTube <em class="pub-tag">Converts better</em></b><span>Meta creates the demand; Google captures it the moment a decider searches your category. Two platforms as one funnel convert far better than either alone.</span></li>
          <li><b>Full LinkedIn Ads — launch, management &amp; optimization</b><span>Reaches school owners, trustees and group directors by job title and institution — the people who sign off on chain-wide adoptions.</span></li>
          <li><b>WhatsApp + email reminder system</b><span>Cuts no-shows hard. The principal who booked actually turns up to the demo.</span></li>
          <li><b>Automated nurture sequences (WhatsApp + email)</b><span>School leaders who aren't ready this term stay warm until budgets open — not lost to a competitor.</span></li>
          <li><b>Conversion API + offline conversion upload <em class="pub-tag">The big lever</em></b><span>Real booked meetings and closed orders fed back to Meta &amp; Google, so the algorithm hunts deciders — not cheap clicks.</span></li>
          <li><b>Weekly reporting + strategy call</b><span>You see meetings booked and cost-per-meeting every week — not a vague monthly PDF.</span></li>
        </ul>

        <p class="pub-best"><b>Best for:</b> teams who want the meetings <b>and</b> the follow-up system that turns a demo into a signed order.</p>
        <a class="btn blue" href="${BOOK}" target="_blank" rel="noopener">Book an Appointment ${ARROW}</a>
      </div>
    </div>

    <!-- 6-month -->
    <div class="pub-allin">
      <div>
        <span class="pub-plan-name">Go all-in</span>
        <h3>6-Month Growth Engine</h3>
        <p>School buying moves on term and budget cycles. Six months spans a full one: months 1–2 we fix the leaks and find winning angles, months 3–6 the pipeline compounds. Locks your founding rate for the full run.</p>
      </div>
      <div class="pub-allin-price">
        <div class="pub-amt"><b>₹6,00,000</b><span>+ GST</span></div>
        <small>Rate-locked · priority onboarding</small>
      </div>
    </div>

    <!-- Guarantee -->
    <div class="pub-floor">
      <span class="pub-floor-ic"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3z"/><path d="M9 12l2 2 4-4"/></svg></span>
      <div>
        <h3>The Qualified-Meeting Floor</h3>
        <p>We agree a monthly number of qualified decision-maker meetings with you upfront, in writing. If the first 90 days don't clear it, <b>we work free until they do.</b> You carry the ad spend — we carry the risk on our fee. No lock-in after.</p>
      </div>
    </div>

    <!-- Founding rate -->
    <p class="pub-deadline"><i></i><span><b>Founding rate.</b> Lock ₹75K / ₹1L for 6 months if you start before 31st October. Rates step up as we add clients — what you lock today is what you pay.</span></p>
  </div>
</section>

<!-- ============ TESTIMONIALS ============ -->
<section class="band white" id="testimonials">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow">Testimonials</span>
      <h2>What our clients say about <span class="grad">working with us</span></h2>
      <p>Straight from WhatsApp. Cropped for privacy, never edited.</p>
    </div>
    <div class="wins">
      <!-- TESTIMONIALS: add one block per testimonial; put screenshots in public/publishers/img/. Click-to-enlarge works automatically.
      <figure class="win"><img src="/publishers/img/FILE.jpg" alt="DESCRIBE THE SCREENSHOT" loading="lazy"><figcaption><span>NAME · ROLE, COMPANY</span>"Short pull quote."</figcaption></figure>
      -->
      <figure class="win"><img src="/ecommerce/img/26-whatsapp-testimonial-from-karthik-recomm.jpg" alt="WhatsApp testimonial from Karthik recommending Kunal and the Acquirely team" loading="lazy"><figcaption><span>Karthik · founder, Old School Station</span>"Consistent results at scale. Highly recommend."</figcaption></figure>
      <figure class="win"><img src="/ecommerce/img/23-whatsapp-creste-team-says-dussehra-kits.jpg" alt="WhatsApp: Creste team says Dussehra kits almost sold out, asks to pause ads" loading="lazy"><figcaption><span>Creste Kids</span>Sold out before Dussehra. The client asked us to pause.</figcaption></figure>
      <figure class="win"><img src="/ecommerce/img/34-whatsapp-payal-patoola-testimonial.png" alt="WhatsApp from Payal at Patoola: fewer cancellations, more prepaid orders, higher AOV and stable ROAS after a month with Acquirely" loading="lazy"><figcaption><span>Payal · Patoola</span>"Really encouraging results in just one month."</figcaption></figure>
    </div>
  </div>
</section>

<!-- ============ FIT ============ -->
<section class="band">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow">Honest fit</span>
      <h2>Built for <span class="grad">publishers</span> with meaningful books</h2>
      <p>Booked calls only turn into adoptions when there's a strong catalogue and a team to follow up. If that's not you yet, we'll tell you on the call.</p>
    </div>
    <div class="fit">
      <div class="card yes">
        <h3>This is for you</h3>
        <ul>
          <li>K-12 publishers with a real catalogue</li>
          <li>Research-backed, curriculum-aligned books</li>
          <li>Concept, story &amp; theme-based series</li>
          <li>STEM, STEAM &amp; AI titles</li>
          <li>Books with a clear, defensible USP</li>
          <li>Ready to sell across India</li>
          <li>Aiming for India's top schools</li>
        </ul>
      </div>
      <div class="card no">
        <h3>Not for you</h3>
        <ul>
          <li>A single title, no catalogue behind it</li>
          <li>One-city, walk-in-only distribution</li>
          <li>No one to follow up on booked calls</li>
          <li>Chasing the cheapest possible leads</li>
        </ul>
      </div>
    </div>
    <div class="center-cta">
      <a class="btn" href="${BOOK}" target="_blank" rel="noopener">Yes, I'm Ready. Book a Call ${ARROW}</a>
      <small>Not sure? Book anyway. We reply within 24 hours.</small>
    </div>
  </div>
</section>

<!-- ============ FOUNDERS ============ -->
<section class="band white">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow">Meet the founders</span>
      <h2>Operators, not just agency owners</h2>
    </div>
    <div class="team">
      <div class="card person">
        <div class="avatar"><img src="/ecommerce/img/mausam-arora.jpg" alt="Mausam Arora"></div>
        <div>
          <h3>Mausam Arora</h3>
          <p class="role">Co-founder · Growth &amp; Strategy</p>
          <p>12 years in education: curricula, 300+ books published, and distribution to 2,000+ schools. He has sold books to schools himself, and built this system to do it better.</p>
          <a href="https://www.linkedin.com/in/mausamarora/" target="_blank" rel="noopener">${LINKEDIN}LinkedIn</a>
        </div>
      </div>
      <div class="card person">
        <div class="avatar"><img src="/ecommerce/img/kunal-mondal.jpg" alt="Kunal Mondal"></div>
        <div>
          <h3>Kunal Mondal</h3>
          <p class="role">Co-founder · Performance</p>
          <p>₹30Cr+ ad spend managed across 30+ brands in EdTech, ecommerce and real estate. A hands-on strategist who runs full-funnel systems across Meta and Google.</p>
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
      <span class="eyebrow">FAQ</span>
      <h2>Questions publishers ask us</h2>
    </div>
    <div class="faq">
      <details><summary>Will this replace my field team?</summary><p>No, it feeds them. Your reps walk into warm meetings with decision-makers who asked to see your books. The system books; your team closes.</p></details>
      <details><summary>Are school buyers even on Facebook?</summary><p>Yes. Principals, coordinators and chain owners are on Meta and Google daily. We target by role and geography, so budget only touches deciders.</p></details>
      <details><summary>I've boosted posts and got junk. How is this different?</summary><p>Boosting isn't a system. We optimise for qualified appointments, not form-fills, and use your lead-quality feedback to sharpen targeting every week.</p></details>
      <details><summary>Do you handle the calls and samples?</summary><p>No, that stays with you. We run the engine that books meetings and tracks every rupee; your team runs the walkthrough and the close.</p></details>
      <details><summary>When should I start?</summary><p>Any month works. Sampling (Sep–Nov) into decision season (Dec–Mar) is the natural cycle, so the earlier you're in, the more adoptions close.</p></details>
    </div>
  </div>
</section>

<!-- ============ FINAL CTA ============ -->
<section class="band white" id="book">
  <div class="wrap">
    <div class="dcard">
      <div>
        <h2>Ready to let <span class="grad">schools come to you?</span></h2>
        <p style="margin-top:12px">A short call to see how you reach schools today and map the first campaign.</p>
        <ul class="ticks">
          <li>No lock-in</li>
          <li>Appointment-floor guarantee</li>
          <li>Full transparency on every rupee</li>
        </ul>
      </div>
      <div style="display:grid;align-content:center">
        <span class="eyebrow">Let's talk</span>
        <h3 style="margin-top:10px">Book a Funnel Review Call</h3>
        <a class="btn blue" href="${BOOK}" target="_blank" rel="noopener" style="margin-top:22px;width:100%;padding:16px 22px;font-size:16px">Book Your Free Call! ${ARROW.replace(/18/g, "16")}</a>
        <p class="note"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>Only 3 spots this season. We reply within 24 hours.</p>
      </div>
    </div>
  </div>
</section>

<footer>
  <div class="wrap">
    <div class="foot">
      <div>
        <div class="brand"><img src="/ecommerce/img/28-acquirely-the-science-behind-scale.png" alt="Acquirely — The Science Behind Scale" style="height:52px;width:auto"></div>
        <p style="margin-top:10px;max-width:32ch">Helping publishers reach school decision-makers through Meta Ads &amp; Google Ads.</p>
      </div>
      <div><p class="fh">On this page</p><ul><li><a href="#results">Case Studies</a></li><li><a href="#how">How It Works</a></li><li><a href="#pricing">Pricing</a></li><li><a href="#faq">FAQ</a></li></ul></div>
      <div><p class="fh">More from Acquirely</p><ul><li><a href="/case-studies">Case studies</a></li><li><a href="/about-us">About us</a></li><li><a href="/blog">Blog</a></li></ul></div>
      <div><p class="fh">Contact</p><ul><li>team@acquirely.in</li><li><a href="/">acquirely.in</a></li><li><a href="/privacy-policy">Privacy policy</a></li><li><a href="/terms-and-condition">Terms of service</a></li></ul></div>
    </div>
    <div class="fine">
      <p>© 2026 Acquirely. All rights reserved.</p>
      <p>This site is not part of the Meta or Facebook website and is not endorsed by Meta Platforms, Inc. Meta and Facebook are trademarks of Meta Platforms, Inc.</p>
    </div>
  </div>
</footer>

<div class="mcta"><a class="btn" href="${BOOK}" target="_blank" rel="noopener">Book a Call</a></div>
`;

export default markup;
