import { Button } from './ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAffiliate } from '@/hooks/useAffiliate';

export const Download = () => {
  const { t } = useLanguage();
  const { getAffiliateUrl } = useAffiliate();

  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-card/10 relative overflow-hidden">
      {/* Neural background effect */}
      <div className="absolute inset-0 bg-gradient-neural opacity-5 animate-gradient-shift"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-heading font-bold mb-6 bg-gradient-neural bg-clip-text text-transparent">
            {t('download.title')}
          </h2>
          
          <p className="text-xl text-foreground/80 mb-12 leading-relaxed">
            {t('download.desc')}
          </p>
          
          <div className="bg-card/30 backdrop-blur-md border border-card-glow/30 rounded-3xl p-12 shadow-card">
            <Button 
              variant="hero"
              className="text-2xl py-8 px-16 shadow-glow hover:shadow-neural transform hover:scale-105 transition-all duration-300 animate-neural-pulse"
              onClick={() => window.open(getAffiliateUrl('https://neuroquranic.app'), '_blank')}
            >
              🧠 {t('download.cta')}
            </Button>
            
            {/* Floating elements around button */}
            <div className="relative">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-primary-glow rounded-full animate-float opacity-60"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${-50 + Math.random() * 100}px`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 2}s`
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};