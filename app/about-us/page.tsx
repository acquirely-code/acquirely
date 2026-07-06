

import Image from "next/image";
import Link from "next/link";


import kunalImage from "@/app/assests/kunalmondal.png";
import mausamImage from "@/app/assests/mausamarora.png";
import AboutusHero from "@/components/Aboutushero";
import Aboutusmiddlesection from "@/components/aboutusmiddlesection";
import Aboutuswheel from "@/components/Aboutuswheel";
import SystemDetailsSections from "@/components/SystemDetailsSections";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube
} from "lucide-react";

export const metadata = {
  title: "About Acquirely | Performance Marketing Company",
  description: "Discover the founders, A3 Flywheel, and growth systems powering predictable business growth.",
};




const UnlockedIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
  </svg>
);

const EyeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

const GaugeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3.34 16.99a10 10 0 1 1 17.32 0"></path>
    <path d="M12 15v-4"></path>
    <circle cx="12" cy="15" r="2"></circle>
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"></path>
    <path d="m12 5 7 7-7 7"></path>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const ThinCheck = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 shrink-0">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);




export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-white text-[#111827] ">
         <div className="fixed right-0 top-1/2 z-[9999] flex -translate-y-1/2 flex-col gap-[2px]">
              {/* Facebook */}
              <Link 
                 target="_blank"
                href="https://www.facebook.com/profile.php?id=61578312825291#" 
                className="group relative -right-[110px] flex h-[50px] w-[160px] items-center justify-between rounded-l-md bg-[#1877F2] px-[15px] font-sans text-base font-bold text-white transition-all duration-300 ease-in-out hover:right-0 max-md:right-0 max-md:w-[50px] max-md:justify-center max-md:px-0"
              >
                <Facebook className="h-5 w-5" />
                <span className="max-md:hidden">Facebook</span>
              </Link>
              {/* Instagram */}
              <Link 
                target="_blank"
                href="https://www.instagram.com/acquirely.in" 
                className="group relative -right-[110px] flex h-[50px] w-[160px] items-center justify-between rounded-l-md bg-[#E4405F] px-[15px] font-sans text-base font-bold text-white transition-all duration-300 ease-in-out hover:right-0 max-md:right-0 max-md:w-[50px] max-md:justify-center max-md:px-0"
              >
                <Instagram className="h-5 w-5" />
                <span className="max-md:hidden">Instagram</span>
              </Link>
      
              {/* LinkedIn */}
              <Link 
               target="_blank"
                href="https://www.linkedin.com/company/acquirelydm/" 
                className="group relative -right-[110px] flex h-[50px] w-[160px] items-center justify-between rounded-l-md bg-[#0A66C2] px-[15px] font-sans text-base font-bold text-white transition-all duration-300 ease-in-out hover:right-0 max-md:right-0 max-md:w-[50px] max-md:justify-center max-md:px-0"
              >
                <Linkedin className="h-5 w-5" />
                <span className="max-md:hidden">LinkedIn</span>
              </Link>
      
              {/* YouTube */}
              <Link 
               target="_blank"
                href="https://www.youtube.com/@acquirelymedia" 
                className="group relative -right-[110px] flex h-[50px] w-[160px] items-center justify-between rounded-l-md bg-[#FF0000] px-[15px] font-sans text-base font-bold text-white transition-all duration-300 ease-in-out hover:right-0 max-md:right-0 max-md:w-[50px] max-md:justify-center max-md:px-0"
              >
                <Youtube className="h-5 w-5" />
                <span className="max-md:hidden">YouTube</span>
              </Link>
            </div>
      
      {/* 1. HERO SECTION (Light Theme) */}

      <AboutusHero />
      <Aboutusmiddlesection/>
      <Aboutuswheel />
      <SystemDetailsSections  />


      {/* 9. MEET THE FOUNDERS (Dark Section) */}
    <section className="bg-[#081225] py-16 sm:py-[112px] px-2">
      <div className="mx-auto max-w-[1140px] px-2">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-Montserrat text-[36px] md:text-[48px] font-bold text-white tracking-[-0.5px]">
            Meet The Founders
          </h2>
          <p className="mt-4 font-opensans text-[18px] md:text-[20px] text-white/80">
            Built by Operators — Not Just Agency Owners
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid gap-8 md:gap-10 lg:grid-cols-2">
          
          {/* Founder 1: Mausam Arora */}
          <div className="flex flex-col overflow-hidden rounded-[16px] bg-white shadow-[0px_8px_32px_rgba(15,23,42,0.1)]">
            {/* Top Half: Image */}
            <div className="relative h-[300px] sm:h-[380px] w-full bg-[#D9D9D9]">
              <Image 
                src={mausamImage} 
                alt="Mausam Arora" 
                fill 
                className="object-cover object-top" 
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/80 via-[#171717]/20 to-transparent"></div>
              
              {/* Overlay Content */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <h3 className="font-Montserrat text-[24px] font-bold tracking-[-0.5px] text-white">
                    Mausam Arora
                  </h3>
                  <p className="font-opensans text-[14px] text-white/90">
                    Founder, Acquirely
                  </p>
                </div>
                {/* LinkedIn Button */}
                <a href="https://in.linkedin.com/in/mausamarora" className="flex h-10 w-10 items-center justify-center rounded-md bg-white/20 border border-white/30 backdrop-blur-md text-white transition-colors hover:bg-white/30">
                  <LinkedInIcon />
                </a>
              </div>
            </div>
            
            {/* Bottom Half: Text Content */}
            <div className="flex flex-col p-6 md:p-8">
              <h4 className="mb-4 font-Montserrat text-[14px] font-semibold uppercase tracking-[1.4px] text-[#4F46E5]">
                Growth & Strategy Head
              </h4>
              <p className="mb-6 font-opensans text-[15px] md:text-[16px] leading-[26px] text-[#525252]">
                Mausam spent 12 years inside education — building curricula, publishing 300+ books, and reaching 2,000+ schools. That journey taught him one thing: great products don't grow themselves. He built Acquirely to turn scattered ad spend into acquisition systems that compound.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3 text-[14px] text-[#404040] font-opensans">
                  <ThinCheck />
                  <span>Founder-level understanding of what happens before and after the click</span>
                </div>
                <div className="flex items-start gap-3 text-[14px] text-[#404040] font-opensans">
                  <ThinCheck />
                  <span>Managed ₹30Cr+ in annual ad spend</span>
                </div>
                <div className="flex items-start gap-3 text-[14px] text-[#404040] font-opensans">
                  <ThinCheck />
                  <span>Specialises in funnel strategy, GTM thinking, and scaling systems</span>
                </div>
              </div>
            </div>
          </div>

          {/* Founder 2: Kunal Mondal */}
          <div className="flex flex-col overflow-hidden rounded-[16px] bg-white shadow-[0px_8px_32px_rgba(15,23,42,0.1)]">
            {/* Top Half: Image */}
            <div className="relative h-[300px] sm:h-[380px] w-full bg-[#D9D9D9]">
              <Image 
                src={kunalImage} 
                alt="Kunal Mondal" 
                fill 
                className="object-cover object-top" 
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/80 via-[#171717]/20 to-transparent"></div>
              
              {/* Overlay Content */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <h3 className="font-Montserrat text-[24px] font-bold tracking-[-0.5px] text-white">
                    Kunal Mondal
                  </h3>
                  <p className="font-opensans text-[14px] text-white/90">
                    Founder, Acquirely
                  </p>
                </div>
                {/* LinkedIn Button */}
                <a href="https://in.linkedin.com/in/kunal-meta-ads" className="flex h-10 w-10 items-center justify-center rounded-md bg-white/20 border border-white/30 backdrop-blur-md text-white transition-colors hover:bg-white/30">
                  <LinkedInIcon />
                </a>
              </div>
            </div>
            
            {/* Bottom Half: Text Content */}
            <div className="flex flex-col p-6 md:p-8">
              <h4 className="mb-4 font-Montserrat text-[14px] font-semibold uppercase tracking-[1.4px] text-[#4F46E5]">
                Performance Marketing Lead
              </h4>
              <p className="mb-6 font-opensans text-[15px] md:text-[16px] leading-[26px] text-[#525252]">
                Kunal has managed over ₹30Cr in ad spend across 30+ brands in E-Commerce, EdTech, and Real Estate. He builds acquisition systems that drive predictable revenue, not just traffic. His hands-on approach ensures the A3 Flywheel runs without friction.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3 text-[14px] text-[#404040] font-opensans">
                  <ThinCheck />
                  <span>Hands-on Meta and Growth strategist</span>
                </div>
                <div className="flex items-start gap-3 text-[14px] text-[#404040] font-opensans">
                  <ThinCheck />
                  <span>Full-funnel acquisition systems using Google & Meta</span>
                </div>
                <div className="flex items-start gap-3 text-[14px] text-[#404040] font-opensans">
                  <ThinCheck />
                  <span>ROAS-focused scaling without wasted spend</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

      {/* 10. OUR COMMITMENT (Light Section) */}
   <section className="flex w-full flex-col items-center justify-center px-5 py-16 md:py-[112px]">
        <div className="mx-auto flex w-full max-w-[1340px] flex-col md:flex-row items-start md:items-center justify-between gap-12 md:gap-16">
          
          {/* Left: Heading */}
          <div className="flex flex-1 w-full lg:max-w-[550px]">
            <h2 className="font-Montserrat text-[36px] md:text-[48px] font-bold leading-[1.1] tracking-[-1.2px] text-[#0B1020]">
              Our Commitment
            </h2>
          </div>

          {/* Right: Content & List */}
          <div className="flex flex-1 flex-col gap-8 w-full">
            <h3 className="font-Montserrat text-[20px] md:text-[24px] font-semibold leading-[1.4] tracking-[-0.6px] text-[#0B1020] max-w-[550px]">
              We don't promise overnight success. We focus on building something that lasts.
            </h3>
            
            <div className="flex flex-col gap-5">
              
              {/* Item 1 */}
              <div className="flex items-center gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#356DFF]/10 text-[#356DFF]">
                  <UnlockedIcon />
                </div>
                <span className="font-opensans text-[16px] md:text-[18px] text-[#0B1020]">
                  No unnecessary lock-ins
                </span>
              </div>
              
              {/* Item 2 */}
              <div className="flex items-center gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#356DFF]/10 text-[#356DFF]">
                  <EyeIcon />
                </div>
                <span className="font-opensans text-[16px] md:text-[18px] text-[#0B1020]">
                  Transparent reporting
                </span>
              </div>
              
              {/* Item 3 */}
              <div className="flex items-center gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#356DFF]/10 text-[#356DFF]">
                  <GaugeIcon />
                </div>
                <span className="font-opensans text-[16px] md:text-[18px] text-[#0B1020]">
                  Performance-focused approach
                </span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          SECTION 2: FINAL CTA ("Work With Us")
          ========================================= */}
      <section className="flex w-full flex-col items-center justify-center px-5 pb-20 md:pb-[72px]">
        <div className="relative flex w-full max-w-[1340px] flex-col items-center justify-center overflow-hidden rounded-[24px] bg-gradient-to-br from-[#091123] via-[#191844] to-[#1D0A44] p-10 py-16 md:py-[40px] shadow-2xl">
          
          {/* Background Blurs / Glows */}
          <div className="absolute -right-[80px] -top-[80px] h-[256px] w-[256px] rounded-full bg-[#356DFF]/20 blur-[64px] pointer-events-none"></div>
          <div className="absolute -bottom-[80px] -left-[80px] h-[256px] w-[256px] rounded-full bg-[#F64C00]/20 blur-[64px] pointer-events-none"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center gap-6">
            
            {/* Pill Badge */}
            <div className="flex items-center justify-center rounded-full bg-white/10 px-4 py-1.5">
              <span className="font-Montserrat text-[11px] md:text-[12px] font-semibold uppercase tracking-[1.5px] text-[#EFF6FF]">
                Work With Us
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="max-w-[720px] font-Montserrat text-[22px] md:text-[36px] font-bold leading-[1.25] tracking-[-0.9px] text-[#EFF6FF]">
              If You Want an Agency That Treats Your Budget Like Its Own — Let's Talk.
            </h2>

            {/* CTA Button */}
            <Link href="https://forms.acquirely.in/acquirely/form/FunnelReviewCallECom/formperma/muJYVHXbKDbQ7N3xEPr_lrjkOuBMe33JPNULGFJm9Kg">
            <button className="mt-4 flex items-center gap-2 rounded-xl bg-[#F64C00] hover:bg-[#E04500] transition-colors duration-200 px-4 py-4 font-Montserrat text-[13px] md:text-[16px] font-semibold text-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)]">
              Book a Free Growth Call
              <ArrowRightIcon />
            </button>
            </Link>

            {/* Subtext */}
            <span className="font-Montserrat text-[13px] md:text-[14px] text-white/50">
              Redirect It To The Funnel Review Call Form
            </span>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}