"use client";

import { profile1 } from "@/src/data/profile";

const impactMetrics = [
  {
    value: profile1.getExperienceLabel(),
    label: "YEARS",
    description: "Engineering Experience",
  },
  {
    value: "100K+",
    label: "CLAIMS / DAY",
    description: "Healthcare Processing",
  },
  {
    value: "60%",
    label: "LATENCY",
    description: "Reduction Delivered",
  },
  {
    value: "400+",
    label: "REPOSITORIES",
    description: "CI/CD Migration",
  },
  {
    value: "10",
    label: "ENGINEERS",
    description: "Led & Mentored",
  },
];

export default function ImpactSection() {
  return (
    <section
      id="impact"
      className="relative mx-auto mt-8 mb-8 w-full overflow-hidden rounded-2xl border border-white/10 bg-black/30 backdrop-blur-md"
    >
      {/* Ambient cinematic glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-red-900/20 blur-3xl" />

        <div className="absolute right-[10%] top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-red-950/20 blur-3xl" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(127,29,29,0.10),transparent_70%)]" />
      </div>

      <div className="relative px-5 py-7 sm:px-8 sm:py-8 lg:px-10">
        {/* Heading */}
        <div className="mb-7">
          <p className="mb-2 text-[10px] font-semibold tracking-[0.35em] text-red-400/80 uppercase">
            Selected Impact
          </p>

          <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
            Engineering at scale
          </h2>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-y-7 sm:grid-cols-3 lg:grid-cols-5 lg:gap-0">
          {impactMetrics.map((metric, index) => (
            <div
              key={metric.label}
              className={`relative px-2 sm:px-4 lg:px-6 ${
                index > 0 ? "lg:border-l lg:border-white/10" : ""
              }`}
            >
              <div className="flex flex-col">
                <span className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[42px]">
                  {metric.value}
                </span>

                <span className="mt-1 text-[10px] font-bold tracking-[0.2em] text-red-400 uppercase">
                  {metric.label}
                </span>

                <span className="mt-1 text-xs text-white/40">
                  {metric.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom cinematic accent */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
    </section>
  );
}