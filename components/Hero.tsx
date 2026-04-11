"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from 'next/dynamic';
import { 
  ArrowRight,  
  Star,
  UserRoundPlus,
} from "lucide-react";

// --- Assets (Ensure these paths match your project) ---
import logo from "@/app/assests/logo.png";
import checkericon from "@/app/assests/checkricon.png";
import Client1 from "@/app/assests/Client1.jpg";
import Client2 from "@/app/assests/Client2.jpg";
import Client3 from "@/app/assests/Client3.jpg";
import Client4 from "@/app/assests/Clieent4.jpg";

// --- Dynamic Imports ---
const WistiaPlayer = dynamic(() => import('@/components/WistiaPlayer'), {
  ssr: false,
  loading: () => (
    <div className="w-full rounded-lg bg-white/10 animate-pulse" style={{ paddingTop: '56.25%' }} />
  ),
});

// --- Main Component ---
export default function AgencyLandingPage() {
  return (
    <main className="overflow-hidden bg-[#f7f9fc] text-slate-950">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-[linear-gradient(115.83deg,#0F0C29_0%,#1A1560_40%,#24243E_100%)] text-white">
        <div className="mx-auto max-w-[1440px] px-5 pb-14 pt-7 sm:px-6 lg:px-20 lg:pb-12 lg:pt-[35px]">
          <div className="flex items-center gap-2">
            <Image src={logo} alt="Brand Logo" width={100} height={24} className="h-6 w-auto" />
          </div>

          {/* Grid Layout Update: 
            Changed to a unified grid where we manually assign row/col positions for desktop, 
            allowing flex-order to control the mobile flow naturally.
          */}
          <div className="mt-10 grid grid-cols-1 lg:mt-[43px] lg:grid-cols-[598px_1fr] lg:items-start lg:gap-x-10">
            
            {/* 1. BADGE & HEADING (Top on Mobile, Top-Left on Desktop) */}
            <div className="order-1 flex max-w-[598px] flex-col lg:col-start-1 lg:row-start-1">
              <div className="inline-flex w-fit min-h-[34px] max-w-full items-center gap-3 border border-[#4338CA] bg-[#312E81] px-[10px] py-2 text-[10px] font-semibold uppercase tracking-[1.2px] text-[#A5B4FC] sm:text-[12px]">
                <span className="h-2 w-2 rounded-full bg-[#34D399]" />
                Accepting 2 new d2c brands this month
              </div>

              <h1 className="mt-6 text-[30px] font-Montserrat font-bold leading-[1.3] text-white sm:text-[40px] lg:text-[48px] lg:leading-[48px] lg:tracking-[-0.5px]">
                <span className="block">Scale Your Brand from</span>
                <span className=" bg-[linear-gradient(90deg,#818CF8_0%,#C084FC_25%,#F97316_80%)] bg-clip-text text-transparent">
                   ₹10L to ₹1Cr+ Monthly on Meta
                </span>
                <span className=""> Profitably</span>
              </h1>
            </div>

            {/* 2. VIDEO (Middle on Mobile, Right side on Desktop) */}
            <div className="order-2 mt-8 relative w-full lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-0 lg:ml-14 lg:pt-[99px]">
              <div className="overflow-hidden rounded-xl shadow-2xl">
                <WistiaPlayer mediaId="nm2ou94x6d" />
              </div>
            </div>

            {/* 3. PARAGRAPH, CTA & SOCIAL PROOF (Bottom on Mobile, Bottom-Left on Desktop) */}
            <div className="order-3 flex max-w-[598px] flex-col lg:col-start-1 lg:row-start-2">
              <p className="mt-8 max-w-[598px] font-opensans text-[16px] leading-7 text-white/90 sm:text-[17px] lg:mt-11 lg:text-[18px] lg:leading-[29px]">
                We don't just run Meta Ads campaigns. We build performance marketing systems. Our A3 Flywheel Model identifies winning creatives, scales them strategically, and stabilizes ROAS.
              </p>

              <Link href="https://forms.acquirely.in/acquirely/form/AcquirelyLeads/formperma/2doC7L65w0M6PnuFIVX6g4BgwS3fzMDJYLwncK3fEeo" className="mt-8 inline-flex min-h-[56px] w-full max-w-[351px] items-center justify-center gap-2 bg-[linear-gradient(102.78deg,#6366F1_0%,#4F46E5_100%)] px-5 text-center font-opensans text-[16px] leading-6 text-white transition hover:brightness-110 sm:text-[18px] lg:mt-8">
                Book Your Growth Diagnosis Call
                <ArrowRight className="h-4 w-4" />
              </Link>
              <div className="mt-8 lg:hidden" />

              <div className="mt-6 flex flex-col gap-5 px-3">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                  <div className="flex items-center">
                    {[Client1, Client2, Client3, Client4].map((client, index) => (
                      <Image key={index} src={client} alt={`Client ${index + 1}`} className="-ml-3 h-12 w-12 rounded-full border-1 border-[#3730A3] transition-transform duration-300 hover:scale-110" />
                    ))}
                    <div className="relative -ml-3 grid h-10 w-10 place-items-center rounded-full border-2 border-[#3730A3] bg-[linear-gradient(135deg,#6366F1_0%,#4F46E5_100%)] text-[12px] font-bold text-white">+84</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-0.5 text-[#FFA227]">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star key={index} className="h-4 w-4 fill-current stroke-0" />
                        ))}
                      </div>
                      <span className="text-[14px] font-semibold text-white">4.9/5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}