"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { careers, tools } from "@/data/portfolio";
import type { PortfolioPage } from "@/types/portfolio";
type Props = { onNavigate: (page: PortfolioPage) => void };

export default function AboutSection({ onNavigate }: Props) {
  return (
    <div className="document-page">
      <p className="page-eyebrow">01 / THE PERSON BEHIND THE PIXELS</p>
      <h1>
        화면을 만들고,
        <br />
        <span>디테일을 챙깁니다.</span>
      </h1>
      <p className="page-lead">
        안녕하세요, 웹 퍼블리셔 김민지입니다.
        <br />
        에이전시, 인하우스, 프리랜서 환경에서 웹사이트 제작과 유지보수를
        경험했습니다.
      </p>
      <div className="about-grid">
        <div>
          <p className="code-comment">{"// my toolkit"}</p>
          <h2>
            익숙한 도구로 정확하게.
            <br />
            새로운 도구로 더 넓게.
          </h2>
          <div className="tool-list">
            {tools.map((tool, index) => (
              <span key={tool}>
                <small>{String(index + 1).padStart(2, "0")}</small>
                {tool}
                <Check size={14} />
              </span>
            ))}
          </div>
        </div>
        <div className="career-list">
          {careers.map((career) => (
            <article key={career.environment}>
              <span>{career.period}</span>
              <h2>
                {career.environment} <ArrowUpRight size={20} />
              </h2>
              <h3>{career.title}</h3>
              <p>{career.description}</p>
            </article>
          ))}
        </div>
      </div>
      <button className="text-link" onClick={() => onNavigate("works")}>
        제가 만든 작업을 확인해보세요 <ArrowUpRight size={20} />
      </button>
    </div>
  );
}
