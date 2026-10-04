"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  Mail,
  Send,
  MessageSquare,
  MapPin,
  Check,
  Copy,
  ExternalLink,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/icons/SocialIcons";

export function ContactSection() {
  const { personal } = PORTFOLIO_DATA;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.socialLinks.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Open email client with pre-filled parameters as well
      const mailtoUrl = `mailto:${personal.socialLinks.email}?subject=${encodeURIComponent(
        `Portfolio Inquiry from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Hi Fadhilah,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
      )}`;

      window.open(mailtoUrl, "_blank");
    }, 600);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", message: "" });
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-12">
        <span className="font-mono text-xs text-[var(--accent)] font-semibold tracking-widest uppercase">
          // 05
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
          Kontak & Kolaborasi
        </h2>
        <div className="flex-1 h-px bg-[var(--card-border)] ml-2" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Links & Info (5 cols) */}
        <div className="lg:col-span-5 flex flex-col space-y-4">
          <div className="swiss-card p-6 rounded-2xl">
            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
              Mari Berdiskusi
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
              Terbuka untuk peluang magang, proyek rekayasa perangkat lunak, maupun kolaborasi media kreatif. Silakan hubungi langsung melalui kanal favorit Anda.
            </p>

            <div className="space-y-3">
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
                      WhatsApp
                    </span>
                    <span className="font-mono text-xs text-[var(--text-primary)] group-hover:text-emerald-500 transition-colors">
                      +62 877-1547-2744
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[var(--text-muted)] group-hover:text-emerald-500 transition-colors" />
              </a>

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
        </div>

        {/* Right Column: Contact Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="swiss-card p-6 sm:p-8 rounded-2xl">
            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">
              Kirim Pesan
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] mb-6">
              Isi form di bawah ini dan pesan akan langsung terhubung ke email saya.
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mb-3">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-base text-[var(--text-primary)] mb-1">
                  Pesan Terbuka di Email Client Anda
                </h4>
                <p className="text-xs text-[var(--text-secondary)] max-w-sm mb-4">
                  Terima kasih telah menghubungi, {formData.name}! Saya akan segera merespons secepat mungkin.
                </p>
                <button
                  onClick={handleReset}
                  className="px-4 py-2 rounded text-xs font-mono font-medium border border-[var(--card-border)] text-[var(--text-primary)] hover:border-[var(--accent)]"
                >
                  Kirim Pesan Lainnya
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono font-medium text-[var(--text-secondary)] uppercase tracking-wider mb-1.5"
                  >
                    Nama Lengkap <span className="text-[var(--accent)]">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Contoh: Alex Pratama"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--card-border)] bg-[var(--bg-main)] text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono font-medium text-[var(--text-secondary)] uppercase tracking-wider mb-1.5"
                  >
                    Alamat Email <span className="text-[var(--accent)]">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="alex@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--card-border)] bg-[var(--bg-main)] text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono font-medium text-[var(--text-secondary)] uppercase tracking-wider mb-1.5"
                  >
                    Pesan / Keperluan <span className="text-[var(--accent)]">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tuliskan pesan, tawaran proyek, atau peluang magang di sini..."
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
                      <span>Kirim Pesan Sekarang</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
