"use client";

import { useEffect, useState } from "react";

const SECTION_IDS = ["home", "experience", "work", "contact"];

const Header = () => {
  const [active, setActive] = useState("home");

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

  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b-2 border-base-primary z-[1000]">
      <div className="flex items-center justify-between max-w-container mx-auto h-20">
        <h1 className="text-3xl font-bold">✶MJ</h1>
        <nav className="flex items-center gap-5 text-lg font-semibold capitalize">
          {SECTION_IDS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`transition-colors ${
                active === id ? "text-primary-dark" : ""
              }`}
            >
              {id}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
