import { Linkedin, Mail, Github, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 border-t border-border">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2">MAHI SAHU</h3>
            <p className="text-background/80 text-sm">
              Full Stack Java Developer | Internship Aspirant
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <a
                  href="#home"
                  className="hover:text-background transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-background transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-background transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-background transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/mahi-sahu-3377702b1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background text-foreground rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:sahumahi7777@gmail.com"
                className="w-10 h-10 bg-background text-foreground rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-background/20 mb-8" />

        {/* Copyright */}
        <div className="text-center text-sm text-background/80">
          <p>© {currentYear} MAHI SAHU. All rights reserved.</p>
          <p className="mt-2">Designed with ❤️ • Developed with passion</p>
        </div>
      </div>
    </footer>
  );
}
