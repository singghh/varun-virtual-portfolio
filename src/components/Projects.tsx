
import { Github, ExternalLink } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  githubLink: string;
  demoLink?: string;
  index: number;
}

const ProjectCard = ({ title, description, tags, githubLink, demoLink, index }: ProjectProps) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`bg-white rounded-xl shadow-sm overflow-hidden card-hover animate-fade-in-delayed-${Math.min(index, 3)}`}>
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
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with product catalog, shopping cart, and payment processing capabilities.",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      githubLink: "https://github.com/",
      demoLink: "https://example.com"
    },
    {
      title: "Task Management App",
      description: "A productivity app that helps users organize tasks, set deadlines, and track progress on projects.",
      tags: ["React", "Redux", "Firebase"],
      githubLink: "https://github.com/"
    },
    {
      title: "Weather Dashboard",
      description: "An interactive weather application that displays current and forecasted weather data from multiple locations.",
      tags: ["JavaScript", "API Integration", "CSS"],
      githubLink: "https://github.com/",
      demoLink: "https://example.com"
    },
    {
      title: "Portfolio Website",
      description: "A responsive personal portfolio website to showcase skills, projects, and professional experience.",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      githubLink: "https://github.com/"
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard that tracks engagement metrics across multiple social media platforms.",
      tags: ["React", "Chart.js", "API Integration"],
      githubLink: "https://github.com/"
    },
    {
      title: "Real-time Chat Application",
      description: "A messaging app with real-time capabilities, user authentication, and message persistence.",
      tags: ["React", "Socket.io", "Node.js", "MongoDB"],
      githubLink: "https://github.com/",
      demoLink: "https://example.com"
    }
  ];

  return (
    <section id="projects" className="section-container bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center">My Projects</h2>
        <p className="section-subtitle text-center">
          A collection of projects that showcase my skills and experience
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
            href="https://github.com/" 
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
