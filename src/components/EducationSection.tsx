"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { GraduationCap, BookOpen, Calendar, Award, CheckCircle } from "lucide-react";

export function EducationSection() {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-12">
        <span className="font-mono text-xs text-[var(--accent)] font-semibold tracking-widest uppercase">
          // 02
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
          Pendidikan
        </h2>
        <div className="flex-1 h-px bg-[var(--card-border)] ml-2" />
      </div>

      {/* Main Education Card */}
      <div className="swiss-card p-6 sm:p-8 rounded-xl relative overflow-hidden">
        {/* Subtle accent border on left */}
        <div className="absolute top-0 left-0 bottom-0 w-1 bg-[var(--accent)]" />

        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded border border-[var(--card-border)] bg-[var(--badge-bg)] flex items-center justify-center text-[var(--accent)] shrink-0 mt-0.5">
              <GraduationCap className="w-5 h-5" />
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)]">
                {education.institution}
              </h3>
              <p className="font-mono text-sm text-[var(--accent)] font-medium mt-0.5">
                {education.degree}
              </p>
            </div>
          </div>

          {/* Right badge: Period & GPA */}
          <div className="flex flex-wrap items-center gap-2 sm:self-start">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-mono border border-[var(--card-border)] bg-[var(--badge-bg)] text-[var(--text-secondary)]">
              <Calendar className="w-3.5 h-3.5 text-[var(--text-muted)]" />
              <span>{education.period}</span>
            </span>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-mono font-semibold border border-[var(--accent)] text-[var(--accent)] bg-[var(--accent-soft)]">
              <Award className="w-3.5 h-3.5" />
              <span>IPK {education.gpa}</span>
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-6">
          {education.description}
        </p>

        {/* Coursework & Competency Modules */}
        <div>
          <h4 className="font-mono text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span>Fokus Kurikulum & Studi Terkait</span>
          </h4>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {education.courses.map((course, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 p-2 rounded border border-[var(--card-border)] bg-[var(--badge-bg)] text-xs font-mono text-[var(--text-secondary)]"
              >
                <CheckCircle className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
                <span className="truncate">{course}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
