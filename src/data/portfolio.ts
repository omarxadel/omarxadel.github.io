export type PortfolioProduct = {
  name: string;
  description: string;
  href?: string;
};

export type Portfolio = {
  parentName: string;
  parentBlurb: string;
  parentHref?: string;
  products: PortfolioProduct[];
  mrr: string;
};

const portfolio: Portfolio = {
  parentName: "Bolder",
  parentHref: "https://bolder.services",
  parentBlurb:
    "Bolder is the studio I run with a small team. Every product is an opinionated bet on where applied AI is going next.",
  products: [
    {
      name: "Bolder.fit",
      description:
        "AI-native fitness coaching.",
      href: "https://bolder.fit",
    },
    {
      name: "Scailor",
      description:
        "Marketing strategy agent.",
    },
    {
      name: "BEval Studio",
      description:
        "An evaluation workbench for AI teams.",
    },
  ],
  mrr: "~$250",
};

export default portfolio;
