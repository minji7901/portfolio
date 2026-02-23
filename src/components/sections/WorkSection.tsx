"use client";
import Image from "next/image";
import State from "@/components/ui/State";
import PublishingProjectDetail from "@/components/features/PublishingProjectDetails";
import FrontendCollaboDetails from "@/components/features/FrontendCollaboDetails";
import { publishingPracticeProjects, collabProjects } from "@/data/project";

const WorkSection = () => {
  return (
    <section id="work" className="py-32">
      <div className="max-w-container mx-auto px-6 relative">
        {/* =========================
            1) Recent Publishing Work
        ========================== */}
        <div className="mt-16">
          <div className="text-center">
            <State text="RECENT PUBLISHING WORK" color="pink" />
            <h2 className="text-3xl font-bold mt-6">
              부동산 등기업무 서비스 플랫폼 리뉴얼
            </h2>
            <p className="mt-3">2025.10 - 2025.12 · 단독 퍼블리싱</p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="border border-navi rounded-2xl p-6 bg-white">
                <p className="text-base-secondary font-semibold">Role</p>
                <p className="mt-1">단독 퍼블리싱 · 구조 설계 · QA 대응</p>
              </div>
              <div className="border border-navi rounded-2xl p-6 bg-white">
                <p className="text-base-secondary font-semibold">Scope</p>
                <p className="mt-1">100+ 화면 · 팝업 포함 · 공통 컴포넌트</p>
              </div>
              <div className="border border-navi rounded-2xl p-6 bg-white">
                <p className="text-base-secondary font-semibold">Outcome</p>
                <p className="mt-1">일정 1개월 단축 · 유지보수 구조 정립</p>
              </div>
            </div>
          </div>

          <div className="pb-7 border-b border-b-line mt-10">
            <h3 className="text-xl font-semibold mb-4"># Overview</h3>
            <ul className="space-y-2 text-base-secondary">
              <li>- Nuxt.js 기반 서비스 전면 UI 리뉴얼</li>
              <li>- 업무 화면 및 팝업 포함 100+ 화면 단독 퍼블리싱</li>
              <li>- 기존 일정 대비 1개월 단축</li>
            </ul>
          </div>

          <div className="py-7 border-b border-b-line">
            <h3 className="text-xl font-semibold mb-4"># What I Built</h3>
            <ul className="space-y-2 text-base-secondary">
              <li>- SCSS 구조화 및 공통 컴포넌트 설계</li>
              <li>- 반복 UI 모듈화로 재사용 구조 구축</li>
              <li>- 디자이너/개발자 확인용 리스트 페이지 제작</li>
              <li>- 대규모 화면 관리 구조 정리</li>
            </ul>
          </div>

          <div className="py-7 border-b border-b-line">
            <h3 className="text-xl font-semibold mb-4">
              # Key Issues & Solutions
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">
                  - 디자인 스케일 조정(서비스 기준 재정립)
                </p>
                <p className="text-base-secondary mt-1">
                  폰트/여백/컴포넌트 비율을 실제 사용 시나리오에 맞춰
                  재정의하고, 화면 전반에 일관 적용
                </p>
              </div>

              <div>
                <p className="font-semibold">
                  - input type="date" 환경별 렌더링 이슈
                </p>
                <p className="text-base-secondary mt-1">
                  브라우저/OS별 스타일 한계를 고려해 커스텀 전략을 적용하고,
                  테스트 범위를 명확히 정의해 QA 리스크를 줄임
                </p>
              </div>

              <div>
                <p className="font-semibold">
                  - FullCalendar 스타일 커스터마이징
                </p>
                <p className="text-base-secondary mt-1">
                  SCSS 오버라이드 구조를 정리해 서비스 톤앤매너에 맞게
                  재정의하고, 유지보수 가능한 형태로 관리
                </p>
              </div>
            </div>
          </div>

          <div className="py-7">
            <h3 className="text-xl font-semibold mb-4"># Result</h3>
            <ul className="space-y-2 text-base-secondary">
              <li>- 100+ 화면 안정적 퍼블리싱 완료</li>
              <li>- 유지보수 가능한 스타일 구조 정립</li>
              <li>- 협업 효율 향상 및 일정 단축</li>
            </ul>
          </div>
        </div>

        {/* =========================
            2) Publishing Practice
        ========================== */}
        <div className="mt-24">
          <div className="text-center">
            <State text="PUBLISHING PRACTICE" color="pink" />
            <div className="mt-4">
              <p>
                렌트카 서비스 회사 재직 당시, <br />
                다양한 브랜드/금융사 제휴 프로모션을
                <span className="text-base font-semibold"> 단독 퍼블리싱</span>
                으로 다수 진행했습니다.
              </p>
              <p>
                유사 레이아웃은 {""}
                <span className="text-base font-semibold">
                  SCSS 공통 템플릿
                </span>
                으로 재사용하여 일정을 단축한 경험이 있습니다.
              </p>
            </div>
          </div>
          <div className="space-y-4 my-10">
            {publishingPracticeProjects.map((item) => (
              <PublishingProjectDetail key={item.id} item={item} />
            ))}
          </div>
          <p className="text-base-secondary">
            * 일부 프로젝트는 회사 사유로 링크 공개가 어렵습니다.
          </p>
        </div>

        {/* =========================
            3) Frontend Collaboration Projects
        ========================== */}
        <div className="mt-24">
          <div className="text-center">
            <State text="FRONTEND COLLABORATION PROJECTS" color="pink" />
            <div className="mt-4">
              <p>팀 단위로 진행한 프론트엔드 프로젝트들입니다.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 my-10">
            {collabProjects.map((item) => (
              <FrontendCollaboDetails key={item.id} item={item} />
            ))}
          </div>
        </div>
        <div className="absolute -bottom-40 right-32">
          <Image
            src="/icons/arrow-icon.svg"
            alt="icon"
            width={150}
            height={100}
          />
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
