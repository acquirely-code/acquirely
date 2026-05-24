import React from 'react';
import Link from 'next/link';

// --- SVG Asset Components ---
const CheckSquareIcon = () => (
  <div className="flex items-center justify-center w-10 h-10 bg-[#022C22] border border-[#047857] rounded-[4px] shrink-0">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  </div>
);

const XSquareIcon = () => (
  <div className="flex items-center justify-center w-10 h-10 bg-[#450A0A] border border-[#991B1B] rounded-[4px] shrink-0">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F87171" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  </div>
);

const ListCheckIcon = () => (
  <div className="flex items-center justify-center w-5 h-5 bg-[#022C22] border border-[#047857] rounded-full shrink-0 mt-[2px]">
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  </div>
);

const ListXIcon = () => (
  <div className="flex items-center justify-center w-5 h-5 bg-[#450A0A] border border-[#991B1B] rounded-full shrink-0 mt-[2px]">
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#F87171" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  </div>
);

const BlockmarkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

// --- Main Component ---
export default function QualificationSection() {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-8 font-sans">
      <div className="max-w-[1080px] mx-auto flex flex-col items-center">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-[40px] font-extrabold leading-tight mb-4 font-['Montserrat']">
            <span className="bg-gradient-to-r from-[#818CF8] to-[#F97316] text-transparent bg-clip-text">
              Who This Is For
            </span>
            <span className="text-black"> And Who It Isn't</span>
          </h2>
          <p className="text-[#7B8BA0] text-[18px] font-['Open_Sans']">
            'This is not for the beginners, but for the growth-focused brands
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          
          {/* Green Card - "This Is For You" */}
          <div className="bg-[#F1FBF8] border border-[#065F46] rounded-[14px] p-6 md:p-8 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-8">
              <CheckSquareIcon />
              <div>
                <h3 className="text-black text-xl font-bold font-['Montserrat'] leading-tight">This Is For You</h3>
                <p className="text-[#059669] text-xs font-semibold uppercase tracking-[0.6px] mt-1">You're the right fit</p>
              </div>
            </div>

            <ul className="flex flex-col gap-[22px] mb-8 flex-grow">
              {[
                "Spending ₹3L+ per month on Meta Ads",
                "Growth has plateaued while scaling",
                "ROAS fluctuates unpredictably",
                "Your current agency runs ads but doesn't build growth systems",
                "You want a structured performance marketing strategy"
              ].map((text, index) => (
                <li key={index} className="flex items-start gap-3">
                  <ListCheckIcon />
                  <span className="text-black text-[14px] leading-[20px] font-semibold font-['Open_Sans']">{text}</span>
                </li>
              ))}
            </ul>
<Link href="https://forms.acquirely.in/acquirely/form/FunnelReviewCallECom/formperma/muJYVHXbKDbQ7N3xEPr_lrjkOuBMe33JPNULGFJm9Kg">
            <button className="w-full bg-[#059669] hover:bg-[#047857] transition-colors text-white text-[14px] font-bold py-3.5 rounded-md flex items-center justify-center font-['Inter']">
              Yes, I'm Ready — Apply Now <ArrowRightIcon />
            </button>
</Link>
          </div>

          {/* Red Card - "Not For You" */}
          <div className="bg-[#FEF5F5] border border-[#F87171] rounded-[14px] p-6 md:p-8 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-8">
              <XSquareIcon />
              <div>
                <h3 className="text-black text-xl font-bold font-['Montserrat'] leading-tight">Not For You</h3>
                <p className="text-[#F87171] text-xs font-semibold uppercase tracking-[0.6px] mt-1">Please don't apply</p>
              </div>
            </div>

            <ul className="flex flex-col gap-[22px] mb-8 flex-grow">
              {[
                "Just launching your brand",
                "Still testing product-market fit",
                "Looking for the cheapest agency",
                "Not ready for aggressive scaling",
                "Expecting instant results without data"
              ].map((text, index) => (
                <li key={index} className="flex items-start gap-3">
                  <ListXIcon />
                  <span className="text-black text-[14px] leading-[20px] font-semibold font-['Open_Sans']">{text}</span>
                </li>
              ))}
            </ul>

            <button disabled className="w-full border border-[#94A3B8] text-[#94A3B8] bg-transparent text-[14px] font-semibold py-3.5 rounded-md flex items-center justify-center cursor-not-allowed font-['Inter']">
              <BlockmarkIcon /> This Program Is Not For You
            </button>
          </div>

        </div>

        {/* Bottom CTA Nudge */}
        <p className="text-[#94A3B8] text-[14px] mt-8 text-center font-['Inter']">
          Not sure if you qualify? <a href="#apply" className="text-[#818CF8] hover:underline transition-all">Apply anyway</a> — we'll let you know within 24 hours.
        </p>

      </div>
    </section>
  );
}