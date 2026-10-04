"use client";

import { Globe2, ArrowUpRight } from "lucide-react";

export default function GlobalOpportunities() {
  return (
    <section
      id="global-opportunities"
      className="relative mb-10 overflow-hidden rounded-2xl border border-white/10 bg-black/30 backdrop-blur-md"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-red-950/30 blur-3xl" />

        <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-red-900/10 blur-3xl" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(127,29,29,0.12),transparent_65%)]" />
      </div>

      <div className="relative flex flex-col gap-8 px-6 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-9">
        {/* Main positioning */}
        <div className="max-w-3xl">
          <div className="mb-3 flex items-center gap-2">
            <Globe2 className="h-4 w-4 text-red-400" />

            <span className="text-[10px] font-semibold tracking-[0.3em] text-red-400/90 uppercase">
              Global Opportunities
            </span>
          </div>

          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Open to building globally.
          </h2>

          <p className="mt-3 text-sm leading-6 text-white/55 sm:text-base">
            Applied AI • Cloud Full-Stack • Technical Leadership
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "Java",
              "Distributed Systems",
              "Cloud",
              "Modernization",
              "AI / ML",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-medium text-white/65"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Availability */}
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.7)]" />

            <span className="text-xs font-medium text-white/70">
              Open to Global Roles
            </span>
          </div>

          <div className="flex flex-wrap gap-2 sm:justify-end">
            <span className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] tracking-wide text-white/45">
              Remote
            </span>

            <span className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] tracking-wide text-white/45">
              Relocation
            </span>

            <span className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] tracking-wide text-white/45">
              India-based
            </span>
          </div>

          <a
            href="#contact"
            className="group mt-1 inline-flex items-center gap-2 self-start text-xs font-semibold text-white transition-colors hover:text-red-400 lg:self-end"
          >
            Let's connect

            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>

      {/* Cinematic accent */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
    </section>
  );
}