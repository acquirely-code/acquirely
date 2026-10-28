"use client";

import { useEffect, useRef } from "react";
import { Montserrat, Open_Sans } from "next/font/google";
import markup from "./markup";
import useLandingScripts from "../../ecommerce/useLandingScripts";
import "../../ecommerce/ecommerce.css";
import "./home.css";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-ecom-display" });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-ecom-body" });

export default function HomeLanding() {
  const rootRef = useRef<HTMLDivElement>(null);
  useLandingScripts(rootRef);

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

  // Nav "Services" dropdown: close on outside click, Escape, or picking a link.
  useEffect(() => {
    const dd = rootRef.current?.querySelector<HTMLDetailsElement>(".hm-dd");
    if (!dd) return;
    const onDoc = (e: MouseEvent) => {
      if (!dd.contains(e.target as Node) || (e.target as Element).closest(".hm-dd-menu a")) dd.open = false;
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && dd.open) { dd.open = false; dd.querySelector("summary")?.focus(); }
    };
    document.addEventListener("click", onDoc);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("click", onDoc); document.removeEventListener("keydown", onKey); };
  }, []);

  return (
    <div
      ref={rootRef}
      className={`ecom hm ${montserrat.variable} ${openSans.variable}`}
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
}
