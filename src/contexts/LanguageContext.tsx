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
    "tools.title": "Neuro-Tools untuk Kalibrasi Semula Otak",
    "tools.tool1.title": "Ulangan Berjarak Berasaskan Frekuensi",
    "tools.tool1.desc": "Sistem ulangan berdasarkan frekuensi otak (alpha, theta, gamma) — selaraskan hafalan dengan gelombang otak optimal. Bayi serap tanpa paksa. Warga emas aktifkan memori lama. Anda — tingkatkan retensi 3x ganda.",
    "tools.tool2.title": "Resonans Quran Multisensori",
    "tools.tool2.desc": "Gabungan audio (bacaan berkualiti tinggi), visual (animasi gelombang otak), dan interaksi — aktifkan 7 area otak serentak. Seperti 'defrag' otak anda.",
    "tools.tool3.title": "Papan Pemuka Kognitif + Pencetus Dopamin",
    "tools.tool3.desc": "Pantau 'CPU Usage' otak anda — fokus, stres, daya ingat. Dapatkan 'neuro-reward' bila capai milestone — otak jadi ketagih belajar, bukan tertekan.",
    "tools.tool4.title": "Mod Kalibrasi Semula Bersederhana",
    "tools.tool4.desc": "Mode 'reboot' otak — panduan nafas + ayat Quran frekuensi tinggi — reset mental clutter, tingkatkan neuroplasticity. 10 minit = seperti tidur 2 jam.",
    "tools.tool5.title": "Penyegerakan Neural Keluarga",
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
    "testimonials.quote1": "Anak saya umur 2 tahun — belum cakap, tapi boleh ikut irama Surah Ar-Rahman. Doktor kata neural development dia advanced. Saya percaya — ini sebab NeuroQuranic.",
    "testimonials.author1": "Dr. Aina, Pakar Kanak-Kanak",
    "testimonials.quote2": "Umur 68, dah lupa nama anak sendiri. Selepas 3 bulan guna NeuroQuranic — saya ingat balik doa waktu kecil. Otak saya rasa 'hidup' semula.",
    "testimonials.author2": "Pak Din, Pesara Guru",
    "testimonials.quote3": "Sebagai CEO, otak saya overload. 10 minit sehari dengan Mindful Recitation Mode — macam 'factory reset'. Fokus saya naik 200%.",
    "testimonials.author3": "Aiman, Founder Tech Startup",
    "download.title": "Jangan Biarkan Otak Anda Terjebak di Zaman DOS.",
    "download.desc": "Tak kira umur, latar belakang, atau tahap — otak anda layak untuk upgrade.",
    "download.cta": "Mulakan Neuro-Upgrade Anda Hari Ini — Percuma.",
    "faq.title": "Soalan Neuro-Upgrade",
    "faq.q1": "Saya bukan Muslim — boleh guna?",
    "faq.a1": "Ya. Frekuensi Quran terbukti secara saintifik menenangkan sistem saraf & meningkatkan fokus — sesuai untuk semua.",
    "faq.q2": "Saya tak faham Arab — sesuai ke?", 
    "faq.a2": "Sangat sesuai. Otak anda merespon frekuensi & irama, bukan makna — makna akan datang kemudian, secara fitrah.",
    "faq.q3": "Ada unsur agama yang mengikat?",
    "faq.a3": "Tiada. Kami fokus pada sains & transformasi otak. Anda bebas guna mengikut keselesaan.",
    "faq.q4": "Boleh guna untuk terapi?",
    "faq.a4": "Ramai pengguna gunakan untuk ADHD, anxiety, dementia, rukyah — sebagai terapi sokongan. (Bukan pengganti rawatan perubatan).",
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
    "tools.title": "Neuro-Tools untuk Kalibrasi Ulang Otak",
    "tools.tool1.title": "Pengulangan Berjarak Berbasis Frekuensi",
    "tools.tool1.desc": "Sistem pengulangan berdasarkan frekuensi otak (alpha, theta, gamma) — selaraskan hafalan dengan gelombang otak optimal. Bayi serap tanpa paksa. Lansia aktifkan memori lama. Anda — tingkatkan retensi 3x lipat.",
    "tools.tool2.title": "Resonansi Quran Multisensori",
    "tools.tool2.desc": "Gabungan audio (bacaan berkualitas tinggi), visual (animasi gelombang otak), dan interaksi — aktifkan 7 area otak sekaligus. Seperti 'defrag' otak Anda.",
    "tools.tool3.title": "Dashboard Kognitif + Pemicu Dopamin",
    "tools.tool3.desc": "Pantau 'CPU Usage' otak Anda — fokus, stres, daya ingat. Dapatkan 'neuro-reward' saat capai milestone — otak jadi ketagihan belajar, bukan tertekan.",
    "tools.tool4.title": "Mode Kalibrasi Ulang Mindful",
    "tools.tool4.desc": "Mode 'reboot' otak — panduan napas + ayat Quran frekuensi tinggi — reset mental clutter, tingkatkan neuroplastisitas. 10 menit = seperti tidur 2 jam.",
    "tools.tool5.title": "Sinkronisasi Neural Keluarga",
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
    "testimonials.quote1": "Anak saya umur 2 tahun — belum bisa bicara, tapi bisa mengikuti irama Surah Ar-Rahman. Dokter bilang perkembangan neuralnya maju. Saya percaya — ini karena NeuroQuranic.",
    "testimonials.author1": "Dr. Aina, Spesialis Anak",
    "testimonials.quote2": "Umur 68, sudah lupa nama anak sendiri. Setelah 3 bulan pakai NeuroQuranic — saya ingat lagi doa waktu kecil. Otak saya terasa 'hidup' kembali.",
    "testimonials.author2": "Pak Din, Pensiunan Guru",
    "testimonials.quote3": "Sebagai CEO, otak saya overload. 10 menit sehari dengan Mindful Recitation Mode — seperti 'factory reset'. Fokus saya naik 200%.",
    "testimonials.author3": "Aiman, Founder Tech Startup",
    "download.title": "Jangan Biarkan Otak Anda Terjebak di Zaman DOS.",
    "download.desc": "Tak peduli usia, latar belakang, atau level — otak Anda layak untuk upgrade.",
    "download.cta": "Mulai Neuro-Upgrade Anda Hari Ini — Gratis.",
    "faq.title": "Pertanyaan Neuro-Upgrade",
    "faq.q1": "Saya bukan Muslim — boleh pakai?",
    "faq.a1": "Ya. Frekuensi Quran terbukti secara ilmiah menenangkan sistem saraf & meningkatkan fokus — cocok untuk semua.",
    "faq.q2": "Saya tidak paham Arab — cocok gak?",
    "faq.a2": "Sangat cocok. Otak Anda merespon frekuensi & irama, bukan makna — makna akan datang kemudian, secara fitrah.",
    "faq.q3": "Ada unsur agama yang mengikat?", 
    "faq.a3": "Tidak ada. Kami fokus pada sains & transformasi otak. Anda bebas pakai sesuai kenyamanan.",
    "faq.q4": "Bisa dipakai untuk terapi?",
    "faq.a4": "Banyak pengguna pakai untuk ADHD, anxiety, dementia, ruqyah — sebagai terapi pendukung. (Bukan pengganti pengobatan medis).",
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
    "testimonials.quote1": "My 2-year-old child — can't speak yet, but can follow the rhythm of Surah Ar-Rahman. Doctor says his neural development is advanced. I believe — this is because of NeuroQuranic.",
    "testimonials.author1": "Dr. Aina, Pediatric Specialist",
    "testimonials.quote2": "Age 68, forgot my own child's name. After 3 months using NeuroQuranic — I remember childhood prayers again. My brain feels 'alive' again.",
    "testimonials.author2": "Pak Din, Retired Teacher",
    "testimonials.quote3": "As a CEO, my brain is overloaded. 10 minutes daily with Mindful Recitation Mode — like a 'factory reset'. My focus increased 200%.",
    "testimonials.author3": "Aiman, Tech Startup Founder",
    "download.title": "Don't Let Your Brain Stay Stuck in the DOS Era.",
    "download.desc": "No matter your age, background, or level — your brain deserves an upgrade.",
    "download.cta": "Start Your Neuro-Upgrade Today — Free.",
    "faq.title": "Neuro-Upgrade FAQs",
    "faq.q1": "I'm not Muslim — can I use this?",
    "faq.a1": "Yes. Quranic frequencies are scientifically proven to calm the nervous system & improve focus — suitable for everyone.",
    "faq.q2": "I don't understand Arabic — is it suitable?",
    "faq.a2": "Very suitable. Your brain responds to frequency & rhythm, not meaning — understanding comes later, naturally.",
    "faq.q3": "Are there binding religious elements?",
    "faq.a3": "None. We focus on science & brain transformation. You're free to use according to your comfort.",
    "faq.q4": "Can it be used for therapy?",
    "faq.a4": "Many users apply it for ADHD, anxiety, dementia, ruqyah — as supportive therapy. (Not a replacement for medical treatment).",
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
  const [currentLang, setCurrentLang] = useState<Language>('en'); // Default to English

  useEffect(() => {
    const detectLanguageByLocation = async () => {
      const savedLang = localStorage.getItem('preferredLang') as Language;
      if (savedLang && translations[savedLang]) {
        setCurrentLang(savedLang);
        return;
      }

      try {
        // Try to get country from IP geolocation
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        const country = data.country_code;

        let detectedLang: Language = 'en'; // Default to English
        
        if (country === 'MY') {
          detectedLang = 'bm'; // Malaysia -> Malay
        } else if (country === 'ID') {
          detectedLang = 'bi'; // Indonesia -> Bahasa Indonesia
        } else {
          detectedLang = 'en'; // Singapore and other countries -> English
        }

        setCurrentLang(detectedLang);
        localStorage.setItem('preferredLang', detectedLang);
      } catch (error) {
        console.log('Geolocation detection failed, using English default');
        setCurrentLang('en');
      }
    };

    detectLanguageByLocation();
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