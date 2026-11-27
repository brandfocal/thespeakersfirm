import * as React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

interface RecommendedSpeaker {
  id: string;
  name: string;
  bio: string;
  quote?: string;
  image: string;
  trackId: string;
  trackLabel: string;
}

const SECTION_TAG_CLASS = 'inline-flex items-center border border-l-[4px] px-4 py-2 text-[12px] font-bold uppercase tracking-[0.12em] shadow-none';
const SECTION_TAG_STYLE = {
  backgroundColor: '#000000',
  borderColor: '#000000',
  borderLeftColor: '#e30e04',
  color: '#ffffff'
};

const RECOMMENDED_SPEAKERS: RecommendedSpeaker[] = [
  {
    id: 'billy-selekane',
    name: 'Dr Billy Selekane',
    bio: 'International keynote speaker, author and organisational culture specialist. Executive Chairman of Billy Selekane International, with expertise in strategy formulation and organisational effectiveness.',
    image: '/speaker_thumbnails/Dr-Billy-Selekane-The-Speakers-Firm.jpg',
    trackId: 'inspirational-keynote-speakers',
    trackLabel: 'Keynote'
  },
  {
    id: 'alistair-mokoena',
    name: 'Prof Alistair Mokoena',
    bio: 'Executive Dean of the Johannesburg Business School at the University of Johannesburg, former Google Country Director for Southern Africa and Chartered Marketer.',
    image: '/speaker_thumbnails/Dr-Alistair-Mokoena-The-Speakers-Firm.jpg',
    trackId: 'future-of-work-talent-and-workforce-transformation',
    trackLabel: 'Future of Work'
  },
  {
    id: 'john-sanei',
    name: 'John Sanei',
    bio: 'Futures strategist, author, Singularity University expert and co-founder of the School of Modern Wisdom.',
    image: '/speaker_thumbnails/John-Sanei-The-Speakers-Firm.jpg',
    trackId: 'digital-identity-cybersecurity-and-data-sovereignty',
    trackLabel: 'A.I. & Futures'
  },
  {
    id: 'lincoln-mali',
    name: 'Lincoln Mali',
    bio: 'Fintech and banking executive, leadership writer and former chair of Diners Club South Africa. He has led Lesaka Technologies’ Southern African operations.',
    image: '/speaker_thumbnails/Lincoln-Mali-The-Speakers-Firm.jpg',
    trackId: 'leadership-governance-and-risk-intelligence',
    trackLabel: 'Leadership'
  },
  {
    id: 'siphiwe-moyo',
    name: 'Siphiwe Moyo',
    bio: 'International keynote speaker, author and organisational behaviour specialist. A former learning and development head at JSE-listed companies, he has taught at GIBS, Henley Business School Africa and Wits Business School.',
    image: '/speaker_thumbnails/Siphiwe-Moyo-The-Speakers-Firm.jpg',
    trackId: 'leadership-governance-and-risk-intelligence',
    trackLabel: 'Leadership'
  },
  {
    id: 'bonang-mohale',
    name: 'Prof Bonang Mohale',
    bio: 'Business leader and published author whose career includes chairing the Bidvest Group and serving as Professor of Practice at the Johannesburg Business School.',
    image: '/speaker_thumbnails/Bonang-Mohale-The-Speakers-Firm.jpg',
    trackId: 'leadership-governance-and-risk-intelligence',
    trackLabel: 'Leadership'
  },
  {
    id: 'abner-mariri',
    name: 'Abner Mariri',
    bio: 'Inspirational speaker, transformation adviser and co-founder of Empowa Investments. His work includes youth empowerment through the Joint Power Development Foundation.',
    image: '/speaker_thumbnails/Abner-Mariri-The-Speakers-Firm.jpg',
    trackId: 'leadership-governance-and-risk-intelligence',
    trackLabel: 'Leadership'
  },
  {
    id: 'timothy-maurice-webster',
    name: 'Timothy Maurice Webster',
    bio: 'Behavioural strategist, international keynote speaker and author of four books on brand leadership. His work applies insights from neuroscience and human behaviour to leadership and brand strategy.',
    image: '/speaker_thumbnails/Timothy-Maurice-Webster-The-Speakers-Firm.jpg',
    trackId: 'future-of-work-talent-and-workforce-transformation',
    trackLabel: 'Neuroscience'
  },
  {
    id: 'saray-khumalo',
    name: 'Saray Khumalo',
    bio: 'The first Black African woman to summit Mount Everest, an author and business executive, and founder of Summits With a Purpose.',
    image: '/speaker_thumbnails/Saray-Khumalo-The-Speakers-Firm.jpg',
    trackId: 'inspirational-keynote-speakers',
    trackLabel: 'Keynote'
  },
  {
    id: 'femi-adebanji',
    name: 'Femi Adebanji',
    bio: 'Business motivational speaker, leadership strategist and performance specialist. His career includes leading an investment consulting division at a South African insurer.',
    image: '/speaker_thumbnails/Femi-Adebanji-The-Speakers-Firm.jpg',
    trackId: 'leadership-governance-and-risk-intelligence',
    trackLabel: 'Leadership'
  },
  {
    id: 'david-molapo',
    name: 'Dr David Molapo',
    bio: 'Leadership educator, management consultant and international motivational speaker. Founder of the I Can Leadership Institute Africa.',
    image: '/speaker_thumbnails/Dr-David-Molapo-The-Speakers-Firm-2.jpg',
    trackId: 'leadership-governance-and-risk-intelligence',
    trackLabel: 'Leadership'
  },
  {
    id: 'linda-ntuli',
    name: 'Linda Ntuli',
    bio: 'Electrical engineer turned management consultant, motivational speaker, author and facilitator, with experience in team-building and leadership development.',
    image: '/speaker_thumbnails/Linda-Ntuli-The-Speakers-Firm.jpg',
    trackId: 'mc-and-facilitators',
    trackLabel: 'Facilitators'
  }
];

export const RecommendedSpeakers = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const [isPaused, setIsPaused] = React.useState(false);
  const interactionTimeoutRef = React.useRef<number | null>(null);

  const triggerTemporaryPause = () => {
    setIsPaused(true);
    if (interactionTimeoutRef.current) {
      window.clearTimeout(interactionTimeoutRef.current);
    }
    interactionTimeoutRef.current = window.setTimeout(() => {
      setIsPaused(false);
    }, 2000) as unknown as number;
  };

  const scrollLeft = () => {
    triggerTemporaryPause();
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -360, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    triggerTemporaryPause();
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 360, behavior: 'smooth' });
    }
  };

  React.useEffect(() => {
    const container = containerRef.current;
    if (!container || isPaused) return;

    let animationFrameId: number;
    let lastTime = performance.now();
    
    const scroll = (time: number) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;
      
      const scrollSpeed = 40; // pixels per second
      container.scrollLeft += scrollSpeed * delta;
      
      const halfWidth = container.scrollWidth / 2;
      if (container.scrollLeft >= halfWidth) {
        container.scrollLeft -= halfWidth;
      }
      
      animationFrameId = requestAnimationFrame(scroll);
    };
    
    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  return (
    <section aria-labelledby="recommended-heading" className="relative w-full overflow-hidden bg-[#000000] py-20 sm:py-24 md:py-32 border-t border-white/[0.05]">
      <style>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      
      {/* Subtle Noise Texture */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        backgroundRepeat: 'repeat',
        backgroundSize: '128px 128px'
      }} />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 md:px-16">
        
        {/* Section Header */}
        <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-6">
            <div className={SECTION_TAG_CLASS} style={SECTION_TAG_STYLE}>
              <span>12 FEATURED VOICES FOR JANUARY 2027</span>
            </div>
            <h2 id="recommended-heading" className="mt-6 text-[clamp(2.5rem,5vw,3.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.05em] text-white">
              <span>Book Influential African Voices.</span><br />
              <span className="text-[#e30e04]">Set the Direction for the Year Ahead.</span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:mt-14 space-y-4">
            <p className="text-sm md:text-base text-white/70 leading-relaxed font-light">
              January is a strategic opportunity to sharpen your priorities, bring teams together and build momentum for the year ahead. The Speakers Firm™ connects organisations with distinguished business leaders, strategists, facilitators and inspirational keynote speakers, selected for your audience and what you want the session to achieve.
            </p>
            <p className="text-sm md:text-base text-white/70 leading-relaxed font-light">
              From executive strategy offsites and company-wide kickoffs to team-building workshops and sales conferences, we curate speakers who challenge assumptions, strengthen collaboration and help teams turn ambition into first-quarter commitments.
            </p>
            <p className="text-sm md:text-base text-white/70 leading-relaxed font-light">
              This January, partner with The Speakers Firm™ to set a clear direction, align your people and give every team a strong start.
            </p>
            <p className="font-bold text-[#e30e04] tracking-widest pt-2 text-xs uppercase border-l-2 border-[#e30e04] pl-4">
              BOOK THE RIGHT VOICE. ALIGN YOUR TEAM. START THE YEAR STRONG.
            </p>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-end mb-6 gap-3">
          <button 
            type="button" 
            onClick={scrollLeft}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-white transition-all duration-300 hover:bg-white hover:text-black hover:border-white"
            aria-label="Scroll left"
          >
            <ArrowRight className="h-5 w-5 rotate-180" />
          </button>
          <button 
            type="button" 
            onClick={scrollRight}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-white transition-all duration-300 hover:bg-white hover:text-black hover:border-white"
            aria-label="Scroll right"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable Container */}
        <div 
          ref={containerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="scrollbar-none -mx-6 md:-mx-16 flex gap-6 overflow-x-auto px-6 md:px-16 pb-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {[...RECOMMENDED_SPEAKERS, ...RECOMMENDED_SPEAKERS].map((speaker, index) => (
            <Link 
              key={`${speaker.id}-${index}`}
              href={`/tracks/${speaker.trackId}/${speaker.id}`}
              className="block shrink-0 snap-start"
            >
              <motion.article 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: (index % RECOMMENDED_SPEAKERS.length) * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="group relative w-[280px] min-[375px]:w-[310px] md:w-[350px] bg-[#000000] border border-white/[0.08] rounded-2xl overflow-hidden hover:border-white/20 transition-colors duration-300 h-full"
              >
                {/* Image & Track Badge */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-950">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent opacity-85" />
                </div>

                {/* Info Area */}
                <div className="p-6 md:p-8 flex flex-col justify-between min-h-[220px]">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#e30e04] transition-colors duration-300">
                      {speaker.name}
                    </h3>
                    <p className="mt-2 text-xs text-neutral-400 line-clamp-4 leading-relaxed">
                      {speaker.bio}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <span 
                      className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-white/80 hover:text-white transition-colors duration-300"
                    >
                      <span>BOOK THE SPEAKER</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>

        {/* Bottom Callout & Closing Briefing Section */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-[#0A0A0A] p-8 md:p-12 relative overflow-hidden">
          <div className="max-w-4xl space-y-6">
            <p className="text-sm md:text-base text-white/80 leading-relaxed font-light">
              Make The Speakers Firm™ your first call for your January 2027 strategy session, team-building event or company kickoff. Send us your preferred date, audience and the outcome you want to achieve. Tell us which speaker you have in mind and we’ll check availability and fees. For a tailored shortlist, we’ll source additional voices from across Africa and globally, and recommend the speaker and format best suited to your brief.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <span className="font-bold text-[#e30e04] tracking-widest text-xs uppercase border-l-2 border-[#e30e04] pl-4">
                BOOK THE RIGHT VOICE. ALIGN YOUR TEAM. START THE YEAR STRONG.
              </span>
              <motion.a 
                href="/#brief-us" 
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.98 }} 
                className="inline-flex shrink-0 items-center justify-center rounded-full border p-1"
                style={{ borderColor: 'rgba(255, 255, 255, 0.18)' }}
              >
                <span className="flex flex-1 items-center justify-center gap-3 rounded-full bg-[#000000] px-6 py-3 text-[12px] font-bold uppercase tracking-[0.1em] text-white hover:bg-[#e30e04] transition-colors border border-white/20">
                  <span>Brief the Bureau</span>
                  <ArrowRight size={16} />
                </span>
              </motion.a>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};
