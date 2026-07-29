"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, BriefcaseBusiness, CalendarDays, CheckCircle, ChevronDown, Play, Quote } from "lucide-react";
import { SpeakerBookingForm } from "./SpeakerBookingForm";

const COLORS = {
  black: "#000000",
  red: "#e30e04",
  redHover: "#c00b03",
  gray: "#000000",
  mutedGray: "#ffffff",
  silver: "#ffffff",
  borderGray: "#ffffff",
  darkGray: "#000000",
  offWhite: "#ffffff"
};

const SOFT_RULE_COLOR = "#ffffff";
const NOISE_TEXTURE = "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")";
const KONTORA_FONT_CLASS = "font-['Kontora',sans-serif]";
const LEAD_TEXT_CLASS = "max-w-[65ch] text-base font-normal leading-relaxed sm:text-lg md:text-xl";
const BODY_TEXT_CLASS = "max-w-[65ch] text-sm font-normal leading-relaxed sm:text-base";
const SECTION_HEADING_CLASS = `${KONTORA_FONT_CLASS} max-w-[12ch] text-[clamp(2.15rem,12vw,5rem)] font-bold leading-[0.9] tracking-[-0.05em]`;
const SUB_HEADING_CLASS = `${KONTORA_FONT_CLASS} text-[clamp(1.25rem,6vw,2.5rem)] font-bold leading-[0.95] tracking-[-0.05em]`;
const SECTION_TAG_CLASS = "inline-flex items-center border border-l-[4px] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] sm:px-4 sm:text-[12px]";

const SECTION_TAG_STYLE: React.CSSProperties = {
  backgroundColor: COLORS.darkGray,
  borderColor: COLORS.darkGray,
  borderLeftColor: COLORS.red,
  color: COLORS.offWhite
};

export interface SpeakerCredential {
  id: string;
  label: string;
  subtitle: string;
}

export interface SpeakerStrategicTheme {
  id: string;
  number: string;
  title: string;
  copy: string;
}

export interface SpeakerBook {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  url?: string;
}

export interface SpeakerSocialProofLogo {
  id: string;
  name: string;
}

export interface SpeakerProfileTemplateProps {
  speakerName: string;
  speakerTitle: string;
  speakerDesignation: string;
  speakerRole: string;
  speakerRef: string;
  heroBackgroundImage: string;
  heroImagePosition?: string;
  biographyImage?: string;
  bioHook: string;
  fullBiographyParagraphs: string[];
  credentials: SpeakerCredential[];
  strategicThemes: SpeakerStrategicTheme[];
  books?: SpeakerBook[];
  socialProofLogos?: SpeakerSocialProofLogo[];
  children?: React.ReactNode;
  mediaArticlesSlot?: React.ReactNode;
}

const BorderLine = ({ side }: { side: "left" | "right" }) => {
  return (
    <div className={`absolute top-0 bottom-0 hidden w-[1px] xl:block ${side === "left" ? "left-10" : "right-10"}`} style={{ backgroundColor: "#333333" }} aria-hidden="true">
      <div className="absolute -top-[3.5px] left-1/2 h-[7px] w-[7px] -translate-x-1/2" style={{ backgroundColor: COLORS.black }} />
    </div>
  );
};

export const SpeakerProfileTemplate = ({
  speakerName,
  speakerTitle,
  speakerDesignation,
  speakerRole,
  speakerRef,
  heroBackgroundImage,
  heroImagePosition = "object-top",
  biographyImage,
  bioHook,
  fullBiographyParagraphs,
  credentials,
  strategicThemes,
  books = [],
  socialProofLogos = [],
  children,
  mediaArticlesSlot
}: SpeakerProfileTemplateProps) => {
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  const tickerItems = socialProofLogos.flatMap(logo => [
    { ...logo, tickerId: `${logo.id}-1` },
    { ...logo, tickerId: `${logo.id}-2` },
    { ...logo, tickerId: `${logo.id}-3` }
  ]);

  const finalBioImage = biographyImage || heroBackgroundImage;

  return (
    <div className="w-full overflow-x-hidden bg-[#FFFFFF] font-['Kontora',sans-serif]">
      {/* 1. Hero Section */}
      <section className="relative flex min-h-screen w-full flex-col items-center overflow-hidden px-4 py-0 sm:px-6 lg:px-16 xl:px-0" style={{
        backgroundColor: COLORS.black,
        borderColor: "#212121"
      }} aria-labelledby="speaker-profile-heading">
        
        {/* Hero Background Static Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBackgroundImage}
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 h-full w-full object-cover ${heroImagePosition}`}
          />
          <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.65)_0%,rgba(0,0,0,0.45)_46%,rgba(0,0,0,0.4)_100%)] z-[1]" />
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_18%_36%,rgba(0,0,0,0.08),transparent_34%),linear-gradient(90deg,rgba(0,0,0,0.52)_0%,rgba(0,0,0,0.2)_42%,rgba(0,0,0,0.6)_100%)] z-[1]" />
        </div>

        <div className="absolute inset-0 z-0 opacity-[0.035]" style={{
          backgroundImage: NOISE_TEXTURE,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px"
        }} aria-hidden="true" />

        <div className="absolute inset-0 mx-auto max-w-[1440px] pointer-events-none z-20">
          <BorderLine side="left" />
          <BorderLine side="right" />
        </div>

        {/* Spacer for the site's main floating header */}
        <div className="pt-24 sm:pt-28" />

        <div className="relative z-10 mx-auto w-full max-w-[1312px]">
          <div className="grid items-center gap-8 py-4 md:py-6 lg:h-[calc(100vh-140px)] lg:min-h-[550px] lg:max-h-[660px] lg:grid-cols-12 lg:gap-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
              }} 
              className="flex flex-col justify-center space-y-4 pt-0 lg:col-span-12 lg:h-full"
            >
              <div className="space-y-4">
                <h1 id="speaker-profile-heading" className="max-w-4xl text-[clamp(2.45rem,15vw,4.5rem)] font-bold uppercase leading-[0.84] tracking-[-0.065em]" style={{
                  color: "#F8F7F5"
                }}>
                  <span>{speakerTitle} {speakerName.split(" ")[0]}</span>
                  <br />
                  <span style={{ color: COLORS.red }}>{speakerName.split(" ").slice(1).join(" ")}</span>
                </h1>
                <motion.div 
                  initial={{ scaleX: 0, opacity: 0 }} 
                  whileInView={{ scaleX: 1, opacity: 1 }} 
                  viewport={{ once: true }} 
                  transition={{
                    duration: 0.74,
                    delay: 0.18,
                    ease: [0.16, 1, 0.3, 1]
                  }} 
                  className="h-[2px] w-24 origin-left md:w-32" 
                  style={{ backgroundColor: COLORS.red }} 
                  aria-hidden="true" 
                />
              </div>

              <div className="max-w-[800px] space-y-4">
                <h2 className={`${KONTORA_FONT_CLASS} text-[20px] font-bold uppercase tracking-[0.05em] leading-[1.3] text-[#ffffff]/90 md:text-[28px]`}>
                  {speakerDesignation}
                </h2>
                <p className="text-[16px] leading-[1.6] text-white/70 md:text-[20px]">
                  {speakerRole}
                </p>
                <motion.div 
                  initial={{ opacity: 0, y: 16 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{
                    duration: 0.5,
                    delay: 0.3
                  }} 
                  viewport={{ once: true }} 
                  className="flex flex-col gap-3 sm:flex-row sm:gap-4 pt-4"
                >
                  <button className="flex min-h-[52px] items-center justify-center gap-3 rounded-full bg-[#e30e04] px-6 py-4 text-[11px] font-bold uppercase tracking-[0.15em] text-white shadow-md transition-opacity duration-200 hover:opacity-90 sm:px-8 sm:text-[12px]" type="button" onClick={() => scrollToSection("booking-form")} aria-label="Book the Speaker">
                    <CalendarDays className="h-5 w-5" aria-hidden="true" />
                    <span>BOOK THE SPEAKER</span>
                  </button>
                  <button className="flex min-h-[52px] items-center justify-center gap-3 rounded-full border border-white/30 bg-transparent px-6 py-4 text-[11px] font-bold uppercase tracking-[0.15em] text-white transition-colors duration-200 hover:bg-white hover:text-black sm:px-8 sm:text-[12px]" type="button" onClick={() => scrollToSection("biography")} aria-label="Explore Profile">
                    <ChevronDown className="h-5 w-5" aria-hidden="true" />
                    <span>Explore Profile</span>
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Logo Ticker */}
      {tickerItems.length > 0 && (
        <section className="relative overflow-hidden border-y border-[#333333] bg-[#0A0A0A] py-6" aria-label="Trusted in serious rooms ticker">
          <div className="absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-black to-transparent" aria-hidden="true" />
          <div className="absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-black to-transparent" aria-hidden="true" />
          <div className="flex w-[200%] gap-12 overflow-hidden py-2">
            <div className="flex animate-marquee shrink-0 justify-around gap-12 text-xs font-bold uppercase tracking-widest text-[#AFB0B0]/60 sm:text-sm">
              {tickerItems.map((logo, idx) => (
                <span key={logo.tickerId} className="flex items-center gap-2">
                  <span>{logo.name}</span>
                  <span className="text-[#e30e04]" aria-hidden="true">·</span>
                </span>
              ))}
            </div>
          </div>
          <style dangerouslySetInnerHTML={{
            __html: `
              @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .animate-marquee {
                animation: marquee 30s linear infinite;
              }
            `
          }} />
        </section>
      )}

      {/* 3. Biography Section */}
      <section id="biography" className="relative bg-[#FFFFFF] px-4 py-6 sm:px-6 sm:py-8 md:py-10 lg:px-8 lg:py-12" aria-labelledby="biography-heading">
        <div className="mx-auto grid max-w-[1312px] grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="col-span-1 lg:col-span-5">
            <figure className="sticky top-8 overflow-hidden rounded-[28px] border border-[#1E1E1E] bg-[#0A0A0A] shadow-[0_24px_70px_rgba(10,10,10,0.16)]">
              <img src={finalBioImage} alt={`${speakerName} Portrait`} className="h-[320px] w-full object-cover object-top sm:h-[420px] md:h-[560px]" loading="lazy" />
              <figcaption className="border-t border-[#1E1E1E] p-5 text-[10px] font-bold uppercase tracking-widest text-[#9A9A9A] sm:text-xs"><span>{speakerName} · {speakerDesignation}</span></figcaption>
            </figure>
          </div>
          <div className="col-span-1 lg:col-span-7">
            <p className={`${SECTION_TAG_CLASS} mb-6 w-fit`} style={SECTION_TAG_STYLE}><span>Biography</span></p>
            <h2 id="biography-heading" className={`${SECTION_HEADING_CLASS}`}>
              <span className="block text-[#0A0A0A]">Professional</span>
              <span className="block text-[#e30e04]">Biography</span>
            </h2>
            <blockquote className="my-8 max-w-[65ch] border-l-2 border-[#e30e04] pl-5 text-xl font-bold leading-[0.98] tracking-[-0.055em] text-[#e30e04] sm:text-2xl md:pl-7 md:text-3xl">
              <span>{bioHook}</span>
            </blockquote>
            <div className="max-w-[65ch] space-y-5 text-[#9A9A9A]">
              {fullBiographyParagraphs.map((para, idx) => (
                <p key={idx} className="text-sm leading-relaxed text-gray-700 sm:text-base"><span>{para}</span></p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Boardroom Interventions & Keynotes section removed as not all speakers are keynote speakers */}

      {children}

      {/* Books & Publications Section */}
      {books.length > 0 && (
        <section id="books-publications" className="relative bg-[#FFFFFF] px-6 py-16 text-black md:px-16 md:py-24 border-t border-[#E5E5E5]" aria-labelledby="books-publications-heading">
          <div className="mx-auto max-w-[1312px]">
            <div className="mb-12 max-w-3xl">
              <p className={`${SECTION_TAG_CLASS} mb-6 w-fit`} style={SECTION_TAG_STYLE}><span>Books &amp; Publications</span></p>
              <h2 id="books-publications-heading" className={`${SECTION_HEADING_CLASS}`}>
                <span className="block text-[#0A0A0A]">Books &amp;</span>
                <span className="block text-[#e30e04]">Publications</span>
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {books.map((book) => (
                <article key={book.id} className="rounded-[26px] border border-[#E5E5E5] bg-[#FFFFFF] p-6 shadow-[0_18px_50px_rgba(10,10,10,0.06)] sm:p-8 flex flex-col justify-between min-h-[500px]">
                  <div>
                    <div className="relative mb-6 aspect-[4/5] w-full overflow-hidden rounded-[18px] shadow-[0_20px_45px_rgba(10,10,10,0.16)] border border-[#E5E5E5]" aria-label={`${book.title} cover`}>
                      <img src={book.coverImage} alt={book.title} className="h-full w-full object-cover" />
                    </div>
                    <h3 className="text-xl font-bold leading-tight tracking-[-0.04em] text-[#0A0A0A] sm:text-2xl"><span>{book.title}</span></h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#9A9A9A]"><span>{book.description}</span></p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#E5E5E5]/60">
                    <a 
                      href={book.url || "#"} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-3 rounded-full border border-[#0A0A0A] px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white transition-colors"
                    >
                      <span>Get Your Copy</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {mediaArticlesSlot}

      {/* 5. Booking Enquiry Section */}
      <section id="booking-form" className="relative flex min-h-[100svh] w-full flex-col items-center overflow-hidden bg-[#0A0A0A]" aria-labelledby="booking-section-heading">
        <div className="h-4 w-full bg-[#e30e04]" aria-hidden="true" />
        
        {/* Dynamic Vertical Grid Borders */}
        <div className="pointer-events-none absolute inset-0 flex justify-between px-4 md:px-10" aria-hidden="true">
          <div className="relative h-full w-[1px] bg-[#1E1E1E]">
            <div className="absolute top-4 -left-[3px] -right-[3px] z-10 h-[7px] rounded-sm bg-[#FFFFFF]" />
          </div>
          <div className="relative h-full w-[1px] bg-[#1E1E1E]">
            <div className="absolute top-4 -left-[3px] -right-[3px] z-10 h-[7px] rounded-sm bg-[#FFFFFF]" />
          </div>
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-4 py-12 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className={`${SECTION_TAG_CLASS} mb-6 text-center`} style={SECTION_TAG_STYLE}>
            <span>Make a Booking Enquiry</span>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }} className="mb-10 flex flex-wrap justify-center gap-x-3 text-center text-2xl font-bold leading-[0.9] tracking-[-0.05em] sm:text-3xl md:mb-6 md:gap-x-6 md:text-4xl lg:text-5xl">
            <h2 id="booking-section-heading" className="contents">
              <span className="text-[#FFFFFF]">Book {speakerName}</span>
              <span className="text-[#e30e04]">For Your Next Event</span>
            </h2>
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} className="mb-10 max-w-2xl text-center text-base leading-relaxed text-[#9A9A9A] sm:text-lg md:mb-16 md:text-xl">
            <span>Complete the form below to register your interest. We respond to all enquiries within 24 hours.</span>
          </motion.p>

          <div className="mb-10 mx-auto flex max-w-md flex-col items-center gap-2 text-center">
            <p className="flex items-center gap-2 text-sm text-[#9A9A9A]">
              <CheckCircle className="h-4 w-4 text-[#e30e04]" aria-hidden="true" />
              <span>24-hour response time</span>
            </p>
            <p className="flex items-center gap-2 text-sm text-[#9A9A9A]">
              <CheckCircle className="h-4 w-4 text-[#e30e04]" aria-hidden="true" />
              <span>Tailored to your event format</span>
            </p>
            <p className="flex items-center gap-2 text-sm text-[#9A9A9A]">
              <CheckCircle className="h-4 w-4 text-[#e30e04]" aria-hidden="true" />
              <span>Confidential and no-obligation</span>
            </p>
          </div>

          <SpeakerBookingForm speakerName={speakerName} speakerRef={speakerRef} />
        </div>
      </section>
    </div>
  );
};
export const SpeakerFooter = () => {
  return null;
};
export const ProfileAdditionalSections = () => {
  return null;
};
