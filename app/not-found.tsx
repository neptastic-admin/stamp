import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex items-center justify-center px-6">
      <div className="max-w-xl text-center space-y-4">
        <p className="text-xs font-mono uppercase tracking-[0.3em] text-rose-600">
          Page Not Found
        </p>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-indigo-950">
          This page does not exist
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          The page you are looking for may have been moved or removed. Go back to the homepage to continue browsing our stamp services.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-indigo-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-900"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
