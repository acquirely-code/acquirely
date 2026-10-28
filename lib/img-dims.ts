import dims from "./img-dims.json";

const sizes = dims as Record<string, [number, number]>;

// Adds intrinsic width/height to <img> tags that lack them, so the browser reserves space
// before lazy images load (no layout shift). Sizes come from lib/img-dims.json (`npm run img-dims`).
export function withImgDims(html: string): string {
  return html.replace(/<img\b([^>]*?)\bsrc="([^"]+)"([^>]*)>/g, (tag, before, src, after) => {
    if (/\bwidth=/.test(tag)) return tag;
    const d = sizes[src.replace(/^https:\/\/acquirely\.in/, "")];
    return d ? `<img${before}src="${src}" width="${d[0]}" height="${d[1]}"${after}>` : tag;
  });
}
