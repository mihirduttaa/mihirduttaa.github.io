import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "PHP", "SQL", "Python", "C", "C++"],
      color: "bg-blue-500/10 text-blue-400 border-blue-400/20"
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Spring", "Hibernate", "Maven", "JUnit", "Symfony", "Payara"],
      color: "bg-green-500/10 text-green-400 border-green-400/20"
    },
    {
      title: "Cloud & DevOps",
      skills: ["Docker", "Kubernetes", "Google Cloud", "CI/CD", "ElasticSearch", "Kibana"],
      color: "bg-purple-500/10 text-purple-400 border-purple-400/20"
    },
    {
      title: "Tools & Technologies",
      skills: ["IntelliJ", "PHPStorm", "Postman", "DBeaver", "Git", "RESTful APIs"],
      color: "bg-pink-500/10 text-pink-400 border-pink-400/20"
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit built through years of hands-on experience and continuous learning
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={category.title} 
                className={`glass-card hover:shadow-glow transition-all duration-300 animate-scale-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6 gradient-text">
                    {category.title}
                  </h3>
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className={`${category.color} w-full justify-center py-2`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center animate-fade-in">
            <Card className="glass-card inline-block">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 gradient-text">
                  Methodologies & Soft Skills
                </h3>
                <p className="text-muted-foreground mb-4">
                  Experienced in Agile development, SDLC, and cross-functional collaboration
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {["Leadership", "Problem Solving", "Communication", "Teamwork", "Agile", "SDLC"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="opacity-70">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;