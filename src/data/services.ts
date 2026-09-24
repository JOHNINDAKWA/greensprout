import { photo } from "@/data/image-library";

export type Service = {
  slug: string;
  name: string;
  short: string;
  definition: string;
  explanation: string[];
  idealFor: string[];
  benefits: string[];
  process: { title: string; copy: string }[];
  heroImage: string;
  gallery: string[];
  idealImages: string[];
  processImages: string[];
};

export const services: Service[] = [
  {
    slug: "hydroseeding", name: "Hydroseeding", short: "A modern way to plant grass quickly and evenly using a sprayed mixture of seed, water, mulch and nutrients.",
    definition: "Hydroseeding uses specialised equipment to spray a carefully prepared mixture onto the soil. The mulch helps hold moisture around the seed, supports germination and gives large or difficult areas more even coverage than planting by hand.",
    explanation: ["The mixture is prepared for the specific site rather than treated as a one-formula solution. We consider the intended use, local conditions, grass variety, soil condition and the amount of care the new lawn can receive.", "Once the ground is ready, the mixture is sprayed in an even layer. The mulch helps keep seed in contact with the soil and retain moisture during germination. With reliable watering and early care, the seed develops into a natural lawn rooted in the existing soil.", "Hydroseeding is especially useful where hand sowing would be slow or uneven, but it is not a shortcut around good preparation. Drainage, soil quality, watering and maintenance still determine the final result."],
    idealFor: ["New residential lawns", "Estates, schools and hotels", "Road verges and embankments", "Large commercial grounds", "Sloping or hard-to-reach areas", "Land that needs fast vegetation cover"],
    benefits: ["Faster coverage of large areas", "More even seed distribution", "Grass varieties selected for the site", "Mulch helps retain moisture", "Suitable for flat land and slopes", "Less labour than traditional hand seeding"],
    process: [{title:"Site visit",copy:"We inspect the soil, slope, drainage, access and size."},{title:"Soil preparation",copy:"The ground is cleared, loosened and improved where necessary."},{title:"Mix preparation",copy:"Seed, water, mulch, fertiliser and approved additives are mixed."},{title:"Application",copy:"The mixture is sprayed evenly over the prepared surface."},{title:"Watering",copy:"A watering schedule supports germination and early growth."},{title:"Follow-up",copy:"We review coverage and advise on mowing, feeding and repairs."}],
    heroImage: photo.hydroHero, gallery: [photo.hydroMachine, photo.hydroApplication, photo.hydroSlope],
    idealImages: [photo.landscapeEstate, photo.publicGrounds, photo.hydroSlope, photo.landscapeEstate, photo.hydroSlope, photo.roadsideRevegetation],
    processImages: [photo.siteAssessment, photo.soilPreparation, photo.hydroMachine, photo.hydroApplication, photo.aftercareIrrigation, photo.qualityInspection]
  },
  {
    slug: "erosion-control", name: "Erosion control", short: "Practical methods that protect exposed soil and slopes from being washed away by rain and runoff.",
    definition: "Erosion control starts by understanding where water comes from, how it moves and which areas are losing soil. We then recommend vegetation, matting, drainage support or a combination suited to the risk and budget.",
    explanation: ["We trace the movement of rainwater and runoff before recommending a treatment. This helps address the cause of soil loss instead of covering only the visible damage.", "Depending on the slope and risk, the answer may include grass establishment, erosion-control blankets, surface-water guidance, soil reshaping or several methods working together.", "The goal is a stable surface that can withstand local weather, protect nearby property and become easier to maintain over time."],
    idealFor: ["Road embankments", "Construction sites", "Steep residential compounds", "Drainage channels", "River and water edges", "Bare soil exposed to heavy rain"],
    benefits: ["Reduces soil loss", "Protects slopes and nearby property", "Slows damaging surface runoff", "Supports vegetation establishment", "Improves the appearance of disturbed areas", "Can combine natural and structural methods"],
    process: [{title:"Inspect",copy:"We identify erosion signs, slope conditions and water paths."},{title:"Measure risk",copy:"We assess severity, soil type and areas needing urgent protection."},{title:"Design",copy:"We select suitable control and vegetation methods."},{title:"Prepare",copy:"The slope and drainage paths are prepared safely."},{title:"Install",copy:"The agreed erosion-control materials are installed."},{title:"Monitor",copy:"We check performance after rainfall and vegetation growth."}],
    heroImage: photo.erosionRunoff, gallery: [photo.erosionRunoff, photo.erosionMatting, photo.roadsideRevegetation],
    idealImages: [photo.erosionMatting, photo.erosionRunoff, photo.erosionRunoff, photo.erosionMatting, photo.erosionRunoff, photo.erosionRunoff],
    processImages: [photo.erosionRunoff, photo.siteAssessment, photo.projectPlanning, photo.soilPreparation, photo.erosionMatting, photo.qualityInspection]
  },
  {
    slug: "landscape-establishment", name: "Landscape establishment", short: "Complete support for turning prepared ground into healthy, attractive and maintainable green space.",
    definition: "Landscape establishment covers the practical work required to create a new green area—from understanding the intended use to soil preparation, grass selection, installation and early maintenance.",
    explanation: ["A successful landscape begins with how the space will be used. A family lawn, school field, hotel garden and commercial compound do not need the same grass, finish or maintenance plan.", "We connect the site assessment, soil preparation, species selection, quantities, installation and early care so the work follows one clear plan.", "This approach gives the client a landscape that looks considered, suits the site and has a realistic path to healthy establishment."],
    idealFor: ["Homes and estates", "Schools and institutions", "Hotels and resorts", "Office compounds", "Public recreation areas", "New developments"],
    benefits: ["A coordinated plan from soil to maintenance", "Grass suited to use and local conditions", "Clear quantities and budget", "Better early establishment", "Practical maintenance guidance", "One accountable support team"],
    process: [{title:"Brief",copy:"We agree on use, appearance, budget and timing."},{title:"Assess",copy:"We inspect soil, drainage, sunlight and access."},{title:"Plan",copy:"We prepare the method, quantities and work schedule."},{title:"Prepare",copy:"Ground and soil improvements are completed."},{title:"Establish",copy:"Grass and other agreed vegetation are installed."},{title:"Maintain",copy:"Watering, mowing and feeding are guided during establishment."}],
    heroImage: photo.landscapeEstate, gallery: [photo.soilPreparation, photo.landscapeEstate, photo.aftercareIrrigation],
    idealImages: [photo.landscapeEstate, photo.publicGrounds, photo.landscapeEstate, photo.landscapeEstate, photo.publicSector, photo.landscapeEstate],
    processImages: [photo.projectCoordination, photo.siteAssessment, photo.projectPlanning, photo.soilPreparation, photo.hydroApplication, photo.aftercareIrrigation]
  },
  {
    slug: "land-rehabilitation", name: "Land rehabilitation", short: "Restore useful vegetation to bare, degraded or heavily disturbed land.",
    definition: "Land rehabilitation helps damaged ground recover enough structure, protection and vegetation to become stable and useful again. The response depends on why the land was disturbed and what it should support afterwards.",
    explanation: ["We first establish what damaged the land—such as construction, compaction, erosion, excavation or loss of topsoil—and what the restored site needs to become.", "The work can include reshaping, loosening compacted areas, rebuilding soil condition, managing water and establishing suitable vegetation in practical stages.", "Rehabilitation is measured by more than appearance. The restored surface should be safer, more stable and maintainable for its intended future use."],
    idealFor: ["Construction spoil areas", "Quarries and borrow pits", "Degraded public land", "Industrial sites", "Cleared or compacted ground", "Conservation and restoration work"],
    benefits: ["Returns protective vegetation cover", "Reduces dust and erosion", "Improves soil condition", "Supports safer site closure", "Creates a practical maintenance path", "Can be delivered in stages"],
    process: [{title:"Understand damage",copy:"We identify compaction, erosion and soil limitations."},{title:"Set an outcome",copy:"We agree on the future use and required vegetation."},{title:"Repair ground",copy:"Shaping and soil improvement are planned."},{title:"Select plants",copy:"Suitable grasses and other species are chosen."},{title:"Establish cover",copy:"The approved revegetation method is implemented."},{title:"Review recovery",copy:"Growth, erosion and maintenance needs are monitored."}],
    heroImage: photo.landRehabilitation, gallery: [photo.erosionRunoff, photo.landRehabilitation, photo.agricultureConservation],
    idealImages: [photo.landRehabilitation, photo.landRehabilitation, photo.agricultureConservation, photo.projectCoordination, photo.erosionRunoff, photo.agricultureConservation],
    processImages: [photo.erosionRunoff, photo.siteAssessment, photo.soilPreparation, photo.agricultureConservation, photo.landRehabilitation, photo.qualityInspection]
  },
  {
    slug: "site-assessment", name: "Site assessment", short: "A technical visit that identifies the conditions, risks and information needed before choosing a solution.",
    definition: "A site assessment replaces assumptions with practical information. We look at the terrain, soil, drainage, access, current vegetation, approximate area and intended outcome, then explain what should happen next.",
    explanation: ["The visit gives us a reliable picture of the site before money is committed to materials or contractors. We listen to the client, walk the land and record the conditions that will influence delivery.", "We look for practical constraints such as poor access, steep slopes, compacted soil, drainage problems, unreliable water or a mismatch between the desired result and the available maintenance.", "You receive clear recommendations and next steps that can guide budgeting, technical planning and conversations with the people who will carry out the work."],
    idealFor: ["Clients unsure which service they need", "Large or complex sites", "Sloping land", "Projects preparing budgets", "Sites with previous establishment failure", "Contractors needing technical direction"],
    benefits: ["Clearer project decisions", "Early identification of site risks", "More accurate quantities and budget", "Reduced chance of choosing the wrong method", "A written basis for contractor discussions", "Defined next steps"],
    process: [{title:"Client brief",copy:"We understand the problem and expected result."},{title:"Site walk",copy:"We inspect terrain, soil, water and access."},{title:"Measurements",copy:"We record the approximate area and important levels."},{title:"Analysis",copy:"We compare suitable methods and constraints."},{title:"Recommendation",copy:"We explain the proposed solution and priorities."},{title:"Report",copy:"The agreed assessment output is shared with the client."}],
    heroImage: photo.siteAssessment, gallery: [photo.siteAssessment, photo.soilSample, photo.erosionRunoff],
    idealImages: [photo.siteAssessment, photo.siteAssessment, photo.erosionRunoff, photo.projectCoordination, photo.soilSample, photo.siteAssessment],
    processImages: [photo.projectCoordination, photo.siteAssessment, photo.soilSample, photo.projectPlanning, photo.siteAssessment, photo.qualityInspection]
  },
  {
    slug: "project-support", name: "Project support", short: "Planning, coordination, supervision and quality checks that help landscape work follow the agreed plan.",
    definition: "GreenSprout can remain involved after the recommendation. We help organise the work, clarify responsibilities, coordinate suppliers or contractors, inspect progress and guide handover and early maintenance.",
    explanation: ["Project support closes the gap between a good recommendation and correct work on the ground. We define activities, responsibilities, quality expectations and the decisions needed from the client.", "During implementation, we coordinate the relevant parties, inspect important stages and flag problems while they can still be corrected.", "At completion, we help verify the agreed scope, record outstanding items and give the client a clear handover and maintenance direction."],
    idealFor: ["Clients without an internal technical team", "Commercial developments", "Schools and institutions", "County and public projects", "Multi-contractor projects", "Work needing independent quality checks"],
    benefits: ["Clear work plan and responsibilities", "Better communication between parties", "Problems identified earlier", "Progress and inspection records", "Quality checked against the agreed scope", "Organised handover and maintenance guidance"],
    process: [{title:"Confirm scope",copy:"We agree on our role and project deliverables."},{title:"Prepare plan",copy:"Activities, timing and responsibilities are set."},{title:"Coordinate",copy:"Suppliers, contractors and client decisions are aligned."},{title:"Supervise",copy:"Important work stages are inspected."},{title:"Report",copy:"Progress, risks and corrective actions are communicated."},{title:"Hand over",copy:"Final checks and maintenance guidance are completed."}],
    heroImage: photo.projectCoordination, gallery: [photo.projectCoordination, photo.qualityInspection, photo.publicGrounds],
    idealImages: [photo.projectCoordination, photo.projectCoordination, photo.publicGrounds, photo.publicSector, photo.qualityInspection, photo.qualityInspection],
    processImages: [photo.projectCoordination, photo.projectPlanning, photo.projectCoordination, photo.qualityInspection, photo.qualityInspection, photo.landscapeEstate]
  },
];

export const getService = (slug: string) => services.find((service) => service.slug === slug);
