"use client";

import { motion } from "framer-motion";

import { GlowingEffect } from "@/components/ui/glowing-effect";

type AboutProps = {
  id: string;
};

export function About({ id }: AboutProps) {
  return (
    <section id={id} className="scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex max-w-2xl flex-col gap-4 text-left"
        >
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent">About</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Learning by building, not waiting
          </h2>
          <p className="text-base leading-7 text-muted sm:text-lg">
            A quick snapshot of who I am and how I approach tech.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-surface/80 p-8 shadow-card">
            <GlowingEffect
              spread={36}
              glow
              disabled={false}
              proximity={64}
              inactiveZone={0.03}
              borderWidth={2}
            />
            <p className="text-lg leading-8 text-muted">
              I am a first-year Computer Science student who enjoys turning ideas into practical,
              real-world solutions. My mindset is simple: learn by doing, keep building, and use
              each project to get sharper at solving problems that matter.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
