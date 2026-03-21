"use client";

import React, { Suspense } from "react";
import Spline from "@splinetool/react-spline";

interface SplineSceneProps {
  scene: string;
  className?: string;
  fallback?: React.ReactNode;
}

export function SplineScene({
  scene,
  className = "w-full h-full",
  fallback = null,
}: SplineSceneProps) {
  return (
    <Suspense fallback={fallback || <div className={`${className} bg-zinc-900`} />}>
      <Spline scene={scene} className={className} />
    </Suspense>
  );
}
