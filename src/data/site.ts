export type NavChild = { title: string; description: string; href: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/services", children: [
    { title: "Hydroseeding", description: "A modern, even way to plant grass on lawns, large areas and slopes.", href: "/services/hydroseeding" },
    { title: "Erosion control", description: "Protect exposed soil and slopes from damage caused by rain and runoff.", href: "/services/erosion-control" },
    { title: "Land rehabilitation", description: "Bring grass and other vegetation back to bare or damaged land.", href: "/services/land-rehabilitation" },
    { title: "Landscape establishment", description: "Plan, prepare and grow healthy green spaces that are easier to maintain.", href: "/services/landscape-establishment" },
  ]},
  { label: "Industries", href: "/industries", children: [
    { title: "Property & hospitality", description: "Estates, resorts, schools and commercial landscapes.", href: "/industries/property-hospitality" },
    { title: "Infrastructure", description: "Roads, embankments and large-scale development sites.", href: "/industries/infrastructure" },
    { title: "Public sector", description: "Counties, institutions and community land programmes.", href: "/industries/public-sector" },
    { title: "Agriculture & conservation", description: "Soil protection, revegetation and resilient land use.", href: "/industries/agriculture-conservation" },
  ]},
  { label: "Consulting", href: "/consulting" },
  { label: "Guides & Advice", href: "/guides" },
  { label: "About", href: "/about" },
];

export const footerGroups = [
  { title: "What we do", links: ["Hydroseeding", "Erosion control", "Landscape establishment", "Land rehabilitation"] },
  { title: "Consulting", links: ["Consultation", "Site assessment", "Bronze package", "Silver package", "Gold package"] },
  { title: "Explore", links: ["Home", "Industries", "Guides & Advice", "Get a quote", "About GreenSprout", "Contact"] },
];
