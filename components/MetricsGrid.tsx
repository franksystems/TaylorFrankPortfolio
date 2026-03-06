import { Container } from "@/components/Container";
import { metrics } from "@/data/site";

export function MetricsGrid() {
  return (
    <section className="pb-20">
      <Container>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
          {metrics.map((metric) => (
            <div key={metric.label} className="card-shell p-5">
              <div className="text-2xl font-semibold text-white md:text-3xl">{metric.value}</div>
              <div className="mt-2 text-sm text-neutral-400">{metric.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
