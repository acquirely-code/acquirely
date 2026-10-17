// Page markup for /ecommerce, rendered by EcommerceLanding. Images live in public/ecommerce/img.
const markup = `
<!--
  TO FINISH BEFORE GOING LIVE
  1. Booking link: replace href="#book" on CTAs and href="#" on the final "Book Your Free Call" button.
  3. Quotes + screenshots: add one real founder quote / Ads Manager screenshot per case where you have them (see QUOTE comments).
  5. Wall of Wins: confirm Karthik, Creste, Patoola and Gharaana are OK being shown publicly.
  6. Brand count: this page says 20+ brands; acquirely.in says 50+ D2C brands. Make them match.
-->

<!-- ============ NAV ============ -->
<div class="nav">
  <div class="nav-in">
    <a class="logo" href="#top" aria-label="Acquirely home"><img src="/ecommerce/img/01-acquirely-the-science-behind-scale.png" alt="Acquirely — The Science Behind Scale"></a>
    <nav class="nav-links" aria-label="Page sections">
      <a href="#results">Case Studies</a>
      <a href="#flywheel">A3 Flywheel</a>
      <a href="#playbook">Free Playbook</a>
      <a href="#pricing">Pricing</a>
      <a href="#faq">FAQ</a>
    </nav>
    <a class="btn blue" href="https://forms.acquirely.in/acquirely/form/FunnelReviewCallECom/formperma/muJYVHXbKDbQ7N3xEPr_lrjkOuBMe33JPNULGFJm9Kg" target="_blank" rel="noopener">Book a Call</a>
  </div>
</div>

<!-- ============ HERO ============ -->
<section class="hero" id="top">
  <div class="wrap hero-grid">
    <div>
      <span class="audience"><b>For founders</b><span>D2C &amp; ecommerce brands doing <strong>₹10L–₹50L a month</strong></span></span>
      <h1><span class="ln">Learn why <span class="grad">20+ D2C &amp; ecommerce brands</span> trust</span> <span class="ln">Acquirely to scale their Paid Ads profitably</span></h1>
      <p class="lede">Our clients have grown revenue up to <b>5x in 90 days</b>, pushed ROAS from <b>2.7 to 4.2</b>, and cut cost per lead by <b>98%</b>, after Meta's Andromeda update broke what used to work.</p>
      <div class="hero-cta">
        <a class="btn" href="https://forms.acquirely.in/acquirely/form/FunnelReviewCallECom/formperma/muJYVHXbKDbQ7N3xEPr_lrjkOuBMe33JPNULGFJm9Kg" target="_blank" rel="noopener">Book a Growth Diagnosis Call <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
        <div class="blogos" aria-label="Brands scaling with Acquirely"><span class="bl" style="background:#F3EEE8" title="TacTow"><img src="/ecommerce/img/02-tactow.png" alt="TacTow"></span><span class="bl" style="background:#1F3D13" title="Gharaana"><img src="/ecommerce/img/03-gharaana.png" alt="Gharaana"></span><span class="bl" style="background:#FFFFFF" title="Patoola"><img src="/ecommerce/img/04-patoola.png" alt="Patoola"></span><span class="bl" style="background:#FDF7E6" title="Creste Kids"><img src="/ecommerce/img/05-creste-kids.png" alt="Creste Kids"></span><span class="bl" style="background:#FFFFFF" title="Sevora"><img src="/ecommerce/img/06-sevora.png" alt="Sevora"></span><span class="bl" style="background:#FFFFFF" title="Sofara"><img src="/ecommerce/img/07-sofara.png" alt="Sofara"></span><span class="bl more">+14</span></div>
      </div>
      <div class="trust-row">
        <span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16A34A" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>Founders on your account</span>
        <span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16A34A" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>Flat 10% of ad spend</span>
        <span class="spots"><i></i>Only 3 onboarding spots open this month</span>
      </div>
    </div>

    <!-- VIDEO: Wistia "E-Commerce October VSL" (media 72oys5y0dy). Clicking the poster swaps in the player. -->
    <div class="vid" data-video="https://fast.wistia.net/embed/iframe/72oys5y0dy?autoPlay=true&playerColor=2949E5">
      <div class="vid-bar">Learn how it works</div>
      <button class="vid-screen" type="button" aria-label="Play: how Acquirely scales paid ads">
        <img src="/ecommerce/img/08-video-poster.jpg" alt="" aria-hidden="true">
        <span class="vid-card"><b>How we scale paid ads after Andromeda</b><small>The A3 Flywheel in 8 minutes</small></span>
        <span class="vid-play"><svg width="30" height="30" viewBox="0 0 24 24" fill="#fff"><path d="M8 5.5v13a1 1 0 001.5.86l10.5-6.5a1 1 0 000-1.72L9.5 4.64A1 1 0 008 5.5z"/></svg></span>
      </button>
    </div>
  </div>
</section>

<!-- ============ CASE STRIP ============ -->
<!-- ============ TRUSTED BY (phone mockups) ============ -->
<section class="trusted" aria-label="Brands scaling with Acquirely">
  <p class="trusted-h">The D2C &amp; ecommerce agency trusted by</p>
  <div class="ph-viewport">
    <div class="ph-track">
      <figure class="ph"><div class="ph-frame"><div class="ph-bar"><span></span><b>tactow.in</b><span></span></div><div class="ph-screen"><img src="/ecommerce/img/09-tactow-website-on-mobile.jpg" alt="TacTow website on mobile" loading="lazy"></div></div><figcaption><b>TacTow</b><span class="ph-cat">3D wooden puzzles</span></figcaption></figure>
      <figure class="ph"><div class="ph-frame"><div class="ph-bar"><span></span><b>gharaana</b><span></span></div><div class="ph-screen"><img src="/ecommerce/img/10-gharaana-website-on-mobile.jpg" alt="Gharaana website on mobile" loading="lazy"></div></div><figcaption><b>Gharaana</b><span class="ph-cat">Furniture</span></figcaption></figure>
      <figure class="ph"><div class="ph-frame"><div class="ph-bar"><span></span><b>patoola</b><span></span></div><div class="ph-screen"><img src="/ecommerce/img/11-patoola-website-on-mobile.jpg" alt="Patoola website on mobile" loading="lazy"></div></div><figcaption><b>Patoola</b><span class="ph-cat">Indo-Western fashion</span></figcaption></figure>
      <figure class="ph"><div class="ph-frame"><div class="ph-bar"><span></span><b>crestekids.com</b><span></span></div><div class="ph-screen"><img src="/ecommerce/img/12-creste-kids-website-on-mobile.jpg" alt="Creste Kids website on mobile" loading="lazy"></div></div><figcaption><b>Creste Kids</b><span class="ph-cat">DIY craft kits</span></figcaption></figure>
      <figure class="ph"><div class="ph-frame"><div class="ph-bar"><span></span><b>sevora</b><span></span></div><div class="ph-screen"><img src="/ecommerce/img/13-sevora-website-on-mobile.jpg" alt="Sevora website on mobile" loading="lazy"></div></div><figcaption><b>Sevora</b><span class="ph-cat">Fashion</span></figcaption></figure>
      <figure class="ph"><div class="ph-frame"><div class="ph-bar"><span></span><b>sofara</b><span></span></div><div class="ph-screen"><img src="/ecommerce/img/14-sofara-website-on-mobile.jpg" alt="Sofara website on mobile" loading="lazy"></div></div><figcaption><b>Sofara</b><span class="ph-cat">Furniture · Canada</span></figcaption></figure>
    </div>
  </div>
</section>

<!-- ============ RECEIPTS (dark) ============ -->
<section class="band dark">
  <div class="wrap">
    <div class="head">
      <h2>These founders thought they had hit a ceiling on paid ads</h2>
      <p style="color:var(--orange);font-weight:600;margin-top:10px">Here's what happened next.</p>
      <p style="font-size:14.5px;margin-top:6px">No vanity metrics. Just real numbers from real accounts.</p>
    </div>
    <div class="rcs"><div class="rc reveal"><div class="rc-who"><b>TacTow</b><small>D2C puzzles · monthly revenue</small></div><div class="rc-mv"><s>₹8L →</s><b>₹40L</b></div><span class="rc-t">90 days</span></div><div class="rc reveal"><div class="rc-who"><b>Gharaana</b><small>Furniture · monthly revenue</small></div><div class="rc-mv"><s>₹20L →</s><b>₹57L</b></div><span class="rc-t">5 months</span></div><div class="rc reveal"><div class="rc-who"><b>Patoola</b><small>Fashion · monthly revenue</small></div><div class="rc-mv"><s>₹3.5L →</s><b>₹10L</b></div><span class="rc-t">2 months</span></div><div class="rc reveal"><div class="rc-who"><b>Creste Kids</b><small>DIY kits · ROAS</small></div><div class="rc-mv"><s>2.07 →</s><b>3.65</b></div><span class="rc-t">2 months</span></div></div>
  </div>
</section>

<!-- ============ CASE STUDIES ============ -->
<section class="band" id="results">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow">Case studies</span>
      <h2>Don't take our word for it. <span class="grad">Look at the numbers.</span></h2>
      <p>Same system in every account. A different bottleneck in each one.</p>
    </div>

    <div class="cases">
      <!-- TacTow -->
      <article class="card case reveal">
        <div class="case-data">
          <div class="k"><small>Result</small><b class="grad">5x</b><span>Monthly revenue in 90 days</span></div>
          <div class="proofs">
            <figure class="proof-shot"><img src="/ecommerce/img/15-tactow-shopify-dashboard-26-1-lakh-total.jpg" alt="TacTow Shopify dashboard: ₹26.1 lakh total sales, Sep 13 to Oct 13 2026, up 53%" loading="lazy"><figcaption><b>Shopify</b> Total sales, last 30 days, vs previous period</figcaption></figure>
            <figure class="proof-shot"><img src="/ecommerce/img/16-tactow-meta-ads-manager-768-website-purc.jpg" alt="TacTow Meta Ads Manager: 768 website purchases, ₹22.7 lakh purchase value, 3.83 ROAS, last 30 days" loading="lazy"><figcaption><b>Meta Ads Manager</b> Last 30 days, 13 Sep – 12 Oct 2026</figcaption></figure>
          <p class="proof-hint">Tap a screenshot to enlarge</p>
          </div>
        </div>
        <div class="case-body">
          <div class="case-top"><span class="num">01</span><span class="chip">Toys &amp; puzzles · D2C</span></div>
          <h3>From ₹8L to ₹40L per month in 90 days</h3>
          <dl class="facts">
            <div><dt>Client</dt><dd>TacTow, 3D wooden mechanical puzzles made in Bengaluru</dd></div>
            <div><dt>Starting point</dt><dd>₹8L/month, built by the founder on his own</dd></div>
            <div><dt>90-day result</dt><dd><b>₹40L/month. 5x revenue in one quarter.</b></dd></div>
          </dl>
          <p class="story">We first worked with TacTow's founder in 2025 on his earlier gaming brand, Old School Station, until a factory fire shut it down. When he launched TacTow and was ready to scale fast, he came back. We consolidated the ad accounts, built spend around the proven hero product, and ran the A3 Flywheel: one Prospecting CBO, a new creative Pack every week, and a creative engine that turned a single winning creator ad into a steady stream of iterations.</p>
          <!-- QUOTE: TacTow founder -->
          <a class="btn line" href="https://forms.acquirely.in/acquirely/form/FunnelReviewCallECom/formperma/muJYVHXbKDbQ7N3xEPr_lrjkOuBMe33JPNULGFJm9Kg" target="_blank" rel="noopener">Get the same diagnosis →</a>
        </div>
      </article>

      <!-- Gharaana -->
      <article class="card case reveal">
        <div class="case-data">
          <div class="k"><small>Result</small><b class="grad">2.30 → 3.04</b><span>Purchase ROAS, August vs last 30 days</span></div>
          <div class="proofs">
            <figure class="proof-shot ba-shot"><img src="/ecommerce/img/17-gharaana-meta-ads-manager-before-and-aft.jpg" alt="Gharaana Meta Ads Manager before and after: account average purchase ROAS 2.30 in August 2026, 3.04 in the last 30 days, all 39 campaigns" loading="lazy"><figcaption><b>Meta Ads Manager</b> Purchase ROAS 2.30 → 3.04</figcaption></figure>
            <figure class="proof-shot"><img src="/ecommerce/img/18-gharaana-shopify-10-6-lakh-total-sales-i.jpg" alt="Gharaana Shopify: ₹10.6 lakh total sales in the last 7 days, up 28%; sessions up 52%; orders up 30%" loading="lazy"><figcaption><b>Shopify</b> Last 7 days vs previous period</figcaption></figure>
            <p class="proof-hint">Tap a screenshot to enlarge</p>
          </div>
        </div>
        <div class="case-body">
          <div class="case-top"><span class="num">02</span><span class="chip">Furniture · Ecommerce</span></div>
          <h3>"We thought open targeting never works. We were wrong."</h3>
          <dl class="facts">
            <div><dt>Client</dt><dd>Gharaana, furniture ecommerce</dd></div>
            <div><dt>Starting point</dt><dd>2.30 account ROAS in August, after Andromeda flattened results</dd></div>
            <div><dt>Last 30 days</dt><dd><b>ROAS 3.04 account-wide, 3.66 on Prospecting_A3.</b></dd></div>
          </dl>
          <p class="story">Gharaana had a strong year on Meta until the Andromeda update flattened it. When they onboarded in May 2026, the founder was certain open targeting would fail. We ran the A3 Flywheel anyway: broad audiences inside one Prospecting CBO, a fresh creative Pack every week, and a creative engine built on market research, net-new concepts and iterations of proven winners. The right structure beat interest targeting.</p>
          <!-- QUOTE: Gharaana founder on switching to broad -->
          <a class="btn line" href="https://forms.acquirely.in/acquirely/form/FunnelReviewCallECom/formperma/muJYVHXbKDbQ7N3xEPr_lrjkOuBMe33JPNULGFJm9Kg" target="_blank" rel="noopener">Get the same diagnosis →</a>
        </div>
      </article>

      <!-- Patoola -->
      <article class="card case reveal">
        <div class="case-data">
          <div class="k"><small>Result</small><b class="grad">2.9x</b><span>Monthly revenue in 2 months, ROAS up</span></div>
          <div class="proofs">
            <figure class="proof-shot ba-shot"><img src="/ecommerce/img/19-patoola-meta-ads-manager-before-and-afte.jpg" alt="Patoola Meta Ads Manager before and after: account average purchase ROAS 3.6 in August 2026, 4.02 in the last 30 days, all campaigns" loading="lazy"><figcaption><b>Meta Ads Manager</b> Purchase ROAS 3.6 → 4.02</figcaption></figure>
            <p class="proof-hint">Tap the screenshot to enlarge</p>
          </div>
        </div>
        <div class="case-body">
          <div class="case-top"><span class="num">03</span><span class="chip">Fashion · D2C</span></div>
          <h3>From ₹3.5L to ₹10L a month in two months</h3>
          <dl class="facts">
            <div><dt>Client</dt><dd>Patoola, a Bengaluru Indo-Western fashion label for modern women</dd></div>
            <div><dt>Starting point</dt><dd>₹3.5L/month at 3.6 ROAS, with every ad creator-led</dd></div>
            <div><dt>2-month result</dt><dd><b>₹10L/month, nearly 3x. ROAS up to 4.02.</b></dd></div>
          </dl>
          <p class="story">Every ad in Patoola's account was creator-led, and that capped how far it could scale. We ran the A3 Flywheel and added a new creative direction: founder-led ads that tell customers the story and the person behind the label, alongside the creator content. With a fresh Pack tested every week and winners scaled inside one Prospecting CBO, revenue nearly tripled in two months, and ROAS went up, not down.</p>
          <!-- QUOTE: Patoola founder -->
          <a class="btn line" href="https://forms.acquirely.in/acquirely/form/FunnelReviewCallECom/formperma/muJYVHXbKDbQ7N3xEPr_lrjkOuBMe33JPNULGFJm9Kg" target="_blank" rel="noopener">Get the same diagnosis →</a>
        </div>
      </article>

      <!-- Creste -->
      <article class="card case reveal">
        <div class="case-data">
          <div class="k"><small>Result</small><b class="grad">2.07 → 3.65</b><span>Purchase ROAS, all-time account average vs last 30 days</span></div>
          <div class="proofs">
            <figure class="proof-shot ba-shot"><img src="/ecommerce/img/20-creste-meta-ads-manager-before-and-after.jpg" alt="Creste Meta Ads Manager before and after: all-time account average purchase ROAS 2.07 across 96 campaigns, 3.65 in the last 30 days with Acquirely's Dussehra campaigns" loading="lazy"><figcaption><b>Meta Ads Manager</b> Purchase ROAS 2.07 → 3.65</figcaption></figure>
            <figure class="proof-shot"><img src="/ecommerce/img/21-creste-shopify-dashboard-4-47-lakh-total.jpg" alt="Creste Shopify dashboard: ₹4.47 lakh total sales in the last 90 days, up 7.7K percent vs the previous 90 days; 202 orders" loading="lazy"><figcaption><b>Shopify</b> Last 90 days, 15 Jul – 13 Oct 2026, vs previous 90 days</figcaption></figure>
            <p class="proof-hint">Tap a screenshot to enlarge</p>
          </div>
        </div>
        <div class="case-body">
          <div class="case-top"><span class="num o">04</span><span class="chip">Kids DIY kits · D2C</span></div>
          <h3>Stuck at 2.07 ROAS. 3.65 in the last 30 days.</h3>
          <dl class="facts">
            <div><dt>Client</dt><dd>Creste Kids, DIY craft kits for children</dd></div>
            <div><dt>Starting point</dt><dd>2.07 all-time average ROAS across 96 campaigns</dd></div>
            <div><dt>Result</dt><dd><b>3.65 ROAS across the account in the last 30 days. Dussehra kits sold out.</b></dd></div>
          </dl>
          <p class="story">Two years of tweaking campaign settings hadn't moved Creste. We diagnosed the real bottleneck as creative, set up a creator pipeline for a steady supply of authentic content, and ran it through the A3 Flywheel: a new creative Pack every week in one Prospecting CBO, winners iterated, and past buyers handled separately in a Retention campaign.</p>
          <!-- QUOTE: Creste founder -->
          <a class="btn line" href="https://forms.acquirely.in/acquirely/form/FunnelReviewCallECom/formperma/muJYVHXbKDbQ7N3xEPr_lrjkOuBMe33JPNULGFJm9Kg" target="_blank" rel="noopener">Get the same diagnosis →</a>
        </div>
      </article>

    </div>
  </div>
</section>

<!-- ============ PROBLEM ============ -->
<section class="band white">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow">Why brands stall</span>
      <h2>You don't have an ads problem. You have a system problem.</h2>
      <p>Most D2C brands get stuck between ₹3L and ₹20L a month. The product is fine. The ads are fine. What's missing is a repeatable way to find winners, scale them, and replace them before they fatigue.</p>
    </div>
    <div class="split">
      <div class="card">
        <h3>Sound familiar?</h3>
        <ul class="x-list">
          <li>Creatives tested at random, with no hypothesis behind them</li>
          <li>Campaigns paused before they've had a fair read</li>
          <li>Budgets raised on a good day and cut on a bad one</li>
          <li>The whole account riding on one or two ageing winners</li>
          <li>An agency that reports numbers but never learns from them</li>
          <li>ROAS that swings 30% week to week and nobody can say why</li>
        </ul>
      </div>
      <div class="andro">
        <span class="tag"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v4M12 17h.01"/><path d="M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z"/></svg>What changed with Andromeda</span>
        <h3>Meta now groups your ads by concept before the auction</h3>
        <p>Forty ads built on three ideas look like three ads to the algorithm. Interest stacking matters less, creative matters more, and fast budget jumps break learning.</p>
        <p>Most accounts are still optimising audiences. Gharaana's was too.</p>
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
      <div class="reveal">
        <div class="r-head"><span class="num">01</span><h3>One system, every account</h3></div>
        <div class="r-body">
          <div class="card"><span class="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2B7FFF" stroke-width="2" stroke-linecap="round"><path d="M20 12a8 8 0 1 1-2.3-5.7"/><path d="M20 4v4h-4"/></svg></span><h4>Runs weekly</h4><p>Structure, creative, micro analysis, repeat. The A3 Flywheel behind every result on this page.</p></div>
          <div class="card"><span class="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2B7FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg></span><h4>Tested across 20+ accounts</h4><p>Built from what actually worked after Andromeda, not from theory.</p></div>
          <div class="card"><span class="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2B7FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/></svg></span><h4>Data, not mood</h4><p>Scaling decisions follow the numbers, not the mood in the group chat.</p></div>
        </div>
      </div>
      <div class="reveal">
        <div class="r-head"><span class="num o">02</span><h3>Creative is the engine, so we built one</h3></div>
        <div class="r-body">
          <div class="card"><span class="ic o"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F37513" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M4 12h16M4 17h10"/></svg></span><h4>A new Pack every week</h4><p>Creste, Patoola and TacTow all turned on creative, not campaign settings.</p></div>
          <div class="card"><span class="ic o"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F37513" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg></span><h4>Research, not colour swaps</h4><p>Market research and net-new concepts alongside iterations of proven winners.</p></div>
          <div class="card"><span class="ic o"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F37513" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0113 0"/><path d="M16 4.5a3.5 3.5 0 010 7M21.5 20a6.5 6.5 0 00-4-6"/></svg></span><h4>Creators included</h4><p>Creator pipeline and influencer management are part of the fee.</p></div>
        </div>
      </div>
      <div class="reveal">
        <div class="r-head"><span class="num">03</span><h3>We get paid when you grow</h3></div>
        <div class="r-body">
          <div class="card"><span class="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2B7FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 017.5-2"/></svg></span><h4>Flat 10% of ad spend</h4><p>No hidden fees.</p></div>
          <div class="card"><span class="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2B7FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3z"/></svg></span><h4>Every decision, shown to you</h4><p>Every scale or cut decision comes with the numbers behind it.</p></div>
          <div class="card"><span class="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2B7FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0116 0"/></svg></span><h4>Founders on your account</h4><p>Not a junior with a template.</p></div>
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
      <h2>The A3 Flywheel: how we scale Meta Ads after Andromeda</h2>
      <p>When Andromeda landed, interest targeting stopped working across most of the 20+ ad accounts we managed. So we rebuilt how we run them: one structure, three systems, run every week.</p>
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
        <div class="stage"><span class="code">A1</span><div><h4>Foundation Structure</h4><p>Two campaigns, not five. One Prospecting CBO that tests and scales new-customer ads, and one Retention campaign for past buyers. No audience overlap, no internal bidding war.</p></div></div>
        <div class="stage"><span class="code">A2</span><div><h4>Creative Framework</h4><p>A new creative Pack every week, from three systems: competitor research, net-new concepts, and iterations of proven winners. Learn from the market, create new, improve what works.</p></div></div>
        <div class="stage"><span class="code">A3</span><div><h4>Micro Analysis</h4><p>Meta doesn't perform the same every day of the week, so your budget shouldn't either. With 90 days of your data, we move spend away from weak days and into your strongest ones.</p></div></div>
      </div>
    </div>

    <div class="dcard" id="playbook" style="margin-top:40px">
      <div>
        <span class="eyebrow">Free playbook</span>
        <h2 style="margin-top:10px">Get the full A3 Flywheel playbook</h2>
        <p style="margin-top:10px">The exact rules we run in client accounts.</p>
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
        <a class="btn blue" href="https://forms.zoho.in/acquirely/form/A3Playbook" target="_blank" rel="noopener">Send Me the Playbook <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
        <p class="note"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/></svg>No spam. We never share your details.</p>
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
    <div class="wins">
      <figure class="win"><img src="/ecommerce/img/22-meta-ads-app-kenzai-puzzles-prospecting.jpg" alt="Meta Ads app: Kenzai Puzzles prospecting campaign with 954 website purchases" loading="lazy"><figcaption><span>TacTow · formerly Kenzai Puzzles</span>954 purchases from one prospecting campaign.</figcaption></figure>
      <figure class="win"><img src="/ecommerce/img/23-whatsapp-creste-team-says-dussehra-kits.jpg" alt="WhatsApp: Creste team says Dussehra kits almost sold out, asks to pause ads" loading="lazy"><figcaption><span>Creste Kids</span>Sold out before Dussehra. The client asked us to pause.</figcaption></figure>
      <figure class="win"><img src="/ecommerce/img/24-meta-ads-app-patoola-prospecting-campaig.jpg" alt="Meta Ads app: Patoola prospecting campaign with 48 website purchases" loading="lazy"><figcaption><span>Patoola</span>48 purchases from a single prospecting campaign.</figcaption></figure>
      <figure class="win"><img src="/ecommerce/img/25-meta-ads-app-tactow-ad-sets-broad-pack-2.jpg" alt="Meta Ads app: TacTow ad sets — Broad Pack 2 with 105 purchases, Winner Creatives with 35" loading="lazy"><figcaption><span>TacTow · ad sets</span>Every weekly creative Pack tracked to purchases, not clicks.</figcaption></figure>
      <figure class="win"><img src="/ecommerce/img/26-whatsapp-testimonial-from-karthik-recomm.jpg" alt="WhatsApp testimonial from Karthik recommending Kunal and the Acquirely team" loading="lazy"><figcaption><span>Karthik · founder, Old School Station</span>"Consistent results at scale. Highly recommend."</figcaption></figure>
      <figure class="win"><img src="/ecommerce/img/27-meta-ads-app-gharaana-prospecting-and-re.jpg" alt="Meta Ads app: Gharaana prospecting and retargeting campaigns, both active" loading="lazy"><figcaption><span>Gharaana</span>High-ticket furniture, sold through prospecting and retargeting.</figcaption></figure>
    </div>
  </div>
</section>

<!-- ============ FIT ============ -->
<section class="band white">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow">Who this is for</span>
      <h2>We say no to most brands. Here's why.</h2>
      <p>The Flywheel needs fuel: a product people already buy and enough spend to learn from. If that's not you yet, we'll tell you on the call.</p>
    </div>
    <div class="fit">
      <div class="card yes">
        <h3>A good fit if you</h3>
        <ul>
          <li>Spend ₹5L+ a month on Meta &amp; Google Ads</li>
          <li>Have a product that already sells</li>
          <li>Hit a ceiling when you try to scale</li>
          <li>See ROAS swing with no clear reason</li>
          <li>Want a system, not just someone to press buttons</li>
        </ul>
      </div>
      <div class="card no">
        <h3>Not a fit if you</h3>
        <ul>
          <li>Are still launching or testing product-market fit</li>
          <li>Are shopping for the cheapest option</li>
          <li>Aren't ready to scale spend when it works</li>
          <li>Expect results in week one without data</li>
        </ul>
      </div>
    </div>
    <div class="center-cta">
      <a class="btn" href="https://forms.acquirely.in/acquirely/form/FunnelReviewCallECom/formperma/muJYVHXbKDbQ7N3xEPr_lrjkOuBMe33JPNULGFJm9Kg" target="_blank" rel="noopener">Yes, I'm Ready. Apply Now <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
      <small>Not sure? Apply anyway. We reply within 24 hours.</small>
    </div>
  </div>
</section>

<!-- ============ PRICING ============ -->
<section class="band" id="pricing">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow">Pricing</span>
      <h2>Transparent pricing that <span class="grad">grows only when you do</span></h2>
    </div>
    <div class="price">
      <div class="card tier">
        <span class="eyebrow">For ₹5L+ monthly ad spend</span>
        <div class="big grad">10%</div>
        <p class="sub">of monthly ad spend. Nothing hidden.</p>
        <ul>
          <li>Meta campaign strategy and management on the A3 Flywheel</li>
          <li>A new creative Pack every week</li>
          <li>Influencer management</li>
          <li>Daily monitoring and weekly optimisation</li>
        </ul>
        <a class="btn" href="https://forms.acquirely.in/acquirely/form/FunnelReviewCallECom/formperma/muJYVHXbKDbQ7N3xEPr_lrjkOuBMe33JPNULGFJm9Kg" target="_blank" rel="noopener">Book a Growth Call</a>
      </div>
      <div class="card inhouse">
        <h3>What the same team costs in-house</h3>
        <table>
          <tr><td>Meta performance marketer</td><td>~₹80,000</td></tr>
          <tr><td>Google Ads manager</td><td>~₹80,000</td></tr>
          <tr><td>Content strategist</td><td>~₹60,000</td></tr>
          <tr><td>Video editor</td><td>~₹40,000</td></tr>
          <tr><td>Graphic designer</td><td>~₹40,000</td></tr>
          <tr class="total"><td>Monthly total</td><td>~₹3.0L+</td></tr>
        </table>
        <p>And that's before a proven scaling framework or a creative testing system. The even more expensive option is an agency that spends your budget and never learns from it.</p>
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
      <div class="stat"><b style="font-size:18px">A fair 75–90 day window</b><span>Micro Analysis needs 90 days of your data. That's when the system shows what it can do.</span></div>
      <div class="stat"><b style="font-size:18px">Top 1% experts only</b><span>5+ years running ads and ₹10Cr+ managed in a year, each. A Meta and a Google specialist on every account.</span></div>
      <div class="stat"><b style="font-size:18px">Fees tied to growth</b><span>10% of your ad spend. We earn more only when your spend scales profitably.</span></div>
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
        <div class="avatar"><img src="/ecommerce/img/mausam-arora.jpg" alt="Mausam Arora"></div>
        <div>
          <h3>Mausam Arora</h3>
          <p class="role">Co-founder · Funnels &amp; GTM</p>
          <p>12 years building businesses in education: curricula, 300+ books, and distribution to 2,000+ schools. Brings go-to-market thinking and funnel strategy to every account he scales.</p>
          <a href="https://www.linkedin.com/in/mausamarora/" target="_blank" rel="noopener"><svg width="14" height="14" viewBox="0 0 24 24" fill="#0A66C2"><path d="M4.98 3.5a2.5 2.5 0 11.02 5 2.5 2.5 0 01-.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.6 8.65 21 11.2 21 14.5V21h-4v-5.8c0-1.4 0-3.2-1.95-3.2S12.8 13.5 12.8 15.1V21H9z"/></svg>LinkedIn</a>
        </div>
      </div>
      <div class="card person">
        <div class="avatar"><img src="/ecommerce/img/kunal-mondal.jpg" alt="Kunal Mondal"></div>
        <div>
          <h3>Kunal Mondal</h3>
          <p class="role">Co-founder · Meta strategy</p>
          <p>₹30Cr+ managed across 30+ brands in ecommerce, EdTech and real estate. A hands-on Meta strategist who runs full-funnel systems across Meta and Google.</p>
          <a href="https://www.linkedin.com/in/kunal-meta-ads/" target="_blank" rel="noopener"><svg width="14" height="14" viewBox="0 0 24 24" fill="#0A66C2"><path d="M4.98 3.5a2.5 2.5 0 11.02 5 2.5 2.5 0 01-.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.6 8.65 21 11.2 21 14.5V21h-4v-5.8c0-1.4 0-3.2-1.95-3.2S12.8 13.5 12.8 15.1V21H9z"/></svg>LinkedIn</a>
        </div>
      </div>
    </div>
    <div class="team-strip">
      <div class="faces">
        <img src="/ecommerce/img/founder1.png" alt="">
        <img src="/ecommerce/img/founder2.png" alt="">
        <img src="/ecommerce/img/founder3.png" alt="">
        <img src="/ecommerce/img/founder4.png" alt="">
        <img src="/ecommerce/img/founder5.png" alt="">
      </div>
      <span>Plus the strategists, editors and designers behind every Pack</span>
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
      <details><summary>How quickly will I see results?</summary><p>First winning creatives usually show up in 3–6 weeks. Structured scaling follows once we have a baseline. TacTow went 5x in one quarter; Creste moved in two months.</p></details>
      <details><summary>How soon do campaigns go live?</summary><p>As soon as ad account access, pixel checks and your first creative Pack are done. We'll give you an exact date on the diagnosis call.</p></details>
      <details><summary>What if we don't hit our ROAS targets?</summary><p>We give the system 75–90 days, because Micro Analysis needs 90 days of your data. Along the way, every scale or cut decision is shown to you with the numbers behind it, so you always know where you stand.</p></details>
      <details><summary>Are creatives included?</summary><p>Yes. A weekly creative Pack, plus influencer management, is part of the fee. Product shoots and paid creator fees are billed separately.</p></details>
      <details><summary>Do you also handle Amazon, SEO or social?</summary><p>Meta and Google are where most D2C brands scale first, so they're our core. We also run Amazon and marketplace ads, quick-commerce ads, CRO, websites and social media as add-ons.</p></details>
      <details><summary>Do you run campaigns outside India?</summary><p>Yes. We manage accounts for brands in Canada, the USA and other markets with the same system.</p></details>
    </div>
  </div>
</section>

<!-- ============ FINAL CTA (matches "Ready to Grow" card) ============ -->
<section class="band" id="book">
  <div class="wrap">
    <div class="dcard">
      <div>
        <h2>Stuck at ₹10L, ₹20L or 2.5 ROAS? <span class="grad">So were they.</span></h2>
        <p style="margin-top:12px">Book a 30-minute Growth Diagnosis. We'll look at your account, show you where it's leaking, and tell you straight whether the Flywheel fits.</p>
        <ul class="ticks">
          <li>Free Meta ad account and funnel audit</li>
          <li>30-minute diagnosis call, no obligation</li>
          <li>A straight answer on whether we're the right fit</li>
        </ul>
      </div>
      <div style="display:grid;align-content:center">
        <span class="eyebrow">Your move</span>
        <h3 style="margin-top:10px">Book your diagnosis call</h3>
        <a class="btn blue" href="https://forms.acquirely.in/acquirely/form/FunnelReviewCallECom/formperma/muJYVHXbKDbQ7N3xEPr_lrjkOuBMe33JPNULGFJm9Kg" target="_blank" rel="noopener" style="margin-top:22px;width:100%;padding:16px 22px;font-size:16px">Book Your Free Call! <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
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
        <p style="margin-top:10px;max-width:32ch">Helping brands scale through Meta Ads &amp; Google Ads.</p>
      </div>
      <div><h4>On this page</h4><ul><li><a href="#results">Case Studies</a></li><li><a href="#flywheel">A3 Flywheel</a></li><li><a href="#pricing">Pricing</a></li><li><a href="#faq">FAQ</a></li></ul></div>
      <div><h4>Contact</h4><ul><li>New Delhi, India</li><li><a href="https://acquirely.in/">acquirely.in</a></li></ul></div>
    </div>
    <div class="fine">
      <p>© 2026 Acquirely. All rights reserved.</p>
      <p>This site is not part of the Meta or Facebook website and is not endorsed by Meta Platforms, Inc. Meta and Facebook are trademarks of Meta Platforms, Inc.</p>
    </div>
  </div>
</footer>

<div class="mcta"><a class="btn" href="https://forms.acquirely.in/acquirely/form/FunnelReviewCallECom/formperma/muJYVHXbKDbQ7N3xEPr_lrjkOuBMe33JPNULGFJm9Kg" target="_blank" rel="noopener">Book a Growth Diagnosis Call</a></div>
`;

export default markup;
