import { Button } from "@/components/ui/button";
import { Mail, Linkedin, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card pointer-events-none" />
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          LOUIE CAGAS
        </h1>
        
        <p className="text-2xl md:text-3xl text-muted-foreground mb-8">
          Full Stack Web Developer
        </p>
        
        <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          Dynamic developer with over 2+ years of experience crafting robust web solutions using PHP, Laravel, CodeIgniter, Wordpress, and modern JavaScript frameworks.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <a href="mailto:louiecagas1210@gmail.com">
            <Button variant="default" size="lg" className="gap-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
              <Mail className="w-4 h-4" />
              Get in Touch
            </Button>
          </a>
          
          <a href="https://linkedin.com/in/louie-cagas-756937182" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="gap-2 border-primary/50 hover:bg-primary/10">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </Button>
          </a>
        </div>
        
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span>Gingoog City, Misamis Oriental, Philippines</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
