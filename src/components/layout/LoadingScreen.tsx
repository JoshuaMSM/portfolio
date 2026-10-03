"use client";

import { useEffect, useState } from "react";

type LoadingPhase = "logo" | "name" | "exit";

const name = "JOSHUA";

export default function LoadingScreen() {
  const [phase, setPhase] = useState<LoadingPhase>("logo");
  const [visibleLetters, setVisibleLetters] = useState(0);

  useEffect(() => {
    // Lock scrolling while the intro is active
    document.body.style.overflow = "hidden";

    const logoTimer = window.setTimeout(() => {
      setPhase("name");
    }, 2000);

    return () => {
      window.clearTimeout(logoTimer);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (phase !== "name") return;

    let current = 0;

    const letterTimer = window.setInterval(() => {
      current += 1;
      setVisibleLetters(current);

      if (current >= name.length) {
        window.clearInterval(letterTimer);

        // Give the full JOSHUA animation a moment before exiting
        window.setTimeout(() => {
          setPhase("exit");
        }, 650);
      }
    }, 140);

    return () => {
      window.clearInterval(letterTimer);
    };
  }, [phase]);

  useEffect(() => {
    if (phase !== "exit") return;

    // IMPORTANT:
    // Release page scrolling as soon as the loading screen starts exiting.
    document.body.style.overflow = "";

    const exitTimer = window.setTimeout(() => {
      // Ensure scrolling is definitely restored
      document.body.style.overflow = "";
    }, 750);

    return () => {
      window.clearTimeout(exitTimer);
      document.body.style.overflow = "";
    };
  }, [phase]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505] transition-opacity duration-700 ${
        phase === "exit"
          ? "pointer-events-none opacity-0"
          : "opacity-100"
      }`}
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-700/10 blur-[120px]" />

        <div className="absolute bottom-0 left-1/2 h-px w-[60%] -translate-x-1/2 bg-gradient-to-r from-transparent via-red-600/60 to-transparent" />
      </div>

      {/* Loading content */}
      <div className="relative z-10 flex flex-col items-center">
        {phase === "logo" && (
          <div className="animate-pulse">
            <img
              src="/favicon.svg"
              alt="Joshua"
              className="h-24 w-24 object-contain drop-shadow-[0_0_35px_rgba(220,38,38,0.45)]"
            />
          </div>
        )}

        {(phase === "name" || phase === "exit") && (
          <div className="flex items-center">
            {name.split("").map((letter, index) => (
              <span
                key={`${letter}-${index}`}
                  className={`font-sans text-5xl font-black tracking-[0.28em] text-red-600 drop-shadow-[0_0_25px_rgba(220,38,38,0.35)] transition-all duration-300 md:text-7xl ${
                  index < visibleLetters
                    ? "translate-y-0 opacity-100"
                    : "translate-y-3 opacity-0"
                }`}
              >
                {letter}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}