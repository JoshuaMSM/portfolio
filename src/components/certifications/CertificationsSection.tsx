"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, Award } from "lucide-react";

import { certifications } from "@/src/data/certifications";

const certificationImages = [
  "/images/ai-architect.png",
  "/images/ai-developer.png",
  "/images/modernization.png",
  "/images/product-engineering.png",
];

export default function CertificationsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const amount = direction === "left" ? -700 : 700;

    scrollRef.current.scrollBy({
      left: amount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="certifications"
      className="relative mt-12 scroll-mt-24"
    >
      {/* Section heading */}
      <div className="mb-6 flex items-end justify-between">
        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-red-500">
            Certifications
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
            Learning & Credentials
          </h2>
        </div>

        {/* Desktop controls */}
        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Scroll certifications left"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Scroll certifications right"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Horizontal certification row */}
      <div className="relative pt-2">
        <div
          ref={scrollRef}
          className="
            scrollbar-hide
            flex
            gap-4
            overflow-x-auto
            overflow-y-hidden
            scroll-smooth
            snap-x
            snap-mandatory
            pb-4
            pr-8
          "
        >
          {certifications.map((certification, index) => {
            const backgroundImage = certificationImages[index];

            return (
              <article
                key={certification.id}
                className="
                  group
                  relative
                  flex
                  h-[250px]
                  w-[350px]
                  min-w-[350px]
                  snap-start
                  flex-shrink-0
                  flex-col
                  justify-between
                  overflow-hidden
                  rounded-xl
                  border
                  border-white/10
                  bg-[#111111]
                  p-5
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-red-500/60
                  hover:shadow-[0_0_30px_rgba(229,9,20,0.16)]
                "
              >
                {/* =====================================================
                    FULL CARD CINEMATIC ARTWORK
                    ===================================================== */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-cover
                    bg-center
                    opacity-100
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-105
                  "
                  style={{
                    backgroundImage: `url("${backgroundImage}")`,
                  }}
                />

                {/* Readability gradient */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/95
                    via-black/45
                    to-black/10
                  "
                />

                {/* Subtle side vignette */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-black/25
                    via-transparent
                    to-black/20
                  "
                />

                {/* Red cinematic hover glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-48
                    w-48
                    rounded-full
                    bg-red-600/15
                    opacity-0
                    blur-3xl
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* Hover grid atmosphere */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                >
                  <div
                    className="
                      absolute
                      inset-0
                      bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)]
                      bg-[size:28px_28px]
                    "
                  />
                </div>

                {/* =====================================================
                    CARD CONTENT
                    ===================================================== */}
                <div className="relative z-10 flex items-start justify-between">
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-white/10
                      bg-black/45
                      text-red-500
                      shadow-lg
                      backdrop-blur-md
                      transition-all
                      duration-300
                      group-hover:border-red-500/30
                      group-hover:bg-red-500/10
                    "
                  >
                    <Award size={22} strokeWidth={1.8} />
                  </div>

                  <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/45">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Certification information */}
                <div className="relative z-10">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-red-400 drop-shadow-md">
                    {certification.category}
                  </p>

                  <h3 className="max-w-[310px] text-xl font-semibold leading-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                    {certification.title}
                  </h3>

                  <div className="mt-3 flex items-center gap-2">
                    <span className="text-sm font-medium text-white/80 drop-shadow-md">
                      {certification.issuer}
                    </span>

                    <span className="h-1 w-1 rounded-full bg-white/40" />

                    <span className="text-xs text-white/50">
                      Certification
                    </span>
                  </div>
                </div>

                {/* Bottom red accent */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    bottom-0
                    left-0
                    z-20
                    h-[2px]
                    w-0
                    bg-red-600
                    shadow-[0_0_12px_rgba(229,9,20,0.6)]
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </article>
            );
          })}

          <div className="min-w-[40px]" />
        </div>

        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-20 bg-gradient-to-l from-black to-transparent md:block" />
      </div>
    </section>
  );
}