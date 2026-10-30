import type { Metadata } from "next";
import LeadGenLinkedInThankYou from "./LeadGenLinkedInThankYou";

export const metadata: Metadata = {
  title: "You're Booked | Acquirely Lead Generation",
  description:
    "Your call with Acquirely is booked. Meanwhile, see how we got Right Source Aviation 5x more sales-qualified leads at the same cost per lead.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function LeadGenLinkedInThankYouPage() {
  return <LeadGenLinkedInThankYou />;
}
