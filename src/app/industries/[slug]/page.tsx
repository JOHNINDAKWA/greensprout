import { pageMetadata } from "@/lib/seo";
import { getService } from "@/data/services";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { notFound } from "next/navigation";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ButtonLink } from "@/components/ui/button-link";
import { getIndustry, industries } from "@/data/industries";

export function generateStaticParams() { return industries.map(({slug})=>({slug})); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const industry=getIndustry((await params).slug);return industry?pageMetadata({title:industry.name,description:industry.short,path:`/industries/${industry.slug}`}):{};}

export default async function IndustryPage({params}:{params:Promise<{slug:string}>}) {
  const industry=getIndustry((await params).slug); if(!industry) notFound();
  return <><SiteHeader/><main>
    <section className="industry-hero"><Image src={industry.heroImage} alt={industry.name} fill priority sizes="100vw"/><div className="industry-hero-shade"/><div className="page-shell industry-hero-content"><p className="eyebrow light">{industry.eyebrow}</p><h1>{industry.name}</h1><p>{industry.short}</p><ButtonLink href="/quote" label="Discuss your project" variant="light"/></div></section>
    <section className="industry-challenge"><div className="page-shell industry-story-grid"><div className="industry-story-image"><Image src={industry.contextImage} alt="Land and vegetation relevant to the project" fill sizes="(max-width:900px) 100vw, 48vw"/></div><div className="industry-story-copy"><p className="eyebrow">Your project context</p><h2>{industry.contextTitle}</h2><p>{industry.challenge}</p><ButtonLink href="/quote" label="Talk about your site" /></div></div></section>
    <section className="industry-priorities"><div className="page-shell"><div className="center-heading"><p className="eyebrow">What we focus on</p><h2>Practical priorities for {industry.name.toLowerCase()} projects.</h2></div><div className="industry-priority-grid">{industry.priorities.map((item,index)=><article key={item.title}><span>0{index+1}</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div></div></section>
    <section className="industry-services"><div className="page-shell"><div className="center-heading"><p className="eyebrow light">Relevant services</p><h2>Support matched to the site and delivery stage.</h2></div><div className="industry-service-grid">{industry.services.map((service,index)=><Link href={service.href} key={service.title}><Image src={getService(service.href.split("/").at(-1) ?? "")?.heroImage ?? industry.contextImage} alt="" fill sizes="(max-width:680px) 100vw, 33vw"/><div/><span>0{index+1}</span><h3>{service.title}</h3><p>{service.copy}</p><strong>View service <ArrowRight/></strong></Link>)}</div></div></section>
    <section className="industry-outcomes"><div className="page-shell industry-story-grid industry-story-reversed"><div className="industry-story-image"><Image src={industry.outcomeImage} alt="Healthy landscape and practical land use" fill sizes="(max-width:900px) 100vw, 48vw"/></div><div className="industry-story-copy"><p className="eyebrow">The intended result</p><h2>{industry.outcomeTitle}</h2><ul className="industry-outcome-list">{industry.outcomes.map(item=><li key={item}><Check/>{item}</li>)}</ul></div></div></section>
    <section className="industry-final"><Image src={industry.heroImage} alt="" fill sizes="100vw"/><div className="industry-final-shade"/><div className="page-shell industry-final-content"><p className="eyebrow light">Plan the right next step</p><h2>Bring us the site, challenge and result you need.</h2><p>We can begin with a consultation or arrange a technical site assessment where more detail is required.</p><ButtonLink href="/quote" label="Request a quotation" variant="light"/></div></section>
  </main><SiteFooter/></>;
}
