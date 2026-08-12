"use client";

import React from "react";
import { Wrench, User } from "lucide-react";
import { type WorkProject } from "@/data/projects";

type Props = {
  item: WorkProject;
  onOpen: (item: WorkProject) => void;
};

const WorkProjectCard = ({ item, onOpen }: Props) => {
  return (
    <button
      type="button"
      onClick={() => onOpen(item)}
      className="
        group w-full text-left
        rounded-3xl
        border border-line
        bg-warm-card
        p-6 md:p-7
        transition-all duration-300
        hover:-translate-y-1
        hover:border-accent/30
        hover:shadow-[0_12px_30px_rgba(17,24,39,0.08)]
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-accent/30
      "
    >
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-1 rounded-full bg-warm border border-line text-xs font-medium text-text-secondary">
            {item.type}
          </span>

          <span className="text-xs text-text-muted">{item.domain}</span>
        </div>

        <h3 className="mt-4 text-xl md:text-2xl font-bold text-text-primary group-hover:text-accent transition-colors">
          {item.title}
        </h3>
        {item.subtitle && (
          <p className="mt-2 text-sm md:text-base text-text-secondary leading-relaxed">
            {item.subtitle}
          </p>
        )}
      </div>
      <div className="mt-6 space-y-3">
        <div className="flex gap-3">
          <User size={16} className="mt-[3px] shrink-0 text-accent" />

          <div>
            <p className="text-sm font-semibold text-text-primary">담당</p>
            <p className="mt-1 text-sm text-text-secondary leading-relaxed">
              {item.roleLine}
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <Wrench size={16} className="mt-[3px] shrink-0 text-accent" />
          <div>
            <p className="text-sm font-semibold text-text-primary">주요 작업</p>
            <p className="mt-1 text-sm text-text-secondary leading-relaxed">
              {item.troubleshooting}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-7 pt-4 border-t border-line flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {item.stack.slice(0, 4).map((tech) => (
            <span key={tech} className="text-xs text-text-muted">
              {tech}
            </span>
          ))}
        </div>
        <span className="shrink-0 ml-4 text-sm font-semibold text-text-muted group-hover:text-accent transition-colors">
          자세히 보기 →
        </span>
      </div>
    </button>
  );
};

export default WorkProjectCard;
