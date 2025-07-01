import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Electronics eCommerce Platform - Primecart',
      description:
        'A modern full stack eCommerce application built with Next.js, MongoDB, Tailwind CSS, Clerk for authentication, and Inngest for background jobs. Features include user authentication, product management, secure payments, and real-time order tracking.',
      technologies: ['Next.js', 'MongoDB', 'Tailwind CSS', 'Clerk', 'Inngest'],
      githubUrl: 'https://github.com/Kadaliharsha/primecart',
    },
    {
      title: 'Retail and Sales Analytics Dashboard',
      description:
        'An interactive dashboard for analyzing retail and sales data across multiple regions. Features data visualization, KPI tracking, and actionable insights to drive business decisions.',
      technologies: ['Python', 'Power BI', 'Excel', 'Pandas', 'Matplotlib', 'Jupyter'],
      githubUrl: 'https://github.com/Kadaliharsha/Retail-Sales-Analytics-Dashboard',
    },
    {
      title: 'Hospital Management System',
      description:
        'A Python-based command-line application that simulates hospital operations like managing patient records, appointments, billing, and medical inventory.',
      technologies: ['Python', 'NumPy', 'Pandas', 'MySQL'],
      githubUrl: 'https://github.com/Kadaliharsha/hospital_mgmt',
    },
    {
      title: 'MindCare – (Mental Health and Psychosocial Support during Emergencies)',
      description:
        'MindCare is a mental health support web application built with Spring Boot and MongoDB. It allows users to track their emotional well-being, journal their thoughts, and access curated mental health resources.',
      technologies: [
        'Spring Boot',
        'Java',
        'Spring Data (MongoDB)',
        'CRUD RESTful APIs',
        'Spring Security',
        'MongoDB',
        'React.js',
        'React Router',
        'TailwindCSS',
      ],
      githubUrl: 'https://github.com/Kadaliharsha/MindCare_',
    },
    {
      title: 'Sentiment Analysis for Product Reviews - Python',
      description:
        'This project analyzes user reviews to determine the sentiment (positive, negative, neutral) and correlate it with product ratings. It uses NLP techniques and classification models.',
      technologies: [
        'Python',
        'Pandas',
        'NumPy',
        'NLTK / SpaCy',
        'Scikit-learn',
        'Matplotlib',
        'Seaborn',
        'Jupyter Notebook',
      ],
      githubUrl: 'https://github.com/Kadaliharsha/Sentiment-Analysis-for-Product-Ratings',
    },
  ];

  // Split into rows of 3
  const chunkedProjects = [];
  for (let i = 0; i < projects.length; i += 3) {
    chunkedProjects.push(projects.slice(i, i + 3));
  }

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        {chunkedProjects.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`flex flex-wrap gap-8 mb-8 ${
              row.length < 3 ? 'justify-center' : 'justify-between'
            }`}
          >
            {row.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 w-full max-w-sm flex flex-col justify-between"
              >
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 text-primary text-center min-h-[60px]">
                    {project.title}
                  </h3>

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

                  <div className="flex justify-center mt-auto">
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
        ))}
      </div>
    </section>
  );
};

export default Projects;
