"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { EducationSection } from "@/components/EducationSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { useParallax } from "@/hooks/useParallax";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export default function Home() {
  const { heroTranslateY, heroOpacity, isScrolled } = useParallax();

  // Track active section for navigation highlight
  const activeSection = useScrollSpy(
    ["about", "education", "experience", "skills", "contact"],
    150
  );

  return (
    <div className="relative min-h-screen flex flex-col transition-colors duration-200">
      {/* Header / Navigation Bar */}
      <Navbar activeSection={activeSection} isScrolled={isScrolled} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section with subtle bounded Parallax */}
        <HeroSection translateY={heroTranslateY} opacity={heroOpacity} />

        {/* Section 01: About Me */}
        <AboutSection />

        {/* Section 02: Education */}
        <EducationSection />

        {/* Section 03: Experience Timeline */}
        <ExperienceSection />

        {/* Section 04: Skills & Bento Grid */}
        <SkillsSection />

        {/* Section 05: Contact & Inquiries */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
