"use client";

import { useEffect, useRef } from "react";
import { ecomBody as openSans, ecomDisplay as montserrat } from "@/lib/fonts";
import { trackMetaLead } from "@/lib/audit-form/tracking";
import markup from "./markup";
import useLandingScripts from "../ecommerce/useLandingScripts";
import "../ecommerce/ecommerce.css";
import "../ecommerce-thank-you/thank-you.css";
import "../ecommerce/ecommerce-dark.css";

export default function LeadGenTestingThankYou() {
  const rootRef = useRef<HTMLDivElement>(null);
  useLandingScripts(rootRef);

  // Reaching this page means a call was booked: count it as a Meta Lead.
  useEffect(() => {
    trackMetaLead();
  }, []);

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
