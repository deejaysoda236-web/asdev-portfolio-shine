import profileImage from "@/assets/profile.jpeg";
import { ArrowDown, Code2, Smartphone } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="beranda"
      className="min-h-screen flex items-center justify-center pt-16 bg-gradient-hero relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float delay-300" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="relative animate-fade-in">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-glow animate-pulse-glow">
              <img
                src={profileImage}
                alt="Ahmad Sodik - AsDev"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Floating Icons */}
            <div className="absolute -top-4 -right-4 bg-card p-3 rounded-xl shadow-card animate-float">
              <Code2 className="w-6 h-6 text-primary" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-card p-3 rounded-xl shadow-card animate-float delay-200">
              <Smartphone className="w-6 h-6 text-primary" />
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center lg:text-left max-w-xl">
            <p className="text-primary font-medium mb-2 animate-fade-in-up opacity-0 delay-100">
              Halo, Saya
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in-up opacity-0 delay-200">
              Ahmad Sodik
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gradient mb-6 animate-fade-in-up opacity-0 delay-300">
              Front-End Developer
            </h2>
            <p className="text-muted-foreground text-lg mb-8 animate-fade-in-up opacity-0 delay-400">
              Spesialis pengembangan Web & Android dengan fokus pada antarmuka pengguna yang modern, responsif, dan user-friendly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up opacity-0 delay-500">
              <a
                href="#kontak"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-primary text-primary-foreground font-semibold rounded-lg shadow-glow hover:shadow-hover transition-smooth hover:scale-105"
              >
                Hubungi Saya
              </a>
              <a
                href="#layanan"
                className="inline-flex items-center justify-center px-8 py-3 bg-secondary text-foreground font-semibold rounded-lg border border-border hover:border-primary/50 transition-smooth hover:scale-105"
              >
                Lihat Layanan
              </a>
            </div>
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
