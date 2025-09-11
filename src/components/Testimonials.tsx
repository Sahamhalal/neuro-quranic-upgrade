import { useLanguage } from '@/contexts/LanguageContext';

export const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      quoteKey: "Anak saya umur 2 tahun — belum cakap, tapi boleh ikut irama Surah Ar-Rahman. Doktor kata neural development dia advanced. Saya percaya — ini sebab NeuroQuranic.",
      authorKey: "Dr. Aina, Pakar Kanak-Kanak",
      emoji: "👶"
    },
    {
      quoteKey: "Umur 68, dah lupa nama anak sendiri. Selepas 3 bulan guna NeuroQuranic — saya ingat balik doa waktu kecil. Otak saya rasa 'hidup' semula.",
      authorKey: "Pak Din, Pesara Guru", 
      emoji: "🧓"
    },
    {
      quoteKey: "Sebagai CEO, otak saya overload. 10 minit sehari dengan Mindful Recitation Mode — macam 'factory reset'. Fokus saya naik 200%.",
      authorKey: "Aiman, Founder Tech Startup",
      emoji: "👨‍💼"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-card/5 to-transparent relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-heading font-bold mb-6 bg-gradient-neural bg-clip-text text-transparent">
            {t('testimonials.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group bg-card/30 backdrop-blur-md border border-card-glow/20 rounded-2xl p-8 hover:bg-card/50 hover:border-card-glow/40 transition-all duration-500 hover:shadow-card hover:-translate-y-2"
            >
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-neural rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur"></div>
              
              <div className="relative z-10">
                <div className="text-4xl mb-6 text-center animate-float" style={{ animationDelay: `${index * 0.3}s` }}>
                  {testimonial.emoji}
                </div>
                
                <blockquote className="text-lg text-foreground/90 leading-relaxed mb-6 group-hover:text-foreground transition-colors">
                  "{testimonial.quoteKey}"
                </blockquote>
                
                <footer className="text-accent-soft font-medium text-center">
                  — {testimonial.authorKey}
                </footer>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};