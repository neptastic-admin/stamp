import type { Metadata } from "next";
import PageShell from "@/src/components/PageShell";
import { AboutSection } from "@/src/components/AboutAndServices";
import { ReviewsSection } from "@/src/components/FAQAndReviews";

export const metadata: Metadata = {
  title: "About Us | Mohar & Stamp Printing Service",
  description: "Learn about Mohar & Stamp Printing Service By Neptastic, our Greater Noida West workshop, and why local businesses trust our stamp-making service.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <AboutSection />
      <ReviewsSection />
    </PageShell>
  );
}
