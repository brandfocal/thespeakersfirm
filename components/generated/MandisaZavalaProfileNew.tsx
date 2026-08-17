"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "rhodes-alum",
    label: "Rhodes University Alumna",
    subtitle: "Honours degree in Economics with a strong foundation in investment management."
  },
  {
    id: "alexforbes-exec",
    label: "Alexander Forbes Executive",
    subtitle: "Head of Asset Allocation, formulating the houseview and advising on over R400 billion in assets."
  },
  {
    id: "award-team",
    label: "Award-Winning Team Leader",
    subtitle: "Recognized for navigating complex market environments and mitigating investment risks."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "portfolio-strategy",
    number: "Theme 01",
    title: "Asset Allocation & Portfolio Strategy.",
    copy: "Formulating robust strategic asset allocation frameworks that optimize returns and mitigate risks in dynamic market environments."
  },
  {
    id: "macro-translation",
    number: "Theme 02",
    title: "Macroeconomic Translation.",
    copy: "Effectively translating complex macroeconomic indicators into actionable retail and pension fund investment decisions."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "At The Speakers Firm, we proudly represent Mandisa Zavala, a seasoned finance professional with a strong background in Portfolio Management and Asset allocation strategy.",
  "Having obtained an Honours degree in Economics from Rhodes University, she immediately embarked on a career in investment management. Mandisa’s industry expertise covers both single and multi management, commencing her professional journey as an investment consultant at Allan Gray. Her multi management experience began at Boutique Investment partners, where helped manage over R45bn in retail and pension fund assets. Furthermore, she held the position of co-Head of Manager Research, jointly overseeing the Manager Research capability, alongside the Chief Investment Officer (CIO).",
  "Presently, Mandisa holds the position of Head of Asset Allocation at Alexander Forbes, where she assumes the crucial responsibility of formulating the Asset Allocation houseview for the investment division. Additionally, she serves as a valued member of the Investment Committee (IC), which oversees the management of pension fund assets exceeding R400 billion. In her role, Mandisa leads a rigorous process that effectively translates macroeconomic analysis into strategic asset allocation and risk management decisions.",
  "The strategic thinking and adeptness of the Alexforbes investment team in identifying opportunities and mitigating risks within complex market environments have been widely recognized in the industry. As a result, they have received numerous industry awards for their expertise in managing both traditional and non-traditional investment portfolios. These accolades affirm their ability to navigate and excel in the dynamic and challenging investment landscape.",
  "Book Mandisa Zavala through The Speakers Firm, Africa’s #1 Strategic Speakers Bureau, to bring strategic financial foresight and expert investment insights to your next corporate summit, board presentation, or economic advisory session."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "alexforbes", name: "ALEXFORBES" },
  { id: "allangray", name: "ALLAN GRAY" },
  { id: "boutique", name: "BOUTIQUE INVESTMENT PARTNERS" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "zavala-art-1",
      headline: "AlexForbes H2 asset allocation and bond outlook",
      publication: "CNBC Africa",
      date: "2024",
      action: "Watch Interview",
      url: "https://www.cnbcafrica.com/media/7753889977186/alexforbes-h2-asset-allocation-and-bond-outlook",
      image: "/speakers/Mandisa Zavala/Mandisa-Zavala-The-Speakers-Firm-2.jpg"
    },
    {
      id: "zavala-art-2",
      headline: "Impact of the South African Two-Pot Retirement System",
      publication: "SAfm The Morning Brief",
      date: "2024",
      action: "Listen to Discussion",
      url: "https://omny.fm/shows/safm-themorningbrief-1/the-introduction-of-south-africa-s-two-pot-retirement-system-has-provided-millions-with-early-access-to-retirement-savings-but-emerging-data-suggests-that-many-withdrawals-may-not-be-fuelling-economic-activity-or-even-personal-financial-stability-as-initi?cloudflare-language=#description",
      image: "/speakers/Mandisa Zavala/Mandisa-Zavala-The-Speakers-Firm-3.jpg"
    }
  ];

  const customVideos = [
    {
      id: "zavala-vid-1",
      label: "Mandisa Zavala: AlexForbes H2 asset allocation and bond outlook",
      youtubeId: "pBg5dhCp4X0"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Mandisa Zavala"
      speakerTitle=""
      speakerDesignation="Wealth Management & Financial Inclusion Specialist"
      speakerRole="Head of Asset Allocation at Alexander Forbes"
      speakerRef="TSF-MZ-24"
      heroBackgroundImage="/speakers/Mandisa Zavala/Mandisa-Zavala-The-Speakers-Firm-5.jpg"
      biographyImage="/speakers/Mandisa Zavala/Mandisa-Zavala-The-Speakers-Firm.jpg"
      bioHook="“Translating macroeconomic analysis into strategic asset allocation and risk management decisions.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="mandisa-zavala" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="mandisa-zavala" 
        customIntroText="Strategic wealth allocation insights, retirement system policy briefings, and macroeconomic risk advisory led by Mandisa Zavala."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};
