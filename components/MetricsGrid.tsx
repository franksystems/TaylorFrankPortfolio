"use client";

import { motion } from "framer-motion";
import { metrics } from "@/data/site";

export function MetricsGrid() {
  return (
    <section className="container-shell pb-20">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: index * 0.04 }}
            className="glass-panel rounded-2xl p-5"
          >
            <div className="text-2xl font-semibold text-white md:text-3xl">{metric.value}</div>
            <div className="mt-2 text-sm text-neutral-400">{metric.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
