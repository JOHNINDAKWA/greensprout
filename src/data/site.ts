export type NavChild = { title: string; description: string; href: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/services", children: [
    { title: "Lawn Care & Maintenance", description: "Professional mowing for established lawns and larger grounds.", href: "/services/lawn-care-maintenance" },
    { title: "Sod Installation & Landscaping", description: "Traditional natural turf and prepared landscapes.", href: "/services/sod-installation-landscaping" },
    { title: "Hydroseeding · Coming soon", description: "A future method for large or difficult grass establishment.", href: "/services/hydroseeding" },
    { title: "Erosion control · Coming soon", description: "Future slope and exposed-soil protection.", href: "/services/erosion-control" },
    { title: "Land rehabilitation · Coming soon", description: "Future revegetation work on disturbed land.", href: "/services/land-rehabilitation" },
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
  { label: "Investors", href: "/investors" },
  { label: "Contact", href: "/contact" },
];

export const footerGroups = [
  { title: "What we do", links: ["Lawn Care & Maintenance", "Sod Installation & Landscaping", "Site assessment", "Hydroseeding · Coming soon"] },
  { title: "Consulting", links: ["Consultation", "Site assessment", "Bronze package", "Silver package", "Gold package"] },
  { title: "Explore", links: ["Home", "Industries", "Guides & Advice", "Get a quote", "About GreenSprout", "Investors", "Contact"] },
];
