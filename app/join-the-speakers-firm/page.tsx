import { JoinTheSpeakersFirm } from "@/components/generated/JoinTheSpeakersFirm";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Join The Speakers Firm | Prospective Speaker & Talent Submissions",
  description: "Explore opportunities to join The Speakers Firm roster of elite thought leaders, keynote speakers, and boardroom practitioners.",
};

export default function JoinPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black text-white flex items-center justify-center">Loading...</div>}>
      <JoinTheSpeakersFirm />
    </Suspense>
  );
}
