import { GraduationCap, MapPin, Award } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const About = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.2 });

  const details = [
    {
      icon: MapPin,
      title: "Asal",
      description: "Mesuji Jaya, Kec. Mesuji Makmur, Ogan Komering Ilir, Sumatera Selatan",
    },
    {
      icon: GraduationCap,
      title: "Pendidikan",
      description: "Universitas Sains Al Qur'an - Teknik Informatika",
    },
    {
      icon: Award,
      title: "IPK",
      description: "3.74 / 4.00",
    },
  ];

  return (
    <section
      id="tentang"
      className="py-20 md:py-28 bg-card"
      ref={sectionRef as React.RefObject<HTMLElement>}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className={`text-center mb-12 reveal ${isVisible ? "visible" : ""}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tentang <span className="text-gradient">Saya</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <p
            className={`text-muted-foreground text-lg text-center mb-12 leading-relaxed reveal delay-200 ${isVisible ? "visible" : ""}`}
          >
            Saya adalah seorang Front-End Developer yang berfokus pada pengembangan aplikasi web dan mobile. 
            Dengan latar belakang pendidikan di Teknik Informatika dan pengalaman dalam membangun 
            antarmuka pengguna yang modern, saya berkomitmen untuk menciptakan solusi digital yang 
            berkualitas dan memenuhi kebutuhan klien.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {details.map((detail, index) => (
              <div
                key={detail.title}
                className={`bg-background p-6 rounded-xl border border-border hover:border-primary/50 transition-smooth group reveal-scale ${isVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${0.3 + index * 0.15}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-smooth">
                  <detail.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{detail.title}</h3>
                <p className="text-muted-foreground text-sm">{detail.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
