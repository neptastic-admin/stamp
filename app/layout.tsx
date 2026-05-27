import type { Metadata } from "next";
import "./globals.css";
import { BUSINESS_INFO } from "@/src/data";
import dynamic from "next/dynamic";

const DeferredAnalytics = dynamic(() => import("@/src/components/DeferredAnalytics"));

const siteUrl = `https://${BUSINESS_INFO.website}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: BUSINESS_INFO.titleAndSEO,
  description: BUSINESS_INFO.metaDesc,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: BUSINESS_INFO.titleAndSEO,
    description: BUSINESS_INFO.metaDesc,
    url: siteUrl,
    siteName: BUSINESS_INFO.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: BUSINESS_INFO.titleAndSEO,
    description: BUSINESS_INFO.metaDesc,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <DeferredAnalytics />
      </head>
      <body>{children}</body>
    </html>
  );
}
