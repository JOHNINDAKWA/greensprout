import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";

import "./globals.css";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { absoluteUrl, pageMetadata, SITE_DESCRIPTION, SITE_NAME, siteUrl } from "@/lib/seo";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  ...pageMetadata({ title: SITE_NAME, description: SITE_DESCRIPTION, path: "/" }),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  applicationName: SITE_NAME,
  keywords: ["hydroseeding Kenya", "erosion control Kenya", "landscape establishment", "site assessment", "land rehabilitation"],
};

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: absoluteUrl("/"),
  logo: absoluteUrl("/brand/greensprout-logo.png"),
  description: SITE_DESCRIPTION,
  telephone: "+254700355113",
  email: "info@greensprout.com",
  areaServed: { "@type": "Country", name: "Kenya" },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#062C22",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <head><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replace(/</g, "\\u003c") }} /></head>
      <body><ScrollToTop />{children}</body>
    </html>
  );
}
