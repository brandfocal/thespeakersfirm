import type { Metadata } from "next";
import { BookASpeaker } from "@/components/generated/BookASpeaker";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Book a Speaker | Elite Curation & Boardroom Transformation",
  description: "Secure premium access to world-class keynote speakers and strategic voices. Our curated process ensures impact and outcome alignment for boardrooms, events, and summits.",
  alternates: {
    canonical: "https://thespeakersfirm.co.za/book-a-speaker",
  }
};

export default function BookASpeakerPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black text-white flex items-center justify-center">Loading...</div>}>
      <BookASpeaker />
    </Suspense>
  );
}
