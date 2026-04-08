"use client";
import Link from "next/link";

export default function CtaBreakPastSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="bg-[#101828] mt-4 pt-28 pb-8 text-center relative">
      <div className="mx-auto max-w-[1024px] px-4">
        {/* Main Heading */}
        <h2 className="font-Montserrat md:text-[48px] text-[32px] md:leading-[58px] leading-8 tracking-[-1px] text-white">
          Ready to Break Past
          <br />
          {/* Apply Gradient to the specific text */}
          <span className="bg-gradient-to-r from-[#818CF8] font-Montserrat to-[#F97316] bg-clip-text text-transparent">
            ₹3L per Month?
          </span>
        </h2>

        {/* Supporting Text */}
        <p className="mx-auto font-opensans mt-6 max-w-[600px] text-[18px] leading-6 text-[#A3A3A3]">
          If you&apos;re serious about building a predictable revenue engine with
          scalable Meta Ads, let&apos;s talk.
        </p>

        {/* CTA Button */}
        <div className="mt-12 flex items-center justify-center gap-2">
          <Link
            target="_blank"
            href="https://forms.acquirely.in/acquirely/form/AcquirelyLeads/formperma/2doC7L65w0M6PnuFIVX6g4BgwS3fzMDJYLwncK3fEeo"
          >
            <button className="flex items-center gap-2.5 rounded border-2 border-white bg-white px-6 py-3.5 shadow-[0_4px_18px_rgba(15,23,42,0.1)] transition hover:bg-white/90">
              <span className="font-Montserrat md:text-[18px] text-[12px] font-bold leading-6 text-[#101828]">
                Book Your Growth Diagnosis Call
              </span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#101828]"
              >
                <path
                  d="M1 8H15M15 8L8 1M15 8L8 15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </Link>
        </div>

        {/* Footer Section */}
        <div className="md:mt-24 mt-12 border-t border-white/20 pt-8 flex flex-col gap-6">
          
          {/* Top Row: Copyright & Links */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-left">
            
            {/* Left: Copyright */}
            <div className="text-[14px] text-white/90 order-2 md:order-1">
              © 2026 Acquirely. All rights reserved.
            </div>

            {/* Right: Links & Scroll to Top */}
            <div className="flex flex-col sm:flex-row items-center gap-6 order-1 md:order-2 text-[14px] text-white/90">
              <div className="flex items-center gap-2">
                <Link href="#" className="hover:text-white transition">
                  Privacy Policy
                </Link>
                <span className="text-white/50">|</span>
                <Link href="#" className="hover:text-white transition">
                  Terms & Conditions
                </Link>
                <span className="text-white/50">|</span>
                <Link href="#" className="hover:text-white transition">
                  Contact Us
                </Link>
              </div>

              {/* Scroll to top button */}
              <button
                onClick={scrollToTop}
                className="hidden md:flex h-[42px] w-[42px] items-center justify-center rounded-full bg-white text-[#101828] shadow-lg transition hover:bg-gray-200 ml-4"
                aria-label="Scroll to top"
              >
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="m18 15-6-6-6 6"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Bottom Row: Powered By in the Right Corner */}
          <div className="flex justify-center md:justify-end mt-2 md:mt-0">
            <p className="font-open-sans text-[13px] tracking-wide text-[#4B5563]">
              Powered by{" "}
              <a
                href="https://saasscale.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#818CF8] transition-colors hover:text-[#F97316]"
              >
                ScaleSaaS
              </a>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}