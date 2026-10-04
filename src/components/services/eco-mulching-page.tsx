import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Check, Leaf, MapPin, Ruler, Sprout } from "lucide-react";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ButtonLink } from "@/components/ui/button-link";
import { photo } from "@/data/image-library";

const steps = [
  { number: "01", title: "Tell us about the land", copy: "Share the location, approximate area, vegetation and photographs if you have them." },
  { number: "02", title: "We choose the method", copy: "We consider access, slope, obstacles and what should happen to the cut material." },
  { number: "03", title: "Agree the work", copy: "Your quotation sets out the cutting approach, material handling and total fee." },
];

export function EcoMulchingPage() {
  return <><SiteHeader/><main>
    <section className="eco-hero">
      <Image src={photo.ecoMulchingHero} alt="Illustration of vegetation being cut and mulched on an open property" fill priority sizes="100vw"/>
      <div className="eco-hero-shade"/>
      <div className="page-shell eco-hero-inner"><div className="eco-hero-copy">
        <p className="eyebrow light">Vegetation cutting & mulching</p>
        <h1>Eco-Mulching</h1>
        <p>Manage overgrown grass and suitable vegetation without open burning. We recommend how to cut and handle the material after reviewing your site.</p>
        <div className="eco-actions"><ButtonLink href="/quote?service=eco-mulching" label="Request a quotation" variant="light"/><Link href="#eco-methods" className="eco-hero-link">Explore the two methods <ArrowDown size={18}/></Link></div>
      </div><div className="eco-hero-index" aria-hidden="true"><span>01 / 02</span><span>Two ways to manage vegetation</span></div></div>
    </section>

    <section className="eco-intro"><div className="page-shell eco-intro-grid">
      <div><p className="eyebrow">The service</p><h2>What happens to the cut vegetation?</h2></div>
      <div><p>Cutting is only part of the job. The next decision is whether suitable material should be shredded where it stands or gathered for separate processing.</p><p>We consider the type and amount of vegetation, access for equipment, terrain and the result you want. The proposed method and final handling are set out in the quotation.</p></div>
    </div></section>

    <section id="eco-methods" className="eco-methods"><div className="page-shell">
      <div className="eco-section-head"><p className="eyebrow">Choose the right approach</p><h2>Two ways to handle the work.</h2><p>You can tell us your preference, or ask us to recommend a method for the site.</p></div>
      <article className="eco-method"><div className="eco-method-image"><Image src={photo.mulchInPlace} alt="Illustration of a walk-behind machine cutting and shredding grass where it grows" fill sizes="(max-width:900px) 100vw, 52vw"/></div><div className="eco-method-copy"><span className="eco-method-number">01 / ON THE GROUND</span><h3>Cut and mulch in place</h3><p>Suitable equipment cuts and shreds vegetation as it moves across an accessible area. The cut material remains on site and is managed as part of the agreed work.</p><ul><li><Check/>Useful where equipment can reach the vegetation safely</li><li><Check/>Reduces the need to gather cut grass into piles</li><li><Check/>The finish depends on the vegetation and site conditions</li></ul><Link href="/quote?service=eco-mulching&method=in-place">Ask about this method <ArrowRight size={18}/></Link></div></article>
      <article className="eco-method eco-method-reverse"><div className="eco-method-image"><Image src={photo.collectAndProcess} alt="Illustration of cut vegetation collected and fed into a separate processing machine" fill sizes="(max-width:900px) 100vw, 52vw"/></div><div className="eco-method-copy"><span className="eco-method-number">02 / COLLECTED MATERIAL</span><h3>Cut, collect and process</h3><p>Vegetation is cut and gathered before being processed separately. We agree where the processed material should go and whether removal is needed.</p><ul><li><Check/>Useful when cut material needs separate handling</li><li><Check/>Collection and processing are included in the agreed scope</li><li><Check/>Any transport or removal is quoted clearly</li></ul><Link href="/quote?service=eco-mulching&method=collect-process">Ask about this method <ArrowRight size={18}/></Link></div></article>
      <p className="eco-image-note">Images illustrate the methods. The equipment and result are confirmed for each site.</p>
    </div></section>

    <section className="eco-site"><div className="page-shell eco-site-grid"><div className="eco-site-title"><p className="eyebrow light">Where it can help</p><h2>For land that needs practical vegetation management.</h2><p>Particularly useful for larger properties and overgrown areas. Site size alone does not determine the method.</p></div><div className="eco-site-items">
      <div><MapPin/><span>Estates and large compounds</span></div><div><Ruler/><span>Schools and commercial grounds</span></div><div><Sprout/><span>Farm edges and managed open land</span></div><div><Leaf/><span>Sites avoiding open burning</span></div>
    </div></div></section>

    <section className="eco-steps"><div className="page-shell"><div className="eco-section-head"><p className="eyebrow">From enquiry to quotation</p><h2>Start with the site details.</h2><p>We will tell you what information is needed to price the work.</p></div><div className="eco-step-grid">{steps.map(step=><article key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.copy}</p></article>)}</div></div></section>

    <section className="eco-final"><Image src={photo.ecoMulchingHero} alt="" fill sizes="100vw"/><div className="eco-final-shade"/><div className="page-shell eco-final-inner"><p className="eyebrow light">Discuss your property</p><h2>Need overgrown vegetation managed?</h2><p>Tell us the location, approximate area and what is growing there. Choose a method if you have one in mind, or let us advise.</p><ButtonLink href="/quote?service=eco-mulching" label="Get a site quotation" variant="light"/></div></section>
  </main><SiteFooter/></>;
}
