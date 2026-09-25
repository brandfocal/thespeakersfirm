"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Star, Quote, ArrowRight, CheckCircle2, Mic, Users, Compass, BookOpen, Award, Sparkles } from "lucide-react";
import { SpeakerProfileTemplate, SpeakerCredential, SpeakerStrategicTheme, SpeakerSocialProofLogo } from "./SpeakerProfileTemplate";

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
    id: "mrg-consulting",
    label: "Founder & CEO, MRG Consulting",
    subtitle: "Over three decades leading strategic management, governance and organizational development."
  },
  {
    id: "neurocoach-mastery",
    label: "Certified NeuroCoach Mastery Coach",
    subtitle: "Neuro Coach Institute (2023), Certified NLP Practitioner & mBIT Practitioner (2024)."
  },
  {
    id: "nsg-facilitator",
    label: "Accredited Executive Facilitator",
    subtitle: "National School of Government accredited facilitator & University of Fort Hare ETD Practitioner."
  },
  {
    id: "broadcaster-awards",
    label: "20+ Years Broadcaster & Storyteller",
    subtitle: "Three consecutive years Best Presenter winner; SAFM and SABC radio drama and book reading artist."
  }
];

const STRATEGIC_THEMES: SpeakerStrategicTheme[] = [
  {
    id: "theme-people-pleasing",
    number: "01",
    title: "The People-Pleasing Trap",
    copy: "How identity, fear of rejection and the need for approval quietly limit leaders — and how to recover an authentic voice."
  },
  {
    id: "theme-father-wound",
    number: "02",
    title: "The Father Wound and the Search for Identity",
    copy: "A lived-experience conversation about absence, belonging, reconciliation and breaking generational patterns."
  },
  {
    id: "theme-family-stops-with-me",
    number: "03",
    title: "It Runs in the Family, but It Stops with Me",
    copy: "How individuals and leaders interrupt inherited dysfunction and choose a different legacy."
  },
  {
    id: "theme-leading-change",
    number: "04",
    title: "Leading Change Without Losing the Human Being",
    copy: "A practical approach to organisational transformation that honours culture, emotion, dignity and performance."
  },
  {
    id: "theme-strategy-service",
    number: "05",
    title: "From Strategy to Service",
    copy: "Turning plans, governance and performance systems into visible value for citizens, customers and communities."
  },
  {
    id: "theme-burnout",
    number: "06",
    title: "Burnout: When Expenditure Exceeds Replenishment",
    copy: "Recognising depletion, rebuilding boundaries and returning to sustainable effectiveness."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Simphiwe Gwana is an accomplished executive leader, strategic management specialist, governance practitioner and accredited facilitator with more than three decades of experience across public, private, developmental and non-profit environments. He is the Founder and Chief Executive Officer of MRG Consulting (Pty) Ltd, through which he provides management consulting, organisational development, facilitation and personal development services.",
  "His career spans strategic planning, organisational transformation, performance management, policy development, programme and project management, environmental management, occupational health and safety, transport and logistics, stakeholder engagement, broadcasting and leadership development. He has advised and facilitated for government departments, municipalities, state institutions, educational organisations, private companies, small businesses and community-based organisations.",
  "He is particularly effective in rooms where leaders must move beyond discussion into alignment and execution. His facilitation style combines structured thinking, critical inquiry, practical tools and strong audience connection. He is equally at home addressing an executive strategy retreat, facilitating a management-development programme, moderating a high-level dialogue, coaching an individual leader or engaging a national radio audience.",
  "Behind Simphiwe’s professional profile is a deeply human story. After a 50-year search for his father, he experienced reconciliation when he was 50 and his father was 84. The restored relationship, including a long-awaited embrace and five meaningful years together, transformed his understanding of identity, confidence, forgiveness and belonging. That journey gives him authentic authority to speak about fatherlessness, the search for identity, the people-pleasing trap, inherited family patterns and the courage required to heal. His message does not romanticise pain; it shows audiences how the hardest chapter can become a source of wisdom without becoming the title of their lives.",
  "A former military veteran, pastor, entrepreneur, mentor and community builder, he carries a strong sense of service, sacrifice and legacy. In media and broadcasting, Simphiwe has built a career spanning more than two decades, recognized as Best Presenter in three consecutive years, with work across the South African Broadcasting Corporation (SABC) and SAFM radio drama and book readings. He is also the creator of The Voice Behind the Books and founder of The Home of Human Stories—platforms that use voice, conversation and storytelling to preserve memory, honour dignity and help people recognise the meaning within their own lives."
];

const SOCIAL_PROOF_LOGOS: SpeakerSocialProofLogo[] = [
  { id: "mrg", name: "MRG CONSULTING" },
  { id: "nsg", name: "NATIONAL SCHOOL OF GOVERNMENT" },
  { id: "safm", name: "SAFM RADIO" },
  { id: "sabc", name: "SABC" },
  { id: "fort-hare", name: "UNIVERSITY OF FORT HARE" },
  { id: "neurocoach", name: "NEURO COACH INSTITUTE" }
];

const ENGAGEMENT_FORMATS = [
  {
    icon: Compass,
    title: "Executive Facilitation & Strategy Retreats",
    desc: "Facilitating boardroom reviews, strategic alignment, annual performance plans, and stakeholder alignment that moves leaders from discussion into execution."
  },
  {
    icon: Mic,
    title: "Keynote & Inspirational Addresses",
    desc: "Translating lived adversity, identity, the search for purpose, and leadership courage into unforgettable keynote experiences."
  },
  {
    icon: Award,
    title: "Leadership & Governance Programmes",
    desc: "Accredited public-sector and corporate training spanning good governance, policy implementation, risk management, and service-delivery improvement."
  },
  {
    icon: Sparkles,
    title: "NeuroCoaching & Personal Mentorship",
    desc: "Certified NeuroCoach Mastery and mBIT interventions guiding leaders through transitions, boundaries, emotional intelligence, and sustainable resilience."
  },
  {
    icon: Users,
    title: "Conference Moderation & Master of Ceremonies",
    desc: "High-level panel direction and event facilitation combining broadcast polish, emotional warmth, and sharp intellectual rigour."
  },
  {
    icon: BookOpen,
    title: "Storytelling, Media & Culture Preservation",
    desc: "Creator of The Voice Behind the Books and founder of The Home of Human Stories, using the spoken word to honour human dignity."
  }
];

const TESTIMONIALS_DATA = [
  {
    id: "maurine-letsai",
    quote: "Listening to the SAFM reading of The Invisible People by Phuthuma Nhleko was a deeply moving experience for me. It was my first time listening to the segment, and I was immediately captivated by the exceptional way in which the reader, Simphiwe Gwana, brought the book to life. Simphiwe did far more than simply read the author’s words—he embodied the story. Through the emotion, rhythm and vibration of his voice, he expressed the heart and intention of the author with remarkable sensitivity. His dramatic interpretation created such powerful visualisation that I could see the characters, feel their emotions and understand the meaning behind the written words. Simphiwe Gwana possesses the rare gift of transforming written words into a living experience and giving both the author and the characters an authentic voice. He does not merely read a book—he awakens it, allowing the listener to see with the imagination, feel with the heart and connect deeply with the author’s message.",
    name: "Ms Maurine Letsai",
    role: "Broadcasting Reviewer & Listener",
    context: "SAfm Reading of 'The Invisible People' by Phuthuma Nhleko"
  },
  {
    id: "jerry-dlepu",
    quote: "To the reader, thank you for doing such a magnificent job. Your voice, expression, emotion, and interpretation of the words made the story come alive in a way that exceeded my expectations. You captured the heart and message of the book beautifully, and I could not have asked for a better reading. I believe the reading was not only entertaining, but also educational. Most importantly, it allowed the message and lessons within the book to reach a much wider audience—people who may never have had the opportunity to pick up the book themselves. As an author, there is no greater reward than knowing that your work is being heard, appreciated, and making an impact. Thank you for helping my words travel further than the pages of my book. I deeply appreciate it.",
    name: "Jerry Dlepu",
    role: "Author",
    context: "Author's Letter of Commendation for SAfm Book Broadcast"
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Simphiwe Gwana"
      speakerTitle=""
      speakerDesignation="Executive, Facilitator, Broadcaster, Coach, Storyteller"
      speakerRole=""
      speakerRef="TSF-SG-26"
      heroBackgroundImage="/speakers/Simphiwe Gwana/Simphiwe-Gwana-The-Speakers-Firm2.jpg"
      heroMobileBackgroundImage="/speakers/Simphiwe Gwana/Simphiwe-Gwana-The-Speakers-Firm-mobile.jpg"
      heroImagePosition="object-center"
      biographyImage="/speakers/Simphiwe Gwana/Simphiwe-Gwana-The-Speakers-Firm.jpg"
      bioHook="“He translates complex organisational realities into accessible, practical and emotionally intelligent conversations that challenge audiences to think, heal, lead and act differently.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
    >
      {/* 1. Signature Speaking Themes Section */}
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
              TRANSFORMATIVE <span className="text-[#e30e04]">CONVERSATIONS.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#AFB0B0] sm:text-lg">
              Simphiwe creates a room in which people recognise themselves, confront what must change, and leave with language for their next courageous step.
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
                className="group relative flex flex-col justify-between rounded-[22px] border border-[#333333] bg-[#0A0A0A] p-7 transition-all duration-300 hover:border-[#e30e04] hover:bg-[#111111]"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[#222222] pb-4 mb-5">
                    <span className="text-xs font-bold tracking-[0.2em] text-[#e30e04] uppercase">
                      THEME {theme.number}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-[#e30e04]/40 group-hover:bg-[#e30e04] transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold uppercase leading-snug tracking-[-0.02em] text-white group-hover:text-[#e30e04] transition-colors">
                    {theme.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-[#AFB0B0] font-light">
                    {theme.copy}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#222222] flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-[0.1em] text-white/50">
                    Keynote & Facilitation
                  </span>
                  <ArrowRight className="h-4 w-4 text-[#e30e04] transform transition-transform group-hover:translate-x-1" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Executive Facilitation & Engagement Formats */}
      <section id="engagement-formats" className="relative w-full border-t border-[#333333] bg-[#000000] text-[#ffffff] py-16 md:py-24">
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
              HOW TO ENGAGE <span className="text-[#e30e04]">SIMPHIWE.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#AFB0B0] sm:text-lg">
              Tailored interventions spanning boardrooms, national conferences, leadership faculties, and public service institutions.
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

      {/* 3. Official Testimonials & Client Commendations */}
      <section id="testimonials" className="relative w-full border-t border-[#333333] bg-[#000000] text-[#ffffff] py-16 md:py-24">
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
              <span>WHAT CLIENTS SAY</span>
            </div>
            <h2 className="mt-6 text-[clamp(2.15rem,6vw,3.75rem)] font-bold uppercase leading-[0.95] tracking-[-0.04em] text-white">
              TESTIMONIALS &amp; <span className="text-[#e30e04]">COMMENDATIONS.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#AFB0B0] sm:text-lg">
              Firsthand acclaim from authors, broadcast listeners, and partners on Simphiwe Gwana’s rare ability to awaken human stories and touch hearts.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {TESTIMONIALS_DATA.map((t, idx) => (
              <motion.article
                key={t.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="relative flex flex-col justify-between rounded-[26px] border border-[#333333] bg-[#0A0A0A] p-8 md:p-10 shadow-2xl transition-all duration-300 hover:border-[#e30e04]/80"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex gap-1.5 text-[#e30e04]" aria-label="5 star rating">
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                    </div>
                    <Quote className="h-8 w-8 text-white/15" />
                  </div>

                  <p className="text-base sm:text-[17px] font-light leading-[1.75] text-[#FFFFFF]/90 italic">
                    “{t.quote}”
                  </p>
                </div>

                <div className="mt-8 border-t border-[#222222] pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <strong className="block text-base font-bold uppercase tracking-wider text-white">
                      {t.name}
                    </strong>
                    <span className="block text-xs uppercase tracking-widest text-[#e30e04] font-semibold mt-1">
                      {t.role}
                    </span>
                  </div>
                  <span className="text-xs text-[#AFB0B0] sm:text-right font-light max-w-xs">
                    {t.context}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Call to action card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 rounded-[22px] border border-[#333333] bg-[linear-gradient(135deg,#0A0A0A_0%,#000000_100%)] p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#e30e04]">
                Booking &amp; Engagement
              </span>
              <h3 className="mt-2 text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl">
                Ready to invite Simphiwe to your event?
              </h3>
              <p className="mt-2 text-sm text-[#AFB0B0] max-w-xl font-light">
                Brief The Speakers Firm today. We curate executive and inspirational talent recommendations within 24 hours.
              </p>
            </div>
            <motion.a
              href="#booking-form"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex shrink-0 rounded-full border border-white/20 p-[2px]"
            >
              <span className="flex items-center gap-3 rounded-full bg-[#e30e04] px-7 py-4 text-[12px] font-bold uppercase tracking-[0.1em] text-white hover:bg-[#c00b03] transition-colors">
                <span>Book Simphiwe Gwana</span>
                <ArrowRight className="h-4 w-4" />
              </span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </SpeakerProfileTemplate>
  );
};
