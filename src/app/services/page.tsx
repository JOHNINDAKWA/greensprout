import { pageMetadata } from "@/lib/seo";
import { photo } from "@/data/image-library";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ButtonLink } from "@/components/ui/button-link";
import { services } from "@/data/services";

export const metadata: Metadata = pageMetadata({ title: "Services", description: "Explore lawn care, natural sod installation and landscape consulting in Kenya. Hydroseeding and specialist land services are coming soon.", path: "/services" });

export default function ServicesPage() {
  return <><SiteHeader/><main>
    <section className="services-hero"><Image src={photo.lawnHero} alt="Illustrative large lawn being maintained" fill priority sizes="100vw"/><div className="services-hero-shade"/><div className="page-shell services-hero-content"><p className="eyebrow light">GreenSprout services</p><h1>From a well-kept lawn to a new green landscape.</h1><p>Explore the services we can discuss for your site today and see which specialist methods are planned for the future.</p><a className="section-scroll-cue" href="#explore-services"><span>Scroll to explore services</span><span className="section-scroll-cue-arrow" aria-hidden="true">↓</span></a></div></section>
    <section id="explore-services" className="services-list"><div className="page-shell"><div className="center-heading"><p className="eyebrow">Available services</p><h2>Practical care for lawns and landscapes.</h2></div><div className="services-grid">{services.filter(service=>!service.availability).map((service)=><Link href={`/services/${service.slug}`} key={service.slug} className="services-grid-card"><Image src={service.heroImage} alt={service.name} fill sizes="(max-width:760px) 100vw, 33vw"/><div/><span>{service.name}</span><p>{service.short}</p><strong>Explore service <ArrowRight/></strong></Link>)}</div><div className="center-heading future-heading"><p className="eyebrow">What comes next</p><h2>Specialist services in development.</h2><p>These methods are not yet offered as active installations. You can ask us to assess a future project.</p></div><div className="services-grid future-services-grid">{services.filter(service=>service.availability).map((service)=><Link href={`/services/${service.slug}`} key={service.slug} className="services-grid-card"><Image src={service.heroImage} alt={service.name} fill sizes="(max-width:760px) 100vw, 33vw"/><div/><span>{service.name}</span><p>{service.short}</p><em className="availability-tag">Coming soon</em><strong>Learn about the plan <ArrowRight/></strong></Link>)}</div></div></section>
    <section className="service-choice"><div className="page-shell service-choice-grid"><div><p className="eyebrow light">Not sure where to begin?</p><h2>Book a site assessment first.</h2></div><div><p>We will inspect the land and explain the most suitable next step before you commit to a larger project.</p><ButtonLink href="/quote?service=site-assessment" label="Request a site assessment" variant="light"/></div></div></section>
  </main><SiteFooter/></>;
}
