"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Container } from "@/components/Container";
import { expertise, profile } from "@/data/site";

export function Hero() {
  return (
    <section className="pb-20 pt-12 md:pt-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
              <div className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-1 text-xs text-neutral-100">
                Distributed Systems • Platform Engineering • Cloud Infrastructure
              </div>
              <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
                {profile.heroTitle}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-300 md:text-xl">{profile.heroDescription}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-medium text-neutral-950 transition-colors hover:bg-neutral-200"
                >
                  Explore systems <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-transparent px-5 py-3 font-medium text-white transition-colors hover:bg-white/10"
                >
                  <Mail className="h-4 w-4" /> Get in touch
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="card-shell p-6">
              <div className="mb-2 text-2xl font-semibold text-white">Core architecture profile</div>
              <p className="text-sm text-neutral-400">Built to signal staff-level scope at a glance.</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {expertise.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="font-medium text-white">{item.title}</div>
                    <p className="mt-2 text-sm leading-6 text-neutral-300">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
