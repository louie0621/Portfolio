import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Web Developer",
    company: "Red Circle Global",
    period: "Nov 2022 - Present",
    description: [
      "Developed websites using the Laravel framework with seamless API integrations",
      "Created dynamic web applications using CodeIgniter framework",
      "Built and customized WordPress websites, including theme and plugin development",
      "Implemented Git for version control and efficient collaboration",
      "Deployed and managed web applications on various server environments",
      "Maintained client servers with ongoing support and monitoring",
    ],
  },
  {
    title: "Laravel Developer (Part Time)",
    company: "Codedibility",
    period: "December 2024 - May 2025",
    description: [
      "Designed and developed an all-in-one ERP solution using the Laravel framework",
      "Built and integrated core modules including Inventory, Sales, HR, and Resource Management",
      "Developed RESTful APIs for seamless data exchange between system components",
    ],
  },
  {
    title: "Junior Laravel Developer (Part Time)",
    company: "Alchemy Media Group",
    period: "May 2023 - May 2024",
    description: [
      "Implemented Git for version control to manage codebase changes",
      "Debugged websites to identify and resolve issues",
      "Developed company websites using Laravel with API integrations",
      "Collaborated with cross-functional teams to deliver customized solutions",
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
      "Monitor IT Inventory purchases and deployment to a specific user.",
      "Maintain Point of Sale application."
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
