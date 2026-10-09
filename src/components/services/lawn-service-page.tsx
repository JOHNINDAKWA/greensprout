import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ExternalLink, Play } from "lucide-react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ButtonLink } from "@/components/ui/button-link";
import { photo } from "@/data/image-library";

const pages = {
  "lawn-care-maintenance": {
    eyebrow: "For established lawns and larger grounds",
    title: "Lawn Care & Maintenance",
    intro: "A neat lawn takes more than a quick pass with a mower. We plan the cut, the finish and what happens to the clippings around the way your grounds are actually used.",
    hero: photo.lawnHero, detail: photo.lawnDetail, comparison: photo.lawnComparison,
    scope: ["Tractor-mounted finish mowing for suitable open lawns", "Cutting height and visit frequency suited to the grass", "Attention to edges and obstacles in the agreed scope", "Rear-discharged clippings or separate collection as agreed", "One-off visits or a planned maintenance schedule"],
    suitability: "A rear-mounted, three-point-hitch grooming mower is intended for accessible, established turf. Dense brush, woody growth and rough construction sites require a different assessment and equipment.",
    storyTitle: "A consistent finish across larger lawns.",
    story: "A PTO-driven grooming mower trails behind a suitable tractor, with a broad deck for an even finish on maintained turf. Rear discharge distributes clippings behind the deck. If clippings need to be gathered or removed, that extra work is assessed and quoted separately.",
    compareTitle: "See the difference a considered cut can make.",
    compareCopy: "The same illustrative lawn is shown before and after mowing. The change comes from cutting manageable grass evenly, not from clearing brush or rebuilding the landscape.",
    steps: [{number:"01", title:"Share the site", text:"Send the location, approximate lawn area and a few photos."},{number:"02", title:"Agree the work", text:"We confirm access, frequency, finish and clipping handling."},{number:"03", title:"Maintain the lawn", text:"Suitable grounds are mowed and the result checked against the agreed scope."}],
    videoId: "T1BEsBs5kZo", videoTitle: "Tractor-mounted finishing mower working on maintained grass", videoCredit: "K.A.T. – independent equipment demonstration", videoCopy: "This third-party video shows the type of rear-mounted grooming mower being considered for large, maintained lawns. It is an equipment example, not GreenSprout footage or confirmation of a purchased machine.",
    next: {href:"/services/sod-installation-landscaping", label:"Need a new lawn instead?", text:"Explore natural sod installation and landscape preparation."},
  },
  "sod-installation-landscaping": {
    eyebrow: "Traditional turf and landscape preparation",
    title: "Sod Installation & Landscaping",
    intro: "Turn prepared ground into a natural green lawn with carefully selected turf, sound soil preparation and a practical plan for the first weeks of care.",
    hero: photo.sodHero, detail: photo.sodDetail, comparison: photo.sodComparison,
    scope: ["Site assessment and ground preparation", "Soil improvement and grading where required", "Natural turf selection, supply and laying", "Clean joins, edging and agreed landscape details", "First watering and establishment guidance"],
    suitability: "Turf gives immediate green cover, but it must root into the prepared soil. The grass, ground works, irrigation and aftercare are agreed for each site.",
    storyTitle: "Good turf begins beneath the surface.",
    story: "We assess drainage, soil, light, levels and the intended use before a single roll is laid. The work is scoped for the site, from renewing a home lawn to installing green areas around a larger property.",
    compareTitle: "From bare ground to a newly laid lawn.",
    compareCopy: "This illustrative comparison shows what sod installation can change visually. The new turf still needs watering and time to establish roots before normal use.",
    steps: [{number:"01", title:"Plan", text:"Measure the area and agree on turf, levels, water and finishing details."},{number:"02", title:"Prepare and lay", text:"Complete agreed ground works, then fit fresh turf carefully."},{number:"03", title:"Establish", text:"Begin watering and follow guidance for access and the first mow."}],
    videoId: "t9GHY-gQFho", videoTitle: "How to lay natural sod", videoCredit: "Lowe’s Home Improvement – independent how-to video", videoCopy: "A third-party introduction to soil preparation, laying turf and watering. It is educational; GreenSprout's turf choice and method will follow the conditions of your site.",
    next: {href:"/services/lawn-care-maintenance", label:"Already have an established lawn?", text:"See our lawn care and larger-area mowing service."},
  },
} as const;

export function LawnServicePage({ slug }: { slug: keyof typeof pages }) {
  const page = pages[slug];
  const quote = `/quote?service=${slug}`;
  return <><SiteHeader/><main className="lsp">
    <section className="lsp-hero"><Image src={page.hero} alt="Illustrative scene of the service in a Kenyan landscape" fill priority sizes="100vw"/><div className="lsp-hero-shade"/><div className="page-shell lsp-hero-inner"><p className="eyebrow light">{page.eyebrow}</p><h1>{page.title}</h1><p>{page.intro}</p><div className="lsp-actions"><ButtonLink href={quote} label="Request a site quotation" variant="light"/><a href="#see-the-work">Explore the work <ArrowRight size={18}/></a></div></div></section>

    <section id="see-the-work" className="lsp-intro page-shell"><div><p className="eyebrow">What is included</p><h2>Clear work. A finish that suits your site.</h2><p>{page.suitability}</p><Link href={quote}>Tell us about your property <ArrowRight size={18}/></Link></div><ul>{page.scope.map(item=><li key={item}><Check size={19}/>{item}</li>)}</ul></section>

    <section className="lsp-image-story"><div className="lsp-story-photo"><Image src={page.detail} alt="Illustrative view of work involved in this service" fill sizes="(max-width:850px) 100vw, 55vw"/></div><div className="lsp-story-copy"><span className="lsp-index">01 / THE WORK</span><h2>{page.storyTitle}</h2><p>{page.story}</p><span className="lsp-disclosure">Illustrative imagery · Not a completed GreenSprout project</span></div></section>

    <section className="lsp-compare"><div className="page-shell"><div className="lsp-section-heading"><div><p className="eyebrow">Visual example</p><h2>{page.compareTitle}</h2></div><p>{page.compareCopy}</p></div><figure className="lsp-comparison"><Image src={page.comparison} alt={`Illustrative before and after comparison for ${page.title.toLowerCase()}`} fill sizes="(max-width:850px) 100vw, 86vw"/><figcaption><span>BEFORE · ILLUSTRATIVE</span><span>AFTER · ILLUSTRATIVE</span></figcaption></figure><p className="lsp-note">Concept visualization only. This is not a GreenSprout client site or proof of a result. Actual outcomes depend on the ground, materials and care.</p></div></section>

    <section className="lsp-process"><div className="page-shell"><div className="lsp-section-heading"><div><p className="eyebrow light">How we approach it</p><h2>From first look to final check.</h2></div><p>We agree on the scope before work begins, with any extra ground preparation or clipping removal explained in the quotation.</p></div><div className="lsp-steps">{page.steps.map(step=><article key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></div></section>

    <section className="lsp-video page-shell"><div className="lsp-video-copy"><span className="lsp-index">02 / WATCH THE METHOD</span><h2>See the work in motion.</h2><p>{page.videoCopy}</p><p className="lsp-credit">Video by {page.videoCredit}. This is not footage of GreenSprout or its equipment.</p><a href={`https://www.youtube.com/watch?v=${page.videoId}`} target="_blank" rel="noopener noreferrer">Watch on YouTube <ExternalLink size={17}/></a></div><div className="lsp-video-frame"><iframe title={page.videoTitle} src={`https://www.youtube-nocookie.com/embed/${page.videoId}`} loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen/><div className="lsp-video-hint"><Play size={15} fill="currentColor"/> Independent demonstration</div></div></section>

    <section className="lsp-next page-shell"><div><p className="eyebrow">Explore another service</p><h2>{page.next.label}</h2><p>{page.next.text}</p></div><ButtonLink href={page.next.href} label="Explore service"/></section>

    <section className="lsp-final"><Image src={page.hero} alt="" fill sizes="100vw"/><div className="lsp-final-shade"/><div className="page-shell"><p className="eyebrow light">Get a tailored quote</p><h2>Tell us about your grounds.</h2><p>Share the location, approximate area, current condition and photos if available. We will explain the suitable scope and price before booking.</p><ButtonLink href={quote} label="Request a site quotation" variant="light"/><span>Scope and pricing are confirmed before paid work begins.</span></div></section>
  </main><SiteFooter/></>;
}
