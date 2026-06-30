type Social = {
  label: string;
  link: string;
  icon: "linkedin" | "medium" | "resume" | "github" | "huggingface";
};

type Presentation = {
  mail: string;
  status: { emoji: string; label: string };
  headline: string;
  subhead?: string;
  cta: { label: string; href: string };
  profile: string;
  navLinks: Social[];
};

const presentation: Presentation = {
  mail: "omarxadel21@gmail.com",
  status: { emoji: "🔒", label: "locked-in" },
  headline:
    "Enabling enterprises with post-training data strategy and grounded AI agents.",
  subhead:
    "AI engineer & founder. I help applied teams ship reliable, evaluated, production-grade AI.",
  cta: { label: "Learn more", href: "#services" },
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
    },
  ],
};

export default presentation;
