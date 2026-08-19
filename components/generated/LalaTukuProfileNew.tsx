"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "lt-sabc",
    label: "Head of Content, SABC",
    subtitle: "Directs creative vision and commissioning strategy for South Africa's public broadcaster."
  },
  {
    id: "lt-nfvf",
    label: "NFVF Board Member",
    subtitle: "Contributes to national film policy and development of the creative economy."
  },
  {
    id: "lt-clive",
    label: "MD, Clive Morris Productions",
    subtitle: "Led production execution for major television programs like 'The Estate'."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "creative-economy",
    number: "Theme 01",
    title: "Creative Economy & Media Policy.",
    copy: "How to build a sustainable creative sector, navigate commissioning models, and leverage African storytelling."
  },
  {
    id: "executive-facilitation",
    number: "Theme 02",
    title: "Executive Event Facilitation.",
    copy: "Professional event program direction, panel facilitation, and execution of ministerial and presidential galas."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Lala Tuku is a highly acclaimed creative industry executive, producer, strategic communications leader, and master of ceremonies with over two decades of experience in the media and broadcasting landscape. She currently serves as the Head of Content at the South African Broadcasting Corporation (SABC), overseeing the public broadcaster's creative vision, content portfolios, and commissioning strategy.",
  "Lala’s career spans performing, production management, and executive board governance. Previously, she was the Managing Director at Clive Morris Productions, where she led the execution of major national television drama and soap opera projects including *The Estate* and *Isono*. In addition, she is a board member of the National Film and Video Foundation (NFVF), contributing significantly to national creative industry policy.",
  "As a professional program director and panel facilitator, Lala is renowned for bringing poise, precision, and presence to high-profile events. She has successfully facilitated presidential galas, ministerial conferences, and major industry award ceremonies, bridging corporate strategy with engaging audience connection.",
  "Book Lala Tuku through The Speakers Firm, Africa’s #1 Strategic Speakers Bureau, to bring seasoned executive presence, creative industry expertise, and professional event facilitation to your next high-level conference or gala."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "sabc", name: "SABC CONTENT" },
  { id: "nfvf", name: "NFVF" },
  { id: "clivemorris", name: "CLIVE MORRIS" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "lt-art-1",
      headline: "Lala Tuku on SABC's commissioning strategy and creative vision",
      publication: "SABC News Interview",
      date: "2024",
      action: "Watch Interview",
      url: "https://www.youtube.com/watch?v=9cDoOckCoeM",
      image: "/speakers/Lala Tuku/Lala-Tuku-The-Speakers-Firm-3.jpg"
    },
    {
      id: "lt-art-2",
      headline: "Developing the African creative economy through NFVF policies",
      publication: "NFVF Annual Industry Review",
      date: "2023",
      action: "Read Paper",
      url: "https://thespeakersfirm.co.za/mc-and-facilitators/lala-tuku/",
      image: "/speakers/Lala Tuku/Lala-Tuku-The-Speakers-Firm-6.jpg"
    },
    {
      id: "lt-art-3",
      headline: "Managing production risk and scaling local dramas at Clive Morris",
      publication: "Creative Executive Quarterly",
      date: "2024",
      action: "Read Feature",
      url: "https://thespeakersfirm.co.za/mc-and-facilitators/lala-tuku/",
      image: "/speakers/Lala Tuku/Lala-Tuku-The-Speakers-Firm-8.jpg"
    }
  ];

  const customVideos = [
    {
      id: "lt-vid-1",
      label: "Lala Tuku on the Future of African Broadcasting & Content Production",
      youtubeId: "9cDoOckCoeM"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Lala Tuku"
      speakerTitle=""
      speakerDesignation="Head of Content at SABC, Creative Producer & MC"
      speakerRole="Broadcast Executive & Event Facilitator"
      speakerRef="TSF-LT-71"
      heroBackgroundImage="/speakers/Lala Tuku/Lala-Tuku-The-Speakers-Firm-5.jpg"
      biographyImage="/speakers/Lala Tuku/Lala-Tuku-The-Speakers-Firm-7.jpg"
      bioHook="“Integrating strategic vision, production precision, and national policy to elevate African stories and lead high-level industry dialogues.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="lala-tuku" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="lala-tuku" 
        customIntroText="Broadcasting panels, executive moderation, and creative industry lectures led by Lala Tuku."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
