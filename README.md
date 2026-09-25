# GreenSprout Hydroseeding Website · Phase 11

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

## Phase 11 includes

- Navigation returns when scrolling up after the opening section (or one screen on long forms), and hides on the next downward scroll
- Desktop and mobile behavior preserves the square action tiles and the tall quote tile
- Reduced-motion preference respected for the header transition

## Phase 10 revision

- Square, flush navbar phone and WhatsApp tiles; tall quote tile hangs below the bar
- Rounded green WhatsApp mark inside the square white tile on desktop and mobile
- New document and pen icon with “Start a quote” on the quote tile
- White, high-contrast action buttons on dark hero and image sections

## Phase 10 includes

- Navbar phone and WhatsApp actions styled after the supplied icons, with a direct call link
- Coordinated Get a Quote action beside them and responsive icon treatments
- Deeper, quieter forest backgrounds and a soft sage accent throughout pages and social preview cards

## Phase 9 includes

- Page-specific titles, descriptions, canonical URLs, Open Graph and large social preview cards
- Sitemap, robots rules and organisation structured data
- Working WhatsApp, LinkedIn, Facebook, native share and copy-link actions in the footer and on guide pages
- Solutions navigation opens the Services overview directly

## Phase 8 includes

- Route arrival animation and a short destination label when opening another page
- Contact starts with direct call, WhatsApp and email options
- Guides & Advice starts with the reading list heading and article cards
- Services and Industries overview heroes have accessible scroll links to their listings
- Reduced-motion users receive the pages without animations

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

Set the public URL before building or deploying. Copy `.env.example` to `.env.local` and replace its value with the exact HTTPS origin of this GreenSprout website, without a path or trailing slash:

```env
NEXT_PUBLIC_SITE_URL=https://your-actual-domain.example
```

Run `npm run build` again after changing the value. The canonical links, social preview image URLs, sitemap and `robots.txt` are generated from it. Without a configured public URL, local development uses `http://localhost:3000` and the site tells search engines not to index it. WhatsApp and social crawlers can show previews only after the site and its share image are publicly reachable. Do not use `greensprout.com` as a default; it belongs to an unrelated business.

Replace the placeholder social links before launch. Review the Privacy and Terms text against GreenSprout's actual email retention, hosting, and business processes before publishing the site.

## Brand assets

The current full GreenSprout logo is stored in `public/brand`. A simplified
horizontal or white navbar mark may be added later if the full emblem becomes
too detailed at navigation size.

## Images

The 19 Phase 7 images are illustrative scenes generated for this design. They are stored in `public/images/phase7` and mapped in `src/data/image-library.ts`. See [IMAGE-SOURCES.md](IMAGE-SOURCES.md) for subject, use and provenance. New field photographs can be substituted there as GreenSprout documents its work.

Images are delivered locally without Next.js optimisation. Refresh the browser if an updated image appears cached. The previous stock image files are no longer used in the page code.
