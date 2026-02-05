import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Palette, Server, BookOpen, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React.js', 'HTML5/CSS3', 'Next.js', 'Tailwind CSS'],
      icon: <Palette className="w-10 h-10" />,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      hoverBg: 'group-hover:bg-purple-500/20'
    },
    {
      title: 'Backend',
      skills: ['Python', 'Java', 'Django', 'Flask', 'Spring Boot', 'Node.js', 'REST API', 'MySQL', 'MongoDB'],
      icon: <Server className="w-10 h-10" />,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      hoverBg: 'group-hover:bg-blue-500/20'
    },
    {
      title: 'Libraries',
      skills: ['NumPy', 'Pandas', 'Matplotlib', 'TensorFlow'],
      icon: <BookOpen className="w-10 h-10" />,
      color: 'text-teal-500',
      bgColor: 'bg-teal-500/10',
      hoverBg: 'group-hover:bg-teal-500/20'
    },
    {
      title: 'Tools',
      skills: ['Git/GitHub', 'Docker', 'VS Code', 'Postman', 'Power BI', 'Shell Scripting', 'Azure'],
      icon: <Wrench className="w-10 h-10" />,
      color: 'text-amber-500',
      bgColor: 'bg-amber-500/10',
      hoverBg: 'group-hover:bg-amber-500/20'
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
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-slate-200/50">
              <CardContent className="p-8 text-center">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  <div className={`p-3 rounded-xl ${category.bgColor} ${category.hoverBg} ${category.color} transition-colors`}>
                    {category.icon}
                  </div>
                </div>
                <h3 className={`text-2xl font-bold mb-6 ${category.color}`}>{category.title}</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors duration-200"
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
