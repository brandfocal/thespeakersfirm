import * as React from "react";
import { motion } from "framer-motion";
import { BookOpen, BriefcaseBusiness, CalendarDays, CheckCircle, ChevronDown, Play, Quote, Send } from "lucide-react";
import { BiographySection, ProfileAdditionalSections, SpeakerFooter } from "./ProfileAdditionalSections";
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
const SUB_HEADING_CLASS = `${KONTORA_FONT_CLASS} text-xl font-bold uppercase leading-[0.95] tracking-[-0.05em] sm:text-2xl md:text-3xl`;
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
  coverClassName: "from-[#0A0A0A] via-[#1E1E1E] to-[#0A0A0A]",
  copy: "A masterclass on leadership, identity, and the moral obligation of successful executives to build pipelines of transformation."
}, {
  id: "behold-the-turtle",
  title: "Behold The Turtle",
  coverTitle: "Behold The Turtle",
  author: "Professor Bonang Mohale",
  accent: "#e30e04",
  coverClassName: "from-[#0A0A0A] via-[#1E1E1E] to-[#0A0A0A]",
  copy: "An analytical look at corporate courage, strategic patience, and executive resilience required to lead organizations through systemic volatility."
}];
const FULL_BIO = "Professor Bonang Mohale is one of Africa's most distinguished corporate statesmen, globally recognized for his multi-decade track record of driving institutional transformation, building resilient corporate infrastructure, and championing ethical leadership. He actively guides national economic direction as President of BUSA and anchors corporate governance as Chairman of The Bidvest Group Limited, ArcelorMittal, and SBV Services. Previous executive roles include CEO of Business Leadership South Africa (BLSA), VP and Managing Director of Shell South Africa, Chief Executive of Sanlam Shared Services, and Managing Director of Otis Elevators. He serves as Chancellor of the University of the Free State and Professor of Practice at JBS. He is a member of the Community of Chairpersons at the World Economic Forum and was included in Reputation Poll International's 100 Most Reputable Africans.";
const BIO_HOOK = "Professor Bonang Mohale is one of Africa's most distinguished corporate statesmen, operating at the highest levels of commerce, policy, and academia.";
const HERO_BACKGROUND_IMAGE = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600&auto=format&fit=crop";
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
          <Send aria-hidden="true" className="h-4 w-4" />
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
  const [bookingStep, setBookingStep] = React.useState<BookingStep>("details");
  const [bookingDetails, setBookingDetails] = React.useState<BookingDetails>(EMPTY_BOOKING_DETAILS);
  const canConfirm = bookingDetails.fullName.trim() !== "" && bookingDetails.email.trim() !== "" && bookingDetails.phone.trim() !== "";
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
  return <motion.div initial={{
    opacity: 0,
    y: 24
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true
  }} transition={{
    duration: 0.8,
    delay: 0.28,
    ease: [0.22, 1, 0.36, 1]
  }} className="mx-auto min-h-[500px] w-full max-w-5xl overflow-hidden rounded-2xl border border-[#1E1E1E] bg-[#111111] shadow-2xl">
      <div className="min-h-[500px] p-4 pb-24 sm:p-6 md:p-8" aria-label="Booking enquiry details">
        {bookingStep === "details" ? <motion.form id="booking-details-form" key="booking-details-step" initial={{
        opacity: 0,
        y: 14
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.35,
        ease: "easeOut"
      }} onSubmit={handleSubmit} aria-label="Your details for booking">
            <div className="mb-8">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#9A9A9A]">
                <span>Booking Enquiry</span>
              </p>
              <h3 className={`${SUB_HEADING_CLASS} text-white`}>
                <span>Your Details</span>
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#9A9A9A]">
                <span>Complete your booking details.</span>
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-[#9A9A9A] sm:text-xs">Full Name</span>
                <input className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#111111] px-5 py-4 text-sm text-white placeholder-[#9A9A9A] transition-colors focus:border-[#e30e04] focus:outline-none sm:text-base" name="bookingFullName" type="text" autoComplete="name" value={bookingDetails.fullName} onChange={event => handleDetailsChange("fullName", event.target.value)} required />
              </label>
              <label className="block">
                <span className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-[#9A9A9A] sm:text-xs">Email Address</span>
                <input className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#111111] px-5 py-4 text-sm text-white placeholder-[#9A9A9A] transition-colors focus:border-[#e30e04] focus:outline-none sm:text-base" name="bookingEmail" type="email" autoComplete="email" value={bookingDetails.email} onChange={event => handleDetailsChange("email", event.target.value)} required />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-[#9A9A9A] sm:text-xs">Phone Number</span>
                <input className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#111111] px-5 py-4 text-sm text-white placeholder-[#9A9A9A] transition-colors focus:border-[#e30e04] focus:outline-none sm:text-base" name="bookingPhone" type="tel" autoComplete="tel" value={bookingDetails.phone} onChange={event => handleDetailsChange("phone", event.target.value)} required />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-[#9A9A9A] sm:text-xs">Organisation</span>
                <input className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#111111] px-5 py-4 text-sm text-white placeholder-[#9A9A9A] transition-colors focus:border-[#e30e04] focus:outline-none sm:text-base" name="bookingOrganisation" type="text" autoComplete="organization" value={bookingDetails.organisation} onChange={event => handleDetailsChange("organisation", event.target.value)} />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-[#9A9A9A] sm:text-xs">Event Type</span>
                <select className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#111111] px-5 py-4 text-sm text-white placeholder-[#9A9A9A] transition-colors focus:border-[#e30e04] focus:outline-none sm:text-base" name="bookingEventType" value={bookingDetails.eventType} onChange={event => handleDetailsChange("eventType", event.target.value)}>
                  <option value="keynote-address">Keynote Address</option>
                  <option value="board-retreat-workshop">Board Retreat &amp; Workshop</option>
                  <option value="annual-conference">Annual Conference</option>
                  <option value="corporate-residency">Corporate Residency</option>
                  <option value="other">Other</option>
                </select>
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-[#9A9A9A] sm:text-xs">Event Date</span>
                <input className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#111111] px-5 py-4 text-sm text-white placeholder-[#9A9A9A] transition-colors focus:border-[#e30e04] focus:outline-none sm:text-base" name="bookingEventDate" type="text" placeholder="DD MMM YYYY" value={bookingDetails.eventDate} onChange={event => handleDetailsChange("eventDate", event.target.value)} />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-[#9A9A9A] sm:text-xs">Message</span>
                <textarea className="min-h-[120px] w-full resize-none rounded-xl border border-[#1E1E1E] bg-[#111111] px-5 py-4 text-sm text-white placeholder-[#9A9A9A] transition-colors focus:border-[#e30e04] focus:outline-none sm:text-base" name="bookingMessage" value={bookingDetails.message} onChange={event => handleDetailsChange("message", event.target.value)} />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-[#9A9A9A] sm:text-xs">What would you like to discuss?</span>
                <textarea className="min-h-[132px] w-full resize-none rounded-xl border border-[#1E1E1E] bg-[#111111] px-5 py-4 text-sm text-white placeholder-[#9A9A9A] transition-colors focus:border-[#e30e04] focus:outline-none sm:text-base" name="bookingDiscussion" value={bookingDetails.discussion} onChange={event => handleDetailsChange("discussion", event.target.value)} />
              </label>
            </div>
            <div className="mt-8 flex flex-col gap-3 border-t border-[#1E1E1E] pt-6 sm:flex-row sm:items-center sm:justify-end">
              <button type="submit" disabled={!canConfirm} className={canConfirm ? "inline-flex h-[48px] w-full items-center justify-center rounded-full bg-[#e30e04] px-6 text-[10px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#c00c03] sm:h-[52px] sm:w-auto sm:px-7 sm:text-xs" : "inline-flex h-[48px] w-full items-center justify-center rounded-full cursor-not-allowed border border-[#1E1E1E] bg-[#111111] text-[#9A9A9A] px-6 text-[10px] font-bold uppercase tracking-widest sm:h-[52px] sm:w-auto sm:px-7 sm:text-xs"} aria-label="Confirm booking">
                <span>Confirm Booking</span>
              </button>
            </div>
            <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#1E1E1E] bg-[#0A0A0A]/95 p-3 shadow-[0_-16px_36px_rgba(0,0,0,0.28)] backdrop-blur md:hidden">
              <button type="submit" form="booking-details-form" disabled={!canConfirm} className={`inline-flex min-h-12 w-full items-center justify-center rounded-full border px-6 text-[10px] font-bold uppercase tracking-widest transition-all sm:text-xs ${canConfirm ? "border-[#e30e04] bg-[#e30e04] text-white" : "cursor-not-allowed border-[#1E1E1E] bg-[#111111] text-[#9A9A9A]"}`} aria-label="Confirm booking">
                <span>Confirm Booking</span>
              </button>
            </div>
          </motion.form> : null}

        {bookingStep === "confirmed" ? <motion.section key="booking-confirmed-step" initial={{
        opacity: 0,
        y: 14
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.35,
        ease: "easeOut"
      }} aria-labelledby="booking-confirmed-heading">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-[#e30e04] sm:text-xs">
              <span>Enquiry Received</span>
            </p>
            <h3 id="booking-confirmed-heading" className={`${SUB_HEADING_CLASS} text-white`}>
              <span>Enquiry Submitted</span>
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#9A9A9A]">
              <span>Your enquiry has been received. A member of the team will be in touch within 24 hours.</span>
            </p>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <article className="rounded-2xl border border-[#1E1E1E] bg-[#0A0A0A] p-5">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-[#9A9A9A] sm:text-xs"><span>Name</span></p>
                <p className="text-base font-bold text-white sm:text-lg"><span>{bookingDetails.fullName}</span></p>
              </article>
              <article className="rounded-2xl border border-[#1E1E1E] bg-[#0A0A0A] p-5">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-[#9A9A9A] sm:text-xs"><span>Contact</span></p>
                <p className="text-sm leading-relaxed text-white sm:text-base"><span>{bookingDetails.email}</span></p>
                <p className="mt-1 text-sm leading-relaxed text-[#9A9A9A] sm:text-base"><span>{bookingDetails.phone}</span></p>
              </article>
              {bookingDetails.organisation.trim() !== "" ? <article className="rounded-2xl border border-[#1E1E1E] bg-[#0A0A0A] p-5">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-[#9A9A9A] sm:text-xs"><span>Organisation</span></p>
                <p className="text-sm leading-relaxed text-white sm:text-base"><span>{bookingDetails.organisation}</span></p>
              </article> : null}
              <article className="rounded-2xl border border-[#1E1E1E] bg-[#0A0A0A] p-5">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-[#9A9A9A] sm:text-xs"><span>Event Type</span></p>
                <p className="text-sm leading-relaxed text-white sm:text-base"><span>{bookingDetails.eventType}</span></p>
              </article>
              <article className="rounded-2xl border border-[#1E1E1E] bg-[#0A0A0A] p-5 sm:col-span-2">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-[#9A9A9A] sm:text-xs"><span>Discussion</span></p>
                <p className="text-sm leading-relaxed text-white sm:text-base"><span>{bookingDetails.discussion.trim() !== "" ? bookingDetails.discussion : "No additional notes provided."}</span></p>
              </article>
            </div>
            <button type="button" onClick={() => {
          setBookingStep("details");
          setBookingDetails(EMPTY_BOOKING_DETAILS);
        }} className="mt-8 inline-flex min-h-[48px] w-full items-center justify-center rounded-full border border-[#9A9A9A] px-7 text-[10px] font-bold uppercase tracking-widest text-[#9A9A9A] transition-colors hover:border-white hover:text-white sm:w-auto sm:text-xs" aria-label="Submit another enquiry">
              <span>Submit Another Enquiry</span>
            </button>
          </motion.section> : null}
      </div>
    </motion.div>;
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

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24">
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

      <div className="relative z-20 mx-auto w-full max-w-[1312px] pt-4 sm:pt-6">
        <nav className="flex items-center justify-between gap-4 border-b py-3" style={{
          backgroundColor: "#0A0A0A",
          borderColor: "#1E1E1E"
        }} aria-label="Primary navigation">
          <button className="min-h-11 text-left text-[10px] font-bold uppercase leading-tight tracking-widest sm:text-xs" style={{
            color: COLORS.offWhite
          }} type="button" onClick={() => window.scrollTo({
            top: 0,
            behavior: "smooth"
          })} aria-label="Return to top">
            <span>Professor Bonang Mohale</span>
          </button>
          <div className="hidden items-center gap-6 md:flex">
            {NAV_ITEMS.map(item => <button key={item.id} className="text-[10px] font-bold uppercase tracking-widest transition-colors hover:text-[#e30e04] sm:text-xs" style={{
              color: COLORS.offWhite
            }} type="button" onClick={() => scrollToSection(item.targetId)}>
                <span>{item.label}</span>
              </button>)}
          </div>
          <button className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#e30e04] bg-[#e30e04] px-4 text-[10px] font-bold uppercase tracking-widest text-[#FFFFFF] md:hidden" type="button" onClick={() => scrollToSection("booking-calendar")} aria-label="Book an engagement call">
            <span>Book</span>
          </button>
        </nav>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1312px]">
        <div className="flex w-full flex-1 items-center py-12 sm:py-16 md:py-20 lg:min-h-[calc(100svh-76px)] lg:py-24">
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
                <p className="max-w-xl text-left text-base font-normal leading-relaxed text-white/86 sm:text-lg md:text-xl">
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
        }} className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-[#0A0A0A] px-4 py-12 text-white sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24" aria-labelledby="boardroom-section-heading" id="boardroom-interventions">
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
        }} className="relative grid grid-cols-1 gap-8 py-12 sm:gap-10 sm:py-16 md:py-20 lg:grid-cols-12 lg:gap-16 lg:py-24">
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
                      <div className={`relative aspect-[2/3] overflow-hidden rounded-[6px] border bg-gradient-to-br ${book.coverClassName} p-4 shadow-[16px_18px_34px_rgba(15,15,15,0.24)]`} style={{
                      borderColor: "rgba(255, 255, 255, 0.22)"
                    }}>
                        <div className="absolute left-0 top-0 h-full w-[10px] bg-[#0A0A0A]/24" aria-hidden="true" />
                        <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-[#FFFFFF]/18 to-transparent" aria-hidden="true" />
                        <div className="relative flex h-full flex-col justify-between pl-2">
                          <p className="text-[10px] font-bold uppercase leading-[1.25] tracking-widest text-[#FFFFFF]/78 sm:text-xs"><span>Leadership / Governance</span></p>
                          <div className="space-y-3">
                            <h4 className={`${KONTORA_FONT_CLASS} text-xl font-bold leading-tight tracking-[-0.04em] text-[#FFFFFF] sm:text-2xl md:text-3xl`}><span>{book.coverTitle}</span></h4>
                            <div className="h-[2px] w-12" style={{
                            backgroundColor: book.accent
                          }} aria-hidden="true" />
                          </div>
                          <p className="text-[10px] font-bold uppercase leading-[1.25] tracking-widest text-[#FFFFFF]/82 sm:text-xs"><span>{book.author}</span></p>
                        </div>
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
      </div>

      <Quote className="absolute bottom-10 right-6 h-20 w-20 opacity-[0.04] md:right-16 md:h-28 md:w-28" style={{
        color: COLORS.black
      }} aria-hidden="true" />

      <div className="absolute bottom-0 left-0 h-px w-full" style={{
        backgroundColor: COLORS.darkGray
      }} aria-hidden="true" />
    </section>
    <ProfileAdditionalSections />
    <BookingSection />
    <SpeakerFooter />
    <motion.div initial={false} animate={showStickyBookingCta ? {
      opacity: 1,
      y: 0,
      pointerEvents: "auto"
    } : {
      opacity: 0,
      y: 8,
      pointerEvents: "none"
    }} transition={{
      duration: 0.28,
      ease: "easeOut"
    }} className="fixed inset-x-0 bottom-0 z-50 border-t border-[#E5E5E5] bg-[#FFFFFF]/96 p-3 shadow-[0_-12px_38px_rgba(10,10,10,0.18)] backdrop-blur md:bottom-8 md:left-auto md:right-8 md:w-auto md:rounded-full md:border md:p-2" aria-label="Persistent booking actions">
      <div className="flex gap-2 md:w-auto">
        <button type="button" onClick={() => scrollToSection("booking-calendar")} className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full bg-[#e30e04] px-5 text-[10px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#c00c03] sm:text-xs md:flex-none" aria-label="Book an engagement call">
          <span>Book an Engagement Call</span>
        </button>
        <button type="button" onClick={() => scrollToSection("booking-calendar")} className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full border border-[#0A0A0A] px-5 text-[10px] font-bold uppercase tracking-widest text-[#0A0A0A] transition-colors hover:bg-[#0A0A0A] hover:text-white sm:text-xs md:flex-none" aria-label="Enquire about booking Professor Mohale">
          <span>Enquire</span>
        </button>
      </div>
    </motion.div>
  </div>;
};