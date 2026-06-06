import React from 'react';
import Image from 'next/image';

// Assuming you have the image imported like in your previous files
import flywheelImage from "@/app/assests/flywheelmodel.png";

const ArrowRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19" stroke="#FF8A3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 5L19 12L12 19" stroke="#FF8A3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function FlywheelSection() {
  return (
    <section className="relative flex w-full flex-col items-center justify-center bg-[#081225] py-16 md:py-[112px] px-5 font-sans overflow-hidden">
      
      {/* Background Subtle Blur Effect */}
      <div className="absolute top-1/2 left-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#356DFF]/10 blur-[64px] pointer-events-none z-0"></div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1140px] flex-col items-center">
        
        {/* Header Area */}
        <div className="flex flex-col items-center text-center">
          <span className="font-Montserrat text-[10px] md:text-[12px] font-semibold uppercase tracking-[4px] text-[#FF8A3D]">
            Growth Model For Modern Performance Marketing Services
          </span>
          <h2 className="mt-3 font-Montserrat text-[36px] md:text-[60px] font-bold leading-[1.1] tracking-[-1.5px] text-white">
            A3 FLYWHEEL MODEL
          </h2>
          <p className="mt-3 font-opensans text-[16px] md:text-[20px] leading-[28px] text-white/50">
            A System That Gets Stronger as It Scales
          </p>
        </div>

        {/* Main Image Container */}
        <div className="mt-6 md:mt-[60px] w-full max-w-[763px] rounded-[24px] md:rounded-[36px] bg-white p-4 sm:p-8 md:p-12 shadow-[0px_20px_60px_-40px_rgba(11,16,32,0.5)]">
          <div className="relative w-full h-auto overflow-hidden rounded-xl bg-white flex items-center justify-center">
             <Image 
               src={flywheelImage} 
               alt="A3 Flywheel Model Diagram" 
               className="w-full h-auto max-w-full object-contain"
             />
          </div>
        </div>

        {/* Bottom Process Steps */}
        <div className="mt-12 md:mt-16 flex flex-col items-center text-center w-full">
          <p className="text-[16px] md:text-[18px] font-light text-white/60 mb-6 md:mb-8">
            Instead of isolated campaigns, we use a continuous cycle:
          </p>
          
          {/* Cycle Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1 md:gap-4">
            
            {/* Step 1 */}
            <div className="flex items-center rounded-full bg-white/10 px-3 md:px-7 py-2 md:py-2.5 transition-colors hover:bg-white/20">
              <span className="font-Montserrat text-[10px] md:text-[18px] font-semibold text-white">Test</span>
            </div>
            
            <ArrowRightIcon />
            
            {/* Step 2 */}
            <div className="flex items-center rounded-full bg-white/10 px-3 md:px-7 py-2 md:py-2.5 transition-colors hover:bg-white/20">
              <span className="font-Montserrat text-[10px] md:text-[18px] font-semibold text-white">Scale</span>
            </div>
            
            <ArrowRightIcon />
            
            {/* Step 3 */}
            <div className="flex items-center rounded-full bg-white/10 px-3 md:px-7 py-2 md:py-2.5 transition-colors hover:bg-white/20">
              <span className="font-Montserrat text-[10px] md:text-[18px] font-semibold text-white">Refine</span>
            </div>
            
            <ArrowRightIcon />
            
            {/* Step 4 (Active/Highlight) */}
            <div className="flex items-center rounded-full bg-[#356DFF] px-2 md:px-8 py-2 md:py-2.5 shadow-[0px_4px_14px_rgba(53,109,255,0.4)]">
              <span className="font-Montserrat text-[10px] md:text-[18px] font-semibold text-white">Repeat</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}