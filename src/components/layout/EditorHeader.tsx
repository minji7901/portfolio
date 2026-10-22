"use client";

import { Moon, Sun } from "lucide-react";
type Props = {
  fileName: string;
  isLightTheme: boolean;
  onToggleTheme: () => void;
};

export default function EditorHeader({
  fileName,
  isLightTheme,
  onToggleTheme,
}: Props) {
  return (
    <header className="studio-titlebar">
      <div className="studio-brand">
        <span className="brand-mark">
          m<span>↗</span>
        </span>
        <span>
          MINJI<span className="brand-dot">.</span> <small>STUDIO</small>
        </span>
      </div>
      <span className="window-name">
        portfolio <span>/</span> {fileName}
      </span>
      <button
        className="theme-button"
        onClick={onToggleTheme}
        aria-label={isLightTheme ? "어두운 테마로 변경" : "밝은 테마로 변경"}
      >
        {isLightTheme ? <Moon size={15} /> : <Sun size={15} />}
        <span>{isLightTheme ? "Night shift" : "Light mode"}</span>
      </button>
    </header>
  );
}
