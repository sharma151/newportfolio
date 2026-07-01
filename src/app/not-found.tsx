import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
        404
      </p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight">Page Not Found</h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link href="/" className="mt-8" data-cursor="interactive">
        <Button>Back to Home</Button>
      </Link>
    </div>
  );
}
