import type { Metadata } from "next";
import PublishersThankYou from "./PublishersThankYou";

export const metadata: Metadata = {
  title: "You're Booked | Acquirely Publishers",
  description:
    "Your call with Acquirely is booked. Meanwhile, see how we got Propel Curriculum 150+ paid principal registrations in two months.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PublishersThankYouPage() {
  return <PublishersThankYou />;
}
