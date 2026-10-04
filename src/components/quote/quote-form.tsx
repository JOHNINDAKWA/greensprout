"use client";

import { FormEvent, useState } from "react";
import Select from "react-select";
import { consultingPackages, consultingRates, coordinationOffer } from "@/data/consulting";

type Option = { value: string; label: string };
const makeOptions = (values: readonly (readonly [string, string])[]): Option[] => values.map(([value, label]) => ({ value, label }));

const serviceOptions: Option[] = [
  { value: "not-sure", label: "Help me choose" },
  ...consultingPackages.map(item => ({ value: item.slug, label: `${item.name} consulting package` })),
  ...consultingRates.map(item => ({ value: item.value, label: item.title })),
  { value: coordinationOffer.value, label: coordinationOffer.title },
  ...makeOptions([
  ["project-support", "Project support"], ["technical-service", "Other technical service"], ["hydroseeding", "Hydroseeding"],
  ["erosion-control", "Erosion control"], ["land-rehabilitation", "Land rehabilitation"],
  ["landscape-establishment", "Landscape establishment"],
  ["eco-mulching", "Eco-Mulching / vegetation management"],
  ]),
];
const priceGuide: Record<string, { price: string; detail: string }> = Object.fromEntries([
  ...consultingPackages.map(item => [item.slug, { price: item.price, detail: "Package scope and any separate costs are confirmed in writing." }] as const),
  ...consultingRates.map(item => [item.value, { price: item.price, detail: item.detail }] as const),
  [coordinationOffer.value, { price: coordinationOffer.price, detail: coordinationOffer.detail }] as const,
]);
const siteServices = new Set(["site-assessment", "site-survey", "soil-testing", "site-supervision", "quality-inspection"]);
const projectServices = new Set(["gold", "project-coordination", "project-support", "retainer"]);
const timingOptions = makeOptions([["Not sure", "Not sure"], ["As soon as possible", "As soon as possible"], ["Within 1–3 months", "Within 1–3 months"], ["Later / planning ahead", "Later / planning ahead"]]);
const budgetOptions = makeOptions([["Prefer to discuss", "Prefer to discuss"], ["Under KSh 50,000", "Under KSh 50,000"], ["KSh 50,000–250,000", "KSh 50,000–250,000"], ["KSh 250,000–1 million", "KSh 250,000–1 million"], ["Over KSh 1 million", "Over KSh 1 million"]]);
const materialsOptions = makeOptions([["Not yet", "Not yet"], ["Photos available", "Photos available"], ["Drawings or BOQ available", "Drawings or BOQ available"], ["Both available", "Both available"]]);
const mulchingMethods = makeOptions([["help", "Help me choose"], ["in-place", "Cut and mulch in place"], ["collect-process", "Cut, collect and process"]]);

export function QuoteForm({ initialService, initialMethod }: { initialService: string; initialMethod?: string }) {
  const [service, setService] = useState<Option>(serviceOptions.find(option => option.value === initialService) ?? serviceOptions[0]);
  const [timing, setTiming] = useState<Option>(timingOptions[0]);
  const [budget, setBudget] = useState<Option>(budgetOptions[0]);
  const [materials, setMaterials] = useState<Option>(materialsOptions[0]);
  const [mulchingMethod, setMulchingMethod] = useState<Option>(mulchingMethods.find(option => option.value === initialMethod) ?? mulchingMethods[0]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const value = (key: string) => String(form.get(key) || "Not provided").trim();
    const body = [
      `Name: ${value("name")}`, `Organisation: ${value("organisation")}`, `Phone: ${value("phone")}`,
      `Email: ${value("email")}`, `Project location: ${value("location")}`, `Approximate area: ${value("area")}`,
      `Interested in: ${service.label}`, `When needed: ${timing.label}`, `Budget range: ${budget.label}`,
      `Site photos or plans available: ${materials.label}`, "", "About the site / questions:", value("brief"),
      ...(service.value === "eco-mulching" ? [`Preferred mulching method: ${mulchingMethod.label}`] : []),
      ...[["Access, slope or site conditions", "siteConditions"], ["Project stage", "projectStage"], ["Approximate project value", "projectValue"], ["Workshop audience", "workshopAudience"], ["Approximate participants", "participants"], ["Workshop duration", "workshopDuration"], ["Vegetation and approximate height", "vegetation"], ["Ground and machine access", "mulchingAccess"], ["Preferred handling of cut material", "materialHandling"]].filter(([,key]) => form.get(key)).map(([label,key]) => `${label}: ${value(key)}`),
    ].join("\n");
    window.location.href = `mailto:info@greensprout.com?subject=${encodeURIComponent(`GreenSprout quote request — ${service.label}`)}&body=${encodeURIComponent(body)}`;
  }

  return <form className="p5-quote-form" onSubmit={submit}>
    <div className="p5-form-title"><span>01 / YOUR ENQUIRY</span><h2>Tell us about the site.</h2><p>What you know is enough to get started. Fields marked * are required.</p></div>
    <div className="p5-form-row"><label>Full name *<input name="name" autoComplete="name" required/></label><label>Organisation <input name="organisation" autoComplete="organization" placeholder="If applicable"/></label></div>
    <div className="p5-form-row"><label>Phone number *<input name="phone" type="tel" autoComplete="tel" required/></label><label>Email address *<input name="email" type="email" autoComplete="email" required/></label></div>
    <div className="p5-form-row"><label>Project location *<input name="location" required placeholder="Town / county"/></label><label>Approximate area<input name="area" placeholder="e.g. 1 acre; okay if unknown"/></label></div>
    <div className="p5-select-field"><label htmlFor="quote-service">What kind of help do you need? *</label><Select<Option> inputId="quote-service" instanceId="quote-service" classNamePrefix="quote-select" options={serviceOptions} value={service} onChange={value => value && setService(value)} /></div>
    {priceGuide[service.value] && <div className="p12-selected-service" role="status"><span>STARTING FEE / GUIDE</span><strong>{priceGuide[service.value].price}</strong><p>{priceGuide[service.value].detail} Your exact scope and total are agreed before paid work begins.</p></div>}
    {service.value === "eco-mulching" && <div className="eco-quote-fields"><div className="p5-select-field"><label htmlFor="mulching-method">How would you like the vegetation handled?</label><Select<Option> inputId="mulching-method" instanceId="mulching-method" classNamePrefix="quote-select" options={mulchingMethods} value={mulchingMethod} onChange={value => value && setMulchingMethod(value)} isSearchable={false}/></div><p>We recommend the suitable method and confirm the full price after reviewing your site details.</p><label>What is growing, and approximately how tall is it?<input name="vegetation" placeholder="For example: long grass, weeds or light brush"/></label><div className="p5-form-row"><label>What is the ground and machine access like?<input name="mulchingAccess" placeholder="Open field, trees, slope, narrow gate..."/></label><label>What should happen to the cut material?<input name="materialHandling" placeholder="Remain on site, collect, or advise me"/></label></div></div>}
    <div className="p5-form-row"><div className="p5-select-field"><label htmlFor="quote-timing">When do you need it?</label><Select<Option> inputId="quote-timing" instanceId="quote-timing" classNamePrefix="quote-select" options={timingOptions} value={timing} onChange={value => value && setTiming(value)} isSearchable={false}/></div><div className="p5-select-field"><label htmlFor="quote-budget">Estimated budget</label><Select<Option> inputId="quote-budget" instanceId="quote-budget" classNamePrefix="quote-select" options={budgetOptions} value={budget} onChange={value => value && setBudget(value)} isSearchable={false}/></div></div>
    <div className="p5-select-field"><label htmlFor="quote-materials">Do you have site photos, drawings or a BOQ?</label><Select<Option> inputId="quote-materials" instanceId="quote-materials" classNamePrefix="quote-select" options={materialsOptions} value={materials} onChange={value => value && setMaterials(value)} isSearchable={false}/></div>
    {siteServices.has(service.value) && <label>What should we know about access, slopes or ground conditions?<input name="siteConditions" placeholder="For example: steep slope, poor access or bare soil"/></label>}
    {projectServices.has(service.value) && <div className="p5-form-row"><label>What stage is the project at?<input name="projectStage" placeholder="Planning, procurement or in progress"/></label><label>Approximate project value, if known<input name="projectValue" placeholder="An estimate is fine"/></label></div>}
    {service.value === "training" && <div className="p12-workshop-fields"><label>Who is the workshop for?<input name="workshopAudience" placeholder="For example: grounds staff or county team"/></label><div className="p5-form-row"><label>Approximate participants<input name="participants" inputMode="numeric" placeholder="Number of people"/></label><label>Preferred duration<input name="workshopDuration" placeholder="One day, two days or unsure"/></label></div></div>}
    <label>What is happening on the site, and what result do you want? *<textarea name="brief" required rows={5} placeholder="For example: bare soil on a slope, or a lawn needed for a new property"/></label>
    <button className="p5-submit" type="submit">Prepare my enquiry <span aria-hidden="true">↗</span></button>
    <p className="p5-form-help">This opens your email app with your details ready to send to info@greensprout.com. Review and send the message there; this website does not submit or store your details. You can attach photos or plans to that email. See our <a href="/privacy">Privacy notice</a>.</p>
  </form>;
}
