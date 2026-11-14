"use client";

import { useEffect, useRef } from "react";
import { ecomBody, ecomDisplay } from "@/lib/fonts";
import { withImgDims } from "@/lib/img-dims";
import { toggleTheme } from "@/app/ecommerce/theme";
import { siteNav } from "./markup";
import "@/app/ecommerce/ecommerce.css";
import "@/app/(home)/(default)/home.css";
import "@/app/ecommerce/ecommerce-dark.css";
import "./site-chrome.css";

const lightHtml = withImgDims(siteNav(false));
const themedHtml = withImgDims(siteNav(false, true));

// The homepage header for non-homepage routes. It takes no layout space: leave ~80px at the top of the page.
// themed: show the light/dark toggle and follow <html data-theme>. Pages without it keep a light header,
// so only pass it on pages whose own content has dark styles (the blog).
export default function SiteHeader({ themed = false }: { themed?: boolean }) {
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
    const toggle = ref.current?.querySelector(".theme-tg");
    toggle?.addEventListener("click", toggleTheme);
    document.addEventListener("click", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      toggle?.removeEventListener("click", toggleTheme);
      document.removeEventListener("click", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`ecom hm sc sc-head${themed ? " sc-themed" : ""} ${ecomDisplay.variable} ${ecomBody.variable}`}
      dangerouslySetInnerHTML={{ __html: themed ? themedHtml : lightHtml }}
    />
  );
}
