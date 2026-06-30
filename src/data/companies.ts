export type Company = {
  name: string;
  href?: string;
  logo?: string;
  logoDark?: string;
  /**
   * Which background the bare `logo` was authored for. Drives auto-inversion
   * in the opposite theme. Defaults to "dark" (i.e. a white/light logo meant
   * to sit on a dark band, inverted to appear in light mode).
   * Ignored when `logoDark` is provided — that pair is used as-is.
   */
  tone?: "light" | "dark";
};

const companies: Company[] = [
  { name: "Pleny", href: "https://pleny.com", logo: "/companies/pleny.svg", tone: "dark" },
  { name: "Nclip", href: "https://nclip.com", logo: "/companies/nclip.svg", tone: "light" },
  { name: "Turing", href: "https://www.turing.com", logo: "/companies/turing.svg", tone: "dark" },
  { name: "Bolder", href: "https://bolder.services", logo: "/companies/bolder.svg", tone: "light" },
];

export default companies;
