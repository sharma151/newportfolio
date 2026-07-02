"use client";

import { useGSAP } from "@gsap/react";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  FileWarning,
  Minus,
  Plus,
  RotateCcw,
} from "lucide-react";
import dynamic from "next/dynamic";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/portfolioData";
import { gsap, registerScrollTrigger } from "@/hooks/useScrollTrigger";

const ResumePdfViewer = dynamic(
  () =>
    import("@/components/sections/ResumePdfViewer").then(
      (mod) => mod.ResumePdfViewer
    ),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[600px] items-center justify-center" role="status">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-accent border-t-transparent" />
        <span className="sr-only">Loading resume...</span>
      </div>
    ),
  }
);

const MIN_ZOOM = 0.5;
const MAX_ZOOM = 2;
const ZOOM_STEP = 0.25;

export function ResumeViewer() {
  const sectionRef = useRef<HTMLElement>(null);
  const toolbarRef = useRef<HTMLDivElement>(null);
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) {
        setScale(0.55);
      } else if (window.innerWidth < 768) {
        setScale(0.8);
      }
    }
  }, []);

  useGSAP(
    () => {
      registerScrollTrigger();

      gsap.fromTo(
        toolbarRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
      );
    },
    { scope: sectionRef }
  );

  const onDocumentLoadSuccess = useCallback(
    ({ numPages: pages }: { numPages: number }) => {
      setNumPages(pages);
      setIsLoading(false);
      setHasError(false);
    },
    []
  );

  const onDocumentLoadError = useCallback(() => {
    setIsLoading(false);
    setHasError(true);
  }, []);

  const resumeFilename = siteConfig.resumeUrl.split("/").pop() ?? "resume.pdf";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = siteConfig.resumeUrl;
    link.download = resumeFilename;
    link.click();
  };

  return (
    <section
      ref={sectionRef}
      className="px-6 pb-24 pt-32 lg:px-8 lg:pb-32 lg:pt-36"
      aria-labelledby="resume-heading"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Resume
          </p>
          <h1
            id="resume-heading"
            className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl"
          >
            {siteConfig.name}
          </h1>
          <p className="mt-2 text-muted-foreground">{siteConfig.title}</p>
        </div>

        {/* <div
          ref={toolbarRef}
          className="sticky top-32 z-40 mb-6 flex flex-wrap items-center justify-center gap-4 rounded-2xl border border-border bg-card/90 p-4 backdrop-blur-xl sm:justify-between md:top-24"
          role="toolbar"
          aria-label="Resume controls"
        >
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setPageNumber((p) => Math.max(p - 1, 1))}
              disabled={pageNumber <= 1 || hasError}
              aria-label="Previous page"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="min-w-[80px] text-center text-sm text-muted-foreground">
              {isLoading || hasError ? "—" : `${pageNumber} / ${numPages}`}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setPageNumber((p) => Math.min(p + 1, numPages))}
              disabled={pageNumber >= numPages || hasError}
              aria-label="Next page"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setScale((s) => Math.max(s - ZOOM_STEP, MIN_ZOOM))}
              disabled={scale <= MIN_ZOOM || hasError}
              aria-label="Zoom out"
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="min-w-[50px] text-center text-sm text-muted-foreground">
              {Math.round(scale * 100)}%
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setScale((s) => Math.min(s + ZOOM_STEP, MAX_ZOOM))}
              disabled={scale >= MAX_ZOOM || hasError}
              aria-label="Zoom in"
            >
              <Plus className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setScale(1)}
              disabled={hasError}
              aria-label="Reset zoom"
            >
              <RotateCcw className="h-4 w-4" />
            </Button>
          </div>

          <Button size="sm" onClick={handleDownload} data-cursor="interactive">
            <Download className="h-4 w-4" aria-hidden="true" />
            Download PDF
          </Button>
        </div> */}
        <div
          ref={toolbarRef}
          className="sticky top-24 z-40 mb-6 flex flex-nowrap items-center justify-between gap-1 rounded-2xl border border-border bg-card/90 px-2 py-3 backdrop-blur-xl sm:gap-4 sm:p-4 md:top-24"
          role="toolbar"
          aria-label="Resume controls"
        >
          {/* Page Navigation */}
          <div className="flex items-center gap-0.5 sm:gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
              onClick={() => setPageNumber((p) => Math.max(p - 1, 1))}
              disabled={pageNumber <= 1 || hasError}
              aria-label="Previous page"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="min-w-[45px] text-center text-xs text-muted-foreground sm:min-w-[80px] sm:text-sm">
              {isLoading || hasError ? "—" : `${pageNumber} / ${numPages}`}
            </span>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
              onClick={() => setPageNumber((p) => Math.min(p + 1, numPages))}
              disabled={pageNumber >= numPages || hasError}
              aria-label="Next page"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Zoom Controls */}
          <div className="flex items-center gap-0.5 sm:gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
              onClick={() => setScale((s) => Math.max(s - ZOOM_STEP, MIN_ZOOM))}
              disabled={scale <= MIN_ZOOM || hasError}
              aria-label="Zoom out"
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="min-w-[40px] text-center text-xs text-muted-foreground sm:min-w-[50px] sm:text-sm">
              {Math.round(scale * 100)}%
            </span>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
              onClick={() => setScale((s) => Math.min(s + ZOOM_STEP, MAX_ZOOM))}
              disabled={scale >= MAX_ZOOM || hasError}
              aria-label="Zoom in"
            >
              <Plus className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
              onClick={() => setScale(1)}
              disabled={hasError}
              aria-label="Reset zoom"
            >
              <RotateCcw className="h-4 w-4" />
            </Button>
          </div>

          {/* Download Button */}
          <Button
            size="sm"
            className="h-8 px-2 sm:px-3"
            onClick={handleDownload}
            data-cursor="interactive"
          >
            <Download className="h-4 w-4 sm:mr-2" aria-hidden="true" />
            <span className="hidden sm:inline">Download PDF</span>
          </Button>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <div className="flex min-h-[600px] items-start justify-center overflow-auto p-8">
            {hasError ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <FileWarning
                  className="h-12 w-12 text-muted-foreground"
                  aria-hidden="true"
                />
                <p className="mt-4 text-lg font-medium text-foreground">
                  Unable to preview resume
                </p>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  Place your PDF at{" "}
                  <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
                    public{siteConfig.resumeUrl}
                  </code>{" "}
                  or download directly below.
                </p>
                <Button className="mt-6" onClick={handleDownload}>
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download Resume
                </Button>
              </div>
            ) : (
              <ResumePdfViewer
                file={siteConfig.resumeUrl}
                pageNumber={pageNumber}
                scale={scale}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onDocumentLoadError}
              />
            )}
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          <a
            href={siteConfig.resumeUrl}
            download={resumeFilename}
            className="rounded-full border p-4 text-accent hover:underline"
            data-cursor="interactive"
          >
            Download resume directly
          </a>
        </p>
      </div>
    </section>
  );
}
