import { useLanguage } from '@/contexts/LanguageContext';

export const ForWhom = () => {
  const { t } = useLanguage();

  const audiences = [
    {
      emoji: "👶",
      titleKey: "for-whom.baby.title",
      descKey: "for-whom.baby.desc"
    },
    {
      emoji: "🎓", 
      titleKey: "for-whom.student.title",
      descKey: "for-whom.student.desc"
    },
    {
      emoji: "👩‍💼",
      titleKey: "for-whom.parent.title",
      descKey: "for-whom.parent.desc"
    },
    {
      emoji: "🧓",
      titleKey: "for-whom.senior.title", 
      descKey: "for-whom.senior.desc"
    },
    {
      emoji: "🧘",
      titleKey: "for-whom.seeker.title",
      descKey: "for-whom.seeker.desc"
    }
  ];

  return (
    <section id="for-whom" className="py-20 bg-gradient-to-b from-card/5 to-transparent relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-heading font-bold mb-6 bg-gradient-neural bg-clip-text text-transparent">
            {t('for-whom.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className="group text-center bg-card/20 backdrop-blur-md border border-card-glow/20 rounded-2xl p-8 hover:bg-card/40 hover:border-card-glow/40 transition-all duration-500 hover:shadow-card hover:scale-105"
            >
              <div className="text-6xl mb-6 animate-float" style={{ animationDelay: `${index * 0.3}s` }}>
                {audience.emoji}
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-accent-soft transition-colors">
                {t(audience.titleKey)}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                {t(audience.descKey)}
              </p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="text-center max-w-4xl mx-auto">
          <blockquote className="text-2xl md:text-3xl font-medium text-accent-soft leading-relaxed bg-card/20 backdrop-blur-md border border-card-glow/20 rounded-2xl p-8">
            {t('for-whom.quote')}
          </blockquote>
        </div>
      </div>
    </section>
  );
};