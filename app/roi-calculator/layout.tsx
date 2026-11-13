import type { Viewport } from "next";
import { montserrat } from "@/lib/fonts";
import { pageMetadata } from "./_lib/seo";
import "../ecommerce-calculator/calculator.css";
import "./roi.css";

export const metadata = pageMetadata;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#FFFFFF",
};

export default function RoiCalculatorLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className={`ecalc roi-calc ${montserrat.variable}`}>{children}</div>;
}
