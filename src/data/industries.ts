import { photo } from "@/data/image-library";
export type Industry = {
  slug: string;
  name: string;
  eyebrow: string;
  short: string;
  heroImage: string;
  contextImage: string;
  outcomeImage: string;
  contextTitle: string;
  outcomeTitle: string;
  challenge: string;
  priorities: { title: string; copy: string }[];
  services: { title: string; copy: string; href: string }[];
  outcomes: string[];
};

export const industries: Industry[] = [
  {
    slug: "property-hospitality",
    name: "Property & hospitality",
    eyebrow: "Estates, hotels, schools and commercial grounds",
    short: "Healthy, presentable landscapes planned around daily use, guest experience and realistic maintenance.",
    heroImage: photo.landscapeEstate,
    contextImage: photo.siteAssessment,
    outcomeImage: photo.aftercareIrrigation,
    contextTitle: "A landscape that works as well as it looks.",
    outcomeTitle: "Grounds people can enjoy and maintain.",
    challenge: "Outdoor areas must look considered, withstand regular use and remain manageable after handover. We help owners and project teams choose suitable grass, prepare the site correctly and establish a clear care plan.",
    priorities: [
      { title: "The right finish", copy: "Grass and establishment methods selected for appearance, traffic, sunlight and intended use." },
      { title: "Reliable delivery", copy: "Clear preparation, quantities, timing and supervision for work that fits the wider development programme." },
      { title: "Practical upkeep", copy: "Watering, mowing and feeding guidance matched to the people and resources available on site." },
    ],
    services: [
      { title: "Landscape establishment", copy: "Build new lawns and green areas from soil preparation through early care.", href: "/services/landscape-establishment" },
      { title: "Hydroseeding", copy: "Establish grass evenly across large compounds, estates and difficult areas.", href: "/services/hydroseeding" },
      { title: "Site assessment", copy: "Understand drainage, soil, access and project needs before committing a budget.", href: "/services/site-assessment" },
    ],
    outcomes: ["Welcoming outdoor spaces", "Grass suited to real site use", "Clear maintenance requirements", "Coordinated contractor delivery"],
  },
  {
    slug: "infrastructure",
    name: "Infrastructure",
    eyebrow: "Roads, embankments and major development sites",
    short: "Vegetation and erosion-control support for exposed ground, slopes and construction-affected land.",
    heroImage: photo.erosionRunoff,
    contextImage: photo.erosionMatting,
    outcomeImage: photo.roadsideRevegetation,
    contextTitle: "Exposed ground cannot wait for grass to grow.",
    outcomeTitle: "Stabilised sites with a clear handover.",
    challenge: "Infrastructure works often leave large, steep or disturbed surfaces exposed to rainfall. We assess the risk, plan suitable protection and help establish vegetation that supports safer, more stable land.",
    priorities: [
      { title: "Slope stability", copy: "Treatments informed by gradient, runoff, soil condition and the severity of erosion risk." },
      { title: "Scalable methods", copy: "Practical application for road verges, embankments and broad areas where hand seeding is inefficient." },
      { title: "Quality control", copy: "Inspection and reporting around preparation, materials, application and establishment." },
    ],
    services: [
      { title: "Erosion control", copy: "Protect exposed soil and manage the damaging movement of surface water.", href: "/services/erosion-control" },
      { title: "Hydroseeding", copy: "Apply seed, mulch and nutrients efficiently across broad or sloping ground.", href: "/services/hydroseeding" },
      { title: "Project support", copy: "Coordinate implementation, inspections, reporting and handover.", href: "/services/project-support" },
    ],
    outcomes: ["Reduced soil loss", "Faster vegetation cover", "Clear inspection records", "Safer project handover"],
  },
  {
    slug: "public-sector",
    name: "Public sector",
    eyebrow: "Counties, institutions and community programmes",
    short: "Clear technical support for public landscapes, rehabilitation work and programmes that need accountable delivery.",
    heroImage: photo.publicSector,
    contextImage: photo.siteAssessment,
    outcomeImage: photo.qualityInspection,
    contextTitle: "Public land needs a plan people can follow.",
    outcomeTitle: "Practical results that can be accounted for.",
    challenge: "Public projects must serve many users, respond to local conditions and show how decisions and resources were managed. We provide defined recommendations, scopes, inspections and practical handover guidance.",
    priorities: [
      { title: "Defined scope", copy: "Clear site needs, deliverables, quantities and responsibilities before implementation begins." },
      { title: "Visible accountability", copy: "Progress checks and reporting that help stakeholders understand what has been completed." },
      { title: "Long-term use", copy: "Solutions that consider public access, local maintenance capacity and future care." },
    ],
    services: [
      { title: "Site assessment", copy: "Build the technical basis for planning, budgeting and procurement.", href: "/services/site-assessment" },
      { title: "Land rehabilitation", copy: "Return useful vegetation to degraded or heavily disturbed public land.", href: "/services/land-rehabilitation" },
      { title: "Project support", copy: "Support coordination, quality inspections, reporting and handover.", href: "/services/project-support" },
    ],
    outcomes: ["Better-informed budgets", "Transparent work stages", "Land suited to public use", "Actionable handover plans"],
  },
  {
    slug: "agriculture-conservation",
    name: "Agriculture & conservation",
    eyebrow: "Soil protection, revegetation and resilient land use",
    short: "Site-specific support for protecting soil, restoring vegetation and improving the resilience of working land.",
    heroImage: photo.agricultureConservation,
    contextImage: photo.soilSample,
    outcomeImage: photo.landRehabilitation,
    contextTitle: "Protecting the soil starts with understanding it.",
    outcomeTitle: "Healthier cover with a realistic care plan.",
    challenge: "Productive and conservation land depend on healthy soil, controlled water movement and appropriate vegetation. We help identify vulnerable areas and plan realistic protection or restoration work.",
    priorities: [
      { title: "Protect the soil", copy: "Reduce bare ground, runoff and continuing loss of valuable topsoil." },
      { title: "Restore cover", copy: "Choose establishment methods and vegetation suited to conditions and the intended land use." },
      { title: "Work with the site", copy: "Recommendations based on terrain, water, access, climate and ongoing management." },
    ],
    services: [
      { title: "Land rehabilitation", copy: "Rebuild stable vegetation on bare, compacted or degraded areas.", href: "/services/land-rehabilitation" },
      { title: "Erosion control", copy: "Address soil loss and vulnerable slopes with combined practical methods.", href: "/services/erosion-control" },
      { title: "Site assessment", copy: "Identify site limitations and the best next step before implementation.", href: "/services/site-assessment" },
    ],
    outcomes: ["Protected topsoil", "Improved vegetation cover", "Reduced runoff damage", "A realistic care programme"],
  },
];

export const getIndustry = (slug: string) => industries.find((industry) => industry.slug === slug);
