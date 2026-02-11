import type { StaticImageData } from "next/image";

export type publishingPracticeItem = {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  leftTitle: string;
  leftList: string[];
  rightTitle: string;
  rightList: string[];
  link?: string;
};

export type collabProjectItem = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  image: StaticImageData;
};
