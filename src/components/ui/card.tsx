import type { ReactNode } from "react";

import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 p-5",
        "transition-all duration-300 ease-out",
        "hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10 hover:border-zinc-600",
        className,
      )}
    >
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={2}
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
