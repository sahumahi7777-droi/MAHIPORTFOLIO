import { Mail, Phone, Linkedin } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="section-container">
        <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-16 text-center fade-in">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="slide-in-left space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-3">
                {/* <div className="flex items-center gap-3 hover:translate-x-2 transition-transform">
                  <Phone size={20} className="text-foreground" />
                  <span className="text-muted-foreground">7558789568</span>
                </div> */}
                <div className="flex items-center gap-3 hover:translate-x-2 transition-transform">
                  <Mail size={20} className="text-foreground" />
                  <a href="mailto:sahumahi7777@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                    sahumahi7777@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 hover:translate-x-2 transition-transform">
                  <Linkedin size={20} className="text-foreground" />
                  <a href="https://www.linkedin.com/in/mahi-sahu-3377702b1" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-foreground pl-4">
                  <p className="font-semibold">Bachelor of Technology</p>
                  <p className="text-sm text-muted-foreground">Priyadarshini College of Enginnering</p>
                  <p className="text-sm text-muted-foreground">Electronics & Telecommunication</p>
                  <p className="text-sm text-muted-foreground">4th Year (Pursuing)</p>
                </div>
                <div className="border-l-4 border-foreground pl-4">
                  <p className="font-semibold">Intermediate</p>
                  <p className="text-sm text-muted-foreground">VMV College</p>
                </div>
                <div className="border-l-4 border-foreground pl-4">
                  <p className="font-semibold">Matriculation</p>
                  <p className="text-sm text-muted-foreground">Shreyas High School</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - About & Certification */}
          <div className="slide-in-right space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Objective</h3>
              <p className="text-muted-foreground leading-relaxed">
                Motivated ETC engineering graduate aiming to apply strong problem-solving and software development skills in a Full Stack Java Developer internship, focusing on building efficient and user-friendly applications.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Certification</h3>
              <div className="space-y-3">
                <div className="bg-background rounded-lg p-4 border border-border hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">📱</div>
                    <div>
                      <p className="font-semibold">AICTE Android Development</p>
                      <p className="text-sm text-muted-foreground">Professional Development Course</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
