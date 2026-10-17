"use client";

import { useEffect, useRef } from "react";
import { Montserrat, Open_Sans } from "next/font/google";
import markup from "./markup";
import "./ecommerce.css";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-ecom-display" });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-ecom-body" });

export default function EcommerceLanding() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const cleanups: (() => void)[] = [];
    const on = (el: EventTarget, type: string, fn: EventListener) => {
      el.addEventListener(type, fn);
      cleanups.push(() => el.removeEventListener(type, fn));
    };

    // Hero video: plays inline once data-video is set; until then the button scrolls to the booking section.
    root.querySelectorAll<HTMLElement>(".vid").forEach((v) => {
      const b = v.querySelector(".vid-screen");
      if (!b) return;
      on(b, "click", () => {
        const u = v.getAttribute("data-video");
        if (!u) {
          root.querySelector("#book")?.scrollIntoView({ behavior: "smooth" });
          return;
        }
        const f = document.createElement("iframe");
        f.src = u;
        f.allow = "autoplay; encrypted-media; picture-in-picture";
        f.allowFullscreen = true;
        b.replaceWith(f);
      });
    });

    // Screenshot lightbox
    const lb = document.createElement("div");
    lb.className = "lb";
    const lbImg = document.createElement("img");
    lbImg.alt = "";
    lb.appendChild(lbImg);
    root.appendChild(lb);
    cleanups.push(() => lb.remove());
    root.querySelectorAll<HTMLImageElement>(".proof-shot img,.win img").forEach((im) => {
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

    // Phone carousel: duplicate the track once so the CSS scroll loops seamlessly.
    const tr = root.querySelector(".ph-track");
    if (tr && !tr.hasAttribute("data-looped")) {
      tr.setAttribute("data-looped", "");
      Array.from(tr.children).forEach((el) => {
        const c = el.cloneNode(true) as Element;
        c.setAttribute("aria-hidden", "true");
        tr.appendChild(c);
      });
    }

    // Scroll reveal + sticky mobile CTA (hidden while the hero or final CTA is on screen)
    const els = root.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (es) => es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
        { threshold: 0.1 }
      );
      els.forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());

      const mc = root.querySelector<HTMLElement>(".mcta");
      const top = root.querySelector("#top");
      const book = root.querySelector("#book");
      if (mc && top && book) {
        const vis: Record<string, boolean> = {};
        const o = new IntersectionObserver(
          (es) => {
            es.forEach((e) => (vis[e.target.id] = e.isIntersecting));
            mc.style.display = vis.top || vis.book ? "none" : "";
          },
          { threshold: 0.1 }
        );
        o.observe(top);
        o.observe(book);
        cleanups.push(() => o.disconnect());
      }
    } else {
      els.forEach((el) => el.classList.add("in"));
    }

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
