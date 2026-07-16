import * as React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Quote } from 'lucide-react';
import Link from 'next/link';

interface RecommendedSpeaker {
  id: string;
  name: string;
  bio: string;
  quote: string;
  image: string;
  trackId: string;
  trackLabel: string;
}

const RECOMMENDED_SPEAKERS: RecommendedSpeaker[] = [
  {
    id: 'phumzile-mlambo-ngcuka',
    name: 'Dr. Phumzile Mlambo-Ngcuka',
    bio: 'Global Stateswoman, Former UN Under-Secretary-General & Deputy President',
    quote: 'Education and equality are the cornerstones of progress.',
    image: '/speakers/Governance/Phumzile-Mlambo-Ngcuka-The-Speakers-Firm.jpg',
    trackId: 'governance',
    trackLabel: 'Governance'
  },
  {
    id: 'bonang-mohale',
    name: 'Prof. Bonang Mohale',
    bio: 'Corporate Statesman, Business Leader & Author',
    quote: 'Servant leadership is the ultimate competitive edge.',
    image: '/speakers/Governance/Bonang-Mohale-The-Speakers-Firm.jpg',
    trackId: 'governance',
    trackLabel: 'Governance'
  },
  {
    id: 'nozipho-tshabalala',
    name: 'Nozipho Tshabalala',
    bio: 'Global Moderator, Conversation Architect & Broadcast Journalist',
    quote: 'Facilitating conversations that matter for Africa’s development.',
    image: '/speakers/MCs/Nozipho-Tshabalala-The-Speakers-Firm.jpg',
    trackId: 'mcs',
    trackLabel: 'MCs & Facilitators'
  },
  {
    id: 'prince-mashele',
    name: 'Prince Mashele',
    bio: 'Political Analyst, Columnist & Public Intellectual',
    quote: 'Understanding political dynamics is key to future stability.',
    image: '/speakers/Geopolitics/Prince-Mashele-The-Speakers-Firm.jpg',
    trackId: 'geopolitics',
    trackLabel: 'Geopolitics'
  },
  {
    id: 'clement-manyathela',
    name: 'Clement Manyathela',
    bio: 'Award-Winning Broadcaster, Radio Talk-Show Host, Moderator & Dialogue Facilitator',
    quote: 'Conversations that shift minds and inspire outcomes.',
    image: '/speakers/MCs/Clement-Manyathela-The-Speakers-Firm.jpg',
    trackId: 'mcs',
    trackLabel: 'MCs & Facilitators'
  },
  {
    id: 'sizwe-mpofu-walsh',
    name: 'Dr. Sizwe Mpofu-Walsh',
    bio: 'Lecturer in International Relations at Wits University, Author & Activist',
    quote: 'Dismantling old paradigms to rebuild robust institutions.',
    image: '/speakers/FutureOfWork/Sizwe-Mpofu-Walsh-The-Speakers-Firm.jpg',
    trackId: 'future-of-work',
    trackLabel: 'Future of Work'
  },
  {
    id: 'khaya-sithole',
    name: 'Khaya Sithole',
    bio: 'Accountant, Broadcaster & Economic Analyst',
    quote: 'Decoding public finance with accountability and transparency.',
    image: '/speakers/Economics/Khaya-Sithole-The-Speakers-Firm.jpg',
    trackId: 'economics',
    trackLabel: 'Economics'
  },
  {
    id: 'siphiwe-moyo',
    name: 'Siphiwe Moyo',
    bio: 'Global Speaker, Author & Organisational Development Specialist',
    quote: 'Resilience is not about bouncing back, it is about bouncing forward.',
    image: '/speakers/Governance/Siphiwe-Moyo-The-Speakers-Firm.jpg',
    trackId: 'leadership',
    trackLabel: 'Leadership'
  },
  {
    id: 'lincoln-mali',
    name: 'Lincoln Mali',
    bio: 'Corporate Executive, Leadership & Organisational Agility Specialist',
    quote: 'Leadership is a journey of influence, integrity, and impact.',
    image: '/image_marquee/leadership/Lincoln-Mali-The-Speakers-Firm.jpg',
    trackId: 'leadership',
    trackLabel: 'Leadership'
  },
  {
    id: 'stafford-masie',
    name: 'Stafford Masie',
    bio: 'Technology Futurist, Former CEO of Google SA & Angel Investor',
    quote: 'Technology is not about gadgets, it is about human empowerment.',
    image: '/image_marquee/stafford-masie-the-speakers-firm.jpg',
    trackId: 'futurists',
    trackLabel: 'Futurists'
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
      
      const scrollSpeed = 50; // pixels per second
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
    <section aria-labelledby="recommended-heading" className="relative w-full overflow-hidden bg-[#0A0A0A] py-20 sm:py-24 md:py-32 border-t border-white/[0.05]">
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
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center border border-l-[4px] border-[#222] border-l-[#e30e04] bg-[#222] px-4 py-2 text-[12px] font-bold uppercase tracking-[0.12em] text-[#F8F7F5] mb-6">
              <span>CURATED SELECTION</span>
            </div>
            <h2 id="recommended-heading" className="text-[clamp(2.5rem,7vw,4rem)] font-light uppercase leading-[1.02] tracking-[-0.04em] text-[#F8F7F5]">
              Recommended <br className="hidden md:block" />
              <span className="font-bold text-[#e30e04]">Speakers of the Month</span>
            </h2>
            <p className="mt-4 text-sm md:text-base text-[#8E8E93] max-w-[500px]">
              Handpicked keynotes, moderators, and facilitators commanding global attention for July 2026.
            </p>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
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
            <motion.article 
              key={`${speaker.id}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: (index % RECOMMENDED_SPEAKERS.length) * 0.05, ease: [0.16, 1, 0.3, 1] as const }}
              className="group relative w-[280px] min-[375px]:w-[310px] md:w-[350px] shrink-0 snap-start bg-[#121212] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-white/10 transition-colors duration-300"
            >
              {/* Image & Track Badge */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900">
                <img 
                  src={speaker.image} 
                  alt={speaker.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80" />
                
                <span className="absolute bottom-4 left-4 rounded-full bg-black/60 backdrop-blur-md px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#e30e04] border border-[#e30e04]/20 z-10">
                  {speaker.trackLabel}
                </span>
              </div>

              {/* Info Area */}
              <div className="p-6 md:p-8 flex flex-col justify-between min-h-[270px]">
                <div>
                  <h3 className="text-lg font-bold text-[#F8F7F5] group-hover:text-[#e30e04] transition-colors duration-300">
                    {speaker.name}
                  </h3>
                  <p className="mt-2 text-xs text-[#8E8E93] line-clamp-2">
                    {speaker.bio}
                  </p>
                  
                  <div className="mt-4 flex gap-2 items-start text-xs text-[#AFB0B0] italic bg-white/[0.02] p-3 rounded-lg border border-white/[0.03]">
                    <Quote className="h-3 w-3 shrink-0 text-[#e30e04] rotate-180 mt-0.5" />
                    <p className="line-clamp-2 leading-relaxed">&ldquo;{speaker.quote}&rdquo;</p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center justify-between">
                  <Link 
                    href={`/tracks/${speaker.trackId}/${speaker.id}`}
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#F8F7F5]/80 hover:text-white transition-colors duration-300"
                  >
                    <span>View Profile</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        
      </div>
    </section>
  );
};
