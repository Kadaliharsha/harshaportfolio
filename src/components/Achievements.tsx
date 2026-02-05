import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Code, BookOpen, Award, ExternalLink, Trophy, Target, Zap } from 'lucide-react';

const Achievements = () => {
  const categories = [
    {
      title: 'LeetCode',
      subtitle: 'Competitive Programming',
      link: 'https://leetcode.com/u/kadalihrv/',
      icon: <Code className="w-8 h-8" />,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10',
      stats: [
        { label: '200+ Problems', icon: <Target className="w-4 h-4" /> },
        { label: 'Top 10% Global', icon: <Trophy className="w-4 h-4" /> },
        { label: 'Daily Streak', icon: <Zap className="w-4 h-4" /> },
      ],
    },
    {
      title: 'TakeUForward',
      subtitle: 'DSA & Interview Prep',
      link: 'https://takeuforward.org/plus/profile/kadalihrv',
      icon: <BookOpen className="w-8 h-8" />,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
      stats: [
        { label: 'DSA Mastery', icon: <Target className="w-4 h-4" /> },
        { label: 'System Design', icon: <Zap className="w-4 h-4" /> },
        { label: 'Interview Ready', icon: <Trophy className="w-4 h-4" /> },
      ],
    },
    {
      title: 'Certifications',
      subtitle: 'Verified Credentials',
      icon: <Award className="w-8 h-8" />,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      certifications: [
        { name: 'Database Management Systems', issuer: 'NPTEL' },
        { name: 'Cloud Computing', issuer: 'AWS Academy' },
        { name: 'Java Programming', issuer: 'Oracle Certified' },
      ],
    },
  ];

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Achievements & Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Highlights of my problem-solving journey and verified credentials
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-slate-200/50"
            >
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl ${category.bgColor} ${category.color} group-hover:scale-110 transition-transform`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${category.color}`}>
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.subtitle}
                    </p>
                  </div>
                </div>

                {/* Stats or Certifications */}
                {category.stats ? (
                  <div className="space-y-3 mb-6">
                    {category.stats.map((stat, statIndex) => (
                      <div
                        key={statIndex}
                        className="flex items-center gap-3 p-2 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors"
                      >
                        <span className={category.color}>{stat.icon}</span>
                        <span className="text-sm font-medium text-slate-700">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-3 mb-6">
                    {category.certifications?.map((cert, certIndex) => (
                      <div
                        key={certIndex}
                        className="flex items-start gap-3 p-2 rounded-lg bg-slate-50"
                      >
                        <Award className={`w-4 h-4 mt-0.5 ${category.color}`} />
                        <div>
                          <p className="text-sm font-medium text-slate-700">{cert.name}</p>
                          <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Link Button */}
                {category.link && (
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="w-full hover:bg-slate-900 hover:text-white transition-colors"
                  >
                    <a href={category.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      View Profile
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
