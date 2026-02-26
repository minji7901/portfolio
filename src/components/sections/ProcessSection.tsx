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
  const inView = useInView(ref, { once: true, margin: "-12% 0px -12% 0px" });

  const steps: Step[] = useMemo(
    () => [
      {
        no: "01",
        title: "범위 정리",
        desc: "페이지 단위로 범위를 먼저 정리하고, 빠진 케이스가 없는지 초반에 잡습니다.",
        icon: <ClipboardList size={20} className="text-accent" />,
        outputs: ["페이지/화면 목록", "예외 케이스 체크", "우선순위 정리"],
      },
      {
        no: "02",
        title: "페이지리스트 & 일정 잡기",
        desc: "페이지리스트 기준으로 작업 순서를 잡고, 병목이 생길 구간을 미리 표시합니다.",
        icon: <LayoutGrid size={20} className="text-accent" />,
        outputs: ["페이지리스트", "작업 순서", "중간 공유 일정"],
      },
      {
        no: "03",
        title: "공통 구조 먼저 만들기",
        desc: "레이아웃/버튼/폼 같은 공통 UI를 먼저 잡아두고, 나중 수정이 줄어들게 합니다.",
        icon: <Layers size={20} className="text-accent" />,
        outputs: ["공통 레이아웃", "공통 컴포넌트", "스타일 규칙"],
      },
      {
        no: "04",
        title: "구현하면서 중간 공유",
        desc: "중간에 화면을 공유해서 방향이 맞는지 확인하고, 뒤늦은 갈아엎음을 막습니다.",
        icon: <ArrowRight size={20} className="text-accent" />,
        outputs: ["중간 화면 공유", "피드백 반영", "변경사항 정리"],
      },
      {
        no: "05",
        title: "체크리스트로 마무리 QA",
        desc: "반응형/브라우저/간격/폰트/클릭 영역까지 체크리스트로 끝까지 정리합니다.",
        icon: <ShieldCheck size={20} className="text-accent" />,
        outputs: ["QA 체크리스트", "이슈 정리", "최종 수정 반영"],
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
            저는 이렇게 일해서 일정이 잘 안 밀립니다
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-base md:text-lg text-text-secondary"
          >
            페이지 리스트로 작업을 쪼개고, 공통 UI를 먼저 잡은 뒤 체크 리스트로
            마무리합니다.
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
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-base font-bold text-text-primary">
                  “빨리 끝내기”가 목표가 아니라, 실수를 줄이는 방식입니다
                </p>
                <p className="mt-1 text-sm text-text-secondary">
                  초반에 범위를 잡고 공통부터 만들면, 뒤에서 수정이 줄어서
                  결과적으로 일정이 안정됩니다.
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
                className="rounded-3xl border border-line bg-white p-6 hover:-translate-y-1 hover:shadow-lg transition"
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold tracking-[0.2em] text-text-muted">
                    STEP {s.no}
                  </p>
                  <div className="w-10 h-10 rounded-2xl bg-accent-soft border border-line flex items-center justify-center">
                    {s.icon}
                  </div>
                </div>

                <h3 className="mt-4 text-lg font-bold text-text-primary">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                  {s.desc}
                </p>

                <div className="mt-4 pt-4 border-t border-line">
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

                {idx !== steps.length - 1 && (
                  <div className="hidden lg:block">
                    <motion.div
                      className="mt-6 h-[2px] w-full bg-line rounded"
                      initial={{ scaleX: 0, transformOrigin: "0% 50%" }}
                      animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                      transition={{
                        duration: 0.7,
                        ease: easeOut,
                        delay: 0.12 + idx * 0.05,
                      }}
                    />
                  </div>
                )}
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
            <p className="mt-2 text-sm text-text-secondary">
              페이지리스트로 작업을 쪼개서 누락을 줄이고, 공통 UI를 먼저 잡아
              수정량을 줄입니다. 마지막에 체크리스트로 마감 QA까지 끝내서,
              일정이 흔들리지 않게 가져갑니다.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
