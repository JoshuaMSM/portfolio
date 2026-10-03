"use client";

import { useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Code2,
  Cloud,
  Database,
  GitBranch,
  Layers3,
  Radio,
} from "lucide-react";

import {
  coreEngineeringSkills,
  cloudAndDataSkills,
  platformEngineeringSkills,
  SkillCategory,
} from "@/src/data/skills";

const iconMap = {
  code: Code2,
  backend: Layers3,
  cloud: Cloud,
  database: Database,
  devops: GitBranch,
  observability: Radio,
};

const skillImages = [
  "/images/languages.png",
  "/images/backend.png",
  "/images/cloud.png",
  "/images/database.png",
  "/images/devops.png",
  "/images/messaging.png",
];

export default function SkillsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const skills: SkillCategory[] = [
    ...coreEngineeringSkills,
    ...cloudAndDataSkills,
    ...platformEngineeringSkills,
  ];

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
      id="skills"
      className="relative mt-10 scroll-mt-24"
    >
      {/* Section heading */}
      <div className="mb-6 flex items-end justify-between">
        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-red-500">
            Skills
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
            Engineering Stack
          </h2>
        </div>

        {/* Desktop controls */}
        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Scroll skills left"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Scroll skills right"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Horizontal skills row */}
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
          {skills.map((skill, index) => {
            const Icon = iconMap[skill.icon];
            const backgroundImage = skillImages[index];

            return (
              <article
                key={skill.id}
                className="
                  group
                  relative
                  flex
                  min-h-[250px]
                  w-[300px]
                  min-w-[300px]
                  snap-start
                  flex-shrink-0
                  flex-col
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
                  md:w-[330px]
                  md:min-w-[330px]
                  lg:w-[350px]
                  lg:min-w-[350px]
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

                {/* =====================================================
                    READABILITY GRADIENT
                    Keeps the artwork visible while making text readable.
                    ===================================================== */}
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

                {/* Additional subtle side vignette */}
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
                    Everything sits above the artwork.
                    ===================================================== */}
                <div className="relative z-10 flex h-full flex-col">
                  {/* Icon + number */}
                  <div className="mb-5 flex items-center justify-between">
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
                      <Icon size={22} strokeWidth={1.8} />
                    </div>

                    <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/45">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Category */}
                  <div>
                    <p className="mb-1 text-xs uppercase tracking-wider text-white/55 drop-shadow-md">
                      {skill.subtitle}
                    </p>

                    <h3 className="text-xl font-semibold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                      {skill.title}
                    </h3>
                  </div>

                  {/* Technologies */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {skill.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="
                          rounded-md
                          border
                          border-white/10
                          bg-black/45
                          px-2.5
                          py-1.5
                          text-xs
                          text-white/80
                          shadow-sm
                          backdrop-blur-md
                          transition-all
                          duration-300
                          group-hover:border-white/20
                          group-hover:bg-black/55
                          group-hover:text-white
                        "
                      >
                        {technology}
                      </span>
                    ))}
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