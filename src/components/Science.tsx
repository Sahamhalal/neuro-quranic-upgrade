import { useLanguage } from '@/contexts/LanguageContext';

export const Science = () => {
  const { t } = useLanguage();

  const points = [
    { key: "science.point1" },
    { key: "science.point2" },
    { key: "science.point3" },
    { key: "science.point4" }
  ];

  return (
    <section id="the-science" className="py-20 bg-gradient-to-b from-transparent to-card/10 relative overflow-hidden">
      {/* Neural pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-neural animate-gradient-shift"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-heading font-bold mb-6 bg-gradient-neural bg-clip-text text-transparent leading-tight">
            {t('science.title')}
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="space-y-8 mb-16">
            {points.map((point, index) => (
              <div 
                key={index}
                className="group flex flex-col sm:flex-row items-start gap-4 sm:gap-6 bg-card/20 backdrop-blur-md border border-card-glow/20 rounded-2xl p-6 sm:p-8 hover:bg-card/40 hover:border-card-glow/40 transition-all duration-500 hover:shadow-card"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-3xl sm:text-4xl animate-float self-center sm:self-start" style={{ animationDelay: `${index * 0.5}s` }}>
                  {index === 0 && "📡"}
                  {index === 1 && "🧬"}
                  {index === 2 && "⚡"}
                  {index === 3 && "🔄"}
                </div>
                
                <div className="flex-1 text-center sm:text-left">
                  <p 
                    className="text-base sm:text-lg text-foreground/90 leading-relaxed group-hover:text-foreground transition-colors"
                    dangerouslySetInnerHTML={{ __html: t(point.key) }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="text-center">
            <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-accent-soft leading-relaxed bg-card/30 backdrop-blur-md border border-card-glow/30 rounded-2xl p-6 sm:p-8 shadow-card">
              {t('science.quote')}
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};