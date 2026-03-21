"use client";

import { motion } from "framer-motion";

import GlowCard from "@/components/ui/glow-card";
import { SkillCategory } from "@/data/skills";

type SkillsProps = {
  id: string;
  categories: SkillCategory[];
};

export function Skills({ id, categories }: SkillsProps) {
  return (
    <section id={id} className="scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex max-w-2xl flex-col gap-4 text-left"
        >
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent">Skills</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            A practical toolkit for building
          </h2>
          <p className="text-base leading-7 text-muted sm:text-lg">
            Organized by the areas I use most while learning, shipping, and experimenting.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <GlowCard className="h-full">
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span key={item} className="rounded-md bg-zinc-800 px-2 py-1 text-xs text-zinc-300">
                      {item}
                    </span>
                  ))}
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
