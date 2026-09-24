import type { MetadataRoute } from "next";

import { guides } from "@/data/guides";
import { industries } from "@/data/industries";
import { services } from "@/data/services";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["/", "/services", "/industries", "/consulting", "/guides", "/about", "/contact", "/quote", "/privacy", "/terms"];
  const paths = [
    ...staticPaths,
    ...services.map(({ slug }) => `/services/${slug}`),
    ...industries.map(({ slug }) => `/industries/${slug}`),
    ...guides.map(({ slug }) => `/guides/${slug}`),
  ];

  return paths.map((path) => ({ url: absoluteUrl(path) }));
}
