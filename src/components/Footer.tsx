import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-12 bg-card/10 border-t border-card-glow/20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          {/* Copyright */}
          <p className="text-muted-foreground">
            {t('footer.copyright')}
          </p>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#" className="text-foreground/60 hover:text-accent-soft transition-colors">
              Tentang Kami
            </a>
            <a href="#" className="text-foreground/60 hover:text-accent-soft transition-colors">
              Hubungi
            </a>
            <a href="#" className="text-foreground/60 hover:text-accent-soft transition-colors">
              Privasi
            </a>
            <a href="#" className="text-foreground/60 hover:text-accent-soft transition-colors">
              Terma
            </a>
          </div>

          {/* Social */}
          <div className="flex justify-center gap-4 text-sm text-foreground/60">
            <a href="#" className="hover:text-accent-soft transition-colors">Instagram</a>
            <span>•</span>
            <a href="#" className="hover:text-accent-soft transition-colors">TikTok</a>
            <span>•</span>
            <a href="#" className="hover:text-accent-soft transition-colors">Telegram</a>
          </div>

          {/* Logo */}
          <div className="pt-6 border-t border-card-glow/10">
            <div className="text-2xl font-bold bg-gradient-neural bg-clip-text text-transparent">
              NeuroQuranic
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};