import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from './ui/button';

export const FAQ = () => {
  const { t } = useLanguage();
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqs = [
    {
      q: "Q: Saya bukan Muslim — boleh guna?",
      a: "A: Ya. Frekuensi Quran terbukti secara saintifik menenangkan sistem saraf & meningkatkan fokus — sesuai untuk semua."
    },
    {
      q: "Q: Saya tak faham Arab — sesuai ke?", 
      a: "A: Sangat sesuai. Otak anda merespon frekuensi & irama, bukan makna — makna akan datang kemudian, secara fitrah."
    },
    {
      q: "Q: Ada unsur agama yang mengikat?",
      a: "A: Tiada. Kami fokus pada sains & transformasi otak. Anda bebas guna mengikut keselesaan."
    },
    {
      q: "Q: Boleh guna untuk terapi?",
      a: "A: Ramai pengguna gunakan untuk ADHD, anxiety, dementia, rukyah — sebagai terapi sokongan. (Bukan pengganti rawatan perubatan)."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-card/5 to-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-heading font-bold mb-6 bg-gradient-neural bg-clip-text text-transparent">
            {t('faq.title')}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-card/20 backdrop-blur-md border border-card-glow/20 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-card/30 hover:border-card-glow/30"
            >
              <Button
                variant="ghost"
                className="w-full p-6 text-left justify-start text-lg font-medium hover:bg-transparent"
                onClick={() => setOpenItem(openItem === index ? null : index)}
              >
                <span className="text-accent-soft mr-4">
                  {openItem === index ? '−' : '+'}
                </span>
                {faq.q}
              </Button>
              
              {openItem === index && (
                <div className="px-6 pb-6 pt-0">
                  <div className="pl-8 text-foreground/80 leading-relaxed border-l-2 border-accent-soft/30 ml-4">
                    {faq.a}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};