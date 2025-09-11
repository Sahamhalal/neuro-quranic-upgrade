import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { NeuroTools } from '@/components/NeuroTools';
import { ForWhom } from '@/components/ForWhom';
import { Science } from '@/components/Science';
import { Testimonials } from '@/components/Testimonials';
import { Download } from '@/components/Download';
import { FAQ } from '@/components/FAQ';
import { Newsletter } from '@/components/Newsletter';
import { Footer } from '@/components/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <Hero />
        <NeuroTools />
        <ForWhom />
        <Science />
        <Testimonials />
        <Download />
        <FAQ />
        <Newsletter />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
