"use client";

import { useState } from "react";
import { Star, ShieldCheck, HelpCircle, ChevronRight, CheckCircle } from "lucide-react";
import { FAQS, CUSTOMER_REVIEWS } from "../data";

export function ReviewsSection() {
  return (
    <section id="reviews" className="bg-slate-50/50 py-20 border-t border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-4">
            <span className="text-rose-600 font-mono text-xs tracking-widest uppercase font-semibold">
              Client Sentiments
            </span>
            <h3 className="font-sans font-extrabold text-3xl text-indigo-950 tracking-tight leading-none sm:text-4xl">
              Highly Rated by Local Businesses
            </h3>
            <p className="text-slate-500 text-sm">
              Join hundreds of active proprietors, chartered accountants, and company directors in Greater Noida West who rely on us for fast precision seals.
            </p>

            <div className="bg-white rounded-3xl p-6 border border-slate-100 space-y-3.5 shadow-sm">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-indigo-950">4.9</span>
                <span className="text-sm font-semibold text-slate-400">out of 5.0</span>
              </div>

              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <div className="text-xs text-slate-500 font-medium flex items-center gap-1.5 pt-2 border-t border-slate-50">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>100% genuine verified local customer reviews</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {CUSTOMER_REVIEWS.map((rev) => (
              <div
                key={rev.id}
                className="bg-white rounded-3xl p-6 border border-slate-100/70 shadow-sm space-y-4 hover:shadow-md transition duration-200"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="font-sans font-bold text-slate-900 text-sm leading-tight">{rev.name}</h5>
                    <span className="text-[10px] text-slate-400 font-medium block mt-0.5">{rev.role}</span>
                  </div>

                  <div className="flex gap-0.5">
                    {Array.from({ length: Math.floor(rev.rating) }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed italic">
                  "{rev.comment}"
                </p>

                <div className="pt-3 border-t border-slate-50 flex justify-between items-center text-[10px] text-slate-400 font-medium">
                  <span>{rev.date}</span>
                  {rev.verified && (
                    <span className="text-emerald-700 font-semibold flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded-full uppercase">
                      <CheckCircle className="w-3 h-3 text-emerald-600" />
                      Verified Purchase
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FAQSection() {
  const [activeFaq, setActiveFaq] = useState<string | null>("f1");
  const [activeCategory, setActiveCategory] = useState<"All" | "Legality" | "Delivery" | "Stamps" | "Ordering">("All");

  const filteredFaqs = activeCategory === "All" ? FAQS : FAQS.filter((f) => f.category === activeCategory);

  const toggleFaq = (id: string) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <div className="py-10">
      <section id="faq" className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-rose-600 font-mono text-xs tracking-widest uppercase font-semibold">
            Got Questions?
          </span>
          <h3 className="font-sans font-extrabold text-3xl text-indigo-950 mt-1 tracking-tight">
            Frequently Asked Questions
          </h3>
          <p className="text-slate-500 text-xs mt-2">
            Learn about self-inking durability, Indian GST regulations, and delivery routing next to Ace Divino.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8 border-b border-slate-100 pb-4">
          {(["All", "Legality", "Delivery", "Stamps", "Ordering"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold cursor-pointer transition ${
                activeCategory === cat ? "bg-rose-100 text-rose-700" : "bg-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpened = activeFaq === faq.id;
            return (
              <div key={faq.id} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm transition">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left py-4.5 px-6 flex justify-between items-center hover:bg-slate-50/50 transition cursor-pointer"
                >
                  <span className="font-sans font-bold text-slate-900 text-sm sm:text-base pr-4 flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-slate-400 shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronRight className={`w-4 h-4 text-slate-400 shrink-0 transform transition duration-300 ${isOpened ? "rotate-90" : ""}`} />
                </button>

                {isOpened && (
                  <div className="bg-slate-50/50 px-6 pb-5.5 pt-1 border-t border-slate-100/60">
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pl-6.5">
                      {faq.answer}
                    </p>
                    <div className="mt-3.5 pl-6.5">
                      <span className="inline-block bg-indigo-50 text-indigo-700 font-mono text-[9px] font-bold px-2 py-0.5 rounded uppercase">
                        Category: {faq.category}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default function FAQAndReviews() {
  return (
    <div className="space-y-24 py-10">
      <ReviewsSection />
      <FAQSection />
    </div>
  );
}
