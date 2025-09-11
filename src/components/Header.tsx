import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { LanguageSwitcher } from './ui/language-switcher';
import { useLanguage } from '@/contexts/LanguageContext';

export const Header = () => {
  const { currentLang, changeLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-xl border-b border-card-glow/20 shadow-card' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold bg-gradient-neural bg-clip-text text-transparent animate-gradient-shift">
            NeuroQuranic
          </div>

          {/* Language Switcher */}
          <div className="hidden md:block">
            <LanguageSwitcher 
              currentLang={currentLang} 
              onLanguageChange={changeLanguage} 
            />
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('neuro-tools')}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              {t('nav.tools')}
            </button>
            <button
              onClick={() => scrollToSection('for-whom')}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              {t('nav.for-whom')}
            </button>
            <button
              onClick={() => scrollToSection('the-science')}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              {t('nav.science')}
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              {t('nav.testimonials')}
            </button>
            <Button 
              variant="neural" 
              size="sm"
              onClick={() => window.open('https://neuroquranic.app', '_blank')}
            >
              {t('nav.download')}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button 
              variant="glass" 
              size="sm"
              onClick={() => window.open('https://neuroquranic.app', '_blank')}
            >
              {t('nav.download')}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};