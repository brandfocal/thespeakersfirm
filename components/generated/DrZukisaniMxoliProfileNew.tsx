"use client";

import * as React from "react";
import { Award, Building2, CheckCircle2, Compass, GraduationCap, Heart, HeartHandshake, Sprout } from "lucide-react";
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
    id: "zm-imbizo",
    label: "Founder of IMBIZO by DrZee",
    subtitle: "Architect of the transformative 7-pillar societal and leadership framework."
  },
  {
    id: "zm-businessman",
    label: "Commercial & Property Developer",
    subtitle: "Extensive executive leadership across architecture, construction, and property development."
  },
  {
    id: "zm-farmer",
    label: "Agri-Enterprise Pioneer",
    subtitle: "Pioneering 'Touch The Farmer' livestock and agricultural wealth creation in Gauteng."
  },
  {
    id: "zm-education",
    label: "Doctor of Philosophy (Nov 2022)",
    subtitle: "Dedicated scholar of moral regeneration, leadership ethics, and community transformation."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "moral-regeneration",
    number: "Theme 01",
    title: "Moral Regeneration & Institutional Integrity.",
    copy: "Equipping corporate boards, state departments, and civic institutions with ethical frameworks to restore institutional trust, accountability, and courageous stewardship."
  },
  {
    id: "venture-futures-wealth",
    number: "Theme 02",
    title: "Venture Futures, Enterprise & Wealth Architecture.",
    copy: "Demystifying investment strategies, shifting the barometer of Black wealth, and guiding entrepreneurs to scale enduring, cash-generative commercial assets."
  },
  {
    id: "imbizo-7-pillars",
    number: "Theme 03",
    title: "The 7 Pillars of Societal Transformation.",
    copy: "Unpacking holistic human and societal development across wellness, spirituality, business, family cohesion, education, livestock farming, and active Ubuntu."
  },
  {
    id: "family-masculinity",
    number: "Theme 04",
    title: "Positive Masculinity & Resilient Family Ecosystems.",
    copy: "Challenging societal fractures by cultivating emotional maturity, marriage enrichment, positive male mentorship, and intergenerational stability."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Dr. Zukisani 'Dr. Zee' Mxoli (Dr. Zukisani Imanyuweli kaNtonga Mxoli uNdlovu) is an accomplished international public speaker, seasoned businessman, and leading authority on moral regeneration, values-driven leadership, and community transformation. As the visionary architect behind IMBIZO by DrZee, he counsels, coaches, and addresses business owners, corporate executives, institutions, and community leaders across Africa on the real-world issues confronting families, men, women, and youth.",
  "With an executive footprint spanning architecture, building construction, project management, and property development, Dr. Mxoli combines hard-nosed commercial acumen with deep humanitarian conviction. Through his pioneering 'Touch The Farmer' livestock initiative in Gauteng, he empowers everyday Africans and enterprise owners to build tangible herd equity and participate directly in agribusiness without the barriers of full-time farm ownership, actively redefining models of sustainable Black wealth.",
  "Dr. Mxoli completed his doctoral studies in November 2022, embodying his foundational philosophy that education must foster balanced personal growth—spiritually, intellectually, physically, and socially—while bridging past heritage with future legacy. A devoted philanthropist, he built and donated the Dr. R.N. Mxoli Centre of Influence in Flagstaff, Eastern Cape, dedicated to his late father, which operates as a vital community preschool and leadership incubator, alongside contributing infrastructure to Helderberg College of Higher Learning.",
  "From commanding stages at SAPS International Men's Day and delivering executive debriefing sessions for the Forensic Science Laboratory / Ballistics Section to addressing the Better Me Men's Conference, Recharge Your Marriage symposiums, and national broadcasts on METRO FM's The Touchdown, Dr. Zee captivates audiences with authentic gravitas, practical wisdom, and infectious energy. Represented by The Speakers Firm, he delivers definitive keynote addresses that inspire ethical action and lasting transformation."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "metrofm", name: "METRO FM / THE TOUCHDOWN" },
  { id: "saps", name: "SOUTH AFRICAN POLICE SERVICE (SAPS)" },
  { id: "fsl", name: "FORENSIC SCIENCE LABORATORY" },
  { id: "imbizo", name: "IMBIZO BY DR ZEE" },
  { id: "helderberg", name: "HELDERBERG COLLEGE OF HIGHER LEARNING" }
];

const IMBIZO_PILLARS = [
  {
    number: "01",
    title: "Wellness & Health",
    description: "Occupational health compliance, preventative vitality, mental fitness, and physical well-being across corporate and industrial workforces.",
    icon: CheckCircle2
  },
  {
    number: "02",
    title: "Spirituality & Moral Compass",
    description: "Anchoring leadership in cultural heritage, ethical integrity, and values-based accountability that withstands institutional pressure.",
    icon: Compass
  },
  {
    number: "03",
    title: "Business & Property Development",
    description: "Full-lifecycle enterprise execution: architecture, building construction, infrastructure delivery, and sustainable commercial ventures.",
    icon: Building2
  },
  {
    number: "04",
    title: "Family Life & Marriage Enrichment",
    description: "Counseling and equipping men, women, and youth to heal family structures, build emotional intelligence, and foster strong marriages.",
    icon: Heart
  },
  {
    number: "05",
    title: "Education & Generational Legacy",
    description: "Lifelong learning, early-childhood development centers, and equipping Africans to bridge ancestral knowledge with future innovation.",
    icon: GraduationCap
  },
  {
    number: "06",
    title: "Investment & Livestock Farming",
    description: "'Touch The Farmer' collaborative agribusiness, herd accumulation, and practical commercial vehicles to build sustainable generational wealth.",
    icon: Sprout
  },
  {
    number: "07",
    title: "Ubuntu & Community Giveback",
    description: "Grassroots community initiatives, active citizenship, and building an equitable, self-sustaining society by the people, for the people.",
    icon: HeartHandshake
  }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "mxoli-art-1",
      headline: "Investing 101: Shifting the Barometer of Black Wealth with Dr. Zukisani Mxoli",
      publication: "METRO FM / THE TOUCHDOWN (with Tbo Touch)",
      date: "Youth Day Broadcast",
      action: "Listen to Interview",
      url: "https://omny.fm/shows/the-touchdown/dr-zukisani-mxoli",
      image: "/speakers/Dr Zukisani ‘DrZee’ Mxoli/Dr-Zukisani-Mxoli-The-Speakers-Firm3.jpg",
      caption: "Dr. Zukisani Mxoli joins Tbo Touch on METRO FM to unpack investing fundamentals, debunk wealth misconceptions, and empower the next generation."
    }
  ];

  const customVideos = [
    {
      id: "mxoli-vid-1",
      label: "Dr. Zukisani \"Dr. Zee\" Mxoli - Keynote Address & Leadership Insights",
      youtubeId: "GutbcdNeYso"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerTitle="Dr."
      speakerName={'Zukisani "Dr. Zee" Mxoli'}
      speakerDesignation="International Public Speaker • Businessman • Moral Regeneration & Leadership Expert"
      speakerRole="Visionary Founder of IMBIZO by DrZee & Enterprise Strategist"
      speakerRef="TSF-ZM-42"
      heroBackgroundImage="/speakers/Dr Zukisani ‘DrZee’ Mxoli/Dr-Zukisani-Mxoli-The-Speakers-Firm2.jpg"
      heroMobileBackgroundImage="/speakers/Dr Zukisani ‘DrZee’ Mxoli/Dr-Zukisani-Mxoli-The-Speakers-Firm-mobile.jpg"
      biographyImage="/speakers/Dr Zukisani ‘DrZee’ Mxoli/Dr-Zukisani-Mxoli-The-Speakers-Firm3.jpg"
      bioHook="“Equipping professionals, business leaders, institutions, and communities on the real-life issues affecting society; instilling moral regeneration, ethical stamina, and practical wealth creation.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="dr-zukisani-mxoli" 
          customMedia={customMedia} 
        />
      }
    >
      {/* 1. The 7 Pillars of IMBIZO by DrZee */}
      <section id="imbizo-framework" className="relative bg-[#000000] px-6 py-16 md:px-16 md:py-24 border-t border-white/[0.08]" aria-labelledby="framework-heading">
        <div className="mx-auto max-w-[1312px]">
          <div className="mb-12 max-w-3xl">
            <SectionTag>THE 7-PILLAR FRAMEWORK</SectionTag>
            <h2 id="framework-heading" className="font-['Kontora',sans-serif] text-[clamp(2.15rem,6vw,4rem)] font-bold uppercase leading-[0.92] tracking-[-0.05em] text-white mt-6">
              IMBIZO by DrZee <br />
              <span className="text-[#e30e04]">Pillars of Transformation.</span>
            </h2>
            <p className="mt-4 text-sm md:text-base text-white/70 leading-relaxed">
              Dr. Zee champions a comprehensive model designed to heal individuals, empower families, build commercial enterprises, and foster collective economic resilience across African communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {IMBIZO_PILLARS.map((pillar) => {
              const IconComponent = pillar.icon;
              return (
                <div 
                  key={pillar.number}
                  className="rounded-2xl border border-white/[0.08] bg-[#0A0A0A] p-6 sm:p-7 flex flex-col justify-between hover:border-[#e30e04]/60 transition-all duration-300 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#e30e04]">
                        Pillar {pillar.number}
                      </span>
                      <div className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/70 group-hover:text-white group-hover:border-[#e30e04] group-hover:bg-[#e30e04] transition-all">
                        <IconComponent size={16} />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Experience Reel (Video) Section */}
      <ProfileAdditionalSections 
        speakerId="dr-zukisani-mxoli" 
        customIntroText="A commanding voice in leadership, business and personal transformation, Dr. Zukisani Mxoli challenges audiences to rise above limitations, embrace excellence and lead with purpose."
        customVideos={customVideos}
      />

      {/* 4. Past Platforms & Endorsements */}
      <section className="relative bg-[#000000] px-6 py-16 md:px-16 md:py-24 border-t border-white/[0.08]" aria-labelledby="platforms-heading">
        <div className="mx-auto max-w-[1312px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <SectionTag>NOTABLE PLATFORMS & TESTIMONIALS</SectionTag>
              <h2 id="platforms-heading" className="font-['Kontora',sans-serif] text-[clamp(2rem,5vw,3.5rem)] font-bold uppercase leading-[0.92] tracking-[-0.05em] text-white">
                Trusted in <br />
                <span className="text-[#e30e04]">Critical Arenas.</span>
              </h2>
              <p className="text-sm md:text-base text-white/70 leading-relaxed">
                Whether commanding mass conference halls or conducting sensitive institutional debriefing sessions, Dr. Zee engages audiences with authoritative empathy, memorable storytelling, and practical rigor.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs text-white/80">
                  <span className="w-2 h-2 rounded-full bg-[#e30e04]" />
                  <span>SAPS International Men&apos;s Day Keynote Speaker</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-white/80">
                  <span className="w-2 h-2 rounded-full bg-[#e30e04]" />
                  <span>Forensic Science Laboratory / Ballistics Section Debriefings</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-white/80">
                  <span className="w-2 h-2 rounded-full bg-[#e30e04]" />
                  <span>Better Me Men&apos;s Conference & Recharge Your Marriage Summit</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-white/80">
                  <span className="w-2 h-2 rounded-full bg-[#e30e04]" />
                  <span>Entrepreneurs Awards & Corporate Year-End Seminars</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-6 sm:p-8 space-y-6">
                <blockquote className="space-y-4">
                  <div className="flex items-center gap-2 text-[#e30e04]">
                    <Award size={20} />
                    <span className="text-[11px] font-bold uppercase tracking-[0.16em]">Official Commendation</span>
                  </div>
                  <p className="text-base sm:text-lg italic text-white/90 leading-relaxed font-serif">
                    &ldquo;On behalf of the Ballistics Section, I would like to thank you for your outstanding contribution as guest speaker at our Debriefing Session. We have received overwhelmingly positive feedback from our attendees, many of whom noted that your session was the highlight of the event. Your ability to enthusiastically engage our audience and share your expertise left a lasting impression on our team.&rdquo;
                  </p>
                  <footer className="pt-4 border-t border-white/[0.08]">
                    <p className="text-sm font-bold text-white uppercase tracking-wide">Brigadier Mkhobela MN</p>
                    <p className="text-xs text-white/50 uppercase tracking-widest mt-0.5">Section Head: Ballistics · Forensic Science Laboratory</p>
                    <p className="text-[11px] text-[#e30e04] uppercase tracking-wider mt-0.5">Division: Detective and Forensic Services</p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
