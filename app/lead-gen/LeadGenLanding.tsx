"use client";

import { useEffect, useRef } from "react";
import { ecomBody as openSans, ecomDisplay as montserrat } from "@/lib/fonts";
import markup from "./markup";
import useLandingScripts from "../ecommerce/useLandingScripts";
import "../ecommerce/ecommerce.css";
import "./lead-gen.css";
import "../ecommerce/ecommerce-dark.css";

// Same keys as Zoho's tracking script (public/zf-lead-tracking.js).
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "utm_id", "fbclid"];

function readCookie(name: string) {
  const row = document.cookie.split("; ").find((c) => c.startsWith(`${name}=`));
  return row ? decodeURIComponent(row.slice(name.length + 1)) : "";
}

export default function LeadGenLanding() {
  const rootRef = useRef<HTMLDivElement>(null);
  useLandingScripts(rootRef);

  // The CTAs link to the Zoho form in a new tab. Zoho's tracking script only fills UTMs into embedded forms,
  // so pass them on in the form URL: from this page's URL, else the cookies that script keeps for 7 days.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest<HTMLAnchorElement>('a[href*="forms.zohopublic.in"]');
      if (!a) return;
      const url = new URL(a.href);
      const page = new URLSearchParams(window.location.search);
      for (const key of UTM_KEYS) {
        const value = page.get(key) || readCookie(key);
        if (value && !url.searchParams.has(key)) url.searchParams.set(key, value);
      }
      a.href = url.toString();
    };
    root.addEventListener("click", onClick);
    return () => root.removeEventListener("click", onClick);
  }, []);

  return (
    <div
      ref={rootRef}
      className={`ecom lg ${montserrat.variable} ${openSans.variable}`}
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
}
