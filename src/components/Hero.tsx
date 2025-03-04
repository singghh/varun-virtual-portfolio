
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 pt-16"
    >
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"
        aria-hidden="true"
      ></div>

      <div className="max-w-4xl mx-auto text-center">
        <p className="inline-block px-3 py-1 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full animate-fade-in">
          Full Stack Developer
        </p>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-delayed tracking-tight">
          Hi, I'm{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            Bamla Varun Singh
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-delayed-2">
          A passionate full stack developer specializing in building exceptional digital experiences.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delayed-3">
          <a href="#contact" className="btn-primary">
            Get in Touch
          </a>
          <a href="#projects" className="btn-outline">
            View My Work
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </a>
      </div>

      {/* Decorative elements */}
      <div
        className={cn(
          "absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10",
          "animate-[pulse_8s_ease-in-out_infinite]"
        )}
        aria-hidden="true"
      ></div>
      <div
        className={cn(
          "absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -z-10",
          "animate-[pulse_10s_ease-in-out_infinite_1s]"
        )}
        aria-hidden="true"
      ></div>
    </section>
  );
};

export default Hero;
