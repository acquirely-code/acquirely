import type { Metadata } from "next";
import LeadGenTestingThankYou from "./LeadGenTestingThankYou";

export const metadata: Metadata = {
  title: "You're Booked | Acquirely Lead Generation",
  description:
    "Your call with Acquirely is booked. Meanwhile, see how we cut Kashti’s cost per lead to ₹12 and scaled spend 20x.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function LeadGenTestingThankYouPage() {
  return <LeadGenTestingThankYou />;
}
