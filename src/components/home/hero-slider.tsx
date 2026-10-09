"use client";

import { photo } from "@/data/image-library";

import Image from "next/image";
import { useEffect, useState } from "react";

import { ButtonLink } from "@/components/ui/button-link";

const slides = [
  {
    image: photo.lawnHero,
    alt: "Large lawn being professionally mowed",
    label: "Lawn care for larger grounds",
    title: <>Lawn care for<br /><em>larger grounds.</em></>,
    copy: "Professional mowing and grass management for accessible lawns, residential estates and managed grounds.",
  },
  {
    image: photo.sodHero,
    alt: "Natural turf being laid on prepared soil",
    label: "Traditional sod installation",
    title: <>Sod installation &amp;<br /><em>site preparation.</em></>,
    copy: "Natural turf installation with careful ground preparation, a considered finish and guidance for the first weeks of care.",
  },
  {
    image: photo.hydroHero,
    alt: "Hydroseeding equipment applying a slurry to prepared ground",
    label: "Hydroseeding · Coming soon",
    title: <>Hydroseeding<br /><em>coming soon.</em></>,
    copy: "Hydroseeding is planned for a future phase. Today we can discuss your site and help with currently available lawn and landscape services.",
  },
];

export function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 7000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="hero-section" aria-label="GreenSprout services">
      <div className="hero-frame">
        {slides.map((slide, index) => (
          <div className={`hero-slide ${index === active ? "active" : ""}`} key={slide.label} aria-hidden={index !== active}>
            <Image src={slide.image} alt={slide.alt} fill priority={index === 0} sizes="100vw" />
            <div className="hero-shade" />
            <div className="hero-content">
              <p className="hero-kicker"><span />{slide.label}</p>
              <h1>{slide.title}</h1>
              <p>{slide.copy}</p>
              <div className="hero-actions"><ButtonLink href="/quote?service=site-assessment" label="Request a site visit" variant="light" /><ButtonLink href="#solutions" label="See our services" variant="outline" /></div>
            </div>
          </div>
        ))}
        <div className="hero-controls" aria-label="Choose a slide">
          {slides.map((slide, index) => <button key={slide.label} className={index === active ? "active" : ""} onClick={() => setActive(index)} aria-label={`Show slide ${index + 1}`}><span>{String(index + 1).padStart(2, "0")}</span></button>)}
        </div>
      </div>
    </section>
  );
}
