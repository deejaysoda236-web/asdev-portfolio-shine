import { motion, Variants } from "framer-motion";
import profileImage from "@/assets/profile.png";
import { ArrowDown, Github, Linkedin, Instagram, Youtube, Download } from "lucide-react";

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/ahmadsodik4717", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ahmadsodik4717/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/ahmadsodik4717/", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="beranda"
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
    >
      {/* Animated Background Gradients */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-[10%] w-20 h-20 border border-primary/30 rounded-2xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-40 right-[15%] w-16 h-16 border border-primary/20 rounded-full"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-32 left-[20%] w-12 h-12 bg-primary/10 rounded-lg"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/3 right-[10%] w-8 h-8 bg-accent/20 rounded-full"
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="flex flex-col items-center text-center max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Image */}
          <motion.div className="relative mb-8" variants={itemVariants}>
            {/* Glow Effect */}
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-primary/50 to-accent/50 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <motion.div
              className="relative w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={profileImage}
                alt="Ahmad Sodik - AsDev"
                className="w-full h-full object-cover object-top"
              />
              
              {/* Shine effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%", y: "-100%" }}
                whileHover={{ x: "100%", y: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
            
            {/* Decorative dots */}
            <motion.div
              className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                boxShadow: [
                  "0 0 0 0 rgba(45, 212, 191, 0.4)",
                  "0 0 0 10px rgba(45, 212, 191, 0)",
                  "0 0 0 0 rgba(45, 212, 191, 0)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-1 -left-1 w-4 h-4 bg-accent rounded-full"
              animate={{
                scale: [1, 1.3, 1],
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
          </motion.div>

          {/* Text Content */}
          <motion.div variants={itemVariants}>
            <motion.h1
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Hello, I'm{" "}
              <span className="text-gradient inline-block">
                Ahmad Sodik,
              </span>
            </motion.h1>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-gradient mb-6"
          >
            Front-end Developer
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed"
          >
            Spesialis pengembangan Web & Android dengan fokus pada antarmuka pengguna yang modern, responsif, dan user-friendly.
          </motion.p>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-card/50 backdrop-blur-sm border border-border rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                aria-label={social.label}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="#kontak"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-primary text-primary-foreground font-semibold rounded-full shadow-lg relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.span
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative">Hire Me</span>
            </motion.a>
            
            <motion.a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-card/50 backdrop-blur-sm border border-border text-foreground font-semibold rounded-full hover:border-primary/50 hover:text-primary transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="w-4 h-4" />
              Download CV
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a href="#tentang" className="text-muted-foreground hover:text-primary transition-colors">
            <motion.div
              className="w-8 h-12 border-2 border-muted-foreground/50 rounded-full flex justify-center p-2 hover:border-primary/50 transition-colors"
            >
              <motion.div
                className="w-1.5 h-3 bg-primary rounded-full"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
