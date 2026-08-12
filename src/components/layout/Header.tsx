"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const SECTION_IDS = ["home", "proof", "work", "process"];

const Header = () => {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          setActive(visibleEntry.target.id);
        }
      },
      {
        root: null,
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      },
    );

    SECTION_IDS.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-[1000] w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-black/5 bg-white/85 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-container mx-auto flex h-20 items-center justify-between px-4 sm:px-6">
        <Link
          href="#home"
          className="text-lg font-bold tracking-tight text-text-primary"
        >
          Minji<span className="text-accent">.</span>
        </Link>
        <nav className="flex items-center gap-4 sm:gap-7">
          {SECTION_IDS.map((id) => (
            <Link
              key={id}
              href={`#${id}`}
              className={`relative py-2 text-xs sm:text-sm font-medium tracking-wide transition-colors ${
                active === id
                  ? "text-text-primary"
                  : "text-text-muted hover:text-text-primary"
              }`}
            >
              {id.toUpperCase()}
              {active === id && (
                <span className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent" />
              )}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
