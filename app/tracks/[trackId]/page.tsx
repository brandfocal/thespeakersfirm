import * as React from "react";
import Link from "next/link";
import { ArrowLeft, User } from "lucide-react";

interface PageProps {
  params: Promise<{ trackId: string }>;
}

export default async function TrackPage({ params }: PageProps) {
  const { trackId } = await params;

  // Format trackId to readable name
  const trackName = trackId
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="min-h-screen bg-[#F8F7F5] pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.12em] text-[#686869] hover:text-[#212121] transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
        
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#e30e04] block mb-4">
          Faculty Track
        </span>
        <h1 className="font-serif text-[40px] md:text-[56px] font-light tracking-[-0.04em] leading-[1.05] text-[#212121] mb-8">
          {trackName}
        </h1>
        
        <div className="h-[1px] w-full bg-[#C7C7C8]/40 my-10" />

        <div className="space-y-6">
          <h2 className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#686869] mb-6">
            Featured Speakers in this Track
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Dynamic speakers list placeholder */}
            <div className="p-8 rounded-2xl border border-[#C7C7C8]/40 bg-white shadow-sm flex flex-col justify-between hover:border-[#e30e04] transition-colors group">
              <div>
                <div className="w-12 h-12 rounded-full bg-[#F8F7F5] flex items-center justify-center text-[#686869] mb-6 group-hover:bg-[#e30e04] group-hover:text-white transition-colors">
                  <User className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[#212121] mb-2">Speaker Profile</h3>
                <p className="text-sm text-[#686869] leading-relaxed mb-6">
                  Click to view detailed biography, previous interventions, key topics, and speaking engagements.
                </p>
              </div>
              <Link 
                href={`/tracks/${trackId}/speaker-placeholder`}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#e30e04]"
              >
                <span>View Profile</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
