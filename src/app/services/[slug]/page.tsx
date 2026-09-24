import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { notFound } from "next/navigation";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ButtonLink } from "@/components/ui/button-link";
import { getService, services } from "@/data/services";

export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const service=getService((await params).slug); return service ? pageMetadata({ title: service.name, description: service.short, path: `/services/${service.slug}` }) : {}; }

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const service=getService((await params).slug); if(!service) notFound();
  const hydro=service.slug === "hydroseeding";
  return <><SiteHeader/><main>
    <section className="service-hero"><Image src={service.heroImage} alt={service.name} fill priority sizes="100vw"/><div className="service-hero-shade"/><div className="page-shell service-hero-content"><p className="eyebrow light">GreenSprout service</p><h1>{service.name}</h1><p>{service.short}</p><ButtonLink href={`/quote?service=${service.slug}`} label="Request a quotation"/></div></section>
    <section className="service-explainer"><div className="page-shell service-explainer-grid"><div className="service-explainer-image"><Image src={service.gallery[0]} alt={`${service.name} in practice`} fill sizes="(max-width:900px) 100vw, 48vw"/></div><div className="service-explainer-copy"><p className="eyebrow">Understanding the service</p><h2>{hydro ? "A modern way to establish natural grass across prepared ground." : `What ${service.name.toLowerCase()} means for your site.`}</h2><p className="service-lead">{service.definition}</p>{service.explanation.map((paragraph)=><p key={paragraph}>{paragraph}</p>)}<Link href={`/quote?service=${service.slug}`}>Discuss your site <ArrowRight/></Link></div></div></section>
    {hydro && <section className="hydro-demo"><div className="page-shell hydro-demo-grid"><div className="hydro-demo-image"><Image src={service.gallery[1]} alt="Hydroseeding slurry being sprayed on prepared ground" fill sizes="(max-width:900px) 100vw, 55vw"/></div><div><p className="eyebrow light">Why clients choose it</p><h2>A practical alternative to planting grass seed by hand.</h2><p>The mixture is sprayed across prepared soil using specialised equipment. This makes it easier to cover broad areas and irregular ground while distributing the seed and protective mulch more evenly.</p><p>Hydroseeding is not instant turf. The grass still needs correct preparation, watering and maintenance to germinate and establish successfully.</p></div></div></section>}
    <section className="service-fit"><div className="page-shell"><div className="center-heading"><p className="eyebrow">Where it works</p><h2>Is {service.name.toLowerCase()} right for your project?</h2></div><div className="fit-grid">{service.idealFor.map((item,index)=><article key={item}><Image src={service.idealImages[index]} alt="" fill sizes="(max-width:680px) 100vw, 33vw"/><div/><p><Check/>{item}</p></article>)}</div></div></section>
    <section className="service-benefits"><div className="page-shell service-benefits-grid"><div><p className="eyebrow light">Main benefits</p><h2>What this service can help you achieve.</h2><ButtonLink href={`/quote?service=${service.slug}`} label="Ask about your site" variant="light"/></div><div>{service.benefits.map((item)=><p key={item}><span>✓</span>{item}</p>)}</div></div></section>
    <section className="service-process"><div className="page-shell"><div className="center-heading"><p className="eyebrow">The process</p><h2>What happens from the first discussion to follow-up.</h2></div><div className="service-process-grid">{service.process.map((step,index)=><article key={step.title}><Image src={service.processImages[index]} alt="" fill sizes="(max-width:680px) 100vw, 33vw"/><div className="process-shade"/><div className="process-copy"><span>{String(index+1).padStart(2,"0")}</span><h3>{step.title}</h3><p>{step.copy}</p></div></article>)}</div></div></section>
    <section className="service-gallery"><div className="page-shell"><div className="service-gallery-grid">{service.gallery.map((image,index)=><div key={image}><Image src={image} alt={`${service.name} example ${index+1}`} fill sizes="(max-width:760px) 100vw, 33vw"/></div>)}</div></div></section>
    {hydro && <section className="hydro-faq"><div className="page-shell hydro-faq-grid"><div><p className="eyebrow">Common questions</p><h2>Before you invest in hydroseeding.</h2></div><div>{[
      ["How quickly will grass appear?","Germination time depends on the grass variety, weather, soil and watering. We explain the expected establishment period for the selected seed."],
      ["Does it work without watering?","No. The seed and young grass require reliable watering, especially during the early establishment period."],
      ["Can it be used on slopes?","Yes. Hydroseeding is useful on many slopes, although steep or highly eroded areas may also require erosion-control materials."],
      ["Is soil preparation necessary?","Yes. Spraying seed onto compacted, contaminated or poorly drained ground will not correct the underlying site problem."],
      ["Can I choose the grass?","We recommend grass varieties based on climate, intended use, appearance, maintenance and seed availability."],
    ].map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div></section>}
    <section className="service-final"><Image src={service.heroImage} alt="" fill sizes="100vw"/><div className="service-final-shade"/><div className="page-shell service-final-content"><p className="eyebrow light">Start with your site</p><h2>Want to know whether {service.name.toLowerCase()} will work for you?</h2><p>Send the location, approximate area, current ground condition and photographs if available.</p><ButtonLink href={`/quote?service=${service.slug}`} label="Request a site quotation" variant="light"/></div></section>
  </main><SiteFooter/></>;
}
