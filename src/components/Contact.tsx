import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Send, Github, Linkedin, Loader2, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // Collect form data into a plain object for JSON submission
    const data: { [key: string]: string } = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    try {
      const apiKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_WEB3FORMS_KEY";

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: apiKey,
          ...data,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        toast({
          title: 'Message sent!',
          description: "Thanks for reaching out. I'll get back to you soon!",
        });
        form.reset();
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        throw new Error('Submission failed');
      }
    } catch {
      toast({
        title: 'Failed to send',
        description: 'Please try again or email me directly.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <Card className="border-primary/10">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <Input
                    id="subject-field"
                    name="subject_text"
                    placeholder="What's this about?"
                    required
                    className="border-primary/20 focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message..."
                    rows={5}
                    required
                    className="border-primary/20 focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Sent!
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-6">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:kadali.hrv@gmail.com" className="font-medium hover:text-primary transition-colors">
                    kadali.hrv@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Hyderabad, Telangana, India</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-4">Find me on</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Kadaliharsha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/kadaliharsha/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:kadali.hrv@gmail.com"
                  className="p-3 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

