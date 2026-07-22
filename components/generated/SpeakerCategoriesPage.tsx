"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Search } from 'lucide-react';

type Category = {
  number: string;
  name: string;
  description: string;
  seed: string;
};

const filters = ['All', 'Leadership', 'AI & Tech', 'Future of Work', 'Economics', 'Innovation', 'Entrepreneurship', 'Wellbeing', 'Sports', 'Entertainment'];

const categories: Category[] = [{
  number: '01',
  name: 'Keynote and Motivational Speakers',
  description: 'Influential global voices, accomplished leaders, inspiring change-makers and exceptional storytellers who challenge conventional thinking, energise audiences and turn inspiration into meaningful action.',
  seed: 'tsf-stage'
}, {
  number: '02',
  name: 'Leadership, Strategy and Executive Performance',
  description: 'World-class CEOs, board chairs and executive leaders offering decisive insights into courageous leadership, strategy execution, organisational performance and leading through complexity.',
  seed: 'tsf-leadership'
}, {
  number: '03',
  name: 'Boards, Governance and Boardroom Influence',
  description: 'Distinguished directors and governance authorities strengthening board effectiveness, ethical stewardship, executive accountability and institutional sustainability.',
  seed: 'tsf-boardroom'
}, {
  number: '04',
  name: 'Artificial Intelligence and Intelligent Enterprise',
  description: 'AI pioneers and transformation leaders helping organisations move from experimentation to responsible, enterprise-wide adoption and measurable commercial value.',
  seed: 'tsf-ai'
}, {
  number: '05',
  name: 'Future of Work, Talent and Workforce Transformation',
  description: 'Leading authorities preparing organisations and people for rapidly changing technologies, skills requirements, employee expectations and workplace models.',
  seed: 'tsf-future'
}, {
  number: '06',
  name: 'Economics, Markets and the Global Economy',
  description: 'Respected economists and financial strategists translating complex economic developments into clear implications for boards, investors, governments and business leaders.',
  seed: 'tsf-economy'
}, {
  number: '07',
  name: 'Futurists, Trends and Strategic Foresight',
  description: 'Futurists and trend specialists identifying the technological, demographic, economic and social forces that will reshape industries, consumers and societies.',
  seed: 'tsf-future-sight'
}, {
  number: '08',
  name: 'Geopolitics, Policy and Global Affairs',
  description: 'Diplomats, political leaders, journalists and analysts helping decision-makers understand geopolitical risk, policy shifts and the evolving global order.',
  seed: 'tsf-global'
}, {
  number: '09',
  name: 'Innovation, Disruption and Business Transformation',
  description: 'Proven innovators equipping organisations to challenge established models, unlock new value and build future-ready enterprises.',
  seed: 'tsf-innovation'
}, {
  number: '10',
  name: 'Entrepreneurship, Investment and Business Growth',
  description: 'Accomplished founders, investors and enterprise leaders sharing practical strategies for funding, scaling and sustaining high-growth businesses.',
  seed: 'tsf-growth'
}, {
  number: '11',
  name: 'Change, Resilience and Organisational Agility',
  description: 'Change specialists helping leaders mobilise people, overcome resistance and sustain organisational performance through disruption and uncertainty.',
  seed: 'tsf-change'
}, {
  number: '12',
  name: 'Media, Communication and Executive Visibility',
  description: 'Broadcasters, journalists and communication strategists empowering leaders to communicate with authority, clarity and influence across every platform.',
  seed: 'tsf-media'
}, {
  number: '13',
  name: 'Reputation, Crisis and Trust Leadership',
  description: 'Reputation and crisis specialists helping organisations protect institutional trust, navigate scrutiny and lead decisively when credibility is at stake.',
  seed: 'tsf-trust'
}, {
  number: '14',
  name: 'Marketing, Branding and Customer Growth',
  description: 'Visionary marketers and consumer authorities demonstrating how organisations can build distinctive brands, deepen customer relationships and convert relevance into revenue.',
  seed: 'tsf-brand'
}, {
  number: '15',
  name: 'Sales, Negotiation and Commercial Performance',
  description: 'High-performing commercial leaders equipping teams to win clients, negotiate effectively and accelerate sustainable revenue growth.',
  seed: 'tsf-sales'
}, {
  number: '16',
  name: 'Neuroscience, Psychology and Human Behaviour',
  description: 'Neuroscientists, psychologists and behavioural experts translating science into practical strategies for leadership, learning, decision-making and performance.',
  seed: 'tsf-mind'
}, {
  number: '17',
  name: 'High-Performance Teams and Team-Building Experiences',
  description: 'Expert facilitators and coaches transforming groups into aligned, accountable and high-performing teams through powerful experiential interventions.',
  seed: 'tsf-team'
}, {
  number: '18',
  name: 'Sports, Coaching and the Winning Mindset',
  description: 'Elite athletes, championship coaches and sporting icons translating lessons from world-class competition into compelling leadership and business insights.',
  seed: 'tsf-sport'
}, {
  number: '19',
  name: 'Sustainability, ESG, Health and Human Performance',
  description: 'Sustainability, climate, health and wellbeing authorities helping organisations build resilient businesses, healthier cultures and sustainable performance.',
  seed: 'tsf-health'
}, {
  number: '20',
  name: 'Celebrity Speakers, MCs, Comedy and Entertainment',
  description: 'Acclaimed public figures, broadcasters, actors, comedians, musicians and professional presenters bringing visibility, credibility, energy and unforgettable engagement to every event.',
  seed: 'tsf-entertainment'
}];

const marqueeNames = categories.map(category => category.name);

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
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
    }
  }
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
      <div className="h-full mx-auto max-w-[1440px] relative px-6 md:px-16">
        <div className="absolute left-6 md:left-16 top-0 bottom-0 w-[1px]" style={{
        backgroundColor: borderColor
      }}>
          <div className="absolute -top-[3.5px] left-1/2 -translate-x-1/2 w-[7px] h-[7px]" style={{
          backgroundColor: capColor
        }} />
        </div>
        <div className="absolute right-6 md:right-16 top-0 bottom-0 w-[1px]" style={{
        backgroundColor: borderColor
      }}>
          <div className="absolute -top-[3.5px] left-1/2 -translate-x-1/2 w-[7px] h-[7px]" style={{
          backgroundColor: capColor
        }} />
        </div>
      </div>
    </div>;
};

export function SpeakerCategoriesPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  return <main className="min-h-screen w-full selection:bg-[#e30e04] selection:text-white font-[Kontora,sans-serif] overflow-x-hidden bg-[#212121] text-[#F8F7F5]">
      
      {/* Redesigned Hero using the default elements requested */}
      <section id="top" className="relative min-h-screen w-full overflow-hidden pt-20 pb-28 md:pt-24 lg:pb-44 bg-[#000000]">
        <div className="absolute inset-0 z-0 bg-[#111111]" aria-hidden="true">
          <img src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=2200&q=85" alt="" className="absolute inset-0 h-full w-full object-cover object-center opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/60 via-[#000000]/30 to-[#000000]/85" aria-hidden="true" />
        </div>
        <VerticalBorderLines isDark={true} />
        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-10rem)] max-w-[1440px] flex-col justify-center px-6 md:px-16">
          <motion.div initial="hidden" animate="visible" variants={reveal}>
            <SectionTag>THE GLOBAL PORTFOLIO</SectionTag>
          </motion.div>
          <motion.h1 initial="hidden" animate="visible" transition={{ delay: 0.12 }} variants={reveal} className="text-[clamp(3.5rem,11vw,6.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.055em] text-[#ffffff] drop-shadow-[0_8px_34px_rgba(0,0,0,0.38)] mt-6">
            <span>The Global</span><br />
            <span className="text-[#e30e04]">Portfolio</span>
          </motion.h1>
          <motion.div aria-hidden="true" initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }} transition={{ delay: 0.8, duration: 0.74 }} className="mt-5 h-[3px] w-28 origin-left bg-[#e30e04] md:mt-7 md:w-40" />
          <div className="mt-8 flex max-w-[620px] flex-col gap-3">
            <motion.p initial="hidden" animate="visible" transition={{ delay: 0.24 }} variants={reveal} className="text-[15px] font-normal leading-[1.6] text-[#ffffff]/80 drop-shadow-[0_6px_22px_rgba(0,0,0,0.45)] md:text-[16px] md:leading-[1.65]">
              Planning a Conference? Make The Speakers Firm Your Trusted Talent Partner. The right voice can shift a room, open a mind and move an organisation forward. Explore our global portfolio of exceptional speakers, thinkers and storytellers.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Categories Filter list section */}
      <section className="sticky top-0 z-30 border-b border-white/[0.08] bg-[#161616] px-6 md:px-16 py-4">
        <VerticalBorderLines isDark={true} />
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-3 relative z-10">
          <div className="flex items-center gap-3 md:gap-5 flex-1 min-w-0">
            <span className="hidden shrink-0 text-[10px] font-bold tracking-[0.18em] text-white/45 md:block">BROWSE BY</span>
            <div className="flex min-w-0 gap-2 overflow-x-auto pb-1 [scrollbar-width:none]">
              {filters.map(filter => (
                <button key={filter} onClick={() => setActiveFilter(filter)} className={`min-h-10 shrink-0 rounded-full border px-5 py-2 text-[11px] transition-colors ${activeFilter === filter ? 'border-[#e30e04] bg-[#e30e04] text-white' : 'border-white/10 bg-[#242424] text-[#AFB0B0] hover:border-[#e30e04]/60'}`}>
                  {filter}
                </button>
              ))}
            </div>
          </div>
          <label className="hidden shrink-0 items-center gap-2 border-b border-white/20 pb-2 text-white/45 xl:flex">
            <Search size={15} />
            <input className="w-32 bg-transparent text-xs text-white outline-none placeholder:text-white/40" placeholder="Search" aria-label="Search categories" />
          </label>
        </div>
      </section>

      {/* Grid of categories */}
      <section id="categories" className="relative px-6 md:px-16 py-14 md:py-20 xl:py-28 bg-[#1e1e1e]">
        <VerticalBorderLines isDark={true} />
        <div className="mx-auto max-w-[1440px] relative z-10">
          <header className="mb-9 flex flex-col justify-between gap-6 md:mb-12 md:flex-row md:items-end md:gap-8 border-b border-white/10 pb-6">
            <div>
              <span className="mb-4 inline-flex border-l-4 border-[#e30e04] bg-[#2a2a2a] px-4 py-2 text-[10px] font-bold tracking-[0.2em]">ALL CATEGORIES</span>
              <h2 className="mt-3 text-[clamp(2.75rem,12vw,4.5rem)] font-black uppercase leading-none tracking-[-0.07em] md:text-7xl">Explore By<br /><span className="text-[#e30e04]">Theme</span></h2>
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/45">20 Categories <span className="mx-2 text-[#e30e04]">/</span> Global Reach</p>
          </header>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {categories.map((category, categoryIndex) => (
              <div key={category.number} className="group grid min-h-[340px] overflow-hidden border border-white/[0.08] bg-[#161616] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#e30e04]/40 hover:shadow-[0_24px_56px_rgba(0,0,0,0.5)] sm:min-h-[365px]" style={{
                gridTemplateRows: '1fr auto'
              }}>
                <div className="relative grid min-h-[250px] overflow-hidden bg-cover bg-center sm:min-h-[280px]" style={{
                  backgroundImage: `url('https://picsum.photos/seed/${category.seed}/600/800')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="relative z-10 self-end p-5 sm:p-6 lg:p-5">
                    <p className="mb-2 text-[clamp(2rem,10vw,2.25rem)] font-black tracking-[-0.08em] text-[#e30e04]">{category.number}</p>
                    <h3 className="max-w-[260px] text-[clamp(1.05rem,5vw,1.125rem)] font-black uppercase leading-[0.94] tracking-[-0.045em]">{category.name}</h3>
                  </div>
                  <div className="absolute inset-0 z-20 flex translate-y-full flex-col justify-end bg-[rgba(0,0,0,0.92)] p-5 transition-transform duration-500 ease-out group-hover:translate-y-0 sm:p-6 lg:p-5">
                    <p className="text-[13px] leading-5 text-white/85 sm:text-xs">{category.description}</p>
                    <a href="/contact" className="mt-5 flex min-h-11 items-center justify-between border-t border-white/15 pt-4 text-[10px] font-bold uppercase tracking-[0.12em] text-[#e30e04] opacity-0 transition-opacity delay-100 duration-300 group-hover:opacity-100">
                      Explore Speakers <ArrowUpRight size={15} />
                    </a>
                  </div>
                </div>
                <div className="flex min-h-14 items-center justify-between gap-3 border-t border-white/[0.08] p-4 bg-[#0d0d0d]">
                  <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/45">Category {categoryIndex + 1}</span>
                  <ArrowUpRight size={16} className="text-[#e30e04]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials quotes */}
      <section className="relative border-y border-white/[0.06] bg-[#0d0d0d] px-6 md:px-16 py-14 md:py-20 xl:py-24">
        <VerticalBorderLines isDark={true} />
        <div className="mx-auto grid max-w-[1440px] gap-10 md:grid-cols-2 md:gap-12 lg:gap-20 relative z-10">
          <blockquote className="m-0">
            <span className="text-5xl leading-none text-[#e30e04] md:text-6xl">“</span>
            <p className="mt-2 text-lg italic leading-7 text-[#f8f7f5]/85 md:text-xl md:leading-8">The Speakers Firm was not restricted by its existing portfolio. They searched the market, challenged conventional choices and secured the perfect talent for our audience and objectives. Give them your most demanding brief and allow them to find the voice your event deserves.</p>
            <footer className="mt-6 text-[10px] uppercase tracking-[0.15em] text-white/40">— Client attribution</footer>
          </blockquote>
          <blockquote className="m-0">
            <span className="text-5xl leading-none text-[#e30e04] md:text-6xl">“</span>
            <p className="mt-2 text-lg italic leading-7 text-[#f8f7f5]/85 md:text-xl md:leading-8">Their recommendations were driven by strategic relevance, credibility and audience fit, not profile alone. The result was an authentic, compelling speaker who understood our context and delivered lasting value. Choose The Speakers Firm when impact matters more than celebrity.</p>
            <footer className="mt-6 text-[10px] uppercase tracking-[0.15em] text-white/40">— Client attribution</footer>
          </blockquote>
        </div>
      </section>

      {/* Marquee categories text strip */}
      <section className="overflow-hidden bg-[#050505] py-5">
        <div className="flex w-max animate-marquee items-center gap-6 whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.18em] text-white/65">
          {marqueeNames.map((name, idx) => (
            <span key={`${name}-${idx}`} className="flex items-center gap-6">
              <span>{name}</span>
              <b className="text-[#e30e04]">◆</b>
            </span>
          ))}
        </div>
      </section>

      {/* Inline brief submit form */}
      <section id="brief" className="relative bg-[#161616] px-6 md:px-16 py-14 md:py-20 xl:py-24">
        <VerticalBorderLines isDark={true} />
        <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-9 md:flex-row md:items-end md:gap-10 relative z-10">
          <div>
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#e30e04]">START A CONVERSATION</span>
            <h2 className="mt-4 max-w-[680px] text-[clamp(2.45rem,10vw,3.75rem)] font-black uppercase leading-[0.9] tracking-[-0.07em] md:text-6xl">Find The Right Voice<br /><span className="text-[#e30e04]">For Your Event</span></h2>
            <p className="mt-5 max-w-[460px] text-sm leading-6 text-white/55">Tell us what matters to your audience. We’ll find the perspective that makes the room remember.</p>
          </div>
          <form className="flex w-full max-w-[460px] flex-col gap-3 sm:flex-row" onSubmit={event => event.preventDefault()}>
            <input type="email" required placeholder="Your email address" className="min-h-11 min-w-0 flex-1 border border-white/15 bg-[#1e1e1e] px-5 py-4 text-sm text-white outline-none placeholder:text-white/35 focus:border-[#e30e04] rounded-lg" aria-label="Your email address" />
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex min-h-11 items-center justify-center gap-2 bg-[#e30e04] px-6 py-4 text-[11px] font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-black rounded-full" type="submit">
              <span>Submit Your Brief</span>
              <ArrowUpRight size={15} />
            </motion.button>
          </form>
        </div>
      </section>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 45s linear infinite;
        }
      `}</style>
    </main>;
}
