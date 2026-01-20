import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/ahmadsodik4717", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ahmadsodik4717/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/ahmadsodik4717/", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="py-12 bg-background border-t border-border relative overflow-hidden">
      <motion.div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div className="flex flex-col items-center text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <motion.h3 className="text-2xl font-bold mb-4" whileHover={{ scale: 1.02 }}>
            Ahmad <span className="text-gradient">Sodik</span>
          </motion.h3>

          <div className="flex items-center gap-4 mb-6">
            {socialLinks.map((social, index) => (
              <motion.a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all" aria-label={social.label} whileHover={{ scale: 1.1, y: -3 }} whileTap={{ scale: 0.95 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} Ahmad Sodik. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
