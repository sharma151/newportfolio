"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useGSAP(
    () => {
      const nav = navRef.current;
      if (!nav) return;

      gsap.fromTo(
        nav,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2 }
      );
    },
    { scope: navRef }
  );

  const handleLinkHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const indicator = indicatorRef.current;
    const target = e.currentTarget;
    if (!indicator) return;

    const { offsetLeft, offsetWidth } = target;
    gsap.to(indicator, {
      x: offsetLeft,
      width: offsetWidth,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <header
      ref={navRef}
      className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl"
      role="banner"
    >
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          data-cursor="interactive"
          className="text-lg font-semibold tracking-tight text-foreground transition-opacity hover:opacity-70"
          aria-label="Home"
        >
          SS<span className="text-accent">.</span>
        </Link>

        <div className="relative hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              data-cursor="interactive"
              onMouseEnter={handleLinkHover}
              className={cn(
                "relative z-10 px-4 py-2 text-sm font-medium transition-colors duration-300",
                pathname === link.href
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
          <span
            ref={indicatorRef}
            className="absolute bottom-0 h-0.5 rounded-full bg-accent"
            style={{ width: 0 }}
            aria-hidden="true"
          />
        </div>

        <div className="flex items-center gap-3">
          {mounted && (
            <button
              type="button"
              data-cursor="interactive"
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-muted"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {resolvedTheme === "dark" ? (
                <Sun className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Moon className="h-4 w-4" aria-hidden="true" />
              )}
            </button>
          )}

          <Link
            href={`mailto:${siteConfig.email}`}
            data-cursor="interactive"
            className="hidden rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </nav>

      {/* Mobile nav */}
      <nav
        className="flex items-center justify-center gap-6 border-t border-border/50 py-3 md:hidden"
        aria-label="Mobile navigation"
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            data-cursor="interactive"
            className={cn(
              "text-xs font-medium transition-colors",
              pathname === link.href
                ? "text-foreground"
                : "text-muted-foreground"
            )}
            aria-current={pathname === link.href ? "page" : undefined}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
