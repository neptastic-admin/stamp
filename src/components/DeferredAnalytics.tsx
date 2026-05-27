"use client";

import { useEffect } from "react";

export default function DeferredAnalytics() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const id = "G-2WDQ7WNL0J";

    const load = () => {
      if ((window as any).gtag) return;
      const s = document.createElement("script");
      s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
      s.async = true;
      document.head.appendChild(s);

      const inline = document.createElement("script");
      inline.innerHTML = `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${id}', { page_path: window.location.pathname });`;
      document.head.appendChild(inline);
    };

    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(load, { timeout: 2000 });
    } else {
      setTimeout(load, 2000);
    }
  }, []);

  return null;
}
