import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import { GoogleTagManager } from '@next/third-parties/google'; // Import the official component

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Acquirely - Scaling Brands That Matter.",
  description:
    "Scale your ecommerce brand with top Meta Ads performance marketing. Predictable ROAS, proven results.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-[#f7f9fc] text-slate-950 antialiased">
        <GoogleTagManager gtmId="GTM-WJVQR59V" />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
      {/* Add the component here at the end of the body */}
      
    </html>
  );
}