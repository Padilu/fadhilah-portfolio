"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Code, Video, Users, CheckCircle2, Award, Sparkles } from "lucide-react";

export function AboutSection() {
  const { personal } = PORTFOLIO_DATA;
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-12">
        <span className="font-mono text-xs text-[var(--accent)] font-semibold tracking-widest uppercase">
          // 01
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
          Tentang Saya
        </h2>
        <div className="flex-1 h-px bg-[var(--card-border)] ml-2" />
      </div>

      {/* Two-Column Clean Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Profile Picture & Technical Badge Card */}
        <div className="md:col-span-5 flex flex-col items-center">
          <div className="relative group w-full max-w-[280px] sm:max-w-[320px]">
            {/* Elegant outer subtle border frame */}
            <div className="swiss-card p-4 rounded-2xl flex flex-col items-center">
              {/* Profile Image Frame with circular border */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-2 border-[var(--accent)] p-1 bg-[var(--bg-main)] shadow-inner">
                <div className="w-full h-full rounded-full overflow-hidden relative bg-slate-900 flex items-center justify-center">
                  {!imgError ? (
                    <Image
                      src="/avatar.svg"
                      alt={personal.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={() => setImgError(true)}
                      priority
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-white">
                      <span className="font-mono text-3xl font-bold text-[var(--accent)]">FA</span>
                      <span className="text-[10px] font-mono text-slate-400 mt-1">FADHILAH</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Status Under Profile */}
              <div className="mt-4 text-center w-full">
                <h3 className="font-mono font-semibold text-sm text-[var(--text-primary)]">
                  {personal.name}
                </h3>
                <p className="text-xs font-mono text-[var(--text-muted)] mt-0.5">
                  Informatics Undergrad &bull; Class of 2024
                </p>
                <div className="mt-3 pt-3 border-t border-[var(--card-border)] flex items-center justify-around text-center w-full">
                  <div>
                    <span className="text-[10px] font-mono text-[var(--text-muted)] block uppercase">GPA</span>
                    <span className="font-mono font-bold text-xs text-[var(--accent)]">3.1 / 4.0</span>
                  </div>
                  <div className="w-px h-6 bg-[var(--card-border)]" />
                  <div>
                    <span className="text-[10px] font-mono text-[var(--text-muted)] block uppercase">Status</span>
                    <span className="font-mono font-bold text-xs text-emerald-500">Active</span>
                  </div>
                  <div className="w-px h-6 bg-[var(--card-border)]" />
                  <div>
                    <span className="text-[10px] font-mono text-[var(--text-muted)] block uppercase">Location</span>
                    <span className="font-mono font-bold text-xs text-[var(--text-primary)]">Bogor</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative & Focus Pillars */}
        <div className="md:col-span-7 flex flex-col">
          <h3 className="text-xl sm:text-2xl font-semibold text-[var(--text-primary)] mb-4 tracking-tight leading-snug">
            Memadukan Rekayasa Perangkat Lunak dengan Presisi Estetika Visual
          </h3>

          <div className="space-y-4 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-6">
            <p>
              Saya adalah mahasiswa S1 Informatika di Universitas Gunadarma yang memiliki dedikasi tinggi dalam memahami cara kerja sistem komputasi dan mengembangkan solusi software yang elegan. Saya percaya bahwa kode yang baik tidak hanya efisien secara algoritmik, namun juga mudah dipelihara dan memberikan pengalaman pengguna yang intuitif.
            </p>
            <p>
              Di samping aspek teknis pemrograman, saya aktif mendalami media kreatif (fotografi, videografi, dan video editing). Pengalaman ini melatih kepekaan visual, komposisi, serta detail estetika yang sangat berharga ketika merancang antarmuka aplikasi modern.
            </p>
          </div>

          {/* Three Core Competency Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="swiss-card p-3.5 rounded-lg">
              <div className="w-7 h-7 rounded border border-[var(--card-border)] bg-[var(--badge-bg)] flex items-center justify-center text-[var(--accent)] mb-2">
                <Code className="w-4 h-4" />
              </div>
              <h4 className="font-mono text-xs font-semibold text-[var(--text-primary)] mb-1">
                Software Dev
              </h4>
              <p className="text-[11px] text-[var(--text-muted)] leading-normal">
                Fokus pada JavaScript modern, React.js, clean structure, dan integrasi data.
              </p>
            </div>

            <div className="swiss-card p-3.5 rounded-lg">
              <div className="w-7 h-7 rounded border border-[var(--card-border)] bg-[var(--badge-bg)] flex items-center justify-center text-[var(--accent)] mb-2">
                <Video className="w-4 h-4" />
              </div>
              <h4 className="font-mono text-xs font-semibold text-[var(--text-primary)] mb-1">
                Creative Media
              </h4>
              <p className="text-[11px] text-[var(--text-muted)] leading-normal">
                Keahlian visual editing, post-production DaVinci/Premiere, dan sinematografi.
              </p>
            </div>

            <div className="swiss-card p-3.5 rounded-lg">
              <div className="w-7 h-7 rounded border border-[var(--card-border)] bg-[var(--badge-bg)] flex items-center justify-center text-[var(--accent)] mb-2">
                <Users className="w-4 h-4" />
              </div>
              <h4 className="font-mono text-xs font-semibold text-[var(--text-primary)] mb-1">
                Kolaborasi Tim
              </h4>
              <p className="text-[11px] text-[var(--text-muted)] leading-normal">
                Terbiasa bekerja lintas fungsi, kepanitiaan universitas, dan program relawan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
