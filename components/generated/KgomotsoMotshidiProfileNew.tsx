"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "zora-ceo",
    label: "CEO of The Zora Group",
    subtitle: "Highly experienced pan-African tech professional and business strategist."
  },
  {
    id: "tech-experience",
    label: "20 Years Tech Experience",
    subtitle: "Spanning Microsoft, Eli Lilly, Hewlett-Packard, and management consulting."
  },
  {
    id: "system-developer",
    label: "System Developer Background",
    subtitle: "Evolved from technical developer to strategic business consultant."
  },
  {
    id: "published-author",
    label: "Published Book Author",
    subtitle: "Author of 'Cracking the Gentleman's Code'."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "pan-african-tech",
    number: "Theme 01",
    title: "Pan-African Technology Strategy",
    copy: "Delivering frameworks on digital growth, private and public sector integration, and enterprise business scaling in Africa."
  },
  {
    id: "leadership-wealth-building",
    number: "Theme 02",
    title: "Investment Entrepreneurship & Wealth Building",
    copy: "Guidance on cracking codes in corporate leadership, unlocking entrepreneurship, and stepping into influential leadership roles."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Kgomotso Mamello Motshidi is a highly experienced pan- African technology professional and business strategist with 20 years’ experience. She has expertise spanning from the public sector, investments and acquisitions, information technology, petro-chemicals, pharmaceuticals and management consulting. She has extensive experience with both the private and public sector. She has worked in various firms such as Microsoft; Eli Lilly Italia S.p.A; Hewlett-Packard and The Zora Group. Her career entails working for Fortune 500 companies, in South Africa and abroad. Her career evolved from being a system developer to being a business strategist. She is entrepreneurial, passionate, driven and results-oriented and her skills and international experience enable her to deliver results."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "zora-group", name: "THE ZORA GROUP" },
  { id: "microsoft", name: "MICROSOFT" },
  { id: "hewlett-packard", name: "HEWLETT-PACKARD" },
  { id: "eli-lilly", name: "ELI LILLY" }
];

const customMedia = [
  {
    id: "kgomotso-media-1",
    headline: "Kgomotso Mamello Motshidi",
    publication: "Women of the Future",
    date: "",
    url: "https://womenofthefuture.co.za/entry/kgomotso-mamello-motshidi/",
    action: "Read Article",
    image: "/images/blog-placeholder.jpg"
  },
  {
    id: "kgomotso-media-2",
    headline: "Motshidi on penning 'Cracking the Gentleman's Code'",
    publication: "YouTube Video",
    date: "",
    url: "https://www.youtube.com/watch?v=DH5QdggTNJI",
    action: "Watch Video",
    image: "/images/blog-placeholder.jpg"
  },
  {
    id: "kgomotso-media-3",
    headline: "The Queendom Network",
    publication: "Podcast Addict",
    date: "",
    url: "https://podcastaddict.com/podcast/the-queendom-network/5848997",
    action: "Read Podcast",
    image: "/images/blog-placeholder.jpg"
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Kgomotso Mamello Motshidi"
      speakerTitle=""
      speakerDesignation="The Capital Maven, Investment Entrepreneur & Wealth Builder"
      speakerRole="The Capital Maven."
      speakerRef="TSF-KM-21"
      heroBackgroundImage="/speakers/Kgomotso Mamello Motshidi/final/Kgomotso-Mamello-Motshidi-The-Speakers-Firm-2.jpg"
      biographyImage="/speakers/Kgomotso Mamello Motshidi/final/Kgomotso-Mamello-Motshidi-The-Speakers-Firm.jpg"
      bioHook="“Bridging public and private sectors through tech innovation and investment strategy.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="kgomotso-mamello-motshidi" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="kgomotso-mamello-motshidi" 
        customVideos={[
          {
            id: "kgomotso-video-1",
            label: "Experience Reel",
            youtubeId: "RLXxhahv0e4"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
