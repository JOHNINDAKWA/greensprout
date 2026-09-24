"use client";

import Select, { type SingleValue } from "react-select";
import { FormEvent, useState } from "react";

const serviceOptions = ["Hydroseeding", "Erosion control", "Landscape establishment", "Land rehabilitation", "Site assessment", "Consulting or project support", "Not sure yet"].map((label) => ({ label, value: label }));

export function ContactForm() {
  const [service, setService] = useState<SingleValue<(typeof serviceOptions)[number]>>(null);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`GreenSprout enquiry from ${form.get("name")}`);
    const body = encodeURIComponent([
      `Name: ${form.get("name")}`,
      `Phone: ${form.get("phone")}`,
      `Email: ${form.get("email")}`,
      `Location: ${form.get("location")}`,
      `Service: ${form.get("service")}`,
      "",
      String(form.get("message")),
    ].join("\n"));
    window.location.href = `mailto:info@greensprout.com?subject=${subject}&body=${body}`;
  }

  return <form className="contact-form" onSubmit={submit}>
    <div className="form-row"><label>Full name<input name="name" required autoComplete="name" /></label><label>Phone number<input name="phone" required autoComplete="tel" /></label></div>
    <div className="form-row"><label>Email address<input name="email" type="email" autoComplete="email" /></label><label>Project location<input name="location" required placeholder="Town or county" /></label></div>
    <label>What do you need help with?<Select inputId="service-select" classNamePrefix="service-select" options={serviceOptions} value={service} onChange={setService} placeholder="Select a service" isSearchable={false} /><input type="hidden" name="service" value={service?.value ?? "Not selected"} /></label>
    <label>Tell us about the site<textarea name="message" required rows={6} placeholder="Approximate size, current condition and the result you want" /></label>
    <button type="submit" className="form-submit"><span>Send enquiry</span><span>↗</span></button>
    <p className="form-note">Submitting opens your email application with the enquiry already prepared.</p>
  </form>;
}
