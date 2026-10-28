import type { Metadata } from "next";
import LeadGenThankYou from "./LeadGenThankYou";

export const metadata: Metadata = {
  title: "You're Booked | Acquirely Lead Generation",
  description:
    "Your call with Acquirely is booked. Meanwhile, see how we got Right Source Aviation 3x more enrollment inquiries for a ₹60–80 lakh pilot course.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function LeadGenThankYouPage() {
  return <LeadGenThankYou />;
}
