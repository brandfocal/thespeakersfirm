import * as React from "react";
import { motion, useInView, Variants } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
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
  previewClassName: string;
}
const DIALOGUE_SERIES_DATA: DialogueSeries[] = [{
  id: "bonang-mohale",
  title: "The Prof. Bonang Mohale Roundtable Series",
  speakerName: "Prof. Bonang Mohale",
  previewClassName: "tsf-preview-bonang",
  description: "Focus: Driving localised corporate transformation, unpacking lessons from Lift As You Rise, and debating ethical capital distribution."
}, {
  id: "lincoln-mali",
  title: "The Lincoln Mali Leadership Dialogue",
  speakerName: "Lincoln Mali",
  previewClassName: "tsf-preview-lincoln",
  description: "Focus: Addressing structural integrity within South African banking and corporate sectors; driving practical servant leadership."
}, {
  id: "public-policy",
  title: "The Public Policy & State Roundtable",
  speakerName: "Public Policy & State Roundtable",
  previewClassName: "tsf-preview-policy",
  description: "Focus: Bridging the gap between private sector infrastructure and public sector execution, featuring high-level analysts and policymakers."
}];
export const BeyondThePodium: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
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
        delay: 1 + i * 0.2
      }
    })
  };
  return <section ref={containerRef} className="relative w-full min-h-screen bg-[#0F0F0F] text-[#F5F5F0] overflow-hidden" aria-labelledby="beyond-the-podium-heading">
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
          opacity: 0.18;
          mix-blend-mode: screen;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.05' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.62'/%3E%3C/svg%3E");
          background-size: 132px 132px;
        }
        .tsf-cinematic-preview::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 4;
          pointer-events: none;
          background:
            linear-gradient(180deg, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0.34) 54%, rgba(0, 0, 0, 0.9) 100%),
            radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.07), transparent 42%),
            linear-gradient(90deg, rgba(0, 0, 0, 0.64), transparent 26%, transparent 74%, rgba(0, 0, 0, 0.72));
        }
        .tsf-preview-bonang {
          background:
            radial-gradient(circle at 28% 18%, rgba(227, 14, 4, 0.24), transparent 24%),
            radial-gradient(circle at 72% 22%, rgba(245, 245, 240, 0.17), transparent 30%),
            linear-gradient(135deg, #050505 0%, #15110f 46%, #030303 100%);
        }
        .tsf-preview-lincoln {
          background:
            radial-gradient(circle at 68% 18%, rgba(175, 176, 176, 0.2), transparent 26%),
            radial-gradient(circle at 24% 72%, rgba(227, 14, 4, 0.18), transparent 28%),
            linear-gradient(135deg, #060606 0%, #101214 52%, #020202 100%);
        }
        .tsf-preview-policy {
          background:
            radial-gradient(circle at 50% 18%, rgba(245, 245, 240, 0.15), transparent 24%),
            radial-gradient(circle at 78% 70%, rgba(227, 14, 4, 0.16), transparent 30%),
            linear-gradient(135deg, #030303 0%, #101010 42%, #070605 100%);
        }
      `}</style>
      {/* Signature Vertical Motif - Left Border Rule */}
      <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#333333] z-10 hidden md:block" aria-hidden="true" />

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
          {DIALOGUE_SERIES_DATA.map((series, index) => <motion.article key={series.id} custom={index} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={itemVariants} className={cn("group relative flex flex-col", "border-b border-[#333333] pb-12 lg:border-b-0 lg:pb-0")}>
              <figure className="m-0">
                <div className={cn("tsf-cinematic-preview relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-[18px] border border-[#333333] transition-colors duration-300 group-hover:border-[#e30e04]/70", series.previewClassName)} aria-label={`${series.speakerName} cinematic video preview`} role="img">
                  <div aria-hidden="true" className="absolute inset-x-[12%] top-0 z-[1] h-[62%] rounded-b-full bg-[#F5F5F0]/[0.07] blur-2xl transition-opacity duration-500 group-hover:opacity-80" />
                  <div aria-hidden="true" className="absolute left-[12%] top-[19%] z-[2] h-[42%] w-[22%] rounded-full bg-black/45 shadow-[0_0_46px_rgba(245,245,240,0.08)]" />
                  <div aria-hidden="true" className="absolute right-[14%] top-[22%] z-[2] h-[39%] w-[20%] rounded-full bg-black/50 shadow-[0_0_54px_rgba(227,14,4,0.13)]" />
                  <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 z-[5] h-[58%] bg-gradient-to-t from-black via-black/72 to-transparent" />
                  <div className="relative z-[7] flex h-16 w-16 items-center justify-center rounded-full border border-[#F5F5F0]/45 bg-black/45 text-[#F5F5F0] shadow-[0_0_38px_rgba(0,0,0,0.65)] backdrop-blur-md transition-all duration-300 group-hover:border-[#e30e04] group-hover:bg-[#e30e04]" aria-hidden="true">
                    <Play className="ml-1 h-6 w-6 fill-current" />
                  </div>
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
            </motion.article>)}
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
        delay: 2
      }} className="mt-16 md:mt-24 lg:mt-32">
          <button className="group relative flex items-center gap-3 px-7 py-4 sm:px-8 border border-[#F5F5F0] rounded-full text-[#F5F5F0] transition-all duration-300 hover:bg-[#F5F5F0] hover:text-[#0F0F0F] font-sans font-medium uppercase tracking-widest text-xs">
            <span>View Strategic Dialogues</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>;
};