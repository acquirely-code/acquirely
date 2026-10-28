import type { Metadata } from "next";
import HomeLanding from "./HomeLanding";

export const metadata: Metadata = {
  title: "Full-Funnel Growth Agency for D2C & Lead-Gen Brands | Acquirely",
  description: "Acquirely runs the whole growth funnel for D2C and lead-gen brands: Meta, Google, LinkedIn, marketplaces, website and CRO. Up to 5x revenue in 90 days, qualified leads 10% → 50%.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return <HomeLanding />;
}
