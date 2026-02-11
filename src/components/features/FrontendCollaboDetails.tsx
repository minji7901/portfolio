import Link from "next/link";
import type { collabProjectItem } from "@/types/project";
import Button from "../ui/Button";

const FrontendCollaboDetails = ({ item }: { item: collabProjectItem }) => {
  return (
    <div className="border border-line rounded-2xl p-5 text-center">
      <img className="mx-auto" src={item.image.src} alt={item.title} />
      <strong className="block mt-5 text-lg text-base-secondary">
        {item.title}
      </strong>
      <p className="my-3 text-base-secondary">{item.description}</p>
      <div className="mb-5">
        <p className="break-keep text-sm text-base-secondary">
          {item.tech.map((tag) => tag).join(", ")}
        </p>
      </div>
      <Button
        text="View on GitHub"
        onClick={() => {
          window.open(item.github!, "_blank");
        }}
      />
    </div>
  );
};

export default FrontendCollaboDetails;
