import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Web Developer",
    company: "Red Circle Global",
    period: "Nov 2022 - Present",
    description: [
      "Developed and deployed custom web solutions using Laravel, CodeIgniter, and WordPress to meet client business needs",
      "Integrated third-party APIs and built RESTful services to ensure seamless system communication",
      "Designed and implemented an all-in-one ERP system with core modules for Inventory, Sales, HR, and Resource Management",
      "Managed application deployment, server maintenance, and monitoring to ensure performance, security, and uptime",
      "Utilized Git for efficient collaboration, version control, and rapid issue resolution",
      "Worked closely with clients and cross-functional teams to deliver scalable, reliable, and tailored solutions"
    ],
  },
  {
    title: "IT Specialist",
    company: "LCG Group of Company",
    period: "Feb 2022 - Oct 2022",
    description: [
      "Developed and maintained company web application and official website",
      "Repaired and troubleshooted computer hardware and software",
      "Installed operating systems and applications on desktops and laptops",
      "Provide online support through Teamviewer or Anydesk application to company branches.",
      "Monitoring Inventory purchases and deployment to a specific user.",
      "Maintain Point of Sale application.",
      "Maintained and monitored company servers, including configuration, updates, backups, and basic security management"
    ],
  },
  {
    title: "Point of Sales Technician",
    company: "Gaisano City Mall",
    period: "Apr 2021 - Feb 2022",
    description: [
      "Repaired and troubleshooted computer hardware and software",
      "Troubleshooted networking errors ensuring seamless connectivity",
      "Maintained Point of Sale application for reliable performance",
    ],
  },
];

const Experience = () => {
  return (
    <section className="py-20 px-6" id="experience">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Experience
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="p-8 bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{exp.title}</h3>
                  <div className="flex flex-wrap gap-2 md:gap-4 mb-4 text-muted-foreground">
                    <span className="font-medium">{exp.company}</span>
                    <span>•</span>
                    <span>{exp.period}</span>
                  </div>
                  
                  <ul className="space-y-2 text-foreground/80">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-primary mt-1.5">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
