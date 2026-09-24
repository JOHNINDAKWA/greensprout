import type { Metadata } from "next";

export const SITE_NAME = "GreenSprout Hydroseeding";
export const SITE_DESCRIPTION =
  "Hydroseeding, erosion control, landscape establishment and practical land consulting for projects in Kenya.";

// Set NEXT_PUBLIC_SITE_URL to the actual HTTPS domain before a public build.
export const isPublicSite = Boolean(process.env.NEXT_PUBLIC_SITE_URL);
export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "") || "http://localhost:3000",
);

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

export function pageMetadata({
  title,
  description,
  path,
  kind = "website",
}: {
  title: string;
  description: string;
  path: string;
  kind?: "website" | "article";
}): Metadata {
  const fullTitle = path === "/" ? SITE_NAME : `${title} | ${SITE_NAME}`;
  const card = absoluteUrl(`/api/share-card?path=${encodeURIComponent(path)}`);

  return {
    title: path === "/" ? { absolute: SITE_NAME } : title,
    description,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      title: fullTitle,
      description,
      url: absoluteUrl(path),
      siteName: SITE_NAME,
      locale: "en_KE",
      type: kind,
      images: [{ url: card, width: 1200, height: 630, type: "image/png", alt: `${title} — GreenSprout Hydroseeding` }],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [card] },
    robots: { index: isPublicSite, follow: isPublicSite },
  };
}
