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
    <section className="bg-white md:py-8 py-4 px-5 sm:px-6 lg:py-24 font-sans">
      <div className="mx-auto max-w-[866px]">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex h-[34px] items-center gap-2 rounded-[4px] border border-[#CFD5FD] bg-[#EDEFFF] px-3">
            <span className="h-2 w-2 rounded-full bg-[#5332E2]" />
            <span className="text-[12px] font-semibold uppercase tracking-[1.2px] text-[#5332E2]">
              Pricing
            </span>
          </div>

          <h2 className="mt-6 text-[32px] font-Montserrat leading-tight tracking-tight sm:text-[40px]">
            <span className="bg-[linear-gradient(90deg,#818CF8_0%,#F97316_100%)] bg-clip-text text-transparent">
              Transparent, Performance-
            </span>
            <span className="text-black">Aligned Pricing</span>
          </h2>

          <p className="mx-auto font-opensans mt-4 max-w-[663px] text-[18px] leading-[28px] text-[#7B8BA0]">
            Both plans include the full A3 Flywheel system. The difference is how fast you
            want to move and how much direct support you need.
          </p>
        </div>

        {/* Top Price Cards */}
        <div className="grid gap-6 sm:grid-cols-2 mb-12">
          <div className="flex flex-col items-center justify-center rounded-[8px] bg-[#F4F7FF] py-10 px-6 text-center">
            <p className="text-[18px] text-[#7B8BA0] mb-2">For ₹3L–₹10L ad spend</p>
            <p className="text-[45px] font-bold leading-[45px] text-black mb-2">₹75,000</p>
            <p className="text-[24px] text-[#7B8BA0]">+ GST</p>
          </div>
          
          <div className="flex flex-col items-center justify-center rounded-[8px] bg-[#F0FFF5] py-10 px-6 text-center">
            <p className="text-[18px] text-[#7B8BA0] mb-2">For ₹10L+ ad spend</p>
            <p className="text-[45px] font-bold leading-[45px] text-black mb-2">10%</p>
            <p className="text-[24px] text-[#7B8BA0]">of total ad spend</p>
          </div>
        </div>

        {/* Compare to Hiring In-House */}
        <div className="rounded-[23px] border border-[#E5E5E5] bg-white p-8 sm:p-12 shadow-[0_0_4px_rgba(0,0,0,0.05)]">
          <h3 className="text-[28px] sm:text-[32px] font-semibold text-black mb-8">
            Compare That to Hiring In-House
          </h3>
          
          <div className="space-y-3">
            {/* Table Header */}
            <div className="flex justify-between px-4 pb-2 text-[14px] font-medium tracking-[2px] text-[#ACACC3] uppercase">
              <span>Role</span>
              <span>Monthly Cost</span>
            </div>
            
            {/* Table Rows */}
            {inHouseRoles.map((item, index) => (
              <div 
                key={index} 
                className="flex justify-between items-center rounded-[6px] bg-[#FAFAFA] px-5 py-4"
              >
                <span className="text-[18px] sm:text-[20px] text-black">{item.role}</span>
                <span className="text-[18px] sm:text-[20px] font-Montserrat text-black">{item.cost}</span>
              </div>
            ))}
          </div>

          {/* Total Row */}
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between rounded-[6px] bg-[#FFF4F4] px-6 py-6 sm:py-8">
            <span className="text-[24px] sm:text-[28px] font-bold text-[#B91C1C] mb-2 sm:mb-0">
              Total In-House Cost
            </span>
            <div className="text-left sm:text-right">
              <span className="block text-[32px] sm:text-[40px] font-bold leading-[1] text-[#B91C1C] mb-1">
                ₹2.2L+
              </span>
              <span className="block text-[16px] sm:text-[18px] text-[#B91C1C]">
                per month
              </span>
            </div>
          </div>
        </div>

        {/* What It Doesn't Include */}
        <div className="mt-16 text-center">
          <h4 className="text-[22px] sm:text-[24px] font-bold text-black mb-10">
            And that still doesn't include:
          </h4>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="flex h-[45px] w-[46px] items-center justify-center rounded-[6px] bg-[#DBFCE7] mb-5">
                  <Check className="h-6 w-6 text-[#22C68D]" strokeWidth={3} />
                </div>
                <p className="whitespace-pre-line text-[18px] sm:text-[20px] leading-[28px] text-black">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* The Real Risk Box */}
        <div className="mt-16 rounded-r-[8px] border-l-[4px] border-[#2D4CFF] bg-[#F4F7FF] px-8 py-7">
          <h5 className="mb-1 text-[18px] sm:text-[20px] font-bold text-black">
            The real risk?
          </h5>
          <p className="text-[15px] sm:text-[16px] text-black">
            Continuing with an agency that spends budget but never learns from the data.
          </p>
        </div>

      </div>
    </section>
  );
}