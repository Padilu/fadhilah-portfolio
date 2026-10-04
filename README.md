# Fadhilah Alkahfi — Interactive Portfolio & Resume (SPA)

> Minimalist Single-Page Application (SPA) Portfolio & Resume built with **Next.js**, **React**, and **Tailwind CSS**, adhering to the principles of **Swiss Design & High-End Minimalist Engineering** (Anti-AI Slop).

[![Next.js](https://img.shields.io/badge/Next.js-16+-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19+-blue?style=flat&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## 📐 Design Philosophy: Swiss Minimalist Engineering

This portfolio was designed from the ground up to eliminate generic "AI-slop" decorations (no random glowing blobs, no tacky 3D cartoon avatars, no heavy particle animations):

1. **Swiss Typography & Grid Precision:** Clean typographic hierarchy powered by Geist Sans and Geist Mono, high contrast, balanced whitespace, and purposeful micro-interactions.
2. **Subtle Parallax Micro-Effects:** Bounded, hardware-accelerated subtle vertical shift (`translateY`) and soft opacity fade on the hero section for a tactile, responsive feel without layout thrashing.
3. **True Dual Theme Engine (Dark Default):**
   - **Dark Mode (Default):** Deep Slate/Charcoal background (`#090D16`), Card Slate (`#111827` with 1px border `#1F2937`), Accent Blue (`#0284C7`), Off-White typography (`#F3F4F6`).
   - **Light Mode:** Pure Slate background (`#F8FAFC`), Pure White cards (`#FFFFFF` with 1px border `#E2E8F0`), Ocean Blue (`#0284C7`), Charcoal typography (`#0F172A`).
   - Persistent theme toggle stored in `localStorage`.

---

## 🧭 Portfolio Structure & Content

1. **Header / Navigation:** Monogram logo `FA`, live availability indicator, section navigation with active scroll-spy, and dual-mode theme toggle.
2. **Hero Section:** High-impact typography, location metadata (`Bojonggede, Bogor`), bio summary, and direct CTA actions (GitHub, LinkedIn, Email, WhatsApp).
3. **About Me:** Clean 2-column layout with technical profile frame and narrative highlighting the intersection of software engineering and creative multimedia.
4. **Education:** Universitas Gunadarma (S1 Informatika, IPK: 3.1) with coursework tags and academic focus.
5. **Experience Timeline:** Vertical minimalist timeline featuring:
   - *2026: Anggota Divisi Media Kreatif* — PKKMB FTI Universitas Gunadarma
   - *2026: Participant* — RevoU Software Engineering Class
   - *2026: Sukarelawan* — SoCo Giving (Lanyard & Laughter + Ekspedisi Baik)
   - *2024 - 2025: Divisi Dokumentasi* — Gamagudabo
6. **Skills & Languages Bento Grid:**
   - Pemrograman & Web Dev (JS, React.js, Node.js, HTML5/CSS3, SQL, Git & GitHub)
   - Creative & Multimedia (Videography, Photography, Premiere Pro, DaVinci Resolve)
   - Soft Skills & Engineering Mindset
   - Trilingual Proficiency: Indonesia (Native), English (Professional), Japanese (Conversational)
7. **Contact & Footer:** Fully functional interactive contact form, direct communication cards (with one-click email copy & WhatsApp link), and smooth scroll-to-top.

---

## 🗂️ Project Directory Architecture

```text
fadhilah-portfolio/
├── public/
│   └── avatar.svg              # Minimalist technical avatar graphic
├── src/
│   ├── app/
│   │   ├── globals.css         # Swiss design tokens & dual-theme variables
│   │   ├── layout.tsx          # Root layout with Geist fonts & ThemeProvider
│   │   └── page.tsx            # Main SPA container assembling all sections
│   ├── components/
│   │   ├── AboutSection.tsx    # Two-column About & Core Competencies
│   │   ├── ContactSection.tsx  # Interactive contact form & direct channels
│   │   ├── EducationSection.tsx# Gunadarma S1 Informatika & coursework
│   │   ├── ExperienceSection.tsx# Vertical minimalist timeline
│   │   ├── Footer.tsx          # Footer & smooth back-to-top
│   │   ├── HeroSection.tsx     # Hero banner with subtle parallax & CTAs
│   │   ├── Navbar.tsx          # Sticky navigation & theme toggle
│   │   ├── SkillsSection.tsx   # Bento grid for skills & languages
│   │   └── icons/
│   │       └── SocialIcons.tsx # Crisp SVG icons (GitHub, LinkedIn, WhatsApp)
│   ├── context/
│   │   └── ThemeContext.tsx    # Dual-theme provider (Dark/Light)
│   ├── data/
│   │   └── portfolioData.ts    # Centralized portfolio data & metadata
│   └── hooks/
│       ├── useParallax.ts      # Bounded subtle parallax hook
│       └── useScrollSpy.ts     # Active nav section detection
├── .gitignore
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🚀 Quick Start (Local Development)

### 1. Prerequisites
- Node.js `v18+` or `v20+` or `v22+`
- npm `9+` / `10+`

### 2. Installation & Run
```bash
# Navigate to the project directory
cd fadhilah-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

### 3. Production Build
```bash
# Build production bundle
npm run build

# Preview production build
npm run start
```

---


## 👤 Kontak & Profil

- **Nama:** Fadhilah Alkahfi
- **GitHub:** [@Padilu](https://github.com/Padilu)
- **LinkedIn:** [fadhilah-alkahfi-413942397](https://www.linkedin.com/in/fadhilah-alkahfi-413942397)
- **Email:** [fadhilahalalk141@gmail.com](mailto:fadhilahalalk141@gmail.com)
- **WhatsApp:** [+62 877-1547-2744](https://wa.me/6287715472744)

---
&copy; 2026 Fadhilah Alkahfi. Built with Antigravity.
