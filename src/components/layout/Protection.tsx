"use client";

import { useEffect, useState } from "react";

type ProtectionMessage = "right-click" | "image-drag" | null;

export default function Protection() {
  const [message, setMessage] = useState<ProtectionMessage>(null);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const showMessage = (type: ProtectionMessage) => {
      setMessage(type);

      clearTimeout(timeout);

      timeout = setTimeout(() => {
        setMessage(null);
      }, 2000);
    };

    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
      showMessage("right-click");
    };

    const handleDragStart = (event: DragEvent) => {
      const target = event.target as HTMLElement | null;

      if (target?.tagName === "IMG") {
        event.preventDefault();
        showMessage("image-drag");
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("dragstart", handleDragStart);

    return () => {
      clearTimeout(timeout);
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("dragstart", handleDragStart);
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed bottom-8 left-1/2 z-[999] -translate-x-1/2 transition-all duration-300 ${
        message
          ? "translate-y-0 scale-100 opacity-100"
          : "translate-y-3 scale-95 opacity-0"
      }`}
      aria-live="polite"
    >
      <div className="flex items-center gap-3 rounded-full border border-white/10 bg-[#0b0809]/90 px-5 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl">
        <div className="flex h-7 w-7 items-center justify-center rounded-full border border-red-500/25 bg-red-600/10 text-sm">
          🔒
        </div>

        <p className="whitespace-nowrap text-sm font-medium text-white/80">
          {message === "right-click"
            ? "Right-click is disabled"
            : "Image dragging is disabled"}
        </p>
      </div>
    </div>
  );
}