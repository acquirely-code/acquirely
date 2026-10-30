/**
 * Analytics hooks: no external tracker is added. Events go to an existing
 * dataLayer / gtag only if the host page already defines one. Financial input
 * values are never included, only field names and event types.
 */
type Props = Record<string, string>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function track(event: string, props?: Props) {
  try {
    if (Array.isArray(window.dataLayer)) window.dataLayer.push({ event, ...props });
    else if (typeof window.gtag === "function") window.gtag("event", event, props || {});
  } catch {
    /* analytics must never break the calculator */
  }
}

const tracked = new Set<string>();
export function trackOnce(event: string, props?: Props, key = event) {
  if (tracked.has(key)) return;
  tracked.add(key);
  track(event, props);
}
