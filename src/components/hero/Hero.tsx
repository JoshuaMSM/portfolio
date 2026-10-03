"use client";

import { Play, Plus, BriefcaseBusiness, Code2, Cloud, Brain } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "@/src/data/Portfolio";
import { Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[760px] overflow-hidden bg-black">
      {/* =====================================================
          HERO BACKGROUND
      ====================================================== */}

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
            backgroundImage: "url('/images/hero.jpg')",
            backgroundPosition: "65% center",
        }}
        />

      {/* Right-side image visibility */}
      <div className="absolute inset-0" />

      {/* Strong left gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-black/5" />

      {/* Top gradient - blends into navbar */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/90 to-transparent" />

      {/* Bottom gradient - blends hero into rows */}
      <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#080808] via-[#080808]/80 to-transparent" />

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto flex min-h-[760px] w-full items-center px-6 pb-20 pt-28 lg:px-10 2xl:px-14">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="max-w-[650px]"
        >
          {/* Role */}
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-gray-300 md:text-sm">
            {profile.title}
          </p>

          {/* Name */}
          <h1 className="text-6xl font-black leading-[0.9] tracking-[-0.04em] text-white sm:text-7xl md:text-8xl">
            {profile.name}
          </h1>

          {/* Tagline */}
          <p className="mt-7 max-w-xl text-base leading-7 text-gray-200 sm:text-lg md:text-xl">
            {profile.tagline}
          </p>

          {/* Contact */}
<div className="mt-5 flex flex-wrap items-center gap-3">
  {/* Email + LinkedIn */}
</div>

          {/* =================================================
              METADATA
          ================================================== */}

          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3 text-sm text-gray-200">
            <MetaItem
              icon={<BriefcaseBusiness size={15} />}
              text={profile.experience}
            />

            <span className="hidden text-gray-500 sm:block">|</span>

            <MetaItem
              icon={<Code2 size={15} />}
              text="Java"
            />

            <span className="hidden text-gray-500 sm:block">|</span>

            <MetaItem
              icon={<Cloud size={15} />}
              text="AWS"
            />

            <span className="hidden text-gray-500 sm:block">|</span>

            <MetaItem
              icon={<Brain size={15} />}
              text="AI / ML"
            />
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3">
  {/* Email */}
  <a
    href="mailto:joshuamuthumsm@gmail.com"
    className="
      group inline-flex items-center gap-2 rounded-lg
      border border-white/10 bg-black/30
      px-4 py-2.5 text-sm text-white/70
      backdrop-blur-md
      transition-all duration-300
      hover:border-red-500/50
      hover:bg-red-500/10
      hover:text-white
    "
  >
    <Mail
      size={16}
      className="
        text-red-500
        transition-transform duration-300
        group-hover:scale-110
      "
    />

    <span>joshuamuthumsm@gmail.com</span>
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/joshua-s-5b9854109/"
    target="_blank"
    rel="noopener noreferrer"
    className="
      group inline-flex items-center gap-2 rounded-lg
      border border-white/10 bg-black/30
      px-4 py-2.5 text-sm text-white/70
      backdrop-blur-md
      transition-all duration-300
      hover:border-red-500/50
      hover:bg-red-500/10
      hover:text-white
    "
  >
    <svg
      viewBox="0 0 24 24"
      className="
        h-4 w-4 text-red-500
        transition-transform duration-300
        group-hover:scale-110
      "
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.54 20.45H7.1V9H3.54v11.45Z" />
    </svg>

    <span>LinkedIn</span>
  </a>
</div>

          {/* =================================================
              CTA
          ================================================== */}

          <div className="mt-8 flex flex-wrap gap-3">
            <motion.a
                href="#experience"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 rounded bg-white px-6 py-3 text-sm font-bold text-black shadow-lg transition hover:bg-gray-200 md:text-base"
                >
                <Play size={18} fill="currentColor" />
                Explore My Journey
                </motion.a>

            <motion.a
                href="#projects"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 rounded bg-gray-500/70 px-6 py-3 text-sm font-bold text-white backdrop-blur-md transition hover:bg-gray-500/90 md:text-base"
                >
                <Plus size={20} />
                My Projects
                </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
   METADATA ITEM
============================================================ */

function MetaItem({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <span className="flex items-center gap-1.5 whitespace-nowrap">
      {icon}
      {text}
    </span>
  );
}