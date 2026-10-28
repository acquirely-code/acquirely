import type { Metadata } from "next";
import LeadGenLanding from "./LeadGenLanding";

export const metadata: Metadata = {
  title: "Lead Generation Agency for Qualified Leads | Acquirely",
  description: "Meta and Google Ads lead generation for education, fintech, real estate and B2B businesses. Our A3 Flywheel optimises for leads your sales team can close, not cheap form fills.",
  alternates: { canonical: "/lead-gen" },
};

export default function LeadGenPage() {
  return <LeadGenLanding />;
}
