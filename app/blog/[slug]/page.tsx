// app/blog/[slug]/page.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogContent, { stripInline } from "@/components/BlogContent";
import { getAllPosts, getPostBySlug } from "@/lib/blog-posts";
import { SITE_URL } from "@/lib/site";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Blog | Acquirely" };
  const title = post.metaTitle ?? `${post.title} | Acquirely`;
  const description = post.metaDescription ?? post.excerpt;
  return {
    title,
    description,
    alternates: { canonical: `/blog/${post.slug}` },
    ...(post.image && {
      openGraph: {
        type: "article",
        title,
        description,
        url: `/blog/${post.slug}`,
        publishedTime: post.date,
        authors: [post.author],
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

  const faqs = post.content.flatMap((b) => (typeof b !== "string" && b.type === "faq" ? b.items : []));
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.metaDescription ?? post.excerpt,
      datePublished: post.date,
      mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
      ...(post.image && { image: `${SITE_URL}${post.image.src}` }),
      author: {
        "@type": post.authorRole ? "Person" : "Organization",
        name: post.author,
        ...(post.authorRole && { jobTitle: post.authorRole }),
        ...(post.authorUrl && { url: post.authorUrl }),
      },
      publisher: { "@type": "Organization", name: "Acquirely", url: SITE_URL },
    },
    ...(faqs.length
      ? [
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: stripInline(f.a) },
            })),
          },
        ]
      : []),
  ];

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
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

        <BlogContent content={post.content} />

        {post.authorRole && (
          <div className="mt-14 flex items-center gap-4 rounded-[12px] border border-gray-200 bg-[#F8FAFC] p-5">
            {post.authorImage && (
              <Image
                src={post.authorImage}
                alt={post.author}
                width={64}
                height={64}
                className="h-16 w-16 shrink-0 rounded-full object-cover"
              />
            )}
            <div>
              <p className="text-[13px] font-medium uppercase tracking-wide text-gray-500">Written by</p>
              <p className="text-[18px] font-bold text-[#0F172A]">{post.author}</p>
              <p className="text-[15px] text-gray-600">
                {post.authorRole}
                {post.authorUrl && (
                  <>
                    {" · "}
                    <a href={post.authorUrl} target="_blank" rel="noopener" className="font-medium text-[#0052FF] hover:underline">
                      LinkedIn
                    </a>
                  </>
                )}
              </p>
            </div>
          </div>
        )}

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
