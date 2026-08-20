"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "musa-sports",
    label: "Paralympic Sports Icon",
    subtitle: "Highly decorated athlete and sports strategist representing South Africa on major global athletic stages."
  },
  {
    id: "musa-coaching",
    label: "High Performance Coach",
    subtitle: "Qualified coach focusing on mental fortitude, team cohesion, and winning behaviors under pressure."
  },
  {
    id: "musa-entrepreneur",
    label: "Social Entrepreneur",
    subtitle: "Founder of ventures focused on human capital optimization, disability inclusion, and sports development."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "winning-mindset",
    number: "Theme 01",
    title: "The Winning Mindset & Performance.",
    copy: "Translating athletic high-performance frameworks into actionable corporate strategies to build resilient, unified teams."
  },
  {
    id: "disability-inclusion",
    number: "Theme 02",
    title: "Disability Inclusion & Diversity.",
    copy: "Challenging social perceptions, restructuring workspaces for physical accessibility, and unlocking inclusive talent value."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Musa Sono is a celebrated South African Paralympic athlete, sports administrator, social entrepreneur, and high-performance coach. Renowned for his extraordinary physical and mental resilience, Musa has translated his experiences on elite global athletic stages into transformative frameworks for corporate performance.",
  "Musa specializes in executive coaching and team-building interventions. He leverages sports psychology to help corporate teams build a shared vision, improve communication under pressure, and establish winning behaviors.",
  "As an advocate for accessibility and inclusion, Musa counsels organizations on disability integration, inclusive HR policies, and creating supportive workspace cultures that celebrate diverse talent.",
  "Book Musa Sono through The Speakers Firm, Africa’s #1 Strategic Speakers Bureau, to deliver powerful keynote addresses on team synergy, the winning mindset, and disability inclusion."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "paralympic", name: "Paralympics SA" },
  { id: "sports-dept", name: "SA Sports Dept" }
];

export const AboutTeamSection = () => {
  const customMedia: any[] = [];

  const customVideos = [
    {
      id: "musa-vid-1",
      label: "Musa Sono on Resilience and Performance",
      youtubeId: "APMVUbEYulY"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Musa Sono"
      speakerTitle=""
      speakerDesignation="Paralympic Icon, High-Performance Coach & Accessibility Advocate"
      speakerRole="Sports Strategist & High-Performance Team Builder"
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
