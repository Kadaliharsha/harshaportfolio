import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Rocket, Code2, Heart } from 'lucide-react';

const About = () => {
  const sections = [
    {
      icon: <Rocket className="w-8 h-8 text-primary" />,
      title: 'My Journey',
      description: 'Passionate Software Engineer with hands-on experience in full-stack development, cloud computing, and data-driven applications. Skilled in Python, Java, React.js, and Azure, with a strong focus on designing scalable backend systems.'
    },
    {
      icon: <Code2 className="w-8 h-8 text-primary" />,
      title: 'What I Do',
      description: 'Building end-to-end web applications and APIs that solve real-world problems. Currently Backend Intern Specialist at PwC, with experience from internships at Mphasis, Genamplify, and Infosys Springboard.'
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: 'Beyond Code',
      description: 'Outside development, I enjoy exploring emerging technologies, contributing to open-source projects, and mentoring peers on backend and cloud concepts. I believe in continuous learning and thoughtful problem-solving.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building technology that makes a difference
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sections.map((section, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-primary/10">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{section.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {section.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

