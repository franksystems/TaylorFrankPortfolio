import { expertise } from "@/data/site";
import { SectionHeader } from "@/components/SectionHeader";

export function ExpertiseGrid() {
  return (
    <section className="container-shell py-16">
      <SectionHeader
        eyebrow="Core architecture expertise"
        title="Signals that matter in the staff engineering market."
        description="The strongest engineering portfolios do more than list tools. They show judgment across architecture, delivery, and operational impact."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
        {expertise.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="glass-panel rounded-[1.75rem] p-6">
              <div className="mb-4 inline-flex rounded-xl bg-white/10 p-3">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-300">{item.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
