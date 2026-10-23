import type { Metadata, Viewport } from "next";
import EdTechLanding from "./EdTechLanding";

export const metadata: Metadata = {
  title: "School Lead Generation for EdTech Companies | Acquirely",
  description:
    "Stop pitching the front desk. We get principals, directors and trustees booking calls with you, the people who actually sign off.",
  alternates: { canonical: "/edtech" },
};

export const viewport: Viewport = {
  themeColor: "#0F0C29",
  viewportFit: "cover",
};

export default function EdTechPage() {
  return <EdTechLanding />;
}
