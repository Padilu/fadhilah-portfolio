"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { MapPin, Mail, ArrowUpRight, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/icons/SocialIcons";

interface HeroSectionProps {
  translateY: number;
  opacity: number;
}

export function HeroSection({ translateY, opacity }: HeroSectionProps) {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex flex-col justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Subtle Swiss grid background */}
      <div className="absolute inset-0 swiss-grid-pattern pointer-events-none" />

      {/* Hero content with subtle parallax transformation */}
      <div
        className="max-w-4xl mx-auto w-full transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(0, ${translateY}px, 0)`,
          opacity: opacity,
        }}
      >
        {/* Status / Location Meta Badge */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono border border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--text-secondary)]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Open for Internship & Opportunities</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono border border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--text-secondary)]">
            <MapPin className="w-3 h-3 text-[var(--accent)]" />
            <span>{personal.location}</span>
          </div>
        </div>

        {/* Minimalist Sub-heading / Pre-title */}
        <div className="flex items-center gap-2 font-mono text-xs text-[var(--accent)] uppercase tracking-wider mb-2 font-semibold">
          <Terminal className="w-3.5 h-3.5" />
          <span>Software Engineering &bull; Creative Media</span>
        </div>

        {/* Main Name Heading - Swiss Big Typography */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--text-primary)] mb-4">
          {personal.name}
        </h1>

        {/* Role title */}
        <p className="text-lg sm:text-xl font-mono text-[var(--text-secondary)] mb-6 font-medium">
          {personal.role}
        </p>

        {/* Summary paragraph */}
        <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl mb-8">
          {personal.summary}
        </p>

        {/* Primary CTA Action Row */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          <a
            href={personal.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded font-mono text-xs font-semibold bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all shadow-sm group"
          >
            <GithubIcon className="w-4 h-4 transition-transform group-hover:scale-110" />
            <span>GitHub Profile</span>
            <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100" />
          </a>

          <a
            href={personal.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded font-mono text-xs font-semibold bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all shadow-sm group"
          >
            <LinkedinIcon className="w-4 h-4 text-sky-600 transition-transform group-hover:scale-110" />
            <span>LinkedIn Profile</span>
            <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100" />
          </a>

          <a
            href={`mailto:${personal.socialLinks.email}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded font-mono text-xs font-semibold bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-all shadow-sm group"
          >
            <Mail className="w-4 h-4 transition-transform group-hover:scale-110" />
            <span>Email Me</span>
          </a>

          <a
            href={personal.socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded font-mono text-xs font-semibold bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--text-primary)] hover:border-emerald-500 hover:text-emerald-500 transition-all shadow-sm group"
          >
            <WhatsappIcon className="w-4 h-4 text-emerald-500 transition-transform group-hover:scale-110" />
            <span>WhatsApp</span>
            <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100" />
          </a>
        </div>

        {/* Quick Highlights Grid Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-[var(--card-border)]">
          {personal.metrics.map((metric, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)]">
                {metric.label}
              </span>
              <span className="text-sm font-semibold font-mono text-[var(--text-primary)] mt-0.5">
                {metric.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
