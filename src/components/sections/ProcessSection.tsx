"use client";

import React, { useMemo, useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import {
  ClipboardList,
  LayoutGrid,
  Layers,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

type Step = {
  no: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  outputs: string[];
};

const ProcessSection = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-12% 0px -12% 0px",
  });

  const steps: Step[] = useMemo(
    () => [
      {
        no: "01",
        title: "범위와 페이지 정리",
        desc: "페이지 리스트를 기준으로 전체 작업 범위와 우선순위를 먼저 정리합니다.",
        icon: <ClipboardList size={20} className="text-accent" />,
        outputs: ["페이지 리스트", "작업 범위", "우선순위"],
      },
      {
        no: "02",
        title: "공통 구조 설계",
        desc: "헤더, 버튼, 폼, 반복되는 UI를 먼저 정리해 페이지별 작업량을 줄입니다.",
        icon: <LayoutGrid size={20} className="text-accent" />,
        outputs: ["공통 레이아웃", "공통 UI", "스타일 규칙"],
      },
      {
        no: "03",
        title: "페이지 구현",
        desc: "공통 구조를 바탕으로 페이지를 구현하고 PC / Tablet / Mobile 환경에 맞춰 대응합니다.",
        icon: <Layers size={20} className="text-accent" />,
        outputs: ["페이지 마크업", "반응형 구현", "인터랙션"],
      },
      {
        no: "04",
        title: "중간 확인과 수정",
        desc: "구현 중간에 화면을 공유하고 피드백을 반영해 마지막에 수정이 몰리지 않도록 합니다.",
        icon: <ArrowRight size={20} className="text-accent" />,
        outputs: ["중간 화면 공유", "피드백 반영", "UI 수정"],
      },
      {
        no: "05",
        title: "체크리스트 QA",
        desc: "반응형, 브라우저, 간격, 폰트, 클릭 영역 등을 확인하고 최종 수정까지 마무리합니다.",
        icon: <ShieldCheck size={20} className="text-accent" />,
        outputs: ["QA 체크", "이슈 정리", "최종 수정"],
      },
    ],
    [],
  );

  return (
    <section id="process" className="py-28 bg-base-section">
      <div className="max-w-container mx-auto px-6" ref={ref}>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-semibold tracking-[0.2em] text-text-muted"
          >
            PROCESS
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-4 text-3xl md:text-4xl font-bold text-text-primary"
          >
            작업 범위를 먼저 잡고, 마지막까지 꼼꼼하게 확인합니다
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-base md:text-lg text-text-secondary"
          >
            페이지 리스트로 작업을 나누고 공통 UI를 먼저 구성한 뒤, 체크리스트를
            기준으로 QA까지 마무리합니다.
          </motion.p>
        </motion.div>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mt-10"
        >
          <motion.div
            variants={fadeUp}
            className="rounded-3xl border border-line bg-white p-6 md:p-7"
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <p className="text-base font-bold text-text-primary">
                  빠르게 끝내는 것보다, 수정이 적게 생기도록 작업합니다
                </p>
                <p className="mt-1 text-sm text-text-secondary">
                  초반에 페이지와 공통 구조를 정리하면 작업 중복과 누락을
                  줄이고, 후반 수정도 안정적으로 관리할 수 있습니다.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-2 rounded-2xl border border-line bg-warm text-sm font-semibold text-text-secondary">
                  Page List
                </span>
                <span className="px-3 py-2 rounded-2xl border border-line bg-warm text-sm font-semibold text-text-secondary">
                  Common UI
                </span>
                <span className="px-3 py-2 rounded-2xl border border-line bg-warm text-sm font-semibold text-text-secondary">
                  Checklist QA
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mt-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
            {steps.map((s, idx) => (
              <motion.div
                key={s.no}
                variants={fadeUp}
                className="flex flex-col rounded-3xl border border-line bg-white p-6"
              >
                <div className="flex items-center gap-3 lg:gap-0 lg:justify-between">
                  <p className="text-xs font-bold tracking-[0.2em] text-text-muted">
                    STEP {s.no}
                  </p>
                  <div className="w-10 h-10 rounded-full  border border-accent-soft flex items-center justify-center">
                    {s.icon}
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-bold text-text-primary">
                  {s.title}
                </h3>
                <p className="my-2 text-sm text-text-secondary leading-relaxed break-keep">
                  {s.desc}
                </p>
                <div className="mt-auto py-4 border-y border-line">
                  <p className="text-xs font-semibold text-text-muted tracking-[0.18em]">
                    OUTPUT
                  </p>
                  <ul className="mt-3 space-y-2">
                    {s.outputs.map((o) => (
                      <li
                        key={o}
                        className="text-sm text-text-secondary flex gap-2"
                      >
                        <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-accent" />
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mt-10"
        >
          <motion.div
            variants={fadeUp}
            className="rounded-3xl border border-line bg-white p-7"
          >
            <p className="text-base font-bold text-text-primary">
              제 작업 흐름을 한 줄로 말하면
            </p>
            <p className="mt-2 text-sm text-text-secondary leading-relaxed">
              페이지 리스트로 작업 범위를 나누고 공통 UI를 먼저 구성한 뒤, 구현
              과정에서 피드백을 반영합니다. <br />
              마지막에는 체크리스트를 기준으로 반응형과 UI를 확인해 누락 없이
              마무리합니다.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
