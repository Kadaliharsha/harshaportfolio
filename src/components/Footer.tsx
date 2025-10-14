import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary/5 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl text-center font-bold text-primary mb-2">Software Engineer</h3>
            <p className="text-muted-foreground">
              Crafting digital experiences with passion and creativity
            </p>
          </div>

          <div className="flex space-x-6">
            <a 
              href="https://github.com/Kadaliharsha" 
              className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/kadaliharsha/" 
              className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:kadali.hrv@gmail.com" 
              className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center">
            K Harshavardhan <span className="mx-2">•</span> © 2025 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
