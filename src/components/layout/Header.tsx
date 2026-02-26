"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const SECTION_IDS = ["home", "proof", "work", "process", "contact"];

const Header = () => {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
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
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full border-b-1 border-text-primary z-[1000] transition-[1s] ${scrolled ? "shadow-md bg-white/20 backdrop-blur-sm" : ""}`}
    >
      <div className="flex items-center justify-between max-w-container mx-auto h-24">
        <Link href="#home" className="text-xl font-bold">
          Minji&apos;s Portfolio
        </Link>
        <nav className="flex items-center gap-5 text-xl font-semibold capitalize w-1/2 text-center">
          {SECTION_IDS.map((id) => (
            <Link
              key={id}
              href={`#${id}`}
              className={`transition-colors uppercase flex-1 ${
                active === id ? "text-text-primary" : "text-text-secondary"
              }`}
            >
              {id}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
