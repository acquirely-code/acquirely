import { withImgDims } from "@/lib/img-dims";
// Page markup for /lead-gen-thank-you, rendered by LeadGenThankYou. Shares ecommerce.css and the ecommerce thank-you.css.

const markup = `
<!--
  THANK-YOU PAGE — the redirect after the LeadGenLeadQualityAuditApplication form submits.
  Optional personalisation: redirect to /lead-gen-thank-you?name=FirstName (or ?tve_name=…) and the notice bar greets them by name.

  To add a testimonial, copy one of the <figure> blocks in .tst and put the screenshot in public/ecommerce/img/.
-->

<header class="ty-top" id="top">
  <a href="/lead-gen" aria-label="Acquirely home"><img src="/ecommerce/img/01-acquirely-the-science-behind-scale.png" alt="Acquirely — The Science Behind Scale"></a>
</header>

<!-- ============ HERO ============ -->
<section class="ty-hero">
  <div class="wrap">
    <p class="notice"><b>You're booked:</b> <span id="tyName">A calendar invite and WhatsApp confirmation are on their way. Before we speak, discover…</span></p>
    <h1>How We Got <strong class="grad">Right Source Aviation 5x More Sales-Qualified Leads</strong> at the <strong class="grad">Same Cost per Lead</strong></h1>
    <p class="lede"><b>Cheap leads were flooding their sales team with students who couldn't fund pilot training.</b> Watch how we stopped optimising for cheap form fills and started finding buyers your sales team can close.</p>

    <!-- VIDEO: Wistia lead-gen VSL (media nm2ou94x6d), same as /lead-gen. Clicking the poster swaps in the player. -->
    <div class="vid" data-video="https://fast.wistia.net/embed/iframe/nm2ou94x6d?autoPlay=true&playerColor=2949E5">
      <div class="vid-bar">Learn how it works</div>
      <button class="vid-screen" type="button" aria-label="Play: how Acquirely fixes lead quality">
        <img src="https://fast.wistia.com/embed/medias/nm2ou94x6d/swatch" alt="" aria-hidden="true">
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
      <p>Results from lead-gen clients, <u>before vs after</u>:</p>
    </div>
    <div class="nums">
      <div class="num-c"><span>Kashti<b>Cost per registration down</b></span><strong>99%</strong></div>
      <div class="num-c"><span>Right Source Aviation<b>Cost per qualified lead down</b></span><strong>80%</strong></div>
      <div class="num-c"><span>International Schooling<b>Qualified enrolment leads up</b></span><strong>40%</strong></div>
    </div>
    <p class="nums-note">₹1,000+ → ₹13.39 per registration · ₹1,500 → ₹300 per qualified lead · +40% qualified leads across 9+ countries. <a href="/lead-gen#results">See the case studies →</a></p>
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
            <h3>You'll get the details</h3>
            <p>A calendar invite with the Zoom link, plus a WhatsApp reminder before we speak. Check spam, just in case.</p>
          </div>
        </li>
        <li class="card step">
          <span class="step-n o">2</span>
          <div>
            <p class="step-l">Step 2</p>
            <h3>On the call: a real diagnosis</h3>
            <p>We look at where your leads drop off between form fill and sale, show you why Meta is finding the wrong people, and map the first campaign to bring in leads your sales team can close. A working session, not a pitch.</p>
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
            <div><dt>Ad spend managed by the founding team</dt><dd class="grad">₹30Cr+</dd></div>
          </dl>
          <p class="meet-promise"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3z"/><path d="M9 12l2 2 4-4"/></svg>No juniors, no hand-off.</p>
        </div>
        <p class="meet-foot"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg><span><b>Need to reschedule?</b> Use the link in your calendar invite, or write to <a href="mailto:team@acquirely.in">team@acquirely.in</a>.</span></p>
      </article>
    </div>
  </div>
</section>

<!-- ============ TESTIMONIALS ============ -->
<section class="band white" id="testimonials">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow">Testimonials</span>
      <h2>What our clients say about working with us</h2>
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
