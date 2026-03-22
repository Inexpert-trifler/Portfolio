"use client";

import { motion } from "framer-motion";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { projects } from "@/data/projects";

type ProjectsProps = {
  id: string;
};

export function Projects({ id }: ProjectsProps) {
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
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent">Projects</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Work built with execution in mind
          </h2>
          <p className="text-base leading-7 text-muted sm:text-lg">
            A mix of featured builds and fast-moving experiments shaped by product thinking.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <BentoGrid className="lg:grid-rows-3">
            {projects.map((project, index) => (
              <BentoCard
                key={project.title}
                name={project.featured ? `${project.title} · Featured` : project.title}
                description={project.description}
                href={project.github}
                cta="View Project"
                Icon={GitHubLogoIcon}
                background={
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-cyan-500 opacity-10" />
                }
                className={
                  index === 0
                    ? "lg:col-span-2 lg:row-span-2"
                    : index === 1
                      ? "lg:col-span-1 lg:row-span-2"
                      : "lg:col-span-1"
                }
              />
            ))}
          </BentoGrid>
        </motion.div>
      </div>
    </section>
  );
}
