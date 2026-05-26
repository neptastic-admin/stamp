import {
  FileSignature,
  Award,
  Calculator,
  PenTool,
  CheckSquare,
  ShieldAlert,
  UserCheck,
  Package,
  Sparkles,
  Zap,
  Clock,
  Shield,
  Activity,
  Percent,
  ArrowRight,
} from "lucide-react";
import { STAMP_SERVICES, WHY_CHOOSE_US_POINTERS, BUSINESS_INFO } from "../data";

const getIcon = (name: string) => {
  switch (name) {
    case "FileSignature": return <FileSignature className="w-6 h-6 text-rose-500" />;
    case "Award": return <Award className="w-6 h-6 text-rose-500" />;
    case "Calculator": return <Calculator className="w-6 h-6 text-rose-500" />;
    case "PenTool": return <PenTool className="w-6 h-6 text-rose-500" />;
    case "CheckSquare": return <CheckSquare className="w-6 h-6 text-rose-500" />;
    case "ShieldAlert": return <ShieldAlert className="w-6 h-6 text-rose-500" />;
    case "UserCheck": return <UserCheck className="w-6 h-6 text-rose-500" />;
    case "Package": return <Package className="w-6 h-6 text-rose-500" />;
    case "Sparkles": return <Sparkles className="w-6 h-6 text-rose-500" />;
    case "Zap": return <Zap className="w-6 h-6 text-rose-500" />;
    case "Clock": return <Clock className="w-6 h-6 text-rose-500" />;
    case "Shield": return <Shield className="w-6 h-6 text-rose-500" />;
    case "Activity": return <Activity className="w-6 h-6 text-rose-500" />;
    case "Percent": return <Percent className="w-6 h-6 text-rose-500" />;
    default: return <FileSignature className="w-6 h-6 text-rose-500" />;
  }
};

export function ServicesSection() {
  return (
    <section id="services" className="py-20 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-rose-600 font-mono text-xs tracking-widest uppercase font-semibold">
            Authorized Offerings
          </span>
          <h2 className="font-sans font-extrabold text-3xl text-indigo-950 mt-1.5 tracking-tight sm:text-4xl">
            {BUSINESS_INFO.h2}
          </h2>
          <p className="text-slate-500 text-sm mt-3">
            We leverage advanced CO2 laser cutting and high-density polymer matrices to prepare authorized seals and office mohars with extreme sharpness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {STAMP_SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="bg-white rounded-3xl p-6.5 border border-slate-100/90 shadow-sm hover:shadow-xl hover:border-indigo-100 transition duration-300 flex flex-col justify-between items-start space-y-4 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-rose-600 group-hover:bg-indigo-950 transition-colors" />

              <div className="space-y-3 w-full">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:scale-105 transition">
                  {getIcon(srv.iconName)}
                </div>
                <div>
                  <h4 className="font-sans font-extrabold text-slate-900 group-hover:text-indigo-950 text-base">
                    {srv.name}
                  </h4>
                  <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider block mt-0.5">
                    {srv.tagline}
                  </span>
                </div>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  {srv.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-50 w-full flex items-center justify-end">
                <a
                  href={`https://wa.me/919267900106?text=Hi%20Neptastic,%20I'm%20interested%20in%20customizing%20a%20${encodeURIComponent(srv.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-indigo-50/50 hover:bg-indigo-100 text-indigo-950 px-3 py-1.5 rounded-lg text-xs font-semibold transition"
                >
                  <span>Configure</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-slate-50/70 border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-5">
            <span className="bg-rose-50 text-rose-600 font-mono text-xs tracking-widest px-3 py-1.5 rounded-full uppercase font-medium">
              Established Authority
            </span>
            <h3 className="font-sans font-extrabold text-3xl text-indigo-950 leading-tight">
              About Mohar & Stamp Printing Service
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Located near Ace Divino in Sector 1 Greater Noida West, we specialize in self-inking stamps, office mohars, signature stamps, and clean day-to-day business stamping solutions for local offices and professionals.
            </p>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Our workshop utilizes advanced Japanese Flash vulcanization to ensure clean ink disbursement with zero fading. We operate hand-in-hand with corporate legal offices to provide compliance-assured stamps with fast approval support.
            </p>

            <div className="p-5.5 rounded-2xl bg-white border border-slate-100 space-y-3 shadow-sm">
              <span className="text-xs font-semibold text-rose-600 font-mono uppercase tracking-wider block">Workshop Outlet Address:</span>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">
                RS Plaza, Block B-07, Near Ace Divino, Sector 1, Greater Noida West, Bisrakh Jalalpur, Uttar Pradesh – 201318
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {WHY_CHOOSE_US_POINTERS.map((ptr, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6.5 border border-slate-100/80 shadow-sm space-y-3 hover:translate-y-[-4px] transition duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600 border border-rose-100">
                  {getIcon(ptr.icon)}
                </div>
                <h4 className="font-sans font-bold text-slate-900 text-sm sm:text-base">
                  {ptr.title}
                </h4>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  {ptr.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AboutAndServices() {
  return (
    <div className="space-y-24">
      <ServicesSection />
      <AboutSection />
    </div>
  );
}
