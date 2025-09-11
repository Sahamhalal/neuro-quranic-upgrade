import { Button } from './ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import heroImage from '@/assets/hero-brain.jpg';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Neural background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-neural animate-gradient-shift opacity-30"></div>
        <img 
          src={heroImage}
          alt="Neural brain visualization"
          className="w-full h-full object-cover mix-blend-screen opacity-40"
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary-glow rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-hero font-bold mb-6 leading-tight">
            <span className="bg-gradient-neural bg-clip-text text-transparent animate-gradient-shift">
              {t('hero.title')}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed">
            {t('hero.subtitle')}
          </p>
          
          <div className="bg-card/20 backdrop-blur-md border border-card-glow/20 rounded-2xl p-6 mb-10 inline-block">
            <p className="text-lg font-medium text-accent-soft">
              {t('hero.tagline')}
            </p>
          </div>
          
          <Button 
            variant="hero"
            className="text-2xl py-6 px-12 shadow-glow hover:shadow-neural transform hover:scale-105 transition-all duration-300"
            onClick={() => window.open('https://neuroquranic.app', '_blank')}
          >
            📲 {t('hero.cta')}
          </Button>
        </div>
      </div>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};