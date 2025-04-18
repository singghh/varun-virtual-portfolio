import { useRef, useEffect } from "react";
import { SiJavascript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { FaJenkins } from "react-icons/fa";
import { FaAws } from "react-icons/fa";

interface SkillProps {
  name: string;
  level: number;
  color: string;
  delay: number;
}

const SkillBar = ({ name, level, color, delay }: SkillProps) => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && barRef.current) {
            setTimeout(() => {
              if (barRef.current) {
                barRef.current.style.width = `${level}%`;
                barRef.current.style.opacity = "1";
              }
            }, delay);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => {
      if (barRef.current) {
        observer.unobserve(barRef.current);
      }
    };
  }, [level, delay]);

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-medium">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-3 bg-secondary rounded-full overflow-hidden">
        <div
          ref={barRef}
          className="h-full rounded-full transition-all duration-1000 ease-out opacity-0"
          style={{ width: "0%", backgroundColor: color }}
        ></div>
      </div>
    </div>
  );
};

const SkillCard = ({ name, icon }: { name: string; icon: React.ReactNode }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 flex flex-col items-center justify-center text-center card-hover">
      <div className="p-3 mb-3">{icon}</div>
      <h3 className="font-medium">{name}</h3>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="section-container bg-secondary/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title text-center">My Skills</h2>
        <p className="text-center mb-8 text-muted-foreground">
          Here are some of the technologies I work with
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <SkillCard
            name="HTML & CSS"
            icon={<FaHtml5 className="h-8 w-8 text-orange-500" />}
          />
          <SkillCard
            name="JavaScript"
            icon={<SiJavascript className="h-8 w-8 text-yellow-500" />}
          />
          <SkillCard
            name="React"
            icon={<FaReact className="h-8 w-8 text-blue-500" />}
          />
          <SkillCard
            name="Node.js"
            icon={<FaNodeJs className="h-8 w-8 text-green-500" />}
          />
          <SkillCard
            name="Database"
            icon={<FaDatabase className="h-8 w-8 text-red-500" />}
          />
          <SkillCard
            name="Git"
            icon={<FaGitAlt className="h-8 w-8 text-orange-500" />}
          />
          <SkillCard
            name="UI/UX"
            icon={<FaFigma className="h-8 w-8 text-purple-500" />}
          />
          <SkillCard
            name="API Development"
            icon={<FaServer className="h-8 w-8 text-blue-500" />}
          />
          <SkillCard
            name="AWS"
            icon={<FaAws className="h-8 w-8 text-orange-400" />}
          />
          <SkillCard
            name="Docker"
            icon={<FaDocker className="h-8 w-8 text-blue-400" />}
          />
          <SkillCard
            name="Jenkins"
            icon={<FaJenkins className="h-8 w-8 text-red-500" />}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-6">Frontend Development</h3>

            <SkillBar
              name="JavaScript"
              level={75}
              color="#3B82F6"
              delay={200}
            />
            <SkillBar name="React" level={80} color="#3B82F6" delay={300} />
            <SkillBar
              name="UI/UX Design"
              level={75}
              color="#3B82F6"
              delay={400}
            />
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-6">Backend Development</h3>
            <SkillBar name="Node.js" level={70} color="#3B82F6" delay={100} />
            <SkillBar name="express.js" level={80} color="#3B82F6" delay={100} />
            <SkillBar name="Databases" level={80} color="#3B82F6" delay={200} />
            <SkillBar
              name="API Development"
              level={85}
              color="#3B82F6"
              delay={300}
            />
            <SkillBar
              name="Server Management"
              level={70}
              color="#3B82F6"
              delay={400}
            />
            <SkillBar
              name="AWS & Cloud Services"
              level={70}
              color="#3B82F6"
              delay={400}
            />
            <SkillBar
              name="Docker & CI/CD"
              level={60}
              color="#3B82F6"
              delay={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
