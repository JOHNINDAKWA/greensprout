import { photo } from "@/data/image-library";
export type Guide = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  category: string;
  readTime: string;
  intro: string;
  sections: { heading: string; paragraphs: string[] }[];
  sources?: { title: string; url: string }[];
};

export const guides: Guide[] = [
  {
    slug: "what-makes-hydroseeding-successful", title: "What makes hydroseeding successful?", category: "Growing grass", readTime: "5 min read", image: photo.hydroMachine,
    summary: "The conditions to check before, during and after grass is sprayed onto the ground.",
    intro: "Hydroseeding applies seed, mulch and other specified materials as a sprayed mixture. The spray is only one part of the work. Good preparation and care afterwards make the difference.",
    sections: [
      { heading: "Start with the ground", paragraphs: ["Check whether the surface is compacted, bare, eroding or poorly drained. Seed needs suitable soil contact and conditions to grow. Spraying onto an unprepared surface will not repair the underlying problem.", "The site assessment should also consider slope, access, water supply and how the area will be used."] },
      { heading: "Choose seed for the place and purpose", paragraphs: ["Grass that suits a home lawn may not suit an exposed roadside or a heavily used sports area. Climate, sunlight, maintenance and seed availability all influence the choice.", "Ask what the proposed mix contains and why it suits your site before approving the work."] },
      { heading: "Plan for water and aftercare", paragraphs: ["Freshly applied seed and emerging grass need consistent care. Agree who will water, monitor and protect the area while it establishes. Avoid heavy use until the vegetation is ready.", "A good quotation should explain site preparation, the application scope and any agreed follow-up rather than promise an instant finished lawn."] },
    ],
  },
  {
    slug: "when-does-a-slope-need-erosion-control", title: "When does a slope need erosion control?", category: "Protecting soil", readTime: "4 min read", image: photo.erosionRunoff,
    summary: "Warning signs to look for on slopes, embankments and disturbed ground.",
    intro: "A slope can lose soil before grass has time to establish. Spotting the signs early helps you choose the right protection for the ground.",
    sections: [
      { heading: "Look for water paths and moving soil", paragraphs: ["Small channels, exposed roots, sediment at the bottom of a slope and muddy runoff after rain are useful warning signs. A steep surface with little vegetation may be vulnerable even before visible damage appears.", "Where water is concentrated, the flow itself may need to be addressed before planting."] },
      { heading: "Match protection to the site", paragraphs: ["Slope angle, soil type, rainfall, drainage and intended use affect the solution. Depending on the site, work may combine grading, drainage measures, temporary protection and vegetation establishment.", "A site visit is especially valuable where erosion threatens a road, building, watercourse or neighbouring property."] },
      { heading: "Check the plan after rain", paragraphs: ["Inspect the area during the establishment period and after significant rainfall. Early repairs are easier than rebuilding a badly damaged slope.", "Ask who is responsible for watering, inspections and follow-up when reviewing a proposal."] },
    ],
  },
  {
    slug: "prepare-soil-before-growing-grass", title: "How to prepare soil before growing grass", category: "Site preparation", readTime: "4 min read", image: photo.soilPreparation,
    summary: "A plain-language look at the ground work that supports a healthier lawn or landscape.",
    intro: "Healthy grass begins beneath the surface. Before choosing seed or turf, make sure the ground can support the result you want.",
    sections: [
      { heading: "Understand what is there now", paragraphs: ["Note compacted areas, rubble, weeds, standing water and places where topsoil has been removed. Existing problems can affect how evenly the grass grows.", "A quick photo record helps explain the site to a contractor or consultant."] },
      { heading: "Prepare for the intended use", paragraphs: ["Ground preparation may include clearing debris, improving levels, loosening compacted soil, addressing drainage and providing a suitable growing layer. The right steps depend on the site rather than a fixed recipe.", "Confirm where water will come from during establishment before installation begins."] },
      { heading: "Agree on the full scope", paragraphs: ["When comparing quotations, ask whether clearing, soil work, seed or grass supply, installation, watering guidance and follow-up are included. A low installation price can leave essential preparation to the client.", "A site assessment can help define these responsibilities clearly."] },
    ],
  },
  {
    slug: "hydroseeding-or-turf", title: "Hydroseeding or turf: which suits your site?", category: "Choosing a method", readTime: "5 min read", image: photo.landscapeEstate,
    summary: "A practical comparison when you need a lawn, a green space or cover on a difficult site.",
    intro: "Both hydroseeding and laid turf can create a grassed area. The useful question is how soon you need visible cover, how large the site is and what care you can provide after installation.",
    sections: [
      { heading: "The difference you see first", paragraphs: ["Turf arrives as grown grass and gives an immediate green surface, although it still needs time and care to root into the soil below. Hydroseeding applies a seed and mulch mixture to prepared ground. You see the application immediately, but the grass grows over the following weeks and months.", "If the area must look green for an opening date, turf may be attractive. If the site is broad, irregular or difficult to reach, hydroseeding may be easier to apply across it."] },
      { heading: "Preparation and water matter either way", paragraphs: ["Neither method fixes poor drainage, rubble, severe compaction or the wrong levels on its own. The soil must be prepared for the intended finish, and there must be a realistic water plan during establishment.", "Turf needs good contact with the prepared soil and careful early irrigation. Hydroseeded seed needs moisture while it germinates and develops roots. The amount and timing depend on the weather, soil and grass selected."] },
      { heading: "Compare the complete project", paragraphs: ["Ask for a quotation that separates clearing, soil preparation, material supply, installation and aftercare. The cheapest installation price may omit the work that determines whether the lawn succeeds.", "Where immediate erosion protection is essential, a separate temporary protection measure may be needed while seeded vegetation grows. A site visit can help decide whether turf, hydroseeding or a combination is sensible."] },
    ],
    sources: [{ title: "University of Massachusetts: Turf establishment and renovation", url: "https://www.umass.edu/agriculture-food-environment/book/export/html/24556" }, { title: "University of California: Hydroseeding", url: "https://ipm.ucanr.edu/TOOLS/TURF/SITEPREP/hydrosd.html" }],
  },
  {
    slug: "how-long-does-hydroseeding-take", title: "How long does hydroseeding take to become a lawn?", category: "Growing grass", readTime: "5 min read", image: photo.aftercareIrrigation,
    summary: "Why a sprayed green surface is only the beginning of grass establishment.",
    intro: "Hydroseeding is a planting method, not an instant lawn. The time between application and a usable grass surface varies too much to promise one date for every site.",
    sections: [
      { heading: "Look for stages, not one deadline", paragraphs: ["After application, seed must absorb water, germinate, emerge and develop roots. Early shoots may appear before the surface is dense enough to use. Germination, coverage and a hard-wearing lawn are separate milestones.", "The seed type, temperature, moisture, site conditions and season all change the pace. Ask the installer what to expect from the actual mix proposed for your location."] },
      { heading: "What can slow it down?", paragraphs: ["A dry seedbed, irregular watering, heavy rain that moves seed, compacted ground or a poor seed choice can leave thin patches. Deep shade, pedestrian traffic and runoff also need attention in the site plan.", "There may be more than one cause of uneven growth. Photograph the area over time and discuss the pattern with the installer before ordering a second application."] },
      { heading: "Plan when the area can be used", paragraphs: ["If your site is needed for a school term, event or property handover, discuss the required finish and timing before work begins. A newly emerged lawn is still vulnerable to traffic.", "Agree who will water, monitor and protect the area until the planned establishment stage. Your quotation should make the aftercare responsibilities clear."] },
    ],
    sources: [{ title: "University of Massachusetts: Establishment is a process", url: "https://www.umass.edu/agriculture-food-environment/book/export/html/24556" }],
  },
  {
    slug: "first-weeks-after-hydroseeding", title: "The first weeks after hydroseeding: what should you do?", category: "Aftercare", readTime: "5 min read", image: photo.aftercareIrrigation,
    summary: "Simple care habits that help newly applied seed establish without washing away.",
    intro: "The applicator can put seed in the right place. The first weeks of watering, protection and observation determine whether the young grass has a good chance to establish.",
    sections: [
      { heading: "Keep the surface appropriately moist", paragraphs: ["New seed needs reliable moisture to germinate. Light, frequent watering may be needed early on, adjusted to local weather and the soil. Aim to keep the seedbed moist without leaving it soggy or creating runoff that carries material away.", "As roots grow, watering can usually become less frequent and reach deeper into the soil. Ask for an aftercare plan based on the grass mix and your water supply rather than following a fixed schedule copied from another climate."] },
      { heading: "Keep people and vehicles off", paragraphs: ["Avoid walking, parking or storing materials on the freshly treated area. Traffic can disturb the mulch, compact the ground and damage young shoots.", "If the area is open to residents, staff or contractors, mark it clearly and agree who will protect it while the grass develops."] },
      { heading: "Inspect after heavy rain", paragraphs: ["Look for washed-out strips, pooled water or patches where seed and mulch have moved. Take photographs and tell the contractor early so the cause can be addressed, especially if water is concentrated in one place.", "Do not assume every pale or uneven patch needs more seed immediately. Germination may not happen uniformly, and a site inspection is more useful than guessing."] },
    ],
    sources: [{ title: "University of Massachusetts: Moisture and follow-up care", url: "https://www.umass.edu/agriculture-food-environment/book/export/html/24556" }],
  },
  {
    slug: "understanding-hydroseeding-quotation", title: "What should a hydroseeding quotation include?", category: "Project planning", readTime: "5 min read", image: photo.projectPlanning,
    summary: "The questions that make two prices easier to compare before you approve the work.",
    intro: "A useful quotation describes the whole job, not only the price of spraying. It should help you understand what is included, what must happen first and who will care for the site afterwards.",
    sections: [
      { heading: "Define the site and preparation", paragraphs: ["Confirm the location, approximate area, slopes, access and available water. Ask whether clearing, grading, debris removal, soil improvement and drainage work are included or priced separately.", "A contractor cannot quote accurately for a damaged slope or a site with hidden access problems using area alone. Photographs help, but some sites need a visit."] },
      { heading: "Understand the application", paragraphs: ["Ask what seed or vegetation is proposed, why it suits the use and conditions, and what mulch or other materials are in the scope. The method and quantities should be appropriate to the ground and agreed project outcome.", "Check how the site will be protected from runoff before vegetation is established. Hydroseeding by itself may not provide sufficient immediate protection where water concentrates or erosion risk is high."] },
      { heading: "Make responsibilities visible", paragraphs: ["Clarify transport, testing, equipment access, water supply, timing, inspections, defects and aftercare. Ask who will water the area, for how long and what happens if a section needs attention.", "Compare quotations against the same scope. The cheapest application may cost more when essential preparation and maintenance are left out."] },
    ],
    sources: [{ title: "University of California: Hydroseeding method and applications", url: "https://ipm.ucanr.edu/TOOLS/TURF/SITEPREP/hydrosd.html" }, { title: "University of Massachusetts: Site preparation and aftercare", url: "https://www.umass.edu/agriculture-food-environment/book/export/html/24556" }],
  },
  {
    slug: "when-to-test-soil-for-new-grass", title: "When should you test soil before planting grass?", category: "Soil & seed", readTime: "4 min read", image: photo.soilSample,
    summary: "How a soil test can guide choices instead of relying on guesswork.",
    intro: "The surface can look ready while the soil underneath lacks the conditions needed for healthy grass. Testing is especially useful when a project is large, expensive or has failed before.",
    sections: [
      { heading: "What a test can tell you", paragraphs: ["A laboratory soil test can report acidity or alkalinity and key nutrients. Those results help guide amendments and fertilizer decisions rather than applying products by habit.", "The value of a test depends on the question you ask. If drainage, compaction or rubble is the problem, laboratory numbers are only part of the assessment."] },
      { heading: "Take samples that represent the area", paragraphs: ["A site may have distinct zones: imported topsoil, an old lawn, bare fill or a slope. Mixing all of them into one sample can hide an important difference. Ask a qualified person or laboratory how to sample and label each zone.", "Sample before final soil preparation where possible, so there is time to act on the results. Keep a record of where each sample came from."] },
      { heading: "Connect results to a plan", paragraphs: ["A test report is useful only when interpreted for the vegetation you intend to grow and the local site conditions. Ask what, if anything, needs to change before application and whether that work is in the quotation.", "GreenSprout can help coordinate testing as part of an agreed assessment or a separate technical service."] },
    ],
    sources: [{ title: "Purdue Extension: Soil testing before planting", url: "https://extension.purdue.edu/county/marion/anr/soil-testing.html" }, { title: "University of Missouri Extension: Soil testing for lawns", url: "https://extension.missouri.edu/publications/g6954" }],
  },
  {
    slug: "hydroseeding-on-slopes", title: "Can hydroseeding protect a steep slope?", category: "Protecting soil", readTime: "5 min read", image: photo.hydroSlope,
    summary: "How vegetation and immediate erosion protection work together on exposed ground.",
    intro: "Hydroseeding can help establish vegetation on a slope. That does not mean newly applied seed can hold every slope in place from the first day.",
    sections: [
      { heading: "First understand the water", paragraphs: ["Rain moving down an embankment can strip soil and seed before roots develop. Observe where water enters, whether it crosses the face in sheets or channels and where sediment collects below.", "A drainage or earthworks problem should be assessed directly. Seed alone cannot repair an unstable slope or control a concentrated flow path."] },
      { heading: "Use protection while plants establish", paragraphs: ["Depending on gradient, soil and expected rainfall, a plan may include suitable mulch, erosion-control blankets, temporary sediment measures or changes to drainage. The choice should be designed around the site and the level of immediate protection needed.", "Vegetation offers longer-term cover once it has taken hold. Temporary materials help bridge the vulnerable period before that happens."] },
      { heading: "Make inspection part of the job", paragraphs: ["Agree on access for maintenance and inspections after heavy rain. Look for new rills, detached material or blocked drainage and deal with them early.", "A steep slope above infrastructure, buildings or a waterway calls for an on-site technical assessment before selecting a method."] },
    ],
    sources: [{ title: "USDA NRCS: Hydromulching and site-specific design", url: "https://www.nrcs.usda.gov/resources/guides-and-instructions/after-the-fire-hydromulching" }, { title: "USDA NRCS: Seeding needs immediate erosion protection", url: "https://www.nrcs.usda.gov/resources/guides-and-instructions/after-the-fire-seeding" }],
  },
];

export function getGuide(slug: string) { return guides.find(guide => guide.slug === slug); }
