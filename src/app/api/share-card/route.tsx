import { ImageResponse } from "next/og";

import { getGuide } from "@/data/guides";
import { getIndustry } from "@/data/industries";
import { getService } from "@/data/services";
import { SITE_NAME } from "@/lib/seo";

const pageNames: Record<string, string> = {
  "/": "Grow grass. Protect soil. Improve land.",
  "/services": "Practical land solutions",
  "/industries": "Land solutions for every sector",
  "/consulting": "Better decisions begin on the ground",
  "/guides": "Guides & Advice",
  "/about": "About GreenSprout",
  "/contact": "Contact GreenSprout",
  "/quote": "Tell us about your site",
  "/privacy": "Privacy notice",
  "/terms": "Website terms",
};

function shareTitle(path: string) {
  const [, group, slug] = path.split("/");
  if (group === "services" && slug) return getService(slug)?.name;
  if (group === "industries" && slug) return getIndustry(slug)?.name;
  if (group === "guides" && slug) return getGuide(slug)?.title;
  return pageNames[path];
}

export async function GET(request: Request) {
  const path = new URL(request.url).searchParams.get("path") || "/";
  const title = shareTitle(path) || SITE_NAME;
  const size = title.length > 52 ? 54 : title.length > 34 ? 65 : 82;

  return new ImageResponse(
    <div style={{ display: "flex", position: "relative", width: "100%", height: "100%", padding: "67px 78px", flexDirection: "column", justifyContent: "space-between", overflow: "hidden", background: "#002800", color: "#fff", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", position: "absolute", top: -190, right: -120, width: 690, height: 690, border: "3px solid rgba(183,255,42,.23)", borderRadius: "50%" }} />
      <div style={{ display: "flex", position: "absolute", top: -65, right: -5, width: 440, height: 440, border: "2px solid rgba(183,255,42,.16)", borderRadius: "50%" }} />
      <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 23, fontWeight: 700, letterSpacing: 3 }}>
        <div style={{ display: "flex", width: 46, height: 46, alignItems: "center", justifyContent: "center", background: "#b7ff2a", color: "#002800", fontSize: 32, fontWeight: 800 }}>G</div>
        GREENSPROUT
      </div>
      <div style={{ display: "flex", maxWidth: 980, flexDirection: "column", gap: 20 }}>
        <div style={{ display: "flex", color: "#b7ff2a", fontSize: 18, fontWeight: 700, letterSpacing: 4 }}>HYDROSEEDING · EROSION CONTROL · LAND CONSULTING</div>
        <div style={{ display: "flex", fontSize: size, fontWeight: 700, letterSpacing: -3, lineHeight: 1.05 }}>{title}</div>
      </div>
      <div style={{ display: "flex", width: "100%", paddingTop: 22, borderTop: "2px solid rgba(255,255,255,.35)", justifyContent: "space-between", color: "#e1eddb", fontSize: 22 }}>
        <span>Practical care for stronger landscapes.</span><span>KENYA ↗</span>
      </div>
    </div>,
    { width: 1200, height: 630 },
  );
}
