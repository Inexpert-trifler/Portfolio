import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";

import { FallingPattern } from "@/components/ui/falling-pattern";

import "../styles/globals.css";

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

const bodyFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});


export const metadata: Metadata = {
  title: "Saransh Yadav | Portfolio",
  description: "Modern portfolio for Saransh Yadav, a vibecoder and hackathon enthusiast building impactful tech products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} bg-background text-foreground antialiased`}
      >
        <div className="fixed inset-0 -z-10">
          <FallingPattern
            className="h-full w-full"
            color="rgba(110, 231, 200, 0.42)"
            backgroundColor="var(--background)"
            blurIntensity="0.9em"
            density={1.1}
            duration={180}
          />
        </div>
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
