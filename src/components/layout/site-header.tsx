"use client";

import { photo } from "@/data/image-library";

import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, FilePenLine, Leaf, Menu, X } from "lucide-react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

import { navigation } from "@/data/site";

export function SiteHeader() {
  const [activeDesktop, setActiveDesktop] = useState<string | null>(null);
  const [openMobile, setOpenMobile] = useState<string | null>(null);

  return (
    <header id="top" className="site-header">
      <div className="desktop-header" onMouseLeave={() => setActiveDesktop(null)}>
        <Link href="/" className="brand-panel" aria-label="GreenSprout home">
          <Image src="/brand/greensprout-logo.png" alt="GreenSprout Hydroseeding" width={180} height={166} priority />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <div key={item.label} className="nav-item">
              <Link
                href={item.href}
                className="nav-link"
                onMouseEnter={() => setActiveDesktop(item.children ? item.label : null)}
                onFocus={() => setActiveDesktop(item.children ? item.label : null)}
              >
                {item.label}{item.children && <ChevronDown aria-hidden="true" />}
              </Link>
            </div>
          ))}
        </nav>
        <div className="desktop-actions">
          <Link href="/quote" className="identity-tower">
            <FilePenLine aria-hidden="true" /><strong>Start a quote</strong>
          </Link>
          <Link href="https://wa.me/254700355113" className="header-action header-message" aria-label="Chat with GreenSprout on WhatsApp"><span className="whatsapp-mark"><FaWhatsapp aria-hidden="true" /></span></Link>
          <a href="tel:+254700355113" className="header-action header-phone" aria-label="Call GreenSprout at +254 700 355 113"><FaPhoneAlt aria-hidden="true" /></a>
        </div>
        {navigation.map((item) => item.children && activeDesktop === item.label ? (
          <div key={item.label} className="mega-menu" onMouseEnter={() => setActiveDesktop(item.label)}>
            <div className="mega-intro">
              <Image src={item.label === "Industries" ? photo.publicGrounds : photo.hydroApplication} alt="Illustrative view of land restoration work" fill sizes="34vw" />
              <div><p className="eyebrow">Explore {item.label}</p><h2>Practical help for better land and healthier landscapes.</h2><Link className="mega-main-button" href={item.label === "Solutions" ? "/services" : "/industries"}>See all {item.label.toLowerCase()} <span>→</span></Link></div>
            </div>
            <div className="mega-links">
              {item.children.map((child, index) => (
                <Link href={child.href} key={child.title} className="mega-link">
                  <span className="mega-number">0{index + 1}</span><strong>{child.title}</strong><p>{child.description}</p><span className="mega-cta">Explore {child.title} <span>→</span></span>
                </Link>
              ))}
            </div>
          </div>
        ) : null)}
      </div>

      <div className="mobile-header">
        <Link href="/" className="mobile-brand" aria-label="GreenSprout home">
          <Image src="/brand/greensprout-logo.png" alt="GreenSprout Hydroseeding" width={116} height={106} priority />
        </Link>
        <div className="mobile-mark" aria-hidden="true"><Leaf /></div>
        <Link href="https://wa.me/254700355113" className="mobile-action mobile-message" aria-label="Chat with GreenSprout on WhatsApp"><span className="whatsapp-mark"><FaWhatsapp aria-hidden="true" /></span></Link>
        <a href="tel:+254700355113" className="mobile-action mobile-phone" aria-label="Call GreenSprout at +254 700 355 113"><FaPhoneAlt aria-hidden="true" /></a>
        <Dialog.Root>
          <Dialog.Trigger asChild><button className="mobile-action mobile-menu" aria-label="Open navigation"><Menu /></button></Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="drawer-overlay" />
            <Dialog.Content className="mobile-drawer" aria-describedby={undefined}>
              <Dialog.Title className="sr-only">GreenSprout navigation</Dialog.Title>
              <div className="drawer-top"><span>Explore GreenSprout</span><Dialog.Close className="drawer-close" aria-label="Close navigation"><X /></Dialog.Close></div>
              <nav aria-label="Mobile navigation" className="drawer-nav">
                {navigation.map((item) => (
                  <div key={item.label} className="drawer-group">
                    {item.children ? <>
                      <button className="drawer-primary" onClick={() => setOpenMobile(openMobile === item.label ? null : item.label)} aria-expanded={openMobile === item.label}>
                        {item.label}<span>{openMobile === item.label ? "−" : "+"}</span>
                      </button>
                      {openMobile === item.label && <div className="drawer-children">
                        {item.children.map((child) => <Dialog.Close asChild key={child.title}><Link href={child.href}>{child.title}</Link></Dialog.Close>)}
                      </div>}
                    </> : <Dialog.Close asChild><Link className="drawer-primary" href={item.href}>{item.label}</Link></Dialog.Close>}
                  </div>
                ))}
              </nav>
              <div className="drawer-contact"><p>Have a site in mind?</p><Dialog.Close asChild><Link href="/quote">Get a quote <span>↗</span></Link></Dialog.Close></div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}
