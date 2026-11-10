import { readFileSync } from "node:fs";
import { mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { POST } from "@/app/api/lead/audit/route";
import { qualifyAudit, validateAudit } from "@/lib/audit-form/rules";
import { resetRateLimitForTests as resetStoreForTests } from "@/lib/audit-form/http";

const lead = (overrides: Record<string, unknown> = {}) => ({
  name: "Asha Rao",
  email: "asha@example.com",
  countryCode: "+91",
  phone: "+91 98765 43210",
  website: "example.com",
  revenue: "₹50L – ₹2Cr",
  adSpend: "₹1L – ₹5L",
  problem: "Leads are junk / don't close",
  budget: "Yes, that works",
  ...overrides,
});

const post = async (body: unknown, ip = "10.0.0.1") => {
  const response = await POST(new Request("http://test.local/api/lead/audit", { method: "POST", headers: { "Content-Type": "application/json", "x-real-ip": ip }, body: JSON.stringify(body) }));
  return { status: response.status, data: (await response.json()) as Record<string, any> };
};

describe("qualifyAudit (Zoho rules)", () => {
  it("qualifies budget yes + revenue 10L+ + spend 1L+", () => {
    expect(qualifyAudit(lead())).toBe("qualified");
    expect(qualifyAudit(lead({ adSpend: "₹5L+", revenue: "₹2Cr+" }))).toBe("qualified");
  });
  it.each([
    [{ budget: "Not right now" }],
    [{ revenue: "Under ₹10L" }],
    [{ adSpend: "Not running ads yet" }],
  ])("rejects on any one disqualifier %o", (o) => expect(qualifyAudit(lead(o))).toBe("rejected"));
  it("puts the in-between cases in nurture", () => {
    expect(qualifyAudit(lead({ budget: "Need to think about it" }))).toBe("nurture");
    expect(qualifyAudit(lead({ adSpend: "Under ₹1L" }))).toBe("nurture");
  });
});

describe("validateAudit", () => {
  it("normalises an Indian number and lowercases email", () => {
    const { data } = validateAudit(lead({ email: "Asha@Example.com" }));
    expect(data?.phone).toBe("9876543210");
    expect(data?.email).toBe("asha@example.com");
  });
  it("reports every bad field", () => {
    const { data, errors } = validateAudit({ countryCode: "+91", phone: "12345", website: "not a site", revenue: "lots" });
    expect(data).toBeNull();
    expect(Object.keys(errors).sort()).toEqual(["adSpend", "budget", "email", "name", "phone", "problem", "revenue", "website"]);
  });
  it("accepts non-Indian numbers of a sensible length", () => {
    expect(validateAudit(lead({ countryCode: "+971", phone: "501234567" })).data?.phone).toBe("501234567");
  });
});

describe("POST /api/lead/audit", () => {
  let file: string;
  beforeEach(() => {
    file = path.join(mkdtempSync(path.join(tmpdir(), "audit-form-")), "audit.csv");
    process.env.AUDIT_LOCAL_FILE = file;
    process.env.LEAD_STORAGE = "local";
    resetStoreForTests();
  });
  afterEach(() => {
    delete process.env.AUDIT_LOCAL_FILE;
    delete process.env.LEAD_STORAGE;
  });

  it("decides the outcome on the server and saves a CSV row", async () => {
    const res = await post({ ...lead({ name: "=HYPERLINK(1)" }), outcome: "qualified", utm: { utm_source: "meta" } });
    expect(res).toMatchObject({ status: 200, data: { ok: true, outcome: "qualified" } });
    const rejected = await post(lead({ revenue: "Under ₹10L" }));
    expect(rejected.data.outcome).toBe("rejected");

    const lines = readFileSync(file, "utf8").trim().split("\r\n");
    expect(lines).toHaveLength(3);
    expect(lines[0]).toContain("submittedAt,id,outcome,name");
    expect(lines[1]).toContain(`"'=HYPERLINK(1)"`); // formula neutralised
    expect(lines[1]).toContain(`"meta"`);
  });

  it("returns field errors without saving", async () => {
    const res = await post(lead({ email: "nope" }));
    expect(res.status).toBe(422);
    expect(res.data.fieldErrors.email).toBeTruthy();
  });

  it("silently drops honeypot submissions", async () => {
    const res = await post({ ...lead(), company_fax: "123" });
    expect(res.data.ok).toBe(true);
    expect(() => readFileSync(file)).toThrow();
  });

  it("rate-limits one IP", async () => {
    for (let i = 0; i < 10; i++) expect((await post(lead(), "10.9.9.9")).status).toBe(200);
    expect((await post(lead(), "10.9.9.9")).status).toBe(429);
  });

  it("is unavailable on Vercel without the sheet webhook", async () => {
    process.env.VERCEL = "1";
    try {
      expect((await post(lead())).status).toBe(503);
    } finally {
      delete process.env.VERCEL;
    }
  });
});

describe("Google Sheet webhook (Apps Script)", () => {
  const WEBHOOK = "https://script.google.com/macros/s/abc/exec";
  let realFetch: typeof fetch;
  let calls: { url: string; init: RequestInit }[];
  const mockFetch = (reply: unknown) => {
    globalThis.fetch = (async (url: string, init: RequestInit) => {
      calls.push({ url: String(url), init });
      return new Response(JSON.stringify(reply), { status: 200 });
    }) as typeof fetch;
  };
  beforeEach(() => {
    realFetch = globalThis.fetch;
    calls = [];
    process.env.AUDIT_SHEET_WEBHOOK_URL = WEBHOOK;
    resetStoreForTests();
  });
  afterEach(() => {
    globalThis.fetch = realFetch;
    process.env.AUDIT_SHEET_WEBHOOK_URL = "";
  });

  it("posts the row as text/plain JSON with the full phone number", async () => {
    mockFetch({ ok: true });
    const res = await post({ ...lead(), utm: { utm_source: "meta" } });
    expect(res).toMatchObject({ status: 200, data: { ok: true, outcome: "qualified" } });
    expect(calls).toHaveLength(1);
    expect(calls[0]!.url).toBe(WEBHOOK);
    expect((calls[0]!.init.headers as Record<string, string>)["Content-Type"]).toContain("text/plain");
    const row = JSON.parse(String(calls[0]!.init.body));
    expect(row).toMatchObject({ id: res.data.leadId, outcome: "qualified", name: "Asha Rao", phone: "+91 9876543210", utm_source: "meta" });
  });

  it("fails the submission when the sheet doesn't confirm", async () => {
    mockFetch({ ok: false });
    expect((await post(lead())).status).toBe(502);
  });

  it("rejects a webhook URL that isn't Apps Script", async () => {
    process.env.AUDIT_SHEET_WEBHOOK_URL = "https://example.com/hook";
    expect((await post(lead())).status).toBe(503);
  });
});

describe("Meta Conversions API events", () => {
  const sha = (v: string) => require("node:crypto").createHash("sha256").update(v).digest("hex");

  it("builds Lead (+ QualifiedLead) with matching event IDs, values and hashed user data", async () => {
    const { buildAuditCapiEvents } = await import("@/lib/audit-form/meta-capi");
    const lead = validateAudit({ ...{ name: "Asha Rao", email: "Asha@Example.com ", countryCode: "+91", phone: "098765 43210", website: "example.com" }, revenue: "₹2Cr+", adSpend: "₹5L+", problem: "Not enough leads", budget: "Yes, that works" }).data!;
    const events = buildAuditCapiEvents({ leadId: "abc", outcome: "qualified", lead, landingPageUrl: "https://acquirely.in/lead-gen?fbclid=XYZ", ip: "1.2.3.4", userAgent: "UA", cookieHeader: "_fbp=fb.1.1.2; other=1" });
    expect(events.map((e) => [e.event_name, e.event_id, (e.custom_data as any).value])).toEqual([["Lead", "lead_abc", 1000], ["QualifiedLead", "ql_abc", 1000]]);
    const user = events[0]!.user_data as Record<string, any>;
    expect(user.em).toEqual([sha("asha@example.com")]);
    expect(user.ph).toEqual([sha("919876543210")]);
    expect(user.fn).toEqual([sha("asha")]);
    expect(user.fbp).toBe("fb.1.1.2");
    expect(user.fbc).toMatch(/^fb\.1\.\d+\.XYZ$/);
    expect(JSON.stringify(events)).not.toContain("asha@example.com");
  });

  it("values nurture at 200 and rejected at 0, with no QualifiedLead", async () => {
    const { buildAuditCapiEvents } = await import("@/lib/audit-form/meta-capi");
    const lead = validateAudit(leadInput()).data!;
    const ctx = { leadId: "x", lead, landingPageUrl: "", ip: "unknown", userAgent: "", cookieHeader: null };
    expect(buildAuditCapiEvents({ ...ctx, outcome: "nurture" }).map((e) => (e.custom_data as any).value)).toEqual([200]);
    expect(buildAuditCapiEvents({ ...ctx, outcome: "rejected" }).map((e) => (e.custom_data as any).value)).toEqual([0]);
  });

  it("the route sends them after saving, and a CAPI failure doesn't fail the lead", async () => {
    const file = path.join(mkdtempSync(path.join(tmpdir(), "audit-form-")), "audit.csv");
    Object.assign(process.env, { AUDIT_LOCAL_FILE: file, LEAD_STORAGE: "local", NEXT_PUBLIC_META_PIXEL_ID: "123", META_CAPI_ACCESS_TOKEN: "tok" });
    resetStoreForTests();
    const calls: { url: string; body: any }[] = [];
    const realFetch = globalThis.fetch;
    globalThis.fetch = (async (url: string, init: RequestInit) => {
      calls.push({ url: String(url), body: JSON.parse(String(init.body)) });
      return new Response("{}", { status: 500 });
    }) as typeof fetch;
    try {
      const res = await post(leadInput());
      expect(res).toMatchObject({ status: 200, data: { ok: true, outcome: "qualified" } });
      expect(calls).toHaveLength(1);
      expect(calls[0]!.url).toContain("graph.facebook.com/v23.0/123/events");
      expect(calls[0]!.body.data.map((e: any) => e.event_id)).toEqual([`lead_${res.data.leadId}`, `ql_${res.data.leadId}`]);
    } finally {
      globalThis.fetch = realFetch;
      for (const k of ["AUDIT_LOCAL_FILE", "LEAD_STORAGE", "NEXT_PUBLIC_META_PIXEL_ID", "META_CAPI_ACCESS_TOKEN"]) delete process.env[k];
    }
  });
});

function leadInput() {
  return { name: "Asha Rao", email: "asha@example.com", countryCode: "+91", phone: "9876543210", website: "example.com", revenue: "₹50L – ₹2Cr", adSpend: "₹1L – ₹5L", problem: "Not enough leads", budget: "Yes, that works" };
}

describe("setup problems", () => {
  afterEach(() => {
    delete process.env.VERCEL;
    process.env.AUDIT_SHEET_WEBHOOK_URL = "";
  });

  it("says why it couldn't save and still returns the bucket", async () => {
    process.env.VERCEL = "1";
    const res = await post(lead());
    expect(res).toMatchObject({ status: 503, data: { ok: false, error: "unavailable", reason: "webhook_not_set", outcome: "qualified" } });
    process.env.AUDIT_SHEET_WEBHOOK_URL = "not a url";
    expect((await post(lead({ budget: "Not right now" }))).data).toMatchObject({ reason: "webhook_invalid", outcome: "rejected" });
  });

  it("accepts a pasted URL with spaces, quotes or a trailing newline", async () => {
    const calls: string[] = [];
    const realFetch = globalThis.fetch;
    globalThis.fetch = (async (url: string) => {
      calls.push(String(url));
      return new Response(JSON.stringify({ ok: true }), { status: 200 });
    }) as typeof fetch;
    process.env.AUDIT_SHEET_WEBHOOK_URL = ' "https://script.google.com/macros/s/abc/exec"\n';
    try {
      expect((await post(lead(), "10.7.7.7")).status).toBe(200);
      expect(calls[0]).toBe("https://script.google.com/macros/s/abc/exec");
    } finally {
      globalThis.fetch = realFetch;
    }
  });
});
