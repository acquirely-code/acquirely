"use client";

import { useRef } from "react";
import { ecomBody as openSans, ecomDisplay as montserrat } from "@/lib/fonts";
import markup from "./markup";
import useLandingScripts from "./useLandingScripts";
import "./ecommerce.css";
import "./ecommerce-dark.css";

export default function EcommerceLanding() {
  const rootRef = useRef<HTMLDivElement>(null);
  useLandingScripts(rootRef);

  return (
    <div
      ref={rootRef}
      className={`ecom ${montserrat.variable} ${openSans.variable}`}
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
}
