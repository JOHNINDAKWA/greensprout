import { photo } from "@/data/image-library";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Leaf, MapPin, Ruler, ShieldCheck, Users } from "lucide-react";

import { HeroSlider } from "@/components/home/hero-slider";
import { SolutionsCarousel } from "@/components/home/solutions-carousel";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ButtonLink } from "@/components/ui/button-link";

const process = [
  { title: "Talk to us", copy: "Tell us where the site is, what it looks like and what result you want.", image: photo.projectCoordination },
  { title: "We inspect the site", copy: "We check the soil, slope, drainage, access and size of the area.", image: photo.siteAssessment },
  { title: "We prepare a clear plan", copy: "You receive the recommended method, materials, cost and work plan.", image: photo.projectPlanning },
  { title: "We prepare the site", copy: "The ground is cleared, shaped and prepared for healthy vegetation growth.", image: photo.soilPreparation },
  { title: "We carry out the work", copy: "The agreed grass, seed and erosion-control materials are installed correctly.", image: photo.hydroApplication },
  { title: "We inspect the result", copy: "We check coverage, workmanship and any areas that need correction.", image: photo.qualityInspection },
  { title: "We guide maintenance", copy: "We explain watering, care and follow-up needed for successful establishment.", image: photo.aftercareIrrigation },
];

const industries = [
  { title: "Homes and residential estates", copy: "New lawns, bare compounds, slopes and shared green areas.", image: photo.landscapeEstate, tag: "Residential" },
  { title: "Hotels, schools and institutions", copy: "Attractive grounds that are practical to establish and maintain.", image: photo.publicGrounds, tag: "Institutions" },
  { title: "Roads and construction sites", copy: "Slope protection, erosion control and vegetation for disturbed ground.", image: photo.roadsideRevegetation, tag: "Infrastructure" },
  { title: "Counties and large projects", copy: "Planning, supervision and reporting for complex public projects.", image: photo.publicSector, tag: "Public sector" },
];

const packages = [
  { name: "Bronze", price: "Ksh 30,000", use: "For small residential projects", features: ["Initial consultation", "One site visit", "Basic site assessment", "Summary report"] },
  { name: "Silver", price: "Ksh 75,000", use: "For estates, schools and businesses", features: ["Detailed site survey", "Grass and soil recommendations", "Estimated project budget", "One supervision visit"], featured: true },
  { name: "Gold", price: "From Ksh 250,000", use: "For large or complex projects", features: ["Full project plan", "Several site visits", "Contractor coordination", "Inspections and handover"] },
];

export default function Home() {
  return <>
    <SiteHeader />
    <main>
      <HeroSlider />
      <SolutionsCarousel />

      <section id="about" className="difference-section">
        <div className="difference-image"><Image src={photo.siteAssessment} alt="Technician assessing site conditions" fill sizes="(max-width:900px) 100vw, 50vw" /></div>
        <div className="difference-copy"><p className="eyebrow light">Why GreenSprout?</p><h2>We first understand your land, then recommend what will work.</h2><p>Every site is different. We check the ground, explain the available options and help you choose a solution that suits your needs and budget.</p>
          <div className="difference-points"><p><Check />Advice based on your actual site</p><p><Check />Clear costs and responsibilities</p><p><Check />Support from planning to maintenance</p></div>
          <ButtonLink href="/quote?service=site-assessment" label="Book a site visit" variant="light" />
        </div>
      </section>

      <section id="process" className="process-section"><div className="page-shell">
        <div className="center-heading"><p className="eyebrow">How it works</p><h2>A simple process from your first call to a healthy landscape.</h2><p>You can use only the service you need, or ask us to support the whole project.</p></div>
        <div className="process-cards">{process.map((step,index) => <article key={step.title}><div><Image src={step.image} alt="" fill sizes="(max-width:760px) 100vw, 24vw" /><span className="home-process-number">{String(index+1).padStart(2,"0")}</span></div><h3>{step.title}</h3><p>{step.copy}</p></article>)}</div>
        <div className="process-action"><ButtonLink href="/quote" label="Request a project quotation" /></div>
      </div></section>

      <section id="industries" className="industries-section"><div className="page-shell">
        <div className="center-heading"><p className="eyebrow">Who we work with</p><h2>Green solutions for homes, businesses and major projects.</h2></div>
        <div className="industry-cards">{industries.map((item) => <article key={item.title}><Image src={item.image} alt={item.title} fill sizes="(max-width:760px) 100vw, 50vw" /><div className="industry-shade"/><div className="industry-content"><span>{item.tag}</span><h3>{item.title}</h3><p>{item.copy}</p><Link href="/quote">Discuss your project <ArrowRight /></Link></div></article>)}</div>
      </div></section>

      <section id="consulting" className="packages-section"><div className="page-shell">
        <div className="center-heading"><p className="eyebrow">Consulting packages</p><h2>Choose the amount of support your project needs.</h2><p>Prices are clear from the start. Laboratory charges and travel outside the agreed area are quoted separately.</p></div>
        <div className="package-grid">{packages.map((item) => <article className={`package-card ${item.featured ? "featured" : ""}`} key={item.name}>{item.featured && <span className="package-label">Popular choice</span>}<Leaf /><h3>{item.name}</h3><p className="package-price">{item.price}</p><p className="package-use">{item.use}</p><ul>{item.features.map((feature) => <li key={feature}><Check />{feature}</li>)}</ul><ButtonLink href={`/quote?service=${item.name.toLowerCase()}`} label={`Ask about ${item.name}`} variant={item.featured ? "light" : "primary"} /></article>)}</div>
        <div className="standalone-card"><div><h3>Only need one service?</h3><p>Book a consultation, site survey, soil-testing coordination, BOQ, supervision visit, quality inspection or training workshop separately.</p></div><ButtonLink href="/consulting" label="Explore consulting" /></div>
      </div></section>

      <section className="featured-section"><Image src={photo.soilPreparation} alt="Workers preparing soil for planting" fill sizes="100vw" /><div className="featured-shade" /><div className="page-shell featured-content"><p className="eyebrow light">Plan before spending</p><h2>Good results start with checking the site and choosing the right method.</h2><p>We help you avoid the wrong grass, poor soil preparation, incorrect quantities and weak follow-up.</p><ButtonLink href="/quote" label="Plan your project" variant="light" /></div></section>

      <section className="capability-section"><div className="page-shell">
        <div className="center-heading"><p className="eyebrow">How we help</p><h2>Practical support at every important stage.</h2></div>
        <div className="capability-cards">
          {[{icon:MapPin,title:"Site assessment",copy:"We visit the site and identify the conditions that will affect the work.",image:photo.siteAssessment},{icon:Ruler,title:"Project planning",copy:"We define the method, materials, quantities, budget and work schedule.",image:photo.projectPlanning},{icon:Users,title:"Project coordination",copy:"We help organise suppliers, contractors, meetings and progress updates.",image:photo.projectCoordination},{icon:ShieldCheck,title:"Quality checks",copy:"We inspect the work, identify problems early and guide the final handover.",image:photo.qualityInspection}].map(({icon:Icon,title,copy,image})=><article key={title}><div className="capability-image"><Image src={image} alt={title} fill sizes="(max-width:760px) 100vw, 25vw" /><span><Icon /></span></div><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </div></section>

      <section className="knowledge-section"><div className="page-shell">
        <div className="center-heading"><p className="eyebrow">Helpful information</p><h2>Simple guides for making better decisions about your land.</h2></div>
        <div className="knowledge-grid"><article className="feature-article"><div className="article-image"><Image src={photo.hydroMachine} alt="Hydroseeding machine with tank, pump and hose" fill sizes="(max-width:760px) 100vw, 45vw" /></div><div><p>Field guide · 5 min read</p><h3>What makes hydroseeding successful?</h3><span>Learn what to check before, during and after hydroseeding.</span><Link href="/guides/what-makes-hydroseeding-successful">Read the guide <ArrowRight /></Link></div></article>
          <div className="small-articles"><article><div><Image src={photo.erosionRunoff} alt="Exposed slope showing rainwater erosion" fill sizes="(max-width:760px) 100vw, 25vw" /></div><h3>When does a slope need erosion control?</h3><p>A straightforward guide to warning signs and suitable first steps.</p><Link href="/guides/when-does-a-slope-need-erosion-control">Read more <ArrowRight /></Link></article><article><div><Image src={photo.soilPreparation} alt="Workers preparing topsoil for grass" fill sizes="(max-width:760px) 100vw, 25vw" /></div><h3>How to prepare soil before growing grass</h3><p>Why soil preparation matters and what the work normally includes.</p><Link href="/guides/prepare-soil-before-growing-grass">Read more <ArrowRight /></Link></article></div>
        </div>
        <div className="process-action"><ButtonLink href="/guides" label="Explore all guides" /></div>
      </div></section>

      <section id="contact" className="contact-section"><Image src={photo.landscapeEstate} alt="Established landscape around a lodge" fill sizes="100vw" /><div className="contact-shade" /><div className="page-shell contact-layout"><p className="eyebrow light">Let’s talk about your site</p><h2>Tell us what you want to improve.</h2><p>Send us the location, approximate size, current condition and your preferred result. We will recommend the best first step.</p><div><ButtonLink href="mailto:info@greensprout.com" label="Email GreenSprout" variant="light" /><ButtonLink href="tel:+254700355113" label="Call 0700 355 113" variant="outline" /></div></div></section>
    </main>
    <SiteFooter />
  </>;
}
