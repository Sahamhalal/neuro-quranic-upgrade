import { useLanguage } from '@/hooks/useLanguage';

export const NeuroTools = () => {
  const { t } = useLanguage();

  const tools = [
    {
      icon: "🧠",
      titleKey: "tools.tool1.title",
      descKey: "tools.tool1.desc"
    },
    {
      icon: "🎧",
      titleKey: "tools.tool2.title", 
      descKey: "tools.tool2.desc"
    },
    {
      icon: "📈",
      titleKey: "tools.tool3.title",
      descKey: "tools.tool3.desc"
    },
    {
      icon: "🧘‍♂️",
      titleKey: "tools.tool4.title",
      descKey: "tools.tool4.desc"
    },
    {
      icon: "👨‍👩‍👧‍👦",
      titleKey: "tools.tool5.title",
      descKey: "tools.tool5.desc"
    }
  ];

  return (
    <section id="neuro-tools" className="py-20 bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-heading font-bold mb-6 bg-gradient-neural bg-clip-text text-transparent">
            {t('tools.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {tools.map((tool, index) => (
            <div 
              key={index}
              className="group relative bg-card/30 backdrop-blur-md border border-card-glow/20 rounded-2xl p-8 hover:bg-card/50 hover:border-card-glow/40 transition-all duration-500 hover:shadow-card hover:-translate-y-2"
            >
              {/* Neural glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-neural rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur"></div>
              
              <div className="relative z-10">
                <div className="text-5xl mb-6 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                  {tool.icon}
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-accent-soft transition-colors">
                  {t(tool.titleKey)}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                  {t(tool.descKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};