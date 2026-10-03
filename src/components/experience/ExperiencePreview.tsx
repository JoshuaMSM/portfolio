"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness } from "lucide-react";

const experiences = [
  {
    period: "2025 — PRESENT",
    company: "IBM CONSULTING",
    role: "Senior Application Developer / Technical Lead",
    client: "AMEX",
    description:
      "Working across cloud data engineering, enterprise application modernization and CI/CD transformation. Contributing to technical design, automation and engineering solutions across large-scale enterprise environments.",
    technologies: [
      "Java",
      "Python",
      "GCP",
      "Airflow",
      "CI/CD",
      "GitHub Actions",
    ],
    current: true,
  },
  {
    period: "2022 — 2025",
    company: "GAVS TECHNOLOGIES",
    role: "Technical Lead",
    client: "Healthcare Technology",
    description:
      "Led backend engineering for a high-volume healthcare claims processing platform, focusing on scalable microservices, performance optimization and cloud-based infrastructure.",
    technologies: [
      "Java 17",
      "Spring Boot",
      "AWS",
      "PostgreSQL",
      "Redis",
      "Terraform",
    ],
  },
  {
    period: "EARLIER",
    company: "IBS SOFTWARE",
    role: "Senior Software Engineer",
    client: "Airline Technology",
    description:
      "Developed backend services for airline loyalty systems, working with microservices, event-driven messaging and database-backed application workflows.",
    technologies: [
      "Java",
      "Kafka",
      "PostgreSQL",
      "Microservices",
    ],
  },
];

export default function ExperiencePreview() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#050505] py-24 md:py-32"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-15%] top-[15%] h-[500px] w-[500px] rounded-full bg-red-600/[0.035] blur-[140px]" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-white/[0.02] blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-red-500" />

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-red-500">
              Career Journey
            </span>
          </div>

          <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
            7+ YEARS OF
            <span className="block text-white/45">
              BUILDING SOFTWARE
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/50 md:text-lg">
            From enterprise applications and healthcare platforms to cloud
            engineering, automation and modern distributed systems.
          </p>
        </motion.div>

        {/* Experience timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute bottom-0 left-[11px] top-0 w-px bg-gradient-to-b from-red-500/70 via-white/10 to-transparent md:left-[15px]" />

          <div className="space-y-14 md:space-y-20">
            {experiences.map((experience, index) => (
              <motion.article
                key={experience.company}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                }}
                className="relative pl-10 md:pl-16"
              >
                {/* Timeline node */}
                <div
                  className={`absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border ${
                    experience.current
                      ? "border-red-500/70 bg-red-500/10"
                      : "border-white/15 bg-[#050505]"
                  }`}
                >
                  <span
                    className={`h-2 w-2 rounded-full ${
                      experience.current ? "bg-red-500" : "bg-white/30"
                    }`}
                  />
                </div>

                {/* Period */}
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="text-xs font-medium tracking-[0.2em] text-white/35">
                    {experience.period}
                  </span>

                  {experience.current && (
                    <span className="rounded-full border border-red-500/25 bg-red-500/[0.08] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-red-400">
                      Current
                    </span>
                  )}
                </div>

                {/* Main experience block */}
                <div className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 transition-all duration-500 hover:border-white/[0.14] hover:bg-white/[0.04] md:p-8">
                  {/* Hover glow */}
                  <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-red-500/[0.06] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative">
                    {/* Company + role */}
                    <div className="flex flex-col justify-between gap-6 md:flex-row md:gap-10">
                      <div className="min-w-0">
                        <div className="mb-3 flex items-center gap-3">
                          <BriefcaseBusiness
                            size={17}
                            strokeWidth={1.7}
                            className="text-red-500"
                          />

                          <span className="text-xs uppercase tracking-[0.25em] text-white/35">
                            {experience.client}
                          </span>
                        </div>

                        <h3 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                          {experience.company}
                        </h3>

                        <p className="mt-2 text-base text-white/60 md:text-lg">
                          {experience.role}
                        </p>
                      </div>

                      <div className="flex shrink-0 items-start">
                        <ArrowUpRight
                          size={22}
                          strokeWidth={1.5}
                          className="text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-red-400"
                        />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mt-7 max-w-3xl text-sm leading-7 text-white/50 md:text-base">
                      {experience.description}
                    </p>

                    {/* Technologies */}
                    <div className="mt-7 flex flex-wrap gap-2">
                      {experience.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-white/[0.08] bg-black/20 px-3 py-1.5 text-[11px] font-medium text-white/45 transition-colors duration-300 group-hover:border-white/[0.12] group-hover:text-white/60"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mt-20 border-t border-white/[0.07] pt-10"
        >
          <p className="max-w-3xl text-xl font-medium leading-8 text-white/60 md:text-2xl md:leading-10">
            Growing from software engineering into technical leadership,
            with a focus on{" "}
            <span className="text-white">
              scalable systems, cloud architecture and emerging AI
              technologies.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}