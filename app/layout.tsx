import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import { GoogleTagManager } from '@next/third-parties/google';
import { SITE_URL } from "@/lib/site";
import { THEME_INIT } from "./ecommerce/theme";

const META_PIXEL_ID = "1087526939518742";

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
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
        {/* Meta Pixel loader, before GTM. The pixel itself is initialised by GTM; this only turns off Meta's automatic
            button-click detection (SubscribedButtonClick), which must be set before init. GTM's pixel snippet sees
            fbq already exists and reuses it, so its init and events queue behind this. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('set','autoConfig',false,'${META_PIXEL_ID}');`,
          }}
        />
        {/* Google AdSense. A plain tag, not next/script: AdSense warns about the data-nscript attribute that next/script adds. */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9481631653052680"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen bg-[#f7f9fc] text-slate-950 antialiased">
        <Script src="/zf-lead-tracking.js" strategy="beforeInteractive" />
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WJVQR59V" height="0" width="0" style="display:none;visibility:hidden"></iframe>',
          }}
        />
        <GoogleTagManager gtmId="GTM-WJVQR59V" />

        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}