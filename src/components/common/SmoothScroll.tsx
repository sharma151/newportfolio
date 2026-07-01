"use client";

import { useScrollTriggerRefresh } from "@/hooks/useScrollTrigger";

interface SmoothScrollProps {
  children: React.ReactNode;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  useScrollTriggerRefresh();

  return <>{children}</>;
}
