import React from 'react';
import {
  Gauge,
  Building2,
  Crown,
  Palette
} from "lucide-react";
import Link from 'next/link';


// --- Reusable Icon Components ---

const CheckCircleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F37513" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

// --- Main Component ---

export default function ResultsAndCTASection() {
  return (
    <div className="w-full flex flex-col font-sans">
      
      {/* =========================================
          SECTION 1: WHAT YOU ACTUALLY GET (DARK)
          ========================================= */}
      <section className="flex flex-col items-center w-full py-[80px] px-5 bg-[#0A0F1A]">
        <div className="flex flex-col items-center w-full max-w-[1024px] gap-[48px]">
          
          {/* Header */}
          <div className="flex flex-col items-center text-center gap-3">
            <h2 className="font-Montserrat font-bold text-[36px] text-white tracking-[-0.5px]">
              What You Actually Get
            </h2>
            <p className="font-medium text-[16px] text-[#F37513]">
              Proven Results. Real Revenue.
            </p>
            <p className="text-[14px] text-[#8B92A5]">
              No vanity metrics. No guesswork. Just real numbers.
            </p>
          </div>

          {/* Metric Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {/* Card 1 */}
            <div className="flex flex-col p-6 bg-[#161B26] rounded-xl border border-white/5">
            <Gauge className="text-[#F37513]" />
            <h3 className="font-Montserrat font-bold text-[32px] text-white mb-2">4.68x</h3>
              <p className="text-[13px] leading-[20px] text-[#8B92A5]">Highest ROAS achieved in 90 days</p>
            </div>
            
            {/* Card 2 */}
            <div className="flex flex-col p-6 bg-[#161B26] rounded-xl border border-white/5">
                <Building2 className="text-[#2B7FFF]" />
              <h3 className="font-Montserrat font-bold text-[32px] text-white mb-2">50+</h3>
              <p className="text-[13px] leading-[20px] text-[#8B92A5]">D2C brands scaled successfully</p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col p-6 bg-[#161B26] rounded-xl border border-white/5">
              <svg className="mb-4" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F37513" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
              <h3 className="font-Montserrat font-bold text-[32px] text-white mb-2">35%</h3>
              <p className="text-[13px] leading-[20px] text-[#8B92A5]">Average conversion rate improvement</p>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col p-6 bg-[#161B26] rounded-xl border border-white/5">
              <svg className="mb-4" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2B7FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <h3 className="font-Montserrat font-bold text-[32px] text-white mb-2">90 Days</h3>
              <p className="text-[13px] leading-[20px] text-[#8B92A5]">Average time to significant ROAS growth</p>
            </div>
          </div>

        </div>
      </section>


      {/* =========================================
          SECTION 2: STRATEGIC OUTCOMES (LIGHT)
          ========================================= */}
      <section className="flex flex-col items-center w-full py-[80px] px-5 bg-white">
        <div className="flex flex-col items-center w-full max-w-[1024px] gap-[48px]">
          
          {/* Header */}
          <div className="flex flex-col items-center text-center gap-3">
            <span className="font-inter font-bold text-[12px] text-[#2B7FFF] tracking-[1.5px] uppercase">
              Business Outcomes
            </span>
            <h2 className="font-Montserrat font-bold text-[32px] text-[#09090B] tracking-[-0.5px]">
              Strategic Outcomes That Compound
            </h2>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {/* Feature 1 */}
            <div className="flex flex-col p-6 bg-white rounded-xl border border-[#E4E4E7]/60 shadow-sm">
              <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#F0F6FF] text-[#2B7FFF] mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
              </div>
              <h4 className="font-montserrat font-bold text-[15px] text-[#09090B] mb-2">Predictable ROAS</h4>
              <p className="text-[13px] leading-[20px] text-[#71717B]">Know where your returns are heading before scaling budgets.</p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col p-6 bg-white rounded-xl border border-[#E4E4E7]/60 shadow-sm">
              <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#F0F6FF] text-[#2B7FFF] mb-4">
                <Palette/>
              </div>
              <h4 className="font-montserrat font-bold text-[15px] text-[#09090B] mb-2">Scalable creatives</h4>
              <p className="text-[13px] leading-[20px] text-[#71717B]">Fresh ad creatives tested every month to find new winners.</p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col p-6 bg-white rounded-xl border border-[#E4E4E7]/60 shadow-sm">
              <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#F0F6FF] text-[#2B7FFF] mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              </div>
              <h4 className="font-montserrat font-bold text-[15px] text-[#09090B] mb-2">Full Transparency</h4>
              <p className="text-[13px] leading-[20px] text-[#71717B]">Get clear reports and live performance tracking.</p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col p-6 bg-white rounded-xl border border-[#E4E4E7]/60 shadow-sm">
              <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#F0F6FF] text-[#2B7FFF] mb-4">
                <Crown/>
              </div>
              <h4 className="font-montserrat font-bold text-[15px] text-[#09090B] mb-2">Path to ₹1Cr/Month</h4>
              <p className="text-[13px] leading-[20px] text-[#71717B]">A structured growth framework built for long-term scaling.</p>
            </div>
          </div>

        </div>
      </section>


      {/* =========================================
          SECTION 3: CTA BLOCK (DARK)
          ========================================= */}
      <section className="flex flex-col items-center w-full pb-[100px] pt-[20px] px-5 bg-white">
        <div className="flex flex-col lg:flex-row w-full max-w-[1024px] bg-[#161C28] rounded-2xl overflow-hidden shadow-2xl">
          
          {/* Left Side - Content */}
          <div className="flex flex-col flex-1 p-8 md:p-12 justify-center">
            <h2 className="font-Montserrat font-bold text-[28px] md:text-[32px] leading-[38px] text-white mb-4 max-w-[400px]">
              Ready to Grow Without Guesswork?
            </h2>
            <p className="text-[15px] text-[#8B92A5] mb-8 max-w-[380px]">
              Partner with a performance marketing agency that focuses on real business outcomes.
            </p>
            
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3 text-[14px] text-white/90">
                <CheckCircleIcon /> Free funnel & ad account audit
              </li>
              <li className="flex items-center gap-3 text-[14px] text-white/90">
                <CheckCircleIcon /> 30-minute strategy call, no obligation
              </li>
              <li className="flex items-center gap-3 text-[14px] text-white/90">
                <CheckCircleIcon /> Custom ROAS projection for your brand
              </li>
            </ul>
          </div>

          {/* Right Side - Action Box */}
          <div className="flex flex-col flex-1 p-8 md:p-12 justify-center bg-[#1D2433]/40 border-t lg:border-t-0 lg:border-l border-white/5">
            <span className="font-inter font-bold text-[11px] text-[#2B7FFF] tracking-[1.5px] uppercase mb-3">
              Growth Audit
            </span>
            <h3 className="font-Montserrat font-bold text-[22px] text-white mb-6">
              Book your strategy session
            </h3>
            <Link href="https://forms.acquirely.in/acquirely/form/FunnelReviewCallECom/formperma/muJYVHXbKDbQ7N3xEPr_lrjkOuBMe33JPNULGFJm9Kg">
            <button className="w-full bg-[#2B7FFF] hover:bg-[#206CE0] transition-colors duration-200 text-white font-semibold text-[15px] py-4 rounded-lg flex items-center justify-center gap-2 mb-4">
              Book Your Free Call!
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </button>
            </Link>
            
            <div className="flex items-center justify-center gap-2 text-[#8B92A5] text-[12px]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              Usually responded to within 24 hours
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}