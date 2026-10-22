"use client";

import { useEffect, useRef, type PointerEvent } from "react";

/** Pointer values stay in CSS so moving the mouse does not re-render React. */
export function usePointerParallax<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const animationFrame = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (animationFrame.current !== null)
        cancelAnimationFrame(animationFrame.current);
    },
    [],
  );

  function onPointerMove(event: PointerEvent<T>) {
    if (
      event.pointerType !== "mouse" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;

    if (animationFrame.current !== null)
      cancelAnimationFrame(animationFrame.current);
    animationFrame.current = requestAnimationFrame(() => {
      const element = ref.current;
      if (!element) return;
      element.style.setProperty("--pointer-x", `${(x - 0.5) * 24}px`);
      element.style.setProperty("--pointer-y", `${(y - 0.5) * 24}px`);
      element.style.setProperty("--tilt-x", `${(0.5 - y) * 12}deg`);
      element.style.setProperty("--tilt-y", `${(x - 0.5) * 12}deg`);
      element.style.setProperty("--spotlight-x", `${x * 100}%`);
      element.style.setProperty("--spotlight-y", `${y * 100}%`);
    });
  }

  function onPointerLeave() {
    if (animationFrame.current !== null)
      cancelAnimationFrame(animationFrame.current);
    const element = ref.current;
    if (!element) return;
    for (const property of [
      "--pointer-x",
      "--pointer-y",
      "--tilt-x",
      "--tilt-y",
      "--spotlight-x",
      "--spotlight-y",
    ]) {
      element.style.removeProperty(property);
    }
  }

  return { ref, onPointerMove, onPointerLeave };
}
