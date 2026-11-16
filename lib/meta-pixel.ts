// The site's Meta Pixel (dataset) ID. Public: it appears in every page that loads the pixel.
// NEXT_PUBLIC_META_PIXEL_ID overrides it, but it must be set at build time to reach the browser bundle; when it
// wasn't, the browser saw undefined and the audit form's pixel events were silently skipped. Hence the fallback.
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "1087526939518742";
