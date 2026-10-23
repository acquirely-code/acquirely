import DoneForYouLandingPage from "@/components/DoneForYouLandingPage";

// Same landing page as /lead-gen, which is the indexed version.
export const metadata = {
  title: "Meta Ads Agency for Qualified Leads | Acquirely",
  description: "Meta Ads lead generation for multi-location and online brands. Our A3 Flywheel optimises for leads your sales team can close, not cheap form fills.",
  alternates: { canonical: "/lead-gen" },
};

export default function DoneForYouPage() {
  return <DoneForYouLandingPage />;
}
