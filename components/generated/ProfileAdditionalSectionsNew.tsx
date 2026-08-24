"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Award, BookOpen, BriefcaseBusiness, CalendarDays, CheckCircle, ChevronLeft, ChevronRight, Globe, Play, Quote, Star, X } from "lucide-react";
const COLORS = {
  black: "#0A0A0A",
  red: "#e30e04",
  gray: "#9A9A9A",
  silver: "#9A9A9A",
  borderGray: "#E5E5E5",
  darkGray: "#1E1E1E",
  offWhite: "#FFFFFF",
  deepBlack: "#0A0A0A"
};
const SECTION_HEADING_CLASS = "font-['Kontora',sans-serif] max-w-[12ch] text-2xl font-bold uppercase leading-[0.9] tracking-[-0.05em] sm:text-3xl md:text-4xl lg:text-5xl";
const SUB_HEADING_CLASS = "font-['Kontora',sans-serif] text-lg font-bold uppercase leading-[0.95] tracking-[-0.05em] sm:text-xl md:text-2xl";
const SECTION_TAG_CLASS = "inline-flex items-center border border-l-[4px] px-3 py-2 text-[10px] font-bold uppercase tracking-widest sm:px-4 sm:text-xs";
const CTA_TEXT_CLASS = "text-[10px] font-bold uppercase leading-none tracking-widest sm:text-xs";
const BODY_TEXT_CLASS = "max-w-[65ch] text-sm font-normal leading-relaxed sm:text-base";
const SECTION_TAG_STYLE: React.CSSProperties = {
  backgroundColor: "#111111",
  borderColor: COLORS.darkGray,
  borderLeftColor: COLORS.red,
  color: COLORS.offWhite
};
interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
  className: string;
}
interface MediaItem {
  id: string;
  headline: string;
  publication: string;
  date: string;
  action: string;
  url: string;
  image: string;
}
interface MediaCategory {
  id: string;
  label: string;
  items: MediaItem[];
}
interface Testimonial {
  id: string;
  quote: string;
  name: string;
  title: string;
  organisation: string;
}
interface BookPublication {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  description: string;
  accentClassName: string;
  image: string;
  url: string;
}
interface TopicCard {
  id: string;
  title: string;
  description: string;
  icon: "briefcase" | "check" | "globe" | "award" | "book" | "star" | "calendar";
}
interface EngagementFormat {
  id: string;
  name: string;
  description: string;
  duration: string;
  icon: "briefcase" | "quote" | "book" | "globe" | "calendar";
}
type OfferTab = "topics" | "formats";
interface OfferTabItem {
  id: OfferTab;
  label: string;
}
interface VideoClip {
  id: string;
  label: string;
  youtubeId: string;
}
interface FooterNavLink {
  id: string;
  label: string;
}
const GALLERY_IMAGES: GalleryImage[] = [{
  id: "bonang-mohale-primary",
  src: "/speakers/Bonang Mohale/gallery/bonang-mohale.jpg",
  alt: "Professor Bonang Mohale",
  caption: "Professor Bonang Mohale",
  className: ""
}, {
  id: "bonang-mohale-banner",
  src: "/speakers/Bonang Mohale/gallery/bonang-mohale-banner.jpg",
  alt: "Professor Bonang Mohale speaking on stage",
  caption: "Keynote presentation",
  className: ""
}, {
  id: "bonang-mohale-banner-third",
  src: "/speakers/Bonang Mohale/gallery/bonang-mohale-banner-third.jpg",
  alt: "Professor Bonang Mohale at corporate event",
  caption: "Executive address",
  className: ""
}, {
  id: "bonang-mohale-fourth",
  src: "/speakers/Bonang Mohale/gallery/bonang-mohale-fourth.jpg",
  alt: "Professor Bonang Mohale during panel discussion",
  caption: "Panel dialogue",
  className: ""
}, {
  id: "bonang-mohale-sixth",
  src: "/speakers/Bonang Mohale/gallery/bonang-mohale-sixth.jpg",
  alt: "Professor Bonang Mohale",
  caption: "Leadership roundtable",
  className: ""
}, {
  id: "bonang-mohale-seventh",
  src: "/speakers/Bonang Mohale/gallery/bonang-mohale-seventh.jpg",
  alt: "Professor Bonang Mohale at forum",
  caption: "Civic forum dialogue",
  className: ""
}, {
  id: "bonang-mohale-eighth",
  src: "/speakers/Bonang Mohale/gallery/bonang-mohale-eighth.jpg",
  alt: "Professor Bonang Mohale speaking to audience",
  caption: "Auditorium address",
  className: ""
}];
const MEDIA_ARTICLES: MediaItem[] = [
  {
    id: "media-citizen",
    headline: "Bonang Mohale: From stethoscope to suit",
    publication: "The Citizen",
    date: "28 Jan 2024",
    action: "Read Interview",
    url: "https://www.citizen.co.za/news/bonang-mohale-stethoscope-suit-interview/",
    image: "/speakers/Bonang Mohale/bonang-mohale-banner.jpg"
  },
  {
    id: "media-daily-maverick",
    headline: "SA must re-engineer a shared national psyche of common purpose and greater good",
    publication: "Daily Maverick",
    date: "01 July 2024",
    action: "Read Article",
    url: "https://www.dailymaverick.co.za/opinionista/2024-07-01-sa-must-re-engineer-a-shared-national-psyche-of-common-purpose-and-greater-good/",
    image: "/speakers/Bonang Mohale/bonang-mohale-banner-third.jpg"
  },
  {
    id: "media-african-leader",
    headline: "A legacy of leadership",
    publication: "African Leader",
    date: "15 Apr 2024",
    action: "Read Story",
    url: "https://businessmediamags.co.za/government-politics/african-leader/a-legacy-of-leadership/",
    image: "/speakers/Bonang Mohale/bonang-mohale-banner.jpg"
  }
];
export const TESTIMONIALS: Testimonial[] = [{
  id: "testimonial-ceo-bank",
  quote: "Prof. Mohale gave our executive audience the rare combination of moral clarity, commercial realism and a practical call to action. The room was still discussing his keynote weeks later.",
  name: "Thandi Mokoena",
  title: "Chief Executive Officer",
  organisation: "Ubuntu Capital Group"
}, {
  id: "testimonial-hr-director",
  quote: "Our leaders left challenged, energised and more honest about the work of transformation. His delivery is sophisticated, generous and impossible to ignore.",
  name: "Gerhard van Zyl",
  title: "Human Capital Director",
  organisation: "Ndlovu Industrials"
}, {
  id: "testimonial-event-organiser",
  quote: "He elevated the conference from another corporate event into a defining leadership conversation. The standing ovation was earned.",
  name: "Aisha Patel",
  title: "Programme Director",
  organisation: "Africa Governance Forum"
}, {
  id: "testimonial-chairperson",
  quote: "Prof. Mohale understands board dynamics deeply. He brought gravity, humour and a framework our directors could use immediately.",
  name: "Sipho Dlamini",
  title: "Board Chairperson",
  organisation: "Masakhane Holdings"
}, {
  id: "testimonial-learning-lead",
  quote: "The masterclass helped our senior managers connect personal excellence with institutional accountability. It was both inspiring and deeply practical.",
  name: "Naledi Jacobs",
  title: "Head of Leadership Development",
  organisation: "Southern Cross Retail Group"
}];
const BOOK_PUBLICATIONS: BookPublication[] = [{
  id: "lift-as-you-rise-publication",
  title: "Lift As You Rise",
  subtitle: "Speeches and thoughts on leadership in a changing world",
  year: "2018",
  description: "A best-selling reflection on ethical leadership, mentorship and the responsibility of successful leaders to widen opportunity.",
  accentClassName: "from-[#0A0A0A] via-[#1E1E1E] to-[#e30e04]",
  image: "/speakers/Bonang Mohale/Bonang-Mohale-Lift-As-You-Rise.jpg",
  url: "https://exclusivebooks.co.za/products/9780639926452?_pos=1&_sid=547a33132&_ss=r"
}, {
  id: "behold-the-turtle-publication",
  title: "Behold The Turtle",
  subtitle: "Thoughts on ethically principled leadership",
  year: "2021",
  description: "An analytical look at corporate courage, strategic patience, and executive resilience required to lead organizations through systemic volatility.",
  accentClassName: "from-[#e30e04] via-[#1E1E1E] to-[#0A0A0A]",
  image: "/speakers/Bonang Mohale/Bonang-Mohale-Behold-the-Turtle-The-Speakers-Firm.jpg",
  url: "https://exclusivebooks.co.za/search?q=Bonang+Mohale&filter.v.availability=1"
}, {
  id: "coming-in-from-the-cold-publication",
  title: "Coming in From the Cold",
  subtitle: "An Autobiography",
  year: "2025",
  description: "Professor Bonang Mohale shares his personal life journey, reflecting on the experiences, principles, and people that shaped him.",
  accentClassName: "from-[#0A0A0A] via-[#9A9A9A] to-[#9A9A9A]",
  image: "/speakers/Bonang Mohale/Coming-in-from-the-Cold-by-Bonang-Mohale.jpg",
  url: "https://exclusivebooks.co.za/products/9781776391691?_pos=2&_sid=547a33132&_ss=r"
}];
const TOPIC_CARDS: TopicCard[] = [{
  id: "leadership-governance",
  title: "Leadership & Governance",
  description: "A board-level exploration of accountability, stewardship and resilient decision-making. Prof. Mohale equips leaders to protect trust while moving with conviction.",
  icon: "briefcase"
}, {
  id: "ethical-business",
  title: "Ethical Business",
  description: "A practical challenge to align profit with principle. Audiences leave with language for integrity, courage and commercial responsibility.",
  icon: "check"
}, {
  id: "transformation-inclusivity",
  title: "Transformation & Inclusivity",
  description: "Beyond compliance, transformation becomes a growth strategy. This topic reframes inclusion as the work of building stronger markets and institutions.",
  icon: "globe"
}, {
  id: "economic-growth",
  title: "Economic Growth",
  description: "A clear briefing on competitiveness, private-sector capability and the social compact required for sustainable growth in South Africa and beyond.",
  icon: "award"
}, {
  id: "nation-building",
  title: "Nation Building",
  description: "A statesman's view of business as a civic actor. Prof. Mohale connects leadership choices inside companies to the future of the nation.",
  icon: "book"
}, {
  id: "personal-excellence",
  title: "Personal Excellence",
  description: "A motivating address on discipline, identity and the habits leaders must cultivate before asking others to follow them.",
  icon: "star"
}];
const ENGAGEMENT_FORMATS: EngagementFormat[] = [{
  id: "format-keynote",
  name: "Keynote Address",
  description: "A commanding mainstage address tailored to your audience and strategic theme.",
  duration: "45–90 minutes",
  icon: "briefcase"
}, {
  id: "format-panel",
  name: "Panel Discussion",
  description: "A thoughtful executive voice for moderated policy, governance and business panels.",
  duration: "45–75 minutes",
  icon: "quote"
}, {
  id: "format-workshop",
  name: "Workshop / Masterclass",
  description: "A facilitated session with frameworks, discussion and practical leadership commitments.",
  duration: "Half or full day",
  icon: "book"
}, {
  id: "format-virtual",
  name: "Virtual Presentation",
  description: "A high-impact remote address for distributed teams, webinars and hybrid conferences.",
  duration: "30–60 minutes",
  icon: "globe"
}, {
  id: "format-retreat",
  name: "Corporate Retreat",
  description: "A strategic intervention for boards and leadership teams navigating complex change.",
  duration: "Half day to 2 days",
  icon: "calendar"
}];
const VIDEO_CLIPS: VideoClip[] = [{
  id: "clip-safm-1",
  label: "SAfm Dialogue Clip 1",
  youtubeId: "2s5CXK-w0AQ"
}, {
  id: "clip-safm-2",
  label: "SAfm Dialogue Clip 2",
  youtubeId: "qp0HIF3SfI4"
}, {
  id: "clip-coming-cold",
  label: "‘Coming in From the Cold’ Launch",
  youtubeId: "qp0HIF3SfI4"
}, {
  id: "clip-lift-rise",
  label: "Lift As You Rise Keynote",
  youtubeId: "2s5CXK-w0AQ"
}, {
  id: "clip-transnet",
  label: "Transnet Keynote Address",
  youtubeId: "z20ciVNtc8A"
}, {
  id: "clip-empowamen",
  label: "EmpowaMen Dialogue",
  youtubeId: "Txr0O_M6bb0"
}];
const OFFER_TABS: OfferTabItem[] = [{
  id: "topics",
  label: "Keynote Topics"
}, {
  id: "formats",
  label: "Engagement Formats"
}];
const FOOTER_NAV_LINKS: FooterNavLink[] = [{
  id: "footer-the-brief",
  label: "The Brief"
}, {
  id: "footer-gallery",
  label: "Gallery"
}, {
  id: "footer-media-coverage",
  label: "Media Coverage"
}, {
  id: "footer-biography",
  label: "Biography"
}, {
  id: "footer-keynote-topics",
  label: "Keynote Topics"
}, {
  id: "footer-engagement-formats",
  label: "Engagement Formats"
}, {
  id: "footer-booking",
  label: "Booking"
}, {
  id: "footer-what-sets-us-apart",
  label: "What Sets Us Apart"
}, {
  id: "footer-why-engagements-stand-apart",
  label: "Why Our Engagements Stand Apart"
}, {
  id: "footer-booking-process-built-for-impact",
  label: "Our Booking Process Is Built for Impact"
}, {
  id: "footer-deployment-formats",
  label: "Deployment Formats"
}, {
  id: "footer-join-speakers-firm",
  label: "Join The Speakers Firm"
}];
const renderTopicIcon = (icon: TopicCard["icon"]) => {
  if (icon === "briefcase") {
    return <BriefcaseBusiness className="h-5 w-5" aria-hidden="true" />;
  }
  if (icon === "check") {
    return <CheckCircle className="h-5 w-5" aria-hidden="true" />;
  }
  if (icon === "globe") {
    return <Globe className="h-5 w-5" aria-hidden="true" />;
  }
  if (icon === "award") {
    return <Award className="h-5 w-5" aria-hidden="true" />;
  }
  if (icon === "book") {
    return <BookOpen className="h-5 w-5" aria-hidden="true" />;
  }
  if (icon === "calendar") {
    return <CalendarDays className="h-5 w-5" aria-hidden="true" />;
  }
  return <Star className="h-5 w-5" aria-hidden="true" />;
};
const renderFormatIcon = (icon: EngagementFormat["icon"]) => {
  if (icon === "briefcase") {
    return <BriefcaseBusiness className="h-5 w-5" aria-hidden="true" />;
  }
  if (icon === "quote") {
    return <Quote className="h-5 w-5" aria-hidden="true" />;
  }
  if (icon === "book") {
    return <BookOpen className="h-5 w-5" aria-hidden="true" />;
  }
  if (icon === "globe") {
    return <Globe className="h-5 w-5" aria-hidden="true" />;
  }
  return <CalendarDays className="h-5 w-5" aria-hidden="true" />;
};
export const BiographySection = () => {
  return <section id="biography" className="relative bg-[#FFFFFF] px-4 py-6 sm:px-6 sm:py-8 md:py-10 lg:px-8 lg:py-12" aria-labelledby="biography-heading">
      <div className="mx-auto grid max-w-[1312px] grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="col-span-1 lg:col-span-5">
          <figure className="sticky top-8 overflow-hidden rounded-[28px] border border-[#1E1E1E] bg-[#0A0A0A] shadow-[0_24px_70px_rgba(10,10,10,0.16)]">
            <img src="/speakers/Bonang Mohale/bonang-mohale-sixth.jpg" alt="Distinguished professional speaker in auditorium lighting" className="h-[320px] w-full object-cover object-center sm:h-[420px] md:h-[560px]" loading="lazy" />
            <figcaption className="border-t border-[#1E1E1E] p-5 text-[10px] font-bold uppercase tracking-widest text-[#9A9A9A] sm:text-xs"><span>Professor Bonang Mohale · Leadership authority</span></figcaption>
          </figure>
        </div>
        <div className="col-span-1 lg:col-span-7">
          <p className={`${SECTION_TAG_CLASS} mb-6 w-fit mp-reveal`} style={SECTION_TAG_STYLE}><span>Biography</span></p>
          <h2 id="biography-heading" className={`${SECTION_HEADING_CLASS} mp-reveal`}>
            <span className="block text-[#0A0A0A]">Professional</span>
            <span className="block text-[#e30e04]">Biography</span>
          </h2>
          <blockquote className="my-8 max-w-[65ch] border-l-2 border-[#e30e04] pl-5 text-xl font-bold leading-[0.98] tracking-[-0.055em] text-[#e30e04] sm:text-2xl md:pl-7 md:text-3xl">
            <span>“Leadership is the courage to build institutions worthy of the people they serve.”</span>
          </blockquote>
          <div className="max-w-[65ch] space-y-5 text-[#9A9A9A]">
            <p className={`${BODY_TEXT_CLASS} mp-reveal-left`}><span>Professor Bonang Mohale is a respected South African business leader, governance voice and public intellectual whose career has consistently connected corporate performance with social responsibility. Across boardrooms, public platforms and academic settings, he is known for challenging leaders to act with clarity, courage and consequence.</span></p>
            <p className={`${BODY_TEXT_CLASS} mp-reveal-left`} style={{
            transitionDelay: "80ms"
          }}><span>He has served in senior executive and chairperson roles across major institutions, including leadership of Business Leadership South Africa and stewardship within diversified corporate environments. His work has made him a trusted commentator on ethical leadership, transformation, competitiveness and inclusive growth.</span></p>
            <p className={`${BODY_TEXT_CLASS} mp-reveal-left`} style={{
            transitionDelay: "160ms"
          }}><span>As an author and speaker, Prof. Mohale translates complex national and organisational questions into language that leaders can use. His talks are rooted in lived executive experience, principled governance and the conviction that transformation should be treated as a strategic engine rather than a compliance exercise.</span></p>
            <p className={`${BODY_TEXT_CLASS} mp-reveal-left`} style={{
            transitionDelay: "240ms"
          }}><span>Whether addressing a conference hall, a closed board retreat or a leadership development cohort, he brings a rare combination of gravitas, warmth and practical urgency. His message is consistent: excellent leaders lift as they rise, build trust deliberately and create room for the next generation to lead.</span></p>
          </div>
          <a href="#booking-calendar" className={`mt-8 inline-flex items-center gap-3 rounded-full border border-[#0A0A0A] px-6 py-4 text-[#0A0A0A] transition-colors hover:bg-[#0A0A0A] hover:text-white ${CTA_TEXT_CLASS}`} aria-label="Download biography">
            <span>Download Bio</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>;
};
export const WhatSetsUsApartSection = () => {
  return (
    <section id="what-sets-us-apart" className="relative bg-[#FFFFFF] px-4 py-16 sm:px-6 sm:py-24 md:py-32 lg:px-8" aria-labelledby="what-sets-us-apart-heading">
      <div className="mx-auto max-w-[1312px]">
        <p className="inline-flex items-center border border-l-[4px] px-3 py-2 text-[10px] font-bold uppercase tracking-widest sm:px-4 sm:text-xs mb-6 w-fit" style={{
          backgroundColor: "#111111",
          borderColor: "#1E1E1E",
          borderLeftColor: "#e30e04",
          color: "#FFFFFF"
        }}><span>What Sets Us Apart</span></p>
        <h2 id="what-sets-us-apart-heading" className="font-['Kontora',sans-serif] max-w-4xl text-2xl font-bold uppercase leading-[0.9] tracking-[-0.05em] sm:text-3xl md:text-4xl lg:text-5xl text-[#0A0A0A]">
          <span>Precision. Discretion. Impact - At the Highest Level.</span>
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#FAF9F5] p-6 rounded-[22px] border border-[#E5E5E5] shadow-sm">
            <h3 className="font-bold text-base uppercase tracking-tight text-black mb-3">Closed-Door, NDA-Protected Briefings</h3>
            <p className="text-xs leading-relaxed text-[#9A9A9A]">For cabinet strategy, sovereign planning, or institutional pivots, we ensure airtight confidentiality from consultation to delivery.</p>
          </div>
          <div className="bg-[#FAF9F5] p-6 rounded-[22px] border border-[#E5E5E5] shadow-sm">
            <h3 className="font-bold text-base uppercase tracking-tight text-[#e30e04] mb-3">Executive-Only Strategy Sessions</h3>
            <p className="text-xs leading-relaxed text-[#9A9A9A]">No spectators. No dilution. Just elite intelligence for decision-makers shaping capital, policy, and national direction.</p>
          </div>
          <div className="bg-[#FAF9F5] p-6 rounded-[22px] border border-[#E5E5E5] shadow-sm">
            <h3 className="font-bold text-base uppercase tracking-tight text-black mb-3">Crisis-Proven Delivery</h3>
            <p className="text-xs leading-relaxed text-[#9A9A9A]">Post-crisis, mid-transition, or under scrutiny, we deploy trusted voices that rebuild trust, navigate complexity, and recalibrate vision.</p>
          </div>
          <div className="bg-[#FAF9F5] p-6 rounded-[22px] border border-[#E5E5E5] shadow-sm">
            <h3 className="font-bold text-base uppercase tracking-tight text-[#e30e04] mb-3">Bespoke Curation</h3>
            <p className="text-xs leading-relaxed text-[#9A9A9A]">From fintech to feminist economics, cybersecurity to statecraft, every speaker is precision-picked to meet your mission, market, and moment.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const WhyOurEngagementsStandApartSection = () => {
  return (
    <section id="why-engagements-stand-apart" className="relative bg-[#0A0A0A] px-4 py-16 sm:px-6 sm:py-24 md:py-32 lg:px-8 text-white" aria-labelledby="why-engagements-stand-apart-heading">
      <div className="mx-auto max-w-[1312px]">
        <p className="inline-flex items-center border border-l-[4px] px-3 py-2 text-[10px] font-bold uppercase tracking-widest sm:px-4 sm:text-xs mb-6 w-fit" style={{
          backgroundColor: "#111111",
          borderColor: "#1E1E1E",
          borderLeftColor: "#e30e04",
          color: "#FFFFFF"
        }}><span>Why Our Engagements Stand Apart</span></p>
        <h2 id="why-engagements-stand-apart-heading" className="font-['Kontora',sans-serif] max-w-4xl text-2xl font-bold uppercase leading-[0.9] tracking-[-0.05em] sm:text-3xl md:text-4xl lg:text-5xl text-white">
          <span>Stand Apart.</span>
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="border border-white/10 bg-white/[0.02] p-6 rounded-[22px] hover:border-[#e30e04] transition-all">
            <h3 className="font-bold text-base uppercase tracking-tight text-white mb-3">Exclusivity by Design</h3>
            <p className="text-xs leading-relaxed text-[#9A9A9A]">Our platforms are not open to all, they’re intentionally built for high-stakes environments where discretion, precision, and strategic intent are paramount.</p>
          </div>
          <div className="border border-white/10 bg-white/[0.02] p-6 rounded-[22px] hover:border-[#e30e04] transition-all">
            <h3 className="font-bold text-base uppercase tracking-tight text-[#e30e04] mb-3">No Volume. Just Velocity.</h3>
            <p className="text-xs leading-relaxed text-[#9A9A9A]">We don’t traffic in quantity, we deliver decisive impact. Every engagement is a calibrated move toward institutional or national outcomes.</p>
          </div>
          <div className="border border-white/10 bg-white/[0.02] p-6 rounded-[22px] hover:border-[#e30e04] transition-all">
            <h3 className="font-bold text-base uppercase tracking-tight text-white mb-3">Fortified Protocols</h3>
            <p className="text-xs leading-relaxed text-[#9A9A9A]">Our processes are built for leaders who cannot afford leaks, delays, or misalignment. Confidentiality is absolute. Execution is exact.</p>
          </div>
          <div className="border border-white/10 bg-white/[0.02] p-6 rounded-[22px] hover:border-[#e30e04] transition-all">
            <h3 className="font-bold text-base uppercase tracking-tight text-[#e30e04] mb-3">At the Table</h3>
            <p className="text-xs leading-relaxed text-[#9A9A9A]">Our speakers don’t sit in catalogues, they sit at the table where power moves. You’ll find them behind presidential podiums, in closed-door boardrooms under pressure, at summits where GDPs shift, and in rooms where silence commands respect.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const BookingProcessSection = () => {
  return (
    <section id="booking-process" className="relative bg-[#FFFFFF] px-4 py-16 sm:px-6 sm:py-24 md:py-32 lg:px-8" aria-labelledby="booking-process-heading">
      <div className="mx-auto max-w-[1312px]">
        <p className="inline-flex items-center border border-l-[4px] px-3 py-2 text-[10px] font-bold uppercase tracking-widest sm:px-4 sm:text-xs mb-6 w-fit" style={{
          backgroundColor: "#111111",
          borderColor: "#1E1E1E",
          borderLeftColor: "#e30e04",
          color: "#FFFFFF"
        }}><span>Booking Process</span></p>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 border-b border-[#E5E5E5] pb-12">
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-widest text-[#e30e04] block mb-2">The Speakers Firm</span>
            <h2 id="booking-process-heading" className="font-['Kontora',sans-serif] text-2xl font-bold uppercase leading-[0.9] tracking-[-0.05em] sm:text-3xl md:text-4xl lg:text-5xl text-[#0A0A0A]">
              <span>This Isn’t Click-to-Book, It’s Command-Level Curation</span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-end">
            <p className="text-base font-bold text-[#0A0A0A] leading-snug mb-3">
              We Don’t Just Book Speakers. We Engineer Moments of Power.
            </p>
            <p className="text-xs leading-relaxed text-[#9A9A9A]">
              Forget everything you know about speaker bureaus. We are not middlemen. We’re your elite partner in transformation, trusted by boardrooms, institutions, and global brands that don’t just want a speaker… they want a strategic weapon.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-lg font-bold uppercase tracking-tight text-black mb-8">Our Booking Process is Built for Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-[#E5E5E5] p-6 rounded-[22px]">
              <span className="text-[#e30e04] font-bold text-xs block mb-4">01. STRATEGIC INTELLIGENCE</span>
              <h4 className="font-bold text-sm uppercase text-black mb-2">Strategic Intelligence First</h4>
              <p className="text-[11px] leading-relaxed text-[#9A9A9A]">We don’t start with a list, we start with your mission, message, and momentum goals. We decode your brief like a blueprint and then find the voice to shift the room and sharpen the outcome.</p>
            </div>
            <div className="border border-[#E5E5E5] p-6 rounded-[22px]">
              <span className="text-[#e30e04] font-bold text-xs block mb-4">02. PRECISION CURATION</span>
              <h4 className="font-bold text-sm uppercase text-black mb-2">Precision Curation</h4>
              <p className="text-[11px] leading-relaxed text-[#9A9A9A]">We handpick speakers who don’t just “fit the theme”, they elevate the stakes, command credibility, and leave audiences changed. This is curation with consequences.</p>
            </div>
            <div className="border border-[#E5E5E5] p-6 rounded-[22px]">
              <span className="text-[#e30e04] font-bold text-xs block mb-4">03. ACCESS &amp; NEGOTIATION</span>
              <h4 className="font-bold text-sm uppercase text-black mb-2">Hard-Nosed Negotiation</h4>
              <p className="text-[11px] leading-relaxed text-[#9A9A9A]">We fight for maximum value, optimal terms, and absolute excellence, because we sit on your side of the table. Every time.</p>
            </div>
            <div className="border border-[#E5E5E5] p-6 rounded-[22px]">
              <span className="text-[#e30e04] font-bold text-xs block mb-4">04. FLAWLESS EXECUTION</span>
              <h4 className="font-bold text-sm uppercase text-black mb-2">Flawless Execution</h4>
              <p className="text-[11px] leading-relaxed text-[#9A9A9A]">From contracts to keynote delivery, flights to finesse, our logistics unit runs the backend, so you own the spotlight.</p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-[#0A0A0A] text-white p-8 md:p-12 rounded-[28px] border border-[#1E1E1E]">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e30e04] block mb-2">WHAT YOU GET</span>
            <h3 className="text-lg md:text-xl font-bold uppercase tracking-tight text-white mb-4">
              This isn’t speaker sourcing. It’s strategic activation, engineered for moments where precision is non-negotiable.
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 border-t border-white/10 pt-8">
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-xs uppercase text-[#e30e04] mb-2">Mission-Aligned Strategic Briefing</h4>
                <p className="text-[11px] leading-relaxed text-[#9A9A9A]">We begin with your reality, not a form, but a focused intelligence session that uncovers your mandate, internal dynamics, pressure points, and political sensitivities. We define it with you, from the inside out.</p>
              </div>
              <div>
                <h4 className="font-bold text-xs uppercase text-[#e30e04] mb-2">Seismic Thinker-to-Moment Match</h4>
                <p className="text-[11px] leading-relaxed text-[#9A9A9A]">We don’t send names. We deploy operatives. Every speaker is matched with intent — based on lived expertise, system fluency, and the ability to deliver under pressure. Not a good talk, but the right intervention for the right moment.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-xs uppercase text-[#e30e04] mb-2">Institutional Terrain Mapping</h4>
                <p className="text-[11px] leading-relaxed text-[#9A9A9A]">We map the room, the ripple, and the resistance. Who’s in play? Who needs shifting? What narratives need rewriting? Whether you’re navigating public sentiment, internal politics, or global optics — we ensure every message is tactically calibrated for maximum institutional effect.</p>
              </div>
              <div>
                <h4 className="font-bold text-xs uppercase text-[#e30e04] mb-2">Impact Engineering + Debrief</h4>
                <p className="text-[11px] leading-relaxed text-[#9A9A9A]">We don’t close engagements. We compound them. Every activation ends with insight, measuring resonance, tracking influence, and building momentum into your next strategic move. Intelligence doesn’t stop at the podium. It loops forward into future action.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div className="space-y-1">
              <p className="text-xs font-bold uppercase tracking-wider text-white">This is not logistics. It’s leadership infrastructure.</p>
              <p className="text-[10px] text-[#9A9A9A]">You don’t book a speaker. You activate a strategy. You don’t fill a slot. You shift the system. This is The Speakers Firm.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ProfileAdditionalSections = () => {
  const [activeGalleryImage, setActiveGalleryImage] = React.useState<GalleryImage | null>(null);
  const [activeVideoId, setActiveVideoId] = React.useState<string | null>(null);
  const [activeOfferTab, setActiveOfferTab] = React.useState<OfferTab>("topics");
  const [currentPage, setCurrentPage] = React.useState(0);
  const [cardsPerPage, setCardsPerPage] = React.useState(() => typeof window !== "undefined" && window.innerWidth < 640 ? 1 : 2);
  const totalPages = Math.ceil(TESTIMONIALS.length / cardsPerPage);
  const pages: Testimonial[][] = [];
  for (let i = 0; i < TESTIMONIALS.length; i += cardsPerPage) {
    pages.push(TESTIMONIALS.slice(i, i + cardsPerPage));
  }
  const closeLightbox = () => setActiveGalleryImage(null);
  React.useEffect(() => {
    const updateCardsPerPage = () => {
      setCardsPerPage(window.innerWidth < 640 ? 1 : 2);
    };
    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);
  React.useEffect(() => {
    setCurrentPage(page => Math.min(page, Math.max(0, totalPages - 1)));
  }, [totalPages]);
  React.useEffect(() => {
    if (activeGalleryImage === null) {
      return undefined;
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeGalleryImage]);
  return <div className="w-full overflow-x-hidden bg-[#FFFFFF] font-['Kontora',sans-serif]">
      {/* Video Modal Player */}
      <AnimatePresence>
        {activeVideoId && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideoId(null)}
            className="fixed inset-0 bg-black/95 z-[300] flex items-center justify-center p-4 md:p-12 cursor-pointer"
          >
            <button 
              onClick={() => setActiveVideoId(null)}
              className="absolute top-6 right-6 text-white hover:text-[#e30e04] transition-colors p-2 z-[310]"
              aria-label="Close video player"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl aspect-video bg-[#000000] border border-[#333333] overflow-hidden cursor-default rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe 
                src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1&rel=0`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="gallery" className="relative bg-[#0A0A0A] px-4 py-6 text-white sm:px-6 sm:py-8 md:py-10 lg:px-8 lg:py-12" aria-labelledby="gallery-heading">
        <svg className="pointer-events-none absolute left-0 top-0 h-14 w-full text-[#FFFFFF]" viewBox="0 0 1440 96" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 0H1440V30C1018 88 617 93 0 24V0Z" fill="currentColor" opacity="0.08" />
        </svg>
        <div className="mx-auto grid max-w-[1312px] grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="col-span-1 lg:col-span-4">
            <p className={`${SECTION_TAG_CLASS} mb-6 w-fit mp-reveal`} style={SECTION_TAG_STYLE}><span>Moments &amp; Milestones</span></p>
            <h2 id="gallery-heading" className={`${SECTION_HEADING_CLASS} mp-reveal`}>
              <span className="block text-[#FFFFFF]">Moments &amp;</span>
              <span className="block text-[#e30e04]">Milestones</span>
            </h2>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-[#9A9A9A] sm:text-lg md:text-xl"><span>From boardrooms to stadiums — a glimpse into Prof. Mohale’s world.</span></p>
          </div>
          <div className="col-span-1 grid auto-rows-[220px] gap-3 sm:grid-cols-2 md:auto-rows-[240px] lg:col-span-8 lg:grid-cols-3">
            {GALLERY_IMAGES.map((image, imageIndex) => <button key={image.id} type="button" onClick={() => setActiveGalleryImage(image)} className={`mp-reveal group relative overflow-hidden rounded-[22px] border border-white/10 bg-[#111111] text-left shadow-[0_18px_50px_rgba(0,0,0,0.22)] ${image.className}`} style={{
            transitionDelay: `${imageIndex * 80}ms`
          }} aria-label={`Open gallery image: ${image.caption}`}>
                <img src={image.src} alt={image.alt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              </button>)}
          </div>
        </div>
        <div className="mx-auto max-w-[1312px] mt-12 border-t border-white/10" />
      </section>

      <section id="experience-reel" className="relative bg-[#0A0A0A] px-4 py-6 text-white sm:px-6 sm:py-8 md:py-10 lg:px-8 lg:py-12" aria-labelledby="experience-reel-heading">
        <div className="mx-auto max-w-[1312px]">
          <div className="mb-10 grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
            <div className="col-span-1 lg:col-span-7">
              <p className={`${SECTION_TAG_CLASS} mb-6 w-fit mp-reveal`} style={SECTION_TAG_STYLE}><span>Experience Reel</span></p>
              <h2 id="experience-reel-heading" className={`${SECTION_HEADING_CLASS} mp-reveal`}>
                <span className="block text-[#FFFFFF]">Watch Prof. Mohale</span>
                <span className="block text-[#e30e04]">In Action</span>
              </h2>
            </div>
            <p className="col-span-1 max-w-xl text-base leading-relaxed text-[#9A9A9A] sm:text-lg md:text-xl lg:col-span-5"><span>See why global leaders choose Prof. Bonang Mohale to inspire, challenge, and transform their audiences.</span></p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {/* Main Video Player formatted in the identical card grid style */}
            <article className="group relative flex flex-col cursor-pointer overflow-hidden rounded-[20px] border border-[#1E1E1E] bg-[#111111] hover:border-[#e30e04]/70 transition-colors">
              <div 
                onClick={() => setActiveVideoId("2s5CXK-w0AQ")}
                className="relative aspect-video w-full flex items-center justify-center overflow-hidden"
              >
                <img 
                  src="https://img.youtube.com/vi/2s5CXK-w0AQ/hqdefault.jpg"
                  alt="Prof. Bonang Mohale experience reel"
                  className="absolute inset-0 w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-95 group-hover:scale-105 transition-all duration-500 z-0"
                />
                <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 z-[5] h-[50%] bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="relative z-[7] flex h-11 w-11 items-center justify-center rounded-full border border-white/45 bg-black/45 text-white shadow-md backdrop-blur-md transition-all duration-300 group-hover:border-[#e30e04] group-hover:bg-[#e30e04]">
                  <Play className="ml-0.5 h-4 w-4 fill-current" />
                </div>
              </div>
              <h3 className="p-4 text-[10px] font-bold uppercase tracking-widest text-[#FFFFFF] sm:text-xs">
                <span>Prof. Bonang Mohale Experience Reel</span>
              </h3>
            </article>

            {/* Rest of the clips in the same grid row structure */}
            {VIDEO_CLIPS.map(clip => <article 
                key={clip.id} 
                onClick={() => setActiveVideoId(clip.youtubeId)}
                className="group relative flex flex-col cursor-pointer overflow-hidden rounded-[20px] border border-[#1E1E1E] bg-[#111111] hover:border-[#e30e04]/70 transition-colors"
              >
                <div className="relative aspect-video w-full flex items-center justify-center overflow-hidden">
                  <img 
                    src={`https://img.youtube.com/vi/${clip.youtubeId}/hqdefault.jpg`}
                    alt={`${clip.label} clip`}
                    className="absolute inset-0 w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-95 group-hover:scale-105 transition-all duration-500 z-0"
                  />
                  <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 z-[5] h-[50%] bg-gradient-to-t from-black via-black/30 to-transparent" />
                  <div className="relative z-[7] flex h-11 w-11 items-center justify-center rounded-full border border-white/45 bg-black/45 text-white shadow-md backdrop-blur-md transition-all duration-300 group-hover:border-[#e30e04] group-hover:bg-[#e30e04]">
                    <Play className="ml-0.5 h-4 w-4 fill-current" />
                  </div>
                </div>
                <h3 className="p-4 text-[10px] font-bold uppercase tracking-widest text-[#FFFFFF] sm:text-xs"><span>{clip.label}</span></h3>
              </article>)}
          </div>
        </div>
      </section>

      <section id="client-testimonials" className="relative bg-[#FFFFFF] px-4 py-6 sm:px-6 sm:py-8 md:py-10 lg:px-8 lg:py-12" style={{
      overflow: "visible"
    }} aria-labelledby="client-testimonials-heading">
        <div className="mx-auto max-w-[1312px]">
          <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-3xl">
              <p className={`${SECTION_TAG_CLASS} mb-6 w-fit mp-reveal`} style={SECTION_TAG_STYLE}><span>What Clients Say</span></p>
              <h2 id="client-testimonials-heading" className={`${SECTION_HEADING_CLASS} mp-reveal`}>
                <span className="block text-[#0A0A0A]">What Clients</span>
                <span className="block text-[#e30e04]">Say</span>
              </h2>
            </div>
            <div className="flex shrink-0 items-center gap-2" aria-label="Testimonial slider controls">
              <button type="button" onClick={() => setCurrentPage(p => Math.max(0, p - 1))} disabled={currentPage === 0} className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-[#E5E5E5] text-[#0A0A0A] transition-colors hover:border-[#e30e04] hover:text-[#e30e04] ${currentPage === 0 ? "cursor-not-allowed opacity-40" : ""}`} aria-label="Previous testimonials">
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button type="button" onClick={() => setCurrentPage(p => Math.min(totalPages - 1, p + 1))} disabled={currentPage === totalPages - 1} className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-[#E5E5E5] text-[#0A0A0A] transition-colors hover:border-[#e30e04] hover:text-[#e30e04] ${currentPage === totalPages - 1 ? "cursor-not-allowed opacity-40" : ""}`} aria-label="Next testimonials">
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="relative py-6" style={{
          overflowX: "clip",
          overflowY: "visible",
          paddingBottom: "32px",
          marginBottom: "-32px"
        }}>
            <div className="flex flex-nowrap" style={{
            width: totalPages * 100 + "%",
            transform: "translateX(-" + currentPage * (100 / totalPages) + "%)",
            transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)"
          }}>
              {pages.map(page => <div key={page[0].id} className="flex shrink-0 gap-0 sm:gap-6" style={{
              width: 100 / totalPages + "%"
            }}>
                  {page.map(t => <article key={t.id} className="mp-reveal flex min-h-[320px] w-full shrink-0 flex-col justify-between rounded-[24px] border border-[#E5E5E5] bg-[#FFFFFF] p-6 shadow-[0_18px_50px_rgba(10,10,10,0.08)] sm:min-h-[340px] sm:w-[calc(50%-12px)]">
                      <div>
                        <div className="mb-5 flex gap-1 text-[#e30e04]" aria-label="5 star rating">
                          <Star className="h-4 w-4 fill-current" aria-hidden="true" />
                          <Star className="h-4 w-4 fill-current" aria-hidden="true" />
                          <Star className="h-4 w-4 fill-current" aria-hidden="true" />
                          <Star className="h-4 w-4 fill-current" aria-hidden="true" />
                          <Star className="h-4 w-4 fill-current" aria-hidden="true" />
                        </div>
                        <p className="text-sm font-normal leading-relaxed text-[#0A0A0A] sm:text-base"><span>“{t.quote}”</span></p>
                      </div>
                      <div className="mt-8 border-t border-[#E5E5E5] pt-5">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#0A0A0A] sm:text-xs"><span>{t.name}</span></p>
                        <p className="mt-2 text-sm leading-relaxed text-[#9A9A9A] sm:text-base"><span>{t.title}, {t.organisation}</span></p>
                      </div>
                    </article>)}
                </div>)}
            </div>
          </div>
          <div className="mt-6 flex justify-center gap-2" aria-label="Testimonial pages">
            {pages.map((page, pageIndex) => <button key={`${page[0].id}-dot`} type="button" onClick={() => setCurrentPage(pageIndex)} className={`h-2 w-2 rounded-full transition-colors ${currentPage === pageIndex ? "bg-[#e30e04]" : "bg-[#E5E5E5]"}`} aria-label={`Go to testimonial page ${pageIndex + 1}`} aria-current={currentPage === pageIndex ? "true" : undefined} />)}
          </div>
        </div>
      </section>

      <section id="books-publications" className="relative bg-[#FFFFFF] px-4 py-6 sm:px-6 sm:py-8 md:py-10 lg:px-8 lg:py-12" aria-labelledby="books-publications-heading">
        <div className="mx-auto max-w-[1312px]">
          <div className="mb-10 max-w-3xl">
            <p className={`${SECTION_TAG_CLASS} mb-6 w-fit mp-reveal`} style={SECTION_TAG_STYLE}><span>Books & Publications</span></p>
            <h2 id="books-publications-heading" className={`${SECTION_HEADING_CLASS} mp-reveal`}>
              <span className="block text-[#0A0A0A]">Books &amp;</span>
              <span className="block text-[#e30e04]">Publications</span>
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {BOOK_PUBLICATIONS.map((book, bookIndex) => <article key={book.id} className="mp-reveal rounded-[26px] border border-[#E5E5E5] bg-[#FFFFFF] p-6 shadow-[0_18px_50px_rgba(10,10,10,0.08)] sm:p-8" style={{
            transitionDelay: `${bookIndex * 80}ms`
          }}>
                <div className="relative mb-6 aspect-[4/5] overflow-hidden rounded-[18px] shadow-[0_24px_50px_rgba(10,10,10,0.22)] border border-[#E5E5E5]" aria-label={`${book.title} cover`}>
                  <img src={book.image} alt={book.title} className="h-full w-full object-cover" />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#e30e04] sm:text-xs"><span>{book.year}</span></p>
                <h3 className="mt-3 text-xl font-bold leading-none tracking-[-0.05em] text-[#0A0A0A] sm:text-2xl md:text-3xl"><span>{book.title}</span></h3>
                <p className="mt-2 text-sm font-bold uppercase leading-relaxed tracking-[0.1em] text-[#9A9A9A] sm:text-base"><span>{book.subtitle}</span></p>
                <p className="mt-4 text-sm leading-relaxed text-[#9A9A9A] sm:text-base"><span>{book.description}</span></p>
                <a href={book.url} target="_blank" rel="noopener noreferrer" className={`mt-6 inline-flex min-h-11 items-center gap-3 rounded-full border border-[#0A0A0A] px-5 py-3 text-[#0A0A0A] transition-colors hover:bg-[#0A0A0A] hover:text-white ${CTA_TEXT_CLASS}`} aria-label={`Get your copy of ${book.title}`}>
                  <span>Get Your Copy</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </article>)}
          </div>
        </div>
      </section>

      <section id="keynote-topics" className="relative bg-[#0A0A0A] px-4 py-6 text-white sm:px-6 sm:py-8 md:py-10 lg:px-8 lg:py-12" aria-labelledby="offers-heading">
        <svg className="pointer-events-none absolute left-0 top-0 h-14 w-full text-[#FFFFFF]" viewBox="0 0 1440 96" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 0H1440V26C1100 76 730 80 0 30V0Z" fill="currentColor" opacity="0.08" />
        </svg>
        <div className="mx-auto max-w-[1312px]">
          <div className="mb-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className={`${SECTION_TAG_CLASS} mb-6 w-fit mp-reveal`} style={SECTION_TAG_STYLE}><span>Speaking &amp; Advisory</span></p>
              <h2 id="offers-heading" className={`${SECTION_HEADING_CLASS} mp-reveal`}>
                <span className="block text-[#FFFFFF]">What Prof.</span>
                <span className="block text-[#e30e04]">Mohale Offers</span>
              </h2>
            </div>
            <div className="flex w-full max-w-md rounded-full border border-[#1E1E1E] bg-[#111111] p-1" role="tablist" aria-label="What Prof. Mohale offers">
              {OFFER_TABS.map(tab => <button key={tab.id} type="button" role="tab" aria-selected={activeOfferTab === tab.id} onClick={() => setActiveOfferTab(tab.id)} className={`relative min-h-12 flex-1 rounded-full px-4 text-[10px] font-bold uppercase tracking-widest transition-colors sm:text-xs ${activeOfferTab === tab.id ? "text-white" : "text-[#9A9A9A] hover:text-white"}`}>
                  <span>{tab.label}</span>
                  <span className={`absolute inset-x-5 bottom-2 h-[2px] rounded-full transition-opacity ${activeOfferTab === tab.id ? "bg-[#e30e04] opacity-100" : "bg-transparent opacity-0"}`} aria-hidden="true" />
                </button>)}
            </div>
          </div>

          {activeOfferTab === "topics" ? <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" role="tabpanel" aria-label="Keynote Topics">
              {TOPIC_CARDS.map((topic, topicIndex) => <article key={topic.id} className="rounded-[24px] border border-[#1E1E1E] bg-[#111111] p-6 transition-colors hover:border-[#e30e04]/70 sm:p-8" style={{
            transitionDelay: `${topicIndex * 80}ms`
          }}>
                  <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-[#e30e04] text-white">
                    {renderTopicIcon(topic.icon)}
                  </div>
                  <h3 className="text-lg font-bold leading-none tracking-[-0.045em] text-white sm:text-xl md:text-2xl"><span>{topic.title}</span></h3>
                  <p className="mt-4 text-sm leading-relaxed text-[#9A9A9A] sm:text-base"><span>{topic.description}</span></p>
                </article>)}
            </div> : null}

          {activeOfferTab === "formats" ? <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5" role="tabpanel" aria-label="Engagement Formats">
              {ENGAGEMENT_FORMATS.map((format, formatIndex) => <article key={format.id} className="rounded-[24px] border border-[#1E1E1E] bg-[#111111] p-6 sm:p-8 lg:p-5" style={{
            transitionDelay: `${formatIndex * 80}ms`
          }}>
                  <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-[#e30e04] text-white">
                    {renderFormatIcon(format.icon)}
                  </div>
                  <h3 className="text-lg font-bold leading-none tracking-[-0.045em] text-white sm:text-xl md:text-2xl lg:text-lg"><span>{format.name}</span></h3>
                  <p className="mt-4 text-sm leading-relaxed text-[#9A9A9A] sm:text-base"><span>{format.description}</span></p>
                  <p className="mt-6 border-t border-[#1E1E1E] pt-4 text-[10px] font-bold uppercase tracking-widest text-[#e30e04] sm:text-xs"><span>{format.duration}</span></p>
                </article>)}
            </div> : null}
        </div>
      </section>

      <section id="media-coverage" className="relative bg-[#0A0A0A] px-4 py-6 text-white sm:px-6 sm:py-8 md:py-10 lg:px-8 lg:py-12" aria-labelledby="media-coverage-heading">
        <div className="mx-auto max-w-[1312px]">
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className={`${SECTION_TAG_CLASS} mb-6 w-fit`} style={SECTION_TAG_STYLE}><span>Media Coverage</span></p>
              <h2 id="media-coverage-heading" className={SECTION_HEADING_CLASS}>
                <span className="block text-[#FFFFFF]">Media</span>
                <span className="block text-[#e30e04]">Coverage</span>
              </h2>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {MEDIA_ARTICLES.map(item => <article key={item.id} className="flex min-h-[260px] flex-col justify-between rounded-[24px] border border-[#1E1E1E] bg-[#111111] p-6 transition-colors hover:border-[#e30e04]/70 sm:p-8">
                <div>
                  <div className="relative mb-6 aspect-video overflow-hidden rounded-[14px] border border-[#1E1E1E] bg-[#0A0A0A]">
                    <img src={item.image} alt={item.headline} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                  </div>
                  <h3 className="max-w-md text-lg font-bold leading-tight tracking-[-0.04em] text-white sm:text-xl md:text-2xl"><span>{item.headline}</span></h3>
                </div>
                <div className="mt-8 border-t border-[#1E1E1E] pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#9A9A9A] sm:text-xs"><span>{item.publication} · {item.date}</span></p>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-11 items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-[#e30e04] transition-opacity hover:opacity-75 sm:text-xs" aria-label={`${item.action}: ${item.headline}`}>
                    <span>{item.action}</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </article>)}
          </div>
        </div>
      </section>

      <WhatSetsUsApartSection />
      <WhyOurEngagementsStandApartSection />
      <BookingProcessSection />

      {activeGalleryImage ? <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/82 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Gallery image lightbox">
          <button type="button" className="absolute inset-0 cursor-default" onClick={closeLightbox} aria-label="Close gallery image" />
          <figure className="relative z-10 w-full max-w-5xl overflow-hidden rounded-[26px] border border-white/15 bg-[#0A0A0A] shadow-2xl">
            <img src={activeGalleryImage.src} alt={activeGalleryImage.alt} className="max-h-[78vh] w-full object-contain mx-auto" />
            <figcaption className="flex flex-col items-start justify-between gap-4 p-5 text-white sm:flex-row sm:items-center">
              <span className="text-[10px] font-bold uppercase tracking-widest sm:text-xs">{activeGalleryImage.caption}</span>
              <button type="button" onClick={closeLightbox} className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white hover:text-[#0A0A0A]" aria-label="Close lightbox">
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </figcaption>
          </figure>
        </div> : null}
    </div>;
};
export const SpeakerFooter = () => {
  return null;
};
