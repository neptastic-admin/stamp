import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageShell from "@/src/components/PageShell";
import { BLOG_POSTS, BUSINESS_INFO } from "@/src/data";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((entry) => entry.slug === slug);

  if (!post) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: `${post.title} | ${BUSINESS_INFO.name}`,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((entry) => entry.slug === slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS_INFO.name,
    },
    keywords: post.keywords.join(", "),
    mainEntityOfPage: `https://${BUSINESS_INFO.website}/blog/${post.slug}`,
  };

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className="bg-white">
        <section className="bg-slate-50 border-b border-slate-100 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/blog" className="text-sm font-semibold text-rose-600 hover:text-rose-700 transition">
              Back to Blog
            </Link>
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3 text-[11px] text-slate-400 font-semibold uppercase tracking-wide">
                <span>{post.category}</span>
                <span>{post.publishedAt}</span>
              </div>
              <h1 className="font-sans font-extrabold text-4xl sm:text-5xl text-indigo-950 tracking-tight leading-tight">
                {post.title}
              </h1>
              <p className="text-base text-slate-600 leading-relaxed">{post.excerpt}</p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-slate max-w-none">
              {post.content.map((paragraph) => (
                <p key={paragraph} className="text-base leading-8 text-slate-700 mb-6">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 rounded-3xl border border-slate-100 bg-slate-50/70 p-6">
              <h2 className="font-sans font-bold text-xl text-indigo-950">Need a custom stamp layout?</h2>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Contact us for self-inking stamps, company seals, GST stamps, and office mohars in Greater Noida West.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-indigo-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-900"
                >
                  Contact Us
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </article>
    </PageShell>
  );
}
