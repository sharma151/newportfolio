import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen select-none flex-col items-center justify-center px-6 pb-24 pt-32 text-center lg:pb-32 lg:pt-36">
      {/* Unique Animated SVG Illustration */}
      <div className="relative w-full max-w-[320px] animate-fade-in md:max-w-[400px]">
        <svg
          viewBox="0 0 400 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-auto w-full drop-shadow-xl"
        >
          {/* Background Glow / Aura */}
          <circle
            cx="200"
            cy="150"
            r="100"
            fill="url(#glowGradient)"
            opacity="0.15"
            className="animate-pulse"
          />

          {/* Floating Floating Island Base */}
          <path
            d="M80 190 C 120 160, 280 160, 320 190 C 340 205, 300 230, 200 230 C 100 230, 60 205, 80 190 Z"
            fill="currentColor"
            className="text-muted/30"
          />
          <path
            d="M100 195 C 140 180, 260 180, 300 195 C 310 200, 250 215, 200 215 C 150 215, 90 200, 100 195 Z"
            fill="currentColor"
            className="text-muted/50"
          />

          {/* Abstract Geometric 404 Shapes */}
          {/* Left '4' */}
          <g className="animate-[bounce_4s_infinite_0.5s]">
            <path
              d="M90 150 V 90 L 60 130 H 110"
              stroke="url(#accentGradient)"
              strokeWidth="12"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>

          {/* Center Zero (Floating Portal/Orbit) */}
          <g className="animate-[bounce_4s_infinite]">
            <ellipse
              cx="200"
              cy="115"
              rx="35"
              ry="50"
              stroke="url(#accentGradient)"
              strokeWidth="12"
              strokeLinecap="round"
            />
            {/* Inner Floating Particle */}
            <circle
              cx="200"
              cy="115"
              r="8"
              fill="currentColor"
              className="animate-ping text-accent"
              style={{ animationDuration: "3s" }}
            />
          </g>

          {/* Right '4' */}
          <g className="animate-[bounce_4s_infinite_1s]">
            <path
              d="M310 150 V 90 L 280 130 H 330"
              stroke="url(#accentGradient)"
              strokeWidth="12"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>

          {/* Ground Shadows for the numbers */}
          <ellipse
            cx="95"
            cy="195"
            rx="15"
            ry="4"
            fill="currentColor"
            className="animate-[pulse_4s_infinite_0.5s] text-muted-foreground/20 opacity-60"
          />
          <ellipse
            cx="200"
            cy="200"
            rx="25"
            ry="6"
            fill="currentColor"
            className="animate-[pulse_4s_infinite] text-muted-foreground/20 opacity-60"
          />
          <ellipse
            cx="305"
            cy="195"
            rx="15"
            ry="4"
            fill="currentColor"
            className="animate-[pulse_4s_infinite_1s] text-muted-foreground/20 opacity-60"
          />

          {/* Sparkles / Stars */}
          <g className="text-accent/60">
            <path
              d="M 120 60 L 122 65 L 127 67 L 122 69 L 120 74 L 118 69 L 113 67 L 118 65 Z"
              fill="currentColor"
              className="animate-pulse"
            />
            <path
              d="M 280 50 L 281 53 L 284 54 L 281 55 L 280 58 L 279 55 L 276 54 L 279 53 Z"
              fill="currentColor"
              className="animate-ping"
              style={{ animationDuration: "2.5s" }}
            />
            <path
              d="M 140 110 L 141 112 L 143 113 L 141 114 L 140 116 L 139 114 L 137 113 L 139 112 Z"
              fill="currentColor"
              className="animate-pulse"
            />
          </g>

          {/* Gradients Definitions */}
          <defs>
            <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--accent)" />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
            </radialGradient>
            <linearGradient
              id="accentGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="var(--accent, #3b82f6)" />
              <stop
                offset="100%"
                stopColor="currentColor"
                className="text-muted-foreground"
              />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Text & Action Content */}
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
        Error 404
      </p>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        Page Not Found.
      </h1>
      <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
        The page you are looking for doesn&apos;t exist, has been moved, or is
        temporarily hiding in another dimension.
      </p>
      <div className="mt-5">
        <Link href="/" data-cursor="interactive">
          <Button size="lg" className="shadow-sm transition-all hover:shadow">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
