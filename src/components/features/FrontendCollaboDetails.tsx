import Image from "next/image";
import type { collabProjectItem } from "@/types/project";
import Button from "@/components/ui/Button";

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
      <div className="mb-5">
        <p className="break-keep text-sm ">
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
