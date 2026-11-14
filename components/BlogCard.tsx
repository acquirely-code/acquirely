// components/BlogCard.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { BlogPost } from "@/lib/blog-posts";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-[12px] border border-[var(--b-line)] bg-[var(--b-card)] shadow-[0_4px_24px_rgba(37,99,235,0.06)] transition hover:shadow-[0_8px_32px_rgba(37,99,235,0.12)]"
    >
      {/* Cover images are 1200×630 (1.91:1, the og:image size); matching that ratio shows them uncropped. */}
      <div className="relative aspect-[1200/630] w-full overflow-hidden bg-[var(--b-soft)]">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <span className="text-[13px] font-medium text-[var(--b-accent)]">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>

        <h2 className="mt-2 text-[20px] font-bold leading-snug text-[var(--b-ink)]">
          {post.title}
        </h2>

        <p className="mt-3 flex-1 text-[15px] leading-[22px] text-[var(--b-muted)]">
          {post.excerpt}
        </p>

        <span className="mt-4 flex items-center gap-1 text-[15px] font-semibold text-[var(--b-accent)]">
          Read more
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
