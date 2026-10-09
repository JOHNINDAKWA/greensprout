import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Download, FileText, Mail, Phone } from "lucide-react";

import { InvestorEnquiryForm } from "@/components/investors/investor-enquiry-form";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ButtonLink } from "@/components/ui/button-link";
import { photo } from "@/data/image-library";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "GreenSprout Investment Opportunity in Kenya",
  description: "Explore a potential investment or strategic partnership with GreenSprout in Kenya. Lawn care and sod installation are available now; hydroseeding and specialist land services are planned.",
  path: "/investors",
});

const current = [
  { number: "01", title: "Lawn care & maintenance", copy: "Professional care for established lawns and larger grounds.", image: photo.lawnHero, href: "/services/lawn-care-maintenance" },
  { number: "02", title: "Sod installation", copy: "Ground preparation and natural turf installation for new landscapes.", image: photo.sodHero, href: "/services/sod-installation-landscaping" },
];

const planned = [
  { title: "Hydroseeding", copy: "A planned application method for establishing vegetation across prepared large or difficult sites.", href: "/services/hydroseeding" },
  { title: "Erosion control", copy: "Planned specialist support for exposed soils, slopes and disturbed ground.", href: "/services/erosion-control" },
  { title: "Land rehabilitation", copy: "A future service for revegetation of damaged or disturbed land.", href: "/services/land-rehabilitation" },
];

export default function InvestorsPage() {
  return <><SiteHeader /><main className="investor-page">
    <section className="investor-hero">
      <Image src={photo.landRehabilitation} alt="Vegetated landscape and open land in Kenya" fill priority sizes="100vw" />
      <div className="investor-hero-shade" />
      <div className="page-shell investor-hero-content"><p className="eyebrow light">GreenSprout · Investment & partnerships</p><h1>Invest in GreenSprout&apos;s <em>planned expansion in Kenya.</em></h1><p>GreenSprout offers lawn care and sod installation today. We are preparing to expand into specialist vegetation establishment and land restoration, and we welcome conversations with investors and strategic partners.</p><div className="investor-actions"><ButtonLink href="#enquiry" label="Discuss an opportunity" variant="light" /><Link href="#opportunity">Explore the opportunity <ArrowDown size={17} /></Link></div></div>
      <div className="investor-hero-index" aria-hidden="true">01 / 05 <span>THE OPPORTUNITY</span></div>
    </section>

    <section id="opportunity" className="investor-intro"><div className="page-shell investor-intro-grid"><div><p className="eyebrow">The opportunity</p><h2>Current services and planned expansion.</h2></div><div><p>New homes, institutions and development sites all need their outdoor ground to work as well as it looks. Some need ongoing care or new turf. Others call for planned vegetation establishment on exposed or difficult terrain.</p><p>Our growth direction connects these needs: build from available lawn and sod services, then develop the equipment, people and processes for specialist methods.</p><span>Current services and future plans are shown separately below.</span></div></div></section>

    <section className="investor-now"><div className="page-shell"><div className="investor-section-top"><div><p className="eyebrow">Available now</p><h2>Lawn care and sod installation.</h2></div><p>These are GreenSprout&apos;s current client-facing services. Explore the details and contact us about a project.</p></div><div className="investor-now-grid">{current.map((item) => <Link href={item.href} className="investor-now-card" key={item.title}><div className="investor-now-image"><Image src={item.image} alt={item.title} fill sizes="(max-width:760px) 100vw, 50vw" /></div><div><span>{item.number} / AVAILABLE NOW</span><h3>{item.title}</h3><p>{item.copy}</p><ArrowRight aria-hidden="true" /></div></Link>)}</div></div></section>

    <section className="investor-next"><div className="page-shell investor-next-layout"><div className="investor-next-copy"><p className="eyebrow light">Planned services</p><h2>Hydroseeding, erosion control and land rehabilitation.</h2><p>GreenSprout is planning hydroseeding-led capabilities for larger landscapes and erosion-prone sites. Equipment sourcing, training, demonstrations and technical delivery still need to be completed before these services are offered.</p><div className="investor-next-list">{planned.map((item, index) => <Link href={item.href} key={item.title}><span>0{index + 1}</span><div><strong>{item.title}</strong><p>{item.copy}</p></div><span className="investor-next-status">Coming soon</span><ArrowRight size={18} aria-hidden="true" /></Link>)}</div></div><figure className="investor-next-image"><Image src={photo.erosionRunoff} alt="Exposed soil and surface runoff" fill sizes="(max-width:900px) 100vw, 44vw" /></figure></div></section>

    <section className="investor-plan"><div className="page-shell investor-plan-layout"><div><p className="eyebrow">Planned use of investment</p><h2>Equipment, training and market development.</h2><p>The specific scope and structure would be agreed through discussion and due diligence.</p></div><div className="investor-plan-steps"><article><span>01</span><div><h3>Equipment & readiness</h3><p>Confirm a suitable machine and full landed costs, with spares, maintenance support and operator training.</p></div></article><article><span>02</span><div><h3>Demonstrations & validation</h3><p>Test methods on suitable sites, document performance and refine delivery and aftercare processes.</p></div></article><article><span>03</span><div><h3>Market development</h3><p>Build relationships with developers, institutions and project partners as the specialist offer becomes ready.</p></div></article></div></div></section>

    <section className="investor-evidence"><div className="page-shell investor-evidence-layout"><div className="investor-evidence-photo"><Image src={photo.siteAssessment} alt="Assessment of landscape and ground conditions" fill sizes="(max-width:900px) 100vw, 43vw" /></div><div><p className="eyebrow">Current progress</p><h2>What is prepared and what still needs testing.</h2><p>GreenSprout has developed a company direction, service concepts and operational materials. Specialist equipment acquisition, pilot delivery and the commercial performance of the proposed expansion remain to be validated.</p><ul><li><strong>Prepared</strong><span>Brand direction, service plans and draft operating documents.</span></li><li><strong>To validate</strong><span>Supplier quotations, equipment configuration, field performance and demand.</span></li><li><strong>To agree</strong><span>Partnership terms, milestones and a practical launch sequence.</span></li></ul></div></div></section>

    <section className="investor-brief"><div className="page-shell investor-brief-layout"><div><p className="eyebrow light">Investment brief</p><h2>Download the preliminary investment brief.</h2><p>The downloadable brief explains the proposed specialist expansion, planned use of capital, key risks and steps still to be confirmed. It is background for a discussion, not a promise of results or an offer of securities.</p></div><a href="/docs/greensprout-investment-brief.pdf" target="_blank" rel="noopener noreferrer" className="investor-brief-card"><FileText size={34} strokeWidth={1.4} /><div><span>PDF · PRELIMINARY</span><strong>GreenSprout investment brief</strong><small>Opens in a new tab</small></div><Download aria-hidden="true" /></a></div></section>

    <section id="enquiry" className="investor-contact"><div className="page-shell investor-contact-layout"><div><p className="eyebrow">Investor enquiry</p><h2>Contact GreenSprout about investment.</h2><p>Tell us what kind of involvement you are exploring. We can share the current plan, discuss where your experience fits and identify what should be checked next.</p><div className="investor-direct"><a href="tel:+254700355113"><Phone size={18} />0700 355 113</a><a href="mailto:info@greensprout.com?subject=GreenSprout%20investment%20enquiry"><Mail size={18} />info@greensprout.com</a></div></div><InvestorEnquiryForm /></div></section>
  </main><SiteFooter /></>;
}
