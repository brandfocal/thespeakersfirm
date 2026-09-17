"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Award, Briefcase, Compass, GraduationCap, Leaf, ShieldCheck, Users } from "lucide-react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const SECTION_TAG_CLASS = "inline-flex items-center border border-l-[4px] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] sm:px-4 sm:text-[12px]";
const SECTION_TAG_STYLE: React.CSSProperties = {
  backgroundColor: "#000000",
  borderColor: "#000000",
  borderLeftColor: "#e30e04",
  color: "#ffffff"
};

const CREDENTIAL_BADGES = [
  {
    id: "zenande-leadership",
    label: "Managing Director, Zenande Leadership Consulting",
    subtitle: "Advising leaders and organisations to navigate complex institutional change with clarity and confidence."
  },
  {
    id: "former-dg",
    label: "Former Public Sector Director-General",
    subtitle: "Led both the Department of Environmental Affairs and the Department of Water and Forestry."
  },
  {
    id: "enneagram-coach",
    label: "Certified Coach & Integrative Enneagram Practitioner",
    subtitle: "Equipping executive teams and boards through emotional maturity and whole-person leadership."
  },
  {
    id: "board-governance",
    label: "Board Member & Strategic Advisor",
    subtitle: "South African Airways Board Member; former Chairperson of South African Tourism and SANParks."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "navigating-change",
    number: "Theme 01",
    title: "Navigating Change Between Government & Business",
    copy: "Bridging the gap between the public and private sectors to build resilient institutions, align strategic priorities, and lead transformative organisational change with clarity and confidence."
  },
  {
    id: "emotional-maturity",
    number: "Theme 02",
    title: "Emotional Maturity, the Enneagram & Whole-Person Leadership",
    copy: "Harnessing the Enneagram and emotional intelligence frameworks to help leaders understand themselves before leading others, cultivating patient, self-aware, and purpose-driven executive teams."
  },
  {
    id: "environmental-governance",
    number: "Theme 03",
    title: "Environmental Stewardship, Climate Strategy & Institutional Governance",
    copy: "Drawing on extensive experience as Director-General, SAA board member, and advisor to the Presidential Climate Commission and World Bank to guide robust governance, climate resilience, and sustainable policy."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Pam Yako has spent her career moving between two worlds that don't always talk to each other well: government and business, and finding what makes people and institutions actually work. Today she leads Zenande Leadership Consulting, a firm she built to help leaders and organizations navigate change with clarity and confidence.",
  "Her own leadership was forged in some of South Africa's toughest public-sector roles: as a Municipal Manager, and later as Director-General of both the Department of Environmental Affairs and the Department of Water and Forestry, where she helped shape the country's environmental laws and water security strategy. That grounding in public service still shapes how she works today, with a strong sense of purpose and a deep respect for the people affected by the decisions leaders make.",
  "As a coach, Pam is known for her warmth and her insistence on seeing the whole person. She draws on the Enneagram and her training in emotional maturity to help leaders understand themselves before asking them to lead others. It's an approach shaped by years of learning under respected international trainers, and it shows in how patiently she works with the executives, teams, and boards she supports.",
  "Pam has also stayed close to the causes she cares about most, particularly the environment. She has advised the Presidential Climate Commission, the World Bank, and Anglo American on climate strategy, and chaired the national panel that reviewed South Africa's policies on elephant, lion, leopard, and rhino management. She currently serves on the board of South African Airways and previously chaired South African Tourism and South African National Parks, where she is now helping shape its Vision 2040.",
  "She holds a B Com from Rhodes University and a Master's in Business Leadership from UNISA, and is a certified coach and accredited Integrative Enneagram Practitioner. When she's not consulting, she writes a bi-monthly blog reflecting on the leadership lessons she's picked up along the way."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "zenande", name: "ZENANDE LEADERSHIP" },
  { id: "saa", name: "SOUTH AFRICAN AIRWAYS" },
  { id: "satourism", name: "SOUTH AFRICAN TOURISM" },
  { id: "sanparks", name: "SANPARKS" },
  { id: "pcc", name: "PRESIDENTIAL CLIMATE COMMISSION" },
  { id: "worldbank", name: "THE WORLD BANK" },
  { id: "anglo", name: "ANGLO AMERICAN" },
  { id: "unisa", name: "UNISA" },
  { id: "rhodes", name: "RHODES UNIVERSITY" }
];

const CORE_COMPETENCIES = [
  "Executive & Boardroom Coaching",
  "Institutional Change Navigation",
  "Integrative Enneagram & Emotional Maturity",
  "Public & Private Sector Synergy",
  "Climate & Environmental Strategy",
  "Board Governance & Fiduciary Oversight",
  "Water Security & Natural Resource Policy",
  "Stakeholder Alignment & Strategy Execution"
];

const EXECUTIVE_EXPERIENCE = [
  {
    role: "Managing Director",
    organisation: "Zenande Leadership Consulting",
    period: "Present",
    description: "Leads an executive leadership advisory and coaching practice helping senior leaders, executive committees, and boards navigate complex institutional change with clarity and confidence."
  },
  {
    role: "Non-Executive Director & Board Member",
    organisation: "South African Airways (SAA)",
    period: "Present",
    description: "Serves on the board of South Africa's national carrier, contributing strategic governance, institutional turnaround oversight, and fiduciary stewardship."
  },
  {
    role: "Former Chairperson & Vision 2040 Advisory",
    organisation: "South African National Parks (SANParks)",
    period: "Board Leadership",
    description: "Previously chaired the SANParks board, driving biodiversity conservation and park governance, and currently contributes to shaping SANParks Vision 2040."
  },
  {
    role: "Former Chairperson of the Board",
    organisation: "South African Tourism",
    period: "Board Leadership",
    description: "Led the national tourism authority's board, fostering intergovernmental cooperation, international destination competitiveness, and governance integrity."
  },
  {
    role: "Strategic Climate & Environmental Advisor",
    organisation: "Presidential Climate Commission, World Bank & Anglo American",
    period: "Advisory Appointments",
    description: "Advised multilateral institutions, state bodies, and corporations on climate strategy, and chaired the national panel reviewing policies on elephant, lion, leopard, and rhino management."
  },
  {
    role: "Director-General",
    organisation: "Department of Environmental Affairs & Department of Water and Forestry",
    period: "Public Service",
    description: "Led national public service departments responsible for drafting and implementing South Africa's foundational environmental laws, natural resources protection, and water security strategy."
  }
];

const EDUCATION_CREDENTIALS = [
  {
    degree: "Master's in Business Leadership (MBL)",
    institution: "UNISA Graduate School of Business Leadership",
    year: "Postgraduate Degree"
  },
  {
    degree: "Bachelor of Commerce (B Com)",
    institution: "Rhodes University",
    year: "Undergraduate Degree"
  }
];

const PROFESSIONAL_DESIGNATIONS = [
  {
    title: "Accredited Integrative Enneagram Practitioner",
    institution: "Integrative Enneagram",
    detail: "Individual, team, and organizational dynamics profiling"
  },
  {
    title: "Certified Executive Coach",
    institution: "International Coaching Practice",
    detail: "Trained under respected international leadership educators"
  }
];

const customMedia = [
  {
    id: "yako-media-1",
    headline: "Rooted and Rising: Celebrating Young Women Leading Africa’s Future",
    publication: "Pamela Yako / Zenande Leadership",
    date: "24 Jun 2026",
    caption: "Pam Yako reflects on leadership lessons, mentorship, and empowering the next generation of resilient young women shaping Africa’s future across public and private sectors.",
    url: "https://pamyako.com/2026/06/24/rooted-and-rising-celebrating-young-women-leading-africas-future/",
    action: "Read Article",
    image: "/speakers/Pam%20Yako/Pam-Yako-The-Speakers-Firm3.jpg"
  },
  {
    id: "yako-media-2",
    headline: "Pam Yako: Out of Nurture Comes Leadership",
    publication: "Grocott's Mail",
    date: "07 Mar 2025",
    caption: "A comprehensive profile celebrating Pam Yako's journey from Rhodes alumna and public sector environmental stewardship to executive coaching and institutional governance.",
    url: "https://grocotts.ru.ac.za/2025/03/07/pam-yako-out-of-nurture-comes-leadership/",
    action: "Read Article",
    image: "/speakers/Pam%20Yako/Pam-Yako-The-Speakers-Firm2.jpg"
  },
  {
    id: "yako-media-3",
    headline: "Pam Yako Joins NSI Board",
    publication: "NSI News",
    date: "Board Announcement",
    caption: "Pam Yako joins the NSI Board, bringing decades of public sector stewardship, environmental strategy, and institutional governance expertise.",
    url: "https://nsi.org.za/news/pam-yako-joins-nsi-board/",
    action: "Read Article",
    image: "/speakers/Pam%20Yako/Pam-Yako-The-Speakers-Firm4.jpg"
  }
];

const customVideos = [
  {
    id: "pam-video-1",
    label: "PAM YAKO - Executive Profile & Keynote",
    youtubeId: "bFrK7oyTwZY"
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Pam Yako"
      speakerTitle=""
      speakerDesignation="Managing Director, Zenande Leadership Consulting"
      speakerRole="Former Director-General, Executive Coach, Board Member & Climate Strategist"
      speakerRef="TSF-PY-26"
      heroBackgroundImage="/speakers/Pam%20Yako/Pam-Yako-The-Speakers-Firm.jpg"
      heroMobileBackgroundImage="/speakers/Pam%20Yako/Pam-Yako-The-Speakers-Firm-mobile.jpg"
      heroImagePosition="object-top"
      biographyImage="/speakers/Pam%20Yako/Pam-Yako-The-Speakers-Firm5.jpg"
      bioHook="“Pam Yako has spent her career moving between two worlds that don't always talk to each other well: government and business, and finding what makes people and institutions actually work.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="pam-yako" customMedia={customMedia} />
      }
    >
      {/* Core Executive & Board Competencies */}
      <section className="relative bg-[#000000] px-4 py-12 text-white sm:px-6 md:px-16 md:py-16 border-t border-white/10" aria-labelledby="competencies-heading">
        <div className="mx-auto max-w-[1312px]">
          <div className="mb-10 max-w-3xl">
            <p className={`${SECTION_TAG_CLASS} mb-4 w-fit`} style={SECTION_TAG_STYLE}>
              <span>Executive Mastery</span>
            </p>
            <h2 id="competencies-heading" className="font-['Kontora',sans-serif] text-[clamp(1.75rem,5vw,3.25rem)] font-bold uppercase leading-[0.95] tracking-[-0.05em]">
              <span className="block text-[#FFFFFF]">Core Executive &amp;</span>
              <span className="block text-[#e30e04]">Board Competencies</span>
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CORE_COMPETENCIES.map((competency, idx) => (
              <div 
                key={idx}
                className="group flex flex-col justify-between rounded-[20px] border border-white/10 bg-[#0A0A0A] p-6 transition-all duration-300 hover:border-[#e30e04]/60 hover:bg-[#111111]"
              >
                <div className="flex items-center gap-3 text-[#e30e04] mb-3">
                  <ShieldCheck className="h-5 w-5" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#9A9A9A]">Competency 0{idx + 1}</span>
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wide text-white group-hover:text-[#FFFFFF] leading-snug">
                  {competency}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Leadership & Governance Track Record */}
      <section className="relative bg-[#000000] px-4 py-12 text-white sm:px-6 md:px-16 md:py-20 border-t border-white/10" aria-labelledby="experience-heading">
        <div className="mx-auto max-w-[1312px]">
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className={`${SECTION_TAG_CLASS} mb-4 w-fit`} style={SECTION_TAG_STYLE}>
                <span>Track Record</span>
              </p>
              <h2 id="experience-heading" className="font-['Kontora',sans-serif] text-[clamp(1.75rem,5vw,3.25rem)] font-bold uppercase leading-[0.95] tracking-[-0.05em]">
                <span className="block text-[#FFFFFF]">Leadership &amp; Governance</span>
                <span className="block text-[#e30e04]">Track Record</span>
              </h2>
            </div>
            <p className="max-w-md text-sm text-[#9A9A9A] leading-relaxed">
              Demonstrated leadership moving across government, corporate boards, executive coaching, and multilateral climate stewardship.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {EXECUTIVE_EXPERIENCE.map((item, idx) => (
              <motion.article 
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="flex flex-col justify-between rounded-[24px] border border-white/10 bg-[#0A0A0A] p-6 sm:p-8 transition-colors hover:border-[#e30e04]/60"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4 mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#e30e04]">{item.period}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#9A9A9A] truncate max-w-[180px]">{item.organisation}</span>
                  </div>
                  <h3 className="text-lg font-bold uppercase tracking-tight text-white sm:text-xl leading-tight mb-3">
                    {item.role}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9A9A9A] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Qualifications & Professional Designations */}
      <section className="relative bg-[#000000] px-4 py-12 text-white sm:px-6 md:px-16 md:py-16 border-t border-white/10" aria-labelledby="education-heading">
        <div className="mx-auto max-w-[1312px]">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className={`${SECTION_TAG_CLASS} mb-4 w-fit`} style={SECTION_TAG_STYLE}>
                <span>Academic Foundations</span>
              </p>
              <h2 id="education-heading" className="font-['Kontora',sans-serif] text-[clamp(1.5rem,4vw,2.5rem)] font-bold uppercase leading-[0.95] tracking-[-0.05em] mb-8">
                <span className="block text-[#FFFFFF]">Degrees &amp; Academic</span>
                <span className="block text-[#e30e04]">Qualifications</span>
              </h2>

              <div className="space-y-4">
                {EDUCATION_CREDENTIALS.map((edu, idx) => (
                  <div key={idx} className="flex items-start gap-4 rounded-[18px] border border-white/10 bg-[#0A0A0A] p-5">
                    <GraduationCap className="h-6 w-6 text-[#e30e04] shrink-0 mt-1" />
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#e30e04]">{edu.year}</span>
                        <span className="text-xs text-[#9A9A9A]">· {edu.institution}</span>
                      </div>
                      <h3 className="text-sm font-bold uppercase tracking-wide text-white mt-1">
                        {edu.degree}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <p className={`${SECTION_TAG_CLASS} mb-4 w-fit`} style={SECTION_TAG_STYLE}>
                <span>Applied Expertise</span>
              </p>
              <h2 className="font-['Kontora',sans-serif] text-[clamp(1.5rem,4vw,2.5rem)] font-bold uppercase leading-[0.95] tracking-[-0.05em] mb-8">
                <span className="block text-[#FFFFFF]">Professional Coaching</span>
                <span className="block text-[#e30e04]">Designations</span>
              </h2>

              <div className="space-y-4">
                {PROFESSIONAL_DESIGNATIONS.map((desig, idx) => (
                  <div key={idx} className="flex items-start gap-4 rounded-[18px] border border-white/10 bg-[#0A0A0A] p-5">
                    <Award className="h-6 w-6 text-[#e30e04] shrink-0 mt-1" />
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#e30e04]">{desig.institution}</span>
                        <span className="text-xs text-[#9A9A9A]">· {desig.detail}</span>
                      </div>
                      <h3 className="text-sm font-bold uppercase tracking-wide text-white mt-1">
                        {desig.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Reel */}
      <ProfileAdditionalSections 
        speakerId="pam-yako" 
        customGallery={[]} 
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
