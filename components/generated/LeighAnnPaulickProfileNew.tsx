"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { 
  Star, 
  Quote, 
  ArrowRight, 
  Mic, 
  Users, 
  Compass, 
  Award, 
  Sparkles, 
  Radio, 
  Activity, 
  CheckCircle2, 
  Calendar, 
  Tv, 
  GraduationCap 
} from "lucide-react";
import { 
  SpeakerProfileTemplate, 
  SpeakerCredential, 
  SpeakerStrategicTheme, 
  SpeakerSocialProofLogo 
} from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

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
    id: "broadcaster-30-years",
    label: "30+ Years Broadcasting & Journalism",
    subtitle: "SuperSport broadcaster across 5 Olympic Games, 2010 FIFA World Cup & 4 Grand Slams."
  },
  {
    id: "enhanced-pod",
    label: "Founder & Host: The Enhanced POD",
    subtitle: "Investigating emerging longevity, science, and the ideas shaping human performance & potential."
  },
  {
    id: "iin-health-coach",
    label: "Certified Health Coach & Physiology Fellow",
    subtitle: "IIN Certified Health Coach with Harvard Medical School HMX credentials in Genetics & Physiology."
  },
  {
    id: "human-movement-studies",
    label: "BA & BA (Hons) Human Movement Studies",
    subtitle: "Academic grounding in exercise science, human movement, and journalism."
  }
];

const STRATEGIC_THEMES: SpeakerStrategicTheme[] = [
  {
    id: "theme-built-to-adapt",
    number: "01",
    title: "Built to Adapt",
    copy: "Can humans keep up with the world we've created? Rather than treating adaptability as a corporate buzzword, this flagship keynote explores what human beings actually need to remain capable, curious, and effective when technology, AI, longer lives, and accelerating change reshape everything around us."
  },
  {
    id: "theme-power-of-experience",
    number: "02",
    title: "The Power of Experience",
    copy: "What if getting older isn't about losing capacity — but understanding it differently? Drawing on her own career evolution and competitive strength sport at 51, Leigh-Ann challenges assumptions about age, relevance, reinvention, and human capability at different life stages."
  },
  {
    id: "theme-questions-change-everything",
    number: "03",
    title: "The Questions That Change Everything",
    copy: "What happens when we stop accepting the question we've been given? Built around journalism's sharpest tool, this keynote explores how the questions we ask shape what we notice, investigate, and ultimately make possible in leadership, business, and innovation."
  },
  {
    id: "theme-human-performance-longevity",
    number: "04",
    title: "Human Performance for a Longer Life",
    copy: "An accessible exploration of what science teaches us about maintaining healthspan, strength, and cognitive capability across longer lives — translating complex medical, genetic, and physiological research into actionable daily practices."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Leigh-Ann Paulick is a journalist, broadcaster, moderator, and speaker with more than 30 years' experience in South African media. Her career began in journalism and evolved through radio and television broadcasting into interviewing, live moderation, storytelling, and programme development. Since joining SuperSport in 1998, she has worked across a wide range of sporting codes and some of the world's biggest sporting events, including five Olympic Games, the 2010 FIFA World Cup, and all four tennis Grand Slams.",
  "Today, Leigh-Ann's curiosity extends beyond sport into human performance, health, longevity, science, technology, and adaptability. Through The Enhanced POD, she interviews scientists, researchers, and practitioners, exploring emerging ideas and translating complex subjects into conversations that a mainstream audience can understand and engage with.",
  "Her particular strength lies in the combination of journalistic curiosity, rigorous preparation, live broadcasting experience, and an ability to connect with people. She asks good questions, finds the thread that matters, and helps audiences see familiar subjects differently.",
  "In her next chapter, Leigh-Ann brings together three decades of live media experience with a growing body of work exploring human performance, science, health, technology, and adaptability. Whether steering high-stakes executive dialogues or delivering an ideas-led keynote, she equips leaders and teams with strategies for resilience, adaptability, and composure under pressure."
];

const SOCIAL_PROOF_LOGOS: SpeakerSocialProofLogo[] = [
  { id: "supersport", name: "SUPERSPORT" },
  { id: "the-enhanced-pod", name: "THE ENHANCED POD" },
  { id: "harvard-hmx", name: "HARVARD MEDICAL SCHOOL HMX" },
  { id: "investec", name: "INVESTEC" },
  { id: "golf-rsa", name: "GOLFRSA" },
  { id: "metier", name: "METIER PRIVATE EQUITY" }
];

const ENGAGEMENT_FORMATS = [
  {
    icon: Mic,
    title: "Keynote Speaker",
    subtitle: "Human Adaptability & Potential",
    desc: "Ideas-led talks exploring human adaptability, experience, performance, and the changing world around us."
  },
  {
    icon: Compass,
    title: "Moderator & Facilitator",
    subtitle: "High-Level Executive Roundtables",
    desc: "Intelligent, well-researched moderation for conferences, panels, fireside conversations, executive roundtables, and thought-leadership events."
  },
  {
    icon: Users,
    title: "MC & Event Host",
    subtitle: "Corporate, Sporting & Cultural Events",
    desc: "Experienced live-event host bringing energy, polish, and genuine audience connection to corporate, sporting, and cultural occasions."
  },
  {
    icon: Radio,
    title: "Media & Communication Trainer",
    subtitle: "Executive Composure & Storytelling",
    desc: "Practical training in media interviews, communication, storytelling, and communicating complex ideas clearly under public scrutiny."
  },
  {
    icon: Activity,
    title: "Science & Human Performance Communicator",
    subtitle: "Translating Health & Longevity Research",
    desc: "A journalist's approach to making emerging science, health, and human-performance research accessible without oversimplifying it."
  }
];

const CAREER_PROOF = [
  {
    category: "Broadcasting Excellence",
    icon: Tv,
    items: [
      "More than 30 years in high-stakes journalism and live broadcasting",
      "Joined SuperSport in 1998, anchoring global sporting events",
      "Covered five Olympic Games and the 2010 FIFA World Cup",
      "All four tennis Grand Slams: Wimbledon, Roland Garros, US Open & Australian Open",
      "2018 FIH Hockey World Cup & 2019 Netball World Cup",
      "Absolute F1, women's professional golf, athletics, and major endurance events",
      "Producer and presenter of Supergirls; Voice of Pushing the Limits"
    ]
  },
  {
    category: "Selected MC & Hosting Highlights",
    icon: Award,
    items: [
      "Investec SA Women's Pro-Am — Host, 2023, 2024, 2025 & 2026",
      "GolfRSA Women in Golf Charter Breakfast — Host, 2025; MC, 2026",
      "Janine van Wyk '185' Book Launch — Host, 2026",
      "Sewells-MSXi NADA Business of the Year Awards — Master of Ceremonies, 2017",
      "Gsport Awards — MC & Host, 2015; Presenter, 2022",
      "SuperSport Women's Day & SA Open Women's Event — MC, 2014",
      "Cotlands Charity Ball & Loerie Awards — Master of Ceremonies"
    ]
  },
  {
    category: "Corporate Training & Education",
    icon: GraduationCap,
    items: [
      "Metier Private Equity — Health Workshop (2026) & Media Training (2022)",
      "Lions Cricket Union — Media Training (2015)",
      "IIN Certified Health Coach & IIN Coaching Intensive Practicum",
      "Harvard Medical School HMX — Genetics & Physiology",
      "BA — Journalism & Human Movement Studies",
      "BA Honours — Human Movement Studies"
    ]
  }
];

const TESTIMONIALS_DATA = [
  {
    id: "golfrsa",
    quote: "Leigh-Ann Diedloff was an excellent MC for our GolfRSA Women in Golf Business Breakfast! Highly professional, polished, and genuinely inspiring throughout. She invested real time in researching our topic, which allowed her to deliver thoughtful, engaging content that significantly contributed to the event's success.",
    name: "GolfRSA",
    role: "National Golf Federation",
    context: "Women in Golf Charter Business Breakfast"
  },
  {
    id: "paul-botha",
    quote: "We thoroughly enjoyed Leigh-Ann's presentation on Health coaching. She was well prepared, articulate, engaging and demonstrated a strong knowledge of the topic.",
    name: "Paul Botha",
    role: "CEO, Metier Private Equity",
    context: "Executive Health Coaching & Corporate Wellness Workshop"
  }
];

const customMedia = [
  {
    id: "leigh-ann-art-1",
    headline: "Dr. Ben Coetsee: Longevity Medicine - What Athletes Know That You Can Use",
    publication: "The Enhanced Pod · Ep. 3",
    date: "2024",
    action: "Watch Episode",
    url: "https://www.youtube.com/watch?v=hEJeXIxwcSg",
    image: "/speakers/Leigh-Ann Paulick/Leigh-Ann-Paulick-The-Speakers-Firm4.jpg",
    caption: "Leigh-Ann investigates what peak athletic conditioning and longevity medicine offer to executive health."
  },
  {
    id: "leigh-ann-art-2",
    headline: "May 24th: The Day Sport Changes Forever?",
    publication: "The Enhanced Pod",
    date: "2024",
    action: "Watch Episode",
    url: "https://www.youtube.com/watch?v=qMYhN3XL1uo",
    image: "/speakers/Leigh-Ann Paulick/Leigh-Ann-Paulick-The-Speakers-Firm3.jpg",
    caption: "A critical inquiry into high-performance sport, regulations, and technological disruption."
  },
  {
    id: "leigh-ann-art-3",
    headline: "The Conversation We're Not Having | The Enhanced Pod Episode 1",
    publication: "The Enhanced Pod · Ep. 1",
    date: "2024",
    action: "Watch Episode",
    url: "https://www.youtube.com/watch?v=hnmqC-k84s0",
    image: "/speakers/Leigh-Ann Paulick/Leigh-Ann-Paulick-The-Speakers-Firm5.jpg",
    caption: "Launching The Enhanced POD: an open inquiry into longevity, human wonder, and the science of thriving."
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Leigh-Ann Paulick"
      speakerTitle=""
      speakerDesignation="Journalist, Broadcaster, Moderator, Speaker, Host"
      speakerRole="Making sense of the ideas shaping human performance and the future of how we live and work."
      speakerRef="TSF-LAP-01"
      heroBackgroundImage="/speakers/Leigh-Ann Paulick/Leigh-Ann-Paulick-The-Speakers-Firm.jpg"
      heroMobileBackgroundImage="/speakers/Leigh-Ann Paulick/Leigh-Ann-Paulick-The-Speakers-Firm-mobile.jpg"
      heroImagePosition="object-top"
      biographyImage="/speakers/Leigh-Ann Paulick/Leigh-Ann-Paulick-The-Speakers-Firm2.jpg"
      bioHook="“She asks the questions. She finds the story. She makes complex ideas accessible. And she helps audiences see what comes next differently.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="leigh-ann-paulick" customMedia={customMedia} />
      }
    >
      {/* 1. Signature Speaking Territories Section */}
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
              SIGNATURE SPEAKING <span className="text-[#e30e04]">TERRITORIES.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#AFB0B0] sm:text-lg">
              Translating curiosity, neuroscience, longevity, and three decades of high-stakes live broadcasting into transformative stage experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
                    Keynote &amp; Masterclass
                  </span>
                  <ArrowRight className="h-4 w-4 text-[#e30e04] transform transition-transform group-hover:translate-x-1" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 2. What Leigh-Ann Offers / Engagement Formats */}
      <section id="what-leigh-ann-offers" className="relative w-full border-t border-[#333333] bg-[#000000] text-[#ffffff] py-16 md:py-24">
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
              <span>WHAT LEIGH-ANN OFFERS</span>
            </div>
            <h2 className="mt-6 text-[clamp(2.15rem,6vw,3.75rem)] font-bold uppercase leading-[0.95] tracking-[-0.04em] text-white">
              CORE CAPABILITIES &amp; <span className="text-[#e30e04]">FORMATS.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#AFB0B0] sm:text-lg">
              Tailored interventions for conferences, boardroom summits, panels, executive training, and live events.
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
                  <span className="block text-xs uppercase tracking-wider text-[#e30e04] font-semibold mt-1">
                    {item.subtitle}
                  </span>
                  <p className="mt-3 text-sm leading-relaxed text-[#AFB0B0] font-light">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Selected Career Proof & Track Record */}
      <section id="career-proof" className="relative w-full border-t border-[#333333] bg-[#000000] text-[#ffffff] py-16 md:py-24">
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
              <span>TRACK RECORD</span>
            </div>
            <h2 className="mt-6 text-[clamp(2.15rem,6vw,3.75rem)] font-bold uppercase leading-[0.95] tracking-[-0.04em] text-white">
              SELECTED CAREER <span className="text-[#e30e04]">PROOF.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#AFB0B0] sm:text-lg">
              Demonstrated authority across international broadcasting, premiere event hosting, executive training, and certified health science.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {CAREER_PROOF.map((block, idx) => {
              const IconComp = block.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="rounded-[22px] border border-[#333333] bg-[#0A0A0A] p-7 md:p-8 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black border border-white/10 text-[#e30e04]">
                        <IconComp className="h-5 w-5" />
                      </div>
                      <h3 className="text-base font-bold uppercase tracking-wider text-white">
                        {block.category}
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {block.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-3 text-sm text-[#AFB0B0] font-light">
                          <CheckCircle2 className="h-4 w-4 text-[#e30e04] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Experience Reel Section */}
      <ProfileAdditionalSections 
        speakerId="leigh-ann-paulick" 
        customIntroText="Watch Leigh-Ann Paulick in action: delivering broadcast poise, thought leadership, and master moderation."
        customGallery={[]}
        customVideos={[
          {
            id: "leigh-ann-video-1",
            label: "Leigh-Ann Paulick is a Professional Public Speaker and Presenter",
            youtubeId: "k19gXICHavY"
          }
        ]}
      />

      {/* 5. Official Testimonials & Client Commendations */}
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
              <span>TESTIMONIALS</span>
            </div>
            <h2 className="mt-6 text-[clamp(2.15rem,6vw,3.75rem)] font-bold uppercase leading-[0.95] tracking-[-0.04em] text-white">
              WHAT CLIENTS <span className="text-[#e30e04]">SAY.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#AFB0B0] sm:text-lg">
              Firsthand acclaim from corporate leaders and national sports organizations on Leigh-Ann Paulick&apos;s polish, preparation, and stage impact.
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

          {/* Call to action pill */}
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
                Ready to invite Leigh-Ann to your event?
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
              style={{ borderColor: "rgba(255, 255, 255, 0.18)" }}
            >
              <span className="flex flex-1 items-center justify-center gap-3 rounded-full bg-[#000000] px-6 py-4 text-[12px] font-bold uppercase tracking-[0.1em] text-white hover:bg-[#e30e04] transition-colors">
                <span>Book Leigh-Ann Paulick</span>
                <ArrowRight className="h-4 w-4" />
              </span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </SpeakerProfileTemplate>
  );
};
