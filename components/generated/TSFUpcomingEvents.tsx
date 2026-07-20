"use client";

import * as React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, CalendarDays, Mail, MapPin, Search } from 'lucide-react';

const events = [{
  id: 'disruption',
  day: '15',
  month: 'MAR',
  year: '2025',
  city: 'Johannesburg',
  category: 'Keynotes',
  title: 'Navigating Disruption',
  description: 'A clear-eyed conversation about leading with confidence through uncertainty.',
  speaker: 'Prof. Bonang Mohale',
  image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600'
}, {
  id: 'women',
  day: '28',
  month: 'MAR',
  year: '2025',
  city: 'Cape Town',
  category: 'Roundtables',
  title: 'Women in Leadership Roundtable',
  description: 'A candid exchange on power, progress, and the next generation of leaders.',
  speaker: 'The Speakers Firm',
  image: 'https://images.unsplash.com/photo-1573497019236-17f8177b81e8?q=80&w=600'
}, {
  id: 'ai',
  day: '10',
  month: 'APR',
  year: '2025',
  city: 'Sandton',
  category: 'Executive Dialogues',
  title: 'The AI Economy',
  description: 'How leaders can turn intelligent technology into meaningful advantage.',
  speaker: 'Dr. Njeri Rionge',
  image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=600'
}, {
  id: 'teams',
  day: '22',
  month: 'APR',
  year: '2025',
  city: 'Durban',
  category: 'Workshops',
  title: 'Building Resilient Teams',
  description: 'Practical tools for creating cultures that adapt, endure, and thrive.',
  speaker: 'Lesego Semenya',
  image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=600'
}, {
  id: 'growth',
  day: '06',
  month: 'MAY',
  year: '2025',
  city: 'Pretoria',
  category: 'Keynotes',
  title: "Africa's Growth Story",
  description: 'A provocative look at the choices shaping the continent’s future.',
  speaker: 'Bonang Mohale',
  image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600'
}, {
  id: 'mindset',
  day: '20',
  month: 'MAY',
  year: '2025',
  city: 'Johannesburg',
  category: 'Workshops',
  title: 'Executive Mindset Masterclass',
  description: 'Shift perspective, sharpen decision-making, and lead from the front.',
  speaker: 'Vusi Thembekwayo',
  image: 'https://images.unsplash.com/photo-1605648916319-cf082f7524a1?q=80&w=600'
}] as const;

const categories = ['All Events', 'Keynotes', 'Roundtables', 'Executive Dialogues', 'Workshops'];
const tickerItems = ['Future of Leadership', 'Navigating Disruption', 'Women in Leadership', 'The AI Economy', 'Building Resilient Teams', 'Africa’s Growth Story'];

const reveal = {
  hidden: {
    opacity: 0,
    y: 28
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1] as const
    }
  }
};

function SectionTag({
  children
}: {
  children: string;
}) {
  return <span className="mb-5 inline-flex items-center border border-l-[4px] border-white/20 border-l-[#e30e04] bg-[#000000]/40 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#ffffff] sm:px-4 sm:text-[12px] font-mono">{children}</span>;
}

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

export const TSFUpcomingEvents = () => {
  const [active, setActive] = React.useState('All Events');
  const [query, setQuery] = React.useState('');
  
  const filteredEvents = events.filter(event => {
    // Exact plural mapping check
    return (active === 'All Events' || event.category === active) && 
      event.title.toLowerCase().includes(query.toLowerCase());
  });

  return <div className="w-full overflow-x-hidden bg-[#ffffff]">
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden sm:min-h-[720px] lg:h-[100vh] bg-black">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-65"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2000')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/60 via-[#000000]/30 to-[#000000]/85" aria-hidden="true" />
      <VerticalBorderLines isDark={true} />
      <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-center px-6 pb-20 pt-20 sm:pb-24 sm:pt-24 md:px-16 md:pb-20 md:pt-28 lg:pb-16 lg:pt-24">
        <motion.div initial="hidden" animate="visible" variants={reveal} className="mb-2">
          <SectionTag>Upcoming Events</SectionTag>
        </motion.div>
        <motion.h1 
          initial="hidden" 
          animate="visible" 
          transition={{ delay: 0.12 }} 
          variants={reveal}
          className="font-bold uppercase max-w-full drop-shadow-[0_8px_34px_rgba(0,0,0,0.38)] text-[#ffffff] text-[clamp(2.5rem,8vw,5.5rem)] leading-[0.95] tracking-[-0.055em]"
        >
          Events that move<br />your <em className="text-[#e30e04] not-italic">organisation</em>
        </motion.h1>
        <motion.p 
          initial="hidden" 
          animate="visible" 
          transition={{ delay: 0.24 }} 
          variants={reveal}
          className="mt-6 text-[15px] font-normal leading-[1.6] md:text-[20px] md:leading-[1.65] drop-shadow-[0_6px_22px_rgba(0,0,0,0.45)] text-white/90 max-w-[620px]"
        >
          Ideas worth gathering around. Voices that move people to action.
        </motion.p>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-white/50 animate-bounce">
        <span>Scroll to explore</span>
        <ArrowDown size={14} />
      </div>
    </section>

    {/* Filter section */}
    <section className="relative z-20 -mt-8 mx-auto max-w-[1240px] px-6" aria-label="Event filters">
      <div className="rounded-3xl border border-black/5 bg-white/95 p-4 shadow-xl backdrop-blur-md flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-1.5 items-center">
          <span className="text-[10px] font-bold uppercase tracking-wider text-black/40 mr-2">Filter by:</span>
          {categories.map(category => (
            <button 
              key={category} 
              type="button"
              className={`rounded-xl px-4 py-2 text-[11px] font-bold uppercase tracking-wider transition-all ${
                active === category 
                  ? 'bg-[#e30e04] text-white shadow-md' 
                  : 'bg-black/[0.03] text-black/60 hover:bg-black/[0.06] hover:text-black'
              }`}
              onClick={() => setActive(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="relative flex items-center bg-black/[0.03] rounded-xl px-3 py-2 border border-black/5">
          <Search size={16} className="text-black/30" />
          <input 
            value={query} 
            onChange={e => setQuery(e.target.value)} 
            placeholder="Search events..." 
            className="bg-transparent border-0 outline-none text-xs text-black pl-2 w-full md:w-48 placeholder-black/35 font-bold uppercase tracking-wider" 
            aria-label="Search events" 
          />
        </div>
      </div>
    </section>

    {/* Featured Event */}
    {filteredEvents.length > 0 && (
      <section className="relative z-10 mx-auto max-w-[1440px] px-6 py-20 md:px-16">
        <VerticalBorderLines />
        <motion.article 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.2 }} 
          variants={reveal} 
          className="group relative overflow-hidden rounded-[28px] border border-black/5 bg-neutral-50 p-6 md:p-10 flex flex-col lg:flex-row gap-8 items-center"
        >
          <div className="relative w-full lg:w-1/2 aspect-video overflow-hidden rounded-2xl bg-neutral-900 shadow-md">
            <img 
              src={filteredEvents[0].image} 
              alt={filteredEvents[0].title} 
              className="h-full w-full object-cover group-hover:scale-102 transition-transform duration-700"
            />
            <span className="absolute top-4 left-4 rounded-full bg-[#e30e04] px-4 py-1.5 text-[9px] font-bold uppercase tracking-widest text-white">
              {filteredEvents[0].category.slice(0, -1)} {/* Singular form */}
            </span>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider text-[#e30e04] mb-4">
              <span className="flex items-center gap-1.5 text-black/60"><MapPin size={14} /> {filteredEvents[0].city}</span>
              <span>•</span>
              <span>{filteredEvents[0].day} {filteredEvents[0].month} {filteredEvents[0].year}</span>
            </div>
            <h2 className="text-[28px] md:text-[38px] leading-[1.1] font-bold uppercase text-black mb-4">{filteredEvents[0].title}</h2>
            <p className="text-[#686869] text-base leading-relaxed mb-6">
              {filteredEvents[0].description}
            </p>
            <div className="flex items-center gap-3 border-t border-black/5 pt-4 w-full mb-6">
              <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center text-white text-[10px] font-bold">
                {filteredEvents[0].speaker.slice(0, 2).toUpperCase()}
              </div>
              <div className="text-[12px] text-black">With <strong>{filteredEvents[0].speaker}</strong></div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="mailto:brief@thespeakersfirm.com" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e30e04] px-6 py-3.5 text-[11px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-black">
                <span>Register Now</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </motion.article>
      </section>
    )}

    {/* All Events list */}
    <section className="relative z-10 bg-black text-white py-20 lg:py-32" id="events">
      <VerticalBorderLines isDark={true} />
      <div className="mx-auto max-w-[1440px] px-6 md:px-16">
        <div className="mb-14">
          <div className="mb-4">
            <SectionTag>All Events</SectionTag>
          </div>
          <h2 className="text-[32px] md:text-[48px] leading-[1.05] font-bold uppercase">What's on</h2>
          <p className="text-white/60 text-[15px] sm:text-[18px] max-w-[480px] mt-4 font-light">Curated encounters for leaders who are ready to move.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map(event => (
            <motion.article 
              key={event.id} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, amount: 0.15 }} 
              variants={reveal} 
              className="group flex flex-col justify-between overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.02] p-6 backdrop-blur-md transition-all duration-500 hover:border-[#e30e04]/40 hover:bg-white/[0.04]"
            >
              <div>
                <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-neutral-900 mb-6">
                  <img src={event.image} alt={`${event.title} event`} className="h-full w-full object-cover opacity-60 group-hover:scale-102 transition-transform duration-500" />
                  <span className="absolute top-3 right-3 rounded-full bg-black/60 px-2 py-0.5 text-[9px] font-mono text-white/65">{event.day} {event.month} {event.year}</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-[#e30e04] uppercase">
                  <span className="flex items-center gap-1"><MapPin size={12} /> {event.city}</span>
                  <span>•</span>
                  <span>{event.category}</span>
                </div>
                <h3 className="mt-4 text-[18px] font-bold uppercase text-white tracking-tight leading-snug">{event.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{event.description}</p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white text-[8px] font-bold">{event.speaker.slice(0, 2).toUpperCase()}</div>
                  <span className="text-[11px] text-white/50">{event.speaker}</span>
                </div>
                <a href="mailto:brief@thespeakersfirm.com" aria-label={`Register for ${event.title}`} className="text-[11px] font-bold tracking-widest text-[#e30e04] uppercase group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  <span>Register</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
        {filteredEvents.length === 0 && (
          <p className="text-center text-white/40 py-12">No events match your search.</p>
        )}
      </div>
    </section>

    {/* Ticker */}
    <section className="relative z-10 border-y border-black/5 bg-[#ffffff] py-6 overflow-hidden" aria-label="Event archive">
      <div className="flex items-center max-w-[1440px] mx-auto px-6">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#e30e04] mr-8">Archive:</span>
        <div className="flex-1 overflow-hidden relative">
          <div className="flex gap-12 items-center whitespace-nowrap animate-marquee">
            {[...tickerItems, ...tickerItems].map((item, index) => (
              <span key={`${item}-${index}`} className="text-[11px] font-bold uppercase tracking-wider text-black/60">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Subscribe Newsletter Section */}
    <section className="relative z-10 bg-[#ffffff] py-20 lg:py-32" id="brief">
      <VerticalBorderLines />
      <div className="mx-auto max-w-[1440px] px-6 md:px-16 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-6">
          <div className="mb-4">
            <span className="inline-flex items-center border border-l-[4px] border-black/20 border-l-[#e30e04] bg-[#000000]/5 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#000000] sm:px-4 sm:text-[12px] font-mono">Stay informed</span>
          </div>
          <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold tracking-tight leading-[0.95] uppercase text-black">Never miss<br /><em>an event.</em></h2>
        </div>
        <div className="md:col-span-6 flex flex-col gap-6">
          <p className="text-[#686869] text-[16px] leading-relaxed">
            Get the latest conversations, invitations, and ideas from The Speakers Firm, delivered with intention.
          </p>
          <form onSubmit={e => e.preventDefault()} className="relative flex items-center bg-black/[0.03] rounded-full p-2 border border-black/5">
            <Mail size={17} className="text-black/30 ml-3" />
            <input type="email" placeholder="Your email address" className="bg-transparent border-0 outline-none text-xs text-black pl-3 w-full placeholder-black/35 font-bold uppercase tracking-wider" required aria-label="Your email address" />
            <button type="submit" className="rounded-full bg-[#e30e04] text-white px-6 py-3 text-[11px] font-bold uppercase tracking-wider hover:bg-black transition-colors">
              Subscribe
            </button>
          </form>
          <small className="text-[10px] text-black/40">By subscribing, you agree to receive updates from The Speakers Firm. Unsubscribe anytime.</small>
        </div>
      </div>
    </section>
  </div>;
};
