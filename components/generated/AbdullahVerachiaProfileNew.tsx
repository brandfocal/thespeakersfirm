import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  { id: "strategists-ceo", label: "CEO of The Strategists", subtitle: "Future Strategy & Innovation" },
  { id: "gibs-faculty", label: "Senior GIBS Faculty", subtitle: "Head of Strategy & Digital" },
  { id: "harvard-head", label: "Harvard Executive Program Head", subtitle: "Senior Executive Program for Africa" },
  { id: "board-advisor", label: "Global Board Advisor", subtitle: "Disruption & Change Specialist" }
];

const STRATEGIC_THEMES = [
  {
    id: "theme-1",
    number: "01",
    title: "Competitive Strategy & Navigating Disruption",
    copy: "Assisting global organizations in crafting future-ready strategies, managing corporate breakaways, and leading teams through intense digital disruption."
  },
  {
    id: "theme-2",
    number: "02",
    title: "Future-Fit Leadership Development",
    copy: "Lecturing on leadership and executive development programs internationally, aligning C-suite teams with complex modern market realities."
  },
  {
    id: "theme-3",
    number: "03",
    title: "Disruptive Co-Founding & Incubation",
    copy: "Leveraging hands-on experience co-founding disruptive firms to build agility, foster entrepreneurial thinking, and design corporate incubators."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Abdullah Verachia serves as the CEO of The Strategists where he leads a world class team that play an active role in assisting companies and organisations craft competitive future strategies and innovation.",
  "He is also senior faculty at GIBS, head of faculty for strategy, sustainability and digital and head of the Harvard Business School Senior Executive Programme for Africa.",
  "Abdullah Verachia is a highly regarded and sought after global strategist and advisor known for his expertise in helping companies navigate complexity, disruption and change. With significant expertise in strategy, innovation and disruption, Abdullah facilitates numerous high-level strategy sessions and breakaways for companies and governments and is an authoritative speaker on the world stage regarding these matters.",
  "He has served in senior executive and board roles, led teams that have crafted competitive strategies for some of the leading companies globally, lectured at some of the top business schools, and also co-founded several disruptive companies."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "gibs", name: "GIBS" },
  { id: "harvard", name: "Harvard Business School" },
  { id: "strategists", name: "The Strategists" }
];

const customBooks = [
  {
    id: "abdullah-book-1",
    title: "Disruption Amplified",
    coverImage: "/speakers/Abdullah%20Verachia/book-disruption-amplified.jpg",
    purchaseUrl: "https://www.thestrategists.co.za/product/abdullah-verachia-disruption-amplified-hard-copy/",
    description: "A practical guide to navigating disruption and crafting competitive strategies in a fast-changing world."
  }
];

const customMedia = [
  {
    id: "abdullah-media-1",
    headline: "Abdullah Verachia Executive Profile",
    publication: "TechCentral",
    date: "",
    url: "https://techcentral.co.za/lesaka-lincoln-mali-fintech-opportunity/253827/",
    action: "View Profile",
    image: "/speakers/Abdullah%20Verachia/Abdullah-Verachia-The-Speakers-Firm-7.jpg"
  },
  {
    id: "abdullah-media-2",
    headline: "Episode 30 - Abdullah Verachia - #WisdomPersonified Conversations with Dudu Msomi",
    publication: "YouTube",
    date: "",
    url: "https://www.youtube.com/watch?v=5KLVKcZqYag",
    action: "Watch Video",
    image: "/speakers/Abdullah%20Verachia/Abdullah-Verachia-The-Speakers-Firm-10.jpg"
  },
  {
    id: "abdullah-media-3",
    headline: "Leadership Onwards & Upwards | Episode 2",
    publication: "YouTube",
    date: "",
    url: "https://www.youtube.com/watch?v=JY5Key63ocU&t=137s",
    action: "Watch Video",
    image: "/speakers/Abdullah%20Verachia/Abdullah-Verachia-The-Speakers-Firm-6.jpg"
  }
];

const customGallery = [
  {
    id: "abdullah-gal-1",
    src: "/speakers/Abdullah%20Verachia/Abdullah-Verachia-The-Speakers-Firm-3.jpg",
    alt: "Abdullah Verachia Presentation",
    caption: "Strategic Masterclass Presentation",
    className: ""
  },
  {
    id: "abdullah-gal-2",
    src: "/speakers/Abdullah%20Verachia/Abdullah-Verachia-The-Speakers-Firm-4.jpg",
    alt: "Abdullah Verachia Panel",
    caption: "Global Strategy Facilitation",
    className: ""
  },
  {
    id: "abdullah-gal-3",
    src: "/speakers/Abdullah%20Verachia/Abdullah-Verachia-The-Speakers-Firm-6.jpg",
    alt: "Abdullah Verachia Advisory Session",
    caption: "Executive Advisory Breakaway",
    className: ""
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Abdullah Verachia"
      speakerTitle=""
      speakerDesignation="Global Strategist, Futurist & CEO Whisperer"
      speakerRole="Global Strategist & Future-Fit Leader"
      speakerRef="TSF-AV-32"
      heroBackgroundImage="/speakers/Abdullah%20Verachia/Abdullah-Verachia-The-Speakers-Firm-9.jpg"
      biographyImage="/speakers/Abdullah%20Verachia/Abdullah-Verachia-The-Speakers-Firm-3.jpg"
      bioHook="“Navigating complexity, disruption, and change requires crafting competitive future-ready strategies built on digital agility and robust leadership.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      books={customBooks}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="abdullah-verachia" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="abdullah-verachia" 
        customGallery={[]} 
        customVideos={[
          {
            id: "abdullah-video-1",
            label: "Abdullah Verachia Keynote Reel",
            youtubeId: "gCv47TLl_ro"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
