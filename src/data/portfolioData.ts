export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  gpa: string;
  description: string;
  courses: string[];
}

export interface ExperienceItem {
  id: string;
  year: string;
  role: string;
  organization: string;
  description: string;
  bulletPoints?: string[];
  tags: string[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: { name: string; level?: string }[];
}

export interface LanguageItem {
  language: string;
  proficiency: string;
  nativeName?: string;
  flag?: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Fadhilah Alkahfi",
    shortName: "Fadhilah",
    brandTitle: "FADHILAH ALKAHFI",
    role: "Informatics Student | Software Engineering & Creative Media",
    location: "Bojonggede, Bogor, Indonesia",
    status: "Active Undergraduate • Gunadarma University",
    summary:
      "Mahasiswa Informatika yang adaptif dengan fokus mendalam pada pengembangan perangkat lunak. Memadukan keahlian teknis pemrograman dengan eksekusi media visual yang presisi.",
    aboutLong:
      "Saya adalah mahasiswa S1 Informatika di Universitas Gunadarma yang memiliki ketertarikan kuat dalam rekayasa perangkat lunak dan arsitektur web modern. Dengan pendekatan yang terstruktur dan analitis, saya berkomitmen menciptakan aplikasi yang fungsional, performan, dan memiliki estetika visual yang bersih.\n\nSelain dunia pemrograman, pengalaman saya di bidang multimedia dan media kreatif memberikan perspektif holistik dalam merancang user interface, mengelola alur kerja tim, serta menyampaikan narasi digital secara berdampak.",
    metrics: [
      { label: "Institusi", value: "Univ. Gunadarma" },
      { label: "IPK / GPA", value: "3.1 / 4.0" },
      { label: "Domisili", value: "Bojonggede, Bogor" },
      { label: "Fokus Studi", value: "Software Engineering" },
    ],
    socialLinks: {
      github: "https://github.com/Padilu",
      linkedin: "https://www.linkedin.com/in/fadhilah-alkahfi-413942397",
      email: "fadhilahalalk141@gmail.com",
      whatsapp: "https://wa.me/6287715472744",
    },
  },

  education: {
    institution: "Universitas Gunadarma",
    degree: "S1 Informatika",
    period: "2024 - Sekarang",
    gpa: "3.1",
    description:
      "Fokus studi pada pengembangan perangkat lunak, algoritma, dan manajemen data. Memperdalam pemahaman teori komputasi sekaligus implementasi praktis dalam pembuatan sistem perangkat lunak yang tangguh.",
    courses: [
      "Algoritma & Pemrograman",
      "Struktur Data",
      "Rekayasa Perangkat Lunak",
      "Sistem Basis Data",
      "Arsitektur Komputer",
      "Jaringan Komputer",
    ],
  } as EducationItem,

  experiences: [
    {
      id: "exp-1",
      year: "2026",
      role: "Anggota Divisi Media Kreatif",
      organization: "PKKMB FTI Universitas Gunadarma 2026",
      description:
        "Bertanggung jawab atas konseptualisasi visual, produksi konten dokumentasi, dan pembuatan aset media kreatif pendukung kegiatan pengenalan kampus fakultas teknik industri.",
      bulletPoints: [
        "Mengelola alur kerja produksi visual dan distribusi aset media kreatif acara.",
        "Mendokumentasikan rangkaian kegiatan dan menghasilkan visual recap berstandar tinggi.",
        "Berkolaborasi lintas divisi untuk memastikan konsistensi branding dan pesan acara.",
      ],
      tags: ["Creative Direction", "Visual Assets", "Event Documentation", "Teamwork"],
    },
    {
      id: "exp-2",
      year: "2026",
      role: "Participant — Software Engineering Class",
      organization: "RevoU",
      description:
        "Program intensif penguasaan fondasi Software Engineering, metodologi pengembangan perangkat lunak modern, dan praktik web development profesional.",
      bulletPoints: [
        "Mendalami konsep arsitektur aplikasi web modern, frontend development, dan fundamental backend.",
        "Menerapkan best practices Git workflow, problem solving algoritmik, dan debugging terstruktur.",
        "Mengerjakan studi kasus teknis dan simulasi kolaborasi pengembangan produk digital.",
      ],
      tags: ["Software Engineering", "Web Development", "Git Workflow", "Algorithms"],
    },
    {
      id: "exp-3",
      year: "2026",
      role: "Sukarelawan",
      organization: "SoCo Giving",
      description:
        "Berpartisipasi aktif dalam kegiatan kerelawanan dan pemberdayaan sosial melalui inisiatif workshop seni dan kreativitas untuk anak-anak.",
      bulletPoints: [
        "SoCo Giving Lanyard & Laughter: Creations with Besties — mendampingi aktivitas pembuatan karya kerajinan tali.",
        "SoCo Giving Ekspedisi Baik - Wearable Art: From Plain Pouch to Beautiful Creation — memfasilitasi eksplorasi seni melukis pouch.",
        "Mendorong kebebasan berekspresi, rasa percaya diri, dan kreativitas motorik anak-anak dalam lingkungan inklusif.",
      ],
      tags: ["Social Impact", "Youth Empowerment", "Creative Workshop", "Community"],
    },
    {
      id: "exp-4",
      year: "2024 - 2025",
      role: "Divisi Dokumentasi",
      organization: "Gamagudabo",
      description:
        "Memimpin dan mengeksekusi dokumentasi multimedia audio-visual untuk berbagai agenda dan kompetisi yang diselenggarakan Gamagudabo.",
      bulletPoints: [
        "Mengeksekusi pengambilan footage fotografi dan videografi aksi berkecepatan tinggi di lapangan.",
        "Mengedit aftermovie dan teaser dinamis menggunakan DaVinci Resolve & Adobe Premiere Pro.",
        "Menjamin konsistensi color grading, pacing musik, dan estetika visual arsip organisasi.",
      ],
      tags: ["Videography", "Photography", "DaVinci Resolve", "Premiere Pro", "Post-Production"],
    },
  ] as ExperienceItem[],

  skillCategories: [
    {
      title: "Pemrograman & Web Dev",
      icon: "Code2",
      description: "Teknologi inti dalam merancang dan membangun aplikasi web interaktif.",
      skills: [
        { name: "JavaScript", level: "Intermediate" },
        { name: "React.js", level: "Intermediate" },
        { name: "Node.js", level: "Foundational" },
        { name: "HTML5 & CSS3", level: "Advanced" },
        { name: "SQL", level: "Intermediate" },
        { name: "Git & GitHub", level: "Proficient" },
      ],
    },
    {
      title: "Creative & Multimedia",
      icon: "Video",
      description: "Produksi visual, pengolahan video, dan sinematografi digital.",
      skills: [
        { name: "Videography", level: "Advanced" },
        { name: "Photography", level: "Advanced" },
        { name: "Adobe Premiere Pro", level: "Proficient" },
        { name: "DaVinci Resolve", level: "Proficient" },
        { name: "Visual Composition", level: "Advanced" },
      ],
    },
    {
      title: "Soft Skills & Engineering",
      icon: "Brain",
      description: "Kemampuan interpersonal dan metodologi penyelesaian masalah.",
      skills: [
        { name: "Problem Solving", level: "Core" },
        { name: "Team Collaboration", level: "Core" },
        { name: "Effective Communication", level: "Core" },
        { name: "Creativity & Aesthetics", level: "Core" },
        { name: "Self-Driven & Adaptive", level: "Core" },
      ],
    },
  ] as SkillCategory[],

  languages: [
    {
      language: "Indonesia",
      proficiency: "Native / Penutur Asli",
      nativeName: "Bahasa Indonesia",
      flag: "🇮🇩",
    },
    {
      language: "Inggris",
      proficiency: "Professional Working Proficiency",
      nativeName: "English",
      flag: "🇬🇧",
    },
    {
      language: "Jepang",
      proficiency: "Conversational & Fundamental",
      nativeName: "日本語",
      flag: "🇯🇵",
    },
  ] as LanguageItem[],

  navigation: [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ],
};
