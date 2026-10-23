import type { Metadata } from "next";
import EcommerceLanding from "./EcommerceLanding";

export const metadata: Metadata = {
  title: "Acquirely | Paid Ads for D2C & Ecommerce Brands",
  description:
    "How 20+ D2C and ecommerce brands scaled Meta Ads profitably after Andromeda with Acquirely's A3 Flywheel. 5x revenue, ROAS 2.7 → 4.2, month-to-month.",
  alternates: { canonical: "/ecommerce" },
};

export default function EcommercePage() {
  return <EcommerceLanding />;
}
