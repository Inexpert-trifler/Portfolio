"use client";

import { motion } from "framer-motion";

import { GlowingEffect } from "@/components/ui/glowing-effect";

type ContactLink = {
  label: string;
  href: string;
  value: string;
};

type ContactProps = {
  id: string;
  links: ContactLink[];
};

export function Contact({ id, links }: ContactProps) {
  return (
    <section id={id} className="scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex max-w-2xl flex-col gap-4 text-left"
        >
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent">Contact</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Let us build something useful
          </h2>
          <p className="text-base leading-7 text-muted sm:text-lg">
            Reach out for collaborations, projects, and conversations around product ideas.
          </p>
        </motion.div>

        <div className="grid gap-4">
          {links.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col gap-2 overflow-hidden rounded-[1.5rem] border border-white/10 bg-surface/80 p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-accent/30"
            >
              <GlowingEffect
                spread={34}
                glow
                disabled={false}
                proximity={56}
                inactiveZone={0.04}
                borderWidth={2}
              />
              <span className="text-sm uppercase tracking-[0.25em] text-muted">{link.label}</span>
              <span className="text-lg font-medium text-foreground transition duration-300 group-hover:text-accent">
                {link.value}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
