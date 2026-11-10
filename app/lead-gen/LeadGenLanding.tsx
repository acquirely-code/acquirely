"use client";

import { useEffect, useRef, useState } from "react";
import { ecomBody as openSans, ecomDisplay as montserrat } from "@/lib/fonts";
import AuditFormModal from "@/components/audit-form/AuditFormModal";
import markup from "./markup";
import useLandingScripts from "../ecommerce/useLandingScripts";
import "../ecommerce/ecommerce.css";
import "./lead-gen.css";
import "../ecommerce/ecommerce-dark.css";

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
