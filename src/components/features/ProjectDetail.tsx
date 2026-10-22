"use client";

import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import type { WorkProject } from "@/types/project";
type Props = { project: WorkProject; onBack: () => void };

export default function ProjectDetail({ project, onBack }: Props) {
  return (
    <>
      <button className="back-link" onClick={() => onBack()}>
        ← 프로젝트 목록
      </button>
      <p className="page-eyebrow">
        {project.domain} / {project.type}
      </p>
      <h1 className="project-heading">{project.title}</h1>
      <p className="page-lead">{project.subtitle}</p>
      <div className="project-tags">
        {project.stack.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      {project.image && (
        <div className="project-image">
          <div className="image-bar">
            <span>● ● ●</span> PROJECT SNAPSHOT
          </div>
          <Image
            src={project.image}
            alt={`${project.title} 작업 화면`}
            priority
          />
          <p>
            실제 작업 화면 · 일부 프로젝트는 회사 사유로 링크를 공개하지
            않습니다.
          </p>
        </div>
      )}
      <div className="project-detail-grid">
        <div>
          <p className="code-comment">{"// contribution"}</p>
          <h2>제가 맡은 일</h2>
          <ul>
            {project.contributions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="code-comment">{"// implementation"}</p>
          <h2>구현 포인트</h2>
          <ul>
            {(project.bullets?.length
              ? project.bullets
              : [project.subtitle ?? "", ...project.stack]
            ).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="project-actions">
        {project.link && (
          <a
            className="studio-cta"
            href={project.link}
            target="_blank"
            rel="noreferrer"
          >
            사이트 보기 <ArrowUpRight size={18} />
          </a>
        )}
        {project.github && (
          <a
            className="studio-cta"
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub 보기 <Github size={18} />
          </a>
        )}
      </div>
    </>
  );
}
