"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Star, X } from "lucide-react";

const COLORS = {
  black: "#0A0A0A",
  red: "#e30e04",
  gray: "#9A9A9A",
  silver: "#9A9A9A",
  borderGray: "#E5E5E5",
  darkGray: "#1E1E1E",
  offWhite: "#FFFFFF",
  deepBlack: "#0A0A0A"
};

const SECTION_HEADING_CLASS = "font-['Kontora',sans-serif] max-w-[12ch] text-2xl font-bold uppercase leading-[0.9] tracking-[-0.05em] sm:text-3xl md:text-4xl lg:text-5xl";
const SUB_HEADING_CLASS = "font-['Kontora',sans-serif] text-lg font-bold uppercase leading-[0.95] tracking-[-0.05em] sm:text-xl md:text-2xl";
const SECTION_TAG_CLASS = "inline-flex items-center border border-l-[4px] px-3 py-2 text-[10px] font-bold uppercase tracking-widest sm:px-4 sm:text-xs";
const CTA_TEXT_CLASS = "text-[10px] font-bold uppercase leading-none tracking-widest sm:text-xs";

const SECTION_TAG_STYLE: React.CSSProperties = {
  backgroundColor: "#111111",
  borderColor: COLORS.darkGray,
  borderLeftColor: COLORS.red,
  color: COLORS.offWhite
};

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
  className: string;
}

interface MediaItem {
  id: string;
  headline: string;
  publication: string;
  date: string;
  action: string;
  url: string;
  image: string;
}

const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "phumzile-gal-1",
    src: "/speakers/Phumzile-Mlambo-Ngcuka/finals/Dr-Phumzile-Mlambo-Ngcuka.jpg",
    alt: "Dr. Phumzile Mlambo-Ngcuka speaking address",
    caption: "Executive address on gender parity",
    className: "sm:col-span-2 lg:col-span-2"
  },
  {
    id: "phumzile-gal-2",
    src: "/speakers/Phumzile-Mlambo-Ngcuka/finals/Dr.-Phumzile-Mlambo-Ngcuka-2.jpg",
    alt: "Dr. Phumzile Mlambo-Ngcuka panel discussion",
    caption: "Policy roundtable commentary",
    className: ""
  },
  {
    id: "phumzile-gal-3",
    src: "/speakers/Phumzile-Mlambo-Ngcuka/finals/Dr.-Phumzile-Mlambo-Ngcuka-3.jpg",
    alt: "Dr. Phumzile Mlambo-Ngcuka workshop",
    caption: "Empowerment seminar",
    className: ""
  },
  {
    id: "phumzile-gal-4",
    src: "/speakers/Phumzile-Mlambo-Ngcuka/finals/Dr.-Phumzile-Mlambo-Ngcuka-4.jpg",
    alt: "Dr. Phumzile Mlambo-Ngcuka presenting on stage",
    caption: "Keynote presentation",
    className: "sm:col-span-2"
  },
  {
    id: "phumzile-gal-5",
    src: "/speakers/Phumzile-Mlambo-Ngcuka/finals/Dr.-Phumzile-Mlambo-Ngcuka-5.jpg",
    alt: "Dr. Phumzile Mlambo-Ngcuka conference address",
    caption: "International summit address",
    className: ""
  }
];

const MEDIA_ARTICLES: MediaItem[] = [
  {
    id: "media-gender-equality",
    headline: "Gender equality is a human imperative — and that means reframing masculinity",
    publication: "Daily Maverick",
    date: "02 Feb 2022",
    action: "Read Article",
    url: "https://www.dailymaverick.co.za/opinionista/2022-02-02-gender-equality-is-a-human-imperative-and-that-means-reframing-masculinity-and-power-inequalities/",
    image: "/speakers/Phumzile-Mlambo-Ngcuka/finals/Dr-Phumzile-Mlambo-Ngcuka-9.jpg"
  },
  {
    id: "media-literacy-rates",
    headline: "South African education system needs significant reform to address low literacy rates",
    publication: "Daily Maverick",
    date: "01 Feb 2022",
    action: "Read News",
    url: "https://www.dailymaverick.co.za/article/2022-02-01-south-african-education-system-needs-significant-reform-to-address-low-literacy-rates-of-children/",
    image: "/speakers/Phumzile-Mlambo-Ngcuka/finals/Dr.-Phumzile-Mlambo-Ngcuka-4.jpg"
  },
  {
    id: "media-womens-month",
    headline: "This Women's month, enough with all the platitudes",
    publication: "Daily Maverick",
    date: "10 Aug 2021",
    action: "Read Editorial",
    url: "https://www.dailymaverick.co.za/article/2021-08-10-this-womens-month-enough-with-all-the-platitudes/",
    image: "/speakers/Phumzile-Mlambo-Ngcuka/finals/Dr.-Phumzile-Mlambo-Ngcuka-7.jpg"
  }
];

export const ProfileAdditionalSections = ({ customVideos }: { customVideos?: Array<{ id: string; label: string; youtubeId: string }> }) => {
  const [activeGalleryImage, setActiveGalleryImage] = React.useState<GalleryImage | null>(null);
  const [activeVideoId, setActiveVideoId] = React.useState<string | null>(null);
  const closeLightbox = () => setActiveGalleryImage(null);

  React.useEffect(() => {
    if (activeGalleryImage === null) return undefined;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeGalleryImage]);

  const videoClips = customVideos || [];

  return (
    <div className="w-full">
      {/* Video Modal Player */}
      {activeVideoId && (
        <div 
          onClick={() => setActiveVideoId(null)}
          className="fixed inset-0 bg-black/95 z-[300] flex items-center justify-center p-4 md:p-12 cursor-pointer"
        >
          <button 
            onClick={() => setActiveVideoId(null)}
            className="absolute top-6 right-6 text-white hover:text-[#e30e04] transition-colors p-2 z-[310]"
            aria-label="Close video player"
          >
            <X className="w-8 h-8" />
          </button>
          <div 
            className="relative w-full max-w-5xl aspect-video bg-[#000000] border border-[#333333] overflow-hidden cursor-default rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe 
              src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1&rel=0`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
        </div>
      )}

      {/* 1. Moments & Milestones Gallery Section */}
      <section id="gallery" className="relative bg-[#0A0A0A] px-4 py-6 text-white sm:px-6 sm:py-8 md:py-10 lg:px-8 lg:py-12" aria-labelledby="gallery-heading">
        <div className="mx-auto grid max-w-[1312px] grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="col-span-1 lg:col-span-4">
            <p className={`${SECTION_TAG_CLASS} mb-6 w-fit`} style={SECTION_TAG_STYLE}><span>Moments &amp; Milestones</span></p>
            <h2 id="gallery-heading" className={`${SECTION_HEADING_CLASS}`}>
              <span className="block text-[#FFFFFF]">Moments &amp;</span>
              <span className="block text-[#e30e04]">Milestones</span>
            </h2>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-[#9A9A9A] sm:text-lg md:text-xl"><span>A glimpse into Dr. Phumzile Mlambo-Ngcuka's global advocacy journey.</span></p>
          </div>
          <div className="col-span-1 grid auto-rows-[220px] gap-3 sm:grid-cols-2 md:auto-rows-[240px] lg:col-span-8 lg:grid-cols-3">
            {GALLERY_IMAGES.map((image, imageIndex) => (
              <button key={image.id} type="button" onClick={() => setActiveGalleryImage(image)} className={`group relative overflow-hidden rounded-[22px] border border-white/10 bg-[#111111] text-left shadow-[0_18px_50px_rgba(0,0,0,0.22)] ${image.className}`} aria-label={`Open gallery image: ${image.caption}`}>
                <img src={image.src} alt={image.alt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              </button>
            ))}
          </div>
        </div>
        <div className="mx-auto max-w-[1312px] mt-12 border-t border-white/10" />
      </section>

      {/* 3. Video Reel Section */}
      {videoClips.length > 0 && (
        <section id="experience-reel" className="relative bg-[#0A0A0A] px-4 py-6 text-white sm:px-6 sm:py-8 md:py-10 lg:px-8 lg:py-12" aria-labelledby="experience-reel-heading">
          <div className="mx-auto max-w-[1312px]">
            <div className="mb-10 grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
              <div className="col-span-1 lg:col-span-7">
                <p className={`${SECTION_TAG_CLASS} mb-6 w-fit`} style={SECTION_TAG_STYLE}><span>Experience Reel</span></p>
                <h2 id="experience-reel-heading" className={SECTION_HEADING_CLASS}>
                  <span className="block text-[#FFFFFF]">Watch Them</span>
                  <span className="block text-[#e30e04]">In Action</span>
                </h2>
              </div>
            </div>
            
            <div className={`grid gap-6 ${videoClips.length === 1 ? 'max-w-6xl md:grid-cols-1 mx-auto' : videoClips.length === 2 ? 'max-w-5xl md:grid-cols-2 mx-auto' : 'md:grid-cols-3'}`}>
              {videoClips.map(clip => (
                <article 
                  key={clip.id} 
                  onClick={() => setActiveVideoId(clip.youtubeId)}
                  className="group relative flex flex-col cursor-pointer overflow-hidden rounded-[20px] border border-[#1E1E1E] bg-[#111111] hover:border-[#e30e04]/70 transition-colors"
                >
                  <div className="relative aspect-video w-full flex items-center justify-center overflow-hidden">
                    <img 
                      src={`https://img.youtube.com/vi/${clip.youtubeId}/hqdefault.jpg`}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = `https://img.youtube.com/vi/${clip.youtubeId}/mqdefault.jpg`;
                      }}
                      alt={`${clip.label} clip`}
                      className="absolute inset-0 w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-95 group-hover:scale-105 transition-all duration-500 z-0"
                    />
                    <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 z-[5] h-[50%] bg-gradient-to-t from-black via-black/30 to-transparent" />
                    <div className="relative z-[7] flex h-16 w-16 items-center justify-center rounded-full border border-white/45 bg-black/45 text-white shadow-md backdrop-blur-md transition-all duration-300 group-hover:border-[#e30e04] group-hover:bg-[#e30e04]">
                      <svg className="ml-1.5 h-6 w-6 fill-current" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="p-5 text-[12px] font-bold uppercase tracking-widest text-[#FFFFFF] sm:text-sm"><span>{clip.label}</span></h3>
                </article>
              ))}
            </div>
          </div>
          <div className="mx-auto max-w-[1312px] mt-12 border-t border-white/10" />
        </section>
      )}

      {/* 2. Media Coverage Section */}
      <section id="media-coverage" className="relative bg-[#0A0A0A] px-4 py-6 text-white sm:px-6 sm:py-8 md:py-10 lg:px-8 lg:py-12" aria-labelledby="media-coverage-heading">
        <div className="mx-auto max-w-[1312px]">
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className={`${SECTION_TAG_CLASS} mb-6 w-fit`} style={SECTION_TAG_STYLE}><span>Media Coverage</span></p>
              <h2 id="media-coverage-heading" className={SECTION_HEADING_CLASS}>
                <span className="block text-[#FFFFFF]">Media</span>
                <span className="block text-[#e30e04]">Coverage</span>
              </h2>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {MEDIA_ARTICLES.map(item => (
              <article key={item.id} className="flex min-h-[260px] flex-col justify-between rounded-[24px] border border-[#1E1E1E] bg-[#111111] p-6 transition-colors hover:border-[#e30e04]/70 sm:p-8">
                <div>
                  <div className="relative mb-6 aspect-video overflow-hidden rounded-[14px] border border-[#1E1E1E] bg-[#0A0A0A]">
                    <img src={item.image} alt={item.headline} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                  </div>
                  <h3 className="max-w-md text-lg font-bold leading-tight tracking-[-0.04em] text-white sm:text-xl md:text-2xl"><span>{item.headline}</span></h3>
                </div>
                <div className="mt-8 border-t border-[#1E1E1E] pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#9A9A9A] sm:text-xs"><span>{item.publication} · {item.date}</span></p>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-11 items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-[#e30e04] transition-opacity hover:opacity-75 sm:text-xs" aria-label={`${item.action}: ${item.headline}`}>
                    <span>{item.action}</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeGalleryImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/82 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Gallery image lightbox">
          <button type="button" className="absolute inset-0 cursor-default bg-transparent border-0" onClick={closeLightbox} aria-label="Close gallery image" />
          <figure className="relative z-10 w-full max-w-5xl overflow-hidden rounded-[26px] border border-white/15 bg-[#0A0A0A] shadow-2xl">
            <img src={activeGalleryImage.src} alt={activeGalleryImage.alt} className="max-h-[78vh] w-full object-contain mx-auto" />
            <figcaption className="flex flex-col items-start justify-between gap-4 p-5 text-white sm:flex-row sm:items-center">
              <span className="text-[10px] font-bold uppercase tracking-widest sm:text-xs">{activeGalleryImage.caption}</span>
              <button type="button" onClick={closeLightbox} className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/30 text-white bg-transparent transition-colors hover:bg-white hover:text-[#0A0A0A]" aria-label="Close lightbox">
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
};
