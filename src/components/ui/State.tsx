import React from "react";

type StateProps = {
  text: string;
  color: "green" | "pink";
};
const State = ({ text, color }: StateProps) => {
  return (
    <span
      className={`${color === "green" ? "bg-pastel-green" : "bg-pastel-pink"} text-base-primary rounded-full px-2  inline-block border-2 border-base-primary font-medium`}
    >
      ✶ {text}
    </span>
  );
};

export default State;
