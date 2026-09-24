import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { QuoteForm } from "@/components/quote/quote-form";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = { title: "Get a quote", description: "Tell GreenSprout about your site and request a clear scope and quotation for consulting, hydroseeding or landscape work in Kenya." };

export default async function QuotePage({ searchParams }: { searchParams: Promise<{ service?: string }> }) {
  const service = (await searchParams).service ?? "not-sure";
  return <><SiteHeader/><main>
    <section className="p5-quote-content page-shell"><div className="p5-quote-side"><p className="eyebrow">A clear way forward</p><h2>What happens after you get in touch?</h2><ol><li><span>01</span><div><h3>We review your site details</h3><p>We may ask for photographs, a plan or a quick follow-up call.</p></div></li><li><span>02</span><div><h3>We recommend the right service</h3><p>That may be a paid consultation, a site assessment, a consulting package or a project quotation.</p></div></li><li><span>03</span><div><h3>You approve the scope and fee</h3><p>We explain what is included, what costs extra and how payment for a paid appointment will be arranged before booking.</p></div></li></ol><div className="p5-quote-note"><strong>Consultations start at KSh 5,000.</strong><p>A 30–45 minute advice session. Site assessments and project work are quoted according to scope and location. No payment is taken on this page.</p><Link href="/consulting">See consulting options <ArrowRight size={17}/></Link></div></div><QuoteForm key={service} initialService={service}/></section>

    <section className="p5-quote-other"><div className="page-shell"><p>Prefer a direct conversation?</p><h2>We’re easy to reach.</h2><div><Link href="tel:+254700355113">Call 0700 355 113 <ArrowRight size={18}/></Link><Link href="https://wa.me/254700355113">Chat on WhatsApp <ArrowRight size={18}/></Link><Link href="mailto:info@greensprout.com">Email GreenSprout <ArrowRight size={18}/></Link></div></div></section>
  </main><SiteFooter/></>;
}
