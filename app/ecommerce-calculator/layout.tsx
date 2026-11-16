import type { Metadata, Viewport } from "next";
import { montserrat, openSans } from "@/lib/fonts";
import { pageMetadata } from "@/app/ecommerce-calculator/_lib/seo";
import "./calculator.css";

export const metadata: Metadata = pageMetadata;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#0D121D" },
  ],
};

// The root layout's THEME_INIT script sets data-theme before paint (same "acq-theme" key), so dark mode never flashes.
export default function EcommerceCalculatorLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className={`ecalc ${montserrat.variable} ${openSans.variable}`}>{children}</div>;
}
