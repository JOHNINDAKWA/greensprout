import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { footerGroups } from "@/data/site";

export function SiteFooter() {
  const footerHref = (label: string) => {
    if (label === "Home") return "/";
    if (label === "Get a quote") return "/quote";
    if (label === "About GreenSprout") return "/about";
    if (label === "Contact") return "/contact";
    if (["Bronze package", "Silver package", "Gold package", "Consultation", "Site assessment"].includes(label)) return "/consulting";
    if (label === "Industries") return "/industries";
    if (label === "Guides & Advice") return "/guides";
    return "/services";
  };

  return (
    <footer className="site-footer">
      <div className="page-shell footer-top">
        <div className="footer-lead">
          <Image src="/brand/greensprout-logo.png" alt="GreenSprout Hydroseeding" width={178} height={164} />
          <p>Technical care for stronger landscapes, stable ground and resilient green environments.</p>
          <Link href="mailto:info@greensprout.com" className="footer-email">info@greensprout.com <ArrowUpRight /></Link>
        </div>
        <div className="footer-links">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h2>{group.title}</h2>
              {group.links.map((link) => <Link href={footerHref(link)} key={link}>{link}</Link>)}
            </div>
          ))}
        </div>
      </div>
      <div className="page-shell footer-office">
        <div><span>Based in Kenya</span><p>Working across residential, commercial, institutional and public landscapes.</p></div>
        <div><span>Start a conversation</span><p>0700 355 113</p></div>
        <div className="footer-social"><Link href="#" aria-label="LinkedIn">in</Link><Link href="#" aria-label="Instagram">ig</Link></div>
      </div>
      <div className="page-shell footer-legal">
        <p>© {new Date().getFullYear()} GreenSprout Hydroseeding. All rights reserved.</p>
        <div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="#top">Back to top ↑</Link></div>
      </div>
    </footer>
  );
}
