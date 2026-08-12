"use client";

import React, { useMemo, useState, useCallback } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { workProjects, type WorkProject } from "@/data/projects";
import WorkProjectCard from "@/components/features/WorkProjectCard";
import WorkProjectModal from "@/components/ui/WorkProjectModal";

type TabKey = "publishing" | "collab";

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const panel: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: easeOut },
  },
  exit: {
    opacity: 0,
    y: -6,
    transition: { duration: 0.2, ease: easeOut },
  },
};

const TABS: Array<{ key: TabKey; label: string }> = [
  { key: "publishing", label: "퍼블리싱" },
  { key: "collab", label: "협업 프로젝트" },
];

const WorkSection = () => {
  const [tab, setTab] = useState<TabKey>("publishing");
  const [selected, setSelected] = useState<WorkProject | null>(null);

  const onOpen = useCallback((it: WorkProject) => setSelected(it), []);
  const onClose = useCallback(() => setSelected(null), []);

  const publishing = useMemo(
    () => workProjects.filter((p) => p.category === "publishing"),
    [],
  );

  const collab = useMemo(
    () => workProjects.filter((p) => p.category === "collab"),
    [],
  );

  const featured = useMemo(() => {
    const preferredIds = ["pub-0", "pub-1"];
    const preferred = preferredIds
      .map((id) => publishing.find((p) => p.id === id))
      .filter(Boolean) as WorkProject[];

    if (preferred.length >= 2) return preferred.slice(0, 2);

    return publishing.slice(0, 2);
  }, [publishing]);

  const restPublishing = useMemo(() => {
    const featuredSet = new Set(featured.map((p) => p.id));
    return publishing.filter((p) => !featuredSet.has(p.id));
  }, [publishing, featured]);

  return (
    <>
      <motion.section
        id="work"
        className="bg-warm-section py-24 md:py-28"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.18 }}
      >
        <div className="max-w-container mx-auto px-6">
          <motion.div variants={fadeUp} className="text-center">
            <p className="text-sm font-semibold tracking-[0.2em] text-text-muted">
              PROJECTS
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-text-primary">
              주요 프로젝트
            </h2>
            <p className="mt-4 text-base md:text-lg text-text-secondary">
              웹 퍼블리싱 실무와 프론트엔드 협업 프로젝트를 정리했습니다.
            </p>
          </motion.div>
          <motion.div
            className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6"
            variants={stagger}
          >
            {featured.map((p) => (
              <motion.div key={p.id} variants={fadeUp}>
                <WorkProjectCard item={p} onOpen={onOpen} />
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-16">
            <div className="flex justify-center">
              <div className="inline-flex rounded-full border border-line/90 bg-warm-card shadow-sm p-1">
                {TABS.map(({ key, label }) => {
                  const isActive = tab === key;
                  return (
                    <motion.button
                      key={key}
                      type="button"
                      onClick={() => setTab(key)}
                      whileTap={{ scale: 0.98 }}
                      className={[
                        "relative px-5 py-2 rounded-full text-sm font-semibold transition",
                        "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/30",
                        isActive ? "text-text-primary" : "text-text-secondary",
                      ].join(" ")}
                      aria-pressed={isActive}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="tabIndicator"
                          className="absolute inset-0 rounded-full bg-warm-card border border-line shadow-[0_1px_0_rgba(17,24,39,0.03)]"
                          transition={{
                            type: "spring",
                            stiffness: 420,
                            damping: 32,
                          }}
                        />
                      )}
                      <span className="relative z-10">{label}</span>
                    </motion.button>
                  );
                })}
              </div>
            </div>
            <p className="text-center mt-4 text-sm md:text-base text-text-secondary">
              {tab === "publishing"
                ? "실무에서 진행한 웹 퍼블리싱 프로젝트입니다."
                : "부트캠프에서 진행한 프론트엔드 협업 프로젝트입니다."}
            </p>
          </div>
          <AnimatePresence mode="wait">
            {tab === "publishing" ? (
              <motion.div
                key="publishing"
                variants={panel}
                initial="hidden"
                animate="show"
                exit="exit"
                className="mt-10"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {restPublishing.map((item) => (
                    <WorkProjectCard
                      key={item.id}
                      item={item}
                      onOpen={onOpen}
                    />
                  ))}
                </div>
                <p className="mt-6 text-sm text-text-muted">
                  * 일부 프로젝트는 회사 사유로 링크를 공개하지 않았습니다.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="collab"
                variants={panel}
                initial="hidden"
                animate="show"
                exit="exit"
                className="mt-10 pb-10"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {collab.map((item) => (
                    <WorkProjectCard
                      key={item.id}
                      item={item}
                      onOpen={onOpen}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.section>
      <WorkProjectModal
        open={selected !== null}
        item={selected}
        onClose={onClose}
      />
    </>
  );
};

export default WorkSection;
