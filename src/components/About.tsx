import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const highlights = [
    "5+ Years Experience",
    "50+ Projects Completed",
    "Remote-First",
    "Open Source Contributor"
  ];

  return (
    <section id="about" className="section-padding bg-secondary/20">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate developer with a love for creating innovative solutions and beautiful user experiences
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <Card className="glass-card p-8">
                <CardContent className="p-0">
                  <p className="text-lg leading-relaxed mb-6">
                    I'm a full-stack developer with a passion for creating seamless digital experiences. 
                    My journey in tech started 5 years ago, and since then, I've been dedicated to 
                    building applications that not only function perfectly but also delight users.
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    I specialize in React, Node.js, and modern web technologies. When I'm not coding, 
                    you'll find me exploring new frameworks, contributing to open source projects, 
                    or sharing knowledge with the developer community.
                  </p>
                  <p className="text-lg leading-relaxed">
                    I believe in clean code, user-centered design, and the power of collaboration 
                    to solve complex problems.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="animate-slide-in-right">
              <div className="grid grid-cols-2 gap-6">
                {highlights.map((highlight, index) => (
                  <Card key={index} className="glass-card hover:shadow-glow transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <Badge variant="secondary" className="mb-3 text-sm px-3 py-1">
                        {highlight}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <Card className="glass-card mt-6 p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-4 gradient-text">
                    Current Focus
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      Building scalable web applications
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      Exploring AI/ML integration
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      Mentoring junior developers
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;