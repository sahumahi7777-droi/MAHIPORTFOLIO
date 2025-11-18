import { ExternalLink, Code2 } from "lucide-react";

interface Project {
  title: string;
  role: string;
  tech: string[];
  description: string[];
  features: string[];
}

const projects: Project[] = [
  {
    title: "Hotel Reservation System",
    role: "Developer",
    tech: ["Java", "MySQL", "JDBC"],
    description: [
      "Developed a comprehensive hotel booking system with full CRUD operations",
      "Integrated MySQL database with JDBC for efficient backend data management",
    ],
    features: [
      "Add, update, and delete hotel rooms",
      "Efficient room management system",
      "Database-driven backend",
      "User-friendly interface",
    ],
  },
  {
    title: "Arduino Obstacle Detection Using IR Sensor",
    role: "Developer",
    tech: ["Arduino", "Embedded C", "IR Sensors"],
    description: [
      "Designed and implemented an obstacle detection system using Arduino microcontroller",
      "Integrated IR sensors for real-time obstacle detection and response",
    ],
    features: [
      "Real-time obstacle detection",
      "Arduino-based control system",
      "IR sensor integration",
      "Embedded programming",
    ],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-16 text-center fade-in">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-background rounded-lg border border-border p-8 hover:shadow-2xl hover:border-foreground transition-all duration-300 ${
                index % 2 === 0 ? "slide-in-left" : "slide-in-right"
              }`}
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <div className="space-y-4">
                {/* Header */}
                <div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground font-medium">Role: {project.role}</p>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  {project.description.map((desc, i) => (
                    <p key={i} className="text-muted-foreground text-sm leading-relaxed">
                      {desc}
                    </p>
                  ))}
                </div>

                {/* Features */}
                <div>
                  <p className="font-semibold text-sm mb-3">Key Features:</p>
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-muted-foreground text-sm flex gap-2">
                        <span className="text-foreground">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-sm mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-secondary text-foreground text-xs px-3 py-1 rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-4">
                  <button className="flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors">
                    <Code2 size={16} />
                    View Code
                  </button>
                  <button className="flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors">
                    <ExternalLink size={16} />
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
