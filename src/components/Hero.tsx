import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background decoration - clean geometric style */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 text-center">
        <div className="animate-fadeInUp">
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              {/* Gradient ring */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-blue-400 to-primary opacity-75 blur-sm"></div>
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img
                  src="/Kadali_Harshavardhan.jpg"
                  alt="K Harshavardhan"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hi, I'm{' '}
            <span className="text-primary">K Harshavardhan</span>
          </h1>

          <p className="text-lg md:text-xl text-primary font-medium mb-2">
            Backend Intern Specialist @ PwC
          </p>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Building reliable backends and data-driven systems that power meaningful digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90"
              onClick={() => {
                const el = document.getElementById('projects');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
            >
              <a href="/K_Harshavardhan_Resume_.pdf" download>
                <Download className="mr-2" size={18} />
                Download Resume
              </a>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://github.com/Kadaliharsha" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/kadaliharsha/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10">
              <Linkedin size={28} />
            </a>
            <a href="mailto:kadali.hrv@gmail.com?subject=Contact%20from%20Portfolio" className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10">
              <Mail size={28} />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-primary" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;

