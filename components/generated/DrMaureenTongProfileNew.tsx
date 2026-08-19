"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "maureen-legal",
    label: "International Legal Scholar",
    subtitle: "Highly qualified legal expert with deep specializations in human rights, land reform, and constitutional law."
  },
  {
    id: "maureen-governance",
    label: "Governance Leader",
    subtitle: "Strategic advisor driving gender power dynamics and executive leadership coaching across African organizations."
  },
  {
    id: "maureen-author",
    label: "Bestselling Author",
    subtitle: "Author of 'POUR INTO YOUR SOUL: Overflow', focusing on self-actualization and leadership."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "gender-power",
    number: "Theme 01",
    title: "Gender Power & Institutional Reform.",
    copy: "Empowering women leaders, structuring equitable organizations, and integrating diverse leadership archetypes."
  },
  {
    id: "constitutional-law",
    number: "Theme 02",
    title: "Constitutional Law & Human Rights.",
    copy: "Translating legal principles into organizational ethics, human rights compliance, and responsible corporate citizenship."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Dr. Maureen Tong is a highly distinguished international legal scholar, corporate governance authority, leadership coach, and author. Renowned as a powerhouse in gender empowerment and institutional reform, Dr. Maureen has spent over two decades advising governments, corporates, and civil society.",
  "She holds advanced academic law credentials and has steered major research initiatives on land reform, human rights, and constitutional law across Africa and Europe.",
  "Dr. Maureen is the author of the bestselling book 'POUR INTO YOUR SOUL: Overflow'. She actively coaches senior executives and women leaders, helping them build professional resilience and lead values-driven teams.",
  "Book Dr. Maureen Tong through The Speakers Firm, Africa’s #1 Strategic Speakers Bureau, to deliver authoritative keynotes on governance, gender power dynamics, and constitutional leadership."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "human-rights", name: "Human Rights Comm" },
  { id: "legal-sa", name: "SA Legal Board" }
];

const customBooks = [
  {
    id: "maureen-book-1",
    title: "POUR INTO YOUR SOUL: Overflow",
    coverImage: "/speakers/Maureen Tong/Dr-Maureen-Tong-Pour-Into-Your-Soul.jpg",
    purchaseUrl: "https://www.amazon.com/POUR-INTO-YOUR-SOUL-Overflow/dp/1947574477",
    description: "A profound guide to personal transformation, leadership empowerment, and self-actualization."
  }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "maureen-art-1",
      headline: "Dr. Maureen Tong on constitutional law and gender equality",
      publication: "Legal & Society Quarterly",
      date: "2024",
      action: "Read Article",
      url: "https://thespeakersfirm.co.za/dr-maureen-tong/",
      image: "/speakers/Maureen Tong/Dr-Maureen-Tong-The-Speakers-Firm-2.jpg"
    },
    {
      id: "maureen-art-2",
      headline: "Pour Into Your Soul: Personal growth and leadership",
      publication: "Literary Leadership Review",
      date: "2024",
      action: "Read Feature",
      url: "https://thespeakersfirm.co.za/dr-maureen-tong/",
      image: "/speakers/Maureen Tong/Dr-Maureen-Tong-The-Speakers-Firm-3.jpg"
    },
    {
      id: "maureen-art-3",
      headline: "The future of land reform and human rights in Africa",
      publication: "International Law Digest",
      date: "2023",
      action: "Read Article",
      url: "https://thespeakersfirm.co.za/dr-maureen-tong/",
      image: "/speakers/Maureen Tong/Dr-Maureen-Tong-The-Speakers-Firm-6.jpg"
    }
  ];

  const customVideos = [
    {
      id: "maureen-vid-1",
      label: "Dr. Maureen Tong on Governance and Power",
      youtubeId: "aT1PMhEBnXg"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Dr. Maureen Tong"
      speakerTitle=""
      speakerDesignation="Legal Scholar, Governance Authority & Coach"
      speakerRole="Institutional Reform Specialist & Author"
      speakerRef="TSF-MT-55"
      heroBackgroundImage="/speakers/Maureen Tong/Dr-Maureen-Tong-The-Speakers-Firm-7.jpg"
      biographyImage="/speakers/Maureen Tong/Dr-Maureen-Tong-The-Speakers-Firm.jpg"
      bioHook="“Institutional reform and true gender power dynamics succeed only when we anchor them in values, education, and mutual respect.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      books={customBooks}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="maureen-tong" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="maureen-tong" 
        customIntroText="Gender empowerment seminars, human rights compliance masterclasses, and constitutional law keynotes led by Dr. Maureen Tong."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
