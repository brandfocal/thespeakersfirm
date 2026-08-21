"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "zs-ceo",
    label: "CEO of EMZ Advisory",
    subtitle: "Founder and director of a 100% black female-owned management consulting firm."
  },
  {
    id: "zs-mba",
    label: "Stanford MBA Alumnus",
    subtitle: "Completed a Master of Business Administration from Stanford University on a full merit scholarship."
  },
  {
    id: "zs-global",
    label: "International Speaker & Advisor",
    subtitle: "Traveled to over 35 countries across 6 continents delivering advisory and speaking interventions."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "optimism-leadership",
    number: "Theme 01",
    title: "Confidence & Grounded Optimism.",
    copy: "Leveraging optimism and confidence as essential building blocks for authentic, resilient leadership that stands the test of time."
  },
  {
    id: "unleashing-potential",
    number: "Theme 02",
    title: "Unleashing Business Potential.",
    copy: "Helping leaders design customized, strategic consulting solutions for emerging markets."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Zipho Sikhakhane is a sought-after global speaker, thought leader, writer, business strategist, and CEO of EMZ Advisory, a management consulting firm dedicated to enhancing organisational effectiveness and productivity. Her insights on leadership, change, and organisation culture have positively impacted multinationals operating in emerging markets. She has traveled to over 35 countries and worked in 6 continents. She also serves on several boards and has a Master of Business Administration from Stanford University in the United States, completed on a full merit scholarship.",
  "She founded EMZ Advisory, a 100% black female owned consulting firm in 2015 with the vision of creating a firm that will enable business leaders to unleash their business potential. Through an advisory partnership that delivers customised, strategic solutions for private and public sector clients. She has managed to fund the employment of over 30 specialists, graduates, trainers and facilitators in line with her passion of developing the youth within South Africa.",
  "Book Zipho Sikhakhane through The Speakers Firm, A Leading African Speakers Bureau, to bring global business strategies, grounded optimism frameworks, and youth leadership keynotes to your next event or corporate session."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "emzadvisory", name: "EMZ ADVISORY" },
  { id: "stanford", name: "STANFORD UNIVERSITY" },
  { id: "yali", name: "YALI ALUMNI" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "zs-art-1",
      headline: "The Role of Optimism and Confidence in Authentic Leadership",
      publication: "ZiphoSikhakhane.com Podcast",
      date: "2024",
      action: "Listen to Podcast",
      url: "https://ziphosikhakhane.com/the-role-of-optimism-and-confidence/",
      image: "/speakers/Zipho Sikhakhane/Zipho-Sikhakhane-The-Speakers-Firm-2.jpg"
    },
    {
      id: "zs-art-2",
      headline: "Don’t overlook the wisdom all around us in tough market times",
      publication: "ZiphoSikhakhane.com",
      date: "2024",
      action: "Read Article",
      url: "https://ziphosikhakhane.com/dont-overlook-the-wisdom-all-around-us-2/",
      image: "/speakers/Zipho Sikhakhane/Zipho-Sikhakhane-The-Speakers-Firm-3.jpg"
    },
    {
      id: "zs-art-3",
      headline: "Just Go With It: From Township Sales to Global Stages",
      publication: "ZiphoSikhakhane.com",
      date: "2023",
      action: "Read Column",
      url: "https://ziphosikhakhane.com/just-go-with-it/",
      image: "/speakers/Zipho Sikhakhane/Zipho-Sikhakhane-The-Speakers-Firm-6.jpg"
    }
  ];

  const customVideos = [
    {
      id: "zs-vid-1",
      label: "Zipho Sikhakhane on Confidence & Grounded Optimism",
      youtubeId: "iCt94mK-5cc"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Zipho Sikhakhane"
      speakerTitle=""
      speakerDesignation="Business Strategist, Consultant & Global Speaker"
      speakerRole="CEO of EMZ Advisory & Stanford MBA Alumnus"
      speakerRef="TSF-ZS-74"
      heroBackgroundImage="/speakers/Zipho Sikhakhane/Zipho-Sikhakhane-The-Speakers-Firm.jpg"
      biographyImage="/speakers/Zipho Sikhakhane/Zipho-Sikhakhane-The-Speakers-Firm-7.jpg"
      bioHook="“Authentic leadership that stands the test of time is built on a foundation of confidence and grounded optimism.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="zipho-sikhakhane" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="zipho-sikhakhane" 
        customIntroText="Management consulting advisory briefings, business strategies keynotes, and organizational effectiveness panels led by Zipho Sikhakhane."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
