import Image from "next/image";
import { Calculator } from "./_components/Calculator";
import { Guide } from "./_components/Guide";
import { faqJsonLd, pageJsonLd } from "./_lib/seo";

const jsonLd = (data: object) => ({ __html: JSON.stringify(data).replace(/</g, "\\u003c") });

export default function RoiCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(pageJsonLd)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqJsonLd)} />

      <a className="skip-link" href="#calculator">Skip to calculator</a>

      <header className="site-header">
        <div className="wrap nav-in">
          <a className="brand" href="/" aria-label="Acquirely home">
            <Image src="/ecommerce-calculator/assets/acquirely-logo.webp" alt="Acquirely" width={386} height={90} unoptimized priority />
          </a>
          <nav className="site-nav" aria-label="Calculator navigation">
            <ul>
              <li><a href="#calculator">Calculator</a></li>
              <li><a href="#how-to-calculate-roi">How it works</a></li>
              <li className="opt"><a href="#roi-vs-roas">ROI vs ROAS</a></li>
              <li className="opt"><a href="#faq">FAQ</a></li>
            </ul>
          </nav>
          <a className="btn btn-sm" href="/ecommerce-calculator">Ecommerce calculator</a>
        </div>
      </header>

      <main id="main">
        <section className="hero" aria-labelledby="page-title">
          <div className="wrap">
            <span className="eyebrow">Free tool for business owners</span>
            <h1 id="page-title"><span className="grad">ROI Calculator</span> for Business Owners</h1>
            <p className="sub">
              See whether Meta and Google Ads are making you money after sales salaries and office costs.
              Account for one-time or recurring payments and get your results in seconds.
            </p>
            <div className="cta-row">
              <a className="btn btn-lg" href="#calculator">Calculate my ROI <span aria-hidden="true">↓</span></a>
              <ul className="trust">
                <li>Free, no signup</li>
                <li>Takes about 1 minute</li>
                <li>Your numbers stay on your device</li>
              </ul>
            </div>
          </div>
        </section>

        <Calculator />
        <Guide />
      </main>

      <footer className="site-footer">
        <div className="wrap foot-in">
          <a className="brand" href="/" aria-label="Acquirely home">
            <Image src="/ecommerce-calculator/assets/acquirely-logo-white.webp" alt="Acquirely" width={386} height={90} unoptimized />
          </a>
          <p><a href="/ecommerce-calculator">Ecommerce profit calculator</a> · © {new Date().getFullYear()} Acquirely</p>
        </div>
      </footer>
    </>
  );
}
