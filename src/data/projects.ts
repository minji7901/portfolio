import type { StaticImageData } from "next/image";

import pubImg0 from "@/assets/images/projects/pubImg0.png";
import pubImg1 from "@/assets/images/projects/pubImg1.png";
import pubImg2 from "@/assets/images/projects/pubImg2.png";
import pubImg3 from "@/assets/images/projects/pubImg3.png";
import pubImg4 from "@/assets/images/projects/pubImg4.png";
import pubImg5 from "@/assets/images/projects/pubImg5.png";
import collabImg1 from "@/assets/images/projects/collabImg1.png";
import collabImg2 from "@/assets/images/projects/collabImg2.png";

import type {
  publishingPracticeItem,
  collabProjectItem,
} from "@/types/project";

export const publishingPracticeProjects: publishingPracticeItem[] = [
  {
    id: "pub-0",
    title: "등기업무 서비스 플랫폼 리뉴얼",
    subtitle: "프리랜서 단독 진행 · PC Web · 100+ Pages",
    tags: ["Vue", "Nuxt", "SCSS", "FullCalendar", "Swiper"],
    leftTitle: "담당 업무",
    leftList: [
      "100페이지 이상 단독 퍼블리싱",
      "기존 서비스 구조를 확인하고 UI 마크업 전면 수정",
      "Nuxt 기반 컴포넌트 구조에 맞춰 퍼블리싱",
      "SCSS 공통 스타일 구조 정리",
      "PC 환경에 맞춘 화면 구현",
    ],
    rightTitle: "주요 작업",
    rightList: [
      "FullCalendar 커스터마이징",
      "Swiper를 활용한 배너 및 콘텐츠 슬라이드 구현",
      "기존 마크업을 정리하고 시맨틱 구조로 개선",
      "예정된 일정보다 1개월 빠르게 작업 완료",
    ],
    image: pubImg0,
  },
  {
    id: "pub-1",
    title: "캐피탈 제휴 프로모션 마이크로사이트",
    subtitle: "사내 단독 진행 · 반응형 · 10+ Pages",
    tags: ["HTML", "SCSS", "jQuery", "Animation", "Responsive"],
    leftTitle: "담당 업무",
    leftList: [
      "10페이지 이상 단독 퍼블리싱",
      "PC / Mobile 반응형 구현",
      "SCSS 기반 공통 레이아웃 구성",
      "jQuery를 활용한 간단한 기능 구현",
    ],
    rightTitle: "주요 작업",
    rightList: [
      "차량 이동 애니메이션 구현",
      "타이머 기능 구현",
      "슬라이드 및 화면 전환 효과 구현",
    ],
    link: "https://nh.rchada.com/",
    image: pubImg1,
  },
  {
    id: "pub-2",
    title: "B2B 교육 서비스 퍼블리싱",
    subtitle: "에이전시 프로젝트 · 단독/협업 · 반응형 · 100+ Pages",
    tags: ["HTML", "SCSS", "Responsive", "SCSS Structure"],
    leftTitle: "담당 업무",
    leftList: [
      "메인 페이지 단독 퍼블리싱",
      "학생 / 학부모 채널 전체 단독 퍼블리싱",
      "선생 채널 약 40% 퍼블리싱",
      "PC / Tablet / Mobile 반응형 구현",
    ],
    rightTitle: "주요 작업",
    rightList: [
      "반응형 breakpoint 구성",
      "SCSS 구조 분리 및 공통 스타일 관리",
      "반복되는 UI를 공통 구조로 제작",
      "QA 피드백을 반영해 화면 수정",
    ],
    link: "https://ybmsmartschool.com/",
    image: pubImg2,
  },
  {
    id: "pub-3",
    title: "금융 연계 프로모션 페이지 퍼블리싱",
    subtitle: "사내 단독 진행 · PC / Mobile 반응형 · 20+ Pages",
    tags: ["HTML", "CSS", "jQuery", "Responsive"],
    leftTitle: "담당 업무",
    leftList: [
      "20페이지 이상 단독 퍼블리싱",
      "PC / Mobile 반응형 구현",
      "페이지별 공통 UI 및 스타일 정리",
      "프로모션 페이지 전체 화면 구성",
    ],
    rightTitle: "주요 작업",
    rightList: [
      "공통 레이아웃과 스타일을 재사용해 작업",
      "폼 / 리스트 / 프로모션 UI 구성",
      "jQuery를 활용한 간단한 인터랙션 구현",
      "예정된 마감일보다 2주 이상 빠르게 작업 완료",
    ],
    image: pubImg3,
  },
  {
    id: "pub-4",
    title: "브랜드 제휴 프로모션 랜딩 퍼블리싱",
    subtitle: "사내 단독 진행 · 반응형 · 모션 포함",
    tags: ["HTML", "CSS", "jQuery", "Motion", "Responsive"],
    leftTitle: "담당 업무",
    leftList: [
      "프로모션 랜딩 페이지 단독 퍼블리싱",
      "PC / Mobile 반응형 구현",
      "jQuery를 활용한 간단한 인터랙션 구현",
    ],
    rightTitle: "주요 작업",
    rightList: [
      "차량 이동 모션 애니메이션 구현",
      "CTA와 섹션 전환 효과 구현",
      "섹션별 스타일을 정리해 일관된 화면 구성",
    ],
    link: "https://pickcar.kr/",
    image: pubImg4,
  },
  {
    id: "pub-5",
    title: "모바일 원페이지 프로모션 퍼블리싱",
    subtitle: "사내 단독 진행 · Mobile Only · One Page",
    tags: ["HTML", "CSS", "jQuery", "Mobile"],
    leftTitle: "담당 업무",
    leftList: [
      "원페이지 단독 퍼블리싱",
      "모바일 화면에 맞춰 레이아웃 구현",
      "간단한 기능 및 인터랙션 구현",
    ],
    rightTitle: "주요 작업",
    rightList: [
      "스크롤 흐름에 맞춰 섹션 구성",
      "클릭 및 화면 전환 인터랙션 구현",
      "기존 스타일 가이드에 맞춰 화면 제작",
    ],
    image: pubImg5,
  },
];

export const collabProjects: collabProjectItem[] = [
  {
    id: "collab-1",
    title: "HOLO",
    description: "1인 가구 청년을 위한 자취 정보 제공 서비스",
    tech: [
      "Next.js",
      "TypeScript",
      "Vercel",
      "TanStack Query",
      "Tailwind CSS",
      "Zustand",
      "Supabase",
      "Kakao Map API",
    ],
    github: "https://github.com/minji7901/HOLO",
    image: collabImg1,
  },
  {
    id: "collab-2",
    title: "이븐한 맛집",
    description: "흑백요리사 출연진의 국내 업장 정보를 제공하는 웹사이트",
    tech: ["React", "JavaScript", "Vercel", "Tailwind CSS", "Supabase"],
    github: "https://github.com/minji7901/Outsourcing-Project",
    image: collabImg2,
  },
];

export type WorkProject = {
  id: string;
  category: "publishing" | "collab";
  title: string;
  subtitle?: string;
  type: "단독" | "협업";
  domain: string;
  roleLine: string;
  impact: string;
  troubleshooting?: string;
  stack: string[];
  bullets?: string[];
  opsPoints?: string[];
  checklistExample?: string;
  raw?: publishingPracticeItem | collabProjectItem;
  link?: string;
  github?: string;
  image?: StaticImageData;
};

const toPublishingWork = (p: publishingPracticeItem): WorkProject => {
  const inferredType: WorkProject["type"] = p.subtitle?.includes("단독")
    ? "단독"
    : "협업";

  const subtitle = p.subtitle ?? "";
  const leftList = p.leftList ?? [];
  const rightList = p.rightList ?? [];

  let impact = "페이지 퍼블리싱 및 UI 구현";

  if (subtitle.includes("100+")) {
    impact = "100페이지 이상 단독 퍼블리싱";
  } else if (subtitle.includes("20+")) {
    impact = "20페이지 이상 단독 퍼블리싱";
  } else if (subtitle.includes("One Page")) {
    impact = "모바일 원페이지 퍼블리싱";
  } else if (leftList.some((item) => item.includes("반응형"))) {
    impact = "PC / Mobile 반응형 구현";
  }

  return {
    id: p.id,
    category: "publishing",
    title: p.title,
    subtitle: p.subtitle,
    type: inferredType,
    domain: "웹 퍼블리싱",
    roleLine: leftList[0] ?? "퍼블리싱 담당",
    impact,
    troubleshooting: rightList[0] ?? undefined,
    stack: p.tags ?? [],
    bullets: rightList,
    opsPoints: [],
    checklistExample: "",
    link: p.link,
    raw: p,
    image: p.image,
  };
};

const toCollabWork = (c: collabProjectItem): WorkProject => {
  return {
    id: c.id,
    category: "collab",
    title: c.title,
    subtitle: c.description,
    type: "협업",
    domain: "프론트엔드 협업 프로젝트",
    roleLine: "프론트엔드 개발",
    impact: "팀 프로젝트를 통한 React / Next.js 개발 경험",
    stack: c.tech ?? [],
    github: c.github,
    image: c.image,
    troubleshooting: "팀원들과 역할을 나누어 기능을 구현하고 배포까지 진행",
    raw: c,
  };
};

export const workProjects: WorkProject[] = [
  ...publishingPracticeProjects.map(toPublishingWork),
  ...collabProjects.map(toCollabWork),
].map((p) => {
  if (p.id === "pub-2") return { ...p, link: undefined };

  return p;
});
