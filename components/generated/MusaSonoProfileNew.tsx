"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "musa-farmer",
    label: "Farmer & Entrepreneur",
    subtitle: "Successful commercial farmer and entrepreneur establishing agricultural ventures and driving social enterprises."
  },
  {
    id: "musa-coaching",
    label: "High Performance Coach",
    subtitle: "Qualified coach focusing on mental fortitude, team cohesion, and winning behaviors under pressure."
  },
  {
    id: "musa-entrepreneur",
    label: "Social Innovator",
    subtitle: "Founder of ventures focused on human capital optimization, disability inclusion, and agricultural growth."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "winning-mindset",
    number: "Theme 01",
    title: "The Winning Mindset & Performance.",
    copy: "Translating agricultural development, entrepreneurial ventures and high-performance business frameworks into actionable strategies to build resilient, unified teams."
  },
  {
    id: "disability-inclusion",
    number: "Theme 02",
    title: "Disability Inclusion & Diversity.",
    copy: "Challenging social perceptions, restructuring workspaces for physical accessibility, and unlocking inclusive talent value."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Musa Sono is a celebrated South African farmer, entrepreneur, social innovator, and high-performance business coach. Renowned for his extraordinary operational and mental resilience, Musa has translated his experiences in agricultural commerce and business ventures into transformative frameworks for corporate performance.",
  "Musa specializes in executive coaching, enterprise mentoring, and team-building interventions. He leverages organizational psychology to help corporate teams build a shared vision, improve communication under pressure, and establish sustainable business behaviors.",
  "As an advocate for accessibility and inclusion, Musa counsels organizations on disability integration, inclusive HR policies, and creating supportive workspace cultures that celebrate diverse talent.",
  "Book Musa Sono through The Speakers Firm, A Leading African Speakers Bureau, to deliver powerful keynote addresses on team synergy, the winning mindset, and disability inclusion."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "agri-sa", name: "Agri SA Network" },
  { id: "sports-dept", name: "SA Sports Dept" }
];

export const AboutTeamSection = () => {
  const customMedia: any[] = [];

  const customVideos = [
    {
      id: "musa-vid-1",
      label: "Musa Sono on Resilience and Performance",
      youtubeId: "BW1M_Pa8DJo"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Musa Sono"
      speakerTitle=""
      speakerDesignation="Farmer, High-Performance Entrepreneur & Social Innovator"
      speakerRole="Agricultural Entrepreneur & High-Performance Team Builder"
      speakerRef="TSF-MS-32"
      heroBackgroundImage="/speakers/Musa Sono/Musa-Sono-The-Speakers-Firm4.jpg"
      biographyImage="/speakers/Musa Sono/Musa-Sono-The-Speakers-Firm3.jpg"
      bioHook="“True high performance is not born from comfort; it is forged by adapting to adversity, uniting around a common vision, and executing with focus.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="musa-sono" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="musa-sono" 
        customIntroText="High-performance keynotes, disability inclusion training, and executive team-building workshops led by Musa Sono."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
