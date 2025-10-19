import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
        </div>

          <div className="space-y-6">
            <div className="p-6">
              <h3 className="text-xl text-center font-semibold mb-3"> My Journey </h3>
              <p className="text-center text-lg text-muted-foreground">
                  Passionate Software Engineer with hands-on experience in full-stack development, cloud computing, and data-driven applications. Skilled in Python, Java, React.js, and Azure, with a strong focus on designing scalable backend systems and seamless user experiences. Dedicated to writing clean, maintainable code that bridges performance and usability.              </p>
            </div>

              <div className="p-6">
                <h3 className="text-xl text-center font-semibold mb-3">What I Do</h3>
                <p className="text-center text-lg text-muted-foreground">
                    Started my journey by building end-to-end web applications and APIs that solve real-world problems. Over time, I’ve worked across backend systems, cloud platforms, and data pipelines, gaining practical experience through internships at Mphasis, Genamplify, and Infosys Springboard. I thrive in collaborative environments where technology meets impact.                </p>
              </div>

              <div className="p-6">
                <h3 className="text-xl text-center font-semibold mb-3">Beyond Code</h3>
                <p className="text-center text-lg text-muted-foreground">
                    Outside of development, I enjoy exploring emerging technologies, contributing to open-source projects, and mentoring peers on backend and cloud concepts. I believe in continuous learning, thoughtful problem-solving, and creating technology that genuinely makes a difference.                </p>
              </div>
          </div>
        </div>
    </section>
  );
};

export default About;
