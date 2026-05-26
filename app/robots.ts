import type { MetadataRoute } from "next";
import { BUSINESS_INFO } from "@/src/data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `https://${BUSINESS_INFO.website}/sitemap.xml`,
  };
}
