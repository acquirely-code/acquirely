import { FileText, Mail } from 'lucide-react'
import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: "Acquirely | Terms of Service",
  description: "Review Acquirely's Terms of Service for performance marketing services, client responsibilities, and liability limitations.",
};

function page() {
  return (
    <div className='px-[200px] py-10 justify-center'>
            <Navbar />
    
    <div className="mx-auto max-w-4xl pt-10 space-y-10 rounded-2xl border border-[#E2E8F0] bg-white/80 p-6 shadow-sm backdrop-blur-sm sm:p-8 md:p-12 lg:p-14">

      
              {/* ---------------- TERMS OF SERVICE SECTION ---------------- */}
              <div className="mt-16 space-y-10 pt-10 sm:mt-20">
                <div className="border-b border-[#E2E8F0] pb-5">
                  <h2 className="flex items-center gap-3 font-Montserrat text-2xl font-extrabold text-[#0F172A] sm:text-3xl">
                    <FileText className="h-7 w-7 text-[#8B5CF6]" />
                    Terms of Service
                  </h2>
                </div>

                {/* Services Rendered */}
                <section>
                  <h3 className="mb-5 flex items-center gap-3 font-Montserrat text-xl font-bold text-[#0F172A] sm:text-2xl">
                    <div className="h-8 w-2 rounded-full bg-[#8B5CF6]"></div>
                    Services Provided
                  </h3>
                  <div className="rounded-xl bg-[#F8FAFC] p-6 sm:p-8">
                    <p className="font-opensans text-base leading-relaxed text-[#475569]">
                      Acquirely provides performance marketing services, including but not limited to: media buying, ad creative strategy, campaign management, funnel creation, and conversion rate optimization (CRO). Specific deliverables are outlined in your individual client agreement.
                    </p>
                  </div>
                </section>

                {/* Client Responsibilities */}
                <section>
                  <h3 className="mb-5 flex items-center gap-3 font-Montserrat text-xl font-bold text-[#0F172A] sm:text-2xl">
                    <div className="h-8 w-2 rounded-full bg-[#F97316]"></div>
                    Client Responsibilities & Ad Spend
                  </h3>
                  <div className="rounded-xl bg-[#F8FAFC] p-6 sm:p-8">
                    <ul className="space-y-4 font-opensans text-base leading-relaxed text-[#475569]">
                      <li>
                        <strong className="text-[#0F172A]">Ad Spend:</strong> The client is solely responsible for funding their ad accounts. Acquirely's management fees do not include ad spend paid to networks like Meta or Google.
                      </li>
                      <li>
                        <strong className="text-[#0F172A]">Assets & Compliance:</strong> The client must provide necessary access, branding assets, and approvals in a timely manner. Clients are responsible for ensuring their products, services, and offers comply with the advertising policies of the platforms we use.
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Liability */}
                <section>
                  <h3 className="mb-5 flex items-center gap-3 font-Montserrat text-xl font-bold text-[#0F172A] sm:text-2xl">
                    <div className="h-8 w-2 rounded-full bg-[#EC4899]"></div>
                    Limitation of Liability
                  </h3>
                  <div className="rounded-xl bg-[#F8FAFC] p-6 sm:p-8">
                    <p className="font-opensans text-base leading-relaxed text-[#475569]">
                      While we utilize proven frameworks (like our A3 Flywheel) to scale brands profitably, marketing is subject to market variables. Unless expressly stated in a specific performance guarantee contract, Acquirely does not guarantee specific revenue outcomes. Furthermore, Acquirely is not liable for account suspensions or bans initiated by third-party ad networks (e.g., Meta, Google).
                    </p>
                  </div>
                </section>
              </div>

              {/* ---------------- CONTACT SECTION ---------------- */}
              <section className="mt-16 pt-10 sm:mt-20">
                <h2 className="mb-6 flex items-center gap-3 font-Montserrat text-2xl font-bold text-[#0F172A] sm:text-3xl">
                  <div className="h-8 w-2 rounded-full bg-[#14B8A6]"></div>
                  Contact Us
                </h2>
                <div className="rounded-xl bg-[linear-gradient(102.78deg,rgba(99,102,241,0.05)_0%,rgba(79,70,229,0.05)_100%)] p-6 border border-[#E2E8F0] sm:p-8">
                  <p className="mb-5 font-opensans text-base leading-relaxed text-[#475569]">
                    If you have any questions about this Privacy Policy, our Terms of Service, or your ongoing campaigns, please don't hesitate to reach out to our team:
                  </p>
                  <div className="flex items-center gap-3 font-Montserrat font-semibold text-[#2563EB]">
                    <Mail className="h-6 w-6" />
                    <a
                      href="mailto:hello@acquirely.in"
                      className="transition-colors duration-200 hover:text-[#1D4ED8] underline decoration-2 underline-offset-4"
                    >
                      hello@acquirely.in
                    </a>
                  </div>
                </div>
              </section>
         
      
    </div>
         <Footer/>
    </div>
  )
}

export default page
