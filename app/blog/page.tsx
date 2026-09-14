// app/blog/page.tsx
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { getAllPosts } from "@/lib/blog-posts";

export const metadata = {
  title: "Acquirely | Blog",
  description:
    "Insights on Meta Ads, Google Ads, and scaling ecommerce & lead-gen brands, from the Acquirely team.",
};

export default function BlogPage() {
  const posts = getAllPosts();

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
      </section>

      <Footer />
    </main>
  );
}
