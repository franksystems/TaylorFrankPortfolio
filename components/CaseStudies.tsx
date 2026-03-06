import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { caseStudies } from "@/data/site";

export function CaseStudies() {
  return (
    <section id="work" className="py-16">
      <Container>
        <SectionHeader
          eyebrow="Featured systems"
          title="Architecture, delivery, and operational leverage."
          description="These are the kinds of systems I most enjoy building: high-ownership platforms with real throughput, clear business impact, and carefully chosen tradeoffs."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {caseStudies.map((study) => {
            const Icon = study.icon;
            return (
              <div key={study.title} className="card-shell p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-white/10 p-3 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{study.title}</h3>
                    <p className="mt-1 text-sm text-neutral-400">{study.subtitle}</p>
                  </div>
                </div>
                <ul className="mt-6 space-y-3 text-neutral-300">
                  {study.points.map((point) => (
                    <li key={point} className="flex gap-3 leading-7">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-neutral-100" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-neutral-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
