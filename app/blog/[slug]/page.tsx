// app/blog/[slug]/page.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
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
  if (!post) return { title: "Blog | Acquirely" };
  return {
    title: `${post.title} | Acquirely`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    ...(post.image && {
      openGraph: {
        images: [
          {
            url: post.image.src,
            width: post.image.width,
            height: post.image.height,
            alt: post.image.alt,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        images: [post.image.src],
      },
    }),
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

        {post.image && (
          <figure className="mt-8">
            <Image
              src={post.image.src}
              alt={post.image.alt}
              title={post.image.title}
              width={post.image.width}
              height={post.image.height}
              className="h-auto w-full rounded-[12px] border border-gray-200"
            />
            <figcaption className="mt-3 text-[14px] leading-[20px] text-gray-500">
              {post.image.description}
            </figcaption>
          </figure>
        )}

        <div className="mt-8 space-y-6 text-[17px] leading-[28px] text-gray-700">
          {post.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <aside className="mt-16 border-t border-gray-200 pt-10">
          <h2 className="font-Montserrat text-[22px] font-bold text-[#0F172A]">Keep reading</h2>
          <ul className="mt-5 space-y-3 text-[16px]">
            {getAllPosts()
              .filter((p) => p.slug !== post.slug)
              .map((p) => (
                <li key={p.slug}>
                  <Link href={`/blog/${p.slug}`} className="font-medium text-[#0052FF] hover:underline">
                    {p.title}
                  </Link>
                </li>
              ))}
            <li>
              <Link href="/case-studies" className="font-medium text-[#0052FF] hover:underline">
                Meta Ads case studies: real ROAS and revenue results
              </Link>
            </li>
            <li>
              <Link href="/ecommerce" className="font-medium text-[#0052FF] hover:underline">
                How we run Meta Ads for D2C and ecommerce brands
              </Link>
            </li>
            <li>
              <Link href="/dropshipping-calculator" className="font-medium text-[#0052FF] hover:underline">
                Free dropshipping profit and break-even ROAS calculator
              </Link>
            </li>
          </ul>
        </aside>
      </article>

      <Footer />
    </main>
  );
}
