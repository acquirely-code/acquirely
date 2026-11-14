import type { Metadata } from "next";
import HomeLanding from "./HomeLanding";

export const metadata: Metadata = {
  title: "Performance Marketing Agency for D2C & Lead-Gen - Acquirely",
  description: "Acquirely runs your full growth funnel: Meta, Google, landing pages and CRO. 20+ D2C and lead-gen brands, up to 5x revenue in 90 days. Book a free call.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return <HomeLanding />;
}
