"use client";

import { Flame, ArrowRight, Smartphone } from "lucide-react";
import { BUSINESS_INFO } from "../data";

export default function Hero() {
  const handleScrollToSegment = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-slate-50 border-b border-slate-100 py-16 sm:py-24">
      <div className="absolute top-0 right-0 w-80 h-80 bg-rose-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-12 left-12 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-1.5 bg-rose-50 border border-rose-100/90 py-1.5 px-3.5 rounded-full">
              <Flame className="w-4 h-4 text-rose-500" />
              <span className="text-xs font-mono font-bold text-rose-700 uppercase tracking-widest">
                {BUSINESS_INFO.tagline}
              </span>
            </div>

            <div className="space-y-3">
              <h1 className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-5xl text-indigo-950 tracking-tight leading-tight">
                {BUSINESS_INFO.heroTitle}
              </h1>
              <p className="text-slate-600 text-sm sm:text-base md:text-md font-medium leading-relaxed">
                {BUSINESS_INFO.heroSubtitle}
              </p>
            </div>

            <p className="text-slate-500 text-xs sm:text-sm max-w-xl leading-relaxed">
              Mohar & Stamp Printing Service By Neptastic in Greater Noida West
              makes customized rubber stamps, office seals, self-inking stamps,
              and GST stamps ready for express delivery.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-3">
              <button
                onClick={() => handleScrollToSegment("stamp-customizer")}
                className="bg-indigo-950 hover:bg-slate-900 border border-slate-850 text-white font-sans font-medium py-3.5 px-6 rounded-2xl shadow-xl flex items-center justify-center gap-2.5 transition transform hover:-translate-y-0.5"
              >
                <span>Design Your Stamp Online</span>
                <ArrowRight className="w-4.5 h-4.5 text-rose-500" />
              </button>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-medium py-3.5 px-6 rounded-2xl shadow-lg flex items-center justify-center gap-2 transition transform hover:-translate-y-0.5"
              >
                <Smartphone className="w-4.5 h-4.5" />
                <span>Instant WhatsApp Order</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/60 max-w-lg">
              <div>
                <span className="text-lg font-extrabold text-indigo-950 block">
                  3 Hours
                </span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wide">
                  Express Delivery
                </span>
              </div>
              <div>
                <span className="text-lg font-extrabold text-indigo-950 block">
                  Same Day
                </span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wide">
                  Fast Proofing
                </span>
              </div>
              <div>
                <span className="text-lg font-extrabold text-indigo-950 block">
                  10,000+
                </span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wide">
                  Impressions
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-2xl space-y-5 max-w-sm relative transform rotate-1 hover:rotate-0 transition duration-300">
              <span className="absolute -top-3.5 -right-3 bg-rose-600 text-white font-mono text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                Hot Pick
              </span>

              <div className="aspect-[4/3] w-full rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center relative overflow-hidden">
                <img
                  src="/stamp-mockup.png"
                  alt="Luxury stamp handle mockup"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <span className="absolute bottom-3 left-3 text-xs font-semibold text-white">
                  Japanese Flash Self-Inking
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-sans font-bold text-slate-900 text-base leading-tight">
                  Express Self-Inking Proprietor Stamp
                </h3>
                <p className="text-slate-500 text-xs">
                  Pre-filled flash micro-leak core offering 15,000 pristine
                  crisp impressions without messy external stamp pads.
                </p>
              </div>

              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-indigo-950 font-mono">
                  Custom Layout Ready
                </span>
                <button
                  onClick={() => handleScrollToSegment("stamp-customizer")}
                  className="text-rose-600 font-bold hover:underline"
                >
                  Pre-order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
