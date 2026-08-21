"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "mind-advance-director",
    label: "Research Director, The Mind Advance",
    subtitle: "Leading research on human potential and business performance."
  },
  {
    id: "maxima-system",
    label: "Mind Advance Maxima System™",
    subtitle: "Globally benchmarked methodology for productivity and culture change."
  },
  {
    id: "dstv-anchor",
    label: "Good Morning Africa Host",
    subtitle: "Featured on DStv Business Leadership Series across 20+ countries."
  },
  {
    id: "corporate-trust",
    label: "Advisor to Prestige Clients",
    subtitle: "Trusted by Barclays Africa, Old Mutual, Nedbank, FNB, and Unilever."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "peak-performance-excellence",
    number: "Theme 01",
    title: "Peak Performance and High-Performance Excellence",
    copy: "Using the Mind Advance Maxima System™, Femi unpacks research-driven techniques to unlock human potential, boost operational productivity, and build execution capacity."
  },
  {
    id: "leadership-adaptability",
    number: "Theme 02",
    title: "Leadership Adaptability and Cultural Transformation",
    copy: "Guiding organizations on how to proactively shape corporate culture, maintain distinct value propositions, and design memorable stakeholder experiences."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "At The Speakers Firm, we proudly represent Femi Adebanji, an electrifying Business Motivational Speaker, Leadership Strategist, and Performance Expert, known for transforming organisational culture and driving high-performance excellence across industries.",
  "A dynamic voice in business leadership, Femi’s insights have been featured in leading publications including Wealth Magazine, Business Day, and Entrepreneur Magazine, as well as across international media platforms such as Good Morning Africa’s Business Leadership Series on DStv, broadcast in over 20 countries across the continent.",
  "Renowned for his high-energy keynotes, research-driven insights, and engaging delivery, Femi has worked with some of Africa’s most prestigious organisations including The Office of the Presidency, Barclays Africa, Tiger Brands, Unilever, Standard Bank, Old Mutual, Nedbank, FNB, Tsogo Sun, and Duke Corporate Education, among many others.",
  "As Research Director at The Mind Advance, a pioneering think tank consultancy, Femi leads research and strategy in unlocking human potential and organisational performance. His proprietary Mind Advance Maxima System™ is a globally benchmarked methodology used to help companies transform productivity, leadership, and business culture.",
  "Whether addressing executive leadership teams, corporate retreats, or large-scale conferences, Femi delivers actionable insights that inspire teams to elevate performance, embrace change, and build future-fit organisations. His sessions are perfect for year-end functions, leadership strategy sessions, and high-impact teambuilding retreats.",
  "Book Femi Adebanji through The Speakers Firm, A Leading African Speakers Bureau, and empower your teams to perform with purpose, innovate with passion, and lead with excellence."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "mind-advance", name: "THE MIND ADVANCE" },
  { id: "ted-talks", name: "TED TALKS" },
  { id: "dstv", name: "DSTV AFRICA" },
  { id: "business-day", name: "BUSINESS DAY" }
];

const customMedia = [
  {
    id: "femi-media-1",
    headline: "Building High-Impact Organizational Cultures",
    publication: "Press Portal",
    date: "2025-03-18",
    url: "https://pressportal.co.za/associations-organizations/story/doyuk0mxxbxogxrgt1c1-20250318.html",
    action: "Read Article",
    image: "/speakers/Femi%20Adebanji/Femi-Adebanji-The-Speakers-Firm-3.jpg"
  },
  {
    id: "femi-media-2",
    headline: "Be Distinct or Be Extinct",
    publication: "TED Talks",
    date: "N/A",
    url: "https://www.ted.com/talks/femi_adebanji_be_distinct_or_be_extinct",
    action: "Watch Video",
    image: "/speakers/Femi%20Adebanji/Femi-Adebanji-The-Speakers-Firm-5.jpg"
  },
  {
    id: "femi-media-3",
    headline: "Opinion Piece: Don’t Just Satisfy Customers, WOW Them!",
    publication: "Good Things Guy",
    date: "N/A",
    url: "https://www.goodthingsguy.com/opinion/dont-just-satisfy-customers-wow-them/",
    action: "Read Article",
    image: "/speakers/Femi%20Adebanji/Femi-Adebanji-The-Speakers-Firm-6.jpg"
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Femi Adebanji"
      speakerTitle=""
      speakerDesignation="Business Motivational Speaker & Performance Expert"
      speakerRole="High-energy leadership strategist and performance transformation authority."
      speakerRef="TSF-FA-16"
      heroBackgroundImage="/speakers/Femi%20Adebanji/Femi-Adebanji-The-Speakers-Firm-4.jpg"
      biographyImage="/speakers/Femi%20Adebanji/Femi-Adebanji-The-Speakers-Firm-2.jpg"
      bioHook="“Be distinct or be extinct – high impact culture is the key to business longevity.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="femi-adebanji" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="femi-adebanji" 
        customVideos={[
          {
            id: "femi-video-1",
            label: "Experience Reel",
            youtubeId: "Dc_xM2d8NyQ"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
