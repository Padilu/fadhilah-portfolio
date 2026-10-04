"use client";

import React, { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Sun, Moon, Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  isScrolled: boolean;
}

export function Navbar({ activeSection, isScrolled }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = PORTFOLIO_DATA.navigation;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-[var(--card-border)] bg-[var(--nav-bg)] backdrop-blur-md py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo / Text */}
          <a
            href="#"
            className="group flex items-center gap-3 transition-opacity hover:opacity-90"
            aria-label="Fadhilah Alkahfi Home"
          >
            <div className="w-8 h-8 rounded border border-[var(--accent)] flex items-center justify-center font-mono font-bold text-xs text-[var(--accent)] bg-[var(--accent-soft)]">
              FA
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-sm sm:text-base font-semibold tracking-wider text-[var(--text-primary)]">
                {PORTFOLIO_DATA.personal.brandTitle}
              </span>
              <span className="text-[10px] font-mono text-[var(--text-muted)] tracking-tight hidden sm:inline-block">
                INFORMATICS &bull; SOFTWARE &bull; MEDIA
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-1.5 rounded text-xs font-mono tracking-wide transition-all ${
                    isActive
                      ? "text-[var(--accent)] bg-[var(--accent-soft)] font-medium"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--badge-bg)]"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Area */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Direct Connect Quick CTA */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono font-medium border border-[var(--card-border)] text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all bg-[var(--card-bg)]"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              className="p-2 rounded border border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--text-primary)] hover:border-[var(--accent)] transition-all flex items-center justify-center cursor-pointer"
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-sky-600" />
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded border border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--text-primary)] hover:border-[var(--accent)] md:hidden cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[var(--card-border)] bg-[var(--card-bg)] px-4 py-4 mt-2 transition-all">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded text-sm font-mono tracking-wide transition-all ${
                    isActive
                      ? "text-[var(--accent)] bg-[var(--accent-soft)] font-medium"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--badge-bg)]"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center px-4 py-2 text-xs font-mono font-medium rounded bg-[var(--accent)] text-white hover:opacity-90 transition-opacity"
            >
              Contact Fadhilah
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
