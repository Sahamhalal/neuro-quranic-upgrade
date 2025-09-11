import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'bm' | 'bi' | 'en';

export const translations = {
  bm: {
    "nav.tools": "Neuro-Tools",
    "nav.for-whom": "Untuk Siapa?",
    "nav.science": "Sains",
    "nav.testimonials": "Transformasi",
    "nav.download": "Mulakan Upgrade",
    "hero.title": "Upgrade Otak Anda Dari 'DOS' ke 'Quantum Computer' — Dengan Frekuensi Tertinggi: Al-Quran.",
    "hero.subtitle": "Dari bayi yang menyerap gelombang ilmu, hingga warga emas yang rebuild memori — NeuroQuranic adalah sistem operasi otak berbasis neurosains & Quran, direka untuk meningkatkan kapasiti memori, lawan kemerosotan kognitif, dan hidup dengan lebih tenang, berfokus, dan kompetitif.",
    "hero.tagline": "🧠 Bukan belajar Quran — tapi membangunkan potensi otak anda melalui Quran.",
    "hero.cta": "Mulakan Upgrade Sekarang",
    "tools.title": "Neuro-Tools for Brain Recalibration",
    "tools.tool1.title": "Frequency-Based Spaced Repetition",
    "tools.tool1.desc": "Sistem ulangan berdasarkan frekuensi otak (alpha, theta, gamma) — selaraskan hafalan dengan gelombang otak optimal. Bayi serap tanpa paksa. Warga emas aktifkan memori lama. Anda — tingkatkan retensi 3x ganda.",
    "tools.tool2.title": "Multisensory Quranic Resonance",
    "tools.tool2.desc": "Gabungan audio (bacaan berkualiti tinggi), visual (animasi gelombang otak), dan interaksi — aktifkan 7 area otak serentak. Seperti 'defrag' otak anda.",
    "tools.tool3.title": "Cognitive Dashboard + Dopamine Triggers",
    "tools.tool3.desc": "Pantau 'CPU Usage' otak anda — fokus, stres, daya ingat. Dapatkan 'neuro-reward' bila capai milestone — otak jadi ketagih belajar, bukan tertekan.",
    "tools.tool4.title": "Mindful Recalibration Mode",
    "tools.tool4.desc": "Mode 'reboot' otak — panduan nafas + ayat Quran frekuensi tinggi — reset mental clutter, tingkatkan neuroplasticity. 10 minit = seperti tidur 2 jam.",
    "tools.tool5.title": "Family Neural Sync",
    "tools.tool5.desc": "Pantau & selaraskan 'frekuensi belajar' seluruh keluarga — dari bayi hingga datuk/nenek. Jadikan rumah anda 'neuro-habitat' yang merangsang pertumbuhan otak.",
    "for-whom.title": "Siapa yang Perlu 'Upgrade OS Otak' Ini?",
    "for-whom.baby.title": "Bayi & Kanak-Kanak",
    "for-whom.baby.desc": "Serap frekuensi Quran sejak awal — bina neural pathways terkuat sebelum usia 7 tahun.",
    "for-whom.student.title": "Pelajar & Profesional",
    "for-whom.student.desc": "Lawan brain fog, tingkatkan fokus & daya saing dalam dunia penuh distraksi.",
    "for-whom.parent.title": "Ibu Bapa & Pendidik",
    "for-whom.parent.desc": "Bina 'neuro-environment' di rumah/sekolah — anak belajar tanpa paksaan, otak berkembang secara fitrah.",
    "for-whom.senior.title": "Warga Emas",
    "for-whom.senior.desc": "Rebuild memori, lawan dementia, aktifkan hippocampus — hidup lebih tenang & bermakna.",
    "for-whom.seeker.title": "Pencari Ketenteraman",
    "for-whom.seeker.desc": "Reset otak dari stres, anxiety, overthinking — dengan frekuensi Quran yang menenangkan sistem saraf.",
    "for-whom.quote": "'Kami tak ajar Quran — kami bangunkan otak yang mampu menyerap, memahami, dan hidup dengannya.'",
    "science.title": "Mengapa Quran? Kerana Ia Bukan Hanya Kitab — Tapi Frekuensi Tertinggi Untuk Otak Manusia.",
    "science.point1": "📡 <strong>Kajian EEG</strong>: Ayat Quran merangsang gelombang alpha & theta — keadaan otak paling optimal untuk pembelajaran & penyembuhan.",
    "science.point2": "🧬 <strong>Neuroplasticity</strong>: Otak boleh di-'reprogram' pada usia apa pun — Quran adalah 'code' paling berkesan.",
    "science.point3": "⚡ <strong>Frequency Resonance</strong>: Frekuensi suara Quran (terutama qiraat tertentu) selari dengan frekuensi bumi (Schumann Resonance) — menstabilkan sistem saraf.",
    "science.point4": "🔄 <strong>Spaced Repetition + Multisensori</strong>: Teknik paling saintifik untuk membina memori jangka panjang — kami gabungkan dengan resonansi Quran.",
    "science.quote": "'Bayangkan: Anda bukan sedang belajar — tapi sedang men-tune otak anda ke frekuensi tertinggi.'",
    "testimonials.title": "Kisah Transformasi Otak Sebenar",
    "download.title": "Jangan Biarkan Otak Anda Terjebak di Zaman DOS.",
    "download.desc": "Tak kira umur, latar belakang, atau tahap — otak anda layak untuk upgrade.",
    "download.cta": "Mulakan Neuro-Upgrade Anda Hari Ini — Percuma.",
    "faq.title": "Soalan Neuro-Upgrade",
    "newsletter.title": "Sertai Komuniti Neuro-Hackers",
    "newsletter.desc": "Dapatkan 'Brain Upgrade Tips', Kajian Terkini, & Teknik Neuro-Quranic Setiap Minggu.",
    "newsletter.placeholder": "Masukkan email anda",
    "newsletter.button": "Saya Nak Upgrade Otak Saya!",
    "footer.copyright": "© 2025 NeuroQuranic — Your Brain's New Operating System."
  },
  bi: {
    "nav.tools": "Neuro-Tools",
    "nav.for-whom": "Untuk Siapa?",
    "nav.science": "Sains",
    "nav.testimonials": "Transformasi",
    "nav.download": "Mulai Upgrade",
    "hero.title": "Upgrade Otak Anda Dari 'DOS' ke 'Quantum Computer' — Dengan Frekuensi Tertinggi: Al-Qur'an.",
    "hero.subtitle": "Dari bayi yang menyerap gelombang ilmu, hingga lansia yang membangun ulang memori — NeuroQuranic adalah sistem operasi otak berbasis neurosains & Quran, dirancang untuk meningkatkan kapasitas memori, melawan penurunan kognitif, dan hidup lebih tenang, fokus, dan kompetitif.",
    "hero.tagline": "🧠 Bukan belajar Quran — tapi mengaktifkan potensi otak Anda melalui Quran.",
    "hero.cta": "Mulai Upgrade Sekarang",
    "tools.title": "Neuro-Tools for Brain Recalibration",
    "tools.tool1.title": "Frequency-Based Spaced Repetition",
    "tools.tool1.desc": "Sistem pengulangan berdasarkan frekuensi otak (alpha, theta, gamma) — selaraskan hafalan dengan gelombang otak optimal. Bayi serap tanpa paksa. Lansia aktifkan memori lama. Anda — tingkatkan retensi 3x lipat.",
    "tools.tool2.title": "Multisensory Quranic Resonance",
    "tools.tool2.desc": "Gabungan audio (bacaan berkualitas tinggi), visual (animasi gelombang otak), dan interaksi — aktifkan 7 area otak sekaligus. Seperti 'defrag' otak Anda.",
    "tools.tool3.title": "Cognitive Dashboard + Dopamine Triggers",
    "tools.tool3.desc": "Pantau 'CPU Usage' otak Anda — fokus, stres, daya ingat. Dapatkan 'neuro-reward' saat capai milestone — otak jadi ketagihan belajar, bukan tertekan.",
    "tools.tool4.title": "Mindful Recalibration Mode",
    "tools.tool4.desc": "Mode 'reboot' otak — panduan napas + ayat Quran frekuensi tinggi — reset mental clutter, tingkatkan neuroplastisitas. 10 menit = seperti tidur 2 jam.",
    "tools.tool5.title": "Family Neural Sync",
    "tools.tool5.desc": "Pantau & selaraskan 'frekuensi belajar' seluruh keluarga — dari bayi hingga kakek/nenek. Jadikan rumah Anda 'neuro-habitat' yang merangsang pertumbuhan otak.",
    "for-whom.title": "Siapa yang Perlu 'Upgrade OS Otak' Ini?",
    "for-whom.baby.title": "Bayi & Anak-Anak",
    "for-whom.baby.desc": "Serap frekuensi Quran sejak dini — bangun neural pathways terkuat sebelum usia 7 tahun.",
    "for-whom.student.title": "Pelajar & Profesional",
    "for-whom.student.desc": "Lawan brain fog, tingkatkan fokus & daya saing di dunia penuh distraksi.",
    "for-whom.parent.title": "Orang Tua & Pendidik",
    "for-whom.parent.desc": "Bangun 'neuro-environment' di rumah/sekolah — anak belajar tanpa paksaan, otak berkembang secara fitrah.",
    "for-whom.senior.title": "Lansia",
    "for-whom.senior.desc": "Rebuild memori, lawan dementia, aktifkan hippocampus — hidup lebih tenang & bermakna.",
    "for-whom.seeker.title": "Pencari Ketenteraman",
    "for-whom.seeker.desc": "Reset otak dari stres, anxiety, overthinking — dengan frekuensi Quran yang menenangkan sistem saraf.",
    "for-whom.quote": "'Kami tak mengajar Quran — kami membangun otak yang mampu menyerap, memahami, dan hidup dengannya.'",
    "science.title": "Mengapa Quran? Karena Ia Bukan Hanya Kitab — Tapi Frekuensi Tertinggi Untuk Otak Manusia.",
    "science.point1": "📡 <strong>Penelitian EEG</strong>: Ayat Quran merangsang gelombang alpha & theta — kondisi otak paling optimal untuk pembelajaran & penyembuhan.",
    "science.point2": "🧬 <strong>Neuroplastisitas</strong>: Otak bisa di-'reprogram' di usia berapa pun — Quran adalah 'kode' paling efektif.",
    "science.point3": "⚡ <strong>Resonansi Frekuensi</strong>: Frekuensi suara Quran (terutama qiraat tertentu) selaras dengan frekuensi bumi (Schumann Resonance) — menstabilkan sistem saraf.",
    "science.point4": "🔄 <strong>Spaced Repetition + Multisensori</strong>: Teknik paling ilmiah untuk membangun memori jangka panjang — kami gabungkan dengan resonansi Quran.",
    "science.quote": "'Bayangkan: Anda bukan sedang belajar — tapi sedang men-tune otak Anda ke frekuensi tertinggi.'",
    "testimonials.title": "Kisah Transformasi Otak Nyata",
    "download.title": "Jangan Biarkan Otak Anda Terjebak di Zaman DOS.",
    "download.desc": "Tak peduli usia, latar belakang, atau level — otak Anda layak untuk upgrade.",
    "download.cta": "Mulai Neuro-Upgrade Anda Hari Ini — Gratis.",
    "faq.title": "Pertanyaan Neuro-Upgrade",
    "newsletter.title": "Gabung Komunitas Neuro-Hackers",
    "newsletter.desc": "Dapatkan 'Brain Upgrade Tips', Riset Terkini, & Teknik Neuro-Quranic Setiap Minggu.",
    "newsletter.placeholder": "Masukkan email Anda",
    "newsletter.button": "Saya Mau Upgrade Otak Saya!",
    "footer.copyright": "© 2025 NeuroQuranic — Sistem Operasi Baru Otak Anda."
  },
  en: {
    "nav.tools": "Neuro-Tools",
    "nav.for-whom": "For Whom?",
    "nav.science": "The Science",
    "nav.testimonials": "Transformations",
    "nav.download": "Start Upgrade",
    "hero.title": "Upgrade Your Brain from 'DOS' to 'Quantum Computer' — Using the Highest Frequency: The Quran.",
    "hero.subtitle": "From infants absorbing divine waveforms, to seniors rebuilding neural pathways — NeuroQuranic is a brain operating system powered by neuroscience and Quranic resonance, engineered to boost memory, reverse cognitive decline, and live with calm, clarity, and competitive edge.",
    "hero.tagline": "🧠 Not just learning Quran — but unlocking your brain's ultimate potential through it.",
    "hero.cta": "Start Your Upgrade Now",
    "tools.title": "Neuro-Tools for Brain Recalibration",
    "tools.tool1.title": "Frequency-Based Spaced Repetition",
    "tools.tool1.desc": "Repetition system based on brainwave frequencies (alpha, theta, gamma) — sync memorization with optimal brain states. Infants absorb effortlessly. Seniors reactivate old memories. You — 3x retention boost.",
    "tools.tool2.title": "Multisensory Quranic Resonance",
    "tools.tool2.desc": "Blend of high-quality audio, brainwave visuals, and interaction — activate 7 brain regions simultaneously. Like a 'defrag' for your mind.",
    "tools.tool3.title": "Cognitive Dashboard + Dopamine Triggers",
    "tools.tool3.desc": "Monitor your brain's 'CPU Usage' — focus, stress, memory. Earn 'neuro-rewards' on milestones — make your brain crave learning, not resist it.",
    "tools.tool4.title": "Mindful Recalibration Mode",
    "tools.tool4.desc": "Brain 'reboot' mode — breath guidance + high-frequency Quranic verses — clear mental clutter, boost neuroplasticity. 10 mins = like 2 hours of sleep.",
    "tools.tool5.title": "Family Neural Sync",
    "tools.tool5.desc": "Track & align learning frequencies across your family — from infants to grandparents. Turn your home into a 'neuro-habitat' that stimulates brain growth.",
    "for-whom.title": "Who Needs This Brain OS Upgrade?",
    "for-whom.baby.title": "Infants & Children",
    "for-whom.baby.desc": "Absorb Quranic frequencies early — build strongest neural pathways before age 7.",
    "for-whom.student.title": "Students & Professionals",
    "for-whom.student.desc": "Fight brain fog, boost focus & competitiveness in a distracted world.",
    "for-whom.parent.title": "Parents & Educators",
    "for-whom.parent.desc": "Build a 'neuro-environment' at home/school — children learn without force, brains grow by fitrah.",
    "for-whom.senior.title": "Seniors",
    "for-whom.senior.desc": "Rebuild memory, fight dementia, activate hippocampus — live calmer & more meaningfully.",
    "for-whom.seeker.title": "Peace Seekers",
    "for-whom.seeker.desc": "Reset your brain from stress, anxiety, overthinking — with Quranic frequencies that calm the nervous system.",
    "for-whom.quote": "'We don't teach Quran — we build brains capable of absorbing, understanding, and living with it.'",
    "science.title": "Why Quran? Because It's Not Just a Book — It's the Highest Frequency for the Human Brain.",
    "science.point1": "📡 <strong>EEG Studies</strong>: Quranic verses stimulate alpha & theta waves — the brain's optimal state for learning & healing.",
    "science.point2": "🧬 <strong>Neuroplasticity</strong>: The brain can be 'reprogrammed' at any age — Quran is the most effective 'code'.",
    "science.point3": "⚡ <strong>Frequency Resonance</strong>: Quranic recitation frequencies (especially certain qira'at) align with Earth's Schumann Resonance — stabilizing the nervous system.",
    "science.point4": "🔄 <strong>Spaced Repetition + Multisensory</strong>: The most scientific method for long-term memory — we fuse it with Quranic resonance.",
    "science.quote": "'Imagine: You're not studying — you're tuning your brain to the highest frequency.'",
    "testimonials.title": "Real Brain Transformation Stories",
    "download.title": "Don't Let Your Brain Stay Stuck in the DOS Era.",
    "download.desc": "No matter your age, background, or level — your brain deserves an upgrade.",
    "download.cta": "Start Your Neuro-Upgrade Today — Free.",
    "faq.title": "Neuro-Upgrade FAQs",
    "newsletter.title": "Join the Neuro-Hackers Community",
    "newsletter.desc": "Get 'Brain Upgrade Tips', Latest Research, & Neuro-Quranic Techniques Weekly.",
    "newsletter.placeholder": "Enter your email",
    "newsletter.button": "I Want to Upgrade My Brain!",
    "footer.copyright": "© 2025 NeuroQuranic — Your Brain's New Operating System."
  }
} as const;

interface LanguageContextType {
  currentLang: Language;
  changeLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLang, setCurrentLang] = useState<Language>('bm');

  useEffect(() => {
    const savedLang = localStorage.getItem('preferredLang') as Language;
    if (savedLang && translations[savedLang]) {
      setCurrentLang(savedLang);
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    setCurrentLang(lang);
    localStorage.setItem('preferredLang', lang);
  };

  const t = (key: string): string => {
    const translation = translations[currentLang];
    return (translation as any)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLang, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};