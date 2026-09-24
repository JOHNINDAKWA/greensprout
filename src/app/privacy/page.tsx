import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = pageMetadata({ title: "Privacy notice", description: "How GreenSprout handles information you share through this website and its contact links.", path: "/privacy" });

export default function PrivacyPage() {
  return <><SiteHeader/><main>
    <header className="p6-legal-hero"><div className="page-shell"><p className="eyebrow light">Your information</p><h1>Privacy notice</h1><p>What happens to the details you share when you ask GreenSprout about a site or service.</p><span>Last updated 24 September 2026</span></div></header>
    <div className="page-shell p6-legal-layout"><nav aria-label="On this page"><strong>On this page</strong><a href="#information">Information you share</a><a href="#use">How it is used</a><a href="#email">Email and WhatsApp</a><a href="#rights">Your choices</a><a href="#contact">Contact</a></nav><div className="p6-legal-body">
      <section id="information"><h2>Information you share</h2><p>When you contact GreenSprout, you may provide your name, organisation, phone number, email address, project location, site details, budget range, timing, photographs, plans or other information you decide to send.</p><p>The quotation and contact forms prepare a message in your email application. Your details reach GreenSprout only when you send that message. These forms do not save your answers in a website database.</p></section>
      <section id="use"><h2>How we use it</h2><p>We use the information you send to reply to your enquiry, understand the site, prepare a scope or quotation, and communicate about any work you agree with us. We may ask for more details when needed to assess a site or prepare a useful response.</p><p>Correspondence may be kept for as long as it is needed for the enquiry, an agreed project or applicable recordkeeping. Please contact us if you would like to ask about information we hold or request deletion.</p></section>
      <section id="email"><h2>Email, WhatsApp and website services</h2><p>If you choose an email, phone or WhatsApp link, that communication uses your chosen provider. WhatsApp and external websites have their own privacy practices. Your browser and website host may also handle routine technical data needed to display and secure the site, such as an IP address and request logs.</p><p>This version of the website has no account area, online payment checkout, or advertising and analytics trackers configured by GreenSprout. We will update this notice if those features are added.</p></section>
      <section id="rights"><h2>Your choices and rights</h2><p>Kenya’s data protection framework provides rights including being informed, accessing personal data, objecting to processing, and requesting correction or deletion where applicable. You can email us with a request about the information you shared. We may need to verify your identity before acting on it.</p><p>For an outline of these rights, visit the <a href="https://www.odpc.go.ke/rights-of-a-data-subject/" target="_blank" rel="noopener noreferrer">Office of the Data Protection Commissioner ↗</a>.</p></section>
      <section id="contact"><h2>Contact GreenSprout</h2><p>Questions about this notice or your information can be sent to <a href="mailto:info@greensprout.com">info@greensprout.com</a> or raised by phone on <a href="tel:+254700355113">0700 355 113</a>.</p><p>For website use, see our <Link href="/terms">Terms of use</Link>.</p></section>
    </div></div>
  </main><SiteFooter/></>;
}
