import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{ source: "/docs/greensprout-investment-brief.pdf", headers: [{ key: "X-Robots-Tag", value: "noindex, noarchive" }] }];
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
