import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { expertise } from "@/data/site";

export function ExpertiseGrid() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeader
          eyebrow="Core architecture expertise"
          title="Signals that matter in the staff engineering market."
          description="The strongest engineering portfolios do more than list tools. They show judgment across architecture, delivery, and operational impact."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {expertise.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="card-shell p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-white/10 p-3 text-neutral-100">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-neutral-300">{item.text}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
