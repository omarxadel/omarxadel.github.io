type Social = {
  label: string;
  link: string;
  icon: "linkedin" | "medium" | "resume" | "github" | "huggingface";
  iconSrc?: string;
};

type Presentation = {
  mail: string;
  status: { emoji: string; label: string };
  roles: string[];
  headline: string;
  subhead?: string;
  cta: { label: string; href: string };
  profile: string;
  navLinks: Social[];
};

const presentation: Presentation = {
  mail: "omarxadel21@gmail.com",
  status: { emoji: "🔒", label: "locked-in" },
  roles: ["AI Engineer", "Founder", "Data Strategy"],
  headline:
    "Enabling enterprises with post-training data strategy and grounded AI agents.",
  subhead:
    "I enable research and product teams across enterprise to turn applied AI into systems that ship.",
  cta: { label: "See resume", href: "/resume.pdf" },
  profile: "/profile.webp",
  navLinks: [
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/omarxadel/",
      icon: "linkedin",
    },
    {
      label: "Medium",
      link: "https://medium.com/@omarxadel",
      icon: "medium",
    },
    {
      label: "Resume",
      link: "/resume.pdf",
      icon: "resume",
    },
    {
      label: "GitHub",
      link: "https://github.com/omarxadel",
      icon: "github",
    },
    {
      label: "HuggingFace",
      link: "https://huggingface.co/omarxadel",
      icon: "huggingface",
      iconSrc: "/companies/huggingface.svg",
    },
  ],
};

export default presentation;
