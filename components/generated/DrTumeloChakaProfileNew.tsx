"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap, ShieldCheck } from "lucide-react";
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
    id: "phd-consumer-behaviour",
    label: "PhD in Consumer Behaviour",
    subtitle: "University of Cape Town, focusing on consumer behaviour and household expenditure."
  },
  {
    id: "leadership-voices-2025",
    label: "Top 24 Leadership Voices of 2025",
    subtitle: "Featured in The Future of Leadership publication among Africa's premier visionaries."
  },
  {
    id: "board-governance",
    label: "Board Member & Governance Leader",
    subtitle: "Boitekanelo College Audit & Strategy Committees, Gautrain Advisory Board, CMO Council."
  },
  {
    id: "commercial-partnerships",
    label: "Pan-African Commercial Strategist",
    subtitle: "Architect of enterprise partnerships across 13 African markets spanning fintech, retail, and media."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "consumer-dynamics",
    number: "Theme 01",
    title: "Consumer Behaviour & Household Consumption Dynamics",
    copy: "Translating deep consumer behaviour research and household expenditure patterns into transformative market strategies across African informal, township, and formal retail ecosystems."
  },
  {
    id: "commercialisation-payments",
    number: "Theme 02",
    title: "Commercialisation, Emerging Payments & Platform Innovation",
    copy: "Leveraging cross-border strategic alliances, digital payment infrastructure, and platform business models to drive financial inclusion, transactional velocity, and scalable revenue growth."
  },
  {
    id: "governance-nation-branding",
    number: "Theme 03",
    title: "Strategic Governance, Institutional Sustainability & Nation Branding",
    copy: "Providing rigorous board-level risk governance, financial stewardship, and geopolitical nation branding strategies to advance competitiveness, cultural intelligence, and destination marketing."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Dr Tumelo Chaka is an accomplished executive and board member with over 15 years of leadership experience across financial services, media, retail, and technology. He is recognised as one of Africa’s foremost authorities on consumer behaviour and growth strategy, known for leading transformative initiatives that integrate financial inclusion, digital innovation, and market expansion. Strategic governance and commercial leader with over 15 years of experience driving inclusive economic growth and brand development across Africa. Brings a unique intersection of finance, consumer behaviour, and digital transformation, with a strong record of governance oversight, strategy execution, and stakeholder collaboration. Deeply committed to advancing South Africa’s tourism economy, nation branding, and cultural intelligence through sustainable, market-driven innovation",
  "He currently serves as a Board Member of Boitekanelo College in Botswana, where he contributes to the Audit and Strategy Committees, guiding the institution on its journey towards university status. His role focuses on financial integrity, risk governance, and strategic oversight to strengthen institutional sustainability and growth. Tumelo is a member of the Africa CMO Council Advisory Board and the Gautrain Advisory Board and has represented Africa as a speaker at Advertising Week New York. He was featured among the Top 24 Leadership Voices of 2025 in The Future of Leadership publication.",
  "Previously, Dr Chaka held leadership positions at Showmax, FNB, and Nedbank, where he led groundbreaking commercialisation and growth strategies. At Showmax, he oversaw Africa Commercial Partnerships, building strategic alliances with leading corporates such as MTN Nigeria, MTN Ghana, Safaricom, Vodacom Tanzania, Shoprite, Capitec, and Discovery to drive regional expansion. His leadership at FNB and Nedbank focused on digital payments, emerging markets, and revenue growth through platform and partnership models that advanced financial inclusion across Africa.",
  "Dubbed amongst the most respected and sought after consumer experts in the country by Thebe Ikalafeng in his bestseller The Traveller. Described by industry leaders as “a brave entrepreneur” (Ndaba Ntsele, Chairman Pamodzi), “a game changer” (Dr Reuel Khoza, ex Nedbank Chairman), “You are an entrepreneurial brand” (Dr David Himbara, economic advisor to Rwandan President) and “a brand powerhouse” (Khahliso Santho, Financial Mail).",
  "He is completing his CIMA Chartered Global Management Accountant (CGMA) qualification and SAICA APC Board Exam for the Chartered Accountant CA(SA) designation. PhD in Consumer Behaviour focusing on consumer behaviour and household expenditure. Dr Tumelo Chaka speaks, writes, and advises on consumer behaviour, platform businesses, power of retail in banking, partnerships in African markets and household consumption."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "showmax", name: "SHOWMAX" },
  { id: "fnb", name: "FNB" },
  { id: "nedbank", name: "NEDBANK" },
  { id: "gautrain", name: "GAUTRAIN" },
  { id: "cmo-council", name: "CMO COUNCIL" },
  { id: "mtn", name: "MTN" },
  { id: "safaricom", name: "SAFARICOM" },
  { id: "checkers", name: "CHECKERS" },
  { id: "absa", name: "ABSA" },
  { id: "takealot", name: "TAKEALOT" }
];

const CORE_COMPETENCIES = [
  "Governance and Risk Oversight",
  "Strategic and Financial Stewardship",
  "Inclusive Economic and Tourism Development",
  "Consumer Insights and Brand Strategy",
  "Digital Transformation and Platform Innovation",
  "Stakeholder Engagement (Public, Private, Community)",
  "ESG and Sustainability Governance",
  "Transformation and Human Capital Development"
];

const EXECUTIVE_EXPERIENCE = [
  {
    role: "Chief Marketing Officer: Cultural Intelligence",
    organisation: "United Stations (Pty) Ltd",
    period: "2006 – Present",
    description: "Building strategy for emerging markets with media buying and media synergy strategies with media assets like Kaya959, Algoa FM, Smile FM, OFM and Jozi FM. Strategic revenue partner with blue chip brands and media buying advisory with clients like Nedbank, Old Mutual, Checkers, Takealot, MTN, Vodacom, ABSA, Standard Bank."
  },
  {
    role: "Managing Executive: Media, Strategy & Consumer behaviour",
    organisation: "The Strategists",
    period: "2024 – 2025",
    description: "Building global strategy for emerging markets with media buying and media synergy strategies for clients in Africa. Negotiating partnerships with multinationals for Africa strategy. Global immersions for African businesses and multinationals. Nation branding strategies with geopolitical strategy development and execution, initiatives that enhanced nation competitiveness and destination marketing. Academic case study to be published on Brand Rwanda and its health competitiveness."
  },
  {
    role: "CEO Knowledge Management Advisory Panel",
    organisation: "Gautrain Management Agency",
    period: "2023 – 2025",
    description: "Advisory Panel to the Chief Executive Officer and Executive Team with regards to growth of ridership, alignment of Gautrain to Destination Marketing and the brand of Gautrain as a Transport Node Asset of Gauteng and South Africa."
  },
  {
    role: "Executive: Africa Commercial Partnerships",
    organisation: "Showmax",
    period: "2024",
    description: "Led cross-border strategic partnerships across 13 African markets, positioning the brand for growth in consumer engagement and digital content distribution. Negotiated partnerships with MTN, Safaricom, and Shoprite ~ initiatives that enhanced Africa’s creative and digital economy."
  },
  {
    role: "Africa Advisory Board",
    organisation: "Chief Marketing Officer Council",
    period: "2023 – 2025",
    description: "Advancing global marketing excellence and leadership insights, with a focus on global marketing trends, digital transformation and brand leadership. Collaboration with global marketing leaders (CMO) to shape brand strategy, consumer engagement and innovation. ~ this role enhanced bridging global brand governance insights to translate global marketing excellence into destination competitiveness for South Africa through connecting data and brand authenticity to customer and brand growth."
  },
  {
    role: "Executive Head: Revenue Growth and Customer Channels",
    organisation: "FNB",
    period: "2021 – 2023",
    description: "Directed inclusive growth strategy for the entry market, expanding financial access to over 3.5 million new clients in the township and rural economy. Initiatives contributed to national transformation and economic inclusion looking at South African Minibus Industry with 15 million commuters servicing 9 million households in South Africa building an investment business of over R6,8bn stokvel investment and South Africa Social Security Agency ( SASSA) beneficiary financial services solution ~ directly relevant to brand and township economy growth."
  },
  {
    role: "Head: Commercialisation Emerging Payments & Head Sales Strategy: Forex and Investments",
    organisation: "Nedbank",
    period: "2019 – 2021",
    description: "Oversaw payment innovations to advance financial inclusion and digital adoption. Strategic understanding to leverage investments locally and build strategies to enhance Foreign Direct Investment (FDI) for growth in the South African economy. Alignment of Commercialisation of payment linked to Digital Transformation, Innovation, Forex and Investments ~ skills essential to developing sustainable tourism payment ecosystems and emerging economies."
  },
  {
    role: "Executive: Alternative Investments",
    organisation: "Senate Capital",
    period: "2015 – 2019",
    description: "Led investment strategy and commercial turnaround initiatives across private markets and infrastructure projects. Served on Gauteng Provincial Hospitals Board to strengthen governance and financial performance in the health sector ~ skills essential to developing foreign direct investments (FDI)"
  },
  {
    role: "Executive Head: Emerging Markets",
    organisation: "Alchemy Investments",
    period: "2012 – 2015",
    description: "Championed new markets penetration and scalable solutions in emerging markets in Sub Saharan Africa. Build investment partners in Africa, China and South Korea. With a focus on broadband infrastructure, commodities and logistics. ~ skills essential to developing foreign direct investments (FDI)"
  },
  {
    role: "Senior Manager: Public Sector Banking",
    organisation: "ABSA",
    period: "2010 – 2012",
    description: "Directed public sector banking with customer and revenue growth. Understanding and integrated knowledge of IFRS, PFMA and Corporate Finance to build business cases to effectively solution for clients. – skills essential to understanding public sector effectively financial management."
  },
  {
    role: "Entrepreneurship: Brand Insights & Strategy",
    organisation: "Qurious Insights & Strategy",
    period: "2007 – 2009",
    description: "A entrepreneur in the branding and experiential marketing industry. ~ skills essential to competitive brand strategy and strategies to compete as a national and global brand."
  },
  {
    role: "Trainee Accountant",
    organisation: "PricewaterhouseCoopers PwC",
    period: "2005 – 2007",
    description: "SAICA Audit Trainee accountant with focus on clients in Financial Service, SOEs, Telecommunication. ~ skills essential to understand a range of businesses in various industries with regards to Financial Accounting, Financial Management, Taxation and Auditing."
  }
];

const EDUCATION_CREDENTIALS = [
  {
    degree: "PhD Business Science & Consumer Behavior",
    year: "2025",
    institution: "University of Cape Town"
  },
  {
    degree: "Master’s in Business Administration (MBA)",
    year: "2014",
    institution: "GIBS"
  },
  {
    degree: "Postgraduate Diploma in Business Administration",
    year: "2012",
    institution: "GIBS"
  },
  {
    degree: "Bachelor of Accounting",
    year: "2006",
    institution: "University of Free State"
  }
];

const IN_PROGRESS_DESIGNATIONS = [
  {
    title: "Chartered Marketer CM(SA)",
    detail: "Board Exam in November 2026",
    institution: "MASA"
  },
  {
    title: "CIMA: ACMA CGMA designation",
    detail: "Last exam August 2026",
    institution: "CIMA"
  },
  {
    title: "SAICA APC CA(SA) Exam",
    detail: "Last exam December 2027",
    institution: "SAICA"
  }
];

const customMedia = [
  {
    id: "chaka-media-1",
    headline: "United Stations Appoints Dr Tumelo Chaka as Marketing Insights & Commercial Director",
    publication: "Pat on Brands",
    date: "27 Mar 2026",
    caption: "United Stations appoints Dr Tumelo Chaka as Marketing Insights & Commercial Director to lead audience-driven strategies and drive growth.",
    url: "https://patonbrands.com/united-stations-appoints-dr-tumelo-chaka-as-marketing-insights-commercial-director/",
    action: "Read Article",
    image: "/speakers/Dr%20Tumelo%20Chaka/Dr-Tumelo-Chaka-The-Speakers-Firm2.jpg"
  },
  {
    id: "chaka-media-2",
    headline: "Consumer Behaviour eKasi with Tumelo Chaka",
    publication: "Kasi Business Podcast",
    date: "Township Entrepreneurs Alliance",
    caption: "Tumelo Chaka explores the nuances of consumer behavior within South African townships, what drives buying decisions, and the informal economy.",
    url: "https://www.youtube.com/watch?v=19mIq9ob1oU",
    action: "Watch Interview",
    image: "/speakers/Dr%20Tumelo%20Chaka/Dr-Tumelo-Chaka-The-Speakers-Firm.jpg"
  },
  {
    id: "chaka-media-3",
    headline: "EP 73 | Tumelo Chaka on AdWeek 2024 and media trends for 2025",
    publication: "Pat on Brands Podcast",
    date: "Pat Mahlangu Series",
    caption: "Tumelo Chaka discusses Advertising Week New York, media and marketing trends, and the intersection of culture and African-driven solutions.",
    url: "https://www.youtube.com/watch?v=n5VJyaEhOic",
    action: "Watch Episode",
    image: "/speakers/Dr%20Tumelo%20Chaka/Dr-Tumelo-Chaka-The-Speakers-Firm3.jpg"
  }
];

const customVideos = [
  {
    id: "tumelo-video-1",
    label: "DR TUMELO CHAKA - Executive Profile",
    youtubeId: "wIt-HmG5RwQ"
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Tumelo Chaka"
      speakerTitle="Dr"
      speakerDesignation="Consumer Behaviour Expert, Commercial Strategist & Board Member"
      speakerRole="Strategic governance and commercial leader driving inclusive economic growth and brand development across Africa."
      speakerRef="TSF-TC-26"
      heroBackgroundImage="/speakers/Dr%20Tumelo%20Chaka/Dr-Tumelo-Chaka-The-Speakers-Firm4.jpg"
      heroMobileBackgroundImage="/speakers/Dr%20Tumelo%20Chaka/Dr-Tumelo-Chaka-The-Speakers-Firm-mobile.jpg"
      heroImagePosition="object-top"
      biographyImage="/speakers/Dr%20Tumelo%20Chaka/Dr-Tumelo-Chaka-The-Speakers-Firm5.jpg"
      bioHook="“A unique intersection of finance, consumer behaviour, and digital transformation, advancing inclusive growth and cultural intelligence across Africa.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="dr-tumelo-chaka" customMedia={customMedia} />
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

      {/* Executive Leadership Track Record */}
      <section className="relative bg-[#000000] px-4 py-12 text-white sm:px-6 md:px-16 md:py-20 border-t border-white/10" aria-labelledby="experience-heading">
        <div className="mx-auto max-w-[1312px]">
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className={`${SECTION_TAG_CLASS} mb-4 w-fit`} style={SECTION_TAG_STYLE}>
                <span>Track Record</span>
              </p>
              <h2 id="experience-heading" className="font-['Kontora',sans-serif] text-[clamp(1.75rem,5vw,3.25rem)] font-bold uppercase leading-[0.95] tracking-[-0.05em]">
                <span className="block text-[#FFFFFF]">Executive Leadership</span>
                <span className="block text-[#e30e04]">Experience</span>
              </h2>
            </div>
            <p className="max-w-md text-sm text-[#9A9A9A] leading-relaxed">
              Demonstrated leadership spanning cross-border commercial partnerships, digital banking, public sector finance, and market expansion across Sub-Saharan Africa.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
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
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#9A9A9A]">{item.organisation}</span>
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
                <span className="block text-[#FFFFFF]">Education &amp; Professional</span>
                <span className="block text-[#e30e04]">Designations</span>
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
                <span>Advanced Governance</span>
              </p>
              <h2 className="font-['Kontora',sans-serif] text-[clamp(1.5rem,4vw,2.5rem)] font-bold uppercase leading-[0.95] tracking-[-0.05em] mb-8">
                <span className="block text-[#FFFFFF]">In-Progress Professional</span>
                <span className="block text-[#e30e04]">Designations</span>
              </h2>

              <div className="space-y-4">
                {IN_PROGRESS_DESIGNATIONS.map((desig, idx) => (
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
        speakerId="dr-tumelo-chaka" 
        customGallery={[]} 
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
