
import { useRef, useEffect } from 'react';

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
                barRef.current.style.opacity = '1';
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
          style={{ width: '0%', backgroundColor: color }}
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
        <p className="section-subtitle text-center">
          Here are some of the technologies I work with
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <SkillCard 
            name="HTML & CSS" 
            icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-orange-500"><path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12z"></path><path d="M8 18l8-12"></path></svg>} 
          />
          <SkillCard 
            name="JavaScript" 
            icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-yellow-500"><circle cx="12" cy="12" r="10"></circle><path d="M16 10c0 2.3-1.7 3-3 3s-3-.7-3-3"></path><line x1="16" y1="14" x2="16" y2="17"></line><line x1="8" y1="14" x2="8" y2="17"></line></svg>} 
          />
          <SkillCard 
            name="React" 
            icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-blue-400"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82c.4.4.5 1.1.13 1.56a1.65 1.65 0 0 1-1.51.88 1.65 1.65 0 0 1-1.51-.88c-.37-.46-.27-1.17.13-1.56a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.3-1.18 1.65 1.65 0 0 0-1.65.44c-.4.4-1.1.5-1.56.13a1.65 1.65 0 0 1-.88-1.51 1.65 1.65 0 0 1 .88-1.51c.46-.37 1.17-.27 1.56.13a1.65 1.65 0 0 0 1.65.44 1.65 1.65 0 0 0 1.3-1.18 1.65 1.65 0 0 0-.33-1.82c-.4-.4-.5-1.1-.13-1.56a1.65 1.65 0 0 1 1.51-.88 1.65 1.65 0 0 1 1.51.88c.37.46.27 1.17-.13 1.56a1.65 1.65 0 0 0-.33 1.82 1.65 1.65 0 0 0 1.3 1.18 1.65 1.65 0 0 0 1.65-.44c.4-.4 1.1-.5 1.56-.13a1.65 1.65 0 0 1 .88 1.51 1.65 1.65 0 0 1-.88 1.51c-.46.37-1.17.27-1.56-.13a1.65 1.65 0 0 0-1.65-.44 1.65 1.65 0 0 0-1.3 1.18z"></path></svg>} 
          />
          <SkillCard 
            name="Node.js" 
            icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-green-500"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>} 
          />
          <SkillCard 
            name="Database" 
            icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-blue-600"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>} 
          />
          <SkillCard 
            name="Git" 
            icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-red-500"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>} 
          />
          <SkillCard 
            name="UI/UX" 
            icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-purple-500"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>} 
          />
          <SkillCard 
            name="API Development" 
            icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-indigo-500"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>} 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-6">Frontend Development</h3>
            <SkillBar name="HTML/CSS" level={90} color="#3B82F6" delay={100} />
            <SkillBar name="JavaScript" level={85} color="#3B82F6" delay={200} />
            <SkillBar name="React" level={80} color="#3B82F6" delay={300} />
            <SkillBar name="UI/UX Design" level={75} color="#3B82F6" delay={400} />
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-6">Backend Development</h3>
            <SkillBar name="Node.js" level={85} color="#3B82F6" delay={100} />
            <SkillBar name="Databases" level={80} color="#3B82F6" delay={200} />
            <SkillBar name="API Development" level={85} color="#3B82F6" delay={300} />
            <SkillBar name="Server Management" level={70} color="#3B82F6" delay={400} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
