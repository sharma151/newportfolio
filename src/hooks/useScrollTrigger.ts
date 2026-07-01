"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

let scrollTriggerRegistered = false;

function registerScrollTrigger(): void {
  if (!scrollTriggerRegistered && typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    scrollTriggerRegistered = true;
  }
}

export function useScrollTriggerRefresh(): void {
  const pathname = usePathname();

  useEffect(() => {
    registerScrollTrigger();
    const timeout = window.setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [pathname]);
}

export function useScrollTriggerCleanup(scope: React.RefObject<HTMLElement | null>): void {
  useGSAP(
    () => {
      registerScrollTrigger();
    },
    { scope, dependencies: [] }
  );

  useEffect(() => {
    const element = scope.current;
    return () => {
      if (!element) return;
      ScrollTrigger.getAll().forEach((trigger) => {
        if (element.contains(trigger.trigger as Node)) {
          trigger.kill();
        }
      });
    };
  }, [scope]);
}

export { gsap, ScrollTrigger, registerScrollTrigger };
