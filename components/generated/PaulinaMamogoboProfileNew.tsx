"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "pm-brics",
    label: "BRICS Summit Project Lead",
    subtitle: "Successfully led project execution and diplomacy for the 15th BRICS Summit."
  },
  {
    id: "pm-gibs",
    label: "GIBS DBA Graduate",
    subtitle: "Holds a Doctorate in Business Administration from the Gordon Institute of Business Science."
  },
  {
    id: "pm-policy",
    label: "Trade & Policy Scholar",
    subtitle: "15+ years of experience specializing in industrial, incentive, and investment policy."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "global-diplomacy",
    number: "Theme 01",
    title: "Global Diplomacy & Multilateral Collaboration.",
    copy: "Navigating international negotiations, trade partnerships, and multilateral diplomacy in emerging markets."
  },
  {
    id: "industrial-strategy",
    number: "Theme 02",
    title: "Industrial Strategy & Economic Development.",
    copy: "Developing robust policy frameworks, trade incentives, and investment strategies to stimulate industrial growth."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Dr. Paulina Mamogobo is a highly accomplished academic, leadership coach, and international policy expert with over 15 years of experience in policy, regulation, and international relations. She holds a Doctorate in Business Administration from the prestigious Gordon Institute of Business Science (GIBS).",
  "With a strong operational background, Paulina has over 8 years of hands-on experience in the manufacturing and services sectors, both locally and globally. She has specialized in industrial, incentive, foreign, trade, and investment policy, making her a trusted advisor on economic development and industrial strategies.",
  "A key milestone in her career includes serving as the project lead for the 2023 15th BRICS Summit in South Africa. This critical role enhanced her expertise in high-level diplomacy, global collaboration, stakeholder relations, and international negotiations.",
  "Book Dr. Paulina Mamogobo through The Speakers Firm, A Leading African Speakers Bureau, to deliver insightful keynotes on trade policy, diplomatic leadership, and global industrial strategy at your next corporate summit."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "brics", name: "BRICS SUMMIT" },
  { id: "gibs", name: "GIBS BUSINESS SCHOOL" },
  { id: "unisa", name: "UNISA" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "pm-art-1",
      headline: "Diplomatic Leadership: Reflecting on the 15th BRICS Summit",
      publication: "BRICS Summit Review / YouTube",
      date: "2023",
      action: "Watch Presentation",
      url: "https://omny.fm/shows/evening-show/profile-interview-with-dr-kgathane-paulina-mamogobo-a-leader-in-trade-investment-and-economic-policy#description",
      image: "/speakers/Dr. Paulina Mamogobo/Dr-Paulina-Mamogobo-3.jpg"
    },
    {
      id: "pm-art-2",
      headline: "Formulating economic development strategies for emerging economies",
      publication: "GIBS Policy Research Journal",
      date: "2024",
      action: "Read Paper",
      url: "https://200youngsouthafricans.co.za/kgathane-paulina-mamogobo-33-2022/",
      image: "/speakers/Dr. Paulina Mamogobo/Dr-Paulina-Mamogobo-6.jpg"
    },
    {
      id: "pm-art-3",
      headline: "Industrial Policy & Investment Incentives: Navigating local and global sectors",
      publication: "Trade & Industry Quarterly",
      date: "2024",
      action: "Read Feature",
      url: "https://futurecitiesafrica.com/episode/91/bright-young-minds-paulina-mamogobo",
      image: "/speakers/Dr. Paulina Mamogobo/Dr-Paulina-Mamogobo-7.jpg"
    }
  ];

  const customVideos = [
    {
      id: "pm-vid-1",
      label: "Dr. Paulina Mamogobo on Global Trade and Diplomatic Leadership",
      youtubeId: "F4IHHn2duBw"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Dr. Paulina Mamogobo"
      speakerTitle=""
      speakerDesignation="BRICS Summit Project Lead, Scholar & Policy Expert"
      speakerRole="Governance & Trade Policy Speaker"
      speakerRef="TSF-PM-70"
      heroBackgroundImage="/speakers/Dr. Paulina Mamogobo/Dr-Paulina-Mamogobo-7.jpg"
      biographyImage="/speakers/Dr. Paulina Mamogobo/Dr-Paulina-Mamogobo-10.jpg"
      bioHook="“Driving economic policy, global diplomacy, and industrial strategy to empower sustainable trade, investment, and developmental leadership.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="dr-paulina-mamogobo" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="dr-paulina-mamogobo" 
        customIntroText="International relations keynotes, trade policy workshops, and economic development strategies led by Dr. Paulina Mamogobo."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
