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
          <div className="flex justify-center items-center">
            <img
              src="/Kadali_Harshavardhan.jpg"
              alt="Kadali Harshavardhan"
              className="w-81 h-81 object-cover rounded-full shadow-lg border-4 border-primary/20"
            />
          </div>

          <div className="space-y-6">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">My Journey</h3>
                <p className="text-muted-foreground">
                A software developer with hands-on experience in full-stack development, cloud technologies, and data analytics. Skilled in Python, Java, React.js, and Azure, I am dedicated to delivering efficient and impactful software solutions through a strong foundation in both frontend and backend technologies.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">What I Do</h3>
                <p className="text-muted-foreground">
                  I specialize in full-stack development, cloud technologies, and data analytics. My work involves building efficient and impactful software solutions using technologies such as Python, Java, React.js, and Azure, with a strong emphasis on both frontend and backend development.
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
