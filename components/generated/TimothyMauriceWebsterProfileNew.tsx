import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  { id: "brand-arch", label: "Brand Architect", subtitle: "Personal & Corporate" },
  { id: "beh-strategist", label: "Behavioral Strategist", subtitle: "Neuroscience-backed" },
  { id: "four-bestsellers", label: "Bestselling Author", subtitle: "4 Published Works" },
  { id: "mit-alumnus", label: "MIT Sloan Alumnus", subtitle: "Neuroscience & Branding" }
];

const STRATEGIC_THEMES = [
  {
    id: "theme-1",
    number: "01",
    title: "Neuroscience, Branding & Behavioral Architecture",
    copy: "Understanding how brain mechanics, identity signals, and behavioral science intersect to build trustworthy personal and corporate brands."
  },
  {
    id: "theme-2",
    number: "02",
    title: "Personal Brand Leadership & Influence",
    copy: "Equipping executives to expand their personal influence, align identity with strategic objectives, and build legacy brand power."
  },
  {
    id: "theme-3",
    number: "03",
    title: "Gender Equality, Perception & Inclusive Culture",
    copy: "Exploring the differences in leadership styles through cognitive science, addressing gender diversity, and hardwiring inclusive systems."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "At The Speakers Firm, we proudly represent Timothy Maurice Webster, an award-winning Author, Behavioral Strategist, and Global Keynote Speaker, whose work bridges the worlds of Neuroscience, Branding, and Human Behavior. He is the author of four bestselling books and a respected thought leader on the science of identity, influence, and brand leadership.",
  "Born and raised in the United States, Timothy has spent over a decade working across America, Africa, and emerging markets, helping leaders and organizations understand how the brain, behavior, and brand power intersect to shape influence, performance, and organizational success.",
  "His research explores how professionals and brands can leverage neuroscience, behavioral science, and emotional intelligence to deepen connection, trust, and leadership impact. Inspired by his studies in Branding, Design, and Neuroscience at the MIT Sloan School of Management and Brookstone College, Timothy brings a powerful blend of science, storytelling, and strategy to every engagement. With expertise in Personal Brand Leadership, Brand Influence, and Gender Equality, Timothy helps audiences expand their influence, align identity with purpose, and drive measurable personal and professional growth.",
  "Perfect for year-end functions, leadership strategy sessions, and teambuilding retreats, his keynotes are transformative, intellectually rich, and globally resonant. Book Timothy Maurice Webster through The Speakers Firm, A Leading African Speakers Bureau, and equip your leaders to think differently, lead with purpose, and build brands that move people."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "mit-sloan", name: "MIT SLOAN" },
  { id: "brookstone", name: "BROOKSTONE COLLEGE" },
  { id: "tsf", name: "THE SPEAKERS FIRM" }
];

const books = [
  {
    id: "personal-brand",
    title: "Personal Brand Intelligence",
    description: "Unpacking the science of personal brand design, messaging, and reputational influence.",
    coverImage: "/speakers/Timothy%20Maurice%20Webster/timothy-maurice-webster-personal-brand-intelligence.jpg",
    url: "https://www.amazon.com/Fuelling-Futures-Influence-Tshepiso-Phosa/dp/0620824778"
  },
  {
    id: "fuelling-futures",
    title: "Fuelling Futures",
    description: "Co-authored with Tshepiso Phosa, exploring the intersections of leadership legacy and systemic change.",
    coverImage: "/speakers/Timothy%20Maurice%20Webster/timothy-maurice-webster-fuelling-futures.jpg",
    url: "https://www.amazon.com/Fuelling-Futures-Influence-Tshepiso-Phosa/dp/0620824778"
  },
  {
    id: "soul-2-sole",
    title: "Soul 2 Sole",
    description: "A profound guide on aligning personal identity with professional footprints and brand footprints.",
    coverImage: "/speakers/Timothy%20Maurice%20Webster/timothy-maurice-webster-soul-to-sole.jpg",
    url: "https://www.loot.co.za/product/timothy-maurice-webster-soul-2-sole/mdmh-2549-g980?referrer=bookslive"
  },
  {
    id: "thinking-about-thinking",
    title: "Thinking About Thinking",
    description: "Exploring the neuroscience behind how we think, decide, and construct social realities.",
    coverImage: "/speakers/Timothy%20Maurice%20Webster/timothy-maurice-webster-thinkin-about-you.jpg",
    url: "https://www.amazon.com/Thinking-About-Timothy-Maurice-Webster/dp/0620368683?ref_=ast_author_dp"
  }
];

const customMedia = [
  {
    id: "timothy-media-1",
    headline: "Timothy Maurice Webster Joins Podcast Party as Senior Partner",
    publication: "Joburg Style",
    date: "",
    url: "https://www.joburgstyle.co.za/timothy-maurice-webster-joins-podcast-party-as-senior-partner/",
    action: "Read Article",
    image: "/speakers/Timothy%20Maurice%20Webster/Timothy-Maurice-Webster-The-Speakers-Firm-3.jpg"
  },
  {
    id: "timothy-media-2",
    headline: "Understanding the Brain: Why men and women lead differently",
    publication: "BRG Advisory",
    date: "",
    url: "https://www.brg.co.za/why-men-and-women-lead-differently/",
    action: "Read Article",
    image: "/speakers/Timothy%20Maurice%20Webster/Timothy-Maurice-Webster-The-Speakers-Firm-7.jpg"
  },
  {
    id: "timothy-media-3",
    headline: "VISIONARY BUSINESS LEADERS ON THE ART OF BEING A BOLD WOMAN",
    publication: "SA Business Integrator",
    date: "",
    url: "https://sabusinessintegrator.co.za/business-women/visionary-business-leaders-on-the-art-of-being-a-bold-woman/",
    action: "Read Article",
    image: "/speakers/Timothy%20Maurice%20Webster/Timothy-Maurice-Webster-The-Speakers-Firm-4.jpg"
  }
];

const customGallery = [
  {
    id: "timothy-gal-1",
    src: "/speakers/Timothy%20Maurice%20Webster/Timothy-Maurice-Webster-The-Speakers-Firm.jpg",
    alt: "Timothy Maurice Webster Portrait",
    caption: "Timothy Maurice Webster",
    className: ""
  },
  {
    id: "timothy-gal-2",
    src: "/speakers/Timothy%20Maurice%20Webster/Timothy-Maurice-Webster-The-Speakers-Firm-5.jpg",
    alt: "Timothy Maurice Webster Speaking",
    caption: "Neuroscience Keynote",
    className: ""
  },
  {
    id: "timothy-gal-3",
    src: "/speakers/Timothy%20Maurice%20Webster/Timothy-Maurice-Webster-The-Speakers-Firm-6.jpg",
    alt: "Timothy Maurice Webster Session",
    caption: "Personal Branding Summit",
    className: ""
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Timothy Maurice Webster"
      speakerTitle=""
      speakerDesignation="Behavioral Strategist & Author"
      speakerRole="Global Keynote Speaker & Brand Architect"
      speakerRef="TSF-TMW-14"
      heroBackgroundImage="/speakers/Timothy%20Maurice%20Webster/Timothy-Maurice-Webster-The-Speakers-Firm-8.jpg"
      heroMobileBackgroundImage="/speakers/Timothy%20Maurice%20Webster/timothy-maurice-webster-mobile.jpg"
      biographyImage="/speakers/Timothy%20Maurice%20Webster/Timothy-Maurice-Webster-The-Speakers-Firm-3.jpg"
      bioHook="“Understanding the intersection of neuroscience and human behavior is the key to building brands that truly move people.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      books={books}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="timothy-maurice-webster" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="timothy-maurice-webster" 
        customGallery={customGallery} 
        customVideos={[
          {
            id: "timothy-video-1",
            label: "Timothy Maurice Webster Keynote",
            youtubeId: "_uY5CPDhC-w"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
