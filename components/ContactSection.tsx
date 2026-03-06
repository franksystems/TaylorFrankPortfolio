import { Linkedin, Mail } from "lucide-react";
import { Container } from "@/components/Container";
import { profile } from "@/data/site";

export function ContactSection() {
  return (
    <section id="contact" className="pb-24 pt-10">
      <Container>
        <div className="card-shell p-8 md:p-10">
          <div className="max-w-3xl">
            <div className="mb-3 text-xs uppercase tracking-[0.22em] text-neutral-400">Contact</div>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">Let’s build something durable.</h2>
            <p className="mt-4 text-lg leading-relaxed text-neutral-300">
              I’m interested in staff-level opportunities where architecture, platform thinking, and operational impact matter.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-medium text-neutral-950 transition-colors hover:bg-neutral-200"
            >
              <Mail className="h-4 w-4" /> Email
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-transparent px-5 py-3 font-medium text-white transition-colors hover:bg-white/10"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
