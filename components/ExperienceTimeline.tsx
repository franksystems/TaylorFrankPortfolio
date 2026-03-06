import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { timeline } from "@/data/site";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-16">
      <Container>
        <SectionHeader eyebrow="Experience" title="A progression built on systems depth." />
        <div className="mt-10 space-y-5">
          {timeline.map((item) => (
            <div key={item.company} className="card-shell p-6 md:p-7">
              <div className="grid gap-6 md:grid-cols-[0.9fr_2.1fr]">
                <div>
                  <div className="text-xl font-semibold text-white">{item.company}</div>
                  <div className="mt-1 text-neutral-300">{item.role}</div>
                  <div className="mt-2 text-sm text-neutral-500">{item.period}</div>
                </div>
                <p className="leading-7 text-neutral-300">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
