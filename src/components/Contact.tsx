import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-card" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Let's Work Together
        </h2>
        <p className="text-muted-foreground mb-12 text-lg">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        
        <Card className="p-8 bg-gradient-to-br from-card to-card/50 border-border/50 animate-fade-in">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <a 
              href="mailto:louiecagas1210@gmail.com"
              className="flex items-center gap-4 p-4 rounded-lg border border-border/50 hover:border-primary/50 transition-all hover:shadow-glow group"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="text-foreground group-hover:text-primary transition-colors">louiecagas1210@gmail.com</p>
              </div>
            </a>
            
            <a 
              href="tel:+639654014030"
              className="flex items-center gap-4 p-4 rounded-lg border border-border/50 hover:border-primary/50 transition-all hover:shadow-glow group"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="text-foreground group-hover:text-primary transition-colors">+63 965 401 4030</p>
              </div>
            </a>
            
            <a 
              href="https://linkedin.com/in/louie-cagas-756937182"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-lg border border-border/50 hover:border-primary/50 transition-all hover:shadow-glow group"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Linkedin className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">LinkedIn</p>
                <p className="text-foreground group-hover:text-primary transition-colors">louie-cagas</p>
              </div>
            </a>
            
            <div className="flex items-center gap-4 p-4 rounded-lg border border-border/50">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="text-foreground">Gingoog City, Philippines</p>
              </div>
            </div>
          </div>
          
          <a href="mailto:louiecagas1210@gmail.com">
            <Button size="lg" className="w-full md:w-auto bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
              Send Me a Message
            </Button>
          </a>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
