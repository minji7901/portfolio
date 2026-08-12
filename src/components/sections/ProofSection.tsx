"use client";

import React, { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Code2, LayoutGrid, MonitorSmartphone, UsersRound } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const stagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const experiences = [
  {
    icon: MonitorSmartphone,
    title: "웹 퍼블리싱",
    desc: "PC와 모바일 환경을 고려한 웹 페이지를 제작하고, 기존 페이지의 수정 및 유지보수를 진행했습니다.",
    items: [
      "HTML5 · CSS3 기반 웹 페이지 제작",
      "반응형 레이아웃 및 다양한 화면 크기 대응",
      "기존 사이트 수정 및 운영 이슈 대응",
    ],
  },
  {
    icon: LayoutGrid,
    title: "UI 구현",
    desc: "디자인 시안을 바탕으로 화면 구조를 파악하고, 반복되는 UI는 공통 스타일과 컴포넌트로 정리했습니다.",
    items: [
      "공통 레이아웃 및 UI 구현",
      "SCSS를 활용한 스타일 관리",
      "페이지 간 일관성을 고려한 퍼블리싱",
    ],
  },
  {
    icon: UsersRound,
    title: "협업",
    desc: "디자이너, 개발자, 기획자와 작업 내용을 공유하며 디자인 변경과 수정사항을 반영했습니다.",
    items: [
      "디자인 시안 기반 퍼블리싱",
      "개발자와 화면 구조 및 작업 범위 협의",
      "QA 및 수정사항 반영",
    ],
  },
  {
    icon: Code2,
    title: "개발 환경 경험",
    desc: "퍼블리싱 경험을 바탕으로 React와 Next.js 프로젝트에서 직접 화면을 구현하고 배포까지 경험했습니다.",
    items: [
      "React · Next.js 기반 UI 구현",
      "컴포넌트 단위의 화면 구성",
      "Git을 활용한 버전 관리 및 Vercel 배포",
    ],
  },
];

const ProofSection = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-10% 0px -10% 0px",
  });

  return (
    <section id="proof" className="bg-base-section px-5 py-24 sm:px-8 sm:py-28">
      <div ref={ref} className="mx-auto max-w-container">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-semibold tracking-[0.18em] text-text-muted"
          >
            EXPERIENCE
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-4 text-3xl font-bold leading-tight text-text-primary sm:text-4xl"
          >
            다양한 환경에서 쌓은
            <br className="sm:hidden" /> 웹 퍼블리싱 경험
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-base leading-7 text-text-secondary sm:text-lg break-keep"
          >
            에이전시와 인하우스, 프리랜서 프로젝트를 경험하며 웹 페이지 제작부터
            유지보수와 QA까지 다양한 퍼블리싱 업무를 진행했습니다.
          </motion.p>
          <motion.div
            variants={stagger}
            className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {experiences.map((experience) => {
              const Icon = experience.icon;

              return (
                <motion.article
                  key={experience.title}
                  variants={fadeUp}
                  className="rounded-3xl border border-line bg-warm-card p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                      <Icon size={21} className="text-accent" />
                    </div>
                    <h3 className="text-lg font-bold text-text-primary">
                      {experience.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-text-secondary break-keep">
                    {experience.desc}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {experience.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-sm leading-5 text-text-secondary"
                      >
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3"
          >
            <div className="rounded-3xl border border-line bg-white p-6 sm:p-7 break-keep">
              <p className="text-sm font-semibold text-text-muted">
                2025 · Freelance
              </p>
              <p className="mt-3 text-base font-semibold leading-6 text-text-primary">
                100페이지 이상의 웹 화면을 단독으로 퍼블리싱했습니다.
              </p>
              <p className="mt-3 text-sm leading-6 text-text-secondary">
                페이지가 많은 프로젝트에서 공통 UI와 반복되는 스타일을 정리하며
                전체 페이지를 제작했습니다.
              </p>
            </div>
            <div className="rounded-3xl border border-line bg-white p-6 sm:p-7">
              <p className="text-sm font-semibold text-text-muted">
                2022 - 2024 · In-house
              </p>
              <p className="mt-3 text-base font-semibold leading-6 text-text-primary">
                여러 웹사이트의 제작과 유지보수를 담당했습니다.
              </p>
              <p className="mt-3 text-sm leading-6 text-text-secondary">
                SCSS를 활용한 스타일 관리와 페이지 제작, 수정사항 반영 등 실제
                운영에 필요한 퍼블리싱 업무를 경험했습니다.
              </p>
            </div>
            <div className="rounded-3xl border border-line bg-white p-6 sm:p-7">
              <p className="text-sm font-semibold text-text-muted">
                2021 - 2022 · Agency
              </p>
              <p className="mt-3 text-base font-semibold leading-6 text-text-primary">
                다양한 프로젝트에서 협업하며 퍼블리싱을 진행했습니다.
              </p>
              <p className="mt-3 text-sm leading-6 text-text-secondary">
                디자이너와 개발자 사이에서 화면을 구현하고 QA와 수정사항을
                반영하며 프로젝트를 진행했습니다.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProofSection;
