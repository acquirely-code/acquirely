"use client";

import { useEffect, useRef, useState } from "react";
import { ecomBody as openSans, ecomDisplay as montserrat } from "@/lib/fonts";
import AuditFormModal from "@/components/audit-form/AuditFormModal";
import { trackCtaAddToCart } from "@/lib/audit-form/tracking";
import markup from "./markup";
import useLandingScripts from "../../ecommerce/useLandingScripts";
import "../../ecommerce/ecommerce.css";
import "./home.css";
import "../../ecommerce/ecommerce-dark.css";

// Qualified Funnel Review Call leads book here (name, email, phone and website prefilled). Keep the
// "/<page>/#/<page>" form so the prefill works.
const FRC_BOOKING_BASE = "https://booknow.acquirely.in/D2CFRC/#/D2CFRC";
const REJECTED_MESSAGE =
  "Thank you for your interest in Acquirely!\nBased on the details you shared, we may not be the right fit for your business at this stage. We’d love to stay in touch, so feel free to reach out again as your brand grows.";

export default function HomeLanding() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [formOpen, setFormOpen] = useState(false);
  useLandingScripts(rootRef);

  // Any [data-audit-open] CTA in the markup (including the header's "Book a Call") opens the Funnel Review Call form.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const onClick = (e: MouseEvent) => {
      const cta = (e.target as Element | null)?.closest("[data-audit-open]");
      if (!cta) return;
      e.preventDefault(); // CTAs are links (href="#apply"); keep the page from jumping.
      trackCtaAddToCart(cta);
      setFormOpen(true);
    };
    root.addEventListener("click", onClick);
    return () => root.removeEventListener("click", onClick);
  }, []);

  // Case-study filter tabs: All / D2C / Lead gen.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const buttons = Array.from(root.querySelectorAll<HTMLButtonElement>(".hm-tabs button"));
    const cards = Array.from(root.querySelectorAll<HTMLElement>(".case"));
    const onClick = (e: Event) => {
      const f = (e.currentTarget as HTMLButtonElement).dataset.filter;
      buttons.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.filter === f)));
      cards.forEach((c) => (c.hidden = f !== "all" && c.dataset.engine !== f));
    };
    buttons.forEach((b) => b.addEventListener("click", onClick));
    return () => buttons.forEach((b) => b.removeEventListener("click", onClick));
  }, []);

  // Navigation dropdowns close on outside click, Escape, or picking a link.
  useEffect(() => {
    const dropdowns = Array.from(rootRef.current?.querySelectorAll<HTMLDetailsElement>(".hm-dd") ?? []);
    if (!dropdowns.length) return;
    const onDoc = (e: MouseEvent) => {
      const target = e.target as Element;
      const activeDropdown = dropdowns.find((dropdown) => dropdown.contains(target));
      dropdowns.forEach((dropdown) => {
        if (dropdown !== activeDropdown || target.closest(".hm-dd-menu a")) dropdown.open = false;
      });
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        dropdowns.forEach((dropdown) => {
          if (dropdown.open) {
            dropdown.open = false;
            dropdown.querySelector("summary")?.focus();
          }
        });
      }
    };
    document.addEventListener("click", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <>
      <div
        ref={rootRef}
        className={`ecom hm ${montserrat.variable} ${openSans.variable}`}
        dangerouslySetInnerHTML={{ __html: markup }}
      />
      <AuditFormModal
        open={formOpen}
        onClose={() => setFormOpen(false)}
        fontClass={`${montserrat.variable} ${openSans.variable}`}
        title="Funnel Review Call"
        ruleset="funnel-review"
        bookingBase={FRC_BOOKING_BASE}
        rejectedMessage={REJECTED_MESSAGE}
        nurtureMessage={REJECTED_MESSAGE}
      />
    </>
  );
}
