import * as React from "react";
import { motion, useInView, Variants, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, X } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * BeyondThePodium Component
 * A premium, dark-themed section for The Speakers Firm featuring
 * strategic interventions and executive roundtables.
 */

interface DialogueSeries {
  id: string;
  title: string;
  description: string;
  speakerName: string;
  youtubeId: string;
}

const DIALOGUE_SERIES_DATA: DialogueSeries[] = [
  {
    id: "sifiso-nene",
    title: "Sifiso Nene | Stand Up Comedian",
    speakerName: "Sifiso Nene",
    youtubeId: "fI2uQHu8C3A",
    description: "Hilarious stand-up comedy and storytelling capturing everyday experiences."
  },
  {
    id: "tumi-ramonotsi",
    title: "Tumi Ramonotsi - Oracle",
    speakerName: "Tumi Ramonotsi",
    youtubeId: "Xb2VPORlJ5U",
    description: "Insightful keynote on cloud technology, digital transformation, and business strategy."
  },
  {
    id: "lincoln-mali-blazing-a-trail",
    title: "Author of 'Blazing A Trail' Book Roundtable",
    speakerName: "Lincoln Mali",
    youtubeId: "KaDKu8ChKYs",
    description: "Lesaka Technologies CEO discussing his book 'Blazing A Trail' and executive leadership."
  },
  {
    id: "lincoln-mali-leadership",
    title: "Lincoln Mali Leadership Dialogue Series",
    speakerName: "Lincoln Mali",
    youtubeId: "bjcHrXaccTY",
    description: "Debating structural integrity, accountability, and the demands of ethical servant leadership in corporate governance."
  },
  {
    id: "mteto-nyati",
    title: "Chairman of Eskom at the 'Blazing A Trail' Book Roundtable",
    speakerName: "Mteto Nyati",
    youtubeId: "9GQaaOlowW0",
    description: "Discussing institutional turnarounds, corporate governance, and leadership during energy crises."
  },
  {
    id: "blazing-a-trail-experience",
    title: "Official Experience Reel | 'Blazing a Trail' Exclusive Book Roundtable",
    speakerName: "Roundtable Reel",
    youtubeId: "UcACoBam75o",
    description: "A premium overview of the exclusive 2025 book roundtable with industry captains."
  },
  {
    id: "bonang-mohale-autobiography",
    title: "‘Coming in From the Cold - An Autobiography’ Book Launch",
    speakerName: "Prof. Bonang Mohale",
    youtubeId: "O6_1XH3MMcE",
    description: "Reflections on his autobiography, detailing the struggles and triumphs of black leadership in corporate South Africa."
  },
  {
    id: "tebogo-mekgoe",
    title: "EmpowaGrowth Workshop | Business Model Innovation",
    speakerName: "Tebogo Mekgoe",
    youtubeId: "dn4DuJtt7mI",
    description: "Exploring systemic alignment, organizational health, and leadership performance in business strategy."
  },
  {
    id: "mary-bomela",
    title: "CEO and Director of Companies at TUT’s IFOW 4th Annual Dialogue",
    speakerName: "Mary Bomela",
    youtubeId: "INOSSwpIlv8",
    description: "Insights on female leadership, board strategy, and driving value across diverse investment portfolios."
  },
  {
    id: "bonang-mohale-tut",
    title: "4th Annual TUT Future of Work Keynote Address",
    speakerName: "Prof. Bonang Mohale",
    youtubeId: "2s5CXK-w0AQ",
    description: "Unpacking ethical corporate leadership, human-centric strategies, and socio-economic transformation for the future of work."
  },
  {
    id: "reuel-khoza-roundtable",
    title: "The 2025 Book Roundtable Series - Legacy Beyond Leadership",
    speakerName: "Dr. Reuel Khoza",
    youtubeId: "0ij-23dNHvM",
    description: "A deep dive roundtable dialogue into Dr. Reuel Khoza's perspective on legacy beyond leadership, ethics, and corporate governance."
  },
  {
    id: "zola-mbatha",
    title: "Orange Farm EmpowaMen Experience",
    speakerName: "Zola Mbatha",
    youtubeId: "yA5_vrN2vM0",
    description: "Addressing positive masculinity, community development, and leadership in social change spaces."
  },
  {
    id: "john-kani",
    title: "Dr Bonisile John Kani OIS OBE Keynote",
    speakerName: "Dr. John Kani",
    youtubeId: "4pwj3RCt2RI",
    description: "Acclaimed actor and playwright sharing insights on cultural identity, heritage, and the power of storytelling."
  },
  {
    id: "bonang-mohale-transnet",
    title: "Professor Bonang Mohale - Transnet Keynote",
    speakerName: "Prof. Bonang Mohale",
    youtubeId: "z20ciVNtc8A",
    description: "Strategic insights on economic development, corporate governance, and state-owned enterprise transformation."
  },
  {
    id: "muzi-kuzwayo",
    title: "Muzi Kuzwayo - Orange Farm EmpowaMen Programme",
    speakerName: "Muzi Kuzwayo",
    youtubeId: "3xJJ0IQQFCw",
    description: "Speaking on brand strategy, socio-economic empowerment, and positive role models in society."
  },
  {
    id: "bonang-mohale-empowamen",
    title: "Bonang Mohale - Orange Farm EmpowaMen Programme",
    speakerName: "Prof. Bonang Mohale",
    youtubeId: "Txr0O_M6bb0",
    description: "Addressing leadership accountability, community mentorship, and empowering the next generation."
  },
  {
    id: "empowamen-experience",
    title: "Experience Reel - Orange Farm EmpowaMen Programme",
    speakerName: "EmpowaMen Reel",
    youtubeId: "tZ-ick_bEGw",
    description: "Visual highlights of the community dialogue, mentorship workshops, and leadership interventions."
  },
  {
    id: "maurice-radebe",
    title: "Head & Director: Wits Business School (WBS) Keynote",
    speakerName: "Prof. Maurice Radebe",
    youtubeId: "7iUZ-E1OZ0U",
    description: "Focusing on corporate energy transformation, leadership agility, and academic excellence in Africa."
  }
];

export const BeyondThePodium: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [activeVideoId, setActiveVideoId] = React.useState<string | null>(null);
  const [showAll, setShowAll] = React.useState<boolean>(false);
  
  const isInView = useInView(containerRef, {
    once: true,
    margin: "-100px"
  });

  const headlineVariants: Variants = {
    hidden: {
      clipPath: "inset(0 100% 0 0)"
    },
    visible: {
      clipPath: "inset(0 0% 0 0)",
      transition: {
        duration: 1.2,
        ease: [0.77, 0, 0.175, 1],
        delay: 0.2
      }
    }
  };

  const lineVariants: Variants = {
    hidden: {
      width: 0
    },
    visible: {
      width: "100%",
      transition: {
        duration: 1,
        ease: "easeInOut",
        delay: 0.8
      }
    }
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2 + (i % 6) * 0.1
      }
    })
  };

  const displayedVideos = showAll ? DIALOGUE_SERIES_DATA : DIALOGUE_SERIES_DATA.slice(0, 6);

  return (
    <section ref={containerRef} className="relative w-full min-h-screen bg-[#0F0F0F] text-[#F5F5F0] overflow-hidden" aria-labelledby="beyond-the-podium-heading">
      <style>{`
        .tsf-cinematic-preview {
          background-color: #080808;
          isolation: isolate;
        }
        .tsf-cinematic-preview::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 3;
          pointer-events: none;
          opacity: 0.12;
          mix-blend-mode: screen;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.05' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.62'/%3E%3C/svg%3E");
          background-size: 132px 132px;
        }
      `}</style>
      
      {/* Signature Vertical Motif - Left Border Rule */}
      <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#333333] z-10 hidden md:block" aria-hidden="true" />

      {/* Video Modal Player */}
      <AnimatePresence>
        {activeVideoId && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideoId(null)}
            className="fixed inset-0 bg-black/95 z-[300] flex items-center justify-center p-4 md:p-12 cursor-pointer"
          >
            <button 
              onClick={() => setActiveVideoId(null)}
              className="absolute top-6 right-6 text-white hover:text-[#e30e04] transition-colors p-2 z-[310]"
              aria-label="Close video player"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl aspect-video bg-[#000000] border border-[#333333] overflow-hidden cursor-default rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe 
                src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1&rel=0`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-6 py-20 sm:py-24 md:px-12 md:py-28 lg:py-[140px] flex flex-col justify-center min-h-screen max-w-7xl">
        
        {/* Header Section */}
        <div className="mb-14 max-w-4xl sm:mb-16 md:mb-24 lg:mb-32">
          <motion.h2 id="beyond-the-podium-heading" initial="hidden" animate={isInView ? "visible" : "hidden"} variants={headlineVariants} className="text-[clamp(2.875rem,11vw,4.75rem)] font-bold uppercase tracking-[-0.05em] leading-[0.95] mb-6">
            Beyond the Podium.
          </motion.h2>

          {/* Animated Red Rule */}
          <div className="relative h-[2px] w-full mb-10 overflow-hidden">
            <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={lineVariants} className="absolute left-0 top-0 h-full bg-[#e30e04]" />
          </div>

          <motion.p initial={{
            opacity: 0,
            y: 10
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {
            opacity: 0,
            y: 10
          }} transition={{
            duration: 1,
            delay: 1.2
          }} className="text-lg md:text-xl text-[#AAAAAA] leading-relaxed max-w-2xl font-sans">
            We orchestrate closed-door Executive Roundtables, Book Dialogues, and high-level 
            intellectual ecosystems that move organisations past surface-level talk and into strategic momentum.
          </motion.p>
        </div>

        {/* Dialogue Series Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {displayedVideos.map((series, index) => (
            <motion.article 
              key={series.id} 
              custom={index} 
              initial="hidden" 
              animate={isInView ? "visible" : "hidden"} 
              variants={itemVariants} 
              className={cn("group relative flex flex-col cursor-pointer", "border-b border-[#333333] pb-12 lg:border-b-0 lg:pb-0")}
              onClick={() => setActiveVideoId(series.youtubeId)}
            >
              <figure className="m-0">
                <div className="tsf-cinematic-preview relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-[18px] border border-[#333333] transition-colors duration-300 group-hover:border-[#e30e04]/70" aria-label={`${series.speakerName} cinematic video preview`} role="img">
                  {/* YouTube Thumbnail Background with Grayscale-to-Color Transition */}
                  <img 
                    src={`https://img.youtube.com/vi/${series.youtubeId}/hqdefault.jpg`}
                    alt={`${series.speakerName} video thumbnail`}
                    className="absolute inset-0 w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-95 group-hover:scale-105 transition-all duration-500 z-0"
                  />
                  
                  {/* Visual Overlays */}
                  <div aria-hidden="true" className="absolute inset-x-[12%] top-0 z-[1] h-[62%] rounded-b-full bg-[#F5F5F0]/[0.05] blur-2xl transition-opacity duration-500 group-hover:opacity-80" />
                  <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 z-[5] h-[58%] bg-gradient-to-t from-black via-black/40 to-transparent" />
                  
                  {/* Play Button */}
                  <div className="relative z-[7] flex h-16 w-16 items-center justify-center rounded-full border border-[#F5F5F0]/45 bg-black/45 text-[#F5F5F0] shadow-[0_0_38px_rgba(0,0,0,0.65)] backdrop-blur-md transition-all duration-300 group-hover:border-[#e30e04] group-hover:bg-[#e30e04]" aria-hidden="true">
                    <Play className="ml-1 h-6 w-6 fill-current" />
                  </div>
                  
                  {/* Speaker Overlay Label */}
                  <div className="absolute bottom-5 left-5 right-5 z-[7]">
                    <p className="max-w-[92%] text-[clamp(1.25rem,7vw,1.625rem)] font-bold uppercase leading-[0.95] tracking-[-0.055em] text-[#F5F5F0] drop-shadow-[0_2px_14px_rgba(0,0,0,0.72)]">
                      {series.speakerName}
                    </p>
                    <span aria-hidden="true" className="mt-3 block h-[2px] w-12 bg-[#e30e04]" />
                  </div>
                </div>
                
                <figcaption className="mt-7">
                  <h3 className="text-[clamp(1.375rem,6vw,1.75rem)] font-bold uppercase tracking-[-0.04em] leading-tight mb-4 transition-colors duration-[250ms] group-hover:text-[#e30e04]">
                    {series.title}
                  </h3>
                  <p className="text-sm md:text-base text-[#AAAAAA] leading-relaxed font-sans uppercase tracking-wide opacity-80 group-hover:opacity-100 transition-opacity">
                    {series.description}
                  </p>
                </figcaption>
              </figure>
              
              {/* Subtle accent hover effect */}
              <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#e30e04] transition-all duration-500 group-hover:w-full" aria-hidden="true" />
            </motion.article>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {
          opacity: 0,
          y: 20
        }} transition={{
          duration: 0.8,
          delay: 1.5
        }} className="mt-16 md:mt-24 lg:mt-32">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="group relative flex items-center gap-3 px-7 py-4 sm:px-8 border border-[#F5F5F0] rounded-full text-[#F5F5F0] transition-all duration-300 hover:bg-[#F5F5F0] hover:text-[#0F0F0F] font-sans font-medium uppercase tracking-widest text-xs"
          >
            <span>{showAll ? "Show Less Interventions" : "View All Strategic Interventions"}</span>
            <ArrowRight className={cn("w-4 h-4 transition-transform", showAll ? "-rotate-90" : "group-hover:translate-x-1")} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
