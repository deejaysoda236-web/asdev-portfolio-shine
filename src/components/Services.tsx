import { Code2, Server, Palette } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Services = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  const services = [
    {
      icon: Code2,
      title: "Front-End Developer",
      description:
        "Membangun antarmuka pengguna yang modern, responsif, dan interaktif menggunakan React.js, Next.js, dan Tailwind CSS.",
    },
    {
      icon: Server,
      title: "Back-End Developer",
      description:
        "Mengembangkan API dan server-side logic dengan Node.js, Express, dan berbagai database seperti PostgreSQL dan MongoDB.",
    },
    {
      icon: Palette,
      title: "Web Design",
      description:
        "Mendesain UI/UX yang menarik dan user-friendly dengan fokus pada pengalaman pengguna yang optimal.",
    },
  ];

  return (
    <section
      id="layanan"
      className="py-20 md:py-28 bg-background"
      ref={sectionRef as React.RefObject<HTMLElement>}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className={`text-center mb-12 reveal ${isVisible ? "visible" : ""}`}>
          <h2 className="text-3xl md:text-4xl font-bold">
            Services
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            what I offer
          </p>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-smooth group text-center reveal-scale ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${0.2 + index * 0.15}s` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-smooth">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
