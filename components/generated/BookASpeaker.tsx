"use client";

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SpeakerBookingForm } from './SpeakerBookingForm';

const COLORS = {
  black: '#000000',
  red: '#e30e04',
  gray: '#000000',
  silver: '#ffffff',
  borderGray: '#ffffff',
  darkGray: '#000000',
  offWhite: '#ffffff'
};

const revealTransition = {
  duration: 0.8,
  ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
};

const SECTION_TAG_CLASS = 'inline-flex items-center border border-l-[4px] px-4 py-2 text-[12px] font-bold uppercase tracking-[0.12em] shadow-none';
const SECTION_TAG_STYLE = {
  backgroundColor: '#000000',
  borderColor: '#000000',
  borderLeftColor: '#e30e04',
  color: '#ffffff'
};

const SectionTag = ({
  children
}: {
  children: string;
}) => <span className={SECTION_TAG_CLASS} style={SECTION_TAG_STYLE}>{children}</span>;

const VerticalBorderLines = ({
  isDark = false
}: {
  isDark?: boolean;
}) => {
  const borderColor = isDark ? '#393939' : '#C7C7C8';
  const capColor = isDark ? '#FFFFFF' : '#212121';
  return <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-20">
      <div className="h-full mx-auto max-w-[1440px] relative px-6 md:px-10">
        <div className="absolute left-6 md:left-10 top-0 bottom-0 w-[1px]" style={{
        backgroundColor: borderColor
      }}>
          <div className="absolute -top-[3.5px] left-1/2 -translate-x-1/2 w-[7px] h-[7px]" style={{
          backgroundColor: capColor
        }} />
        </div>
        <div className="absolute right-6 md:right-10 top-0 bottom-0 w-[1px]" style={{
        backgroundColor: borderColor
      }}>
          <div className="absolute -top-[3.5px] left-1/2 -translate-x-1/2 w-[7px] h-[7px]" style={{
          backgroundColor: capColor
        }} />
        </div>
      </div>
    </div>;
};

const Reveal = ({
  children,
  delay = 0,
  className = ''
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  return <motion.div className={className} initial={{
    opacity: 0,
    y: 28
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true,
    margin: '-80px'
  }} transition={{
    ...revealTransition,
    delay
  }}>
      {children}
    </motion.div>;
};

export function BookASpeaker() {
  const searchParams = useSearchParams();
  const [speakerInfo, setSpeakerInfo] = React.useState({ name: "", ref: "" });

  React.useEffect(() => {
    const querySpeaker = searchParams.get("speaker");
    if (querySpeaker) {
      const decodedName = decodeURIComponent(querySpeaker);
      setSpeakerInfo({
        name: decodedName,
        ref: `TSF-${decodedName.substring(0, 3).toUpperCase()}-${Math.floor(10 + Math.random() * 90)}`
      });
    } else {
      setSpeakerInfo({ name: "", ref: "" });
    }
  }, [searchParams]);

  return <main className="min-h-screen w-full selection:bg-[#e30e04] selection:text-white font-[Kontora,sans-serif] overflow-x-hidden bg-[#ffffff] text-[#000000] flex flex-col justify-between">
      <Header />
      
      <div className="flex-grow">
        <section id="top" className="relative min-h-screen w-full overflow-hidden pt-20 pb-28 md:pt-24 lg:pb-44 bg-[#000000]">
          <img src="/galleries/bonang-mohale/bonang-mohale.jpg" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/60 via-[#000000]/30 to-[#000000]/85" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")"
          }} aria-hidden="true" />
          <VerticalBorderLines isDark={true} />
          <div className="relative z-10 mx-auto flex min-h-[calc(100vh-10rem)] max-w-[1440px] flex-col justify-center px-6 md:px-10">
            <Reveal>
              <SectionTag>BOOK A SPEAKER</SectionTag>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-[clamp(3rem,12vw,7rem)] font-bold uppercase leading-[0.9] tracking-[-0.055em] text-[#ffffff] drop-shadow-[0_8px_34px_rgba(0,0,0,0.38)] mt-6">
                <span>Secure Your</span><br />
                <span>Talent.</span>
              </h1>
            </Reveal>
            <motion.div aria-hidden="true" initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }} transition={{ delay: 1.0, duration: 0.74, ease: 'easeOut' }} className="mt-5 h-[3px] w-28 origin-left bg-[#e30e04] md:mt-7 md:w-40" />
            <div className="mt-8 flex max-w-[720px] flex-col gap-3">
              <Reveal delay={0.2}>
                <p className="text-[18px] font-bold leading-tight text-[#ffffff] md:text-[22px] mb-2">
                  Initiate the Contracting &amp; Availability Process.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="text-[15px] font-normal leading-[1.6] text-[#ffffff]/80 drop-shadow-[0_6px_22px_rgba(0,0,0,0.45)] md:text-[16px] md:leading-[1.65]">
                  You have identified the right voice for your next engagement. Provide the logistical and commercial details below so our team can immediately verify availability, confirm fees, and initiate the end-to-end contracting process.
                </p>
              </Reveal>
              <Reveal delay={0.4} className="mt-4">
                <a href="#brief" className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#e30e04] px-6 py-3 text-[12px] font-bold uppercase tracking-[0.1em] text-white transition-all hover:bg-white hover:text-black">
                  <span>Start Booking Process</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </a>
              </Reveal>
            </div>
          </div>
        </section>
 
        <section id="brief" className="relative py-16 md:py-24 lg:py-32 px-6 md:px-16" style={{ backgroundColor: COLORS.offWhite }}>
          <VerticalBorderLines isDark={false} />
          <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-16">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.8fr] lg:gap-20">
              <div>
                <SectionTag>TRUST &amp; DELIVERY</SectionTag>
                <Reveal>
                  <h2 className="mt-6 text-[clamp(2.2rem,8vw,3.8rem)] font-bold uppercase leading-[0.9] tracking-[-0.055em] text-[#000000]">
                    End-to-End<br />Confidence.
                  </h2>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="mt-6 text-sm leading-relaxed text-[#686869] max-w-sm">
                    Our team handles all travel logistics, technical riders, contract negotiations and execution schedules, protecting both speaker and corporate client interests.
                  </p>
                </Reveal>
                
                <div className="mt-8 border-l-4 border-[#e30e04] pl-6 py-2">
                  <p className="text-lg font-normal italic leading-relaxed text-[#212121]">
                    "The Speakers Firm saved our team valuable time, reduced booking risk and ensured that every commercial, contractual, and logistical detail was professionally managed. Their value extends far beyond securing talent. Partner with them for confidence from the first brief to the final applause."
                  </p>
                </div>
 
                <div className="mt-8 rounded-2xl bg-gray-50 border border-black/10 p-5 space-y-3">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#e30e04]">VALUE PROPOSITION</p>
                  <p className="text-sm font-bold text-black leading-snug">
                    End-to-end contracting, coordination and talent management.
                  </p>
                </div>
              </div>
 
              <div>
                <SpeakerBookingForm speakerName={speakerInfo.name} speakerRef={speakerInfo.ref} />
              </div>
            </div>
          </div>
        </section>
 
        <section className="relative py-16 md:py-24 lg:py-32 px-6 md:px-16 border-t border-black/10" style={{ backgroundColor: COLORS.offWhite }}>
          <VerticalBorderLines isDark={false} />
          <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-16 grid grid-cols-1 gap-12 md:grid-cols-2">
            <Reveal>
              <blockquote className="border-l-4 border-[#e30e04] pl-6 py-2">
                <span className="block text-[11px] font-bold uppercase tracking-widest text-[#e30e04] mb-3">CURATED RECOMMENDATIONS</span>
                <p className="text-xl font-bold leading-tight">
                  “Within 24 hours, The Speakers Firm presented a carefully curated shortlist aligned with our strategy, audience, budget and brand. Their speed never compromised quality.”
                </p>
                <footer className="mt-4 text-xs text-[#686869]">— Head of Brand, Standard Bank</footer>
              </blockquote>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex flex-col gap-4">
                <span className="block text-[11px] font-bold uppercase tracking-widest text-[#e30e04]">DIRECT DESK ACCESS</span>
                <p className="text-sm leading-relaxed text-[#686869]">For urgent bookings or boardroom advisory interventions, email us directly:</p>
                <div className="flex flex-col gap-2">
                  <a href="mailto:booking@thespeakersfirm.co.za" className="text-sm font-bold text-black hover:text-[#e30e04] transition-colors">booking@thespeakersfirm.co.za</a>
                  <a href="mailto:info@thespeakersfirm.co.za" className="text-sm font-bold text-black hover:text-[#e30e04] transition-colors">info@thespeakersfirm.co.za</a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </div>
 
      <Footer />
    </main>;
}
