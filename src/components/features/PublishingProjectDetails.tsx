import React from "react";
import type { publishingPracticeItem } from "@/types/project";

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="px-3 py-1 bg-warm-card border border-line rounded-full text-xs font-semibold">
    {children}
  </span>
);

const PublishingProjectDetail = ({
  item,
}: {
  item: publishingPracticeItem;
}) => {
  return (
    <details className="group border border-line rounded-2xl p-6 open:shadow-md transition bg-warm-card">
      <summary className="flex justify-between items-center cursor-pointer list-none">
        <div className="min-w-0">
          <h4 className="text-lg font-semibold truncate">{item.title}</h4>
          <p className="text-sm mt-1 text-text-secondary">{item.subtitle}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {item.tags.map((tag) => (
              <Pill key={tag}>{tag}</Pill>
            ))}
          </div>
        </div>
        <span className="transition group-open:rotate-180 text-text-secondary">
          ▼
        </span>
      </summary>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm leading-relaxed">
        <div>
          <h5 className="font-semibold mb-2">{item.leftTitle}</h5>
          <ul className="space-y-1 text-text-primary">
            {item.leftList.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-2">{item.rightTitle}</h5>
          <ul className="space-y-1 text-text-primary">
            {item.rightList.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </div>
      </div>

      {item.link && (
        <div className="flex justify-center mt-6">
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full border border-base-secondary text-text-secondary text-sm font-semibold bg-warm-card hover:bg-warm transition"
          >
            프로젝트 보러가기
          </a>
        </div>
      )}
    </details>
  );
};

export default PublishingProjectDetail;
