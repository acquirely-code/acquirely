import type { Metadata } from "next";
import FunnelReviewThankYou from "./FunnelReviewThankYou";

export const metadata: Metadata = {
  title: "You're Booked | Acquirely Funnel Review Call",
  description:
    "Your Funnel Review Call with Acquirely is booked. Meanwhile, see how we scaled TacTow, a D2C puzzle brand, from ₹8 lakh to ₹40 lakh a month with Meta Ads in 90 days.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function FunnelReviewThankYouPage() {
  return <FunnelReviewThankYou />;
}
