import { photo } from "@/data/image-library";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ButtonLink } from "@/components/ui/button-link";
import { services } from "@/data/services";

export const metadata: Metadata = { title: "Services", description: "Explore GreenSprout hydroseeding, erosion control, landscape establishment, land rehabilitation and project-support services." };

export default function ServicesPage() {
  return <><SiteHeader/><main>
    <section className="services-hero"><Image src={photo.hydroHero} alt="Illustration of hydroseeding on prepared ground" fill priority sizes="100vw"/><div className="services-hero-shade"/><div className="page-shell services-hero-content"><p className="eyebrow light">GreenSprout services</p><h1>Practical ways to grow grass, protect soil and improve land.</h1><p>Start with the result you need. We will help you understand the right method, the work involved and the support available.</p></div></section>
    <section className="services-list"><div className="page-shell"><div className="center-heading"><p className="eyebrow">Choose a service</p><h2>From one site visit to complete project support.</h2></div><div className="services-grid">{services.map((service)=><Link href={`/services/${service.slug}`} key={service.slug} className="services-grid-card"><Image src={service.heroImage} alt={service.name} fill sizes="(max-width:760px) 100vw, 33vw"/><div/><span>{service.name}</span><p>{service.short}</p><strong>Explore service <ArrowRight/></strong></Link>)}</div></div></section>
    <section className="service-choice"><div className="page-shell service-choice-grid"><div><p className="eyebrow light">Not sure where to begin?</p><h2>Book a site assessment first.</h2></div><div><p>We will inspect the land and explain the most suitable next step before you commit to a larger project.</p><ButtonLink href="/quote?service=site-assessment" label="Request a site assessment" variant="light"/></div></div></section>
  </main><SiteFooter/></>;
}
