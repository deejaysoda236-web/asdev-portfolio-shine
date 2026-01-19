import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonials = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Budi Santoso",
      role: "CEO, TechStartup",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
      text: "Ahmad adalah developer yang sangat profesional. Website yang dibuatnya sangat modern dan sesuai dengan kebutuhan bisnis kami. Highly recommended!",
    },
    {
      name: "Siti Rahayu",
      role: "Owner, Fashion Store",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
      text: "Aplikasi mobile yang dibuat sangat user-friendly dan membantu meningkatkan penjualan online kami. Terima kasih Ahmad!",
    },
    {
      name: "Rizky Pratama",
      role: "Manager, Digital Agency",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
      text: "Kerjasama yang sangat menyenangkan. Ahmad selalu tepat waktu dan hasilnya selalu memuaskan. Sudah 3 project bersama!",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 bg-card"
      ref={sectionRef as React.RefObject<HTMLElement>}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className={`text-center mb-12 reveal ${isVisible ? "visible" : ""}`}>
          <h2 className="text-3xl md:text-4xl font-bold">
            Testimonials
          </h2>
          <p className="text-muted-foreground mt-4">
            what client says about me
          </p>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-4" />
        </div>

        <div className={`max-w-3xl mx-auto reveal-scale ${isVisible ? "visible" : ""}`} style={{ transitionDelay: "0.3s" }}>
          <div className="relative bg-background rounded-2xl p-8 md:p-12 border border-border">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <Quote className="w-6 h-6 text-primary-foreground" />
            </div>

            {/* Testimonial Content */}
            <div className="text-center pt-4">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden border-2 border-primary/30">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <p className="text-muted-foreground text-lg leading-relaxed mb-6 italic">
                "{testimonials[currentIndex].text}"
              </p>
              
              <h4 className="text-lg font-semibold text-foreground">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-muted-foreground text-sm">
                {testimonials[currentIndex].role}
              </p>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-smooth"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-smooth ${
                      index === currentIndex ? "bg-primary w-6" : "bg-muted-foreground/30"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-smooth"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
