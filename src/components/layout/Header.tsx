"use client";

import { useState } from "react";

const Header = () => {
  const [active, setActive] = useState("hero");

  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b-2 border-base-primary z-10">
      <div className="flex items-center justify-between max-w-container mx-auto h-20">
        <h1 className="text-3xl font-bold">✶MJ</h1>
        <nav className="flex items-center gap-5 text-lg font-semibold capitalize">
          {["hero", "projects", "skills", "about", "contact"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setActive(id)}
              className={active === id ? "text-primary-dark" : ""}
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
