# Minji Portfolio

웹 퍼블리셔 **Minji**의 개인 포트폴리오 웹사이트입니다.

약 3년간의 웹 퍼블리싱 실무 경험을 바탕으로  
**시맨틱 마크업, 반응형 UI, 재사용 가능한 구조, 일정과 QA를 고려한 작업 방식**을 보여주기 위해 제작했습니다.

> Next.js App Router와 TypeScript를 기반으로 제작한 컴포넌트 중심 퍼블리싱 포트폴리오

---

## 📌 About

단순히 프로젝트 결과물을 나열하기보다,

**"실무에서 바로 활용할 수 있는 퍼블리싱 역량과 작업 방식"**

을 보여주는 것을 목표로 제작했습니다.

### 주요 특징

- 시맨틱 마크업과 웹 접근성을 고려한 UI 구현
- PC / Tablet / Mobile 반응형 퍼블리싱
- 공통 UI와 스타일을 고려한 재사용 가능한 구조 설계
- 프로젝트 데이터를 별도 파일로 분리하여 관리
- TypeScript를 활용한 타입 기반 개발
- 프로젝트 상세 정보를 모달과 컴포넌트로 구성
- Framer Motion을 활용한 자연스러운 인터랙션 구현
- 페이지 범위와 작업 일정을 고려한 퍼블리싱 프로세스 구성
- 체크리스트 기반 QA를 통한 마무리

---

## 🛠 Tech Stack

### Frontend

- **Next.js**
- **React**
- **TypeScript**

### Styling

- **HTML5**
- **CSS3**
- **Tailwind CSS**

### Animation

- **Framer Motion**

### Tools

- **Git / GitHub**
- **Figma**
- **Vercel**

---

## ✨ Main Features

### 1. 실무 퍼블리싱 프로젝트

100페이지 이상의 대규모 프로젝트부터  
프로모션 랜딩 및 모바일 원페이지까지 다양한 퍼블리싱 경험을 정리했습니다.

- 100+ 페이지 단독 퍼블리싱
- PC / Tablet / Mobile 반응형 구현
- 공통 UI 및 스타일 구조 구성
- SCSS 기반 스타일 관리
- jQuery 기반 인터랙션 구현
- Swiper / FullCalendar 등 라이브러리 활용
- 일정 대비 조기 완료 경험

---

### 2. 작업 프로세스

프로젝트를 진행할 때 단순히 화면을 구현하는 것이 아니라,

**범위 정리 → 페이지 리스트 → 공통 구조 → 구현 및 중간 공유 → QA**

순서로 작업하는 과정을 보여줍니다.

초반에 작업 범위와 공통 구조를 정리하여  
후반 수정과 누락을 줄이고 일정이 흔들리지 않도록 하는 것을 중요하게 생각합니다.

---

### 3. 프로젝트 상세 모달

각 프로젝트를 클릭하면 상세 내용을 확인할 수 있도록 구성했습니다.

- 담당 업무
- 주요 결과
- 주요 작업
- 사용 기술
- 프로젝트 링크
- GitHub 링크

프로젝트 종류에 따라 필요한 정보를 다르게 보여줄 수 있도록  
공통 데이터 구조와 컴포넌트를 분리했습니다.

---

### 4. 반응형 UI

데스크톱 환경뿐만 아니라 모바일 환경에서도  
콘텐츠와 레이아웃이 자연스럽게 동작하도록 반응형으로 구성했습니다.

- Desktop
- Tablet
- Mobile

화면 크기에 따라 네비게이션, 프로젝트 카드, 콘텐츠 영역 등의 레이아웃이 변경됩니다.

---

## 🏗 Project Structure

```text
📦 src
 ┣ 📂 app
 ┃ ┣ 📜 globals.css
 ┃ ┣ 📜 layout.tsx
 ┃ ┗ 📜 page.tsx
 ┣ 📂 assets
 ┃ ┗ 📂 images
 ┃ ┃ ┣ 📂 hero
 ┃ ┃ ┗ 📂 projects
 ┣ 📂 components
 ┃ ┣ 📂 features
 ┃ ┃ ┣ 📜 PublishingProjectDetails.tsx
 ┃ ┃ ┗ 📜 WorkProjectCard.tsx
 ┃ ┣ 📂 layout
 ┃ ┃ ┗ 📜 Header.tsx
 ┃ ┣ 📂 sections
 ┃ ┃ ┣ 📜 ClosingSection.tsx
 ┃ ┃ ┣ 📜 HomeSection.tsx
 ┃ ┃ ┣ 📜 ProcessSection.tsx
 ┃ ┃ ┣ 📜 ProofSection.tsx
 ┃ ┃ ┗ 📜 WorkSection.tsx
 ┃ ┗ 📂 ui
 ┃   ┣ 📜 Counter.tsx
 ┃   ┣ 📜 LoadingDot.tsx
 ┃   ┣ 📜 Reveal.tsx
 ┃   ┣ 📜 TypeWrite.tsx
 ┃   ┗ 📜 WorkProjectModal.tsx
 ┣ 📂 data
 ┃ ┣ 📜 projects.ts
 ┃ ┣ 📜 proof.ts
 ┃ ┗ 📜 skills.ts
 ┣ 📂 lib
 ┃ ┗ 📜 utils.ts
 ┗ 📂 types
   ┗ 📜 project.ts
```
