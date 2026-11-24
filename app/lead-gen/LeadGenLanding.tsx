"use client";

import { useEffect, useRef, useState } from "react";
import { ecomBody as openSans, ecomDisplay as montserrat } from "@/lib/fonts";
import AuditFormModal from "@/components/audit-form/AuditFormModal";
import markup from "./markup";
import useLandingScripts from "../ecommerce/useLandingScripts";
import "../ecommerce/ecommerce.css";
import "./lead-gen.css";
import "../ecommerce/ecommerce-dark.css";

// Qualified leads book here (name, email, phone and website prefilled).
const BOOKING_BASE = "https://booknow.acquirely.in/leadgenaudit/#/leadgenaudit";
const REJECTED_MESSAGE =
  "Thank you for your interest in Acquirely!\n\nBased on the details you shared, we may not be the right fit for your business at this stage. We’d love to stay in touch, so feel free to reach out again as your brand grows.";

export default function LeadGenLanding() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [auditOpen, setAuditOpen] = useState(false);
  useLandingScripts(rootRef);

  // Any [data-audit-open] CTA in the markup opens the inbuilt audit application form.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const onClick = (e: MouseEvent) => {
      if (!(e.target as Element | null)?.closest("[data-audit-open]")) return;
      e.preventDefault(); // CTAs are links (href="#apply"); keep the page from jumping.
      setAuditOpen(true);
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
      <AuditFormModal
        open={auditOpen}
        onClose={() => setAuditOpen(false)}
        fontClass={`${montserrat.variable} ${openSans.variable}`}
        ruleset="lead-gen"
        bookingBase={BOOKING_BASE}
        rejectedMessage={REJECTED_MESSAGE}
        nurtureMessage={REJECTED_MESSAGE}
      />
    </>
  );
}
