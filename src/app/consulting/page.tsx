import { pageMetadata } from "@/lib/seo";
import { photo } from "@/data/image-library";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ButtonLink } from "@/components/ui/button-link";

export const metadata: Metadata = pageMetadata({ title: "Consulting", description: "GreenSprout consulting in Kenya: advice, site assessments, Bronze, Silver and Gold planning, project coordination and training.", path: "/consulting" });

const pathways = [
  { number: "01", title: "Start with a conversation", price: "From KSh 5,000", copy: "A 30–45 minute call or online meeting to understand your site and point you in the right direction.", scope: "Early advice only; no site visit, technical report, specifications or bill of quantities.", href: "/quote?service=consultation" },
  { number: "02", title: "See the site properly", price: "Quoted for your location", copy: "An on-site assessment of terrain, vegetation, erosion risk, area, access, water and the feasibility of the proposed work.", scope: "Travel, accommodation, laboratory tests and specialist investigations are identified separately where needed.", href: "/quote?service=site-assessment" },
];

const packages = [
  { name: "Bronze", price: "KSh 30,000", audience: "Small residential sites · approximately one acre or less", description: "A practical first plan for a lawn, compound or other small site.", points: ["Initial consultation", "One site visit and basic assessment", "Clear recommendations and a summary report"], link: "/quote?service=bronze" },
  { name: "Silver", price: "KSh 75,000", audience: "Estates · schools · hotels · commercial grounds", description: "More detailed planning for sites with several decisions to make.", points: ["Detailed site survey", "Grass and soil recommendations", "Indicative project budget and a supervision visit"], link: "/quote?service=silver" },
  { name: "Gold", price: "From KSh 250,000", audience: "Large developments · roads · public and environmental projects", description: "A defined consulting scope for larger and more complex work.", points: ["Detailed project plan and multiple visits", "Contractor support and quality inspections", "Reporting and handover guidance"], link: "/quote?service=gold" },
];

export default function ConsultingPage() {
  return <><SiteHeader /><main>
    <section className="p5-hero"><Image src={photo.siteAssessment} alt="A specialist assessing land conditions" fill priority sizes="100vw" /><div className="p5-hero-shade"/><div className="page-shell p5-hero-content"><p className="eyebrow light">GreenSprout consulting</p><h1>Better decisions begin on the ground.</h1><p>From a first question to a complete project plan, choose the level of help your land needs. We explain the work, the cost and the next step before you commit.</p><div className="p5-actions"><ButtonLink href="/quote" label="Tell us about your site" /><Link href="#ways-to-start" className="p5-text-link">Explore the options <ArrowRight size={18}/></Link></div></div></section>

    <section className="p5-consult-story"><div className="page-shell p5-consult-story-grid"><div className="p5-consult-story-image"><Image src={photo.soilSample} alt="Close view of a soil sample" fill sizes="(max-width:900px) 100vw, 48vw"/></div><div className="p5-consult-story-copy"><p className="eyebrow">One project, a clear path</p><h2>Start with the questions your site raises.</h2><p>Sometimes a short conversation is enough to point you in the right direction. When slope, drainage, soil or scale changes the answer, we visit the site and prepare a more detailed plan.</p><p>We recommend the level of support after understanding your land, your goals and who will carry out the work.</p><Link href="#ways-to-start">Find your starting point <ArrowRight size={18}/></Link></div></div></section>

    <section id="ways-to-start" className="p5-start page-shell"><div className="p5-section-heading"><p className="eyebrow">First steps</p><h2>Two ways to get started.</h2></div><div className="p5-start-grid">{pathways.map(item=><article key={item.number}><span className="p5-number">{item.number} / ADVICE</span><h3>{item.title}</h3><strong>{item.price}</strong><p>{item.copy}</p><p className="p5-fine">{item.scope}</p><Link href={item.href}>Request this service <ArrowRight size={18}/></Link></article>)}</div></section>

    <section className="p5-image-band"><Image src={photo.projectCoordination} alt="Project team studying plans at a work site" fill sizes="100vw"/><div className="p5-image-band-shade"/><div className="page-shell"><p className="eyebrow light">From advice to action</p><h2>Know what the land needs before the work begins.</h2></div></section>

    <section id="packages" className="p5-packages page-shell"><div className="p5-centered"><p className="eyebrow">Consulting packages</p><h2>Planning that fits the scale of your project.</h2><p>These are starting scopes. Your written quotation sets out the exact visits, deliverables, duration and any additional costs.</p></div><div className="p5-package-grid">{packages.map((item,i)=><article className={i===1?"p5-package p5-package-accent":"p5-package"} key={item.name}><span>0{i+1} / {item.name}</span><h3>{item.name}</h3><strong>{item.price}</strong><p className="p5-audience">{item.audience}</p><p>{item.description}</p><ul>{item.points.map(point=><li key={point}><Check size={17}/>{point}</li>)}</ul><Link href={item.link}>Discuss {item.name} <ArrowRight size={18}/></Link></article>)}</div><p className="p5-package-note">Consulting fees cover only the work stated in your agreed scope. Construction, installation, materials and third-party charges are quoted separately when required.</p></section>

    <section className="p5-delivery"><div className="page-shell p5-delivery-grid"><div><p className="eyebrow light">Beyond the plan</p><h2>Help when it is time to deliver.</h2><p>When the job needs active oversight, we can agree a separate project coordination scope. That may include suppliers, contractors, scheduling, progress reporting, inspections and handover.</p><ButtonLink href="/quote?service=project-coordination" label="Discuss project coordination" variant="light" /></div><div className="p5-delivery-image"><Image src={photo.qualityInspection} alt="Technician inspecting established grass" fill sizes="(max-width:900px) 100vw, 45vw" /></div></div></section>

    <section className="p5-extras page-shell"><div className="p5-section-heading"><p className="eyebrow">Focused support</p><h2>Need a workshop or one specific service?</h2></div><div className="p5-extras-grid"><article><span>01</span><h3>Training & workshops</h3><p>Practical sessions for contractors, county teams, grounds staff and community groups. Topics may include hydroseeding, site preparation, erosion control, equipment and aftercare.</p><Link href="/quote?service=training">Plan a workshop <ArrowRight size={18}/></Link></article><article><span>02</span><h3>Stand-alone technical services</h3><p>Ask for a site survey, soil-testing coordination, specifications, a bill of quantities, supervision, inspection or a tailored retainer as a separate assignment.</p><Link href="/quote?service=technical-service">Request a specific service <ArrowRight size={18}/></Link></article></div><p className="p5-fairness"><Check size={22}/> We will not charge separately for a service already included in your approved package or project management scope.</p></section>

    <section className="p5-closing"><Image src={photo.siteAssessment} alt="Site assessment underway" fill sizes="100vw"/><div className="p5-closing-shade"/><div className="page-shell"><p className="eyebrow light">Your next step</p><h2>Tell us what you are working with.</h2><p>Share your location, approximate area and what you want the land to become. We will suggest the appropriate consultation, assessment or project scope.</p><ButtonLink href="/quote" label="Get a quote" /></div></section>
  </main><SiteFooter/></>;
}
