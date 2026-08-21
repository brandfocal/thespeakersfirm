"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "iedf-head",
    label: "Africa Head of FinEd, IEDF",
    subtitle: "Appointed to lead financial literacy drives across Africa's informal economy in partnership with IEDF."
  },
  {
    id: "money-fundi-founder",
    label: "Founder, Money Fundi",
    subtitle: "Founder of Money Fundi, driving employee financial wellness programs for leading corporates."
  },
  {
    id: "money-game-author",
    label: "Bestselling Author & Advisor",
    subtitle: "Author of 'Winning The Money Game' and named among South Africa's top young leaders."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "corp-fin-wellness",
    number: "Theme 01",
    title: "Corporate Financial Wellness.",
    copy: "Designing structures that prioritize financial well-being inside organizations to drive performance and reduce stress."
  },
  {
    id: "informal-economy",
    number: "Theme 02",
    title: "Informal Economy Empowerment.",
    copy: "Democratizing financial literacy and enterprise education to unlock sustainable growth in local markets."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "A visionary entrepreneur and business leader, Mlamuli Mbambo is committed to transforming Africa’s economic landscape through innovation, leadership, and strategic investments.",
  "With a deep understanding of business development and market expansion, he has played a crucial role in empowering African enterprises, fostering job creation, and driving sustainable growth across multiple industries. His work reflects a strong belief in Africa’s potential and the importance of homegrown solutions to global challenges.",
  "Mlamuli’s journey into entrepreneurship was fueled by his passion for economic empowerment. Recognizing the need for African businesses to scale and compete in international markets, he has dedicated his career to building and supporting ventures that prioritize innovation, efficiency, and long-term impact.",
  "He serves as the Africa Head of Financial Education for the Informal Economy Development Forum (IEDF), working in partnership with his bestselling book to drive financial literacy across Africa's informal economy. He is also the founder of Money Fundi, a leading financial advisory and wellness firm.",
  "Book Mlamuli Mbambo through The Speakers Firm, A Leading African Speakers Bureau, to bring visionary wealth strategizing, corporate financial wellness masterclasses, and informal economy inclusion workshops to your organization."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "iedf", name: "IEDF" },
  { id: "oldmutual", name: "OLD MUTUAL" },
  { id: "moneyfundi", name: "MONEY FUNDI" }
];

const BOOKS = [
  {
    id: "winning-money-game",
    title: "Winning The Money Game",
    description: "A Guide to Financial Well-Being. A highly practical roadmap to understanding cash flow, investing, and winning the financial game in Africa.",
    coverImage: "/speakers/Mlamuli Mbambo/Winning-The-Money-Game---A-Guide-to-Financial-Well-Being.jpg",
    url: "https://www.amazon.com/Winning-Money-Game-Financial-Well-Being-ebook/dp/B0DJG19GHT"
  }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "mbambo-art-1",
      headline: "IEDF Appoints Mlamuli Mbambo as Africa Head of Financial Education",
      publication: "IEDF Global Media",
      date: "2025",
      action: "Read Announcement",
      url: "https://media.iedfglobal.org/2025/08/19/iedf-appoints-mlamuli-mbambo-as-africa-head-of-financial-education-in-landmark-partnership-with-winning-the-money-game/",
      image: "/speakers/Mlamuli Mbambo/Mlamuli-Mbambo-The-Speakers-Firm-5.jpg"
    },
    {
      id: "mbambo-art-2",
      headline: "Mlamuli Mbambo: 200 Young South Africans 2021",
      publication: "Mail & Guardian",
      date: "2021",
      action: "Read Profile",
      url: "https://200youngsouthafricans.co.za/mlamuli-mbambo-35-2021/",
      image: "/speakers/Mlamuli Mbambo/Mlamuli-Mbambo-The-Speakers-Firm-6.jpg"
    },
    {
      id: "mbambo-art-3",
      headline: "A Walking Meeting With… Mlamuli Mbambo",
      publication: "Old Mutual Corporate",
      date: "2024",
      action: "Read Column",
      url: "https://www.oldmutual.co.za/corporate/resource-hub/all-articles/a-walking-meeting-with-mlamuli-mbambo/",
      image: "/speakers/Mlamuli Mbambo/Mlamuli-Mbambo-The-Speakers-Firm-10.jpg"
    }
  ];

  const customVideos = [
    {
      id: "mbambo-vid-1",
      label: "Mlamuli Mbambo: Winning The Money Game",
      youtubeId: "B4jhTVj5J14"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Mlamuli Mbambo"
      speakerTitle=""
      speakerDesignation="Financial Educator & Wealth Strategist"
      speakerRole="Africa Head of Financial Education for IEDF"
      speakerRef="TSF-MM-31"
      heroBackgroundImage="/speakers/Mlamuli Mbambo/Mlamuli-Mbambo-The-Speakers-Firm-11.jpg"
      biographyImage="/speakers/Mlamuli Mbambo/Mlamuli-Mbambo-The-Speakers-Firm-2.jpg"
      bioHook="“The financial statistics for the average African are horrifying. Financial wellness must be a corporate priority.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      books={BOOKS}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="mlamuli-mbambo" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="mlamuli-mbambo" 
        customIntroText="Dynamic financial wellness seminars, economic inclusion panels, and corporate mentorship keynotes led by Mlamuli Mbambo."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};
