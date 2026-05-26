import type { Metadata } from "next";
import "./globals.css";
import { BUSINESS_INFO } from "@/src/data";

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
      <body>{children}</body>
    </html>
  );
}
