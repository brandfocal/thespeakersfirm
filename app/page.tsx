import type { Metadata } from "next";
import { Suspense } from "react";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "The Speakers Firm | Elite Keynote Speakers & Executive Curation",
  description: "Forget everything you know about speaker bureaus. We don't just book speakers. We engineer moments of power. Trusted by boardrooms, institutions, and global brands to drive commercial momentum and strategic change.",
  alternates: {
    canonical: "https://thespeakersfirm.co.za",
  },
  openGraph: {
    title: "The Speakers Firm | Elite Keynote Speakers & Executive Curation",
    description: "Elite partner in boardroom transformation. The Speakers Firm curates strategic voices, keynotes, and leadership authorities to shift rooms and drive commercial momentum.",
    url: "https://thespeakersfirm.co.za",
    type: "website",
    siteName: "The Speakers Firm"
  },
  twitter: {
    card: "summary_large_image",
    title: "The Speakers Firm | Elite Keynote Speakers & Executive Curation",
    description: "Elite partner in boardroom transformation. The Speakers Firm curates strategic voices, keynotes, and leadership authorities to shift rooms."
  }
};

// Dynamically import the homepage component with SSR disabled to prevent hydration mismatches
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

export default function Home() {
  return (
    <Suspense fallback={
      <div className="min-h-screen w-full flex items-center justify-center bg-[#ffffff]">
        <div className="text-sm font-mono tracking-widest uppercase animate-pulse text-[#686869]">
          Loading experience...
        </div>
      </div>
    }>
      <TheSpeakersFirmHome />
    </Suspense>
  );
}
