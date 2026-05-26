import type { Metadata } from "next";
import PageShell from "@/src/components/PageShell";
import InquiryForm from "@/src/components/InquiryForm";

export const metadata: Metadata = {
  title: "Contact Us | Mohar & Stamp Printing Service",
  description: "Contact Mohar & Stamp Printing Service By Neptastic for custom stamp quotes, company seals, GST stamps, and express delivery in Greater Noida West.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <InquiryForm />
    </PageShell>
  );
}
