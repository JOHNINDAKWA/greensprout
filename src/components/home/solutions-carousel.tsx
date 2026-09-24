"use client";

import { photo } from "@/data/image-library";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback } from "react";

const solutions = [
  { slug:"hydroseeding", title: "Hydroseeding", copy: "Establish grass quickly and evenly on large areas, slopes and hard-to-reach ground.", image: photo.hydroApplication },
  { slug:"erosion-control", title: "Erosion control", copy: "Protect exposed soil, reduce runoff and help slopes remain stable during heavy rain.", image: photo.erosionMatting },
  { slug:"landscape-establishment", title: "Landscape establishment", copy: "Prepare the ground, choose suitable grass and support healthy growth after installation.", image: photo.landscapeEstate },
  { slug:"land-rehabilitation", title: "Land rehabilitation", copy: "Bring vegetation back to damaged, bare or heavily disturbed sites.", image: photo.landRehabilitation },
  { slug:"site-assessment", title: "Site assessment", copy: "Understand the soil, slope, drainage, access and site risks before work begins.", image: photo.siteAssessment },
  { slug:"project-support", title: "Project support", copy: "Get help with planning, suppliers, supervision, inspections and final handover.", image: photo.projectCoordination },
];

export function SolutionsCarousel() {
  const [viewportRef, embla] = useEmblaCarousel({ align: "start", loop: true, slidesToScroll: 2 }, [Autoplay({ delay: 5200, stopOnInteraction: false, stopOnMouseEnter: true })]);
  const previous = useCallback(() => embla?.scrollPrev(), [embla]);
  const next = useCallback(() => embla?.scrollNext(), [embla]);

  return <section id="solutions" className="solutions-section"><div className="page-shell solutions-layout">
    <div className="solutions-intro"><p className="eyebrow">Our services</p><h2>What can we help you improve?</h2><p>We provide practical support for growing grass, protecting soil and restoring land.</p><Link href="/services" className="simple-button">View all services <ArrowRight /></Link><div className="carousel-buttons"><button onClick={previous} aria-label="Previous services"><ArrowLeft /></button><button onClick={next} aria-label="Next services"><ArrowRight /></button></div></div>
    <div className="solution-viewport" ref={viewportRef}><div className="solution-rail">{solutions.map((solution) => <article className="solution-card" key={solution.title}><div className="solution-image"><Image src={solution.image} alt={solution.title} fill sizes="(max-width:760px) 100vw, 28vw" /></div><h3>{solution.title}</h3><p>{solution.copy}</p><Link href={`/services/${solution.slug}`}>Learn more <ArrowRight /></Link></article>)}</div></div>
  </div></section>;
}
