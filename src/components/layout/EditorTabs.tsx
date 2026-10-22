"use client";

import type { KeyboardEvent } from "react";
import { Menu } from "lucide-react";
import { portfolioFiles } from "@/data/portfolio";
import type { PortfolioPage } from "@/types/portfolio";

type Props = {
  page: PortfolioPage;
  onToggleMenu: () => void;
  onNavigate: (page: PortfolioPage) => void;
};

export default function EditorTabs({ page, onToggleMenu, onNavigate }: Props) {
  function handleTabKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    pageId: PortfolioPage,
  ) {
    const index = portfolioFiles.findIndex((file) => file.id === pageId);
    let nextIndex: number;

    switch (event.key) {
      case "ArrowRight":
        nextIndex = (index + 1) % portfolioFiles.length;
        break;
      case "ArrowLeft":
        nextIndex = (index + portfolioFiles.length - 1) % portfolioFiles.length;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = portfolioFiles.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    const nextPage = portfolioFiles[nextIndex].id;
    onNavigate(nextPage);
    document.getElementById(`tab-${nextPage}`)?.focus();
  }

  return (
    <div className="studio-tabs" role="tablist" aria-label="포트폴리오 페이지">
      <button
        className="mobile-menu"
        onClick={onToggleMenu}
        aria-label="메뉴 열기"
      >
        <Menu size={19} />
      </button>
      {portfolioFiles.map((file) => (
        <button
          key={file.id}
          role="tab"
          id={`tab-${file.id}`}
          tabIndex={page === file.id ? 0 : -1}
          aria-selected={page === file.id}
          aria-controls="studio-main"
          onKeyDown={(event) => handleTabKeyDown(event, file.id)}
          onClick={() => onNavigate(file.id)}
          className={page === file.id ? "selected" : ""}
        >
          <span className={`file-icon icon-${file.id}`}>{file.ext}</span>
          {file.file}
          <span className="tab-dot">{page === file.id ? "●" : ""}</span>
        </button>
      ))}
    </div>
  );
}
