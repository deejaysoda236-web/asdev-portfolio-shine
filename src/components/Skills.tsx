import { useScrollReveal } from "@/hooks/useScrollReveal";

const Skills = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.15 });

  const webSkills = [
    { name: "HTML5", level: 95 },
    { name: "CSS3/Tailwind", level: 90 },
    { name: "JavaScript", level: 88 },
    { name: "TypeScript", level: 85 },
    { name: "React.js", level: 88 },
    { name: "Next.js", level: 80 },
  ];

  const androidSkills = [
    { name: "Kotlin", level: 85 },
    { name: "Jetpack Compose", level: 80 },
    { name: "XML Layout", level: 88 },
    { name: "Material Design", level: 85 },
    { name: "Android SDK", level: 82 },
    { name: "React Native", level: 75 },
  ];

  const tools = [
    "Git & GitHub",
    "VS Code",
    "Android Studio",
    "Figma",
    "Postman",
    "Firebase",
  ];

  return (
    <section
      id="skills"
      className="py-20 md:py-28 bg-background"
      ref={sectionRef as React.RefObject<HTMLElement>}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className={`text-center mb-12 reveal ${isVisible ? "visible" : ""}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="text-gradient">Teknologi</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Web Development */}
          <div
            className={`bg-card p-6 md:p-8 rounded-2xl border border-border reveal-left ${isVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.2s" }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="w-3 h-3 bg-primary rounded-full" />
              Web Development
            </h3>
            <div className="space-y-4">
              {webSkills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: isVisible ? `${skill.level}%` : "0%",
                        transitionDelay: `${0.4 + index * 0.1}s`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Android Development */}
          <div
            className={`bg-card p-6 md:p-8 rounded-2xl border border-border reveal-right ${isVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.3s" }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="w-3 h-3 bg-accent rounded-full" />
              Android Development
            </h3>
            <div className="space-y-4">
              {androidSkills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: isVisible ? `${skill.level}%` : "0%",
                        transitionDelay: `${0.5 + index * 0.1}s`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tools */}
        <div className={`mt-12 max-w-3xl mx-auto reveal ${isVisible ? "visible" : ""}`} style={{ transitionDelay: "0.6s" }}>
          <h3 className="text-xl font-semibold text-center mb-6">Tools & Platform</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <span
                key={tool}
                className={`px-4 py-2 bg-card border border-border rounded-full text-sm font-medium hover:border-primary/50 hover:bg-primary/5 transition-smooth cursor-default reveal-scale ${isVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${0.7 + index * 0.08}s` }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
