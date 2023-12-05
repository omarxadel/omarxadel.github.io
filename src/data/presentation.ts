type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "omarxadel21@gmail.com",
  title: "Hi, I’m Omar 👋",
  // profile: "/profile.webp",
  description:
    "Ahlan, I'm an *Egyptian Software Engineer* based in Alexandria, Egypt. I love working with *NestJS, React and NextJS with TypeScript* for web development. I'm currently pursuing an *MsC in Computer Systems* in Alexandria University.",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/omarxadel",
    },
    {
      label: "HuggingFace",
      link: "https://huggingface.co/omarxadel",
    },
    {
      label: "Github",
      link: "https://github.com/omarxadel",
    },
  ],
};

export default presentation;
