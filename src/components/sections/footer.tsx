import { GlowingEffect } from "@/components/ui/glowing-effect";

type FooterProps = {
  name: string;
};

export function Footer({ name }: FooterProps) {
  return (
    <footer className="px-4 pb-10 pt-6 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[1.5rem] border border-white/10 bg-surface/70 px-6 py-6 text-sm text-muted shadow-card">
        <GlowingEffect
          spread={30}
          glow
          disabled={false}
          proximity={52}
          inactiveZone={0.08}
          borderWidth={2}
        />
        <p>© {new Date().getFullYear()} {name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
