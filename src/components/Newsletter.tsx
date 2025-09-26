import { useState } from 'react';
import { Button } from './ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';

export const Newsletter = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate newsletter signup
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Tahniah! 🧠",
      description: "Anda telah menyertai komuniti Neuro-Hackers. Sedia untuk upgrade otak!",
    });
    
    setEmail('');
    setIsLoading(false);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-card/10 relative overflow-hidden">
      {/* Neural glow background */}
      <div className="absolute inset-0 bg-gradient-neural opacity-5 animate-gradient-shift"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-heading font-bold mb-6 bg-gradient-neural bg-clip-text text-transparent">
            {t('newsletter.title')}
          </h2>
          
          <p className="text-xl text-foreground/80 mb-12 leading-relaxed">
            {t('newsletter.desc')}
          </p>

          <div className="bg-card/30 backdrop-blur-md border border-card-glow/30 rounded-3xl p-8 shadow-card">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('newsletter.placeholder')}
                required
                className="flex-1 px-6 py-4 bg-card/50 border border-card-glow/20 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
              />
              <Button 
                type="submit"
                variant="neural"
                size="lg"
                disabled={isLoading}
                className="whitespace-nowrap px-8 py-4 shadow-neural hover:shadow-glow"
              >
                {isLoading ? '⚡ Loading...' : t('newsletter.button')}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};