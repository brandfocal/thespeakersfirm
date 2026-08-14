"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "joburg-mayor",
    label: "Former Executive Mayor",
    subtitle: "First black woman to serve as Executive Mayor of Johannesburg (2021-2023)."
  },
  {
    id: "medical-doctor",
    label: "Medical Doctor (MEDUNSA)",
    subtitle: "Qualified medical doctor since 2005 with postgraduate dip. in public health."
  },
  {
    id: "pastor-leader",
    label: "Senior Pastor & Entrepreneur",
    subtitle: "Senior Pastor at Jubilee Global Ministries and founder of multiple clinics."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "wellness-governance",
    number: "Theme 01",
    title: "Wellness as a Governance & Leadership Strategy.",
    copy: "Elevating physical and mental wellbeing to a core boardroom priority to boost corporate productivity and retention."
  },
  {
    id: "resilient-leadership",
    number: "Theme 02",
    title: "Leading Through Ambiguity & Crisis Management.",
    copy: "Insights from leading South Africa's largest economic hub and managing complex coalitions."
  },
  {
    id: "corporate-culture",
    number: "Theme 03",
    title: "Neuroscience and Toxic Workplace Cultures.",
    copy: "Dismantling high-stress, toxic environments to foster high-performing, agile corporate structures."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Dr. Mpho Phalatse-Nxumalo is a highly accomplished medical doctor, entrepreneur, public health practitioner, and former politician. She made history in November 2021 by being elected as the first woman—and the first black woman—to serve as the Executive Mayor of the City of Johannesburg, a role she held until January 2023.",
  "With a medical degree completed in 2005 at MEDUNSA and diplomas in Project Management, she has spent decades blending health practice with public sector leadership. Prior to her mayoral term, she served as the MMC for Health and Social Development (2016-2019), leading strategic public health initiatives.",
  "Following her tenure in city leadership, Dr. Phalatse-Nxumalo returned to her medical roots, establishing three successful medical practices and advising corporate boards on wellness and public health policies.",
  "Alongside her medical and entrepreneurial ventures, she is a Senior Pastor at Jubilee Global Ministries alongside her husband, Apostle Reginald Nxumalo, using her voice to inspire purpose-driven leadership across Africa."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "city-joburg", name: "CITY OF JOHANNESBURG" },
  { id: "medunsa", name: "MEDUNSA" },
  { id: "jubilee", name: "JUBILEE GLOBAL" }
];

const MPHO_MEDIA = [
  {
    id: "mpho-art-1",
    headline: "Former Joburg Mayor Mpho Phalatse opts for medical career as she steps down as DA councillor",
    publication: "TimesLIVE / IOL News",
    date: "28 Aug 2023",
    action: "Read Article",
    url: "https://iol.co.za/news/politics/2023-08-28-former-joburg-mayor-mpho-phalatse-opts-for-medical-career-as-she-steps-down-as-da-councillor/",
    image: "/speakers/Dr. Mpho Phalatse-Nxumalo profile/Dr-Mpho-Phalatse-Nxumalo-2.jpg"
  },
  {
    id: "mpho-art-2",
    headline: "Former Joburg Mayor Dr Mpho Phalatse has opened three medical practices since quitting politics",
    publication: "IOL Jobs",
    date: "08 Apr 2024",
    action: "Read Profile",
    url: "https://iol.co.za/business/jobs/2024-04-08-former-joburg-mayor-dr-mpho-phalatse-has-opened-three-medical-practices-since-quitting-politics-eight-months-ago/",
    image: "/speakers/Dr. Mpho Phalatse-Nxumalo profile/Dr-Mpho-Phalatse-Nxumalo-3.jpg"
  },
  {
    id: "mpho-art-3",
    headline: "Dr Mpho Phalatse-Nxumalo in Conversation: Wellness & Politics",
    publication: "YouTube Presentation",
    date: "12 May 2024",
    action: "Watch Video",
    url: "https://www.youtube.com/watch?v=BeDzjvgqvig",
    image: "/speakers/Dr. Mpho Phalatse-Nxumalo profile/Dr-Mpho-Phalatse-Nxumalo-9.jpg"
  }
];

export const AboutTeamSection = () => {
  const customVideos = [
    {
      id: "mpho-vid-1",
      label: "Dr. Mpho Phalatse-Nxumalo in Action",
      youtubeId: "BeDzjvgqvig"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Mpho Phalatse-Nxumalo"
      speakerTitle="Dr."
      speakerDesignation="Medical Doctor, Former Mayor of Johannesburg & Pastor"
      speakerRole="First female Executive Mayor of Johannesburg, public health strategist, and entrepreneur."
      speakerRef="TSF-MP-01"
      heroBackgroundImage="/speakers/Dr. Mpho Phalatse-Nxumalo profile/Dr-Mpho-Phalatse-Nxumalo-11.jpg"
      biographyImage="/speakers/Dr. Mpho Phalatse-Nxumalo profile/Dr-Mpho-Phalatse-Nxumalo-10.jpg"
      bioHook="“Bridging public health, governance, and business to build high-performance systems and wellness cultures.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      books={[]}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="dr-mpho-phalatse-nxumalo" customMedia={MPHO_MEDIA} />
      }
    >
      <ProfileAdditionalSections speakerId="dr-mpho-phalatse-nxumalo" customVideos={customVideos} />
    </SpeakerProfileTemplate>
  );
};
