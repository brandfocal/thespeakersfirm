"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "tb-ceo",
    label: "Founder & Group CEO, Bathu",
    subtitle: "Built one of Africa's most successful and recognizable retail sneaker brands."
  },
  {
    id: "tb-pwc",
    label: "Former PwC Consultant",
    subtitle: "Served in corporate finance, strategy, and asset management at PwC SA and PwC Middle East."
  },
  {
    id: "tb-youth",
    label: "Social Entrepreneur",
    subtitle: "Focused on creating local manufacturing and retail jobs for South African youth."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "brand-building",
    number: "Theme 01",
    title: "Entrepreneurship & Brand Building.",
    copy: "How to conceptualize, launch, and scale a premium consumer brand from the ground up in Africa."
  },
  {
    id: "youth-employment",
    number: "Theme 02",
    title: "Youth Employment & Leadership.",
    copy: "Driving business sustainability through social impact, local job creation, and purpose-led leadership."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Theo Baloyi is a visionary South African entrepreneur and the founder of Bathu, Africa’s premium sneaker brand, where he currently serves as Group CEO. Originally from Phake, a small town on the outskirts of Pretoria, Theo matriculated from Mabothe Senior Secondary School before going on to earn his BCom Accounting Sciences degree from the University of South Africa (UNISA).",
  "Before embarking on his entrepreneurial path, Theo spent several years in the corporate finance sector. He worked at PwC South Africa in asset management, strategy, and financial management, and was subsequently seconded to PwC Middle East (based in Dubai and Saudi Arabia) for three years. This global corporate experience gave him deep insights into international business dynamics and institutional operations.",
  "In 2015, driven by a desire to create a premium sneaker brand that Africans could proudly identify with while generating employment opportunities for local youth, he returned to South Africa to establish Bathu. Under his leadership, Bathu has grown from a single room in Alexandra to a national retail powerhouse with dozens of stores across South Africa, becoming a symbol of hope and aspiration.",
  "Book Theo Baloyi through The Speakers Firm, A Leading African Speakers Bureau, to bring inspirational keynote addresses, entrepreneurship strategy sessions, and brand-building insights to your next corporate or community event."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "bathu", name: "BATHU" },
  { id: "pwc", name: "PWC" },
  { id: "unisa", name: "UNISA" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "tb-art-1",
      headline: "How Theo Baloyi built the Bathu sneaker empire",
      publication: "Forbes Africa / YouTube",
      date: "2024",
      action: "Watch Feature",
      url: "https://www.marvin.co.za/2023/09/27/theo-baloyi/",
      image: "/speakers/Theo Baloyi/Theo-Baloyi-The-Speakers-Firm.jpg"
    },
    {
      id: "tb-art-2",
      headline: "Theo Baloyi on scaling Bathu and creating South African jobs",
      publication: "PwC Entrepreneurship Spotlight",
      date: "2023",
      action: "Read Story",
      url: "https://www.howwemadeitinafrica.com/an-african-sneaker-brand-founder-of-bathu-explains-how-he-built-his-business/74205/",
      image: "/speakers/Theo Baloyi/Theo-Baloyi-The-Speakers-Firm-3.jpg"
    },
    {
      id: "tb-art-3",
      headline: "From Accounting to Retail Pioneer: The Theo Baloyi Story",
      publication: "UNISA Alumni Spotlight",
      date: "2024",
      action: "Read Feature",
      url: "https://startupmag.co.za/2020/09/10-things-you-should-know-about-theo-baloyi/",
      image: "/speakers/Theo Baloyi/Theo-Baloyi-The-Speakers-Firm-4.jpg"
    }
  ];

  const customVideos = [
    {
      id: "tb-vid-1",
      label: "Theo Baloyi on the Birth and Growth of Bathu Shoes",
      youtubeId: "Yjts81cW5GI"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Theo Baloyi"
      speakerTitle=""
      speakerDesignation="Founder & Group CEO, Bathu Shoes"
      speakerRole="Retail Pioneer & Entrepreneurial Speaker"
      speakerRef="TSF-TB-65"
      heroBackgroundImage="/speakers/Theo Baloyi/Theo-Baloyi-The-Speakers-Firm-7.jpg"
      biographyImage="/speakers/Theo Baloyi/Theo-Baloyi-The-Speakers-Firm-2.jpg"
      bioHook="“Building an iconic African brand to inspire hope, create jobs, and prove that African excellence can compete globally.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="theo-baloyi" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="theo-baloyi" 
        customIntroText="Inspirational keynotes, entrepreneurship strategy sessions, and retail business growth dialogues led by Theo Baloyi."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
