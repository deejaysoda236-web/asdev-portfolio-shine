import { Github, Linkedin, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/ahmadsodik4717", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ahmadsodik4717/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/ahmadsodik4717/", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          {/* Name */}
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ahmad Sodik
          </h3>

          {/* Social Links */}
          <div className="flex items-center gap-4 mb-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-smooth hover:scale-110"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Ahmad Sodik. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
