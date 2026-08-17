"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "up-alum",
    label: "University of Pretoria Alumna",
    subtitle: "BComm in Marketing Management with a focus on strategic consumer behavior."
  },
  {
    id: "fnb-exec",
    label: "Former Head, FNB Consumer Education",
    subtitle: "Led FNB's nationwide division responsible for public financial literacy and education."
  },
  {
    id: "financial-life-coach",
    label: "Financial & Life Coach",
    subtitle: "Over a decade of coaching individuals and teams toward sustainable debt management."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "financial-literacy",
    number: "Theme 01",
    title: "Financial Education & Literacy.",
    copy: "Educating communities and corporate employees on budgeting, debt management, and basic banking mechanics."
  },
  {
    id: "mindset-shift",
    number: "Theme 02",
    title: "Mindset Shift & Holistic Wellness.",
    copy: "Integrating life coaching principles with financial principles to cultivate long-term behavioral changes and economic resilience."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Eunice Sibiya is a Financial and Life Coach. She is the former Head of Consumer Education at FNB, a division which is responsible for educating South Africans on basic financial concepts and promoting financial literacy across the country.",
  "Qualifications: BComm: Marketing Management (UP). Ms Sibiya provides a fresh approach to content and has a calm thoughtful demeanour in dealing with clients, audiences and anyone she comes into contact with. Her attention to detail and focus on adding value will no doubt prove her to be an asset to any assignment in your organization.",
  "Throughout her career, Eunice has been passionate about driving financial inclusion and empowering individuals to take control of their economic destiny. She uses practical, real-world examples to make complex financial concepts digestible, helping audiences overcome debt traps and design sustainable lifestyles.",
  "Book Eunice Sibiya through The Speakers Firm, Africa’s #1 Strategic Speakers Bureau, to bring structured consumer financial education, interactive budgeting masterclasses, and executive life coaching to your corporate events, training programs, and conferences."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "fnb", name: "FNB" },
  { id: "up", name: "UNIVERSITY OF PRETORIA" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "sibiya-art-1",
      headline: "Taking charge of your debt",
      publication: "The Citizen",
      date: "2023",
      action: "Read Article",
      url: "https://www.citizen.co.za/business/personal-finance/taking-charge-of-your-debt/",
      image: "/speakers/Eunice Sibiya/Eunice-Sibiya-The-Speakers-Firm2.jpg"
    },
    {
      id: "sibiya-art-2",
      headline: "Battling with debt? Here’s how you can manage it better",
      publication: "Bona Magazine",
      date: "2023",
      action: "Read Column",
      url: "https://www.bona.co.za/work-and-money/battling-debt-heres-can-manage-better/",
      image: "/speakers/Eunice Sibiya/Eunice-Sibiya-The-Speakers-Firm3.jpg"
    },
    {
      id: "sibiya-art-3",
      headline: "Eunice Sibiya on issues that impact your life",
      publication: "The Talkshop with Naledi Moleo",
      date: "2023",
      action: "Listen to Show",
      url: "https://omny.fm/shows/the-talkshop/eunice-sibiya-head-of-consumer-education-fnb#description",
      image: "/speakers/Eunice Sibiya/Eunice-Sibiya-The-Speakers-Firm.jpg"
    }
  ];

  const customVideos = [
    {
      id: "sibiya-vid-1",
      label: "Eunice Sibiya on Consumer Financial Education",
      youtubeId: "uU3wcHz9Gro"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Eunice Sibiya"
      speakerTitle=""
      speakerDesignation="Financial & Life Coach"
      speakerRole="Former Head of Consumer Education at FNB"
      speakerRef="TSF-ES-26"
      heroBackgroundImage="/speakers/Eunice Sibiya/Eunice-Sibiya_FNB-Consumer-Education-Custom.jpg"
      biographyImage="/speakers/Eunice Sibiya/Eunice-Sibiya-14.jpg"
      bioHook="“A calm, thoughtful approach to translating basic financial concepts and promoting financial literacy.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="eunice-sibiya" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="eunice-sibiya" 
        customIntroText="Structured financial education seminars, interactive budgeting masterclasses, and executive life coaching sessions led by Eunice Sibiya."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};
