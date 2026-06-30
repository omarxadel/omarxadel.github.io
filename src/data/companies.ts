export type Company = {
  name: string;
  href?: string;
  logo?: string;
  logoDark?: string;
};

const companies: Company[] = [
  { name: "Pleny", href: "https://pleny.com", logo: "/companies/pleny.svg" },
  { name: "Company Two" },
  { name: "Company Three" },
  { name: "Company Four" },
  { name: "Company Five" },
  { name: "Company Six" },
];

export default companies;
