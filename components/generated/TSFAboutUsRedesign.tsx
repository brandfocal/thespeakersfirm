"use client";

import * as React from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Globe2, Handshake, Menu, Mic2, SearchCheck, X } from 'lucide-react';
import Link from 'next/link';
const NOISE_TEXTURE = "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")";
const DARK_RULE_COLOR = 'rgba(255,255,255,0.08)';
const HEADING_EASE = [0.16, 1, 0.3, 1] as const;
const CARD_EASE = [0.22, 1, 0.36, 1] as const;
const TESTIMONIAL_TEXT = 'The talent secured by The Speakers Firm elevated our event, strengthened our brand positioning, and gave our audience ideas they could apply beyond the room. This was not simply a speaking engagement. It was a strategic investment in influence, reputation, and impact. Brief The Speakers Firm and turn your platform into a business asset.';
interface Leader {
  ordinal: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  expertise: string;
  location: string;
  previewBio?: string;
  expandableBio?: boolean;
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
  role: 'Founder and Chief Executive Officer | The Speakers Firm',
  bio: 'Simphiwe Masiza is a visionary entrepreneur, strategist, author, and keynote speaker. He is the Founder and Group Chief Executive Officer of EmpowaWorx™, a 100% Black-owned Pan-African growth, reputation and impact advisory firm, and the Founder and Chief Executive Officer of The Speakers Firm™, Africa\'s leading strategic speakers\' bureau. The Speakers Firm™ forms part of the EmpowaWorx™ integrated ecosystem, alongside EmpowaHer™, EmpowaWomen™, EmpowaMen™, EmpowaEntrepreneurs™ and EmpowaYouth™. Together, these platforms advance inclusive leadership, thought leadership, enterprise development, innovation, economic participation, and sustainable socioeconomic impact. Simphiwe has built an integrated portfolio of platforms focused on transforming leadership capability, driving economic impact through purposeful capacity building, and strengthening the reputation capital of organisations and leaders. Through The Speakers Firm™, he provides strategic leadership across commercial growth, talent representation, speaker positioning, executive engagement and portfolio development. He works with influential leaders, subject-matter experts, conference producers, media platforms, and corporate partners to connect powerful ideas and credible voices with audiences through keynote engagements, executive dialogues, strategic facilitation, leadership programmes, and high-impact events. With qualifications from the University of the Witwatersrand and the Gordon Institute of Business Science, Simphiwe brings multidisciplinary expertise in strategy, project management, governance, organisational development, reputation, and executive leadership. His relationship-led and commercially focused approach enables organisations and leaders to translate ideas into influence, visibility into value and conversations into measurable action. Simphiwe remains committed to building globally relevant African platforms, developing the next generation of influential voices and positioning EmpowaWorx™ and The Speakers Firm™ as trusted strategic partners for organisations seeking to shape conversations, influence industries and inspire meaningful change.',
  previewBio: 'Simphiwe Masiza is a visionary entrepreneur, strategist, author, and keynote speaker. He is the Founder and Group Chief Executive Officer of EmpowaWorx™, a 100% Black-owned Pan-African growth, reputation and impact advisory firm...',
  expandableBio: true,
  image: 'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/simphiwe-masiza.jpg',
  expertise: 'Strategic Leadership & Corporate Governance',
  location: 'Johannesburg, South Africa'
}, {
  ordinal: '02',
  name: 'Neo Mathebe',
  role: 'Managing Executive | The Speakers Firm™',
  bio: 'Neo Mathebe is the Managing Executive of The Speakers Firm™, Africa\'s leading strategic speaker\'s bureau, and part of the EmpowaWorx™ integrated ecosystem, alongside EmpowaHer™, EmpowaWomen™, EmpowaMen™, EmpowaEntrepreneurs™ and EmpowaYouth™. Together, these platforms advance inclusive leadership, thought leadership, enterprise development, innovation, economic participation, and sustainable socioeconomic impact. Aligned with The Speakers Firm\'s commitment to connecting powerful ideas, influential voices and transformative audience experiences, Neo leads the firm\'s strategic direction, commercial growth, speaker relationships, and curated talent portfolio. He oversees talent identification, onboarding, profile development, strategic positioning, and engagement management, ensuring that every client brief is matched with the right expertise, perspective, and platform. Neo works closely with speakers, clients, conference producers, and strategic partners to deliver seamless engagements across keynote speaking, executive dialogues, facilitation, thought-leadership programmes, and high-impact events. With a discerning eye for established and emerging talent, he is building a distinctive, diverse, and globally relevant portfolio defined by credible expertise, compelling ideas, proven stage presence, and measurable audience impact. His relationship-led and commercially focused approach strengthens speaker visibility, representation opportunities, client confidence, and long-term portfolio value, positioning The Speakers Firm™ as a trusted strategic partner for organisations seeking voices capable of shaping conversations, influencing industries, and inspiring meaningful action.',
  previewBio: 'Neo Mathebe is the Managing Executive of The Speakers Firm™, Africa\'s leading strategic speaker\'s bureau, and part of the EmpowaWorx™ integrated ecosystem...',
  expandableBio: true,
  image: 'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/Neo-Mathebe.png',
  expertise: 'Executive Coaching & Public Speaking',
  location: 'Cape Town, South Africa'
}, {
  ordinal: '03',
  name: 'Boitumelo Mmakou',
  role: 'Digital Social Media and PR Specialist',
  bio: 'Boitumelo drives the firm\'s digital presence and brand storytelling across social and media channels. She ensures the firm\'s work reaches the clients and audiences who need it most.',
  image: 'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/Boitumelo-Mmakou.jpg',
  expertise: 'Organisational Culture & Transformation',
  location: 'Johannesburg, South Africa'
}, {
  ordinal: '04',
  name: 'Bonnie Maponya',
  role: 'Chief of Staff',
  bio: 'Bonnie keeps the firm\'s operations running with precision, overseeing internal processes, client relations, and event logistics so that every engagement is executed flawlessly from brief to close.',
  image: 'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/Bonnie-Maponya.jpg',
  expertise: 'Business Strategy & Innovation',
  location: 'Durban, South Africa'
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
const navLinks = [{
  id: 'offering',
  label: 'Offering',
  href: '#offering'
}, {
  id: 'leadership',
  label: 'Leadership',
  href: '#leadership'
}, {
  id: 'brief',
  label: 'Brief',
  href: '#brief-us'
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
      {(edge === 'both' || edge === 'left') && <div className="absolute bottom-0 left-6 top-0 w-px md:left-10" style={{
      backgroundColor: 'rgba(255,255,255,0.08)'
    }}><span className="absolute -top-[3.5px] -left-[3px] h-[7px] w-[7px]" style={{
        backgroundColor: isDark ? '#F5F5F5' : '#666666'
      }} /></div>}
      {(edge === 'both' || edge === 'right') && <div className="absolute bottom-0 right-6 top-0 w-px md:right-10" style={{
      backgroundColor: 'rgba(255,255,255,0.08)'
    }}><span className="absolute -top-[3.5px] -left-[3px] h-[7px] w-[7px]" style={{
        backgroundColor: isDark ? '#F5F5F5' : '#666666'
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
      backgroundColor: 'rgba(255,255,255,0.04)'
    }} />
      <span className="absolute right-4 top-0 h-full w-px sm:right-6 lg:right-10" style={{
      backgroundColor: 'rgba(255,255,255,0.04)'
    }} />
      <span className="col-start-7 hidden h-full w-px lg:block" style={{
      backgroundColor: 'rgba(255,255,255,0.04)'
    }} />
      <span className="absolute left-4 top-0 h-1.5 w-1.5 rotate-45 sm:left-6 lg:left-10" style={{
      backgroundColor: isDark ? '#F5F5F5' : '#666666'
    }} />
      <span className="absolute right-4 top-0 h-1.5 w-1.5 rotate-45 sm:right-6 lg:right-10" style={{
      backgroundColor: isDark ? '#F5F5F5' : '#666666'
    }} />
      <span className="absolute bottom-0 left-4 h-1.5 w-1.5 rotate-45 sm:left-6 lg:left-10" style={{
      backgroundColor: isDark ? '#F5F5F5' : '#666666'
    }} />
      <span className="absolute bottom-0 right-4 h-1.5 w-1.5 rotate-45 sm:right-6 lg:right-10" style={{
      backgroundColor: isDark ? '#F5F5F5' : '#666666'
    }} />
    </div>
  </div>;
const SECTION_TAG_CLASS = 'inline-flex items-center border border-l-[4px] px-4 py-2 text-[12px] font-bold uppercase tracking-[0.12em] shadow-none';
const SECTION_TAG_STYLE = {
  backgroundColor: '#000000',
  borderColor: '#000000',
  borderLeftColor: '#e30e04',
  color: '#ffffff'
};

const SectionTag = ({
  children,
  className = ''
}: {
  children: string;
  className?: string;
}) => (
  <span className={`${SECTION_TAG_CLASS} ${className}`} style={SECTION_TAG_STYLE}>
    {children}
  </span>
);
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
const FloatingNav = () => { return null; };
const FloatingNavDisabled = () => {
  const {
    scrollY
  } = useScroll();
  const opacity = useTransform(scrollY, [0, 50], [0.98, 1]);
  const [open, setOpen] = React.useState(false);
  return <motion.nav style={{
    opacity
  }} className="fixed left-0 right-0 top-0 z-50 px-2 pt-3 sm:px-4 sm:pt-4 lg:px-6">
    <div className="relative mx-auto flex max-w-[1440px] items-center justify-between gap-2 rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(10,10,10,0.92)] px-3 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.26)] backdrop-blur-xl sm:px-4 sm:py-3 lg:px-6">
      <a href="#top" aria-label="The Speakers Firm home" className="flex min-w-0 items-center">
        <span className="shrink-0 text-lg font-bold tracking-tighter text-[#F5F5F5] sm:text-xl">TSF</span>
        <span className="mx-3 hidden h-4 w-px bg-[rgba(255,255,255,0.08)] min-[380px]:block sm:mx-4" aria-hidden="true" />
        <span className="hidden truncate text-[12px] tracking-wide text-[#A0A0A0] min-[380px]:inline sm:text-[13px]">The Speakers Firm</span>
      </a>

      <div className="hidden items-center gap-6 md:flex" aria-label="Primary navigation">
        {navLinks.map(link => <a key={link.id} href={link.href} className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#8A8A8A] transition-colors hover:text-[#F5F5F5]">
          <span>{link.label}</span>
        </a>)}
      </div>

      <div className="flex shrink-0 items-center gap-2">
        <a href="#brief-us" className="rounded-full bg-[#e30e04] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#c00c03] sm:px-5 sm:py-2.5 sm:text-[11px]">
          <span className="hidden min-[360px]:inline">Brief the Bureau</span>
          <span className="min-[360px]:hidden">Brief</span>
        </a>
        <button type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)} className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.08)] text-[#F5F5F5] md:hidden">
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      <AnimatePresence>
        {open && <motion.div initial={{
          opacity: 0,
          y: -8
        }} animate={{
          opacity: 1,
          y: 0
        }} exit={{
          opacity: 0,
          y: -8
        }} transition={{
          duration: 0.2
        }} className="absolute left-2 right-2 top-[calc(100%+8px)] overflow-hidden rounded-[22px] border border-[rgba(255,255,255,0.08)] bg-[rgba(10,10,10,0.96)] p-2 shadow-[0_18px_42px_rgba(0,0,0,0.34)] backdrop-blur-xl md:hidden">
          {navLinks.map(link => <a key={link.id} href={link.href} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3 text-[12px] font-bold uppercase tracking-[0.12em] text-[#F5F5F5] transition-colors hover:bg-[rgba(255,255,255,0.08)]">
            <span>{link.label}</span>
          </a>)}
        </motion.div>}
      </AnimatePresence>
    </div>
  </motion.nav>;
};
export const TSFAboutUsRedesign = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const [expandedLeaderIds, setExpandedLeaderIds] = React.useState<string[]>([]);
  const toggleLeaderBio = (leaderId: string) => {
    setExpandedLeaderIds(currentIds => currentIds.includes(leaderId) ? currentIds.filter(currentId => currentId !== leaderId) : [...currentIds, leaderId]);
  };
  return <main style={{
    fontFamily: 'Kontora, sans-serif',
    backgroundColor: '#000000',
    color: '#F5F5F5'
  }} className="w-full overflow-x-hidden">
  <style>{"@import url('https://api.fontshare.com/v2/css?f[]=kontora@400,500,700&display=swap');"}</style>
  <FloatingNav />

  <section id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden sm:min-h-[720px] lg:h-[100vh] bg-black">
    <img src="/hero_backgrounds/about-us.jpg" alt="Audience gathered at a live event" className="absolute inset-0 h-full w-full object-cover object-center" />
    <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/60 via-[#000000]/30 to-[#000000]/85" aria-hidden="true" />
    <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: NOISE_TEXTURE
      }} aria-hidden="true" />
    <VerticalBorderLines isDark />
    <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-center px-6 pb-20 pt-20 sm:pb-24 sm:pt-24 md:px-16 md:pb-20 md:pt-28 lg:pb-16 lg:pt-24">
      <div className="w-full">
        <SectionTag className="mb-6 sm:mb-8">About The Speakers Firm</SectionTag>
        <AnimatedHeading lines={HERO_LINES} as="h1" className="max-w-[1060px] text-[clamp(3rem,13vw,6.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.055em] text-[#F5F5F5] sm:text-[clamp(3.75rem,10vw,6.5rem)]" />
        <motion.p initial={{
            opacity: 0,
            y: 16
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.7,
            duration: 0.8
          }} className="mt-5 max-w-[540px] text-[16px] leading-[1.6] text-[#F5F5F5]/75 sm:mt-6 sm:text-[18px] md:text-[20px]">
          <span>A strategic partner curating the voices that will move your audience and advance your brand.</span>
        </motion.p>
      </div>
    </div>
    <motion.div animate={{
        y: [0, 6, 0]
      }} transition={{
        duration: 1.4,
        repeat: Infinity
      }} className="absolute bottom-6 left-1/2 z-40 -translate-x-1/2 text-[#F5F5F5]/40 sm:bottom-8" aria-hidden="true"><ArrowDown className="h-4 w-4" /></motion.div>
  </section>

  <section aria-labelledby="metrics-heading" className="relative -mt-px overflow-hidden bg-[#000000]">
    <VerticalBorderLines />
    <EditorialGrid />
    <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-14 sm:py-18 md:px-16 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-stretch lg:gap-14">
        <header className="flex max-w-[560px] flex-col justify-between gap-8 rounded-[32px] border border-[rgba(255,255,255,0.06)] bg-[#000000] p-5 sm:p-7 lg:p-8">
          <div>
            <SectionTag className="mb-5">At a Glance</SectionTag>
            <h2 id="metrics-heading" className="text-balance text-[clamp(2.25rem,9vw,4.75rem)] font-bold uppercase leading-[0.93] tracking-[-0.055em] text-[#F5F5F5]">
              <span>A dashboard for influence.</span>
            </h2>
            <p className="mt-5 max-w-[430px] text-[15px] leading-[1.75] text-[#A0A0A0] sm:text-[17px]">
              <span>Every brief is calibrated around reach, relevance, speed, and senior guidance — the operating signals behind a stronger platform.</span>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 border-t border-[rgba(255,255,255,0.08)] pt-5" aria-label="Influence dashboard summary">
            <p className="text-[10px] font-bold uppercase leading-[1.5] tracking-[0.14em] text-[#666666]">
              <span>Signal model</span>
            </p>
            <p className="text-right text-[10px] font-bold uppercase leading-[1.5] tracking-[0.14em] text-[#e30e04]">
              <span>Live bureau view</span>
            </p>
          </div>
        </header>

        <div className="relative overflow-hidden rounded-[36px] border border-[rgba(255,255,255,0.08)] bg-[#000000] p-4 shadow-[0_30px_90px_rgba(0,0,0,0.28)] sm:p-6 lg:p-8" aria-label="The Speakers Firm metrics dashboard">
          <div className="pointer-events-none absolute inset-0 opacity-[0.32]" aria-hidden="true" style={{
              backgroundImage: 'linear-gradient(135deg, rgba(227,14,4,0.16), transparent 34%), radial-gradient(circle at 86% 14%, rgba(245,245,245,0.11), transparent 28%)'
            }} />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-[#e30e04]" aria-hidden="true" />
          <div className="relative z-10 grid gap-4 md:grid-cols-[1.06fr_0.94fr] md:gap-5">
            <motion.article initial={{
                opacity: 0,
                y: 24
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true,
                amount: 0.3
              }} transition={{
                duration: 0.7,
                ease: CARD_EASE
              }} className="flex min-h-[320px] flex-col justify-between rounded-[28px] border border-[#e30e04]/30 bg-[#000000] p-5 sm:p-6 lg:min-h-[420px]">
              <div className="flex items-start justify-between gap-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#666666]">
                  <span>Primary reach signal</span>
                </p>
                <span className="rounded-full border border-[#e30e04]/30 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-[#ff4a42]">Curated</span>
              </div>
              <div>
                <p className="text-[clamp(5rem,21vw,11rem)] font-bold uppercase leading-[0.78] tracking-[-0.11em] text-[#F5F5F5]">
                  <span>{metrics[0].value}</span>
                </p>
                <p className="mt-5 max-w-[360px] text-[11px] font-bold uppercase leading-[1.45] tracking-[0.12em] text-[#A0A0A0] sm:text-[12px]">
                  <span>{metrics[0].label}</span>
                </p>
              </div>
            </motion.article>

            <div className="grid gap-4">
              {metrics.slice(1).map((metric, order) => <motion.article key={metric.id} initial={{
                  opacity: 0,
                  x: 24
                }} whileInView={{
                  opacity: 1,
                  x: 0
                }} viewport={{
                  once: true,
                  amount: 0.35
                }} transition={{
                  duration: 0.65,
                  ease: CARD_EASE,
                  delay: order * 0.08
                }} className="group grid min-h-[126px] grid-cols-[auto_1fr] items-end gap-4 rounded-[28px] border border-[rgba(255,255,255,0.06)] bg-[#000000]/92 p-5 transition-colors hover:border-[#e30e04]/30 hover:bg-[#000000] sm:min-h-[138px] sm:p-6">
                <p className="text-[clamp(2.5rem,10vw,5rem)] font-bold uppercase leading-[0.82] tracking-[-0.08em] text-[#F5F5F5]">
                  <span>{metric.value}</span>
                </p>
                <div className="min-w-0 border-l border-[rgba(255,255,255,0.08)] pl-4 transition-colors group-hover:border-[#e30e04]/40">
                  <p className="text-[10px] font-bold uppercase leading-[1.45] tracking-[0.12em] text-[#8A8A8A] sm:text-[11px]">
                    <span>{metric.label}</span>
                  </p>
                </div>
              </motion.article>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="offering" className="relative -mt-px overflow-hidden bg-[#000000]">
    <VerticalBorderLines />
    <EditorialGrid />
    <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.45]" aria-hidden="true" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
        backgroundSize: '72px 72px'
      }} />
    <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:py-24 md:px-16 md:py-28 lg:py-36">
      <header className="mb-10 max-w-4xl sm:mb-12 md:mb-16">
        <SectionTag className="mb-5">Our Offering</SectionTag>
        <h2 className="text-balance text-[clamp(2rem,10vw,5.375rem)] font-bold uppercase leading-[0.95] tracking-[-0.055em] text-[#F5F5F5] sm:leading-[0.93]">
          <span>A Bureau Built on Purpose.</span>
        </h2>
        <p className="mt-6 max-w-[760px] text-[16px] leading-[1.75] text-[#A0A0A0] sm:text-[18px]">
          <span>Our offering is not limited to the talent featured in our portfolio; we source and secure the right local, continental, or global talent for every brief.</span>
        </p>
      </header>

      <div className="grid gap-5 lg:grid-cols-2 lg:gap-6" aria-label="Offering comparison">
        <motion.article initial={{
            opacity: 0,
            y: 28
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            amount: 0.25
          }} transition={{
            duration: 0.7,
            ease: CARD_EASE
          }} className="group min-h-[360px] overflow-hidden rounded-[32px] border border-[rgba(255,255,255,0.06)] bg-[#000000] p-5 sm:p-7 lg:p-8">
          <div className="flex h-full flex-col justify-between gap-10 md:flex-row md:items-end lg:flex-col lg:items-start xl:flex-row xl:items-end">
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full border border-[rgba(255,255,255,0.08)] bg-[#000000] text-[#8A8A8A] sm:h-32 sm:w-32">
              <SearchCheck className="h-11 w-11 sm:h-14 sm:w-14" aria-hidden="true" />
            </div>
            <div className="max-w-[470px]">
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.16em] text-[#666666]">
                <span>What most agencies protect</span>
              </p>
              <h3 className="text-[clamp(1.75rem,7vw,3.35rem)] font-bold uppercase leading-[0.94] tracking-[-0.055em] text-[#F5F5F5]">
                <span>A fixed roster and a transaction.</span>
              </h3>
              <p className="mt-5 text-[14px] leading-[1.75] text-[#A0A0A0] sm:text-[16px]">
                <span>The search can begin and end with who is already visible, narrowing the possibilities before the event strategy has been fully understood.</span>
              </p>
            </div>
          </div>
        </motion.article>

        <motion.article initial={{
            opacity: 0,
            y: 28
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            amount: 0.25
          }} transition={{
            duration: 0.7,
            ease: CARD_EASE,
            delay: 0.12
          }} className="group min-h-[360px] overflow-hidden rounded-[32px] border border-[#e30e04]/30 bg-[#000000] p-5 text-[#F5F5F5] shadow-[0_30px_90px_rgba(0,0,0,0.28)] sm:p-7 lg:p-8">
          <div className="flex h-full flex-col justify-between gap-10 md:flex-row md:items-end lg:flex-col lg:items-start xl:flex-row xl:items-end">
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full border border-[#e30e04]/35 bg-[#e30e04] text-white shadow-[0_20px_60px_rgba(227,14,4,0.28)] sm:h-32 sm:w-32">
              <Globe2 className="h-11 w-11 sm:h-14 sm:w-14" aria-hidden="true" />
            </div>
            <div className="max-w-[500px]">
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.16em] text-[#666666]">
                <span>What TSF builds around</span>
              </p>
              <h3 className="text-[clamp(1.75rem,7vw,3.35rem)] font-bold uppercase leading-[0.94] tracking-[-0.055em] text-[#F5F5F5]">
                <span>The right voice for the brief.</span>
              </h3>
              <p className="mt-5 text-[14px] leading-[1.75] text-[#A0A0A0] sm:text-[16px]">
                <span>We map the objective first, then source across local, continental, and global lanes to secure the speaker with the authority, timing, and presence your campaign requires.</span>
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2" aria-label="Offering strengths">
                <div className="flex items-center gap-3 rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-4 py-3">
                  <Mic2 className="h-4 w-4 text-[#ff4a42]" aria-hidden="true" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#F5F5F5]">Talent strategy</span>
                </div>
                <div className="flex items-center gap-3 rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-4 py-3">
                  <Handshake className="h-4 w-4 text-[#ff4a42]" aria-hidden="true" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#F5F5F5]">End-to-end guidance</span>
                </div>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
      <hr className="mt-10 border-0 border-t sm:mt-12" style={{
          borderColor: 'rgba(255,255,255,0.08)'
        }} />
    </div>
    <div className="relative z-30 h-[2px] w-full bg-[#e30e04]" aria-hidden="true" />
  </section>

  <section id="leadership" aria-labelledby="leadership-heading" className="relative min-h-screen w-full overflow-hidden bg-[#000000] px-6 py-14 text-[#F5F5F5] sm:py-18 md:px-16 md:py-20 lg:py-24" style={{
      fontFamily: 'Kontora, Arial, sans-serif'
    }}>
    <span aria-hidden="true" className="absolute bottom-0 left-0 top-0 z-20 block w-[4px] bg-[#e30e04]" />
    <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-4 w-px bg-[rgba(255,255,255,0.08)] sm:left-6 md:left-8 lg:left-10">
      <span className="absolute left-1/2 top-0 block h-[7px] w-[7px] -translate-x-1/2 bg-[#F5F5F5]" />
    </div>
    <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-4 w-px bg-[rgba(255,255,255,0.08)] sm:right-6 md:right-8 lg:right-10">
      <span className="absolute left-1/2 top-0 block h-[7px] w-[7px] -translate-x-1/2 bg-[#F5F5F5]" />
    </div>

    <div className="relative mx-auto max-w-[1440px]">
      <header className="mb-10 max-w-3xl sm:mb-12 md:mb-14 lg:mb-18">
        <SectionTag className="mb-4 sm:mb-5">The Leadership Team</SectionTag>
        <h2 id="leadership-heading" className="text-balance text-[clamp(2.35rem,9vw,5.375rem)] font-bold uppercase leading-[0.93] tracking-[-0.055em] text-[#F5F5F5]">
          <span>Built with presence, led with intention.</span>
        </h2>
      </header>

      <div className="border-y border-[rgba(255,255,255,0.08)]" role="list" aria-label="Leadership team members">
        {leaders.map((leader, order) => <motion.article key={leader.ordinal} role="listitem" onMouseEnter={() => setHoveredIndex(order)} onMouseLeave={() => setHoveredIndex(null)} initial={{
            opacity: 0,
            y: 34
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            amount: 0.22
          }} transition={{
            duration: 0.68,
            ease: [0.22, 1, 0.36, 1],
            delay: order * 0.1
          }} className={`group grid items-center gap-x-4 gap-y-5 border-b border-[rgba(255,255,255,0.08)] py-8 transition-colors duration-300 last:border-b-0 hover:bg-[rgba(255,255,255,0.04)] sm:grid-cols-[140px_minmax(0,1fr)_auto] sm:gap-x-6 sm:py-10 lg:grid-cols-[200px_minmax(260px,1fr)_minmax(240px,320px)_auto] lg:gap-x-8 lg:py-12 ${hoveredIndex === order ? 'bg-[rgba(255,255,255,0.04)]' : ''}`}>
          <motion.div animate={{
              width: hoveredIndex === order ? 180 : 120,
              height: hoveredIndex === order ? 180 : 120
            }} transition={{
              duration: 0.35,
              ease: [0.25, 0.1, 0.25, 1]
            }} className="relative flex-shrink-0 overflow-hidden rounded-md">
            <img src={leader.image} alt={`${leader.name}, ${leader.role}`} className="h-full w-full rounded-md object-cover object-top grayscale saturate-[0.85] transition duration-500 ease-out group-hover:grayscale-0 group-hover:saturate-100" />
          </motion.div>

          <div className="min-w-0 sm:col-start-2 sm:row-start-1 lg:col-span-2 lg:col-start-auto lg:row-start-auto">
            <h3 className="text-[clamp(1.55rem,6vw,3.25rem)] font-bold uppercase leading-[0.92] tracking-[-0.045em] text-[#F5F5F5]">
              <span>{leader.name}</span>
            </h3>
            <p className="mt-3 max-w-[520px] text-[12px] font-bold uppercase leading-relaxed tracking-[0.12em] text-[#666666] sm:text-[13px]">
              <span>{leader.role}</span>
            </p>
            <div className="mt-5 max-w-[760px] text-[13px] leading-relaxed text-[#8A8A8A] transition-colors duration-300 group-hover:text-[#A0A0A0] sm:text-[14px]">
              <AnimatePresence mode="wait" initial={false}>
                {leader.expandableBio && expandedLeaderIds.includes(leader.ordinal) ? <motion.p key={`${leader.ordinal}-expanded`} initial={{
                    opacity: 0,
                    height: 0
                  }} animate={{
                    opacity: 1,
                    height: 'auto'
                  }} exit={{
                    opacity: 0,
                    height: 0
                  }} transition={{
                    duration: 0.34,
                    ease: CARD_EASE
                  }} className="overflow-hidden">
                  <span>{leader.bio}</span>
                </motion.p> : <motion.p key={`${leader.ordinal}-preview`} initial={{
                    opacity: 0,
                    height: 0
                  }} animate={{
                    opacity: 1,
                    height: 'auto'
                  }} exit={{
                    opacity: 0,
                    height: 0
                  }} transition={{
                    duration: 0.28,
                    ease: CARD_EASE
                  }} className="overflow-hidden">
                  <span>{leader.previewBio ?? leader.bio}</span>
                </motion.p>}
              </AnimatePresence>
              {leader.expandableBio && <button type="button" aria-expanded={expandedLeaderIds.includes(leader.ordinal)} onClick={() => toggleLeaderBio(leader.ordinal)} className="mt-4 inline-flex items-center gap-2 border-b border-[#e30e04]/45 pb-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#F5F5F5] transition-colors hover:border-[#e30e04] hover:text-[#ff4a42]">
                <span>{expandedLeaderIds.includes(leader.ordinal) ? 'View Less' : 'View More'}</span>
              </button>}
            </div>
          </div>

          <span className="flex h-10 w-10 items-center justify-center justify-self-start rounded-full border border-[#e30e04]/30 text-[#e30e04] transition-all duration-300 group-hover:rotate-45 group-hover:border-[#e30e04] group-hover:bg-[#e30e04] group-hover:text-[#F5F5F5] sm:col-start-3 sm:row-start-1 sm:justify-self-end lg:col-start-4 lg:row-start-auto" aria-hidden="true">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </motion.article>)}
      </div>
    </div>
  </section>

  <section className="relative -mt-px overflow-hidden bg-[#000000] text-[#F5F5F5]">
    <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: NOISE_TEXTURE
      }} aria-hidden="true" />
    <VerticalBorderLines isDark />
    <div className="relative z-30 mx-auto max-w-[1440px] px-6 py-12 text-center sm:py-20 md:px-16 md:py-28 md:text-left lg:py-36">
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
          }} className={`mr-[0.28em] inline-block ${segment.isHighlighted ? 'text-[#F5F5F5]' : 'text-[#8A8A8A]'}`}>{segment.text}</motion.span>)}
      </motion.blockquote>
      <p className="mx-auto mt-8 max-w-[900px] text-[11px] font-bold uppercase tracking-[0.14em] text-[#666666] md:mx-0">
        <span>— Corporate event partner</span>
      </p>
      <hr className="mx-auto mt-10 max-w-[900px] border-0 border-t sm:mt-12 md:mx-0" style={{
          borderColor: DARK_RULE_COLOR
        }} />
    </div>
  </section>

  <section id="brief-us" className="relative -mt-px overflow-hidden bg-[#000000] text-[#F5F5F5]">
    <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: NOISE_TEXTURE
      }} aria-hidden="true" />
    <VerticalBorderLines isDark />
    <div className="relative z-30 mx-auto max-w-[1440px] px-6 py-12 sm:py-20 md:px-16 md:py-28 lg:py-32">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-8">
          <SectionTag>Ready to Partner</SectionTag>
          <AnimatedHeading lines={CTA_LINES} className="max-w-[960px] text-[clamp(2rem,10vw,4rem)] font-bold uppercase leading-[0.97] tracking-[-0.04em] sm:leading-[0.95]" />
        </div>
        <div className="flex items-center lg:col-span-4 lg:justify-end">
          <Link href="/brief-us" className="flex w-full items-center justify-center gap-3 rounded-full bg-[#e30e04] px-6 py-4 text-[11px] font-bold uppercase tracking-[0.1em] text-white shadow-[0_16px_40px_rgba(227,14,4,0.3)] transition-all hover:-translate-y-1 hover:bg-[#c00c03] sm:w-auto sm:px-8 sm:py-5 sm:text-[12px]">
            <span>Brief The Speakers Firm</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  </section>
</main>;
};