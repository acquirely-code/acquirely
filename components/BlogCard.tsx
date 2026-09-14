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
      className="group flex flex-col overflow-hidden rounded-[12px] border border-gray-200 bg-white shadow-[0_4px_24px_rgba(37,99,235,0.06)] transition hover:shadow-[0_8px_32px_rgba(37,99,235,0.12)]"
    >
      <div className="relative h-[200px] w-full overflow-hidden bg-gray-100">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <span className="text-[13px] font-medium text-[#0052FF]">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>

        <h3 className="mt-2 text-[20px] font-bold leading-snug text-[#0F172A]">
          {post.title}
        </h3>

        <p className="mt-3 flex-1 text-[15px] leading-[22px] text-gray-600">
          {post.excerpt}
        </p>

        <span className="mt-4 flex items-center gap-1 text-[15px] font-semibold text-[#0052FF]">
          Read more
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
