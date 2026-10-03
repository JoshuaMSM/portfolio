"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-7 right-7 z-[100] flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white/60 shadow-[0_10px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl transition-all duration-300 hover:border-red-500/50 hover:bg-red-600/15 hover:text-white hover:shadow-[0_0_30px_rgba(220,38,38,0.25)] md:bottom-8 md:right-8 ${
        visible
          ? "translate-y-0 scale-100 opacity-100"
          : "pointer-events-none translate-y-4 scale-90 opacity-0"
      }`}
    >
      <ArrowUp
        size={19}
        strokeWidth={2}
        className="transition-transform duration-300 group-hover:-translate-y-0.5"
      />
    </button>
  );
}