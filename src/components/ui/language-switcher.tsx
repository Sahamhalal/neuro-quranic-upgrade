import { Button } from "./button";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  currentLang: string;
  onLanguageChange: (lang: string) => void;
}

export const LanguageSwitcher = ({ currentLang, onLanguageChange }: LanguageSwitcherProps) => {
  const languages = [
    { code: 'bm', label: 'BM' },
    { code: 'bi', label: 'BI' },
    { code: 'en', label: 'EN' }
  ];

  return (
    <div className="flex gap-1 bg-card/30 backdrop-blur-md rounded-full p-1 border border-card-glow/20">
      {languages.map((lang) => (
        <Button
          key={lang.code}
          variant={currentLang === lang.code ? "neural" : "ghost"}
          size="sm"
          onClick={() => onLanguageChange(lang.code)}
          className={cn(
            "rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-300",
            currentLang === lang.code 
              ? "bg-gradient-primary text-primary-foreground shadow-neural" 
              : "text-muted-foreground hover:text-foreground hover:bg-card/50"
          )}
        >
          {lang.label}
        </Button>
      ))}
    </div>
  );
};