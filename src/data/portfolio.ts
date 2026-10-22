import type { PortfolioFile, ProjectFilter } from "@/types/portfolio";
export const portfolioFiles: PortfolioFile[] = [
  { id: "welcome", file: "hello.html", label: "처음으로", ext: "<>" },
  { id: "about", file: "about.md", label: "소개와 경력", ext: "M↓" },
  { id: "works", file: "works.tsx", label: "프로젝트", ext: "TS" },
  { id: "process", file: "process.css", label: "작업 방식", ext: "#" },
];

export const tools = [
  "HTML5",
  "CSS3",
  "SCSS",
  "JavaScript",
  "jQuery",
  "React",
  "Next.js",
  "Git",
];

export const careers = [
  {
    period: "2025",
    environment: "Freelance",
    title: "100페이지 이상의 웹 화면을 단독으로 퍼블리싱했습니다.",
    description: "공통 UI와 반복 스타일을 정리하며 전체 페이지를 제작했습니다.",
  },
  {
    period: "2022 — 2024",
    environment: "In-house",
    title: "여러 웹사이트의 제작과 유지보수를 담당했습니다.",
    description:
      "SCSS 스타일 관리, 신규 페이지 제작과 운영 수정사항을 반영했습니다.",
  },
  {
    period: "2021 — 2022",
    environment: "Agency",
    title: "디자이너와 개발자 사이에서 화면을 구현했습니다.",
    description:
      "다양한 프로젝트의 퍼블리싱, QA와 수정사항 반영을 경험했습니다.",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "먼저, 전체를 봅니다.",
    description:
      "페이지 리스트로 작업 범위와 우선순위를 정리합니다. 반복되는 화면과 예외 케이스를 먼저 확인합니다.",
    output: "페이지 리스트 / 작업 범위",
  },
  {
    number: "02",
    title: "반복은 하나의 규칙으로.",
    description:
      "헤더, 버튼, 폼과 공통 레이아웃을 먼저 만듭니다. SCSS와 컴포넌트로 일관된 화면을 구성합니다.",
    output: "공통 UI / 스타일 규칙",
  },
  {
    number: "03",
    title: "디자인을 작동하는 화면으로.",
    description:
      "PC, Tablet, Mobile에 맞춰 화면을 구현합니다. 중간 화면을 공유하고 피드백을 반영합니다.",
    output: "반응형 / 인터랙션 / 중간 공유",
  },
  {
    number: "04",
    title: "끝은, 한 번 더 확인하는 것.",
    description:
      "화면 크기와 브라우저를 바꿔 간격, 폰트, 클릭 영역을 확인하고 마지막 수정까지 마무리합니다.",
    output: "체크리스트 / QA",
  },
];

export const projectFilters: { value: ProjectFilter; label: string }[] = [
  { value: "all", label: "전체" },
  { value: "publishing", label: "퍼블리싱" },
  { value: "collab", label: "협업 프로젝트" },
];
