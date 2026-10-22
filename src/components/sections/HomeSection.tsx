"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";
import type { PortfolioPage } from "@/types/portfolio";
import { workProjects } from "@/data/projects";
import type { WorkProject } from "@/types/project";
import HeroArtwork from "@/components/features/HeroArtwork";
type Props = {
  onNavigate: (page: PortfolioPage) => void;
  onSelectProject: (project: WorkProject) => void;
};

export default function HomeSection({ onNavigate, onSelectProject }: Props) {
  return (
    <>
      <div className="hero-editor">
        <div className="hero-topline">
          <span>
            <span className="live-dot" /> WEB PUBLISHER · 김민지
          </span>
          <span>DESIGN → CODE → EXPERIENCE</span>
        </div>
        <div className="hero-composition">
          <div className="hero-copy">
            <p className="code-comment">
              &lt;!-- 디테일을 쌓아, 화면을 만듭니다. --&gt;
            </p>
            <h1>
              MADE
              <br />
              BY{" "}
              <span>
                MINJI<span className="typing-caret">_</span>
              </span>
              <span className="hero-period">.</span>
            </h1>
            <div className="hero-description">
              <span className="code-bracket">&lt;/&gt;</span>
              <p>
                보기 좋은 화면에,
                <br />
                <strong>쓰기 좋은 디테일까지.</strong>
              </p>
            </div>
            <p className="hero-intro">
              HTML과 CSS에서 React와 Next.js까지.
              <br />
              디자인의 의도를 읽고, 브라우저 위에 구현하는 웹 퍼블리셔입니다.
            </p>
            <button className="studio-cta" onClick={() => onNavigate("works")}>
              작업 열어보기 <ArrowUpRight size={21} />
            </button>
          </div>
          <HeroArtwork />
        </div>
        <div className="hero-stats">
          <div>
            <strong>
              3<span>+</span>
            </strong>
            <span>
              YEARS
              <br />
              퍼블리싱 실무 경험
            </span>
          </div>
          <div>
            <strong>
              10<span>+</span>
            </strong>
            <span>
              PROJECTS
              <br />
              프로젝트 제작 경험
            </span>
          </div>
          <div>
            <strong>
              200<span>+</span>
            </strong>
            <span>
              SCREENS
              <br />웹 화면 구현 경험
            </span>
          </div>
          <button onClick={() => onNavigate("about")}>
            조금 더 알아보기 <ArrowDown size={18} />
          </button>
        </div>
      </div>
      <div className="home-next">
        <span>01 / SELECTED WORK</span>
        <button
          onClick={() => {
            onSelectProject(workProjects[0]);
          }}
        >
          100페이지의 화면을, 하나의 규칙으로. <ArrowUpRight size={23} />
        </button>
        <span>등기업무 서비스 플랫폼 리뉴얼</span>
      </div>
    </>
  );
}
