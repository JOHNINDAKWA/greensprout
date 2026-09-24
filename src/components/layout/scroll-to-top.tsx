"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.location.hash) return;
    // App Router preserves the document during navigation; reset after the new route commits.
    const frame = requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: "instant" }));
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
