"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "masisizane-ceo",
    label: "Former CEO of Masisizane Fund",
    subtitle: "Led Old Mutual's Masisizane Fund to drive SMME development and capital access."
  },
  {
    id: "grindrod-executive",
    label: "Managing Executive at Grindrod Bank",
    subtitle: "Headed SME and Platform Banking at Grindrod Bank."
  },
  {
    id: "ca-sa",
    label: "Chartered Accountant (CA)",
    subtitle: "Highly qualified CA(SA) with international audit experience at EY in California."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "smme-funding",
    number: "Theme 01",
    title: "SME Development & Access to Capital.",
    copy: "Developing sustainable financial and operational models to unlock funding and scale micro-enterprises across Africa."
  },
  {
    id: "accountability-leadership",
    number: "Theme 02",
    title: "Accountable Leadership & Mentorship.",
    copy: "Building leadership teams based on high accountability, ownership, and deep personal development."
  },
  {
    id: "financial-inclusion-strategy",
    number: "Theme 03",
    title: "Financial Inclusion & SME Platforms.",
    copy: "Leveraging digital banking platforms and strategic corporate CSI funds to drive sustainable economic growth."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Zizipho Nyanga is a prominent Chartered Accountant (CA(SA)) and banking executive with over 17 years of experience in development finance, corporate governance, SME banking, and SMME development.",
  "She has held major leadership roles in the financial sector, including serving as the Managing Executive of SME and Platform Banking at Grindrod Bank, and previously as the CEO of the Old Mutual Masisizane Fund.",
  "Born in Mthatha, Eastern Cape, Zizipho overcame significant personal adversity to qualify as a Chartered Accountant, supported by bursaries from ABASA. In 2004, she was seconded by Ernst & Young to their San Jose office in California, gaining invaluable international experience auditing US-based firms.",
  "Through her speaking engagements, Zizipho shares insights on her corporate journey, small business finance, and the critical role of mentorship, inspiring leaders to focus on value creation and team accountability."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "grindrod", name: "GRINDROD BANK" },
  { id: "old-mutual-logo", name: "OLD MUTUAL" },
  { id: "ey", name: "ERNST & YOUNG" }
];

const ZIZIPHO_MEDIA = [
  {
    id: "zizipho-art-1",
    headline: "Unpacking SME Banking and platform financing with Zizipho Nyanga",
    publication: "Buzzsprout Podcast",
    date: "14 May 2023",
    action: "Listen to Episode",
    url: "https://www.buzzsprout.com/2076981/episodes/12874483",
    image: "/speakers/Zizipho Nyanga/zizipho-nyanga-the-speakers-firm-6.jpg"
  },
  {
    id: "zizipho-art-2",
    headline: "Future CEOs: Zizipho Nyanga, CEO of Masisizane Fund",
    publication: "The Real Network",
    date: "18 Jun 2019",
    action: "Read Interview",
    url: "https://thereal-network.com/future-ceos/future-ceos-zizipho-nyanga-ceo-masisizane-fund/",
    image: "/speakers/Zizipho Nyanga/zizipho-nyanga.jpg"
  },
  {
    id: "zizipho-art-3",
    headline: "Zizipho Nyanga on Leadership, Finance and SME Success",
    publication: "YouTube Interview",
    date: "25 Sep 2020",
    action: "Watch Video",
    url: "https://www.youtube.com/watch?v=zRBl0Y1mDuY",
    image: "/speakers/Zizipho Nyanga/zizipho-nyanga-the-speakers-firm.jpg"
  }
];

export const AboutTeamSection = () => {
  const customVideos = [
    {
      id: "zizipho-vid-1",
      label: "Zizipho Nyanga on SME Growth",
      youtubeId: "zRBl0Y1mDuY"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Zizipho Nyanga"
      speakerTitle=""
      speakerDesignation="Chartered Accountant, Banking Executive & SME Specialist"
      speakerRole="Former CEO of Masisizane Fund, SME platform leader, and CA(SA) advocate."
      speakerRef="TSF-ZN-01"
      heroBackgroundImage="/speakers/Zizipho Nyanga/zizipho-nyanga-the-speakers-firm-7.jpg"
      biographyImage="/speakers/Zizipho Nyanga/zizipho-nyanga-the-speakers-firm-2.jpg"
      bioHook="“Fostering sustainable financial inclusion by driving SME development and high-accountability leadership.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      books={[]}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="zizipho-nyanga" customMedia={ZIZIPHO_MEDIA} />
      }
    >
      <ProfileAdditionalSections speakerId="zizipho-nyanga" customVideos={customVideos} />
    </SpeakerProfileTemplate>
  );
};
