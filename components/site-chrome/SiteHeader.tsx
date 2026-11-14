"use client";

import { useEffect, useRef } from "react";
import { ecomBody, ecomDisplay } from "@/lib/fonts";
import { withImgDims } from "@/lib/img-dims";
import { siteNav } from "./markup";
import "@/app/ecommerce/ecommerce.css";
import "@/app/(home)/(default)/home.css";
import "./site-chrome.css";

const html = withImgDims(siteNav(false));

// The homepage header for non-homepage routes. It takes no layout space: leave ~80px at the top of the page.
export default function SiteHeader() {
  const ref = useRef<HTMLDivElement>(null);

  // Dropdowns close on outside click, Escape, or picking a link (same as the homepage).
  useEffect(() => {
    const dropdowns = Array.from(ref.current?.querySelectorAll<HTMLDetailsElement>(".hm-dd") ?? []);
    const onDoc = (e: MouseEvent) => {
      const target = e.target as Element;
      const active = dropdowns.find((d) => d.contains(target));
      dropdowns.forEach((d) => {
        if (d !== active || target.closest(".hm-dd-menu a")) d.open = false;
      });
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      dropdowns.forEach((d) => {
        if (d.open) {
          d.open = false;
          d.querySelector("summary")?.focus();
        }
      });
    };
    document.addEventListener("click", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`ecom hm sc sc-head ${ecomDisplay.variable} ${ecomBody.variable}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
