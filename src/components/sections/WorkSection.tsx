"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import State from "@/components/ui/State";
import PublishingProjectDetail from "@/components/features/PublishingProjectDetails";
import FrontendCollaboDetails from "@/components/features/FrontendCollaboDetails";
import { publishingPracticeProjects, collabProjects } from "@/data/project";

type TabKey = "publishing" | "collab";

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
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

const WorkSection = () => {
  const [tab, setTab] = useState<TabKey>("publishing");

  const featuredCapital = useMemo(
    () => publishingPracticeProjects.find((p) => p.id === "pub-3"),
    [],
  );

  const practiceWithoutFeatured = useMemo(
    () => publishingPracticeProjects.filter((p) => p.id !== "pub-3"),
    [],
  );

  return (
    <motion.section
      id="work"
      className="py-60"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
    >
      <div className="max-w-container mx-auto px-6 relative">
        <div className="text-center">
          <State text="RECENT PUBLISHING WORK" color="pink" />
        </div>
        <motion.div
          className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6"
          variants={stagger}
        >
          <motion.article
            variants={fadeUp}
            className="border border-line rounded-3xl bg-white overflow-hidden"
          >
            <div className="h-44 border-b border-line p-8 flex flex-col justify-between bg-gradient-to-tl from-pastel-beige text-center">
              <div className="text-sm font-semibold text-base-secondary">
                Web Service Renewal
              </div>
              <div>
                <h3 className="text-3xl font-bold leading-tight">
                  부동산 등기업무 서비스 플랫폼 리뉴얼
                </h3>
                <p className="text-base-secondary mt-1">
                  Screens · Structure Design · Maintainable UI
                </p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-5 text-sm font-semibold text-base-secondary">
                <span># 2025.10 - 2025.12</span>
                <span># 단독 퍼블리싱</span>
                <span># 100+ Screens</span>
              </div>
              <p className="mt-2 text-base-primary">
                Nuxt 기반 서비스 전면 UI를 리뉴얼하며, 구조 설계와 컴포넌트화로
                유지보수 효율을 높였습니다. 반응형·접근성·크로스브라우징
                기준으로 운영 이슈를 줄이는 구현을 지향했습니다.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 text-sm">
                {["Nuxt.js", "SCSS", "Componentized UI", "Cross-browser"].map(
                  (t) => (
                    <span key={t} className="px-3 py-1 bg-line rounded-full">
                      {t}
                    </span>
                  ),
                )}
              </div>
            </div>
          </motion.article>

          <motion.article
            variants={fadeUp}
            className="border border-line rounded-3xl bg-white overflow-hidden"
          >
            <div className="h-44 border-b border-line p-8 flex flex-col justify-between bg-gradient-to-tl from-pastel-beige text-center">
              <div className="text-sm font-semibold text-base-secondary">
                Solo Project
              </div>
              <div>
                <h3 className="text-3xl font-bold leading-tight">
                  캐피탈 제휴 프로모션 사이트
                </h3>
                <p className="text-base-secondary mt-1">
                  10+ Pages · Interaction · jQuery
                </p>
              </div>
            </div>

            <div className="p-8">
              <div className="flex flex-wrap gap-2 text-sm font-semibold text-base-secondary">
                <span># 사내 단독 진행</span>
                <span># 10+ Pages</span>
                <span># Interaction / Motion</span>
              </div>
              <p className="mt-2 text-base-primary">
                사내 단독 진행 · 반응형 · 인터랙션/모션 포함한 10+ 페이지 규모의
                마이크로사이트입니다. HTML/CSS/JS로 직접 구현하며, jQuery로
                인터랙션을 다수 적용했습니다.
              </p>

              <div className="mt-5 flex flex-wrap gap-2 text-sm">
                {(featuredCapital?.tags ?? ["HTML", "SCSS", "jQuery"]).map(
                  (t) => (
                    <span key={t} className="px-3 py-1 bg-line rounded-full">
                      {t}
                    </span>
                  ),
                )}
              </div>

              {featuredCapital?.link ? (
                <div className="mt-7 text-center">
                  <a
                    href={featuredCapital.link}
                    target="_blank"
                    className="inline-flex items-center justify-center px-5 py-2 rounded-full border border-base-secondary text-base-secondary text-sm font-semibold"
                  >
                    View Project
                  </a>
                </div>
              ) : null}
            </div>
          </motion.article>
        </motion.div>

        {/* ===== Tabs ===== */}
        <div className="mt-16">
          <div className="flex justify-center">
            <div className="inline-flex rounded-full border border-line p-1">
              {(
                [
                  ["publishing", "Publishing Practice"],
                  ["collab", "Collaboration"],
                ] as const
              ).map(([key, label]) => {
                const isActive = tab === key;

                return (
                  <motion.button
                    key={key}
                    type="button"
                    onClick={() => setTab(key)}
                    whileTap={{ scale: 0.98 }}
                    className={[
                      "relative px-5 py-2 rounded-full text-sm font-semibold transition",
                      isActive ? "text-base-primary" : "text-base-secondary",
                    ].join(" ")}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="tabIndicator"
                        className="absolute inset-0 rounded-full bg-pastel-green border-base-primary"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">{label}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          <p className="text-center mt-4 text-base-secondary">
            {tab === "publishing"
              ? "사내/에이전시 환경에서 단독 퍼블리싱 및 템플릿 재사용으로 리드타임을 줄인 작업들입니다."
              : "팀 단위로 진행한 프론트엔드 협업 프로젝트들입니다."}
          </p>
        </div>

        {/* ===== Panel ===== */}
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
              <div className="space-y-4">
                {practiceWithoutFeatured.map((item) => (
                  <div
                    key={item.id}
                    className="hover:-translate-y-0.5 transition"
                  >
                    <PublishingProjectDetail item={item} />
                  </div>
                ))}
              </div>

              <p className="mt-6 text-base-secondary">
                * 일부 프로젝트는 회사 사유로 링크 공개가 어렵습니다.
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
                {collabProjects.map((item) => (
                  <div
                    key={item.id}
                    className="hover:-translate-y-1 transition"
                  >
                    <FrontendCollaboDetails item={item} />
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="absolute -bottom-40 right-32">
          <Image
            src="/icons/arrow-icon.svg"
            alt="icon"
            width={150}
            height={100}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default WorkSection;
