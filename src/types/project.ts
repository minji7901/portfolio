import type { StaticImageData } from "next/image";

export type PublishingProject = {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  leftList: string[];
  rightList: string[];
  link?: string;
  image?: StaticImageData;
};

export type CollabProject = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  image: StaticImageData;
};

export type WorkProject = {
  id: string;
  category: "publishing" | "collab";
  title: string;
  subtitle?: string;
  type: "단독" | "협업";
  domain: string;
  roleLine: string;
  troubleshooting?: string;
  stack: string[];
  bullets?: string[];
  contributions: string[];
  link?: string;
  github?: string;
  image?: StaticImageData;
};
