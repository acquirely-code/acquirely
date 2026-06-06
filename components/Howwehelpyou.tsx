import React from 'react';
import Image from 'next/image';
import A3flyeewheel from "@/app/assests/flywheelmodel.png";

export default function Howwehelpyou() {
  return (
    <section className="flex flex-col items-center justify-center w-full py-[60px] md:py-[80px] bg-white px-5">
      <div className="flex flex-col items-center w-full max-w-[1024px]">
        
        {/* Header Content */}
        <div className="flex flex-col items-center text-center mb-[40px] md:mb-[56px] gap-4">
          <span className="font-inter font-bold text-[12px] text-[#2B7FFF] tracking-[1.5px] uppercase">
            How We Help You Grow
          </span>
          <h2 className="font-Montserrat font-bold text-[26px] md:text-[40px] text-[#09090B] tracking-[-0.9px] leading-[40px] md:leading-[48px] max-w-[850px]">
            We Build A Compounding Model for Modern Performance Marketing Services
          </h2>
        </div>

        {/* Diagram Image */}
        <div className="w-full flex justify-center rounded-xl p-2 md:p-6 bg-white border border-[#E4E4E7]/40 shadow-[0px_4px_24px_rgba(0,0,0,0.02)]">
          <Image 
            src={A3flyeewheel} 
            alt="Compounding Performance Marketing Model" 
            className="w-full h-auto object-contain"
            priority /* Added priority since this is a large above-the-fold/main image */
          />
        </div>

      </div>
    </section>
  );
}