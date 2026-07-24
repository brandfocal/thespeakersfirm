"use client";

import { useState } from 'react';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Search } from 'lucide-react';

type Speaker = {
  id: string;
  name: string;
  role: string;
  image: string;
  topics: string[];
  path: string;
};

const speakers: Speaker[] = [
  {
    "id": "clement-manyathela",
    "name": "Clement Manyathela",
    "role": "Award-Winning Broadcaster, Radio Talk-Show Host, Moderator & Public-Dialogue Facilitator",
    "image": "/speaker_thumbnails/Clement-Manyathela-The-Speakers-Firm.jpg",
    "topics": [
      "Premium Event Facilitation & Hosting",
      "Strategic Audience Engagement",
      "High-Energy Corporate Presentation"
    ],
    "path": "/tracks/mc-and-facilitators/clement-manyathela"
  },
  {
    "id": "cathy-mohlahlana",
    "name": "Cathy Mohlahlana",
    "role": "Award-Winning Broadcaster, News Anchor, Moderator & Strategic Communications Professional",
    "image": "/speaker_thumbnails/Cathy-Mohlahlana--The-Speakers-Firm-The-Speakers-Firm.jpg",
    "topics": [
      "Premium Event Facilitation & Hosting",
      "Strategic Audience Engagement",
      "High-Energy Corporate Presentation"
    ],
    "path": "/tracks/mc-and-facilitators/cathy-mohlahlana"
  },
  {
    "id": "sindy-mabe",
    "name": "Sindy Mabe",
    "role": "Television News Anchor, Journalist, Moderator & Event Host",
    "image": "/speakers/MCs/Sindy-Mabe-The-Speakers-Firm.jpg",
    "topics": [
      "Premium Event Facilitation & Hosting",
      "Strategic Audience Engagement",
      "High-Energy Corporate Presentation"
    ],
    "path": "/tracks/mc-and-facilitators/sindy-mabe"
  },
  {
    "id": "michelle-craig",
    "name": "Michelle Craig",
    "role": "Broadcaster, Moderator, Conference Chairperson & Event Host",
    "image": "/speakers/MCs/Michelle-Craig-The-Speakers-Firm.jpg",
    "topics": [
      "Premium Event Facilitation & Hosting",
      "Strategic Audience Engagement",
      "High-Energy Corporate Presentation"
    ],
    "path": "/tracks/mc-and-facilitators/michelle-craig"
  },
  {
    "id": "thami-ngubeni",
    "name": "Thami Ngubeni",
    "role": "Media Personality, Author, Producer, Moderator & Thought Leader",
    "image": "/speakers/MCs/Thami-Ngubeni-The-Speakers-Firm.jpg",
    "topics": [
      "Premium Event Facilitation & Hosting",
      "Strategic Audience Engagement",
      "High-Energy Corporate Presentation"
    ],
    "path": "/tracks/mc-and-facilitators/thami-ngubeni"
  },
  {
    "id": "thabo-mdluli",
    "name": "Thabo Mdluli",
    "role": "Television Presenter, Broadcaster, Moderator & Master of Ceremonies",
    "image": "/speakers/MCs/Thabo-Mdluli-The-Speakers-Firm.jpg",
    "topics": [
      "Premium Event Facilitation & Hosting",
      "Strategic Audience Engagement",
      "High-Energy Corporate Presentation"
    ],
    "path": "/tracks/mc-and-facilitators/thabo-mdluli"
  },
  {
    "id": "bongiwe-zwane",
    "name": "Bongiwe Zwane",
    "role": "News Anchor, Television Host, Journalist & Facilitator",
    "image": "/speakers/MCs/Bongiwe-Zwane-The-Speakers-Firm.jpg",
    "topics": [
      "Premium Event Facilitation & Hosting",
      "Strategic Audience Engagement",
      "High-Energy Corporate Presentation"
    ],
    "path": "/tracks/mc-and-facilitators/bongiwe-zwane"
  },
  {
    "id": "kgomotso-monyai",
    "name": "Kgomotso Monyai",
    "role": "Television Broadcaster, Panel Moderator & Event Host",
    "image": "/speakers/MCs/Kgomotso-Monyai-The-Speakers-Firm.jpg",
    "topics": [
      "Premium Event Facilitation & Hosting",
      "Strategic Audience Engagement",
      "High-Energy Corporate Presentation"
    ],
    "path": "/tracks/mc-and-facilitators/kgomotso-monyai"
  },
  {
    "id": "kayise-ngqula",
    "name": "Kayise Ngqula",
    "role": "Media Executive, Executive Producer, Broadcaster, Speaker & Social-Impact Advocate",
    "image": "/speakers/MCs/Kayise-Ngqula-The-Speakers-Firm2.jpg",
    "topics": [
      "Premium Event Facilitation & Hosting",
      "Strategic Audience Engagement",
      "High-Energy Corporate Presentation"
    ],
    "path": "/tracks/mc-and-facilitators/kayise-ngqula"
  },
  {
    "id": "nqaba-mabece",
    "name": "Nqaba Mabece",
    "role": "Broadcaster, Legal and Policy Professional, Moderator & Strategic Stakeholder-Engagement Specialist",
    "image": "/speakers/MCs/Nqaba-Mabece-The-Speakers-Firm.jpg",
    "topics": [
      "Premium Event Facilitation & Hosting",
      "Strategic Audience Engagement",
      "High-Energy Corporate Presentation"
    ],
    "path": "/tracks/mc-and-facilitators/nqaba-mabece"
  },
  {
    "id": "hulisani-ravele",
    "name": "Hulisani Ravele",
    "role": "Seasoned Broadcaster, Television Presenter, Moderator & Media Personality",
    "image": "/speakers/MCs/Hulisani-Ravele-The-Speakers-Firm.jpg",
    "topics": [
      "Premium Event Facilitation & Hosting",
      "Strategic Audience Engagement",
      "High-Energy Corporate Presentation"
    ],
    "path": "/tracks/mc-and-facilitators/hulisani-ravele"
  },
  {
    "id": "penny-lebyane",
    "name": "Penny Lebyane",
    "role": "Radio Broadcaster, Media Facilitator, Moderator & Master of Ceremonies",
    "image": "/speakers/MCs/Penny-Lebyane-The-Speakers-Firm.jpg",
    "topics": [
      "Premium Event Facilitation & Hosting",
      "Strategic Audience Engagement",
      "High-Energy Corporate Presentation"
    ],
    "path": "/tracks/mc-and-facilitators/penny-lebyane"
  },
  {
    "id": "khaya-dlanga",
    "name": "Khaya Dlanga",
    "role": "Author, Marketing Executive, Storyteller & Conference Facilitator",
    "image": "/speakers/MCs/Khaya-Dlanga-The-Speakers-Firm.jpg",
    "topics": [
      "Premium Event Facilitation & Hosting",
      "Strategic Audience Engagement",
      "High-Energy Corporate Presentation"
    ],
    "path": "/tracks/mc-and-facilitators/khaya-dlanga"
  },
  {
    "id": "thembekile-mrototo",
    "name": "Thembekile Mrototo",
    "role": "News Anchor, Broadcaster, Moderator & Event Host",
    "image": "/speakers/MCs/Thembekile-Mrototo-The-Speakers-Firm.jpg",
    "topics": [
      "Premium Event Facilitation & Hosting",
      "Strategic Audience Engagement",
      "High-Energy Corporate Presentation"
    ],
    "path": "/tracks/mc-and-facilitators/thembekile-mrototo"
  },
  {
    "id": "rami-chuene",
    "name": "Rami Chuene",
    "role": "Actress, Author, Public Speaker, Master of Ceremonies & Voice-Over Artist",
    "image": "/speakers/MCs/Rami-Chuene-The-Speakers-Firm.jpg",
    "topics": [
      "Premium Event Facilitation & Hosting",
      "Strategic Audience Engagement",
      "High-Energy Corporate Presentation"
    ],
    "path": "/tracks/mc-and-facilitators/rami-chuene"
  },
  {
    "id": "naledi-moleo",
    "name": "Naledi Moleo",
    "role": "News Anchor, Radio Host, Television Presenter, Producer & Moderator",
    "image": "/speakers/MCs/Naledi-Moleo-The-Speakers-Firm.jpg",
    "topics": [
      "Premium Event Facilitation & Hosting",
      "Strategic Audience Engagement",
      "High-Energy Corporate Presentation"
    ],
    "path": "/tracks/mc-and-facilitators/naledi-moleo"
  },
  {
    "id": "criselda-kananda",
    "name": "Criselda Kananda",
    "role": "Broadcaster, Humanitarian, Health Advocate, Facilitator & Master of Ceremonies",
    "image": "/speakers/MCs/Criselda-Kananda-The-Speakers-Firm.jpg",
    "topics": [
      "Premium Event Facilitation & Hosting",
      "Strategic Audience Engagement",
      "High-Energy Corporate Presentation"
    ],
    "path": "/tracks/mc-and-facilitators/criselda-kananda"
  },
  {
    "id": "putco-mafani",
    "name": "Putco Mafani",
    "role": "Radio Broadcaster, Motivational Speaker & Master of Ceremonies",
    "image": "/speakers/MCs/Putco-Mafani-The-Speakers-Firm.jpg",
    "topics": [
      "Premium Event Facilitation & Hosting",
      "Strategic Audience Engagement",
      "High-Energy Corporate Presentation"
    ],
    "path": "/tracks/mc-and-facilitators/putco-mafani"
  },
  {
    "id": "tbo-touch",
    "name": "Thabo “Tbo Touch” Molefe",
    "role": "Media Entrepreneur, Broadcaster, Business Leader & Event Host",
    "image": "/speakers/MCs/tbo-touch3.jpg",
    "topics": [
      "Premium Event Facilitation & Hosting",
      "Strategic Audience Engagement",
      "High-Energy Corporate Presentation"
    ],
    "path": "/tracks/mc-and-facilitators/tbo-touch"
  },
  {
    "id": "peter-ndoro",
    "name": "Peter Ndoro",
    "role": "Veteran Broadcast Journalist, Conference Facilitator, Moderator & Master of Ceremonies",
    "image": "/speakers/MCs/Peter-Ndoro-The-Speakers-Firm2.jpg",
    "topics": [
      "Premium Event Facilitation & Hosting",
      "Strategic Audience Engagement",
      "High-Energy Corporate Presentation"
    ],
    "path": "/tracks/mc-and-facilitators/peter-ndoro"
  },
  {
    "id": "sibusiso-molimi",
    "name": "Sibusiso Molimi",
    "role": "Master of Ceremonies, Keynote Speaker, Entrepreneur & Perspective-Shifter",
    "image": "/speakers/MCs/Sibusiso-Molimi-The-Speakers-Firm.jpg",
    "topics": [
      "Premium Event Facilitation & Hosting",
      "Strategic Audience Engagement",
      "High-Energy Corporate Presentation"
    ],
    "path": "/tracks/mc-and-facilitators/sibusiso-molimi"
  },
  {
    "id": "noni-khumalo",
    "name": "Nonhlanhla “Noni” Khumalo",
    "role": "Radio and Television Broadcaster, Producer & Corporate Events MC",
    "image": "/speakers/MCs/Noni-Khumalo-The-Speakers-Firm.jpg",
    "topics": [
      "Premium Event Facilitation & Hosting",
      "Strategic Audience Engagement",
      "High-Energy Corporate Presentation"
    ],
    "path": "/tracks/mc-and-facilitators/noni-khumalo"
  },
  {
    "id": "bridget-masinga-mc",
    "name": "Bridget Masinga",
    "role": "Radio Host, Television Personality, Producer, Public Speaker & Master of Ceremonies",
    "image": "/speakers/MCs/Bridget-Masinga-The-Speakers-Firm.jpg",
    "topics": [
      "Premium Event Facilitation & Hosting",
      "Strategic Audience Engagement",
      "High-Energy Corporate Presentation"
    ],
    "path": "/tracks/mc-and-facilitators/bridget-masinga-mc"
  },
  {
    "id": "aubrey-masango-mc",
    "name": "Aubrey Masango",
    "role": "Radio Personality, Broadcaster, Moderator & Master of Ceremonies",
    "image": "/speakers/MCs/Aubrey-Masango-The-Speakers-Firm.jpg",
    "topics": [
      "Premium Event Facilitation & Hosting",
      "Strategic Audience Engagement",
      "High-Energy Corporate Presentation"
    ],
    "path": "/tracks/mc-and-facilitators/aubrey-masango-mc"
  }
];

const filterChips = [
  { id: 'all', label: 'All' },
  { id: 'topic-0', label: "Premium Event Facilitation & Hosting" },
  { id: 'topic-1', label: "Strategic Audience Engagement" },
  { id: 'topic-2', label: "High-Energy Corporate Presentation" },
  { id: 'topic-3', label: "Brand Visibility & Credibility" }
];

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.16 },
  transition: { duration: 0.65, ease: 'easeOut' as const }
};

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

const VerticalBorderLines = ({ isDark = false, isOutside = false }: { isDark?: boolean; isOutside?: boolean }) => {
  const borderColor = isDark ? '#393939' : '#C7C7C8';
  const capColor = isDark ? '#FFFFFF' : '#212121';
  
  if (isOutside) {
    return (
      <div className="absolute inset-y-0 left-0 right-0 pointer-events-none overflow-hidden select-none z-20">
        <div className="h-full w-full relative px-6 md:px-16">
          <div className="absolute left-6 md:left-16 top-0 bottom-0 w-[1px]" style={{ backgroundColor: borderColor }}>
            <div className="absolute -top-[3.5px] left-1/2 -translate-x-1/2 w-[7px] h-[7px]" style={{ backgroundColor: capColor }} />
          </div>
          <div className="absolute right-6 md:right-16 top-0 bottom-0 w-[1px]" style={{ backgroundColor: borderColor }}>
            <div className="absolute -top-[3.5px] left-1/2 -translate-x-1/2 w-[7px] h-[7px]" style={{ backgroundColor: capColor }} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-20">
      <div className="h-full mx-auto max-w-[1440px] relative px-6 md:px-16">
        <div className="absolute left-6 md:left-16 top-0 bottom-0 w-[1px]" style={{ backgroundColor: borderColor }}>
          <div className="absolute -top-[3.5px] left-1/2 -translate-x-1/2 w-[7px] h-[7px]" style={{ backgroundColor: capColor }} />
        </div>
        <div className="absolute right-6 md:right-16 top-0 bottom-0 w-[1px]" style={{ backgroundColor: borderColor }}>
          <div className="absolute -top-[3.5px] left-1/2 -translate-x-1/2 w-[7px] h-[7px]" style={{ backgroundColor: capColor }} />
        </div>
      </div>
    </div>
  );
};

export function TSFCelebritySpeakersMcsComedyAndEntertainmentCategory() {
  const [searchValue, setSearchValue] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const normalizedSearch = searchValue.trim().toLowerCase();
  const filteredSpeakers = speakers.filter(speaker => {
    const matchesSearch = normalizedSearch.length === 0 || 
      speaker.name.toLowerCase().includes(normalizedSearch) || 
      speaker.role.toLowerCase().includes(normalizedSearch);
    const matchesFilter = activeFilter === 'All' || speaker.topics.includes(activeFilter);
    return matchesSearch && matchesFilter;
  });

  return (
    <main id="top" className="min-h-screen overflow-hidden bg-[#212121] text-[#f8f7f5] font-[Kontora,sans-serif] selection:bg-[#e30e04] selection:text-white">
      <section className="relative min-h-screen w-full overflow-hidden pt-20 pb-28 md:pt-24 lg:pb-44 bg-[#000000] px-6 md:px-16">
        <div className="absolute inset-0 z-0 bg-[#111111]" aria-hidden="true">
          <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0.4)_50%,rgba(0,0,0,0.3)_100%)]" />
        </div>
        <VerticalBorderLines isDark={true} isOutside={false} />
        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-10rem)] max-w-[1440px] flex-col justify-center px-6 md:px-16">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <SectionTag>MASTERS OF CEREMONY</SectionTag>
          </motion.div>
          
          <h1 className="text-[clamp(3.5rem,11vw,6.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.055em] text-[#ffffff] drop-shadow-[0_8px_34px_rgba(0,0,0,0.38)] mt-6">
            <span>MASTERS OF</span><br />
            <span className="text-[#e30e04]">CEREMONY.</span>
          </h1>
          
          <motion.div initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }} transition={{ delay: 0.6, duration: 0.7 }} className="mt-5 h-[3px] w-28 origin-left bg-[#e30e04] md:mt-7 md:w-40" />
          
          <div className="mt-8 flex max-w-[650px] flex-col gap-4">
            <p className="text-[16px] font-normal leading-[1.65] text-[#ffffff]/80 drop-shadow-[0_6px_22px_rgba(0,0,0,0.45)] md:text-[18px]">
              Bringing Visibility, Energy, and Unforgettable Engagement.
            </p>
            <p className="text-sm leading-6 text-white/60">
              Acclaimed public figures, broadcasters, actors, comedians, musicians and professional presenters bringing visibility, credibility, energy and unforgettable engagement to every event.
            </p>
          </div>
        </div>
      </section>

      <section id="speakers" className="relative overflow-visible bg-[#000000] px-6 md:px-16 py-20">
        <VerticalBorderLines isDark={true} isOutside={true} />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-16">
          <div className="mb-6">
            <span className="inline-flex border-l-4 border-[#e30e04] bg-[#2a2a2a] px-4 py-2 text-[10px] font-bold tracking-[0.2em] text-white">OUR FACULTY</span>
          </div>
          
          <h2 className="max-w-[700px] text-[clamp(2.5rem,6vw,4.5rem)] font-black uppercase leading-[0.88] tracking-[-0.07em] text-white">
            Signature Category <span className="text-[#e30e04]">Experts</span>
          </h2>

          <div className="sticky top-[80px] z-30 mt-10 flex flex-col gap-3 border-b border-white/[0.08] bg-[#0A0A0A] p-4 md:flex-row md:items-center md:gap-6 rounded-xl border border-white/10">
            <label htmlFor="speaker-search" className="relative block w-full md:w-72 lg:w-80">
              <span className="sr-only">Search faculty by name or topic</span>
              <Search aria-hidden="true" size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
              <input id="speaker-search" type="search" value={searchValue} onChange={event => setSearchValue(event.target.value)} placeholder="Search faculty by name..." className="w-full rounded-full border border-white/[0.10] bg-[#1e1e1e] py-2.5 pl-9 pr-4 text-[12px] text-[#f8f7f5] placeholder-white/30 outline-none transition-all focus:border-[#e30e04]/60 focus:ring-1 focus:ring-[#e30e04]/30" />
            </label>
            <div className="flex min-w-0 flex-1 items-center gap-3">
              <div className="flex w-full gap-2 overflow-x-auto pb-1 md:flex-wrap md:overflow-visible md:pb-0 [scrollbar-width:none]">
                {filterChips.map(chip => (
                  <button key={chip.id} type="button" onClick={() => setActiveFilter(chip.label)} className={`${activeFilter === chip.label ? 'border-[#e30e04] bg-[#e30e04] text-white' : 'border-white/[0.10] bg-transparent text-white/50 hover:border-white/30 hover:text-white/80'} shrink-0 rounded-full border px-4 py-2 text-[10px] font-bold uppercase tracking-[0.12em] transition-all`}>
                    <span>{chip.id === 'all' ? 'All' : chip.label.toUpperCase()}</span>
                  </button>
                ))}
              </div>
              <span className="hidden shrink-0 text-[10px] uppercase tracking-[0.1em] text-white/35 md:inline">
                Showing {filteredSpeakers.length} speakers
              </span>
            </div>
          </div>

          <LayoutGroup>
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              <AnimatePresence mode="popLayout">
                {filteredSpeakers.map(speaker => (
                  <motion.article layout initial={{ opacity: 0, scale: 0.95, y: 12 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.35, ease: 'easeOut' }} key={speaker.id} className="group relative overflow-hidden bg-[#1e1e1e] border border-white/[0.06]">
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <img 
                        src={speaker.image} 
                        onError={(e) => {
                          e.currentTarget.src = '/image_marquee/Abner-Mariri-The-Speakers-Firm.jpg';
                        }}
                        alt={speaker.name} 
                        className="h-full w-full object-cover grayscale contrast-[1.06] transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0" 
                      />
                    </div>
                    <div className="border-t border-white/[0.08] p-4 bg-[#1e1e1e]">
                      <h3 className="text-sm font-bold text-white">{speaker.name}</h3>
                      <p className="mt-1 text-[10px] uppercase text-white/50">{speaker.role}</p>
                      <a href={speaker.path} className="mt-3 flex min-h-[36px] items-center gap-2 text-[10px] font-bold uppercase tracking-[0.08em] text-[#e30e04]">
                        <span>View Intelligence Profile</span>
                        <ArrowUpRight size={14} />
                      </a>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
            {filteredSpeakers.length === 0 ? <p className="mt-8 text-[13px] italic text-white/40">No speakers found for this topic</p> : null}
          </LayoutGroup>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/[0.06] bg-[#0A0A0A] px-6 md:px-16 py-14">
        <VerticalBorderLines isDark={true} isOutside={true} />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-16">
          <blockquote className="m-0">
            <span className="text-4xl leading-none text-[#e30e04] sm:text-6xl font-serif">“</span>
            <p className="mt-2 max-w-[800px] text-base italic leading-8 text-[#f8f7f5]/85 sm:text-lg">
              The right talent can change the energy of a room, sharpen a strategic conversation, and redefine the success of an event. The Speakers Firm delivered exactly that, with precision, professionalism, and measurable value. They remain our agency of choice for speakers, MCs, facilitators, and influential talent.
            </p>
            <footer className="mt-6 text-[10px] uppercase tracking-[0.16em] text-white/40">[Client Name, Title and Organisation]</footer>
          </blockquote>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#000000] px-6 md:px-16 py-20">
        <VerticalBorderLines isDark={true} isOutside={true} />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#e30e04] uppercase">START THE SEARCH</span>
              <h2 className="mt-5 max-w-[760px] text-[clamp(2.5rem,6vw,4.5rem)] font-black uppercase leading-[0.88] tracking-[-0.07em] text-white">
                Cannot Find the Perfect Fit? <span className="text-[#e30e04]">We'll Find Them.</span>
              </h2>
              <p className="mt-6 max-w-[560px] text-sm leading-6 text-white/55">Our offering is not limited to the talent featured in our published portfolio. We search the market, challenge conventional choices, and secure the right local, continental, or global talent for your most demanding brief.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <motion.a href="/brief-us" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center" style={{ borderColor: 'rgba(255, 255, 255, 0.18)' }}>
                <span className="flex flex-1 items-center justify-center gap-3 rounded-full bg-[#e30e04] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.1em] text-white">
                  <span>Brief The Bureau Today</span>
                  <ArrowRight size={16} />
                </span>
              </motion.a>
              <a href="/categories" className="border border-white/25 hover:border-white/50 backdrop-blur-sm px-7 py-4 rounded-full text-[11px] font-bold uppercase tracking-[0.1em] text-white flex items-center justify-center">
                <span>Explore All Categories</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
