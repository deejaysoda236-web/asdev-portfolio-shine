import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "React", "Android", "Next.js"];

  const projects = [
    {
      title: "E-Commerce Website",
      category: "React",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
      description: "Modern e-commerce platform with React and Tailwind CSS",
      tags: ["React", "Tailwind", "Supabase"],
      github: "#",
      demo: "#",
    },
    {
      title: "Portfolio Website",
      category: "Next.js",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80",
      description: "Personal portfolio with Next.js and animations",
      tags: ["Next.js", "Framer Motion", "TypeScript"],
      github: "#",
      demo: "#",
    },
    {
      title: "Mobile Banking App",
      category: "Android",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80",
      description: "Android banking app with Kotlin and Jetpack Compose",
      tags: ["Kotlin", "Jetpack Compose", "Material3"],
      github: "#",
      demo: "#",
    },
    {
      title: "Task Management",
      category: "React",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&q=80",
      description: "Collaborative task management application",
      tags: ["React", "Redux", "Firebase"],
      github: "#",
      demo: "#",
    },
    {
      title: "Food Delivery App",
      category: "Android",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
      description: "Food delivery application with real-time tracking",
      tags: ["Kotlin", "Google Maps", "Room DB"],
      github: "#",
      demo: "#",
    },
    {
      title: "Blog Platform",
      category: "Next.js",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80",
      description: "Full-stack blog platform with MDX support",
      tags: ["Next.js", "MDX", "Prisma"],
      github: "#",
      demo: "#",
    },
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section
      id="portfolio"
      className="py-20 md:py-28 bg-card relative overflow-hidden"
      ref={sectionRef as React.RefObject<HTMLElement>}
    >
      {/* Background decoration */}
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="text-primary uppercase tracking-widest text-sm mb-2"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            My Work
          </motion.p>
          <h2 className="text-3xl md:text-4xl font-bold">Portfolio</h2>
          <motion.div
            className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-4"
            initial={{ scaleX: 0 }}
            animate={isVisible ? { scaleX: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          />
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-gradient-primary text-primary-foreground shadow-lg"
                  : "bg-background border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="group bg-background rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-video">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent flex items-end justify-center pb-4"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex gap-3">
                      <motion.a
                        href={project.github}
                        className="w-10 h-10 bg-card/90 backdrop-blur rounded-full flex items-center justify-center text-foreground hover:text-primary transition-colors"
                        aria-label="View GitHub"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        className="w-10 h-10 bg-card/90 backdrop-blur rounded-full flex items-center justify-center text-foreground hover:text-primary transition-colors"
                        aria-label="View Demo"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </motion.div>
                  {/* Category Badge */}
                  <motion.span
                    className="absolute top-3 left-3 px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {project.category}
                  </motion.span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-secondary text-muted-foreground text-xs rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
