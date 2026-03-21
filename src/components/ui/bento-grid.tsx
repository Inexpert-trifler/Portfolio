import type { ComponentType, ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("grid w-full auto-rows-[22rem] grid-cols-1 gap-4 lg:grid-cols-3", className)}>
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  footer,
}: {
  name: string;
  className: string;
  background: ReactNode;
  Icon: ComponentType<{ className?: string }>;
  description: ReactNode;
  href: string;
  cta: string;
  footer?: ReactNode;
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-[1.75rem]",
      "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className,
    )}
  >
    <GlowingEffect
      spread={32}
      glow
      disabled={false}
      proximity={72}
      inactiveZone={0.08}
      borderWidth={2}
      className="rounded-[1.75rem]"
    />
    <div>{background}</div>
    <div className="pointer-events-none relative z-10 flex h-full transform-gpu flex-col justify-between gap-6 p-6 transition-all duration-300 group-hover:-translate-y-6">
      <div className="space-y-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm">
          <Icon className="h-6 w-6 origin-left transform-gpu text-neutral-100 transition-all duration-300 ease-in-out group-hover:scale-90" />
        </div>
        <div className="space-y-2">
          <h3 className="font-display text-2xl font-semibold text-neutral-950 dark:text-neutral-100">
            {name}
          </h3>
          <div className="max-w-lg text-sm leading-7 text-neutral-600 dark:text-neutral-300">
            {description}
          </div>
        </div>
      </div>
      {footer ? <div className="flex flex-wrap gap-2">{footer}</div> : null}
    </div>

    <div className="pointer-events-none absolute bottom-0 z-20 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
      <Button variant="ghost" asChild size="sm" className="pointer-events-auto text-foreground">
        <a href={href}>
          {cta}
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/10 group-hover:dark:bg-neutral-800/10" />
  </div>
);

export { BentoCard, BentoGrid };
