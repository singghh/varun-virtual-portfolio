
import { GraduationCap, Briefcase, Code } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-container">
      <div className="max-w-3xl mx-auto">
        <h2 className="section-title text-center">About Me</h2>
        <p className="section-subtitle text-center">
          Here's a brief introduction about my background and aspirations.
        </p>

        <div className="space-y-6 animate-fade-in-delayed">
          <p className="text-lg leading-relaxed">
            I'm currently in my 3rd year pursuing a B.Tech in Computer Science and Engineering. My journey in technology is driven by a passion for creating innovative solutions through code.
          </p>
          
          <p className="text-lg leading-relaxed">
            With a strong foundation in full stack development, I enjoy the process of transforming ideas into functional applications, from designing responsive front-end interfaces to implementing robust back-end systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-secondary rounded-xl p-6 card-hover animate-fade-in-delayed">
            <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <p className="text-muted-foreground">
              B.Tech in Computer Science and Engineering
              <br />
              3rd Year
            </p>
          </div>

          <div className="bg-secondary rounded-xl p-6 card-hover animate-fade-in-delayed-2">
            <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
              <Briefcase className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Experience</h3>
            <p className="text-muted-foreground">
              Internship at QualiZeal
              <br />
              Full Stack Developer
            </p>
          </div>

          <div className="bg-secondary rounded-xl p-6 card-hover animate-fade-in-delayed-3">
            <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Expertise</h3>
            <p className="text-muted-foreground">
              Full Stack Development
              <br />
              Modern Web Technologies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
