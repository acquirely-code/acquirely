"use client";

import { useRef } from "react";
import { Montserrat, Open_Sans } from "next/font/google";
import markup from "./markup";
import useLandingScripts from "../ecommerce/useLandingScripts";
import "../ecommerce/ecommerce.css";
import "./publishers.css";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-ecom-display" });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-ecom-body" });

export default function PublishersLanding() {
  const rootRef = useRef<HTMLDivElement>(null);
  useLandingScripts(rootRef);

  return (
    <div
      ref={rootRef}
      className={`ecom pub ${montserrat.variable} ${openSans.variable}`}
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
}
