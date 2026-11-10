import { randomUUID } from "node:crypto";
import { clientIp, json, overLimit, readBody } from "@/lib/audit-form/http";
import { qualifyAudit, UTM_KEYS, validateAudit } from "@/lib/audit-form/rules";
import { auditStorageProblems, saveAuditLead, type AuditRecord } from "@/lib/audit-form/server";
import { sendAuditCapiEvents } from "@/lib/audit-form/meta-capi";

export const dynamic = "force-dynamic";

const IP_LIMIT_PER_HOUR = 10;

const shortText = (value: unknown, max: number) => (typeof value === "string" ? value.trim().slice(0, max) : "");
const httpUrl = (value: unknown) => {
  const text = shortText(value, 2000);
  return /^https?:\/\//i.test(text) ? text : "";
};

// Lead Quality Audit application from /lead-gen. The outcome is decided here, not trusted from the browser.
export async function POST(request: Request) {
  const problems = auditStorageProblems();
  if (problems.length) {
    console.error(`[audit-form] Not configured: ${problems.join("; ")}`);
    return json({ ok: false, error: "unavailable" }, 503);
  }

  const body = await readBody(request);
  if (!body) return json({ ok: false, error: "invalid_request" }, 400);

  // Honeypot: a hidden field people never fill. Bots get a normal-looking answer and nothing is saved.
  if (shortText(body.company_fax, 200)) return json({ ok: true, outcome: "nurture" });

  const { data, errors } = validateAudit(body);
  if (!data) return json({ ok: false, error: "invalid_fields", fieldErrors: errors }, 422);

  if (overLimit(`ip:${clientIp(request)}`, IP_LIMIT_PER_HOUR, 60 * 60 * 1000)) return json({ ok: false, error: "rate_limited" }, 429);

  const outcome = qualifyAudit(data);
  const utmInput = (body.utm && typeof body.utm === "object" ? body.utm : {}) as Record<string, unknown>;
  const record: AuditRecord = {
    ...data,
    ...(Object.fromEntries(UTM_KEYS.map((key) => [key, shortText(utmInput[key], 300)])) as Record<(typeof UTM_KEYS)[number], string>),
    submittedAt: new Date().toISOString(),
    id: randomUUID(),
    outcome,
    landingPageUrl: httpUrl(body.landingPageUrl) || httpUrl(request.headers.get("referer")),
  };

  try {
    await saveAuditLead(record);
  } catch (error) {
    console.error("[audit-form] Save failed:", error instanceof Error ? error.message : "unknown error");
    return json({ ok: false, error: "save_failed" }, 502);
  }

  // Only after a successful save. The browser fires the same events with the same event IDs once this returns.
  await sendAuditCapiEvents({
    leadId: record.id,
    outcome,
    lead: data,
    landingPageUrl: record.landingPageUrl,
    ip: clientIp(request),
    userAgent: shortText(request.headers.get("user-agent"), 500),
    cookieHeader: request.headers.get("cookie"),
  });

  return json({ ok: true, leadId: record.id, outcome });
}
