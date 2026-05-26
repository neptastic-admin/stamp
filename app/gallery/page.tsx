import type { Metadata } from "next";
import PageShell from "@/src/components/PageShell";
import Gallery from "@/src/components/Gallery";

export const metadata: Metadata = {
  title: "Stamp Gallery | Mohar & Stamp Printing Service",
  description: "Browse self-inking stamps, office mohars, company seals, and custom branding stamp examples from our Greater Noida West workshop.",
};

export default function GalleryPage() {
  return (
    <PageShell>
      <Gallery />
    </PageShell>
  );
}
