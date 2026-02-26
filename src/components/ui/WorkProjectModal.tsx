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

  return (
    <AnimatePresence>
      {open && item && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-modal="true"
          role="dialog"
        >
          <button
            className="absolute inset-0 bg-black/40"
            onClick={onClose}
            aria-label="Close modal backdrop"
          />

          <motion.div
            className="relative w-full max-w-5xl rounded-3xl bg-warm-card border border-line shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="flex items-start justify-between gap-4 px-6 py-5 border-b border-line bg-warm">
              <div>
                <p className="text-sm font-semibold text-text-muted tracking-[0.14em]">
                  {item.category === "publishing"
                    ? "PUBLISHING PROJECT"
                    : "COLLABORATION PROJECT"}
                </p>
                <h3 className="mt-2 text-xl md:text-2xl font-bold text-text-primary">
                  {item.title}
                </h3>
                {item.subtitle && (
                  <p className="mt-2 text-base text-text-secondary">
                    {item.subtitle}
                  </p>
                )}

                <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold text-text-secondary">
                  <span className="px-3 py-1 rounded-full bg-warm-card border border-line">
                    {item.type}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-warm-card border border-line">
                    {item.domain}
                  </span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center"
                aria-label="Close modal"
              >
                <X size={18} className="text-text-secondary" />
              </button>
            </div>

            <div className="max-h-[55vh] overflow-auto px-6 py-6 bg-warm">
              <div className="rounded-3xl border border-line p-6 bg-warm-card">
                <div className="flex items-center justify-center mb-5">
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={`${item.title} project screenshot`}
                      className="rounded-2xl border border-line object-cover"
                    />
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-semibold text-text-muted">
                      Role
                    </p>
                    <p className="mt-2 text-base text-text-primary">
                      {item.roleLine}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-muted">
                      Impact
                    </p>
                    <p className="mt-2 text-base text-text-primary">
                      {item.impact}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-muted">
                      Troubleshooting
                    </p>
                    <p className="mt-2 text-base text-text-primary">
                      {item.troubleshooting}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-muted">
                      Stack
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {item.stack.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-sm font-semibold text-text-secondary bg-warm-card border border-line rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6  gap-4">
                  {item.bullets?.length ? (
                    <div className="rounded-2xl bg-warm-card border border-line p-4">
                      <p className="text-sm font-bold text-text-primary">
                        내가 한 일
                      </p>
                      <ul className="mt-3 space-y-2">
                        {item.bullets.slice(0, 6).map((b) => (
                          <li
                            key={b}
                            className="text-sm text-text-secondary flex gap-2"
                          >
                            <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-accent" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>

                {(item.link || item.github) && (
                  <div className="mt-5 flex flex-wrap gap-3">
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-warm-card border border-line text-sm font-semibold text-text-secondary
                                   hover:-translate-y-[1px] hover:shadow-sm transition"
                      >
                        <ExternalLink size={16} className="text-accent" />
                        View Link
                      </a>
                    )}
                    {item.github && (
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-warm-card border border-line text-sm font-semibold text-text-secondary
                                   hover:-translate-y-[1px] hover:shadow-sm transition"
                      >
                        <Github size={16} className="text-accent" />
                        GitHub
                      </a>
                    )}
                  </div>
                )}
              </div>

              <div className="mt-6">
                {item.category === "publishing" ? (
                  <PublishingProjectDetail
                    // @ts-expect-error - raw 타입은 publishingPracticeItem
                    item={item.raw}
                  />
                ) : (
                  ""
                )}
              </div>

              <p className="mt-6 text-sm text-text-secondary">
                * 일부 프로젝트는 회사 사유로 링크 공개가 어렵습니다.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WorkProjectModal;
