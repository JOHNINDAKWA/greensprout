"use client";

import { FormEvent, useState } from "react";
import Select from "react-select";

type Option = { value: string; label: string };
const makeOptions = (values: readonly (readonly [string, string])[]): Option[] => values.map(([value, label]) => ({ value, label }));

const serviceOptions = makeOptions([
  ["not-sure", "Help me choose"], ["consultation", "Paid consultation"], ["site-assessment", "Site assessment"],
  ["bronze", "Bronze consulting"], ["silver", "Silver consulting"], ["gold", "Gold consulting"],
  ["project-coordination", "Project coordination"], ["project-support", "Project support"], ["training", "Training or workshop"],
  ["technical-service", "Stand-alone technical service"], ["hydroseeding", "Hydroseeding"],
  ["erosion-control", "Erosion control"], ["land-rehabilitation", "Land rehabilitation"],
  ["landscape-establishment", "Landscape establishment"],
]);
const timingOptions = makeOptions([["Not sure", "Not sure"], ["As soon as possible", "As soon as possible"], ["Within 1–3 months", "Within 1–3 months"], ["Later / planning ahead", "Later / planning ahead"]]);
const budgetOptions = makeOptions([["Prefer to discuss", "Prefer to discuss"], ["Under KSh 50,000", "Under KSh 50,000"], ["KSh 50,000–250,000", "KSh 50,000–250,000"], ["KSh 250,000–1 million", "KSh 250,000–1 million"], ["Over KSh 1 million", "Over KSh 1 million"]]);
const materialsOptions = makeOptions([["Not yet", "Not yet"], ["Photos available", "Photos available"], ["Drawings or BOQ available", "Drawings or BOQ available"], ["Both available", "Both available"]]);

export function QuoteForm({ initialService }: { initialService: string }) {
  const [service, setService] = useState<Option>(serviceOptions.find(option => option.value === initialService) ?? serviceOptions[0]);
  const [timing, setTiming] = useState<Option>(timingOptions[0]);
  const [budget, setBudget] = useState<Option>(budgetOptions[0]);
  const [materials, setMaterials] = useState<Option>(materialsOptions[0]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const value = (key: string) => String(form.get(key) || "Not provided").trim();
    const body = [
      `Name: ${value("name")}`, `Organisation: ${value("organisation")}`, `Phone: ${value("phone")}`,
      `Email: ${value("email")}`, `Project location: ${value("location")}`, `Approximate area: ${value("area")}`,
      `Interested in: ${service.label}`, `When needed: ${timing.label}`, `Budget range: ${budget.label}`,
      `Site photos or plans available: ${materials.label}`, "", "About the site / questions:", value("brief"),
    ].join("\n");
    window.location.href = `mailto:info@greensprout.com?subject=${encodeURIComponent(`GreenSprout quote request — ${service.label}`)}&body=${encodeURIComponent(body)}`;
  }

  return <form className="p5-quote-form" onSubmit={submit}>
    <div className="p5-form-title"><span>01 / YOUR ENQUIRY</span><h2>Tell us about the site.</h2><p>What you know is enough to get started. Fields marked * are required.</p></div>
    <div className="p5-form-row"><label>Full name *<input name="name" autoComplete="name" required/></label><label>Organisation <input name="organisation" autoComplete="organization" placeholder="If applicable"/></label></div>
    <div className="p5-form-row"><label>Phone number *<input name="phone" type="tel" autoComplete="tel" required/></label><label>Email address *<input name="email" type="email" autoComplete="email" required/></label></div>
    <div className="p5-form-row"><label>Project location *<input name="location" required placeholder="Town / county"/></label><label>Approximate area<input name="area" placeholder="e.g. 1 acre; okay if unknown"/></label></div>
    <div className="p5-select-field"><label htmlFor="quote-service">What kind of help do you need? *</label><Select<Option> inputId="quote-service" instanceId="quote-service" classNamePrefix="quote-select" options={serviceOptions} value={service} onChange={value => value && setService(value)} isSearchable={false}/></div>
    <div className="p5-form-row"><div className="p5-select-field"><label htmlFor="quote-timing">When do you need it?</label><Select<Option> inputId="quote-timing" instanceId="quote-timing" classNamePrefix="quote-select" options={timingOptions} value={timing} onChange={value => value && setTiming(value)} isSearchable={false}/></div><div className="p5-select-field"><label htmlFor="quote-budget">Estimated budget</label><Select<Option> inputId="quote-budget" instanceId="quote-budget" classNamePrefix="quote-select" options={budgetOptions} value={budget} onChange={value => value && setBudget(value)} isSearchable={false}/></div></div>
    <div className="p5-select-field"><label htmlFor="quote-materials">Do you have site photos, drawings or a BOQ?</label><Select<Option> inputId="quote-materials" instanceId="quote-materials" classNamePrefix="quote-select" options={materialsOptions} value={materials} onChange={value => value && setMaterials(value)} isSearchable={false}/></div>
    <label>What is happening on the site, and what result do you want? *<textarea name="brief" required rows={5} placeholder="For example: bare soil on a slope, or a lawn needed for a new property"/></label>
    <button className="p5-submit" type="submit">Prepare my enquiry <span aria-hidden="true">↗</span></button>
    <p className="p5-form-help">This opens your email app with your details ready to send to info@greensprout.com. Review and send the message there; this website does not submit or store your details. You can attach photos or plans to that email. See our <a href="/privacy">Privacy notice</a>.</p>
  </form>;
}
