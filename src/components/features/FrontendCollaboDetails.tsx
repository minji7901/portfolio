import Image from "next/image";
import type { collabProjectItem } from "@/types/project";

const FrontendCollaboDetails = ({ item }: { item: collabProjectItem }) => {
  return (
    <div className="border border-line rounded-2xl p-5 text-center bg-white">
      <Image
        src={item.image}
        alt={item.title}
        className="mx-auto border border-line rounded-xl"
      />
      <strong className="block mt-5 text-lg ">{item.title}</strong>
      <p className="my-3 ">{item.description}</p>
      <div className="mb-7">
        <p className="break-keep text-sm">
          {item.tech.map((tag) => tag).join(", ")}
        </p>
      </div>
      <a
        href={item.github}
        className="px-5 py-2 rounded-full border border-base-secondary text-base-secondary text-sm font-semibold"
        target="_blank"
        rel="noopener noreferrer"
      >
        View GitHub
      </a>
    </div>
  );
};

export default FrontendCollaboDetails;
