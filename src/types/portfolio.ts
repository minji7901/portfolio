export type PortfolioPage = "welcome" | "about" | "works" | "process";
export type PortfolioFile = {
  id: PortfolioPage;
  file: string;
  label: string;
  ext: string;
};

export type ProjectFilter = "all" | "publishing" | "collab";
