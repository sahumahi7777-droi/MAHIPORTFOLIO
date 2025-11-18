import { PenTool } from "lucide-react";

interface Hobby {
  name: string;
  emoji: string;
  description: string;
}

const hobbies: Hobby[] = [
  {
    name: "Sketching",
    emoji: "✏️",
    description: "Creating artistic sketches and digital drawings",
  },
  {
    name: "Coding",
    emoji: "💻",
    description: "Building innovative solutions and exploring new technologies",
  },
  {
    name: "Learning",
    emoji: "📚",
    description: "Continuous learning and self-improvement",
  },
  {
    name: "Problem Solving",
    emoji: "🧩",
    description: "Solving complex problems and puzzles",
  },
];

export default function HobbiesSection() {
  return (
    <section id="hobbies" className="py-20">
      <div className="section-container">
        <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-16 text-center fade-in">
          Hobbies & Interests
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {hobbies.map((hobby, index) => (
            <div
              key={hobby.name}
              className="bg-background rounded-lg p-6 border border-border text-center hover:shadow-xl hover:scale-105 transition-all duration-300 fade-in"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="text-5xl mb-3">{hobby.emoji}</div>
              <h3 className="text-lg font-bold mb-2">{hobby.name}</h3>
              <p className="text-sm text-muted-foreground">{hobby.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
