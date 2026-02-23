import React from "react";
import Button from "@/components/ui/Button";
import type { publishingPracticeItem } from "@/types/project";

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="px-3 py-1 bg-line rounded-full text-xs font-semibold">
    {children}
  </span>
);

const PublishingProjectDetail = ({
  item,
}: {
  item: publishingPracticeItem;
}) => {
  const hasLink = Boolean(item.link);

  return (
    <details className="group border border-line rounded-2xl p-6 open:shadow-md transition bg-white">
      <summary className="flex justify-between items-center cursor-pointer list-none">
        <div className="min-w-0">
          <h4 className="text-lg font-semibold truncate">{item.title}</h4>
          <p className="text-sm  mt-1">{item.subtitle}</p>

          <div className="flex flex-wrap gap-2 mt-3">
            {item.tags.map((t) => (
              <Pill key={t}>{t}</Pill>
            ))}
          </div>
        </div>

        <span className="transition group-open:rotate-180 text-base-secondary">
          ▼
        </span>
      </summary>

      <div className="mt-6 grid grid-cols-2 gap-6 text-sm leading-relaxed">
        <div>
          <h5 className="font-semibold mb-2">{item.leftTitle}</h5>
          <ul className="list-inside space-y-1 text-base-secondary">
            {item.leftList.map((v, idx) => (
              <li key={idx}>- {v}</li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-2">{item.rightTitle}</h5>
          <ul className="list-inside space-y-1 text-base-secondary">
            {item.rightList.map((v, idx) => (
              <li key={idx}>- {v}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        {hasLink ? (
          <Button
            text="View Project"
            onClick={() => {
              window.open(item.link!, "_blank");
            }}
          />
        ) : (
          <></>
        )}
      </div>
    </details>
  );
};

export default PublishingProjectDetail;
