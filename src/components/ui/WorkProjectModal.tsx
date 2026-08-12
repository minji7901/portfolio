"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";
import type { WorkProject } from "@/data/projects";
import PublishingProjectDetail from "@/components/features/PublishingProjectDetails";

type Props = {
  open: boolean;
  item: WorkProject | null;
  onClose: () => void;
};

const WorkProjectModal = ({ open, item, onClose }: Props) => {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!item) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label={`${item.title} 프로젝트 상세`}
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            onClick={onClose}
            aria-label="닫기"
          />
          <motion.div
            className="
              relative z-[100]
              w-full max-w-5xl
              max-h-[92vh]
              overflow-hidden
              rounded-2xl md:rounded-3xl
              bg-warm-card
              border border-line
              shadow-xl
            "
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="flex items-start justify-between gap-4 px-5 py-4 md:px-7 md:py-5 border-b border-line bg-warm">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-medium text-text-muted">
                    {item.type}
                  </span>
                  <span className="text-xs text-text-muted">·</span>
                  <span className="text-xs text-text-muted">{item.domain}</span>
                </div>
                <h2 className="mt-2 text-xl md:text-2xl font-bold text-text-primary">
                  {item.title}
                </h2>
                {item.subtitle && (
                  <p className="mt-2 text-sm md:text-base text-text-secondary leading-relaxed">
                    {item.subtitle}
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={onClose}
                className="
                  shrink-0
                  w-9 h-9
                  flex items-center justify-center
                  rounded-full
                  hover:bg-warm-card
                  transition
                "
                aria-label="프로젝트 상세 닫기"
              >
                <X size={18} className="text-text-secondary" />
              </button>
            </div>
            <div className="max-h-[calc(92vh-140px)] overflow-y-auto">
              <div className="px-5 py-5 md:px-7 md:py-7">
                {item.image && (
                  <div className="flex justify-center rounded-2xl border border-line bg-warm overflow-hidden">
                    <Image
                      src={item.image}
                      alt={`${item.title} 프로젝트 화면`}
                      className="w-auto max-w-full max-h-[320px] object-contain"
                    />
                  </div>
                )}
                <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-line bg-white p-5">
                    <p className="text-sm font-semibold text-text-muted">
                      담당 업무
                    </p>
                    <p className="mt-2 text-sm md:text-base text-text-primary leading-relaxed">
                      {item.roleLine}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-line bg-white p-5">
                    <p className="text-sm font-semibold text-text-muted">
                      주요 결과
                    </p>
                    <p className="mt-2 text-sm md:text-base text-text-primary leading-relaxed">
                      {item.impact}
                    </p>
                  </div>
                </div>
                {item.bullets?.length ? (
                  <div className="mt-4 rounded-2xl border border-line bg-white p-5 md:p-6">
                    <p className="text-base font-bold text-text-primary">
                      주요 작업
                    </p>
                    <ul className="mt-4 space-y-3">
                      {item.bullets.slice(0, 6).map((bullet) => (
                        <li
                          key={bullet}
                          className="flex gap-3 text-sm md:text-base text-text-secondary leading-relaxed"
                        >
                          <span className="mt-[8px] w-1.5 h-1.5 shrink-0 rounded-full bg-accent" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                <div className="mt-4 rounded-2xl border border-line bg-white p-5 md:p-6">
                  <p className="text-base font-bold text-text-primary">
                    사용 기술
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.stack.map((tech) => (
                      <span
                        key={tech}
                        className="
                          px-3 py-1.5
                          rounded-full
                          bg-warm
                          border border-line
                          text-sm
                          text-text-secondary
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {item.category === "publishing" && item.raw && (
                  <div className="mt-6">
                    <PublishingProjectDetail
                      item={
                        item.raw as Parameters<
                          typeof PublishingProjectDetail
                        >[0]["item"]
                      }
                    />
                  </div>
                )}
                {(item.link || item.github) && (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex items-center gap-2
                          px-4 py-2.5
                          rounded-full
                          bg-text-primary
                          text-white
                          text-sm font-semibold
                          hover:opacity-90
                          transition
                        "
                      >
                        <ExternalLink size={16} />
                        사이트 보기
                      </a>
                    )}
                    {item.github && (
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex items-center gap-2
                          px-4 py-2.5
                          rounded-full
                          border border-line
                          bg-white
                          text-text-secondary
                          text-sm font-semibold
                          hover:bg-warm
                          transition
                        "
                      >
                        <Github size={16} />
                        GitHub 보기
                      </a>
                    )}
                  </div>
                )}
                <p className="mt-6 text-xs md:text-sm text-text-muted">
                  * 일부 프로젝트는 회사 사유로 실제 사이트 링크를 공개하지
                  않았습니다.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WorkProjectModal;
