"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BarChart3,
  Code2,
  Database,
  Layers3,
  GraduationCap,
  Mail,
  ExternalLink,
  Play,
  TrendingDown,
  UserRound,
  ServerCog,
  Workflow,
  X,
} from "lucide-react";
import Image from "next/image";
import { useState, type ReactNode } from "react";
import { Fragment } from "react";

type Props = {
  title: string;
  subtitle?: string;
  technologies?: string[];
  large?: boolean;
  visual?: string;
  image?: string;
  experienceId?: string;
  exploreId?: string;
};

type CaseStudy = {
  category: string;
  company: string;
  overview: string;
  role: string;
  scale?: string;
  impact?: string;
  architecture: string[];
  details: string[];
};

const caseStudies: Record<string, CaseStudy> = {
  healthcare: {
    category: "Healthcare",
    company: "GAVS",
    overview:
      "Backend microservices for a high-volume healthcare claims processing platform.",
    role: "Technical Lead",
    scale: "100K+ ANSI 835 claims / day",
    impact: "60% API latency reduction",
    architecture: [
      "Java 17",
      "Spring Boot",
      "PostgreSQL",
      "Redis",
      "AWS ECS / EC2",
      "Terraform",
    ],
    details: [
      "Designed backend microservices for high-volume claims processing.",
      "Introduced Redis caching for high-frequency read paths.",
      "Optimized PostgreSQL queries through indexing and query restructuring.",
      "Implemented database partitioning and archival automation.",
    ],
  },

  etl: {
    category: "Data Engineering",
    company: "IBM / AMEX",
    overview:
      "Cloud-based ETL and data orchestration workflows supporting reporting and analytics.",
    role: "Senior Application Developer / Technical Lead",
    scale: "Daily & monthly ETL workloads",
    architecture: [
      "Python",
      "Apache Airflow 2 / 3",
      "Cloud Composer",
      "Astronomer",
      "GCP",
      "BigQuery",
    ],
    details: [
      "Worked on Python-based ETL pipelines for reporting and analytics.",
      "Built and maintained Airflow DAGs across Airflow 2 and 3 environments.",
      "Worked with Apache Airflow through Cloud Composer and Astronomer.",
      "Worked with GCP and BigQuery as part of cloud data workflows.",
    ],
  },

  cicd: {
    category: "DevOps",
    company: "IBM / AMEX",
    overview:
      "Enterprise CI/CD modernization and repository migration automation.",
    role: "Technical Lead",
    scale: "400+ repositories",
    architecture: [
      "Python",
      "Jenkins",
      "GitHub Actions",
      "CI/CD",
      "Automation",
    ],
    details: [
      "Designed Python-based automation for CI/CD migration activities.",
      "Worked on migration of 400+ repositories from Jenkins to GitHub Actions.",
      "Standardized migration patterns across enterprise repositories.",
      "Reduced repetitive manual effort through automation.",
    ],
  },

  modernization: {
    category: "Application Modernization",
    company: "IBM / AMEX",
    overview:
      "Modernization of enterprise Java applications from JBoss to Apache Tomcat.",
    role: "Senior Application Developer / Technical Lead",
    architecture: [
      "Java",
      "JBoss",
      "Apache Tomcat",
      "Enterprise Applications",
    ],
    details: [
      "Worked on modernization of enterprise Java applications.",
      "Supported migration from JBoss to Apache Tomcat.",
      "Worked across application, infrastructure and release activities.",
      "Supported production migration and application compatibility efforts.",
    ],
  },

  airline: {
    category: "Travel & Aviation",
    company: "IBS Software",
    overview:
      "Backend services supporting airline loyalty capabilities and event-driven messaging.",
    role: "Senior Software Engineer",
    architecture: [
      "Java",
      "Kafka",
      "PostgreSQL",
      "Microservices",
    ],
    details: [
      "Developed backend services for airline loyalty systems.",
      "Worked with PostgreSQL procedures supporting application workflows.",
      "Worked with Kafka-based messaging and event-driven processing.",
      "Contributed to production performance and backend engineering activities.",
    ],
  },
};

type ExploreItem = {
  id: string;
  category: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  overview: string;
  icon: "about" | "education" | "awards" | "architecture" | "contact";
  highlights: string[];
  technologies?: string[];
};

const exploreItems: Record<string, ExploreItem> = {
  about: {
    id: "about",
    category: "Profile",
    eyebrow: "ABOUT ME",
    title: "From Code to Real-World Impact",
    subtitle: "Senior Backend Engineer • Technical Lead",
    overview:
      "Senior Backend Engineer and Technical Lead with 7+ years delivering enterprise backend platforms across Financial Services, Healthcare, Airline Loyalty, and SaaS.",
    icon: "about",
    highlights: [
      "Deep experience across Java 17, Spring Boot, microservices, PostgreSQL, Redis, Kafka and AWS.",
      "Hands-on work spanning cloud transformation, modernization, performance optimization and production engineering.",
      "Led and mentored engineering teams of up to 10 across architecture reviews, sprint planning and production operations.",
      "Currently building further depth in Python ETL workflows with Airflow and BigQuery.",
    ],
    technologies: [
      "Java 17",
      "Spring Boot",
      "Microservices",
      "AWS",
      "Python",
      "Airflow",
      "BigQuery",
    ],
  },
  education: {
    id: "education",
    category: "Education",
    eyebrow: "LEARNING",
    title: "Education & Continuous Learning",
    subtitle: "M.Tech AI & ML • B.E. Computer Science",
    overview:
      "Academic foundation combining Computer Science with ongoing postgraduate study in Artificial Intelligence and Machine Learning.",
    icon: "education",
    highlights: [
      "M.Tech (AI & ML), BITS Pilani — WILP, in progress.",
      "Bachelor of Engineering in Computer Science.",
      "Professional learning spans backend engineering, cloud platforms, distributed systems, data engineering and AI/ML.",
      "IBM certifications include Generative & Agentic AI Architect and Generative & Agentic AI Developer.",
    ],
    technologies: [
      "AI & ML",
      "Generative AI",
      "Distributed Systems",
      "Cloud",
      "Data Engineering",
    ],
  },
  awards: {
    id: "awards",
    category: "Recognition",
    eyebrow: "AWARDS & RECOGNITION",
    title: "Recognition Along the Journey",
    subtitle: "IBM • GAVS • Zoho • Wipro • IBS",
    overview:
      "Recognition received across different stages of the engineering journey and professional experience.",
    icon: "awards",
    highlights: [
      "IBM Quarterly Cash Award.",
      "GAVS Star Performer.",
      'Zoho "The Ideator" Award.',
      "Wipro Best Employee — received twice.",
      "IBS Quality Team Member Award.",
    ],
  },
  architecture: {
    id: "architecture",
    category: "Architecture",
    eyebrow: "ARCHITECTURE",
    title: "Systems, Scale & Modernization",
    subtitle: "Hands-on architecture across enterprise platforms",
    overview:
      "Architecture work grounded in backend engineering, distributed systems, cloud infrastructure, data workflows and enterprise modernization.",
    icon: "architecture",
    highlights: [
      "Designed Java/Spring Boot microservices for a healthcare platform processing approximately 100,000 ANSI 835 claims daily.",
      "Worked with AWS ECS and EC2, PostgreSQL, Redis and Terraform for cloud-native services.",
      "Worked on enterprise Java modernization from JBoss to Apache Tomcat.",
      "Designed Python automation supporting migration of approximately 400 repositories from Jenkins to GitHub Actions.",
      "Worked with Kafka-based messaging and Python/Airflow ETL pipelines using GCP and BigQuery.",
    ],
    technologies: [
      "Microservices",
      "Distributed Systems",
      "AWS",
      "CI/CD",
      "Kafka",
      "Airflow",
      "BigQuery",
    ],
  },
  contact: {
    id: "contact",
    category: "Contact",
    eyebrow: "LET'S CONNECT",
    title: "Have a Challenge Worth Solving?",
    subtitle: "Senior Backend Engineer • Technical Lead",
    overview:
      "For professional conversations, opportunities or technical discussions, you can reach me through email or LinkedIn.",
    icon: "contact",
    highlights: [
      "Email: joshuamuthumsm@gmail.com",
      "LinkedIn: linkedin.com/in/joshua-s-5b9854109",
      "Location: Chennai, India",
    ],
  },
};

type ExperienceCaseStudy = {
  company: string;
  role: string;
  period: string;
  subtitle: string;
  overview: string;
  highlights: string[];
  architecture: string[];
  award?: {
    title: string;
    detail?: string;
  };
};

const experienceCaseStudies: Record<string, ExperienceCaseStudy> = {
  ibm: {
    company: "IBM Consulting",
    role: "Senior Application Developer / Technical Lead",
    period: "Oct 2025 — Present",
    subtitle: "AMEX • Enterprise Modernization",
    overview:
      "Enterprise modernization and engineering leadership across application migration, CI/CD transformation and production delivery.",
    highlights: [
      "Led modernization initiatives migrating Java applications from JBoss to Apache Tomcat.",
      "Coordinated migration of approximately 400 repositories from Jenkins to GitHub Actions.",
      "Led a 10-member engineering team across planning, technical design, mentoring and production support.",
      "Partnered with development, QA, infrastructure and release teams for production migrations.",
    ],
    architecture: [
      "Java",
      "Python",
      "GCP",
      "Airflow",
      "Jenkins",
      "GitHub Actions",
    ],
    award: {
      title: "IBM Quarterly Cash Award",
    },
  },

  gavs: {
    company: "GAVS Technologies",
    role: "Technical Lead",
    period: "Aug 2023 — Oct 2025",
    subtitle: "Healthcare • Claims & Remittance",
    overview:
      "Technical leadership for a high-volume healthcare claims processing platform built around cloud-native Java microservices.",
    highlights: [
      "Designed backend microservices for a healthcare platform processing approximately 100K ANSI 835 claims daily.",
      "Built cloud-native services using Java 17, Spring Boot, PostgreSQL, Redis and AWS.",
      "Implemented PostgreSQL partitioning and archival automation.",
      "Led a six-member engineering team across development, standards and mentoring.",
    ],
    architecture: [
      "Java 17",
      "Spring Boot",
      "AWS",
      "PostgreSQL",
      "Redis",
      "Terraform",
    ],
    award: {
      title: "GAVS Star Performer",
    },
  },

  ibs: {
    company: "IBS Software",
    role: "Senior Software Engineer",
    period: "2022 — 2023",
    subtitle: "Airline Loyalty",
    overview:
      "Backend engineering for airline loyalty capabilities, including database workflows and event-driven messaging.",
    highlights: [
      "Developed backend services supporting airline loyalty capabilities.",
      "Worked with PostgreSQL procedures supporting application workflows.",
      "Improved messaging reliability through Kafka-based processing.",
      "Contributed to production performance tuning and backend engineering activities.",
    ],
    architecture: [
      "Java",
      "Kafka",
      "PostgreSQL",
      "Microservices",
      "Event Processing",
    ],
    award: {
      title: "IBS Quality Team Member Award",
    },
  },

  zoho: {
    company: "Zoho Corporation",
    role: "Member Technical Staff",
    period: "2021 — 2022",
    subtitle: "SaaS • Zoho Books",
    overview:
      "Backend engineering for customer-facing SaaS capabilities with a focus on API development and platform scalability.",
    highlights: [
      "Developed customer-facing APIs.",
      "Worked on backend services supporting SaaS workflows.",
      "Contributed to platform scalability and performance improvements.",
    ],
    architecture: [
      "Java",
      "REST APIs",
      "SaaS",
      "Backend",
    ],
    award: {
      title: 'Zoho "The Ideator" Award',
    },
  },

  wipro: {
    company: "Wipro",
    role: "Project Engineer",
    period: "2019 — 2021",
    subtitle: "Enterprise Applications",
    overview:
      "Backend engineering for mission-critical enterprise applications and secure API integrations.",
    highlights: [
      "Owned mission-critical enterprise applications.",
      "Developed OAuth2-secured APIs from scratch.",
      "Worked across backend development and enterprise application support.",
    ],
    architecture: [
      "Java",
      "REST APIs",
      "OAuth2",
      "Enterprise Applications",
    ],
    award: {
      title: "Wipro Best Employee",
      detail: "Received twice",
    },
  },
};

export default function PortfolioCard({
  title,
  subtitle,
  technologies = [],
  large = false,
  visual,
  image,
  experienceId,
  exploreId,
}: Props) {
    
  const [open, setOpen] = useState(false);

const study = visual ? caseStudies[visual] : undefined;
const experience = experienceId
  ? experienceCaseStudies[experienceId]
  : undefined;
const explore = exploreId ? exploreItems[exploreId] : undefined;

const interactive = Boolean(study || experience || explore);

  return (
    <>
      <motion.article
  role="button"
  tabIndex={0}
  onClick={() => interactive && setOpen(true)}
  onKeyDown={(event) => {
    if ((event.key === "Enter" || event.key === " ") && interactive) {
      event.preventDefault();
      setOpen(true);
    }
  }}
  whileHover={{
    scale: 1.025,
    y: -5,
  }}
  whileTap={{
    scale: 0.985,
  }}
  transition={{
    duration: 0.22,
    ease: "easeOut",
  }}
  className={`group/card relative shrink-0 cursor-pointer snap-start overflow-hidden rounded-xl bg-[#0d0d0d] outline-none transition-all duration-300 ${
    large ? "w-[350px] md:w-[390px]" : "w-[280px]"
  }`}
>

    {/* Red hover border */}
<div
  className="
    pointer-events-none
    absolute inset-0
    z-50
    rounded-xl
    border border-transparent
    transition-all duration-300
    group-hover/card:border-red-500/70
    group-hover/card:shadow-[inset_0_0_20px_rgba(239,68,68,0.10)]
  "
/>
        {/* =====================================================
            CINEMATIC ARTWORK
        ====================================================== */}

        <div className="relative aspect-[16/10] overflow-hidden">
          <motion.div
  className="absolute inset-0"
  initial={false}
  whileHover={{ scale: 1.035 }}
  transition={{
    duration: 0.5,
    ease: "easeOut",
  }}
>
  {image && (
    <Image
      src={image}
      alt=""
      fill
      sizes="(max-width: 768px) 280px, 390px"
      className="object-cover transition-transform duration-500 group-hover/card:scale-105"
    />
  )}
</motion.div>

          {/* Overall cinematic shading */}
          {/* =====================================================
    CINEMATIC OVERLAY
====================================================== */}

{/* Overall subtle image darkening */}
<div
  className="
    pointer-events-none
    absolute inset-0
    z-[5]
    bg-black/5
  "
/>

{/* Bottom cinematic fade */}
<div
  className="
    pointer-events-none
    absolute inset-x-0 bottom-0
    z-[6]
    h-[65%]
    bg-gradient-to-t
    from-[#05070a]
    via-[#05070a]/80
    via-35%
    to-transparent
  "
/>

{/* Bottom-left vignette */}
<div
  className="
    pointer-events-none
    absolute inset-0
    z-[7]
    bg-gradient-to-br
    from-transparent
    via-transparent
    to-black/25
  "
/>

{/* Subtle edge vignette */}
<div
  className="
    pointer-events-none
    absolute inset-0
    z-[8]
    shadow-[inset_0_0_80px_rgba(0,0,0,0.35)]
  "
/>
          {/* Hover play button */}
          <div className="absolute right-4 top-4 z-20 opacity-0 transition-all duration-200 group-hover/card:opacity-100">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-xl transition-transform duration-200 group-hover/card:scale-105">
              <Play size={16} fill="currentColor" />
            </div>
          </div>

          {/* =====================================================
              CARD INFORMATION
          ====================================================== */}

          <div className="absolute inset-x-0 bottom-0 z-20 px-5 pb-5 pt-14">
            {study && (
              <p className="mb-1.5 text-[8px] font-semibold uppercase tracking-[0.3em] text-red-300/90">
                {study.category} · {study.company}
              </p>
            )}

            {explore && (
              <p className="mb-1.5 text-[8px] font-semibold uppercase tracking-[0.3em] text-red-300/90">
                {explore.category} · {explore.eyebrow}
              </p>
            )}

            <h3 className="text-[19px] font-bold leading-[1.15] text-white md:text-xl">
              {title}
            </h3>

            {subtitle && (
              <p className="mt-1 line-clamp-1 text-[11px] leading-5 text-gray-300">
                {subtitle}
              </p>
            )}

            <div className="mt-3 flex flex-wrap gap-1.5">
              {technologies.slice(0, 4).map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/[0.08] bg-black/55 px-2.5 py-1 text-[9px] font-medium text-gray-200 backdrop-blur-md"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.article>

      {/* =====================================================
          CASE STUDY
      ====================================================== */}

      <AnimatePresence>
  {open && study && (
    <CaseStudyModal
      title={title}
      study={study}
      visual={visual}
      image={image}
      onClose={() => setOpen(false)}
    />
  )}

  {open && experience && (
    <ExperienceModal
      title={title}
      experience={experience}
      image={image}
      onClose={() => setOpen(false)}
    />
  )}

  {open && explore && (
    <ExploreModal
      item={explore}
      image={image}
      onClose={() => setOpen(false)}
    />
  )}
</AnimatePresence>
    </>
  );
}


function ExperienceModal({
  title,
  experience,
  image,
  onClose,
}: {
  title: string;
  experience: ExperienceCaseStudy;
  image?: string;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] overflow-y-auto bg-black/90 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={(event) => event.stopPropagation()}
        className="
          relative mx-auto min-h-screen w-full max-w-7xl
          overflow-hidden bg-[#080808]
          border border-red-500/20
          shadow-[0_0_0_1px_rgba(239,68,68,0.08),0_0_55px_rgba(220,38,38,0.12),0_30px_100px_rgba(0,0,0,0.85)]
          md:my-6 md:min-h-0 md:rounded-2xl
        "
      >
        {/* Inner red rim */}
        <div
          className="
            pointer-events-none absolute inset-0 z-[90]
            rounded-none border border-red-500/20
            shadow-[inset_0_0_40px_rgba(220,38,38,0.06)]
            md:rounded-2xl
          "
        />

        {/* Hero */}
        <section className="relative h-[560px] overflow-hidden md:h-[620px]">
          {image ? (
            <Image
              src={image}
              alt=""
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1280px"
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-red-950/40 to-black" />
          )}

          {/* Cinematic overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/45 to-black/10" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/10 to-black/20" />

          <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-[#080808] via-[#080808]/75 to-transparent" />

          {/* Close */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close experience"
            className="
              absolute right-5 top-5 z-30
              flex h-11 w-11 items-center justify-center
              rounded-full border border-white/10
              bg-black/60 text-white backdrop-blur-md
              transition-all duration-200
              hover:scale-105
              hover:border-red-500/50
              hover:bg-red-500/15
            "
          >
            <X size={19} />
          </button>

          {/* Hero content */}
          <div className="absolute inset-x-0 bottom-0 z-20 px-6 pb-10 md:px-12 md:pb-14">
            <div className="mb-3 flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-red-400">
                {experience.company}
              </span>

              <span className="text-gray-600">•</span>

              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">
                {experience.subtitle}
              </span>
            </div>

            <h2 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
              {title}
            </h2>

            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-gray-300">
              <span className="font-semibold text-green-400">
                ● Professional Experience
              </span>

              <span>{experience.role}</span>

              <span className="text-gray-600">•</span>

              <span>{experience.period}</span>
            </div>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-300 md:text-base">
              {experience.overview}
            </p>
          </div>
        </section>

        {/* Main content */}
        <div className="relative z-10 px-6 py-12 md:px-12 md:py-16">
          <div className="grid gap-12 lg:grid-cols-[1.35fr_0.65fr]">
            {/* Highlights */}
            <section>
              <SectionTitle title="Highlights" />

              <div className="mt-5 space-y-3">
                {experience.highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.05,
                    }}
                    className="
                      group rounded-xl
                      border border-white/[0.07]
                      bg-white/[0.025]
                      p-4
                      transition-all duration-300
                      hover:border-red-500/25
                      hover:bg-red-500/[0.025]
                    "
                  >
                    <div className="flex gap-4">
                      <div
                        className="
                          mt-0.5 flex h-7 w-7 shrink-0
                          items-center justify-center rounded-full
                          border border-red-500/20
                          bg-red-500/10
                          text-[10px] font-bold text-red-400
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <p className="text-base leading-7 text-white/70 md:text-[17px]">
                        {highlight}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Technical Cast */}
            <aside>
              <SectionTitle title="Technical Cast" />

              <div className="mt-5 grid gap-3">
                {experience.architecture.map((technology, index) => (
                  <motion.div
                    key={technology}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.04,
                    }}
                    className="
                      group flex items-center gap-3
                      rounded-xl border border-white/[0.07]
                      bg-white/[0.025] p-3.5
                      transition-all duration-300
                      hover:border-red-500/30
                      hover:bg-red-500/[0.04]
                    "
                  >
                    <div
                      className="
                        flex h-10 w-10 shrink-0 items-center justify-center
                        rounded-lg border border-red-500/15
                        bg-red-500/[0.08] text-red-400
                        transition-colors
                        group-hover:border-red-500/30
                        group-hover:bg-red-500/15
                      "
                    >
                      <Code2 size={17} />
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-white">
                        {technology}
                      </p>

                      <p className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.18em] text-gray-500">
                        Technology
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Recognition */}
              {experience.award && (
                <div
                  className="
                    mt-8 rounded-xl
                    border border-red-500/15
                    bg-red-500/[0.035]
                    p-5
                  "
                >
                  <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-red-400">
                    Recognition
                  </p>

                  <p className="mt-3 text-sm font-semibold text-white">
                    {experience.award.title}
                  </p>

                  {experience.award.detail && (
                    <p className="mt-1 text-xs text-gray-500">
                      {experience.award.detail}
                    </p>
                  )}
                </div>
              )}
            </aside>
          </div>

          {/* Experience summary */}
          <section className="mt-14">
            <SectionTitle title="Career Snapshot" />

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/[0.07] bg-[#0b0b0b] p-6">
                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-gray-500">
                  Company
                </p>

                <p className="mt-4 text-xl font-bold text-white">
                  {experience.company}
                </p>
              </div>

              <div className="rounded-2xl border border-white/[0.07] bg-[#0b0b0b] p-6">
                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-gray-500">
                  Role
                </p>

                <p className="mt-4 text-xl font-bold text-white">
                  {experience.role}
                </p>
              </div>

              <div className="rounded-2xl border border-red-500/15 bg-red-500/[0.04] p-6">
                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-red-400">
                  Period
                </p>

                <p className="mt-4 text-xl font-bold text-white">
                  {experience.period}
                </p>
              </div>
            </div>
          </section>

          {/* Close */}
          <div className="mt-14 flex justify-center border-t border-white/[0.07] pt-8">
            <button
              type="button"
              onClick={onClose}
              className="
                inline-flex items-center gap-2
                text-sm font-semibold text-white
                transition-colors
                hover:text-red-400
              "
            >
              Back to Experience
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ============================================================
   CONTINUE EXPLORING MODAL
============================================================ */

function ExploreModal({
  item,
  image,
  onClose,
}: {
  item: ExploreItem;
  image?: string;
  onClose: () => void;
}) {
  const Icon = {
    about: UserRound,
    education: GraduationCap,
    awards: Award,
    architecture: ServerCog,
    contact: Mail,
  }[item.icon];

  const isContact = item.id === "contact";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] overflow-y-auto bg-black/90 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={(event) => event.stopPropagation()}
        className="relative mx-auto min-h-screen w-full max-w-6xl overflow-hidden border border-red-500/20 bg-[#080808] shadow-[0_0_0_1px_rgba(239,68,68,0.08),0_0_55px_rgba(220,38,38,0.12),0_30px_100px_rgba(0,0,0,0.85)] md:my-6 md:min-h-0 md:rounded-2xl"
      >
        <div className="pointer-events-none absolute inset-0 rounded-none border border-red-500/20 shadow-[inset_0_0_40px_rgba(220,38,38,0.06)] md:rounded-2xl" />

        <section className="relative min-h-[420px] overflow-hidden md:min-h-[480px]">
          {image ? (
            <Image
              src={image}
              alt=""
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1152px"
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-red-950/40 to-black" />
          )}

          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/10 to-black/20" />
          <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[#080808] via-[#080808]/80 to-transparent" />

          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-5 top-5 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-red-500/50 hover:bg-red-500/15"
          >
            <X size={19} />
          </button>

          <div className="absolute inset-x-0 bottom-0 z-20 px-6 pb-10 md:px-12 md:pb-12">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10 text-red-400">
                <Icon size={21} />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-red-400">
                  {item.category}
                </p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.22em] text-gray-500">
                  {item.eyebrow}
                </p>
              </div>
            </div>

            <h2 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
              {item.title}
            </h2>

            <p className="mt-3 text-sm font-medium text-gray-300 md:text-base">
              {item.subtitle}
            </p>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-300 md:text-base">
              {item.overview}
            </p>
          </div>
        </section>

        <div className="relative z-10 px-6 py-12 md:px-12 md:py-14">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr]">
            <section>
              <SectionTitle title={isContact ? "Get in Touch" : "Highlights"} />

              <div className="mt-5 space-y-3">
                {item.highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group rounded-xl border border-white/[0.07] bg-white/[0.025] p-4 transition-all duration-300 hover:border-red-500/25 hover:bg-red-500/[0.025]"
                  >
                    <div className="flex gap-4">
                      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-red-500/20 bg-red-500/10 text-[10px] font-bold text-red-400">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <p className="text-base leading-7 text-white/70 md:text-[17px]">
                        {highlight}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {isContact && (
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="mailto:joshuamuthumsm@gmail.com"
                    className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-bold text-black transition hover:scale-[1.02] hover:bg-gray-200"
                  >
                    <Mail size={16} />
                    Email Me
                  </a>

                  <a
                    href="https://www.linkedin.com/in/joshua-s-5b9854109/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:border-red-500/40 hover:bg-red-500/10"
                  >
                    <ExternalLink size={16} />
                    LinkedIn
                  </a>
                </div>
              )}
            </section>

            <aside>
              {item.technologies && item.technologies.length > 0 && (
                <>
                  <SectionTitle title="Focus Areas" />

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-white/[0.08] bg-white/[0.035] px-3 py-2 text-xs font-medium text-gray-300 transition hover:border-red-500/30 hover:bg-red-500/[0.04]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </>
              )}

              <div className="mt-8 rounded-xl border border-white/[0.07] bg-white/[0.02] p-5">
                <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-gray-500">
                  Joshua S.
                </p>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  Senior Backend Engineer • Technical Lead
                </p>

                <p className="mt-2 text-xs text-gray-600">
                  Chennai, India
                </p>
              </div>
            </aside>
          </div>

          <div className="mt-14 flex justify-center border-t border-white/[0.07] pt-8">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-red-400"
            >
              Back to Continue Exploring
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ============================================================
   TECHNICAL VISUAL DISPATCHER
============================================================ */

function TechnicalVisual({ type }: { type?: string }) {
  switch (type) {
    case "healthcare":
      return <HealthcareVisual />;

    case "etl":
      return <EtlVisual />;

    case "cicd":
      return <CicdVisual />;

    case "modernization":
      return <ModernizationVisual />;

    case "airline":
      return <AirlineVisual />;

    default:
      return <DefaultVisual />;
  }
}

/* ============================================================
   HEALTHCARE
============================================================ */

function HealthcareVisual() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-[#17294b] via-[#101827] to-[#050608]">
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-blue-900/20 blur-3xl" />

      {/* Network */}
      <div className="absolute inset-0">
        <div className="absolute left-[-5%] top-[38%] h-px w-[80%] rotate-[8deg] bg-gradient-to-r from-transparent via-blue-300/35 to-transparent" />

        <div className="absolute left-[15%] top-[55%] h-px w-[70%] -rotate-[12deg] bg-gradient-to-r from-transparent via-blue-400/25 to-transparent" />

        <div className="absolute left-[28%] top-[28%] h-px w-[50%] rotate-[24deg] bg-gradient-to-r from-transparent via-blue-300/20 to-transparent" />

        <GlowNode className="left-[20%] top-[36%]" />
        <GlowNode className="left-[42%] top-[49%]" />
        <GlowNode className="left-[66%] top-[39%]" />
        <GlowNode className="left-[78%] top-[57%]" />
        <GlowNode className="left-[54%] top-[67%]" />
      </div>

      {/* Central system */}
      <div className="absolute left-1/2 top-[47%] flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-blue-300/20 bg-blue-400/[0.06] shadow-[0_0_50px_rgba(59,130,246,0.12)] backdrop-blur-sm">
        <Database size={30} className="text-blue-200/70" />
      </div>
    </div>
  );
}

/* ============================================================
   ETL
============================================================ */

function EtlVisual() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-[#26183a] via-[#151020] to-[#050507]">
      <div className="absolute -right-16 -top-20 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />

      <div className="absolute -bottom-20 left-10 h-56 w-56 rounded-full bg-purple-900/20 blur-3xl" />

      {/* Abstract cloud */}
      <div className="absolute left-[14%] top-[25%] h-24 w-32 rounded-[40px] border border-violet-300/20 bg-violet-400/[0.05] shadow-[0_0_45px_rgba(139,92,246,0.1)]">
        <div className="absolute bottom-[-12px] left-7 h-7 w-7 rounded-full border border-violet-300/20 bg-[#1c1230]" />

        <div className="absolute bottom-[-10px] right-7 h-6 w-6 rounded-full border border-violet-300/20 bg-[#1c1230]" />
      </div>

      {/* Pipeline */}
      <div className="absolute left-[28%] right-[12%] top-[38%] h-16">
        <PipelineLine />

        <PipelineNode className="left-0" />
        <PipelineNode className="left-[45%]" />
        <PipelineNode className="right-0" />
      </div>

      <DataParticle className="left-[37%] top-[46%]" />
      <DataParticle className="left-[57%] top-[46%]" />
      <DataParticle className="left-[69%] top-[46%]" />

      {/* Additional ambient lines */}
      <div className="absolute bottom-[22%] left-[18%] h-px w-[55%] bg-gradient-to-r from-transparent via-violet-400/15 to-transparent" />
    </div>
  );
}

/* ============================================================
   CI/CD
============================================================ */

function CicdVisual() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-[#241632] via-[#130f19] to-[#050507]">
      <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />

      <div className="absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-fuchsia-900/20 blur-3xl" />

      {/* Branching network */}
      <div className="absolute inset-0">
        <div className="absolute left-[14%] top-1/2 h-px w-[28%] bg-gradient-to-r from-purple-300/10 via-purple-300/50 to-purple-300/70" />

        <div className="absolute left-[42%] top-1/2 h-px w-[42%] rotate-[-18deg] bg-gradient-to-r from-purple-300/70 via-purple-400/40 to-transparent" />

        <div className="absolute left-[42%] top-1/2 h-px w-[42%] rotate-[18deg] bg-gradient-to-r from-purple-300/70 via-purple-400/40 to-transparent" />

        <div className="absolute left-[42%] top-[31%] h-[38%] w-px bg-purple-300/20" />

        <BranchNode className="left-[12%] top-[calc(50%-7px)]" />

        <BranchNode
          className="left-[40%] top-[calc(50%-7px)]"
          active
        />

        <BranchNode className="right-[13%] top-[29%]" />

        <BranchNode className="right-[13%] top-[69%]" />
      </div>

      {/* Git-like rings */}
      <div className="absolute right-[18%] top-[20%] h-20 w-20 rounded-full border border-purple-300/10" />

      <div className="absolute right-[20%] top-[23%] h-14 w-14 rounded-full border border-purple-300/10" />
    </div>
  );
}

/* ============================================================
   APPLICATION MODERNIZATION
============================================================ */

function ModernizationVisual() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-[#2a1b13] via-[#15110e] to-[#050505]">
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-orange-500/15 blur-3xl" />

      <div className="absolute -bottom-24 left-0 h-64 w-64 rounded-full bg-amber-900/20 blur-3xl" />

      {/* Legacy architecture */}
      <div className="absolute left-[12%] top-[30%] h-24 w-28 rounded-xl border border-orange-300/15 bg-orange-300/[0.035]">
        <div className="absolute inset-x-4 top-5 h-2 rounded-full bg-orange-200/10" />

        <div className="absolute inset-x-4 top-10 h-2 rounded-full bg-orange-200/10" />

        <div className="absolute inset-x-4 top-15 h-2 rounded-full bg-orange-200/10" />
      </div>

      {/* Migration path */}
      <div className="absolute left-[34%] right-[34%] top-[42%] flex items-center">
        <div className="h-px flex-1 bg-gradient-to-r from-orange-300/20 to-orange-300/70" />

        <ArrowRight
          size={24}
          className="mx-3 shrink-0 text-orange-300/80"
        />

        <div className="h-px flex-1 bg-gradient-to-r from-orange-300/70 to-orange-300/20" />
      </div>

      {/* Modern architecture */}
      <div className="absolute right-[12%] top-[30%] h-24 w-28 rounded-xl border border-orange-300/20 bg-orange-300/[0.06] shadow-[0_0_40px_rgba(249,115,22,0.08)]">
        <div className="absolute left-4 top-5 h-3 w-3 rounded-sm bg-orange-300/60" />

        <div className="absolute right-4 top-5 h-3 w-3 rounded-sm bg-orange-300/40" />

        <div className="absolute bottom-5 left-4 right-4 h-px bg-orange-300/30" />
      </div>

      {/* Transformation particles */}
      <div className="absolute left-[44%] top-[35%] h-1.5 w-1.5 rounded-full bg-orange-300/70 shadow-[0_0_15px_rgba(251,146,60,0.8)]" />

      <div className="absolute left-[50%] top-[52%] h-1.5 w-1.5 rounded-full bg-orange-300/50 shadow-[0_0_15px_rgba(251,146,60,0.8)]" />

      <div className="absolute left-[57%] top-[38%] h-1.5 w-1.5 rounded-full bg-orange-300/60 shadow-[0_0_15px_rgba(251,146,60,0.8)]" />
    </div>
  );
}

/* ============================================================
   AIRLINE
============================================================ */

function AirlineVisual() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-[#102832] via-[#0d151b] to-[#050607]">
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />

      <div className="absolute -bottom-20 left-10 h-64 w-64 rounded-full bg-blue-900/20 blur-3xl" />

      {/* Event network */}
      <div className="absolute inset-0">
        <div className="absolute left-[13%] top-1/2 h-px w-[74%] bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />

        <div className="absolute left-[38%] top-1/2 h-px w-[24%] -rotate-[25deg] bg-cyan-300/30" />

        <div className="absolute left-[38%] top-1/2 h-px w-[24%] rotate-[25deg] bg-cyan-300/30" />

        <AirlineNode
          className="left-[11%] top-[calc(50%-7px)]"
        />

        <AirlineNode
          className="left-[37%] top-[calc(50%-7px)]"
          active
        />

        <AirlineNode
          className="right-[11%] top-[calc(50%-7px)]"
        />

        <AirlineNode
          className="right-[29%] top-[28%]"
        />

        <AirlineNode
          className="right-[29%] top-[72%]"
        />
      </div>

      {/* Radar circles */}
      <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/[0.06]" />

      <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/[0.08]" />
    </div>
  );
}

/* ============================================================
   DEFAULT
============================================================ */

function DefaultVisual() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-[#181818] to-black" />
  );
}

/* ============================================================
   VISUAL HELPERS
============================================================ */

function GlowNode({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`absolute h-2.5 w-2.5 rounded-full bg-blue-300/80 shadow-[0_0_18px_rgba(96,165,250,0.9)] ${className}`}
    />
  );
}

function PipelineLine() {
  return (
    <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-violet-300/10 via-violet-300/60 to-violet-300/10" />
  );
}

function PipelineNode({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-violet-300/80 shadow-[0_0_18px_rgba(167,139,250,0.9)] ${className}`}
    />
  );
}

function DataParticle({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`absolute h-1.5 w-1.5 rounded-full bg-violet-200/70 shadow-[0_0_12px_rgba(196,181,253,0.8)] ${className}`}
    />
  );
}

function BranchNode({
  className = "",
  active = false,
}: {
  className?: string;
  active?: boolean;
}) {
  return (
    <div
      className={`absolute h-3.5 w-3.5 rounded-full border ${
        active
          ? "border-purple-200 bg-purple-300 shadow-[0_0_20px_rgba(192,132,252,0.9)]"
          : "border-purple-300/40 bg-purple-300/20"
      } ${className}`}
    />
  );
}

function AirlineNode({
  className = "",
  active = false,
}: {
  className?: string;
  active?: boolean;
}) {
  return (
    <div
      className={`absolute h-3.5 w-3.5 rounded-full border ${
        active
          ? "border-cyan-100 bg-cyan-300 shadow-[0_0_20px_rgba(103,232,249,0.9)]"
          : "border-cyan-300/40 bg-cyan-300/20"
      } ${className}`}
    />
  );
}

/* ============================================================
   CASE STUDY MODAL
============================================================ */

function CaseStudyModal({
  title,
  study,
  visual,
  image,
  onClose,
}: {
  title: string;
  study: CaseStudy;
  visual?: string;
  image?: string;
  onClose: () => void;
}) {
  const detailsId = `case-study-details-${visual ?? "project"}`;

  const scrollToDetails = () => {
    document.getElementById(detailsId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] overflow-y-auto bg-black/90 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={(event) => event.stopPropagation()}
        className="
          relative mx-auto min-h-screen w-full max-w-7xl
          overflow-hidden
          bg-[#080808]
          md:my-6 md:min-h-0 md:rounded-2xl
          border border-red-500/20
          shadow-[0_0_0_1px_rgba(239,68,68,0.08),0_0_55px_rgba(220,38,38,0.12),0_30px_100px_rgba(0,0,0,0.85)]
        "
      >
        {/* ========================================================= */}
        {/* RED INNER RIM */}
        {/* ========================================================= */}

        <div
          className="
            pointer-events-none absolute inset-0 z-[90]
            rounded-none md:rounded-2xl
            border border-red-500/20
            shadow-[inset_0_0_40px_rgba(220,38,38,0.06)]
          "
        />

        {/* ========================================================= */}
        {/* ATMOSPHERIC RED GLOW */}
        {/* ========================================================= */}

        <div
          className="
            pointer-events-none absolute -right-40 top-[35%] z-0
            h-[500px] w-[500px]
            rounded-full
            bg-red-900/10
            blur-[140px]
          "
        />

        {/* ========================================================= */}
        {/* HERO */}
        {/* ========================================================= */}

        <section className="relative h-[560px] overflow-hidden md:h-[620px]">
          {/* Background image */}
          {image ? (
            <Image
              src={image}
              alt=""
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1280px"
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-red-950/40 to-black" />
          )}

          {/* Cinematic overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/45 to-black/10" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/10 to-black/20" />

          <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-[#080808] via-[#080808]/75 to-transparent" />

          {/* Close */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="
              absolute right-5 top-5 z-30
              flex h-11 w-11 items-center justify-center
              rounded-full
              border border-white/10
              bg-black/60
              text-white
              backdrop-blur-md
              transition-all duration-200
              hover:scale-105
              hover:border-red-500/50
              hover:bg-red-500/15
            "
          >
            <X size={19} />
          </button>

          {/* Hero content */}
          <div className="absolute inset-x-0 bottom-0 z-20 px-6 pb-10 md:px-12 md:pb-14">
            {/* Category */}
            <div className="mb-3 flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-red-400">
                {study.category}
              </span>

              <span className="text-gray-600">•</span>

              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">
                {study.company}
              </span>
            </div>

            {/* Title */}
            <h2 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
              {title}
            </h2>

            {/* Metadata */}
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-gray-300">
              <span className="font-semibold text-green-400">
                ● Professional Work
              </span>

              <span>{study.role}</span>

              {study.scale && (
                <>
                  <span className="text-gray-600">•</span>
                  <span>{study.scale}</span>
                </>
              )}
            </div>

            {/* Synopsis */}
            <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-300 md:text-base">
              {study.overview}
            </p>

            {/* CTA */}
            <div className="mt-7 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={scrollToDetails}
                className="
                  inline-flex items-center gap-2
                  rounded-md
                  bg-white
                  px-6 py-3
                  text-sm font-bold
                  text-black
                  shadow-xl
                  transition-all duration-200
                  hover:scale-[1.02]
                  hover:bg-gray-200
                "
              >
                <Play size={16} fill="currentColor" />
                Explore Case Study
              </button>

              <button
                type="button"
                onClick={onClose}
                className="
                  inline-flex items-center gap-2
                  rounded-md
                  border border-white/15
                  bg-white/10
                  px-6 py-3
                  text-sm font-semibold
                  text-white
                  backdrop-blur-md
                  transition-all duration-200
                  hover:border-red-500/40
                  hover:bg-red-500/10
                "
              >
                <X size={16} />
                Close
              </button>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* MAIN CONTENT */}
        {/* ========================================================= */}

        <div
          id={detailsId}
          className="relative z-10 px-6 py-12 md:px-12 md:py-16"
        >
          {/* ======================================================= */}
          {/* ABOUT + TECHNICAL CAST */}
          {/* ======================================================= */}

          <div className="grid gap-12 lg:grid-cols-[1.35fr_0.65fr]">
            {/* LEFT */}
            <section>
              <SectionTitle title="About this work" />

              <p className="max-w-3xl text-sm leading-7 text-gray-300 md:text-base">
                {study.overview}
              </p>

              {/* Key Contributions */}
              <div className="mt-10">
                <SectionTitle title="The Story" />

                <div className="mt-5 space-y-3">
                  {study.details.map((detail, index) => (
                    <motion.div
                      key={detail}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.05,
                      }}
                      className="
                        group
                        rounded-xl
                        border border-white/[0.07]
                        bg-white/[0.025]
                        p-4
                        transition-all duration-300
                        hover:border-red-500/25
                        hover:bg-red-500/[0.025]
                      "
                    >
                      <div className="flex gap-4">
                        <div
                          className="
                            mt-0.5 flex h-7 w-7 shrink-0
                            items-center justify-center
                            rounded-full
                            border border-red-500/20
                            bg-red-500/10
                            text-[10px] font-bold
                            text-red-400
                          "
                        >
                          {String(index + 1).padStart(2, "0")}
                        </div>

                        <p className="text-base leading-7 text-white/70 md:text-[17px]">
                          {detail}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* RIGHT — TECHNICAL CAST */}
            <aside>
              <SectionTitle title="Technical Cast" />

              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {study.architecture.map((technology, index) => (
                  <motion.div
                    key={technology}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.04,
                    }}
                    className="
                      group
                      flex items-center gap-3
                      rounded-xl
                      border border-white/[0.07]
                      bg-white/[0.025]
                      p-3.5
                      transition-all duration-300
                      hover:border-red-500/30
                      hover:bg-red-500/[0.04]
                    "
                  >
                    <div
                      className="
                        flex h-10 w-10 shrink-0
                        items-center justify-center
                        rounded-lg
                        border border-red-500/15
                        bg-red-500/[0.08]
                        text-red-400
                        transition-colors
                        group-hover:border-red-500/30
                        group-hover:bg-red-500/15
                      "
                    >
                      <Code2 size={17} />
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-white">
                        {technology}
                      </p>

                      <p className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.18em] text-gray-500">
                        Technology
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick details */}
              <div className="mt-8 rounded-xl border border-white/[0.07] bg-white/[0.02] p-5">
                <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-gray-500">
                  At a Glance
                </p>

                <div className="mt-4 space-y-4">
                  <InfoRow label="Company" value={study.company} />
                  <InfoRow label="Role" value={study.role} />

                  {study.scale && (
                    <InfoRow label="Scale" value={study.scale} />
                  )}

                  {study.impact && (
                    <InfoRow label="Impact" value={study.impact} />
                  )}
                </div>
              </div>
            </aside>
          </div>

          {/* ======================================================= */}
          {/* ARCHITECTURE */}
          {/* ======================================================= */}

          <section className="mt-14">
  <SectionTitle title="Architecture" />

  <div className="relative mt-6 overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0b0b0b]">
    {/* subtle red atmosphere */}
    <div className="pointer-events-none absolute -left-32 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-red-600/[0.08] blur-[100px]" />

    <div className="relative p-5 md:p-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-white">
            System Flow
          </p>

          <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-gray-500">
            High-level technical architecture
          </p>
        </div>

        <div className="hidden rounded-full border border-red-500/20 bg-red-500/[0.06] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-red-400 md:block">
          Architecture
        </div>
      </div>

      {/* Flow */}
      <div className="mt-8 overflow-x-auto pb-2">
        <div className="flex min-w-[760px] items-center justify-center gap-3">
          {study.architecture.map((technology, index) => (
            <Fragment key={technology}>
              <div
                className="
                  group
                  relative
                  flex min-w-[125px]
                  flex-col items-center
                  justify-center
                  rounded-xl
                  border border-white/[0.08]
                  bg-gradient-to-b from-white/[0.045] to-white/[0.015]
                  px-4 py-5
                  text-center
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-red-500/35
                  hover:bg-red-500/[0.04]
                "
              >
                <div
                  className="
                    flex h-10 w-10 items-center justify-center
                    rounded-lg
                    border border-red-500/20
                    bg-red-500/[0.08]
                    text-red-400
                    transition-all duration-300
                    group-hover:border-red-500/40
                    group-hover:bg-red-500/[0.14]
                  "
                >
                  <Code2 size={17} />
                </div>

                <p className="mt-3 text-xs font-semibold text-white">
                  {technology}
                </p>

                <p className="mt-1 text-[8px] uppercase tracking-[0.18em] text-gray-600">
                  Component
                </p>
              </div>

              {index < study.architecture.length - 1 && (
                <div className="flex shrink-0 items-center">
                  <div className="h-px w-7 bg-gradient-to-r from-red-500/40 to-white/10" />
                  <ArrowRight
                    size={12}
                    className="text-red-500/60"
                  />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>

      {/* Bottom description */}
      <div className="mt-6 border-t border-white/[0.06] pt-5">
        <p className="max-w-4xl text-xs leading-6 text-gray-400">
          The architecture represents the core technologies and engineering
          components involved in this work, from application services through
          data, infrastructure and delivery layers.
        </p>
      </div>
    </div>
  </div>
</section>

          {/* ======================================================= */}
          {/* IMPACT */}
          {/* ======================================================= */}

          {(study.scale || study.impact) && (
  <section className="mt-14">
    <SectionTitle title="Impact" />

    <div className="mt-6 grid gap-4 md:grid-cols-2">
      {study.scale && (
        <div
          className="
            group relative overflow-hidden
            rounded-2xl
            border border-white/[0.07]
            bg-[#0b0b0b]
            p-6
            transition-all duration-300
            hover:border-red-500/30
          "
        >
          <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-red-600/[0.08] blur-3xl" />

          <div className="relative">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-gray-500">
                Scale
              </span>

              <BarChart3
                size={18}
                className="text-red-500/70"
              />
            </div>

            <p className="mt-5 text-3xl font-black tracking-tight text-white md:text-4xl">
              {study.scale}
            </p>

            <div className="mt-4 h-px w-full bg-white/[0.06]" />

            <p className="mt-3 text-xs text-gray-500">
              Operational scale of the platform
            </p>
          </div>
        </div>
      )}

      {study.impact && (
        <div
          className="
            group relative overflow-hidden
            rounded-2xl
            border border-red-500/20
            bg-gradient-to-br
            from-red-500/[0.08]
            via-[#0b0b0b]
            to-[#0b0b0b]
            p-6
            transition-all duration-300
            hover:border-red-500/40
          "
        >
          <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-red-600/10 blur-3xl" />

          <div className="relative">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-red-400">
                Impact
              </span>

              <TrendingDown
                size={18}
                className="text-red-400"
              />
            </div>

            <p className="mt-5 text-3xl font-black tracking-tight text-white md:text-4xl">
              {study.impact}
            </p>

            <div className="mt-4 h-px w-full bg-red-500/10" />

            <p className="mt-3 text-xs text-gray-500">
              Measurable engineering outcome
            </p>
          </div>
        </div>
      )}
    </div>
  </section>
)}

          {/* ======================================================= */}
          {/* MY ROLE */}
          {/* ======================================================= */}

          <section className="mt-14">
  <SectionTitle title="My Role" />

  <div className="mt-6 overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0b0b0b]">
    {/* Role header */}
    <div className="relative overflow-hidden border-b border-white/[0.06] p-6 md:p-8">
      <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-red-600/[0.08] blur-[90px]" />

      <div className="relative flex flex-col gap-5 md:flex-row md:items-center">
        <div
          className="
            flex h-16 w-16 shrink-0
            items-center justify-center
            rounded-2xl
            border border-red-500/20
            bg-red-500/[0.08]
            text-red-400
          "
        >
          <Layers3 size={25} />
        </div>

        <div>
          <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-red-400">
            Primary Responsibility
          </p>

          <h3 className="mt-1 text-2xl font-bold text-white">
            {study.role}
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            {study.company}
          </p>
        </div>
      </div>
    </div>

    {/* Contributions */}
    <div className="grid md:grid-cols-3">
      <RoleBlock
        number="01"
        title="Architecture"
        description="Designed and contributed to technical solutions, system structure and engineering decisions."
      />

      <RoleBlock
        number="02"
        title="Engineering"
        description="Worked directly across the application, cloud, data and infrastructure technologies involved."
      />

      <RoleBlock
        number="03"
        title="Delivery"
        description="Supported implementation, modernization, automation and production delivery activities."
      />
    </div>
  </div>
</section>

          {/* ======================================================= */}
          {/* FOOTER */}
          {/* ======================================================= */}

          <div className="mt-16 flex flex-col items-center border-t border-white/[0.07] pt-10 text-center">
            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-gray-600">
              Technical Work
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Explore another case study from my engineering journey.
            </p>

            <button
              type="button"
              onClick={onClose}
              className="
                mt-5 inline-flex items-center gap-2
                text-sm font-semibold
                text-white
                transition-colors
                hover:text-red-400
              "
            >
              Back to Technical Work
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-5 w-1 rounded-full bg-red-500" />

      <h3 className="text-xl font-bold tracking-tight text-white md:text-2xl">
        {title}
      </h3>
    </div>
  );
}

function RoleBlock({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div
      className="
        group
        border-b border-white/[0.06]
        p-6
        transition-all duration-300
        hover:bg-red-500/[0.025]
        md:border-b-0
        md:border-r
        md:last:border-r-0
      "
    >
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-bold tracking-[0.2em] text-red-500">
          {number}
        </span>

        <ArrowUpRight
          size={14}
          className="text-gray-700 transition-colors group-hover:text-red-400"
        />
      </div>

      <h4 className="mt-7 text-base font-bold text-white">
        {title}
      </h4>

      <p className="mt-3 text-xs leading-6 text-gray-500">
        {description}
      </p>
    </div>
  );
}

function InfoRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-white/[0.05] pb-3 last:border-0 last:pb-0">
      <span className="text-[10px] uppercase tracking-[0.15em] text-gray-500">
        {label}
      </span>

      <span className="max-w-[65%] text-right text-xs font-medium text-gray-300">
        {value}
      </span>
    </div>
  );
}

function MetricCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 transition-all duration-300 hover:border-red-500/25">
      <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-red-600/10 blur-3xl" />

      <p className="relative text-[9px] font-semibold uppercase tracking-[0.25em] text-gray-500">
        {label}
      </p>

      <p className="relative mt-3 max-w-xl text-xl font-bold leading-tight text-white md:text-2xl">
        {value}
      </p>
    </div>
  );
}

/* ============================================================
   CASE STUDY COMPONENTS
============================================================ */

function CaseStudyMetric({
  label,
  value,
  accent = false,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-5 backdrop-blur-md ${
        accent
          ? "border-red-500/20 bg-red-500/[0.06]"
          : "border-white/[0.08] bg-white/[0.035]"
      }`}
    >
      <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-gray-500">
        {label}
      </p>

      <p
        className={`mt-2 text-base font-bold ${
          accent ? "text-red-300" : "text-white"
        }`}
      >
        {value}
      </p>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-xs text-red-400">
        {eyebrow}
      </span>

      <div className="h-px w-8 bg-red-500/40" />

      <h3 className="text-sm font-bold uppercase tracking-[0.22em] text-white">
        {title}
      </h3>
    </div>
  );
}

function TechnicalStoryItem({
  number,
  text,
}: {
  number: number;
  text: string;
}) {
  return (
    <div className="group flex gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 transition hover:border-red-500/20 hover:bg-white/[0.035]">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-red-500/20 bg-red-500/[0.06]">
        <span className="font-mono text-[10px] text-red-400">
          {String(number).padStart(2, "0")}
        </span>
      </div>

      <p className="pt-1 text-sm leading-6 text-gray-300">
        {text}
      </p>
    </div>
  );
}

function GlanceRow({
  label,
  value,
  accent = false,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="flex items-start justify-between gap-5 border-b border-white/[0.05] px-5 py-4 last:border-0">
      <span className="text-xs text-gray-600">
        {label}
      </span>

      <span
        className={`text-right text-xs font-medium ${
          accent ? "text-red-300" : "text-gray-300"
        }`}
      >
        {value}
      </span>
    </div>
  );
}

/* ============================================================
   ARCHITECTURE DIAGRAM
============================================================ */

function ArchitectureDiagram({
  visual,
}: {
  visual?: string;
}) {
  const diagrams: Record<
    string,
    {
      nodes: string[];
      description: string;
    }
  > = {
    healthcare: {
      nodes: [
        "Claims Input",
        "Spring Boot Services",
        "Redis",
        "PostgreSQL",
        "AWS",
      ],
      description:
        "High-volume claims flow with caching, relational persistence and cloud infrastructure.",
    },

    etl: {
      nodes: [
        "Source Data",
        "Python",
        "Airflow",
        "GCP",
        "BigQuery",
      ],
      description:
        "Orchestrated ETL flow transforming source data into analytics-ready datasets.",
    },

    cicd: {
      nodes: [
        "Repositories",
        "Jenkins",
        "Python Automation",
        "GitHub Actions",
        "Build / Deploy",
      ],
      description:
        "Automated migration and standardized CI/CD execution across enterprise repositories.",
    },

    modernization: {
      nodes: [
        "Java Application",
        "JBoss",
        "Migration",
        "Apache Tomcat",
        "Production",
      ],
      description:
        "Enterprise Java runtime modernization from JBoss to Apache Tomcat.",
    },

    airline: {
      nodes: [
        "Backend Services",
        "Kafka",
        "Event Processing",
        "PostgreSQL",
        "Consumers",
      ],
      description:
        "Event-driven backend flow supporting airline loyalty capabilities.",
    },
  };

  const diagram = visual ? diagrams[visual] : undefined;

  if (!diagram) {
    return null;
  }

  return (
    <div className="mt-6 overflow-hidden rounded-xl border border-white/[0.07] bg-gradient-to-br from-white/[0.035] to-transparent p-5">
      <div className="flex flex-wrap items-center gap-2">
        {diagram.nodes.map((node, index) => (
          <div
            key={node}
            className="flex items-center gap-2"
          >
            <div className="rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-xs font-medium text-gray-300">
              {node}
            </div>

            {index < diagram.nodes.length - 1 && (
              <ArrowRight
                size={14}
                className="text-red-400/60"
              />
            )}
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-start gap-3 border-t border-white/[0.06] pt-4">
        <Workflow
          size={16}
          className="mt-0.5 shrink-0 text-red-400"
        />

        <p className="text-xs leading-5 text-gray-500">
          {diagram.description}
        </p>
      </div>
    </div>
  );
}