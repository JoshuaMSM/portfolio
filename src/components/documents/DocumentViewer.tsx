"use client";

import { useEffect, useState } from "react";
import { FileText, Maximize2, X } from "lucide-react";

type DocumentType = "resume" | "cover-letter";

type DocumentDetails = {
  title: string;
  src: string;
};

const documents: Record<DocumentType, DocumentDetails> = {
  resume: {
    title: "Resume",
    src: "/documents/Joshua_Resume.pdf",
  },
  "cover-letter": {
    title: "Cover Letter",
    src: "/documents/Joshua_Cover_Letter.pdf",
  },
};

type DocumentOpenEvent = CustomEvent<DocumentType>;

export default function DocumentViewer() {
  const [activeDocument, setActiveDocument] =
    useState<DocumentType | null>(null);

  useEffect(() => {
    const handleOpen = (event: Event) => {
      const customEvent = event as DocumentOpenEvent;

      if (customEvent.detail) {
        setActiveDocument(customEvent.detail);
      }
    };

    window.addEventListener("open-portfolio-document", handleOpen);

    return () => {
      window.removeEventListener("open-portfolio-document", handleOpen);
    };
  }, []);

  useEffect(() => {
    if (!activeDocument) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Allow Escape to close
      if (event.key === "Escape") {
        setActiveDocument(null);
        return;
      }

      // Block common save / print shortcuts
      if (
        (event.metaKey || event.ctrlKey) &&
        ["s", "p", "u"].includes(event.key.toLowerCase())
      ) {
        event.preventDefault();
      }
    };

    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, [activeDocument]);

  if (!activeDocument) {
    return null;
  }

  const documentInfo = documents[activeDocument];

  return (
    <div className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-md">
      {/* Cinematic background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-red-950/10 blur-3xl" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(100,15,25,0.12),transparent_60%)]" />
      </div>

      {/* Header */}
      <header className="absolute left-0 right-0 top-0 z-30 flex h-16 items-center justify-between border-b border-white/10 bg-[#080808]/90 px-5 backdrop-blur-xl md:px-8">
        {/* Title */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-red-500/20 bg-red-600/10">
            <FileText size={17} className="text-red-500" />
          </div>

          <div>
            <p className="text-sm font-semibold text-white">
              {documentInfo.title}
            </p>

            <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
              View Only
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Fullscreen */}
          <button
            type="button"
            onClick={() => {
              if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen?.();
              } else {
                document.exitFullscreen?.();
              }
            }}
            className="
              flex h-9 w-9 items-center justify-center rounded-lg
              border border-white/10 bg-white/[0.03]
              text-white/50 transition-all duration-300
              hover:border-white/20 hover:bg-white/10
              hover:text-white
            "
            aria-label="Fullscreen"
          >
            <Maximize2 size={16} />
          </button>

          {/* Close */}
          <button
            type="button"
            onClick={() => setActiveDocument(null)}
            className="
              flex h-9 w-9 items-center justify-center rounded-lg
              border border-white/10 bg-white/[0.03]
              text-white/50 transition-all duration-300
              hover:border-red-500/50
              hover:bg-red-500/10
              hover:text-white
            "
            aria-label="Close document"
          >
            <X size={18} />
          </button>
        </div>
      </header>

      {/* PDF */}
      <div
        className="relative h-full w-full pt-16"
        onContextMenu={(event) => event.preventDefault()}
      >
        <iframe
          src={`${documentInfo.src}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`}
          title={documentInfo.title}
          className="h-full w-full border-0"
        />
      </div>
    </div>
  );
}