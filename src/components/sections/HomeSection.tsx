"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import Counter from "@/components/ui/Counter";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

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
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const rightCard: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
    scale: 0.98,
    filter: "blur(4px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.35,
    },
  },
};

const HomeSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const skills = ["HTML5", "CSS3", "JavaScript", "SCSS", "React", "Next.js"];

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-hero-from via-hero-via to-hero-to px-5 py-24 sm:px-8 lg:px-10"
    >
      <div className="pointer-events-none absolute inset-0 flex items-center">
        <div className="animate-orbit">
          <div className="h-[320px] w-[320px] rounded-full bg-accent/25 blur-[70px] sm:h-[420px] sm:w-[420px] lg:h-[520px] lg:w-[520px]" />
        </div>
      </div>
      <div className="relative z-10 mx-auto w-full max-w-container">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10"
        >
          <div className="lg:col-span-7">
            <motion.p
              variants={leftItem}
              className="text-sm font-semibold tracking-[0.18em] text-text-secondary sm:text-base"
            >
              WEB PUBLISHER
            </motion.p>
            <motion.h1
              variants={leftItem}
              className="mt-5 text-4xl font-bold leading-[1.2] tracking-tight text-text-primary sm:text-5xl md:text-6xl lg:text-[64px]"
            >
              웹 퍼블리셔 <span className="text-accent">김민지</span>입니다.
            </motion.h1>
            <motion.p
              variants={leftItem}
              className="mt-6 max-w-2xl text-base leading-7 text-text-secondary sm:text-lg sm:leading-8"
            >
              HTML과 CSS를 기반으로 웹사이트를 퍼블리싱하고,
              <br className="hidden sm:block" />
              사용하기 편하고 수정하기 쉬운 화면을 만들어왔습니다.
            </motion.p>

            <motion.p
              variants={leftItem}
              className="mt-3 max-w-2xl text-sm leading-6 text-text-secondary sm:text-base sm:leading-7"
            >
              다양한 웹사이트 제작과 유지보수 경험을 바탕으로 반응형 웹과 UI
              구현에 익숙합니다.
              <br className="hidden sm:block" />
              최근에는 React와 Next.js를 활용한 프로젝트도 경험했습니다.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={leftItem}
              className="mt-8 flex flex-wrap gap-3"
            >
              <button
                type="button"
                onClick={() => scrollTo("work")}
                className="flex items-center gap-2 rounded-2xl bg-white/50 px-5 py-3 text-sm font-semibold text-text-secondary shadow-[0_12px_30px_rgba(0,0,0,0.12)] backdrop-blur-md "
              >
                프로젝트 보기 <ArrowRight />
              </button>
            </motion.div>

            {/* Skills */}
            <motion.div
              variants={leftItem}
              className="mt-8 flex flex-wrap gap-2"
            >
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs font-medium text-text-secondary backdrop-blur-sm sm:text-sm"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>
          {/* Right */}
          <div className="lg:col-span-5">
            <motion.div
              variants={rightCard}
              className="rounded-3xl border border-white/40 bg-white/35 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.08)] backdrop-blur-md sm:p-6"
            >
              <div>
                <p className="text-sm font-semibold text-text-secondary">
                  Experience
                </p>
                <div className="mt-4 grid grid-cols-3 gap-3 lg:gap-4">
                  <div className="text-center rounded-2xl border border-white/40 bg-white/45 p-4 backdrop-blur-md sm:p-5">
                    <p className="text-2xl font-extrabold leading-none text-text-primary sm:text-3xl">
                      <Counter to={3} suffix="년+" />
                    </p>
                    <p className="mt-2 text-xs leading-5 text-text-secondary sm:text-sm">
                      퍼블리싱
                      <br />
                      실무 경험
                    </p>
                  </div>
                  <div className="text-center rounded-2xl border border-white/40 bg-white/45 p-4 backdrop-blur-md sm:p-5">
                    <p className="text-2xl font-extrabold leading-none text-text-primary sm:text-3xl">
                      <Counter to={10} suffix="개+" />
                    </p>
                    <p className="mt-2 text-xs leading-5 text-text-secondary sm:text-sm">
                      프로젝트
                      <br />
                      제작 경험
                    </p>
                  </div>
                  <div className="text-center rounded-2xl border border-white/40 bg-white/45 p-4 backdrop-blur-md sm:p-5">
                    <p className="text-2xl font-extrabold leading-none text-text-primary sm:text-3xl">
                      <Counter to={200} suffix="+" />
                    </p>
                    <p className="mt-2 text-xs leading-5 text-text-secondary sm:text-sm">
                      웹 화면
                      <br />
                      구현 경험
                    </p>
                  </div>
                </div>
              </div>

              {/* Work Preview */}
              <div className="mt-5 rounded-2xl border border-white/40 bg-white/40 p-4 sm:mt-6 sm:p-5">
                <p className="text-sm font-semibold text-text-primary">
                  작업한 화면
                </p>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <Image
                    src="/home/ex1.png"
                    alt="퍼블리싱 작업 화면 예시"
                    width={200}
                    height={200}
                    className="h-auto w-full rounded-xl object-cover"
                  />
                  <Image
                    src="/home/ex2.png"
                    alt="퍼블리싱 작업 화면 예시"
                    width={200}
                    height={200}
                    className="h-auto w-full rounded-xl object-cover"
                  />
                </div>
                <p className="mt-4 text-xs text-text-secondary">
                  실제 프로젝트는 아래 Work섹션에서 확인할 수 있습니다.
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
