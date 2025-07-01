import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Electronics eCommerce Platform - Primecart',
      description: 'A modern full stack eCommerce application built with Next.js, MongoDB, Tailwind CSS, Clerk for authentication, and Inngest for background jobs. Features include user authentication, product management, secure payments, and real-time order tracking.',
      image: '/E&C.jpg',
      technologies: ['Next.js', 'MongoDB', 'Tailwind CSS', 'Clerk', 'Inngest'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Retail and Sales Analytics Dashboard',
      description: 'An interactive dashboard for analyzing retail and sales data across multiple regions. Features data visualization, KPI tracking, and actionable insights to drive business decisions.',
      image: '/R&S.png',
      technologies: ['Power BI', 'Excel', 'Pandas', 'Matplotlib', 'Jupyter'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Hospital Management System',
      description: 'A Python-based command-line application that simulates hospital operations like managing patient records, appointments, billing, and medical inventory. Designed to streamline administrative workflows using structured data handling and SQL integration.',
      image: '/H&S.jpg',
      technologies: ['Python', 'NumPy', 'Pandas', 'MySQL'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Sentiment Analysis for Product Reviews - Python',
      description: 'This project analyzes user reviews to determine the sentiment (positive, negative, neutral) and correlate it with product ratings. It uses natural language processing techniques to clean and process textual data, then applies classification models to predict sentiments accurately.',
      image: '/S&A.jpg',
      technologies: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn'],
      liveUrl: '#',
      githubUrl: '#'
    }
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

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-6 flex flex-col items-center">
                <h3 className="text-xl font-bold mb-3 text-primary text-center">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed text-justify">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-center w-full">
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                      GitHub
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
