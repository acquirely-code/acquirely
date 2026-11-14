// components/BlogContent.tsx
import React from "react";
import Link from "next/link";
import { BlogBlock, BlogPost } from "@/lib/blog-posts";

const INLINE = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;

// Renders **bold** and [text](href) inside a block's text.
function Inline({ text }: { text: string }) {
  return (
    <>
      {text.split(INLINE).map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={i} className="font-semibold text-[var(--b-ink)]">{part.slice(2, -2)}</strong>;
        }
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) {
          const [, label, href] = link as [string, string, string];
          const cls = "font-medium text-[var(--b-accent)] underline underline-offset-2 hover:no-underline";
          if (href.startsWith("/")) {
            return <Link key={i} href={href} className={cls}>{label}</Link>;
          }
          return href.startsWith("#") ? (
            <a key={i} href={href} className={cls}>{label}</a>
          ) : (
            <a key={i} href={href} target="_blank" rel="noopener" className={cls}>{label}</a>
          );
        }
        return <React.Fragment key={i}>{part}</React.Fragment>;
      })}
    </>
  );
}

// Plain text for schema markup.
export function stripInline(text: string) {
  return text.replace(/\*\*([^*]+)\*\*/g, "$1").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
}

const slugify = (text: string) =>
  text.toLowerCase().replace(/['"]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const h2Id = (block: { text: string; id?: string }) => block.id ?? slugify(block.text);

function Block({ block, content }: { block: BlogBlock; content: BlogPost["content"] }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 id={h2Id(block)} className="font-Montserrat !mt-12 scroll-mt-24 text-[24px] font-bold leading-snug text-[var(--b-ink)] md:text-[28px]">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="font-Montserrat !mt-8 text-[19px] font-bold leading-snug text-[var(--b-ink)] md:text-[21px]">
          {block.text}
        </h3>
      );
    case "toc": {
      const h2s = content.flatMap((b) => (typeof b !== "string" && b.type === "h2" ? [b] : []));
      return (
        <nav aria-label="Table of contents" className="rounded-[12px] border border-[var(--b-line)] bg-[var(--b-soft)] p-5">
          <p className="font-Montserrat text-[15px] font-bold uppercase tracking-wide text-[var(--b-ink)]">Table of contents</p>
          <ol className="mt-3 list-decimal space-y-1.5 pl-6 text-[16px]">
            {h2s.map((h) => (
              <li key={h2Id(h)} className="pl-1">
                <a href={`#${h2Id(h)}`} className="text-[var(--b-accent)] hover:underline">{h.text}</a>
              </li>
            ))}
          </ol>
        </nav>
      );
    }
    case "p":
      return <p><Inline text={block.text} /></p>;
    case "callout":
      return (
        <p className="rounded-[12px] border border-[var(--b-callout-line)] bg-[var(--b-callout)] p-5">
          <Inline text={block.text} />
        </p>
      );
    case "ul":
    case "ol": {
      const List = block.type;
      return (
        <List className={`space-y-2 pl-6 ${block.type === "ul" ? "list-disc" : "list-decimal"}`}>
          {block.items.map((item, i) => (
            <li key={i} className="pl-1"><Inline text={item} /></li>
          ))}
        </List>
      );
    }
    case "table":
      return (
        <div className="overflow-x-auto rounded-[12px] border border-[var(--b-line)]">
          <table className="w-full min-w-[560px] border-collapse text-left text-[15px] leading-[22px]">
            <thead className="bg-[var(--b-soft)] text-[var(--b-ink)]">
              <tr>
                {block.head.map((h) => (
                  <th key={h} className="border-b border-[var(--b-line)] px-4 py-3 font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className="border-b border-[var(--b-line-soft)] last:border-0">
                  {row.map((cell, j) => (
                    <td key={j} className={`px-4 py-3 align-top ${j === 0 ? "font-medium text-[var(--b-ink)]" : ""}`}>
                      <Inline text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "faq":
      return (
        <div className="grid gap-[10px]">
          {block.items.map((item) => (
            <details
              key={item.q}
              className="group rounded-[12px] border border-[var(--b-line)] bg-[var(--b-card)] px-[22px] transition open:border-[var(--b-line-open)] open:shadow-[var(--b-shadow)]"
            >
              <summary className="relative cursor-pointer list-none py-[18px] pr-[34px] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-[#6366F1] [&::-webkit-details-marker]:hidden">
                <h3 className="font-Montserrat text-[16px] font-bold leading-snug text-[var(--b-ink)]">{item.q}</h3>
                <span
                  aria-hidden="true"
                  className="absolute right-[2px] top-1/2 h-[9px] w-[9px] -translate-y-[70%] rotate-45 border-b-2 border-r-2 border-[#6366F1] transition-transform group-open:-translate-y-[30%] group-open:-rotate-[135deg]"
                />
              </summary>
              <p className="pb-5 text-[15.5px] leading-[26px]"><Inline text={item.a} /></p>
            </details>
          ))}
        </div>
      );
  }
}

export default function BlogContent({ content }: { content: BlogPost["content"] }) {
  return (
    <div className="mt-8 space-y-6 text-[17px] leading-[28px] text-[var(--b-text)]">
      {content.map((item, i) =>
        typeof item === "string" ? <p key={i}><Inline text={item} /></p> : <Block key={i} block={item} content={content} />
      )}
    </div>
  );
}
