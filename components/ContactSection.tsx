import { Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/site";
import { SectionHeader } from "@/components/SectionHeader";

export function ContactSection() {
  return (
    <section id="contact" className="container-shell pt-10 pb-24">
      <div className="glass-panel rounded-[2rem] p-8 md:p-10">
        <SectionHeader
          eyebrow="Contact"
          title="Let’s build something durable."
          description="I’m interested in staff-level opportunities where architecture, platform thinking, and operational impact matter."
        />
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={`mailto:${profile.email}`} className="button-primary">
            <Mail className="h-4 w-4" /> Email
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="button-secondary">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
