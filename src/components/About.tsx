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
                  A software engineer with hands-on experience in full-stack development, cloud technologies, and data analytics. Skilled in Python, Java, React.js, and Azure, I am dedicated to delivering efficient and impactful software solutions through a strong foundation in both frontend and backend technologies.
              </p>
            </div>

              <div className="p-6">
                <h3 className="text-xl text-center font-semibold mb-3">What I Do</h3>
                <p className="text-center text-lg text-muted-foreground">
                  I specialize in full-stack development, cloud technologies, and data analytics. My work involves building efficient and impactful software solutions using technologies such as Python, Java, React.js, and Azure, with a strong emphasis on both frontend and backend development.
                </p>
              </div>

              <div className="p-6">
                <h3 className="text-xl text-center font-semibold mb-3">Beyond Code</h3>
                <p className="text-center text-lg text-muted-foreground">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge through mentoring and writing. I believe in continuous learning and staying ahead of industry trends.
                </p>
              </div>
          </div>
        </div>
    </section>
  );
};

export default About;
