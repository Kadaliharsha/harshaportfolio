import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Building2, Rocket, GraduationCap, Code2 } from 'lucide-react';

interface ExperienceItem {
    title: string;
    company: string;
    type: 'current' | 'freelance' | 'past';
    period: string;
    description: string;
    skills: string[];
    color: string;
    bgColor: string;
    icon: React.ReactNode;
}

const Experience = () => {
    const experiences: ExperienceItem[] = [
        {
            title: 'Backend Intern Specialist',
            company: 'PwC (via Elfonze Technologies)',
            type: 'current',
            period: 'Present',
            description: 'Working on backend development and data-driven solutions for enterprise clients.',
            skills: ['Python', 'REST API', 'Cloud', 'Data Engineering'],
            color: 'text-blue-500',
            bgColor: 'bg-blue-500',
            icon: <Building2 className="w-5 h-5" />
        },
        {
            title: 'Freelance Developer',
            company: 'Freelance Project',
            type: 'freelance',
            period: 'Present',
            description: 'Contributing to a freelance project alongside full-time work, building scalable solutions.',
            skills: ['Full Stack', 'React', 'Node.js'],
            color: 'text-purple-500',
            bgColor: 'bg-purple-500',
            icon: <Rocket className="w-5 h-5" />
        },
        {
            title: 'Associate Software Engineer - Trainee',
            company: 'Mphasis',
            type: 'past',
            period: 'Completed',
            description: 'Gained experience in enterprise software development and agile methodologies.',
            skills: ['Java', 'Spring Boot', 'Agile'],
            color: 'text-teal-500',
            bgColor: 'bg-teal-500',
            icon: <Code2 className="w-5 h-5" />
        },
        {
            title: 'Software Engineer Intern',
            company: 'Genamplify',
            type: 'past',
            period: 'Completed',
            description: 'Worked on data analysis and backend systems for emerging technology solutions.',
            skills: ['Python', 'Data Analysis', 'Backend'],
            color: 'text-amber-500',
            bgColor: 'bg-amber-500',
            icon: <Briefcase className="w-5 h-5" />
        },
        {
            title: 'Intern',
            company: 'Infosys Springboard',
            type: 'past',
            period: 'Completed',
            description: 'Completed intensive training and projects in software development fundamentals.',
            skills: ['Programming', 'Problem Solving', 'Collaboration'],
            color: 'text-rose-500',
            bgColor: 'bg-rose-500',
            icon: <GraduationCap className="w-5 h-5" />
        }
    ];

    const getTypeBadge = (type: string) => {
        switch (type) {
            case 'current':
                return <Badge className="bg-green-500 text-white text-xs">Active</Badge>;
            case 'freelance':
                return <Badge className="bg-purple-500 text-white text-xs">Parallel</Badge>;
            default:
                return <Badge variant="secondary" className="text-xs">Completed</Badge>;
        }
    };

    return (
        <section id="experience" className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        My professional journey and growth
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    {/* Timeline */}
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-rose-500"></div>

                        {experiences.map((exp, index) => (
                            <div key={index} className="relative pl-16 pb-8 last:pb-0">
                                {/* Timeline dot */}
                                <div className={`absolute left-4 w-5 h-5 rounded-full border-4 border-white shadow-md ${exp.bgColor}`}></div>

                                <Card className="group hover:shadow-lg transition-all duration-300 border-slate-200/50">
                                    <CardContent className="p-6">
                                        <div className="flex flex-wrap items-center gap-3 mb-3">
                                            <div className={`p-2 rounded-lg ${exp.color} bg-slate-100`}>
                                                {exp.icon}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-lg font-bold">{exp.title}</h3>
                                                <p className={`font-medium ${exp.color}`}>{exp.company}</p>
                                            </div>
                                            {getTypeBadge(exp.type)}
                                        </div>

                                        <p className="text-muted-foreground mb-4 text-sm">{exp.description}</p>

                                        <div className="flex flex-wrap gap-2">
                                            {exp.skills.map((skill, skillIndex) => (
                                                <Badge
                                                    key={skillIndex}
                                                    variant="secondary"
                                                    className="bg-slate-100 text-slate-600 text-xs"
                                                >
                                                    {skill}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
