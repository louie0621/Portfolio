import { Card } from "@/components/ui/card";
import { Code2, Server, GitBranch, Cloud, Settings} from "lucide-react";

const skillCategories = [
  {
    icon: Code2, // Programming
    title: "Programming Languages",
    skills: ["PHP", "CSS3", "JavaScript", "HTML5", "Vue.js", "jQuery", "Bootstrap", "Tailwind CSS", "Sass", "AJAX", "RESTful APIs", "JSON"],
  },
  {
    icon: Server, // Frameworks & CMS
    title: "Frameworks & CMS",
    skills: ["Laravel", "CodeIgniter", "WordPress"],
  },
  {
    icon: GitBranch, // Version Control & Tools
    title: "Version Control & Tools",
    skills: ["Git", "GitHub", "VS Code", "XAMPP", "phpMyAdmin", "Postman", "Composer", "npm"],
  },
  {
    icon: Cloud, // Server, Hosting & Deployment
    title: "Server, Hosting & Deployment",
    skills: ["Hostinger", "GoDaddy", "SiteGround", "cPanel", "Linux", "Server Setup & Deployment", "API Integration"],
  },
  {
    icon: Settings, // Additional Skills / Misc
    title: "Additional Skills",
    skills: ["RESTful API development", "Database Management (MySQL)", "Debugging & Troubleshooting", "Responsive Web Design", "Performance Optimization", "Cross-Browser Compatibility", "SEO Best Practices", "Client Communication & Collaboration"],
  },
];


const Skills = () => {
  return (
    <section className="py-20 px-6" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>

                <h3 className="text-xl font-bold mb-4 text-foreground">{category.title}</h3>

                <ul className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="flex items-center gap-2 text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
