import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Cloud, Code } from 'lucide-react';

const Achievements = () => {
  const categories = [
    {
      title: 'LeetCode',
      link: 'https://leetcode.com/u/kadalihrv/', // replace with your link
      icon: <Code className="w-10 h-10 text-yellow-500 mx-auto" />,
      skills: ['200+ Problems Solved', 'Top 10% Global Ranking', 'Daily Streak Maintained'],
    },
    {
      title: 'TakeUForward',
      link: 'https://takeuforward.org/plus/profile/kadalihrv',
      icon: <BookOpen className="w-10 h-10 text-green-500 mx-auto" />,
      skills: ['Data Structures and Algorithms', 'System Design Basics', 'Interview Prep'],
    },
    {
      title: 'Certifications',
      icon: <Cloud className="w-10 h-10 text-blue-500 mx-auto" />,
      skills: [
        'Database Management Systems (NPTEL)',
        'Cloud Computing (AWS Academy)',
        'Java Programming (Oracle Certified)',
      ],
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-muted/30">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Achievements & Certifications
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Highlights of my problem-solving journey, learning initiatives, and verified certifications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 w-full sm:w-80 md:w-auto md:max-w-sm flex flex-col justify-between">
              <CardContent className="p-6 flex flex-col flex-grow text-center">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>

                <h3 className="text-xl font-bold mb-3 text-primary text-center min-h-[60px]">
                  {category.link ? (
                    <a
                      href={category.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {category.title}
                    </a>
                  ) : (
                    category.title
                  )}
                </h3>

                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors duration-200 cursor-pointer"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Achievements;
