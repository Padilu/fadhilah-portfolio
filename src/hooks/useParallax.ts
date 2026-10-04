"use client";

import { useEffect, useState } from "react";

export function useParallax() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Subtle transformations (anti-AI slop: bounded and restrained)
  const heroTranslateY = Math.min(scrollY * 0.18, 50);
  const heroOpacity = Math.max(1 - scrollY / 700, 0.45);
  const isScrolled = scrollY > 20;

  return {
    scrollY,
    heroTranslateY,
    heroOpacity,
    isScrolled,
  };
}
