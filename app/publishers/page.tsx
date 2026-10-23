import type { Metadata } from "next";
import PublishersLanding from "./PublishersLanding";

export const metadata: Metadata = {
  title: "School Lead Generation for Book Publishers | Acquirely",
  description:
    "Stop selling books one school visit at a time. Get school decision-makers to book calls with you — right when they choose next year's curriculum.",
  alternates: { canonical: "/publishers" },
};

export default function PublishersPage() {
  return <PublishersLanding />;
}
