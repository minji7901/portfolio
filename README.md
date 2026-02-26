# Minji Portfolio

웹 퍼블리셔 **Minji**의 개인 포트폴리오 웹사이트입니다.  
실무 퍼블리싱 경험을 기반으로, 구조 설계 · 재사용성 · 협업 중심 구현 역량을 보여주기 위해 제작했습니다.

> Next.js App Router 기반으로 설계된 컴포넌트 중심 퍼블리싱 포트폴리오

---

## 📌 About

이 프로젝트는 단순 결과물 정리가 아닌,  
**“실무에서 바로 적용 가능한 퍼블리싱 구조”**를 보여주는 것을 목표로 합니다.

- 시맨틱 마크업과 접근성을 고려한 UI 구현
- 재사용성과 유지보수를 고려한 컴포넌트 설계
- 데이터 분리 기반의 확장 가능한 구조
- TypeScript 기반 타입 안정성 확보
- 모달 시스템 및 API Route 구현
- 협업을 고려한 코드 구조와 명확한 역할 분리

---

## 🛠 Tech Stack

### Frontend
- **Next.js (App Router)**
- **React**
- **TypeScript**

### Styling
- **CSS3**
- **SCSS**
- **Tailwind CSS**

### Animation
- **Framer Motion**

### Tools
- **Git / GitHub**
- **Figma**
- **Vercel**

---

## 🏗 Project Structure

```text
📦 src
 ┣ 📂app
 ┃ ┣ 📂api
 ┃ ┃ ┗ 📂contact
 ┃ ┃ ┃ ┗ 📜route.ts          # Contact API Route
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜globals.css
 ┃ ┣ 📜layout.tsx
 ┃ ┗ 📜page.tsx
 ┣ 📂assets
 ┃ ┗ 📂images
 ┃ ┃ ┣ 📂hero
 ┃ ┃ ┃ ┗ 📜profile-img.png
 ┃ ┃ ┗ 📂projects
 ┃ ┃ ┃ ┣ 📜img1.png
 ┃ ┃ ┃ ┗ 📜img2.png
 ┣ 📂components
 ┃ ┣ 📂features              # 프로젝트 상세/카드 컴포넌트
 ┃ ┃ ┣ 📜FrontendCollaboDetails.tsx
 ┃ ┃ ┣ 📜PublishingProjectDetails.tsx
 ┃ ┃ ┗ 📜WorkProjectCard.tsx
 ┃ ┣ 📂layout
 ┃ ┃ ┗ 📜Header.tsx
 ┃ ┣ 📂sections              # 화면 단위 섹션
 ┃ ┃ ┣ 📜ContactSection.tsx
 ┃ ┃ ┣ 📜HomeSection.tsx
 ┃ ┃ ┣ 📜ProcessSection.tsx
 ┃ ┃ ┣ 📜ProofSection.tsx    # 실무 경험 포함
 ┃ ┃ ┗ 📜WorkSection.tsx
 ┃ ┗ 📂ui                    # 재사용 UI 컴포넌트
 ┃ ┃ ┣ 📜Counter.tsx
 ┃ ┃ ┣ 📜LoadingDot.tsx
 ┃ ┃ ┣ 📜ProofModal.tsx
 ┃ ┃ ┣ 📜Reveal.tsx
 ┃ ┃ ┣ 📜TypeWrite.tsx
 ┃ ┃ ┗ 📜WorkProjectModal.tsx
 ┣ 📂data                    # 데이터 분리 구조
 ┃ ┣ 📜projects.ts
 ┃ ┣ 📜proof.ts
 ┃ ┗ 📜skills.ts
 ┣ 📂lib
 ┃ ┗ 📜utils.ts
 ┗ 📂types
   ┗ 📜project.ts