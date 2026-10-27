import type { Metadata } from "next";
import LeadGenLanding from "./LeadGenLanding";

export const metadata: Metadata = {
  title: "Meta Ads Agency for Qualified Leads | Acquirely",
  description: "Meta Ads lead generation for multi-location and online brands. Our A3 Flywheel optimises for leads your sales team can close, not cheap form fills.",
  alternates: { canonical: "/lead-gen" },
};

export default function LeadGenPage() {
  return <LeadGenLanding />;
}
