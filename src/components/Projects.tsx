import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Codecollab - Collaborative Coding Platform',
      description:
        'A secure real-time environment for friends to practice coding together—live syncing via WebSockets, session isolation, and auto-save.',     
      technologies: ['Python', 'Docker', 'FastAPI', 'Postgresql(Supabase)'],
      githubUrl: 'https://github.com/Kadaliharsha/CodeCollab_Project'
    },
    {
      title: 'AI in Personalised Learning - Recommendation Engine',
      description:
        'Adaptive learning platform leveraging multi-modal AI to deliver personalized quizzes and targeted improvement insights, improving learner retention and focus. Built with Python and Streamlit for rapid prototyping and model integration.',
      technologies: ['Python', 'Machine Learning', 'Streamlit'],
      githubUrl: 'https://github.com/Kadaliharsha/AI_in_personalised_learning',
    },
    {
      title: 'Electronics eCommerce Platform - Primecart',
      description:
        'Scalable full‑stack eCommerce application (Next.js, MongoDB, Tailwind) with Clerk authentication and Inngest-powered background processing. Implemented secure payments, product management, and live order tracking to support a seamless customer experience.',
      technologies: ['Next.js', 'MongoDB', 'Tailwind CSS', 'Clerk', 'Inngest'],
      githubUrl: 'https://github.com/Kadaliharsha/primecart',
    },
    {
      title: 'Hospital Record and Billing Management System',
      description:
        'Python CLI system for managing patient records, appointment scheduling, billing workflows, and medical inventory—designed to streamline hospital operations and improve administrative efficiency.',
      technologies: ['Python', 'NumPy', 'Pandas', 'MySQL'],
      githubUrl: 'https://github.com/Kadaliharsha/hospital_mgmt',
    },
    {
      title: 'MindCare - Mental Health and Psychosocial Support during Emergencies',
      description:
        'MindCare — a mental health support web app built with Spring Boot and MongoDB. Enables users to track well-being, journal entries, and access curated resources; includes role-based access and scalable API design for emergency response.',
      technologies: [
        'Spring Boot',
        'Java',
        'Spring Data (MongoDB)',
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
        'NLP pipeline for sentiment analysis of product reviews using classical and modern techniques to classify sentiment and correlate findings with product ratings—useful for product insights and recommendation tuning.',
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
            className={`flex flex-wrap gap-8 mb-8 items-stretch justify-center md:justify-between`}
          >
            {row.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 w-full sm:w-80 md:w-auto md:max-w-sm flex flex-col justify-between"
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
