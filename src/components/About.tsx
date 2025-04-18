import { GraduationCap, Briefcase, Code } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-container">
      <div className="max-w-3xl mx-auto">
        <h2 className="section-title text-center">About Me</h2>
        <p className="text-center mb-6 text-gray-500">
          Here's a brief introduction about my background and aspirations.
        </p>

        <div className="space-y-6 animate-fade-in-delayed">
          <p className="text-lg leading-relaxed">
            I’m a 3rd-year B.Tech Computer Science student, but that’s just the
            surface. At my core, I’m someone who’s{" "}
            <span className="font-bold">obsessed with building</span> — turning
            raw ideas into real, working products that make an impact.
          </p>

          <p className="text-lg leading-relaxed">
            From designing sleek front-end interfaces to engineering robust
            back-end systems, I don’t just code — I breathe life into digital
            experiences. Every late night, every bug I wrestle with, every line
            of code I write… it’s all fueled by something deeper than just
            <span className="font-bold"> interest.</span>
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
            <br />
            <p className="">GPA: 8.88🖕</p>
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
          <div className="bg-secondary rounded-xl p-6 card-hover animate-fade-in-delayed-4">
            <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Community</h3>
            <p className="text-muted-foreground">
              Started a developer community called <strong>Devdues</strong>,
              <br />
              <a
                href="https://discord.com/invite/upq7EDUvcX" // replace with actual link
                className="text-primary underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join us on Discord
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
