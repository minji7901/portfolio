"use client";

import { useState } from "react";
import { useProjectSearch } from "@/hooks/useProjectSearch";
import { ChevronRight } from "lucide-react";
import { portfolioFiles } from "@/data/portfolio";
import type { PortfolioPage } from "@/types/portfolio";
import type { WorkProject } from "@/types/project";
import EditorHeader from "@/components/layout/EditorHeader";
import EditorSidebar from "@/components/layout/EditorSidebar";
import EditorTabs from "@/components/layout/EditorTabs";
import EditorFooter from "@/components/layout/EditorFooter";
import EditorStatusBar from "@/components/layout/EditorStatusBar";
import HomeSection from "@/components/sections/HomeSection";
import AboutSection from "@/components/sections/AboutSection";
import WorkSection from "@/components/sections/WorkSection";
import ProcessSection from "@/components/sections/ProcessSection";
import "./editor-portfolio.css";
export default function EditorPortfolio() {
  const projectSearch = useProjectSearch();
  const [page, setPage] = useState<PortfolioPage>("welcome");
  const [isLightTheme, setIsLightTheme] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<WorkProject | null>(
    null,
  );
  const currentFile =
    portfolioFiles.find((file) => file.id === page) ?? portfolioFiles[0];
  function navigateToPage(nextPage: PortfolioPage) {
    setPage(nextPage);
    setSelectedProject(null);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }
  function selectProject(project: WorkProject) {
    navigateToPage("works");
    setSelectedProject(project);
  }
  return (
    <div className={`studio ${isLightTheme ? "studio-light" : ""}`}>
      <a className="studio-skip" href="#studio-main">
        본문으로 건너뛰기
      </a>
      <EditorHeader
        fileName={currentFile.file}
        isLightTheme={isLightTheme}
        onToggleTheme={() => setIsLightTheme(!isLightTheme)}
      />
      <EditorSidebar
        page={page}
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen(!isMenuOpen)}
        onNavigate={navigateToPage}
      />
      <div className="studio-workspace">
        <EditorTabs
          page={page}
          onToggleMenu={() => setIsMenuOpen(!isMenuOpen)}
          onNavigate={navigateToPage}
        />
        <div className="studio-breadcrumb">
          src <ChevronRight size={12} /> portfolio <ChevronRight size={12} />
          <span>{selectedProject?.title ?? currentFile.file}</span>
          <span className="breadcrumb-preview">◉ Live preview</span>
        </div>
        <main
          id="studio-main"
          role="tabpanel"
          aria-labelledby={`tab-${page}`}
          tabIndex={-1}
          key={`${page}-${selectedProject?.id ?? "index"}`}
        >
          {page === "welcome" && (
            <HomeSection
              onNavigate={navigateToPage}
              onSelectProject={selectProject}
            />
          )}
          {page === "about" && <AboutSection onNavigate={navigateToPage} />}
          {page === "works" && (
            <WorkSection
              search={projectSearch}
              selectedProject={selectedProject}
              onSelectProject={selectProject}
              onBack={() => setSelectedProject(null)}
            />
          )}
          {page === "process" && <ProcessSection />}
        </main>
        <EditorFooter />
      </div>
      <EditorStatusBar isLightTheme={isLightTheme} />
    </div>
  );
}
