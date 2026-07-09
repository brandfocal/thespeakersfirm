"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  BookOpen, 
  BriefcaseBusiness, 
  CalendarDays, 
  CheckCircle, 
  ChevronDown, 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  Globe, 
  Menu, 
  Play, 
  Quote, 
  Send, 
  X 
} from "lucide-react";
import { CallToActionSection } from "./CallToActionSection";

const COLORS = {
  black: "#212121",
  red: "#e30e04",
  redHover: "#c00b03",
  gray: "#686869",
  mutedGray: "#AAAAAA",
  silver: "#AFB0B0",
  silverAlt: "#AFAFBA",
  borderGray: "#C7C7C8",
  darkGray: "#393939",
  cardBorder: "#333333",
  offWhite: "#F8F7F5",
  deepBlack: "#0F0F0F"
};

const SOFT_RULE_COLOR = COLORS.borderGray;
const NOISE_TEXTURE = "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")";
const FONT_IMPORT = "@import url('https://api.fontshare.com/v2/css?f[]=kontora@400,500,700&display=swap');";
const KONTORA_FONT_CLASS = "font-['Kontora',sans-serif]";
const LABEL_TEXT_CLASS = "text-[11px] font-bold uppercase leading-[1.35] tracking-[0.12em] sm:text-[12px]";
const FLOATING_LABEL_CLASS = "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[18px] font-normal leading-none transition-all duration-200 peer-focus:top-2.5 peer-focus:translate-y-0 peer-focus:text-[11px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-[0.16em] peer-[&:not(:placeholder-shown)]:top-2.5 peer-[&:not(:placeholder-shown)]:translate-y-0 peer-[&:not(:placeholder-shown)]:text-[11px] peer-[&:not(:placeholder-shown)]:font-bold peer-[&:not(:placeholder-shown)]:uppercase peer-[&:not(:placeholder-shown)]:tracking-[0.16em]";
const BODY_TEXT_CLASS = "max-w-[65ch] text-[14px] font-normal leading-[1.65] sm:text-[15px] md:text-[16px] md:leading-[1.65]";
const DARK_BODY_TEXT_CLASS = "max-w-[65ch] text-[14px] font-normal leading-[1.65] sm:text-[15px] md:text-[16px] md:leading-[1.65]";
const LEAD_TEXT_CLASS = "max-w-[65ch] text-[17px] font-normal leading-[1.55] sm:text-[18px] md:text-[22px]";
const CTA_TEXT_CLASS = "text-[11px] font-bold uppercase leading-none tracking-[0.1em] sm:text-[12px]";
const SECTION_HEADING_CLASS = `${KONTORA_FONT_CLASS} max-w-[12ch] text-[clamp(2.15rem,12vw,5rem)] font-bold leading-[0.9] tracking-[-0.05em]`;
const SUB_HEADING_CLASS = `${KONTORA_FONT_CLASS} text-[clamp(1.25rem,6vw,2.5rem)] font-bold leading-[0.95] tracking-[-0.05em]`;
const SECTION_TAG_CLASS = "inline-flex items-center border border-l-[4px] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] sm:px-4 sm:text-[12px]";
const FIELD_CLASS = "peer h-14 w-full rounded-none border bg-[#F8F7F5] px-3 pb-2 pt-6 text-[18px] font-normal leading-[1.4] outline-none transition-colors focus:border-[#e30e04]";

const SECTION_TAG_STYLE: React.CSSProperties = {
  backgroundColor: COLORS.darkGray,
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

const CURRENT_ROLES = [{
  id: "bidvest-chairman",
  label: "Chairman of The Bidvest Group Limited"
}, {
  id: "ufs-chancellor",
  label: "Chancellor of the University of the Free State"
}, {
  id: "busa-president",
  label: "President of Business Unity South Africa (BUSA)"
}, {
  id: "jbs-professor",
  label: "Professor of Practice at the Johannesburg Business School (JBS)"
}];

const NAV_ITEMS = [{
  id: "nav-brief",
  label: "The Brief",
  targetId: "the-brief"
}, {
  id: "nav-interventions",
  label: "Interventions",
  targetId: "boardroom-interventions"
}, {
  id: "nav-booking",
  label: "Booking",
  targetId: "booking-calendar"
}, {
  id: "nav-enquiry",
  label: "Enquiry",
  targetId: "enquiry-form"
}];

const SOCIAL_PROOF_LOGOS: SocialProofLogo[] = [{
  id: "bidvest-group",
  name: "BIDVEST GROUP"
}, {
  id: "busa",
  name: "BUSA"
}, {
  id: "university-of-free-state",
  name: "UNIVERSITY OF FREE STATE"
}, {
  id: "johannesburg-business-school",
  name: "JOHANNESBURG BUSINESS SCHOOL"
}, {
  id: "world-economic-forum",
  name: "WORLD ECONOMIC FORUM"
}, {
  id: "national-planning-commission",
  name: "NATIONAL PLANNING COMMISSION"
}, {
  id: "south-african-reserve-bank",
  name: "SOUTH AFRICAN RESERVE BANK"
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
  image: "/speakers/Bonang Mohale/Bonang-Mohale-Lift-As-You-Rise.jpg",
  author: "Professor Bonang Mohale",
  copy: "A masterclass on leadership, identity, and the moral obligation of successful executives to build pipelines of transformation."
}, {
  id: "behold-the-turtle",
  title: "Behold The Turtle",
  image: "/speakers/Bonang Mohale/Bonang-Mohale-Behold-the-Turtle-The-Speakers-Firm.jpg",
  author: "Professor Bonang Mohale",
  copy: "An analytical look at corporate courage, strategic patience, and executive resilience required to lead organizations through systemic volatility."
}];

const VIDEOS = [
  {
    id: "2s5CXK-w0AQ",
    title: "C-Suite Mentorship & Transformation",
    description: "Professor Bonang Mohale shares insights on ethical mentorship and corporate leadership development."
  },
  {
    id: "z20ciVNtc8A",
    title: "Governance in Volatile Corporate Ecosystems",
    description: "An in-depth dialogue on corporate governance defense mechanisms and rebuilding trust."
  },
  {
    id: "Txr0O_M6bb0",
    title: "Ethics, Statesmanship & Sustainable Mentorship",
    description: "Practical steps to implementing structural C-Suite development and moral stewardship."
  },
  {
    id: "O6_1XH3MMcE",
    title: "Economic Restructuring & Private Sector Capacity",
    description: "Navigating shifting state landscapes and driving localized economic capability."
  }
];

const FULL_BIO = "Professor Bonang Mohale is one of Africa's most distinguished corporate statesmen, globally recognized for his multi-decade track record of driving institutional transformation, building resilient corporate infrastructure, and championing ethical leadership. He actively guides national economic direction as President of BUSA and anchors corporate governance as Chairman of The Bidvest Group Limited, ArcelorMittal, and SBV Services. Previous executive roles include CEO of Business Leadership South Africa (BLSA), VP and Managing Director of Shell South Africa, Chief Executive of Sanlam Shared Services, and Managing Director of Otis Elevators. He serves as Chancellor of the University of the Free State and Professor of Practice at JBS. He is a member of the Community of Chairpersons at the World Economic Forum and was included in Reputation Poll International's 100 Most Reputable Africans.";
const BIO_HOOK = "Professor Bonang Mohale is one of Africa's most distinguished corporate statesmen, operating at the highest levels of commerce, policy, and academia.";

interface CalendarDay {
  id: string;
  day: number;
  isAvailable: boolean;
  isCurrentMonth: boolean;
  isSelected?: boolean;
}

const WEEKDAYS = [{
  id: "monday",
  label: "MON"
}, {
  id: "tuesday",
  label: "TUE"
}, {
  id: "wednesday",
  label: "WED"
}, {
  id: "thursday",
  label: "THU"
}, {
  id: "friday",
  label: "FRI"
}, {
  id: "saturday",
  label: "SAT"
}, {
  id: "sunday",
  label: "SUN"
}];

const CALENDAR_DAYS: CalendarDay[] = [{
  id: "may-27",
  day: 27,
  isAvailable: false,
  isCurrentMonth: false
}, {
  id: "may-28",
  day: 28,
  isAvailable: false,
  isCurrentMonth: false
}, {
  id: "may-29",
  day: 29,
  isAvailable: false,
  isCurrentMonth: false
}, {
  id: "may-30",
  day: 30,
  isAvailable: false,
  isCurrentMonth: false
}, {
  id: "may-31",
  day: 31,
  isAvailable: false,
  isCurrentMonth: false
}, {
  id: "june-01",
  day: 1,
  isAvailable: false,
  isCurrentMonth: true
}, {
  id: "june-02",
  day: 2,
  isAvailable: false,
  isCurrentMonth: true
}, {
  id: "june-03",
  day: 3,
  isAvailable: true,
  isCurrentMonth: true
}, {
  id: "june-04",
  day: 4,
  isAvailable: true,
  isCurrentMonth: true
}, {
  id: "june-05",
  day: 5,
  isAvailable: false,
  isCurrentMonth: true
}, {
  id: "june-06",
  day: 6,
  isAvailable: true,
  isCurrentMonth: true
}, {
  id: "june-07",
  day: 7,
  isAvailable: true,
  isCurrentMonth: true
}, {
  id: "june-08",
  day: 8,
  isAvailable: false,
  isCurrentMonth: true
}, {
  id: "june-09",
  day: 9,
  isAvailable: false,
  isCurrentMonth: true
}, {
  id: "june-10",
  day: 10,
  isAvailable: true,
  isCurrentMonth: true
}, {
  id: "june-11",
  day: 11,
  isAvailable: false,
  isCurrentMonth: true
}, {
  id: "june-12",
  day: 12,
  isAvailable: true,
  isCurrentMonth: true
}, {
  id: "june-13",
  day: 13,
  isAvailable: true,
  isCurrentMonth: true
}, {
  id: "june-14",
  day: 14,
  isAvailable: false,
  isCurrentMonth: true
}, {
  id: "june-15",
  day: 15,
  isAvailable: true,
  isCurrentMonth: true,
  isSelected: true
}, {
  id: "june-16",
  day: 16,
  isAvailable: false,
  isCurrentMonth: true
}, {
  id: "june-17",
  day: 17,
  isAvailable: true,
  isCurrentMonth: true
}, {
  id: "june-18",
  day: 18,
  isAvailable: true,
  isCurrentMonth: true
}, {
  id: "june-19",
  day: 19,
  isAvailable: false,
  isCurrentMonth: true
}, {
  id: "june-20",
  day: 20,
  isAvailable: true,
  isCurrentMonth: true
}, {
  id: "june-21",
  day: 21,
  isAvailable: true,
  isCurrentMonth: true
}, {
  id: "june-22",
  day: 22,
  isAvailable: false,
  isCurrentMonth: true
}, {
  id: "june-23",
  day: 23,
  isAvailable: false,
  isCurrentMonth: true
}, {
  id: "june-24",
  day: 24,
  isAvailable: true,
  isCurrentMonth: true
}, {
  id: "june-25",
  day: 25,
  isAvailable: false,
  isCurrentMonth: true
}, {
  id: "june-26",
  day: 26,
  isAvailable: true,
  isCurrentMonth: true
}, {
  id: "june-27",
  day: 27,
  isAvailable: true,
  isCurrentMonth: true
}, {
  id: "june-28",
  day: 28,
  isAvailable: false,
  isCurrentMonth: true
}, {
  id: "june-29",
  day: 29,
  isAvailable: false,
  isCurrentMonth: true
}, {
  id: "june-30",
  day: 30,
  isAvailable: true,
  isCurrentMonth: true
}];

type BookingStep = "slot" | "details" | "confirmed";

interface TimeSlot {
  id: string;
  label: string;
}

interface BookingDetails {
  fullName: string;
  email: string;
  phone: string;
  discussion: string;
}

const SAST_TIME_SLOTS: TimeSlot[] = [{
  id: "sast-0900",
  label: "09:00"
}, {
  id: "sast-0930",
  label: "09:30"
}, {
  id: "sast-1000",
  label: "10:00"
}, {
  id: "sast-1030",
  label: "10:30"
}, {
  id: "sast-1100",
  label: "11:00"
}, {
  id: "sast-1130",
  label: "11:30"
}, {
  id: "sast-1200",
  label: "12:00"
}, {
  id: "sast-1230",
  label: "12:30"
}, {
  id: "sast-1300",
  label: "13:00"
}, {
  id: "sast-1330",
  label: "13:30"
}, {
  id: "sast-1400",
  label: "14:00"
}, {
  id: "sast-1430",
  label: "14:30"
}, {
  id: "sast-1500",
  label: "15:00"
}, {
  id: "sast-1530",
  label: "15:30"
}, {
  id: "sast-1600",
  label: "16:00"
}, {
  id: "sast-1630",
  label: "16:30"
}, {
  id: "sast-1700",
  label: "17:00"
}];

const EMPTY_BOOKING_DETAILS: BookingDetails = {
  fullName: "",
  email: "",
  phone: "",
  discussion: ""
};

const getCalendarDateLabel = (day: CalendarDay) => `${day.day} June 2024`;

interface BorderLineProps {
  side: "left" | "right";
}

const BorderLine = ({
  side
}: BorderLineProps) => {
  return <div className={`absolute top-0 bottom-0 hidden w-[1px] xl:block ${side === "left" ? "left-10" : "right-10"}`} style={{
    backgroundColor: COLORS.borderGray
  }} aria-hidden="true">
      <div className="absolute -top-[3.5px] left-1/2 h-[7px] w-[7px] -translate-x-1/2" style={{
      backgroundColor: COLORS.black
    }} />
    </div>;
};

const BookingForm = () => {
  return (
    <form className="w-full rounded-[18px] border p-4 md:p-5" style={{
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
          <span className="pointer-events-none absolute left-3 top-2.5 translate-y-0 text-[11px] font-bold uppercase leading-none tracking-[0.16em] transition-all duration-200" style={{
            color: COLORS.black
          }}>Event Type</span>
        </label>
      </div>
      <label className="relative mt-3 block">
        <textarea className="peer min-h-[96px] w-full resize-none rounded-none border bg-[#F8F7F5] px-3 pb-2 pt-7 text-[18px] font-normal leading-[1.4] outline-none transition-colors focus:border-[#e30e04] lg:min-h-[88px]" style={{
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
        }} className={`inline-flex items-center justify-center gap-3 rounded-full bg-[#e30e04] px-5 py-3 text-white transition-opacity duration-300 hover:opacity-90 ${CTA_TEXT_CLASS}`} style={{
          backgroundColor: COLORS.red,
          color: COLORS.offWhite
        }} type="submit" aria-label="Send booking enquiry">
          <span>Send Enquiry</span>
          <Send aria-hidden="true" className="h-4 w-4" />
        </motion.button>
        <p className="max-w-[65ch] text-[15px] font-normal leading-[1.6] md:text-[16px] md:leading-[1.65]" style={{
          color: COLORS.gray
        }}>
          <span>We typically respond within 24 hours.</span>
        </p>
      </div>
    </form>
  );
};

const AbstractPortrait = () => {
  return (
    <figure className="group relative isolate flex min-h-[clamp(280px,90vw,500px)] w-full max-w-[500px] flex-col overflow-hidden rounded-[22px] border transition-colors duration-[400ms] ease-out hover:border-[#e30e04]/70 sm:min-h-[clamp(340px,70vw,500px)] lg:h-[calc(100vh-128px)] lg:max-h-[560px]" style={{
      backgroundColor: COLORS.deepBlack,
      borderColor: COLORS.darkGray,
      boxShadow: "0 24px 70px rgba(33, 33, 33, 0.18)"
    }} aria-label="Portrait for Professor Bonang Mohale">
      <img className="absolute inset-0 h-full w-full object-cover object-top" src="/highlighted_faculty/prof-bonang-mohale.jpg" alt="Professor Bonang Mohale" />
      <div className="absolute inset-0" style={{
        backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0) 42%, rgba(0,0,0,0.45) 100%)"
      }} aria-hidden="true" />
      <div className="absolute left-8 top-8 h-20 w-20 border-l border-t" style={{
        borderColor: "rgba(248,247,245,0.22)"
      }} aria-hidden="true" />
      <div className="absolute bottom-8 right-8 h-24 w-24 border-b border-r" style={{
        borderColor: "rgba(227,14,4,0.54)"
      }} aria-hidden="true" />
      <div className="absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full border" style={{
        borderColor: "rgba(248,247,245,0.12)",
        backgroundColor: "rgba(248,247,245,0.035)"
      }} aria-hidden="true" />
    </figure>
  );
};

const BookingDecorativeLines = () => {
  return (
    <div className="pointer-events-none absolute inset-0 flex justify-between px-4 md:px-10" aria-hidden="true">
      <div className="relative h-full w-[1px] bg-[#393939]">
        <div className="absolute -top-1 -left-[3px] -right-[3px] z-10 h-[7px] rounded-sm bg-white" />
      </div>
      <div className="relative h-full w-[1px] bg-[#393939]">
        <div className="absolute -top-1 -left-[3px] -right-[3px] z-10 h-[7px] rounded-sm bg-white" />
      </div>
    </div>
  );
};

const CalendarMock = () => {
  const [bookingStep, setBookingStep] = React.useState<BookingStep>("slot");
  const [selectedDateId, setSelectedDateId] = React.useState<string | null>(null);
  const [selectedTimeId, setSelectedTimeId] = React.useState<string | null>(null);
  const [bookingDetails, setBookingDetails] = React.useState<BookingDetails>(EMPTY_BOOKING_DETAILS);
  
  const selectedDate = CALENDAR_DAYS.find(day => day.id === selectedDateId) ?? null;
  const selectedTime = SAST_TIME_SLOTS.find(slot => slot.id === selectedTimeId) ?? null;
  
  const canContinue = selectedDate !== null && selectedTime !== null;
  const canConfirm = bookingDetails.fullName.trim() !== "" && bookingDetails.email.trim() !== "" && bookingDetails.phone.trim() !== "";
  
  const handleDateSelect = (day: CalendarDay) => {
    if (!day.isAvailable || !day.isCurrentMonth) {
      return;
    }
    setSelectedDateId(day.id);
    setSelectedTimeId(null);
  };
  
  const handleDetailsChange = (field: keyof BookingDetails, value: string) => {
    setBookingDetails(previousDetails => ({
      ...previousDetails,
      [field]: value
    }));
  };
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (canConfirm) {
      setBookingStep("confirmed");
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 24 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={{
        duration: 0.8,
        delay: 0.28,
        ease: [0.22, 1, 0.36, 1]
      }} 
      className="mx-auto min-h-[500px] w-full max-w-5xl overflow-hidden rounded-2xl border border-[#333] bg-[#1A1A1A] shadow-2xl"
    >
      <div className="flex min-h-[500px] flex-col md:flex-row">
        <aside className="w-full border-b border-[#333] p-5 sm:p-6 md:w-1/3 md:border-b-0 md:border-r md:p-8" aria-label="Booking details">
          <div className="space-y-6">
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#AFB0B0]">
                <span>Makora</span>
              </p>
              <h3 className={`${SUB_HEADING_CLASS} text-white`}>
                <span>15-Min Intro Call</span>
              </h3>
            </div>
            <div className="space-y-3">
              <p className="flex items-center gap-3 text-sm text-[#AFB0B0]">
                <Clock className="h-4 w-4" aria-hidden="true" />
                <span>15 min</span>
              </p>
              <p className="flex items-center gap-3 text-sm text-[#AFB0B0]">
                <Globe className="h-4 w-4" aria-hidden="true" />
                <span>South African Standard Time · SAST (UTC+2)</span>
              </p>
            </div>
            <p className="text-sm leading-relaxed text-[#888]">
              <span>Book a quick discovery call to discuss your project and how we can work together.</span>
            </p>
            <div className="rounded-2xl border border-[#333] bg-[#212121] p-4" aria-label="Current booking selection">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#AFB0B0]">
                <span>Your selection</span>
              </p>
              <div className="space-y-2 text-sm leading-relaxed">
                <p className="text-white">
                  <span>{selectedDate ? getCalendarDateLabel(selectedDate) : "Select an available date"}</span>
                </p>
                <p className="text-[#AFB0B0]">
                  <span>{selectedTime ? `${selectedTime.label} SAST` : "Then choose a time slot"}</span>
                </p>
              </div>
            </div>
          </div>
        </aside>

        <div className="flex-1 p-4 sm:p-6 md:p-8" aria-label="June 2024 booking calendar">
          {bookingStep === "slot" ? (
            <motion.div 
              key="booking-slot-step" 
              initial={{ opacity: 0, y: 14 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{
                duration: 0.35,
                ease: "easeOut"
              }}
            >
              <div className="mb-6 flex items-center justify-between gap-4 sm:mb-8">
                <div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#AFB0B0]">
                    <span>Step 1 · Select date and time</span>
                  </p>
                  <h3 className={`${SUB_HEADING_CLASS} text-white`}>
                    <span>June 2024</span>
                  </h3>
                </div>
                <div className="flex gap-2" aria-label="Calendar navigation">
                  <button type="button" aria-label="Previous month" className="rounded-full p-2 text-white/40 transition-colors hover:bg-[#333]" disabled>
                    <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                  </button>
                  <button type="button" aria-label="Next month" className="rounded-full p-2 text-white/40 transition-colors hover:bg-[#333]" disabled>
                    <ChevronRight className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-1 sm:gap-2" role="grid" aria-label="June 2024 available dates">
                {WEEKDAYS.map(weekday => (
                  <div key={weekday.id} className="pb-2 text-center text-[9px] font-bold text-[#555] sm:pb-4 sm:text-[10px]" role="columnheader">
                    <span>{weekday.label}</span>
                  </div>
                ))}
                {CALENDAR_DAYS.map(day => {
                  const isSelected = selectedDateId === day.id;
                  return (
                    <button 
                      key={day.id} 
                      type="button" 
                      disabled={!day.isAvailable || !day.isCurrentMonth} 
                      aria-pressed={isSelected} 
                      aria-label={`${day.isCurrentMonth ? "June" : "May"} ${day.day}${day.isAvailable && day.isCurrentMonth ? ", available" : ""}${isSelected ? ", selected" : ""}`} 
                      onClick={() => handleDateSelect(day)} 
                      className={`group relative flex aspect-square min-h-9 items-center justify-center rounded-full text-xs font-medium transition-all focus:outline-none focus:ring-2 focus:ring-[#e30e04] focus:ring-offset-2 focus:ring-offset-[#1A1A1A] sm:text-sm ${day.isCurrentMonth ? day.isAvailable ? "text-white" : "text-[#555]" : "text-[#333]"} ${day.isAvailable && day.isCurrentMonth ? "cursor-pointer hover:bg-[#e30e04] hover:text-white" : "cursor-default"} ${isSelected ? "border border-[#e30e04] bg-[#e30e04] text-white shadow-[0_0_0_4px_rgba(227,14,4,0.16)]" : ""}`}
                    >
                      <span>{day.day}</span>
                      {day.isAvailable && day.isCurrentMonth ? (
                        <span className={`absolute bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full ${isSelected ? "bg-white" : "bg-[#e30e04] group-hover:bg-white"}`} aria-hidden="true" />
                      ) : null}
                    </button>
                  );
                })}
              </div>

              {selectedDate ? (
                <motion.section 
                  initial={{ opacity: 0, y: 16 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{
                    duration: 0.32,
                    ease: "easeOut"
                  }} 
                  className="mt-8 border-t border-[#333] pt-7" 
                  aria-labelledby="sast-time-picker-heading"
                >
                  <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <h4 id="sast-time-picker-heading" className="text-base font-bold uppercase tracking-tight text-white">
                        <span>Available times</span>
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-[#AFB0B0]">
                        <span>{getCalendarDateLabel(selectedDate)} · South African Standard Time (SAST, UTC+2)</span>
                      </p>
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#e30e04]">
                      <span>SAST</span>
                    </p>
                  </div>
                  <div className="grid max-h-[238px] grid-cols-2 gap-2 overflow-y-auto pr-1 sm:max-h-none sm:grid-cols-3 lg:grid-cols-4" role="listbox" aria-label="Available SAST time slots">
                    {SAST_TIME_SLOTS.map(slot => {
                      const isSelected = selectedTimeId === slot.id;
                      return (
                        <button 
                          key={slot.id} 
                          type="button" 
                          aria-pressed={isSelected} 
                          onClick={() => setSelectedTimeId(slot.id)} 
                          className={`rounded-full border px-4 py-3 text-sm font-bold transition-all focus:outline-none focus:ring-2 focus:ring-[#e30e04] focus:ring-offset-2 focus:ring-offset-[#1A1A1A] ${isSelected ? "border-[#e30e04] bg-[#e30e04] text-white" : "border-[#333] bg-[#212121] text-[#AFB0B0] hover:border-[#e30e04] hover:text-white"}`}
                        >
                          <span>{slot.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </motion.section>
              ) : null}

              <div className="mt-8 flex flex-col gap-3 border-t border-[#333] pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm leading-relaxed text-[#888]">
                  <span>{canContinue ? "Date and time selected. Continue to add your details." : "Choose an available date and SAST time to continue."}</span>
                </p>
                <button 
                  type="button" 
                  disabled={!canContinue} 
                  onClick={() => setBookingStep("details")} 
                  className={`inline-flex h-[48px] items-center justify-center rounded-full px-6 text-[11px] font-bold uppercase tracking-[0.1em] transition-all sm:h-[52px] sm:px-7 sm:text-[12px] ${canContinue ? "bg-[#e30e04] text-white hover:opacity-90" : "cursor-not-allowed bg-[#333] text-[#777]"}`} 
                  aria-label="Continue to your details"
                >
                  <span>Continue</span>
                </button>
              </div>
            </motion.div>
          ) : null}

          {bookingStep === "details" ? (
            <motion.form 
              key="booking-details-step" 
              initial={{ opacity: 0, y: 14 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{
                duration: 0.35,
                ease: "easeOut"
              }} 
              onSubmit={handleSubmit} 
              aria-label="Your details for booking"
            >
              <div className="mb-8">
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#AFB0B0]">
                  <span>Step 2 · Your Details</span>
                </p>
                <h3 className={`${SUB_HEADING_CLASS} text-white`}>
                  <span>Your Details</span>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#AFB0B0]">
                  <span>{selectedDate && selectedTime ? `${getCalendarDateLabel(selectedDate)} at ${selectedTime.label} SAST (UTC+2)` : "Complete your booking details."}</span>
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#AFB0B0]">Full Name</span>
                  <input 
                    className="w-full rounded-xl border border-[#444] bg-[#393939] px-5 py-4 text-base text-white placeholder-[#666] transition-colors focus:border-[#e30e04] focus:outline-none" 
                    name="bookingFullName" 
                    type="text" 
                    autoComplete="name" 
                    value={bookingDetails.fullName} 
                    onChange={event => handleDetailsChange("fullName", event.target.value)} 
                    required 
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#AFB0B0]">Email Address</span>
                  <input 
                    className="w-full rounded-xl border border-[#444] bg-[#393939] px-5 py-4 text-base text-white placeholder-[#666] transition-colors focus:border-[#e30e04] focus:outline-none" 
                    name="bookingEmail" 
                    type="email" 
                    autoComplete="email" 
                    value={bookingDetails.email} 
                    onChange={event => handleDetailsChange("email", event.target.value)} 
                    required 
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#AFB0B0]">Phone Number</span>
                  <input 
                    className="w-full rounded-xl border border-[#444] bg-[#393939] px-5 py-4 text-base text-white placeholder-[#666] transition-colors focus:border-[#e30e04] focus:outline-none" 
                    name="bookingPhone" 
                    type="tel" 
                    autoComplete="tel" 
                    value={bookingDetails.phone} 
                    onChange={event => handleDetailsChange("phone", event.target.value)} 
                    required 
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#AFB0B0]">What would you like to discuss?</span>
                  <textarea 
                    className="min-h-[132px] w-full resize-none rounded-xl border border-[#444] bg-[#393939] px-5 py-4 text-base text-white placeholder-[#666] transition-colors focus:border-[#e30e04] focus:outline-none" 
                    name="bookingDiscussion" 
                    value={bookingDetails.discussion} 
                    onChange={event => handleDetailsChange("discussion", event.target.value)} 
                  />
                </label>
              </div>
              <div className="mt-8 flex flex-col-reverse gap-3 border-t border-[#333] pt-6 sm:flex-row sm:items-center sm:justify-between">
                <button 
                  type="button" 
                  onClick={() => setBookingStep("slot")} 
                  className="inline-flex h-[48px] items-center justify-center rounded-full border border-[#AFB0B0] px-6 text-[11px] font-bold uppercase tracking-[0.1em] text-[#AFB0B0] transition-colors hover:border-white hover:text-white sm:h-[52px] sm:px-7 sm:text-[12px]" 
                  aria-label="Back to date and time selection"
                >
                  <span>Back</span>
                </button>
                <button 
                  type="submit" 
                  className="inline-flex h-[48px] items-center justify-center rounded-full bg-[#e30e04] px-6 text-[11px] font-bold uppercase tracking-[0.1em] text-white transition-opacity hover:opacity-90 sm:h-[52px] sm:px-7 sm:text-[12px]" 
                  aria-label="Confirm booking"
                >
                  <span>Confirm Booking</span>
                </button>
              </div>
            </motion.form>
          ) : null}

          {bookingStep === "confirmed" ? (
            <motion.section 
              key="booking-confirmed-step" 
              initial={{ opacity: 0, y: 14 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{
                duration: 0.35,
                ease: "easeOut"
              }} 
              aria-labelledby="booking-confirmed-heading"
            >
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#e30e04]">
                <span>Step 3 · Confirmed</span>
              </p>
              <h3 id="booking-confirmed-heading" className={`${SUB_HEADING_CLASS} text-white`}>
                <span>Booking Confirmed</span>
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#AFB0B0]">
                <span>Thank you. Your intro call request has been captured and a confirmation will be sent to the details below.</span>
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <article className="rounded-2xl border border-[#333] bg-[#212121] p-5 sm:col-span-2">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#AFB0B0]"><span>Date</span></p>
                  <p className="text-lg font-bold text-white"><span>{selectedDate ? getCalendarDateLabel(selectedDate) : "Date pending"}</span></p>
                </article>
                <article className="rounded-2xl border border-[#333] bg-[#212121] p-5">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#AFB0B0]"><span>Time</span></p>
                  <p className="text-lg font-bold text-white"><span>{selectedTime ? `${selectedTime.label} SAST (UTC+2)` : "Time pending"}</span></p>
                </article>
                <article className="rounded-2xl border border-[#333] bg-[#212121] p-5">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#AFB0B0]"><span>Name</span></p>
                  <p className="text-lg font-bold text-white"><span>{bookingDetails.fullName}</span></p>
                </article>
                <article className="rounded-2xl border border-[#333] bg-[#212121] p-5">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#AFB0B0]"><span>Contact</span></p>
                  <p className="text-sm leading-relaxed text-white"><span>{bookingDetails.email}</span></p>
                  <p className="mt-1 text-sm leading-relaxed text-[#AFB0B0]"><span>{bookingDetails.phone}</span></p>
                </article>
                <article className="rounded-2xl border border-[#333] bg-[#212121] p-5 md:col-span-2">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#AFB0B0]"><span>Discussion</span></p>
                  <p className="text-sm leading-relaxed text-white"><span>{bookingDetails.discussion.trim() !== "" ? bookingDetails.discussion : "No additional notes provided."}</span></p>
                </article>
              </div>
              <button 
                type="button" 
                onClick={() => {
                  setBookingStep("slot");
                  setSelectedDateId(null);
                  setSelectedTimeId(null);
                  setBookingDetails(EMPTY_BOOKING_DETAILS);
                }} 
                className="mt-8 inline-flex h-[52px] items-center justify-center rounded-full border border-[#AFB0B0] px-7 text-[12px] font-bold uppercase tracking-[0.1em] text-[#AFB0B0] transition-colors hover:border-white hover:text-white" 
                aria-label="Make another booking"
              >
                <span>Make Another Booking</span>
              </button>
            </motion.section>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
};

const BookingSection = () => {
  return (
    <section id="booking-calendar" className="relative flex min-h-screen w-full flex-col items-center overflow-hidden bg-[#212121]" aria-labelledby="booking-section-heading">
      <BookingDecorativeLines />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-4 py-16 sm:px-6 md:py-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
          }} 
          className={`${SECTION_TAG_CLASS} mb-6 text-center sm:mb-8`} 
          style={SECTION_TAG_STYLE}
        >
          <span>Booking for this month's project slots</span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{
            duration: 0.8,
            delay: 0.12,
            ease: [0.22, 1, 0.36, 1]
          }} 
          className="mb-10 flex flex-wrap justify-center gap-x-3 text-center text-[clamp(2.15rem,12vw,5rem)] font-bold leading-[0.9] tracking-[-0.05em] md:mb-24 md:gap-x-6"
        >
          <h2 id="booking-section-heading" className="contents">
            <span className="text-[#AFB0B0]">Or Just Book A</span>
            <span className="text-[#e30e04]">Free 15-Min Intro Call</span>
          </h2>
        </motion.div>

        <CalendarMock />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#393939]" aria-hidden="true" />
    </section>
  );
};

const SpeakerEnquirySection = () => {
  return (
    <motion.section 
      id="enquiry-form" 
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{
        once: true,
        margin: "-80px"
      }} 
      transition={{
        duration: 0.7,
        ease: "easeOut"
      }} 
      className="relative overflow-hidden bg-[#212121]" 
      aria-labelledby="enquiry-form-heading"
    >
      <div className="pointer-events-none absolute inset-0 flex justify-between px-4 md:px-10" aria-hidden="true">
        <div className="relative h-full w-[1px] bg-[#393939]">
          <div className="absolute -top-1 -left-[3px] -right-[3px] z-10 h-[7px] rounded-sm bg-white" />
        </div>
        <div className="relative h-full w-[1px] bg-[#393939]">
          <div className="absolute -top-1 -left-[3px] -right-[3px] z-10 h-[7px] rounded-sm bg-white" />
        </div>
      </div>
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 sm:px-6 md:px-8 md:py-24 lg:grid-cols-2">
        <div className="lg:sticky lg:top-8 lg:self-start">
          <p className={`${SECTION_TAG_CLASS} mb-6 w-fit`} style={SECTION_TAG_STYLE}>
            <span>SPEAKER ENQUIRY</span>
          </p>
          <h2 id="enquiry-form-heading" className={SECTION_HEADING_CLASS}>
            <span className="block text-[#AFB0B0]">Start The</span>
            <span className="block text-[#e30e04]">Conversation</span>
          </h2>
          <p className="mt-4 max-w-sm text-base leading-relaxed text-[#AFB0B0]">
            <span>Tell us about your event. We respond to all enquiries within 24 hours.</span>
          </p>
          <div className="mt-8 space-y-3" aria-label="Speaker enquiry assurances">
            <p className="flex items-center gap-3 text-sm text-[#AFB0B0]">
              <CheckCircle className="h-5 w-5 text-[#e30e04]" aria-hidden="true" />
              <span>24-hour response time</span>
            </p>
            <p className="flex items-center gap-3 text-sm text-[#AFB0B0]">
              <CheckCircle className="h-5 w-5 text-[#e30e04]" aria-hidden="true" />
              <span>Tailored to your event format</span>
            </p>
            <p className="flex items-center gap-3 text-sm text-[#AFB0B0]">
              <CheckCircle className="h-5 w-5 text-[#e30e04]" aria-hidden="true" />
              <span>Confidential and no-obligation</span>
            </p>
          </div>
        </div>
        <form className="rounded-[28px] bg-[#2a2a2a] p-5 sm:p-8 md:rounded-[32px] md:p-10" aria-label="Speaker enquiry form">
          <div className="space-y-5">
            <motion.label 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{
                duration: 0.7,
                delay: 0,
                ease: "easeOut"
              }} 
              className="block"
            >
              <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#AFB0B0]">Full Name</span>
              <input className="w-full rounded-xl border border-[#444] bg-[#393939] px-5 py-4 text-base text-white placeholder-[#666] transition-colors focus:border-[#e30e04] focus:outline-none" name="fullName" type="text" autoComplete="name" />
            </motion.label>
            <motion.label 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{
                duration: 0.7,
                delay: 0.06,
                ease: "easeOut"
              }} 
              className="block"
            >
              <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#AFB0B0]">Organisation</span>
              <input className="w-full rounded-xl border border-[#444] bg-[#393939] px-5 py-4 text-base text-white placeholder-[#666] transition-colors focus:border-[#e30e04] focus:outline-none" name="organisation" type="text" autoComplete="organization" />
            </motion.label>
            <motion.label 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{
                duration: 0.7,
                delay: 0.12,
                ease: "easeOut"
              }} 
              className="block"
            >
              <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#AFB0B0]">Email Address</span>
              <input className="w-full rounded-xl border border-[#444] bg-[#393939] px-5 py-4 text-base text-white placeholder-[#666] transition-colors focus:border-[#e30e04] focus:outline-none" name="email" type="email" autoComplete="email" />
            </motion.label>
            <motion.label 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{
                duration: 0.7,
                delay: 0.18,
                ease: "easeOut"
              }} 
              className="block"
            >
              <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#AFB0B0]">Event Type</span>
              <span className="relative block">
                <select className="w-full appearance-none rounded-xl border border-[#444] bg-[#393939] px-5 py-4 pr-12 text-base text-white placeholder-[#666] transition-colors focus:border-[#e30e04] focus:outline-none" name="eventType" defaultValue="keynote-address">
                  <option value="keynote-address">Keynote Address</option>
                  <option value="board-retreat-workshop">Board Retreat &amp; Workshop</option>
                  <option value="annual-conference">Annual Conference</option>
                  <option value="corporate-residency">Corporate Residency</option>
                  <option value="other">Other</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-white" aria-hidden="true" />
              </span>
            </motion.label>
            <motion.label 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{
                duration: 0.7,
                delay: 0.24,
                ease: "easeOut"
              }} 
              className="block"
            >
              <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#AFB0B0]">Event Date</span>
              <input className="w-full rounded-xl border border-[#444] bg-[#393939] px-5 py-4 text-base text-white placeholder-[#666] transition-colors focus:border-[#e30e04] focus:outline-none" name="eventDate" type="date" />
            </motion.label>
            <motion.label 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease: "easeOut"
              }} 
              className="block"
            >
              <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#AFB0B0]">Message</span>
              <textarea className="w-full rounded-xl border border-[#444] bg-[#393939] px-5 py-4 text-base text-white placeholder-[#666] transition-colors focus:border-[#e30e04] focus:outline-none" name="message" rows={4} />
            </motion.label>
            <motion.button 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{
                duration: 0.7,
                delay: 0.36,
                ease: "easeOut"
              }} 
              className="mt-2 flex h-[56px] w-full items-center justify-center gap-3 rounded-full bg-[#e30e04] text-[12px] font-bold uppercase tracking-[0.1em] text-white transition-opacity hover:opacity-90" 
              type="submit" 
              aria-label="Submit speaker enquiry"
            >
              <span>Submit Enquiry</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </motion.button>
          </div>
        </form>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#393939]" aria-hidden="true" />
    </motion.section>
  );
};

export const AboutTeamSection = () => {
  const [isBioExpanded, setIsBioExpanded] = React.useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);
  const [activeStrategicThemeIndex, setActiveStrategicThemeIndex] = React.useState<number | null>(0);
  const [activeVideoIndex, setActiveVideoIndex] = React.useState(0);
  const [isPlayingVideo, setIsPlayingVideo] = React.useState(false);
  
  const scrollToSection = (sectionId: string) => {
    setIsMobileNavOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  return (
    <div className="w-full overflow-x-hidden font-['Kontora',sans-serif]">
      <section className="relative flex min-h-screen w-full flex-col items-center overflow-hidden px-4 py-0 font-['Kontora',sans-serif] sm:px-6 lg:px-16 xl:px-0" style={{
        backgroundColor: COLORS.offWhite,
        borderColor: SOFT_RULE_COLOR
      }} aria-labelledby="speaker-profile-heading">
        <style>{FONT_IMPORT}</style>
        <div className="absolute inset-0 z-0 opacity-[0.035]" style={{
          backgroundImage: NOISE_TEXTURE,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px"
        }} aria-hidden="true" />

        <div className="absolute inset-0 mx-auto max-w-[1440px] pointer-events-none">
          <BorderLine side="left" />
          <BorderLine side="right" />
        </div>

        {/* Spacer for the site's main floating header */}
        <div className="pt-24 sm:pt-28" />

        <div className="relative z-10 mx-auto w-full max-w-[1312px]">
          <div className="grid items-center gap-8 py-4 md:py-6 lg:h-[calc(100vh-140px)] lg:min-h-[550px] lg:max-h-[660px] lg:grid-cols-12 lg:gap-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
              }} 
              className="flex flex-col justify-center space-y-4 pt-0 lg:col-span-7 lg:h-full"
            >
              <div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }} 
                  whileInView={{ opacity: 1, scale: 1 }} 
                  viewport={{ once: true }} 
                  transition={{
                    delay: 0.1,
                    duration: 0.4
                  }} 
                  className={SECTION_TAG_CLASS} 
                  style={SECTION_TAG_STYLE}
                >
                  <span>Track 01: Corporate Governance, Ethics and Statesmanship</span>
                </motion.div>
                <div className="mt-3 h-[1px] w-full max-w-[440px]" style={{
                  backgroundColor: COLORS.borderGray
                }} aria-hidden="true" />
              </div>

              <div className="space-y-4">
                <h1 id="speaker-profile-heading" className="max-w-4xl text-[clamp(2.45rem,15vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.065em]" style={{
                  color: COLORS.black
                }}>
                  <span>Professor</span>
                  <br />
                  <span style={{ color: COLORS.red }}>Bonang Mohale</span>
                </h1>
                <motion.div 
                  initial={{ scaleX: 0, opacity: 0 }} 
                  whileInView={{ scaleX: 1, opacity: 1 }} 
                  viewport={{ once: true }} 
                  transition={{
                    duration: 0.74,
                    delay: 0.18,
                    ease: [0.16, 1, 0.3, 1]
                  }} 
                  className="h-[2px] w-24 origin-left md:w-32" 
                  style={{ backgroundColor: COLORS.red }} 
                  aria-hidden="true" 
                />
              </div>

              <div className="max-w-[65ch] space-y-4">
                <ul className="space-y-0 border-y" style={{
                  borderColor: COLORS.borderGray
                }} aria-label="Professor Bonang Mohale leadership roles">
                  {CURRENT_ROLES.map(role => (
                    <li 
                      key={role.id} 
                      className="flex items-start gap-4 border-b py-2.5 last:border-b-0 md:items-center lg:py-2" 
                      style={{ borderColor: SOFT_RULE_COLOR }}
                    >
                      <span className="mt-[0.75rem] h-[2px] w-8 shrink-0 md:mt-0 md:w-10" style={{
                        backgroundColor: COLORS.red
                      }} aria-hidden="true" />
                      <span className="text-[12px] font-bold uppercase leading-[1.35] tracking-[0.12em]" style={{
                        color: COLORS.black
                      }}>{role.label}</span>
                    </li>
                  ))}
                </ul>
                <motion.div 
                  initial={{ opacity: 0, y: 16 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{
                    duration: 0.5,
                    delay: 0.3
                  }} 
                  viewport={{ once: true }} 
                  className="flex flex-col gap-3 sm:flex-row sm:gap-4"
                >
                  <button className="flex min-h-[52px] items-center justify-center gap-3 rounded-full bg-[#e30e04] px-6 py-4 text-[11px] font-bold uppercase tracking-[0.1em] text-white shadow-md transition-opacity duration-200 hover:opacity-90 sm:px-8 sm:text-[12px]" type="button" onClick={() => scrollToSection("enquiry-form")} aria-label="Book the Speaker">
                    <CalendarDays className="h-5 w-5" aria-hidden="true" />
                    <span>Book the Speaker</span>
                  </button>
                  <button className="flex min-h-[52px] items-center justify-center gap-3 rounded-full border border-[#212121] bg-transparent px-6 py-4 text-[11px] font-bold uppercase tracking-[0.1em] text-[#212121] transition-colors duration-200 hover:bg-[#212121] hover:text-white sm:px-8 sm:text-[12px]" type="button" onClick={() => scrollToSection("the-brief")} aria-label="About Professor Mohale">
                    <ChevronDown className="h-5 w-5" aria-hidden="true" />
                    <span>About Prof. Mohale</span>
                  </button>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1]
              }} 
              className="flex w-full justify-center lg:col-span-5 lg:h-full lg:items-center lg:justify-end"
            >
              <figure className="group relative isolate flex min-h-[280px] w-full max-w-[440px] flex-col overflow-hidden rounded-[22px] border transition-colors duration-[400ms] ease-out hover:border-[#e30e04]/70 lg:h-full lg:max-h-[480px] aspect-[4/5]" style={{
                backgroundColor: COLORS.deepBlack,
                borderColor: COLORS.darkGray,
                boxShadow: "0 24px 70px rgba(33, 33, 33, 0.18)"
              }} aria-label="Portrait for Professor Bonang Mohale">
                <img className="absolute inset-0 h-full w-full object-cover object-center" src="/highlighted_faculty/prof-bonang-mohale.jpg" alt="Professor Bonang Mohale speaker profile" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" aria-hidden="true" />
                <div className="absolute left-8 top-8 h-20 w-20 border-l border-t" style={{
                  borderColor: "rgba(248,247,245,0.22)"
                }} aria-hidden="true" />
                <div className="absolute bottom-8 right-8 h-24 w-24 border-b border-r" style={{
                  borderColor: "rgba(227,14,4,0.54)"
                }} aria-hidden="true" />
                <div className="absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full border" style={{
                  borderColor: "rgba(248,247,245,0.12)",
                  backgroundColor: "rgba(248,247,245,0.035)"
                }} aria-hidden="true" />
              </figure>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 24 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-120px" }} 
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1]
            }} 
            className="grid gap-10 py-12 md:py-20 lg:grid-cols-12 lg:gap-16" 
            id="the-brief"
          >
            <div className="lg:col-span-4">
              <h2 className={SECTION_HEADING_CLASS}>
                <span className="block text-[#AFB0B0]">The</span>
                <span className="block text-[#e30e04]">Brief</span>
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="max-w-[65ch] space-y-5 border-l-2 pl-5 md:pl-7" style={{
                borderColor: COLORS.red
              }}>
                <motion.div 
                  initial={{ opacity: 0, y: 24 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{
                    duration: 0.7,
                    ease: "easeOut"
                  }} 
                  className="space-y-5"
                >
                  <p className={LEAD_TEXT_CLASS} style={{ color: COLORS.black }}>
                    <span>{BIO_HOOK}</span>
                  </p>
                  {isBioExpanded ? (
                    <p id="full-biography" className={BODY_TEXT_CLASS} style={{ color: COLORS.gray }}>
                      <span>{FULL_BIO}</span>
                    </p>
                  ) : null}
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 24 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{
                    duration: 0.7,
                    delay: 0.15,
                    ease: "easeOut"
                  }}
                >
                  <button 
                    className={`inline-flex items-center rounded-full border border-[#212121] px-5 py-3 text-[#212121] transition-colors duration-300 hover:bg-[#212121] hover:text-white ${CTA_TEXT_CLASS}`} 
                    type="button" 
                    aria-expanded={isBioExpanded} 
                    aria-controls="full-biography" 
                    onClick={() => setIsBioExpanded(!isBioExpanded)}
                  >
                    <span>{isBioExpanded ? "Hide Full Bio" : "Read Full Bio"}</span>
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <div className="h-[1px] w-full" style={{
            backgroundColor: COLORS.borderGray
          }} aria-hidden="true" />
        </div>

        <motion.section 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-120px" }} 
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1]
          }} 
          className="relative w-full overflow-hidden bg-[#212121] px-6 py-16 text-white md:px-16 md:py-32" 
          aria-labelledby="boardroom-section-heading" 
          id="boardroom-interventions"
        >
          <div className="pointer-events-none absolute inset-0 hidden justify-center xl:flex" aria-hidden="true">
            <div className="relative h-full w-full max-w-[1440px] border-x border-[#393939]">
              <div className="absolute top-0 -left-[3.5px] h-[7px] w-[7px] bg-white" />
              <div className="absolute top-0 -right-[3.5px] h-[7px] w-[7px] bg-white" />
            </div>
          </div>
          <div className="relative z-10 mx-auto flex w-full max-w-[1312px] flex-col gap-16 xl:flex-row xl:gap-20">
              <div className="flex flex-col items-start justify-start gap-8 xl:max-w-[420px]">
                <div className={SECTION_TAG_CLASS} style={SECTION_TAG_STYLE}>
                  <span>Boardroom Interventions and Keynotes</span>
                </div>
                <h2 id="boardroom-section-heading" className={`${SECTION_HEADING_CLASS} text-balance text-start`}>
                  <span className="block text-[#AFB0B0]">Boardroom Interventions</span>
                  <span className="block text-[#e30e04]">And Keynotes</span>
                </h2>
              </div>
              <div className="flex flex-grow justify-center xl:justify-end">
                <div className="flex w-full flex-col gap-0 overflow-hidden rounded-[24px] md:rounded-[32px]">
                  {STRATEGIC_THEMES.map((theme, themeIndex) => {
                    const isActive = activeStrategicThemeIndex === themeIndex;
                    return (
                      <motion.article 
                        key={theme.id} 
                        className={`w-full overflow-hidden border-b border-[#393939] last:border-b-0 ${isActive ? "bg-[#2a2a2a]" : "bg-[#212121]"}`} 
                        aria-label={`${theme.number} ${theme.title}`}
                      >
                        <button 
                          type="button" 
                          className="flex w-full cursor-pointer items-start justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-[#2a2a2a] sm:items-center sm:gap-6 sm:px-8 sm:py-6" 
                          aria-expanded={isActive} 
                          aria-controls={`${theme.id}-panel`} 
                          onClick={() => setActiveStrategicThemeIndex(isActive ? null : themeIndex)}
                        >
                          <span className="flex min-w-0 flex-col gap-2 sm:flex-row sm:items-center sm:gap-8">
                            <span className={`shrink-0 text-xs font-bold uppercase tracking-widest [font-variant-numeric:tabular-nums] ${isActive ? "text-[#e30e04]" : "text-[#AFB0B0]"}`}>{theme.number.replace("Theme ", "")}</span>
                            <span className="text-base font-semibold uppercase tracking-tight text-white">{theme.title}</span>
                          </span>
                          <ChevronDown className={`h-5 w-5 shrink-0 transition-transform duration-300 ${isActive ? "rotate-180 text-[#e30e04]" : "text-[#AFB0B0]"}`} aria-hidden="true" />
                        </button>
                        {isActive ? (
                          <motion.div 
                            id={`${theme.id}-panel`} 
                            initial={{ height: 0, opacity: 0 }} 
                            animate={{ height: "auto", opacity: 1 }} 
                            transition={{
                              duration: 0.35,
                              ease: "easeOut"
                            }} 
                            className="overflow-hidden"
                          >
                            <p className="max-w-2xl px-5 pb-6 text-sm leading-relaxed text-[#AFB0B0] sm:px-8 sm:pb-8">
                              <span>{theme.copy}</span>
                            </p>
                          </motion.div>
                        ) : null}
                      </motion.article>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 h-[1px] w-full bg-[#393939]" aria-hidden="true" />
        </motion.section>

        <div className="relative z-10 mx-auto w-full max-w-[1312px]">
          <div className="h-[1px] w-full mb-12" style={{
            backgroundColor: COLORS.borderGray
          }} aria-hidden="true" />

          <motion.section 
            initial={{ opacity: 0, y: 24 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-120px" }} 
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1]
            }} 
            className="relative grid gap-10 py-12 md:py-20 lg:grid-cols-12 lg:gap-16"
          >
            <div className="bg-[inherit] py-2 lg:sticky lg:top-[120px] lg:z-10 lg:col-span-4 lg:px-8 lg:py-6">
              <h2 className={SECTION_HEADING_CLASS}>
                <span className="block text-[#AFB0B0]">Evidence Of</span>
                <span className="block text-[#e30e04]">Authority</span>
              </h2>
            </div>
            <div className="space-y-8 lg:col-span-8">
              <article 
                className="rounded-[22px] border p-5 sm:p-6 md:p-8" 
                style={{
                  backgroundColor: COLORS.darkGray,
                  borderColor: COLORS.darkGray,
                  boxShadow: "0 24px 70px rgba(33, 33, 33, 0.12)"
                }}
              >
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
                  {BOOKS.map(book => (
                    <div key={book.id} className="grid gap-5 sm:grid-cols-[132px_1fr] md:grid-cols-1 lg:grid-cols-[150px_1fr]">
                      <figure className="w-full max-w-[132px] lg:max-w-[150px]" aria-label={`${book.title} book cover`}>
                        <div className="relative aspect-[2/3] overflow-hidden rounded-[6px] border border-[#444] shadow-[16px_18px_34px_rgba(15,15,15,0.24)] bg-transparent">
                          <img src={book.image} alt={book.title} className="w-full h-full object-cover" />
                        </div>
                        <figcaption className="sr-only"><span>{book.title} by {book.author}</span></figcaption>
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
                    </div>
                  ))}
                </div>
              </article>

              <article 
                className="rounded-[22px] border p-5 sm:p-6 md:p-8" 
                style={{
                  backgroundColor: COLORS.darkGray,
                  borderColor: COLORS.darkGray,
                  boxShadow: "0 24px 70px rgba(15, 15, 15, 0.24)"
                }}
              >
                <div className="mb-7 flex items-center gap-3">
                  <BriefcaseBusiness aria-hidden="true" className="h-5 w-5" style={{
                    color: COLORS.red
                  }} />
                  <h3 className={SUB_HEADING_CLASS} style={{
                    color: COLORS.offWhite
                  }}>
                    <span>Keynote Engagements</span>
                  </h3>
                </div>

                <div className="w-full flex flex-col gap-4">
                  <div 
                    className="relative aspect-video w-full overflow-hidden rounded-[18px] border border-[#333333] bg-[#0F0F0F]"
                  >
                    {isPlayingVideo ? (
                      <iframe 
                        src={`https://www.youtube.com/embed/${VIDEOS[activeVideoIndex].id}?autoplay=1&rel=0`}
                        title={VIDEOS[activeVideoIndex].title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full border-0 z-10"
                      />
                    ) : (
                      <div className="absolute inset-0 z-0">
                        <img 
                          src={`https://img.youtube.com/vi/${VIDEOS[activeVideoIndex].id}/hqdefault.jpg`}
                          alt={VIDEOS[activeVideoIndex].title}
                          className="w-full h-full object-cover brightness-95 transition-all duration-500"
                        />
                        <button 
                          className="absolute left-1/2 top-1/2 z-20 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/45 bg-black/45 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:border-[#e30e04] hover:bg-[#e30e04]"
                          type="button"
                          onClick={() => setIsPlayingVideo(true)}
                          aria-label={`Play ${VIDEOS[activeVideoIndex].title}`}
                        >
                          <Play className="ml-1 h-8 w-8 fill-current" />
                        </button>
                        
                        <div className="absolute bottom-6 left-6 right-6 z-20 pointer-events-none">
                          <h4 className="text-xl font-bold uppercase tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                            {VIDEOS[activeVideoIndex].title}
                          </h4>
                          <p className="text-sm text-gray-300 leading-normal max-w-xl drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] mt-1">
                            {VIDEOS[activeVideoIndex].description}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-2 sm:grid-cols-4">
                    {VIDEOS.map((video, index) => {
                      const isActive = index === activeVideoIndex;
                      return (
                        <button 
                          key={video.id}
                          type="button"
                          onClick={() => {
                            setActiveVideoIndex(index);
                            setIsPlayingVideo(true);
                          }}
                          className={`group relative aspect-video w-full overflow-hidden rounded-[12px] border transition-all duration-300 ${
                            isActive ? "border-[#e30e04] ring-1 ring-[#e30e04]" : "border-[#333333] hover:border-[#e30e04]/70"
                          }`}
                        >
                          <img 
                            src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`} 
                            alt={video.title} 
                            className="absolute inset-0 h-full w-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                          />
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 group-hover:bg-black/10">
                            <Play className="h-5 w-5 text-white opacity-80 group-hover:opacity-100" />
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </article>
            </div>
          </motion.section>
        </div>

        <Quote className="absolute bottom-10 right-6 h-20 w-20 opacity-[0.04] md:right-16 md:h-28 md:w-28" style={{
          color: COLORS.black
        }} aria-hidden="true" />

        <div className="absolute bottom-0 left-0 h-px w-full" style={{
          backgroundColor: COLORS.borderGray
        }} aria-hidden="true" />
      </section>
      <BookingSection />
      <SpeakerEnquirySection />
      <CallToActionSection />
    </div>
  );
};
