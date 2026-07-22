"use client";

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowDown, ArrowRight, CalendarDays, Mail, MapPin, Search } from 'lucide-react';

const events = [{
  id: 'roundtable-mohale',
  day: '03',
  month: 'DEC',
  year: '2024',
  city: 'Johannesburg',
  category: 'Roundtables',
  title: 'Corporate Governance Dialogues',
  description: 'Redefining ethical foundations and performance for modern businesses.',
  speaker: 'Prof. Bonang Mohale',
  image: '/roundtable/mohale.jpg'
}, {
  id: 'roundtable-invite3',
  day: '08',
  month: 'DEC',
  year: '2024',
  city: 'Johannesburg',
  category: 'Roundtables',
  title: 'Executive Dialogue Session',
  description: 'Intimate private sector governance and accountability conversations.',
  speaker: 'The Speakers Firm',
  image: '/roundtable/invite3.jpg'
}, {
  id: 'roundtable-lincoln',
  day: '26',
  month: 'NOV',
  year: '2024',
  city: 'Johannesburg',
  category: 'Roundtables',
  title: 'Leadership & Accountability Seminar',
  description: 'An executive dialogue on trust, integrity, and sustainable leadership.',
  speaker: 'Lincoln Mali',
  image: '/roundtable/lincoln.jpg'
}, {
  id: 'roundtable-mmamoloko',
  day: '14',
  month: 'DEC',
  year: '2024',
  city: 'Johannesburg',
  category: 'Roundtables',
  title: 'Public Policy Roundtable',
  description: 'Unpacking development strategies and socio-economic transformation.',
  speaker: 'Mmamoloko Kubayi',
  image: '/roundtable/mmamoloko.jpg'
}, {
  id: 'roundtable-mzamo',
  day: '10',
  month: 'DEC',
  year: '2024',
  city: 'Johannesburg',
  category: 'Roundtables',
  title: 'Brand Innovation Forum',
  description: 'Navigating consumer shifts and disruptive market realities in Africa.',
  speaker: 'Mzamo Masito',
  image: '/roundtable/mzamo.jpg'
}, {
  id: 'roundtable-nozipho2',
  day: '18',
  month: 'DEC',
  year: '2024',
  city: 'Johannesburg',
  category: 'Roundtables',
  title: 'Global Conversation Architecture',
  description: 'Facilitating consequence-driven debates for organizational shifting.',
  speaker: 'Nozipho Tshabalala',
  image: '/roundtable/nozipho2.jpg'
}, {
  id: 'roundtable-reuel2',
  day: '22',
  month: 'JAN',
  year: '2025',
  city: 'Johannesburg',
  category: 'Roundtables',
  title: 'Legacy Beyond Leadership',
  description: 'An exclusive dialogue on board dynamics, ethics, and statesmanship.',
  speaker: 'Dr. Reuel Khoza',
  image: '/roundtable/reuel2.jpg'
}, {
  id: 'roundtable-siphiwe',
  day: '12',
  month: 'NOV',
  year: '2024',
  city: 'Johannesburg',
  category: 'Roundtables',
  title: 'Strategic Talent Roundtable',
  description: 'Building agile and resilient workforce strategies to adapt and grow.',
  speaker: 'Siphiwe Moyo',
  image: '/roundtable/siphiwe invite.jpg'
}, {
  id: 'roundtable-thebe',
  day: '14',
  month: 'JAN',
  year: '2025',
  city: 'Johannesburg',
  category: 'Roundtables',
  title: 'African Identity & Leadership',
  description: 'Deploying continental narratives and cultural relevance for impact.',
  speaker: 'Thebe Ikalafeng',
  image: '/roundtable/thebe.jpg'
}, {
  id: 'roundtable-tinyiko',
  day: '28',
  month: 'JAN',
  year: '2025',
  city: 'Johannesburg',
  category: 'Roundtables',
  title: 'Institutional Evolution Seminar',
  description: 'Transforming public and private sector structures for governance excellence.',
  speaker: 'Prof. Tinyiko Maluleke',
  image: '/roundtable/tinyiko.jpg'
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

const slideImages = [
  { 
    src: '/upcoming_events/empowawomen-desktop.jpg', 
    alt: 'EmpowaWomen Initiative', 
    link: 'https://www.quicket.co.za/events/344315-empowawomen-leadership-summit-2026/#/' 
  },
  { 
    src: '/upcoming_events/empowamen-banner.jpg', 
    alt: 'EmpowaMen Initiative', 
    link: 'https://www.quicket.co.za/events/370734-empowamen-2026/' 
  }
];

export const TSFUpcomingEvents = () => {
  const [active, setActive] = React.useState('All Events');
  const [query, setQuery] = React.useState('');
  const [activeSlide, setActiveSlide] = React.useState(0);
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % slideImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  
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

    {/* Image Slider Feature (Banner showcase) */}
    <section className="relative z-10 mx-auto max-w-[1440px] px-6 py-20 md:px-16">
      <VerticalBorderLines />
      <div className="relative z-10 px-6 md:px-16">
        <div className="mb-8">
          <SectionTag>Highlights & Initiatives</SectionTag>
        </div>
        
        {/* Slider Frame */}
        <div className="relative overflow-hidden w-full">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className="w-full"
            >
              <a 
                href={slideImages[activeSlide].link}
                target="_blank"
                rel="noopener noreferrer"
                className="block cursor-pointer hover:opacity-95 transition-opacity"
              >
                <img 
                  src={slideImages[activeSlide].src} 
                  alt={slideImages[activeSlide].alt} 
                  className="w-full h-auto block"
                />
              </a>
            </motion.div>
          </AnimatePresence>

          {/* Slide Indicator Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
            {slideImages.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setActiveSlide(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${activeSlide === i ? 'w-8 bg-[#e30e04]' : 'w-2.5 bg-black/40 hover:bg-black/60'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Past Events list */}
    <section className="relative z-10 bg-black text-white py-20 lg:py-32" id="events">
      <VerticalBorderLines isDark={true} />
      <div className="mx-auto max-w-[1440px] px-6 md:px-16">
        <div className="mb-14">
          <div className="mb-4">
            <SectionTag>Past Events</SectionTag>
          </div>
          <h2 className="text-[32px] md:text-[48px] leading-[1.05] font-bold uppercase">Past Roundtables</h2>
          <p className="text-white/60 text-[15px] sm:text-[18px] max-w-[480px] mt-4 font-light">Authoritative boardroom dialogue archives from our historical portfolio.</p>
        </div>

        <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {filteredEvents.map(event => (
            <motion.div 
              key={event.id} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, amount: 0.15 }} 
              variants={reveal} 
              onClick={() => setSelectedImage(event.image)}
              className="group cursor-pointer overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.02] backdrop-blur-md transition-all duration-500 hover:border-[#e30e04]/40 hover:bg-white/[0.04]"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="h-full w-full object-cover group-hover:scale-102 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="rounded-full bg-[#e30e04] px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-white shadow-lg">
                    View Artwork
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {filteredEvents.length === 0 && (
          <p className="text-center text-white/40 py-12">No events match your search.</p>
        )}
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 cursor-zoom-out"
          >
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-[90vw] max-h-[90vh] overflow-hidden rounded-2xl"
              onClick={e => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                alt="Enlarged Roundtable Invite" 
                className="max-w-full max-h-[90vh] object-contain rounded-xl"
              />
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 rounded-full bg-black/60 hover:bg-black/90 p-2.5 text-white transition-colors"
                type="button"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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
