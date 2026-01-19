import profileImage from "@/assets/profile.jpeg";
import { ArrowDown, Github, Linkedin, Instagram, Youtube } from "lucide-react";

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/ahmadsodik4717", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ahmadsodik4717/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/ahmadsodik4717/", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <section
      id="beranda"
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at top, hsl(220, 25%, 12%) 0%, hsl(220, 20%, 7%) 100%)"
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 border border-primary/30 rounded-full" />
        <div className="absolute top-40 right-32 w-24 h-24 border border-primary/20 rounded-full" />
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-primary/20 rounded-full" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Profile Image */}
          <div className="relative mb-8 animate-fade-in">
            <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-primary/40 shadow-glow">
              <img
                src={profileImage}
                alt="Ahmad Sodik - AsDev"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full animate-pulse" />
            <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-accent rounded-full animate-pulse delay-300" />
          </div>

          {/* Text Content */}
          <div className="animate-fade-in-up opacity-0 delay-200">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hello, I'm <span className="text-gradient">Ahmad Sodik,</span>
            </h1>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gradient mb-6">
              Front-end Developer
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              Spesialis pengembangan Web & Android dengan fokus pada antarmuka pengguna yang modern, responsif, dan user-friendly.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 mb-8 animate-fade-in-up opacity-0 delay-400">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-secondary/80 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/50 border border-transparent transition-smooth hover:scale-110"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in-up opacity-0 delay-500">
            <a
              href="#kontak"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-primary text-primary-foreground font-semibold rounded-full shadow-glow hover:shadow-hover transition-smooth hover:scale-105"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#tentang" className="text-muted-foreground hover:text-primary transition-smooth">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
