import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Code2, Brain, ShoppingCart, Building2, Heart, BarChart3 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'CodeCollab',
      subtitle: 'Collaborative Coding Platform',
      description:
        'A secure real-time environment for friends to practice coding together—live syncing via WebSockets, session isolation, and auto-save.',
      technologies: ['Python', 'Docker', 'FastAPI', 'PostgreSQL'],
      githubUrl: 'https://github.com/Kadaliharsha/CodeCollab_Project',
      icon: <Code2 className="w-6 h-6" />,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      title: 'AI Learning Engine',
      subtitle: 'Personalized Recommendation System',
      description:
        'Adaptive learning platform leveraging multi-modal AI to deliver personalized quizzes and targeted improvement insights.',
      technologies: ['Python', 'Machine Learning', 'Streamlit'],
      githubUrl: 'https://github.com/Kadaliharsha/AI_in_personalised_learning',
      icon: <Brain className="w-6 h-6" />,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10'
    },
    {
      title: 'PrimeCart',
      subtitle: 'Electronics eCommerce Platform',
      description:
        'Scalable full-stack eCommerce app with Clerk auth and Inngest background processing. Secure payments and live order tracking.',
      technologies: ['Next.js', 'MongoDB', 'Tailwind', 'Clerk'],
      githubUrl: 'https://github.com/Kadaliharsha/primecart',
      icon: <ShoppingCart className="w-6 h-6" />,
      color: 'text-amber-500',
      bgColor: 'bg-amber-500/10'
    },
    {
      title: 'Hospital Manager',
      subtitle: 'Record & Billing Management',
      description:
        'Python CLI system for managing patient records, appointment scheduling, billing workflows, and medical inventory.',
      technologies: ['Python', 'NumPy', 'Pandas', 'MySQL'],
      githubUrl: 'https://github.com/Kadaliharsha/hospital_mgmt',
      icon: <Building2 className="w-6 h-6" />,
      color: 'text-teal-500',
      bgColor: 'bg-teal-500/10'
    },
    {
      title: 'MindCare',
      subtitle: 'Mental Health Support App',
      description:
        'Mental health web app with Spring Boot and MongoDB. Track well-being, journal entries, and access curated resources.',
      technologies: ['Spring Boot', 'Java', 'MongoDB', 'React.js'],
      githubUrl: 'https://github.com/Kadaliharsha/MindCare_',
      icon: <Heart className="w-6 h-6" />,
      color: 'text-rose-500',
      bgColor: 'bg-rose-500/10'
    },
    {
      title: 'Sentiment Analyzer',
      subtitle: 'Product Review NLP Pipeline',
      description:
        'NLP pipeline for sentiment analysis of product reviews using classical and modern techniques for product insights.',
      technologies: ['Python', 'NLTK', 'Scikit-learn', 'Jupyter'],
      githubUrl: 'https://github.com/Kadaliharsha/Sentiment-Analysis-for-Product-Ratings',
      icon: <BarChart3 className="w-6 h-6" />,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10'
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col border-slate-200/50"
            >
              <CardContent className="p-6 flex flex-col flex-grow">
                {/* Icon and Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-xl ${project.bgColor} ${project.color} shrink-0`}>
                    {project.icon}
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold ${project.color}`}>
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="text-xs bg-slate-100 text-slate-600"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="mt-auto pt-4 border-t border-slate-100">
                  <Button
                    size="sm"
                    variant="outline"
                    asChild
                    className="w-full hover:bg-slate-900 hover:text-white transition-colors"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      View on GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
