"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/icons/SocialIcons";

export function Footer() {
  const { personal } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-[var(--card-border)] bg-[var(--card-bg)] py-12 px-4 sm:px-6 lg:px-8 mt-12 transition-colors">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand & Copyright */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="font-mono text-sm font-semibold text-[var(--text-primary)] tracking-wider">
            {personal.brandTitle}
          </div>
          <p className="text-xs text-[var(--text-muted)] mt-1 font-mono">
            &copy; 2026 Fadhilah Alkahfi.
          </p>
          <p className="text-[11px] text-[var(--text-muted)] mt-0.5">
            Designed with Swiss Minimalism &bull; Next.js &bull; Tailwind CSS
          </p>
        </div>

        {/* Social Icons & Back to Top */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 border-r border-[var(--card-border)] pr-3 mr-1">
            <a
              href={personal.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--badge-bg)] transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personal.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-sky-500 hover:bg-[var(--badge-bg)] transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personal.socialLinks.email}`}
              className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--badge-bg)] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={personal.socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-emerald-500 hover:bg-[var(--badge-bg)] transition-colors"
              aria-label="WhatsApp"
            >
              <WhatsappIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Smooth Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono font-medium border border-[var(--card-border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent)] transition-all bg-[var(--badge-bg)] cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
