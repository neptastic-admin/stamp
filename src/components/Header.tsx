import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { BUSINESS_INFO } from "../data";

export default function Header() {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt={BUSINESS_INFO.name}
              width={220}
              height={72}
              priority
              className="h-12 sm:h-14 w-auto object-contain"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-amber-600 transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={BUSINESS_INFO.callNumber}
              className="bg-rose-600 hover:bg-rose-700 text-white px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium shadow-md shadow-rose-600/10 flex items-center gap-2 transition"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Call Office: 9267900106</span>
              <span className="sm:hidden">Call Now</span>
            </a>

            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium shadow-lg flex items-center gap-2 transition"
            >
              <span className="w-2 h-2 bg-green-300 rounded-full animate-ping" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
