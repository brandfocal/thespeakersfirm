import * as React from "react";
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
const SUB_HEADING_CLASS = "font-['Kontora',sans-serif] text-xl font-bold uppercase leading-[0.95] tracking-[-0.05em] sm:text-2xl md:text-3xl";
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
}
interface FooterNavLink {
  id: string;
  label: string;
}
const GALLERY_IMAGES: GalleryImage[] = [{
  id: "awards-ceremony-stage",
  src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800",
  alt: "Elegant awards event stage with audience seating and warm production lighting",
  caption: "Awards and recognition moments",
  className: "md:row-span-2"
}, {
  id: "community-leadership-gathering",
  src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800",
  alt: "Group of professionals and community leaders gathered together at an event",
  caption: "Leadership gatherings beyond the stage",
  className: ""
}, {
  id: "executive-conference-conversation",
  src: "https://images.unsplash.com/photo-1551818255-e6e10579710e?w=800",
  alt: "Professionals in conversation at a formal conference setting",
  caption: "Executive conference exchanges",
  className: ""
}, {
  id: "mainstage-business-conference",
  src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
  alt: "Large business conference with speaker on stage and seated audience",
  caption: "Mainstage leadership keynote",
  className: ""
}, {
  id: "stadium-scale-audience",
  src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800",
  alt: "Large crowd gathered in an expansive event venue",
  caption: "Stadium-scale public moments",
  className: "md:row-span-2"
}, {
  id: "boardroom-collaboration",
  src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800",
  alt: "Business leaders collaborating around a table in a professional setting",
  caption: "Boardroom and leadership dialogue",
  className: ""
}, {
  id: "auditorium-address",
  src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800",
  alt: "Speaker addressing an auditorium under dramatic stage lighting",
  caption: "Auditorium address",
  className: ""
}, {
  id: "conference-stage-panel",
  src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800",
  alt: "Conference stage prepared for a panel discussion with audience seating",
  caption: "Panels, summits and civic forums",
  className: ""
}];
const MEDIA_CATEGORIES: MediaCategory[] = [{
  id: "print",
  label: "Print",
  items: [{
    id: "print-sunday-times",
    headline: "Bonang Mohale on the boardroom discipline South Africa needs now",
    publication: "Sunday Times",
    date: "18 May 2024",
    action: "Read More"
  }, {
    id: "print-business-day",
    headline: "Ethical leadership is no longer optional for corporate South Africa",
    publication: "Business Day",
    date: "03 April 2024",
    action: "Read More"
  }, {
    id: "print-mail-guardian",
    headline: "The case for inclusive growth beyond compliance",
    publication: "Mail & Guardian",
    date: "22 February 2024",
    action: "Read More"
  }]
}, {
  id: "digital",
  label: "Digital",
  items: [{
    id: "digital-fin24",
    headline: "Fin24 leadership briefing: competitiveness, courage and transformation",
    publication: "Fin24",
    date: "12 June 2024",
    action: "Read More"
  }, {
    id: "digital-business-day",
    headline: "Five governance principles for rebuilding institutional trust",
    publication: "Business Day Online",
    date: "09 March 2024",
    action: "Read More"
  }]
}, {
  id: "television",
  label: "Television",
  items: [{
    id: "television-sabc",
    headline: "SABC News interview: private sector leadership and national renewal",
    publication: "SABC News",
    date: "27 May 2024",
    action: "Watch"
  }, {
    id: "television-enca",
    headline: "eNCA Tonight: business confidence and the ethics of growth",
    publication: "eNCA",
    date: "14 April 2024",
    action: "Watch"
  }]
}, {
  id: "radio",
  label: "Radio",
  items: [{
    id: "radio-702",
    headline: "702 Business Focus: mentoring leaders who lift as they rise",
    publication: "702",
    date: "05 June 2024",
    action: "Listen"
  }, {
    id: "radio-sabc",
    headline: "SAfm Market Update: governance, enterprise and social compacting",
    publication: "SAfm",
    date: "20 March 2024",
    action: "Listen"
  }, {
    id: "radio-fin24",
    headline: "Leadership podcast: building institutions worthy of trust",
    publication: "Fin24 Audio",
    date: "08 February 2024",
    action: "Listen"
  }]
}];
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
  accentClassName: "from-[#0A0A0A] via-[#1E1E1E] to-[#e30e04]"
}, {
  id: "character-of-a-nation-publication",
  title: "The Character of a Nation",
  subtitle: "Governance, citizenship and the discipline of hope",
  year: "2021",
  description: "A sharp collection of essays on institutional trust, national competitiveness and leadership beyond slogans.",
  accentClassName: "from-[#e30e04] via-[#1E1E1E] to-[#0A0A0A]"
}, {
  id: "leadership-beyond-title-publication",
  title: "Leadership Beyond the Title",
  subtitle: "Personal excellence for boardrooms, teams and public life",
  year: "2024",
  description: "A practical field guide for executives who want to turn values into repeatable behaviours and measurable cultural progress.",
  accentClassName: "from-[#0A0A0A] via-[#9A9A9A] to-[#9A9A9A]"
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
  id: "clip-leadership",
  label: "Leadership"
}, {
  id: "clip-transformation",
  label: "Transformation"
}, {
  id: "clip-ethics",
  label: "Ethics"
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
  return <section id="biography" className="relative bg-[#FFFFFF] px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24" aria-labelledby="biography-heading">
      <div className="mx-auto grid max-w-[1312px] grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="col-span-1 lg:col-span-5">
          <figure className="sticky top-8 overflow-hidden rounded-[28px] border border-[#1E1E1E] bg-[#0A0A0A] shadow-[0_24px_70px_rgba(10,10,10,0.16)]">
            <img src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=85&w=1200&auto=format&fit=crop" alt="Distinguished professional speaker in auditorium lighting" className="h-[320px] w-full object-cover object-center sm:h-[420px] md:h-[560px]" loading="lazy" />
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
export const ProfileAdditionalSections = () => {
  const [activeGalleryImage, setActiveGalleryImage] = React.useState<GalleryImage | null>(null);
  const [activeMediaCategoryId, setActiveMediaCategoryId] = React.useState("print");
  const [activeOfferTab, setActiveOfferTab] = React.useState<OfferTab>("topics");
  const [currentPage, setCurrentPage] = React.useState(0);
  const [cardsPerPage, setCardsPerPage] = React.useState(() => typeof window !== "undefined" && window.innerWidth < 640 ? 1 : 2);
  const totalPages = Math.ceil(TESTIMONIALS.length / cardsPerPage);
  const pages: Testimonial[][] = [];
  for (let i = 0; i < TESTIMONIALS.length; i += cardsPerPage) {
    pages.push(TESTIMONIALS.slice(i, i + cardsPerPage));
  }
  const activeMediaCategory = MEDIA_CATEGORIES.find(category => category.id === activeMediaCategoryId) ?? MEDIA_CATEGORIES[0];
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
      <section id="gallery" className="relative bg-[#0A0A0A] px-4 py-12 text-white sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24" aria-labelledby="gallery-heading">
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
                <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/8 to-transparent" aria-hidden="true" />
                <span className="absolute bottom-4 left-4 right-4 text-[10px] font-bold uppercase leading-[1.35] tracking-widest text-white sm:text-xs">{image.caption}</span>
              </button>)}
          </div>
        </div>
      </section>

      <section id="experience-reel" className="relative bg-[#0A0A0A] px-4 py-12 text-white sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24" aria-labelledby="experience-reel-heading">
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
          <div className="relative overflow-hidden rounded-[28px] border border-[#1E1E1E] bg-[#0A0A0A] shadow-2xl">
            <div className="aspect-video">
              <iframe className="h-full w-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0" title="Prof. Bonang Mohale experience reel" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            </div>
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_center,rgba(227,14,4,0.10),transparent_32%)]" aria-hidden="true">
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/50 bg-black/35 text-white backdrop-blur sm:h-20 sm:w-20">
                <Play className="ml-1 h-7 w-7 fill-current" aria-hidden="true" />
              </span>
            </div>
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {VIDEO_CLIPS.map(clip => <article key={clip.id} className="overflow-hidden rounded-[20px] border border-[#1E1E1E] bg-[#111111]">
                <div className="aspect-video">
                  <iframe className="h-full w-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0" title={`${clip.label} clip`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                </div>
                <h3 className="p-4 text-[10px] font-bold uppercase tracking-widest text-[#FFFFFF] sm:text-xs"><span>{clip.label}</span></h3>
              </article>)}
          </div>
        </div>
      </section>

      <section id="client-testimonials" className="relative bg-[#FFFFFF] px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24" style={{
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

      <section id="books-publications" className="relative bg-[#FFFFFF] px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24" aria-labelledby="books-publications-heading">
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
                <div className={`relative mb-6 aspect-[4/5] overflow-hidden rounded-[18px] p-6 text-[#FFFFFF] shadow-[0_24px_50px_rgba(10,10,10,0.22)] ${book.id === "lift-as-you-rise-publication" ? "bg-[#0A0A0A]" : book.id === "character-of-a-nation-publication" ? "bg-[#111111]" : "bg-[#0A0A0A]"}`} aria-label={`${book.title} cover facsimile`}>
                  {book.id === "lift-as-you-rise-publication" ? <div className="absolute inset-0 opacity-[0.16]" style={{
                backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.75) 1px, transparent 1.4px)",
                backgroundSize: "16px 16px"
              }} aria-hidden="true" /> : null}
                  {book.id === "leadership-beyond-title-publication" ? <div className="absolute inset-4 border border-[#FFFFFF]/35" aria-hidden="true" /> : null}
                  <div className="relative flex h-full flex-col justify-between">
                    <p className="text-[10px] font-bold uppercase tracking-widest sm:text-xs"><span>{book.year}</span></p>
                    {book.id === "lift-as-you-rise-publication" ? <div className="space-y-5">
                        <h3 className="max-w-[8ch] font-serif text-3xl font-black leading-[0.86] tracking-[-0.06em] sm:text-4xl md:text-5xl"><span>{book.title}</span></h3>
                        <div className="h-px w-24 bg-[#e30e04]" aria-hidden="true" />
                      </div> : null}
                    {book.id === "character-of-a-nation-publication" ? <div className="space-y-4">
                        <h3 className="max-w-[9ch] font-['Arial_Narrow',Arial,sans-serif] text-3xl font-black uppercase leading-[0.82] tracking-[-0.075em] sm:text-4xl md:text-5xl"><span>{book.title}</span></h3>
                        <div className="h-1 w-20 bg-[#e30e04]" aria-hidden="true" />
                      </div> : null}
                    {book.id === "leadership-beyond-title-publication" ? <h3 className="max-w-[9ch] font-serif text-3xl italic leading-[0.92] tracking-[-0.055em] sm:text-4xl md:text-5xl"><span>{book.title}</span></h3> : null}
                    <p className={`text-[10px] font-bold uppercase sm:text-xs ${book.id === "lift-as-you-rise-publication" ? "tracking-widest text-[#e30e04]" : "tracking-widest"}`}><span>Professor Bonang Mohale</span></p>
                  </div>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#e30e04] sm:text-xs"><span>{book.year}</span></p>
                <h3 className="mt-3 text-xl font-bold leading-none tracking-[-0.05em] text-[#0A0A0A] sm:text-2xl md:text-3xl"><span>{book.title}</span></h3>
                <p className="mt-2 text-sm font-bold uppercase leading-relaxed tracking-[0.1em] text-[#9A9A9A] sm:text-base"><span>{book.subtitle}</span></p>
                <p className="mt-4 text-sm leading-relaxed text-[#9A9A9A] sm:text-base"><span>{book.description}</span></p>
                <a href="#enquiry-form" className={`mt-6 inline-flex min-h-11 items-center gap-3 rounded-full border border-[#0A0A0A] px-5 py-3 text-[#0A0A0A] transition-colors hover:bg-[#0A0A0A] hover:text-white ${CTA_TEXT_CLASS}`} aria-label={`Get your copy of ${book.title}`}>
                  <span>Get Your Copy</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </article>)}
          </div>
        </div>
      </section>

      <section id="keynote-topics" className="relative bg-[#0A0A0A] px-4 py-12 text-white sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24" aria-labelledby="offers-heading">
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
                  <h3 className="text-xl font-bold leading-none tracking-[-0.045em] text-white sm:text-2xl md:text-3xl"><span>{topic.title}</span></h3>
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
                  <h3 className="text-xl font-bold leading-none tracking-[-0.045em] text-white sm:text-2xl md:text-3xl lg:text-xl"><span>{format.name}</span></h3>
                  <p className="mt-4 text-sm leading-relaxed text-[#9A9A9A] sm:text-base"><span>{format.description}</span></p>
                  <p className="mt-6 border-t border-[#1E1E1E] pt-4 text-[10px] font-bold uppercase tracking-widest text-[#e30e04] sm:text-xs"><span>{format.duration}</span></p>
                </article>)}
            </div> : null}
        </div>
      </section>

      <section id="media-coverage" className="relative bg-[#0A0A0A] px-4 py-12 text-white sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24" aria-labelledby="media-coverage-heading">
        <div className="mx-auto max-w-[1312px]">
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className={`${SECTION_TAG_CLASS} mb-6 w-fit`} style={SECTION_TAG_STYLE}><span>Media Coverage</span></p>
              <h2 id="media-coverage-heading" className={SECTION_HEADING_CLASS}>
                <span className="block text-[#FFFFFF]">Media</span>
                <span className="block text-[#e30e04]">Coverage</span>
              </h2>
            </div>
            <div className="flex flex-wrap gap-2" aria-label="Media category filters">
              {MEDIA_CATEGORIES.map(category => <button key={category.id} type="button" onClick={() => setActiveMediaCategoryId(category.id)} className={`min-h-11 rounded-full border px-5 py-3 text-[10px] font-bold uppercase tracking-widest transition-colors sm:text-xs ${activeMediaCategoryId === category.id ? "border-[#e30e04] bg-[#e30e04] text-white" : "border-[#1E1E1E] bg-transparent text-[#9A9A9A] hover:border-[#e30e04] hover:text-white"}`} aria-pressed={activeMediaCategoryId === category.id}>
                  <span>{category.label}</span>
                </button>)}
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {activeMediaCategory.items.map(item => <article key={item.id} className="flex min-h-[260px] flex-col justify-between rounded-[24px] border border-[#1E1E1E] bg-[#111111] p-6 transition-colors hover:border-[#e30e04]/70 sm:p-8">
                <div>
                  <div className="mb-7 h-10 w-32 rounded-full border border-[#1E1E1E] bg-[#111111]" aria-label={`${item.publication} logo placeholder`} />
                  <h3 className="max-w-md text-xl font-bold leading-tight tracking-[-0.04em] text-white sm:text-2xl md:text-3xl"><span>{item.headline}</span></h3>
                </div>
                <div className="mt-8 border-t border-[#1E1E1E] pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#9A9A9A] sm:text-xs"><span>{item.publication} · {item.date}</span></p>
                  <a href="#booking-calendar" className="mt-4 inline-flex min-h-11 items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-[#e30e04] transition-opacity hover:opacity-75 sm:text-xs" aria-label={`${item.action}: ${item.headline}`}>
                    <span>{item.action}</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </article>)}
          </div>
        </div>
      </section>

      {activeGalleryImage ? <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/82 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Gallery image lightbox">
          <button type="button" className="absolute inset-0 cursor-default" onClick={closeLightbox} aria-label="Close gallery image" />
          <figure className="relative z-10 w-full max-w-5xl overflow-hidden rounded-[26px] border border-white/15 bg-[#0A0A0A] shadow-2xl">
            <img src={activeGalleryImage.src} alt={activeGalleryImage.alt} className="max-h-[78vh] w-full object-cover" />
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
  return <footer className="bg-[#0A0A0A] px-4 py-12 text-white sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24" aria-label="Site footer">
      <div className="mx-auto grid max-w-[1312px] grid-cols-1 gap-8 sm:gap-10 md:grid-cols-12 lg:gap-16">
        <div className="col-span-1 md:col-span-5">
          <p className="text-[10px] font-bold uppercase leading-tight tracking-widest text-[#FFFFFF] sm:text-xs"><span>Professor Bonang Mohale</span></p>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#9A9A9A] sm:text-base"><span>Corporate governance, ethical leadership, transformation and inclusive growth for serious rooms.</span></p>
        </div>
        <nav className="col-span-1 md:col-span-4" aria-labelledby="footer-navigate-heading">
          <h2 id="footer-navigate-heading" className="text-[10px] font-bold uppercase tracking-widest text-[#e30e04] sm:text-xs"><span>Navigate</span></h2>
          <ul className="mt-5 flex flex-col gap-3 md:flex-row md:flex-wrap md:gap-x-5 md:gap-y-2">
            {FOOTER_NAV_LINKS.map(link => <li key={link.id}>
                <a href="#booking-calendar" className="inline-flex min-h-11 items-center text-sm leading-relaxed text-[#9A9A9A] transition-colors hover:text-white sm:text-base"><span>{link.label}</span></a>
              </li>)}
          </ul>
        </nav>
        <div className="col-span-1 md:col-span-3">
          <h2 className="text-[10px] font-bold uppercase tracking-widest text-[#e30e04] sm:text-xs"><span>Book</span></h2>
          <p className="mt-5 text-sm leading-relaxed text-[#9A9A9A] sm:text-base"><span>For keynotes, board retreats, masterclasses and executive conferences.</span></p>
          <a href="#enquiry-form" className={`mt-6 inline-flex min-h-11 items-center gap-3 rounded-full bg-[#e30e04] px-5 py-3 text-white transition-colors hover:bg-[#c00c03] ${CTA_TEXT_CLASS}`} aria-label="Start a speaker enquiry">
            <span>Start Enquiry</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>;
};