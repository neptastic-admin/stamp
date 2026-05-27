import dynamic from "next/dynamic";
import Hero from "./components/Hero";
import { ServicesSection, AboutSection } from "./components/AboutAndServices";
import PageShell from "./components/PageShell";
import BlogSection from "./components/BlogSection";

// Defer heavy interactive components to client-side and load on idle/interaction.
const StampCustomizer = dynamic(() => import("./components/StampCustomizer"), {
  loading: () => <div className="py-20 text-center text-sm text-slate-500">Loading customizer…</div>,
});

const Gallery = dynamic(() => import("./components/Gallery"), {
  loading: () => <div className="py-16 text-center text-sm text-slate-500">Loading gallery…</div>,
});

const FAQAndReviews = dynamic(() => import("./components/FAQAndReviews"), {
  loading: () => null,
});

const InquiryForm = dynamic(() => import("./components/InquiryForm"), {
  loading: () => null,
});

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
      <FAQAndReviews />
      <InquiryForm />
    </PageShell>
  );
}
