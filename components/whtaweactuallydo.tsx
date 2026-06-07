import React from 'react';

// --- Shared Sub-components for cleaner code ---

interface StepHeaderProps {
  number: string;
  title: string;
  colorClass: string;
}

const StepHeader: React.FC<StepHeaderProps> = ({ number, title, colorClass }) => (
  <div className="flex flex-row items-center w-full gap-4 mb-2">
    <div className={`flex items-center justify-center w-8 h-8 rounded text-white font-montserrat font-bold text-[13px] ${colorClass}`}>
      {number}
    </div>
    <h3 className="font-Montserrat font-bold text-[18px] text-[#09090B] tracking-[-0.3px]">
      {title}
    </h3>
    <div className="flex-1 h-[1px] bg-[#E4E4E7] ml-2" />
  </div>
);

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBgClass: string;
  iconColorClass: string;
}

const FeatureCard: React.FC<CardProps> = ({ icon, title, description, iconBgClass, iconColorClass }) => (
  <div className="flex flex-col p-6 gap-4 bg-white rounded-xl border border-[#E4E4E7]/60 shadow-[0px_2px_12px_rgba(0,0,0,0.03)] h-full">
    {/* Icon and Title Row */}
    <div className="flex flex-row items-center gap-4">
      <div className={`flex items-center justify-center w-12 h-12 rounded-sm ${iconBgClass} ${iconColorClass}`}>
        {icon}
      </div>
      <h4 className="font-montserrat font-bold text-[16px] text-[#09090B]">
        {title}
      </h4>
    </div>
    {/* Description */}
    <p className="font-sans text-[14px] leading-[22px] text-[#71717B]">
      {description}
    </p>
  </div>
);

const DownArrow = () => (
  <div className="flex justify-center w-full py-2">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A1A1AA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5v14M19 12l-7 7-7-7" />
    </svg>
  </div>
);

// --- Main Component ---

export default function WhatWeActuallyDo() {
  return (
    <section className="flex flex-col items-center justify-center w-full py-[60px]">
      <div className="flex flex-col items-center w-full max-w-[1024px] px-5 gap-[56px]">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center gap-4 text-center max-w-[672px]">
          <span className="font-inter font-bold text-[12px] text-[#2B7FFF] tracking-[1.5px] uppercase">
            What We Actually Do
          </span>
          <h2 className="font-Montserrat font-bold text-[36px] text-[#09090B] tracking-[-0.9px] leading-[40px]">
            What We Actually Do
          </h2>
          <p className="font-opensans text-[16px] leading-[26px] text-[#71717B] max-w-[580px]">
            Most agencies run campaigns. We, as a Performance Marketing Agency, build the full growth system from creative testing to funnel to scale.
          </p>
        </div>

        <div className="flex flex-col items-start w-full gap-[8px]">
          
          {/* 01 Paid Ads Section */}
          <div className="flex flex-col w-full gap-4">
            <StepHeader number="01" title="Paid Ads" colorClass="bg-[#2B7FFF]" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              <FeatureCard 
                iconBgClass="bg-[#F0F6FF]"
                iconColorClass="text-[#2B7FFF]"
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"></rect><rect x="14" y="3" width="7" height="7" rx="1.5"></rect><rect x="14" y="14" width="7" height="7" rx="1.5"></rect><rect x="3" y="14" width="7" height="7" rx="1.5"></rect></svg>
                }
                title="Meta Ads Management"
                description="We test different audiences, offers, and ads to find what works best for your brand. Your budget goes into proven campaigns, not guesswork."
              />
              <FeatureCard 
                iconBgClass="bg-[#F0F6FF]"
                iconColorClass="text-[#2B7FFF]"
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                }
                title="Google Ads Management"
                description="We test different audiences, offers, and ads to find what works best for your brand. Your budget goes into proven campaigns, not guesswork."
              />
              <FeatureCard 
                iconBgClass="bg-[#F0F6FF]"
                iconColorClass="text-[#2B7FFF]"
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                }
                title="Social Media Management"
                description="We turn your social media into a growth channel, not just a posting schedule. Consistent content helps build trust and engagement."
              />
            </div>
          </div>

          <DownArrow />

          {/* 02 Funnel Section */}
          <div className="flex flex-col w-full gap-4">
            <StepHeader number="02" title="Funnel" colorClass="bg-[#F37513]" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <FeatureCard 
                iconBgClass="bg-[#FFF4ED]"
                iconColorClass="text-[#F37513]"
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
                }
                title="Funnel Optimisation"
                description="We identify where visitors drop off and fix the gaps. A smoother customer journey leads to more conversions."
              />
              <FeatureCard 
                iconBgClass="bg-[#FFF4ED]"
                iconColorClass="text-[#F37513]"
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                }
                title="Conversion Improvements"
                description="We optimise pages, offers, and trust signals to improve conversions. More visitors become customers without increasing ad spend."
              />
            </div>
          </div>

          <DownArrow />

          {/* 03 Scale Section */}
          <div className="flex flex-col w-full gap-4">
            <StepHeader number="03" title="Scale" colorClass="bg-[#2B7FFF]" />
            <div className="w-full">
              <FeatureCard 
                iconBgClass="bg-[#2B7FFF]"
                iconColorClass="text-white"
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
                }
                title="Ad Creatives Strategy & Testing"
                description="We test multiple creatives regularly to identify top-performing ads. Winning creatives are scaled to drive better results."
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}