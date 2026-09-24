"use client";

import { usePathname } from "next/navigation";

const pageNames: Record<string, string> = {
  "/": "Homepage",
  "/services": "Solutions",
  "/industries": "Industries",
  "/consulting": "Consulting",
  "/guides": "Guides & Advice",
  "/about": "About GreenSprout",
  "/contact": "Contact GreenSprout",
  "/quote": "Get a quote",
  "/privacy": "Privacy",
  "/terms": "Website terms",
};

export function PageArrival() {
  const pathname = usePathname();
  const leaf = pathname.split("/").filter(Boolean).at(-1) ?? "";
  const label = pageNames[pathname] ?? leaf.replaceAll("-", " ").replace(/\b\w/g, (letter) => letter.toUpperCase());

  return <div className="page-arrival-badge" role="status"><span>Now viewing</span><strong>{label}</strong></div>;
}
