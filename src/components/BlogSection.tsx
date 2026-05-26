import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "../data";

export default function BlogSection() {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-12">
          <div className="max-w-2xl">
            <span className="text-rose-600 font-mono text-xs tracking-widest uppercase font-semibold">
              Blogs
            </span>
            <h2 className="font-sans font-extrabold text-3xl text-indigo-950 mt-2 tracking-tight sm:text-4xl">
              Helpful Stamp Guides for Better Search Reach
            </h2>
            <p className="text-slate-500 text-sm mt-3">
              We have started publishing practical stamp guides to help businesses understand self-inking stamps, company seals, and GST layouts before ordering.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-rose-600 font-semibold text-sm hover:text-rose-700 transition"
          >
            <span>View All Blogs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.slice(0, 3).map((post) => (
            <article
              key={post.slug}
              className="rounded-3xl border border-slate-100 bg-slate-50/60 p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] text-slate-400 font-semibold uppercase tracking-wide">
                  <span>{post.category}</span>
                  <time dateTime={post.publishedAt}>{post.publishedAt}</time>
                </div>
                <h3 className="font-sans font-bold text-slate-900 text-lg leading-tight">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{post.excerpt}</p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-200/70">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-indigo-950 font-semibold text-sm hover:text-rose-600 transition"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
