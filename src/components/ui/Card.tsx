import { type HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-cursor={hover ? "interactive" : undefined}
        className={cn(
          "rounded-2xl border border-border bg-card p-6 text-card-foreground",
          "transition-all duration-500 ease-premium",
          hover &&
            "hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
