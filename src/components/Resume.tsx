import { useScrollReveal } from "@/hooks/useScrollReveal";
import { GraduationCap, Briefcase } from "lucide-react";

const Resume = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  const education = [
    {
      period: "2020 - 2024",
      title: "Teknik Informatika",
      institution: "Universitas Sains Al Qur'an",
      description: "IPK 3.74 / 4.00 - Fokus pada pengembangan web dan mobile",
    },
    {
      period: "2017 - 2020",
      title: "IPA",
      institution: "MAN 1 Mesuji",
      description: "Lulusan dengan prestasi akademik yang baik",
    },
  ];

  const experience = [
    {
      period: "2023 - Present",
      title: "Freelance Developer",
      company: "Self Employed",
      description: "Membangun aplikasi web dan mobile untuk berbagai klien. Fokus pada React.js, Next.js, dan Android development.",
    },
    {
      period: "2022 - 2023",
      title: "Frontend Developer Intern",
      company: "Tech Company",
      description: "Mengembangkan antarmuka pengguna dengan React.js dan TypeScript. Kolaborasi tim menggunakan Git.",
    },
  ];

  const knowledges = [
    "Data Structures",
    "OOP",
    "Clean Code",
    "Git",
    "REST API",
    "Responsive Design",
    "UI/UX",
    "Agile",
  ];

  const skills = [
    { name: "JavaScript", level: 88 },
    { name: "TypeScript", level: 85 },
    { name: "React.js", level: 90 },
    { name: "Kotlin", level: 80 },
  ];

  return (
    <section
      id="resume"
      className="py-20 md:py-28 bg-background"
      ref={sectionRef as React.RefObject<HTMLElement>}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className={`text-center mb-16 reveal ${isVisible ? "visible" : ""}`}>
          <h2 className="text-3xl md:text-4xl font-bold">
            R E S U M E
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Education & Experience */}
          <div className="space-y-12">
            {/* Education */}
            <div className={`reveal-left ${isVisible ? "visible" : ""}`} style={{ transitionDelay: "0.2s" }}>
              <h3 className="text-2xl font-bold mb-6">Education</h3>
              <div className="space-y-6">
                {education.map((item, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-primary/30 pb-6 last:pb-0">
                    <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] bg-primary rounded-full flex items-center justify-center">
                      <GraduationCap className="w-2 h-2 text-primary-foreground" />
                    </div>
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full mb-2">
                      {item.period}
                    </span>
                    <h4 className="text-lg font-semibold text-foreground">{item.title}</h4>
                    <p className="text-muted-foreground text-sm mb-1">{item.institution}</p>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Working Experience */}
            <div className={`reveal-left ${isVisible ? "visible" : ""}`} style={{ transitionDelay: "0.4s" }}>
              <h3 className="text-2xl font-bold mb-6">Working Experience</h3>
              <div className="space-y-6">
                {experience.map((item, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-accent/30 pb-6 last:pb-0">
                    <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] bg-accent rounded-full flex items-center justify-center">
                      <Briefcase className="w-2 h-2 text-accent-foreground" />
                    </div>
                    <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs rounded-full mb-2">
                      {item.period}
                    </span>
                    <h4 className="text-lg font-semibold text-foreground">{item.title}</h4>
                    <p className="text-muted-foreground text-sm mb-1">{item.company}</p>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Knowledges & Skills */}
          <div className="space-y-12">
            {/* Knowledges */}
            <div className={`reveal-right ${isVisible ? "visible" : ""}`} style={{ transitionDelay: "0.3s" }}>
              <h3 className="text-2xl font-bold mb-6">Knowledges</h3>
              <div className="flex flex-wrap gap-2">
                {knowledges.map((knowledge, index) => (
                  <span
                    key={knowledge}
                    className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium hover:border-primary/50 hover:bg-primary/5 transition-smooth cursor-default"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {knowledge}
                  </span>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className={`reveal-right ${isVisible ? "visible" : ""}`} style={{ transitionDelay: "0.5s" }}>
              <h3 className="text-2xl font-bold mb-6">Skills</h3>
              <div className="space-y-5">
                {skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-muted-foreground text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${0.6 + index * 0.1}s`,
                        }}
                      />
                    </div>
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

export default Resume;
