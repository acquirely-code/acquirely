import type { Metadata } from "next";
import EdTechLanding from "./EdTechLanding";

export const metadata: Metadata = {
  title: "Acquirely | Admissions Engine for High-Ticket Education",
  description:
    "Turn ad spend into admissions with qualified traffic, lead filtering, and an enrolment-focused follow-up system.",
};

export default function EdTechPage() {
  return <EdTechLanding />;
}
