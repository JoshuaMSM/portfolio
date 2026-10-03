"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import PortfolioCard from "./Portfoliocard";

type Item = {
  title: string;
  subtitle?: string;
  image: string;
  technologies?: string[];
  visual?: string;
  experienceId?: string;
  exploreId?: string;
};

type Props = {
  title: string;
  items: Item[];
  large?: boolean;
};

export default function ContentRow({
  title,
  items,
  large = false,
}: Props) {
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!rowRef.current) return;

    const viewportWidth = rowRef.current.clientWidth;

    // Scroll approximately one screen at a time.
    // This scales naturally across laptop, desktop and large displays.
    const amount = Math.max(
      viewportWidth * 0.8,
      large ? 700 : 500
    );

    rowRef.current.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="group/row relative mb-12 w-full">
      {/* Section header */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-white md:text-2xl">
          {title}
        </h2>

        <div className="flex gap-2 opacity-0 transition-opacity duration-200 group-hover/row:opacity-100">
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label={`Scroll ${title} left`}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label={`Scroll ${title} right`}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative w-full">
        {/* Left edge gradient */}
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-10 bg-gradient-to-r from-[#080808] to-transparent opacity-0 transition-opacity group-hover/row:opacity-100" />

        <div
          ref={rowRef}
          className="scrollbar-hide flex w-full gap-4 overflow-x-auto overflow-y-visible scroll-smooth py-5"
        >
          {items.map((item) => (
            <PortfolioCard
              key={item.title}
              {...item}
              large={large}
            />
          ))}
        </div>

        {/* Right edge gradient */}
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-16 bg-gradient-to-l from-[#080808] to-transparent" />
      </div>
    </section>
  );
}