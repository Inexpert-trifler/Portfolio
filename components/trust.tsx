"use client";

import { motion } from "framer-motion";

import { GlowingEffect } from "@/components/ui/glowing-effect";

type TrustProps = {
  id: string;
  items: string[];
};

export function Trust({ id, items }: TrustProps) {
  return (
    <section id={id} className="scroll-mt-28 px-4 py-10 sm:px-6 lg:px-8">
      <div className="relative mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-4 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 px-6 py-6 backdrop-blur-sm">
        <GlowingEffect
          spread={36}
          glow
          disabled={false}
          proximity={72}
          inactiveZone={0.08}
          borderWidth={2}
        />
        {items.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-full border border-white/10 bg-background/70 px-5 py-3 text-sm font-medium text-foreground transition duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:text-accent"
          >
            <GlowingEffect
              spread={18}
              glow
              disabled={false}
              proximity={28}
              inactiveZone={0.02}
              borderWidth={1}
            />
            {item}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
