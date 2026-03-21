"use client";

import { motion } from "framer-motion";

import GlowCard from "@/components/ui/glow-card";
import { Achievement } from "@/data/achievements";

type AchievementsProps = {
  id: string;
  achievements: Achievement[];
};

export function Achievements({ id, achievements }: AchievementsProps) {
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
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent">Achievements</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Milestones that reflect momentum
          </h2>
          <p className="text-base leading-7 text-muted sm:text-lg">
            Small wins that show consistency, participation, and a builder-first mindset.
          </p>
        </motion.div>

        <div className="grid gap-4">
          {achievements.map((achievement, index) => (
            <motion.article
              key={achievement.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <GlowCard className="h-full">
                <h3 className="text-lg font-semibold text-white">{achievement.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">{achievement.description}</p>
              </GlowCard>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
