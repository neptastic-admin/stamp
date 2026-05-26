import type { Metadata } from "next";
import PageShell from "@/src/components/PageShell";
import { FAQSection } from "@/src/components/FAQAndReviews";

export const metadata: Metadata = {
  title: "FAQ | Mohar & Stamp Printing Service",
  description: "Find answers about GST stamps, self-inking stamps, proprietorship mohars, delivery times, and ordering custom stamps in Greater Noida West.",
};

export default function FAQPage() {
  return (
    <PageShell>
      <FAQSection />
    </PageShell>
  );
}
