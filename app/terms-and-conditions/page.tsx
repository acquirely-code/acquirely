import React from "react";
import SiteHeader from "@/components/site-chrome/SiteHeader";
import SiteFooter from "@/components/site-chrome/SiteFooter";
import { FileText, Mail, Calendar } from "lucide-react";

export const metadata = {
  title: "Terms and Conditions | Acquirely",
  description:
    "The terms that govern Acquirely's performance marketing services and the use of acquirely.in, including ad spend, fees, results and liability.",
  alternates: { canonical: "/terms-and-conditions" },
  robots: { index: false, follow: true },
};

// Each section: heading, accent colour, and either a paragraph or a list of { label, text } points.
type Section = { title: string; accent: string; body: string | { label: string; text: string }[] };

const SECTIONS: Section[] = [
  {
    title: "About These Terms",
    accent: "#3B82F6",
    body: "These Terms and Conditions apply to your use of acquirely.in and to the performance marketing services provided by Acquirely. By using this website, submitting a form, or engaging our services, you agree to these terms. Where you have signed a separate client agreement or proposal with us, that agreement takes priority over these terms wherever the two differ.",
  },
  {
    title: "Services Provided",
    accent: "#8B5CF6",
    body: "Acquirely provides performance marketing services, including media buying, ad creative strategy, campaign management on platforms such as Meta and Google, funnel and landing page creation, tracking setup, and conversion rate optimisation (CRO). The exact scope, deliverables and timelines for each client are set out in their individual proposal or agreement.",
  },
  {
    title: "Client Responsibilities & Ad Spend",
    accent: "#F97316",
    body: [
      {
        label: "Ad spend:",
        text: "The client funds their own ad accounts and pays ad platforms directly. Acquirely's fees do not include ad spend paid to Meta, Google or any other network.",
      },
      {
        label: "Access & assets:",
        text: "The client provides timely access to ad accounts, business managers, analytics, websites and brand assets, along with approvals needed to launch and run campaigns. Delays in access or approvals may delay delivery.",
      },
      {
        label: "Compliance:",
        text: "The client is responsible for making sure their products, services, offers and claims are lawful and comply with the advertising policies of the platforms we use.",
      },
      {
        label: "Accurate information:",
        text: "The client confirms that information shared with us, including product details, pricing and business data, is accurate and that they have the right to share it.",
      },
    ],
  },
  {
    title: "Fees & Payment",
    accent: "#10B981",
    body: "Fees, billing cycles and payment terms are set out in each client's proposal or agreement. Invoices are payable by the due date shown on them. Acquirely may pause work on an account while payments are overdue. Fees already paid are non-refundable unless the client agreement says otherwise.",
  },
  {
    title: "Results & No Guarantee",
    accent: "#EC4899",
    body: "We use proven frameworks, such as our A3 Flywheel, to grow brands profitably, but advertising results depend on factors outside our control, including platform algorithms, competition, seasonality, product, pricing and the client's website. Unless a written agreement expressly includes a performance guarantee, Acquirely does not guarantee any specific revenue, ROAS, lead volume or other outcome. Past results and case studies do not promise future performance.",
  },
  {
    title: "Third-Party Platforms",
    accent: "#F59E0B",
    body: "Our services rely on third-party platforms such as Meta, Google, Shopify and various CRM and funnel tools. Their use is governed by their own terms and policies. Acquirely is not responsible for ad rejections, account restrictions, suspensions, outages or policy changes made by these platforms, though we will help clients respond to them where we can.",
  },
  {
    title: "Intellectual Property",
    accent: "#6366F1",
    body: [
      {
        label: "Client materials:",
        text: "The client keeps ownership of their brand, logos, product content and other materials they provide to us.",
      },
      {
        label: "Campaign work:",
        text: "Once the related fees are paid in full, the client may use the ad creatives and copy produced for their campaigns. Acquirely keeps ownership of its own methods, frameworks, templates, tools and know-how, and may reference anonymised learnings in its work.",
      },
      {
        label: "This website:",
        text: "The content, design, calculators and resources on acquirely.in belong to Acquirely and may not be copied or reused commercially without our written permission.",
      },
    ],
  },
  {
    title: "Confidentiality",
    accent: "#14B8A6",
    body: "Both Acquirely and the client will keep confidential any non-public business, financial and customer information received from the other, and use it only to deliver or receive the services. We will not share a client's name, results or account data publicly as a case study without their permission.",
  },
  {
    title: "Limitation of Liability",
    accent: "#EF4444",
    body: "To the fullest extent permitted by law, Acquirely is not liable for any indirect, incidental or consequential loss, including lost profits, lost revenue or lost data, arising from our services or this website. Our total liability for any claim relating to our services is limited to the fees the client paid Acquirely in the three months before the claim arose.",
  },
  {
    title: "Termination",
    accent: "#0EA5E9",
    body: "Either party may end the engagement in line with the notice period in the client agreement. On termination, the client pays for work completed up to the end date, and we hand back or remove our access to the client's ad accounts and other assets.",
  },
  {
    title: "Use of This Website",
    accent: "#A855F7",
    body: "The information, blog posts and calculators on acquirely.in are for general guidance only and are not financial or legal advice. You agree not to misuse the website, submit false information through our forms, or attempt to disrupt or gain unauthorised access to it. How we handle information submitted through the site is explained in our Privacy Policy.",
  },
  {
    title: "Governing Law",
    accent: "#64748B",
    body: "These terms are governed by the laws of India. Any dispute relating to them or to our services is subject to the exclusive jurisdiction of the courts in New Delhi, India.",
  },
  {
    title: "Changes to These Terms",
    accent: "#22C55E",
    body: "We may update these terms from time to time. The latest version will always be on this page, with the date it was last updated shown below. Continuing to use the website or our services after a change means you accept the updated terms.",
  },
];

export default function TermsAndConditionsPage() {
  return (
    <>
      <SiteHeader />
      <main className="overflow-hidden bg-white text-[#0F172A]">
        {/* Background layers, matching the privacy policy page */}
        <div className="fixed right-[-5%] top-[-10%] z-0 h-[300px] w-[300px] rounded-full bg-blue-600/10 blur-[60px] md:h-[600px] md:w-[600px]" />
        <div className="fixed bottom-[-10%] left-[-5%] z-0 h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-[50px] md:h-[600px] md:w-[600px]" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1440px] flex-col px-4 sm:px-5 md:px-10 lg:px-[80px]">
          {/* Space for the sticky SiteHeader */}
          <div className="h-[80px]" aria-hidden="true" />

          <div className="flex-grow py-12 md:py-20 lg:py-24">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 text-center md:mb-16">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#F5F3FF]">
                  <FileText className="h-8 w-8 text-[#8B5CF6]" />
                </div>
                <h1 className="font-Montserrat text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl lg:text-6xl">
                  Terms and Conditions
                </h1>
                <p className="mx-auto mt-5 max-w-2xl font-opensans text-base leading-relaxed text-[#475569] sm:text-lg md:text-xl">
                  The terms that govern our performance marketing services and your use of the Acquirely website.
                </p>
              </div>

              <div className="rounded-2xl border border-[#E2E8F0] bg-white/80 p-6 shadow-sm backdrop-blur-sm sm:p-8 md:p-12 lg:p-14">
                <div className="space-y-10">
                  {SECTIONS.map((section) => (
                    <section key={section.title}>
                      <h2 className="mb-5 flex items-center gap-3 font-Montserrat text-xl font-bold text-[#0F172A] sm:text-2xl">
                        <div className="h-8 w-2 shrink-0 rounded-full" style={{ backgroundColor: section.accent }} />
                        {section.title}
                      </h2>
                      <div className="rounded-xl bg-[#F8FAFC] p-6 sm:p-8">
                        {typeof section.body === "string" ? (
                          <p className="font-opensans text-base leading-relaxed text-[#475569]">{section.body}</p>
                        ) : (
                          <ul className="space-y-4 font-opensans text-base leading-relaxed text-[#475569]">
                            {section.body.map((point) => (
                              <li key={point.label}>
                                <strong className="text-[#0F172A]">{point.label}</strong> {point.text}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </section>
                  ))}

                  <section>
                    <h2 className="mb-5 flex items-center gap-3 font-Montserrat text-xl font-bold text-[#0F172A] sm:text-2xl">
                      <div className="h-8 w-2 shrink-0 rounded-full bg-[#2563EB]" />
                      Contact Us
                    </h2>
                    <div className="rounded-xl border border-[#E2E8F0] bg-[linear-gradient(102.78deg,rgba(99,102,241,0.05)_0%,rgba(79,70,229,0.05)_100%)] p-6 sm:p-8">
                      <p className="mb-5 font-opensans text-base leading-relaxed text-[#475569]">
                        Questions about these terms? Reach our team at:
                      </p>
                      <div className="flex items-center gap-3 font-Montserrat font-semibold text-[#2563EB]">
                        <Mail className="h-6 w-6" />
                        <a
                          href="mailto:team@acquirely.in"
                          className="underline decoration-2 underline-offset-4 transition-colors duration-200 hover:text-[#1D4ED8]"
                        >
                          team@acquirely.in
                        </a>
                      </div>
                    </div>
                  </section>
                </div>

                <div className="mt-12 border-t border-[#E2E8F0] pt-8">
                  <div className="flex items-center justify-center gap-2 font-opensans text-sm font-medium text-[#64748B]">
                    <Calendar className="h-4 w-4" />
                    <span>Last updated: November 2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
