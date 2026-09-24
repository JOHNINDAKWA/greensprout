import { photo } from "@/data/image-library";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ButtonLink } from "@/components/ui/button-link";
import { industries } from "@/data/industries";

export const metadata: Metadata = { title: "Industries", description: "GreenSprout land and landscape services for property, infrastructure, public-sector, agriculture and conservation projects in Kenya." };

export default function IndustriesPage() {
  return <><SiteHeader/><main>
    <section className="industries-hero"><Image src={photo.publicGrounds} alt="Illustration of established school grounds" fill priority sizes="100vw"/><div className="industries-hero-shade"/><div className="page-shell industries-hero-content"><p className="eyebrow light">Industries we support</p><h1>Land solutions shaped around how your project works.</h1><p>Every site has different users, risks, standards and maintenance needs. We adapt the technical approach to the reality of your sector.</p><ButtonLink href="/quote" label="Discuss your project" variant="light"/></div></section>
    <section className="industries-intro"><div className="page-shell center-heading"><p className="eyebrow">Sector experience</p><h2>Start with your land, your responsibilities and the result you need.</h2><p>Choose your sector to see the common challenges, relevant services and outcomes we can help you plan.</p></div></section>
    <section className="industries-directory"><div className="page-shell industries-directory-grid">{industries.map((industry,index)=><Link key={industry.slug} href={`/industries/${industry.slug}`} className="industry-directory-card"><Image src={industry.heroImage} alt={industry.name} fill sizes="(max-width:900px) 100vw, 50vw"/><div className="industry-card-shade"/><span>0{index+1}</span><div><p>{industry.eyebrow}</p><h2>{industry.name}</h2><strong>Explore this industry <ArrowRight/></strong></div></Link>)}</div></section>
    <section className="industry-overview-cta"><div className="page-shell"><p className="eyebrow light">Not sure where you fit?</p><h2>Tell us about the site and the result you are responsible for.</h2><ButtonLink href="/quote" label="Request a site discussion" variant="light"/></div></section>
  </main><SiteFooter/></>;
}
