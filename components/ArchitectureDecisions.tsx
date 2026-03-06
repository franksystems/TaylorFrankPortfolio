import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { decisions } from "@/data/site";

export function ArchitectureDecisions() {
  return (
    <section id="decisions" className="py-16">
      <Container>
        <div className="grid items-start gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <SectionHeader
            eyebrow="Selected architecture decisions"
            title="Why the shape of the system matters."
            description="Strong systems are not just collections of services. They are sets of decisions made against real constraints: throughput, reliability, operator visibility, cost, and maintainability."
          />
          <div className="space-y-5">
            {decisions.map((item) => (
              <div key={item.title} className="card-shell p-6">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 leading-7 text-neutral-300">
                  <span className="font-medium text-white">Why this won:</span> {item.why}
                </p>
                <p className="mt-2 leading-7 text-neutral-400">
                  <span className="font-medium text-neutral-200">Tradeoff accepted:</span> {item.tradeoff}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
