import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonials = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    { name: "Budi Santoso", role: "CEO, TechStartup", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80", text: "Ahmad adalah developer yang sangat profesional. Website yang dibuatnya sangat modern dan sesuai dengan kebutuhan bisnis kami." },
    { name: "Siti Rahayu", role: "Owner, Fashion Store", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80", text: "Aplikasi mobile yang dibuat sangat user-friendly dan membantu meningkatkan penjualan online kami. Terima kasih Ahmad!" },
    { name: "Rizky Pratama", role: "Manager, Digital Agency", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80", text: "Kerjasama yang sangat menyenangkan. Ahmad selalu tepat waktu dan hasilnya selalu memuaskan." },
  ];

  const nextTestimonial = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-card relative overflow-hidden" ref={sectionRef as React.RefObject<HTMLElement>}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <motion.p className="text-primary uppercase tracking-widest text-sm mb-2">What Clients Say</motion.p>
          <h2 className="text-3xl md:text-4xl font-bold">Testimonials</h2>
          <motion.div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-4" initial={{ scaleX: 0 }} animate={isVisible ? { scaleX: 1 } : {}} transition={{ delay: 0.4, duration: 0.6 }} />
        </motion.div>

        <motion.div className="max-w-3xl mx-auto" initial={{ opacity: 0, scale: 0.95 }} animate={isVisible ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.3 }}>
          <div className="relative bg-background rounded-2xl p-8 md:p-12 border border-border overflow-hidden">
            <motion.div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }}>
              <Quote className="w-6 h-6 text-primary-foreground" />
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div key={currentIndex} className="text-center pt-4" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.3 }}>
                <motion.div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden border-2 border-primary/30" whileHover={{ scale: 1.1 }}>
                  <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="w-full h-full object-cover" />
                </motion.div>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6 italic">"{testimonials[currentIndex].text}"</p>
                <h4 className="text-lg font-semibold">{testimonials[currentIndex].name}</h4>
                <p className="text-muted-foreground text-sm">{testimonials[currentIndex].role}</p>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-4 mt-8">
              <motion.button onClick={prevTestimonial} className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <motion.button key={index} onClick={() => setCurrentIndex(index)} className={`h-2 rounded-full transition-all ${index === currentIndex ? "bg-primary w-6" : "bg-muted-foreground/30 w-2"}`} whileHover={{ scale: 1.2 }} />
                ))}
              </div>
              <motion.button onClick={nextTestimonial} className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
