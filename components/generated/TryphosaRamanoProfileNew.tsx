"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "corp-exec",
    label: "Corporate Executive",
    subtitle: "Over 30 years of experience in key executive roles across major South African industries."
  },
  {
    id: "finance-chief",
    label: "Financial Services Expert",
    subtitle: "Pioneering CFO who has led financial strategy at major state-owned and listed entities."
  },
  {
    id: "board-broker",
    label: "Non-Executive Director",
    subtitle: "Serves on multiple high-profile boards shaping corporate governance and strategy."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "financial-stewardship",
    number: "Theme 01",
    title: "Strategic Financial Leadership & Governance.",
    copy: "Guiding organizations through financial transformation, board-level accountability, and risk intelligence to secure long-term value."
  },
  {
    id: "women-in-finance",
    number: "Theme 02",
    title: "Empowering Women in Executive Leadership.",
    copy: "Breaking barriers in traditionally male-dominated sectors and fostering networks to elevate women leaders in finance and corporate boardrooms."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "At The Speakers Firm, we proudly represent Tryphosa Ramano, an accomplished corporate executive, financial services leader, and a prominent voice in South African business governance.",
  "With an illustrious career spanning over three decades, Tryphosa has served as Chief Financial Officer at major organizations, bringing exceptional strategic depth, financial acumen, and governance insight to the boardroom. She has successfully led major listings, corporate turnarounds, and restructuring initiatives.",
  "As a sought-after speaker and board advisor, she focuses on board effectiveness, executive accountability, and ethical stewardship. Her experience in both state-owned enterprises and private corporations allows her to bridge complex regulatory frameworks with agile business execution, making her a vital resource for modern executive teams."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "ppc", name: "PPC CEMENT" },
  { id: "wiphold", name: "WIPHOLD" },
  { id: "saa", name: "SOUTH AFRICAN AIRWAYS" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "tryphosa-art-1",
      headline: "Power of Women 2023: Tryphosa Ramano",
      publication: "Mail & Guardian",
      date: "2023",
      action: "Read Article",
      url: "https://mg.co.za/powerofwomen/2023/tryphosa-ramano/",
      image: "/speakers/Tryphosa Ramano/Tryphosa-Ramano-The-Speakers-Firm-2.jpg"
    },
    {
      id: "tryphosa-art-2",
      headline: "Tryphosa Ramano on CFO Club",
      publication: "CFO Club",
      date: "2024",
      action: "Read Interview",
      url: "https://cfoclub.co.za/60-tryphosa-ramano/",
      image: "/speakers/Tryphosa Ramano/Tryphosa-Ramano-The-Speakers-Firm-3.jpg"
    },
    {
      id: "tryphosa-art-3",
      headline: "Empowering young leaders to be the architects, not just beneficiaries, of democracy",
      publication: "City Press / News24",
      date: "14 Jun 2025",
      action: "Read Column",
      url: "https://www.news24.com/citypress/voices/tryphosa-ramano-empowering-young-leaders-to-be-the-architects-not-just-beneficiaries-of-democracy-20250614-0803",
      image: "/speakers/Tryphosa Ramano/Tryphosa-Ramano-The-Speakers-Firm-4.jpg"
    }
  ];

  const customGallery = [
    {
      id: "tryphosa-gal-1",
      src: "/speakers/Tryphosa Ramano/Tryphosa-Ramano-The-Speakers-Firm-3.jpg",
      alt: "Tryphosa Ramano executive address",
      caption: "Strategic Financial Leadership & Governance",
      className: "sm:col-span-2 lg:col-span-2"
    },
    {
      id: "tryphosa-gal-2",
      src: "/speakers/Tryphosa Ramano/Tryphosa-Ramano-The-Speakers-Firm-4.jpg",
      alt: "Tryphosa Ramano corporate meeting",
      caption: "Collaborating at corporate stewardship summits",
      className: ""
    },
    {
      id: "tryphosa-gal-3",
      src: "/speakers/Tryphosa Ramano/Tryphosa-Ramano-The-Speakers-Firm-5.jpg",
      alt: "Tryphosa Ramano executive presentation",
      caption: "Addressing corporate boards and panels",
      className: ""
    },
    {
      id: "tryphosa-gal-4",
      src: "/speakers/Tryphosa Ramano/Tryphosa-Ramano-The-Speakers-Firm-6.jpg",
      alt: "Empowering women leaders session",
      caption: "Shaping the network of female corporate executives",
      className: ""
    },
    {
      id: "tryphosa-gal-5",
      src: "/speakers/Tryphosa Ramano/Tryphosa-Ramano-The-Speakers-Firm-7.jpg",
      alt: "Tryphosa Ramano at governance forum",
      caption: "Keynote presentation on ethical leadership",
      className: ""
    }
  ];

  const customVideos = [
    {
      id: "tryphosa-vid-1",
      label: "Tryphosa Ramano Keynote & Financial Address",
      youtubeId: "FGxGq1HvDTc"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Tryphosa Ramano"
      speakerTitle=""
      speakerDesignation="Corporate Executive, Financial Services Leader & Speaker"
      speakerRole="Pioneering financial executive and strategic board member."
      speakerRef="TSF-TR-07"
      heroBackgroundImage="/speakers/Tryphosa Ramano/Tryphosa-Ramano-The-Speakers-Firm8.jpg"
      biographyImage="/speakers/Tryphosa Ramano/Tryphosa-Ramano-The-Speakers-Firm.jpg"
      bioHook="“Sustainable growth is built on transparency, rigorous accountability, and ethical stewardship.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="tryphosa-ramano" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="tryphosa-ramano" 
        customGallery={customGallery} 
        customIntroText="Highlights of Tryphosa Ramano's executive keynotes and board governance summits."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};
