import { useLanguage } from '@/contexts/LanguageContext';

export const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      quoteKey: "testimonials.quote1",
      authorKey: "testimonials.author1",
      emoji: "👶"
    },
    {
      quoteKey: "testimonials.quote2",
      authorKey: "testimonials.author2", 
      emoji: "🧓"
    },
    {
      quoteKey: "testimonials.quote3",
      authorKey: "testimonials.author3",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group bg-card/30 backdrop-blur-md border border-card-glow/20 rounded-2xl p-6 sm:p-8 hover:bg-card/50 hover:border-card-glow/40 transition-all duration-500 hover:shadow-card hover:-translate-y-2"
            >
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-neural rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur"></div>
              
              <div className="relative z-10">
                <div className="text-4xl mb-6 text-center animate-float" style={{ animationDelay: `${index * 0.3}s` }}>
                  {testimonial.emoji}
                </div>
                
                <blockquote className="text-base sm:text-lg text-foreground/90 leading-relaxed mb-4 sm:mb-6 group-hover:text-foreground transition-colors">
                  "{t(testimonial.quoteKey)}"
                </blockquote>
                
                <footer className="text-accent-soft font-medium text-center">
                  — {t(testimonial.authorKey)}
                </footer>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};