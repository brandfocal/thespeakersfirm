"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

const COLORS = {
  black: "#0A0A0A",
  red: "#e30e04",
  gray: "#9A9A9A",
  darkGray: "#1E1E1E",
  offWhite: "#FFFFFF"
};

const SECTION_HEADING_CLASS = "font-['Kontora',sans-serif] max-w-[12ch] text-2xl font-bold uppercase leading-[0.9] tracking-[-0.05em] sm:text-3xl md:text-4xl lg:text-5xl";
const SECTION_TAG_CLASS = "inline-flex items-center border border-l-[4px] px-3 py-2 text-[10px] font-bold uppercase tracking-widest sm:px-4 sm:text-xs";

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

// 1. Clement Manyathela Additional Data
const CLEMENT_GALLERY: GalleryImage[] = [
  {
    id: "clement-gal-1",
    src: "/speakers/Clement Manyathela/Clement-Manyathela-The-Speakers-Firm-2.jpg",
    alt: "Clement Manyathela on stage",
    caption: "Clement hosting a live keynote",
    className: "sm:col-span-2 lg:col-span-2"
  },
  {
    id: "clement-gal-2",
    src: "/speakers/Clement Manyathela/Clement-Manyathela-The-Speakers-Firm-6.jpg",
    alt: "Clement Manyathela live broadcasting",
    caption: "Live Radio 702 broadcast",
    className: ""
  },
  {
    id: "clement-gal-3",
    src: "/speakers/Clement Manyathela/Clement-Manyathela-The-Speakers-Firm-7.jpg",
    alt: "Clement Manyathela moderator panel",
    caption: "High-level panel chairperson",
    className: ""
  }
];

const CLEMENT_MEDIA: MediaItem[] = [
  {
    id: "clement-art-1",
    headline: "Do we need a total ban of pit bulls as pets or stronger regulation?",
    publication: "Radio 702",
    date: "14 Nov 2022",
    action: "Listen to Podcast",
    url: "https://omny.fm/shows/mid-morning-show-702/do-we-need-a-total-ban-of-pit-bulls-as-pets-or-str#description",
    image: "/speakers/Clement Manyathela/Clement-Manyathela-The-Speakers-Firm-4.jpg"
  },
  {
    id: "clement-art-2",
    headline: "Health and Wellness – Gout – what causes it and how can you avoid flares?",
    publication: "Radio 702",
    date: "10 Oct 2022",
    action: "Listen to Episode",
    url: "https://omny.fm/shows/mid-morning-show-702/health-and-wellness-gout-what-causes-it-and-how-ca?in_playlist=podcast-1#description",
    image: "/speakers/Clement Manyathela/Clement-Manyathela-The-Speakers-Firm-10.jpg"
  },
  {
    id: "clement-art-3",
    headline: "World of work – Work policies on office romance",
    publication: "Radio 702",
    date: "08 Nov 2022",
    action: "Listen to Episode",
    url: "https://omny.fm/shows/mid-morning-show-702/world-of-work-work-policies-on-office-romance?in_playlist=podcast-1#description",
    image: "/speakers/Clement Manyathela/Clement-Manyathela-The-Speakers-Firm-6.jpg"
  }
];

// 2. Sizwe Mpofu-Walsh Additional Data
const SIZWE_GALLERY: GalleryImage[] = [
  {
    id: "sizwe-gal-1",
    src: "/speakers/Sizwe Mpofu-Walsh/New folder/Sizwe-Mpofu-Walsh-The-Speakers-Firm4.jpg",
    alt: "Sizwe Mpofu-Walsh lecture room",
    caption: "Dr. Mpofu-Walsh lecturing at Wits University",
    className: "sm:col-span-2"
  },
  {
    id: "sizwe-gal-2",
    src: "/speakers/Sizwe Mpofu-Walsh/New folder/Sizwe-Mpofu-Walsh-The-Speakers-Firm6.jpg",
    alt: "Sizwe Mpofu-Walsh public engagement",
    caption: "SMWX political forum hosting",
    className: ""
  },
  {
    id: "sizwe-gal-3",
    src: "/speakers/Sizwe Mpofu-Walsh/New folder/Sizwe-Mpofu-Walsh-The-Speakers-Firm8.jpg",
    alt: "Sizwe Mpofu-Walsh addressing youth",
    caption: "Democratic advocacy roundtable",
    className: ""
  }
];

const SIZWE_MEDIA: MediaItem[] = [
  {
    id: "sizwe-art-1",
    headline: "Dr Sizwe Mpofu-Walsh: Democracy, New Apartheid, Youth, Government",
    publication: "YouTube / SMWX",
    date: "28 Mar 2022",
    action: "Watch Interview",
    url: "https://www.youtube.com/watch?v=3UFR9tgFrrY",
    image: "/speakers/Sizwe Mpofu-Walsh/New folder/Sizwe-Mpofu-Walsh-The-Speakers-Firm10.jpg"
  },
  {
    id: "sizwe-art-2",
    headline: "Dr Sizwe Mpofu Walsh Talks South Africa and why we are angry!",
    publication: "YouTube / SMWX",
    date: "15 Jan 2022",
    action: "Watch Commentary",
    url: "https://www.youtube.com/watch?v=tHBhmi9zPN8",
    image: "/speakers/Sizwe Mpofu-Walsh/New folder/sizwe-mpofu-walsh.jpg"
  },
  {
    id: "sizwe-art-3",
    headline: "Penuel The Black Pen In Conversation Dr. Sizwe Mpofu-Walsh",
    publication: "YouTube / Penuel The Black Pen",
    date: "12 Jul 2022",
    action: "Watch Interview",
    url: "https://www.youtube.com/watch?v=BFfspPfqz2A",
    image: "/speakers/Sizwe Mpofu-Walsh/New folder/Sizwe-Mpofu-Walsh-The-Speakers-Firm6.jpg"
  }
];

// 3. Nozipho Tshabalala Additional Data
const NOZIPHO_GALLERY: GalleryImage[] = [
  {
    id: "nozipho-gal-1",
    src: "/speakers/Nozipho Tshabalala/Nozipho-Tshabalala-The-Speakers-Firm-2.png",
    alt: "Nozipho Tshabalala moderating summit",
    caption: "Nozipho moderating global development forum",
    className: "sm:col-span-2 lg:col-span-2"
  },
  {
    id: "nozipho-gal-2",
    src: "/speakers/Nozipho Tshabalala/Nozipho-Tshabalala-The-Speakers-Firm-3.jpg",
    alt: "Nozipho Mbanjwa-Tshabalala close portrait style",
    caption: "Strategic transformation briefing",
    className: ""
  },
  {
    id: "nozipho-gal-3",
    src: "/speakers/Nozipho Tshabalala/Nozipho-Tshabalala-The-Speakers-Firm-5.jpg",
    alt: "Nozipho Tshabalala corporate meeting",
    caption: "Facilitating corporate transformation retreats",
    className: "sm:col-span-2"
  },
  {
    id: "nozipho-gal-4",
    src: "/speakers/Nozipho Tshabalala/Nozipho-Tshabalala-The-Speakers-Firm-6.jpg",
    alt: "Nozipho Tshabalala live presentation",
    caption: "Anchor addressing high-stakes roundtable",
    className: ""
  }
];

const NOZIPHO_MEDIA: MediaItem[] = [
  {
    id: "nozipho-art-1",
    headline: "Mentorship Moments Episode 59 | The Masterclass Series With Dr Lulu Gwagwa",
    publication: "YouTube / Masterclass Series",
    date: "04 May 2022",
    action: "Watch Masterclass",
    url: "https://www.youtube.com/watch?v=uOxys0gnlZM",
    image: "/speakers/Nozipho Tshabalala/Nozipho-Tshabalala-The-Speakers-Firm-9.jpg"
  },
  {
    id: "nozipho-art-2",
    headline: "Mentorship Mondays Episode 56 | The Masterclass Series | Songezo Zibi",
    publication: "YouTube / Masterclass Series",
    date: "18 Apr 2022",
    action: "Watch Dialogue",
    url: "https://www.youtube.com/watch?v=503QsXitWGs",
    image: "/speakers/Nozipho Tshabalala/Nozipho-Tshabalala-The-Speakers-Firm-10.jpg"
  },
  {
    id: "nozipho-art-3",
    headline: "Mentorship Mondays Episode 55 | The Masterclass Series | Dr Thebe Ikalafeng",
    publication: "YouTube / Masterclass Series",
    date: "11 Apr 2022",
    action: "Watch Masterclass",
    url: "https://www.youtube.com/watch?v=LQmnzZ21wKk",
    image: "/speakers/Nozipho Tshabalala/Nozipho-Tshabalala-The-Speakers-Firm-2.png"
  }
];

// 4. Prince Mashele Additional Data
const PRINCE_GALLERY: GalleryImage[] = [
  {
    id: "prince-gal-1",
    src: "/speakers/Prince Mashele/Prince-Mashele-The-Speakers-Firm-3.jpg",
    alt: "Prince Mashele presentation",
    caption: "Prince Mashele addressing political science group",
    className: ""
  },
  {
    id: "prince-gal-2",
    src: "/speakers/Prince Mashele/Prince-Mashele-The-Speakers-Firm-5.jpg",
    alt: "Prince Mashele policy analysis discussion",
    caption: "Briefing on Geopolitical risk management",
    className: "sm:col-span-2"
  },
  {
    id: "prince-gal-3",
    src: "/speakers/Prince Mashele/Prince-Mashele-The-Speakers-Firm-6.jpg",
    alt: "Prince Mashele speechwriting address",
    caption: "Democratic advocacy roundtable",
    className: ""
  }
];

const PRINCE_MEDIA: MediaItem[] = [
  {
    id: "prince-art-1",
    headline: "‘Ramaphosa will go down in history as one of the most useless presidents’ – analyst",
    publication: "The Citizen",
    date: "25 Oct 2021",
    action: "Read News Article",
    url: "https://www.citizen.co.za/news/ramaphosa-history-most-useless-presidents-insulting-us/",
    image: "/speakers/Prince Mashele/Prince-Mashele-The-Speakers-Firm-11.jpg"
  },
  {
    id: "prince-art-2",
    headline: "Prince Mashele: I will publicly endorse Helen Zille if she vies for Joburg mayoral chain",
    publication: "IOL Politics",
    date: "17 Jul 2025",
    action: "Read Commentary",
    url: "https://iol.co.za/news/politics/2025-07-17-prince-mashele-i-will-publicly-endorse-helen-zille-if-she-vies-joburg-mayoral-chain/",
    image: "/speakers/Prince Mashele/Prince-Mashele-The-Speakers-Firm-9.jpg"
  },
  {
    id: "prince-art-3",
    headline: "Faith in the future holds us together, hope that tomorrow will be better",
    publication: "Sowetan Live",
    date: "05 Jan 2022",
    action: "Read Opinion",
    url: "https://www.sowetanlive.co.za/opinion/columnists/2022-01-05-faith-in-the-future-holds-us-together-hope-that-tomorrow-will-be-better/",
    image: "/speakers/Prince Mashele/Prince-Mashele-The-Speakers-Firm-3.jpg"
  }
];

interface VideoClip {
  id: string;
  label: string;
  youtubeId: string;
}

interface SpeakerAdditionalDataProps {
  speakerId: string;
  customGallery?: GalleryImage[];
  customMedia?: MediaItem[];
  customIntroText?: string;
  customVideos?: VideoClip[];
}

export const ProfileAdditionalSections = ({ speakerId, customGallery, customIntroText, customVideos }: SpeakerAdditionalDataProps) => {
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

  // Determine correct content array based on speakerId
  let galleryImages: GalleryImage[] = customGallery || [];
  let galleryIntroText = customIntroText || "";
  let videoClips: VideoClip[] = customVideos || [];

  if (!customGallery) {
    if (speakerId === "clement-manyathela") {
      galleryImages = CLEMENT_GALLERY;
      galleryIntroText = "A glimpse into Clement's high-impact broadcasting and live moderation roles.";
    } else if (speakerId === "sizwe-mpofu-walsh") {
      galleryImages = SIZWE_GALLERY;
      galleryIntroText = "Key snapshots from Dr. Mpofu-Walsh's lectures, book reviews and podcast series.";
    } else if (speakerId === "nozipho-tshabalala") {
      galleryImages = NOZIPHO_GALLERY;
      galleryIntroText = "Highlights from Nozipho's global summits, business hosting, and moderator work.";
    } else if (speakerId === "prince-mashele") {
      galleryImages = PRINCE_GALLERY;
      galleryIntroText = "Policy analysis roundtables and writing sessions with Prince Mashele.";
    }
  } else {
    galleryImages = customGallery;
    galleryIntroText = customIntroText || "";
  }

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
      {galleryImages.length > 0 && (
        <section id="gallery" className="relative bg-[#0A0A0A] px-4 py-6 text-white sm:px-6 sm:py-8 md:py-10 lg:px-8 lg:py-12" aria-labelledby="gallery-heading">
          <div className="mx-auto grid max-w-[1312px] grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="col-span-1 lg:col-span-4">
              <p className={`${SECTION_TAG_CLASS} mb-6 w-fit`} style={SECTION_TAG_STYLE}><span>Moments &amp; Milestones</span></p>
              <h2 id="gallery-heading" className={`${SECTION_HEADING_CLASS}`}>
                <span className="block text-[#FFFFFF]">Moments &amp;</span>
                <span className="block text-[#e30e04]">Milestones</span>
              </h2>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-[#9A9A9A] sm:text-lg md:text-xl"><span>{galleryIntroText}</span></p>
            </div>
            <div className="col-span-1 grid auto-rows-[220px] gap-3 sm:grid-cols-2 md:auto-rows-[240px] lg:col-span-8 lg:grid-cols-3">
              {galleryImages.map((image) => (
                <button key={image.id} type="button" onClick={() => setActiveGalleryImage(image)} className={`group relative overflow-hidden rounded-[22px] border border-white/10 bg-[#111111] text-left shadow-[0_18px_50px_rgba(0,0,0,0.22)] ${image.className}`} aria-label={`Open gallery image: ${image.caption}`}>
                  <img src={image.src} alt={image.alt} className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                </button>
              ))}
            </div>
          </div>
          <div className="mx-auto max-w-[1312px] mt-12 border-t border-white/10" />
        </section>
      )}

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
        </section>
      )}

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

export const ProfileAdditionalMediaSections = ({ speakerId, customMedia }: SpeakerAdditionalDataProps) => {
  // Determine correct content array based on speakerId
  let mediaArticles: MediaItem[] = customMedia || [];

  if (!customMedia) {
    if (speakerId === "clement-manyathela") {
      mediaArticles = CLEMENT_MEDIA;
    } else if (speakerId === "sizwe-mpofu-walsh") {
      mediaArticles = SIZWE_MEDIA;
    } else if (speakerId === "nozipho-tshabalala") {
      mediaArticles = NOZIPHO_MEDIA;
    } else if (speakerId === "prince-mashele") {
      mediaArticles = PRINCE_MEDIA;
    }
  }

  return (
    <div className="w-full">
      {/* 2. Media Coverage Section */}
      {mediaArticles.length > 0 && (
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
              {mediaArticles.map(item => (
                <article key={item.id} className="flex min-h-[260px] flex-col justify-between rounded-[24px] border border-[#1E1E1E] bg-[#111111] p-6 transition-colors hover:border-[#e30e04]/70 sm:p-8">
                  <div>
                    <div className="relative mb-6 aspect-video overflow-hidden rounded-[14px] border border-[#1E1E1E] bg-[#0A0A0A]">
                      <img src={item.image} alt={item.headline} className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105" />
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
      )}
    </div>
  );
};
