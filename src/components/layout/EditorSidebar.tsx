"use client";

import {
  ArrowUpRight,
  ChevronDown,
  ChevronRight,
  Code2,
  Files,
  Github,
  Palette,
  Search,
} from "lucide-react";
import { portfolioFiles } from "@/data/portfolio";
import type { PortfolioPage } from "@/types/portfolio";
type Props = {
  page: PortfolioPage;
  isMenuOpen: boolean;
  onToggleMenu: () => void;
  onNavigate: (page: PortfolioPage) => void;
};

export default function EditorSidebar({
  page,
  isMenuOpen,
  onToggleMenu,
  onNavigate,
}: Props) {
  return (
    <>
      <div className="studio-activity">
        <button aria-label="파일 탐색기 열기" onClick={() => onToggleMenu()}>
          <Files size={22} />
        </button>
        <button aria-label="프로젝트 검색" onClick={() => onNavigate("works")}>
          <Search size={22} />
        </button>
        <button
          aria-label="작업 방식 보기"
          onClick={() => onNavigate("process")}
        >
          <Code2 size={23} />
        </button>
        <span className="activity-bottom">
          <Palette size={22} />
        </span>
      </div>
      <aside
        className={`studio-sidebar ${isMenuOpen ? "is-open" : ""}`}
        aria-label="파일 탐색기"
      >
        <div className="explorer-label">
          EXPLORER <span>•••</span>
        </div>
        <div className="folder-label">
          <ChevronDown size={14} /> MINJI’S PORTFOLIO
        </div>
        <div className="folder-sub">
          <ChevronDown size={14} /> src
        </div>
        <nav>
          {portfolioFiles.map((file) => (
            <button
              key={file.id}
              onClick={() => onNavigate(file.id)}
              aria-current={page === file.id ? "page" : undefined}
              className={`file-link ${page === file.id ? "active" : ""}`}
            >
              <span className={`file-icon icon-${file.id}`}>{file.ext}</span>
              <span>
                {file.file}
                <small>{file.label}</small>
              </span>
              {page === file.id && <span className="file-active-dot" />}
            </button>
          ))}
        </nav>
        <div className="sidebar-note">
          <span className="live-dot" /> FROM DESIGN
          <br />
          <strong>TO THE BROWSER.</strong>
          <p>
            디자인의 의도를
            <br />
            화면의 디테일로.
          </p>
        </div>
        <a
          className="sidebar-github"
          href="https://github.com/minji7901"
          target="_blank"
          rel="noreferrer"
        >
          <Github size={16} /> GitHub <ArrowUpRight size={14} />
        </a>
        <div className="sidebar-bottom">
          <ChevronRight size={14} /> OUTLINE <span>WEB PUBLISHER</span>
        </div>
      </aside>
    </>
  );
}
