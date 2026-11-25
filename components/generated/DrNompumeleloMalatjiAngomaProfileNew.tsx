"use client";

import * as React from "react";
import { Award, Brain, CheckCircle2, ShieldCheck, Sparkles, UserCheck } from "lucide-react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const SECTION_TAG_CLASS = 'inline-flex items-center border border-l-[4px] px-4 py-2 text-[12px] font-bold uppercase tracking-[0.12em] shadow-none';
const SECTION_TAG_STYLE: React.CSSProperties = {
  backgroundColor: '#000000',
  borderColor: '#000000',
  borderLeftColor: '#e30e04',
  color: '#ffffff'
};

const SectionTag = ({ children }: { children: string }) => (
  <span className={SECTION_TAG_CLASS} style={SECTION_TAG_STYLE}>{children}</span>
);

const CREDENTIAL_BADGES = [
  {
    id: "nma-psychologist",
    label: "HPCSA-Registered Psychologist",
    subtitle: "Over 22 years of clinical, counselling, and corporate human capital advisory experience (PS0086177)."
  },
  {
    id: "nma-seabi-founder",
    label: "Director, Seabi Psychological Consulting",
    subtitle: "Spearheading high-impact psychological assessments for Eskom, DPSA SMS panel, ARM, AFI, and Motsepe Foundation."
  },
  {
    id: "nma-sarb-lead",
    label: "Former SARB Senior Manager (12+ Years)",
    subtitle: "Led organizational design, psychometric assessments, and enterprise career management at the Central Bank."
  },
  {
    id: "nma-board-director",
    label: "Professional Director, PD (SA)",
    subtitle: "Awarded certified professional director designation; holds a PhD in Psychology from University of Johannesburg."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "executive-resilience-burnout",
    number: "Theme 01",
    title: "Executive Resilience, Stress Boundaries & Burnout Prevention.",
    copy: "Equipping senior leaders, C-suite executives, and professionals with cognitive stamina, emotional regulation frameworks, and proactive mental health boundaries to withstand high-stakes corporate pressures."
  },
  {
    id: "talent-architecture-assessments",
    number: "Theme 02",
    title: "Organizational Design, Psychometric Assessments & Talent Architecture.",
    copy: "Translating psychological science into ethical, high-precision workforce diagnostics, leadership pipeline assessments, and organizational structures that accelerate sustainable commercial performance."
  },
  {
    id: "psychological-safety-wellness",
    number: "Theme 03",
    title: "Workplace Wellness, Psychological Safety & Culture Transformation.",
    copy: "Demystifying mental wellness in the modern workplace, dismantling stigma, and building resilient corporate cultures where psychological safety drives innovation, retention, and peak collaboration."
  },
  {
    id: "leadership-inclusion-gender",
    number: "Theme 04",
    title: "Empowered Leadership, Gender Equity & High-Pressure Performance.",
    copy: "Leveraging key insights from coaching Miss South Africa finalists, executive women in central banking, and corporate boards to cultivate courageous, authentic, and values-driven institutional leadership."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Dr. Nompumelelo Malatji-Angoma is a highly distinguished South African psychologist, corporate consultant, certified board director, and keynote speaker who brings more than 22 years of elite experience bridging clinical/counselling psychology and corporate human capital management. Holding a Doctorate in Psychology (Dlitt et Phil, 2004) and registered with the Health Professions Council of South Africa (HPCSA PS0086177), she is widely celebrated for her decisive authority on burnout prevention, executive resilience, organizational design, and psychological assessment standards.",
  "As the founder and Director of Seabi Psychological Consulting since 2007, Dr. Malatji-Angoma has built a benchmark psychological services practice across southern Africa. Under her stewardship, Seabi Consulting was awarded major public and private sector assessment mandates, including the Department of Public Service and Administration (DPSA) Senior Management Service (SMS) Competency Assessment panel and Eskom Holdings SOC Limited psychometric assessment contract, alongside providing strategic talent advisory to blue-chip leaders such as African Rainbow Minerals (ARM), African Fashion International (AFI), the Motsepe Foundation, and civic bodies such as Amandla.mobi.",
  "Her corporate executive track record includes over 12 years at the South African Reserve Bank (SARB), where she served as Senior Manager and Lead for Assessments, Organizational Design, and Enterprise Career Management. In this vital capacity, she oversaw the deployment of psychometric diagnostics, enterprise talent frameworks, and organizational restructuring for the Central Bank. Her previous senior corporate leadership roles include HR Executive at RMB Private Bank, Senior Consultant at Adcorp Consulting, and Regional Manager for Talent Acquisition and Assessments at Edcon.",
  "A dedicated scholar and institutional governance specialist, Dr. Malatji-Angoma holds the prestigious designation of Professional Director in South Africa (PD SA), serves as an independent board member at Mzansi Solar, and contributed to national testing integrity as a committee member of SIOPSA's People Assessments in Industry (PAI). She is a sought-after speaker and panelist for prestigious forums—including conducting wellness and resilience masterclasses for Miss South Africa top finalists and addressing the Motsepe Foundation's Gender Equality, Wellness and Leadership Symposium—as well as a trusted broadcast analyst across SABC News, Radio 702, Power FM, and leading publications.",
  "Book Dr. Nompumelelo Malatji-Angoma through The Speakers Firm, A Leading African Speakers Bureau, to deliver transformative keynote addresses, executive retreats, board governance sessions, and corporate wellness masterclasses that instill enduring psychological resilience and strategic human capital excellence across your organization."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "sarb", name: "SOUTH AFRICAN RESERVE BANK" },
  { id: "rmb", name: "RMB PRIVATE BANK" },
  { id: "seabi", name: "SEABI PSYCHOLOGICAL CONSULTING" },
  { id: "motsepe", name: "MOTSEPE FOUNDATION" },
  { id: "eskom", name: "ESKOM HOLDINGS SOC" },
  { id: "arm", name: "AFRICAN RAINBOW MINERALS (ARM)" },
  { id: "misssa", name: "MISS SOUTH AFRICA" }
];

const RESILIENCE_PILLARS = [
  {
    number: "01",
    title: "Cognitive Stamina & Burnout Prevention",
    description: "Actionable frameworks for senior executives and high-performance teams to identify chronic cognitive fatigue early, establish rigorous mental boundaries, and cultivate sustainable energy.",
    icon: Brain
  },
  {
    number: "02",
    title: "Psychometric Precision & Talent Architecture",
    description: "Aligning psychometric testing, executive competency models, and organizational design with overarching enterprise growth, corporate governance, and ethical standards.",
    icon: UserCheck
  },
  {
    number: "03",
    title: "Psychological Safety & Workplace Vitality",
    description: "Transforming workplace culture into high-trust environments where mental health is prioritized as an operational asset, reducing attrition and maximizing cross-functional collaboration.",
    icon: ShieldCheck
  },
  {
    number: "04",
    title: "Authentic Leadership & Board Governance",
    description: "Drawing upon certified board director expertise (PD SA) and central banking experience to guide executive teams in navigating crisis, institutional stress, and diversity with moral clarity.",
    icon: Award
  }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "malatji-media-1",
      headline: "Impact of Crime Reports & Chronic Stress on Mental Health",
      publication: "SABC News",
      date: "Broadcast Feature",
      action: "Watch Feature",
      url: "https://www.youtube.com/watch?v=4hjbiQ-KM3w",
      image: "/speakers/Dr Nompumelelo Malatji-Angoma/Dr-Nompumelelo-Malatji-Angoma-The-Speakes-Firm2.jpg",
      caption: "Dr. Nompumelelo Malatji-Angoma unpacks the psychological toll of chronic stress, trauma narratives, and practical strategies for cognitive resilience."
    }
  ];

  const customVideos = [
    {
      id: "malatji-vid-1",
      label: "Moments of Impact With Dr Nompumelelo Malatji-Angoma",
      youtubeId: "CG6uEwoTL1A"
    },
    {
      id: "malatji-vid-2",
      label: "SABC News: Impact of Crime Reports on Mental Health",
      youtubeId: "4hjbiQ-KM3w"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerTitle="Dr."
      speakerName="Nompumelelo Malatji-Angoma"
      speakerDesignation="HPCSA-Registered Psychologist • Executive Resilience Specialist • Corporate Human Capital Strategist"
      speakerRole="Director & Owner of Seabi Psychological Consulting, Former SARB Lead & RMB Private Bank HR Executive"
      speakerRef="TSF-NMA-43"
      heroBackgroundImage="/speakers/Dr Nompumelelo Malatji-Angoma/Dr-Nompumelelo-Malatji-Angoma-The-Speakes-Firm3.jpg"
      heroMobileBackgroundImage="/speakers/Dr Nompumelelo Malatji-Angoma/Dr-Nompumelelo-Malatji-Angoma-The-Speakes-Firm-mobile.jpg"
      biographyImage="/speakers/Dr Nompumelelo Malatji-Angoma/Dr-Nompumelelo-Malatji-Angoma-The-Speakes-Firm.jpg"
      bioHook="“Sustainable executive performance is not about enduring perpetual stress; it is about building intentional boundaries, psychological resilience, and ethical talent systems.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="dr-nompumelelo-malatji-angoma" 
          customMedia={customMedia} 
        />
      }
    >
      {/* 1. Core Advisory Pillars Section */}
      <section id="executive-pillars" className="relative bg-[#000000] px-6 py-16 md:px-16 md:py-24 border-t border-white/[0.08]" aria-labelledby="pillars-heading">
        <div className="mx-auto max-w-[1312px]">
          <div className="mb-12 max-w-3xl">
            <SectionTag>EXECUTIVE ADVISORY PILLARS</SectionTag>
            <h2 id="pillars-heading" className="font-['Kontora',sans-serif] text-[clamp(2.15rem,6vw,4rem)] font-bold uppercase leading-[0.92] tracking-[-0.05em] text-white mt-6">
              Strategic Frameworks for <br />
              <span className="text-[#e30e04]">Resilience & Human Capital.</span>
            </h2>
            <p className="mt-4 text-sm md:text-base text-white/70 leading-relaxed">
              Dr. Nompumelelo Malatji-Angoma bridges clinical psychology with board-level corporate strategy to cultivate high-performing, psychologically safe, and resilient organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {RESILIENCE_PILLARS.map((pillar) => {
              const IconComponent = pillar.icon;
              return (
                <div 
                  key={pillar.number}
                  className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-6 flex flex-col justify-between hover:border-[#e30e04]/40 transition-colors group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-widest text-[#e30e04]">
                        {pillar.number}
                      </span>
                      <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 group-hover:text-white group-hover:border-[#e30e04]/50 transition-colors">
                        <IconComponent size={18} />
                      </div>
                    </div>
                    <h3 className="font-['Kontora',sans-serif] text-lg font-bold uppercase tracking-tight text-white leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-white/60 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Additional Media & Keynote Videos */}
      <ProfileAdditionalSections 
        speakerId="dr-nompumelelo-malatji-angoma" 
        customIntroText="Watch Dr. Nompumelelo Malatji-Angoma share expert clinical insights on executive resilience, mental health boundaries, and corporate vitality."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
