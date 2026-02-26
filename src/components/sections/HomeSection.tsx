"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import Counter from "@/components/ui/Counter";
import Image from "next/image";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const leftItem: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const rightCard: Variants = {
  hidden: { opacity: 0, y: 22, scale: 0.98, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.35 },
  },
};

const HomeSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const chips = [
    "반응형",
    "접근성",
    "컴포넌트 구조화",
    "크로스 브라우징",
    "예외 케이스 대응",
    "Next · React · TypeScript 협업",
  ];

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-hero-from via-hero-via to-hero-to min-h-screen flex items-center"
      id="home"
    >
      <div className="absolute inset-0 flex items-center pointer-events-none">
        <div className="animate-orbit">
          <div className="w-[420px] h-[420px] translate-x-0 bg-accent/15 rounded-full blur-3xl" />
        </div>
      </div>

      <div className="relative z-10 max-w-container mx-auto w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
        >
          <div className="lg:col-span-7">
            <motion.div
              variants={leftItem}
              className="inline-flex items-center gap-2"
            >
              <p className="text-text-secondary font-medium tracking-tight">
                Web Publisher · Front-end Collaboration Ready
              </p>
            </motion.div>

            <motion.h1
              variants={leftItem}
              className="mt-5 text-5xl md:text-6xl font-bold leading-[1.12] text-text-primary"
            >
              운영 가능한 구조로 빠르게, <br />
              오래 가는 퍼블리싱을 합니다.
            </motion.h1>

            <motion.p
              variants={leftItem}
              className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed"
            >
              공통 컴포넌트·레이아웃을 기준으로 확장 가능한 UI를 구축하고,
              운영/유지보수 리스크를 줄입니다. <br />
              <span className="text-text-primary font-semibold">
                마감 1~4주 선제 완료 경험
              </span>
              을 반복했습니다.
            </motion.p>

            <motion.div
              variants={leftItem}
              className="mt-8 flex flex-wrap gap-3"
            >
              <button
                type="button"
                onClick={() => scrollTo("work")}
                className="rounded-2xl px-5 py-3 text-sm font-semibold text-text-primary shadow-[0_12px_30px_rgba(0,0,0,0.12)] hover:opacity-90 transition bg-white/30 backdrop-blur-md"
              >
                프로젝트 바로 보기
              </button>
              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="rounded-2xl px-5 py-3 text-sm font-semibold text-text-primary shadow-[0_12px_30px_rgba(0,0,0,0.12)] hover:opacity-90 transition bg-white/30 backdrop-blur-md"
              >
                연락하기
              </button>
            </motion.div>

            <motion.div
              variants={leftItem}
              className="mt-10 flex flex-wrap gap-2"
            >
              {chips.map((t) => (
                <span
                  key={t}
                  className="text-sm text-text-secondary bg-white/35 border border-white/40 backdrop-blur-md px-3 py-1.5 rounded-full"
                >
                  {t}
                </span>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              variants={rightCard}
              className="rounded-3xl border border-white/40 bg-white/35 backdrop-blur-md p-6 shadow-[0_18px_60px_rgba(0,0,0,0.08)]"
            >
              <p className="text-sm text-text-secondary font-medium">
                Snapshot · 실행형 강점
              </p>

              <div className="mt-5 grid grid-cols-3 gap-4">
                <div className="rounded-2xl border border-white/40 bg-white/45 backdrop-blur-md p-5">
                  <p className="text-3xl font-extrabold leading-none text-text-primary">
                    <Counter to={3} suffix="년+" />
                  </p>
                  <p className="mt-2 text-sm text-text-secondary">
                    퍼블리싱 실무 <br />
                    (에이전시·인하우스·SI)
                  </p>
                </div>

                <div className="rounded-2xl border border-white/40 bg-white/45 backdrop-blur-md p-5">
                  <p className="text-3xl font-extrabold leading-none text-text-primary">
                    <Counter to={10} suffix="개+" />
                  </p>
                  <p className="mt-2 text-sm text-text-secondary">
                    단독 프로젝트
                    <br />
                    (납기/품질 포함 리딩)
                  </p>
                </div>

                <div className="rounded-2xl border border-white/40 bg-white/45 backdrop-blur-md p-5">
                  <p className="text-3xl font-extrabold leading-none text-text-primary">
                    <Counter to={200} suffix="+" />
                  </p>
                  <p className="mt-2 text-sm text-text-secondary">
                    Screen 구현
                    <br />
                    (대시보드/운영 화면 포함)
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-white/40 bg-white/40 p-5">
                <p className="text-sm font-semibold text-text-primary">
                  제가 만드는 결과물은 이런 느낌이에요
                </p>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <Image
                    src="/home/ex1.png"
                    alt="example 1"
                    width={200}
                    height={200}
                    className="rounded-xl"
                  />
                  <Image
                    src="/home/ex2.png"
                    alt="example 2"
                    width={200}
                    height={200}
                    className="rounded-xl"
                  />
                </div>
                <p className="mt-10 text-xs text-text-secondary">
                  * 실제 프로젝트 섹션에서 확인할 수 있어요.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSection;
