import { ArchitectureDecisions } from "@/components/ArchitectureDecisions";
import { CaseStudies } from "@/components/CaseStudies";
import { ContactSection } from "@/components/ContactSection";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ExpertiseGrid } from "@/components/ExpertiseGrid";
import { Hero } from "@/components/Hero";
import { ImpactPanel } from "@/components/ImpactPanel";
import { MetricsGrid } from "@/components/MetricsGrid";
import { SiteHeader } from "@/components/SiteHeader";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-neutral-950 text-neutral-100">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden grid-bg">
        <div className="absolute left-[-10rem] top-[-6rem] h-[24rem] w-[24rem] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-[-8rem] top-[10rem] h-[28rem] w-[28rem] rounded-full bg-violet-500/10 blur-3xl" />
      </div>
      <SiteHeader />
      <main>
        <Hero />
        <MetricsGrid />
        <ExpertiseGrid />
        <CaseStudies />
        <ArchitectureDecisions />
        <ExperienceTimeline />
        <ImpactPanel />
        <ContactSection />
      </main>
    </div>
  );
}
