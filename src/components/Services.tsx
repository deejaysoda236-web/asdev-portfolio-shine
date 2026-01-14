import { Globe, Smartphone, Palette, Rocket, Code, Settings } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Services = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  const services = [
    {
      icon: Globe,
      title: "Pembuatan Website",
      description:
        "Website modern, responsif, dan SEO-friendly menggunakan teknologi terkini seperti React, Next.js, dan Tailwind CSS.",
      features: ["Landing Page", "Company Profile", "E-Commerce", "Web Application"],
    },
    {
      icon: Smartphone,
      title: "Aplikasi Android",
      description:
        "Aplikasi Android native dan cross-platform dengan antarmuka yang intuitif dan performa optimal.",
      features: ["Native Android", "React Native", "UI/UX Modern", "Play Store Ready"],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Desain antarmuka pengguna yang menarik, user-friendly, dan sesuai dengan branding Anda.",
      features: ["Wireframing", "Prototyping", "Design System", "Responsive Design"],
    },
    {
      icon: Rocket,
      title: "Optimasi & SEO",
      description:
        "Optimasi performa website dan SEO untuk meningkatkan visibilitas di mesin pencari.",
      features: ["Speed Optimization", "SEO On-Page", "Core Web Vitals", "Analytics Setup"],
    },
    {
      icon: Code,
      title: "Konsultasi Tech",
      description:
        "Konsultasi teknis untuk membantu Anda memilih teknologi dan solusi terbaik untuk proyek Anda.",
      features: ["Tech Stack Selection", "Architecture Design", "Code Review", "Best Practices"],
    },
    {
      icon: Settings,
      title: "Maintenance",
      description:
        "Layanan pemeliharaan dan update berkala untuk memastikan aplikasi Anda tetap berjalan optimal.",
      features: ["Bug Fixing", "Security Updates", "Feature Updates", "Performance Monitoring"],
    },
  ];

  return (
    <section
      id="layanan"
      className="py-20 md:py-28 bg-card"
      ref={sectionRef as React.RefObject<HTMLElement>}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className={`text-center mb-12 reveal ${isVisible ? "visible" : ""}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Layanan <span className="text-gradient">Saya</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Saya menyediakan berbagai layanan pengembangan web dan aplikasi untuk membantu bisnis Anda tumbuh di era digital.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`bg-background p-6 rounded-2xl border border-border hover:border-primary/50 transition-smooth group hover:shadow-hover reveal-scale ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${0.15 + index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-smooth">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
