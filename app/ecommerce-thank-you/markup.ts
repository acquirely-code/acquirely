import { withImgDims } from "@/lib/img-dims";
// Page markup for /ecommerce-thank-you, rendered by EcommerceThankYou. Images live in public/ecommerce/img.

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
    <h1>How We Scaled <strong class="grad">TacTow, a D2C Puzzle Brand,</strong> From <strong class="grad">₹8 Lakh to ₹40 Lakh a Month</strong> With <strong class="grad">Meta Ads in 90 Days</strong></h1>
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
  </div>
</section>

<!-- ============ WHAT HAPPENS NEXT ============ -->
<section class="band" aria-labelledby="next-h">
  <div class="wrap">
    <div class="head">
      <h2 id="next-h">What happens <span class="grad">next</span></h2>
    </div>
    <div class="next">
      <ol class="steps">
        <li class="card step">
          <span class="step-n">1</span>
          <div>
            <p class="step-l">Step 1</p>
            <h3>The playbook lands in your inbox</h3>
            <p>Your A3 Flywheel playbook is on its way by email and WhatsApp. Check spam, just in case.</p>
          </div>
        </li>
        <li class="card step">
          <span class="step-n o">2</span>
          <div>
            <p class="step-l">Step 2</p>
            <h3>Want it run on your account? Book a diagnosis</h3>
            <p>We audit your account against the Flywheel, show you what's capping your ROAS, and map the first creative Packs to test. A working session, not a pitch.</p>
          </div>
        </li>
      </ol>

      <article class="card meet" aria-labelledby="meet-h">
        <div class="meet-photo"><img src="/ecommerce/img/mausam-arora-portrait.jpg" alt="Mausam Arora, co-founder of Acquirely" loading="lazy"></div>
        <div class="meet-body">
          <span class="eyebrow">Who you'll meet</span>
          <p class="meet-lead">You'll speak directly with</p>
          <h3 id="meet-h">Mausam Arora<span>, co-founder</span></h3>
          <dl class="meet-stats">
            <div><dt>Years building businesses</dt><dd class="grad">12+</dd></div>
            <div><dt>Schools in his distribution network</dt><dd class="grad">2,000+</dd></div>
          </dl>
          <p class="meet-promise"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3z"/><path d="M9 12l2 2 4-4"/></svg>No juniors, no hand-off.</p>
        </div>
        <p class="meet-foot"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg><span><b>Questions about the playbook?</b> Write to <a href="mailto:team@acquirely.in">team@acquirely.in</a>.</span></p>
      </article>
    </div>
  </div>
</section>

<!-- ============ TESTIMONIALS ============ -->
<section class="band white" id="testimonials">
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
`;

export default withImgDims(markup);
