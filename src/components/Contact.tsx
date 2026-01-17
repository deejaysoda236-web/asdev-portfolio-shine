import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const { toast } = useToast();
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "ahmadsodik0105@gmail.com",
      href: "mailto:ahmadsodik0105@gmail.com",
    },
    {
      icon: Phone,
      title: "WhatsApp",
      value: "+62 812-2880-3784",
      href: "https://wa.me/6281228803784",
    },
    {
      icon: MapPin,
      title: "Lokasi",
      value: "Sumatera Selatan, Indonesia",
      href: "#",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Menggunakan Neon Database via Edge Function
      const { data, error } = await supabase.functions.invoke('neon-contact', {
        body: {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
      });

      if (error) throw error;
      if (data?.error) throw new Error(data.error);

      toast({
        title: "Pesan Terkirim!",
        description: "Terima kasih telah menghubungi saya. Saya akan segera membalas pesan Anda.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Gagal Mengirim",
        description: "Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="kontak"
      className="py-20 md:py-28 bg-background"
      ref={sectionRef as React.RefObject<HTMLElement>}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className={`text-center mb-12 reveal ${isVisible ? "visible" : ""}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hubungi <span className="text-gradient">Saya</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tertarik untuk bekerja sama? Silakan hubungi saya untuk mendiskusikan proyek Anda.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((info, index) => (
              <a
                key={info.title}
                href={info.href}
                className={`flex items-start gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-smooth group reveal-left ${isVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-smooth">
                  <info.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">{info.title}</h4>
                  <p className="text-muted-foreground text-sm">{info.value}</p>
                </div>
              </a>
            ))}

            <div
              className={`p-4 bg-card rounded-xl border border-border mt-6 reveal-left ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: "0.5s" }}
            >
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-primary" />
                Quick Chat
              </h4>
              <p className="text-muted-foreground text-sm mb-4">
                Ingin diskusi lebih cepat? Langsung hubungi via WhatsApp!
              </p>
              <a
                href="https://wa.me/6281228803784"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium transition-smooth hover:scale-105"
              >
                <MessageCircle className="w-4 h-4" />
                Chat WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`lg:col-span-3 reveal-right ${isVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.3s" }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card p-6 md:p-8 rounded-2xl border border-border"
            >
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-smooth"
                    placeholder="Nama Anda"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-smooth"
                    placeholder="email@contoh.com"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Subjek
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-smooth"
                  placeholder="Pembuatan Website / Aplikasi Android"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-smooth resize-none"
                  placeholder="Jelaskan proyek atau kebutuhan Anda..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-primary text-primary-foreground font-semibold rounded-lg shadow-glow hover:shadow-hover transition-smooth hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Mengirim...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Kirim Pesan
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
