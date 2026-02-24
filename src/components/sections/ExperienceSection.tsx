"use client";

import Image from "next/image";
import State from "@/components/ui/State";
import ProfileImg from "@/assets/images/hero/profile-img.png";
import { Layers, LayoutGrid, ShieldCheck, Users } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

// ====== Timing (원하면 여기만 조절) ======
const CARD_DURATION = 0.8; // 카드 한 개 등장 속도
const CARD_STAGGER = 0.18; // 카드 간격
const CARD_COUNT = 4;

// 카드 4개가 전부 끝난 뒤 다음 섹션이 시작되는 딜레이
const AFTER_CARDS_DELAY =
  (CARD_COUNT - 1) * CARD_STAGGER + CARD_DURATION + 0.15;
// 프로필/요약 이후 타임라인 시작 딜레이(추가)
const AFTER_SUMMARY_DELAY = AFTER_CARDS_DELAY + 0.25;

// ====== Variants ======
const sectionContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      // 섹션 진입시 기본 리듬(필수는 아니지만 깔끔)
      staggerChildren: 0.05,
    },
  },
};

const gridContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: CARD_STAGGER,
    },
  },
};

const fadeUpCard: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: CARD_DURATION, ease: easeOut },
  },
};

const afterCards: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: easeOut, delay: AFTER_CARDS_DELAY },
  },
};

const afterSummary: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: easeOut, delay: AFTER_SUMMARY_DELAY },
  },
};

const ExperienceSection = () => {
  return (
    <motion.section
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={sectionContainer}
    >
      <div className="max-w-container mx-auto">
        {/* ====== Top Cards (4개 다 나온 뒤 아래 섹션 시작) ====== */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14"
          variants={gridContainer}
        >
          <motion.div
            variants={fadeUpCard}
            className="border border-navi rounded-2xl p-6 bg-white"
          >
            <div className="flex items-center justify-center gap-2">
              <Layers size={28} className="text-base-primary" />
              <p className="text-sm text-base-secondary font-semibold">
                Environment
              </p>
            </div>
            <p className="mt-2">Freelance · Agency · In-house</p>
          </motion.div>

          <motion.div
            variants={fadeUpCard}
            className="border border-navi rounded-2xl p-6 bg-white"
          >
            <div className="flex items-center justify-center gap-2">
              <LayoutGrid size={28} className="text-base-primary" />
              <p className="text-sm text-base-secondary font-semibold">
                Core Strength
              </p>
            </div>
            <p className="mt-2">Structure Design · SCSS Architecture</p>
          </motion.div>

          <motion.div
            variants={fadeUpCard}
            className="border border-navi rounded-2xl p-6 bg-white"
          >
            <div className="flex items-center justify-center gap-2">
              <Users size={28} className="text-base-primary" />
              <p className="text-sm text-base-secondary font-semibold">
                Collaboration
              </p>
            </div>
            <p className="mt-2">PM · Designer · Developer</p>
          </motion.div>

          <motion.div
            variants={fadeUpCard}
            className="border border-navi rounded-2xl p-6 bg-white"
          >
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck size={28} className="text-base-primary" />
              <p className="text-sm text-base-secondary font-semibold">
                Quality Standard
              </p>
            </div>
            <p className="mt-2">Responsive · Accessibility · Cross-browser</p>
          </motion.div>
        </motion.div>

        {/* ====== Profile + Summary (카드 다 끝난 뒤 등장) ====== */}
        <motion.div
          variants={afterCards}
          className="flex justify-center items-center gap-32"
        >
          <div className="relative">
            <div className="w-[400px] h-[400px] rounded-full border-base-primary border-2 overflow-hidden">
              <Image src={ProfileImg} alt="profile image" />
            </div>

            <a
              href="https://bom-na.tistory.com/"
              target="_blank"
              className="w-28 aspect-square grid place-items-center absolute top-0 right-0 border-2 border-base-primary rounded-full bg-white"
            >
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full animate-spin-slow"
                aria-hidden="true"
              >
                <defs>
                  <path
                    id="circlePath"
                    d="M 100,100 m -72,0 a 72,72 0 1,1 144,0 a 72,72 0 1,1 -144,0"
                  />
                </defs>
                <text className="fill-base-primary tracking-[6px] font-bold text-2xl">
                  <textPath
                    href="#circlePath"
                    startOffset="50%"
                    textAnchor="middle"
                  >
                    ✦View ✦Blog ✦View ✦Blog
                  </textPath>
                </text>
              </svg>

              <Image
                src="/icons/arrow-right.svg"
                alt="img"
                width={30}
                height={30}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </a>
          </div>

          <div className="relative">
            <State text="CAREER SUMMARY" color="pink" />
            <div className="absolute -bottom-16 right-0">
              <Image
                src="/icons/heart-icon.svg"
                alt="icon"
                width={50}
                height={40}
              />
            </div>

            <p className="my-3 font-semibold text-2xl">3년차 Web Publisher</p>
            <p className="text-lg leading-8">
              프리랜서·에이전시·인하우스 환경에서 퍼블리싱을 수행했습니다.{" "}
              <br />
              구조 설계와 컴포넌트화로 유지보수 효율을 높이고,
              <br />
              운영 환경의 이슈를 줄이는 구현을 지향합니다. <br />
              반응형·접근성·크로스브라우징 기준으로 안정적인 UI를 구현합니다.
            </p>

            <div className="flex gap-2 mt-5 text-sm flex-wrap">
              <span className="px-3 py-1 bg-line rounded-full">#구조</span>
              <span className="px-3 py-1 bg-line rounded-full">#설계</span>
              <span className="px-3 py-1 bg-line rounded-full">#SCSS</span>
              <span className="px-3 py-1 bg-line rounded-full">#아키텍처</span>
              <span className="px-3 py-1 bg-line rounded-full">
                #컴포넌트화
              </span>
              <span className="px-3 py-1 bg-line rounded-full">
                #운영/유지보수
              </span>
              <span className="px-3 py-1 bg-line rounded-full">
                #크로스브라우징
              </span>
            </div>
          </div>
        </motion.div>

        {/* ====== Timeline (프로필/요약 이후 등장) ====== */}
        <motion.div variants={afterSummary} className="relative">
          <div className="absolute top-20 -left-32">
            <Image
              src="/icons/shop-icon.svg"
              alt="icon"
              width={50}
              height={40}
            />
          </div>

          <ul className="m-auto mt-32 max-w-[960px] dot">
            <li className="flex pb-10 gap-20">
              <strong className="w-32 text-right text-lg">2025</strong>
              <div>
                <strong className="text-lg">Web Publisher (Freelance)</strong>
                <p className="pt-3 leading-7">
                  • 단독 퍼블리싱 / <strong>100+ 페이지</strong> 구현
                  <br />• 계약 일정 대비 약 <strong>1개월 조기 완료</strong>
                  <br />• 페이지/컴포넌트 단위로 작업 범위를 분리하고 우선순위를
                  조율하여 일정 리스크를 관리
                  <br />• PC/크로스브라우징 기준으로 품질을 유지하며 안정적으로
                  산출물을 납품
                </p>
              </div>
            </li>

            <li className="flex pb-10 gap-20">
              <strong className="w-32 text-right text-lg">2022 - 2024</strong>
              <div>
                <strong className="text-lg">Web Publisher (In-house)</strong>
                <p className="pt-3 leading-7">
                  • 5+ 사이트 단독 퍼블리싱 / 50+ 페이지 구현
                  <br />• SCSS 구조화 + 템플릿화로 반복 작업 리드타임 7일 →{" "}
                  <strong>2~3일 단축</strong>
                  <br />• PM·디자이너·개발자와 요구사항을 정리하고 일정/범위를
                  조율하며 안정적으로 납품
                </p>
              </div>
            </li>

            <li className="flex pb-10 gap-20">
              <strong className="w-32 text-right text-lg">2021 - 2022</strong>
              <div>
                <strong className="text-lg">Web Publisher (Agency)</strong>
                <p className="pt-3 leading-7">
                  • 외부 개발사 및 YBM 협업 프로젝트 퍼블리싱 담당
                  <br />
                  • 운영 이슈 대응 및 QA/버그 수정 경험
                  <br />• 교대 근무 환경에서 일정 내 배포를 목표로 화면 수정 및
                  버그 픽스를 수행
                </p>
              </div>
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ExperienceSection;
