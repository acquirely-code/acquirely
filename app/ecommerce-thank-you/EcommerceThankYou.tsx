"use client";

import { useEffect, useRef } from "react";
import { Montserrat, Open_Sans } from "next/font/google";
import markup from "./markup";
import "../ecommerce/ecommerce.css";
import "./thank-you.css";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-ecom-display" });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-ecom-body" });

export default function EcommerceThankYou() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const cleanups: (() => void)[] = [];
    const on = (el: EventTarget, type: string, fn: EventListener) => {
      el.addEventListener(type, fn);
      cleanups.push(() => el.removeEventListener(type, fn));
    };

    // Greet by first name when the form redirect passes ?name= (or ?tve_name=).
    const q = new URLSearchParams(window.location.search);
    const name = (q.get("name") || q.get("tve_name") || "").trim().split(/\s+/)[0];
    const greet = root.querySelector("#tyName");
    if (name && name.length < 40 && greet) {
      greet.textContent = `${name}, your A3 Flywheel playbook is on its way. In the meantime, discover…`;
    }

    // Hero video: plays inline once data-video is set.
    root.querySelectorAll<HTMLElement>(".vid").forEach((v) => {
      const b = v.querySelector(".vid-screen");
      if (!b) return;
      on(b, "click", () => {
        const u = v.getAttribute("data-video");
        if (!u) return;
        const f = document.createElement("iframe");
        f.src = u;
        f.allow = "autoplay; encrypted-media; picture-in-picture";
        f.allowFullscreen = true;
        b.replaceWith(f);
      });
    });

    // Testimonial lightbox
    const lb = document.createElement("div");
    lb.className = "lb";
    const lbImg = document.createElement("img");
    lbImg.alt = "";
    lb.appendChild(lbImg);
    root.appendChild(lb);
    cleanups.push(() => lb.remove());
    root.querySelectorAll<HTMLImageElement>(".tst figure img").forEach((im) => {
      on(im, "click", () => {
        lbImg.src = im.src;
        lbImg.alt = im.alt;
        lb.classList.add("open");
      });
    });
    on(lb, "click", () => lb.classList.remove("open"));
    on(document, "keydown", (e) => {
      if ((e as KeyboardEvent).key === "Escape") lb.classList.remove("open");
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <div
      ref={rootRef}
      className={`ecom ${montserrat.variable} ${openSans.variable}`}
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
}
