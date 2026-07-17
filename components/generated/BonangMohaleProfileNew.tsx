"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { BookOpen, BriefcaseBusiness, CalendarDays, CheckCircle, ChevronDown, Play, Quote, Send } from "lucide-react";
import { BiographySection, ProfileAdditionalSections } from "./ProfileAdditionalSectionsNew";

const COLORS = {
  black: "#0A0A0A",
  red: "#e30e04",
  redHover: "#c00b03",
  gray: "#9A9A9A",
  mutedGray: "#9A9A9A",
  silver: "#9A9A9A",
  silverAlt: "#9A9A9A",
  borderGray: "#E5E5E5",
  darkGray: "#1E1E1E",
  cardBorder: "#1E1E1E",
  offWhite: "#FFFFFF",
  deepBlack: "#0A0A0A"
};
const SOFT_RULE_COLOR = COLORS.borderGray;
const NOISE_TEXTURE = "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")";
const FONT_IMPORT = "@import url('https://api.fontshare.com/v2/css?f[]=kontora@400,500,700&display=swap');";
const KONTORA_FONT_CLASS = "font-['Kontora',sans-serif]";
const LABEL_TEXT_CLASS = "text-[10px] font-bold uppercase leading-[1.35] tracking-widest sm:text-xs";
const FLOATING_LABEL_CLASS = "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm font-normal leading-none transition-all duration-200 sm:text-base peer-focus:top-2.5 peer-focus:translate-y-0 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-widest peer-[&:not(:placeholder-shown)]:top-2.5 peer-[&:not(:placeholder-shown)]:translate-y-0 peer-[&:not(:placeholder-shown)]:text-[10px] peer-[&:not(:placeholder-shown)]:font-bold peer-[&:not(:placeholder-shown)]:uppercase peer-[&:not(:placeholder-shown)]:tracking-widest";
const BODY_TEXT_CLASS = "max-w-[65ch] text-sm font-normal leading-relaxed sm:text-base";
const DARK_BODY_TEXT_CLASS = "max-w-[65ch] text-sm font-normal leading-relaxed sm:text-base";
const LEAD_TEXT_CLASS = "max-w-[65ch] text-base font-normal leading-relaxed sm:text-lg md:text-xl";
const CTA_TEXT_CLASS = "text-[10px] font-bold uppercase leading-none tracking-widest sm:text-xs";
const SECTION_HEADING_CLASS = `${KONTORA_FONT_CLASS} max-w-[12ch] text-2xl font-bold uppercase leading-[0.9] tracking-[-0.05em] sm:text-3xl md:text-4xl lg:text-5xl`;
const SUB_HEADING_CLASS = `${KONTORA_FONT_CLASS} text-lg font-bold uppercase leading-[0.95] tracking-[-0.05em] sm:text-xl md:text-2xl`;
const SECTION_TAG_CLASS = "inline-flex items-center border border-l-[4px] px-3 py-2 text-[10px] font-bold uppercase tracking-widest sm:px-4 sm:text-xs";
const FIELD_CLASS = "peer min-h-12 w-full rounded-none border bg-[#FFFFFF] px-3 pb-2 pt-6 text-sm font-normal leading-[1.4] outline-none transition-colors focus:border-[#e30e04] sm:text-base";
const SECTION_TAG_STYLE: React.CSSProperties = {
  backgroundColor: "#111111",
  borderColor: COLORS.darkGray,
  borderLeftColor: COLORS.red,
  color: COLORS.offWhite
};
interface SocialProofLogo {
  id: string;
  name: string;
}
interface SocialProofTickerItem extends SocialProofLogo {
  tickerId: string;
}
const NAV_ITEMS = [{
  id: "nav-biography",
  label: "Biography",
  targetId: "biography"
}, {
  id: "nav-interventions",
  label: "Interventions",
  targetId: "boardroom-interventions"
}, {
  id: "nav-booking",
  label: "Booking",
  targetId: "booking-calendar"
}];
const SOCIAL_PROOF_LOGOS: SocialProofLogo[] = [{
  id: "blsa",
  name: "BLSA"
}, {
  id: "dbsa",
  name: "DBSA"
}, {
  id: "pic",
  name: "PIC"
}, {
  id: "absa",
  name: "ABSA"
}, {
  id: "mtn",
  name: "MTN"
}, {
  id: "eskom",
  name: "ESKOM"
}, {
  id: "sasol",
  name: "SASOL"
}, {
  id: "nedbank",
  name: "NEDBANK"
}, {
  id: "stanlib",
  name: "STANLIB"
}, {
  id: "vodacom",
  name: "VODACOM"
}];
const SOCIAL_PROOF_TICKER_ITEMS: SocialProofTickerItem[] = SOCIAL_PROOF_LOGOS.flatMap(organisation => [{
  id: organisation.id,
  name: organisation.name,
  tickerId: `${organisation.id}-first`
}, {
  id: organisation.id,
  name: organisation.name,
  tickerId: `${organisation.id}-second`
}]);
const CREDENTIAL_BADGES = [{
  id: "reputable-africans",
  label: "100 Most Reputable Africans",
  subtitle: "Continental recognition for trusted public leadership."
}, {
  id: "wef-chairpersons",
  label: "World Economic Forum Community of Chairpersons",
  subtitle: "Global governance network and boardroom dialogue."
}, {
  id: "best-selling-author",
  label: "Best-Selling Author",
  subtitle: "Published frameworks on leadership and transformation."
}, {
  id: "chairman-bidvest",
  label: "Chairman Bidvest Group",
  subtitle: "Active stewardship of a major diversified institution."
}];
const STRATEGIC_THEMES = [{
  id: "lift-as-you-rise",
  number: "Theme 01",
  title: "Lift As You Rise — Institutionalizing Ethical Mentorship.",
  copy: "A definitive strategic framework for C-Suite executives designed to transform corporate transformation from a compliance exercise into a core engine of commercial growth and long-term market legitimacy. Addresses structural economic exclusion with actionable blueprints for sustainable human capital acceleration."
}, {
  id: "restoring-governance",
  number: "Theme 02",
  title: "Restoring Governance in Volatile Ecosystems.",
  copy: "Tailored for executive boards — deconstructs the mechanics of institutional erosion and outlines structural defense mechanisms to preserve corporate integrity, fortify stakeholder trust, and execute turnarounds under high-stakes regulatory or macroeconomic pressure."
}, {
  id: "macro-political-economy",
  number: "Theme 03",
  title: "The Macro-Political Economy and South Africa's Future Path.",
  copy: "A high-level briefing on the intersection of public policy, private sector capability, and systemic risk. Provides deep context on navigating shifting state landscapes, mitigating country risk, and identifying avenues for localized economic growth."
}];
const BOOKS = [{
  id: "lift-as-you-rise-book",
  title: "Lift As You Rise (Best-Seller)",
  coverTitle: "Lift As You Rise",
  author: "Professor Bonang Mohale",
  accent: "#e30e04",
  image: "/speakers/Bonang Mohale/Bonang-Mohale-Lift-As-You-Rise.jpg",
  coverClassName: "from-[#0A0A0A] via-[#1E1E1E] to-[#e30e04]",
  copy: "A masterclass on leadership, identity, and the moral obligation of successful executives to build pipelines of transformation."
}, {
  id: "behold-the-turtle",
  title: "Behold The Turtle",
  coverTitle: "Behold The Turtle",
  author: "Professor Bonang Mohale",
  accent: "#e30e04",
  image: "/speakers/Bonang Mohale/Bonang-Mohale-Behold-the-Turtle-The-Speakers-Firm.jpg",
  coverClassName: "from-[#0A0A0A] via-[#1E1E1E] to-[#e30e04]",
  copy: "An analytical look at corporate courage, strategic patience, and executive resilience required to lead organizations through systemic volatility."
}, {
  id: "coming-in-from-the-cold",
  title: "Coming in From the Cold",
  coverTitle: "Coming in From the Cold",
  author: "Professor Bonang Mohale",
  accent: "#9A9A9A",
  image: "/speakers/Bonang Mohale/Coming-in-from-the-Cold-by-Bonang-Mohale.jpg",
  coverClassName: "from-[#0A0A0A] via-[#1E1E1E] to-[#9A9A9A]",
  copy: "Professor Bonang Mohale shares his personal life journey, reflecting on the experiences, principles, and people that shaped him."
}];
const FULL_BIO = "Professor Bonang Mohale is one of Africa's most distinguished corporate statesmen, globally recognized for his multi-decade track record of driving institutional transformation, building resilient corporate infrastructure, and championing ethical leadership. He actively guides national economic direction as President of BUSA and anchors corporate governance as Chairman of The Bidvest Group Limited, ArcelorMittal, and SBV Services. Previous executive roles include CEO of Business Leadership South Africa (BLSA), VP and Managing Director of Shell South Africa, Chief Executive of Sanlam Shared Services, and Managing Director of Otis Elevators. He serves as Chancellor of the University of the Free State and Professor of Practice at JBS. He is a member of the Community of Chairpersons at the World Economic Forum and was included in Reputation Poll International's 100 Most Reputable Africans.";
const BIO_HOOK = "Professor Bonang Mohale is one of Africa's most distinguished corporate statesmen, operating at the highest levels of commerce, policy, and academia.";
const HERO_BACKGROUND_IMAGE = "/hero_backgrounds/bonang-mohale.jpg";
interface EngagementTier {
  id: string;
  label: string;
  title: string;
  body: string;
  format: string;
  features: Array<{
    id: string;
    text: string;
  }>;
  isHighlighted?: boolean;
}
const ENGAGEMENT_TIERS: EngagementTier[] = [{
  id: "keynote-address",
  label: "KEYNOTE",
  title: "Inspire & Mobilise",
  body: "A high-impact 45–90 min keynote for conferences, summits, and leadership forums. Topics drawn from Prof. Mohale's signature frameworks on accountability, leadership, and national competitiveness.",
  format: "45 – 90 Minutes",
  features: [{
    id: "conference-keynote",
    text: "Conference Keynote"
  }, {
    id: "summit-address",
    text: "Summit Address"
  }, {
    id: "awards-ceremony",
    text: "Awards Ceremony"
  }, {
    id: "virtual-delivery",
    text: "Virtual Delivery Available"
  }]
}, {
  id: "board-retreat-workshop",
  label: "BOARD RETREAT",
  title: "Challenge & Transform",
  body: "Half-day or full-day facilitated workshop for executive teams, boards, and C-suites. Combines provocative thinking with structured frameworks for measurable outcomes.",
  format: "Half Day / Full Day",
  isHighlighted: true,
  features: [{
    id: "executive-facilitation",
    text: "Executive Facilitation"
  }, {
    id: "board-strategy-sessions",
    text: "Board Strategy Sessions"
  }, {
    id: "leadership-offsites",
    text: "Leadership Offsites"
  }, {
    id: "reading-packs",
    text: "Pre/Post Reading Packs"
  }]
}, {
  id: "annual-conference-residency",
  label: "RESIDENCY",
  title: "Embed & Sustain",
  body: "A multi-session engagement over weeks or months, embedded within your organisation's leadership development programme. Highest impact format for systemic culture change.",
  format: "Multi-Session Programme",
  features: [{
    id: "series-of-sessions",
    text: "Series of Sessions"
  }, {
    id: "organisation-wide-programme",
    text: "Organisation-Wide Programme"
  }, {
    id: "executive-coaching",
    text: "Executive Coaching"
  }, {
    id: "progress-tracking",
    text: "Progress Tracking"
  }]
}];
type BookingStep = "details" | "confirmed";
interface BookingDetails {
  fullName: string;
  email: string;
  phone: string;
  discussion: string;
  organisation: string;
  eventType: string;
  eventDate: string;
  message: string;
}
const EMPTY_BOOKING_DETAILS: BookingDetails = {
  fullName: "",
  email: "",
  phone: "",
  discussion: "",
  organisation: "",
  eventType: "keynote-address",
  eventDate: "",
  message: ""
};
interface BorderLineProps {
  side: "left" | "right";
}
const BorderLine = ({
  side
}: BorderLineProps) => {
  return <div className={`absolute top-0 bottom-0 hidden w-[1px] xl:block ${side === "left" ? "left-10" : "right-10"}`} style={{
    backgroundColor: COLORS.darkGray
  }} aria-hidden="true">
      <div className="absolute -top-[3.5px] left-1/2 h-[7px] w-[7px] -translate-x-1/2" style={{
      backgroundColor: COLORS.black
    }} />
    </div>;
};
const BookingForm = () => {
  return <form className="w-full rounded-[18px] border p-4 md:p-5" style={{
    backgroundColor: COLORS.offWhite,
    borderColor: COLORS.borderGray
  }} aria-label="Booking enquiry form">
      <div className="grid gap-3 md:grid-cols-2">
        <label className="relative block">
          <input className={FIELD_CLASS} style={{
          borderColor: SOFT_RULE_COLOR,
          color: COLORS.black
        }} name="fullName" type="text" autoComplete="name" placeholder=" " />
          <span className={FLOATING_LABEL_CLASS} style={{
          color: COLORS.black
        }}>Full Name</span>
        </label>
        <label className="relative block">
          <input className={FIELD_CLASS} style={{
          borderColor: SOFT_RULE_COLOR,
          color: COLORS.black
        }} name="organisation" type="text" autoComplete="organization" placeholder=" " />
          <span className={FLOATING_LABEL_CLASS} style={{
          color: COLORS.black
        }}>Organisation</span>
        </label>
        <label className="relative block">
          <input className={FIELD_CLASS} style={{
          borderColor: SOFT_RULE_COLOR,
          color: COLORS.black
        }} name="email" type="email" autoComplete="email" placeholder=" " />
          <span className={FLOATING_LABEL_CLASS} style={{
          color: COLORS.black
        }}>Email Address</span>
        </label>
        <label className="relative block">
          <select className={`${FIELD_CLASS} appearance-none`} style={{
          borderColor: SOFT_RULE_COLOR,
          color: COLORS.black
        }} name="eventType" defaultValue="">
            <option value="" disabled><span>Select event type</span></option>
            <option value="conference"><span>Conference</span></option>
            <option value="board-retreat"><span>Board Retreat</span></option>
            <option value="corporate-dinner"><span>Corporate Dinner</span></option>
            <option value="leadership-summit"><span>Leadership Summit</span></option>
            <option value="other"><span>Other</span></option>
          </select>
          <span className="pointer-events-none absolute left-3 top-2.5 translate-y-0 text-[10px] font-bold uppercase leading-none tracking-widest transition-all duration-200 sm:text-xs" style={{
          color: COLORS.black
        }}>Event Type</span>
        </label>
      </div>
      <label className="relative mt-3 block">
        <textarea className="peer min-h-[96px] w-full resize-none rounded-none border bg-[#FFFFFF] px-3 pb-2 pt-7 text-sm font-normal leading-[1.4] outline-none transition-colors focus:border-[#e30e04] sm:text-base lg:min-h-[88px]" style={{
        borderColor: SOFT_RULE_COLOR,
        color: COLORS.black
      }} name="message" placeholder=" " />
        <span className={FLOATING_LABEL_CLASS} style={{
        color: COLORS.black
      }}>Message</span>
      </label>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
        <motion.button whileHover={{
        y: -2
      }} whileTap={{
        scale: 0.98
      }} className={`inline-flex items-center justify-center gap-3 rounded-full bg-[#e30e04] px-5 py-3 text-white transition-colors duration-300 hover:bg-[#c00c03] ${CTA_TEXT_CLASS}`} style={{
        backgroundColor: COLORS.red,
        color: COLORS.offWhite
      }} type="submit" aria-label="Send booking enquiry">
          <span>Send Enquiry</span>
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
        </motion.button>
        <p className="max-w-[65ch] text-sm font-normal leading-relaxed sm:text-base" style={{
        color: COLORS.gray
      }}>
          <span>We typically respond within 24 hours.</span>
        </p>
      </div>
    </form>;
};
const BookingDecorativeLines = () => {
  return <div className="pointer-events-none absolute inset-0 flex justify-between px-4 md:px-10" aria-hidden="true">
      <div className="relative h-full w-[1px] bg-[#1E1E1E]">
        <div className="absolute -top-1 -left-[3px] -right-[3px] z-10 h-[7px] rounded-sm bg-white" />
      </div>
      <div className="relative h-full w-[1px] bg-[#1E1E1E]">
        <div className="absolute -top-1 -left-[3px] -right-[3px] z-10 h-[7px] rounded-sm bg-white" />
      </div>
    </div>;
};
const CalendarMock = () => {
  const [step, setStep] = React.useState(1);
  const [enquiryRef] = React.useState(() => `TSF-ENQ-${Math.floor(100000 + Math.random() * 900000)}`);
  
  const [formData, setFormData] = React.useState({
    // Step 1
    fullName: "",
    jobTitle: "",
    organisation: "",
    email: "",
    mobile: "",
    country: "South Africa",
    city: "",
    website: "",
    contactMethod: "Email",
    decisionMaker: "Yes",
    additionalContact: "",
    
    // Step 2
    speakerName: "Professor Bonang Mohale",
    speakerRef: "TSF-BM-01",
    engagementCategory: "Keynote speaker",
    expertise: "",
    alternativeRecommendations: "No",
    eventObjectives: "",
    audienceOutcomes: "",
    presentationStyle: "",
    duration: "",
    additionalActivities: "No",
    
    // Step 3
    eventName: "",
    eventType: "Conference",
    eventFormat: "In-person",
    eventDate: "",
    alternativeDate: "",
    times: "",
    techCheckTime: "",
    performanceTime: "",
    venue: "",
    eventCityCountry: "",
    audienceSize: "",
    audienceProfile: "",
    industry: "",
    classification: "Private",
    paidEvent: "No",
    recorded: "No",
    postEventUse: "No",
    mediaAttendance: "No",
    eventWebsite: "",
    intendedPlatform: "",
    proposedUse: "",
    territory: "",
    usagePeriod: "",
    
    // Step 4
    budgetRange: "",
    currency: "ZAR",
    budgetStatus: "Approved",
    quotationDeadline: "",
    decisionDate: "",
    
    // Step 5
    source: "Google or another search engine",
    sourceDetails: "",
    
    // Step 6
    ackComplete: false,
    ackPolicy: false,
    ackNoReserve: false,
    ackNoTender: false,
    ackConsent: false,
    marketingConsent: false
  });

  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  // Sync currency with country selection
  React.useEffect(() => {
    let matchedCurrency = "USD";
    if (formData.country === "South Africa") matchedCurrency = "ZAR";
    else if (formData.country === "United Kingdom") matchedCurrency = "GBP";
    else if (formData.country === "Europe") matchedCurrency = "EUR";
    else if (formData.country === "Kenya") matchedCurrency = "KES";
    else if (formData.country === "Nigeria") matchedCurrency = "NGN";
    
    setFormData(prev => ({ ...prev, currency: matchedCurrency }));
  }, [formData.country]);

  const getBudgetRanges = () => {
    switch (formData.currency) {
      case "ZAR":
        return ["R50,000 - R100,000", "R100,000 - R150,000", "R150,000 - R200,000", "R200,000+"];
      case "GBP":
        return ["£3,000 - £6,000", "£6,000 - £10,000", "£10,000 - £15,000", "£15,000+"];
      case "EUR":
        return ["€4,000 - €8,000", "€8,000 - €12,000", "€12,000 - €16,000", "€16,000+"];
      case "KES":
        return ["KSh 500,000 - KSh 1,000,000", "KSh 1,000,000+"];
      case "NGN":
        return ["₦5,000,000 - ₦10,000,000", "₦10,000,000+"];
      default:
        return ["$5,000 - $10,000", "$10,000 - $15,000", "$15,000 - $20,000", "$20,000+"];
    }
  };

  const handleFieldChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (currentStep === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
      if (!formData.jobTitle.trim()) newErrors.jobTitle = "Job title is required";
      if (!formData.organisation.trim()) newErrors.organisation = "Organisation is required";
      if (!formData.email.trim()) newErrors.email = "Email address is required";
      if (!formData.mobile.trim()) newErrors.mobile = "Mobile number is required";
      if (!formData.country.trim()) newErrors.country = "Country is required";
      if (!formData.city.trim()) newErrors.city = "City is required";
    }
    
    if (currentStep === 2) {
      if (!formData.expertise.trim()) newErrors.expertise = "Topic or area of expertise is required";
      if (!formData.eventObjectives.trim()) newErrors.eventObjectives = "Event objectives are required";
    }
    
    if (currentStep === 3) {
      if (!formData.eventName.trim()) newErrors.eventName = "Event name is required";
      if (!formData.eventCityCountry.trim()) newErrors.eventCityCountry = "Event city & country are required";
      if (!formData.eventDate.trim()) newErrors.eventDate = "Proposed date is required";
      if (!formData.audienceSize.trim()) newErrors.audienceSize = "Expected audience size is required";
      if (!formData.audienceProfile.trim()) newErrors.audienceProfile = "Audience profile is required";
      if (!formData.industry.trim()) newErrors.industry = "Industry/sector is required";
      
      const requiresMediaConsent = formData.recorded === "Yes" || formData.postEventUse === "Yes";
      if (requiresMediaConsent) {
        if (!formData.intendedPlatform.trim()) newErrors.intendedPlatform = "Intended platform is required";
        if (!formData.proposedUse.trim()) newErrors.proposedUse = "Proposed use is required";
        if (!formData.territory.trim()) newErrors.territory = "Territory is required";
        if (!formData.usagePeriod.trim()) newErrors.usagePeriod = "Usage period is required";
      }
    }
    
    if (currentStep === 4) {
      if (!formData.budgetRange.trim()) newErrors.budgetRange = "Budget range is required";
    }
    
    if (currentStep === 5) {
      const needsDetails = ["Referral or recommendation", "Speaker or talent referral", "Other"].includes(formData.source);
      if (needsDetails && !formData.sourceDetails.trim()) {
        newErrors.sourceDetails = "Please specify source details";
      }
    }
    
    if (currentStep === 6) {
      if (!formData.ackComplete) newErrors.ackComplete = "Please confirm accurate details";
      if (!formData.ackPolicy) newErrors.ackPolicy = "Please accept policy terms";
      if (!formData.ackNoReserve) newErrors.ackNoReserve = "Please acknowledge booking terms";
      if (!formData.ackNoTender) newErrors.ackNoTender = "Please acknowledge tender restrictions";
      if (!formData.ackConsent) newErrors.ackConsent = "Please consent to data processing";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    setStep(prev => Math.max(1, prev - 1));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(6)) {
      setIsSubmitting(true);
      // Simulate API submit
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 1200);
    }
  };

  if (isSubmitted) {
    return (
      <div className="mx-auto max-w-2xl rounded-2xl border border-[#1E1E1E] bg-[#111111] p-8 text-center text-white shadow-2xl">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#e30e04]">
          <CheckCircle className="h-8 w-8 text-white" />
        </div>
        <h3 className={`${SUB_HEADING_CLASS} text-white`}>Enquiry Submitted Successfully</h3>
        <p className="mt-4 text-[#9A9A9A] text-sm leading-relaxed">
          Thank you for considering The Speakers Firm™.
        </p>
        <div className="my-6 rounded-xl bg-black/40 p-4 border border-[#1E1E1E]">
          <p className="text-xs uppercase tracking-widest text-[#9A9A9A]">Reference Number</p>
          <p className="mt-1 text-lg font-mono font-bold text-[#e30e04]">{enquiryRef}</p>
        </div>
        <p className="text-[#9A9A9A] text-sm leading-relaxed text-left max-w-md mx-auto">
          A member of our team will contact you within one business day to assess availability, review your requirements and advise you on the next steps.
          <br /><br />
          <span className="text-xs text-[#FFFFFF]/70 italic">Please note that submitting an enquiry does not reserve or confirm the requested speaker. All bookings remain subject to availability, written confirmation and fulfilment of our commercial terms.</span>
        </p>
        <button 
          onClick={() => {
            setStep(1);
            setIsSubmitted(false);
            setFormData(prev => ({
              ...prev,
              fullName: "",
              email: "",
              mobile: "",
              organisation: "",
              eventName: "",
              eventDate: "",
              ackComplete: false,
              ackPolicy: false,
              ackNoReserve: false,
              ackNoTender: false,
              ackConsent: false
            }));
          }}
          className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#e30e04] px-8 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#c00c03]"
        >
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  const renderProgress = () => {
    return (
      <div className="mb-8 w-full border-b border-[#1E1E1E] pb-6">
        <div className="flex justify-between items-center text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2">
          <span>Step {step} of 6</span>
          <span className="text-[#e30e04]">Progress</span>
        </div>
        <div className="w-full bg-[#1E1E1E] h-1.5 rounded-full overflow-hidden">
          <div 
            className="bg-[#e30e04] h-full transition-all duration-300"
            style={{ width: `${(step / 6) * 100}%` }}
          />
        </div>
        <div className="grid grid-cols-6 text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-[#9A9A9A] mt-3 gap-1">
          <span className={step === 1 ? "text-white" : ""}>1. Contact</span>
          <span className={step === 2 ? "text-white" : ""}>2. Talent</span>
          <span className={step === 3 ? "text-white" : ""}>3. Event</span>
          <span className={step === 4 ? "text-white" : ""}>4. Budget</span>
          <span className={step === 5 ? "text-white" : ""}>5. Source</span>
          <span className={step === 6 ? "text-white" : ""}>6. Consent</span>
        </div>
      </div>
    );
  };

  return (
    <div className="mx-auto w-full max-w-5xl rounded-2xl border border-[#1E1E1E] bg-[#111111] p-6 text-white shadow-2xl md:p-8">
      {renderProgress()}
      
      <form onSubmit={handleFormSubmit} className="space-y-6">
        {step === 1 && (
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white uppercase tracking-wider">Step 1: Contact Information</h4>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Full Name*</span>
                <input 
                  className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                  type="text" 
                  value={formData.fullName} 
                  onChange={e => handleFieldChange("fullName", e.target.value)} 
                />
                {errors.fullName && <p className="text-[#e30e04] text-xs mt-1">{errors.fullName}</p>}
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Job Title*</span>
                <input 
                  className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                  type="text" 
                  value={formData.jobTitle} 
                  onChange={e => handleFieldChange("jobTitle", e.target.value)} 
                />
                {errors.jobTitle && <p className="text-[#e30e04] text-xs mt-1">{errors.jobTitle}</p>}
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Organisation*</span>
                <input 
                  className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                  type="text" 
                  value={formData.organisation} 
                  onChange={e => handleFieldChange("organisation", e.target.value)} 
                />
                {errors.organisation && <p className="text-[#e30e04] text-xs mt-1">{errors.organisation}</p>}
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Business Email Address*</span>
                <input 
                  className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                  type="email" 
                  value={formData.email} 
                  onChange={e => handleFieldChange("email", e.target.value)} 
                />
                {errors.email && <p className="text-[#e30e04] text-xs mt-1">{errors.email}</p>}
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Mobile Number*</span>
                <input 
                  className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                  type="tel" 
                  value={formData.mobile} 
                  onChange={e => handleFieldChange("mobile", e.target.value)} 
                />
                {errors.mobile && <p className="text-[#e30e04] text-xs mt-1">{errors.mobile}</p>}
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Country*</span>
                <select 
                  className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                  value={formData.country} 
                  onChange={e => handleFieldChange("country", e.target.value)}
                >
                  <option value="South Africa">South Africa</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="United States">United States</option>
                  <option value="Europe">Europe</option>
                  <option value="Kenya">Kenya</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Other">Other</option>
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">City*</span>
                <input 
                  className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                  type="text" 
                  value={formData.city} 
                  onChange={e => handleFieldChange("city", e.target.value)} 
                />
                {errors.city && <p className="text-[#e30e04] text-xs mt-1">{errors.city}</p>}
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Organisation Website</span>
                <input 
                  className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                  type="text" 
                  value={formData.website} 
                  onChange={e => handleFieldChange("website", e.target.value)} 
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Preferred Contact Method</span>
                <select 
                  className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                  value={formData.contactMethod} 
                  onChange={e => handleFieldChange("contactMethod", e.target.value)}
                >
                  <option value="Email">Email</option>
                  <option value="Telephone">Telephone</option>
                  <option value="WhatsApp">WhatsApp</option>
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Are you the final decision-maker?</span>
                <select 
                  className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                  value={formData.decisionMaker} 
                  onChange={e => handleFieldChange("decisionMaker", e.target.value)}
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </label>

              <label className="block sm:col-span-2">
                <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Additional decision-maker or booking contact</span>
                <input 
                  className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                  type="text" 
                  value={formData.additionalContact} 
                  onChange={e => handleFieldChange("additionalContact", e.target.value)} 
                />
              </label>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white uppercase tracking-wider">Step 2: Speaker or Talent Requirements</h4>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Speaker Requested</span>
                <input 
                  className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#1A1A1A] px-4 text-sm text-[#888] focus:outline-none cursor-not-allowed"
                  type="text" 
                  readOnly 
                  value={formData.speakerName} 
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Profile Reference</span>
                <input 
                  className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#1A1A1A] px-4 text-sm text-[#888] focus:outline-none cursor-not-allowed"
                  type="text" 
                  readOnly 
                  value={formData.speakerRef} 
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Engagement Category*</span>
                <select 
                  className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                  value={formData.engagementCategory} 
                  onChange={e => handleFieldChange("engagementCategory", e.target.value)}
                >
                  <option value="Keynote speaker">Keynote speaker</option>
                  <option value="Facilitator">Facilitator</option>
                  <option value="Moderator">Moderator</option>
                  <option value="Master of ceremonies">Master of ceremonies</option>
                  <option value="Panellist">Panellist</option>
                  <option value="Comedian">Comedian</option>
                  <option value="Celebrity">Celebrity</option>
                  <option value="Influencer">Influencer</option>
                  <option value="Performer">Performer</option>
                  <option value="Other">Other</option>
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Topic, stream or area of expertise*</span>
                <input 
                  className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                  type="text" 
                  placeholder="e.g. Ethical Leadership, Governance"
                  value={formData.expertise} 
                  onChange={e => handleFieldChange("expertise", e.target.value)} 
                />
                {errors.expertise && <p className="text-[#e30e04] text-xs mt-1">{errors.expertise}</p>}
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Alternative recommendations?</span>
                <select 
                  className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                  value={formData.alternativeRecommendations} 
                  onChange={e => handleFieldChange("alternativeRecommendations", e.target.value)}
                >
                  <option value="Yes">Yes, please propose alternatives if unavailable</option>
                  <option value="No">No, only Bonang Mohale</option>
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Required duration of engagement</span>
                <input 
                  className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                  type="text" 
                  placeholder="e.g. 60 Minutes, Half Day"
                  value={formData.duration} 
                  onChange={e => handleFieldChange("duration", e.target.value)} 
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Preferred presentation style</span>
                <input 
                  className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                  type="text" 
                  placeholder="e.g. Interactive Keynote, Q&A"
                  value={formData.presentationStyle} 
                  onChange={e => handleFieldChange("presentationStyle", e.target.value)} 
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Required for additional activities?</span>
                <select 
                  className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                  value={formData.additionalActivities} 
                  onChange={e => handleFieldChange("additionalActivities", e.target.value)}
                >
                  <option value="Yes">Yes (panel, VIP, media, signing etc)</option>
                  <option value="No">No, keynote presentation only</option>
                </select>
              </label>

              <label className="block sm:col-span-2">
                <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Event objectives*</span>
                <textarea 
                  className="min-h-[80px] w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] p-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                  value={formData.eventObjectives} 
                  onChange={e => handleFieldChange("eventObjectives", e.target.value)} 
                />
                {errors.eventObjectives && <p className="text-[#e30e04] text-xs mt-1">{errors.eventObjectives}</p>}
              </label>

              <label className="block sm:col-span-2">
                <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Desired audience outcomes</span>
                <textarea 
                  className="min-h-[80px] w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] p-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                  value={formData.audienceOutcomes} 
                  onChange={e => handleFieldChange("audienceOutcomes", e.target.value)} 
                />
              </label>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white uppercase tracking-wider">Step 3: Event Information</h4>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Event Name*</span>
                <input 
                  className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                  type="text" 
                  value={formData.eventName} 
                  onChange={e => handleFieldChange("eventName", e.target.value)} 
                />
                {errors.eventName && <p className="text-[#e30e04] text-xs mt-1">{errors.eventName}</p>}
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Event Type*</span>
                <select 
                  className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                  value={formData.eventType} 
                  onChange={e => handleFieldChange("eventType", e.target.value)}
                >
                  <option value="Conference">Conference</option>
                  <option value="Leadership summit">Leadership summit</option>
                  <option value="Corporate function">Corporate function</option>
                  <option value="Awards ceremony">Awards ceremony</option>
                  <option value="Strategy session">Strategy session</option>
                  <option value="Training programme">Training programme</option>
                  <option value="Employee engagement">Employee engagement</option>
                  <option value="Client event">Client event</option>
                  <option value="Media engagement">Media engagement</option>
                  <option value="Other">Other</option>
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Event Format*</span>
                <select 
                  className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                  value={formData.eventFormat} 
                  onChange={e => handleFieldChange("eventFormat", e.target.value)}
                >
                  <option value="In-person">In-person</option>
                  <option value="Virtual">Virtual</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Proposed Event Date*</span>
                <input 
                  className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                  type="text" 
                  placeholder="e.g. 15 September 2026"
                  value={formData.eventDate} 
                  onChange={e => handleFieldChange("eventDate", e.target.value)} 
                />
                {errors.eventDate && <p className="text-[#e30e04] text-xs mt-1">{errors.eventDate}</p>}
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Alternative Date</span>
                <input 
                  className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                  type="text" 
                  value={formData.alternativeDate} 
                  onChange={e => handleFieldChange("alternativeDate", e.target.value)} 
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Event Start and End Time</span>
                <input 
                  className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                  type="text" 
                  placeholder="e.g. 09:00 - 17:00"
                  value={formData.times} 
                  onChange={e => handleFieldChange("times", e.target.value)} 
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Arrival / Technical Check Time</span>
                <input 
                  className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                  type="text" 
                  value={formData.techCheckTime} 
                  onChange={e => handleFieldChange("techCheckTime", e.target.value)} 
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Speaking / Performance Time</span>
                <input 
                  className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                  type="text" 
                  value={formData.performanceTime} 
                  onChange={e => handleFieldChange("performanceTime", e.target.value)} 
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Venue Details</span>
                <input 
                  className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                  type="text" 
                  placeholder="e.g. Sandton Convention Centre"
                  value={formData.venue} 
                  onChange={e => handleFieldChange("venue", e.target.value)} 
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">City and Country*</span>
                <input 
                  className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                  type="text" 
                  placeholder="e.g. Johannesburg, South Africa"
                  value={formData.eventCityCountry} 
                  onChange={e => handleFieldChange("eventCityCountry", e.target.value)} 
                />
                {errors.eventCityCountry && <p className="text-[#e30e04] text-xs mt-1">{errors.eventCityCountry}</p>}
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Expected Audience Size*</span>
                <input 
                  className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                  type="text" 
                  placeholder="e.g. 250 people"
                  value={formData.audienceSize} 
                  onChange={e => handleFieldChange("audienceSize", e.target.value)} 
                />
                {errors.audienceSize && <p className="text-[#e30e04] text-xs mt-1">{errors.audienceSize}</p>}
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Audience Profile & Seniority*</span>
                <input 
                  className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                  type="text" 
                  placeholder="e.g. Executive Board, C-Suite Leaders"
                  value={formData.audienceProfile} 
                  onChange={e => handleFieldChange("audienceProfile", e.target.value)} 
                />
                {errors.audienceProfile && <p className="text-[#e30e04] text-xs mt-1">{errors.audienceProfile}</p>}
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Industry or Sector*</span>
                <input 
                  className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                  type="text" 
                  placeholder="e.g. Financial Services"
                  value={formData.industry} 
                  onChange={e => handleFieldChange("industry", e.target.value)} 
                />
                {errors.industry && <p className="text-[#e30e04] text-xs mt-1">{errors.industry}</p>}
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Event Classification</span>
                <select 
                  className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                  value={formData.classification} 
                  onChange={e => handleFieldChange("classification", e.target.value)}
                >
                  <option value="Public">Public (open registration)</option>
                  <option value="Private">Private (invite only)</option>
                  <option value="Internal">Internal (employees only)</option>
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Is this a paid/ticketed event?</span>
                <select 
                  className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                  value={formData.paidEvent} 
                  onChange={e => handleFieldChange("paidEvent", e.target.value)}
                >
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Will it be recorded/livestreamed?</span>
                <select 
                  className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                  value={formData.recorded} 
                  onChange={e => handleFieldChange("recorded", e.target.value)}
                >
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Will content be used post-event?</span>
                <select 
                  className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                  value={formData.postEventUse} 
                  onChange={e => handleFieldChange("postEventUse", e.target.value)}
                >
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Is media attendance planned?</span>
                <select 
                  className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                  value={formData.mediaAttendance} 
                  onChange={e => handleFieldChange("mediaAttendance", e.target.value)}
                >
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </label>

              <label className="block sm:col-span-2">
                <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Event website / registration link</span>
                <input 
                  className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                  type="text" 
                  value={formData.eventWebsite} 
                  onChange={e => handleFieldChange("eventWebsite", e.target.value)} 
                />
              </label>

              {(formData.recorded === "Yes" || formData.postEventUse === "Yes") && (
                <div className="col-span-1 sm:col-span-2 rounded-xl bg-black/30 border border-[#1E1E1E] p-4 space-y-4 mt-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#e30e04]">Media & Broadcast Rights Details</p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Intended Platform*</span>
                      <input 
                        className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                        type="text" 
                        placeholder="e.g. YouTube, Internal Intranet"
                        value={formData.intendedPlatform} 
                        onChange={e => handleFieldChange("intendedPlatform", e.target.value)} 
                      />
                      {errors.intendedPlatform && <p className="text-[#e30e04] text-xs mt-1">{errors.intendedPlatform}</p>}
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Proposed Use*</span>
                      <input 
                        className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                        type="text" 
                        placeholder="e.g. Educational replay"
                        value={formData.proposedUse} 
                        onChange={e => handleFieldChange("proposedUse", e.target.value)} 
                      />
                      {errors.proposedUse && <p className="text-[#e30e04] text-xs mt-1">{errors.proposedUse}</p>}
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Territory*</span>
                      <input 
                        className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                        type="text" 
                        placeholder="e.g. South Africa, Global"
                        value={formData.territory} 
                        onChange={e => handleFieldChange("territory", e.target.value)} 
                      />
                      {errors.territory && <p className="text-[#e30e04] text-xs mt-1">{errors.territory}</p>}
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Usage Period*</span>
                      <input 
                        className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                        type="text" 
                        placeholder="e.g. 12 months"
                        value={formData.usagePeriod} 
                        onChange={e => handleFieldChange("usagePeriod", e.target.value)} 
                      />
                      {errors.usagePeriod && <p className="text-[#e30e04] text-xs mt-1">{errors.usagePeriod}</p>}
                    </label>
                  </div>
                  <p className="text-[10px] text-[#9A9A9A] leading-relaxed italic">Note: Recording, livestreaming, distribution, and content-usage rights require prior written approval and may attract additional fees.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white uppercase tracking-wider">Step 4: Budget and Commercial Information</h4>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Currency*</span>
                <select 
                  className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                  value={formData.currency} 
                  onChange={e => handleFieldChange("currency", e.target.value)}
                >
                  <option value="ZAR">ZAR (R)</option>
                  <option value="USD">USD ($)</option>
                  <option value="GBP">GBP (£)</option>
                  <option value="EUR">EUR (€)</option>
                  <option value="KES">KES (KSh)</option>
                  <option value="NGN">NGN (₦)</option>
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Speaker Budget Range*</span>
                <select 
                  className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                  value={formData.budgetRange} 
                  onChange={e => handleFieldChange("budgetRange", e.target.value)}
                >
                  <option value="" disabled>Select range...</option>
                  {getBudgetRanges().map((range) => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
                {errors.budgetRange && <p className="text-[#e30e04] text-xs mt-1">{errors.budgetRange}</p>}
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Budget Status*</span>
                <select 
                  className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                  value={formData.budgetStatus} 
                  onChange={e => handleFieldChange("budgetStatus", e.target.value)}
                >
                  <option value="Approved">Approved</option>
                  <option value="Provisional">Provisional</option>
                  <option value="Under consideration">Under consideration</option>
                  <option value="Budget to be discussed">Budget to be discussed</option>
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Proposal or Quotation Deadline</span>
                <input 
                  className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                  type="date" 
                  value={formData.quotationDeadline} 
                  onChange={e => handleFieldChange("quotationDeadline", e.target.value)} 
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Booking Decision Date</span>
                <input 
                  className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                  type="date" 
                  value={formData.decisionDate} 
                  onChange={e => handleFieldChange("decisionDate", e.target.value)} 
                />
              </label>
            </div>

            <div className="rounded-xl border border-[#1E1E1E] bg-black/40 p-5 mt-6 space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-[#e30e04]">Quotation Notice</p>
              <p className="text-xs text-[#9A9A9A] leading-relaxed">
                Unless expressly included in writing, all quotations exclude:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 text-xs text-[#9A9A9A] gap-2 pl-4 list-disc">
                <li>VAT, where applicable</li>
                <li>Technical riders and equipment</li>
                <li>Production and staging requirements</li>
                <li>Travel and flights</li>
                <li>Accommodation</li>
                <li>Ground transportation and transfers</li>
                <li>Security, visas and permits</li>
                <li>Recording, livestreaming and content-usage rights</li>
                <li>Other agreed engagement-related expenses</li>
              </ul>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white uppercase tracking-wider">Step 5: How Did You Hear About Us?</h4>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block sm:col-span-2">
                <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">How did you hear about The Speakers Firm™?</span>
                <select 
                  className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                  value={formData.source} 
                  onChange={e => handleFieldChange("source", e.target.value)}
                >
                  <option value="Google or another search engine">Google or another search engine</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Facebook">Facebook</option>
                  <option value="YouTube">YouTube</option>
                  <option value="TikTok">TikTok</option>
                  <option value="Referral or recommendation">Referral or recommendation</option>
                  <option value="Previous client or booking">Previous client or booking</option>
                  <option value="Speaker or talent referral">Speaker or talent referral</option>
                  <option value="Conference or event">Conference or event</option>
                  <option value="Media appearance">Media appearance</option>
                  <option value="Email campaign or newsletter">Email campaign or newsletter</option>
                  <option value="The Speakers Firm™ team">The Speakers Firm™ team</option>
                  <option value="EmpowaWorx Group">EmpowaWorx Group</option>
                  <option value="Other">Other</option>
                </select>
              </label>

              {["Referral or recommendation", "Speaker or talent referral", "Other"].includes(formData.source) && (
                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Please provide details / person's name*</span>
                  <input 
                    className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    type="text" 
                    value={formData.sourceDetails} 
                    onChange={e => handleFieldChange("sourceDetails", e.target.value)} 
                  />
                  {errors.sourceDetails && <p className="text-[#e30e04] text-xs mt-1">{errors.sourceDetails}</p>}
                </label>
              )}
            </div>
          </div>
        )}

        {step === 6 && (
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white uppercase tracking-wider">Step 6: Review, Policy and Consent</h4>
            
            <div className="rounded-xl border border-[#1E1E1E] bg-black/40 p-5 space-y-4 max-h-[300px] overflow-y-auto text-xs text-[#9A9A9A] leading-relaxed">
              <h5 className="font-bold text-white uppercase text-sm">Booking, Tender, Payment and Confidentiality Policy</h5>
              <p><strong>1. Booking and Payment:</strong> The Speakers Firm™ requires full payment before the event. A booking may only be confirmed once payment has cleared or an authorised purchase order is accepted.</p>
              <p><strong>2. Availability and Confirmation:</strong> Availability cannot be guaranteed or reserved indefinitely. A booking becomes binding only once formal written confirmation is issued by The Speakers Firm™.</p>
              <p><strong>3. Announcements and Marketing:</strong> Clients may not market or represent the speaker as confirmed before receiving formal written confirmation.</p>
              <p><strong>4. Tender and Proposal Restrictions:</strong> Clients may not name or represent any talent in a tender or bid without prior written authorisation.</p>
              <p><strong>5. Recording and Content Rights:</strong> Photography, recording, livestreaming, and post-event content use require prior written approval and may attract additional fees.</p>
              <p><strong>6. Quotation Exclusions:</strong> Quotations exclude VAT, technical riders, travel, accommodation, ground transportation, security, visas, and permits.</p>
              <p><strong>7. Privacy and Confidentiality:</strong> Booking details will be treated as strictly confidential and processed in accordance with data-protection requirements.</p>
              <p><strong>8. No Automatic Agreement:</strong> A submitted booking form, quotation, or purchase order does not independently constitute a final engagement agreement.</p>
            </div>

            <div className="space-y-3">
              <label className="flex items-start gap-3 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={formData.ackComplete} 
                  onChange={e => handleFieldChange("ackComplete", e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-[#1E1E1E] bg-[#0A0A0A] text-[#e30e04] focus:ring-[#e30e04]" 
                />
                <span className="text-xs text-[#9A9A9A]">I confirm that the information provided is complete and accurate.*</span>
              </label>
              {errors.ackComplete && <p className="text-[#e30e04] text-xs pl-7">{errors.ackComplete}</p>}

              <label className="flex items-start gap-3 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={formData.ackPolicy} 
                  onChange={e => handleFieldChange("ackPolicy", e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-[#1E1E1E] bg-[#0A0A0A] text-[#e30e04] focus:ring-[#e30e04]" 
                />
                <span className="text-xs text-[#9A9A9A]">I have read and accept The Speakers Firm™ Booking, Tender, Payment and Confidentiality Policy.*</span>
              </label>
              {errors.ackPolicy && <p className="text-[#e30e04] text-xs pl-7">{errors.ackPolicy}</p>}

              <label className="flex items-start gap-3 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={formData.ackNoReserve} 
                  onChange={e => handleFieldChange("ackNoReserve", e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-[#1E1E1E] bg-[#0A0A0A] text-[#e30e04] focus:ring-[#e30e04]" 
                />
                <span className="text-xs text-[#9A9A9A]">I understand that submitting this enquiry does not reserve or confirm the requested speaker.*</span>
              </label>
              {errors.ackNoReserve && <p className="text-[#e30e04] text-xs pl-7">{errors.ackNoReserve}</p>}

              <label className="flex items-start gap-3 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={formData.ackNoTender} 
                  onChange={e => handleFieldChange("ackNoTender", e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-[#1E1E1E] bg-[#0A0A0A] text-[#e30e04] focus:ring-[#e30e04]" 
                />
                <span className="text-xs text-[#9A9A9A]">I understand that I may not include or represent a speaker from The Speakers Firm™ in a tender, bid or proposal without prior written authorisation.*</span>
              </label>
              {errors.ackNoTender && <p className="text-[#e30e04] text-xs pl-7">{errors.ackNoTender}</p>}

              <label className="flex items-start gap-3 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={formData.ackConsent} 
                  onChange={e => handleFieldChange("ackConsent", e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-[#1E1E1E] bg-[#0A0A0A] text-[#e30e04] focus:ring-[#e30e04]" 
                />
                <span className="text-xs text-[#9A9A9A]">I consent to the secure processing of my information for purposes related to this booking enquiry.*</span>
              </label>
              {errors.ackConsent && <p className="text-[#e30e04] text-xs pl-7">{errors.ackConsent}</p>}

              <label className="flex items-start gap-3 cursor-pointer border-t border-[#1E1E1E] pt-3 mt-3">
                <input 
                  type="checkbox" 
                  checked={formData.marketingConsent} 
                  onChange={e => handleFieldChange("marketingConsent", e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-[#1E1E1E] bg-[#0A0A0A] text-[#e30e04] focus:ring-[#e30e04]" 
                />
                <span className="text-xs text-[#9A9A9A]">I would like to receive relevant speaker recommendations, industry insights and updates from The Speakers Firm™. (Optional)</span>
              </label>
            </div>
          </div>
        )}

        <div className="mt-8 flex flex-col gap-3 border-t border-[#1E1E1E] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-xs text-[#9A9A9A]">
            {step > 1 && (
              <button 
                type="button" 
                onClick={prevStep}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#9A9A9A] px-6 text-[10px] font-bold uppercase tracking-widest text-[#9A9A9A] transition-colors hover:border-white hover:text-white sm:text-xs"
              >
                Back
              </button>
            )}
          </div>
          
          <div>
            {step < 6 ? (
              <button 
                type="button" 
                onClick={nextStep}
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#e30e04] px-7 text-[10px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#c00c03] sm:w-auto sm:text-xs"
              >
                Next Step
              </button>
            ) : (
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#e30e04] px-7 text-[10px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#c00c03] sm:w-auto sm:text-xs"
              >
                {isSubmitting ? "Submitting..." : "Submit Booking Enquiry"}
              </button>
            )}
          </div>
        </div>
      </form>
      
      {/* Contact info for urgent enquiries */}
      <div className="mt-6 border-t border-[#1E1E1E] pt-4 text-center">
        <p className="text-xs text-[#9A9A9A]">
          Have an urgent enquiry? Contact us via telephone or WhatsApp at <a href="tel:+27114827256" className="text-white hover:text-[#e30e04] font-bold">+27(0) 11 482 7256/7257</a>.
        </p>
      </div>
    </div>
  );
};
const BookingSection = () => {
  return <section id="booking-calendar" className="relative flex min-h-[100svh] w-full flex-col items-center overflow-hidden bg-[#0A0A0A]" aria-labelledby="booking-section-heading">
      <div className="h-4 w-full bg-[#e30e04]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 flex justify-between px-4 md:px-10" aria-hidden="true">
        <div className="relative h-full w-[1px] bg-[#1E1E1E]">
          <div className="absolute top-4 -left-[3px] -right-[3px] z-10 h-[7px] rounded-sm bg-[#FFFFFF]" />
        </div>
        <div className="relative h-full w-[1px] bg-[#1E1E1E]">
          <div className="absolute top-4 -left-[3px] -right-[3px] z-10 h-[7px] rounded-sm bg-[#FFFFFF]" />
        </div>
      </div>
      <svg className="pointer-events-none absolute left-0 top-4 h-16 w-full text-[#0A0A0A]" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 34C260 92 520 100 792 44C1032 -6 1240 -7 1440 34V0H0V34Z" fill="currentColor" opacity="0.06" />
      </svg>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-4 py-6 sm:px-6 sm:py-8 md:py-10 lg:px-8 lg:py-12">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }} className={`${SECTION_TAG_CLASS} mb-6 text-center sm:mb-8`} style={SECTION_TAG_STYLE}>
          <span>Make a Booking Enquiry</span>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8,
        delay: 0.12,
        ease: [0.22, 1, 0.36, 1]
      }} className="mb-10 flex flex-wrap justify-center gap-x-3 text-center text-2xl font-bold leading-[0.9] tracking-[-0.05em] sm:text-3xl md:mb-6 md:gap-x-6 md:text-4xl lg:text-5xl">
          <h2 id="booking-section-heading" className="contents">
            <span className="text-[#FFFFFF]">Book Prof. Bonang Mohale</span>
            <span className="text-[#e30e04]">For Your Next Event</span>
          </h2>
        </motion.div>

        <motion.p initial={{
        opacity: 0,
        y: 18
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.7,
        delay: 0.2,
        ease: [0.22, 1, 0.36, 1]
      }} className="mb-10 max-w-2xl text-center text-base leading-relaxed text-[#9A9A9A] sm:text-lg md:mb-16 md:text-xl">
          <span>Complete the form below to register your interest. We respond to all enquiries within 24 hours.</span>
        </motion.p>

        <div className="mb-10 mx-auto flex max-w-md flex-col items-center gap-2 text-center">
          <p className="flex items-center gap-2 text-sm text-[#9A9A9A]">
            <CheckCircle className="h-4 w-4 text-[#e30e04]" aria-hidden="true" />
            <span>24-hour response time</span>
          </p>
          <p className="flex items-center gap-2 text-sm text-[#9A9A9A]">
            <CheckCircle className="h-4 w-4 text-[#e30e04]" aria-hidden="true" />
            <span>Tailored to your event format</span>
          </p>
          <p className="flex items-center gap-2 text-sm text-[#9A9A9A]">
            <CheckCircle className="h-4 w-4 text-[#e30e04]" aria-hidden="true" />
            <span>Confidential and no-obligation</span>
          </p>
        </div>

        <CalendarMock />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#1E1E1E]" aria-hidden="true" />
    </section>;
};
export const AboutTeamSection = () => {
  const [activeStrategicThemeIndex, setActiveStrategicThemeIndex] = React.useState<number | null>(0);
  const [showStickyBookingCta, setShowStickyBookingCta] = React.useState(false);
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };
  React.useEffect(() => {
    const revealElements = Array.from(document.querySelectorAll<HTMLElement>(".mp-reveal, .mp-reveal-left"));
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.16,
      rootMargin: "0px 0px -8% 0px"
    });
    revealElements.forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  React.useEffect(() => {
    const updateStickyCta = () => {
      const bookingSection = document.getElementById("booking-calendar");
      const bookingBounds = bookingSection?.getBoundingClientRect();
      const isBookingVisible = bookingBounds ? bookingBounds.top < window.innerHeight * 0.82 && bookingBounds.bottom > 80 : false;
      setShowStickyBookingCta(window.scrollY > 300 && !isBookingVisible);
    };
    updateStickyCta();
    window.addEventListener("scroll", updateStickyCta, {
      passive: true
    });
    window.addEventListener("resize", updateStickyCta);
    return () => {
      window.removeEventListener("scroll", updateStickyCta);
      window.removeEventListener("resize", updateStickyCta);
    };
  }, []);
  return <div className="w-full overflow-x-hidden font-['Kontora',sans-serif]">
    <section className="relative flex min-h-[100svh] w-full flex-col items-center overflow-hidden px-4 py-0 font-['Kontora',sans-serif] sm:px-6 lg:px-8 xl:px-0" style={{
      backgroundColor: COLORS.offWhite,
      borderColor: SOFT_RULE_COLOR
    }} aria-labelledby="speaker-profile-heading">
      <style>{`${FONT_IMPORT}
        @keyframes tsf-ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
      <div className="absolute left-0 right-0 top-0 z-0 h-[100svh] overflow-hidden bg-[#0A0A0A]" aria-hidden="true">
        <img src={HERO_BACKGROUND_IMAGE} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover object-center md:object-top" />
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.35)_50%,rgba(0,0,0,0.75)_100%)]" />
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_50%_58%,rgba(227,14,4,0.12),transparent_28%),linear-gradient(90deg,rgba(0,0,0,0.46)_0%,rgba(0,0,0,0.12)_50%,rgba(0,0,0,0.46)_100%)]" />
        <div aria-hidden="true" className="absolute inset-0 opacity-[0.055]" style={{
          backgroundImage: NOISE_TEXTURE,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px"
        }} />
      </div>
      <div className="absolute inset-0 z-0 opacity-[0.035]" style={{
        backgroundImage: NOISE_TEXTURE,
        backgroundRepeat: "repeat",
        backgroundSize: "128px 128px"
      }} aria-hidden="true" />

      <div className="absolute inset-0 mx-auto max-w-[1440px] pointer-events-none">
        <BorderLine side="left" />
        <BorderLine side="right" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1312px]">
        <div className="flex w-full flex-1 items-center py-12 sm:py-16 md:py-20 lg:min-h-[100svh] lg:py-24">
          <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
          }} className="flex max-w-5xl flex-col items-start space-y-6 text-left">
              <div className="flex flex-col items-start space-y-5">
                <h1 id="speaker-profile-heading" className="max-w-5xl text-left text-3xl font-bold uppercase leading-[0.84] tracking-[-0.075em] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl" style={{
                color: COLORS.offWhite
              }}>
                  <span>Professor</span>
                  <br />
                  <span style={{
                  color: COLORS.red
                }}>Bonang Mohale</span>
                </h1>
                <motion.div initial={{
                scaleX: 0,
                opacity: 0
              }} whileInView={{
                scaleX: 1,
                opacity: 1
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.74,
                delay: 0.18,
                ease: [0.16, 1, 0.3, 1]
              }} className="h-[2px] w-24 origin-center md:w-36" style={{
                backgroundColor: COLORS.red
              }} aria-hidden="true" />
              </div>

              <div className="flex max-w-[62ch] flex-col items-start space-y-5">
                <p className="text-left text-xl font-bold uppercase leading-tight tracking-[-0.03em] text-white sm:text-2xl md:text-3xl">
                  <span>Chairman. Author. Leadership Authority.</span>
                </p>
                <p className="max-w-xl text-left text-base font-medium leading-relaxed text-white sm:text-lg md:text-xl drop-shadow-md">
                  <span>Transforming organisations through ethical leadership and purpose.</span>
                </p>
                <motion.div initial={{
                opacity: 0,
                y: 16
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5,
                delay: 0.3
              }} viewport={{
                once: true
              }} className="flex w-full flex-col justify-start gap-3 sm:w-auto sm:flex-row sm:gap-4">
                  <button className="flex min-h-[52px] w-full items-center justify-center gap-3 rounded-full bg-[#e30e04] px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-white shadow-md transition-colors duration-200 hover:bg-[#c00c03] sm:w-auto sm:px-8 sm:text-xs" type="button" onClick={() => scrollToSection("booking-calendar")} aria-label="Book an engagement call">
                    <CalendarDays className="h-5 w-5" aria-hidden="true" />
                    <span>Book an Engagement Call</span>
                  </button>
                  <button className="flex min-h-[52px] w-full items-center justify-center gap-3 rounded-full border border-[#FFFFFF]/80 bg-transparent px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-[#FFFFFF] transition-colors duration-200 hover:bg-[#FFFFFF] hover:text-[#0A0A0A] sm:w-auto sm:px-8 sm:text-xs" type="button" onClick={() => scrollToSection("biography")} aria-label="Explore Professor Mohale's work">
                    <ChevronDown className="h-5 w-5" aria-hidden="true" />
                    <span>Explore His Work</span>
                  </button>
                </motion.div>
              </div>
            </motion.div>
        </div>
      </div>

      <section className="relative w-full overflow-hidden border-t border-b border-[#E5E5E5] bg-[#FFFFFF] px-4 py-8 sm:py-10" aria-labelledby="social-proof-heading">
        <div className="relative z-10 mx-auto max-w-[1312px]">
          <p id="social-proof-heading" className="mb-6 text-center text-[10px] font-bold uppercase tracking-widest text-[#9A9A9A] sm:text-xs">
            <span>Trusted In Serious Rooms</span>
          </p>
          <div className="overflow-hidden" aria-label="Trusted organisations">
            <div className="flex flex-nowrap gap-3" style={{
              animation: "tsf-ticker 22s linear infinite"
            }}>
              {SOCIAL_PROOF_LOGOS.flatMap(logo => [{
                ...logo,
                tickerId: `${logo.id}-first`
              }, {
                ...logo,
                tickerId: `${logo.id}-second`
              }]).map(logo => <span key={logo.tickerId} className="inline-flex shrink-0 items-center rounded-full border border-[#E5E5E5] px-4 py-2 text-sm font-bold uppercase tracking-widest text-[#0A0A0A]">
                  <span>{logo.name}</span>
                </span>)}
            </div>
          </div>
        </div>
      </section>

      <div className="relative left-1/2 w-screen -translate-x-1/2">
        <BiographySection />
      </div>

      <div className="relative left-1/2 w-screen -translate-x-1/2">
        <motion.section initial={{
          opacity: 0,
          y: 24
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: "-120px"
        }} transition={{
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1]
        }} className="relative w-full overflow-hidden bg-[#0A0A0A] px-4 py-6 text-white sm:px-6 sm:py-8 md:py-10 lg:px-8 lg:py-12" aria-labelledby="boardroom-section-heading" id="boardroom-interventions">
        <div className="pointer-events-none absolute inset-0 hidden justify-center xl:flex" aria-hidden="true">
          <div className="relative h-full w-full max-w-[1440px] border-x border-[#1E1E1E]">
            <div className="absolute top-0 -left-[3.5px] h-[7px] w-[7px] bg-white" />
            <div className="absolute top-0 -right-[3.5px] h-[7px] w-[7px] bg-white" />
          </div>
        </div>
        <div className="relative z-10 mx-auto flex w-full max-w-[1312px] flex-col gap-8 sm:gap-10 lg:gap-16 xl:flex-row">
          <div className="flex flex-col items-start justify-start gap-8 xl:max-w-[420px]">
            <div className={SECTION_TAG_CLASS} style={SECTION_TAG_STYLE}>
              <span>Boardroom Interventions and Keynotes</span>
            </div>
            <h2 id="boardroom-section-heading" className={`${SECTION_HEADING_CLASS} text-balance text-start`}>
              <span className="block text-[#FFFFFF]">Boardroom Interventions</span>
              <span className="block text-[#e30e04]">And Keynotes</span>
            </h2>
          </div>
          <div className="flex flex-grow justify-center xl:justify-end">
            <div className="flex w-full flex-col gap-0 overflow-hidden rounded-[24px] md:rounded-[32px]">
              {STRATEGIC_THEMES.map((theme, themeIndex) => {
                const isActive = activeStrategicThemeIndex === themeIndex;
                return <motion.article key={theme.id} className={`w-full overflow-hidden border-b border-[#1E1E1E] last:border-b-0 ${isActive ? "bg-[#111111]" : "bg-[#0A0A0A]"}`} aria-label={`${theme.number} ${theme.title}`}>
                    <button type="button" className="flex min-h-12 w-full cursor-pointer items-start justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-[#111111] sm:items-center sm:gap-6 sm:px-8 sm:py-6" aria-expanded={isActive} aria-controls={`${theme.id}-panel`} onClick={() => setActiveStrategicThemeIndex(isActive ? null : themeIndex)}>
                      <span className="flex min-w-0 flex-1 flex-col gap-2 sm:flex-row sm:items-center sm:gap-8">
                        <span className={`shrink-0 text-[10px] font-bold uppercase tracking-widest [font-variant-numeric:tabular-nums] sm:text-xs ${isActive ? "text-[#e30e04]" : "text-[#9A9A9A]"}`}>{theme.number.replace("Theme ", "")}</span>
                        <span className="min-w-0 text-base font-semibold uppercase tracking-tight text-white sm:text-lg md:text-xl">{theme.title}</span>
                      </span>
                      <ChevronDown className={`h-5 w-5 shrink-0 transition-transform duration-300 ${isActive ? "rotate-180 text-[#e30e04]" : "text-[#9A9A9A]"}`} aria-hidden="true" />
                    </button>
                    {isActive ? <motion.div id={`${theme.id}-panel`} initial={{
                    height: 0,
                    opacity: 0
                  }} animate={{
                    height: "auto",
                    opacity: 1
                  }} transition={{
                    duration: 0.35,
                    ease: "easeOut"
                  }} className="overflow-hidden">
                        <p className="max-w-2xl px-5 pb-6 text-sm leading-relaxed text-[#9A9A9A] sm:px-8 sm:pb-8 sm:text-base">
                          <span>{theme.copy}</span>
                        </p>
                      </motion.div> : <div className="px-5 pb-4 text-xs leading-relaxed text-[#9A9A9A] opacity-70 line-clamp-2 sm:px-8 sm:text-sm">
                        <span>{theme.copy.slice(0, 120)}...</span>
                      </div>}
                  </motion.article>;
              })}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-[1px] w-full bg-[#1E1E1E]" aria-hidden="true" />
        </motion.section>
      </div>

      <motion.section initial={{
        opacity: 0,
        y: 24
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: "-120px"
      }} transition={{
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1]
      }} style={{
        display: "none"
      }} className="relative grid grid-cols-1 gap-8 py-6 sm:gap-10 sm:py-8 md:py-10 lg:grid-cols-12 lg:gap-16 lg:py-12">
        <div className="col-span-1 bg-[inherit] py-2 lg:sticky lg:top-0 lg:z-10 lg:col-span-4 lg:px-8 lg:py-6">
          <h2 className={SECTION_HEADING_CLASS}>
            <span className="block text-[#0A0A0A]">Evidence Of</span>
            <span className="block text-[#e30e04]">Authority</span>
          </h2>
        </div>
        <div className="col-span-1 space-y-8 lg:col-span-8">
          <article className="rounded-[22px] border p-5 sm:p-6 md:p-8" style={{
            backgroundColor: "#111111",
            borderColor: COLORS.darkGray,
            boxShadow: "0 24px 70px rgba(10, 10, 10, 0.12)"
          }}>
            <div className="mb-7 flex items-center gap-3">
              <BookOpen aria-hidden="true" className="h-5 w-5" style={{
                color: COLORS.red
              }} />
              <h3 className={SUB_HEADING_CLASS} style={{
                color: COLORS.offWhite
              }}>
                <span>Books</span>
              </h3>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {BOOKS.map(book => <div key={book.id} className="grid gap-5 sm:grid-cols-[132px_1fr] md:grid-cols-1 lg:grid-cols-[150px_1fr]">
                  <figure className="w-full max-w-[132px] lg:max-w-[150px]" aria-label={`${book.coverTitle} book cover`}>
                    <div className="relative aspect-[2/3] overflow-hidden rounded-[6px] border shadow-[16px_18px_34px_rgba(15,15,15,0.24)]" style={{
                    borderColor: "rgba(255, 255, 255, 0.22)"
                  }}>
                      <img src={book.image} alt={book.coverTitle} className="h-full w-full object-cover" />
                    </div>
                    <figcaption className="sr-only"><span>{book.coverTitle} by {book.author}</span></figcaption>
                  </figure>
                  <div className="space-y-3">
                    <h4 className={SUB_HEADING_CLASS} style={{
                    color: COLORS.offWhite
                  }}>
                      <span>{book.title}</span>
                    </h4>
                    <p className={DARK_BODY_TEXT_CLASS} style={{
                    color: COLORS.silver
                  }}>
                      <span>{book.copy}</span>
                    </p>
                  </div>
                </div>)}
            </div>
          </article>

          <article className="rounded-[22px] border p-5 sm:p-6 md:p-8" style={{
            backgroundColor: COLORS.offWhite,
            borderColor: COLORS.borderGray
          }}>
            <div className="mb-5 flex items-center gap-3">
              <BriefcaseBusiness aria-hidden="true" className="h-5 w-5" style={{
                color: COLORS.red
              }} />
              <h3 className={SUB_HEADING_CLASS} style={{
                color: COLORS.black
              }}>
                <span>Engagements</span>
              </h3>
            </div>
            <figure>
              <div className="relative aspect-video overflow-hidden rounded-[18px] border" style={{
                borderColor: COLORS.darkGray,
                backgroundImage: "linear-gradient(135deg, #0A0A0A 0%, #0A0A0A 54%, #1E1E1E 100%)"
              }}>
                <div className="absolute inset-0 opacity-30" style={{
                  backgroundImage: "radial-gradient(circle at 24% 30%, rgba(227, 14, 4, 0.46), transparent 24%), linear-gradient(90deg, rgba(255,255,255,0.12) 0 1px, transparent 1px 100%)",
                  backgroundSize: "auto, 42px 42px"
                }} aria-hidden="true" />
                <button className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#FFFFFF]/45 bg-[#0A0A0A]/45 text-[#FFFFFF] transition-colors hover:border-[#e30e04] hover:bg-[#e30e04] sm:h-20 sm:w-20" type="button" aria-label="Play The Speakers Firm Book Roundtable Series video">
                  <Play aria-hidden="true" className="ml-1 h-6 w-6 fill-current sm:h-8 sm:w-8" />
                </button>
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-7" style={{
                  backgroundImage: "linear-gradient(to top, rgba(10, 10, 10, 0.96), rgba(10, 10, 10, 0))"
                }}>
                  <h4 className={`${KONTORA_FONT_CLASS} max-w-[65ch] text-xl font-bold leading-tight tracking-[-0.04em] sm:text-2xl md:text-3xl`} style={{
                    color: COLORS.offWhite
                  }}>
                    <span>The Speakers Firm Book Roundtable Series</span>
                  </h4>
                </div>
              </div>
              <figcaption className="mt-4 max-w-[65ch] text-sm font-normal leading-relaxed sm:text-base" style={{
                color: COLORS.gray
              }}>
                <span>Professor Bonang Mohale joins fellow economic and political analysts in a closed-door broadcast roundtable discussing economic restructuring and corporate statesmanship.</span>
              </figcaption>
            </figure>
          </article>
        </div>
      </motion.section>

    <Quote className="absolute bottom-10 right-6 h-20 w-20 opacity-[0.04] md:right-16 md:h-28 md:w-28" style={{
      color: COLORS.black
    }} aria-hidden="true" />

    <div className="absolute bottom-0 left-0 h-px w-full" style={{
      backgroundColor: COLORS.darkGray
    }} aria-hidden="true" />
  </section>
  <ProfileAdditionalSections />
  <BookingSection />
</div>;
};
