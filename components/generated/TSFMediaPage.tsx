"use client";

import * as React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, ArrowUpRight, Play } from 'lucide-react';
import Link from 'next/link';

const COLORS = {
  black: '#000000',
  red: '#e30e04',
  gray: '#000000',
  silver: '#ffffff',
  borderGray: '#ffffff',
  darkGray: '#000000',
  offWhite: '#ffffff'
};

const EASE = [0.16, 1, 0.3, 1] as const;
const HEADING_EASE = [0.16, 1, 0.3, 1] as const;

const SECTION_TAG_CLASS = 'inline-flex items-center border border-l-[4px] px-4 py-2 text-[12px] font-bold uppercase tracking-[0.12em] shadow-none';
const SECTION_TAG_STYLE = {
  backgroundColor: COLORS.darkGray,
  borderColor: COLORS.darkGray,
  borderLeftColor: COLORS.red,
  color: COLORS.offWhite
};

const MEDIA_HERO_HEADING_LINES = [{
  id: 'in-the-line',
  text: 'In The',
  delay: 0.5
}, {
  id: 'press-line',
  text: 'Press.',
  delay: 0.68
}];

const pressFeatures = [{
  id: 'times',
  source: 'THE TIMES',
  title: '“The future of African leadership is being rewritten.”',
  speaker: 'Bonang Mohale',
  date: '18 MAY 2025',
  image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop'
}, {
  id: 'business-day',
  source: 'BUSINESS DAY',
  title: 'The voices shaping the next chapter of business.',
  speaker: 'Lebo Gunguluza',
  date: '04 APR 2025',
  image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop'
}, {
  id: 'forbes',
  source: 'FORBES AFRICA',
  title: 'Why influence has become the new currency.',
  speaker: 'Vusi Thembekwayo',
  date: '26 FEB 2025',
  image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1200&auto=format&fit=crop'
}];

const reels = [{
  id: 'room',
  title: 'The room is ready for a new conversation.',
  speaker: 'Bonang Mohale',
  duration: '18:42',
  image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1000&auto=format&fit=crop'
}, {
  id: 'power',
  title: 'The power of an idea, delivered well.',
  speaker: 'Vusi Thembekwayo',
  duration: '32:18',
  image: 'https://images.unsplash.com/photo-1559223607-a43c990c692c?q=80&w=1000&auto=format&fit=crop'
}, {
  id: 'future',
  title: 'Building the Africa we want to inherit.',
  speaker: 'Siyabulela Jentile',
  duration: '24:09',
  image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop'
}, {
  id: 'listen',
  title: 'A different kind of leadership story.',
  speaker: 'Wendy Luhabe',
  duration: '41:06',
  image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=1000&auto=format&fit=crop'
}];

const news = [{
  id: 'n1',
  source: 'BUSINESS LIVE',
  title: 'The business of being heard in a noisy world',
  excerpt: 'The Speakers Firm is changing how organisations think about the voices they put on stage.',
  date: '12 JUN 2025'
}, {
  id: 'n2',
  source: 'NEWS24',
  title: 'Meet the African thinkers moving the conversation forward',
  excerpt: 'From boardrooms to broadcast, these are the people turning insight into momentum.',
  date: '28 MAY 2025'
}, {
  id: 'n3',
  source: 'FORBES AFRICA',
  title: 'Influence is no longer a nice-to-have',
  excerpt: 'What the continent’s most sought-after speakers understand about attention and action.',
  date: '26 FEB 2025'
}, {
  id: 'n4',
  source: 'THE AFRICAN REPORT',
  title: 'A new generation of African leadership',
  excerpt: 'A closer look at the ideas defining the next decade of business and culture.',
  date: '08 FEB 2025'
}, {
  id: 'n5',
  source: 'MAIL & GUARDIAN',
  title: 'When the right story changes everything',
  excerpt: 'Why the most effective events begin with a sharper question, not a bigger stage.',
  date: '17 JAN 2025'
}, {
  id: 'n6',
  source: 'BUSINESS DAY',
  title: 'The voices worth making room for',
  excerpt: 'The people, perspectives and provocations that deserve a wider audience.',
  date: '03 DEC 2024'
}, {
  id: 'n7',
  source: 'THE TIMES',
  title: 'Beyond the podium',
  excerpt: 'A speaker is only the beginning. The best partnerships leave a lasting imprint.',
  date: '22 NOV 2024'
}, {
  id: 'n8',
  source: 'CNN AFRICA',
  title: 'Africa’s new influence economy',
  excerpt: 'How a continent of distinct voices is building global relevance on its own terms.',
  date: '14 OCT 2024'
}];

const quotes = [{
  id: 'q1',
  source: 'FORBES AFRICA',
  text: '“A definitive guide to the voices that matter now.”'
}, {
  id: 'q2',
  source: 'BUSINESS DAY',
  text: '“They understand that a great brief is a business asset.”'
}, {
  id: 'q3',
  source: 'THE TIMES',
  text: '“A rare eye for relevance, rigour and real impact.”'
}];

type VerticalBorderLinesProps = {
  isDark?: boolean;
};

const VerticalBorderLines = ({
  isDark = false
}: VerticalBorderLinesProps) => {
  const borderColor = isDark ? '#393939' : '#C7C7C8';
  const capColor = isDark ? '#FFFFFF' : '#212121';
  return <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
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

const SectionTag = ({
  children,
  dark = false
}: {
  children: string;
  dark?: boolean;
}) => <span className="inline-flex border-l-[3px] px-4 py-2 text-[11px] font-bold tracking-[0.12em]" style={{
  backgroundColor: COLORS.darkGray,
  borderColor: COLORS.red,
  color: dark ? COLORS.offWhite : COLORS.offWhite
}}>{children}</span>;

const AnimatedWordHeading = ({
  lines,
  className,
  wordClassName = 'mr-[0.13em]'
}: {
  lines: Array<{
    id: string;
    text: string;
    delay: number;
  }>;
  className: string;
  wordClassName?: string;
}) => {
  return <h1 className={className}>
      {lines.map(line => <span key={line.id} className="block overflow-hidden">
          <motion.span initial={{
            opacity: 0,
            y: '110%'
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: line.delay,
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1]
          }} className={`inline-block origin-bottom-left last:mr-0 ${wordClassName}`}>
            <span>{line.text}</span>
          </motion.span>
        </span>)}
    </h1>;
};

const Reveal = ({
  children,
  delay = 0
}: {
  children: React.ReactNode;
  delay?: number;
}) => <motion.div initial={{
  opacity: 0,
  y: 28
}} whileInView={{
  opacity: 1,
  y: 0
}} viewport={{
  once: true,
  amount: 0.18
}} transition={{
  duration: 0.8,
  delay,
  ease: EASE
}}>{children}</motion.div>;

export const TSFMediaPage = () => {
  return <main className="min-h-screen w-full overflow-x-hidden" style={{
    backgroundColor: COLORS.offWhite,
    color: COLORS.black,
    fontFamily: 'Kontora, sans-serif'
  }}>
      <section id="top" className="relative min-h-screen w-full overflow-hidden pt-20 pb-28 md:pt-24 lg:pb-44" style={{
      backgroundColor: COLORS.black
    }}>
        <div className="absolute inset-0 z-0 bg-[#111111]" aria-hidden="true">
          <img src="/galleries/cathy-mohlahlana/cathy-mohlahlana.jpg" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover object-center" />
          <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.38)_46%,rgba(0,0,0,0.3)_100%)]" />
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_18%_36%,rgba(0,0,0,0.08),transparent_34%),linear-gradient(90deg,rgba(0,0,0,0.42)_0%,rgba(0,0,0,0.2)_42%,rgba(0,0,0,0.52)_100%)]" />
        </div>
        <VerticalBorderLines isDark={true} />
        <div className="pointer-events-none absolute inset-0 z-20 hidden sm:block">
          <div className="relative mx-auto h-full max-w-[1440px] px-4 sm:px-6 lg:px-10">
            <motion.p initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 1.55,
            duration: 0.8
          }} className="absolute left-4 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.22em] md:left-6 lg:left-10" style={{
            color: COLORS.silver
          }}>Johannesburg - Operating Globally</motion.p>
          </div>
        </div>
        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-10rem)] max-w-[1440px] flex-col justify-center px-6 md:px-16">
          <motion.div initial={{
          opacity: 0,
          y: 12
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }} className="mb-6"><SectionTag>MEDIA</SectionTag></motion.div>
          <AnimatedWordHeading lines={MEDIA_HERO_HEADING_LINES} className="text-[clamp(2.8rem,12vw,7rem)] font-bold uppercase leading-[0.9] tracking-[-0.055em] text-[#F8F7F5] drop-shadow-[0_8px_34px_rgba(0,0,0,0.38)]" />
          <motion.div aria-hidden="true" initial={{
          scaleX: 0,
          opacity: 0
        }} animate={{
          scaleX: 1,
          opacity: 1
        }} transition={{
          duration: 0.74,
          delay: 2.2,
          ease: HEADING_EASE
        }} className="mt-5 h-[3px] w-28 origin-left md:mt-7 md:w-40" style={{
          backgroundColor: COLORS.red
        }} />
          <div className="mt-8 flex max-w-[500px] flex-col gap-3">
            <motion.p initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 1.5,
            duration: 0.8
          }} className="text-[15px] font-normal leading-[1.6] drop-shadow-[0_6px_22px_rgba(0,0,0,0.45)] md:text-[16px] md:leading-[1.65]" style={{
            color: COLORS.silver
          }}>Speeches that reframe thinking. Stories that reshape industries.</motion.p>
            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 1.7,
            duration: 0.8
          }} className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <motion.a href="#featured" whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: 0.98
            }} className="flex w-full items-center gap-2 rounded-full border bg-white p-1.5 sm:w-auto" style={{
              borderColor: 'rgba(255,255,255,0.18)'
            }}><span className="flex flex-1 items-center justify-center gap-3 rounded-full px-5 py-3 text-[12px] font-bold uppercase tracking-[0.1em] text-white sm:flex-none sm:px-10 sm:py-4 sm:text-[13px]" style={{
                backgroundColor: COLORS.black
              }}><span>Explore Coverage</span><ArrowRight size={16} /></span></motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="featured" className="relative py-12 sm:py-16 md:py-24 lg:py-32" style={{
      backgroundColor: COLORS.offWhite
    }}>
        <VerticalBorderLines isDark={false} />
        <div className="mx-auto max-w-[1440px] px-6 md:px-16"><SectionTag>FEATURED</SectionTag><Reveal><h2 className="mt-7 max-w-3xl text-3xl font-bold uppercase leading-[0.9] tracking-[-0.055em] text-[#000000] sm:text-4xl md:text-5xl lg:text-6xl">Where The Speakers Firm Speakers Make News.</h2></Reveal>
          <div className="mt-12 grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3 md:mt-16">{pressFeatures.map((item, index) => <Reveal key={item.id} delay={index * 0.1}><article className="group relative flex aspect-[4/3] w-full flex-col justify-between overflow-hidden border border-white/10 bg-[#000000] p-5 text-white transition-transform duration-500 hover:-translate-y-2 sm:p-6 md:p-7" style={{
              backgroundImage: `linear-gradient(180deg, rgba(0,0,0,.25), rgba(0,0,0,.94)), url(${item.image})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            }}><div className="flex items-center justify-between"><span className="text-[11px] font-bold tracking-[0.12em] text-[#AFB0B0]">{item.source}</span><ArrowUpRight size={18} className="text-[#e30e04] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></div><div><h3 className="max-w-sm text-2xl font-bold leading-[1.03] tracking-[-0.03em] md:text-3xl">{item.title}</h3><div className="mt-5 flex items-end justify-between gap-4 border-t border-white/20 pt-4 md:mt-7"><div><p className="text-sm text-[#AFB0B0]">{item.speaker}</p><p className="mt-1 text-[10px] font-bold tracking-[0.12em] text-[#AFB0B0]">{item.date}</p></div><a href="#news" className="text-[11px] font-bold uppercase tracking-widest text-[#e30e04]">Read Article <ArrowRight className="ml-1 inline" size={14} /></a></div></div></article></Reveal>)}</div>
        </div>
      </section>

      <section id="media" className="relative py-12 sm:py-16 md:py-24 lg:py-32" style={{
      backgroundColor: COLORS.black
    }}><VerticalBorderLines isDark={true} /><div className="mx-auto max-w-[1440px] px-6 md:px-16"><SectionTag dark>WATCH &amp; LISTEN</SectionTag><Reveal><h2 className="mt-7 max-w-3xl text-3xl font-bold uppercase leading-[0.9] tracking-[-0.055em] text-[#ffffff] sm:text-4xl md:text-5xl lg:text-6xl">Talks That Move the Room.</h2></Reveal><div className="mt-12 flex flex-nowrap gap-4 overflow-x-auto pb-3 md:mt-16 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">{reels.map((item, index) => <Reveal key={item.id} delay={index * 0.08}><article className="group w-[260px] flex-shrink-0 sm:w-[300px] md:w-[320px]"><div className="relative aspect-[4/3] overflow-hidden bg-[#393939]"><img src={item.image} alt={`${item.title} by ${item.speaker}`} className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100" /><button type="button" aria-label={`Play ${item.title}`} className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-[#e30e04] text-white transition-transform group-hover:scale-110 md:h-16 md:w-16"><Play size={21} fill="currentColor" /></button><span className="absolute bottom-4 right-4 bg-[#000000] px-2 py-1 text-[10px] font-bold tracking-widest text-[#ffffff]">{item.duration}</span></div><h3 className="mt-5 max-w-lg text-xl font-bold leading-tight text-white md:text-2xl">{item.title}</h3><p className="mt-2 text-sm text-[#AFB0B0]">{item.speaker}</p></article></Reveal>)}</div></div></section>

      <section className="relative py-12 sm:py-16 md:py-24 lg:py-32" style={{
      backgroundColor: COLORS.offWhite
    }}><VerticalBorderLines isDark={false} /><div className="mx-auto max-w-[1440px] px-6 md:px-16"><SectionTag>THEY SAID</SectionTag><Reveal><blockquote className="mt-10 max-w-6xl text-3xl font-bold uppercase leading-[0.9] tracking-[-0.055em] text-[#000000] sm:text-4xl md:text-5xl lg:text-6xl">“The talent secured by The Speakers Firm elevated our event, strengthened our brand positioning, and gave our audience ideas they could apply beyond the room.”<footer className="mt-8 text-sm font-normal tracking-normal text-[#686869]">— Nkululeko Dlamini, Head of Brand, Standard Bank</footer></blockquote></Reveal><div className="mt-12 grid grid-cols-1 border-t border-[#000000]/15 sm:grid-cols-2 md:mt-20 lg:grid-cols-3">{quotes.map(quote => <article key={quote.id} className="border-b border-[#000000]/15 py-8 sm:px-7 lg:border-b-0 lg:border-r lg:first:pl-0 lg:last:border-r-0"><p className="text-[11px] font-bold tracking-[0.12em] text-[#e30e04]">{quote.source}</p><p className="mt-5 text-xl font-bold leading-tight">{quote.text}</p></article>)}</div></div></section>

      <section id="brief" className="relative py-12 sm:py-16 md:py-24 lg:py-32" style={{
      backgroundColor: COLORS.black
    }}><VerticalBorderLines isDark={true} /><div className="mx-auto grid max-w-[1440px] gap-12 px-6 md:px-16 lg:grid-cols-[1.2fr_.8fr] lg:items-end lg:gap-14"><div><SectionTag dark>RESOURCES</SectionTag><Reveal><h2 className="mt-7 max-w-3xl text-3xl font-bold uppercase leading-[0.9] tracking-[-0.055em] text-[#ffffff] sm:text-4xl md:text-5xl lg:text-6xl">Get the Full Picture.</h2><p className="mt-8 max-w-lg text-base leading-relaxed text-[#AFB0B0] md:text-lg">Our press kit brings the The Speakers Firm story into focus — speaker bios, high-resolution photography and brand assets, all in one considered package.</p></Reveal></div><Reveal delay={0.15}><div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap"><motion.a href="/contact" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex w-full items-center justify-center gap-2 rounded-full border bg-white p-1.5 sm:w-auto" style={{ borderColor: 'rgba(255, 255, 255, 0.18)' }}><span className="flex flex-1 items-center justify-center gap-3 rounded-full bg-[#000000] px-5 py-3 text-[12px] font-bold uppercase tracking-[0.1em] text-white sm:flex-none sm:px-10 sm:py-4 sm:text-[13px]"><span>Download Press Kit</span><ArrowDown size={16} /></span></motion.a><motion.a href="/contact" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full rounded-full border border-white/25 px-6 py-3 text-center text-[12px] font-bold uppercase tracking-[0.1em] text-white backdrop-blur-sm hover:border-white/50 transition-colors duration-300 sm:w-auto sm:px-10 sm:py-4 sm:text-[13px]">Request a Media Brief</motion.a></div></Reveal></div></section>

      <section id="news" className="relative py-12 sm:py-16 md:py-24 lg:py-32" style={{
      backgroundColor: COLORS.offWhite
    }}><VerticalBorderLines isDark={false} /><div className="mx-auto max-w-[1440px] px-6 md:px-16"><SectionTag>IN THE NEWS</SectionTag><Reveal><h2 className="mt-7 text-3xl font-bold uppercase leading-[0.9] tracking-[-0.055em] text-[#000000] sm:text-4xl md:text-5xl lg:text-6xl">The Speakers Firm in the Media.</h2></Reveal><div className="mt-12 grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3 md:mt-16">{news.map((item, index) => <Reveal key={item.id} delay={index % 4 * 0.07}><article className="flex aspect-[4/3] w-full flex-col overflow-hidden border border-[#C7C7C8] bg-white p-5 transition-colors hover:border-[#e30e04] sm:p-6"><p className="text-[11px] font-bold tracking-[0.12em] text-[#e30e04]">{item.source}</p><h3 className="mt-5 text-xl font-bold leading-[1.02] tracking-[-0.025em] md:mt-6 md:text-2xl">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-[#686869] md:mt-4">{item.excerpt}</p><div className="mt-auto flex items-center justify-between border-t border-[#C7C7C8] pt-4"><span className="text-[10px] font-bold tracking-[0.12em] text-[#686869]">{item.date}</span><a href="#featured" className="text-[11px] font-bold uppercase tracking-widest text-[#000000] hover:text-[#e30e04]">Read <ArrowRight className="ml-1 inline" size={13} /></a></div></article></Reveal>)}</div></div></section>

      <section className="relative py-12 sm:py-16 md:py-24 lg:py-32" style={{
      backgroundColor: COLORS.red
    }}><VerticalBorderLines isDark={true} /><div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-10 px-6 md:px-16 lg:flex-row lg:items-end"><Reveal><h2 className="max-w-4xl text-[clamp(2.5rem,8vw,7rem)] font-bold uppercase leading-[0.86] tracking-[-0.055em] text-white">Your Platform Deserves the Right Voice.</h2><p className="mt-8 max-w-md text-white/75 md:text-lg">Let’s make the next conversation count.</p></Reveal><Link href="/brief-us" className="flex w-full items-center justify-center gap-2 rounded-full border bg-white p-1.5 sm:w-auto" style={{ borderColor: 'rgba(255, 255, 255, 0.18)' }}><span className="flex flex-1 items-center justify-center gap-3 rounded-full bg-[#000000] px-5 py-3 text-[12px] font-bold uppercase tracking-[0.1em] text-white sm:flex-none sm:px-10 sm:py-4 sm:text-[13px]"><span>Brief The Speakers Firm</span><ArrowUpRight size={16} /></span></Link></div></section>
    </main>;
};
