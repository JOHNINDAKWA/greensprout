import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";

import "./globals.css";
import { ScrollToTop } from "@/components/layout/scroll-to-top";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "GreenSprout Hydroseeding",
    template: "%s | GreenSprout Hydroseeding",
  },
  description:
    "Professional hydroseeding, erosion control, landscape establishment and environmental restoration solutions in Kenya.",
  applicationName: "GreenSprout Hydroseeding",
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
      <body><ScrollToTop />{children}</body>
    </html>
  );
}
