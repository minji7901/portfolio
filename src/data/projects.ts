import projectImg1 from "@/assets/images/projects/img1.png";
import projectImg2 from "@/assets/images/projects/img2.png";
import projectImg3 from "@/assets/images/projects/img3.png";
import projectImg4 from "@/assets/images/projects/img4.png";

export const projectData = [
  {
    id: 1,
    name: "HOLO",
    images: projectImg1,
    href: "https://github.com/minji7901/HOLO",
    description: `기술: Next.js, TypeScript, Tailwind, Zustand, Supabase, Kakao Map API 
역할: 팀 부리더
성과: 스파르타 React 7기 최종 프로젝트 대상 수상
내용:
- API 기반 데이터 조회 및 캐싱을 통한 서비스 성능 개선
- 사용자 테스트 피드백 반영 → 현재 위치 자동 조회 기능 개선`,
  },
  {
    id: 2,
    name: "냠냠로그",
    images: projectImg2,
    href: "https://github.com/minji7901/yumyum",
    description: `기술: Next.js, TypeScript, Supabase, react-hook-form
    역할: 팀 리더
내용:
- react-hook-form + Zod를 활용한 입력값 검증 및 폼 UX 개선
- API 데이터 로딩/에러 상태 분리 처리`,
  },
  {
    id: 3,
    name: "이븐한맛집",
    images: projectImg3,
    href: "https://github.com/minji7901/Outsourcing-Project",
    description: `기술: React, JavaScript, Tailwind CSS, Supabase
내용:
- 로그인/회원가입 및 공통 레이아웃 구현
- 인증 상태에 따른 페이지 접근 제어`,
  },
  {
    id: 4,
    name: "YBM 스마트 스쿨",
    images: projectImg4,
    href: "https://ybmsmartschool.com/",
    description: `기술: html, scss, jquery
    역할: 단독 퍼블리싱 프로젝트 책임 수행
내용:
- 외주 프로젝트 요구사항 분석 및 구현
- 클라이언트 피드백 반영 및 프로젝트 완료`,
  },
] as const;
