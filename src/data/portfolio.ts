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
  parentHref: "https://bolder.fit",
  parentBlurb:
    "Bolder is the studio I run with a small team — we build and ship our own AI products end to end, from research and post-training through to product, distribution and revenue. Every product is an opinionated bet on where applied AI is going next.",
  products: [
    {
      name: "Bolder.fit",
      description:
        "AI-native fitness coaching — programs, nutrition and feedback grounded in real user data.",
      href: "https://bolder.fit",
    },
    {
      name: "Scailor",
      description:
        "Sales agent infra for SMBs — outbound that learns from every reply and books real meetings.",
    },
    {
      name: "BEval Studio",
      description:
        "An evaluation workbench for AI teams — author, run and compare evals without rebuilding the harness each time.",
    },
  ],
  mrr: "$—k MRR",
};

export default portfolio;
