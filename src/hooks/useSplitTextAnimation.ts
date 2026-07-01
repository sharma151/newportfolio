"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap, registerScrollTrigger } from "@/hooks/useScrollTrigger";

interface UseSplitTextAnimationOptions {
  stagger?: number;
  delay?: number;
  duration?: number;
}

export function useSplitTextAnimation(
  text: string,
  options: UseSplitTextAnimationOptions = {}
): {
  containerRef: React.RefObject<HTMLSpanElement>;
  chars: string[];
} {
  const { stagger = 0.03, delay = 0, duration = 0.8 } = options;
  const containerRef = useRef<HTMLSpanElement>(null!);
  const chars = text.split("");

  useGSAP(
    () => {
      registerScrollTrigger();
      const container = containerRef.current;
      if (!container) return;

      const charElements =
        container.querySelectorAll<HTMLElement>("[data-char]");

      gsap.fromTo(
        charElements,
        { opacity: 0, y: 40, rotateX: -90 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration,
          stagger,
          delay,
          ease: "power3.out",
        }
      );
    },
    { scope: containerRef, dependencies: [text] }
  );

  return { containerRef, chars };
}
