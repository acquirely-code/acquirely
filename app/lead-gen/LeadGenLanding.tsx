"use client";

import { useEffect, useRef, useState } from "react";
import { Montserrat, Open_Sans } from "next/font/google";
import AuditFormModal from "@/components/audit-form/AuditFormModal";
import markup from "./markup";
import useLandingScripts from "../ecommerce/useLandingScripts";
import "../ecommerce/ecommerce.css";
import "./lead-gen.css";
import "../ecommerce/ecommerce-dark.css";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-ecom-display" });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-ecom-body" });

export default function LeadGenLanding() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [auditOpen, setAuditOpen] = useState(false);
  useLandingScripts(rootRef);

  // Any [data-audit-open] button in the markup opens the inbuilt audit application form.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const onClick = (e: MouseEvent) => {
      if ((e.target as Element | null)?.closest("[data-audit-open]")) setAuditOpen(true);
    };
    root.addEventListener("click", onClick);
    return () => root.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      <div
        ref={rootRef}
        className={`ecom lg ${montserrat.variable} ${openSans.variable}`}
        dangerouslySetInnerHTML={{ __html: markup }}
      />
      <AuditFormModal open={auditOpen} onClose={() => setAuditOpen(false)} fontClass={`${montserrat.variable} ${openSans.variable}`} />
    </>
  );
}
