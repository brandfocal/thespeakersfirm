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

import { HomeClientWrapper } from "@/components/HomeClientWrapper";

export default function Home() {
  return <HomeClientWrapper />;
}
