"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { WorkProject } from "@/types/project";

type Props = {
  project: WorkProject;
  index: number;
  onSelect: (project: WorkProject) => void;
};

export default function ProjectListItem({ project, index, onSelect }: Props) {
  return (
    <button className="work-row" onClick={() => onSelect(project)}>
      <span className="work-number">{String(index + 1).padStart(2, "0")}</span>
      <div className="work-row-content">
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
      {project.image && (
        <div className="project-hover-preview" aria-hidden="true">
          <Image src={project.image} alt="" sizes="190px" />
          <span>OPEN PROJECT ↗</span>
        </div>
      )}
      <ArrowUpRight className="work-arrow" size={30} />
    </button>
  );
}
