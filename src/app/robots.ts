import type { MetadataRoute } from "next";

import { absoluteUrl, isPublicSite } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", ...(isPublicSite ? { allow: "/" } : { disallow: "/" }) },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
