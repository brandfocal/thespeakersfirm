"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "telkom-ceo",
    label: "Former CEO Telkom Group",
    subtitle: "Highly successful turnaround corporate general."
  },
  {
    id: "wits-ukzn",
    label: "Wits & UKZN Alumnus",
    subtitle: "Holds a Bachelor’s degree from Wits and LLB from UKZN."
  },
  {
    id: "board-leader",
    label: "Multi-Board Member",
    subtitle: "Served on boards like Afrox SA, BMW SA, BCX Group, and Wits Council."
  },
  {
    id: "investor",
    label: "Investor & Industrialist",
    subtitle: "Leading corporate investor and business moderniser."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "corporate-turnaround",
    number: "Theme 01",
    title: "Corporate Turnaround Strategy & Governance",
    copy: "Using lessons from saving Telkom from impending ruin, Sipho delivers strategic keynotes on operational restructuring, risk management, and market repositioning."
  },
  {
    id: "leadership-discipline",
    number: "Theme 02",
    title: "Discipline-Driven Business Leadership",
    copy: "Sipho shares how early foundations of discipline, ethics, and board-level partnership construct resilient corporate structures."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Sipho Maseko is one of the most coveted leaders in South Africa. He has a commendable history of serving some of the top management positions in different companies, Most recently the CEO of Telkom Group.",
  "Sipho spent the better part of his childhood life in Garankuwa under the care of his grandparents, who professionally, were teachers. He acknowledges that his folks played an essential role in instilling discipline in him, the one thing that he carries with him to date. During his high school days, he landed an opportunity in KwaZulu Natal and therefore relocated to the province. He, later on, got another chance to further his studies in the region.",
  "Sipho obtained his Bachelor’s degree from the University of the Witwatersrand. He is also an alumnus of the University of KwaZulu-Natal where he graduated with his LLB (Law).",
  "Sipho boasts a wealth of experience in serving senior management roles in several organisations in the country.",
  "Sipho has also served on several boards within South Africa including: Afrox South Africa, BMW South Africa, BCX Group, Roedean School (SA), Center for Development & Enterprise, CDE, University of the Witwatersrand (Council)"
];

const SOCIAL_PROOF_LOGOS = [
  { id: "telkom", name: "TELKOM GROUP" },
  { id: "bmw", name: "BMW SOUTH AFRICA" },
  { id: "wits", name: "UNIVERSITY OF WITWATERSRAND" },
  { id: "afrox", name: "AFROX SOUTH AFRICA" }
];

const customMedia = [
  {
    id: "maseko-media-1",
    headline: "South African tycoon Sipho Maseko joins Shoprite board shortly after Telkom bid setback",
    publication: "Billionaires.africa",
    date: "",
    url: "https://www.billionaires.africa/2023/06/30/south-african-tycoon-sipho-maseko-joins-shoprite-board-shortly-after-telkom-bid-setback/",
    action: "Read Article",
    image: "/speakers/Sipho%20Maseko/final/sipho-maseko-the-speakers-firm-third.jpg"
  },
  {
    id: "maseko-media-2",
    headline: "Sipho Maseko: The man who modernised Telkom prepares to bow out in 2022",
    publication: "News24",
    date: "",
    url: "https://www.news24.com/business/companies/sipho-maseko-the-man-who-modernised-telkom-prepares-to-bow-out-in-2022-20210724",
    action: "Read Article",
    image: "/speakers/Sipho%20Maseko/final/sipho-maseko-the-speakers-firm-sixth.jpg"
  },
  {
    id: "maseko-media-3",
    headline: "Sipho Maseko saved Telkom from impending ruin",
    publication: "Moneyweb",
    date: "",
    url: "https://www.moneyweb.co.za/news/companies-and-deals/sipho-maseko-saved-telkom-from-impending-ruin/",
    action: "Read Article",
    image: "/speakers/Sipho%20Maseko/final/sipho-maseko-the-speakers-firm-seventh.jpg"
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Sipho Maseko"
      speakerTitle=""
      speakerDesignation="Former Group CEO: Telkom South Africa, Investor & Industrialist"
      speakerRole="The Corporate Turnaround General."
      speakerRef="TSF-SM-18"
      heroBackgroundImage="/speakers/Sipho%20Maseko/final/sipho-maseko-the-speakers-firm-fourth.jpg"
      heroMobileBackgroundImage="/speakers/Sipho%20Maseko/sipho-maseko-mobile.jpg"
      biographyImage="/speakers/Sipho%20Maseko/final/sipho-maseko-the-speakers-firm.jpg"
      bioHook="“Resilient leadership modernises legacy institutions and transforms industries.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="sipho-maseko" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="sipho-maseko" 
        customVideos={[
          {
            id: "maseko-video-1",
            label: "Experience Reel",
            youtubeId: "-P_wTeKXb34"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
