import { Github, ExternalLink } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  githubLink: string;
  demoLink?: string;
  index: number;
}

const ProjectCard = ({
  title,
  description,
  tags,
  githubLink,
  demoLink,
  index,
}: ProjectProps) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`bg-white rounded-xl shadow-sm overflow-hidden card-hover animate-fade-in-delayed-${Math.min(
        index,
        3
      )}`}
    >
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-4">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-5 w-5 mr-2" />
            <span>Code</span>
          </a>

          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink className="h-5 w-5 mr-2" />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "AI-powered Jenkins Chatbot",
      description:
        "A smart chatbot integrated into Jenkins UI that helps users interact with Jenkins using natural language. Built with React, FastAPI, WebSocket, and DistilBERT for NLP, it supports job queries, build info, and more — all in real-time.",
      tags: ["React", "FastAPI", "WebSocket", "DistilBERT", "SQLite", "NLP"],
      githubLink: "https://github.com/singghh/jenkinsChatbotDemo",
      demoLink: "https://jenkinschatbotdemo.onrender.com/",
    },
    {
      title: "Plastic Awareness Platform",
      description:
        "A full-stack web application focused on promoting awareness around plastic pollution. Features include educational content, user engagement tools, and resources to encourage sustainable habits.",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      githubLink: "https://github.com/singghh/Updated-MERN", // replace with your actual repo link
    },
    {
      title: "Buddy Library",
      description:
        "A web-based digital library platform where users can explore, read, and download a wide range of books. Designed for simplicity and accessibility, making reading easy and available to everyone.",
      tags: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/singghh/new-buddy-lib",
    },
    {
      title: "Crypto Tracker",
      description:
        "A frontend web application that fetches real-time cryptocurrency data using the CoinGecko API. Users can track trending coins, view Bitcoin prices in USD and INR, and analyze market trends with a dynamic, real-time chart.",
      tags: ["React", "Tailwind CSS", "CoinGecko API"],
      githubLink: "https://github.com/singghh/React",
    },
  ];

  return (
    <section id="projects" className="section-container bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center">My Projects</h2>
        <p className="mb-6 text-center text-gray-500">
          A collection of projects that showcase my skills and experience
        </p>
        <p className="mb-10 text-center text-gray-700 font-medium">
          I’ve won 3 hackathons, including 1st place at a BVRIT hackathon for
          the <span className="font-bold">Plastic Awareness Web App</span>,
          <br /> 2nd place at another BVRIT hackathon for the{" "}
          <span className="font-bold">Buddy Library Web App</span>,
          <br /> and 1st place at a BVRIT design hackathon for{" "}
          <span className="font-bold">Figma Design</span>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              githubLink={project.githubLink}
              demoLink={project.demoLink}
            />
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://github.com/singghh?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
          >
            <Github className="h-5 w-5 mr-2" />
            <span>View All Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
