"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Briefcase, Calendar, ChevronRight, Tag } from "lucide-react";

export function ExperienceSection() {
  const { experiences } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-12">
        <span className="font-mono text-xs text-[var(--accent)] font-semibold tracking-widest uppercase">
          // 03
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
          Pengalaman & Kelas
        </h2>
        <div className="flex-1 h-px bg-[var(--card-border)] ml-2" />
      </div>

      {/* Vertical Minimalist Swiss Timeline */}
      <div className="relative pl-6 sm:pl-8 border-l border-[var(--timeline-line)] ml-2 sm:ml-4 space-y-10">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="relative group">
            {/* Timeline Node Dot */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-[var(--accent)] bg-[var(--bg-main)] group-hover:bg-[var(--accent)] transition-colors duration-200" />

            {/* Experience Card */}
            <div className="swiss-card p-5 sm:p-6 rounded-xl">
              {/* Year Pill & Organization Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded font-mono text-xs font-semibold bg-[var(--accent-soft)] text-[var(--accent)] border border-[var(--accent)]/30">
                  <Calendar className="w-3 h-3" />
                  {exp.year}
                </span>

                <span className="font-mono text-xs text-[var(--text-muted)] tracking-wider">
                  #{String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Role & Organization */}
              <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                {exp.role}
              </h3>
              <p className="font-mono text-xs sm:text-sm text-[var(--text-secondary)] font-medium mt-0.5 mb-3">
                {exp.organization}
              </p>

              {/* Description */}
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                {exp.description}
              </p>

              {/* Bullet Points */}
              {exp.bulletPoints && exp.bulletPoints.length > 0 && (
                <ul className="space-y-1.5 mb-5 pl-1">
                  {exp.bulletPoints.map((point, pIdx) => (
                    <li
                      key={pIdx}
                      className="text-xs sm:text-sm text-[var(--text-secondary)] flex items-start gap-2"
                    >
                      <span className="text-[var(--accent)] mt-1 select-none">
                        &rsaquo;
                      </span>
                      <span className="leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-[var(--card-border)]">
                {exp.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono border border-[var(--card-border)] bg-[var(--badge-bg)] text-[var(--text-muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
