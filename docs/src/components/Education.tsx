import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Electronics and Communications Engineering",
      institution: "Medi-Caps University, Indore",
      year: "June 2022",
      icon: GraduationCap
    },
    {
      degree: "Class 12",
      institution: "CMC School, Jabalpur",
      year: "March 2018",
      grade: "75.2%",
      icon: GraduationCap
    }
  ];

  const certifications = [
    {
      title: "MTA: Introduction to Programming Using Java",
      issuer: "Microsoft",
      date: "July 2019",
      icon: Award
    },
    {
      title: "MTA: Introduction to Programming Using Python",  
      issuer: "Microsoft",
      date: "June 2020",
      icon: Award
    }
  ];

  return (
    <section id="education" className="section-padding bg-secondary/20">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Education & <span className="gradient-text">Certifications</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Academic foundation and professional certifications that drive my technical expertise
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-semibold mb-8 gradient-text text-center">
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index} className="glass-card hover:shadow-glow transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <edu.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold mb-2">{edu.degree}</h4>
                          <p className="text-muted-foreground mb-2">{edu.institution}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4 mr-2" />
                              {edu.year}
                            </div>
                            {edu.grade && (
                              <Badge variant="secondary">{edu.grade}</Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Certifications */}
            <div className="animate-slide-in-right">
              <h3 className="text-2xl font-semibold mb-8 gradient-text text-center">
                Certifications
              </h3>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <Card key={index} className="glass-card hover:shadow-glow transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                          <cert.icon className="h-6 w-6 text-accent" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold mb-2">{cert.title}</h4>
                          <p className="text-muted-foreground mb-2">{cert.issuer}</p>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-2" />
                            {cert.date}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <Card className="glass-card mt-6 p-6">
                <CardContent className="p-0 text-center">
                  <h4 className="text-lg font-semibold mb-4 gradient-text">
                    Professional Development
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Committed to continuous learning and staying updated with latest technologies
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    <Badge variant="outline" className="text-xs">Agile Methodologies</Badge>
                    <Badge variant="outline" className="text-xs">Cross-functional Collaboration</Badge>
                    <Badge variant="outline" className="text-xs">SDLC</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;