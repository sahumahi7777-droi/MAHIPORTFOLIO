import { useState, useEffect } from "react";
import { Download, Mail } from "lucide-react";

const skills = ["Java", "DSA", "MySQL", "JDBC", "Spring Boot"];

export default function HeroSection() {
  const [displayedSkill, setDisplayedSkill] = useState("");
  const [skillIndex, setSkillIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const delay = setTimeout(() => {
      const currentSkill = skills[skillIndex];

      if (!isDeleting && charIndex < currentSkill.length) {
        setDisplayedSkill(currentSkill.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayedSkill(currentSkill.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentSkill.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setSkillIndex((prev) => (prev + 1) % skills.length);
      }
    }, typingSpeed);

    return () => clearTimeout(delay);
  }, [charIndex, skillIndex, isDeleting]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "MAHI_SAHU_Resume.pdf";
    link.click();
  };

  const handleContactClick = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen pt-24 md:pt-32 pb-16 flex items-center">
      <div className="section-container w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="fade-in space-y-6">
            <div className="space-y-3">
              <h3 className="text-xl md:text-2xl text-muted-foreground font-small">
               <u>Hello</u> , I am
              </h3>
              <h1 className="text-5xl md:text-6xl font-bold font-poppins leading-tight">
                MAHI SAHU
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                Full Stack Java Developer
                <br />
                (Internship Aspirant)
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              I create efficient, responsive, and user-friendly applications.
            </p>

            {/* Typing Animation */}
            <div className="h-12 flex items-center">
              <div className="text-lg font-medium">
                <span className="text-muted-foreground">Skilled in: </span>
                <span className="typing font-semibold text-foreground">
                  {displayedSkill}
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-lg font-medium hover:bg-muted-foreground transition-all duration-200 hover:shadow-lg hover:scale-105"
              >
                <Download size={20} />
                Download Resume
              </button>
              <button
                onClick={handleContactClick}
                className="inline-flex items-center gap-2 border-2 border-foreground px-6 py-3 rounded-lg font-medium hover:bg-foreground hover:text-background transition-all duration-200"
              >
                <Mail size={20} />
                Contact Me
              </button>
            </div>
          </div>

          {/* Right Image Placeholder */}
          {/* Right Image */}
<div className="slide-in-right flex justify-center">
  <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden border-4 border-foreground shadow-2xl">
    <img
      src="/pic.jpg"
      alt="Mahi Sahu"
      className="w-full h-full object-cover"
    />
  </div>
</div>
        </div>
      </div>
    </section>
  );
}
