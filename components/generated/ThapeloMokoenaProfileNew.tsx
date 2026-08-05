import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  { id: "years-exp", label: "21+ Years", subtitle: "Creative Industries Experience" },
  { id: "founder-bakoena", label: "Founder", subtitle: "Bakoena Brands" },
  { id: "creator-nero", label: "Creator", subtitle: "Nero Wine (African Brand)" },
  { id: "actor-producer", label: "Acclaimed", subtitle: "Actor, Producer & Moderator" }
];

const STRATEGIC_THEMES = [
  {
    id: "theme-1",
    number: "01",
    title: "The Power of Personal Brand",
    copy: "How to intentionally build, protect, and monetise your personal brand in leadership, business, and the digital economy."
  },
  {
    id: "theme-2",
    number: "02",
    title: "Reinvention & Resilience",
    copy: "Lessons from a long, evolving career on adapting, staying relevant, and thriving through change."
  },
  {
    id: "theme-3",
    number: "03",
    title: "From Talent to Enterprise",
    copy: "Turning skill, reputation, and influence into sustainable businesses and long-term value."
  },
  {
    id: "theme-4",
    number: "04",
    title: "Leadership with Purpose",
    copy: "Why authentic leadership, values, and self-awareness matter more than ever in modern organisations."
  },
  {
    id: "theme-5",
    number: "05",
    title: "African Excellence on the Global Stage",
    copy: "Positioning African talent, products, and stories for global relevance, ownership, and impact."
  },
  {
    id: "theme-6",
    number: "06",
    title: "The Business of Creativity",
    copy: "Understanding the commercial realities of creative industries, IP ownership, and brand leverage."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Thapelo Mokoena is a highly respected South African actor, entrepreneur, producer, and thought leader whose career spans film, television, theatre, and business. With decades of experience in the creative industries, he has built a reputation for excellence, longevity, and reinvention—both on screen and off.",
  "His on-screen work across major local and international platforms has positioned him as one of Africa’s most recognisable and trusted creative voices. Off screen, Thapelo is the founder of Bakoena Brands, a diversified business group with interests in premium consumer goods, including Nero Wine, a proudly African brand celebrating resilience, heritage, and ownership.",
  "Through his entrepreneurial journey, Thapelo has become a powerful advocate for personal branding, value creation, and sustainable African enterprise. He understands influence not as popularity, but as responsibility—using platforms to educate, inspire, and unlock opportunity.",
  "As a speaker, MC, and moderator, Thapelo brings warmth, authority, and insight to boardrooms, conferences, festivals, and leadership platforms. His talks blend lived experience, strategic thinking, and compelling storytelling, making him equally impactful with executives, entrepreneurs, creatives, and emerging leaders."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "bakoena", name: "BAKOENA BRANDS" },
  { id: "nero-wine", name: "NERO WINE" },
  { id: "netflix", name: "NETFLIX ORIGINAL" },
  { id: "gq-sa", name: "GQ SOUTH AFRICA" }
];

const customMedia = [
  {
    id: "thapelo-media-1",
    headline: "Inside Thapelo Mokoena’s world of business, beard care and balance",
    publication: "GQ South Africa",
    date: "2025-10-06",
    url: "https://gq.co.za/culture/entertainment/2025-10-06-inside-thapelo-mokoenas-world-of-business-beard-care-and-balance/",
    action: "Read Article",
    image: "/speakers/Thapelo%20Mokoena/Thapelo-Mokoena-The-Speakers-Firm.jpg"
  },
  {
    id: "thapelo-media-2",
    headline: "Thapelo Mokoena showcases versatility in Fatal Seduction",
    publication: "YouTube / Netflix",
    date: "",
    url: "https://www.youtube.com/watch?v=QvvV3cugLu0",
    action: "View Interview",
    image: "/speakers/Thapelo%20Mokoena/Thapelo-Mokoena-The-Speakers-Firm1-2.jpg"
  },
  {
    id: "thapelo-media-3",
    headline: "Moderating Global Film & Television Webinar",
    publication: "YouTube / Webinar",
    date: "",
    url: "https://www.youtube.com/watch?v=bSpq9ZXJ_WY",
    action: "View Webinar",
    image: "/speakers/Thapelo%20Mokoena/Thapelo-Mokoena-The-Speakers-Firm2-2.jpg"
  }
];

const customGallery = [
  {
    id: "thapelo-gal-1",
    src: "/speakers/Thapelo%20Mokoena/Thapelo-Mokoena-The-Speakers-Firm4.jpg",
    alt: "Thapelo Mokoena Executive Portrait",
    caption: "Thapelo Mokoena",
    className: ""
  },
  {
    id: "thapelo-gal-2",
    src: "/speakers/Thapelo%20Mokoena/Thapelo-Mokoena-The-Speakers-Firm3.jpg",
    alt: "Thapelo Mokoena Beard Care Brand",
    caption: "Bakoena Brands Showcase",
    className: ""
  },
  {
    id: "thapelo-gal-3",
    src: "/speakers/Thapelo%20Mokoena/Thapelo-Mokoena-The-Speakers-Firm6.jpg",
    alt: "Thapelo on Stage",
    caption: "Hosting and Speaking Engagements",
    className: ""
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Thapelo Mokoena"
      speakerTitle=""
      speakerDesignation="Speaker, MC, Moderator, Entrepreneur & Actor"
      speakerRole="Founder of Bakoena Brands & Nero Wine."
      speakerRef="TSF-TM-32"
      heroBackgroundImage="/speakers/Thapelo%20Mokoena/Thapelo-Mokoena-The-Speakers-Firm5.jpg"
      biographyImage="/speakers/Thapelo%20Mokoena/Thapelo-Mokoena-The-Speakers-Firm4.jpg"
      bioHook="“Influence is not popularity, it is responsibility — use your platform to build legacy.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="thapelo-mokoena" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="thapelo-mokoena" 
        customGallery={customGallery} 
        customVideos={[
          {
            id: "thapelo-video-1",
            label: "Experience Reel",
            youtubeId: "fa_LAj1fvME"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
