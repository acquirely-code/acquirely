import { NextResponse } from "next/server";

const MAX_BODY_BYTES = 16 * 1024;

export function json(body: unknown, status = 200) {
  return NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

// Returns null for anything that isn't a small JSON object.
export async function readBody(request: Request): Promise<Record<string, unknown> | null> {
  try {
    const text = await request.text();
    if (text.length > MAX_BODY_BYTES) return null;
    const parsed = JSON.parse(text);
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

// Set by Vercel's proxy, which overwrites them. Without a trusted proxy in front, a client could spoof these.
export function clientIp(request: Request) {
  return request.headers.get("x-real-ip") || request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}

// Best-effort per-IP limit. Held in memory, so on serverless each instance counts separately: it blunts bursts
// from one visitor or script, nothing more.
const hits = new Map<string, { count: number; resetAt: number }>();

export function overLimit(key: string, limit: number, windowMs: number, now = Date.now()) {
  const entry = hits.get(key);
  if (!entry || entry.resetAt <= now) {
    if (hits.size > 5000) hits.clear(); // keep memory bounded
    hits.set(key, { count: 1, resetAt: now + windowMs });
    return false;
  }
  entry.count += 1;
  return entry.count > limit;
}

export function resetRateLimitForTests() {
  hits.clear();
}
