import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import { pageMetadata } from "@/app/ecommerce-calculator/_lib/seo";
import "./calculator.css";

// Same typeface as acquirely.in, self-hosted by next/font. Variable font: one file covers every weight used.
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = pageMetadata;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#FFFFFF",
};

export default function EcommerceCalculatorLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className={`ecalc ${montserrat.variable}`}>{children}</div>;
}
