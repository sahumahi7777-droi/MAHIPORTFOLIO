import { useEffect, useRef, useState } from "react";

interface SkillWithProgress {
  name: string;
  level: number;
}

interface SkillSet {
  category: string;
  skills: (string | SkillWithProgress)[];
}

const skillsData: SkillSet[] = [
  {
    category: "Technical Skills",
    skills: [
      { name: "Java", level: 85 },
      { name: "DSA", level: 80 },
      { name: "MySQL", level: 80 },
      { name: "JDBC", level: 75 },
      { name: "Spring Boot", level: 60 },
      { name: "JavaScript", level: 70 },
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      "Quick Learner",
      "Teamwork & Communication",
      "Adaptable",
      "Attention to Detail",
      "Problem Solving",
      "Time Management",
    ],
  },
];

function SkillBar({ skill }: { skill: SkillWithProgress }) {
  const [isVisible, setIsVisible] = useState(false);
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      setWidth(skill.level);
    }
  }, [isVisible, skill.level]);

  return (
    <div ref={ref} className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <span className="font-medium">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-foreground rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

function SkillBadge({ skill }: { skill: string }) {
  return (
    <div className="inline-block bg-foreground text-background px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-default">
      {skill}
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-16 text-center fade-in">
          Skills
        </h2>

        <div className="space-y-16">
          {skillsData.map((skillSet, index) => (
            <div
              key={skillSet.category}
              className={index % 2 === 0 ? "slide-in-left" : "slide-in-right"}
            >
              <h3 className="text-2xl font-bold mb-8">{skillSet.category}</h3>

              {skillSet.category === "Technical Skills" ? (
                <div className="space-y-6">
                  {skillSet.skills.map((skill) => (
                    <SkillBar
                      key={typeof skill === "string" ? skill : skill.name}
                      skill={
                        typeof skill === "string"
                          ? { name: skill, level: 75 }
                          : skill
                      }
                    />
                  ))}
                </div>
              ) : (
                <div className="flex flex-wrap gap-4">
                  {skillSet.skills.map((skill) => (
                    <SkillBadge
                      key={typeof skill === "string" ? skill : skill.name}
                      skill={typeof skill === "string" ? skill : skill.name}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
