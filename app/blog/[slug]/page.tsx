// app/blog/[slug]/page.tsx
import React from "react";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllPosts, getPostBySlug } from "@/lib/blog-posts";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Acquirely | Blog" };
  return {
    title: `Acquirely | ${post.title}`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-[1200px] px-5 pt-6">
        <Navbar />
      </div>

      <article className="mx-auto max-w-[760px] px-5 py-16 md:py-24">
        <span className="text-[13px] font-medium text-[#0052FF]">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          · {post.author}
        </span>

        <h1 className="font-Montserrat mt-3 text-[32px] font-bold leading-tight text-[#0F172A] md:text-[42px]">
          {post.title}
        </h1>

        <div className="mt-8 space-y-6 text-[17px] leading-[28px] text-gray-700">
          {post.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </article>

      <Footer />
    </main>
  );
}
