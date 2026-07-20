"use client";

import * as React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

const COLORS = {
  black: '#000000',
  red: '#e30e04',
  gray: '#000000',
  silver: '#ffffff',
  borderGray: '#ffffff',
  darkGray: '#000000',
  offWhite: '#ffffff'
};

const NOISE_TEXTURE = "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")";
const DARK_RULE_COLOR = 'rgba(248,247,245,0.10)';
const HEADING_EASE = [0.16, 1, 0.3, 1] as const;
const CARD_EASE = [0.22, 1, 0.36, 1] as const;
const TESTIMONIAL_TEXT = 'The talent secured by The Speakers Firm elevated our event, strengthened our brand positioning, and gave our audience ideas they could apply beyond the room. This was not simply a speaking engagement. It was a strategic investment in influence, reputation, and impact. Brief The Speakers Firm and turn your platform into a business asset.';

interface Leader {
  ordinal: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

interface Metric {
  id: string;
  value: string;
  label: string;
}

type Line = {
  id: string;
  text: string;
  red: boolean;
};

const leaders: Leader[] = [{
  ordinal: '01',
  name: 'Simphiwe Masiza',
  role: 'Founder and Managing Executive The Speakers Firm',
  bio: 'Simphiwe founded The Speakers Firm to connect Africa\'s most influential voices with the audiences that need to hear them. With over a decade in the talent and events industry, she has built the firm into a premier speaker bureau.',
  image: '/Team/simphiwe-masiza.jpg'
}, {
  ordinal: '02',
  name: 'Neo Mathebe',
  role: 'Talent Manager',
  bio: 'Neo manages the firm\'s speaker relationships and talent pipeline, matching every brief with the right voice. She brings a sharp eye for emerging talent and a deep understanding of what makes a speaker genuinely transformative.',
  image: '/Team/Neo-Mathebe.png'
}, {
  ordinal: '03',
  name: 'Boitumelo Mmakou',
  role: 'Digital Social Media and PR Specialist',
  bio: 'Boitumelo drives the firm\'s digital presence and brand storytelling across social and media channels. She ensures the firm\'s work reaches the clients and audiences who need it most.',
  image: '/Team/Carshiefa-Sissing.jpg'
}, {
  ordinal: '04',
  name: 'Bonnie Maponya',
  role: 'Chief of Staff',
  bio: 'Bonnie keeps the firm\'s operations running with precision, overseeing internal processes, client relations, and event logistics so that every engagement is executed flawlessly from brief to close.',
  image: '/Team/Bonnie-Maponya.jpg'
}];

const metrics: Metric[] = [{
  id: 'voices',
  value: '500+',
  label: 'curated voices across business, culture, sport, and policy'
}, {
  id: 'regions',
  value: '3',
  label: 'talent sourcing lanes: local, continental, and global'
}, {
  id: 'briefs',
  value: '48h',
  label: 'typical first-response window for strategic briefs'
}, {
  id: 'standard',
  value: '1:1',
  label: 'hands-on bureau guidance from brief through delivery'
}];

const HERO_LINES: Line[] = [{
  id: 'more',
  text: 'More Than',
  red: false
}, {
  id: 'booking',
  text: 'a Booking',
  red: false
}, {
  id: 'agency',
  text: 'Agency.',
  red: true
}];

const CTA_LINES: Line[] = [{
  id: 'partner',
  text: 'Partner with The Speakers Firm',
  red: false
}, {
  id: 'secure',
  text: 'to Secure the Best',
  red: false
}, {
  id: 'campaign',
  text: 'Speakers for Your Campaign.',
  red: true
}];

const OFFERING_WORDS = 'Our offering is not limited to the talent featured in our portfolio, we source and secure the right local, continental, or global talent for every brief.'.split(' ').map((text, order) => ({
  id: `offering-${order}-${text.replace(/[^a-zA-Z]/g, '').toLowerCase() || order}`,
  text,
  isHighlighted: order < 10
}));

const TESTIMONIAL_WORDS = TESTIMONIAL_TEXT.split(' ').map((text, order) => ({
  id: `testimonial-${order}-${text.replace(/[^a-zA-Z]/g, '').toLowerCase() || order}`,
  text,
  isHighlighted: order < 20
}));

const VerticalBorderLines = ({
  isDark = false,
  edge = 'both'
}: {
  isDark?: boolean;
  edge?: 'both' | 'left' | 'right';
}) => <div className="pointer-events-none absolute inset-0 z-20" aria-hidden="true">
    <div className="relative mx-auto h-full max-w-[1440px]">
      {(edge === 'both' || edge === 'left') && <div className="absolute bottom-0 left-4 top-0 w-px sm:left-6 lg:left-10" style={{
      backgroundColor: isDark ? 'rgba(258,247,245,0.10)' : 'rgba(33,33,33,0.14)'
    }}><span className="absolute -top-[3.5px] -left-[3px] h-[7px] w-[7px]" style={{
        backgroundColor: isDark ? COLORS.offWhite : COLORS.black
      }} /></div>}
      {(edge === 'both' || edge === 'right') && <div className="absolute bottom-0 right-4 top-0 w-px sm:right-6 lg:right-10" style={{
      backgroundColor: isDark ? 'rgba(258,247,245,0.10)' : 'rgba(33,33,33,0.14)'
    }}><span className="absolute -top-[3.5px] -left-[3px] h-[7px] w-[7px]" style={{
        backgroundColor: isDark ? COLORS.offWhite : COLORS.black
      }} /></div>}
    </div>
  </div>;

const EditorialGrid = ({
  isDark = false
}: {
  isDark?: boolean;
}) => <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
    <div className="relative mx-auto grid h-full max-w-[1440px] grid-cols-12 px-4 sm:px-6 lg:px-10">
      <span className="absolute left-4 top-0 h-full w-px sm:left-6 lg:left-10" style={{
      backgroundColor: isDark ? 'rgba(258,247,245,0.05)' : 'rgba(33,33,33,0.05)'
    }} />
      <span className="absolute right-4 top-0 h-full w-px sm:right-6 lg:right-10" style={{
      backgroundColor: isDark ? 'rgba(248,247,245,0.05)' : 'rgba(33,33,33,0.05)'
    }} />
      <span className="col-start-7 hidden h-full w-px lg:block" style={{
      backgroundColor: isDark ? 'rgba(248,247,245,0.05)' : 'rgba(33,33,33,0.05)'
    }} />
      <span className="absolute left-4 top-0 h-1.5 w-1.5 rotate-45 sm:left-6 lg:left-10" style={{
      backgroundColor: isDark ? COLORS.offWhite : COLORS.black
    }} />
      <span className="absolute right-4 top-0 h-1.5 w-1.5 rotate-45 sm:right-6 lg:right-10" style={{
      backgroundColor: isDark ? COLORS.offWhite : COLORS.black
    }} />
      <span className="absolute bottom-0 left-4 h-1.5 w-1.5 rotate-45 sm:left-6 lg:left-10" style={{
      backgroundColor: isDark ? COLORS.offWhite : COLORS.black
    }} />
      <span className="absolute bottom-0 right-4 h-1.5 w-1.5 rotate-45 sm:right-6 lg:right-10" style={{
      backgroundColor: isDark ? COLORS.offWhite : COLORS.black
    }} />
    </div>
  </div>;

const SectionTag = ({
  children,
  className = ''
}: {
  children: string;
  className?: string;
}) => <span className={`mb-5 inline-flex items-center border border-l-[4px] border-[#C7C7C8] border-l-[#e30e04] bg-[#000000] px-3 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#ffffff] sm:px-4 sm:text-[12px] ${className}`}>{children}</span>;

const AnimatedHeading = ({
  lines,
  className,
  as = 'h2'
}: {
  lines: Line[];
  className: string;
  as?: 'h1' | 'h2';
}) => {
  const Heading = as;
  return <Heading className={className}>{lines.map((line, lineOrder) => <span key={line.id} className="block">{line.text.split(' ').map((word, wordOrder) => <motion.span key={`${line.id}-${wordOrder}-${word}`} initial={{
        opacity: 0,
        y: 24,
        rotate: 3
      }} whileInView={{
        opacity: 1,
        y: 0,
        rotate: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.7,
        delay: (lineOrder * 2 + wordOrder) * 0.09,
        ease: HEADING_EASE
      }} className={`mr-[0.22em] inline-block origin-bottom-left ${line.red ? 'text-[#e30e04]' : ''}`}>{word}</motion.span>)}</span>)}</Heading>;
};

export const TSFAboutUsRedesign = () => <div style={{
  backgroundColor: COLORS.offWhite,
  color: COLORS.black
}} className="w-full overflow-x-hidden">

  <section id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden sm:min-h-[720px] lg:h-[100vh]" style={{
    backgroundColor: COLORS.black
  }}>
    <img src="/banners/siphiwe-moyo-banner.jpg" alt="Audience gathered at a live event" className="absolute inset-0 h-full w-full object-cover object-right-top" />
    <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/60 via-[#000000]/30 to-[#000000]/85" aria-hidden="true" />
    <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{
      backgroundImage: NOISE_TEXTURE
    }} aria-hidden="true" />
    <VerticalBorderLines isDark />
    <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-center px-6 pb-20 pt-20 sm:pb-24 sm:pt-24 md:px-16 md:pb-20 md:pt-28 lg:pb-16 lg:pt-24">
      <div>
        <SectionTag className="mb-6 sm:mb-8">About The Speakers Firm</SectionTag>
      </div>
      <AnimatedHeading lines={HERO_LINES} as="h1" className="font-bold uppercase max-w-full drop-shadow-[0_8px_34px_rgba(0,0,0,0.38)] text-[#ffffff] text-[clamp(3.5rem,11vw,6.5rem)] leading-[0.9] tracking-[-0.055em]" />
      <motion.div aria-hidden="true" initial={{
        scaleX: 0,
        opacity: 0
      }} animate={{
        opacity: 1,
        scaleX: 1
      }} transition={{
        duration: 0.74,
        delay: 0.8,
        ease: HEADING_EASE
      }} className="mt-5 h-[3px] w-28 origin-left md:mt-7 md:w-40 bg-[#e30e04]" />
      <div className="mt-6 flex max-w-[620px] flex-col gap-3 sm:mt-8">
        <motion.p initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 1.0,
          duration: 0.8
        }} className="text-[15px] font-normal leading-[1.6] md:text-[18px] md:leading-[1.65] drop-shadow-[0_6px_22px_rgba(0,0,0,0.45)] text-[#ffffff]/90">
          <span>A strategic partner curating the voices that will move your audience and advance your brand.</span>
        </motion.p>
      </div>
    </div>
    <motion.div animate={{
      y: [0, 6, 0]
    }} transition={{
      duration: 1.4,
      repeat: Infinity
    }} className="absolute bottom-6 left-1/2 z-40 -translate-x-1/2 text-[#ffffff]/40 sm:bottom-8" aria-hidden="true"><ArrowDown className="h-4 w-4" /></motion.div>
  </section>

  <section aria-labelledby="metrics-heading" className="relative -mt-px overflow-hidden bg-[#ffffff]">
    <VerticalBorderLines />
    <EditorialGrid />
    <div className="relative z-10 mx-auto max-w-[1440px] px-4 py-14 sm:px-6 sm:py-16 md:px-8 lg:px-16 lg:py-20">
      <h2 id="metrics-heading" className="sr-only">The Speakers Firm metrics</h2>
      <div className="grid grid-cols-2 gap-x-4 gap-y-8 border-y border-[rgba(33,33,33,0.14)] py-8 sm:gap-x-8 md:py-10 lg:grid-cols-4 lg:gap-x-10">
        {metrics.map((metric, index) => <motion.article key={metric.id} initial={{
          opacity: 0,
          y: 18
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          amount: 0.35
        }} transition={{
          duration: 0.6,
          delay: index * 0.12,
          ease: CARD_EASE
        }} className="min-w-0">
          <p className="text-[clamp(2rem,10vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.055em] text-[#000000] lg:text-[clamp(3rem,5vw,4.5rem)]">
            <span>{metric.value}</span>
          </p>
          <p className="mt-3 max-w-[240px] text-[11px] font-bold uppercase leading-[1.45] tracking-[0.1em] text-[#686869] sm:text-[12px]">
            <span>{metric.label}</span>
          </p>
        </motion.article>)}
      </div>
    </div>
  </section>

  <section id="offering" className="relative -mt-px overflow-hidden bg-[#ffffff]">
    <VerticalBorderLines />
    <EditorialGrid />
    <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.55]" aria-hidden="true" style={{
      backgroundImage: 'linear-gradient(rgba(33,33,33,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(33,33,33,0.035) 1px, transparent 1px)',
      backgroundSize: '72px 72px'
    }} />
    <div className="relative z-10 mx-auto max-w-[1440px] px-4 py-16 sm:px-6 sm:py-24 md:px-8 md:py-28 lg:px-16 lg:py-36">
      <header className="mb-10 max-w-4xl sm:mb-12 md:mb-16">
        <SectionTag className="mb-5">Our Offering</SectionTag>
        <h2 className="text-balance text-[clamp(2rem,10vw,5.375rem)] font-bold uppercase leading-[0.95] tracking-[-0.055em] text-[#000000] sm:leading-[0.93]">
          <span>A Bureau Built on Purpose.</span>
        </h2>
      </header>
      <motion.div initial={{
        opacity: 0,
        y: 32
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.9,
        ease: CARD_EASE
      }}>
        <div className="flex max-w-full flex-wrap items-baseline gap-x-[0.36em] gap-y-1 leading-[1.35] sm:gap-x-[0.4em] md:leading-[1.5]">
          {OFFERING_WORDS.map((segment, order) => <motion.span key={segment.id} initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.4,
            delay: order * 0.015,
            ease: 'linear'
          }} className={`cursor-default text-[18px] font-bold uppercase tracking-tight sm:text-[24px] md:text-[32px] lg:text-[36px] ${segment.isHighlighted ? 'text-[#AFB0B0]' : 'text-[#000000]'}`}>
            {segment.text}
          </motion.span>)}
        </div>
      </motion.div>
      <hr className="mt-10 border-0 border-t sm:mt-12" style={{
        borderColor: 'rgba(33,33,33,0.14)'
      }} />
    </div>
    <div className="relative z-30 h-[2px] w-full bg-[#e30e04]" aria-hidden="true" />
  </section>

  <section id="leadership" aria-labelledby="leadership-heading" className="relative min-h-screen w-full overflow-hidden bg-[#000000] px-4 py-14 text-[#ffffff] sm:px-6 sm:py-18 md:px-8 md:py-20 lg:px-10 lg:py-24">
    <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-4 w-px bg-[rgba(248,247,245,0.10)] sm:left-6 md:left-8 lg:left-10">
      <span className="absolute left-1/2 top-0 block h-[7px] w-[7px] -translate-x-1/2 bg-[#ffffff]" />
    </div>
    <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-4 w-px bg-[rgba(248,247,245,0.10)] sm:right-6 md:right-8 lg:right-10">
      <span className="absolute left-1/2 top-0 block h-[7px] w-[7px] -translate-x-1/2 bg-[#ffffff]" />
    </div>

    <div className="relative mx-auto max-w-[1440px]">
      <header className="mb-10 max-w-3xl sm:mb-12 md:mb-14 lg:mb-18">
        <p className="mb-4 inline-flex items-center border border-l-[4px] border-[rgba(248,247,245,0.14)] border-l-[#e30e04] bg-[#000000] px-3 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#ffffff] sm:mb-5 sm:px-4 sm:text-[12px]">
          <span>The Leadership Team</span>
        </p>
        <h2 id="leadership-heading" className="text-balance text-[clamp(2.35rem,9vw,5.375rem)] font-bold uppercase leading-[0.93] tracking-[-0.055em] text-[#ffffff]">
          <span>Built with presence, led with intention.</span>
        </h2>
      </header>

      <div className="grid gap-5 sm:gap-6 lg:grid-cols-2 lg:gap-8" role="list" aria-label="Leadership team members">
        {leaders.map((leader, order) => {
          const imageFirst = order % 2 === 1;
          return <motion.article key={leader.ordinal} role="listitem" initial={{
            opacity: 0,
            y: 32
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            amount: 0.2
          }} transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
            delay: order * 0.1
          }} className="group relative isolate grid min-h-0 overflow-hidden rounded-[22px] border border-[rgba(248,247,245,0.08)] bg-[linear-gradient(135deg,#333333_0%,#292929_54%,#1f1f1f_100%)] shadow-[0_24px_70px_rgba(0,0,0,0.22)] sm:rounded-[28px] md:min-h-[420px] md:grid-cols-2 lg:min-h-[520px]">
          <div className={`${imageFirst ? 'md:order-2' : 'md:order-1'} relative z-10 aspect-[4/3] w-full overflow-hidden bg-[#000000] md:aspect-auto md:min-h-full`}>
            <img src={leader.image} alt={`${leader.name}, ${leader.role}`} className="block h-full w-full object-cover object-top grayscale transition duration-700 ease-out group-hover:scale-[1.04] group-hover:grayscale-0" />
          </div>

          <div className={`${imageFirst ? 'md:order-1' : 'md:order-2'} relative z-10 flex min-h-[250px] flex-col justify-between overflow-hidden px-5 py-6 sm:min-h-[270px] sm:px-8 sm:py-8 md:min-h-full lg:p-10`}>
            <span className="pointer-events-none absolute bottom-0 left-0 z-0 text-[96px] font-bold leading-none tracking-[-0.08em] text-[#ffffff]/[0.035] sm:text-[132px] md:text-[150px] lg:text-[176px]">
              {leader.ordinal}
            </span>

            <span className="relative z-10 w-fit border border-[#e30e04]/40 bg-[#e30e04]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#ff4a42] sm:text-[12px]">
              {leader.ordinal}
            </span>

            <div className="relative z-10 mt-10 sm:mt-12 md:mt-14 lg:mt-18">
              <h3 className="max-w-[360px] text-[clamp(1.625rem,7vw,2.625rem)] font-bold uppercase leading-[0.95] tracking-[-0.04em] text-[#ffffff] md:text-[clamp(1.75rem,3.6vw,2.625rem)]">
                <span>{leader.name}</span>
              </h3>
              <p className="mt-4 max-w-[310px] text-[14px] leading-relaxed text-[#C9C9C6] sm:mt-5 sm:text-[15px] lg:text-[16px]">
                <span>{leader.role}</span>
              </p>
              <p className="mt-3 max-w-[560px] text-[13px] leading-relaxed text-[#A8A8A8] transition-colors duration-300 group-hover:text-[#C9C9C6] sm:text-[14px]">
                <span>{leader.bio}</span>
              </p>
            </div>
          </div>
        </motion.article>;
        })}
      </div>
    </div>
  </section>

  <section className="relative -mt-px overflow-hidden bg-[#000000] text-[#ffffff]">
    <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{
      backgroundImage: NOISE_TEXTURE
    }} aria-hidden="true" />
    <VerticalBorderLines isDark />
    <div className="relative z-30 mx-auto max-w-[1440px] px-4 py-18 text-center sm:px-6 sm:py-24 md:px-8 md:py-28 md:text-left lg:px-16 lg:py-36">
      <span className="absolute bottom-0 left-0 top-0 hidden w-[4px] bg-[#e30e04] sm:block" aria-hidden="true" />
      <span className="mx-auto mb-0 mt-0 block h-[0.5em] overflow-hidden font-serif text-[clamp(76px,26vw,200px)] leading-none text-[#e30e04] md:mx-0">“</span>
      <motion.blockquote className="mx-auto max-w-[900px] text-[clamp(18px,5.4vw,32px)] font-normal leading-[1.45] tracking-[-0.025em] md:mx-0 md:text-[clamp(20px,2.5vw,32px)]">
        {TESTIMONIAL_WORDS.map((segment, order) => <motion.span key={segment.id} initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.4,
          delay: order * 0.012,
          ease: 'linear'
        }} className={`mr-[0.28em] inline-block ${segment.isHighlighted ? 'text-[#ffffff]' : 'text-[#AFB0B0]/80'}`}>{segment.text}</motion.span>)}
      </motion.blockquote>
      <p className="mx-auto mt-8 max-w-[900px] text-[11px] font-bold uppercase tracking-[0.14em] text-[#AFB0B0] md:mx-0">
        <span>— Corporate event partner</span>
      </p>
      <hr className="mx-auto mt-10 max-w-[900px] border-0 border-t sm:mt-12 md:mx-0" style={{
        borderColor: DARK_RULE_COLOR
      }} />
    </div>
  </section>

  <section id="brief-us" className="relative -mt-px overflow-hidden bg-[#000000] text-[#ffffff]">
    <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{
      backgroundImage: NOISE_TEXTURE
    }} aria-hidden="true" />
    <VerticalBorderLines isDark />
    <div className="relative z-30 mx-auto max-w-[1440px] px-4 py-18 sm:px-6 sm:py-24 md:px-8 md:py-28 lg:px-10 lg:py-32">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-8">
          <SectionTag>Ready to Partner</SectionTag>
          <AnimatedHeading lines={CTA_LINES} className="max-w-[960px] text-[clamp(2rem,10vw,4rem)] font-bold uppercase leading-[0.97] tracking-[-0.04em] sm:leading-[0.95]" />
        </div>
        <div className="flex items-center lg:col-span-4 lg:justify-end">
          <a href="mailto:brief@thespeakersfirm.com" className="flex w-full items-center justify-center gap-3 rounded-full bg-[#e30e04] px-6 py-4 text-[11px] font-bold uppercase tracking-[0.1em] text-white shadow-[0_16px_40px_rgba(227,14,4,0.3)] transition-all hover:-translate-y-1 hover:bg-[#c00c03] sm:w-auto sm:px-8 sm:py-5 sm:text-[12px]">
            <span>Brief The Speakers Firm</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  </section>

</div>;
