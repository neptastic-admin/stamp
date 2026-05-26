import type { Metadata } from "next";
import PageShell from "@/src/components/PageShell";
import { ServicesSection } from "@/src/components/AboutAndServices";
import StampCustomizer from "@/src/components/StampCustomizer";

export const metadata: Metadata = {
  title: "Stamp Services in Greater Noida West | Mohar & Stamp Printing Service",
  description: "Explore custom rubber stamps, office mohars, GST stamps, company seals, and online stamp proofing services in Greater Noida West.",
};

export default function ServicesPage() {
  return (
    <PageShell>
      <section className="bg-slate-50 border-b border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-rose-600 font-mono text-xs tracking-widest uppercase font-semibold">
              Services
            </span>
            <h1 className="font-sans font-extrabold text-4xl text-indigo-950 mt-2 tracking-tight sm:text-5xl">
              Custom Stamp Services
            </h1>
            <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
              Explore our stamp categories, compare use cases, and submit your preferred layout in the customizer below.
            </p>
          </div>
        </div>
      </section>
      <ServicesSection />
      <div className="bg-slate-50/50 py-10">
        <StampCustomizer />
      </div>
    </PageShell>
  );
}
