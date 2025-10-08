import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import mcatIMG from "@/components/img/mcat.png";
import hosannaIMG from "@/components/img/hosanna.png";
import cloudcentIMG from "@/components/img/cloudcents.png";
import nabualawIMG from "@/components/img/nabualaw.png";
import amgImg from "@/components/img/amg_connect.png";
import mssImg from "@/components/img/mss.png";
import seacIMG from "@/components/img/seac.png";
import eccatImg from "@/components/img/eccat.png";

const projects = [
  {
    title: "Content Management System",
    description: "MCAT Spec is a custom content management system designed to manage architectural specifications and product data efficiently.",
    tech: ["Laravel", "MySQL", "API Integration", "Mailjet", "Stripe"],
    image: mcatIMG,
    link: "https://stage.mcatspec.com/",
  },
  {
    title: "ERP System",
    description: "Hosanna Eternal ERP System It is streamlines and automates key business operations across departments such as Inventory, Sales, Human Resources, and Resource Management.",
    tech: ["Laravel", "MySQL", "RESTful API", "Bootstrap", "jQuery"],
    image: hosannaIMG,
    link: "https://app.hosanna.com.sg/login",
  },
  {
    title: "CloudCents - WordPress Website",
    description: "CloudCents is a digital platform powered by WordPress, designed to showcase and provide core information for CloudCents Corp.",
    tech: ["WordPress", "PHP", "MySQL", "Elementor (or WP page builder)", "Contact Form Plugin", "SSL / HTTPS"],
    image: cloudcentIMG,
    link: "https://cloudcentsph.net/",
  },
  {
    title: "Nabua Law – WordPress Website",
    description: "Nabua Law is a full-service law firm based in Quezon City, Philippines. Their WordPress site serves as a digital storefront and information hub, highlighting the firm’s background, practice areas, legal updates, and contact channels.",
    tech: ["WordPress", "PHP", "MySQL", "Gutenberg / Page Builder", "Contact Form Plugin", "SSL / HTTPS"],
    image: nabualawIMG,
    link: "https://nabualaw.com/",
  },
  {
    title: "Email Marketing Campaign",
    description: "Connect by AMG LLC is likely a web portal or dashboard platform (e.g. client portal, partner portal, or SaaS interface). The “connect” prefix suggests it's used for user authentication, data access, or resource management by stakeholders of AMG LLC.",
    tech: ["Laravel" , "Mailcoach Integration", "Laravel Filament", "MySQL", "Authentication / Access Control", "API Backend", "Secure HTTPS"],
    image: amgImg,
    link: "#",
  },
  {
    title: "Mind Specialists School – Educational Training System (ETS)",
    description: "The ETS platform supports student enrollment, academic programs, and school operations with a student-centric, semi-progressive curriculum",
    tech: ["Codeigniter", "Email integration", "Mysql"],
    image: mssImg,
    link: "https://mindspecialistsschool.com/",
  },
  {
    title: "Southeastern College – Educational Training System (ETS)",
    description: "The ETS platform supports student enrollment, academic programs, and school operations with a student-centric, semi-progressive curriculum",
    tech: ["Codeigniter", "Email integration", "Mysql", "Textblast Integration"],
    image: seacIMG,
    link: "https://app.southeastern.com.ph/site/login",
  },
  {
    title: "Early Christian College of Arts and Technology Inc. – Educational Training System (ETS)",
    description: "The ETS platform supports student enrollment, academic programs, and school operations with a student-centric, semi-progressive curriculum",
    tech: ["Codeigniter", "Email integration", "Mysql", "Textblast Integration"],
    image: eccatImg,
    link: "https://website.eccat.online/",
  },
];

const Projects = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-card" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of projects that showcase my expertise in full-stack development, API integration, and modern web technologies.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="overflow-hidden bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-foreground">{project.title}</h3>
                <p className="text-foreground/80 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="default" size="sm" className="gap-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                      <ExternalLink className="w-4 h-4" />
                      View Project
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
