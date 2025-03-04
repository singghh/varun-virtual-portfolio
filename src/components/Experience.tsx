
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="section-container">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title text-center">Work Experience</h2>
        <p className="section-subtitle text-center">
          My professional journey in the tech industry
        </p>

        <div className="relative mt-16 pl-8 border-l-2 border-primary/30 space-y-12">
          {/* Experience Item */}
          <div className="relative animate-fade-in">
            <div className="absolute -left-[41px] h-8 w-8 bg-primary/20 rounded-full border-4 border-background flex items-center justify-center">
              <div className="h-3 w-3 bg-primary rounded-full"></div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 card-hover ml-4">
              <div className="flex justify-between flex-wrap gap-2 mb-2">
                <h3 className="text-xl font-semibold">Full Stack Developer Intern</h3>
                <div className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                  Current
                </div>
              </div>
              
              <div className="text-xl mb-4">QualiZeal</div>
              
              <div className="flex items-center text-muted-foreground mb-1 text-sm">
                <Calendar className="h-4 w-4 mr-2" />
                <span>2023 - Present</span>
              </div>
              
              <div className="flex items-center text-muted-foreground mb-4 text-sm">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Remote</span>
              </div>
              
              <div className="space-y-2">
                <p>
                  Working on cutting-edge web applications utilizing modern JavaScript frameworks, helping to develop scalable and maintainable code bases.
                </p>
                <p>
                  Collaborating with a team of experienced developers to create innovative solutions and deliver high-quality products to clients.
                </p>
                <p>
                  Implementing both frontend and backend features, demonstrating a comprehensive understanding of full stack development principles.
                </p>
              </div>

              <div className="mt-6">
                <a 
                  href="#" 
                  className="inline-flex items-center text-primary hover:underline font-medium"
                >
                  View Certificate
                </a>
              </div>
            </div>
          </div>

          {/* Add more experience items as needed */}
        </div>
      </div>
    </section>
  );
};

export default Experience;
