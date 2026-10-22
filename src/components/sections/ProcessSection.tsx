import { Check, Code2 } from "lucide-react";
import { processSteps } from "@/data/portfolio";
export default function ProcessSection() {
  return (
    <div className="document-page">
      <p className="page-eyebrow">03 / HOW I WORK</p>
      <h1>
        작업에는 순서를.
        <br />
        <span>마무리에는 기준을.</span>
      </h1>
      <p className="page-lead">
        페이지 리스트에서 마지막 QA까지.
        <br />
        작업 범위를 먼저 잡고, 작은 누락까지 확인합니다.
      </p>
      <div className="process-list">
        {processSteps.map(({ number, title, description, output }) => (
          <article key={number}>
            <span>{number}</span>
            <div>
              <h2>{title}</h2>
              <p>{description}</p>
              <small>
                OUTPUT <span>{output}</span>
              </small>
            </div>
            <Check size={25} />
          </article>
        ))}
      </div>
      <div className="process-closing">
        <Code2 size={35} />
        <p>
          맡은 화면은,
          <br />
          <strong>끝까지 책임집니다.</strong>
        </p>
        <span>
          디자인의 의도와 사용자의 경험을
          <br />
          함께 생각하는 퍼블리셔가 되겠습니다.
        </span>
      </div>
    </div>
  );
}
