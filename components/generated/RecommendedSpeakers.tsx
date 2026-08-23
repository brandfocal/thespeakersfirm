import * as React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
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

const SECTION_TAG_CLASS = 'inline-flex items-center border border-l-[4px] px-4 py-2 text-[12px] font-bold uppercase tracking-[0.12em] shadow-none';
const SECTION_TAG_STYLE = {
  backgroundColor: '#000000',
  borderColor: '#000000',
  borderLeftColor: '#e30e04',
  color: '#ffffff'
};

const RECOMMENDED_SPEAKERS: RecommendedSpeaker[] = [
  {
    id: 'dick-khoza',
    name: 'Bishop Dick Khoza',
    bio: 'Cultural commentator and compelling speaker on African spirituality, indigenous wisdom, identity, values and community leadership.',
    quote: '',
    image: '/speaker_thumbnails/Bishop-Dick-Khoza-The-Speakers-Firm.jpg',
    trackId: 'spirituality-heritage-and-identity',
    trackLabel: 'Spirituality'
  },
  {
    id: 'dr-john-kani',
    name: 'Dr. John Kani',
    bio: 'Theatre legend, playwright and cultural activist.',
    quote: '',
    image: '/speaker_thumbnails/Dr-John-Kani-The-Speakers-Firm.jpg',
    trackId: 'spirituality-heritage-and-identity',
    trackLabel: 'Spirituality'
  },
  {
    id: 'mbuso-khoza',
    name: 'Mbuso Khoza',
    bio: 'Vocalist, cultural historian and custodian of African oral traditions.',
    quote: '',
    image: '/speaker_thumbnails/Mbuso-Khoza-The-Speakers-Firm.jpg',
    trackId: 'spirituality-heritage-and-identity',
    trackLabel: 'Spirituality'
  },
  {
    id: 'gcina-mhlophe-becker',
    name: 'Dr. Gcina Mhlophe',
    bio: 'International storyteller, author and guardian of African folklore.',
    quote: '',
    image: '/speaker_thumbnails/Gcina-Mhlophe-Becker-The-Speakers-Firm.jpg',
    trackId: 'spirituality-heritage-and-identity',
    trackLabel: 'Spirituality'
  },
  {
    id: 'gogo-dineo-ndlanzi',
    name: 'Gogo Dineo Ndlanzi',
    bio: 'Traditional healer, spiritual teacher and advocate for African indigenous knowledge.',
    quote: '',
    image: '/speaker_thumbnails/Gogo-Dineo-Ndlanzi-The-Speakers-Firm.jpg',
    trackId: 'spirituality-heritage-and-identity',
    trackLabel: 'Spirituality'
  },
  {
    id: 'joshua-maponga',
    name: 'Joshua Maponga',
    bio: 'Author and speaker on African identity, spirituality, leadership and decolonisation.',
    quote: '',
    image: '/speaker_thumbnails/Joshua-Maponga-The-Speakers-Firm.jpg',
    trackId: 'spirituality-heritage-and-identity',
    trackLabel: 'Spirituality'
  },
  {
    id: 'nene-molefi',
    name: 'Nene Molefi',
    bio: 'Thought leader on diversity, inclusion, culture, identity and organisational transformation.',
    quote: '',
    image: '/speaker_thumbnails/Nene-Molefi-The-Speakers-Firm.jpg',
    trackId: 'diversity',
    trackLabel: 'Diversity'
  },
  {
    id: 'sello-maake-ka-ncube',
    name: 'Sello Maake kaNcube',
    bio: 'Veteran actor, director and advocate for African theatre.',
    quote: '',
    image: '/speaker_thumbnails/Sello-Maake-Ka-Ncube-The-Speakers-Firm.jpg',
    trackId: 'leadership-governance-and-risk-intelligence',
    trackLabel: 'Leadership'
  },
  {
    id: 'billy-selekane',
    name: 'Billy Selekane',
    bio: 'International keynote speaker, author and leadership authority whose work connects personal mastery, African values, purpose, transformation and human potential.',
    quote: '',
    image: '/speaker_thumbnails/Dr-Billy-Selekane-The-Speakers-Firm.jpg',
    trackId: 'inspirational-keynote-speakers',
    trackLabel: 'Keynote'
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
        <div className="mb-10">
          <div className={SECTION_TAG_CLASS} style={SECTION_TAG_STYLE}>
            <span>SEPTEMBER | HERITAGE MONTH</span>
          </div>
          <h2 id="recommended-heading" className="mt-6 text-[clamp(2rem,5vw,3rem)] font-light uppercase leading-[1.1] tracking-[-0.03em] text-white">
            Book Influential African Voices. <br />
            <span className="font-bold text-[#e30e04]">Shape the Future Through Heritage.</span>
          </h2>
          <div className="mt-6 space-y-4 text-sm md:text-base text-neutral-400 max-w-none leading-relaxed">
            <p>
              Heritage Month is a strategic opportunity to honour Africa’s identity, preserve indigenous knowledge and harness culture as a catalyst for leadership, innovation and social cohesion.
            </p>
            <p>
              The Speakers Firm™ connects organisations with distinguished cultural leaders, historians, artists, storytellers and thought leaders, strategically matched to your audience and objectives.
            </p>
            <p>
              From corporate events and leadership dialogues to masterclasses and cultural forums, we curate voices that deepen understanding, inspire action and create lasting institutional value.
            </p>
            <p>
              This September, move beyond commemoration. Partner with The Speakers Firm™ to activate heritage, strengthen belonging and shape an inclusive African future.
            </p>
            <p className="font-bold text-white tracking-wider mt-6 text-xs uppercase border-l-[4px] border-[#e30e04] pl-4 py-1">
              BOOK THE RIGHT VOICE. HONOUR HERITAGE. INSPIRE PROGRESS.
            </p>
          </div>
        </div>

        {/* Navigation Arrows (Directly on top of the slider) */}
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
            <motion.article 
              key={`${speaker.id}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: (index % RECOMMENDED_SPEAKERS.length) * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="group relative w-[280px] min-[375px]:w-[310px] md:w-[350px] shrink-0 snap-start bg-[#000000] border border-white/[0.08] rounded-2xl overflow-hidden hover:border-white/20 transition-colors duration-300"
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
              <div className="p-6 md:p-8 flex flex-col justify-between min-h-[200px]">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#e30e04] transition-colors duration-300">
                    {speaker.name}
                  </h3>
                  <p className="mt-2 text-xs text-neutral-400 line-clamp-3 leading-relaxed">
                    {speaker.bio}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <Link 
                    href={`/tracks/${speaker.trackId}/${speaker.id}`}
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-white/80 hover:text-white transition-colors duration-300"
                  >
                    <span>BOOK THE SPEAKER</span>
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

