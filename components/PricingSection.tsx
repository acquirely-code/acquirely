import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const inHouseRoles = [
  { role: "Meta Performance Marketer", cost: "₹80K" },
  { role: "Creative Strategist", cost: "₹60K" },
  { role: "Video Editor", cost: "₹40K" },
  { role: "Graphic Designer", cost: "₹40K" },
];

const additionalFeatures = [
  "A proven scaling\nframework",
  "A structured creative\ntesting system",
  "Performance optimisation\nworkflows",
];

export default function PricingSection() {
  return (
    <section className="bg-white px-4 py-8 font-sans md:py-16 lg:py-24">
      <div className="mx-auto max-w-[866px]">
        
        {/* Header Section */}
        <div className="mb-8 text-center md:mb-12">
          <div className="inline-flex h-[30px] items-center gap-2 rounded-[4px] border border-[#CFD5FD] bg-[#EDEFFF] px-3 md:h-[34px]">
            <span className="h-2 w-2 rounded-full bg-[#5332E2]" />
            <span className="text-[10px] font-semibold uppercase tracking-[1.2px] text-[#5332E2] md:text-[12px]">
              Pricing
            </span>
          </div>

          <h2 className="mt-4 font-Montserrat text-[28px] font-bold leading-tight tracking-tight md:mt-6 md:text-[36px] lg:text-[40px]">
            <span className="bg-[linear-gradient(90deg,#818CF8_0%,#F97316_100%)] bg-clip-text text-transparent">
              Transparent, Performance-
            </span>
            <br className="block sm:hidden" />
            <span className="text-black">Aligned Pricing</span>
          </h2>

          <p className="mx-auto mt-3 max-w-[663px] font-opensans text-[15px] leading-[24px] text-[#7B8BA0] md:mt-4 md:text-[18px] md:leading-[28px]">
            Both plans include the full A3 Flywheel system. The difference is how fast you
            want to move and how much direct support you need.
          </p>
        </div>

        {/* Top Price Cards */}
        <div className="mb-10 grid gap-4 sm:grid-cols-2 md:mb-12 md:gap-6">
          <div className="flex flex-col items-center justify-center rounded-[8px] bg-[#F4F7FF] px-4 py-8 text-center md:px-6 md:py-10">
            <p className="mb-1 text-[14px] text-[#7B8BA0] md:mb-2 md:text-[18px]">For ₹3L–₹10L ad spend</p>
            <p className="mb-1 text-[32px] font-bold leading-tight text-black md:mb-2 md:text-[45px] md:leading-[45px]">₹75,000</p>
            <p className="text-[16px] text-[#7B8BA0] md:text-[24px]">+ GST</p>
          </div>
          
          <div className="flex flex-col items-center justify-center rounded-[8px] bg-[#F0FFF5] px-4 py-8 text-center md:px-6 md:py-10">
            <p className="mb-1 text-[14px] text-[#7B8BA0] md:mb-2 md:text-[18px]">For ₹10L+ ad spend</p>
            <p className="mb-1 text-[32px] font-bold leading-tight text-black md:mb-2 md:text-[45px] md:leading-[45px]">10%</p>
            <p className="text-[16px] text-[#7B8BA0] md:text-[24px]">of total ad spend</p>
          </div>
        </div>

        {/* Compare to Hiring In-House */}
        <div className="rounded-[23px] border border-[#E5E5E5] bg-white p-5 shadow-[0_0_4px_rgba(0,0,0,0.05)] md:p-8 lg:p-12">
          <h3 className="mb-6 text-[22px] font-semibold text-black md:mb-8 md:text-[28px] lg:text-[32px]">
            Compare That to Hiring In-House
          </h3>
          
          <div className="space-y-2 md:space-y-3">
            {/* Table Header */}
            <div className="flex justify-between px-2 pb-2 text-[11px] font-medium uppercase tracking-[1.5px] text-[#ACACC3] md:px-4 md:text-[14px] md:tracking-[2px]">
              <span>Role</span>
              <span>Monthly Cost</span>
            </div>
            
            {/* Table Rows */}
            {inHouseRoles.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center justify-between rounded-[6px] bg-[#FAFAFA] px-3 py-3 md:px-5 md:py-4"
              >
                <span className="text-[14px] text-black md:text-[18px] lg:text-[20px]">{item.role}</span>
                <span className="font-Montserrat text-[14px] font-medium text-black md:text-[18px] lg:text-[20px]">{item.cost}</span>
              </div>
            ))}
          </div>

          {/* Total Row */}
          <div className="mt-6 flex flex-col justify-between rounded-[6px] bg-[#FFF4F4] px-4 py-5 sm:flex-row sm:items-center md:mt-8 md:px-6 md:py-8">
            <span className="mb-2 text-[18px] font-bold text-[#B91C1C] sm:mb-0 md:text-[24px] lg:text-[28px]">
              Total In-House Cost
            </span>
            <div className="text-left sm:text-right">
              <span className="mb-1 block text-[28px] font-bold leading-[1] text-[#B91C1C] md:text-[36px] lg:text-[40px]">
                ₹2.2L+
              </span>
              <span className="block text-[14px] text-[#B91C1C] md:text-[16px] lg:text-[18px]">
                per month
              </span>
            </div>
          </div>
        </div>

        {/* What It Doesn't Include */}
        <div className="mt-12 text-center md:mt-16">
          <h4 className="mb-8 text-[18px] font-bold text-black md:mb-10 md:text-[22px] lg:text-[24px]">
            And that still doesn't include:
          </h4>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-4 md:gap-8">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="mb-3 flex h-[40px] w-[40px] items-center justify-center rounded-[6px] bg-[#FBDEDE] md:mb-5 md:h-[45px] md:w-[46px]">
                  <p className="text-[20px] font-bold text-[#F87171]">X</p>
                 
                </div>
                <p className="whitespace-pre-line text-[15px] leading-[22px] text-black md:text-[18px] md:leading-[28px] lg:text-[20px]">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* The Real Risk Box */}
        <div className="mt-12 rounded-r-[8px] border-l-[4px] border-[#2D4CFF] bg-[#F4F7FF] px-5 py-5 md:mt-16 md:px-8 md:py-7">
          <h5 className="mb-1 text-[16px] font-bold text-black md:text-[18px] lg:text-[20px]">
            The real risk?
          </h5>
          <p className="text-[14px] text-black md:text-[15px] lg:text-[16px]">
            Continuing with an agency that spends budget but never learns from the data.
          </p>
        </div>

      </div>
    </section>
  );
}