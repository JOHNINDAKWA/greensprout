# GreenSprout Hydroseeding Website · Phase 7

The responsive GreenSprout homepage, global navigation and footer, built with
Next.js App Router, TypeScript and Tailwind CSS.

## Requirements

- Node.js 22 LTS
- npm 10 or newer
- Visual Studio Code (recommended)
- Git (recommended)

## Start locally

```powershell
npm ci
npm run dev
```

Open http://localhost:3000.

## Useful commands

```powershell
npm run dev
npm run lint
npm run build
npm start
```

## Phase 7 includes

- Phase 7 image refinement: four machine scenes now use the supplied orange VX2000-style reference; quality inspection, public sector and project planning have distinct imagery

- 19 local WebP images matched to actual page topics and process steps
- Visible hydroseeding equipment and in-progress application scenes, including slopes
- Contextual visuals across the homepage, services, industries, consulting, guides, About and Contact pages
- A central image mapping and [image source/inventory notes](IMAGE-SOURCES.md)
- Clear terms that generated illustrations do not represent GreenSprout projects or staff

## Phase 6 includes

- Quote page starts with the enquiry context and form; every dropdown uses React Select
- Consulting introduction and industry detail pages pair contextual photography with explanations
- Nine Guides & Advice articles, including six new source-backed guides
- Image-background Guides & Advice call to action
- Privacy notice and website terms, linked from the footer
- Consulting moved to the fourth primary navigation position

## Previous phases include

- Home first in the navigation; Projects removed; Consulting links directly to a complete single page
- Dedicated Consulting page covering consultation, site assessment, packages, project coordination, training and stand-alone work
- Dedicated Get a Quote page with service-specific enquiries and a clear explanation of paid consultation and assessment steps
- Guides & Advice landing page and full articles, linked from the homepage
- New page navigation resets to the top while same-page anchor links retain their target
- Phase 4 services and industry pages

- Manrope typography through `next/font`
- GreenSprout colour and spacing tokens
- Reusable split-arrow button component
- Lucide icon system
- Desktop mega navigation and a 77vw mobile drawer
- Ten-section editorial homepage
- Full responsive footer
- Three-slide homepage hero
- Automatic and manually controlled services carousel
- All photography stored locally in `public/images`
- Seven-step project process
- Embla-powered two-card services carousel
- Complete About page
- Complete Contact page with call, WhatsApp, email and enquiry form options
- Clearer hydroseeding, erosion-control and landscape-establishment explanations
- Image-led mega menus with visible service actions
- Services overview page and six dedicated service pages
- Detailed Hydroseeding education and conversion journey
- React Select enquiry field and branded WhatsApp navigation action
- Image-led About values cards with hover descriptions
- Direct local-image delivery for easier replacements
- Image-led process, industry, capability and knowledge cards
- Official enquiry contacts: 0700 355 113 and info@greensprout.com
- Breakpoints for wide and small laptops, tablets, phones and compact phones
- Keyboard focus and reduced-motion support

## Enquiries and payment

The quotation form opens the visitor's email application with their enquiry prefilled. The visitor must review and send that email; there is no server-side form delivery or storage. Attachments can be added in the email application. No online payment is taken. Confirm the agreed scope, payment method and terms with GreenSprout before enabling checkout or publishing payment instructions.

## Before launch

Replace the placeholder social links before launch. Review the Privacy and Terms text against GreenSprout's actual email retention, hosting, and business processes before publishing the site.

## Brand assets

The current full GreenSprout logo is stored in `public/brand`. A simplified
horizontal or white navbar mark may be added later if the full emblem becomes
too detailed at navigation size.

## Images

The 19 Phase 7 images are illustrative scenes generated for this design. They are stored in `public/images/phase7` and mapped in `src/data/image-library.ts`. See [IMAGE-SOURCES.md](IMAGE-SOURCES.md) for subject, use and provenance. New field photographs can be substituted there as GreenSprout documents its work.

Images are delivered locally without Next.js optimisation. Refresh the browser if an updated image appears cached. The previous stock image files are no longer used in the page code.
