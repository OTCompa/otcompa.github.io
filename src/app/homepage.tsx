import DpsMeter from "@/components/DpsMeter/DpsMeter";
import ScrollArea from "@/components/Layout/ScrollArea";
import ScrollSection from "@/components/Layout/ScrollSection";
import SectionContent from "@/components/Layout/SectionContent";

const projects = [
  {
    name: "NAUR projects",
    url: "https://github.com/naurffxiv",
    description:
      "Various projects related to NAUR, especially the NAUR website and the bots used for it.",
  },
  {
    name: "ZoneFbx",
    url: "https://github.com/OTCompa/ZoneFbx",
    description:
      "A C# rewrite of its namesake, it is a program for extracting maps from FFXIV into .FBX for use within 3D modeling software.",
  },
  {
    name: "John Finalfantasy",
    url: "https://github.com/OTCompa/john-finalfantasy",
    description:
      "A rewrite of the plugin Nomina Occulta by Anna. It is a Dalamud plugin that masks your character's and other party member's names in FFXIV, kind of like a streamer mode.",
  },
];

function Content({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <SectionContent>
      <h1 className="mb-4 text-4xl font-bold">{title}</h1>
      {children}
    </SectionContent>
  );
}

function Projects() {
  return projects.map((project) => (
    <li key={project.name} className="text-lg [&:not(:last-child)]:mb-4">
      <div>
        <h2 className="mb-2 text-2xl font-bold text-white">
          <a href={project.url} className="hover:underline">
            {project.name}
          </a>
        </h2>
        <p className="max-w-[90ch]">{project.description}</p>
      </div>
    </li>
  ));
}

function Homepage() {
  return (
    <ScrollArea>
      <ScrollSection id="dps-meter">
        <DpsMeter />
      </ScrollSection>

      <ScrollSection id="about-me">
        <Content title="About Me">
          <p className="text-lg">
            Hi! I&apos;m Frey. I have 0 idea what else to put here
          </p>
        </Content>
      </ScrollSection>

      <ScrollSection id="projects">
        <Content title="Projects">
          <p className="mb-4 text-lg">
            Here are some of my projects that I&apos;ve worked on.
          </p>
          <ul>
            <Projects />
          </ul>
        </Content>
      </ScrollSection>
    </ScrollArea>
  );
}

export default Homepage;
