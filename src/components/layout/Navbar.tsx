"use client";

import { User, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  //{ label: "Architecture", href: "#architecture" },
  { label: "Skills", href: "#skills-section" },
  { label: "Certifications", href: "#certifications" },
  { label: "About", href: "#about" },
];

function openDocument(type: "resume" | "cover-letter") {
  window.dispatchEvent(
    new CustomEvent("open-portfolio-document", {
      detail: type,
    })
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const profileRef = useRef<HTMLDivElement>(null);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const closeProfile = () => {
    setProfileOpen(false);
  };

  /* =========================================================
     CLOSE PROFILE WHEN CLICKING OUTSIDE
  ========================================================== */

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  /* =========================================================
     CLOSE PROFILE WITH ESCAPE
  ========================================================== */

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setProfileOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  /* =========================================================
     PROFILE ACTIONS
  ========================================================== */

  const handleViewProfile = () => {
    setProfileOpen(false);
    setMenuOpen(false);

    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleContact = () => {
    setProfileOpen(false);
    setMenuOpen(false);

    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50">
      {/* =====================================================
          NAVBAR BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/45 to-transparent" />

      {/* =====================================================
          NAVBAR CONTENT
      ====================================================== */}

      <div className="relative flex h-20 w-full items-center px-6 lg:px-10 2xl:px-14">
        {/* =====================================================
            LOGO
        ====================================================== */}

        <a
          href="#home"
          onClick={() => {
            closeMenu();
            closeProfile();
          }}
          className="shrink-0 text-xl font-black tracking-tight text-red-600 transition-opacity duration-300 hover:opacity-80"
        >
          JOSHUA
        </a>

        {/* =====================================================
            DESKTOP NAVIGATION
        ====================================================== */}

        <div className="ml-auto hidden items-center gap-6 xl:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={closeProfile}
              className="whitespace-nowrap text-sm font-medium text-white/70 transition-colors duration-300 hover:text-white"
            >
              {item.label}
            </a>
          ))}

          {/* =================================================
              RESUME
          ================================================== */}

          <button
            type="button"
            onClick={() => openDocument("resume")}
            className="whitespace-nowrap text-sm font-semibold text-white/80 transition-colors duration-300 hover:text-white"
          >
            Resume
          </button>

          {/* =================================================
              COVER LETTER
          ================================================== */}

          <button
            type="button"
            onClick={() => openDocument("cover-letter")}
            className="whitespace-nowrap text-sm font-semibold text-white/80 transition-colors duration-300 hover:text-white"
          >
            Cover Letter
          </button>

          {/* =================================================
              PROFILE
          ================================================== */}

          <div ref={profileRef} className="relative ml-1">
            <button
              type="button"
              onClick={() => setProfileOpen((open) => !open)}
              className={`flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border transition-all duration-300 ${
                profileOpen
                  ? "border-red-500/70 bg-red-500/15 text-white shadow-[0_0_25px_rgba(220,38,38,0.25)]"
                  : "border-white/20 bg-white/10 text-white/65 hover:border-red-500/50 hover:bg-red-500/10 hover:text-white"
              }`}
              aria-label="Open profile"
              aria-expanded={profileOpen}
            >
              {profileOpen ? <X size={17} /> : <User size={17} />}
            </button>

            {/* =================================================
                DESKTOP PROFILE CARD
            ================================================== */}

            <div
              className={`absolute right-0 top-[calc(100%+14px)] w-[350px] origin-top-right transition-all duration-300 ${
                profileOpen
                  ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                  : "pointer-events-none -translate-y-2 scale-95 opacity-0"
              }`}
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#080607]/95 shadow-[0_25px_80px_rgba(0,0,0,0.65)] backdrop-blur-2xl">
                {/* CARD ATMOSPHERE */}

                <div
                  className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-red-700/20 blur-[90px]"
                  aria-hidden="true"
                />

                <div
                  className="pointer-events-none absolute -bottom-32 -left-20 h-56 w-56 rounded-full bg-red-950/30 blur-[80px]"
                  aria-hidden="true"
                />

                {/* PROFILE HEADER */}

                <div className="relative border-b border-white/10 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-red-500/30 bg-gradient-to-br from-red-600/20 to-red-950/30 text-lg font-black tracking-tight text-red-500 shadow-[0_0_30px_rgba(220,38,38,0.12)]">
                      JS
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-lg font-bold tracking-tight text-white">
                        JOSHUA
                      </h3>

                      <p className="mt-0.5 text-sm text-white/45">
                        Israel Muthu S
                      </p>

                      <p className="mt-2 text-xs font-medium text-white/65">
                        Senior Backend Engineer
                      </p>

                      <p className="text-xs text-white/40">
                        Technical Lead
                      </p>
                    </div>
                  </div>
                </div>

                {/* QUICK STATS */}

                <div className="relative grid grid-cols-3 border-b border-white/10">
                  <div className="border-r border-white/10 px-4 py-4 text-center">
                    <p className="text-base font-bold text-white">7+</p>

                    <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/35">
                      Years
                    </p>
                  </div>

                  <div className="border-r border-white/10 px-4 py-4 text-center">
                    <p className="text-base font-bold text-white">Java</p>

                    <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/35">
                      Backend
                    </p>
                  </div>

                  <div className="px-4 py-4 text-center">
                    <p className="text-base font-bold text-white">AI/ML</p>

                    <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/35">
                      Focus
                    </p>
                  </div>
                </div>

                {/* CURRENT FOCUS */}

                <div className="relative p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-red-500">
                    Current Focus
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      "Cloud Architecture",
                      "Enterprise Modernization",
                      "AI Systems",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] text-white/60"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* EDUCATION */}

                  <div className="mt-6 border-t border-white/10 pt-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/35">
                      Education
                    </p>

                    <p className="mt-2 text-sm font-medium text-white/75">
                      M.Tech AI / ML
                    </p>

                    <p className="mt-1 text-xs text-white/40">
                      BITS Pilani • WILP
                    </p>
                  </div>

                  {/* ACTIONS */}

                  <div className="mt-6 grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={handleViewProfile}
                      className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2.5 text-xs font-semibold text-white/70 transition-all duration-300 hover:border-red-500/40 hover:bg-red-600/10 hover:text-white"
                    >
                      View Profile
                    </button>

                    <button
                      type="button"
                      onClick={handleContact}
                      className="rounded-lg border border-red-500/30 bg-red-600/10 px-4 py-2.5 text-xs font-semibold text-red-400 transition-all duration-300 hover:border-red-500/60 hover:bg-red-600/20 hover:text-red-300"
                    >
                      Contact Me
                    </button>
                  </div>
                </div>

                {/* BOTTOM ACCENT */}

                <div className="h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            MOBILE MENU BUTTON
        ====================================================== */}

        <button
          type="button"
          onClick={() => {
            setMenuOpen((open) => !open);
            setProfileOpen(false);
          }}
          className="ml-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition-all duration-300 hover:border-red-500/30 hover:bg-red-600/10 hover:text-white xl:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-px w-full bg-current transition-transform duration-300 ${
                menuOpen ? "translate-y-[4px] rotate-45" : ""
              }`}
            />

            <span
              className={`h-px w-full bg-current transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />

            <span
              className={`h-px w-full bg-current transition-transform duration-300 ${
                menuOpen ? "-translate-y-[4px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* =========================================================
          MOBILE NAVIGATION
      ========================================================== */}

      <div
        className={`absolute left-0 right-0 top-20 overflow-hidden border-t border-white/10 bg-[#080607]/95 backdrop-blur-xl transition-all duration-300 xl:hidden ${
          menuOpen
            ? "max-h-[1000px] overflow-y-auto opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="w-full px-6 py-5 lg:px-10 2xl:px-14">
          <div className="flex flex-col">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="border-b border-white/5 py-4 text-sm font-medium text-white/70 transition-colors duration-300 hover:text-white"
              >
                {item.label}
              </a>
            ))}

            {/* RESUME */}

            <button
              type="button"
              onClick={() => {
                openDocument("resume");
                closeMenu();
              }}
              className="border-b border-white/5 py-4 text-left text-sm font-semibold text-white/80 transition-colors duration-300 hover:text-white"
            >
              Resume
            </button>

            {/* COVER LETTER */}

            <button
              type="button"
              onClick={() => {
                openDocument("cover-letter");
                closeMenu();
              }}
              className="border-b border-white/5 py-4 text-left text-sm font-semibold text-white/80 transition-colors duration-300 hover:text-white"
            >
              Cover Letter
            </button>

            {/* =================================================
                MOBILE PROFILE TOGGLE
            ================================================== */}

            <button
              type="button"
              onClick={() => setProfileOpen((open) => !open)}
              className="flex items-center justify-between border-b border-white/5 py-4 text-left text-sm font-semibold text-white/70 transition-colors duration-300 hover:text-white"
              aria-expanded={profileOpen}
            >
              <span className="flex items-center gap-3">
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 ${
                    profileOpen
                      ? "border-red-500/50 bg-red-500/10 text-white"
                      : "border-white/20 bg-white/10 text-white/70"
                  }`}
                >
                  {profileOpen ? <X size={15} /> : <User size={15} />}
                </span>

                Profile
              </span>

              <span
                className={`text-xs text-white/30 transition-transform duration-300 ${
                  profileOpen ? "rotate-180" : ""
                }`}
              >
                ↓
              </span>
            </button>

            {/* =================================================
                MOBILE PROFILE CARD
            ================================================== */}

            <div
              className={`overflow-hidden transition-all duration-300 ${
                profileOpen
                  ? "max-h-[650px] py-4 opacity-100"
                  : "pointer-events-none max-h-0 py-0 opacity-0"
              }`}
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#080607]/90 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                {/* ATMOSPHERE */}

                <div
                  className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-red-700/20 blur-[70px]"
                  aria-hidden="true"
                />

                <div
                  className="pointer-events-none absolute -bottom-24 -left-16 h-44 w-44 rounded-full bg-red-950/30 blur-[70px]"
                  aria-hidden="true"
                />

                {/* HEADER */}

                <div className="relative border-b border-white/10 p-5">
                  <div className="flex items-start gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-red-500/30 bg-gradient-to-br from-red-600/20 to-red-950/30 text-base font-black tracking-tight text-red-500">
                      JS
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-base font-bold tracking-tight text-white">
                        JOSHUA
                      </h3>

                      <p className="mt-0.5 text-xs text-white/45">
                        Israel Muthu S
                      </p>

                      <p className="mt-2 text-[11px] font-medium text-white/65">
                        Senior Backend Engineer
                      </p>

                      <p className="text-[11px] text-white/40">
                        Technical Lead
                      </p>
                    </div>
                  </div>
                </div>

                {/* STATS */}

                <div className="relative grid grid-cols-3 border-b border-white/10">
                  <div className="border-r border-white/10 px-3 py-3 text-center">
                    <p className="text-sm font-bold text-white">7+</p>

                    <p className="mt-1 text-[8px] uppercase tracking-[0.14em] text-white/35">
                      Years
                    </p>
                  </div>

                  <div className="border-r border-white/10 px-3 py-3 text-center">
                    <p className="text-sm font-bold text-white">Java</p>

                    <p className="mt-1 text-[8px] uppercase tracking-[0.14em] text-white/35">
                      Backend
                    </p>
                  </div>

                  <div className="px-3 py-3 text-center">
                    <p className="text-sm font-bold text-white">AI/ML</p>

                    <p className="mt-1 text-[8px] uppercase tracking-[0.14em] text-white/35">
                      Focus
                    </p>
                  </div>
                </div>

                {/* DETAILS */}

                <div className="relative p-5">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-red-500">
                    Current Focus
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {[
                      "Cloud Architecture",
                      "Enterprise Modernization",
                      "AI Systems",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-[10px] text-white/60"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* EDUCATION */}

                  <div className="mt-5 border-t border-white/10 pt-4">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/35">
                      Education
                    </p>

                    <p className="mt-2 text-xs font-medium text-white/75">
                      M.Tech AI / ML
                    </p>

                    <p className="mt-1 text-[10px] text-white/40">
                      BITS Pilani • WILP
                    </p>
                  </div>

                  {/* ACTIONS */}

                  <div className="mt-5 grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={handleViewProfile}
                      className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2.5 text-[10px] font-semibold text-white/70 transition-all duration-300 hover:border-red-500/40 hover:bg-red-600/10 hover:text-white"
                    >
                      View Profile
                    </button>

                    <button
                      type="button"
                      onClick={handleContact}
                      className="rounded-lg border border-red-500/30 bg-red-600/10 px-3 py-2.5 text-[10px] font-semibold text-red-400 transition-all duration-300 hover:border-red-500/60 hover:bg-red-600/20 hover:text-red-300"
                    >
                      Contact Me
                    </button>
                  </div>
                </div>

                {/* ACCENT */}

                <div className="h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}