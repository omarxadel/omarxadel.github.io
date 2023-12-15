export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Bug Logger Desktop App",
    techs: ["ReactJS", "ElectronJS"],
    link: "https://github.com/omarxadel/bug-logger",
  },
  {
    title: "Bus Plus",
    techs: ["Java", "JavaFX"],
    link: "https://github.com/omarxadel/bus-plus",
  },
];

export default projects;
