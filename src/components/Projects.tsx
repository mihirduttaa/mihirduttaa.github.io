import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

const Projects = () => {
  const projects = [
    {
      title: "RCash R-Point Award System",
      description: "Led development of a scalable user rewards system rolled out in 3 phases, managing accounts of 15M+ monthly active users with real-time reward tracking.",
      image: project1,
      tech: ["Java", "Spring", "Microservices", "MySQL", "RESTful APIs", "Payment Integration"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "RCash BCP Migration",
      description: "Migrated 100+ PHP 5.4 batches to PHP 8.3 with Symfony framework. Directed 40+ batch migrations and reduced database load by 15%.",
      image: project2,
      tech: ["PHP 8.3", "Symfony", "Oracle", "MySQL", "Shell Scripts", "Batch Processing"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "RPay Modernization",
      description: "Migrated legacy monolithic codebase to microservices architecture, improving processing efficiency by 30% and enhancing scalability.",
      image: project3,
      tech: ["Microservices", "MySQL", "Java", "Spring Boot", "Docker", "Kubernetes"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-secondary/20">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work, demonstrating problem-solving skills and technical expertise
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title} 
                className={`glass-card group hover:shadow-glow transition-all duration-300 overflow-hidden animate-scale-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="icon" variant="secondary" className="h-8 w-8">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex justify-center">
                    <Button size="sm" variant="outline" className="w-full">
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="animate-fade-in">
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;