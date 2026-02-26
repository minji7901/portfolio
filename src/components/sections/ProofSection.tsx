"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import {
  FileText,
  ListChecks,
  Layers,
  LayoutGrid,
  Users,
  ShieldCheck,
} from "lucide-react";
import ProofModal from "@/components/ui/ProofModal";
import {
  PROOF_CARDS,
  PROOF_DOC_META,
  PROOF_STATS,
  type ProofDocKey,
} from "@/data/proof";

type OpenDoc = ProofDocKey | null;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const ProofSection = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

  const [openDoc, setOpenDoc] = useState<OpenDoc>(null);

  const openDocModal = (key: ProofDocKey) => setOpenDoc(key);
  const closeDocModal = () => setOpenDoc(null);

  return (
    <section id="proof" className="py-28 bg-base-section">
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
            PROOF
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="mt-4 text-3xl md:text-4xl font-bold text-text-primary leading-tight"
          >
            결과는 운이 아니라 <span className="text-accent">프로세스</span>로
            만듭니다
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-base text-text-secondary"
          >
            단독 수행 경험을 기반으로, 일정/품질을 흔들리지 않게 가져가는
            방식으로 작업합니다.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center"
        >
          {PROOF_STATS.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              className="rounded-3xl bg-warm-card border border-line p-6"
            >
              <p className="text-sm text-text-muted font-semibold">{s.label}</p>
              <p className="mt-2 text-3xl font-bold text-text-primary">
                {s.value}
              </p>
              <p className="mt-2 text-base text-text-secondary">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {PROOF_CARDS.map((c) => (
            <motion.div
              key={c.title}
              variants={fadeUp}
              className="rounded-3xl bg-warm-card border border-line p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 flex items-center justify-center">
                  <c.Icon size={22} className="text-accent" />
                </div>
                <h3 className="text-lg font-bold text-text-primary">
                  {c.title}
                </h3>
              </div>

              <p className="mt-4 text-base text-text-secondary">{c.desc}</p>

              <ul className="mt-5 space-y-2">
                {c.bullets.map((b) => (
                  <li key={b} className="text-sm flex gap-2">
                    <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-text-muted" />
                    <span className="text-text-secondary">{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mt-10 rounded-3xl bg-warm-card border border-line p-7 text-center"
        >
          <motion.div variants={fadeUp}>
            <p className="text-sm font-semibold text-text-muted tracking-[0.18em]">
              MY SYSTEM
            </p>
            <h3 className="mt-2 text-xl md:text-2xl font-bold text-text-primary">
              체크리스트 · 페이지 리스트로 일정과 품질을 고정합니다
            </h3>
            <p className="mt-2 text-base text-text-secondary">
              실제 산출물(샘플)을 공개해서 “말”이 아니라 “근거”로 보여줍니다.
            </p>

            <div className="mt-5 flex flex-wrap gap-5 justify-center">
              <button
                type="button"
                onClick={() => openDocModal("qa")}
                className="inline-flex items-center gap-2 px-4 py-2 border rounded-2xl border-line text-sm text-text-secondary hover:bg-warm hover:shadow-sm transition"
              >
                <ListChecks size={16} className="text-accent" />
                QA Checklist 보기
              </button>

              <button
                type="button"
                onClick={() => openDocModal("page")}
                className="inline-flex items-center gap-2 px-4 py-2 border rounded-2xl border-line text-sm text-text-secondary hover:bg-warm hover:shadow-sm transition"
              >
                <FileText size={16} className="text-accent" />
                Page List 보기
              </button>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mt-10"
        >
          <motion.div
            variants={fadeUp}
            className="rounded-3xl bg-white border border-line p-7"
          >
            <p className="text-sm font-semibold tracking-[0.18em] text-text-muted text-center">
              EXPERIENCE SNAPSHOT
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="rounded-2xl border border-line bg-base-background p-5">
                <div className="flex items-center gap-2">
                  <Layers size={18} className="text-accent" />
                  <p className="text-sm font-semibold text-text-secondary">
                    Environment
                  </p>
                </div>
                <p className="mt-2 text-text-primary font-semibold">
                  Freelance · Agency · In-house
                </p>
              </div>

              <div className="rounded-2xl border border-line bg-base-background p-5">
                <div className="flex items-center gap-2">
                  <LayoutGrid size={18} className="text-accent" />
                  <p className="text-sm font-semibold text-text-secondary">
                    Working Style
                  </p>
                </div>
                <p className="mt-2 text-text-primary font-semibold">
                  Page List로 범위/우선순위 정리
                </p>
              </div>

              <div className="rounded-2xl border border-line bg-base-background p-5">
                <div className="flex items-center gap-2">
                  <Users size={18} className="text-accent" />
                  <p className="text-sm font-semibold text-text-secondary">
                    Collaboration
                  </p>
                </div>
                <p className="mt-2 text-text-primary font-semibold">
                  PM · 디자이너 · 개발자
                </p>
              </div>

              <div className="rounded-2xl border border-line bg-base-background p-5">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={18} className="text-accent" />
                  <p className="text-sm font-semibold text-text-secondary">
                    Quality
                  </p>
                </div>
                <p className="mt-2 text-text-primary font-semibold">
                  반응형 · 접근성 · 크로스브라우징
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-line bg-white p-6">
                <p className="text-sm font-semibold text-text-muted">
                  2025 · Freelance
                </p>
                <p className="mt-2 text-base text-text-primary font-semibold">
                  100+ 페이지 단독 구현, 일정 1개월 조기 완료
                </p>
                <ul className="mt-3 space-y-2 text-sm text-text-secondary">
                  <li className="flex gap-2">
                    <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>페이지/컴포넌트 단위로 범위 분리 후 일정 관리</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>PC/크로스브라우징 기준으로 품질 유지</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-line bg-white p-6">
                <p className="text-sm font-semibold text-text-muted">
                  2022 - 2024 · In-house
                </p>
                <p className="mt-2 text-base text-text-primary font-semibold">
                  5+ 사이트, 50+ 페이지 단독 퍼블리싱
                </p>
                <ul className="mt-3 space-y-2 text-sm text-text-secondary">
                  <li className="flex gap-2">
                    <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>SCSS 구조화/템플릿화로 반복 작업 리드타임 단축</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>요구사항/범위 조율로 납품 안정화</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-line bg-white p-6">
                <p className="text-sm font-semibold text-text-muted">
                  2021 - 2022 · Agency
                </p>
                <p className="mt-2 text-base text-text-primary font-semibold">
                  협업 프로젝트 퍼블리싱, QA/운영 이슈 대응
                </p>
                <ul className="mt-3 space-y-2 text-sm text-text-secondary">
                  <li className="flex gap-2">
                    <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>외부 개발사 협업 커뮤니케이션 경험</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>버그 수정/배포 대응으로 운영 안정화</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="mt-6 text-sm text-text-muted text-center">
              경험 설명은 “나열” 대신, 실제로 어떤 방식으로 일했는지에
              집중했습니다.
            </p>
          </motion.div>
        </motion.div>
      </div>

      <ProofModal
        open={openDoc !== null}
        title={openDoc ? PROOF_DOC_META[openDoc].title : ""}
        imageSrc={openDoc ? PROOF_DOC_META[openDoc].src : ""}
        onClose={closeDocModal}
      />
    </section>
  );
};

export default ProofSection;
