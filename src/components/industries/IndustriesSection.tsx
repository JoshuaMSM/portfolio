"use client";

import {
  HeartPulse,
  Plane,
  Building2,
  Cloud,
  BrainCircuit,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useRef } from "react";

const industries = [
  {
    title: "Healthcare",
    subtitle: "Claims Processing & Healthcare Platforms",
    icon: HeartPulse,
    image: "/images/industries/healthcare.jpg",
  },
  {
    title: "Travel & Aviation",
    subtitle: "Airline Loyalty & Travel Systems",
    icon: Plane,
    image: "/images/industries/aviation.jpg",
  },
  {
    title: "Enterprise Technology",
    subtitle: "Cloud & Application Modernization",
    icon: Building2,
    image: "/images/industries/enterprise.jpg",
  },
  {
    title: "SaaS",
    subtitle: "Business & Enterprise Applications",
    icon: Cloud,
    image: "/images/industries/saas.jpg",
  },
  {
    title: "AI & Data",
    subtitle: "AI/ML, Data Engineering & Automation",
    icon: BrainCircuit,
    image: "/images/industries/ai-data.jpg",
  },
];

export default function IndustriesSection() {
  const rowRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    rowRef.current?.scrollBy({
      left: -340,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    rowRef.current?.scrollBy({
      left: 340,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="industries"
      className="scroll-mt-24 py-10"
    >
      {/* Heading */}
      <div className="mb-5 flex items-end justify-between">
        <div>
          <p className="mb-2 text-[10px] font-semibold tracking-[0.3em] text-red-400/80 uppercase">
            Industries
          </p>

          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Domain Expertise
          </h2>

          <p className="mt-2 text-sm text-white/40">
            Building platforms across products, industries and enterprise systems
          </p>
        </div>

        {/* Navigation arrows */}
        <div className="hidden items-center gap-2 sm:flex">
          <button
            type="button"
            onClick={scrollLeft}
            aria-label="Scroll industries left"
            className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white/60 backdrop-blur-md transition-all duration-300 hover:border-red-500/40 hover:bg-red-950/30 hover:text-white"
          >
            <ChevronLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
          </button>

          <button
            type="button"
            onClick={scrollRight}
            aria-label="Scroll industries right"
            className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white/60 backdrop-blur-md transition-all duration-300 hover:border-red-500/40 hover:bg-red-950/30 hover:text-white"
          >
            <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>

      {/* Horizontal cards */}
      <div
        ref={rowRef}
        className="scrollbar-hide flex gap-4 overflow-x-auto pb-4"
      >
        {industries.map((industry) => {
          const Icon = industry.icon;

          return (
            <article
              key={industry.title}
              className="
                group
                relative
                h-[190px]
                min-w-[280px]
                flex-shrink-0
                overflow-hidden
                rounded-xl
                border
                border-white/10
                bg-black
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-red-500/30
                hover:shadow-[0_15px_50px_rgba(0,0,0,0.45)]
                sm:h-[210px]
                sm:min-w-[320px]
              "
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url('${industry.image}')`,
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/10" />

              <div className="absolute inset-0 bg-gradient-to-br from-red-950/0 via-transparent to-red-900/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-black/50 backdrop-blur-sm">
                  <Icon className="h-4 w-4 text-red-400" />
                </div>

                <h3 className="text-lg font-semibold tracking-tight text-white">
                  {industry.title}
                </h3>

                <p className="mt-1 max-w-[250px] text-xs leading-5 text-white/55">
                  {industry.subtitle}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-red-500 transition-all duration-500 group-hover:w-full" />
            </article>
          );
        })}
      </div>
    </section>
  );
}