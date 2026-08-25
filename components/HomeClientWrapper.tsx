"use client";

import * as React from "react";
import dynamic from "next/dynamic";

const TheSpeakersFirmHome = dynamic(
  () => import("@/components/generated/TSFHome").then((mod) => mod.TheSpeakersFirmHome),
  { 
    ssr: false,
    loading: () => (
      <div className="min-h-screen w-full flex items-center justify-center bg-[#ffffff]">
        <div className="text-sm font-mono tracking-widest uppercase animate-pulse text-[#686869]">
          Loading experience...
        </div>
      </div>
    )
  }
);

export function HomeClientWrapper() {
  return (
    <React.Suspense fallback={
      <div className="min-h-screen w-full flex items-center justify-center bg-[#ffffff]">
        <div className="text-sm font-mono tracking-widest uppercase animate-pulse text-[#686869]">
          Loading experience...
        </div>
      </div>
    }>
      <TheSpeakersFirmHome />
    </React.Suspense>
  );
}
