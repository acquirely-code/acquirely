import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import { GoogleTagManager } from '@next/third-parties/google';
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Acquirely - Best Performance Marketing Agency for Ecommerce Brands.",
  description:
    "Scale your e-commerce brand with a top Meta Ads performance marketing agency. Predictable ROAS, proven results",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Meta Pixel Script */}
      </head>
      <body className="min-h-screen bg-[#f7f9fc] text-slate-950 antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WJVQR59V" height="0" width="0" style="display:none;visibility:hidden"></iframe>',
          }}
        />
        <GoogleTagManager gtmId="GTM-WJVQR59V" />
        
        {/* Meta Pixel Fallback — raw HTML so React doesn't preload the image, which would fire a duplicate PageView */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1087526939518742&ev=PageView&noscript=1" alt="" />',
          }}
        />

        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}