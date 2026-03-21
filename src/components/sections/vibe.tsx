"use client";

import { motion } from "framer-motion";

import { GlowingEffect } from "@/components/ui/glowing-effect";

type VibeProps = {
  id: string;
  title: string;
  description: string;
};

export function Vibe({ id, title, description }: VibeProps) {
  return (
    <section id={id} className="scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-r from-accent/10 via-white/5 to-white/0 p-8 text-center shadow-card sm:p-10"
      >
        <GlowingEffect
          spread={42}
          glow
          disabled={false}
          proximity={80}
          inactiveZone={0.03}
          borderWidth={2}
        />
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent">Vibe</p>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-muted">{description}</p>
      </motion.div>
    </section>
  );
}
