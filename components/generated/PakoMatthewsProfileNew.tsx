"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { 
  Quote, 
  ArrowRight, 
  Mic, 
  Users, 
  Compass, 
  Award, 
  Sparkles, 
  Activity, 
  CheckCircle2, 
  GraduationCap, 
  Brain, 
  HeartHandshake 
} from "lucide-react";
import { 
  SpeakerProfileTemplate, 
  SpeakerCredential, 
  SpeakerStrategicTheme, 
  SpeakerSocialProofLogo 
} from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections } from "./ProfileAdditionalSectionsOthers";

const SECTION_TAG_CLASS = "inline-flex items-center border border-l-[4px] px-4 py-2 text-[12px] font-bold uppercase tracking-[0.12em] shadow-none";
const SECTION_TAG_STYLE: React.CSSProperties = {
  backgroundColor: "#000000",
  borderColor: "#000000",
  borderLeftColor: "#e30e04",
  color: "#ffffff"
};

const VerticalBorderLines = ({ isDark = true }: { isDark?: boolean }) => {
  const borderColor = isDark ? "#393939" : "#C7C7C8";
  const capColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-20" aria-hidden="true">
      <div className="h-full mx-auto max-w-[1440px] relative px-6 md:px-16">
        <div className="absolute left-6 md:left-16 top-0 bottom-0 w-[1px]" style={{ backgroundColor: borderColor }}>
          <div className="absolute -top-[3.5px] left-1/2 -translate-x-1/2 w-[7px] h-[7px]" style={{ backgroundColor: capColor }} />
        </div>
        <div className="absolute right-6 md:right-16 top-0 bottom-0 w-[1px]" style={{ backgroundColor: borderColor }}>
          <div className="absolute -top-[3.5px] left-1/2 -translate-x-1/2 w-[7px] h-[7px]" style={{ backgroundColor: capColor }} />
        </div>
      </div>
    </div>
  );
};

const CREDENTIAL_BADGES: SpeakerCredential[] = [
  {
    id: "wits-mba",
    label: "MBA, Wits Business School",
    subtitle: "University of the Witwatersrand executive business strategy and organizational leadership."
  },
  {
    id: "bcom-is",
    label: "BCom Information Systems",
    subtitle: "Over three decades corporate career spanning technology systems and partner management."
  },
  {
    id: "exec-coach",
    label: "Executive Leadership Coach",
    subtitle: "A decade coaching executives, senior directors, and leadership teams across public and private sectors."
  },
  {
    id: "tedx-speaker",
    label: "TEDx & Keynote Speaker",
    subtitle: "Featured on TEDxJohannesburg / TheRedCircle on clear communication and emotional intelligence."
  }
];

const STRATEGIC_THEMES: SpeakerStrategicTheme[] = [
  {
    id: "theme-phoenix-project",
    number: "01",
    title: "The Phoenix Project",
    copy: "Reinventing Yourself Without Losing Yourself. Change is inevitable; losing yourself in the process doesn't have to be. In this deeply personal and thought-provoking keynote, Pako explores what it means to rebuild after disappointment, transition, loss, career change, and personal adversity. Audiences leave with practical insights on resilience, identity, and the courage to create a leadership journey true to who they are."
  },
  {
    id: "theme-invisible-leader",
    number: "02",
    title: "The Invisible Leader",
    copy: "The Hidden Behaviours That Quietly Shape Leadership. The greatest influence leaders have often comes from behaviours they do not realise they are demonstrating. This keynote explores the subtle habits, unconscious cues, and psychological blind spots that quietly dictate trust, corporate culture, and team effectiveness."
  },
  {
    id: "theme-leading-through-change",
    number: "03",
    title: "Leading Through Change",
    copy: "Leading Yourself Before You Lead Others. Helping leaders navigate uncertainty, complexity, and rapid organizational change while remaining grounded, emotionally intelligent, and purpose-driven under high-pressure boardroom conditions."
  },
  {
    id: "theme-eq-leadership",
    number: "04",
    title: "Emotionally Intelligent Leadership",
    copy: "The Conversations Great Leaders Don't Avoid. Exploring the pivotal role of emotional intelligence, courageous dialogue, and psychological safety in building resilient, cohesive, and high-performing executive teams."
  },
  {
    id: "theme-leader-within",
    number: "05",
    title: "The Leader Within",
    copy: "Sustainable Leadership Starts on the Inside. Leadership begins with self-awareness. This keynote unpacks how leaders build enduring resilience, authenticity, and peak performance without sacrificing their personal wellbeing or burning out."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Leadership has never been about having all the answers. It begins by asking better questions.",
  "Pako Matthews is an Executive Leadership Coach, Facilitator, and Speaker with more than three decades of experience spanning business strategy, leadership development, organisational transformation, and executive coaching.",
  "After building a successful corporate career in information systems, business strategy, and partner management, Pako followed her passion for developing people and has spent the past decade coaching executives, senior leaders, and leadership teams across the public and private sectors.",
  "She is known for creating reflective, psychologically safe spaces where leaders are challenged to think differently, lead more intentionally, and navigate complexity with greater confidence. Her style combines strategic insight, warmth, authenticity, and practical wisdom, leaving audiences inspired as well as equipped with tools they can immediately apply in their everyday roles.",
  "Organisations value Pako's ability to combine strategic thinking with genuine human connection. Rather than providing quick fixes, she equips leaders with the mindset and tools to lead themselves and others with courage, authenticity, and intention."
];

const SOCIAL_PROOF_LOGOS: SpeakerSocialProofLogo[] = [
  { id: "wits", name: "WITS BUSINESS SCHOOL" },
  { id: "tedx", name: "TEDX JOHANNESBURG" },
  { id: "the-red-circle", name: "THE RED CIRCLE" },
  { id: "the-phoenix-project", name: "THE PHOENIX PROJECT" },
  { id: "tsf", name: "THE SPEAKERS FIRM" }
];

const ENGAGEMENT_FORMATS = [
  {
    icon: Compass,
    title: "Executive Coaching & Presence",
    desc: "One-on-one executive development for senior directors navigating high-stakes career transitions, strategic alignment, and personal leadership presence."
  },
  {
    icon: Mic,
    title: "Transformational Keynotes",
    desc: "Inspiring addresses on self-reinvention, emotional intelligence, authentic leadership, and resilient adaptability in changing business climates."
  },
  {
    icon: Brain,
    title: "Psychological Safety & EQ",
    desc: "Workshops guiding management teams on cultivating high-trust environments, emotional agility, and navigating difficult conversations."
  },
  {
    icon: Sparkles,
    title: "Women in Leadership",
    desc: "Empowering female leaders to navigate systemic corporate dynamics, overcome internal barriers, and build authentic executive influence."
  },
  {
    icon: Users,
    title: "Leadership Team Facilitation",
    desc: "Facilitating executive retreats, strategic dialogue, and board alignment sessions that turn complex group dynamics into cohesive strategic execution."
  },
  {
    icon: Activity,
    title: "Enneagram in Leadership",
    desc: "Applying the Enneagram framework to deepen self-awareness, decode interpersonal tensions, and foster high-empathy leadership cultures."
  }
];


export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Pako Matthews"
      speakerTitle=""
      speakerDesignation="Executive Leadership Coach, Speaker, Facilitator"
      speakerRole="Helping leaders navigate change with courage, clarity and authenticity."
      speakerRef="TSF-PM-01"
      heroBackgroundImage="/speakers/Pako Matthews/Pako-Matthews-The-Speakers-Firm.jpg"
      heroMobileBackgroundImage="/speakers/Pako Matthews/Pako-Matthews-The-Speakers-Firm-mobile.jpg"
      heroImagePosition="object-top"
      biographyImage="/speakers/Pako Matthews/Pako-Matthews-The-Speakers-Firm2.jpg"
      bioHook="“Leadership is not about having all the answers. It is about creating the conversations that help people discover better ones.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
    >
      {/* 1. Signature Keynotes & Speaking Themes */}
      <section id="speaking-themes" className="relative w-full border-t border-[#333333] bg-[#000000] text-[#ffffff] py-16 md:py-24">
        <VerticalBorderLines isDark={true} />
        <div className="mx-auto max-w-[1440px] px-6 md:px-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 max-w-3xl"
          >
            <div className={SECTION_TAG_CLASS} style={SECTION_TAG_STYLE}>
              <span>SIGNATURE THEMES</span>
            </div>
            <h2 className="mt-6 text-[clamp(2.15rem,6vw,3.75rem)] font-bold uppercase leading-[0.95] tracking-[-0.04em] text-white">
              LEADERSHIP &amp; REINVENTION <span className="text-[#e30e04]">KEYNOTES.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#AFB0B0] sm:text-lg">
              Combining strategic depth, neuroscience-backed emotional intelligence, and lived wisdom to empower leaders through transformative change.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {STRATEGIC_THEMES.map((theme, idx) => (
              <motion.article
                key={theme.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative flex flex-col justify-between rounded-[22px] border border-[#333333] bg-[#0A0A0A] p-7 md:p-8 transition-all duration-300 hover:border-[#e30e04] hover:bg-[#111111]"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[#222222] pb-4 mb-5">
                    <span className="text-xs font-bold tracking-[0.2em] text-[#e30e04] uppercase">
                      THEME {theme.number}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-[#e30e04]/40 group-hover:bg-[#e30e04] transition-colors" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold uppercase leading-snug tracking-[-0.02em] text-white group-hover:text-[#e30e04] transition-colors">
                    {theme.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-[#AFB0B0] font-light">
                    {theme.copy}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#222222] flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-[0.1em] text-white/50">
                    Keynote &amp; Facilitation
                  </span>
                  <ArrowRight className="h-4 w-4 text-[#e30e04] transform transition-transform group-hover:translate-x-1" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Coaching & Facilitation Areas / Engagement Formats */}
      <section id="coaching-formats" className="relative w-full border-t border-[#333333] bg-[#000000] text-[#ffffff] py-16 md:py-24">
        <VerticalBorderLines isDark={true} />
        <div className="mx-auto max-w-[1440px] px-6 md:px-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 max-w-3xl"
          >
            <div className={SECTION_TAG_CLASS} style={SECTION_TAG_STYLE}>
              <span>ENGAGEMENT FORMATS</span>
            </div>
            <h2 className="mt-6 text-[clamp(2.15rem,6vw,3.75rem)] font-bold uppercase leading-[0.95] tracking-[-0.04em] text-white">
              COACHING &amp; FACILITATION <span className="text-[#e30e04]">EXPERTISE.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#AFB0B0] sm:text-lg">
              Tailored interventions spanning executive boardrooms, women&apos;s leadership retreats, management summits, and national conferences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ENGAGEMENT_FORMATS.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="rounded-[22px] border border-[#333333] bg-[#0A0A0A] p-7 transition-all duration-300 hover:border-[#e30e04]/70"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black border border-white/10 text-[#e30e04]">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-lg font-bold uppercase leading-snug tracking-[-0.02em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#AFB0B0] font-light">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Why Organisations Work With Pako */}
      <section id="why-work-with-pako" className="relative w-full border-t border-[#333333] bg-[#000000] text-[#ffffff] py-16 md:py-24">
        <VerticalBorderLines isDark={true} />
        <div className="mx-auto max-w-[1440px] px-6 md:px-16 relative z-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6"
            >
              <div className={SECTION_TAG_CLASS} style={SECTION_TAG_STYLE}>
                <span>VALUE PROPOSITION</span>
              </div>
              <h2 className="mt-6 text-[clamp(2.15rem,6vw,3.75rem)] font-bold uppercase leading-[0.95] tracking-[-0.04em] text-white">
                WHY LEADERS WORK WITH <span className="text-[#e30e04]">PAKO.</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[#AFB0B0] sm:text-lg font-light">
                Organisations value Pako&apos;s rare ability to combine rigorous strategic thinking with genuine human warmth and psychological depth. Rather than offering superficial formulas, she equips leaders with the mindset and tools to lead themselves and others with courage, authenticity, and intention.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#e30e04] shrink-0 mt-0.5" />
                  <p className="text-sm text-[#AFB0B0] font-light"><strong className="text-white font-semibold">Psychological Safety:</strong> Creating reflective environments where leaders openly confront blind spots.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#e30e04] shrink-0 mt-0.5" />
                  <p className="text-sm text-[#AFB0B0] font-light"><strong className="text-white font-semibold">Immediate Applicability:</strong> Practical toolkits that translate into immediate boardroom execution.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#e30e04] shrink-0 mt-0.5" />
                  <p className="text-sm text-[#AFB0B0] font-light"><strong className="text-white font-semibold">Sustainable Performance:</strong> Championing resilience and emotional intelligence without executive burnout.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 rounded-[26px] border border-[#333333] bg-[#0A0A0A] p-8 md:p-12 relative overflow-hidden"
            >
              <Quote className="h-12 w-12 text-[#e30e04]/20 absolute top-8 right-8" />
              <div className="relative z-10">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e30e04]">
                  Guiding Philosophy
                </span>
                <blockquote className="mt-4 text-xl sm:text-2xl font-light italic leading-relaxed text-white">
                  “Change is inevitable. Losing yourself in the process doesn&apos;t have to be. Leadership begins by asking better questions.”
                </blockquote>
                <div className="mt-8 pt-6 border-t border-[#222222]">
                  <strong className="block text-base font-bold uppercase tracking-wider text-white">
                    Pako Matthews
                  </strong>
                  <span className="text-xs uppercase tracking-widest text-[#AFB0B0]">
                    MBA, BCom IS · Executive Leadership Coach &amp; Facilitator
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Experience Reel */}
      <ProfileAdditionalSections 
        speakerId="pako-matthews" 
        customIntroText=""
        customGallery={[]}
        customVideos={[
          {
            id: "pako-video-1",
            label: "Life Coaching Tips for Clear Communication | Pako Matthews | TEDxJohannesburg",
            youtubeId: "KXXL3bkTE4M"
          }
        ]}
      />

      {/* 5. Booking Call to Action */}
      <section id="cta-banner" className="relative w-full border-t border-[#333333] bg-[#000000] text-[#ffffff] py-16 md:py-24">
        <VerticalBorderLines isDark={true} />
        <div className="mx-auto max-w-[1440px] px-6 md:px-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[22px] border border-[#333333] bg-[linear-gradient(135deg,#0A0A0A_0%,#000000_100%)] p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#e30e04]">
                Booking &amp; Engagement
              </span>
              <h3 className="mt-2 text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl">
                Ready to invite Pako Matthews to your event?
              </h3>
              <p className="mt-2 text-sm text-[#AFB0B0] max-w-xl font-light">
                Brief The Speakers Firm today. We curate executive coaching, masterclass facilitation, and keynote talent recommendations within 24 hours.
              </p>
            </div>
            <motion.a
              href="#booking-form"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex shrink-0 rounded-full border border-white/20 p-[2px]"
              style={{ borderColor: "rgba(255, 255, 255, 0.18)" }}
            >
              <span className="flex flex-1 items-center justify-center gap-3 rounded-full bg-[#000000] px-6 py-4 text-[12px] font-bold uppercase tracking-[0.1em] text-white hover:bg-[#e30e04] transition-colors">
                <span>Book Pako Matthews</span>
                <ArrowRight className="h-4 w-4" />
              </span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </SpeakerProfileTemplate>
  );
};
