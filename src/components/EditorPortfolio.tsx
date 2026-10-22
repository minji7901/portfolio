"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Check, ChevronDown, ChevronRight, Code2, Files, GitBranch, Github, Menu, Moon, Palette, Search, Sun, Terminal, X } from "lucide-react";
import { workProjects, type WorkProject } from "@/data/projects";
import type { publishingPracticeItem } from "@/types/project";
import "./editor-portfolio.css";

type Page = "welcome" | "about" | "works" | "process";
const pages: { id: Page; file: string; label: string; ext: string }[] = [
  { id: "welcome", file: "hello.html", label: "처음으로", ext: "<>" },
  { id: "about", file: "about.md", label: "소개와 경력", ext: "M↓" },
  { id: "works", file: "works.tsx", label: "프로젝트", ext: "TS" },
  { id: "process", file: "process.css", label: "작업 방식", ext: "#" },
];
const steps = [
  ["01", "먼저, 전체를 봅니다.", "페이지 리스트로 작업 범위와 우선순위를 정리합니다. 반복되는 화면과 예외 케이스를 먼저 확인합니다.", "페이지 리스트 / 작업 범위"],
  ["02", "반복은 하나의 규칙으로.", "헤더, 버튼, 폼과 공통 레이아웃을 먼저 만듭니다. SCSS와 컴포넌트로 일관된 화면을 구성합니다.", "공통 UI / 스타일 규칙"],
  ["03", "디자인을 작동하는 화면으로.", "PC, Tablet, Mobile에 맞춰 화면을 구현합니다. 중간 화면을 공유하고 피드백을 반영합니다.", "반응형 / 인터랙션 / 중간 공유"],
  ["04", "끝은, 한 번 더 확인하는 것.", "화면 크기와 브라우저를 바꿔 간격, 폰트, 클릭 영역을 확인하고 마지막 수정까지 마무리합니다.", "체크리스트 / QA"],
];

export default function EditorPortfolio() {
  const [page, setPage] = useState<Page>("welcome");
  const [light, setLight] = useState(false);
  const [menu, setMenu] = useState(false);
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<WorkProject | null>(null);
  const [terminal, setTerminal] = useState(true);
  const current = pages.find((p) => p.id === page)!;
  const go = (next: Page) => { setPage(next); setSelected(null); setMenu(false); window.scrollTo({ top: 0, behavior: "instant" }); };
  const projects = workProjects.filter(p => (filter === "all" || p.category === filter) && `${p.title} ${p.stack.join(" ")}`.toLowerCase().includes(query.toLowerCase()));

  return <div className={`studio ${light ? "studio-light" : ""}`}>
    <a className="studio-skip" href="#studio-main">본문으로 건너뛰기</a>
    <header className="studio-titlebar">
      <div className="studio-brand"><span className="brand-mark">m<span>↗</span></span><span>MINJI<span className="brand-dot">.</span> <small>STUDIO</small></span></div>
      <span className="window-name">portfolio <span>/</span> {current.file}</span>
      <button className="theme-button" onClick={() => setLight(!light)} aria-label={light ? "어두운 테마로 변경" : "밝은 테마로 변경"}>{light ? <Moon size={15}/> : <Sun size={15}/>}<span>{light ? "Night shift" : "Light mode"}</span></button>
    </header>
    <div className="studio-activity"><button aria-label="파일 탐색기 열기" onClick={() => setMenu(!menu)}><Files size={22}/></button><button aria-label="프로젝트 검색" onClick={() => go("works")}><Search size={22}/></button><button aria-label="작업 방식 보기" onClick={() => go("process")}><Code2 size={23}/></button><span className="activity-bottom"><Palette size={22}/></span></div>
    <aside className={`studio-sidebar ${menu ? "is-open" : ""}`} aria-label="파일 탐색기">
      <div className="explorer-label">EXPLORER <span>•••</span></div>
      <div className="folder-label"><ChevronDown size={14}/> MINJI’S PORTFOLIO</div>
      <div className="folder-sub"><ChevronDown size={14}/> src</div>
      <nav>{pages.map(p => <button key={p.id} onClick={() => go(p.id)} aria-current={page === p.id ? "page" : undefined} className={`file-link ${page === p.id ? "active" : ""}`}><span className={`file-icon icon-${p.id}`}>{p.ext}</span><span>{p.file}<small>{p.label}</small></span>{page === p.id && <span className="file-active-dot"/>}</button>)}</nav>
      <div className="sidebar-note"><span className="live-dot"/> FROM DESIGN<br/><strong>TO THE BROWSER.</strong><p>디자인의 의도를<br/>화면의 디테일로.</p></div>
      <a className="sidebar-github" href="https://github.com/minji7901" target="_blank" rel="noreferrer"><Github size={16}/> GitHub <ArrowUpRight size={14}/></a>
      <div className="sidebar-bottom"><ChevronRight size={14}/> OUTLINE <span>WEB PUBLISHER</span></div>
    </aside>
    <div className="studio-workspace">
      <div className="studio-tabs" role="tablist" aria-label="포트폴리오 페이지"><button className="mobile-menu" onClick={() => setMenu(!menu)} aria-label="메뉴 열기"><Menu size={19}/></button>{pages.map(p => <button role="tab" tabIndex={page === p.id ? 0 : -1} onKeyDown={(e) => { const index = pages.findIndex(item => item.id === p.id); const next = e.key === "ArrowRight" ? (index + 1) % pages.length : e.key === "ArrowLeft" ? (index + pages.length - 1) % pages.length : e.key === "Home" ? 0 : e.key === "End" ? pages.length - 1 : -1; if (next >= 0) { e.preventDefault(); go(pages[next].id); document.getElementById(`tab-${pages[next].id}`)?.focus(); } }} aria-selected={page === p.id} aria-controls="studio-main" id={`tab-${p.id}`} key={p.id} onClick={() => go(p.id)} className={page === p.id ? "selected" : ""}><span className={`file-icon icon-${p.id}`}>{p.ext}</span>{p.file}<span className="tab-dot">{page === p.id ? "●" : ""}</span></button>)}</div>
      <div className="studio-breadcrumb">src <ChevronRight size={12}/> portfolio <ChevronRight size={12}/><span>{selected ? selected.title : current.file}</span><span className="breadcrumb-preview">◉ Live preview</span></div>
      <main id="studio-main" role="tabpanel" aria-labelledby={`tab-${page}`} tabIndex={-1} key={`${page}-${selected?.id ?? "index"}`}>
        {page === "welcome" && <>
          <div className="hero-editor">
            <div className="hero-topline"><span><span className="live-dot"/> WEB PUBLISHER · 김민지</span><span>DESIGN → CODE → EXPERIENCE</span></div>
            <div className="hero-composition"><div className="hero-copy"><p className="code-comment">&lt;!-- 디테일을 쌓아, 화면을 만듭니다. --&gt;</p><h1>MADE<br/>BY <span>MINJI<span className="typing-caret">_</span></span><span className="hero-period">.</span></h1><div className="hero-description"><span className="code-bracket">&lt;/&gt;</span><p>보기 좋은 화면에,<br/><strong>쓰기 좋은 디테일까지.</strong></p></div><p className="hero-intro">HTML과 CSS에서 React와 Next.js까지.<br/>디자인의 의도를 읽고, 브라우저 위에 구현하는 웹 퍼블리셔입니다.</p><button className="studio-cta" onClick={() => go("works")}>작업 열어보기 <ArrowUpRight size={21}/></button></div>
            <div className="hero-art" aria-hidden="true"><div className="art-grid"/><span className="art-coordinate">FIG. 01 — ALWAYS IN PROGRESS</span><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="asterisk">✳</div><span className="floating-tag tag-html">&lt;div class=&quot;possibility&quot;&gt;</span><span className="floating-tag tag-css">.detail &#123; matters: true; &#125;</span><div className="art-sticker">PIXEL<br/>BY PIXEL <span>↗</span></div><span className="art-caption">a little code.<br/>a lot of care.</span></div></div>
            <div className="hero-stats"><div><strong>3<span>+</span></strong><span>YEARS<br/>퍼블리싱 실무 경험</span></div><div><strong>10<span>+</span></strong><span>PROJECTS<br/>프로젝트 제작 경험</span></div><div><strong>200<span>+</span></strong><span>SCREENS<br/>웹 화면 구현 경험</span></div><button onClick={() => go("about")}>조금 더 알아보기 <ArrowDown size={18}/></button></div>
          </div>
          <div className="home-next"><span>01 / SELECTED WORK</span><button onClick={() => {go("works"); setSelected(workProjects[0]);}}>100페이지의 화면을, 하나의 규칙으로. <ArrowUpRight size={23}/></button><span>등기업무 서비스 플랫폼 리뉴얼</span></div>
        </>}
        {page === "about" && <div className="document-page"><p className="page-eyebrow">01 / THE PERSON BEHIND THE PIXELS</p><h1>화면을 만들고,<br/><span>디테일을 챙깁니다.</span></h1><p className="page-lead">안녕하세요, 웹 퍼블리셔 김민지입니다.<br/>에이전시, 인하우스, 프리랜서 환경에서 웹사이트 제작과 유지보수를 경험했습니다.</p><div className="about-grid"><div><p className="code-comment">{"// my toolkit"}</p><h2>익숙한 도구로 정확하게.<br/>새로운 도구로 더 넓게.</h2><div className="tool-list">{["HTML5", "CSS3", "SCSS", "JavaScript", "jQuery", "React", "Next.js", "Git"].map((t,i)=><span key={t}><small>{String(i+1).padStart(2,"0")}</small>{t}<Check size={14}/></span>)}</div></div><div className="career-list">{[["2025", "Freelance", "100페이지 이상의 웹 화면을 단독으로 퍼블리싱했습니다.", "공통 UI와 반복 스타일을 정리하며 전체 페이지를 제작했습니다."],["2022 — 2024", "In-house", "여러 웹사이트의 제작과 유지보수를 담당했습니다.", "SCSS 스타일 관리, 신규 페이지 제작과 운영 수정사항을 반영했습니다."],["2021 — 2022", "Agency", "디자이너와 개발자 사이에서 화면을 구현했습니다.", "다양한 프로젝트의 퍼블리싱, QA와 수정사항 반영을 경험했습니다."]].map(c=><article key={c[1]}><span>{c[0]}</span><h2>{c[1]} <ArrowUpRight size={20}/></h2><h3>{c[2]}</h3><p>{c[3]}</p></article>)}</div></div><button className="text-link" onClick={()=>go("works")}>제가 만든 작업을 확인해보세요 <ArrowUpRight size={20}/></button></div>}
        {page === "works" && <div className="document-page works-page">{selected ? <>
          <button className="back-link" onClick={()=>setSelected(null)}>← 프로젝트 목록</button><p className="page-eyebrow">{selected.domain} / {selected.type}</p><h1 className="project-heading">{selected.title}</h1><p className="page-lead">{selected.subtitle}</p><div className="project-tags">{selected.stack.map(t=><span key={t}>{t}</span>)}</div>
          {selected.image && <div className="project-image"><div className="image-bar"><span>● ● ●</span> PROJECT SNAPSHOT</div><Image src={selected.image} alt={`${selected.title} 작업 화면`} priority/><p>실제 작업 화면 · 일부 프로젝트는 회사 사유로 링크를 공개하지 않습니다.</p></div>}
          <div className="project-detail-grid"><div><p className="code-comment">{"// contribution"}</p><h2>제가 맡은 일</h2><ul>{(selected.category === "publishing" ? (selected.raw as publishingPracticeItem)?.leftList : [selected.roleLine, selected.impact, selected.troubleshooting ?? ""]).filter(Boolean).map(t=><li key={t}>{t}</li>)}</ul></div><div><p className="code-comment">{"// implementation"}</p><h2>구현 포인트</h2><ul>{(selected.bullets?.length ? selected.bullets : [selected.subtitle ?? "", ...selected.stack]).map(t=><li key={t}>{t}</li>)}</ul></div></div><div className="project-actions">{selected.link && <a className="studio-cta" href={selected.link} target="_blank" rel="noreferrer">사이트 보기 <ArrowUpRight size={18}/></a>}{selected.github && <a className="studio-cta" href={selected.github} target="_blank" rel="noreferrer">GitHub 보기 <Github size={18}/></a>}</div>
        </> : <><p className="page-eyebrow">02 / SELECTED WORK & EXPERIENCES</p><h1>설명보다,<br/><span>만들어온 것들.</span><sup>({workProjects.length.toString().padStart(2,"0")})</sup></h1><p className="page-lead">실무 퍼블리싱부터 프론트엔드 협업까지.<br/>프로젝트마다 제가 맡은 역할과 구현 과정을 기록했습니다.</p><div className="work-toolbar"><div className="work-filters">{[["all","전체"],["publishing","퍼블리싱"],["collab","협업 프로젝트"]].map(([v,l])=><button key={v} aria-pressed={filter===v} className={filter===v?"active":""} onClick={()=>setFilter(v)}>{l}</button>)}</div><label className="work-search"><Search size={16}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="프로젝트 · 기술 검색" aria-label="프로젝트 및 기술 검색"/>{query && <button aria-label="검색 지우기" onClick={()=>setQuery("")}><X size={14}/></button>}</label></div><div className="work-list">{projects.map((p,i)=><button className="work-row" key={p.id} onClick={()=>{setSelected(p);window.scrollTo({top:0,behavior:"instant"});}}><span className="work-number">{String(i+1).padStart(2,"0")}</span><div><span className="work-category">{p.category === "publishing" ? "WEB PUBLISHING" : "TEAM PROJECT"} <span>/ {p.type}</span></span><h2>{p.title}</h2><p>{p.roleLine} · {p.troubleshooting}</p><div className="row-tags">{p.stack.slice(0,4).map(t=><span key={t}>{t}</span>)}</div></div><ArrowUpRight className="work-arrow" size={30}/></button>)}</div>{!projects.length && <p className="empty-results">검색 결과가 없어요. 다른 프로젝트명이나 기술을 입력해보세요.</p>}<p className="work-footnote">일부 프로젝트는 회사 사유로 공개 링크 없이 작업 범위와 화면으로 소개합니다.</p></> }</div>}
        {page === "process" && <div className="document-page"><p className="page-eyebrow">03 / HOW I WORK</p><h1>작업에는 순서를.<br/><span>마무리에는 기준을.</span></h1><p className="page-lead">페이지 리스트에서 마지막 QA까지.<br/>작업 범위를 먼저 잡고, 작은 누락까지 확인합니다.</p><div className="process-list">{steps.map(([n,title,desc,output])=><article key={n}><span>{n}</span><div><h2>{title}</h2><p>{desc}</p><small>OUTPUT <span>{output}</span></small></div><Check size={25}/></article>)}</div><div className="process-closing"><Code2 size={35}/><p>맡은 화면은,<br/><strong>끝까지 책임집니다.</strong></p><span>디자인의 의도와 사용자의 경험을<br/>함께 생각하는 퍼블리셔가 되겠습니다.</span></div></div>}
      </main>
      <footer className="studio-terminal"><button className="terminal-title" onClick={()=>setTerminal(!terminal)} aria-expanded={terminal}><Terminal size={14}/> NOTES <span>민지의 작업 노트</span>{terminal ? <ChevronDown size={15}/> : <ChevronRight size={15}/>}</button>{terminal && <div className="terminal-content"><span className="terminal-prompt">minji@portfolio ~ %</span><span>작은 디테일이 좋은 화면을 만든다고 믿습니다.</span><span className="terminal-cursor">▍</span><span className="terminal-signature">DESIGNED & BUILT BY MINJI © {new Date().getFullYear()}</span></div>}</footer>
    </div>
    <div className="studio-status"><span><GitBranch size={13}/> main* <span className="status-check"><Check size={13}/> Ready to explore</span></span><span>HTML · CSS · A LITTLE MAGIC <span className="status-encoding">UTF-8 &nbsp; {light ? "Daylight" : "Midnight"}</span><Code2 size={13}/></span></div>
  </div>;
}


