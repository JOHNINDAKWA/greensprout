import { pageMetadata } from "@/lib/seo";
import { photo } from "@/data/image-library";
import type { Metadata } from "next";
import Image from "next/image";
import { Check, Leaf, MapPin, ShieldCheck, Users } from "lucide-react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ButtonLink } from "@/components/ui/button-link";

export const metadata: Metadata = pageMetadata({ title: "About GreenSprout", description: "Learn how GreenSprout helps clients establish grass, protect soil and improve land across Kenya.", path: "/about" });

export default function AboutPage() {
  return <><SiteHeader /><main>
    <section className="inner-hero"><Image src={photo.agricultureConservation} alt="Contour vegetation protecting farmland in Kenya" fill priority sizes="100vw" /><div className="inner-hero-shade"/><div className="page-shell inner-hero-content"><p className="eyebrow light">About GreenSprout</p><h1>Better ways to grow grass, protect soil and improve land.</h1><p>GreenSprout helps clients understand their site, choose the right solution and carry out the work properly.</p></div></section>

    <section className="about-intro"><div className="page-shell about-intro-grid"><div><p className="eyebrow">Who we are</p><h2>We make modern land and landscape solutions easier to understand and use.</h2></div><div><p>Many clients need healthy grass, stable slopes or better-looking grounds, but they may not know which method will work. That is where GreenSprout comes in.</p><p>We inspect the site, explain the options in clear language and provide the level of support the project needs—from one consultation to full project coordination.</p><ButtonLink href="/contact" label="Talk to GreenSprout" /></div></div></section>

    <section className="about-picture"><div className="page-shell about-picture-grid"><div className="about-picture-image"><Image src={photo.siteAssessment} alt="Technicians assessing soil and site conditions" fill sizes="(max-width:900px) 100vw, 55vw" /></div><div className="about-picture-copy"><p className="eyebrow light">Our purpose</p><h2>Help every project start with the right information.</h2><p>Good results depend on the soil, slope, water, grass type, preparation and maintenance. We bring these details together before money is spent on the wrong approach.</p><ul><li><Check/>Clear advice before work starts</li><li><Check/>Solutions suited to the actual site</li><li><Check/>Support during implementation and aftercare</li></ul></div></div></section>

    <section className="about-values"><div className="page-shell"><div className="center-heading"><p className="eyebrow">What matters to us</p><h2>Practical work, honest guidance and results that last.</h2></div><div className="value-cards">{[
      {icon:Leaf,title:"Right solution",copy:"We recommend what suits the site instead of forcing one method onto every project.",image:photo.soilPreparation},
      {icon:ShieldCheck,title:"Clear responsibility",copy:"The scope, costs and responsibilities are explained before the work begins.",image:photo.siteAssessment},
      {icon:Users,title:"Working together",copy:"We coordinate with clients, suppliers and contractors so everyone understands the plan.",image:photo.projectCoordination},
      {icon:MapPin,title:"Local understanding",copy:"Our recommendations consider Kenyan weather, project conditions and practical client needs.",image:photo.agricultureConservation},
    ].map(({icon:Icon,title,copy,image})=><article key={title}><Image src={image} alt="" fill sizes="(max-width:680px) 100vw, 25vw"/><div className="value-shade"/><div className="value-content"><Icon/><h3>{title}</h3><p>{copy}</p></div></article>)}</div></div></section>

    <section className="about-services"><div className="page-shell about-services-grid"><div><p className="eyebrow light">What we can do</p><h2>Support for small sites and major projects.</h2><p>Work with us for one technical service or for the complete journey from assessment to handover.</p><ButtonLink href="/#solutions" label="See our services" variant="light" /></div><div>{["Hydroseeding and grass establishment","Erosion control and slope protection","Land rehabilitation and revegetation","Site assessments and project planning","Supervision, quality checks and handover","Training and technical workshops"].map(item=><p key={item}><span>✓</span>{item}</p>)}</div></div></section>

    <section className="about-cta"><div className="page-shell"><h2>Have land that needs attention?</h2><p>Tell us what the site looks like and the result you want. We will help you choose the right first step.</p><ButtonLink href="/contact" label="Contact GreenSprout" /></div></section>
  </main><SiteFooter /></>;
}
