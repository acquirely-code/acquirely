import type { Metadata } from "next";
import type { ReactNode } from "react";

// The page is a client component, so its metadata lives here. Not linked from the site; kept out of the index.
export const metadata: Metadata = {
  title: "Apply Now | Acquirely",
  robots: { index: false, follow: false },
};

export default function ApplyNowLayout({ children }: { children: ReactNode }) {
  return children;
}
