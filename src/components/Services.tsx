import { motion, Variants } from "framer-motion";
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
      color: "primary",
    },
    {
      icon: Server,
      title: "Back-End Developer",
      description:
        "Mengembangkan API dan server-side logic dengan Node.js, Express, dan berbagai database seperti PostgreSQL dan MongoDB.",
      color: "accent",
    },
    {
      icon: Palette,
      title: "Web Design",
      description:
        "Mendesain UI/UX yang menarik dan user-friendly dengan fokus pada pengalaman pengguna yang optimal.",
      color: "primary",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="layanan"
      className="py-20 md:py-28 bg-background relative overflow-hidden"
      ref={sectionRef as React.RefObject<HTMLElement>}
    >
      {/* Background decoration */}
      <motion.div
        className="absolute top-1/2 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
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
            What I Offer
          </motion.p>
          <h2 className="text-3xl md:text-4xl font-bold">Services</h2>
          <motion.div
            className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-4"
            initial={{ scaleX: 0 }}
            animate={isVisible ? { scaleX: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 text-center overflow-hidden"
              whileHover={{ y: -10 }}
            >
              {/* Gradient overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              {/* Icon */}
              <motion.div
                className="relative w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(45, 212, 191, 0)",
                      "0 0 0 15px rgba(45, 212, 191, 0.1)",
                      "0 0 0 0 rgba(45, 212, 191, 0)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  className="absolute inset-0 rounded-2xl"
                />
                <service.icon className="w-8 h-8 text-primary relative z-10" />
              </motion.div>
              
              <h3 className="relative text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="relative text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Bottom accent line */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-primary"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
