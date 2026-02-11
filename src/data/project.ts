import img1 from "@/assets/images/projects/img1.png";
import img2 from "@/assets/images/projects/img2.png";
import type {
  publishingPracticeItem,
  collabProjectItem,
} from "@/types/project";

export const publishingPracticeProjects: publishingPracticeItem[] = [
  {
    id: "pub-1",
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
  },
  {
    id: "pub-2",
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
      "공통 레이아례이아웃/스타일 템플릿 재사용으로 속도 개선",
      "폼/리스트/프로모션 UI 일관성 유지",
      "jQuery 기반 간단 인터랙션 적용",
    ],
    // 링크 없음
  },
  {
    id: "pub-3",
    title: "캐피탈 제휴 프로모션 마이크로사이트",
    subtitle: "사내 단독 진행 · 반응형 · 10+ pages · 인터랙션/모션 포함",
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
      "Tansack query",
      "Tailwind CSS",
      "zustand",
      "supabase",
      "Kakao map api",
    ],
    github: "https://github.com/minji7901/HOLO",
    image: img1,
  },
  {
    id: "collab-2",
    title: "이븐한 맛집",
    description: "흑백요리사 출연진들의 국내 업장 위치 공유 웹사이트",
    tech: ["React", "JavaScript", "Vercel", "Tailwind CSS", "supabase"],
    github: "https://github.com/minji7901/Outsourcing-Project",
    image: img2,
  },
];
