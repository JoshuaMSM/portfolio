"use client";

import { ArrowUp, Mail } from "lucide-react";

function openDocument(type: "resume" | "cover-letter") {
  window.dispatchEvent(
    new CustomEvent("open-portfolio-document", {
      detail: type,
    })
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      id="contact"
      className="relative mt-24 w-full overflow-hidden border-t border-white/10"
    >
      {/* =========================================================
          CINEMATIC BACKGROUND
      ========================================================== */}

      <div className="absolute inset-0 bg-[#060405]" />

      <div
        className="absolute left-1/2 top-[-220px] h-[650px] w-[1000px] -translate-x-1/2 rounded-full bg-red-700/20 blur-[150px]"
        aria-hidden="true"
      />

      <div
        className="absolute left-1/2 top-[180px] h-[450px] w-[700px] -translate-x-1/2 rounded-full bg-red-950/35 blur-[130px]"
        aria-hidden="true"
      />

      <div
        className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-red-950/35 blur-[130px]"
        aria-hidden="true"
      />

      <div
        className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-red-950/35 blur-[130px]"
        aria-hidden="true"
      />

      <div
        className="absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-red-500/40 to-transparent"
        aria-hidden="true"
      />

      {/* =========================================================
          MAIN FOOTER
      ========================================================== */}

      <div className="relative w-full px-6 pb-7 pt-20 lg:px-10 lg:pt-24 2xl:px-14">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1.5fr)_minmax(360px,0.7fr)] lg:gap-20">
          {/* =====================================================
              LEFT — MAIN CTA
          ====================================================== */}

          <div className="max-w-5xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.4em] text-red-500">
              Let&apos;s connect
            </p>

            <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              LET&apos;S BUILD
              <br />
              <span className="text-white/90">SOMETHING GREAT.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/55 md:text-lg md:leading-8">
              Open to conversations around backend engineering,
              cloud architecture, modernization and AI-powered
              systems.
            </p>

            {/* Contact buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:joshuamuthumsm@gmail.com"
                className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.05] px-6 py-3.5 text-sm font-semibold text-white/75 backdrop-blur-md transition-all duration-300 hover:border-red-500/40 hover:bg-red-600/10 hover:text-white hover:shadow-[0_0_35px_rgba(220,38,38,0.18)]"
              >
                <Mail
                  size={17}
                  className="text-red-500 transition-transform duration-300 group-hover:scale-110"
                />

                Email Me
              </a>

              <a
                href="https://www.linkedin.com/in/joshua-s-5b9854109/"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.05] px-6 py-3.5 text-sm font-semibold text-white/75 backdrop-blur-md transition-all duration-300 hover:border-red-500/40 hover:bg-red-600/10 hover:text-white hover:shadow-[0_0_35px_rgba(220,38,38,0.18)]"
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="text-red-500 transition-transform duration-300 group-hover:scale-110"
                >
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.54 20.45H7.1V9H3.54v11.45Z" />
                </svg>

                LinkedIn
              </a>
            </div>
          </div>

          {/* =====================================================
              RIGHT — BRAND + NAVIGATION
          ====================================================== */}

          <div className="flex flex-col justify-end lg:pb-1">
            {/* Brand */}
            <div>
              <div className="text-2xl font-black tracking-tight text-red-600">
                JOSHUA
              </div>

              <p className="mt-2 text-sm font-medium text-white/70">
                Senior Backend Engineer • Technical Lead
              </p>

              <p className="mt-2 text-xs tracking-wide text-white/35">
                Java • Cloud • Distributed Systems • AI/ML
              </p>
            </div>

            {/* Navigation */}
            <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-4 text-sm text-white/45 sm:grid-cols-3 lg:grid-cols-2">
              <button
                type="button"
                onClick={() => openDocument("resume")}
                className="text-left transition-colors duration-300 hover:text-white"
              >
                Resume
              </button>

              <button
                type="button"
                onClick={() => openDocument("cover-letter")}
                className="text-left transition-colors duration-300 hover:text-white"
              >
                Cover Letter
              </button>

              <a
                href="mailto:joshuamuthumsm@gmail.com"
                className="transition-colors duration-300 hover:text-white"
              >
                Email
              </a>

              <a
                href="https://www.linkedin.com/in/joshua-s-5b9854109/"
                target="_blank"
                rel="noreferrer"
                className="transition-colors duration-300 hover:text-white"
              >
                LinkedIn
              </a>

              <button
                type="button"
                onClick={scrollToTop}
                className="group inline-flex items-center gap-2 text-left transition-colors duration-300 hover:text-white"
              >
                Back to top

                <ArrowUp
                  size={14}
                  className="transition-transform duration-300 group-hover:-translate-y-1"
                />
              </button>
            </div>
          </div>
        </div>

        {/* =========================================================
            BOTTOM BAR
        ========================================================== */}

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-5 text-[11px] text-white/25 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} Joshua Israel Muthu S. All rights reserved.
          </p>

          <p className="uppercase tracking-[0.18em]">
            Designed • Engineered • Built by Joshua
          </p>
        </div>
      </div>
    </footer>
  );
}