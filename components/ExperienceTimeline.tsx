"use client";

import { motion } from "framer-motion";
import { timeline } from "@/data/site";
import { SectionHeader } from "@/components/SectionHeader";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="container-shell py-16">
      <SectionHeader
        eyebrow="Experience"
        title="A progression built on systems depth."
      />
      <div className="mt-10 space-y-5">
        {timeline.map((item, index) => (
          <motion.div
            key={`${item.company}-${item.period}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="glass-panel rounded-[1.5rem] p-6 md:p-7"
          >
            <div className="grid gap-6 md:grid-cols-[0.9fr_2.1fr]">
              <div>
                <div className="text-xl font-semibold text-white">{item.company}</div>
                <div className="mt-1 text-neutral-300">{item.role}</div>
                <div className="mt-2 text-sm text-neutral-500">{item.period}</div>
              </div>
              <p className="leading-7 text-neutral-300">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
