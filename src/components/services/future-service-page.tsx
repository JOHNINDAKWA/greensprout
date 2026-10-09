import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ButtonLink } from "@/components/ui/button-link";
import type { Service } from "@/data/services";

export function FutureServicePage({ service }: { service: Service }) {
  return <><SiteHeader/><main className="future-page">
    <section className="future-hero"><Image src={service.heroImage} alt={`${service.name} landscape scene`} fill priority sizes="100vw"/><div className="future-hero-shade"/><div className="page-shell future-hero-inner"><span className="future-flag">Future service / Coming soon</span><h1>{service.name}</h1><p>{service.short}</p><ButtonLink href="/services" label="Explore current services" variant="light"/></div></section>
    <section className="future-body page-shell"><div><p className="eyebrow">In development</p><h2>About {service.name.toLowerCase()}.</h2><p>{service.definition}</p><p>GreenSprout is developing this specialist offer. The equipment, delivery scope and launch date have not yet been confirmed. For now, we can discuss your site and whether an available assessment, natural sod installation or lawn-care service is suitable.</p><ButtonLink href={`/quote?service=${service.slug}`} label="Discuss a future project"/></div><div className="future-body-image"><Image src={service.gallery[0]} alt={`${service.name} scene`} fill sizes="(max-width:850px) 100vw, 46vw"/></div></section>
    <section className="future-related"><div className="page-shell"><p className="eyebrow light">Available services</p><h2>Services available now.</h2><div><Link href="/services/sod-installation-landscaping">Sod Installation & Landscaping <ArrowRight/></Link><Link href="/services/lawn-care-maintenance">Lawn Care & Maintenance <ArrowRight/></Link><Link href="/services/site-assessment">Site assessment <ArrowRight/></Link></div></div></section>
  </main><SiteFooter/></>;
}
