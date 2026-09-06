import type { Metadata } from "next";
import EdTechLanding from "./EdTechLanding";

export const metadata: Metadata = {
  title: "Acquirely | Reach the School Decision-Makers",
  description:
    "Stop pitching the front desk. We get principals, directors and trustees booking calls with you, the people who actually sign off.",
};

export default function EdTechPage() {
  return <EdTechLanding />;
}
