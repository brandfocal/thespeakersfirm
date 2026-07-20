"use client";

import * as React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { useState } from 'react';

const C = {
  black: '#000000',
  red: '#e30e04',
  gray: '#000000',
  silver: '#ffffff',
  border: '#ffffff',
  dark: '#000000',
  cream: '#ffffff'
};

const ease = [0.16, 1, 0.3, 1] as const;

interface DialogueSeries {
  id: string;
  title: string;
  description: string;
  speakerName: string;
  youtubeId: string;
}

const DIALOGUE_SERIES_DATA: DialogueSeries[] = [
  {
    id: "sifiso-nene",
    title: "Sifiso Nene | Stand Up Comedian",
    speakerName: "Sifiso Nene",
    youtubeId: "fI2uQHu8C3A",
    description: "Hilarious stand-up comedy and storytelling capturing everyday experiences."
  },
  {
    id: "tumi-ramonotsi",
    title: "Tumi Ramonotsi - Oracle",
    speakerName: "Tumi Ramonotsi",
    youtubeId: "Xb2VPORlJ5U",
    description: "Insightful keynote on cloud technology, digital transformation, and business strategy."
  },
  {
    id: "lincoln-mali-blazing-a-trail",
    title: "Author of 'Blazing A Trail' Book Roundtable",
    speakerName: "Lincoln Mali",
    youtubeId: "KaDKu8ChKYs",
    description: "Lesaka Technologies CEO discussing his book 'Blazing A Trail' and executive leadership."
  },
  {
    id: "lincoln-mali-leadership",
    title: "Lincoln Mali Leadership Dialogue Series",
    speakerName: "Lincoln Mali",
    youtubeId: "bjcHrXaccTY",
    description: "Debating structural integrity, accountability, and the demands of ethical servant leadership in corporate governance."
  },
  {
    id: "mteto-nyati",
    title: "Chairman of Eskom at the 'Blazing A Trail' Book Roundtable",
    speakerName: "Mteto Nyati",
    youtubeId: "9GQaaOlowW0",
    description: "Discussing institutional turnarounds, corporate governance, and leadership during energy crises."
  },
  {
    id: "blazing-a-trail-experience",
    title: "Official Experience Reel | 'Blazing a Trail' Exclusive Book Roundtable",
    speakerName: "Roundtable Reel",
    youtubeId: "UcACoBam75o",
    description: "A premium overview of the exclusive 2025 book roundtable with industry captains."
  },
  {
    id: "bonang-mohale-autobiography",
    title: "‘Coming in From the Cold - An Autobiography’ Book Launch",
    speakerName: "Prof. Bonang Mohale",
    youtubeId: "O6_1XH3MMcE",
    description: "Reflections on his autobiography, detailing the struggles and triumphs of black leadership in corporate South Africa."
  },
  {
    id: "tebogo-mekgoe",
    title: "EmpowaGrowth Workshop | Business Model Innovation",
    speakerName: "Tebogo Mekgoe",
    youtubeId: "dn4DuJtt7mI",
    description: "Exploring systemic alignment, organizational health, and leadership performance in business strategy."
  },
  {
    id: "mary-bomela",
    title: "CEO and Director of Companies at TUT’s IFOW 4th Annual Dialogue",
    speakerName: "Mary Bomela",
    youtubeId: "INOSSwpIlv8",
    description: "Insights on female leadership, board strategy, and driving value across diverse investment portfolios."
  },
  {
    id: "bonang-mohale-tut",
    title: "4th Annual TUT Future of Work Keynote Address",
    speakerName: "Prof. Bonang Mohale",
    youtubeId: "2s5CXK-w0AQ",
    description: "Unpacking ethical corporate leadership, human-centric strategies, and socio-economic transformation for the future of work."
  },
  {
    id: "reuel-khoza-roundtable",
    title: "The 2025 Book Roundtable Series - Legacy Beyond Leadership",
    speakerName: "Dr. Reuel Khoza",
    youtubeId: "0ij-23dNHvM",
    description: "A deep dive roundtable dialogue into Dr. Reuel Khoza's perspective on legacy beyond leadership, ethics, and corporate governance."
  },
  {
    id: "zola-mbatha",
    title: "Orange Farm EmpowaMen Experience",
    speakerName: "Zola Mbatha",
    youtubeId: "yA5_vrN2vM0",
    description: "Addressing positive masculinity, community development, and leadership in social change spaces."
  },
  {
    id: "john-kani",
    title: "Dr Bonisile John Kani OIS OBE Keynote",
    speakerName: "Dr. John Kani",
    youtubeId: "4pwj3RCt2RI",
    description: "Acclaimed actor and playwright sharing insights on cultural identity, heritage, and the power of storytelling."
  },
  {
    id: "bonang-mohale-transnet",
    title: "Professor Bonang Mohale - Transnet Keynote",
    speakerName: "Prof. Bonang Mohale",
    youtubeId: "z20ciVNtc8A",
    description: "Strategic insights on economic development, corporate governance, and state-owned enterprise transformation."
  },
  {
    id: "muzi-kuzwayo",
    title: "Muzi Kuzwayo - Orange Farm EmpowaMen Programme",
    speakerName: "Muzi Kuzwayo",
    youtubeId: "3xJJ0IQQFCw",
    description: "Speaking on brand strategy, socio-economic empowerment, and positive role models in society."
  },
  {
    id: "bonang-mohale-empowamen",
    title: "Bonang Mohale - Orange Farm EmpowaMen Programme",
    speakerName: "Prof. Bonang Mohale",
    youtubeId: "Txr0O_M6bb0",
    description: "Addressing leadership accountability, community mentorship, and empowering the next generation."
  },
  {
    id: "empowamen-experience",
    title: "Experience Reel - Orange Farm EmpowaMen Programme",
    speakerName: "EmpowaMen Reel",
    youtubeId: "tZ-ick_bEGw",
    description: "Visual highlights of the community dialogue, mentorship workshops, and leadership interventions."
  },
  {
    id: "maurice-radebe",
    title: "Head & Director: Wits Business School (WBS) Keynote",
    speakerName: "Prof. Maurice Radebe",
    youtubeId: "7iUZ-E1OZ0U",
    description: "Focusing on corporate energy transformation, leadership agility, and academic excellence in Africa."
  }
];

const conveningDetails = [{
  id: 'format',
  label: '01 / FORMAT',
  heading: 'INVITATION ONLY',
  body: 'Every convening is strictly by invitation. Participation is curated for relevance, seniority, and perspective.'
}, {
  id: 'rule',
  label: '02 / RULE',
  heading: 'CHATHAM HOUSE',
  body: 'Sessions are off-record by default. No attribution without explicit consent. No cameras. No press.'
}, {
  id: 'scope',
  label: '03 / SCOPE',
  heading: 'ECOSYSTEM MOMENTS',
  body: 'From video roundtables to book launches — every moment is designed to move ideas into action.'
}];

const VerticalBorderLines = ({
  isDark = false
}: {
  isDark?: boolean;
}) => {
  const borderColor = isDark ? 'rgba(248,247,245,0.10)' : 'rgba(33,33,33,0.14)';
  return <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden" aria-hidden="true">
      <div className="relative mx-auto h-full max-w-[1440px] px-6 md:px-10">
        <div className="absolute bottom-0 left-6 top-0 w-px md:left-10" style={{
        backgroundColor: borderColor
      }}>
          <span className="absolute -top-[3.5px] left-1/2 h-[7px] w-[7px] -translate-x-1/2" style={{
          backgroundColor: isDark ? '#FFFFFF' : '#000000'
        }} />
        </div>
        <div className="absolute bottom-0 right-6 top-0 w-px md:right-10" style={{
        backgroundColor: borderColor
      }}>
          <span className="absolute -top-[3.5px] left-1/2 h-[7px] w-[7px] -translate-x-1/2" style={{
          backgroundColor: isDark ? '#FFFFFF' : '#000000'
        }} />
        </div>
      </div>
    </div>;
};

function Reveal({
  children,
  delay = 0,
  className = ''
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
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
    duration: 0.8,
    delay,
    ease
  }}>{children}</motion.div>;
}

function SectionTag({
  children
}: {
  children: string;
}) {
  return <span className="mb-5 inline-flex items-center border border-l-[4px] border-white/20 border-l-[#e30e04] bg-[#000000]/40 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#ffffff] sm:px-4 sm:text-[12px] font-mono">{children}</span>;
}

import { AnimatePresence, Variants } from "framer-motion";
import { X } from "lucide-react";

export function ExecutiveDialogues() {
  const [activeVideoId, setActiveVideoId] = React.useState<string | null>(null);
  const [showAll, setShowAll] = React.useState<boolean>(false);

  const displayedVideos = showAll ? DIALOGUE_SERIES_DATA : DIALOGUE_SERIES_DATA.slice(0, 6);
  const activeVideo = activeVideoId ? DIALOGUE_SERIES_DATA.find(v => v.id === activeVideoId) : null;

  return <div className="w-full overflow-x-hidden bg-[#ffffff]">
    <AnimatePresence>
      {activeVideoId && activeVideo && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
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
          <motion.div 
            initial={{ scale: 0.95, y: 15 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 15 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl aspect-video bg-[#000000] border border-[#333333] overflow-hidden cursor-default rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe 
              src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1`}
              title={activeVideo.title}
              className="absolute inset-0 w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>

    <section id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden sm:min-h-[720px] lg:h-[100vh] bg-black">
      <img src="/banners/clement-manyathela-banner.jpg" alt="Roundtable discussion banner" className="absolute inset-0 h-full w-full object-cover object-right-bottom opacity-65" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/60 via-[#000000]/30 to-[#000000]/85" aria-hidden="true" />
      <VerticalBorderLines isDark={true} />
      <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-center px-6 pb-20 pt-20 sm:pb-24 sm:pt-24 md:px-16 md:pb-20 md:pt-28 lg:pb-16 lg:pt-24">
        <Reveal><SectionTag>DIALOGUES &amp; ROUNDTABLES</SectionTag></Reveal>
        <Reveal delay={0.1}><h1 className="font-bold uppercase max-w-full drop-shadow-[0_8px_34px_rgba(0,0,0,0.38)] text-[#ffffff] text-[clamp(2.5rem,8vw,5.5rem)] leading-[0.95] tracking-[-0.055em]">ECOSYSTEMS OF<br /><em className="text-[#e30e04] not-italic">THOUGHT LEADERSHIP.</em></h1></Reveal>
        <Reveal delay={0.2}><p className="mt-6 text-[15px] font-normal leading-[1.6] md:text-[20px] md:leading-[1.65] drop-shadow-[0_6px_22px_rgba(0,0,0,0.45)] text-[#ffffff]/90 max-w-[620px]">Convening the right minds, behind closed doors, to decode the future.</p></Reveal>
        <Reveal delay={0.3}>
          <div className="mt-12">
            <div className="h-[1px] w-full bg-white/10" />
            <div className="mt-4 flex flex-col justify-between gap-4 text-[11px] font-bold uppercase tracking-[0.16em] text-white/50 sm:flex-row">
              <span>EXECUTIVE DIALOGUES / 01</span>
              <span className="flex flex-wrap gap-3">
                <span>ROUNDTABLES</span>
                <span>•</span>
                <span>BOOK LAUNCHES</span>
                <span>•</span>
                <span>ECOSYSTEM MOMENTS</span>
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    <section id="context" className="relative -mt-px overflow-hidden bg-[#ffffff]">
      <VerticalBorderLines />
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-20 lg:py-32 md:px-16">
        <span aria-hidden="true" style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: 'clamp(120px, 18vw, 220px)',
          fontWeight: 700,
          letterSpacing: '-0.06em',
          color: 'rgba(33,33,33,0.02)',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          userSelect: 'none',
          lineHeight: 1,
          zIndex: 0
        }}>DIALOGUES</span>
        <Reveal>
          <div className="flex flex-col items-start gap-3 border-b pb-5 sm:flex-row sm:items-center sm:gap-6 border-black/10">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#686869]">THE SPEAKERS FIRM</span>
            <span className="h-px w-full flex-none sm:flex-1 bg-black/10" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#e30e04]">EXECUTIVE DIALOGUES &amp; ROUNDTABLES</span>
          </div>
        </Reveal>

        <div className="grid gap-0 py-12 lg:grid-cols-12 lg:gap-12 lg:py-20 relative z-10">
          <div className="flex flex-col justify-center lg:col-span-7 lg:border-r lg:pr-12 border-black/10">
            <Reveal>
              <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-[#AFB0B0]">/ CONVENING PHILOSOPHY</p>
              <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-tight uppercase text-black mb-8">
                THE MOST IMPORTANT<br />
                CONVERSATIONS<br />
                <span className="text-[#e30e04]">NEVER MAKE THE NEWS.</span>
              </h2>
              <div className="w-10 h-[2px] bg-[#e30e04] mb-6" />
              <p className="text-[16px] leading-[1.7] text-[#686869] max-w-[52ch]">
                Executive Dialogues &amp; Roundtables are intimate, invitation-only convenings designed for decision-makers who shape industries, policy, and cultures. Closed doors. Open minds. Consequential conversations.
              </p>
            </Reveal>
          </div>

          <div className="flex flex-col justify-center gap-0 lg:col-span-5 lg:pl-12 mt-12 lg:mt-0">
            {conveningDetails.map((item, i) => <Reveal key={item.id} delay={i * 0.1}>
              <div className="py-8 border-b border-black/10 last:border-0">
                <span className="mb-3 block text-[9px] font-bold uppercase tracking-[0.22em] text-[#AFB0B0]">{item.label}</span>
                <h3 className="mb-2 text-base font-bold uppercase tracking-tight text-black">{item.heading}</h3>
                <p className="text-sm leading-relaxed text-[#686869]">{item.body}</p>
              </div>
            </Reveal>)}
          </div>
        </div>
      </div>
    </section>

    <section id="dialogues" className="relative -mt-px overflow-hidden bg-black py-20 lg:py-32">
      <VerticalBorderLines isDark={true} />
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-16">
        <div className="mb-14 max-w-3xl">
          <Reveal><SectionTag>CONTENT HUB</SectionTag></Reveal>
          <Reveal delay={0.1}><h2 className="text-[clamp(2.35rem,9vw,4.5rem)] font-bold uppercase leading-[0.93] tracking-[-0.055em] text-[#ffffff] mt-6">PAST &amp; UPCOMING<br /><em className="text-[#e30e04] not-italic">MOMENTS.</em></h2></Reveal>
          <Reveal delay={0.2}><p className="mt-5 text-[15px] font-normal leading-[1.6] md:text-[18px] text-white/70 max-w-[560px]">Conversations that move beyond the podium — and into the rooms where change takes shape.</p></Reveal>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
          {displayedVideos.map((video, index) => <Reveal delay={index * 0.12} className="h-full" key={video.id}>
            <article className="group relative h-full flex flex-col justify-between overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.02] p-6 backdrop-blur-md transition-all duration-500 hover:border-[#e30e04]/40 hover:bg-white/[0.04]">
              <div>
                <div 
                  onClick={() => setActiveVideoId(video.id)}
                  className="relative aspect-video w-full overflow-hidden rounded-xl bg-neutral-900 flex items-center justify-center mb-6 cursor-pointer"
                >
                  <img 
                    src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`} 
                    alt={video.title} 
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-500" 
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                  <span className="visual-mark relative z-10 w-12 h-12 rounded-full bg-black/60 flex items-center justify-center border border-white/25 group-hover:bg-[#e30e04] group-hover:border-[#e30e04] transition-all">
                    <Play size={20} className="text-[#ffffff] fill-[#ffffff] translate-x-[1px]" />
                  </span>
                  <span className="absolute top-4 right-4 text-[10px] font-mono text-white/55 bg-black/60 px-2 py-0.5 rounded-full">0{index + 1}</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-[#e30e04] uppercase">
                  <span>{video.speakerName}</span>
                </div>
                <h3 className="mt-4 text-[16px] sm:text-[18px] font-bold uppercase text-white tracking-tight">{video.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{video.description}</p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-end">
                <button 
                  onClick={() => setActiveVideoId(video.id)}
                  className="text-[11px] font-bold tracking-widest text-[#e30e04] uppercase group-hover:translate-x-1 transition-transform flex items-center gap-1.5"
                >
                  <span>WATCH NOW</span>
                  <ArrowRight size={12} />
                </button>
              </div>
            </article>
          </Reveal>)}
        </div>

        {DIALOGUE_SERIES_DATA.length > 6 && (
          <div className="mt-14 flex justify-center relative z-10">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="rounded-full border border-white/20 hover:border-[#e30e04] px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white hover:bg-[#e30e04] transition-all"
            >
              {showAll ? "SHOW LESS" : "EXPLORE ALL MOMENTS"}
            </button>
          </div>
        )}
      </div>
    </section>

    <section id="about" className="relative -mt-px overflow-hidden bg-black py-20 lg:py-32">
      <VerticalBorderLines isDark={true} />
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-16">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-5">
            <figure className="relative m-0 overflow-hidden rounded-[28px] border border-white/10 bg-neutral-900 aspect-[3/4]">
              <img src="https://images.unsplash.com/photo-1559223607-a43c990c692c?q=80&w=900&auto=format&fit=crop" alt="Executives gathered in a private roundtable discussion" className="h-full w-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent" aria-hidden="true" />
              <figcaption className="absolute bottom-7 left-7 text-[10px] font-bold uppercase tracking-[0.24em] text-white">
                <span>THE SPEAKERS FIRM</span>
              </figcaption>
            </figure>
          </Reveal>

          <div className="lg:col-span-7 lg:pl-10">
            <Reveal><SectionTag>ECOSYSTEM MOMENTS</SectionTag></Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.95] tracking-tight font-bold uppercase text-white mt-6 mb-6">
                WHERE THE REAL<br />CONVERSATIONS <em className="text-[#e30e04] not-italic">HAPPEN.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="w-10 h-[2px] bg-[#e30e04] mb-6" />
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-[16px] leading-[1.7] text-white/70 max-w-[58ch]">
                Behind every great speaker is an ecosystem of ideas, relationships, and rooms where futures are shaped. The Speakers Firm curates those rooms.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="mt-9 flex flex-wrap gap-2">
                {['ROUNDTABLES', 'BOOK LAUNCHES', 'STRATEGIC CONVENINGS', 'ECOSYSTEM MOMENTS'].map(tag => (
                  <span key={tag} className="rounded-full border border-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-white/50">{tag}</span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>

    <section id="brief-us" className="relative -mt-px overflow-hidden bg-[#ffffff] py-20 lg:py-32">
      <VerticalBorderLines />
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-16 text-center">
        <Reveal>
          <h2 className="text-[clamp(2.5rem,7vw,4.5rem)] font-bold tracking-tight leading-[1.05] uppercase mx-auto max-w-[1080px] text-black">
            READY TO CONVENE<br />YOUR <span className="text-[#e30e04]">ECOSYSTEM?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-[720px] text-[16px] sm:text-[18px] font-light leading-[1.65] text-[#686869]">
            Contact The Speakers Firm to discuss bespoke roundtable design, speaker curation, and facilitation.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#e30e04] px-8 py-4 text-[12px] font-bold uppercase tracking-[0.14em] text-white shadow-lg transition-all duration-300 hover:bg-black" href="mailto:brief@thespeakersfirm.com">
              <span>BRIEF US</span>
              <ArrowRight size={16} />
            </a>
            <a className="inline-flex items-center justify-center gap-3 rounded-full border border-black/20 px-8 py-4 text-[12px] font-bold uppercase tracking-[0.14em] text-black transition-colors duration-300 hover:bg-black hover:text-white" href="/">
              <span>EXPLORE SPEAKERS</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  </div>;
}
