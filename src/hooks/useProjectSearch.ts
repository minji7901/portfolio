"use client";

import { useState } from "react";
import { workProjects } from "@/data/projects";
import type { ProjectFilter } from "@/types/portfolio";
export function useProjectSearch() {
  const [filter, setFilter] = useState<ProjectFilter>("all");
  const [query, setQuery] = useState("");
  const searchTerm = query.toLowerCase();
  const projects = workProjects.filter((project) => {
    const matchesCategory = filter === "all" || project.category === filter;
    const searchText = [project.title, ...project.stack]
      .join(" ")
      .toLowerCase();
    return matchesCategory && searchText.includes(searchTerm);
  });
  return { filter, setFilter, query, setQuery, projects };
}
export type ProjectSearch = ReturnType<typeof useProjectSearch>;
