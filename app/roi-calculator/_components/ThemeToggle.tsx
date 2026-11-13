"use client";

import { useEffect } from "react";
import { track } from "@/app/ecommerce-calculator/_lib/analytics";

/** Same localStorage key as acquirely.in, so the choice carries across the site. */
export const THEME_KEY = "acq-theme";

/**
 * Runs in <head> before first paint (see app/layout.tsx), so a dark-mode
 * visitor never sees a white flash. Mirrors the acquirely.in script: a saved
 * choice wins, otherwise follow the OS setting (and keep following it live).
 */
export const THEME_INIT_SCRIPT = `(function(){try{var k="${THEME_KEY}",d=document.documentElement,m=matchMedia("(prefers-color-scheme: dark)");function a(){var s=null;try{s=localStorage.getItem(k)}catch(e){}d.dataset.theme=s==="dark"||s==="light"?s:m.matches?"dark":"light"}a();m.addEventListener("change",a)}catch(e){}})();`;

/** Moon/sun button, as on acquirely.in. CSS shows the icon for the current theme. */
export function ThemeToggle() {
  // Print in light mode: dark backgrounds don't print, which would leave light text on white paper.
  useEffect(() => {
    const d = document.documentElement;
    let was: string | undefined;
    const before = () => { was = d.dataset.theme; d.dataset.theme = "light"; };
    const after = () => { if (was) d.dataset.theme = was; };
    window.addEventListener("beforeprint", before);
    window.addEventListener("afterprint", after);
    return () => {
      window.removeEventListener("beforeprint", before);
      window.removeEventListener("afterprint", after);
    };
  }, []);

  function toggle() {
    const d = document.documentElement;
    const next = d.dataset.theme === "dark" ? "light" : "dark";
    d.dataset.theme = next;
    try { localStorage.setItem(THEME_KEY, next); } catch { /* private mode: still switches for this visit */ }
    track("theme_changed", { theme: next });
  }

  return (
    <button className="theme-tg" type="button" aria-label="Toggle dark mode" title="Toggle dark mode" onClick={toggle}>
      <svg className="i-moon" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg>
      <svg className="i-sun" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
    </button>
  );
}
