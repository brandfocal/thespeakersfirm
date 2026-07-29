"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "ca-sa",
    label: "Chartered Accountant",
    subtitle: "Highly respected CA(SA) bringing financial rigor to public sector debates."
  },
  {
    id: "academic-lead",
    label: "Academic & Scholar",
    subtitle: "Lecturer and educational reformer translating complex fiscal policies."
  },
  {
    id: "media-analyst",
    label: "Broadcaster & Commentator",
    subtitle: "Regular economic host and political risk contributor across national media."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "public-finance",
    number: "Theme 01",
    title: "Public Finance & Fiscal Policy.",
    copy: "Analyzing state budgets, municipal governance challenges, and the structural economic reforms needed to stimulate growth."
  },
  {
    id: "political-risk",
    number: "Theme 02",
    title: "Political Risk & Institutional Integrity.",
    copy: "Assessing the intersection of policy shifts, state capacity, and accountability to guide business investments."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Khaya Sithole, is a chartered accountant, academic, activist, writer and radio host.",
  "A graduate of UKZN and Oxford University, Khaya’s work in the media arena includes political and economic commentary, corporate events facilitation. He is the radio host on Power FM, a Johannesburg-based radio station. Khaya is a regular contributor on politics and finance for eNCA, Open News and the SABC and writes columns for the Business Day, the Mail & Guardian and Fin24.",
  "Khaya served on the boards of JSE-listed Stadio Holdings Limited where he chaired the audit committee; and Tshikululu Social Investment’s audit committee. He currently serves on the boards of Lefika La Phodiso (The Art Therapy Institute) where he serves as the board chairperson; the board of the Association of Black Securities and Investment Professionals (ABSIP), and the Financial Sector Transformation Council (FSTC) as board chairperson."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "powerfm", name: "POWER FM" },
  { id: "sabc", name: "SABC NEWS" },
  { id: "exclusive", name: "EXCLUSIVE BOOKS" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "khaya-art-1",
      headline: "Ramaphosa's response to Eskom crisis reveals his cluelessness",
      publication: "Business Day",
      date: "25 Jul 2022",
      action: "Read Analysis",
      url: "https://www.businesslive.co.za/bd/opinion/columnists/2022-07-25-khaya-sithole-ramaphosas-response-to-eskom-crisis-reveals-his-cluelessness/",
      image: "/speakers/Khaya Sithole/Khaya-Sithole-The-Speakers-Firm-2.jpg"
    },
    {
      id: "khaya-art-2",
      headline: "Our CA candidates were failed – and the damage can't be undone",
      publication: "Fin24",
      date: "14 Feb 2022",
      action: "Read Article",
      url: "https://www.news24.com/fin24/opinion/khaya-sithole-our-ca-candidates-were-failed-and-the-damage-cant-be-undone-20220214",
      image: "/speakers/Khaya Sithole/Khaya-Sithole-The-Speakers-Firm-3.jpg"
    },
    {
      id: "khaya-art-3",
      headline: "Five years on, Ramaphosa's biggest headache isn't the economy",
      publication: "News24",
      date: "03 Dec 2022",
      action: "Read Opinion",
      url: "https://www.news24.com/business/opinion/khaya-sithole-five-years-on-ramaphosas-biggest-headache-isnt-the-economy-20221203",
      image: "/speakers/Khaya Sithole/Khaya-Sithole-The-Speakers-Firm-7.jpg"
    }
  ];

  const customGallery = [
    {
      id: "khaya-gal-1",
      src: "/speakers/Khaya Sithole/Khaya-Sithole-The-Speakers-Firm-4.jpg",
      alt: "Khaya Sithole macroeconomic brief",
      caption: "Macroeconomic analyst and broadcaster",
      className: "sm:col-span-2 lg:col-span-2"
    },
    {
      id: "khaya-gal-2",
      src: "/speakers/Khaya Sithole/Khaya-Sithole-The-Speakers-Firm-5.jpg",
      alt: "Academic lecture forum",
      caption: "Stewardship and finance development seminar",
      className: ""
    },
    {
      id: "khaya-gal-3",
      src: "/speakers/Khaya Sithole/Khaya-Sithole-The-Speakers-Firm-6.jpg",
      alt: "Broadcasting studio conversation",
      caption: "Live radio interview session",
      className: ""
    }
  ];

  const customVideos = [
    {
      id: "khaya-vid-1",
      label: "Khaya Sithole on Budget and Economic Policies",
      youtubeId: "ef0SAlCQdkk"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Khaya Sithole"
      speakerTitle=""
      speakerDesignation="Accountant, Broadcaster & Economic Analyst"
      speakerRole="Macroeconomic analyst, public finance scholar, and media commentator."
      speakerRef="TSF-KS-08"
      heroBackgroundImage="/speakers/Khaya Sithole/khaya-sithole.jpg"
      biographyImage="/speakers/Khaya Sithole/Khaya-Sithole-The-Speakers-Firm-4.jpg"
      bioHook="“Accountability is not an afterthought; it is the absolute foundation of economic recovery.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="khaya-sithole" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="khaya-sithole" 
        customGallery={customGallery} 
        customIntroText="Public policy panels and macro-economic briefings by Khaya Sithole."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};
