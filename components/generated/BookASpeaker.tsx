"use client";
// Hero background swap update
import * as React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SpeakerBookingForm } from './SpeakerBookingForm';

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

export function BookASpeaker() {
  const searchParams = useSearchParams();
  const [speakerInfo, setSpeakerInfo] = React.useState({ name: "", ref: "" });

  React.useEffect(() => {
    const querySpeaker = searchParams.get("speaker");
    if (querySpeaker) {
      const decodedName = decodeURIComponent(querySpeaker);
      setSpeakerInfo({
        name: decodedName,
        ref: `TSF-${decodedName.substring(0, 3).toUpperCase()}-${Math.floor(10 + Math.random() * 90)}`
      });
    } else {
      setSpeakerInfo({ name: "", ref: "" });
    }
  }, [searchParams]);

  const formats = [
    {
      num: "1",
      title: "Presidential and Global Keynotes",
      desc: "Agenda setting speakers who shape national priorities, influence global narratives and anchor consequential economic, policy and investment conversations."
    },
    {
      num: "2",
      title: "Private Executive Intelligence Briefings",
      desc: "Confidential, insight rich engagements led by respected experts who equip senior decision makers to anticipate disruption, manage risk and act decisively on emerging opportunities."
    },
    {
      num: "3",
      title: "Boardroom War Rooms",
      desc: "High intensity strategic interventions facilitated by experienced leaders and specialists to resolve complex challenges, align leadership and accelerate execution when performance, reputation and institutional credibility are at stake."
    },
    {
      num: "4",
      title: "Executive Strategy Labs",
      desc: "Focused working sessions led by world class strategists for organisations navigating transformation, turnaround, expansion or reinvention, producing clear priorities, practical roadmaps and accountable outcomes."
    },
    {
      num: "5",
      title: "Policy Innovation Labs and Foresight Councils",
      desc: "Expert led, cross sector platforms where government, business, academia and civil society co-create future ready policies, governance frameworks and implementation pathways."
    },
    {
      num: "6",
      title: "Investor Roundtables and Capital Deployment Sessions",
      desc: "Curated engagements connecting influential leaders, credible opportunities and capital, building trust, unlocking investment and accelerating commercially sustainable growth."
    },
    {
      num: "7",
      title: "Fireside Dialogues and Executive Power Panels",
      desc: "Compelling speakers and expert facilitators delivering candid conversations that challenge established thinking, surface actionable intelligence and move audiences from discussion to decision."
    },
    {
      num: "8",
      title: "Youth Leadership Takeovers and Grassroots Power Platforms",
      desc: "High energy stages that elevate emerging voices, connect talent with opportunity and position the next generation at the centre of economic and social transformation."
    }
  ];

  return <main className="min-h-screen w-full selection:bg-[#e30e04] selection:text-white font-[Kontora,sans-serif] overflow-x-hidden bg-[#ffffff] text-[#000000] flex flex-col justify-between">
      <Header />
      
      <div className="flex-grow">
        {/* Section 1: Hero Section */}
        <section id="top" className="relative min-h-screen w-full overflow-hidden pt-20 pb-28 md:pt-24 lg:pb-44 bg-[#000000] px-6 md:px-16 flex flex-col justify-center">
          <img src="/hero_backgrounds/media.jpg" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover object-center opacity-40 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/80 via-[#000000]/60 to-[#000000]/95" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")"
          }} aria-hidden="true" />
          <VerticalBorderLines isDark={true} />
          
          <div className="relative z-10 mx-auto flex min-h-[calc(100vh-10rem)] max-w-[1440px] flex-col justify-center px-6 md:px-16">
            <Reveal>
              <SectionTag>BOOK A SPEAKER</SectionTag>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-[clamp(2rem,6vw,4rem)] font-bold uppercase leading-[0.95] tracking-[-0.050em] text-[#ffffff] drop-shadow-[0_8px_34px_rgba(0,0,0,0.38)] mt-6 max-w-5xl">
                BOOK THE VOICE THAT COMMANDS THE ROOM, SHAPES DECISIONS AND MOVES YOUR INSTITUTION FORWARD.
              </h1>
            </Reveal>
            <motion.div aria-hidden="true" initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }} transition={{ delay: 1.0, duration: 0.74, ease: 'easeOut' }} className="mt-5 h-[3px] w-28 origin-left bg-[#e30e04] md:mt-7 md:w-40" />
            <div className="mt-8 flex max-w-[800px] flex-col gap-3">
              <Reveal delay={0.3}>
                <p className="text-[15px] font-normal leading-[1.6] text-[#ffffff]/80 drop-shadow-[0_6px_22px_rgba(0,0,0,0.45)] md:text-[17px] md:leading-[1.65]">
                  Partner with The Speakers Firm™ to secure influential speakers and exceptional talent who transform important moments into strategic influence, measurable impact and enduring institutional value. Make your next platform impossible to ignore.
                </p>
              </Reveal>
              <Reveal delay={0.4} className="mt-6">
                <motion.a href="#brief" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#e30e04] px-6 py-3 text-[12px] font-bold uppercase tracking-[0.1em] text-white transition-all hover:bg-white hover:text-black">
                  <span>Start Booking Process</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </motion.a>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Section 2: Clients & Partnerships */}
        <section className="relative py-16 md:py-24 lg:py-32 px-6 md:px-16" style={{ backgroundColor: COLORS.offWhite }}>
          <VerticalBorderLines isDark={false} />
          <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-16">
            <SectionTag>CLIENTS &amp; PARTNERSHIPS</SectionTag>
            <Reveal>
              <h2 className="mt-6 text-[clamp(1.8rem,5vw,3rem)] font-bold uppercase leading-[0.95] tracking-[-0.04em] text-[#000000] max-w-4xl">
                WE PARTNER WITH BRANDS THAT DO NOT SIMPLY JOIN THE CONVERSATION. THEY OWN THE ROOM.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-[16px] md:text-[18px] leading-relaxed text-black/80 max-w-5xl font-medium">
                Our clients are market makers, movement builders and institutional powerhouses, including global corporations, government institutions, multinationals, foundations, nonprofit organisations and leading agencies that refuse to settle for visibility without value or conversation without consequence.
              </p>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 border-t border-black/10 pt-12">
              <Reveal delay={0.2} className="space-y-4">
                <h3 className="text-lg font-bold uppercase tracking-wider text-[#e30e04]">Beyond Events</h3>
                <p className="text-sm leading-relaxed text-[#686869]">
                  They are not simply staging events. They are strengthening brands, shaping markets, transforming institutional cultures and building legacies that influence the future of leadership.
                </p>
              </Reveal>
              <Reveal delay={0.3} className="space-y-4">
                <h3 className="text-lg font-bold uppercase tracking-wider text-[#e30e04]">More Than Speakers</h3>
                <p className="text-sm leading-relaxed text-[#686869]">
                  They choose The Speakers Firm™ because we deliver more than speakers. We provide influential thought leaders, exceptional talent, strategic thinkers and catalysts for transformation who command attention, challenge conventional thinking, and generate momentum that extends far beyond the room.
                </p>
              </Reveal>
              <Reveal delay={0.4} className="space-y-4">
                <h3 className="text-lg font-bold uppercase tracking-wider text-[#e30e04]">Together We Move</h3>
                <p className="text-sm leading-relaxed text-[#686869]">
                  WE PROVIDE THE VOICES. YOU CREATE THE MOMENT. TOGETHER, WE MOVE INSTITUTIONS. Influential speakers. Exceptional talent. High impact formats that shape conversations, inspire decisive action and deliver measurable institutional value.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Section 3: High Impact Formats */}
        <section className="relative py-16 md:py-24 lg:py-32 px-6 md:px-16 bg-[#000000] text-white">
          <VerticalBorderLines isDark={true} />
          <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-16">
            <SectionTag>ENGAGEMENT FORMATS</SectionTag>
            <Reveal>
              <h2 className="mt-6 text-[clamp(1.8rem,5vw,3rem)] font-bold uppercase leading-[0.95] tracking-[-0.04em] text-white max-w-5xl">
                HIGH IMPACT SPEAKER AND TALENT FORMATS THAT MOVE LEADERS, CAPITAL AND INSTITUTIONS
              </h2>
            </Reveal>
            
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 text-[#AFB0B0] text-sm leading-relaxed border-b border-white/10 pb-12">
              <Reveal delay={0.1}>
                <p className="text-base font-semibold text-white">
                  This is more than speaker programming. It is strategic influence, curated with precision, deployed with purpose and aligned with your desired outcomes.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p>
                  The Speakers Firm™ provides renowned thought leaders, industry experts, facilitators and exceptional talent for CXOs, boards, governments, multinationals, foundations and purpose driven organisations. From the main stage to the boardroom, we strategically match the right voice, expertise and engagement format to your audience, institutional priorities and commercial objectives. We transform critical conversations into leadership alignment, stakeholder confidence, investment opportunities, and decisive action.
                </p>
              </Reveal>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {formats.map((f, i) => (
                <Reveal key={f.num} delay={i * 0.05} className="group flex flex-col justify-between border border-white/10 bg-white/[0.02] p-6 rounded-[18px] hover:border-[#e30e04] hover:bg-white/[0.04] transition-all duration-300">
                  <div>
                    <span className="text-sm font-bold text-[#e30e04] block mb-4">FORMAT 0{f.num}</span>
                    <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-3 group-hover:text-[#e30e04] transition-colors">{f.title}</h3>
                    <p className="text-xs leading-relaxed text-[#AFB0B0]">{f.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Booking Form & Advisory */}
        <section id="brief" className="relative py-16 md:py-24 lg:py-32 px-6 md:px-16" style={{ backgroundColor: COLORS.offWhite }}>
          <VerticalBorderLines isDark={false} />
          <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-16">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1.8fr] lg:gap-20">
              <div>
                <SectionTag>STRATEGIC PARTNERSHIP</SectionTag>
                <Reveal>
                  <h2 className="mt-6 text-[clamp(1.8rem,5vw,2.5rem)] font-bold uppercase leading-[0.95] tracking-[-0.04em] text-black">
                    MORE THAN A SPEAKER. MORE THAN AN EVENT. A STRATEGIC GROWTH PARTNERSHIP.
                  </h2>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="mt-6 text-sm leading-relaxed text-[#686869]">
                    If you are serious about influence, impact and long term institutional positioning, The Speakers Firm™ is more than a service provider. We are your strategic partner and force multiplier, transforming every engagement into an influential platform that strengthens your brand, advances your objectives and creates value beyond the room.
                  </p>
                </Reveal>
                <Reveal delay={0.2}>
                  <p className="mt-4 text-sm leading-relaxed text-[#686869]">
                    Whether you are convening leaders, shaping policy, mobilising capital, strengthening stakeholder trust or advancing transformation, we will curate the right speaker, talent and format to deliver against your strategic and commercial priorities.
                  </p>
                </Reveal>
                
                <div className="mt-8 border-l-4 border-[#e30e04] pl-6 py-2">
                  <p className="text-base font-bold uppercase text-[#e30e04] tracking-wider mb-2">PARTNER WITH US</p>
                  <p className="text-sm font-semibold italic leading-relaxed text-[#212121]">
                    "PARTNER WITH US TO TURN THE RIGHT VOICE INTO LASTING IMPACT. Book the right voice. Command the room. Influence decisions. Move institutions. Create lasting impact."
                  </p>
                </div>

                <div className="mt-8 rounded-2xl bg-black/5 border border-black/10 p-6 space-y-3">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#e30e04]">DIRECT BOARD DESK</p>
                  <p className="text-xs leading-relaxed text-[#686869]">For priority booking coordination or private war room facilitation:</p>
                  <div className="flex flex-col gap-1.5 pt-2">
                    <a href="mailto:booking@thespeakersfirm.co.za" className="text-sm font-bold text-black hover:text-[#e30e04] transition-colors">booking@thespeakersfirm.co.za</a>
                    <a href="mailto:info@thespeakersfirm.co.za" className="text-sm font-bold text-black hover:text-[#e30e04] transition-colors">info@thespeakersfirm.co.za</a>
                  </div>
                </div>
              </div>

              <div>
                <SpeakerBookingForm speakerName={speakerInfo.name} speakerRef={speakerInfo.ref} />
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>;
}
