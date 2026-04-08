import React from 'react';
import { Shield, Mail, Calendar, FileText } from 'lucide-react';

function PrivacyAndTermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200 font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-6">
              <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Privacy Policy & Terms of Service
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about how Acquirely handles your data, protects your privacy, and the terms governing our marketing services.
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10 space-y-12">
            
            {/* ---------------- PRIVACY POLICY SECTION ---------------- */}
            <div className="space-y-8">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white flex items-center gap-3">
                  <Shield className="w-6 h-6 text-blue-500" />
                  Privacy Policy
                </h2>
              </div>

              {/* Introduction */}
              <section className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
                  Welcome to <span className="font-semibold text-blue-600 dark:text-blue-400">Acquirely</span>. 
                  As a performance marketing agency specializing in ad management and high-converting funnels, 
                  we take the privacy of our clients and their customers seriously. This policy outlines how we 
                  collect, use, and safeguard the data entrusted to us.
                </p>
              </section>

              {/* Information Collection */}
              <section>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <div className="w-2 h-8 bg-blue-500 rounded-full"></div>
                  Information We Collect
                </h3>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 space-y-4">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    <strong>Client Information:</strong> When you partner with us, we collect business details, billing information, 
                    and contact details necessary to provide our marketing services.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    <strong>Marketing & Campaign Data:</strong> We request access to your ad accounts (Meta, Google, etc.), 
                    analytics platforms, and funnel builders. We process data generated from these platforms, including 
                    pixel data, conversion metrics, and lead information generated via our funnels.
                  </p>
                </div>
              </section>

              {/* How We Use Information */}
              <section>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <div className="w-2 h-8 bg-green-500 rounded-full"></div>
                  How We Use Your Information
                </h3>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    We use the collected information strictly to execute performance marketing campaigns, optimize your 
                    sales funnels, report on ROAS and campaign metrics, and communicate directly with you regarding strategy 
                    and billing. We do not sell your data or your customers' data to third parties.
                  </p>
                </div>
              </section>

              {/* Third Party Services */}
              <section>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <div className="w-2 h-8 bg-yellow-500 rounded-full"></div>
                  Third-Party Platforms
                </h3>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    To deliver our services, we interact with third-party platforms such as Meta Ads, Google Ads, 
                    Shopify, WordPress, and various CRM/funnel software. The data processed through these networks is 
                    subject to their respective privacy policies.
                  </p>
                </div>
              </section>

              {/* Data Security */}
              <section>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <div className="w-2 h-8 bg-red-500 rounded-full"></div>
                  Data Security & Access
                </h3>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    We implement strict internal access controls to ensure your ad accounts, business managers, and 
                    customer data are only accessible to the Acquirely team members directly working on your account. 
                    We employ industry-standard security measures to protect your digital assets.
                  </p>
                </div>
              </section>
            </div>


            {/* ---------------- TERMS OF SERVICE SECTION ---------------- */}
            <div className="space-y-8 pt-8">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white flex items-center gap-3">
                  <FileText className="w-6 h-6 text-indigo-500" />
                  Terms of Service
                </h2>
              </div>

              {/* Services Rendered */}
              <section>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <div className="w-2 h-8 bg-purple-500 rounded-full"></div>
                  Services Provided
                </h3>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Acquirely provides performance marketing services, including but not limited to: media buying, ad creative strategy, 
                    campaign management, funnel creation, and conversion rate optimization (CRO). Specific deliverables 
                    are outlined in your individual client agreement.
                  </p>
                </div>
              </section>

              {/* Client Responsibilities */}
              <section>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <div className="w-2 h-8 bg-orange-500 rounded-full"></div>
                  Client Responsibilities & Ad Spend
                </h3>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 space-y-4">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    <strong>Ad Spend:</strong> The client is solely responsible for funding their ad accounts. Acquirely's management fees 
                    do not include ad spend paid to networks like Meta or Google.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    <strong>Assets & Compliance:</strong> The client must provide necessary access, branding assets, and approvals in a timely manner. 
                    Clients are responsible for ensuring their products, services, and offers comply with the advertising policies of the platforms we use.
                  </p>
                </div>
              </section>

              {/* Liability */}
              <section>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <div className="w-2 h-8 bg-pink-500 rounded-full"></div>
                  Limitation of Liability
                </h3>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    While we utilize proven frameworks (like our A3 Flywheel) to scale brands profitably, marketing is subject to market variables. 
                    Unless expressly stated in a specific performance guarantee contract, Acquirely does not guarantee specific revenue outcomes. 
                    Furthermore, Acquirely is not liable for account suspensions or bans initiated by third-party ad networks (e.g., Meta, Google).
                  </p>
                </div>
              </section>
            </div>

            {/* ---------------- CONTACT & FOOTER ---------------- */}
            <section className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                <div className="w-2 h-8 bg-teal-500 rounded-full"></div>
                Contact Us
              </h2>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-6">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy, our Terms of Service, or your ongoing campaigns, 
                  please don't hesitate to reach out to our team:
                </p>
                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium">
                  <Mail className="w-5 h-5" />
                  <a 
                    href="mailto:hello@acquirely.in" 
                    className="hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200 underline decoration-2 underline-offset-4"
                  >
                    hello@acquirely.in
                  </a>
                </div>
              </div>
            </section>

            {/* Footer */}
            <div className="border-t border-gray-200 dark:border-gray-600 pt-6">
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <Calendar className="w-4 h-4" />
                <span>Last updated: April 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyAndTermsPage;