"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  useGSAP(
    () => {
      if (isTouchDevice) return;

      const cursor = cursorRef.current;
      const ring = ringRef.current;
      if (!cursor || !ring) return;

      const onMouseMove = (e: MouseEvent) => {
        gsap.to(cursor, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.1,
          ease: "power2.out",
        });
        gsap.to(ring, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.35,
          ease: "power2.out",
        });
      };

      const onMouseEnterInteractive = () => {
        gsap.to(ring, {
          scale: 2,
          borderColor: "rgb(var(--accent))",
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(cursor, {
          scale: 0.5,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const onMouseLeaveInteractive = () => {
        gsap.to(ring, {
          scale: 1,
          borderColor: "rgb(var(--foreground) / 0.3)",
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(cursor, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      window.addEventListener("mousemove", onMouseMove);

      const interactiveElements = document.querySelectorAll(
        '[data-cursor="interactive"], a, button, [role="button"]'
      );

      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", onMouseEnterInteractive);
        el.addEventListener("mouseleave", onMouseLeaveInteractive);
      });

      const observer = new MutationObserver(() => {
        const newElements = document.querySelectorAll(
          '[data-cursor="interactive"], a, button, [role="button"]'
        );
        newElements.forEach((el) => {
          el.removeEventListener("mouseenter", onMouseEnterInteractive);
          el.removeEventListener("mouseleave", onMouseLeaveInteractive);
          el.addEventListener("mouseenter", onMouseEnterInteractive);
          el.addEventListener("mouseleave", onMouseLeaveInteractive);
        });
      });

      observer.observe(document.body, { childList: true, subtree: true });

      return () => {
        window.removeEventListener("mousemove", onMouseMove);
        interactiveElements.forEach((el) => {
          el.removeEventListener("mouseenter", onMouseEnterInteractive);
          el.removeEventListener("mouseleave", onMouseLeaveInteractive);
        });
        observer.disconnect();
      };
    },
    { dependencies: [isTouchDevice] }
  );

  if (isTouchDevice) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground mix-blend-difference"
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground/30"
        aria-hidden="true"
      />
    </>
  );
}
