"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap, registerScrollTrigger } from "@/hooks/useScrollTrigger";

interface UseStaggerRevealOptions {
  stagger?: number;
  y?: number;
  start?: string;
}

export function useStaggerReveal<T extends HTMLElement>(
  options: UseStaggerRevealOptions = {}
): React.RefObject<T> {
  const { stagger = 0.1, y = 60, start = "top 85%" } = options;
  const containerRef = useRef<T>(null!);

  useGSAP(
    () => {
      registerScrollTrigger();
      const container = containerRef.current;
      if (!container) return;

      const items = container.querySelectorAll<HTMLElement>("[data-reveal]");

      gsap.fromTo(
        items,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start,
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return containerRef;
}
