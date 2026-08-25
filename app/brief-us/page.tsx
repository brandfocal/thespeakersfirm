import type { Metadata } from "next";
import { BriefUs } from "@/components/generated/BriefUs";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Brief Us | Custom Talent & Speaker Matching",
  description: "Tell us about your mission, strategic messaging, and momentum goals. We decode your brief like a blueprint to match you with the precise voice that shifts the room.",
  alternates: {
    canonical: "https://thespeakersfirm.co.za/brief-us",
  }
};

export default function BriefUsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black text-white flex items-center justify-center">Loading...</div>}>
      <BriefUs />
    </Suspense>
  );
}
