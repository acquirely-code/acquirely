import React from 'react';

// --- Shared SVG Icons ---
const BlueCheck = () => (
  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#356DFF]/10 text-[#356DFF]">
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
  </div>
);

const OrangeCheck = () => (
  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FF8A3D]/15 text-[#FF8A3D]">
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
  </div>
);

export default function SystemDetailsSections() {
  return (
    <div className="flex w-full flex-col font-sans bg-[#F7F8FA]">
      
      {/* =========================================
          1. HOW OUR SYSTEM WORKS
          ========================================= */}
      <section className="flex w-full flex-col items-center justify-center py-16 md:py-[112px] px-5">
        <div className="mx-auto flex w-full max-w-[1140px] flex-col gap-16 md:gap-[80px]">
          
          <h2 className="text-center font-Montserrat text-[32px] md:text-[36px] font-bold leading-[40px] tracking-[-0.9px] text-[#0B1020]">
            How Our System Works
          </h2>

          <div className="flex flex-col gap-16 md:gap-20">
            
            {/* --- STEP A1 --- */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
              <div className="relative flex flex-1 flex-col pt-4 md:pt-6 w-full">
                <div className="absolute -top-8 -left-2 z-0 font-Montserrat text-[60px] md:text-[72px] font-bold leading-none text-[#356DFF26]/10">
                  A1
                </div>
                <div className="relative z-10 flex flex-col">
                  <h3 className="font-Montserrat text-[24px] md:text-[30px] font-bold tracking-[-0.75px] text-[#0B1020]">
                    Identify Winners
                  </h3>
                  <p className="mt-4 font-opensans text-[16px] md:text-[18px] leading-[29px] text-[#0B1020]/60">
                    We test multiple creatives, angles, and messages to understand what actually drives conversions.
                  </p>
                  <p className="mt-4 font-opensans text-[16px] md:text-[18px] leading-[29px] text-[#0B1020]/60">
                    Every campaign is designed to generate insights, not just clicks.
                  </p>
                </div>
              </div>
              <div className="flex flex-1 w-full justify-center md:justify-end">
                <div className="flex w-full max-w-[474px] flex-col gap-4 rounded-[24px] bg-white p-6 md:p-8 shadow-[0px_20px_60px_-40px_rgba(11,16,32,0.3)]">
                  <div className="flex items-center gap-3 font-Montserrat text-[15px] md:text-[16px] font-medium text-[#0B1020]"><BlueCheck /> Faster learning</div>
                  <div className="flex items-center gap-3 font-Montserrat text-[15px] md:text-[16px] font-medium text-[#0B1020]"><BlueCheck /> Clear winning patterns</div>
                  <div className="flex items-center gap-3 font-Montserrat text-[15px] md:text-[16px] font-medium text-[#0B1020]"><BlueCheck /> Stronger foundation for scaling</div>
                </div>
              </div>
            </div>

            {/* --- STEP A2 (Reversed on Desktop) --- */}
            <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:gap-12">
              <div className="relative flex flex-1 flex-col pt-4 md:pt-6 w-full">
                <div className="absolute -top-8 -left-2 z-0 font-Montserrat text-[60px] md:text-[72px] font-bold leading-none text-[#FF8A3D]/20">
                  A2
                </div>
                <div className="relative z-10 flex flex-col">
                  <h3 className="font-Montserrat text-[24px] md:text-[30px] font-bold tracking-[-0.75px] text-[#0B1020]">
                    Scale What Performs
                  </h3>
                  <p className="mt-4 font-opensans text-[16px] md:text-[18px] leading-[29px] text-[#0B1020]/60">
                    Winning campaigns are scaled using real performance signals, not guesswork.
                  </p>
                  <p className="mt-4 font-opensans text-[16px] md:text-[18px] leading-[29px] text-[#0B1020]/60">
                    Budgets increase only when data supports it, ensuring stability while growing.
                  </p>
                </div>
              </div>
              <div className="flex flex-1 w-full justify-center md:justify-start">
                <div className="flex w-full max-w-[474px] flex-col gap-4 rounded-[24px] bg-white p-6 md:p-8 shadow-[0px_20px_60px_-40px_rgba(11,16,32,0.3)]">
                  <div className="flex items-center gap-3 font-Montserrat text-[15px] md:text-[16px] font-medium text-[#0B1020]"><OrangeCheck /> Better ROAS</div>
                  <div className="flex items-center gap-3 font-Montserrat text-[15px] md:text-[16px] font-medium text-[#0B1020]"><OrangeCheck /> Controlled growth</div>
                  <div className="flex items-center gap-3 font-Montserrat text-[15px] md:text-[16px] font-medium text-[#0B1020]"><OrangeCheck /> Reduced risk while scaling</div>
                </div>
              </div>
            </div>

            {/* --- STEP A3 --- */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
              <div className="relative flex flex-1 flex-col pt-4 md:pt-6 w-full">
                <div className="absolute -top-8 -left-2 z-0 font-Montserrat text-[60px] md:text-[72px] font-bold leading-none text-[#356DFF]/10">
                  A3
                </div>
                <div className="relative z-10 flex flex-col">
                  <h3 className="font-Montserrat text-[24px] md:text-[30px] font-bold tracking-[-0.75px] text-[#0B1020]">
                    Improve Continuously
                  </h3>
                  <p className="mt-4 font-opensans text-[16px] md:text-[18px] leading-[29px] text-[#0B1020]/60">
                    We use insights from live campaigns to refine creatives and strategy.
                  </p>
                  <p className="mt-4 font-opensans text-[16px] md:text-[18px] leading-[29px] text-[#0B1020]/60">
                    Each cycle improves the next making your marketing stronger over time.
                  </p>
                </div>
              </div>
              <div className="flex flex-1 w-full justify-center md:justify-end">
                <div className="flex w-full max-w-[474px] flex-col gap-4 rounded-[24px] bg-white p-6 md:p-8 shadow-[0px_20px_60px_-40px_rgba(11,16,32,0.3)]">
                  <div className="flex items-center gap-3 font-Montserrat text-[15px] md:text-[16px] font-medium text-[#0B1020]"><BlueCheck /> Lower acquisition costs</div>
                  <div className="flex items-center gap-3 font-Montserrat text-[15px] md:text-[16px] font-medium text-[#0B1020]"><BlueCheck /> Better-performing creatives</div>
                  <div className="flex items-center gap-3 font-Montserrat text-[15px] md:text-[16px] font-medium text-[#0B1020]"><BlueCheck /> Long-term growth consistency</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          2. WHY THIS MODEL WORKS (Dark Box)
          ========================================= */}
      <section className="flex w-full justify-center px-5 py-10">
        <div className="flex w-full max-w-[1280px] flex-col md:flex-row items-center md:items-start justify-between gap-10 rounded-[24px] bg-gradient-to-br from-[#091123] to-[#1E1D49] p-8 md:p-12 shadow-[0px_20px_60px_-20px_rgba(11,16,32,0.5)]">
          
          <div className="flex flex-1 flex-col">
            <h2 className="font-Montserrat mt-16 text-[28px] md:text-[36px] font-bold leading-[40px] tracking-[-0.9px] text-[#EFF6FF]">
              Why This Model Works
            </h2>
            <p className="mt-5 font-Montserrat text-[15px] md:text-[16px] leading-[26px] text-white/70">
              Most performance marketing agencies restart from scratch every month.
            </p>
            <p className="mt-2 font-Montserrat text-[20px] md:text-[24px] font-bold text-[#F64C00]">
              We don't.
            </p>
          </div>

          <div className="flex flex-1 flex-col w-full">
            <span className="mb-4 font-Montserrat text-[14px] text-white/60">Our model:</span>
            <div className="flex flex-col gap-4 w-full">
              
              <div className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 md:p-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F64C00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                <span className="font-Montserrat text-[15px] md:text-[16px] text-[#EFF6FF]">Learns from every test</span>
              </div>
              
              <div className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 md:p-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F64C00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                <span className="font-Montserrat text-[15px] md:text-[16px] text-[#EFF6FF]">Improves with every cycle</span>
              </div>
              
              <div className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 md:p-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F64C00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                <span className="font-Montserrat text-[15px] md:text-[16px] text-[#EFF6FF]">Builds long-term performance stability</span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          3. WHAT THIS MEANS FOR YOU
          ========================================= */}
      <section className="flex w-full flex-col items-center justify-center py-16 md:py-[80px] px-5">
        <div className="mx-auto flex w-full max-w-[1140px] flex-col gap-10 md:gap-16">
          
          <h2 className="text-center font-Montserrat text-[32px] md:text-[36px] font-bold leading-[40px] tracking-[-0.9px] text-[#0B1020]">
            What This Means For You
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            
            <div className="flex flex-col rounded-2xl bg-white p-6 md:p-7 shadow-[0px_18px_50px_-40px_rgba(11,16,32,0.3)] border-t-[4px] border-[#356DFF]">
              <span className="font-Montserrat text-[14px] text-[#356DFF] mb-2">01</span>
              <h4 className="font-Montserrat text-[16px] md:text-[18px] font-semibold leading-[25px] text-[#0B1020]">
                Smarter campaigns over time
              </h4>
            </div>

            <div className="flex flex-col rounded-2xl bg-white p-6 md:p-7 shadow-[0px_18px_50px_-40px_rgba(11,16,32,0.3)] border-t-[4px] border-[#356DFF]/70">
              <span className="font-Montserrat text-[14px] text-[#356DFF] mb-2">02</span>
              <h4 className="font-Montserrat text-[16px] md:text-[18px] font-semibold leading-[25px] text-[#0B1020]">
                More consistent revenue growth
              </h4>
            </div>

            <div className="flex flex-col rounded-2xl bg-white p-6 md:p-7 shadow-[0px_18px_50px_-40px_rgba(11,16,32,0.3)] border-t-[4px] border-[#FF8A3D]/80">
              <span className="font-Montserrat text-[14px] text-[#FF8A3D] mb-2">03</span>
              <h4 className="font-Montserrat text-[16px] md:text-[18px] font-semibold leading-[25px] text-[#0B1020]">
                Lower customer acquisition costs
              </h4>
            </div>

            <div className="flex flex-col rounded-2xl bg-white p-6 md:p-7 shadow-[0px_18px_50px_-40px_rgba(11,16,32,0.3)] border-t-[4px] border-[#FF8A3D]">
              <span className="font-Montserrat text-[14px] text-[#FF8A3D] mb-2">04</span>
              <h4 className="font-Montserrat text-[16px] md:text-[18px] font-semibold leading-[25px] text-[#0B1020]">
                Stronger, scalable performance
              </h4>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          4. WHO WE WORK WITH
          ========================================= */}
      <section className="flex w-full flex-col items-center justify-center pb-24 md:pb-[112px] px-5">
        <div className="flex w-full max-w-[1140px] flex-col rounded-[24px] bg-white p-8 md:p-12 shadow-[0px_24px_70px_-40px_rgba(11,16,32,0.3)]">
          
          <div className="mb-10 flex flex-col items-start gap-2">
            <h2 className="font-Montserrat text-[28px] md:text-[36px] font-bold tracking-[-0.9px] text-[#0B1020]">
              Who We Work With
            </h2>
            <h3 className="font-Montserrat text-[18px] md:text-[20px] font-semibold text-[#356DFF]">
              Built for Brands That Want to Scale
            </h3>
            <p className="mt-2 font-Montserrat text-[16px] md:text-[18px] font-medium text-[#0B1020]/60">
              We partner with:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            
            <div className="flex flex-col items-start rounded-2xl bg-[#F7F8FA] p-6 md:p-8">
              <svg className="mb-4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#356DFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path></svg>
              <p className="font-opensans text-[15px] md:text-[16px] leading-[26px] text-[#0B1020]/75">
                D2C brands ready to grow beyond initial traction
              </p>
            </div>

            <div className="flex flex-col items-start rounded-2xl bg-[#F7F8FA] p-6 md:p-8">
              <svg className="mb-4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#356DFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              <p className="font-opensans text-[15px] md:text-[16px] leading-[26px] text-[#0B1020]/75">
                Founders are tired of inconsistent ad results
              </p>
            </div>

            <div className="flex flex-col items-start rounded-2xl bg-[#F7F8FA] p-6 md:p-8">
              <svg className="mb-4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#356DFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              <p className="font-opensans text-[15px] md:text-[16px] leading-[26px] text-[#0B1020]/75">
                Teams looking for a reliable performance marketing agency
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}