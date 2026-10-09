"use client";

import { FormEvent } from "react";
import Link from "next/link";

export function InvestorEnquiryForm() {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`GreenSprout investment enquiry — ${form.get("name")}`);
    const body = encodeURIComponent([
      `Name: ${form.get("name")}`,
      `Organisation: ${form.get("organisation") || "Not provided"}`,
      `Email: ${form.get("email")}`,
      `Phone: ${form.get("phone") || "Not provided"}`,
      `Interest: ${form.get("interest")}`,
      "",
      String(form.get("message")),
    ].join("\n"));
    window.location.href = `mailto:info@greensprout.com?subject=${subject}&body=${body}`;
  }

  return <form className="investor-form" onSubmit={submit}>
    <div className="investor-form-row"><label>Full name <span>*</span><input name="name" required autoComplete="name" /></label><label>Organisation <small>Optional</small><input name="organisation" autoComplete="organization" /></label></div>
    <div className="investor-form-row"><label>Email address <span>*</span><input name="email" type="email" required autoComplete="email" /></label><label>Phone number <small>Optional</small><input name="phone" type="tel" autoComplete="tel" /></label></div>
    <label>What are you interested in? <span>*</span><select name="interest" required defaultValue=""><option value="" disabled>Select an option</option><option>Investment discussion</option><option>Strategic partnership</option><option>Equipment or technical partnership</option><option>Another opportunity</option></select></label>
    <label>Your message <span>*</span><textarea name="message" required rows={5} placeholder="Tell us a little about your interest and how you would like to connect." /></label>
    <button type="submit">Prepare investor email <span aria-hidden="true">↗</span></button>
    <p>Clicking opens your email app with this message prepared. Please send it there to complete your enquiry. No information is stored by this form. See our <Link href="/privacy">privacy policy</Link>.</p>
  </form>;
}
