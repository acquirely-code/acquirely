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

// Google Apps Script web app attached to the "Lead Gen Audit" sheet (same setup as the Agastya conclave form).
// Only the server calls it, so the URL never reaches the browser.
const webhookUrl = () => process.env.AUDIT_SHEET_WEBHOOK_URL || "";

export function auditStorageProblems(): string[] {
  if (webhookUrl()) return /^https:\/\/script\.google\.com\//.test(webhookUrl()) ? [] : ["AUDIT_SHEET_WEBHOOK_URL must be a https://script.google.com/... web app URL"];
  // Without the webhook, leads go to a local CSV, which serverless hosting can't keep.
  return process.env.VERCEL ? ["AUDIT_SHEET_WEBHOOK_URL is not set"] : [];
}

// Excel treats a cell starting with = + - @ as a formula. Prefixing ' keeps it as text. A plain "+91 98765..."
// phone number is left alone, since only digits and spaces follow the +.
const safeCell = (value: string) => (/^[=@\t\r]/.test(value) || /^[+-](?![\d ]+$)/.test(value) ? `'${value}` : value);
const csvCell = (value: string) => `"${safeCell(value).replace(/"/g, '""')}"`;

export async function saveAuditLead(lead: AuditRecord) {
  // One phone cell with the country code, e.g. "+91 9876543210".
  const row: Record<string, string> = Object.fromEntries(AUDIT_COLUMNS.map((column) => [column, String(lead[column] ?? "")]));
  row.phone = `${lead.countryCode} ${lead.phone}`;

  if (webhookUrl()) {
    // Apps Script answers with a redirect to the result, which fetch follows.
    const response = await fetch(webhookUrl(), {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(row),
      redirect: "follow",
      signal: AbortSignal.timeout(WEBHOOK_TIMEOUT_MS),
      cache: "no-store",
    });
    const result = (await response.json().catch(() => null)) as { ok?: boolean } | null;
    if (!response.ok || !result?.ok) throw new Error(`Sheet webhook did not confirm the save (HTTP ${response.status})`);
    return;
  }

  // Local dev: a CSV that opens directly in Excel. The BOM makes Excel read ₹ correctly.
  const file = path.resolve(process.cwd(), process.env.AUDIT_LOCAL_FILE || ".data/audit-leads.csv");
  await mkdir(path.dirname(file), { recursive: true });
  const exists = await stat(file).then(() => true, () => false);
  const header = exists ? "" : `﻿${AUDIT_COLUMNS.join(",")}\r\n`;
  await appendFile(file, `${header}${AUDIT_COLUMNS.map((column) => csvCell(row[column] ?? "")).join(",")}\r\n`, "utf8");
}
