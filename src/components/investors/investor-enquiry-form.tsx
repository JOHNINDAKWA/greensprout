"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import Select from "react-select";

type InterestOption = { label: string; value: string };
const interestOptions: InterestOption[] = ["Investment discussion", "Strategic partnership", "Equipment or technical partnership", "Another opportunity"].map(label => ({ label, value: label }));

export function InvestorEnquiryForm() {
  const [interest, setInterest] = useState<InterestOption | null>(null);
  const [interestError, setInterestError] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!interest) { setInterestError(true); return; }
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`GreenSprout investment enquiry — ${form.get("name")}`);
    const body = encodeURIComponent([
      `Name: ${form.get("name")}`,
      `Organisation: ${form.get("organisation") || "Not provided"}`,
      `Email: ${form.get("email")}`,
      `Phone: ${form.get("phone") || "Not provided"}`,
      `Interest: ${interest.label}`,
      "",
      String(form.get("message")),
    ].join("\n"));
    window.location.href = `mailto:info@greensprout.com?subject=${subject}&body=${body}`;
  }

  return <form className="investor-form" onSubmit={submit}>
    <div className="investor-form-row"><label>Full name <span>*</span><input name="name" required autoComplete="name" /></label><label>Organisation <small>Optional</small><input name="organisation" autoComplete="organization" /></label></div>
    <div className="investor-form-row"><label>Email address <span>*</span><input name="email" type="email" required autoComplete="email" /></label><label>Phone number <small>Optional</small><input name="phone" type="tel" autoComplete="tel" /></label></div>
    <div className="investor-select-field"><label htmlFor="investor-interest">What are you interested in? <span>*</span></label><Select<InterestOption> inputId="investor-interest" instanceId="investor-interest" classNamePrefix="quote-select" options={interestOptions} value={interest} onChange={option => { setInterest(option); setInterestError(false); }} placeholder="Select an option" isSearchable={false} aria-invalid={interestError} aria-describedby={interestError ? "investor-interest-error" : undefined}/>{interestError && <small id="investor-interest-error" role="alert">Please select an option.</small>}</div>
    <label>Your message <span>*</span><textarea name="message" required rows={5} placeholder="Tell us a little about your interest and how you would like to connect." /></label>
    <button type="submit">Prepare investor email <span aria-hidden="true">↗</span></button>
    <p>Clicking opens your email app with this message prepared. Please send it there to complete your enquiry. No information is stored by this form. See our <Link href="/privacy">privacy policy</Link>.</p>
  </form>;
}
