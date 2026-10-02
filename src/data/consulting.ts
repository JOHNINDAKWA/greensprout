import { photo } from "@/data/image-library";

// One source for consulting prices and inclusions across the homepage, consulting and quote pages.
// Exact scope, visits, travel and third-party costs are confirmed in a written proposal.
export const consultingPackages = [
  {
    slug: "bronze", name: "Bronze", price: "KSh 30,000",
    audience: "Small residential sites · approximately one acre or less",
    description: "A practical answer for a lawn, compound or other small site.",
    image: photo.landscapeEstate,
    highlights: ["One site visit", "Basic recommendations", "Summary report"],
    inclusions: ["Initial consultation and client brief", "One site visit and basic site assessment", "Soil-testing coordination where required (laboratory fees separate)", "Basic grass and site recommendations", "Summary report", "One follow-up phone consultation"],
  },
  {
    slug: "silver", name: "Silver", price: "KSh 75,000",
    audience: "Estates · schools · churches · hotels · commercial grounds",
    description: "Detailed direction when the project has more decisions to make.",
    image: photo.publicGrounds,
    highlights: ["Everything in Bronze", "Detailed site survey", "One supervision visit"],
    inclusions: ["Everything included in Bronze", "Detailed site survey and interpretation of soil analysis", "Grass species recommendation and soil amendment plan", "Project budget estimate", "Contractor selection guidance", "Hydroseeding specification where relevant", "One site supervision visit", "Final written report"],
  },
  {
    slug: "gold", name: "Gold", price: "From KSh 250,000",
    audience: "County projects · developers · golf courses · roads · major sites",
    description: "Planning and technical oversight for a complex project.",
    image: photo.publicSector,
    highlights: ["Complete project planning", "Multiple site visits", "Coordination through handover"],
    inclusions: ["Project consultations and multiple site visits within the agreed programme", "Complete project planning and full project coordination", "Contractor management and client meetings", "Quality assurance inspections and progress reports", "Risk management and final inspection", "Maintenance programme and handover documentation"],
  },
] as const;

export const consultingRates = [
  { value: "consultation", title: "Initial consultation", price: "KSh 5,000", detail: "30–45 minutes of scheduled phone or online advice.", category: "Advice & assessment" },
  { value: "site-assessment", title: "On-site consultation", price: "From KSh 15,000", detail: "A visit to discuss the site and assess terrain, slope, vegetation and feasibility.", category: "Advice & assessment" },
  { value: "site-survey", title: "Detailed site survey", price: "From KSh 25,000", detail: "A more detailed technical survey with the agreed findings and recommendations.", category: "Advice & assessment" },
  { value: "soil-testing", title: "Soil-testing coordination", price: "From KSh 20,000", detail: "Sampling and laboratory coordination; laboratory charges are separate.", category: "Planning & documents" },
  { value: "project-planning", title: "Planning & specifications", price: "From KSh 50,000", detail: "A project strategy and technical specifications for the agreed scope.", category: "Planning & documents" },
  { value: "boq", title: "Bill of quantities", price: "From KSh 35,000", detail: "An itemised quantities document for the defined works.", category: "Planning & documents" },
  { value: "site-supervision", title: "Site supervision", price: "KSh 25,000 / day", detail: "On-site oversight of agreed work stages.", category: "Delivery & follow-up" },
  { value: "quality-inspection", title: "Quality inspection", price: "KSh 20,000 / visit", detail: "An independent check with findings and next steps.", category: "Delivery & follow-up" },
  { value: "training", title: "Training workshop", price: "From KSh 100,000 / day", detail: "A tailored practical workshop for a team or institution.", category: "Delivery & follow-up" },
  { value: "retainer", title: "Monthly consulting retainer", price: "From KSh 150,000 / month", detail: "Ongoing advice and oversight; duration and availability agreed in writing.", category: "Delivery & follow-up" },
] as const;

export const coordinationOffer = {
  value: "project-coordination",
  title: "Project coordination",
  price: "Quoted to scope",
  detail: "A fixed fee or project-value-based proposal after reviewing the work and responsibilities.",
} as const;
