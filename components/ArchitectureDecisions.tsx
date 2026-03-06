"use client";

import { motion } from "framer-motion";
import { decisions } from "@/data/site";
import { SectionHeader } from "@/components/SectionHeader";

export function ArchitectureDecisions() {
  return (
    <section id="decisions" className="container-shell py-16">
      <div className="grid items-start gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <SectionHeader
          eyebrow="Selected architecture decisions"
          title="Why the shape of the system matters."
          description="Strong systems are not just collections of services. They are sets of decisions made against real constraints: throughput, reliability, operator visibility, cost, and maintainability."
        />
        <div className="space-y-5">
          {decisions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="glass-panel rounded-[1.5rem] bg-gradient-to-br from-white/8 to-white/[0.03] p-6"
            >
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 leading-7 text-neutral-300"><span className="font-medium text-white">Why this won:</span> {item.why}</p>
              <p className="mt-2 leading-7 text-neutral-400"><span className="font-medium text-neutral-200">Tradeoff accepted:</span> {item.tradeoff}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
