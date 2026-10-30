"use client";

import { useEffect, useId, useRef, useState } from "react";

/**
 * Click/tap toggletip. Esc or a click anywhere outside closes it, so opening
 * another tip closes this one.
 */
export function Toggletip({ label, edge, children }: { label: string; edge?: "l" | "r"; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLSpanElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const id = useId();

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpen(false); btnRef.current?.focus(); }
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <span className="tipwrap" ref={wrapRef}>
      <button
        type="button"
        className="tip"
        ref={btnRef}
        aria-expanded={open}
        aria-controls={id}
        onClick={(e) => { e.preventDefault(); setOpen((o) => !o); }}
      >
        <span className="sr-only">{label}</span>
      </button>
      <span className={"bubble" + (edge ? " edge-" + edge : "")} id={id} hidden={!open}>
        {children}
      </span>
    </span>
  );
}
