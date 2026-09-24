import { pageMetadata } from "@/lib/seo";
import { photo } from "@/data/image-library";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ButtonLink } from "@/components/ui/button-link";
import { guides } from "@/data/guides";

export const metadata: Metadata = pageMetadata({ title: "Guides & Advice", description: "Plain-language GreenSprout guides to hydroseeding, erosion control and preparing land for healthy grass in Kenya.", path: "/guides" });

export default function GuidesPage() {
  return <><SiteHeader/><main>
    <section className="p5-guides-intro page-shell"><p className="eyebrow">Guides & Advice · Start reading</p><h1>Answers for the questions we hear most.</h1></section>
    <section className="p5-guides-list page-shell">{guides.map((guide,index)=><Link href={`/guides/${guide.slug}`} className={`p5-guide-card ${index===0?"p5-guide-feature":""}`} key={guide.slug}><div className="p5-guide-photo"><Image src={guide.image} alt="" fill sizes="(max-width:900px) 100vw, 50vw"/></div><div className="p5-guide-copy"><span>{guide.category} · {guide.readTime}</span><h3>{guide.title}</h3><p>{guide.summary}</p><strong>Read the guide <ArrowRight size={18}/></strong></div></Link>)}</section>
    <section className="p5-guides-call"><Image src={photo.siteAssessment} alt="" fill sizes="100vw"/><div className="p6-guides-call-shade"/><div className="page-shell"><p className="eyebrow light">Need advice for your land?</p><h2>Every site has its own questions.</h2><p>Share a few details and we will help you decide whether you need a consultation, a site assessment or a project quotation.</p><ButtonLink href="/quote" label="Tell us about your site"/></div></section>
  </main><SiteFooter/></>;
}
