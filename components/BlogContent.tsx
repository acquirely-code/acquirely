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
          return <strong key={i} className="font-semibold text-[#0F172A]">{part.slice(2, -2)}</strong>;
        }
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) {
          const [, label, href] = link as [string, string, string];
          const cls = "font-medium text-[#0052FF] underline underline-offset-2 hover:no-underline";
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

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 id={block.id} className="font-Montserrat !mt-12 scroll-mt-6 text-[24px] font-bold leading-snug text-[#0F172A] md:text-[28px]">
          {block.text}
        </h2>
      );
    case "p":
      return <p><Inline text={block.text} /></p>;
    case "callout":
      return (
        <p className="rounded-[12px] border border-[#0052FF]/20 bg-[#F0F5FF] p-5">
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
        <div className="overflow-x-auto rounded-[12px] border border-gray-200">
          <table className="w-full min-w-[560px] border-collapse text-left text-[15px] leading-[22px]">
            <thead className="bg-[#F8FAFC] text-[#0F172A]">
              <tr>
                {block.head.map((h) => (
                  <th key={h} className="border-b border-gray-200 px-4 py-3 font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className="border-b border-gray-100 last:border-0">
                  {row.map((cell, j) => (
                    <td key={j} className={`px-4 py-3 align-top ${j === 0 ? "font-medium text-[#0F172A]" : ""}`}>
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
        <div className="space-y-6">
          {block.items.map((item) => (
            <div key={item.q}>
              <h3 className="text-[18px] font-bold leading-snug text-[#0F172A]">{item.q}</h3>
              <p className="mt-2"><Inline text={item.a} /></p>
            </div>
          ))}
        </div>
      );
  }
}

export default function BlogContent({ content }: { content: BlogPost["content"] }) {
  return (
    <div className="mt-8 space-y-6 text-[17px] leading-[28px] text-gray-700">
      {content.map((item, i) =>
        typeof item === "string" ? <p key={i}><Inline text={item} /></p> : <Block key={i} block={item} />
      )}
    </div>
  );
}
