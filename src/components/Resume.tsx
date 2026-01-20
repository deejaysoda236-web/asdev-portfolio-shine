import { motion, Variants } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { GraduationCap, Briefcase, Sparkles } from "lucide-react";

const Resume = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  const education = [
    { period: "2020 - 2024", title: "Teknik Informatika", institution: "Universitas Sains Al Qur'an", description: "IPK 3.74 / 4.00 - Fokus pada pengembangan web dan mobile" },
    { period: "2017 - 2020", title: "IPA", institution: "MAN 1 Mesuji", description: "Lulusan dengan prestasi akademik yang baik" },
  ];

  const experience = [
    { period: "2023 - Present", title: "Freelance Developer", company: "Self Employed", description: "Membangun aplikasi web dan mobile untuk berbagai klien." },
    { period: "2022 - 2023", title: "Frontend Developer Intern", company: "Tech Company", description: "Mengembangkan antarmuka pengguna dengan React.js dan TypeScript." },
  ];

  const knowledges = ["Data Structures", "OOP", "Clean Code", "Git", "REST API", "Responsive Design", "UI/UX", "Agile"];
  const skills = [{ name: "JavaScript", level: 88 }, { name: "TypeScript", level: 85 }, { name: "React.js", level: 90 }, { name: "Kotlin", level: 80 }];

  const containerVariants: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };
  const itemVariants: Variants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };

  return (
    <section id="resume" className="py-20 md:py-28 bg-background relative overflow-hidden" ref={sectionRef as React.RefObject<HTMLElement>}>
      <motion.div className="absolute top-1/3 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Infinity }} />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <motion.p className="text-primary uppercase tracking-widest text-sm mb-2">My Journey</motion.p>
          <h2 className="text-3xl md:text-4xl font-bold">Resume</h2>
          <motion.div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-4" initial={{ scaleX: 0 }} animate={isVisible ? { scaleX: 1 } : {}} transition={{ delay: 0.4, duration: 0.6 }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div className="space-y-12" variants={containerVariants} initial="hidden" animate={isVisible ? "visible" : "hidden"}>
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-6">
                <motion.div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center" whileHover={{ scale: 1.1 }}>
                  <GraduationCap className="w-5 h-5 text-primary" />
                </motion.div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              <div className="space-y-4">
                {education.map((item, index) => (
                  <motion.div key={index} className="relative pl-8 pb-6 last:pb-0" initial={{ opacity: 0, x: -20 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3 + index * 0.15 }}>
                    <div className="absolute left-[7px] top-4 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary/20" />
                    <div className="absolute left-0 top-1.5 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg" />
                    <motion.div className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-all" whileHover={{ x: 5 }}>
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3">{item.period}</span>
                      <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                      <p className="text-primary/80 text-sm mb-2">{item.institution}</p>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-6">
                <motion.div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center" whileHover={{ scale: 1.1 }}>
                  <Briefcase className="w-5 h-5 text-accent" />
                </motion.div>
                <h3 className="text-2xl font-bold">Experience</h3>
              </div>
              <div className="space-y-4">
                {experience.map((item, index) => (
                  <motion.div key={index} className="relative pl-8 pb-6 last:pb-0" initial={{ opacity: 0, x: -20 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.5 + index * 0.15 }}>
                    <div className="absolute left-[7px] top-4 bottom-0 w-0.5 bg-gradient-to-b from-accent to-accent/20" />
                    <div className="absolute left-0 top-1.5 w-4 h-4 bg-accent rounded-full border-4 border-background shadow-lg" />
                    <motion.div className="bg-card border border-border rounded-xl p-5 hover:border-accent/50 transition-all" whileHover={{ x: 5 }}>
                      <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full mb-3">{item.period}</span>
                      <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                      <p className="text-accent/80 text-sm mb-2">{item.company}</p>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div className="space-y-12" variants={containerVariants} initial="hidden" animate={isVisible ? "visible" : "hidden"}>
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-6">
                <motion.div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center" whileHover={{ scale: 1.1 }}>
                  <Sparkles className="w-5 h-5 text-primary" />
                </motion.div>
                <h3 className="text-2xl font-bold">Knowledge</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {knowledges.map((knowledge, index) => (
                  <motion.span key={knowledge} className="px-4 py-2.5 bg-card border border-border rounded-full text-sm font-medium hover:border-primary/50 hover:text-primary transition-all cursor-default" initial={{ opacity: 0, scale: 0.8 }} animate={isVisible ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.3 + index * 0.05, type: "spring" }} whileHover={{ scale: 1.05, y: -2 }}>
                    {knowledge}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6">Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div key={skill.name} initial={{ opacity: 0, x: 20 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.4 + index * 0.1 }}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-primary text-sm font-medium">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-secondary rounded-full overflow-hidden">
                      <motion.div className="h-full bg-gradient-primary rounded-full relative" initial={{ width: 0 }} animate={isVisible ? { width: `${skill.level}%` } : {}} transition={{ delay: 0.6 + index * 0.1, duration: 1, ease: "easeOut" }} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
