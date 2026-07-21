"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Instagram, Linkedin, Menu, Play, X, Youtube } from 'lucide-react';
const filters = [{
  id: 'all',
  label: 'All'
}, {
  id: 'keynotes',
  label: 'Keynotes'
}, {
  id: 'executive-roundtables',
  label: 'Executive Roundtables'
}, {
  id: 'corporate-events',
  label: 'Corporate Events'
}, {
  id: 'summits',
  label: 'Summits'
}, {
  id: 'workshops',
  label: 'Workshops'
}, {
  id: 'international',
  label: 'International'
}];
const galleryItems = [{
  id: 'leaders',
  title: 'World Leaders Forum 2024',
  year: '2024',
  category: 'International',
  image: 'https://images.unsplash.com/photo-1543269664-76bc3997d9ea?q=80&w=1200&auto=format&fit=crop',
  aspect: 'tall'
}, {
  id: 'tech',
  title: 'Tech Futures Summit',
  year: '2024',
  category: 'Summits',
  image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
  aspect: 'wide'
}, {
  id: 'african',
  title: 'African Business Roundtable',
  year: '2023',
  category: 'Executive Roundtables',
  image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop',
  aspect: 'wide'
}, {
  id: 'awards',
  title: 'Corporate Excellence Awards',
  year: '2023',
  category: 'Corporate Events',
  image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop',
  aspect: 'tall'
}, {
  id: 'innovation',
  title: 'Global Innovation Keynote',
  year: '2024',
  category: 'Keynotes',
  image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop',
  aspect: 'wide'
}, {
  id: 'dialogues',
  title: 'Executive Dialogues Series',
  year: '2022',
  category: 'Executive Roundtables',
  image: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=1200&auto=format&fit=crop',
  aspect: 'wide'
}, {
  id: 'pan',
  title: 'Pan-African Leadership Summit',
  year: '2023',
  category: 'International',
  image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop',
  aspect: 'tall'
}, {
  id: 'women',
  title: 'Women in Leadership Forum',
  year: '2024',
  category: 'Summits',
  image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1200&auto=format&fit=crop',
  aspect: 'wide'
}, {
  id: 'masterclass',
  title: 'Entrepreneurship Masterclass',
  year: '2022',
  category: 'Workshops',
  image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1200&auto=format&fit=crop',
  aspect: 'wide'
}, {
  id: 'finance',
  title: 'Future of Finance Summit',
  year: '2023',
  category: 'Summits',
  image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1200&auto=format&fit=crop',
  aspect: 'tall'
}, {
  id: 'impact',
  title: 'Sustainability & Impact Roundtable',
  year: '2024',
  category: 'Executive Roundtables',
  image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=1200&auto=format&fit=crop',
  aspect: 'wide'
}, {
  id: 'sports',
  title: 'Sports & Society Symposium',
  year: '2022',
  category: 'International',
  image: 'https://images.unsplash.com/photo-1471295253337-3ceaaedca402?q=80&w=1200&auto=format&fit=crop',
  aspect: 'wide'
}];
const videos = [{
  id: 'v1',
  title: 'World Leaders Forum',
  image: 'https://images.unsplash.com/photo-1543269664-76bc3997d9ea?q=80&w=600&auto=format&fit=crop'
}, {
  id: 'v2',
  title: 'Tech Futures Summit',
  image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop'
}, {
  id: 'v3',
  title: 'Leadership In Action',
  image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600&auto=format&fit=crop'
}, {
  id: 'v4',
  title: 'African Business Roundtable',
  image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=600&auto=format&fit=crop'
}, {
  id: 'v5',
  title: 'Women In Leadership',
  image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=600&auto=format&fit=crop'
}];
const eventStats = [{
  id: 'delegates',
  value: '500+',
  label: 'Delegates'
}, {
  id: 'days',
  value: '3',
  label: 'Days'
}, {
  id: 'countries',
  value: '28',
  label: 'Countries'
}];
const heroHeadingLines = [{
  id: 'moments',
  words: [{
    id: 'moments-word',
    text: 'MOMENTS'
  }]
}, {
  id: 'that-move',
  words: [{
    id: 'that-word',
    text: 'THAT'
  }, {
    id: 'move-word',
    text: 'MOVE'
  }]
}, {
  id: 'the-world',
  words: [{
    id: 'the-word',
    text: 'THE'
  }, {
    id: 'world-word',
    text: 'WORLD'
  }]
}];
const reveal = {
  initial: {
    opacity: 0,
    y: 24
  },
  whileInView: {
    opacity: 1,
    y: 0
  },
  viewport: {
    once: true,
    amount: 0.18
  },
  transition: {
    duration: 0.7,
    ease: 'easeOut' as const
  }
};
const redRuleTransition = {
  duration: 0.74,
  ease: 'easeOut' as const
};
type VerticalBorderLinesProps = {
  isDark?: boolean;
};
type AnimatedRedRuleProps = {
  className?: string;
};
type AnimatedWordHeadingProps = {
  lines: typeof heroHeadingLines;
  className: string;
  wordClassName?: string;
};
const AnimatedRedRule = ({
  className = 'mt-5'
}: AnimatedRedRuleProps) => {
  return <div className={`relative overflow-hidden ${className}`} aria-hidden="true">
      <motion.div initial={{
      scaleX: 0,
      opacity: 0
    }} whileInView={{
      scaleX: 1,
      opacity: 1
    }} viewport={{
      once: true,
      amount: 0.55
    }} transition={redRuleTransition} className="h-[2px] w-full origin-left bg-[#e30e04]" />
    </div>;
};
const SECTION_TAG_CLASS = 'inline-flex items-center border border-l-[4px] px-4 py-2 text-[12px] font-bold uppercase tracking-[0.12em] shadow-none';
const SECTION_TAG_STYLE = {
  backgroundColor: '#393939',
  borderColor: '#393939',
  borderLeftColor: '#e30e04',
  color: '#F8F7F5'
};

const SectionTag = ({
  children
}: {
  children: string;
}) => <span className={SECTION_TAG_CLASS} style={SECTION_TAG_STYLE}>{children}</span>;

const AnimatedWordHeading = ({
  lines,
  className,
  wordClassName = 'mr-[0.13em]'
}: AnimatedWordHeadingProps) => {
  let wordOrder = -1;
  return <h1 className={className}>
      {lines.map(line => <span key={line.id} className="block">
          {line.words.map(word => {
        wordOrder += 1;
        return <span key={word.id} className="inline-block overflow-hidden pr-[0.05em] align-top">
              <motion.span initial={{
            opacity: 0,
            y: 24,
            rotate: 3
          }} animate={{
            opacity: 1,
            y: 0,
            rotate: 0
          }} transition={{
            duration: 0.6,
            delay: wordOrder * 0.09,
            ease: [0.22, 1, 0.36, 1]
          }} className={`inline-block origin-bottom-left last:mr-0 ${wordClassName}`}>
                <span>{word.text}</span>
              </motion.span>
              <span aria-hidden="true" className="inline-block">&nbsp;</span>
            </span>;
      })}
        </span>)}
    </h1>;
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
export const TSFGallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filteredItems = activeFilter === 'All' ? galleryItems : galleryItems.filter(item => item.category === activeFilter);
  return <main className="min-h-screen bg-[#ffffff] font-[Kontora,sans-serif] text-[#212121]">
      <section id="top" className="relative h-screen min-h-[640px] w-full overflow-hidden bg-[#111111] lg:h-[100vh]">
        <div className="absolute inset-0 z-0 bg-[#111111]" aria-hidden="true">
          <img src="/galleries/ralph-mathekga/ralph-mathekga.jpg" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.07)_0_1px,transparent_1px_42px)] opacity-[0.16]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        </div>
        <VerticalBorderLines isDark />
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
        }} className="mb-6"><SectionTag>GALLERY</SectionTag></motion.div>
          <AnimatedWordHeading lines={heroHeadingLines} className="max-w-full overflow-hidden text-[clamp(3rem,15vw,7rem)] font-bold uppercase leading-[0.9] tracking-[-0.055em] text-[#F8F7F5] drop-shadow-[0_8px_34px_rgba(0,0,0,0.38)] sm:text-[clamp(4rem,12vw,7rem)]" />
          <motion.div aria-hidden="true" initial={{
          scaleX: 0,
          opacity: 0
        }} animate={{
          scaleX: 1,
          opacity: 1
        }} transition={{
          delay: 2.2,
          duration: 0.74,
          ease: [0.22, 1, 0.36, 1]
        }} className="mt-5 h-[3px] w-28 origin-left bg-[#e30e04] md:mt-7 md:w-40" />
          <div className="mt-6 flex max-w-[640px] flex-col gap-3 sm:mt-8">
            <motion.p initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 1.5,
            duration: 0.8
          }} className="text-[15px] font-normal leading-[1.6] text-[#AFB0B0] drop-shadow-[0_6px_22px_rgba(0,0,0,0.45)] md:text-[16px] md:leading-[1.65]">Explore highlights from our world-class events, executive summits, and speaker engagements.</motion.p>
            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 1.7,
            duration: 0.8
          }} className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <motion.a href="/#brief-us" whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: 0.98
            }} className="flex w-full items-center gap-2 rounded-full border bg-white p-1.5 sm:w-auto" style={{
              borderColor: 'rgba(255, 255, 255, 0.18)'
            }}>
                <span className="flex flex-1 items-center justify-center gap-3 rounded-full bg-[#212121] px-5 py-3 text-[12px] font-bold uppercase tracking-[0.1em] text-white sm:flex-none sm:px-10 sm:py-4 sm:text-[13px]"><span>Brief Us</span><ArrowRight aria-hidden="true" size={16} /></span>
              </motion.a>
              <motion.a href="#gallery" whileHover={{
              scale: 1.02
            }} className="w-full rounded-full border border-[#F8F7F5]/40 px-6 py-3 text-center text-[12px] font-bold uppercase tracking-[0.1em] text-[#F8F7F5] backdrop-blur-sm sm:w-auto sm:px-10 sm:py-4 sm:text-[13px]">Explore Gallery</motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative border-y border-[rgba(33,33,33,0.14)] bg-[#ffffff]" aria-label="Gallery filters">
        <VerticalBorderLines />
        <div className="relative mx-auto max-w-[1440px] px-6 md:px-16 pt-5">
          <h2 className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#686869]">Browse by format</h2>
          <AnimatedRedRule className="mt-3 w-full" />
        </div>
        <div className="mx-auto flex max-w-[1440px] gap-2 overflow-x-auto px-6 md:px-16 py-5">{filters.map(filter => <button key={filter.id} type="button" onClick={() => setActiveFilter(filter.label)} className={`shrink-0 rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-[0.1em] transition-colors ${activeFilter === filter.label ? 'bg-[#212121] text-[#F8F7F5]' : 'border border-[#C7C7C8] text-[#686869] hover:border-[#212121] hover:text-[#212121]'}`}>{filter.label}</button>)}</div>
      </section>

      <section id="gallery" className="relative mx-auto max-w-[1440px] px-6 py-16 md:px-16 md:py-24 lg:py-32">
        <VerticalBorderLines />
        <motion.div {...reveal} className="mb-12 flex flex-col items-start justify-between gap-6 sm:mb-16 md:flex-row md:items-end"><div><SectionTag>Highlights</SectionTag><h2 className="mt-6 max-w-2xl text-[clamp(2.5rem,12vw,3.75rem)] font-bold uppercase leading-[0.9] tracking-[-0.055em] sm:text-6xl">A room full<br /><span className="text-[#686869]">of possibility.</span></h2><AnimatedRedRule className="mt-6 w-full" /></div><p className="hidden max-w-xs text-right text-sm leading-relaxed text-[#686869] md:block">A visual record of the ideas, conversations, and people shaping what comes next.</p></motion.div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map(item => <motion.figure key={item.id} {...reveal} className="group relative min-h-[320px] cursor-pointer"><div className="relative aspect-[4/3] min-h-[240px] overflow-hidden"><img className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src={item.image} alt={item.title} /><div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" /><div className="absolute bottom-5 left-5 right-5 translate-y-4 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"><span className="block text-sm font-bold uppercase tracking-[0.08em]">{item.title}</span><span className="mt-1 block text-[11px] font-bold uppercase tracking-[0.12em] text-white/70">{item.category}</span></div><span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#e30e04] transition-all duration-500 group-hover:w-full" aria-hidden="true" /></div><figcaption className="border-t border-[rgba(33,33,33,0.14)] px-0 py-4"><strong className="block text-[13px] font-bold uppercase tracking-[0.08em] text-[#212121]">{item.title}</strong><span className="mt-1 block text-[11px] uppercase tracking-[0.1em] text-[#686869]">{item.year} / {item.category}</span></figcaption></motion.figure>)}
        </div>
      </section>

      <section id="events" className="relative bg-[#212121] px-6 py-16 text-[#F8F7F5] md:px-16 md:py-24 lg:py-32"><VerticalBorderLines isDark /><div className="mx-auto grid max-w-[1440px] items-center gap-12 md:grid-cols-12 lg:gap-20"><motion.div {...reveal} className="md:col-span-7"><img src="https://images.unsplash.com/photo-1543269664-76bc3997d9ea?q=80&w=1400&auto=format&fit=crop" alt="World Leaders Forum 2024" className="aspect-[4/3] w-full object-cover object-center" /></motion.div><motion.div {...reveal} className="md:col-span-5"><SectionTag>Featured</SectionTag><h2 className="mt-6 text-[clamp(2.5rem,11vw,3.75rem)] font-bold uppercase leading-[0.9] tracking-[-0.055em] sm:text-6xl">World Leaders<br />Forum 2024</h2><AnimatedRedRule className="mt-6 w-full" /><p className="mt-7 max-w-md text-base leading-relaxed text-[#F8F7F5]/70">A convening of influential voices, bold ideas, and the leaders building a more connected African future.</p><div className="my-9 grid grid-cols-1 gap-5 border-y border-[#F8F7F5]/15 py-5 min-[420px]:grid-cols-3">{eventStats.map(stat => <div key={stat.id}><strong className="block text-3xl font-bold tracking-[-0.05em]">{stat.value}</strong><span className="mt-1 block text-[10px] uppercase tracking-[0.12em] text-[#AFB0B0]">{stat.label}</span></div>)}</div><a href="/#brief-us" className="inline-flex items-center rounded-full bg-[#e30e04] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.1em] text-white">View event story <ArrowRight className="ml-2 h-4 w-4" /></a></motion.div></div></section>

      <section className="relative mx-auto max-w-[1440px] px-6 py-16 md:px-16 md:py-24 lg:py-32"><VerticalBorderLines /><motion.div {...reveal}><SectionTag>Videos & Reels</SectionTag><h2 className="mt-6 text-[clamp(2.5rem,11vw,3.75rem)] font-bold uppercase leading-[0.9] tracking-[-0.055em] sm:text-6xl">See the energy<br /><span className="text-[#686869]">in motion.</span></h2><AnimatedRedRule className="mt-6 w-full" /></motion.div><div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5">{videos.map(video => <figure key={video.id} className="group w-full"><div className="relative aspect-[9/16] overflow-hidden"><img className="absolute inset-0 h-full w-full object-cover object-center" src={video.image} alt={video.title} /><span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-105"><span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 text-white transition-colors group-hover:bg-[#e30e04]"><Play className="ml-0.5 h-4 w-4 fill-current" /></span></span></div><figcaption className="pt-3 text-[12px] font-bold uppercase tracking-[0.08em]">{video.title}</figcaption></figure>)}</div></section>

      <section id="contact" className="relative border-t border-[rgba(33,33,33,0.14)] py-16 md:py-24 lg:py-28"><VerticalBorderLines /><motion.div {...reveal} className="mx-auto grid max-w-[1440px] gap-10 px-6 md:px-16 lg:grid-cols-12 lg:items-end"><div className="lg:col-span-8"><SectionTag>Media Enquiries</SectionTag><h2 className="mt-7 text-[clamp(3rem,13vw,7rem)] font-bold uppercase leading-[0.86] tracking-[-0.055em]">Bring TSF<br /><span className="text-[#686869]">to your stage.</span></h2><p className="mt-8 max-w-lg text-base leading-relaxed text-[#686869]">For press enquiries, event coverage, or to invite one of our speakers to your next gathering, our team would love to hear from you.</p></div><div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end"><a href="mailto:info@thespeakersfirm.co.za" className="inline-flex items-center rounded-full bg-[#e30e04] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.1em] text-white">Make an enquiry <ArrowRight className="ml-2 h-4 w-4" /></a><a href="/#brief-us" className="inline-flex items-center rounded-full border border-[#212121] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.1em] text-[#212121]">Contact team</a></div></motion.div></section>
    </main>;
};
