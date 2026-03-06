import { Server } from "lucide-react";

export function ImpactPanel() {
  const items = [
    "End-to-end platform ownership",
    "Architecture decisions with explicit tradeoffs",
    "Infrastructure, CI/CD, and reliability depth",
    "Operational leverage tied to business outcomes",
  ];

  return (
    <section className="container-shell py-16">
      <div className="glass-panel rounded-[2rem] bg-gradient-to-br from-cyan-500/10 via-white/5 to-violet-500/10 p-8 md:p-10">
        <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="section-eyebrow">What I bring</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Staff-market positioning, grounded in real platform work.
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-neutral-200/90">
              I work best where engineering intersects with operations, product, and infrastructure. My strongest contributions come from translating ambiguity into systems that last: clear architecture, thoughtful tradeoffs, strong delivery, and measurable impact.
            </p>
          </div>
          <div className="grid gap-3">
            {items.map((line) => (
              <div key={line} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-neutral-100">
                <Server className="h-5 w-5 text-neutral-300" />
                <span>{line}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
