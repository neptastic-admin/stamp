"use client";

import Hero from "./components/Hero";
import { ServicesSection, AboutSection } from "./components/AboutAndServices";
import StampCustomizer from "./components/StampCustomizer";
import Gallery from "./components/Gallery";
import InquiryForm from "./components/InquiryForm";
import { FAQSection, ReviewsSection } from "./components/FAQAndReviews";
import PageShell from "./components/PageShell";
import BlogSection from "./components/BlogSection";

export default function App() {
  return (
    <PageShell>
      <Hero />
      <ServicesSection />
      <AboutSection />
      <div className="bg-slate-50/50 py-10">
        <StampCustomizer />
      </div>
      <Gallery />
      <BlogSection />
      <ReviewsSection />
      <FAQSection />
      <InquiryForm />
    </PageShell>
  );
}
