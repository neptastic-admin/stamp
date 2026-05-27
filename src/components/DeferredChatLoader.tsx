"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Minimal client loader that only imports the full chat assistant when user clicks or on idle.
export default function DeferredChatLoader() {
  const [Chat, setChat] = useState<any>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // prefetch on idle to improve perceived responsiveness without blocking main thread
    if (typeof window !== "undefined" && 'requestIdleCallback' in window) {
      (window as any).requestIdleCallback(() => {
        import("./ChatAssistant").then((m) => {
          setChat(() => m.default);
          setLoaded(true);
        }).catch(() => {});
      }, { timeout: 2000 });
    }
  }, []);

  const handleLoad = async () => {
    if (!Chat) {
      const m = await import("./ChatAssistant");
      setChat(() => m.default);
      setLoaded(true);
    }
  };

  if (Chat && loaded) {
    const ChatComp = Chat;
    return <ChatComp />;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleLoad}
        className="bg-indigo-950 text-white p-3 rounded-full shadow-2xl hover:bg-slate-900 transition flex items-center gap-2"
        aria-label="Open chat assistant"
      >
        <span className="text-xs font-semibold">Chat</span>
      </button>
    </div>
  );
}
