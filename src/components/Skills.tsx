import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React.js', 'HTML5/CSS3', 'Next.js', 'Tailwind CSS'],
      icon: '🎨'
    },
    {
      title: 'Backend',
      skills: ['Python', 'Java', 'Django', 'Flask', 'Spring Boot', 'Node.js', 'REST API', 'SQL', 'MySQL', 'MongoDB'],
      icon: '⚙️'
    },
    {
      title: 'Libraries',
      skills: ['NumPy', 'Pandas', 'Matplotlib', 'TensorFlow'],
      icon: '📚'
    },
    {
      title: 'Tools',
      skills: ['Git', 'GitHub', 'GitLab', 'Visual Studio', 'Eclipse', 'Postman', 'Power BI', 'Shell Scripting', 'Azure'],
      icon: '🛠️'
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
          {skillCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold mb-6 text-primary">{category.title}</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
