import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { LanguageSwitcher } from './ui/language-switcher';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAffiliate } from '@/hooks/useAffiliate';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const { currentLang, changeLanguage, t } = useLanguage();
  const { getAffiliateUrl } = useAffiliate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
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
          {/* Language Switcher - Always visible at first position */}
          <div>
            <LanguageSwitcher 
              currentLang={currentLang} 
              onLanguageChange={changeLanguage} 
            />
          </div>

          {/* Logo - Center */}
          <div className="text-2xl font-bold bg-gradient-neural bg-clip-text text-transparent animate-gradient-shift">
            NeuroQuranic
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
              onClick={() => window.open(getAffiliateUrl('https://neuroquranic.app'), '_blank')}
            >
              {t('nav.download')}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-card-glow/20 shadow-card">
            <div className="container mx-auto px-4 py-6">
              <nav className="flex flex-col gap-4">
                <button
                  onClick={() => scrollToSection('neuro-tools')}
                  className="text-left text-foreground/80 hover:text-foreground transition-colors py-2"
                >
                  {t('nav.tools')}
                </button>
                <button
                  onClick={() => scrollToSection('for-whom')}
                  className="text-left text-foreground/80 hover:text-foreground transition-colors py-2"
                >
                  {t('nav.for-whom')}
                </button>
                <button
                  onClick={() => scrollToSection('the-science')}
                  className="text-left text-foreground/80 hover:text-foreground transition-colors py-2"
                >
                  {t('nav.science')}
                </button>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="text-left text-foreground/80 hover:text-foreground transition-colors py-2"
                >
                  {t('nav.testimonials')}
                </button>
                
                {/* Mobile Download Button */}
                <Button 
                  variant="hero" 
                  className="w-full mt-2"
                  onClick={() => {
                    window.open(getAffiliateUrl('https://neuroquranic.app'), '_blank');
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {t('nav.download')}
                </Button>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};