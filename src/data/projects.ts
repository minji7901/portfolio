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
    subtitle:
      "프리랜서 단독 진행 · PC Web · 100+ Pages · 기존 대비 1개월 조기 마감",
    tags: ["Vue", "Nuxt", "SCSS", "FullCalendar", "Swiper", "Legacy Renewal"],
    leftTitle: "담당 영역",
    leftList: [
      "100페이지 이상 단독 퍼블리싱 (팝업 포함)",
      "기존 서비스 구조 분석 후 UI 마크업 전면 재구성",
      "Nuxt 기반 컴포넌트 구조에 맞춘 퍼블리싱 작업",
      "SCSS 공통 구조 설계 및 유지보수 고려한 스타일 체계 정리",
      "PC 전용 화면 최적화 작업",
    ],
    rightTitle: "기술 적용 & 개선 포인트",
    rightList: [
      "FullCalendar 커스터마이징 및 일정 UI 구조 개선",
      "Swiper 기반 배너/콘텐츠 슬라이드 구현",
      "기존 레거시 마크업 정리 및 시맨틱 구조 개선",
      "프로젝트 일정 1개월 단축 마감",
    ],
    image: pubImg0,
    //link: "리뉴얼 전 사이트 링크 (리뉴얼 버전은 미배포 상태)",
  },
  {
    id: "pub-1",
    title: "캐피탈 제휴 프로모션 마이크로사이트",
    subtitle: "사내 단독 진행 · 반응형 · 10+ Pages · 인터랙션/모션 포함",
    tags: ["HTML", "SCSS", "jQuery", "Animation", "Responsive"],
    leftTitle: "담당 영역",
    leftList: [
      "10페이지 이상 단독 퍼블리싱",
      "반응형 대응 및 SCSS 기반 공통 레이아웃 적용",
      "jQuery로 타이머/슬라이드 등 간단 기능 구현",
    ],
    rightTitle: "모션/효과 구현",
    rightList: ["차량 이동 모션", "타이머 모션", "슬라이드/전환 애니메이션"],
    link: "https://nh.rchada.com/",
    image: pubImg1,
  },
  {
    id: "pub-2",
    title: "B2B 교육 서비스 퍼블리싱",
    subtitle: "에이전시 프로젝트 · 단독/협업 · 반응형 · 100페이지 이상",
    tags: ["Responsive", "SCSS", "Componentized UI", "Maintenance"],
    leftTitle: "담당 영역",
    leftList: [
      "메인 페이지 단독 퍼블리싱 (100%)",
      "학생 / 학부모 채널 전체 단독 퍼블리싱",
      "선생 채널 약 40% 협업 (사수와 공동 작업)",
      "PC / Tablet / Mobile 반응형 구현",
    ],
    rightTitle: "마크업 전략 & 개선",
    rightList: [
      "breakpoint 체계 설계 및 반응형 구조화",
      "SCSS 구조 분리 (variables / mixins / components)",
      "재사용 가능한 공통 컴포넌트 제작",
      "QA 피드백 기반 UI 디테일 리팩토링",
    ],
    link: "https://ybmsmartschool.com/",
    image: pubImg2,
  },

  {
    id: "pub-3",
    title: "금융 연계 프로모션 페이지 퍼블리싱",
    subtitle: "사내 단독 진행 · PC/Mobile 반응형 · 20+ pages · 2주+ 일정 단축",
    tags: ["HTML", "CSS", "jQuery", "Responsive", "Fast Delivery"],
    leftTitle: "담당 영역",
    leftList: [
      "사내 단독 퍼블리싱 (제휴 프로모션 다페이지 구성)",
      "PC/Mobile 반응형 레이아웃 대응",
      "20페이지 이상 퍼블리싱 및 공통 UI 정리",
      "마감일 대비 2주 이상 빠른 납품",
    ],
    rightTitle: "구현 포인트",
    rightList: [
      "공통 레이아웃/스타일 템플릿 재사용으로 속도 개선",
      "폼/리스트/프로모션 UI 일관성 유지",
      "jQuery 기반 간단 인터랙션 적용",
    ],
    // 링크 없음
    image: pubImg3,
  },

  {
    id: "pub-4",
    title: "브랜드 제휴 프로모션 랜딩 퍼블리싱",
    subtitle: "사내 단독 진행 · 반응형 · 모션 포함",
    tags: ["HTML", "CSS", "jQuery", "Motion", "Responsive"],
    leftTitle: "담당 영역",
    leftList: [
      "단독 퍼블리싱",
      "반응형 레이아웃 구현",
      "jQuery 기반 간단 인터랙션 처리",
    ],
    rightTitle: "구현 포인트",
    rightList: [
      "차량 이동 모션 애니메이션 구현",
      "CTA/섹션 전환 흐름 최적화",
      "섹션 단위 재사용 가능한 구조 설계",
    ],
    link: "https://pickcar.kr/",
    image: pubImg4,
  },
  {
    id: "pub-5",
    title: "모바일 원페이지 프로모션 퍼블리싱",
    subtitle: "사내 단독 진행 · Mobile only · One-page · 간단 기능 구현",
    tags: ["HTML", "CSS", "jQuery", "Mobile"],
    leftTitle: "담당 영역",
    leftList: [
      "원페이지 단독 퍼블리싱",
      "모바일 뷰포트 최적화",
      "간단 기능 구현",
    ],
    rightTitle: "구현 포인트",
    rightList: [
      "스크롤 흐름에 맞춘 섹션 구성",
      "가벼운 인터랙션으로 클릭/전환 유도 강화",
      "공통 스타일 가이드 유지",
    ],
    // 링크 없음
    image: pubImg5,
  },
];

export const collabProjects: collabProjectItem[] = [
  {
    id: "collab-1",
    title: "HOLO",
    description: "1인 가구 청년 자취생을 위한 정보 제공 서비스",
    tech: [
      "Next.js",
      "TypeScript",
      "Vercel",
      "TanStack Query",
      "Tailwind CSS",
      "zustand",
      "supabase",
      "Kakao map api",
    ],
    github: "https://github.com/minji7901/HOLO",
    image: collabImg1,
  },
  {
    id: "collab-2",
    title: "이븐한 맛집",
    description: "흑백요리사 출연진들의 국내 업장 위치 공유 웹사이트",
    tech: ["React", "JavaScript", "Vercel", "Tailwind CSS", "supabase"],
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

  let impact = "운영 기준 구조 설계";

  if (subtitle.includes("100페이지")) {
    impact = "100페이지+ 대규모 퍼블리싱 구축";
  } else if (subtitle.includes("20+")) {
    impact = "20페이지+ 다페이지 구성";
  } else if (subtitle.includes("2주")) {
    impact = "마감 대비 2주+ 일정 단축";
  } else if (subtitle.includes("One-page")) {
    impact = "모바일 원페이지 전환율 중심 설계";
  } else if (leftList.some((item) => item.includes("반응형"))) {
    impact = "반응형 구조 체계화";
  } else if (rightList.some((item) => item.includes("재사용"))) {
    impact = "공통 컴포넌트 구조화";
  }

  return {
    id: p.id,
    category: "publishing",
    title: p.title,
    subtitle: p.subtitle,
    type: inferredType,
    domain: "프로모션 / 플랫폼 퍼블리싱",
    roleLine: leftList[0] ?? "퍼블리싱 담당",
    impact,
    troubleshooting: rightList[rightList.length - 1] ?? undefined,
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
    domain: c.description,
    roleLine: "프론트엔드 개발(팀 프로젝트)",
    impact: "배포 및 데이터 연동 경험",
    stack: c.tech ?? [],
    github: c.github,
    image: c.image,
    raw: c,
    troubleshooting: "블로그 참고",
  };
};

export const workProjects: WorkProject[] = [
  ...publishingPracticeProjects.map(toPublishingWork),
  ...collabProjects.map(toCollabWork),
].map((p) => {
  if (p.id === "pub-2") return { ...p, link: undefined };
  return p;
});
