"use client";

import { motion } from "framer-motion";

import { GlowingEffect } from "@/components/ui/glowing-effect";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";

type HeroProps = {
  id: string;
};

export function Hero({ id }: HeroProps) {
  return (
    <section id={id} className="scroll-mt-28 px-4 pb-16 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          <div className="relative inline-flex overflow-hidden rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm text-accent">
            <GlowingEffect
              spread={18}
              glow
              disabled={false}
              proximity={28}
              inactiveZone={0.03}
              borderWidth={1}
            />
            Available for meaningful builds
          </div>

          <div className="space-y-5">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-muted">
              Saransh Yadav
            </p>
            <h1 className="font-display text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Turning ideas into impactful tech products
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted sm:text-xl">
              Vibecoder &amp; Hackathon Enthusiast building real-world solutions
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="relative inline-flex items-center justify-center overflow-hidden rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-[#8ff0d6]"
            >
              <GlowingEffect
                spread={20}
                glow
                disabled={false}
                proximity={32}
                inactiveZone={0.03}
                borderWidth={1}
              />
              View Projects
            </a>
            <a
              href="#contact"
              className="relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-foreground transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
            >
              <GlowingEffect
                spread={20}
                glow
                disabled={false}
                proximity={32}
                inactiveZone={0.03}
                borderWidth={1}
              />
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="group relative h-[400px] md:h-[500px]"
        >
          <Spotlight />
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
