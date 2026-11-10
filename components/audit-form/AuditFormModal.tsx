"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { trackAuditLead } from "@/lib/audit-form/tracking";
import {
  LEAD_VALUE_INR,
  UTM_KEYS,
  AD_SPEND_OPTIONS,
  AUDIT_FIELD_ORDER,
  BUDGET_OPTIONS,
  BUDGET_QUESTION,
  COUNTRY_CODES,
  PROBLEM_OPTIONS,
  REVENUE_OPTIONS,
  validateAudit,
  validateAuditField,
  type AuditFieldErrors,
  type AuditFieldName,
  type AuditOutcome,
} from "@/lib/audit-form/rules";
import styles from "./AuditFormModal.module.css";

// Zoho Bookings page qualified leads are sent to after submitting.
const BOOKING_URL = process.env.NEXT_PUBLIC_AUDIT_BOOKING_URL || "https://booknow.acquirely.in/LGARC/#/LGARC";

type Values = Record<AuditFieldName, string>;
const EMPTY: Values = { name: "", email: "", countryCode: "+91", phone: "", website: "", revenue: "", adSpend: "", problem: "", budget: "" };

type Status = { kind: "form" } | { kind: "sending" } | { kind: "done"; outcome: AuditOutcome };

// UTMs from the URL, falling back to the cookies public/zf-lead-tracking.js keeps for 7 days.
function readUtm() {
  const params = new URLSearchParams(window.location.search);
  const cookies = Object.fromEntries(document.cookie.split("; ").filter(Boolean).map((c) => {
    const i = c.indexOf("=");
    try {
      return [c.slice(0, i), decodeURIComponent(c.slice(i + 1))];
    } catch {
      return [c.slice(0, i), ""];
    }
  }));
  return Object.fromEntries(UTM_KEYS.map((key) => [key, params.get(key) || cookies[key] || ""]));
}

const SERVER_ERRORS: Record<string, string> = {
  rate_limited: "Too many attempts from this network. Please try again in a little while.",
  unavailable: "The form isn't available right now. Please use “Book a Lead Quality Audit” instead.",
};

export default function AuditFormModal({ open, onClose, fontClass = "" }: { open: boolean; onClose: () => void; fontClass?: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<AuditFieldErrors>({});
  const [touched, setTouched] = useState<Partial<Record<AuditFieldName, boolean>>>({});
  const [status, setStatus] = useState<Status>({ kind: "form" });
  const [formError, setFormError] = useState("");

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  const set = (name: AuditFieldName, value: string) => {
    const next = { ...values, [name]: value };
    setValues(next);
    // Re-check as they type only once a field has been left or the form submitted, so errors don't shout mid-typing.
    if (touched[name] || errors[name]) setErrors((e) => ({ ...e, [name]: validateAuditField(name, next) }));
    if (name === "countryCode" && values.phone) setErrors((e) => ({ ...e, phone: validateAuditField("phone", next) }));
  };

  const blur = (name: AuditFieldName) => {
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors((e) => ({ ...e, [name]: validateAuditField(name, values) }));
  };

  const focusFirstError = (errs: AuditFieldErrors) => {
    const first = AUDIT_FIELD_ORDER.find((n) => errs[n]);
    if (first) dialogRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
  };

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status.kind === "sending") return;
    setFormError("");
    const { data, errors: errs } = validateAudit(values);
    setErrors(errs);
    if (!data) return focusFirstError(errs);

    const honeypot = (event.currentTarget.elements.namedItem("company_fax") as HTMLInputElement | null)?.value || "";
    setStatus({ kind: "sending" });
    try {
      const response = await fetch("/api/lead/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, company_fax: honeypot, landingPageUrl: window.location.href, utm: readUtm() }),
      });
      const result = (await response.json().catch(() => ({}))) as { ok?: boolean; leadId?: string; outcome?: AuditOutcome; error?: string; fieldErrors?: AuditFieldErrors };
      if (!response.ok || !result.ok || !result.outcome) {
        if (result.fieldErrors) {
          setErrors(result.fieldErrors);
          focusFirstError(result.fieldErrors);
        }
        setFormError(SERVER_ERRORS[result.error || ""] || "Something went wrong. Please try again.");
        setStatus({ kind: "form" });
        return;
      }
      setStatus({ kind: "done", outcome: result.outcome });
      // Saved: now fire Meta + GA4, with event IDs matching the server's Conversions API events.
      // (No leadId means the server dropped it as spam, so nothing is tracked.)
      if (result.leadId) trackAuditLead(result.leadId, result.outcome, LEAD_VALUE_INR[result.outcome], LEAD_VALUE_INR.qualified);
      // Qualified: on to the booking page. The short pause shows the message and lets the Pixel/GA4 requests leave
      // the browser before the page changes.
      if (result.outcome === "qualified") window.setTimeout(() => window.location.assign(BOOKING_URL), 1500);
    } catch {
      setFormError("Couldn't reach the server. Check your connection and try again.");
      setStatus({ kind: "form" });
    }
  }

  const close = () => {
    onClose();
    // Start fresh next time once an application has gone through; keep a half-filled form otherwise.
    if (status.kind === "done") {
      setValues(EMPTY);
      setErrors({});
      setTouched({});
      setStatus({ kind: "form" });
    }
  };

  const err = (name: AuditFieldName) =>
    errors[name] ? <p className={styles.error} id={`af-${name}-err`} role="alert">{errors[name]}</p> : null;
  const aria = (name: AuditFieldName) => ({ "aria-invalid": !!errors[name], "aria-describedby": errors[name] ? `af-${name}-err` : undefined });

  const radios = (name: AuditFieldName, legend: string, options: readonly string[]) => (
    <fieldset className={styles.group} aria-describedby={errors[name] ? `af-${name}-err` : undefined}>
      <legend className={styles.label}>{legend} <span className={styles.req} aria-hidden="true">*</span></legend>
      <div className={styles.options}>
        {options.map((option) => (
          <label key={option} className={styles.option}>
            <input type="radio" name={name} value={option} checked={values[name] === option} onChange={() => set(name, option)} required />
            <span>{option}</span>
          </label>
        ))}
      </div>
      {err(name)}
    </fieldset>
  );

  return (
    <dialog ref={dialogRef} className={`${styles.dialog} ${fontClass}`} onClose={close} onCancel={close} aria-labelledby="af-title">
      <div className={styles.head}>
        <h2 id="af-title" className={styles.title}>Lead Gen Lead Quality Audit Application</h2>
        <button type="button" className={styles.close} onClick={close} aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </div>

      {status.kind === "done" ? (
        <div className={styles.done} role="status">
          {status.outcome === "qualified" ? (
            <>
              <div className={`${styles.badge} ${styles.badgeGood}`} aria-hidden="true">✓</div>
              <p className={styles.doneLead}>Thanks! Looks like we could be a great fit. Taking you to pick a time for a 30-minute strategy call…</p>
              <a className={styles.submit} href={BOOKING_URL}>Pick a time now</a>
            </>
          ) : (
            <>
              <div className={styles.badge} aria-hidden="true">✓</div>
              <p className={styles.doneLead}>
                {status.outcome === "rejected"
                  ? "Thank you for sharing your details. Our team will review them and get in touch if there's a suitable opportunity."
                  : "Thank you for sharing your details. Our team will get back to you shortly."}
              </p>
              <button type="button" className={styles.submit} onClick={close}>Close</button>
            </>
          )}
        </div>
      ) : (
        <form className={styles.form} onSubmit={submit} noValidate>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="af-name">Full Name <span className={styles.req} aria-hidden="true">*</span></label>
            <input id="af-name" name="name" className={styles.input} autoComplete="name" value={values.name} onChange={(e) => set("name", e.target.value)} onBlur={() => blur("name")} required {...aria("name")} />
            {err("name")}
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="af-email">Work email <span className={styles.req} aria-hidden="true">*</span></label>
            <input id="af-email" name="email" type="email" inputMode="email" className={styles.input} autoComplete="email" value={values.email} onChange={(e) => set("email", e.target.value)} onBlur={() => blur("email")} required {...aria("email")} />
            {err("email")}
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="af-phone">Phone (WhatsApp) <span className={styles.req} aria-hidden="true">*</span></label>
            <div className={styles.phone}>
              <select name="countryCode" aria-label="Country code" className={styles.cc} value={values.countryCode} onChange={(e) => set("countryCode", e.target.value)}>
                {COUNTRY_CODES.map((c) => <option key={c.code} value={c.code}>{c.label}</option>)}
              </select>
              <input id="af-phone" name="phone" type="tel" inputMode="tel" className={styles.input} autoComplete="tel-national" value={values.phone} onChange={(e) => set("phone", e.target.value)} onBlur={() => blur("phone")} required {...aria("phone")} />
            </div>
            {err("phone")}
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="af-website">Company website <span className={styles.req} aria-hidden="true">*</span></label>
            <input id="af-website" name="website" inputMode="url" className={styles.input} placeholder="yourcompany.com" autoComplete="url" value={values.website} onChange={(e) => set("website", e.target.value)} onBlur={() => blur("website")} required {...aria("website")} />
            {err("website")}
          </div>

          {radios("revenue", "Monthly revenue", REVENUE_OPTIONS)}
          {radios("adSpend", "Current monthly ad spend (Meta + Google)", AD_SPEND_OPTIONS)}
          {radios("problem", "What's the main problem right now?", PROBLEM_OPTIONS)}
          {radios("budget", BUDGET_QUESTION, BUDGET_OPTIONS)}

          {/* Honeypot for bots: hidden from people and screen readers. */}
          <input type="text" name="company_fax" tabIndex={-1} autoComplete="off" className={styles.hp} aria-hidden="true" />

          {formError && <p className={styles.formError} role="alert">{formError}</p>}
          <button type="submit" className={styles.submit} disabled={status.kind === "sending"}>
            {status.kind === "sending" ? "Submitting…" : "Submit"}
          </button>
        </form>
      )}
    </dialog>
  );
}
