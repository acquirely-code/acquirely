

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Mail, Calendar, FileText } from "lucide-react";

export const metadata = {
  title: "Acquirely | Privacy Policy",
  description: "Scale Meta Ads with qualified leads using our A3 Flywheel. Stop wasting budget junk leads.",
};

export default function PrivacyAndTermsPage() {
  return (
    <main className="overflow-hidden bg-white text-[#0F172A]">
      {/* Premium Background Layers (Matching Homepage) */}
      <div className="fixed right-[-5%] top-[-10%] z-0 h-[300px] w-[300px] rounded-full bg-blue-600/10 blur-[60px] md:h-[600px] md:w-[600px]" />
      <div className="fixed bottom-[-10%] left-[-5%] z-0 h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-[50px] md:h-[600px] md:w-[600px]" />

      <div className="relative z-10 mx-auto flex min-h-screen flex-col max-w-[1440px] px-4 sm:px-5 md:px-10 lg:px-[80px]">
        
        {/* Navbar Integration */}
        <div className="pt-8 md:pt-[46px]">
          <Navbar />
        </div>

        {/* Page Content Wrapper */}
        <div className="flex-grow py-12 md:py-20 lg:py-24">
          <div className="mx-auto max-w-4xl">
            
            {/* Header Section */}
            <div className="mb-12 text-center md:mb-16">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#EFF6FF]">
                <Shield className="h-8 w-8 text-[#2563EB]" />
              </div>
              <h1 className="font-Montserrat text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl lg:text-6xl">
                Privacy Policy &{" "}
              </h1>
              <p className="mx-auto mt-5 max-w-2xl font-opensans text-base leading-relaxed text-[#475569] sm:text-lg md:text-xl">
                Everything you need to know about how Acquirely handles your data, protects your privacy, and the terms governing our marketing services.
              </p>
            </div>

            {/* Main Content Card */}
            <div className="rounded-2xl border border-[#E2E8F0] bg-white/80 p-6 shadow-sm backdrop-blur-sm sm:p-8 md:p-12 lg:p-14">
              
              {/* ---------------- PRIVACY POLICY SECTION ---------------- */}
              <div className="space-y-10">
                <div className="border-b border-[#E2E8F0] pb-5">
                  <h2 className="flex items-center gap-3 font-Montserrat text-2xl font-extrabold text-[#0F172A] sm:text-3xl">
                    <Shield className="h-7 w-7 text-[#6366F1]" />
                    Privacy Policy
                  </h2>
                </div>

                {/* Introduction */}
                <section>
                  <p className="font-opensans text-base leading-relaxed text-[#475569] sm:text-lg">
                    Welcome to <span className="font-bold text-[#2563EB]">Acquirely</span>. As a performance marketing agency specializing in ad management and high-converting funnels, we take the privacy of our clients and their customers seriously. This policy outlines how we collect, use, and safeguard the data entrusted to us.
                  </p>
                </section>

                {/* Information Collection */}
                <section>
                  <h3 className="mb-5 flex items-center gap-3 font-Montserrat text-xl font-bold text-[#0F172A] sm:text-2xl">
                    <div className="h-8 w-2 rounded-full bg-[#3B82F6]"></div>
                    Information We Collect
                  </h3>
                  <div className="rounded-xl bg-[#F8FAFC] p-6 sm:p-8">
                    <ul className="space-y-4 font-opensans text-base leading-relaxed text-[#475569]">
                      <li>
                        <strong className="text-[#0F172A]">Client Information:</strong> When you partner with us, we collect business details, billing information, and contact details necessary to provide our marketing services.
                      </li>
                      <li>
                        <strong className="text-[#0F172A]">Marketing & Campaign Data:</strong> We request access to your ad accounts (Meta, Google, etc.), analytics platforms, and funnel builders. We process data generated from these platforms, including pixel data, conversion metrics, and lead information generated via our funnels.
                      </li>
                    </ul>
                  </div>
                </section>

                {/* How We Use Information */}
                <section>
                  <h3 className="mb-5 flex items-center gap-3 font-Montserrat text-xl font-bold text-[#0F172A] sm:text-2xl">
                    <div className="h-8 w-2 rounded-full bg-[#10B981]"></div>
                    How We Use Your Information
                  </h3>
                  <div className="rounded-xl bg-[#F8FAFC] p-6 sm:p-8">
                    <p className="font-opensans text-base leading-relaxed text-[#475569]">
                      We use the collected information strictly to execute performance marketing campaigns, optimize your sales funnels, report on ROAS and campaign metrics, and communicate directly with you regarding strategy and billing. We do not sell your data or your customers' data to third parties.
                    </p>
                  </div>
                </section>

                {/* Third Party Services */}
                <section>
                  <h3 className="mb-5 flex items-center gap-3 font-Montserrat text-xl font-bold text-[#0F172A] sm:text-2xl">
                    <div className="h-8 w-2 rounded-full bg-[#F59E0B]"></div>
                    Third-Party Platforms
                  </h3>
                  <div className="rounded-xl bg-[#F8FAFC] p-6 sm:p-8">
                    <p className="font-opensans text-base leading-relaxed text-[#475569]">
                      To deliver our services, we interact with third-party platforms such as Meta Ads, Google Ads, Shopify, WordPress, and various CRM/funnel software. The data processed through these networks is subject to their respective privacy policies.
                    </p>
                  </div>
                </section>

                {/* Data Security */}
                <section>
                  <h3 className="mb-5 flex items-center gap-3 font-Montserrat text-xl font-bold text-[#0F172A] sm:text-2xl">
                    <div className="h-8 w-2 rounded-full bg-[#EF4444]"></div>
                    Data Security & Access
                  </h3>
                  <div className="rounded-xl bg-[#F8FAFC] p-6 sm:p-8">
                    <p className="font-opensans text-base leading-relaxed text-[#475569]">
                      We implement strict internal access controls to ensure your ad accounts, business managers, and customer data are only accessible to the Acquirely team members directly working on your account. We employ industry-standard security measures to protect your digital assets.
                    </p>
                  </div>
                </section>
              </div>


              {/* Footer Date Stamp */}
              <div className="mt-12 border-t border-[#E2E8F0] pt-8">
                <div className="flex items-center justify-center gap-2 font-opensans text-sm font-medium text-[#64748B]">
                  <Calendar className="h-4 w-4" />
                  <span>Last updated: April 2026</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Footer Integration */}
    
      </div>
          <Footer />
    </main>
  );
}