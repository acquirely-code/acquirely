// app/blog/page.tsx
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { getAllPosts } from "@/lib/blog-posts";

export const metadata = {
  title: "Meta Ads & Ecommerce Growth Blog | Acquirely",
  description:
    "Insights on Meta Ads, Google Ads, and scaling ecommerce & lead-gen brands, from the Acquirely team.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = getAllPosts().filter((p) => !p.archived);
  const archived = getAllPosts().filter((p) => p.archived);

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <div className="mx-auto max-w-[1200px] px-5 pt-6">
        <Navbar />
      </div>

      <section className="mx-auto max-w-[1024px] px-5 py-16 md:py-24">
        <div className="mb-12 text-center">
          <h1 className="font-Montserrat text-[36px] font-bold text-[#0F172A] md:text-[44px]">
            Blog
          </h1>
          <p className="mt-3 text-[16px] text-gray-600">
            Playbooks and breakdowns from running paid growth for ecommerce
            and lead-gen brands.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        {archived.length > 0 && (
          <div className="mt-20">
            <h2 className="font-Montserrat mb-8 border-t border-gray-200 pt-10 text-[24px] font-bold text-[#0F172A]">
              Archive
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {archived.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
