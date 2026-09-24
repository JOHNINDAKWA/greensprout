import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = pageMetadata({ title: "Website terms", description: "Terms for using the GreenSprout website and requesting information about its services.", path: "/terms" });

export default function TermsPage() {
  return <><SiteHeader/><main>
    <header className="p6-legal-hero"><div className="page-shell"><p className="eyebrow light">Using this website</p><h1>Website terms</h1><p>How the information on this site relates to a GreenSprout quotation and an agreed project.</p><span>Last updated 24 September 2026</span></div></header>
    <div className="page-shell p6-legal-layout"><nav aria-label="On this page"><strong>On this page</strong><a href="#information">Website information</a><a href="#quotes">Quotes and prices</a><a href="#contact">Enquiries and payment</a><a href="#content">Content and links</a><a href="#questions">Questions</a></nav><div className="p6-legal-body">
      <section id="information"><h2>Website information</h2><p>GreenSprout provides this website to explain its services, consulting options and general approaches to land and landscape projects in Kenya. The guides are general information. A specific site may require an inspection, testing or a different technical solution.</p><p>Images on this site are illustrative, including generated scenes of equipment, landscapes, workers and possible applications. They are not photographs of completed GreenSprout projects or actual staff, and do not guarantee a particular result.</p></section>
      <section id="quotes"><h2>Quotations and displayed prices</h2><p>Prices and package descriptions on the website describe starting points or example scopes. A submitted enquiry is a request for information, not an accepted order. The exact work, deliverables, timing, fees, expenses and responsibilities will be set out in a separate written quotation or agreement for your site.</p><p>GreenSprout will explain whether travel, accommodation, laboratory testing, materials or third-party work is additional before you approve a paid scope. Work proceeds on the terms agreed in writing for that project.</p></section>
      <section id="contact"><h2>Enquiries and payment</h2><p>The forms on this site open your email application with a prepared message. You must review and send the email to make an enquiry. You can also contact GreenSprout by phone or WhatsApp.</p><p>This website does not take online payments. If a consultation or assessment is chargeable, the fee and payment arrangements will be confirmed directly before the appointment is booked.</p></section>
      <section id="content"><h2>Content and external links</h2><p>Website text, design and GreenSprout branding are for use in connection with this site. Please ask before reproducing substantial parts for another publication or commercial use.</p><p>Links to third-party resources, including technical references and WhatsApp, lead to services outside this website. Their content and terms are managed by those providers.</p></section>
      <section id="questions"><h2>Questions</h2><p>For questions about this site or a service, write to <a href="mailto:info@greensprout.com">info@greensprout.com</a> or call <a href="tel:+254700355113">0700 355 113</a>. Our <Link href="/privacy">Privacy notice</Link> explains how enquiries are handled.</p></section>
    </div></div>
  </main><SiteFooter/></>;
}
