import Image from "next/image";
import Link from "next/link";
import { MapPin, PhoneCall, Globe, Globe2, MessageSquare } from "lucide-react";
import { BUSINESS_INFO } from "../data";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 font-sans border-t border-slate-800">
      {/* 1. Map & Main info block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact details */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center">
            <Image
              src="/footer-logo.png"
              alt={BUSINESS_INFO.name}
              width={220}
              height={72}
              className="h-14 w-auto object-contain"
            />
          </div>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Self-inking stamp specialists near Ace Divino, Sector 1, Greater
            Noida West. We focus on clean, durable daily-use stamps, office
            mohars, signature stamps, and fast custom proof support.
          </p>

          <div className="space-y-3 pt-2 text-xs sm:text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-1" />
              <span>
                <strong>Store Workshop:</strong> {BUSINESS_INFO.address}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <PhoneCall className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>
                <strong>Phone Direct:</strong>{" "}
                <a
                  href={BUSINESS_INFO.callNumber}
                  className="hover:text-white underline transition"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Globe className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>
                <strong>Website:</strong>{" "}
                <a
                  href={`https://${BUSINESS_INFO.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white underline transition"
                >
                  {BUSINESS_INFO.website}
                </a>
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={BUSINESS_INFO.callNumber}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-750 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition"
            >
              <PhoneCall className="w-3.5 h-3.5 text-rose-500" />
              <span>Click to Call</span>
            </a>

            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-emerald-600/10 hover:bg-emerald-600/20 text-emerald-400 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Direct</span>
            </a>
          </div>

          <div className="pt-2 text-xs sm:text-sm">
            <div className="font-semibold text-white mb-2">Helpful Links</div>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <Link href="/blog" className="hover:text-white transition">
                Stamp Blog
              </Link>
              <Link href="/services" className="hover:text-white transition">
                Services
              </Link>
              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Real Dynamic Embedded Google Map without paid credentials */}
        <div id="workshop-location-map" className="lg:col-span-7 space-y-3">
          <span className="block text-xs font-bold text-slate-350 uppercase tracking-widest font-mono">
            Physical Workshop Map Locator (Near Ace Divino)
          </span>

          <div className="w-full h-80 rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 relative shadow-inner">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.299564878264!2d77.4365884876683!3d28.56076592470371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef39265c9d01%3A0x3e7de6c075e76549!2sMohar%20And%20Stamp%20Printing%20Service!5e0!3m2!1sen!2sin!4v1779802102088!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(0.1) contrast(1.1)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mohar & Stamp Workshop Location Map"
            />
          </div>
        </div>
      </div>

      {/* 2. Copyright details */}
      <div className="border-t border-slate-800 bg-slate-950/60 py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>
            © {new Date().getFullYear()} Mohar & Stamp Printing Service By
            Neptastic. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            <span>Designed for compliant businesses. Crafted by</span>
            <a
              href="https://stamp.neptastic.in"
              className="text-rose-500 font-semibold hover:underline"
            >
              Neptastic
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
