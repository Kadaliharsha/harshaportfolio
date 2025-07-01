
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating exceptional digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 mb-8">
              <div className="w-48 h-48 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
                <div className="text-6xl">👨‍💻</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">My Journey</h3>
                <p className="text-muted-foreground">
                  With over 5 years of experience in web development, I've worked with startups and established companies to bring their digital visions to life. I specialize in creating responsive, user-friendly applications that not only look great but perform exceptionally.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">What I Do</h3>
                <p className="text-muted-foreground">
                  I focus on full-stack web development, UI/UX design, and modern JavaScript frameworks. I'm passionate about clean code, beautiful interfaces, and creating solutions that make a real impact for businesses and users alike.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Beyond Code</h3>
                <p className="text-muted-foreground">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge through mentoring and writing. I believe in continuous learning and staying ahead of industry trends.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
