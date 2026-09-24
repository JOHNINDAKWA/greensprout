import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ButtonLink } from "@/components/ui/button-link";
import { getGuide, guides } from "@/data/guides";

export function generateStaticParams() { return guides.map(guide => ({ slug: guide.slug })); }
export async function generateMetadata({ params }: { params: Promise<{slug:string}> }): Promise<Metadata> { const guide=getGuide((await params).slug); return guide ? { title:guide.title, description:guide.summary } : {}; }

export default async function GuidePage({ params }: { params: Promise<{slug:string}> }) {
  const guide = getGuide((await params).slug); if (!guide) notFound();
  const related = guides.filter(item => item.slug !== guide.slug);
  return <><SiteHeader/><main>
    <section className="p5-article-hero"><Image src={guide.image} alt="" fill priority sizes="100vw"/><div className="p5-hero-shade"/><div className="page-shell p5-article-hero-copy"><Link href="/guides"><ArrowLeft size={17}/> All guides</Link><p className="eyebrow light">{guide.category} · {guide.readTime}</p><h1>{guide.title}</h1><p>{guide.summary}</p></div></section>
    <article className="p5-article-body"><p className="p5-article-lead">{guide.intro}</p>{guide.sections.map(section=><section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map(paragraph=><p key={paragraph}>{paragraph}</p>)}</section>)}{guide.sources && <aside className="p6-guide-sources"><h2>Further reading</h2><p>General technical references used to prepare this guide. Your site may need a different approach for its climate, soil and use.</p><ul>{guide.sources.map(source=><li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.title} ↗</a></li>)}</ul></aside>}<div className="p5-article-advice"><h2>Want advice for your site?</h2><p>Send us the location and the result you are aiming for. We can recommend the right first step.</p><ButtonLink href="/quote" label="Ask GreenSprout"/></div></article>
    <section className="p5-related page-shell"><p className="eyebrow">Keep learning</p><h2>More useful reads</h2><div>{related.map(item=><Link href={`/guides/${item.slug}`} key={item.slug}><Image src={item.image} alt="" fill sizes="(max-width:680px) 100vw, 40vw"/><span>{item.category}</span><strong>{item.title}</strong></Link>)}</div></section>
  </main><SiteFooter/></>;
}
