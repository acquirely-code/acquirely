import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search } from 'lucide-react';
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

        {/* Diagram Image with Hover & Link */}
        <div className="w-full flex justify-center rounded-xl p-2 md:p-6 bg-white border border-[#E4E4E7]/40 shadow-[0px_4px_24px_rgba(0,0,0,0.02)]">
          <Link href="/about-us" className="group relative block w-full overflow-hidden rounded-lg cursor-pointer">
            
            {/* Image with zoom effect */}
            <div className="relative transition-transform duration-500 ease-in-out group-hover:scale-105">
              <Image 
                src={A3flyeewheel} 
                alt="Compounding Performance Marketing Model" 
                className="w-full h-auto object-contain"
                priority 
              />
            </div>

            {/* Overlay with Show Details Button */}
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/5 opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover:opacity-100">
              <button className="flex items-center gap-2 rounded-full bg-[#F97316] px-6 py-3 font-bold text-white shadow-xl transition-transform hover:scale-105">
                <Search className="h-5 w-5" />
                Show Details
              </button>
            </div>

          </Link>
        </div>

      </div>
    </section>
  );
}