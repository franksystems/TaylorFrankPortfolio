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
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-neutral-200 selection:text-neutral-900">
      <div className="background-layer" />
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
