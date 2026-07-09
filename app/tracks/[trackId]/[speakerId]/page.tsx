import * as React from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, FileText, Globe } from "lucide-react";
import { AboutTeamSection } from "@/components/generated/BonangMohaleProfile";

interface PageProps {
  params: Promise<{ trackId: string; speakerId: string }>;
}

export default async function SpeakerPage({ params }: PageProps) {
  const { trackId, speakerId } = await params;

  if (trackId === "corporate-governance-ethics-statesmanship" && speakerId === "bonang-mohale") {
    return <AboutTeamSection />;
  }

  // Format parameters to readable names
  const trackName = trackId
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const speakerName = speakerId
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="min-h-screen bg-[#F8F7F5] pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <Link 
          href={`/tracks/${trackId}`}
          className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.12em] text-[#686869] hover:text-[#212121] transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Track</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Image/Visual Placeholder & Core Meta */}
          <div className="lg:col-span-4 space-y-6">
            <div className="aspect-[3/4] w-full rounded-2xl bg-white border border-[#C7C7C8]/40 shadow-sm overflow-hidden flex items-center justify-center relative group">
              <div className="text-center p-6">
                <div className="w-20 h-20 rounded-full bg-[#F8F7F5] flex items-center justify-center text-[#686869] mx-auto mb-4">
                  <span className="font-serif text-3xl font-light italic">
                    {speakerName.charAt(0)}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-[#212121]">{speakerName}</h4>
                <p className="text-[11px] text-[#686869] uppercase tracking-wider mt-1">{trackName}</p>
              </div>
            </div>

            <div className="rounded-2xl border border-[#C7C7C8]/40 bg-white p-6 space-y-4 shadow-sm">
              <div className="flex items-center gap-3 text-[#212121]">
                <Globe className="w-4 h-4 text-[#686869]" />
                <span className="text-xs font-semibold uppercase tracking-wider">Africa & Global Engagement</span>
              </div>
              <div className="flex items-center gap-3 text-[#212121]">
                <Calendar className="w-4 h-4 text-[#686869]" />
                <span className="text-xs font-semibold uppercase tracking-wider">Keynotes, Roundtables & Briefings</span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Speaking Topics */}
          <div className="lg:col-span-8 space-y-8">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#e30e04] block mb-2">
                Faculty Profile
              </span>
              <h1 className="font-serif text-[42px] md:text-[56px] font-light tracking-[-0.04em] leading-[1.05] text-[#212121] mb-4">
                {speakerName}
              </h1>
              <p className="text-lg md:text-xl font-light text-[#686869] leading-relaxed">
                Expert analyst and key voice in the {trackName} competency track.
              </p>
            </div>

            <div className="h-[1px] w-full bg-[#C7C7C8]/40" />

            {/* Detailed Bio Section */}
            <div className="space-y-4">
              <h3 className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#212121]">
                Biography
              </h3>
              <p className="text-[#686869] leading-relaxed">
                Biography placeholder for {speakerName}. This section will contain the speaker&apos;s background, executive career, advisory experience, and academic references.
              </p>
            </div>

            {/* Speaking Topics */}
            <div className="space-y-4 pt-4">
              <h3 className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#212121]">
                Focus Areas & Core Interventions
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-start gap-3 p-4 rounded-xl border border-[#C7C7C8]/30 bg-white shadow-sm">
                  <FileText className="w-4 h-4 text-[#e30e04] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#212121] mb-1">Keynote Intervention 1</h4>
                    <p className="text-xs text-[#686869]">Actionable strategic perspectives and institutional leadership models.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 p-4 rounded-xl border border-[#C7C7C8]/30 bg-white shadow-sm">
                  <FileText className="w-4 h-4 text-[#e30e04] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#212121] mb-1">Keynote Intervention 2</h4>
                    <p className="text-xs text-[#686869]">Operational execution frameworks under complex boardroom environments.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Direct Booking CTA */}
            <div className="pt-6">
              <Link 
                href="/#brief-us"
                className="inline-flex items-center justify-center rounded-full bg-[#e30e04] text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] hover:bg-[#c30c03] transition-colors shadow-md"
              >
                Book This Speaker
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
