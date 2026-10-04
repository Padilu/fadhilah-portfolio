"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  Code2,
  Video,
  Brain,
  Globe,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
} from "lucide-react";

export function SkillsSection() {
  const { skillCategories, languages } = PORTFOLIO_DATA;

  const [activeCategory, setActiveCategory] = useState<string>("all");

  const devCategory = skillCategories.find((c) => c.title.includes("Pemrograman"));
  const creativeCategory = skillCategories.find((c) => c.title.includes("Creative"));
  const softCategory = skillCategories.find((c) => c.title.includes("Soft Skills"));

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-12">
        <span className="font-mono text-xs text-[var(--accent)] font-semibold tracking-widest uppercase">
          // 04
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
          Keahlian & Bahasa
        </h2>
        <div className="flex-1 h-px bg-[var(--card-border)] ml-2" />
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
        {/* Card 1: Pemrograman & Web Dev (Large Bento Card - 7 cols) */}
        {devCategory && (
          <div className="lg:col-span-7 swiss-card p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded border border-[var(--card-border)] bg-[var(--badge-bg)] flex items-center justify-center text-[var(--accent)]">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-[var(--text-primary)]">
                      {devCategory.title}
                    </h3>
                    <p className="text-[11px] font-mono text-[var(--text-muted)]">
                      Web Architecture & Systems
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--accent-soft)] text-[var(--accent)] border border-[var(--accent)]/30">
                  Tech Stack
                </span>
              </div>

              <p className="text-xs text-[var(--text-secondary)] mb-5">
                {devCategory.description}
              </p>

              {/* Skills Tags Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {devCategory.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg border border-[var(--card-border)] bg-[var(--badge-bg)] hover:border-[var(--accent)] transition-all flex flex-col justify-between"
                  >
                    <span className="font-mono text-xs font-semibold text-[var(--text-primary)]">
                      {skill.name}
                    </span>
                    <span className="text-[10px] font-mono text-[var(--text-muted)] mt-1">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--card-border)] flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)]">
              <span>Environment: Modern JS & Node Ecosystem</span>
              <span className="text-[var(--accent)]">VCS: Git & GitHub</span>
            </div>
          </div>
        )}

        {/* Card 2: Creative & Multimedia (Bento Card - 5 cols) */}
        {creativeCategory && (
          <div className="lg:col-span-5 swiss-card p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded border border-[var(--card-border)] bg-[var(--badge-bg)] flex items-center justify-center text-[var(--accent)]">
                    <Video className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-[var(--text-primary)]">
                      {creativeCategory.title}
                    </h3>
                    <p className="text-[11px] font-mono text-[var(--text-muted)]">
                      Audio-Visual & Post-Production
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-[var(--text-secondary)] mb-5">
                {creativeCategory.description}
              </p>

              <div className="space-y-2.5">
                {creativeCategory.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2 rounded border border-[var(--card-border)] bg-[var(--badge-bg)]"
                  >
                    <span className="font-mono text-xs font-medium text-[var(--text-primary)]">
                      {skill.name}
                    </span>
                    <span className="text-[10px] font-mono text-[var(--accent)] font-semibold">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--card-border)] text-[11px] font-mono text-[var(--text-muted)]">
              <span>Suite: DaVinci Resolve &bull; Premiere Pro &bull; DSLR/Mirrorless</span>
            </div>
          </div>
        )}

        {/* Card 3: Soft Skills (Bento Card - 6 cols) */}
        {softCategory && (
          <div className="lg:col-span-6 swiss-card p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded border border-[var(--card-border)] bg-[var(--badge-bg)] flex items-center justify-center text-[var(--accent)]">
                    <Brain className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-[var(--text-primary)]">
                      {softCategory.title}
                    </h3>
                    <p className="text-[11px] font-mono text-[var(--text-muted)]">
                      Professional Mindset & Interpersonal
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-[var(--text-secondary)] mb-4">
                {softCategory.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {softCategory.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--card-border)] bg-[var(--badge-bg)] text-xs font-mono text-[var(--text-primary)]"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--card-border)] text-[11px] font-mono text-[var(--text-muted)]">
              <span>Pendekatan analitis, terstruktur, dan komunikatif</span>
            </div>
          </div>
        )}

        {/* Card 4: Bahasa / Languages (Bento Card - 6 cols) */}
        <div className="lg:col-span-6 swiss-card p-6 rounded-2xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded border border-[var(--card-border)] bg-[var(--badge-bg)] flex items-center justify-center text-[var(--accent)]">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-[var(--text-primary)]">
                    Kemampuan Bahasa
                  </h3>
                  <p className="text-[11px] font-mono text-[var(--text-muted)]">
                    Language Competencies
                  </p>
                </div>
              </div>
            </div>

            <p className="text-xs text-[var(--text-secondary)] mb-4">
              Komunikasi efektif lintas budaya dan literatur teknis internasional.
            </p>

            <div className="space-y-2.5">
              {languages.map((lang, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-lg border border-[var(--card-border)] bg-[var(--badge-bg)]"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base select-none">{lang.flag}</span>
                    <div>
                      <span className="font-mono text-xs font-bold text-[var(--text-primary)]">
                        {lang.language}
                      </span>
                      {lang.nativeName && (
                        <span className="font-mono text-[10px] text-[var(--text-muted)] ml-2">
                          ({lang.nativeName})
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="font-mono text-[11px] text-[var(--accent)] font-medium">
                    {lang.proficiency}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[var(--card-border)] text-[11px] font-mono text-[var(--text-muted)]">
            <span>Siap berkolaborasi dalam tim nasional & multibahasa</span>
          </div>
        </div>
      </div>
    </section>
  );
}
