import { Zap, Users, Eye, Brain } from "lucide-react";

interface Strength {
  title: string;
  description: string;
  icon: typeof Zap;
}

const strengths: Strength[] = [
  {
    title: "Quick Learner",
    description: "Rapidly acquire new skills and technologies to adapt to evolving project requirements",
    icon: Brain,
  },
  {
    title: "Teamwork & Communication",
    description: "Excellent collaboration and communication skills to work effectively with diverse teams",
    icon: Users,
  },
  {
    title: "Attention to Detail",
    description: "Meticulous approach to code quality and deliverables ensuring excellence in every task",
    icon: Eye,
  },
  {
    title: "Problem Solving",
    description: "Strong analytical skills to identify challenges and implement effective solutions",
    icon: Zap,
  },
];

export default function StrengthSection() {
  return (
    <section id="strengths" className="py-20 bg-secondary/30">
      <div className="section-container">
        <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-16 text-center fade-in">
          Strengths
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((strength, index) => {
            const Icon = strength.icon;
            return (
              <div
                key={strength.title}
                className="bg-background rounded-lg p-6 border border-border hover:shadow-xl hover:border-foreground transition-all duration-300 group fade-in"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-foreground text-background rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{strength.title}</h3>
                    <p className="text-muted-foreground text-sm mt-2">
                      {strength.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
