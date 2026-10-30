"use client";

import { useEffect, useRef } from "react";
import { Montserrat, Open_Sans } from "next/font/google";
import markup from "./markup";
import useLandingScripts from "../ecommerce/useLandingScripts";
import "../ecommerce/ecommerce.css";
import "../ecommerce-thank-you/thank-you.css";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-ecom-display" });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-ecom-body" });

export default function LeadGenLinkedInThankYou() {
  const rootRef = useRef<HTMLDivElement>(null);
  useLandingScripts(rootRef);

  // Greet by first name when the form redirect passes ?name= (or ?tve_name=).
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const name = (q.get("name") || q.get("tve_name") || "").trim().split(/\s+/)[0];
    const greet = rootRef.current?.querySelector("#tyName");
    if (name && name.length < 40 && greet) {
      greet.textContent = `${name}, a calendar invite and WhatsApp confirmation are on their way. Before we speak, discover…`;
    }
  }, []);

  return (
    <div
      ref={rootRef}
      className={`ecom ${montserrat.variable} ${openSans.variable}`}
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
}
