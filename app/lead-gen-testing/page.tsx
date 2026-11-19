import type { Metadata } from "next";
import LeadGenTestingLanding from "./LeadGenTestingLanding";

// Test copy of /lead-gen with the inbuilt audit form. Kept out of search.
export const metadata: Metadata = {
  title: "Lead Generation Agency for Qualified Leads | Acquirely",
  description: "Meta and Google Ads lead generation for education, fintech, real estate and B2B businesses. Our A3 Flywheel optimises for leads your sales team can close, not cheap form fills.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function LeadGenTestingPage() {
  return <LeadGenTestingLanding />;
}
