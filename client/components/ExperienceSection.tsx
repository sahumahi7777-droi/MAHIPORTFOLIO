import { Briefcase, Calendar, MapPin } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    title: "Frontend Developer (Intern)",
    company: "Codemate",
    location: "Remote",
    period: "20 Dec – 20 Jan",
    description: [
      "Built responsive UI using JavaScript and modern web technologies",
      "Collaborated with cross-functional teams to deliver quality solutions",
      "Improved user experience and performance of applications",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="section-container">
        <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-16 text-center fade-in">
          Experience
        </h2>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative fade-in"
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="hidden md:block absolute left-6 top-20 h-24 w-0.5 bg-gradient-to-b from-foreground to-border" />
              )}

              {/* Timeline dot */}
              <div className="relative">
                <div className="flex gap-8">
                  {/* Dot */}
                  <div className="flex flex-col items-center pt-1">
                    <div className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center flex-shrink-0 shadow-lg hover:scale-110 transition-transform">
                      <Briefcase size={24} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-12">
                    <div className="bg-background rounded-lg p-6 border border-border hover:shadow-xl transition-shadow">
                      <div className="space-y-3">
                        <div>
                          <h3 className="text-xl font-bold">{exp.title}</h3>
                          <p className="text-muted-foreground font-medium">{exp.company}</p>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin size={16} />
                            {exp.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            {exp.period}
                          </div>
                        </div>

                        <ul className="space-y-2 mt-4">
                          {exp.description.map((item, i) => (
                            <li key={i} className="text-muted-foreground flex gap-2">
                              <span className="text-foreground font-bold">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
