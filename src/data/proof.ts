// src/data/proof.ts
import type { LucideIcon } from "lucide-react";
import { CalendarCheck2, ClipboardCheck, UsersRound } from "lucide-react";

export type ProofDocKey = "qa" | "page";

export type ProofCardData = {
  Icon: LucideIcon;
  title: string;
  desc: string;
  bullets: string[];
};

export type ProofStatData = {
  label: string;
  value: string;
  desc: string;
};

export const PROOF_CARDS: ProofCardData[] = [
  {
    Icon: CalendarCheck2,
    title: "납기 관리",
    desc: "페이지 리스트 + 일정을 계속 정리하며 납품합니다.",
    bullets: [
      "마감 1~4주 선제 완료 경험",
      "우선순위/리스크 표기로 일정 안정화",
      "중간 공유 포인트 고정(리뷰/QA)",
    ],
  },
  {
    Icon: ClipboardCheck,
    title: "품질 고정",
    desc: "체크 리스트 기반으로 결과물 품질을 ‘재현’합니다.",
    bullets: [
      "반응형/크로스브라우징/접근성 항목화",
      "재사용 규칙(컴포넌트/클래스/레이아웃)",
      "이슈 로그로 재발 방지",
    ],
  },
  {
    Icon: UsersRound,
    title: "협업 가능",
    desc: "Next/React등 개발자와 같은 언어로 협업합니다.",
    bullets: [
      "컴포넌트 단위로 UI 분해",
      "Props/상태/라우팅 흐름 이해",
      "디자인 변경 영향도 빠르게 공유",
    ],
  },
];

export const PROOF_STATS: ProofStatData[] = [
  {
    label: "Projects",
    value: "10+",
    desc: "단독 수행 프로젝트 경험",
  },
  {
    label: "Delivery",
    value: "1~4주",
    desc: "마감 선제 완료 경험",
  },
  {
    label: "Environment",
    value: "3종",
    desc: "에이전시 · 인하우스 · SI",
  },
];

export const PROOF_DOC_META: Record<
  ProofDocKey,
  { title: string; src: string }
> = {
  qa: { title: "QA Checklist", src: "/proof/qa-checklist.png" },
  page: { title: "Page List", src: "/proof/page-list.png" },
};
