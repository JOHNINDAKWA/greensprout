"use client";

import { usePathname } from "next/navigation";
import { Link2, Share2 } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

export function ShareActions({ label = "Share this page" }: { label?: string }) {
  const pathname = usePathname();
  const [copied, setCopied] = useState(false);

  const pageUrl = () => `${window.location.origin}${pathname}`;
  const pageTitle = () => document.title;

  function openShare(platform: "whatsapp" | "linkedin" | "facebook") {
    const url = encodeURIComponent(pageUrl());
    const destination = platform === "whatsapp"
      ? `https://wa.me/?text=${encodeURIComponent(`${pageTitle()} ${pageUrl()}`)}`
      : platform === "linkedin"
        ? `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
        : `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    window.open(destination, "_blank", "noopener,noreferrer");
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(pageUrl());
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      window.prompt("Copy this page link", pageUrl());
    }
  }

  async function share() {
    if (!navigator.share) { await copyLink(); return; }
    try { await navigator.share({ title: pageTitle(), url: pageUrl() }); }
    catch { /* The visitor dismissed the native share sheet. */ }
  }

  return <div className="share-actions" aria-label={label}>
    <span className="share-actions-label">{label}</span>
    <div className="share-actions-buttons">
      <button type="button" onClick={() => openShare("whatsapp")} aria-label="Share on WhatsApp"><FaWhatsapp aria-hidden="true" /></button>
      <button type="button" onClick={() => openShare("linkedin")} aria-label="Share on LinkedIn"><FaLinkedinIn aria-hidden="true" /></button>
      <button type="button" onClick={() => openShare("facebook")} aria-label="Share on Facebook"><FaFacebookF aria-hidden="true" /></button>
      <button type="button" onClick={share} aria-label="Share using your device"><Share2 aria-hidden="true" /></button>
      <button type="button" onClick={copyLink} aria-label={copied ? "Link copied" : "Copy page link"}><Link2 aria-hidden="true" /></button>
    </div>
    <span className="share-actions-feedback" role="status">{copied ? "Link copied" : ""}</span>
  </div>;
}
