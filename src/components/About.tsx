import { Download } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const About = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.2 });

  const personalInfo = [
    { label: "Name", value: "Ahmad Sodik" },
    { label: "Age", value: "22 Years" },
    { label: "Nationality", value: "Indonesia" },
    { label: "Phone", value: "+62 812-2880-3784" },
    { label: "Language", value: "Indonesia, English" },
    { label: "Freelance", value: "Available", highlight: true },
  ];

  return (
    <section
      id="tentang"
      className="py-20 md:py-28 bg-card"
      ref={sectionRef as React.RefObject<HTMLElement>}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className={`text-center mb-12 reveal ${isVisible ? "visible" : ""}`}>
          <p className="text-muted-foreground uppercase tracking-widest text-sm mb-2">ABOUT ME</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            I Develop System<br />
            <span className="text-gradient">that Work</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
          {/* Left - Description */}
          <div className={`reveal-left ${isVisible ? "visible" : ""}`} style={{ transitionDelay: "0.2s" }}>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Saya adalah seorang Front-End Developer yang berfokus pada pengembangan aplikasi web dan mobile. 
              Dengan latar belakang pendidikan di Teknik Informatika dan pengalaman dalam membangun 
              antarmuka pengguna yang modern, saya berkomitmen untuk menciptakan solusi digital yang 
              berkualitas dan memenuhi kebutuhan klien.
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary border border-border rounded-lg text-foreground font-medium hover:border-primary/50 transition-smooth hover:scale-105"
            >
              <Download className="w-5 h-5" />
              Download CV
            </a>
          </div>

          {/* Right - Personal Info */}
          <div className={`reveal-right ${isVisible ? "visible" : ""}`} style={{ transitionDelay: "0.3s" }}>
            <div className="bg-background p-6 rounded-2xl border border-border">
              <div className="space-y-4">
                {personalInfo.map((info, index) => (
                  <div 
                    key={info.label} 
                    className="flex items-center justify-between py-2 border-b border-border last:border-b-0"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-muted-foreground">{info.label}</span>
                    <span className={info.highlight ? "text-primary font-medium" : "text-foreground"}>
                      {info.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
