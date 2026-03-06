"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ExternalLink } from "lucide-react";
import { caseStudies } from "@/data/site";
import { SectionHeader } from "@/components/SectionHeader";

export function CaseStudies() {
  return (
    <section id="work" className="container-shell py-16">
      <SectionHeader
        eyebrow="Featured systems"
        title="Architecture, delivery, and operational leverage."
        description="These are the kinds of systems I most enjoy building: high-ownership platforms with real throughput, clear business impact, and carefully chosen tradeoffs."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {caseStudies.map((study, index) => {
          const Icon = study.icon;
          return (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="glass-panel rounded-[1.75rem] p-6 shadow-xl transition-colors hover:bg-white/[0.07]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="flex items-center gap-3 text-2xl font-semibold text-white">
                    <span className="rounded-xl bg-white/10 p-2"><Icon className="h-5 w-5" /></span>
                    {study.title}
                  </h3>
                  <p className="mt-2 text-neutral-400">{study.subtitle}</p>
                </div>
                <ExternalLink className="h-5 w-5 text-neutral-500" />
              </div>
              <ul className="mt-6 space-y-3 text-neutral-300">
                {study.points.map((point) => (
                  <li key={point} className="flex gap-3 leading-6">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-neutral-200" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm text-neutral-200">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
