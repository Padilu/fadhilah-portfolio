"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  Mail,
  Send,
  HelpCircle,
  MessageSquare,
  MapPin,
  Check,
  Copy,
  ExternalLink,
  Sparkles,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/icons/SocialIcons";

export function ContactSection() {
  const { personal } = PORTFOLIO_DATA;

  const [activeTab, setActiveTab] = useState<"question" | "inquiry">("question");

  // State for Question Form
  const [questionData, setQuestionData] = useState({
    name: "",
    contact: "",
    topic: "Software Engineering & Tech",
    question: "",
  });

  // State for Standard Inquiry Form
  const [inquiryData, setInquiryData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submittedQuestion, setSubmittedQuestion] = useState(false);
  const [submittedInquiry, setSubmittedInquiry] = useState(false);
  const [loading, setLoading] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const topics = [
    "Software Engineering & Tech",
    "Perkuliahan Informatika Gunadarma",
    "Tanya Seputar Upcoming Projects",
    "Creative Media & Video Editing",
    "Diskusi / Pertanyaan Bebas",
  ];

  const faqs = [
    {
      q: "Apakah Fadhilah terbuka untuk kesempatan magang (internship)?",
      a: "Ya, saya sangat terbuka untuk program magang (internship) di bidang Software Engineering, Frontend / Full-Stack Development, maupun Creative Media.",
    },
    {
      q: "Teknologi apa yang paling aktif digunakan saat ini?",
      a: "Fokus utama saya saat ini adalah ekosistem TypeScript / JavaScript (React, Next.js, Node.js), Tailwind CSS, arsitektur basis data, serta eksplorasi Ruby dan tools pengujian perangkat lunak.",
    },
    {
      q: "Bagaimana cara tercepat menghubungi Fadhilah?",
      a: "Untuk respon cepat, Anda dapat mengirim pesan langsung via WhatsApp atau mengirim email resmi ke fadhilahalalk141@gmail.com.",
    },
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.socialLinks.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  // Submit Question
  const handleQuestionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!questionData.name || !questionData.contact || !questionData.question) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmittedQuestion(true);

      const subject = `[Tanya Fadhilah] ${questionData.topic} - dari ${questionData.name}`;
      const body = `Halo Fadhilah,\n\nSaya ingin bertanya mengenai: ${questionData.topic}\n\nPertanyaan:\n"${questionData.question}"\n\nDari: ${questionData.name}\nKontak Balasan: ${questionData.contact}`;

      const mailtoUrl = `mailto:${personal.socialLinks.email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      window.open(mailtoUrl, "_blank");
    }, 500);
  };

  // Submit Inquiry
  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryData.name || !inquiryData.email || !inquiryData.message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmittedInquiry(true);

      const mailtoUrl = `mailto:${personal.socialLinks.email}?subject=${encodeURIComponent(
        `Portfolio Inquiry from ${inquiryData.name}`
      )}&body=${encodeURIComponent(
        `Hi Fadhilah,\n\n${inquiryData.message}\n\nFrom: ${inquiryData.name} (${inquiryData.email})`
      )}`;

      window.open(mailtoUrl, "_blank");
    }, 500);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs text-[var(--accent)] font-semibold tracking-widest uppercase">
          // 06
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
          Kontak & Tanya Pengunjung
        </h2>
        <div className="flex-1 h-px bg-[var(--card-border)] ml-2" />
      </div>

      <p className="text-xs sm:text-sm text-[var(--text-secondary)] mb-10 max-w-2xl leading-relaxed">
        Punya pertanyaan seputar rekayasa perangkat lunak, perkuliahan informatika, atau ingin mengajak kolaborasi? Silakan ajukan pertanyaan langsung melalui formulir di bawah.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Links & Quick FAQs (5 cols) */}
        <div className="lg:col-span-5 flex flex-col space-y-4">
          <div className="swiss-card p-6 rounded-2xl">
            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
              Kanal Komunikasi Langsung
            </h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-6">
              Terbuka untuk diskusi teknis, tanya jawab, maupun peluang profesional. Hubungi langsung melalui kanal favorit Anda:
            </p>

            <div className="space-y-3">
              {/* WhatsApp direct card */}
              <a
                href={personal.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg border border-[var(--card-border)] bg-[var(--badge-bg)] hover:border-emerald-500 transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded border border-[var(--card-border)] bg-[var(--card-bg)] flex items-center justify-center text-emerald-500 shrink-0">
                    <WhatsappIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[var(--text-muted)] block uppercase">
                      WhatsApp (Respon Cepat)
                    </span>
                    <span className="font-mono text-xs text-[var(--text-primary)] group-hover:text-emerald-500 transition-colors">
                      +62 877-1547-2744
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[var(--text-muted)] group-hover:text-emerald-500 transition-colors" />
              </a>

              {/* Email direct card */}
              <div className="flex items-center justify-between p-3 rounded-lg border border-[var(--card-border)] bg-[var(--badge-bg)]">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded border border-[var(--card-border)] bg-[var(--card-bg)] flex items-center justify-center text-[var(--accent)] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono text-[var(--text-muted)] block uppercase">
                      Email
                    </span>
                    <a
                      href={`mailto:${personal.socialLinks.email}`}
                      className="font-mono text-xs text-[var(--text-primary)] truncate hover:text-[var(--accent)] transition-colors block"
                    >
                      {personal.socialLinks.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded hover:bg-[var(--card-border)] text-[var(--text-secondary)] transition-colors shrink-0 ml-2"
                  title="Salin Email"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* LinkedIn direct card */}
              <a
                href={personal.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg border border-[var(--card-border)] bg-[var(--badge-bg)] hover:border-sky-500 transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded border border-[var(--card-border)] bg-[var(--card-bg)] flex items-center justify-center text-sky-500 shrink-0">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[var(--text-muted)] block uppercase">
                      LinkedIn
                    </span>
                    <span className="font-mono text-xs text-[var(--text-primary)] group-hover:text-sky-500 transition-colors">
                      Fadhilah Alkahfi
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[var(--text-muted)] group-hover:text-sky-500 transition-colors" />
              </a>

              {/* GitHub direct card */}
              <a
                href={personal.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg border border-[var(--card-border)] bg-[var(--badge-bg)] hover:border-[var(--accent)] transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded border border-[var(--card-border)] bg-[var(--card-bg)] flex items-center justify-center text-[var(--text-primary)] shrink-0">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[var(--text-muted)] block uppercase">
                      GitHub
                    </span>
                    <span className="font-mono text-xs text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                      @Padilu
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors" />
              </a>
            </div>

            <div className="mt-5 pt-4 border-t border-[var(--card-border)] flex items-center gap-2 text-xs font-mono text-[var(--text-muted)]">
              <MapPin className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>Bojonggede, Bogor, Jawa Barat</span>
            </div>
          </div>

          {/* Quick FAQ Accordion */}
          <div className="swiss-card p-5 rounded-2xl">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)] mb-3 flex items-center gap-1.5 font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[var(--accent)]" />
              FAQ Singkat
            </h4>
            <div className="space-y-2">
              {faqs.map((faq, index) => {
                const isOpen = expandedFaq === index;
                return (
                  <div
                    key={index}
                    className="border border-[var(--card-border)] rounded-lg overflow-hidden bg-[var(--badge-bg)]/50"
                  >
                    <button
                      onClick={() => setExpandedFaq(isOpen ? null : index)}
                      className="w-full py-2.5 px-3 text-left flex items-center justify-between text-xs font-medium text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
                    >
                      <span className="pr-2">{faq.q}</span>
                      {isOpen ? (
                        <ChevronUp className="w-3.5 h-3.5 shrink-0 text-[var(--accent)]" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5 shrink-0 text-[var(--text-muted)]" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-3 pb-3 text-[11px] text-[var(--text-secondary)] leading-relaxed border-t border-[var(--card-border)] pt-2">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Form Tabs (7 cols) */}
        <div className="lg:col-span-7">
          <div className="swiss-card p-6 sm:p-8 rounded-2xl">
            {/* Form Mode Selector Tabs */}
            <div className="flex border-b border-[var(--card-border)] pb-4 mb-6 gap-2">
              <button
                type="button"
                onClick={() => setActiveTab("question")}
                className={`flex items-center gap-2 pb-2 px-3 text-xs font-mono font-medium border-b-2 transition-all cursor-pointer ${
                  activeTab === "question"
                    ? "border-[var(--accent)] text-[var(--accent)]"
                    : "border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                <HelpCircle className="w-4 h-4" />
                <span>Form Tanya Pengunjung</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("inquiry")}
                className={`flex items-center gap-2 pb-2 px-3 text-xs font-mono font-medium border-b-2 transition-all cursor-pointer ${
                  activeTab === "inquiry"
                    ? "border-[var(--accent)] text-[var(--accent)]"
                    : "border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                <MessageSquare className="w-4 h-4" />
                <span>Pesan Kolaborasi</span>
              </button>
            </div>

            {/* TAB 1: VISITOR QUESTION FORM */}
            {activeTab === "question" && (
              <div>
                <div className="mb-6">
                  <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] mb-1">
                    Ajukan Pertanyaan Kepada Fadhilah
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    Pengunjung dapat menanyakan apa saja—mulai dari saran coding, diskusi tech stack, feedback proyek, hingga sharing perkuliahan.
                  </p>
                </div>

                {submittedQuestion ? (
                  <div className="p-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-center flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mb-3">
                      <Check className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-base text-[var(--text-primary)] mb-1">
                      Pertanyaan Anda Telah Disiapkan!
                    </h4>
                    <p className="text-xs text-[var(--text-secondary)] max-w-sm mb-4 leading-relaxed">
                      Terima kasih atas pertanyaannya, <strong className="text-[var(--text-primary)]">{questionData.name}</strong>. Pesan pertanyaan telah dibuka di aplikasi email Anda, atau Anda juga bisa mengirimkannya langsung ke WhatsApp.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-2 w-full max-w-xs mb-4">
                      <a
                        href={`https://wa.me/6287715472744?text=${encodeURIComponent(
                          `Halo Fadhilah, saya ${questionData.name} dari website portfolio. Mau bertanya seputar ${questionData.topic}: "${questionData.question}"`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 px-3 rounded-lg text-xs font-mono font-medium bg-emerald-600 text-white hover:bg-emerald-700 transition-colors flex items-center justify-center gap-1.5"
                      >
                        <WhatsappIcon className="w-3.5 h-3.5" />
                        <span>Kirim via WhatsApp</span>
                      </a>
                    </div>

                    <button
                      onClick={() => {
                        setSubmittedQuestion(false);
                        setQuestionData({
                          name: "",
                          contact: "",
                          topic: "Software Engineering & Tech",
                          question: "",
                        });
                      }}
                      className="text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] underline"
                    >
                      Ajukan Pertanyaan Lainnya
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleQuestionSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="q-name"
                        className="block text-xs font-mono font-medium text-[var(--text-secondary)] uppercase tracking-wider mb-1.5"
                      >
                        Nama Anda <span className="text-[var(--accent)]">*</span>
                      </label>
                      <input
                        id="q-name"
                        type="text"
                        required
                        value={questionData.name}
                        onChange={(e) =>
                          setQuestionData({ ...questionData, name: e.target.value })
                        }
                        placeholder="Contoh: Rian Septian"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--card-border)] bg-[var(--bg-main)] text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="q-contact"
                        className="block text-xs font-mono font-medium text-[var(--text-secondary)] uppercase tracking-wider mb-1.5"
                      >
                        Kontak Balasan (Email / No. WA) <span className="text-[var(--accent)]">*</span>
                      </label>
                      <input
                        id="q-contact"
                        type="text"
                        required
                        value={questionData.contact}
                        onChange={(e) =>
                          setQuestionData({ ...questionData, contact: e.target.value })
                        }
                        placeholder="email@example.com atau 08123456789"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--card-border)] bg-[var(--bg-main)] text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="q-topic"
                        className="block text-xs font-mono font-medium text-[var(--text-secondary)] uppercase tracking-wider mb-1.5"
                      >
                        Topik Pertanyaan
                      </label>
                      <select
                        id="q-topic"
                        value={questionData.topic}
                        onChange={(e) =>
                          setQuestionData({ ...questionData, topic: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--card-border)] bg-[var(--bg-main)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors cursor-pointer"
                      >
                        {topics.map((t) => (
                          <option key={t} value={t} className="bg-[var(--card-bg)]">
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="q-question"
                        className="block text-xs font-mono font-medium text-[var(--text-secondary)] uppercase tracking-wider mb-1.5"
                      >
                        Isi Pertanyaan Anda <span className="text-[var(--accent)]">*</span>
                      </label>
                      <textarea
                        id="q-question"
                        required
                        rows={4}
                        value={questionData.question}
                        onChange={(e) =>
                          setQuestionData({ ...questionData, question: e.target.value })
                        }
                        placeholder="Tuliskan pertanyaan Anda secara spesifik di sini..."
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--card-border)] bg-[var(--bg-main)] text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3 px-5 rounded-lg font-mono text-xs font-semibold bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm disabled:opacity-50"
                    >
                      {loading ? (
                        <span>Mengirim pertanyaan...</span>
                      ) : (
                        <>
                          <HelpCircle className="w-3.5 h-3.5" />
                          <span>Kirim Pertanyaan Pengunjung</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            )}

            {/* TAB 2: INQUIRY FORM */}
            {activeTab === "inquiry" && (
              <div>
                <div className="mb-6">
                  <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] mb-1">
                    Kirim Pesan Resmi & Tawaran
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    Untuk penawaran proyek rekayasa perangkat lunak, freelance, kerja sama media, atau peluang magang.
                  </p>
                </div>

                {submittedInquiry ? (
                  <div className="p-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-center flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mb-3">
                      <Check className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-base text-[var(--text-primary)] mb-1">
                      Pesan Terbuka di Email Client Anda
                    </h4>
                    <p className="text-xs text-[var(--text-secondary)] max-w-sm mb-4">
                      Terima kasih telah menghubungi, {inquiryData.name}! Saya akan segera merespons secepat mungkin.
                    </p>
                    <button
                      onClick={() => {
                        setSubmittedInquiry(false);
                        setInquiryData({ name: "", email: "", message: "" });
                      }}
                      className="px-4 py-2 rounded text-xs font-mono font-medium border border-[var(--card-border)] text-[var(--text-primary)] hover:border-[var(--accent)]"
                    >
                      Kirim Pesan Lainnya
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="inq-name"
                        className="block text-xs font-mono font-medium text-[var(--text-secondary)] uppercase tracking-wider mb-1.5"
                      >
                        Nama Lengkap <span className="text-[var(--accent)]">*</span>
                      </label>
                      <input
                        id="inq-name"
                        type="text"
                        required
                        value={inquiryData.name}
                        onChange={(e) =>
                          setInquiryData({ ...inquiryData, name: e.target.value })
                        }
                        placeholder="Contoh: Alex Pratama"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--card-border)] bg-[var(--bg-main)] text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="inq-email"
                        className="block text-xs font-mono font-medium text-[var(--text-secondary)] uppercase tracking-wider mb-1.5"
                      >
                        Alamat Email <span className="text-[var(--accent)]">*</span>
                      </label>
                      <input
                        id="inq-email"
                        type="email"
                        required
                        value={inquiryData.email}
                        onChange={(e) =>
                          setInquiryData({ ...inquiryData, email: e.target.value })
                        }
                        placeholder="alex@example.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--card-border)] bg-[var(--bg-main)] text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="inq-message"
                        className="block text-xs font-mono font-medium text-[var(--text-secondary)] uppercase tracking-wider mb-1.5"
                      >
                        Pesan / Keperluan <span className="text-[var(--accent)]">*</span>
                      </label>
                      <textarea
                        id="inq-message"
                        required
                        rows={4}
                        value={inquiryData.message}
                        onChange={(e) =>
                          setInquiryData({ ...inquiryData, message: e.target.value })
                        }
                        placeholder="Tuliskan pesan atau penawaran kerja sama di sini..."
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--card-border)] bg-[var(--bg-main)] text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3 px-5 rounded-lg font-mono text-xs font-semibold bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm disabled:opacity-50"
                    >
                      {loading ? (
                        <span>Memproses...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Kirim Pesan Kolaborasi</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
