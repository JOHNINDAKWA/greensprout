# Phase 7 image inventory

The 19 images in `public/images/phase7/` were created for this website with OpenAI's image generation tool, then converted to WebP for local delivery. They are illustrative concept images. They do **not** show GreenSprout's actual team, equipment, past projects, or verified client locations. The site's Website terms state this plainly. Replace them with authorised field photographs when those become available.

The generation brief called for documentary-style, Kenyan-context land work, realistic equipment and methods, natural lighting, no logos or embedded lettering, and room for overlaid page copy. The hydroseeding prompts specifically described a mixing tank, pump, hose reel and an operator spraying a green seed-and-mulch slurry across prepared soil, including a separate slope application. The erosion-control prompts distinguished exposed runoff from coir matting installation and established roadside vegetation. Other prompts matched soil sampling, grading, planting, watering, inspection, project planning, farm conservation, school grounds and finished landscaping.

The Phase 7 machine scenes were revised to match the user-provided VORTEC VX2000 photographs and GreenSprout investment brief, which identifies it as the preferred launch machine. The visuals are still conceptual; they do not assert that GreenSprout has purchased or used this specific machine. The earlier research into hydroseeding operation included these manufacturer descriptions:

- https://www.finncorp.com/hydroseeding/how-to-use-a-hydroseeder/
- https://www.finncorp.com/hydroseeders/

These links supplied technical reference only; no manufacturer imagery or branding was copied into the project. We also reviewed commercially usable photo options, but did not incorporate any newly downloaded third-party image into this phase. The earlier generic photographs are no longer referenced by the site.

| File | Subject | Main use |
| --- | --- | --- |
| `hydroseeding-hero.webp` | Worker spraying slurry beside orange VX2000-style trailer | Home and hydroseeding hero |
| `hydroseeder-equipment.webp` | Orange trailer-mounted tank, pump and hose reel | Hydroseeding guide and mixing stage |
| `hydroseeding-application.webp` | Slurry sprayed over prepared ground by orange trailer | Service cards and application stage |
| `hydroseeding-slope.webp` | Hydroseeding a roadside embankment | Slope guide and infrastructure use |
| `erosion-runoff.webp` | Bare slope with rainwater erosion | Erosion-control hero and guide |
| `erosion-matting.webp` | Workers installing coir on a slope | Erosion-control service and industry context |
| `site-assessment.webp` | Soil and ground inspection | Site assessment and consulting |
| `soil-sample-detail.webp` | Soil core and field notes | Soil testing and relevant guide |
| `soil-preparation.webp` | Workers preparing topsoil | Landscaping and preparation stage |
| `project-coordination.webp` | Team with plans at an active worksite | Project coordination |
| `quality-inspection.webp` | Inspector records roadside grass coverage by drainage channel | Inspection and handover |
| `landscape-estate.webp` | Maintained grounds around a property | Hospitality and landscape establishment |
| `land-rehabilitation.webp` | Revegetating disturbed ground | Land rehabilitation |
| `aftercare-irrigation.webp` | Sprinkler watering young grass | Aftercare and establishment |
| `public-grounds.webp` | Established school grounds | Institutions and schools |
| `public-sector-landscape.webp` | Community civic green | County and public-sector spaces |
| `project-planning.webp` | Consultant marking a site plan and quantities | Planning and budgets |
| `roadside-revegetation.webp` | Protected vegetated roadside | Infrastructure outcome |
| `agriculture-conservation.webp` | Contour grass on farmland | Agriculture and conservation |

The central mapping is in `src/data/image-library.ts`. Service page image arrays in `src/data/services.ts` select images for specific use cases and process steps.
