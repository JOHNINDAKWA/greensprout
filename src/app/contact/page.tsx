import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { ContactForm } from "@/components/contact/contact-form";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export const metadata: Metadata = pageMetadata({ title: "Contact GreenSprout", description: "Contact GreenSprout about hydroseeding, erosion control, site assessments and landscape projects in Kenya.", path: "/contact" });

export default function ContactPage() {
  return <><SiteHeader /><main>
    <section className="contact-options"><h1 className="sr-only">Contact GreenSprout</h1><div className="page-shell contact-option-grid">
      <Link href="tel:+254700355113"><Phone/><span>Call us</span><strong>0700 355 113</strong><small>Speak directly with GreenSprout</small></Link>
      <Link href="https://wa.me/254700355113"><MessageCircle/><span>WhatsApp</span><strong>Start a chat</strong><small>Send site details and photographs</small></Link>
      <Link href="mailto:info@greensprout.com"><Mail/><span>Email us</span><strong>info@greensprout.com</strong><small>Suitable for briefs and documents</small></Link>
    </div></section>

    <section className="enquiry-section"><div className="page-shell enquiry-grid"><div className="enquiry-intro"><p className="eyebrow">Project enquiry</p><h2>Tell us a little about the land.</h2><p>The most helpful starting information is:</p><ul><li><MapPin/>Where the site is located</li><li><MapPin/>Its approximate size</li><li><MapPin/>The current condition of the ground</li><li><MapPin/>What you want the finished site to achieve</li></ul><p className="enquiry-assurance">If you are unsure about any of these details, send what you know. We can help identify the rest during the first discussion.</p></div><ContactForm /></div></section>

    <section className="contact-expect"><div className="page-shell"><div className="center-heading"><p className="eyebrow">What happens next?</p><h2>A clear first response—not a complicated sales process.</h2></div><div className="expect-steps"><article><span>1</span><h3>We review your enquiry</h3><p>We look at the location, site condition and result you need.</p></article><article><span>2</span><h3>We recommend a first step</h3><p>This may be a call, an on-site consultation or a technical site assessment.</p></article><article><span>3</span><h3>You receive a clear scope</h3><p>We explain what is included, the cost and anything paid separately.</p></article></div></div></section>
  </main><SiteFooter /></>;
}
