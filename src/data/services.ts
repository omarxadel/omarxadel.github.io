export type Service = {
  icon: "data" | "eval" | "agents" | "research";
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: "data",
    title: "Post-Training Data Strategy",
    description:
      "From sourcing and curation to SFT, preference data and red-teaming sets — built around the eval surface that actually moves your metrics.",
  },
  {
    icon: "eval",
    title: "Evaluation Systems & Benchmarking",
    description:
      "Custom evals, LLM-as-judge harnesses and regression suites so every model and prompt change has a number attached before it ships.",
  },
  {
    icon: "agents",
    title: "Grounded AI Agents",
    description:
      "Retrieval, tool-use and multi-step agents wired to your data and observable end-to-end — not demos, systems your team can operate.",
  },
  {
    icon: "research",
    title: "Applied Research Advisory",
    description:
      "Embedded with your team to translate the latest research into roadmaps, prototypes and architectures that survive production.",
  },
];

export default services;
