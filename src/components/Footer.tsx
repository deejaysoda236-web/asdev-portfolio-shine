import { Github, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/ahmadsodik4717", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ahmadsodik4717", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/ahmadsodik4717", label: "Instagram" },
  ];

  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <a href="#beranda" className="text-2xl font-bold text-gradient">
              AsDev
            </a>
            <p className="text-muted-foreground text-sm mt-1">
              Front-End Web & Android Developer
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-smooth hover:scale-110"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} AsDev - Ahmad Sodik. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
