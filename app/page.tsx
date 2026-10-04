import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";
import DocumentViewer from "@/src/components/documents/DocumentViewer";

import Hero from "@/src/components/hero/Hero";
import ContentRow from "@/src/components/content/ContentRow";
import SkillsSection from "@/src/components/skills/SkillsSection";
import CertificationsSection from "@/src/components/certifications/CertificationsSection";
import ImpactSection from "@/src/components/impact/ImpactSection";

import { experiences } from "@/src/data/experience";

import BackToTop from "@/src/components/layout/BackToTop";
import Protection from "@/src/components/layout/Protection";
import LoadingScreen from "@/src/components/layout/LoadingScreen";

import GlobalOpportunities from "@/src/components/global/GlobalOpportunities";
import IndustriesSection from "@/src/components/industries/IndustriesSection";

import {
  featuredProjects,
  exploreItems,
  architectureCases,
} from "@/src/data/Portfolio";

export default function Home() {
  return (
    <>
      {/* Cinematic loading intro */}
      <LoadingScreen />

      <main
        id="home"
        className="min-h-screen bg-transparent text-white"
      >
        <Protection />
        <Navbar />

        <Hero />

        <div className="relative z-20 mx-auto -mt-24 w-full px-6 lg:px-10 2xl:px-14">

          {/* Selected Impact */}
          <ImpactSection />

          {/* Global Opportunities */}
          <GlobalOpportunities />

          {/* Featured Technical Work */}
          <div
            id="projects"
            className="relative overflow-hidden rounded-2xl py-4"
          >
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-950/10 blur-3xl" />

              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(100,15,25,0.10),transparent_65%)]" />
            </div>

            <ContentRow
              title="Featured Technical Work"
              items={featuredProjects}
              large
            />
          </div>

          {/* Experience */}
          <section
            id="experience"
            className="scroll-mt-24"
          >
            <ContentRow
              title="Experience"
              items={experiences.map((experience) => ({
                title: experience.title,
                subtitle: `${experience.company} • ${experience.period}`,
                image: experience.image,
                technologies: experience.technologies,
                visual: "experience",
                experienceId: experience.id,
              }))}
              large
            />
          </section>

          {/* Skills */}
          <section
            id="skills-section"
            className="scroll-mt-24"
          >
            <SkillsSection />
          </section>

          {/* Certifications */}
          <section
            id="certifications"
            className="scroll-mt-24"
          >
            <CertificationsSection />
          </section>

          {/* Industries */}
          <IndustriesSection />

          {/* Continue Exploring */}
          <section
            id="about"
            className="scroll-mt-24"
          >
            <ContentRow
              title="Continue Exploring"
              items={exploreItems}
            />
          </section>

          {/* Architecture */}
          {/* <section
            id="architecture"
            className="scroll-mt-24"
          >
            <ContentRow
              title="Architecture Case Studies"
              items={architectureCases}
            />
          </section> */}

          {/* Footer */}
          <Footer />
        </div>

        {/* Global document viewer */}
        <DocumentViewer />

        {/* Back to top */}
        <BackToTop />
      </main>
    </>
  );
}