import * as React from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, ArrowUpRight } from 'lucide-react';

const VALUE_PROPOSITION_ITEMS = [
  {
    id: 'leading-bureau',
    label: "One of Africa's leading speakers bureaus"
  },
  {
    id: 'black-owned-bbbee',
    label: '100% black-owned and Level 1 B-BBEE'
  },
  {
    id: 'twenty-four-hours',
    label: 'Initial response and talent recommendations within 24 hours'
  },
  {
    id: 'beyond-portfolio',
    label: 'Access to talent beyond our published portfolio'
  },
  {
    id: 'strategic-matching',
    label: 'Strategic matching aligned with your objectives, audience and budget'
  },
  {
    id: 'end-to-end-management',
    label: 'End-to-end contracting, coordination and talent management'
  },
  {
    id: 'trusted-partner',
    label: 'One trusted partner for conferences, campaigns and corporate gatherings'
  }
];

const StatCounter = ({ value, suffix = "", duration = 1200 }: { value: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  React.useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const stepTime = Math.max(Math.floor(duration / end), 15);
      
      const timer = setInterval(() => {
        start += Math.ceil(end / 40); // step up faster
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCount(start);
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [inView, value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export const WhyChooseUs = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section ref={containerRef} aria-labelledby="why-speakers-firm-heading" className="relative w-full overflow-x-hidden bg-[#000000] text-[#F8F7F5] border-t border-white/[0.05]" style={{
      fontFamily: 'Kontora, Arial, sans-serif'
    }}>
      {/* Cinematic noise motif */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.02] sm:opacity-[0.03]" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        backgroundRepeat: 'repeat',
        backgroundSize: '128px 128px'
      }} />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 py-20 sm:px-8 sm:py-24 md:px-16 md:py-32 lg:px-24">
        
        {/* Stat Bar Header to add energy */}
        <div className="grid grid-cols-1 gap-8 border-b border-white/[0.08] pb-16 sm:grid-cols-3 md:gap-12 mb-16 md:mb-20">
          <div className="flex flex-col items-start">
            <span className="text-[clamp(2.5rem,8vw,4.5rem)] font-light font-serif tracking-tight leading-none text-[#e30e04]">
              <StatCounter value={100} suffix="%" />
            </span>
            <span className="mt-2 text-xs font-bold uppercase tracking-wider text-[#AFAFBA]">Black-Owned & Level 1 B-BBEE</span>
          </div>
          <div className="flex flex-col items-start border-t border-white/[0.08] pt-6 sm:border-t-0 sm:pt-0 sm:border-x sm:border-white/[0.08] sm:px-8 md:px-12">
            <span className="text-[clamp(2.5rem,8vw,4.5rem)] font-light font-serif tracking-tight leading-none text-[#e30e04]">
              <StatCounter value={24} suffix="h" />
            </span>
            <span className="mt-2 text-xs font-bold uppercase tracking-wider text-[#AFAFBA]">Talent Recommendations</span>
          </div>
          <div className="flex flex-col items-start border-t border-white/[0.08] pt-6 sm:border-t-0 sm:pt-0">
            <span className="text-[clamp(2.5rem,8vw,4.5rem)] font-light font-serif tracking-tight leading-none text-[#e30e04]">
              <StatCounter value={150} suffix="+" />
            </span>
            <span className="mt-2 text-xs font-bold uppercase tracking-wider text-[#AFAFBA]">Elite Faculty Portfolio</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,5.5fr)_minmax(0,6.5fr)] lg:gap-24">
          
          {/* Left Column: Statement Side (Larger type, more white space for high contrast) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.28 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
            className="flex flex-col justify-start"
          >
            <div className="self-start inline-flex items-center border border-l-[4px] border-[#393939] border-l-[#e30e04] bg-[#393939] px-4 py-2 text-[12px] font-bold uppercase tracking-[0.12em] text-[#F8F7F5]">
              <span>Why Choose Us</span>
            </div>
            <h2 id="why-speakers-firm-heading" className="mt-8 text-[clamp(2.5rem,7vw,4.5rem)] font-light uppercase leading-[0.95] tracking-[-0.05em] text-[#F8F7F5]">
              Why <br className="hidden md:block"/>
              <span className="font-bold text-[#e30e04]">The Speakers Firm?</span>
            </h2>
            
            <p className="mt-8 text-[20px] md:text-[22px] font-light leading-[1.6] text-[#AFAFBA] max-w-[500px]">
              Make The Speakers Firm your agency of choice and trusted talent partner for conferences, corporate events, brand campaigns, and high-impact stakeholder engagements.
            </p>
            
            <p className="mt-6 text-[15px] md:text-[16px] font-normal leading-[1.8] text-[#8E8E93] max-w-[500px]">
              As one of Africa&apos;s leading speakers bureaus, we provide seamless access to exceptional keynote speakers, MCs, moderators, comedians, facilitators, and influential leaders. We source and secure the right local, continental, or global talent for every brief.
            </p>
          </motion.div>

          {/* Right Column: Evidence Side (Denser, structured grid with cascading staggers) */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col justify-between pt-2 lg:pt-8"
          >
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#8E8E93] mb-8 border-b border-white/[0.08] pb-4">
                Our Value Proposition
              </h3>
              
              <ul className="flex flex-col gap-6" aria-label="Our Value Proposition">
                {VALUE_PROPOSITION_ITEMS.map(item => (
                  <motion.li 
                    key={item.id} 
                    variants={itemVariants}
                    className="group flex items-start gap-4"
                  >
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white/[0.05] border border-white/[0.1] text-[#e30e04] transition-all duration-300 group-hover:bg-[#e30e04] group-hover:text-white group-hover:scale-105">
                      <Check aria-hidden="true" className="h-3.5 w-3.5 stroke-[3.5]" />
                    </span>
                    <span className="text-[14px] md:text-[15px] font-medium leading-[1.5] text-[#D1D1D6] group-hover:text-[#F8F7F5] transition-colors duration-200">
                      {item.label}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Clear Call to Action capturing intent at peak persuasion */}
            <motion.div 
              variants={itemVariants}
              className="mt-14 pt-8 border-t border-white/[0.08]"
            >
              <a 
                href="/contact" 
                className="group relative inline-flex items-center gap-3 rounded-full bg-[#e30e04] hover:bg-white text-white hover:text-[#181818] px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-[0_12px_32px_rgba(227,14,4,0.18)] hover:shadow-none active:scale-98"
              >
                <span>Start a Brief</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
