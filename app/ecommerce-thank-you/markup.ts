// Page markup for /ecommerce-thank-you, rendered by EcommerceThankYou. Images live in public/ecommerce/img.
const BOOK_URL =
  "https://forms.acquirely.in/acquirely/form/FunnelReviewCallECom/formperma/muJYVHXbKDbQ7N3xEPr_lrjkOuBMe33JPNULGFJm9Kg";

const markup = `
<!--
  THANK-YOU PAGE — set this as the redirect URL after the A3 Playbook Zoho form submits.
  Optional personalisation: redirect to /ecommerce-thank-you?name=FirstName (or ?tve_name=…) and the notice bar greets them by name.

  To add a testimonial, copy one of the <figure> blocks in .tst and put the screenshot in public/ecommerce/img/.
-->

<header class="ty-top" id="top">
  <a href="/ecommerce" aria-label="Acquirely home"><img src="/ecommerce/img/01-acquirely-the-science-behind-scale.png" alt="Acquirely — The Science Behind Scale"></a>
</header>

<!-- ============ HERO ============ -->
<section class="ty-hero">
  <div class="wrap">
    <p class="notice"><b>Important:</b> <span id="tyName">Your A3 Flywheel playbook is on its way. In the meantime, discover…</span></p>
    <h1>How We Helped <strong class="grad">This D2C Kids Brand</strong> Lift Its Meta ROAS <strong class="grad">From 2.07 To 3.65</strong> And <strong class="grad">Sell Out Before Dussehra</strong></h1>
    <p class="lede"><b>Do not spend another rupee on paid ads</b> until you've seen exactly how we restructured this account after Meta's Andromeda update.</p>

    <!-- VIDEO: Wistia "E-Commerce October VSL" (media 72oys5y0dy), same as /ecommerce. Clicking the poster swaps in the player. -->
    <div class="vid" data-video="https://fast.wistia.net/embed/iframe/72oys5y0dy?autoPlay=true&playerColor=2949E5">
      <div class="vid-bar">Watch the breakdown</div>
      <button class="vid-screen" type="button" aria-label="Play: the Creste Kids breakdown">
        <img src="/ecommerce/img/08-video-poster.jpg" alt="" aria-hidden="true">
        <span class="vid-card"><b>2.07 → 3.65 ROAS in one Dussehra season</b><small>The full account breakdown</small></span>
        <span class="vid-play"><svg width="30" height="30" viewBox="0 0 24 24" fill="#fff"><path d="M8 5.5v13a1 1 0 001.5.86l10.5-6.5a1 1 0 000-1.72L9.5 4.64A1 1 0 008 5.5z"/></svg></span>
      </button>
    </div>
  </div>
</section>

<!-- ============ NUMBERS ============ -->
<section class="band white">
  <div class="wrap">
    <div class="nums-h">
      <h2>Still not convinced? <span class="grad">Numbers don't lie.</span></h2>
      <p>Purchase ROAS lift, <u>before vs after</u>, straight from client <u>Ads Manager</u>:</p>
    </div>
    <div class="nums">
      <div class="num-c"><span>Creste Kids<b>ROAS up by</b></span><strong>76%</strong></div>
      <div class="num-c"><span>Gharaana<b>ROAS up by</b></span><strong>76%</strong></div>
      <div class="num-c"><span>Patoola<b>ROAS up by</b></span><strong>12%</strong></div>
    </div>
    <p class="nums-note">2.07 → 3.65 · 2.30 → 4.04 · 3.6 → 4.02. <a href="/ecommerce#results">See the screenshots →</a></p>
    <div class="ty-cta" id="book">
      <a class="btn" href="${BOOK_URL}" target="_blank" rel="noopener">Schedule your free growth diagnosis call</a>
    </div>
  </div>
</section>

<!-- ============ TESTIMONIALS ============ -->
<section class="band" id="testimonials">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow">Testimonials</span>
      <h2>What founders say about working with us</h2>
      <p>Straight from WhatsApp. Cropped for privacy, never edited.</p>
    </div>
    <div class="tst">
      <figure><img src="/ecommerce/img/26-whatsapp-testimonial-from-karthik-recomm.jpg" alt="WhatsApp testimonial from Karthik recommending Kunal and the Acquirely team" loading="lazy"><figcaption><span>Karthik · founder, Old School Station</span>"Consistent results at scale. Highly recommend."</figcaption></figure>
      <figure><img src="/ecommerce/img/23-whatsapp-creste-team-says-dussehra-kits.jpg" alt="WhatsApp: Creste team says Dussehra kits almost sold out, asks to pause ads" loading="lazy"><figcaption><span>Creste Kids</span>Sold out before Dussehra. The client asked us to pause.</figcaption></figure>
      <figure><img src="/ecommerce/img/34-whatsapp-payal-patoola-testimonial.png" alt="WhatsApp from Payal at Patoola: fewer cancellations, more prepaid orders, higher AOV and stable ROAS after a month with Acquirely" loading="lazy"><figcaption><span>Payal · Patoola</span>"Really encouraging results in just one month."</figcaption></figure>
    </div>
    <div class="center-cta">
      <a class="btn" href="${BOOK_URL}" target="_blank" rel="noopener">Book a Growth Diagnosis Call</a>
      <small>We onboard a few brands a month. Reply within 24 hours.</small>
    </div>
  </div>
</section>

<footer>
  <div class="wrap">
    <div class="fine" style="padding-top:0">
      <p>© 2026 Acquirely. All rights reserved.</p>
      <p>This site is not part of the Meta or Facebook website and is not endorsed by Meta Platforms, Inc. Meta and Facebook are trademarks of Meta Platforms, Inc.</p>
    </div>
  </div>
</footer>

<div class="mcta"><a class="btn" href="${BOOK_URL}" target="_blank" rel="noopener">Book a Growth Diagnosis Call</a></div>
`;

export default markup;
