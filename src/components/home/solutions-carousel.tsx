"use client";

import { photo } from "@/data/image-library";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback } from "react";

const solutions = [
  { slug:"lawn-care-maintenance", title: "Lawn Care & Maintenance", copy: "Professional mowing for established lawns and larger managed grounds.", image: photo.lawnDetail },
  { slug:"sod-installation-landscaping", title: "Sod Installation & Landscaping", copy: "Natural turf and careful site preparation for a new green space.", image: photo.sodDetail },
  { slug:"site-assessment", title: "Site assessment", copy: "Understand the soil, slope, drainage, access and site risks before work begins.", image: photo.siteAssessment },
  { slug:"project-support", title: "Project support", copy: "Get help with planning, suppliers, supervision, inspections and final handover.", image: photo.projectCoordination },
  { slug:"hydroseeding", title: "Hydroseeding · Coming soon", copy: "A specialist method planned for future grass establishment projects.", image: photo.hydroApplication },
  { slug:"erosion-control", title: "Erosion control · Coming soon", copy: "Specialist slope protection planned for a future phase.", image: photo.erosionMatting },
];

export function SolutionsCarousel() {
  const [viewportRef, embla] = useEmblaCarousel({ align: "start", loop: true, slidesToScroll: 2 }, [Autoplay({ delay: 5200, stopOnInteraction: false, stopOnMouseEnter: true })]);
  const previous = useCallback(() => embla?.scrollPrev(), [embla]);
  const next = useCallback(() => embla?.scrollNext(), [embla]);

  return <section id="solutions" className="solutions-section"><div className="page-shell solutions-layout">
    <div className="solutions-intro"><p className="eyebrow">Our services</p><h2>What can we help you improve?</h2><p>Explore lawn and traditional turf services now, with specialist methods clearly marked for the future.</p><Link href="/services" className="simple-button">View all services <ArrowRight /></Link><div className="carousel-buttons"><button onClick={previous} aria-label="Previous services"><ArrowLeft /></button><button onClick={next} aria-label="Next services"><ArrowRight /></button></div></div>
    <div className="solution-viewport" ref={viewportRef}><div className="solution-rail">{solutions.map((solution) => <article className="solution-card" key={solution.title}><div className="solution-image"><Image src={solution.image} alt={solution.title} fill sizes="(max-width:760px) 100vw, 28vw" /></div><h3>{solution.title}</h3><p>{solution.copy}</p><Link href={`/services/${solution.slug}`}>Learn more <ArrowRight /></Link></article>)}</div></div>
  </div></section>;
}
