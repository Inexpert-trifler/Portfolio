"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

import GlowCard from "@/components/ui/glow-card";
import { Project } from "@/data/projects";

type ProjectsProps = {
  id: string;
  projects: Project[];
};

export function Projects({ id, projects }: ProjectsProps) {
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
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={project.featured ? "md:col-span-2 xl:col-span-1" : ""}
              >
                <GlowCard className="flex h-full flex-col gap-5">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                    {project.featured ? (
                      <span className="rounded-md bg-zinc-800 px-2 py-1 text-xs text-zinc-300">
                        Featured
                      </span>
                    ) : null}
                  </div>

                  <p className="text-sm leading-7 text-zinc-400">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((item) => (
                      <span key={item} className="rounded-md bg-zinc-800 px-2 py-1 text-xs text-zinc-300">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center gap-5 text-sm text-zinc-300">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 transition duration-300 hover:text-white"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 transition duration-300 hover:text-white"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                      Live
                    </a>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
