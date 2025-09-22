import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const highlights = [
    "2+ Years Experience",
    "Rakuten India Engineer",
    "15M+ Users Impacted",
    "Legacy Migration Expert"
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
              Results-oriented Software Engineer at Rakuten India with expertise in scalable backend systems
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <Card className="glass-card p-8">
                <CardContent className="p-0">
                  <p className="text-lg leading-relaxed mb-6">
                    I'm a results-oriented Software Engineer with 2+ years of experience developing 
                    scalable backend systems, modernizing legacy monoliths, and leading technical migrations. 
                    Currently working at Rakuten India, where I've impacted 15M+ monthly active users.
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    I specialize in Java, PHP, Spring Framework, and Microservices architecture. 
                    My expertise includes migrating legacy systems, optimizing database performance, 
                    and building batch processing systems that handle 600M+ records efficiently.
                  </p>
                  <p className="text-lg leading-relaxed">
                    I'm passionate about solving complex technical challenges, cross-functional 
                    collaboration in Agile environments, and continuous learning in software engineering.
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
                      Leading RCash R-Point Award System development
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      Microservices architecture & cloud technologies
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      Team leadership & cross-functional collaboration
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