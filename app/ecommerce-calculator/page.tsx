import { Calculator } from "@/app/ecommerce-calculator/_components/calculator/Calculator";
import { CtaLink } from "@/app/ecommerce-calculator/_components/CtaLink";
import { Guide } from "@/app/ecommerce-calculator/_components/Guide";
import Image from "next/image";
import { BASE_PATH, CONTACT_EMAIL, SITE_URL } from "@/app/ecommerce-calculator/_lib/site";
import { faqJsonLd, pageJsonLd } from "@/app/ecommerce-calculator/_lib/seo";

// Logo WebPs are 386×90 (3× the 30px display height). basePath isn't added to next/image src automatically.
const Logo = ({ white = false }: { white?: boolean }) => (
  <Image
    src={`${BASE_PATH}/assets/acquirely-logo${white ? "-white" : ""}.webp`}
    alt="Acquirely"
    width={386}
    height={90}
    unoptimized
    priority={!white}
  />
);

const Check = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

/** JSON-LD is built from our own constants; escape "<" so it can never close the script tag. */
const jsonLd = (data: object) => ({ __html: JSON.stringify(data).replace(/</g, "\\u003c") });

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(pageJsonLd)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqJsonLd)} />

      <a className="skip-link" href="#calculator">Skip to calculator</a>

      <header className="site-header">
        <div className="wrap nav-in">
          <a className="brand" href={`${SITE_URL}/`}><Logo /></a>
          <nav className="site-nav" aria-label="On this page">
            <ul>
              <li><a href="#calculator">Calculator</a></li>
              <li className="opt"><a href="#how-it-works">How it works</a></li>
              <li className="opt"><a href="#break-even-cpa">Break-even CPA</a></li>
              <li className="opt"><a href="#faq">FAQ</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero" aria-labelledby="page-title">
          <div className="wrap">
            <span className="eyebrow">Free tool for COD &amp; prepaid sellers</span>
            <h1 id="page-title">Ecommerce <span className="grad">Profit &amp; ROI</span> Calculator</h1>
            <p className="sub">Calculate your ecommerce profit, margins, ROAS, <a href="#rto">RTO costs</a> and <a href="#break-even-cpa">break-even CPA</a> before scaling your campaigns. Built for <a href="#cod-vs-prepaid">COD and prepaid</a> orders.</p>
            <div className="cta-row">
              <CtaLink className="btn btn-lg" href="#calculator" cta="hero">Calculate My Profit <span aria-hidden="true">↓</span></CtaLink>
              <ul className="trust">
                <li><Check />Free calculator. No signup required.</li>
                <li><Check />Runs in your browser. Your numbers stay on your device.</li>
              </ul>
            </div>
          </div>
        </section>

        <Calculator />

        <Guide />
      </main>

      <footer className="site-footer">
        <div className="wrap foot-in">
          <p className="brand"><Logo white /></p>
          <p><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> <span aria-hidden="true">·</span> <a href={`${SITE_URL}/`}>acquirely.in</a></p>
        </div>
      </footer>
    </>
  );
}
