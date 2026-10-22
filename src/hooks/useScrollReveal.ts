"use client";

import { useEffect, useRef } from "react";

const REVEAL_TARGETS = [
  ".hero-stats > div",
  ".home-next",
  ".work-row",
  ".career-list article",
  ".process-list article",
  ".project-detail-grid > div",
].join(",");

export function useScrollReveal(contentKey: string) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root || !("IntersectionObserver" in window)) return;

    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer: IntersectionObserver | null = null;

    function updateReveals() {
      observer?.disconnect();
      const elements = Array.from(
        root!.querySelectorAll<HTMLElement>(REVEAL_TARGETS),
      );
      if (preference.matches) {
        elements.forEach((element) =>
          element.classList.remove("scroll-reveal", "is-revealed"),
        );
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-revealed");
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -12px 0px" },
      );

      elements.forEach((element, index) => {
        element.classList.add("scroll-reveal");
        element.style.setProperty("--reveal-delay", `${(index % 3) * 55}ms`);
        observer!.observe(element);
      });
    }

    updateReveals();
    preference.addEventListener("change", updateReveals);
    return () => {
      observer?.disconnect();
      preference.removeEventListener("change", updateReveals);
      root.querySelectorAll<HTMLElement>(REVEAL_TARGETS).forEach((element) => {
        element.classList.remove("scroll-reveal", "is-revealed");
        element.style.removeProperty("--reveal-delay");
      });
    };
  }, [contentKey]);

  return ref;
}
