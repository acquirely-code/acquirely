import React from 'react';
import Link from 'next/link';
import Navbar from './Navbar';
import Collabration from "@/app/assests/officecollab.png";
import Image from 'next/image';


export default function AboutHeroSection() {
  return (
    <div>
        
         <section className="relative flex flex-col items-center min-h-[850px] w-full  bg-[#F7F8FA] font-sans">
      
      {/* --- Background Blur Effects --- */}
      <div className="absolute right-0 -top-[128px] h-[480px] w-[480px] rounded-full bg-[#356DFF]/20 blur-[64px] z-0 pointer-events-none"></div>
      <div className="absolute -left-[80px] top-[200px] h-[460px] w-[460px] rounded-full bg-[#FF8A3D]/20 blur-[64px] z-0 pointer-events-none"></div>

   <div className=" z-10 md:w-[1440px]  w-full px-4 sm:px-5 md:px-10 pt-8  md:pt-[46px] lg:px-[80px]">
       <Navbar />
   </div>

      {/* --- Hero Content --- */}
      <div className="relative z-10 flex w-full max-w-[1140px] flex-col items-center md:px-5 px-2 mt-[80px] md:mt-[100px]">
         
        
        {/* Pill Badge */}
        <div className="mb-6 flex items-center gap-2 rounded-full border border-[#356DFF]/30 bg-[#356DFF]/5 px-4 py-1.5">
          <div className="h-1.5 w-1.5 rounded-full bg-[#356DFF]"></div>
          <span className="font-Montserrat text-[12px] font-semibold uppercase tracking-[4px] text-[#356DFF]">
            About Acquirely
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="max-w-[950px] text-center font-Montserrat text-[36px] md:text-[52px] lg:text-[60px] font-bold leading-[1.05] tracking-[-1.5px] text-[#0B1020]">
          We Build Growth Systems, Not Just <span className="text-[#356DFF]">Ad Campaigns!</span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 max-w-[660px] text-center font-opensans text-[16px] md:text-[18px] leading-[1.62] text-[#0B1020]/60">
          We're a performance marketing agency built for brands that want predictable, scalable growth not random spikes.
        </p>

        {/* --- Metrics Card (Light Outer, Dark Inner) --- */}
        <div className="mt-16 w-full rounded-[24px] border border-[#E4E4E7] bg-white p-2 shadow-[0px_24px_70px_-30px_rgba(11,16,32,0.25)]">
          <div className="flex flex-col md:flex-row items-center justify-between rounded-[16px] bg-[#081225] py-10 px-0 md:px-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
            
            {/* Metric 1 */}
            <div className="flex w-full flex-col items-center justify-center py-6 md:py-0">
              <div className="font-Montserrat text-[40px] lg:text-[48px] font-bold tracking-[-1.2px] text-[#FF8A3D]">
                4.68x
              </div>
              <div className="mt-1 max-w-[170px] text-center font-opensans text-[13px] lg:text-[14px] leading-[1.6] text-white/50">
                Highest ROAS achieved in 90 days
              </div>
            </div>

            {/* Metric 2 */}
            <div className="flex w-full flex-col items-center justify-center py-6 md:py-0">
              <div className="font-Montserrat text-[40px] lg:text-[48px] font-bold tracking-[-1.2px] text-white">
                50+
              </div>
              <div className="mt-1 max-w-[170px] text-center font-opensans text-[13px] lg:text-[14px] leading-[1.6] text-white/50">
                D2C brands scaled successfully
              </div>
            </div>

            {/* Metric 3 */}
            <div className="flex w-full flex-col items-center justify-center py-6 md:py-0">
              <div className="font-Montserrat text-[40px] lg:text-[48px] font-bold tracking-[-1.2px] text-[#356DFF]">
                35%
              </div>
              <div className="mt-1 max-w-[170px] text-center font-opensans text-[13px] lg:text-[14px] leading-[1.6] text-white/50">
                Average conversion rate improvement
              </div>
            </div>

            {/* Metric 4 */}
            <div className="flex w-full flex-col items-center justify-center py-6 md:py-0">
              <div className="font-Montserrat text-[40px] lg:text-[48px] font-bold tracking-[-1.2px] text-white">
                90 Days
              </div>
              <div className="mt-1 max-w-[170px] text-center font-opensans text-[13px] lg:text-[14px] leading-[1.6] text-white/50">
                Average time to significant ROAS growth
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>

        <section className="flex w-full flex-col items-center justify-center bg-[#F7F8FA] py-16 md:py-[100px] px-5 font-sans">
      <div className="mx-auto grid w-full max-w-[1140px] grid-cols-1 items-center gap-[60px] lg:gap-[80px] lg:grid-cols-2">
        
        {/* Left Side: Image with Decorative Offset */}
        <div className="relative flex w-full justify-center lg:justify-start">
          
          {/* Decorative Blue Box */}
          <div className="absolute -bottom-6 -left-6 h-[160px] w-[160px] rounded-2xl bg-[#356DFF]/10 z-0 hidden sm:block"></div>
          
          {/* Image Container with Shadow */}
          <div className="relative z-10 w-full max-w-[563px] rounded-[24px] shadow-[0px_30px_80px_-40px_rgba(11,16,32,0.4)] bg-white/0">
             <Image 
               src={Collabration} 
               alt="Acquirely Team" 
               className="h-auto w-full rounded-[24px] object-cover"
               // If the image doesn't have the white border baked in, you can add: border-[8px] border-white
             />
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="flex flex-col items-start text-left lg:pl-[20px]">
          
          {/* Label */}
          <span className="font-Montserrat text-[12px] font-semibold uppercase tracking-[4px] text-[#356DFF]">
            Who We Are
          </span>

          {/* Heading */}
          <h2 className="mt-4 w-full max-w-[538px] font-Montserrat text-[36px] md:text-[48px] font-bold leading-[1.25] tracking-[-1.2px] text-[#0B1020]">
            Best Performance Marketing Company
          </h2>

          {/* Paragraphs */}
          <div className="mt-6 flex w-full max-w-[538px] flex-col gap-[20px] font-opensans text-[16px] md:text-[18px] leading-[29px] text-[#0B1020]/65">
            <p>
              Since 2025, we have been helping premium brands to have profitable and scalable growth through structured performance marketing services.
            </p>
            <p>
              Our approach blends strategy on creative testing, data and smart scaling to deliver results that last.
            </p>
          </div>
          
        </div>

      </div>
    </section></div>
   
  );
}