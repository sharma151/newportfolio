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

    // Prevent browser from auto-restoring previous scroll position
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    // Force scroll to top on route change (instant, not smooth)
    const html = document.documentElement;
    const prevBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);

    // Also scroll after ScrollTrigger refresh, which can shift position
    const timeout = window.setTimeout(() => {
      ScrollTrigger.refresh();
      window.scrollTo(0, 0);
      html.style.scrollBehavior = prevBehavior;
    }, 100);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [pathname]);
}

export function useScrollTriggerCleanup(
  scope: React.RefObject<HTMLElement | null>
): void {
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
