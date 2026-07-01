"use client";

import { useEffect, useState } from "react";
import type { DocumentProps, PageProps } from "react-pdf";

interface ResumePdfViewerProps {
  file: string;
  pageNumber: number;
  scale: number;
  onLoadSuccess: (data: { numPages: number }) => void;
  onLoadError: () => void;
}

type PdfModule = {
  Document: React.ComponentType<DocumentProps>;
  Page: React.ComponentType<PageProps>;
};

export function ResumePdfViewer({
  file,
  pageNumber,
  scale,
  onLoadSuccess,
  onLoadError,
}: ResumePdfViewerProps) {
  const [pdfModule, setPdfModule] = useState<PdfModule | null>(null);
  const [workerError, setWorkerError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function initPdf() {
      try {
        const mod = await import("react-pdf");
        const { pdfjs } = mod;

        pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

        if (!cancelled) {
          setPdfModule({ Document: mod.Document, Page: mod.Page });
        }
      } catch {
        if (!cancelled) {
          setWorkerError(true);
        }
      }
    }

    void initPdf();

    return () => {
      cancelled = true;
    };
  }, []);

  if (workerError) {
    return (
      <iframe
        src={`${file}#toolbar=0&navpanes=0`}
        title="Resume PDF"
        className="h-[800px] w-full rounded-xl border border-border"
      />
    );
  }

  if (!pdfModule) {
    return (
      <div className="flex h-[600px] items-center justify-center" role="status">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-accent border-t-transparent" />
        <span className="sr-only">Initializing PDF viewer...</span>
      </div>
    );
  }

  const { Document, Page } = pdfModule;

  return (
    <Document
      file={file}
      onLoadSuccess={onLoadSuccess}
      onLoadError={() => {
        setWorkerError(true);
        onLoadError();
      }}
      loading={null}
      className="flex justify-center"
    >
      <Page
        pageNumber={pageNumber}
        scale={scale}
        className="shadow-2xl"
        renderTextLayer={false}
        renderAnnotationLayer={false}
      />
    </Document>
  );
}
