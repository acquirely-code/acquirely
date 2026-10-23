import DoneForYouLandingPage from "@/components/DoneForYouLandingPage";

// Same landing page as /lead-gen, which is the indexed version.
export const metadata = {
  title: "Acquirely | Meta Ads Agency for Qualified Leads ",
  description: "Scale Meta Ads with qualified leads using our A3 Flywheel. Stop wasting budget on junk leads.",
  alternates: { canonical: "/lead-gen" },
};

export default function DoneForYouPage() {
  return <DoneForYouLandingPage />;
}
