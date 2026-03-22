"use client";

import { useEffect, useState } from "react";

import { About } from "@/components/sections/about";
import { Achievements } from "@/components/sections/achievements";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Trust } from "@/components/sections/trust";
import { Vibe } from "@/components/sections/vibe";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import Reveal from "@/components/ui/reveal";
import { achievements } from "@/data/achievements";
import {
  contactLinks,
  navItems,
  sectionIds,
  trustItems,
  type SectionId,
  vibeContent,
} from "@/data/site";
import { skillCategories } from "@/data/skills";

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<SectionId>("home");

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((entryA, entryB) => entryB.intersectionRatio - entryA.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id as SectionId);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.2, 0.35, 0.5, 0.7],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main className="relative overflow-x-hidden">
      <div className="relative">
        <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
          <div className="relative mx-auto flex max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-surface/75 px-4 py-4 shadow-card backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <GlowingEffect
              spread={34}
              glow
              disabled={false}
              proximity={64}
              inactiveZone={0.08}
              borderWidth={2}
            />
            <a href="#home" className="font-display text-lg font-semibold tracking-tight text-foreground">
              Saransh Yadav
            </a>

            <nav className="flex flex-wrap items-center gap-2 text-sm text-muted">
              {navItems.map((item) => {
                const isActive = activeSection === item.sectionId;

                return (
                  <a
                    key={item.sectionId}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`rounded-full px-3 py-2 transition duration-300 ${
                      isActive
                        ? "bg-accent text-slate-950"
                        : "bg-white/0 text-muted hover:bg-white/5 hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
          </div>
        </header>
        <div className="pt-28 sm:pt-32">
          <Reveal>
            <Hero id="home" />
          </Reveal>
        </div>
        <Trust id="trust" items={trustItems} />
        <About id="about" />
        <Reveal>
          <Projects id="projects" />
        </Reveal>
        <Reveal>
          <Skills id="skills" categories={skillCategories} />
        </Reveal>
        <Reveal>
          <Achievements id="achievements" achievements={achievements} />
        </Reveal>
        <Vibe id="vibe" title={vibeContent.title} description={vibeContent.description} />
        <Reveal>
          <Contact id="contact" links={contactLinks} />
        </Reveal>
        <Footer name="Saransh Yadav" />
      </div>
    </main>
  );
}
