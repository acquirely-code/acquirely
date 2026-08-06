import Script from "next/script";
import { publishersTemplate } from "@/components/publishers-template";
import { FounderShowcase } from "@/components/FoundersSection";
import acquirelyLogo from "@/app/assests/logo.png";

export const metadata = {
  title: "Acquirely | Growth System for Book Publishers",
  description:
    "Stop selling books one school visit at a time. Get school decision-makers to book calls with you — right when they choose next year's curriculum.",
};

const wistiaMediaId = "nm2ou94x6d";

function getPublishersMarkup() {
  const template = publishersTemplate;
  const styles = template.match(/<style>([\s\S]*?)<\/style>/)?.[1] ?? "";
  const body = template.match(/<body>([\s\S]*?)<\/body>/)?.[1] ?? "";

  const approvalCard = /<div class="approval-card"[\s\S]*?<div class="approval-meta">12 years in education<\/div>\s*<\/div>/;
  const video = `
    <div class="publisher-vsl" aria-label="Acquirely growth system video">
      <wistia-player media-id="${wistiaMediaId}" aspect="1.7777777777777777"></wistia-player>
    </div>`;

  const transformedBody = body
    .replace(
      '<a class="brand" href="#top">Acquirely<span class="dot">.</span></a>',
      `<a class="brand publisher-brand" href="#top"><img src="${acquirelyLogo.src}" alt="Acquirely" /></a>`,
    )
    .replace(
      `<div>
        <div class="big"><span>80%</span></div>
        <p class="cap">Your rep reached the school — but did your sample reach the decider, or get buried under 100 others?</p>
      </div>
      <div>
        <div class="bar">`,
      `<div>
        <p class="cap">Your rep reached the school — but did your sample reach the decider, or get buried under 100 others?</p>
      </div>
      <div>
        <div class="big"><span>80%</span></div>
        <div class="bar">`,
    )
    .replace(/<svg class="hero-education-visual"[\s\S]*?<\/svg>/, "")
    .replace(approvalCard, video)
    .replace(
      "The best book doesn't win the adoption. The one in front of the decider does.",
      "The best book doesn't win the adoption.<br> The one in front of the decider does.",
    )
    .replace('<rect x="40" y="46" width="213" height="150"', '<rect x="40" y="46" width="266.5" height="150"')
    .replace('<rect x="253" y="46" width="427" height="150"', '<rect x="306.5" y="46" width="373.5" height="150"')
    .replace('<line x1="253" y1="42" x2="253" y2="200"', '<line x1="306.5" y1="42" x2="306.5" y2="200"')
    .replace('<text x="146" y="34"', '<text x="173" y="34"')
    .replace('<text x="466" y="34"', '<text x="493" y="34"')
    .replace(
      '<svg viewBox="0 0 720 250" role="img" aria-label="Spend timeline across sampling and decision seasons">',
      '<svg viewBox="0 0 720 250" preserveAspectRatio="none" role="img" aria-label="Spend timeline across sampling and decision seasons">',
    )
    .replace(/<script>[\s\S]*?<\/script>/g, "");

  const [beforeFounders, foundersAndAfter = ""] = transformedBody.split("<!-- FOUNDERS -->");
  const [, afterFounders = foundersAndAfter] = foundersAndAfter.split("<!-- FAQ -->");

  return {
    styles: `${styles}
      .publishers-page .reveal { opacity: 1; transform: none; }
      .publishers-page .publisher-brand { display: inline-flex; align-items: center; }
      .publishers-page .publisher-brand img {
        display: block;
        width: 132px;
        height: auto;
        filter: brightness(0) saturate(100%) invert(16%) sepia(27%) saturate(1725%) hue-rotate(181deg) brightness(88%) contrast(96%);
      }
      .publishers-page .hero {
        min-height: auto;
        align-items: flex-start;
        padding-block: 1.5rem 3.5rem;
      }
      .publishers-page .hero h1 {
        font-size: clamp(2.7rem, 4.65vw, 4.35rem);
      }
      .publishers-page .hero .sub {
        font-size: 1rem;
        line-height: 1.55;
      }
      .publishers-page .trust {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: .7rem;
      }
      .publishers-page .trust .n { font-size: 1.3rem; }
      .publishers-page .trust .l { font-size: .68rem; line-height: 1.3; }
      .publishers-page section:nth-of-type(3) .center { max-width: 1120px; }
      .publishers-page section:nth-of-type(3) .center h2 {
        font-size: clamp(2.25rem, 4vw, 3.35rem);
      }
      .publishers-page .pairs {
        grid-template-columns: minmax(0, 1fr);
        max-width: 900px !important;
      }
      .publishers-page .waste .big { margin-bottom: .65rem; text-align: center; }
      .publishers-page .price .amt .anchor {
        color: #64748b;
        opacity: 1;
        text-decoration-color: #ef4444;
        text-decoration-thickness: 2px;
      }
      .publishers-page .price .amt .gst {
        color: #172554;
        opacity: 1;
      }
      .publishers-page section,
      .publishers-page section.dark,
      .publishers-page section.cream-2 {
        padding-block: 3.25rem !important;
      }
      .publishers-page section.hero {
        padding-block: 1.5rem 3.25rem !important;
      }
      .publishers-page section.publisher-founders {
        padding-block: 0 !important;
      }
      .publisher-vsl {
        width: min(520px, 88vw);
        overflow: hidden;
        border: 0;
        border-radius: 22px;
        background: #fff;
        box-shadow: none;
        transform: none;
      }
      .publisher-vsl wistia-player { display: block; width: 100%; }
      .publisher-vsl wistia-player:not(:defined) {
        background: center / cover no-repeat url('https://fast.wistia.com/embed/medias/${wistiaMediaId}/swatch');
        display: block;
        filter: blur(4px);
        padding-top: 56.25%;
      }
      @media (max-width: 840px) {
        .publishers-page section,
        .publishers-page section.dark,
        .publishers-page section.cream-2 { padding-block: 2.5rem !important; }
        .publishers-page section.hero { padding-block: 1.5rem 2.5rem !important; }
        .publishers-page .hero-grid { gap: 1.5rem; }
        .publishers-page .seal-wrap { min-height: auto; }
        .publisher-vsl { width: 92vw; max-width: 92vw; margin-inline: auto; transform: none; }
      }
      @media (max-width: 620px) {
        .publishers-page section,
        .publishers-page section.dark,
        .publishers-page section.cream-2 { padding-block: 2.25rem !important; }
        .publishers-page section.hero { padding-block: 1.25rem 2.25rem !important; }
        .publishers-page .publisher-brand img { width: 108px; }
        .publishers-page .hero-grid { gap: 1.25rem; }
        .publishers-page .hero h1 { font-size: clamp(2.15rem, 10vw, 3rem); }
        .publishers-page .hero .sub { font-size: .94rem; }
        .publishers-page .trust { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .publishers-page .tl {
          width: 100%;
          padding: .45rem;
          overflow: hidden;
        }
        .publishers-page .tl svg {
          display: block;
          width: 100%;
          min-width: 0 !important;
          height: 205px;
          margin-inline: auto;
        }
        .publishers-page .cms { padding: 1.35rem 1.15rem; }
        .publishers-page .cms .num { font-size: 2.75rem; }
        .publishers-page .cms .num small { font-size: .68rem; }
        .publishers-page .cms h3 { font-size: 1.05rem; }
        .publishers-page .cms p { font-size: .88rem; }
      }
    `,
    beforeFounders,
    afterFounders,
  };
}

export default function PublishersPage() {
  const { styles, beforeFounders, afterFounders } = getPublishersMarkup();

  return (
    <main className="publishers-page">
      <Script src="https://fast.wistia.com/player.js" strategy="afterInteractive" />
      <Script
        src={`https://fast.wistia.com/embed/${wistiaMediaId}.js`}
        strategy="afterInteractive"
        type="module"
      />
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div dangerouslySetInnerHTML={{ __html: beforeFounders }} />
      <section className="publisher-founders bg-white">
        <FounderShowcase />
      </section>
      <div dangerouslySetInnerHTML={{ __html: `<!-- FAQ -->${afterFounders}` }} />
    </main>
  );
}
