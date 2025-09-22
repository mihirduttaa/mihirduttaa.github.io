import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border/20">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Mihir Dutta. Software Engineer specializing in scalable backend systems
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;