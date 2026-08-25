"use client";

import * as React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, AlertTriangle, CheckCircle, HelpCircle } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const COLORS = {
  black: '#000000',
  red: '#e30e04',
  gray: '#000000',
  silver: '#ffffff',
  borderGray: '#ffffff',
  darkGray: '#000000',
  offWhite: '#ffffff'
};

const revealTransition = {
  duration: 0.8,
  ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
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

const Reveal = ({
  children,
  delay = 0,
  className = ''
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  return <motion.div className={className} initial={{
    opacity: 0,
    y: 28
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true,
    margin: '-80px'
  }} transition={{
    ...revealTransition,
    delay
  }}>
      {children}
    </motion.div>;
};

export function JoinTheSpeakersFirm() {
  const requirements = [
    {
      num: "1",
      title: "Live Keynote Video",
      desc: "A recent video of a live keynote address, excluding interviews and panel discussions."
    },
    {
      num: "2",
      title: "References & Testimonials",
      desc: "Five recent client testimonials or professional reference letters."
    },
    {
      num: "3",
      title: "Professional Biography",
      desc: "A clear, concise, and professionally written speaker biography."
    },
    {
      num: "4",
      title: "Core Topics",
      desc: "Your three to five leading keynote topics."
    },
    {
      num: "5",
      title: "Speaking Fee Range",
      desc: "Your speaking fee range for local and international engagements."
    }
  ];

  return <main className="min-h-screen w-full selection:bg-[#e30e04] selection:text-white font-[Kontora,sans-serif] overflow-x-hidden bg-[#ffffff] text-[#000000] flex flex-col justify-between">
      <Header />
      
      <div className="flex-grow">
        {/* Section 1: Hero Section */}
        <section id="top" className="relative min-h-screen w-full overflow-hidden pt-20 pb-28 md:pt-24 lg:pb-44 bg-[#000000] px-6 md:px-16 flex flex-col justify-center">
          <picture className="absolute inset-0 h-full w-full">
            <source media="(max-width: 767px)" srcSet="/hero_backgrounds/join-us-mobile.jpg" />
            <img src="/galleries/bonang-mohale/bonang-mohale.jpg" alt="" aria-hidden="true" className="h-full w-full object-cover object-center" />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/60 via-[#000000]/30 to-[#000000]/85" aria-hidden="true" />
          <VerticalBorderLines isDark={true} />
          
          <div className="relative z-10 mx-auto flex min-h-[calc(100vh-10rem)] max-w-[1440px] flex-col justify-end pb-12 md:justify-center md:pb-0 px-6 md:px-16">
            <Reveal>
              <SectionTag>JOIN THE SPEAKERS FIRM™</SectionTag>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-[clamp(2rem,6vw,4rem)] font-bold uppercase leading-[0.95] tracking-[-0.05em] text-[#ffffff] drop-shadow-[0_8px_34px_rgba(0,0,0,0.38)] mt-6 max-w-5xl">
                READY TO SPEAK WITH POWER? START HERE.
              </h1>
              <p className="text-[#e30e04] text-xs md:text-sm font-bold uppercase tracking-[0.2em] mt-3">
                Prospective Speaker and Talent Submissions
              </p>
            </Reveal>
            <motion.div aria-hidden="true" initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }} transition={{ delay: 1.0, duration: 0.74, ease: 'easeOut' }} className="mt-5 h-[3px] w-28 origin-left bg-[#e30e04] md:mt-7 md:w-40" />
            
            <div className="mt-8 flex max-w-[800px] flex-col gap-4">
              <Reveal delay={0.3}>
                <p className="text-[18px] md:text-[22px] font-bold leading-tight text-[#ffffff] mb-2">
                  We do not work with everyone. We partner with game-changers.
                </p>
              </Reveal>
              <Reveal delay={0.4}>
                <p className="text-[15px] font-normal leading-[1.6] text-[#ffffff]/80 drop-shadow-[0_6px_22px_rgba(0,0,0,0.45)] md:text-[16px] md:leading-[1.65]">
                  The Speakers Firm™ represents influential voices that do more than inspire. They challenge convention, shape decisions, influence institutions and ignite meaningful change.
                </p>
              </Reveal>
              <Reveal delay={0.5}>
                <p className="text-[15px] font-normal leading-[1.6] text-[#ffffff]/80 drop-shadow-[0_6px_22px_rgba(0,0,0,0.45)] md:text-[16px] md:leading-[1.65]">
                  Our speakers, thought leaders, practitioners and provocateurs are trusted in boardrooms under pressure, institutions undergoing transformation and global forums where markets, mandates and futures are being shaped.
                </p>
              </Reveal>
              <Reveal delay={0.6}>
                <p className="text-[15px] font-normal leading-[1.6] text-[#ffffff]/80 drop-shadow-[0_6px_22px_rgba(0,0,0,0.45)] md:text-[16px] md:leading-[1.65]">
                  If you possess the credibility, expertise and commanding presence to move minds, markets and institutions, we welcome the opportunity to explore strategic alignment.
                </p>
              </Reveal>
              <Reveal delay={0.7} className="mt-4">
                <motion.a href="#requirements" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#e30e04] px-6 py-3 text-[12px] font-bold uppercase tracking-[0.1em] text-white transition-all hover:bg-white hover:text-black">
                  <span>View Submission Requirements</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </motion.a>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Section 2: Core Approach */}
        <section className="relative py-16 md:py-24 lg:py-32 px-6 md:px-16" style={{ backgroundColor: COLORS.offWhite }}>
          <VerticalBorderLines isDark={false} />
          <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-16">
            <SectionTag>OUR POSITIONING</SectionTag>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <Reveal delay={0.1} className="border-l-4 border-black pl-6 py-2">
                <p className="text-lg font-bold text-black uppercase leading-snug">
                  We do not simply manage speakers. We position and deploy influential voices.
                </p>
              </Reveal>
              <Reveal delay={0.2} className="border-l-4 border-[#e30e04] pl-6 py-2">
                <p className="text-lg font-bold text-black uppercase leading-snug">
                  We do not build conventional speaker lists. We curate systems-shifting intelligence, expertise and talent.
                </p>
              </Reveal>
              <Reveal delay={0.3} className="border-l-4 border-black pl-6 py-2">
                <p className="text-lg font-bold text-black uppercase leading-snug">
                  If you are ready to operate at this level, we invite you to submit your profile.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Section 3: Requirements */}
        <section id="requirements" className="relative py-16 md:py-24 lg:py-32 px-6 md:px-16 bg-[#000000] text-white">
          <VerticalBorderLines isDark={true} />
          <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-16">
            <SectionTag>MINIMUM SUBMISSION REQUIREMENTS</SectionTag>
            <Reveal>
              <h2 className="mt-6 text-[clamp(1.8rem,5vw,3rem)] font-bold uppercase leading-[0.95] tracking-[-0.04em] text-white max-w-5xl">
                To be considered for inclusion in The Speakers Firm’s private strategic roster, please submit the following:
              </h2>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {requirements.map((req, idx) => (
                <Reveal key={req.num} delay={idx * 0.05} className="group flex flex-col justify-between border border-white/10 bg-white/[0.02] p-6 rounded-[18px] hover:border-[#e30e04] hover:bg-white/[0.04] transition-all duration-300">
                  <div>
                    <span className="text-sm font-bold text-[#e30e04] block mb-4">REQUIREMENT 0{req.num}</span>
                    <h3 className="text-base font-bold text-white uppercase tracking-tight mb-3 group-hover:text-[#e30e04] transition-colors">{req.title}</h3>
                    <p className="text-xs leading-relaxed text-[#AFB0B0]">{req.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3} className="mt-16 border border-white/10 bg-white/[0.02] rounded-[24px] p-8 md:p-12 text-center max-w-4xl mx-auto space-y-6">
              <span className="inline-flex items-center justify-center p-3 rounded-full bg-[#e30e04]/10 text-[#e30e04]">
                <Mail size={24} />
              </span>
              <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-white">READY TO SUBMIT?</h3>
              <p className="text-[#AFB0B0] text-sm leading-relaxed max-w-2xl mx-auto">
                Please send your complete digital submission to <a href="mailto:talent@thespeakersfirm.co.za" className="text-white hover:text-[#e30e04] underline font-bold">talent@thespeakersfirm.co.za</a>.
              </p>
              <div className="flex flex-col items-center gap-2 pt-2">
                <motion.a href="mailto:talent@thespeakersfirm.co.za" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#e30e04] px-6 py-3 text-[12px] font-bold uppercase tracking-[0.1em] text-white transition-all hover:bg-white hover:text-black">
                  <span>SEND SUBMISSION EMAIL</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </motion.a>
                <small className="text-[#e30e04] font-bold text-xs uppercase tracking-wider mt-4 block">
                  Incomplete submissions will not be reviewed. At this level, excellence begins with precision.
                </small>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Section 4: Information & Protocols */}
        <section className="relative py-16 md:py-24 lg:py-32 px-6 md:px-16 bg-[#000000] text-white border-t border-white/10">
          <VerticalBorderLines isDark={true} />
          <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Column 1: Important Information (Compliance Protocol) */}
            <div className="space-y-8">
              <div className="border-l-[4px] border-[#e30e04] pl-6">
                <span className="block text-[11px] font-bold uppercase tracking-widest text-[#e30e04] mb-1">COMPLIANCE PROTOCOL</span>
                <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white">IMPORTANT INFORMATION</h3>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                <div className="border border-white/10 bg-white/[0.01] p-6 rounded-[20px] hover:border-white/20 transition-colors">
                  <span className="text-xs font-bold text-[#e30e04] block mb-2">01. SUBMISSION TIMELINE</span>
                  <p className="text-xs leading-relaxed text-[#AFB0B0]">We receive a high volume of submissions. Candidates who meet our strategic, commercial and quality requirements will be contacted within three to four weeks.</p>
                </div>
                <div className="border border-white/10 bg-white/[0.01] p-6 rounded-[20px] hover:border-white/20 transition-colors">
                  <span className="text-xs font-bold text-[#e30e04] block mb-2">02. COMPLETE PROFILES ONLY</span>
                  <p className="text-xs leading-relaxed text-[#AFB0B0]">Incomplete submissions will not be considered under any circumstances.</p>
                </div>
                <div className="border border-white/10 bg-white/[0.01] p-6 rounded-[20px] hover:border-white/20 transition-colors">
                  <span className="text-xs font-bold text-[#e30e04] block mb-2">03. DIGITAL CHANNELS ONLY</span>
                  <p className="text-xs leading-relaxed text-[#AFB0B0]">We do not accept printed materials, physical press kits or unsolicited packages. All submissions and communication must be digital.</p>
                </div>
                <div className="border border-white/10 bg-white/[0.01] p-6 rounded-[20px] hover:border-white/20 transition-colors">
                  <span className="text-xs font-bold text-[#e30e04] block mb-2">04. SELECTIVE ROSTER</span>
                  <p className="text-xs leading-relaxed text-[#AFB0B0]">Representation by The Speakers Firm™ is intentionally selective. Our roster is curated to include individuals with the credibility, intellectual authority, commercial relevance and stage command required to operate at the highest level.</p>
                </div>
              </div>
            </div>

            {/* Column 2: What to Expect (Roster Progression) */}
            <div className="space-y-8">
              <div className="border-l-[4px] border-white/40 pl-6">
                <span className="block text-[11px] font-bold uppercase tracking-widest text-white/50 mb-1">ROSTER PROGRESSION</span>
                <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white">WHAT TO EXPECT</h3>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                <div className="border border-white/10 bg-white/[0.01] p-6 rounded-[20px] hover:border-white/20 transition-colors">
                  <span className="text-xs font-bold text-white/60 block mb-2">STAGE 01. INITIAL ASSESSMENT</span>
                  <p className="text-xs leading-relaxed text-[#AFB0B0]">Every complete submission is assessed for potential inclusion in our private strategic roster, which is accessed by our agents when responding to high-profile and high-stakes client briefs.</p>
                </div>
                <div className="border border-white/10 bg-white/[0.01] p-6 rounded-[20px] hover:border-white/20 transition-colors">
                  <span className="text-xs font-bold text-white/60 block mb-2">STAGE 02. DIRECT MATCHING</span>
                  <p className="text-xs leading-relaxed text-[#AFB0B0]">If your expertise and positioning align with a current opportunity, we will contact you directly to request additional information or initiate partnership discussions.</p>
                </div>
                <div className="border border-white/10 bg-white/[0.01] p-6 rounded-[20px] hover:border-white/20 transition-colors">
                  <span className="text-xs font-bold text-white/60 block mb-2">STAGE 03. PROGRESSION FACTORS</span>
                  <p className="text-xs leading-relaxed text-[#AFB0B0]">Submission or roster inclusion does not guarantee formal representation or confirmed engagements. Progression depends on your relevance, resonance, professionalism and demonstrated real-world impact.</p>
                </div>
                <div className="border border-white/10 bg-white/[0.01] p-6 rounded-[20px] hover:border-white/20 transition-colors">
                  <span className="text-xs font-bold text-white/60 block mb-2">STAGE 04. FORMAL REPRESENTATION</span>
                  <p className="text-xs leading-relaxed text-[#AFB0B0]">As your profile, market relevance and influence grow, you may be invited to enter into a formal, long-term representation partnership with The Speakers Firm™.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: What Not To Do */}
        <section className="relative py-16 md:py-24 px-6 md:px-16 border-t border-black/10" style={{ backgroundColor: COLORS.offWhite }}>
          <VerticalBorderLines isDark={false} />
          <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-16">
            <div className="border-l-4 border-[#e30e04] pl-6 mb-12">
              <span className="block text-[11px] font-bold uppercase tracking-widest text-[#e30e04] mb-1">DISCIPLINE &amp; STANDARDS</span>
              <h3 className="text-2xl font-bold uppercase tracking-tight text-black">WHAT NOT TO DO</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Reveal delay={0.1} className="bg-black/5 p-6 rounded-2xl border border-black/10">
                <h4 className="font-bold text-sm text-[#e30e04] uppercase tracking-wider mb-2">No Physical Media</h4>
                <p className="text-xs text-[#686869] leading-relaxed">
                  Do not send printed press kits, physical materials or unsolicited packages. They will not be retained or returned.
                </p>
              </Reveal>
              <Reveal delay={0.2} className="bg-black/5 p-6 rounded-2xl border border-black/10">
                <h4 className="font-bold text-sm text-[#e30e04] uppercase tracking-wider mb-2">No Unofficial Follow-ups</h4>
                <p className="text-xs text-[#686869] leading-relaxed">
                  Do not follow up by telephone, direct message or through unofficial channels. We value professionalism, patience and discernment.
                </p>
              </Reveal>
              <Reveal delay={0.3} className="bg-black/5 p-6 rounded-2xl border border-black/10">
                <h4 className="font-bold text-sm text-[#e30e04] uppercase tracking-wider mb-2">Strict Criteria Only</h4>
                <p className="text-xs text-[#686869] leading-relaxed">
                  Do not submit unless you meet every requirement. At this level, attention to detail is a demonstration of credibility.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Section 6: Final Call to Action */}
        <section className="relative py-20 md:py-32 px-6 md:px-16 bg-[#e30e04] text-white">
          <VerticalBorderLines isDark={false} />
          <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-16 text-center space-y-8">
            <span className="inline-flex border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-bold tracking-[0.2em] text-[#ffffff] uppercase">ARE YOU READY TO SHIFT THE ROOM?</span>
            
            <h2 className="text-[clamp(2.2rem,6vw,4rem)] font-bold uppercase leading-[0.95] tracking-[-0.04em] text-white max-w-4xl mx-auto">
              If your ambition is simply to inspire, entertain or motivate, there are other platforms for that.
            </h2>
            
            <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
              If you are here to challenge established thinking, reset the agenda, influence consequential decisions and help shape the future, we should talk.
            </p>
            
            <div className="flex flex-col items-center gap-4 pt-4">
              <motion.a href="mailto:talent@thespeakersfirm.co.za" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#000000] px-7 py-4 text-[12px] font-bold uppercase tracking-[0.1em] text-white transition-all hover:bg-white hover:text-black">
                <span>Submit Profile to talent@thespeakersfirm.co.za</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </motion.a>
              
              <div className="text-white/50 text-[10px] font-bold uppercase tracking-[0.15em] pt-8">
                THE SPEAKERS FIRM™ <span className="text-white/20 px-2">|</span> WHERE STRATEGY SPEAKS. INFLUENCE MOVES. AND BOLD VOICES SHAPE THE FUTURE.
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>;
}
