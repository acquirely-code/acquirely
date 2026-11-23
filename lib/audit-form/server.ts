import { appendFile, mkdir, stat } from "node:fs/promises";
import path from "node:path";
import { UTM_KEYS } from "./rules";
import type { AuditFields, AuditOutcome } from "./rules";

export type AuditRecord = AuditFields &
  Record<(typeof UTM_KEYS)[number], string> & {
    submittedAt: string;
    id: string;
    outcome: AuditOutcome;
    landingPageUrl: string;
  };

// Column order for the local CSV. The sheet's order is set in scripts/audit-sheet-webhook.gs.
export const AUDIT_COLUMNS: (keyof AuditRecord)[] = [
  "submittedAt",
  "id",
  "outcome",
  "name",
  "email",
  "phone",
  "website",
  "revenue",
  "adSpend",
  "problem",
  "budget",
  "landingPageUrl",
  ...UTM_KEYS,
];

const WEBHOOK_TIMEOUT_MS = 10000;

// Each form's Google Apps Script web app, attached to its sheet: AUDIT_SHEET_WEBHOOK_URL for the "Lead Gen Audit"
// sheet, FUNNEL_REVIEW_SHEET_WEBHOOK_URL for the Funnel Review Call sheet (the ruleset's sheetEnv picks one).
// Only the server calls it, so the URL never reaches the browser. Kept in a hosting environment variable, not in
// the code: anyone holding the URL can add rows to the sheet.
// Tolerates what a dashboard paste often adds: surrounding spaces, newlines or quotes.
export type SheetTarget = { sheetEnv: string; localFile: string };
const DEFAULT_TARGET: SheetTarget = { sheetEnv: "AUDIT_SHEET_WEBHOOK_URL", localFile: ".data/audit-leads.csv" };
const webhookUrl = (target: SheetTarget) => (process.env[target.sheetEnv] || "").trim().replace(/^["']+|["']+$/g, "").trim();

// Short, non-secret reason codes. They are returned to the browser (never the URL itself) so a broken setup can be
// diagnosed from the live site.
export type StorageProblem = "webhook_not_set" | "webhook_invalid";

export function auditStorageProblem(target: SheetTarget = DEFAULT_TARGET): StorageProblem | null {
  const url = webhookUrl(target);
  // Must be the web app URL (…/macros/s/<id>/exec). A library or sheet link answers with a sign-in page.
  if (url) return /^https:\/\/script\.google\.com\/macros\/s\/[\w-]+\/exec$/.test(url) ? null : "webhook_invalid";
  // Without the webhook, leads go to a local CSV, which only works in local dev: serverless hosts (Vercel,
  // Cloudflare Workers) can't write files, so any production build needs the webhook.
  return process.env.VERCEL || process.env.NODE_ENV === "production" ? "webhook_not_set" : null;
}

// Excel treats a cell starting with = + - @ as a formula. Prefixing ' keeps it as text. A plain "+91 98765..."
// phone number is left alone, since only digits and spaces follow the +.
const safeCell = (value: string) => (/^[=@\t\r]/.test(value) || /^[+-](?![\d ]+$)/.test(value) ? `'${value}` : value);
const csvCell = (value: string) => `"${safeCell(value).replace(/"/g, '""')}"`;

export async function saveAuditLead(lead: AuditRecord, target: SheetTarget = DEFAULT_TARGET) {
  // One phone cell with the country code, e.g. "+91 9876543210".
  const row: Record<string, string> = Object.fromEntries(AUDIT_COLUMNS.map((column) => [column, String(lead[column] ?? "")]));
  row.phone = `${lead.countryCode} ${lead.phone}`;

  if (webhookUrl(target)) {
    // Apps Script answers with a redirect to the result, which fetch follows. No `cache` option: Cloudflare Workers
    // (where the site runs) throw on it unless a compatibility flag is set, and POSTs are never cached anyway.
    const response = await fetch(webhookUrl(target), {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(row),
      redirect: "follow",
      signal: AbortSignal.timeout(WEBHOOK_TIMEOUT_MS),
    });
    const text = await response.text().catch(() => "");
    let result: { ok?: boolean } | null = null;
    try { result = JSON.parse(text); } catch { /* not JSON: e.g. a Google sign-in or error page */ }
    if (!response.ok || !result?.ok) {
      const type = response.headers.get("content-type") || "?";
      const snippet = text.replace(/\s+/g, " ").slice(0, 80);
      throw new Error(`Sheet webhook did not confirm the save (HTTP ${response.status}, ${type}, redirected=${response.redirected}): ${snippet}`);
    }
    return;
  }

  // Local dev: a CSV that opens directly in Excel. The BOM makes Excel read ₹ correctly.
  const file = path.resolve(process.cwd(), process.env.AUDIT_LOCAL_FILE || target.localFile);
  await mkdir(path.dirname(file), { recursive: true });
  const exists = await stat(file).then(() => true, () => false);
  const header = exists ? "" : `﻿${AUDIT_COLUMNS.join(",")}\r\n`;
  await appendFile(file, `${header}${AUDIT_COLUMNS.map((column) => csvCell(row[column] ?? "")).join(",")}\r\n`, "utf8");
}
