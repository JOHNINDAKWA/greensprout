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
  ["lawn-care-maintenance", "Lawn Care & Maintenance"], ["sod-installation-landscaping", "Sod Installation & Landscaping"],
  ["project-support", "Project support"], ["technical-service", "Other technical service"],
  ["hydroseeding", "Hydroseeding · Coming soon"],
  ["erosion-control", "Erosion control · Coming soon"], ["land-rehabilitation", "Land rehabilitation · Coming soon"],
  ["landscape-establishment", "Landscape establishment · Coming soon"],
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
const clippingMethods = makeOptions([["help", "Recommend the suitable option"], ["in-place", "Leave rear-discharged clippings where suitable"], ["collect", "Collect clippings separately after mowing" ]]);
const futureServices = new Set(["hydroseeding", "erosion-control", "land-rehabilitation", "landscape-establishment"]);

export function QuoteForm({ initialService, initialMethod }: { initialService: string; initialMethod?: string }) {
  const [service, setService] = useState<Option>(serviceOptions.find(option => option.value === initialService) ?? serviceOptions[0]);
  const [timing, setTiming] = useState<Option>(timingOptions[0]);
  const [budget, setBudget] = useState<Option>(budgetOptions[0]);
  const [materials, setMaterials] = useState<Option>(materialsOptions[0]);
  const [clippingMethod, setClippingMethod] = useState<Option>(clippingMethods.find(option => option.value === initialMethod) ?? clippingMethods[0]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const value = (key: string) => String(form.get(key) || "Not provided").trim();
    const body = [
      `Name: ${value("name")}`, `Organisation: ${value("organisation")}`, `Phone: ${value("phone")}`,
      `Email: ${value("email")}`, `Project location: ${value("location")}`, `Approximate area: ${value("area")}`,
      `Interested in: ${service.label}`, `When needed: ${timing.label}`, `Budget range: ${budget.label}`,
      `Site photos or plans available: ${materials.label}`, "", "About the site / questions:", value("brief"),
      ...(service.value === "lawn-care-maintenance" ? [`Preferred clipping handling: ${clippingMethod.label}`] : []),
      ...[["Access, slope or site conditions", "siteConditions"], ["Project stage", "projectStage"], ["Approximate project value", "projectValue"], ["Workshop audience", "workshopAudience"], ["Approximate participants", "participants"], ["Workshop duration", "workshopDuration"], ["Vegetation and approximate height", "vegetation"], ["Tractor and mower access", "mowerAccess"], ["Preferred handling of cut material", "materialHandling"]].filter(([,key]) => form.get(key)).map(([label,key]) => `${label}: ${value(key)}`),
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
    {futureServices.has(service.value) && <p className="quote-future-message" role="status"><strong>Coming soon.</strong> This specialist service is planned for a future phase. Tell us about your project and we can discuss assessment or currently available alternatives.</p>}
    {service.value === "lawn-care-maintenance" && <div className="lawn-quote-fields"><div className="p5-select-field"><label htmlFor="clipping-method">What should happen to the grass clippings?</label><Select<Option> inputId="clipping-method" instanceId="clipping-method" classNamePrefix="quote-select" options={clippingMethods} value={clippingMethod} onChange={value => value && setClippingMethod(value)} isSearchable={false}/></div><p>The grooming mower rear-discharges clippings. Collection and removal, if needed, are separate work to quote.</p><div className="p5-form-row"><label>What is the grass like now?<input name="vegetation" placeholder="Maintained, slightly long or uneven"/></label><label>Can a tractor access it?<input name="mowerAccess" placeholder="Gate width, open lawn, obstacles or slopes"/></label></div></div>}
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
