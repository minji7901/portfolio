"use client";

import React from "react";
import { type WorkProject } from "@/data/projects";
import { Wrench, Trophy } from "lucide-react";

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
        border border-line/90
        rounded-3xl
        bg-warm-card
        p-7
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-[0_12px_30px_rgba(17,24,39,0.08)]
        hover:border-accent/30
      "
    >
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-text-primary group-hover:text-accent transition-colors">
          {item.title}
        </h3>

        {item.subtitle && (
          <p className="mt-2 text-base text-text-secondary leading-relaxed">
            {item.subtitle}
          </p>
        )}
      </div>

      <div className="mt-6 space-y-3">
        <p className="text-sm text-text-secondary">
          <span className="font-semibold text-text-primary">Role.</span>{" "}
          {item.roleLine}
        </p>

        <p className="text-sm text-text-secondary flex gap-2">
          <Trophy size={16} className="text-accent mt-[2px] shrink-0" />
          <span>
            <span className="font-semibold text-text-primary">Impact.</span>{" "}
            {item.impact}
          </span>
        </p>

        <p className="text-sm text-text-secondary flex gap-2">
          <Wrench size={16} className="text-accent mt-[2px] shrink-0" />
          <span>
            <span className="font-semibold text-text-primary">
              Troubleshooting.
            </span>{" "}
            {item.troubleshooting}
          </span>
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {item.stack.slice(0, 8).map((t) => (
          <span
            key={t}
            className="
              px-3 py-1 text-sm font-semibold
              text-text-secondary
              border border-line
              bg-warm-section
              rounded-full
              transition-colors
              group-hover:bg-accent-soft
            "
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-7 flex items-center">
        <span className="ml-auto text-sm font-semibold text-text-muted group-hover:text-accent transition-colors">
          자세히 보기 →
        </span>
      </div>
    </button>
  );
};

export default WorkProjectCard;
