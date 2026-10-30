"use client";

import { track } from "@/app/ecommerce-calculator/_lib/analytics";

/** Plain <a> that reports a calculator_cta_clicked event. */
export function CtaLink({ cta, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { cta: string }) {
  return <a {...props} onClick={() => track("calculator_cta_clicked", { cta })} />;
}
