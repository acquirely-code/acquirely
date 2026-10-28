import { withImgDims } from "@/lib/img-dims";
// Page markup for /publishers-thank-you, rendered by PublishersThankYou. Shares ecommerce.css and the ecommerce thank-you.css.

const markup = `
<!--
  THANK-YOU PAGE — the redirect after the EdPublishers booking form submits.
  Optional personalisation: redirect to /publishers-thank-you?name=FirstName (or ?tve_name=…) and the notice bar greets them by name.

  To add a testimonial, copy one of the <figure> blocks in .tst and put the screenshot in public/publishers/img/.
-->

<header class="ty-top" id="top">
  <a href="/publishers" aria-label="Acquirely home"><img src="/ecommerce/img/01-acquirely-the-science-behind-scale.png" alt="Acquirely — The Science Behind Scale"></a>
</header>

<!-- ============ HERO ============ -->
<section class="ty-hero">
  <div class="wrap">
    <p class="notice"><b>You're booked:</b> <span id="tyName">A calendar invite and WhatsApp confirmation are on their way. Before we speak, discover…</span></p>
    <h1>How We Got <strong class="grad">Propel Curriculum 150+ Paid Principal Registrations</strong> in <strong class="grad">Two Months</strong>, at a <strong class="grad">66x Return on Ad Spend</strong></h1>
    <p class="lede"><b>Ten agencies said principals couldn't be reached on Meta.</b> Watch what happened when the right school leaders saw the right message.</p>

    <!-- VIDEO: Propel Immersion highlights on YouTube (5zMJaC-6vKU), same as /publishers. Clicking the poster opens the video on YouTube in a new tab. -->
    <div class="vid">
      <div class="vid-bar">Watch the Immersion highlights</div>
      <a class="vid-screen" href="https://www.youtube.com/watch?v=5zMJaC-6vKU" target="_blank" rel="noopener" aria-label="Watch Propel Curriculum Immersion conference highlights on YouTube (opens in a new tab)">
        <img src="/publishers/img/propel-immersion-highlights-poster.jpg" alt="" aria-hidden="true">
        <span class="vid-play"><svg width="30" height="30" viewBox="0 0 24 24" fill="#fff"><path d="M8 5.5v13a1 1 0 001.5.86l10.5-6.5a1 1 0 000-1.72L9.5 4.64A1 1 0 008 5.5z"/></svg></span>
      </a>
    </div>
  </div>
</section>

<!-- ============ NUMBERS ============ -->
<section class="band white">
  <div class="wrap">
    <div class="nums-h">
      <h2>Still not convinced? <span class="grad">Numbers don't lie.</span></h2>
      <p>Results from education clients, <u>straight from Ads Manager</u>:</p>
    </div>
    <div class="nums">
      <div class="num-c"><span>Propel Curriculum<b>Return on ad spend</b></span><strong>66x</strong></div>
      <div class="num-c"><span>IP Study<b>Sales conversion up by</b></span><strong>300%</strong></div>
      <div class="num-c"><span>Agastya Foundation<b>Return on ad spend</b></span><strong>8x</strong></div>
    </div>
    <p class="nums-note">150+ paid principals · 300+ school leads · 100+ paid school leaders. <a href="/publishers#results">See the case studies →</a></p>
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
            <p>We show you why the right decision-makers aren't seeing you, and map the first campaign to get principals and directors booking meetings with you. A working session, not a pitch.</p>
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
            <div><dt>Years in education</dt><dd class="grad">12+</dd></div>
            <div><dt>Schools in his distribution network</dt><dd class="grad">2,000+</dd></div>
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
