"use client";

import { useState } from "react";
import { Terminal, ChevronDown, ChevronRight } from "lucide-react";
export default function EditorFooter() {
  const [isExpanded, setIsExpanded] = useState(true);
  return (
    <footer className="studio-terminal">
      <button
        className="terminal-title"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
      >
        <Terminal size={14} /> NOTES <span>민지의 작업 노트</span>
        {isExpanded ? <ChevronDown size={15} /> : <ChevronRight size={15} />}
      </button>
      {isExpanded && (
        <div className="terminal-content">
          <span className="terminal-prompt">minji@portfolio ~ %</span>
          <span>작은 디테일이 좋은 화면을 만든다고 믿습니다.</span>
          <span className="terminal-cursor">▍</span>
          <span className="terminal-signature">
            DESIGNED & BUILT BY MINJI © {new Date().getFullYear()}
          </span>
        </div>
      )}
    </footer>
  );
}
