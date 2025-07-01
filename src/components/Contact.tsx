import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        alert('Message sent!');
        form.reset();
      } else {
        alert('Failed to send message.');
      }
    } catch {
      alert('Failed to send message.');
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
        </div>
        <div className="flex flex-col items-center gap-4 mb-12">
          <p className="text-lg text-muted-foreground text-center max-w-xl">
            Ready to start your next project? Let's create something amazing together. Connect with me on social platforms or send me an email directly.
          </p>
          <div className="flex flex-row items-center gap-6">
            <div className="flex items-center gap-2">
              <Mail className="text-primary" size={20} />
              <span className="font-medium">kadali.hrv@gmail.com</span>
            </div>
            <span className="text-muted-foreground">|</span>
            <div className="flex items-center gap-2">
              <Phone className="text-primary" size={20} />
              <span className="font-medium">+91 (730) 666-6464</span>
            </div>
            <span className="text-muted-foreground">|</span>
            <div className="flex items-center gap-2">
              <MapPin className="text-primary" size={20} />
              <span className="font-medium">Hyderabad, Telangana, India</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-12 mt-12">
          <a href="https://github.com/Kadaliharsha" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
            <Github size={56} />
          </a>
          <a href="https://www.linkedin.com/in/kadaliharsha/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
            <Linkedin size={56} />
          </a>
          <a href="mailto:kadali.hrv@gmail.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
            <Mail size={56} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
