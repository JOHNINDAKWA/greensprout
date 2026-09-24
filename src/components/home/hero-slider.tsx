"use client";

import { photo } from "@/data/image-library";

import Image from "next/image";
import { useEffect, useState } from "react";

import { ButtonLink } from "@/components/ui/button-link";

const slides = [
  {
    image: photo.hydroHero,
    alt: "Worker spraying hydroseeding slurry beside a machine",
    label: "A modern way to plant grass in Kenya",
    title: <>Plant grass faster.<br /><em>Cover the ground evenly.</em></>,
    copy: "Hydroseeding sprays a prepared mixture of grass seed, water, mulch and nutrients onto the soil. It is a faster, more even way to establish grass on lawns, large grounds and slopes.",
  },
  {
    image: photo.erosionRunoff,
    alt: "Exposed slope showing erosion after rainfall",
    label: "Erosion control for slopes and bare ground",
    title: <>Protect your soil.<br /><em>Reduce damage from rain.</em></>,
    copy: "We help protect exposed soil and slopes from being washed away. We inspect the land, study how water moves and recommend a suitable erosion-control method.",
  },
  {
    image: photo.landscapeEstate,
    alt: "Landscaped grounds with established grass",
    label: "Landscape planning and project support",
    title: <>Turn bare land into<br /><em>a healthy green space.</em></>,
    copy: "We help you choose suitable grass, prepare the soil, plan the work and care for the new vegetation until it is properly established.",
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
              <div className="hero-actions"><ButtonLink href="/quote?service=site-assessment" label="Request a site visit" /><ButtonLink href="#solutions" label="See our services" variant="outline" /></div>
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
