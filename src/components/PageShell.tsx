"use client";

import Header from "./Header";
import Footer from "./Footer";
import ChatAssistant from "./ChatAssistant";

type PageShellProps = {
  children: React.ReactNode;
};

export default function PageShell({ children }: PageShellProps) {
  return (
    <div className="bg-white min-h-screen text-slate-800 antialiased selection:bg-rose-500 selection:text-white">
      <Header />
      <main>{children}</main>
      <Footer />
      <ChatAssistant />
    </div>
  );
}
