"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap, ShieldCheck, Scale, Compass, CheckCircle2 } from "lucide-react";
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
    id: "pan-african-strategist",
    label: "Pan-African ESG & Infrastructure Strategist",
    subtitle: "Over 24 years of legal and advisory experience across energy regulation, project finance, corporate M&A, and ESG governance."
  },
  {
    id: "basa-chairperson",
    label: "Board Chairperson, BASA (NPC)",
    subtitle: "Leading Business and Arts South Africa, driving cross-sector partnerships and governance in the creative economy."
  },
  {
    id: "project-finance-attorney",
    label: "Senior Project Finance & M&A Attorney",
    subtitle: "Admitted attorney (2002) with milestone advisory across Gautrain, MozGas, REIPPP PPAs, and the Southern Africa Power Pool."
  },
  {
    id: "standards-governance",
    label: "Global Standards & Governance Leader",
    subtitle: "Former SABS Standards Development Executive, WTO Technical Barriers to Trade Enquiry Point lead, and IUCN committee member."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "economic-infrastructure-energy",
    number: "Theme 01",
    title: "Economic Infrastructure, Energy Transition & Cross-Border Power",
    copy: "Unlocking catalytic investment in transmission, generation, and renewable energy independent power producer programmes (REIPPP) across the Southern Africa Power Pool and continental energy corridors."
  },
  {
    id: "esg-sustainability-governance",
    number: "Theme 02",
    title: "ESG Strategy, Corporate Governance & Sustainability Reporting",
    copy: "Aligning global reporting standards (GRI, WTO, SANS) and corporate risk oversight with African market realities to deliver transparent, accountable, and resilient institutional governance."
  },
  {
    id: "leadership-culture-dei",
    number: "Theme 03",
    title: "Transformational Leadership, Culture & Inclusive Growth",
    copy: "Empowering boardroom and executive decision-makers through cultural intelligence, vulnerability, and diversity, equity, and inclusion (DEI) frameworks that drive authentic organisational impact."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "A Pan-African strategist with a legal background. Passionate about sustainability that is rooted in unlocking investment in economic infrastructure that catalyses growth and prosperity across African markets. A senior attorney and ESG strategy consultant with over 24 years’ experience across energy regulation, project finance, corporate M&A, ESG strategy and governance.",
  "Admitted as an attorney in 2002, with a distinguished career in Project Finance, Private Equity M&A. Thought leader and advisor in ESG, sustainability, culture and inclusion.",
  "Her executive leadership spans high-impact roles including Executive Director at Athari Consulting, Partner in Bowmans' Corporate M&A and Private Equity practice, Founder and Director of Alchemy Africa (serving as Senior Strategy Advisor to the Executive Office of Economic Development & Strategy at NEOM, Saudi Arabia), Executive of Standards Development at the South African Bureau of Standards (SABS), Senior Manager of Legal and Compliance at Eskom, General Counsel and Company Secretary at Mercedes-Benz South Africa, Senior Manager of Legal & Compliance and Company Secretary at Blue IQ Investment Holdings, and Senior Associate in Project Finance at Webber Wentzel in alliance with Linklaters London.",
  "She currently serves as Board Chairperson of Business and Arts South Africa (NPC), Advisory Board Member for African Women in Energy and Power, Regional Member of the IUCN International Standards Committee on Nature Based Solutions, and Mentor with the Aspire Foundation UK."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "athari", name: "ATHARI CONSULTING" },
  { id: "bowmans", name: "BOWMANS" },
  { id: "alchemy-africa", name: "ALCHEMY AFRICA" },
  { id: "basa", name: "BASA (NPC)" },
  { id: "sabs", name: "SABS" },
  { id: "eskom", name: "ESKOM" },
  { id: "mercedes-benz", name: "MERCEDES-BENZ SA" },
  { id: "blue-iq", name: "BLUE IQ" },
  { id: "webber-wentzel", name: "WEBBER WENTZEL" },
  { id: "iucn", name: "IUCN" }
];

const CORE_COMPETENCIES = [
  "Economic Infrastructure",
  "People & Leadership",
  "ESG & Sustainability",
  "Culture & DEI",
  "Corporate Governance",
  "Commercial Legal"
];

const EXECUTIVE_EXPERIENCE = [
  {
    role: "Executive Director",
    organisation: "Athari Consulting",
    period: "August 2025 - Present",
    description: "Providing sustainability, governance and ESG impact strategy advisory services across sectors and regions.",
    bullets: [
      "Business & Economic development strategy consulting",
      "ESG risk management, and sustainability reporting obligations",
      "Leadership & Governance"
    ]
  },
  {
    role: "Partner",
    organisation: "Bowmans",
    period: "October 2023 - July 2025",
    description: "Corporate M&A and private equity practice. Provided strategic and transaction advisory, deal structuring, contract negotiation and drafting, deal preparation and due diligence services to private equity impact fund clients.",
    bullets: [
      "Deal structuring and legal due diligence on M&A and private equity transactions across various sectors.",
      "Negotiated and drafted various transaction agreements including shareholders agreements, sale and purchase agreements, and term sheets.",
      "Advised on corporate governance and ESG trends and frameworks.",
      "Delivered leadership and career development workshops for the candidate attorneys."
    ]
  },
  {
    role: "Founder & Director",
    organisation: "Alchemy Africa",
    period: "September 2019 - 2023",
    description: "ESG risk management consulting and advisory firm providing pre-investment due diligence, monitoring, evaluation and reporting of ESG initiatives, and Board/Exco ESG training.",
    bullets: [
      "Served as Senior Strategy Advisor to the Executive Office of Economic Development and Strategy at NEOM, Kingdom of Saudi Arabia: advising on mega infrastructure project development and ESG strategy.",
      "Provided ESG due-diligence services to private equity firms.",
      "Provided sustainability reporting services.",
      "Delivered DEI and Culture assessments, facilitated workshops, guided training, policy reviews and strategy alignment for various local and international clients.",
      "Delivered training to South African National Energy Association (SANEA) members on ESG in the context of the Just Energy Transition (JET) (2021 & 2022)."
    ]
  },
  {
    role: "Executive: Standards Development",
    organisation: "South African Bureau of Standards (SABS)",
    period: "September 2017 - July 2019",
    description: "Provided strategic and financial oversight over a division of 95+ people with a budget of R54.4 million. Responsible for the development of South African National Standards (SANS) and regulatory guidance across key industries.",
    bullets: [
      "Developed and implemented divisional strategy aligned to the SABS Corporate Plan.",
      "Maintained South Africa's WTO National Enquiry Point on Technical Barriers to Trade.",
      "Represented South Africa on trade policy matters at WTO, ISO, IEC, ARSO, SADCSTAN, AFREC and AFSEC.",
      "Improved fiscal discipline against performance. Improved stakeholder relationships in industry, as well as with regional and international standards bodies.",
      "Chairperson: SABS Tender Committee.",
      "Non-Executive Director: Business and Arts South Africa (NPC); Board Chairperson (2021-2025)."
    ]
  },
  {
    role: "Senior Manager: Legal & Compliance",
    organisation: "Eskom",
    period: "July 2013 - August 2017",
    description: "Led a team of 6 legal professionals and 3 support staff responsible for regulation, legal and compliance across Eskom's operating divisions, including Transmission, Distribution, Customer Services and Enterprise Risk. Other non-core divisions supported included Eskom Telecoms and Eskom Aviation. Also provided advisory oversight to the Exco Procurement Committee (>=R30million<=R75million).",
    bullets: [
      "Lead legal representative at the Southern Africa Power Pool (SAPP), and the AU Association of Power Utilities in Africa (APUA). Established the Legal Working Group at SAPP.",
      "Lead advisor to the Grid Access Unit on the Renewable Energy Independent Power Producer Procurement Programme (REIPPP), including the negotiation and review of Power Purchase Agreements (PPAs) and related project agreements between IPPs and Eskom as off taker.",
      "Provided strategic transaction and regulatory advice on cross-border transmission and generation projects as lead advisor to the Southern Africa Energy division.",
      "Supported SAE in the setting up of the PMO to manage and seek private funding for all cross-border projects.",
      "Managed key relationships with NERSA (Tariffs, Operating Licences, Grid Code, IPPs, Cross-border operations, load-shedding), ICASA and the Civil Aviation Authority.",
      "Managed legal panel relationships, external spend and fiscal prudence across multiple law firms.",
      "Named Executive of the Year: Office of the CEO (2016).",
      "Listed on Legal 500 GC500 Africa Teams (2017)."
    ]
  },
  {
    role: "General Counsel & Company Secretary",
    organisation: "Mercedes-Benz South Africa",
    period: "February 2012 - June 2013",
    description: "Managed a legal and secretariat function across all divisions with an annual budget of R10 million, covering Treasury, Passenger and Commercial Vehicles, After-Sales, the East London production facility and group procurement.",
    bullets: [
      "Set up and led the legal department aligned to Head Office policy framework and local operational requirements.",
      "Provided compliance direction on Competition law, Intellectual Property, Consumer Liability, Labour Relations, Money-laundering, and JSE Listings requirements (MBSA had a listed Bond).",
      "Served as Exco and Board Company Secretary, ensuring governance, ethics and regulatory compliance.",
      "Managed subsidiary entities: Mercedes-Benz Financial Services, Daimler Fleet Management, Atlantis Foundries and Sandown Motor Holdings."
    ]
  },
  {
    role: "Senior Manager: Legal & Compliance, Company Secretary",
    organisation: "Blue IQ Investment Holdings",
    period: "March 2007 - January 2012",
    description: "Regulatory, legal and compliance management for major Gauteng infrastructure projects including the Newtown revitalisation project, automotive sector investment initiatives and landmark public infrastructure.",
    bullets: [
      "Active management of Blue IQ-initiated projects including the Mandela Bridge, the Constitutional Court precinct, the Innovation Hub, Newtown regeneration, and the OR Tambo International Airport Industrial Development Zone: providing legal structuring, contract negotiation and risk management experience and project delivery contracting.",
      "Designed and implemented robust compliance and risk management frameworks.",
      "Led the R40 million automotive SME incubator in Silverton in partnership with Ford Motor Company as project lead.",
      "Part of the leadership team that delivered Blue IQ's first-ever unqualified audit."
    ]
  },
  {
    role: "Associate / Senior Associate",
    organisation: "Webber Wentzel Attorneys",
    period: "October 2003 - February 2007",
    description: "Started in the Private Equity M&A team. Seconded to Linklaters London. Returned to join the Project Finance and Infrastructure team.",
    bullets: [
      "PE fund establishment, pre investment due diligence, shareholder agreements, share purchase agreements, sale of business agreements, and other commercial agreements and governance services.",
      "Project finance legal work on landmark South African PPP transactions: Refinancing of MozGas, Department of Education Head office, Department Trade and Industry Head office; N3 Toll Concession, the Gautrain Rapid Rail Link, and the Bakwena Platinum Corridor Toll Plaza: involving end-to-end project finance documentation structuring directly analogous to renewable energy project finance and construction contracts.",
      "Gained foundational project finance documentation experience: credit agreements, security packages, direct agreements and lender due diligence."
    ]
  }
];

const EDUCATION_DEVELOPMENT = [
  { year: "2023", qualification: "Introduction to Sustainability Reporting", institution: "Global Reporting Initiative (GRI)" },
  { year: "2019", qualification: "Industrial Policy for Policy Makers", institution: "Trade & Industrial Policy Strategies (TIPS)" },
  { year: "2013", qualification: "Managing Power Sector Reform and Regulation in Africa", institution: "University of Cape Town Graduate School of Business (UCT GSB)" },
  { year: "2012", qualification: "Women in Leadership", institution: "Gordon Institute of Business Science (GIBS)" },
  { year: "2007 - 2008", qualification: "Master of Business Administration (MBA)", institution: "Gordon Institute of Business Science (GIBS)", detail: "Research: Socially Responsible Investing in Private Equity" },
  { year: "1999", qualification: "Management Advancement Programme (MAP)", institution: "Wits Business School" },
  { year: "1995 - 1998", qualification: "Bachelor of Laws (LLB)", institution: "University of South Africa (UNISA)" },
  { year: "1992 - 1994", qualification: "Bachelor of Arts (BA: Law and English)", institution: "University of KwaZulu-Natal (Pietermaritzburg)" }
];

const BOARD_AND_LEADERSHIP = [
  { role: "Board Chairperson", organisation: "Business and Arts South Africa (NPC)", detail: "Championing corporate arts partnerships and governance across South Africa's creative economy." },
  { role: "Advisory Board Member", organisation: "African Women in Energy and Power", detail: "Advancing gender parity and women leadership in the continental energy sector." },
  { role: "Regional Member", organisation: "IUCN International Standards Committee on Nature Based Solutions", detail: "Guiding global standards and frameworks for nature-based interventions." },
  { role: "Mentor", organisation: "Aspire Foundation UK", detail: "Mentoring emerging leaders, female executives, and social change agents." }
];

const THOUGHT_LEADERSHIP_SPEAKING = [
  { title: "Keynote Address: 5th Annual Global Risk Symposium", event: "Risk, Resilience and Leadership (2019)", detail: "Delivered strategic perspectives on resilience, risk management, and adaptive leadership." },
  { title: "Executive of the Year", event: "Office of the CEO (2016)", detail: "Honoured for exemplary executive leadership and governance excellence." },
  { title: "Legal 500 GC500 Africa Teams", event: "Legal 500 Africa (2017)", detail: "Recognised among the premier corporate in-house legal leaders on the African continent." },
  { title: "Conference Moderator", event: "SADC Centre for Renewable Energy & Energy Efficiency (SACREEE)", detail: "Industrial Energy Efficiency Conference (2019)." },
  { title: "Expert Panelist", event: "ESG Africa Conference 2022", detail: "Panel insights on ESG frameworks, implementation, and corporate reporting." },
  { title: "Executive Trainer", event: "South African National Energy Association (SANEA)", detail: "ESG in the context of the Just Energy Transition (JET) (2021 & 2022)." },
  { title: "COP30 Thought Leadership", event: "Climate & Governance Strategic Analysis", detail: "Putting People and Governance at the Resilient Heart of Climate Action." },
  { title: "Economic Insight Publication", event: "Business Day / businesslive.co.za", detail: "Africa needs to be proactive in defining an apt response to the 'new normal'." },
  { title: "Trade & Standards Publication", event: "EE Publishers / ee.co.za", detail: "How the convergence of standards on goods and services can help promote intra-African trade." }
];

const customMedia = [
  {
    id: "motloba-media-1",
    headline: "Embracing Vulnerability and Courage: Zingisa Motloba's Journey in South Africa's Creative Economy",
    publication: "Business and Arts South Africa (BASA)",
    date: "09 Aug 2024",
    caption: "Board Chairperson Zingisa Motloba shares reflections on leadership, corporate governance, and empowering South Africa's creative economy.",
    url: "https://basa.co.za/news/embracing-vulnerability-and-courage-zingisa-motlobas-journey-in-south-africas-creative-economy/",
    action: "Read Article",
    image: "/speakers/Zingisa%20Motloba/Zingisa-Motloba-The-Speakers-Firm4.jpg"
  },
  {
    id: "motloba-media-2",
    headline: "Bowmans appoints Zingisa Motloba as partner in its Johannesburg private equity practice",
    publication: "MyPR / Bowmans",
    date: "October 2023",
    caption: "Bowmans has appointed experienced legal and compliance professional Zingisa Motloba as a partner in its Johannesburg Private Equity Practice, bolstering its ESG and infrastructure investment advisory.",
    url: "https://mypr.co.za/bowmans-appoints-zingisa-motloba-as-partner-in-its-johannesburg-private-equity-practice/",
    action: "Read Announcement",
    image: "/speakers/Zingisa%20Motloba/Zingisa-Motloba-The-Speakers-Firm5.jpg"
  }
];

const customVideos = [
  {
    id: "motloba-video-1",
    label: "Zingisa Motloba - Board Chairperson Address | Business and Arts South Africa (BASA)",
    youtubeId: "lYyDi61JWU4"
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Zingisa Motloba"
      speakerTitle=""
      speakerDesignation="Attorney, Infrastructure and Energy Advisor, ESG & Leadership Strategist"
      speakerRole="Pan-African strategist, senior energy & project finance attorney, and ESG governance advisor unlocking economic infrastructure across African markets."
      speakerRef="TSF-ZM-38"
      heroBackgroundImage="/speakers/Zingisa%20Motloba/Zingisa-Motloba-The-Speakers-Firm.jpg"
      heroMobileBackgroundImage="/speakers/Zingisa%20Motloba/Zingisa-Motloba-The-Speakers-Firm-mobile.jpg"
      heroImagePosition="object-top"
      biographyImage="/speakers/Zingisa%20Motloba/Zingisa-Motloba-The-Speakers-Firm2.jpg"
      bioHook="“Passionate about sustainability that is rooted in unlocking investment in economic infrastructure that catalyses growth and prosperity across African markets.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="zingisa-motloba" customMedia={customMedia} />
      }
    >
      {/* Core Competencies Section */}
      <section className="relative bg-[#000000] px-4 py-12 text-white sm:px-6 md:px-16 md:py-20 border-t border-white/10" aria-labelledby="core-competencies-heading">
        <div className="mx-auto max-w-[1312px]">
          <div className="mb-12 max-w-3xl">
            <p className={`${SECTION_TAG_CLASS} mb-4 w-fit`} style={SECTION_TAG_STYLE}>
              <span>Strategic Advisory</span>
            </p>
            <h2 id="core-competencies-heading" className="font-['Kontora',sans-serif] text-[clamp(1.75rem,5vw,3.25rem)] font-bold uppercase leading-[0.95] tracking-[-0.05em]">
              <span className="block text-[#FFFFFF]">Core Strategic</span>
              <span className="block text-[#e30e04]">Competencies</span>
            </h2>
            <p className="mt-4 text-sm text-[#9A9A9A] sm:text-base leading-relaxed">
              Synthesising deep legal acumen, energy regulation, and ESG governance to unlock high-impact economic infrastructure across Africa.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CORE_COMPETENCIES.map((competency, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="flex items-center gap-4 rounded-[20px] border border-white/10 bg-[#0A0A0A] p-6 transition-colors hover:border-[#e30e04]/60"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e30e04]/10 text-[#e30e04]">
                  <CheckCircle2 className="h-5 w-5" />
                </span>
                <span className="text-base font-bold uppercase tracking-tight text-white">{competency}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section className="relative bg-[#000000] px-4 py-12 text-white sm:px-6 md:px-16 md:py-20 border-t border-white/10" aria-labelledby="experience-heading">
        <div className="mx-auto max-w-[1312px]">
          <div className="mb-12 max-w-3xl">
            <p className={`${SECTION_TAG_CLASS} mb-4 w-fit`} style={SECTION_TAG_STYLE}>
              <span>Track Record</span>
            </p>
            <h2 id="experience-heading" className="font-['Kontora',sans-serif] text-[clamp(1.75rem,5vw,3.25rem)] font-bold uppercase leading-[0.95] tracking-[-0.05em]">
              <span className="block text-[#FFFFFF]">Executive Career</span>
              <span className="block text-[#e30e04]">&amp; Advisory History</span>
            </h2>
            <p className="mt-4 text-sm text-[#9A9A9A] sm:text-base leading-relaxed">
              Over 24 years of legal leadership, cross-border transactional structuring, regulatory authority, and governance oversight.
            </p>
          </div>

          <div className="space-y-6">
            {EXECUTIVE_EXPERIENCE.map((item, idx) => (
              <motion.article 
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className="rounded-[24px] border border-white/10 bg-[#0A0A0A] p-6 sm:p-8 transition-colors hover:border-[#e30e04]/60"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold uppercase tracking-tight text-white">{item.role}</h3>
                    <p className="text-sm font-semibold text-[#e30e04] mt-0.5">{item.organisation}</p>
                  </div>
                  <span className="text-xs font-mono text-[#9A9A9A] bg-white/5 px-3 py-1 rounded-full border border-white/10 w-fit">
                    {item.period}
                  </span>
                </div>
                <p className="text-sm text-[#CCCCCC] leading-relaxed mb-4">{item.description}</p>
                {item.bullets && item.bullets.length > 0 && (
                  <div className="space-y-2 border-t border-white/5 pt-4">
                    {item.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-[#9A9A9A] leading-relaxed">
                        <span className="text-[#e30e04] mt-0.5">•</span>
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Professional Development Section */}
      <section className="relative bg-[#000000] px-4 py-12 text-white sm:px-6 md:px-16 md:py-20 border-t border-white/10" aria-labelledby="education-heading">
        <div className="mx-auto max-w-[1312px]">
          <div className="mb-12 max-w-3xl">
            <p className={`${SECTION_TAG_CLASS} mb-4 w-fit`} style={SECTION_TAG_STYLE}>
              <span>Academic Foundation</span>
            </p>
            <h2 id="education-heading" className="font-['Kontora',sans-serif] text-[clamp(1.75rem,5vw,3.25rem)] font-bold uppercase leading-[0.95] tracking-[-0.05em]">
              <span className="block text-[#FFFFFF]">Education &amp; Professional</span>
              <span className="block text-[#e30e04]">Development</span>
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {EDUCATION_DEVELOPMENT.map((edu, idx) => (
              <div 
                key={idx}
                className="flex flex-col justify-between rounded-[20px] border border-white/10 bg-[#0A0A0A] p-6 transition-colors hover:border-[#e30e04]/60"
              >
                <div>
                  <div className="flex items-center gap-2 text-[#e30e04] mb-3">
                    <GraduationCap className="h-5 w-5" />
                    <span className="text-xs font-mono font-bold text-[#9A9A9A]">{edu.year}</span>
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-tight text-white mb-2 leading-snug">
                    {edu.qualification}
                  </h3>
                  <p className="text-xs text-[#9A9A9A]">
                    {edu.institution}
                  </p>
                </div>
                {edu.detail && (
                  <p className="text-[11px] text-[#e30e04] mt-3 pt-3 border-t border-white/5">
                    {edu.detail}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board & Leadership Roles Section */}
      <section className="relative bg-[#000000] px-4 py-12 text-white sm:px-6 md:px-16 md:py-20 border-t border-white/10" aria-labelledby="board-heading">
        <div className="mx-auto max-w-[1312px]">
          <div className="mb-12 max-w-3xl">
            <p className={`${SECTION_TAG_CLASS} mb-4 w-fit`} style={SECTION_TAG_STYLE}>
              <span>Governance Stewardship</span>
            </p>
            <h2 id="board-heading" className="font-['Kontora',sans-serif] text-[clamp(1.75rem,5vw,3.25rem)] font-bold uppercase leading-[0.95] tracking-[-0.05em]">
              <span className="block text-[#FFFFFF]">Board &amp; Leadership</span>
              <span className="block text-[#e30e04]">Appointments</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {BOARD_AND_LEADERSHIP.map((item, idx) => (
              <div 
                key={idx}
                className="rounded-[24px] border border-white/10 bg-[#0A0A0A] p-6 sm:p-8 transition-colors hover:border-[#e30e04]/60"
              >
                <div className="flex items-center gap-3 text-[#e30e04] mb-3">
                  <ShieldCheck className="h-6 w-6" />
                  <span className="text-xs font-bold uppercase tracking-widest text-[#9A9A9A]">Board Leadership</span>
                </div>
                <h3 className="text-lg font-bold uppercase tracking-tight text-white mb-1">
                  {item.role}
                </h3>
                <p className="text-sm font-semibold text-[#e30e04] mb-3">
                  {item.organisation}
                </p>
                <p className="text-xs sm:text-sm text-[#9A9A9A] leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition, Thought Leadership & Speaking Engagements Section */}
      <section className="relative bg-[#000000] px-4 py-12 text-white sm:px-6 md:px-16 md:py-20 border-t border-white/10" aria-labelledby="thought-leadership-heading">
        <div className="mx-auto max-w-[1312px]">
          <div className="mb-12 max-w-3xl">
            <p className={`${SECTION_TAG_CLASS} mb-4 w-fit`} style={SECTION_TAG_STYLE}>
              <span>Public Thought Leadership</span>
            </p>
            <h2 id="thought-leadership-heading" className="font-['Kontora',sans-serif] text-[clamp(1.75rem,5vw,3.25rem)] font-bold uppercase leading-[0.95] tracking-[-0.05em]">
              <span className="block text-[#FFFFFF]">Recognition &amp; Keynote</span>
              <span className="block text-[#e30e04]">Engagements</span>
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {THOUGHT_LEADERSHIP_SPEAKING.map((item, idx) => (
              <div 
                key={idx}
                className="flex flex-col justify-between rounded-[20px] border border-white/10 bg-[#0A0A0A] p-6 transition-colors hover:border-[#e30e04]/60"
              >
                <div>
                  <div className="flex items-center gap-2 text-[#e30e04] mb-3">
                    <Award className="h-5 w-5" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#9A9A9A]">Recognition</span>
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-tight text-white mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#e30e04] mb-2">
                    {item.event}
                  </p>
                  <p className="text-xs text-[#9A9A9A] leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Reel Video */}
      <ProfileAdditionalSections 
        speakerId="zingisa-motloba" 
        customGallery={[]} 
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
