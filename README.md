# Minji Portfolio

웹 퍼블리셔 김민지의 개인 포트폴리오입니다. VS Code에서 영감을 받은 파일 탐색기와 탭으로 소개, 프로젝트, 작업 방식을 보여줍니다.

## 실행

```sh
yarn install
yarn dev
```

- `yarn lint`: 전체 코드 검사
- `yarn build`: 배포용 빌드
- `yarn start`: 빌드한 사이트 실행

## 구성

- `src/app`: Next.js 진입점, 메타데이터와 전역 스타일
- `src/components/EditorPortfolio.tsx`: 페이지 이동, 테마와 프로젝트 선택 상태
- `src/components/layout`: 헤더, 탐색기, 탭, 작업 노트와 상태 표시줄
- `src/components/sections`: 첫 화면, 소개, 프로젝트와 작업 방식
- `src/components/features`: 첫 화면 그래픽과 프로젝트 상세
- `src/components/styles`: 프레임·첫 화면·본문·반응형 스타일
- `src/data/portfolio.ts`: 메뉴, 기술, 경력과 작업 단계
- `src/data/projects.ts`: 프로젝트 자료와 공통 표시 데이터 변환
- `src/hooks/useProjectSearch.ts`: 프로젝트 분류와 검색 상태
- `src/types`: 포트폴리오와 프로젝트 타입
- `src/assets/images/projects`: 실제 프로젝트 이미지

## 동작

- 파일 탐색기와 상단 탭으로 페이지 이동
- 프로젝트 분류, 기술·프로젝트명 검색 및 상세 보기
- 밝은 테마와 어두운 테마 전환
- 키보드 방향키, Home, End로 탭 이동
- 모바일 메뉴와 모션 줄이기 설정 지원

소개와 프로젝트 내용은 `src/data`에서 수정합니다. 공개하지 않는 프로젝트의 링크는 표시 데이터에서 제외합니다.
