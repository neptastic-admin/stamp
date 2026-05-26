import App from "@/src/App";
import { BUSINESS_INFO, FAQS, CUSTOMER_REVIEWS, BLOG_POSTS } from "@/src/data";

const siteUrl = `https://${BUSINESS_INFO.website}`;

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: BUSINESS_INFO.name,
  image: siteUrl,
  url: siteUrl,
  telephone: `+91${BUSINESS_INFO.phone}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "RS Plaza, Block B-07, Near Ace Divino, Sector 1",
    addressLocality: "Greater Noida West",
    addressRegion: "Uttar Pradesh",
    postalCode: "201318",
    addressCountry: "IN",
  },
  areaServed: ["Greater Noida West", "Noida", "Ghaziabad"],
  description: BUSINESS_INFO.metaDesc,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: BUSINESS_INFO.name,
  url: siteUrl,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: String(CUSTOMER_REVIEWS.length),
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: `${BUSINESS_INFO.name} Blog`,
  url: `https://${BUSINESS_INFO.website}/blog`,
  blogPost: BLOG_POSTS.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    url: `https://${BUSINESS_INFO.website}/blog/${post.slug}`,
    datePublished: post.publishedAt,
    keywords: post.keywords.join(", "),
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aggregateRatingSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogSchema),
        }}
      />
      <App />
    </>
  );
}
