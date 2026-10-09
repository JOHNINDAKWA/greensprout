# GreenSprout lawn services patch

This overlay updates the current GreenSprout project with two service pages: Lawn Care & Maintenance, and Sod Installation & Landscaping. The pages use generated illustrative images, clearly labelled concept before/after comparisons, and attributed third-party YouTube demonstrations. They request site-specific quotations; no unconfirmed rate card is published.

Eco-Mulching is disabled and removed from navigation, services, forms and the build. Hydroseeding, erosion control, landscape establishment and land rehabilitation are marked Coming soon. The current site assessment and project support pages remain available.

After extracting the overlay, delete the old `src/components/services/eco-mulching-page.tsx` and `public/images/eco-mulching` directory if they exist in an earlier installation. The installer command provided with this patch does that cleanup.

All six images in `public/images/lawn-services` are generated visual concepts, not documented GreenSprout work. The independent video demonstrations may show equipment GreenSprout does not own or use. Replace these assets with verified project photography and footage when real work is available.

Verification: `npm run lint` and `next build --webpack` completed successfully in the patch project.
