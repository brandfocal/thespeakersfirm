import * as React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Search } from "lucide-react";
import type { Metadata } from "next";
import { ALL_SPEAKERS } from "@/lib/allSpeakers";
import { CATEGORY_SPEAKERS_MAP, CATEGORIES_CONFIG } from "@/lib/categories";

interface PageProps {
  params: Promise<{ trackId: string }>;
}

const SECTION_TAG_CLASS = 'inline-flex items-center border border-l-[4px] px-4 py-2 text-[12px] font-bold uppercase tracking-[0.12em] shadow-none';
const SECTION_TAG_STYLE = {
  backgroundColor: '#000000',
  borderColor: '#000000',
  borderLeftColor: '#e30e04',
  color: '#ffffff'
};

const SectionTag = ({ children }: { children: string }) => (
  <span className={SECTION_TAG_CLASS} style={SECTION_TAG_STYLE}>{children}</span>
);

const VerticalBorderLines = ({ isDark = false }: { isDark?: boolean }) => {
  const borderColor = isDark ? '#393939' : '#C7C7C8';
  const capColor = isDark ? '#FFFFFF' : '#000000';
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-20">
      <div className="h-full mx-auto max-w-[1440px] relative px-6 md:px-16">
        <div
          className="absolute left-6 md:left-16 top-0 bottom-0 w-[1px]"
          style={{ backgroundColor: borderColor }}
        >
          <div
            className="absolute -top-[3.5px] left-1/2 -translate-x-1/2 w-[7px] h-[7px]"
            style={{ backgroundColor: capColor }}
          />
        </div>
        <div
          className="absolute right-6 md:right-16 top-0 bottom-0 w-[1px]"
          style={{ backgroundColor: borderColor }}
        >
          <div
            className="absolute -top-[3.5px] left-1/2 -translate-x-1/2 w-[7px] h-[7px]"
            style={{ backgroundColor: capColor }}
          />
        </div>
      </div>
    </div>
  );
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { trackId } = await params;
  const config = CATEGORIES_CONFIG.find(c => c.id === trackId);
  const trackName = config?.fullTitle || trackId
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${trackName} Keynote Speakers | The Speakers Firm`,
    description: config?.description || `Browse world-class keynote speakers, executive performance trainers, and governance authorities specializing in ${trackName}.`,
    alternates: {
      canonical: `https://thespeakersfirm.co.za/tracks/${trackId}`,
    }
  };
}

export default async function TrackPage({ params }: PageProps) {
  const { trackId } = await params;

  const catConfig = CATEGORIES_CONFIG.find((c) => c.id === trackId);
  const trackTitle = catConfig?.fullTitle || trackId
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  const trackDescription = catConfig?.description || "World-class keynote speakers, executive performance trainers, and governance authorities.";

  // Filter speakers for this track
  const matchingSpeakers = ALL_SPEAKERS.filter((speaker) => {
    if (speaker.trackId === trackId) return true;
    if (speaker.category && speaker.category.includes(trackId)) return true;
    const allowed = CATEGORY_SPEAKERS_MAP[trackId];
    if (allowed && allowed.includes(speaker.id)) return true;
    return false;
  });

  const displaySpeakers = matchingSpeakers.length > 0 ? matchingSpeakers : ALL_SPEAKERS.slice(0, 12);

  return (
    <main className="min-h-screen bg-[#000000] text-white selection:bg-[#e30e04] selection:text-white relative">
      <VerticalBorderLines isDark={true} />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 px-6 md:px-16 border-b border-white/[0.08]">
        <div className="max-w-[1440px] mx-auto">
          <Link 
            href="/find-a-speaker" 
            className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.12em] text-white/60 hover:text-[#e30e04] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Speaker Categories</span>
          </Link>
          
          <div className="mb-4">
            <SectionTag>FACULTY TRACK</SectionTag>
          </div>

          <h1 className="text-[clamp(2.2rem,6vw,4.5rem)] font-black uppercase leading-[0.92] tracking-[-0.05em] text-white mt-4 max-w-4xl">
            {trackTitle}
          </h1>

          <div className="mt-5 h-[3px] w-28 bg-[#e30e04]" />
          
          <p className="mt-6 text-base md:text-lg text-white/70 max-w-2xl leading-relaxed">
            {trackDescription}
          </p>

          <div className="mt-8 flex items-center gap-4 text-xs uppercase tracking-widest text-white/40">
            <span>Showing {displaySpeakers.length} Faculty Members</span>
          </div>
        </div>
      </section>

      {/* Faculty Cards Grid */}
      <section className="relative py-16 px-6 md:px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {displaySpeakers.map((speaker) => (
              <Link 
                key={speaker.id} 
                href={speaker.path || `/tracks/${trackId}/${speaker.id}`} 
                className="group relative flex flex-col overflow-hidden bg-[#121212] border border-white/[0.08] hover:border-[#e30e04]/60 transition-all duration-300"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-[#1a1a1a]">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name} 
                    className="h-full w-full object-cover grayscale contrast-[1.06] transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-4 flex flex-col justify-between flex-1 bg-[#121212]">
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-[#e30e04] transition-colors line-clamp-1">
                      {speaker.name}
                    </h3>
                    <p className="mt-1 text-[10px] text-white/50 line-clamp-2 leading-relaxed">
                      {speaker.role || speaker.designation}
                    </p>
                  </div>
                  
                  <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.08em] text-[#e30e04]">
                    <span>Book Speaker</span>
                    <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 p-8 md:p-12 rounded-2xl bg-[#0a0a0a] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e30e04] block mb-2">
                Need Guidance?
              </span>
              <h2 className="text-2xl md:text-3xl font-bold uppercase text-white tracking-tight">
                Curate the perfect speaker for your engagement
              </h2>
              <p className="text-sm text-white/60 mt-2 max-w-xl">
                Our advisory team will match your theme, audience profile, and event format with faculty authorities.
              </p>
            </div>
            <Link
              href="/brief-us-now"
              className="shrink-0 inline-flex items-center gap-3 rounded-full bg-[#e30e04] px-8 py-4 text-[12px] font-bold uppercase tracking-[0.1em] text-white hover:bg-white hover:text-black transition-colors"
            >
              <span>Brief Us Now</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
