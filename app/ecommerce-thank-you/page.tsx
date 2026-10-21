import type { Metadata } from "next";
import EcommerceThankYou from "./EcommerceThankYou";

export const metadata: Metadata = {
  title: "Thank you | Acquirely",
  description:
    "Your A3 Flywheel playbook is on its way. Meanwhile, see how we lifted a D2C brand's Meta ROAS from 2.07 to 3.65.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function EcommerceThankYouPage() {
  return <EcommerceThankYou />;
}
