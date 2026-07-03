"use client";

import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  TwitterIcon,
  InstagramIcon,
} from "@/components/ui/SocialIcons";
import { siteConfig, socialLinks } from "@/data/portfolioData";
import { gsap, registerScrollTrigger } from "@/hooks/useScrollTrigger";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  Email: MailIcon,
  Twitter: TwitterIcon,
  Instagram: InstagramIcon,
};

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      registerScrollTrigger();
      const footer = footerRef.current;
      if (!footer) return;

      gsap.fromTo(
        footer.querySelectorAll("[data-footer-reveal]"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footer,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: footerRef }
  );

  return (
    <footer
      ref={footerRef}
      className="border-t border-border bg-background"
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-0">
        <div className="grid gap-12 px-0 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          <div data-footer-reveal>
            <Link
              href="/"
              data-cursor="interactive"
              className="text-2xl font-semibold tracking-tight"
              aria-label="Home"
            >
              {siteConfig.name}
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {siteConfig.tagline}
            </p>
          </div>

          <div data-footer-reveal>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3" role="list">
              {["Home", "About", "Projects", "Resume"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    data-cursor="interactive"
                    className="group flex items-center gap-1 text-sm text-foreground transition-colors hover:text-accent"
                  >
                    {item}
                    <ArrowUpRight
                      className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div data-footer-reveal>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Connect
            </h3>
            <ul className="mt-4 flex flex-wrap gap-3" role="list">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.name];
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target={link.name !== "Email" ? "_blank" : undefined}
                      rel={
                        link.name !== "Email"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      data-cursor="interactive"
                      aria-label={link.label}
                      className={cn(
                        "flex h-11 w-11 items-center justify-center rounded-full",
                        "border border-border bg-card text-muted-foreground",
                        "transition-all duration-300 hover:border-accent hover:text-accent hover:shadow-lg hover:shadow-accent/10"
                      )}
                    >
                      {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div
          data-footer-reveal
          className="mt-16 flex flex-col items-center justify-center gap-4 border-t border-border pt-8 sm:flex-row"
        >
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          {/* <p className="text-xs text-muted-foreground">
            Crafted with precision in {siteConfig.location}
          </p> */}
        </div>
      </div>
    </footer>
  );
}
