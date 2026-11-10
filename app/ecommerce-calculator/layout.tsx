import type { Metadata, Viewport } from "next";
import { montserrat } from "@/lib/fonts";
import { pageMetadata } from "@/app/ecommerce-calculator/_lib/seo";
import "./calculator.css";

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
