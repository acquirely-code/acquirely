"use client";

import { useRef } from "react";
import { ecomBody as openSans, ecomDisplay as montserrat } from "@/lib/fonts";
import markup from "./markup";
import useLandingScripts from "../ecommerce/useLandingScripts";
import "../ecommerce/ecommerce.css";
import "./lead-gen.css";
import "../ecommerce/ecommerce-dark.css";

export default function LeadGenLinkedInLanding() {
  const rootRef = useRef<HTMLDivElement>(null);
  useLandingScripts(rootRef);

  return (
    <div
      ref={rootRef}
      className={`ecom lg ${montserrat.variable} ${openSans.variable}`}
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
}
