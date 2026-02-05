import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Briefcase, Building2, Rocket, GraduationCap, Code2, ChevronRight, MapPin, Calendar } from 'lucide-react';

interface ExperienceItem {
    title: string;
    company: string;
    location: string;
    type: 'current' | 'freelance' | 'past';
    period: string;
    description: string;
    highlights: string[];
    fullDetails: string[];
    skills: string[];
    color: string;
    bgColor: string;
    icon: React.ReactNode;
}

const Experience = () => {
    const [selectedExp, setSelectedExp] = useState<ExperienceItem | null>(null);

    const experiences: ExperienceItem[] = [
        {
            title: 'Intern Specialist – Technology',
            company: 'PwC India (via Elfonze)',
            location: 'Pune, IN',
            type: 'current',
            period: 'Nov 2024 – Present',
            description: 'Selected for structured training aligned with PwC enterprise engineering standards.',
            highlights: [
                'Ranked Top 4 of 40+ teams in AI Immersion Program',
                'Completed 8+ technical modules across full-stack & cloud',
                'Delivered 3 technical presentations to stakeholders',
            ],
            fullDetails: [
                'Selected for structured training across Java, Spring Boot, React, AWS Cloud, software testing, and prompt engineering.',
                'Ranked Top 4 out of 40+ teams in the AI Immersion Program by designing an AI-assisted hiring prototype for Guidewire insurance technology roles.',
                'Prototype covered resume screening, interview generation, and candidate evaluation workflows.',
                'Completed hands-on labs and assessments covering backend development, cloud deployment, TDD, and CI/CD fundamentals.',
                'Presented technical use cases and solution architectures to cross-functional teams.',
            ],
            skills: ['Java', 'Spring Boot', 'React', 'AWS', 'Prompt Engineering'],
            color: 'text-blue-500',
            bgColor: 'bg-blue-500',
            icon: <Building2 className="w-5 h-5" />
        },
        {
            title: 'Software Engineer – Backend / AI',
            company: 'Yuvro-code',
            location: 'Remote (Freelance)',
            type: 'freelance',
            period: 'Nov 2024 – Present',
            description: 'Building backend services for an AI-powered learning and hiring platform.',
            highlights: [
                'Built 15+ REST endpoints for assessments & recruiting',
                'Integrated 4 AI models (OpenAI, Claude, Gemini, Cohere)',
                'Designed code sandbox supporting 5+ languages',
            ],
            fullDetails: [
                'Architected and developed backend services using Django REST Framework and PostgreSQL.',
                'Platform supports courses, skill assessments, coding contests, and recruiter workflows.',
                'Integrated multi-model AI capabilities (OpenAI, Claude, Gemini, Cohere) for AI-driven mock interviews and code analysis.',
                'Built an isolated code-execution microservice to securely evaluate user-submitted code.',
                'Implemented end-to-end observability using OpenTelemetry, Prometheus, Grafana, Jaeger, and Loki.',
            ],
            skills: ['Django', 'PostgreSQL', 'OpenAI', 'Docker', 'OpenTelemetry', 'Prometheus'],
            color: 'text-purple-500',
            bgColor: 'bg-purple-500',
            icon: <Rocket className="w-5 h-5" />
        },
        {
            title: 'Associate Software Engineer – Trainee',
            company: 'Mphasis Limited',
            location: 'Pune, IN',
            type: 'past',
            period: 'Mar 2024 – Jun 2024',
            description: 'Intensive backend development training with hands-on project delivery.',
            highlights: [
                'Completed 200+ hours of backend training',
                'Built Hospital Management System with 100+ patient records',
                'Reduced deployment time by ~30% with automation',
            ],
            fullDetails: [
                'Completed intensive backend development training covering Python (DSA & scripting), MS SQL Server, MongoDB, Unix shell scripting, and Azure cloud fundamentals.',
                'Developed a Hospital Management System using Python, SQL, and Azure App Services.',
                'Implemented backend modules for patient records, appointments, and billing workflows.',
                'Automated build and deployment processes using shell scripts and Azure CLI.',
                'Improved deployment consistency and release efficiency across the team.',
            ],
            skills: ['Python', 'SQL', 'Azure', 'MongoDB', 'Shell Scripting'],
            color: 'text-teal-500',
            bgColor: 'bg-teal-500',
            icon: <Code2 className="w-5 h-5" />
        },
        {
            title: 'Software Engineer Intern – Backend',
            company: 'Genamplify Solutions',
            location: 'Hyderabad, IN',
            type: 'past',
            period: 'Sept 2023 – Feb 2024',
            description: 'Healthcare startup focused on scheduling and credentialing workflows.',
            highlights: [
                'Developed 10+ RESTful APIs for scheduling workflows',
                'Processed 500+ medical forms with validation pipelines',
                'Resolved 20+ integration issues with QA & DevOps',
            ],
            fullDetails: [
                'Developed RESTful APIs using Python for healthcare scheduling and credentialing workflows.',
                'Automated time-slot generation and medical form processing systems.',
                'Designed MongoDB schemas and implemented data-validation pipelines.',
                'Ensured accurate mapping between frontend forms and backend storage.',
                'Collaborated with QA and DevOps teams to document APIs and debug integration issues.',
            ],
            skills: ['Python', 'MongoDB', 'REST API', 'Data Validation'],
            color: 'text-amber-500',
            bgColor: 'bg-amber-500',
            icon: <Briefcase className="w-5 h-5" />
        },
        {
            title: 'Team Lead – Capstone Project',
            company: 'Infosys Springboard',
            location: 'Remote',
            type: 'past',
            period: 'Jun 2023 – Aug 2023',
            description: 'Led development of a Mental Wellness Platform with Spring Boot.',
            highlights: [
                'Led 6-member team through full SDLC',
                'Delivered 100% of planned features on schedule',
                'Built 8 APIs for therapist booking & availability',
            ],
            fullDetails: [
                'Led a 6-member team to deliver a Java Spring Boot–based Mental Wellness Platform.',
                'Implemented authentication, scheduling, and emergency support features.',
                'Developed backend APIs for therapist-user session booking with real-time availability management.',
                'Facilitated agile ceremonies including daily stand-ups and sprint planning.',
                'Ensured on-time delivery of all planned features through effective team coordination.',
            ],
            skills: ['Java', 'Spring Boot', 'Agile', 'Team Leadership'],
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
                return <Badge className="bg-purple-500 text-white text-xs">Freelance</Badge>;
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
                    <div className="relative">
                        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-rose-500"></div>

                        {experiences.map((exp, index) => (
                            <div key={index} className="relative pl-16 pb-8 last:pb-0">
                                <div className={`absolute left-4 w-5 h-5 rounded-full border-4 border-white shadow-md ${exp.bgColor}`}></div>

                                <Card
                                    className="group hover:shadow-lg transition-all duration-300 border-slate-200/50 cursor-pointer"
                                    onClick={() => setSelectedExp(exp)}
                                >
                                    <CardContent className="p-6">
                                        <div className="flex flex-wrap items-start gap-3 mb-3">
                                            <div className={`p-2 rounded-lg ${exp.color} bg-slate-100 shrink-0`}>
                                                {exp.icon}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="text-lg font-bold leading-tight">{exp.title}</h3>
                                                <p className={`font-medium ${exp.color}`}>{exp.company}</p>
                                                <p className="text-xs text-muted-foreground">{exp.location} • {exp.period}</p>
                                            </div>
                                            {getTypeBadge(exp.type)}
                                        </div>

                                        <p className="text-muted-foreground mb-3 text-sm">{exp.description}</p>

                                        <ul className="space-y-1 mb-4">
                                            {exp.highlights.map((highlight, hIndex) => (
                                                <li key={hIndex} className="text-sm text-slate-600 flex items-start gap-2">
                                                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${exp.bgColor} shrink-0`}></span>
                                                    {highlight}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex items-center justify-between">
                                            <div className="flex flex-wrap gap-2">
                                                {exp.skills.slice(0, 3).map((skill, skillIndex) => (
                                                    <Badge
                                                        key={skillIndex}
                                                        variant="secondary"
                                                        className="bg-slate-100 text-slate-600 text-xs"
                                                    >
                                                        {skill}
                                                    </Badge>
                                                ))}
                                                {exp.skills.length > 3 && (
                                                    <Badge variant="secondary" className="bg-slate-100 text-slate-600 text-xs">
                                                        +{exp.skills.length - 3}
                                                    </Badge>
                                                )}
                                            </div>
                                            <Button variant="ghost" size="sm" className={`${exp.color} p-1`}>
                                                <ChevronRight className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Detail Modal */}
            <Dialog open={!!selectedExp} onOpenChange={() => setSelectedExp(null)}>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                    {selectedExp && (
                        <>
                            <DialogHeader className="pr-8">
                                <div className="flex items-start gap-4">
                                    <div className={`p-3 rounded-xl ${selectedExp.bgColor.replace('bg-', 'bg-').replace('500', '500/10')} ${selectedExp.color}`}>
                                        {selectedExp.icon}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 flex-wrap mb-1">
                                            <DialogTitle className="text-xl">{selectedExp.title}</DialogTitle>
                                            {getTypeBadge(selectedExp.type)}
                                        </div>
                                        <p className={`font-semibold ${selectedExp.color}`}>{selectedExp.company}</p>
                                        <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                                            <span className="flex items-center gap-1">
                                                <MapPin className="w-4 h-4" /> {selectedExp.location}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" /> {selectedExp.period}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </DialogHeader>

                            <div className="mt-6">
                                <h4 className="font-semibold mb-3">Key Responsibilities & Achievements</h4>
                                <ul className="space-y-3">
                                    {selectedExp.fullDetails.map((detail, dIndex) => (
                                        <li key={dIndex} className="flex items-start gap-3 text-sm text-slate-600">
                                            <span className={`mt-1.5 w-2 h-2 rounded-full ${selectedExp.bgColor} shrink-0`}></span>
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-6">
                                <h4 className="font-semibold mb-3">Technologies Used</h4>
                                <div className="flex flex-wrap gap-2">
                                    {selectedExp.skills.map((skill, sIndex) => (
                                        <Badge
                                            key={sIndex}
                                            className={`${selectedExp.bgColor.replace('500', '100')} ${selectedExp.color} border-0`}
                                        >
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </section>
    );
};

export default Experience;