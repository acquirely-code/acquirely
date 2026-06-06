import React from 'react';

// --- Icon Components (Matching the design) ---
const QuoteIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.6667 23.3333C16.6667 27.0152 13.6819 30 10 30C6.3181 30 3.33333 27.0152 3.33333 23.3333C3.33333 19.6514 6.3181 16.6667 10 16.6667H11.6667V10H16.6667V23.3333Z" stroke="#F64C00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M36.6667 23.3333C36.6667 27.0152 33.6819 30 30 30C26.3181 30 23.3333 27.0152 23.3333 23.3333C23.3333 19.6514 26.3181 16.6667 30 16.6667H31.6667V10H36.6667V23.3333Z" stroke="#F64C00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ShieldIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    <path d="m9 12 2 2 4-4"></path>
  </svg>
);

const FlaskIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 3h6"></path>
    <path d="M10 9l-6 8a2 2 0 0 0 1.5 3.5h13a2 2 0 0 0 1.5-3.5l-6-8V3"></path>
    <path d="M14 14h-4"></path>
  </svg>
);

const LayersIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
    <polyline points="2 17 12 22 22 17"></polyline>
    <polyline points="2 12 12 17 22 12"></polyline>
  </svg>
);

const EyeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

export default function MiddleSections() {
  return (
    <div className="flex flex-col w-full font-sans">
      
      {/* =========================================
          SECTION 1: WHY WE EXIST
          ========================================= */}
      <section className="flex w-full flex-col items-center justify-center bg-white py-16 lg:py-[100px] px-5">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-12 lg:flex-row lg:items-center lg:gap-16 xl:gap-24">
          
          {/* Left Text Content */}
          <div className="flex w-full flex-1 flex-col items-start lg:max-w-[600px]">
            <span className="font-Montserrat text-[12px] font-semibold uppercase tracking-[1.5px] text-[#2B7FFF]">
              Why We Exist
            </span>
            <h2 className="mt-4 font-Montserrat text-[32px] md:text-[40px] lg:text-[44px] font-bold leading-[1.2] tracking-[-0.9px] text-[#09090B]">
              We've Been in Your Shoes. We Know What's Missing.
            </h2>
            <div className="mt-6 flex flex-col gap-5 font-opensans text-[15px] md:text-[16px] leading-[26px] text-[#71717B]">
              <p>
                While leading marketing for UMG and scaling Propel's Immersion conference, we saw firsthand how many agencies overpromise and underdeliver.
              </p>
              <p>
                That's why we built a performance marketing agency 'ACQUIRELY' focused on accountability, transparency, and real results.
              </p>
            </div>
          </div>

          {/* Right Quote Box */}
          <div className="w-full lg:w-[540px] xl:w-[600px] shrink-0">
            <div className="flex flex-col justify-center rounded-[24px] bg-gradient-to-br from-[#0D1528] to-[#22224F] p-8 md:p-12 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] relative overflow-hidden border border-white/5">
              
              {/* Subtle inner highlight */}
              <div className="absolute inset-0 bg-white/[0.02] mix-blend-overlay"></div>
              
              <div className="relative z-10 flex flex-col">
                <div className="mb-6">
                  <QuoteIcon />
                </div>
                
                <h3 className="font-Montserrat text-[20px] md:text-[24px] font-semibold leading-[34px] text-[#EFF6FF]">
                  "We couldn't find an agency we'd trust with our own money. So we built one."
                </h3>
                
                <hr className="my-8 w-full border-t border-white/10" />
                
                <div className="flex flex-col">
                  <span className="font-Montserrat text-[16px] font-semibold text-[#EFF6FF]">
                    Mausam Arora
                  </span>
                  <span className="mt-1 font-opensans text-[14px] text-white/60">
                    Founder, Acquirely
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          SECTION 2: WHAT MAKES US DIFFERENT
          ========================================= */}
      <section className="flex w-full flex-col items-center justify-center bg-[#F4F4F5] py-16 lg:py-[100px] px-5">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center">
          
          {/* Header Content */}
          <div className="flex flex-col items-center text-center max-w-[700px]">
            <h2 className="font-Montserrat text-[32px] md:text-[36px] font-bold leading-[1.1] tracking-[-0.9px] text-[#09090B]">
              What Makes Us Different
            </h2>
            <h3 className="mt-3 font-Montserrat text-[18px] md:text-[20px] font-semibold text-[#2B7FFF]">
              We Think Like Founders, Not Account Managers
            </h3>
            <p className="mt-4 font-opensans text-[15px] md:text-[16px] leading-[24px] text-[#71717B]">
              Every decision we make is one we'd make if it were our own money at stake.
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="mt-12 grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1 */}
            <div className="flex flex-col rounded-2xl bg-white p-6 md:p-8 shadow-sm transition-shadow hover:shadow-md border border-[#E4E4E7]/50">
              <div className="mb-5 flex h-[44px] w-[44px] items-center justify-center rounded-xl bg-[#2B7FFF]/10 text-[#356DFF]">
                <ShieldIcon />
              </div>
              <h4 className="mb-3 font-Montserrat text-[18px] font-bold text-[#09090B]">
                We Take Ownership
              </h4>
              <div className="flex flex-col gap-2 font-opensans text-[14px] leading-[20px] text-[#71717B]">
                <p>We focus on business outcomes, not vanity metrics.</p>
                <p>When results need improvement, we act.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col rounded-2xl bg-white p-6 md:p-8 shadow-sm transition-shadow hover:shadow-md border border-[#E4E4E7]/50">
              <div className="mb-5 flex h-[44px] w-[44px] items-center justify-center rounded-xl bg-[#F64C00]/10 text-[#F64C00]">
                <FlaskIcon />
              </div>
              <h4 className="mb-3 font-Montserrat text-[18px] font-bold text-[#09090B]">
                We Test With Purpose
              </h4>
              <div className="flex flex-col gap-2 font-opensans text-[14px] leading-[20px] text-[#71717B]">
                <p>Every creative, audience, and offer is tested with a clear objective.</p>
                <p>Data drives every decision.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col rounded-2xl bg-white p-6 md:p-8 shadow-sm transition-shadow hover:shadow-md border border-[#E4E4E7]/50">
              <div className="mb-5 flex h-[44px] w-[44px] items-center justify-center rounded-xl bg-[#2B7FFF]/10 text-[#356DFF]">
                <LayersIcon />
              </div>
              <h4 className="mb-3 font-Montserrat text-[18px] font-bold text-[#09090B] leading-[24px]">
                We Build Systems, Not Campaigns
              </h4>
              <div className="flex flex-col gap-2 font-opensans text-[14px] leading-[20px] text-[#71717B]">
                <p>Our process turns winning tests into scalable growth.</p>
                <p>Performance improves month after month.</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col rounded-2xl bg-white p-6 md:p-8 shadow-sm transition-shadow hover:shadow-md border border-[#E4E4E7]/50">
              <div className="mb-5 flex h-[44px] w-[44px] items-center justify-center rounded-xl bg-[#F64C00]/10 text-[#F64C00]">
                <EyeIcon />
              </div>
              <h4 className="mb-3 font-Montserrat text-[18px] font-bold text-[#09090B] leading-[24px]">
                We're Radically Transparent
              </h4>
              <div className="flex flex-col gap-2 font-opensans text-[14px] leading-[20px] text-[#71717B]">
                <p>Full visibility into your spend, performance, and strategy.</p>
                <p>No black-box reporting. Ever.</p>
              </div>
            </div>

          </div>

          {/* Bottom Summary Text */}
          <div className="mt-12 text-center font-Montserrat text-[16px] md:text-[18px] font-medium text-[#09090B]">
            That's what makes us a different kind of performance marketing company.
          </div>

        </div>
      </section>

    </div>
  );
}