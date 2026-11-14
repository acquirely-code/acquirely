import { THEME_TOGGLE } from "@/app/ecommerce/theme";

// The homepage header and footer, shared by the homepage (app/(home)/(default)/markup.ts) and the
// pages that reuse them through SiteHeader / SiteFooter. Styled by app/ecommerce/ecommerce.css + home.css.
// `home` is true only on the homepage: section links stay as in-page anchors (#faq) there and become
// /#faq everywhere else. The light/dark toggle only shows on the homepage.

const BOOK = "https://forms.acquirely.in/acquirely/form/FunnelReviewCallECom/formperma/muJYVHXbKDbQ7N3xEPr_lrjkOuBMe33JPNULGFJm9Kg";
const IMG = "/ecommerce/img";
const ext = `target="_blank" rel="noopener"`;
const icon = (path: string, stroke: string) =>
  `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${stroke}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${path}</svg>`;
const navItem = (href: string, o: boolean, ic: string, title: string, sub: string) =>
  `<a href="${href}"><span class="ic${o ? " o" : ""}">${icon(ic, o ? "#F37513" : "#2B7FFF")}</span><span><b>${title}</b><small>${sub}</small></span></a>`;
const CHEVRON = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>`;
const BURGER = `<span class="hm-burger" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path class="b1" d="M4 7h16"/><path class="b2" d="M4 12h16"/><path class="b3" d="M4 17h16"/></svg></span>`;

// toggle: show the light/dark switch (homepage and blog; other pages using the shared chrome are light-only).
export function siteNav(home: boolean, toggle = home) {
  const s = home ? "#" : "/#";
  return `
<div class="nav">
  <div class="nav-in">
    <a class="logo" href="/" aria-label="Acquirely home"><img src="${IMG}/01-acquirely-the-science-behind-scale.png" alt="Acquirely — The Science Behind Scale"></a>
    <nav class="nav-links" aria-label="${home ? "Page sections" : "Main"}">
      <a href="${s}results">Case Studies</a>
      <details class="hm-dd">
        <summary><span class="hm-dd-lbl">Services ${CHEVRON}</span>${BURGER}</summary>
        <div class="hm-dd-menu">
          <p class="hm-dd-h">Services</p>
          ${navItem("/ecommerce", false, '<path d="M6 7h12l-1 13H7z"/><path d="M9 7a3 3 0 0 1 6 0"/>', "D2C &amp; Ecommerce", "Revenue and ROAS on Meta and Google")}
          ${navItem("/lead-gen", true, '<circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0"/><path d="M16 11h5"/><path d="M18.5 8.5v5"/>', "Lead Generation", "Qualified leads, not form fills")}
          ${navItem("/publishers", false, '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5"/><path d="M8 7h7"/>', "Education Publishers", "School decision-makers who book calls")}
          ${navItem("/edtech", true, '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8"/><path d="M12 16v4"/>', "EdTech for Schools", "Reach principals, not the front desk")}
          <a class="hm-dd-all" href="${s}services">See everything we do →</a>
          <div class="hm-dd-mob">
            <a href="${s}results">Case Studies</a>
            <a href="/blog">Blog</a>
            <a href="${s}faq">FAQ</a>
          </div>
          <div class="hm-dd-mob">
            <p class="hm-dd-h">Tools</p>
            <a href="/ecommerce-calculator">Ecommerce Calculator</a>
            <a href="/roi-calculator">ROI Calculator</a>
          </div>
        </div>
      </details>
      <a href="/blog">Blog</a>
      <details class="hm-dd hm-tools-dd">
        <summary><span class="hm-dd-lbl">Tools ${CHEVRON}</span>${BURGER}</summary>
        <div class="hm-dd-menu">
          <p class="hm-dd-h">Calculators</p>
          ${navItem("/ecommerce-calculator", false, '<path d="M3 3h2l2.2 11.2a2 2 0 0 0 2 1.6h8.7a2 2 0 0 0 2-1.6L22 7H6"/>', "Ecommerce Calculator", "Profit, ROAS and break-even for dropshipping")}
          ${navItem("/roi-calculator", true, '<circle cx="12" cy="12" r="9"/><path d="M16 8h-5a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4H8"/><path d="M12 6v2m0 8v2"/>', "ROI Calculator", "Lead generation costs, profit and ROI")}
          <a class="hm-dd-all" href="${s}tools">See all tools ${home ? "↓" : "→"}</a>
        </div>
      </details>
      <a href="${s}faq">FAQ</a>
    </nav>
    <div class="nav-act">${toggle ? THEME_TOGGLE : ""}<a class="btn blue" href="${BOOK}" ${ext}>Book a Call</a></div>
  </div>
</div>`;
}

export function siteFooter(home: boolean) {
  const s = home ? "#" : "/#";
  return `
<footer>
  <div class="wrap">
    <div class="foot">
      <div>
        <div class="brand"><img src="${IMG}/28-acquirely-the-science-behind-scale.png" alt="Acquirely — The Science Behind Scale" loading="lazy" style="height:52px;width:auto"></div>
        <p style="margin-top:10px;max-width:32ch">A full-funnel growth team for D2C and lead-gen brands. Measured on revenue.</p>
      </div>
      <div><p class="fh">Services</p><ul><li><a href="/ecommerce">D2C &amp; ecommerce growth</a></li><li><a href="/lead-gen">Lead generation</a></li><li><a href="/publishers">Education publishers</a></li><li><a href="/edtech">EdTech for schools</a></li><li><a href="${s}services">Website &amp; CRO</a></li></ul></div>
      <div><p class="fh">More from Acquirely</p><ul><li><a href="/about-us">About us</a></li><li><a href="/blog">Blog</a></li><li><a href="/ecommerce-calculator">Ecommerce profit calculator</a></li><li><a href="/roi-calculator">ROI calculator</a></li></ul></div>
      <div><p class="fh">Contact</p><ul><li><a href="mailto:team@acquirely.in">team@acquirely.in</a></li><li><a href="tel:+917060250253">+91 70602 50253</a></li><li>New Delhi, India</li><li><a href="/privacy-policy">Privacy policy</a></li><li><a href="/terms-and-condition">Terms of service</a></li></ul></div>
    </div>
    <div class="fine">
      <p>© 2026 Acquirely. All rights reserved.</p>
    </div>
  </div>
</footer>`;
}
