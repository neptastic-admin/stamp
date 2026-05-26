import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/src/components/PageShell";
import { BLOG_POSTS, BUSINESS_INFO } from "@/src/data";

export const metadata: Metadata = {
  title: "Stamp Blog | Self-Inking, GST, and Company Seal Guides",
  description:
    "Read practical blog articles about self-inking stamps, GST stamp formatting, office mohars, and company seals from our Greater Noida West stamp workshop.",
};

export default function BlogPage() {
  return (
    <PageShell>
      <section className="bg-slate-50 border-b border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-rose-600 font-mono text-xs tracking-widest uppercase font-semibold">
              Blog
            </span>
            <h1 className="font-sans font-extrabold text-4xl text-indigo-950 mt-2 tracking-tight sm:text-5xl">
              Stamp Guides and Helpful Articles
            </h1>
            <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
              Explore practical reading on self-inking stamps, GST stamp layouts, and company seal preparation from {BUSINESS_INFO.name}.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="rounded-3xl border border-slate-100 bg-slate-50/60 p-8 shadow-sm hover:shadow-md transition"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[11px] text-slate-400 font-semibold uppercase tracking-wide">
                  <span>{post.category}</span>
                  <time dateTime={post.publishedAt}>{post.publishedAt}</time>
                </div>
                <h2 className="font-sans font-extrabold text-2xl text-indigo-950 tracking-tight">
                  {post.title}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {post.keywords.slice(0, 4).map((keyword) => (
                    <span
                      key={keyword}
                      className="rounded-full bg-white border border-slate-200 px-3 py-1 text-[11px] font-medium text-slate-500"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/70">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center justify-center rounded-xl bg-indigo-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-900"
                >
                  Read Full Article
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
