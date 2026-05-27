"use client";

import { useState } from "react";
import Image from "next/image";
import { CreditCard, ArrowRight, CheckCircle, Smartphone } from "lucide-react";
import { GALLERY_ITEMS } from "../data";

const CATEGORIES = [
  "All Products",
  "Self-Inking Stamps",
  "Company Seals",
  "Office Mohars",
  "Packaging & Logos",
  "Administrative Stamps",
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  const filteredItems =
    selectedCategory === "All Products"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-rose-600 font-mono text-xs tracking-widest uppercase font-semibold">
            Product Portfolio
          </span>
          <h3 className="font-sans font-extrabold text-3xl text-indigo-950 mt-2 tracking-tight sm:text-4xl">
            Our Official Stamp Gallery
          </h3>
          <p className="text-slate-500 text-sm mt-3">
            Browse our wide selection of pre-inked Japanese flash stamps, heavy
            metal handle daters, and custom company seals ready for express ship
            in Greater Noida West.
          </p>
        </div>

        {/* Filter Navigation Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition cursor-pointer ${
                selectedCategory === cat
                  ? "bg-indigo-950 text-white shadow-md shadow-indigo-950/25 border border-indigo-900"
                  : "bg-white hover:bg-slate-100/80 text-slate-600 border border-slate-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition duration-300 flex flex-col group"
            >
              <div className="aspect-square w-full relative overflow-hidden bg-slate-100 p-4 sm:p-5">
                <Image
                  src={item.image}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  fill
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 33vw"
                  style={{ objectFit: "contain" }}
                  className="group-hover:scale-105 transition duration-500"
                />
                <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold tracking-wider text-rose-600 uppercase shadow-sm font-mono">
                  {item.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h4 className="font-sans font-bold text-slate-900 text-base leading-tight">
                    {item.name}
                  </h4>
                  <ul className="space-y-1">
                    {item.features.map((feat, idx) => (
                      <li
                        key={idx}
                        className="text-xs text-slate-500 flex items-center gap-2"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">
                    Ready in 2-3 Hours
                  </span>
                  <a
                    href={`https://wa.me/919267900106?text=Hi%20Neptastic,%20I%20want%20to%20order%20the%20${encodeURIComponent(item.name)}%20model.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-rose-600 font-sans font-semibold text-xs hover:text-rose-700 transition"
                  >
                    <span>Instant Order</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Empty State Indicator */}
        {filteredItems.length === 0 && (
          <div className="text-center bg-white rounded-3xl p-12 border border-dashed border-slate-200">
            <p className="text-slate-500 text-sm">
              No specialized options found under this category. Contact us
              directly to custom forge it!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
