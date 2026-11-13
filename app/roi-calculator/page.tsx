import { Calculator } from "@/app/roi-calculator/_components/calculator/Calculator";
import { Guide } from "@/app/roi-calculator/_components/Guide";
import { ThemeToggle } from "@/app/roi-calculator/_components/ThemeToggle";
import Image from "next/image";
import { BASE_PATH, CONTACT_EMAIL, SITE_URL } from "@/app/roi-calculator/_lib/site";
import { faqJsonLd, pageJsonLd } from "@/app/roi-calculator/_lib/seo";

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
        <div className="nav-in">
          <a className="brand" href={`${SITE_URL}/`}><Logo /></a>
          <nav className="site-nav" aria-label="On this page">
            <ul>
              <li><a href="#calculator">Calculator</a></li>
              <li><a href="#how-to-calculate-roi">How it works</a></li>
              <li><a href="#roi-vs-roas">ROI vs ROAS</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <main id="main">
        <section className="hero" aria-labelledby="page-title">
          <div className="wrap">
            <span className="badge"><span className="badge-chip">Free tool</span>For <span className="hl">business owners</span> running Meta &amp; Google Ads</span>
            <h1 id="page-title"><span className="grad">ROI Calculator</span> for Business Owners</h1>
            <p className="sub">Find out if your Meta and Google Ads are <strong>really making you money</strong>, after <a href="#what-calculators-miss">sales salaries and office costs</a> that most ROI calculators skip. Works for one-time and <a href="#recurring">recurring payments</a>, from the <a href={`${SITE_URL}/lead-gen`}>lead generation</a> team at Acquirely.</p>
            <div className="cta-row">
              <ul className="trust">
                <li><Check />Free, no signup</li>
                <li><Check />Takes 1 minute</li>
                <li><Check />Your numbers stay on your device</li>
              </ul>
            </div>
          </div>
        </section>

        <Calculator />

        <Guide />
      </main>

      <footer className="site-footer">
        <div className="wrap foot-in">
          <a className="brand" href={`${SITE_URL}/`}><Logo white /></a>
          <p><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> <span aria-hidden="true">·</span> © {new Date().getFullYear()} Acquirely</p>
        </div>
      </footer>
    </>
  );
}
