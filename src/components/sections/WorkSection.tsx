"use client";

import { ArrowUpRight, Search, X } from "lucide-react";
import { workProjects } from "@/data/projects";
import { projectFilters } from "@/data/portfolio";
import type { WorkProject } from "@/types/project";
import type { ProjectSearch } from "@/hooks/useProjectSearch";
import ProjectDetail from "@/components/features/ProjectDetail";
type Props = {
  search: ProjectSearch;
  selectedProject: WorkProject | null;
  onSelectProject: (project: WorkProject) => void;
  onBack: () => void;
};

export default function WorkSection({
  search,
  selectedProject,
  onSelectProject,
  onBack,
}: Props) {
  const { filter, setFilter, query, setQuery, projects } = search;

  return (
    <div className="document-page works-page">
      {selectedProject ? (
        <ProjectDetail project={selectedProject} onBack={onBack} />
      ) : (
        <>
          <p className="page-eyebrow">02 / SELECTED WORK & EXPERIENCES</p>
          <h1>
            설명보다,
            <br />
            <span>만들어온 것들.</span>
            <sup>({workProjects.length.toString().padStart(2, "0")})</sup>
          </h1>
          <p className="page-lead">
            실무 퍼블리싱부터 프론트엔드 협업까지.
            <br />
            프로젝트마다 제가 맡은 역할과 구현 과정을 기록했습니다.
          </p>
          <div className="work-toolbar">
            <div className="work-filters">
              {projectFilters.map(({ value, label }) => (
                <button
                  key={value}
                  aria-pressed={filter === value}
                  className={filter === value ? "active" : ""}
                  onClick={() => setFilter(value)}
                >
                  {label}
                </button>
              ))}
            </div>
            <label className="work-search">
              <Search size={16} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="프로젝트 · 기술 검색"
                aria-label="프로젝트 및 기술 검색"
              />
              {query && (
                <button aria-label="검색 지우기" onClick={() => setQuery("")}>
                  <X size={14} />
                </button>
              )}
            </label>
          </div>
          <div className="work-list">
            {projects.map((project, index) => (
              <button
                className="work-row"
                key={project.id}
                onClick={() => onSelectProject(project)}
              >
                <span className="work-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <span className="work-category">
                    {project.category === "publishing"
                      ? "WEB PUBLISHING"
                      : "TEAM PROJECT"}{" "}
                    <span>/ {project.type}</span>
                  </span>
                  <h2>{project.title}</h2>
                  <p>
                    {project.roleLine} · {project.troubleshooting}
                  </p>
                  <div className="row-tags">
                    {project.stack.slice(0, 4).map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </div>
                <ArrowUpRight className="work-arrow" size={30} />
              </button>
            ))}
          </div>
          {!projects.length && (
            <p className="empty-results">
              검색 결과가 없어요. 다른 프로젝트명이나 기술을 입력해보세요.
            </p>
          )}
          <p className="work-footnote">
            일부 프로젝트는 회사 사유로 공개 링크 없이 작업 범위와 화면으로
            소개합니다.
          </p>
        </>
      )}
    </div>
  );
}
