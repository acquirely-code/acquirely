import type { Metadata } from "next";
import EcommerceThankYou from "./EcommerceThankYou";

export const metadata: Metadata = {
  title: "How TacTow Scaled From ₹8L to ₹40L a Month With Meta Ads | Acquirely",
  description:
    "Your A3 Flywheel playbook is on its way. Meanwhile, see how we scaled TacTow, a D2C puzzle brand, from ₹8 lakh to ₹40 lakh a month with Meta Ads in 90 days.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function EcommerceThankYouPage() {
  return <EcommerceThankYou />;
}
