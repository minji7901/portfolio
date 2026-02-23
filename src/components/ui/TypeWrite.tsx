"use client";
import { useEffect, useState } from "react";

interface Props {
  text: string;
  className?: string;
}

const TypeWrite = ({ text, className }: Props) => {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= text.length) return;

    const timeout = setTimeout(
      () => {
        setDisplayed((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      },
      Math.random() * 50 + 40,
    );

    return () => clearTimeout(timeout);
  }, [index, text]);

  return (
    <span className="whitespace-pre-line">
      {displayed}
      <span className="animate-pulse ml-1">|</span>
    </span>
  );
};

export default TypeWrite;
