import { useState } from "react";
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

  return (
    <section
      id="portfolio"
      className="py-20 md:py-28 bg-card"
      ref={sectionRef as React.RefObject<HTMLElement>}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className={`text-center mb-12 reveal ${isVisible ? "visible" : ""}`}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-widest">
            P O R T F O L I O
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-4" />
        </div>

        {/* Filter Buttons */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 reveal ${isVisible ? "visible" : ""}`} style={{ transitionDelay: "0.2s" }}>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-smooth ${
                activeFilter === filter
                  ? "bg-gradient-primary text-primary-foreground shadow-glow"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`group bg-background rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-smooth reveal-scale ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="w-10 h-10 bg-background/80 backdrop-blur rounded-full flex items-center justify-center text-foreground hover:text-primary hover:scale-110 transition-smooth"
                      aria-label="View GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.demo}
                      className="w-10 h-10 bg-background/80 backdrop-blur rounded-full flex items-center justify-center text-foreground hover:text-primary hover:scale-110 transition-smooth"
                      aria-label="View Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                {/* Category Badge */}
                <span className="absolute top-3 left-3 px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-secondary text-muted-foreground text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
