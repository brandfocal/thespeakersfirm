"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "proudly-sa-cmo",
    label: "CMO of Proudly South African",
    subtitle: "Heading marketing and communications since 2015 for South Africa's buy-local campaign."
  },
  {
    id: "metro-fm-pr",
    label: "Former Head of PR, Metro FM",
    subtitle: "Official spokesperson and PR strategist for SABC's flagship radio brand."
  },
  {
    id: "brics-wba-member",
    label: "BRICS WBA & WECONA Member",
    subtitle: "Driving women's economic participation and market access across BRICS nations."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "local-enterprise-procurement",
    number: "Theme 01",
    title: "Localization & Economic Sustainability.",
    copy: "The economic necessity of buying local, fostering local enterprise, and unlocking supply chains for sustainable job creation."
  },
  {
    id: "brand-turnaround",
    number: "Theme 02",
    title: "Strategic Brand Management & Turnarounds.",
    copy: "Practical frameworks for product launch, strategic repositioning, and media relation overhauls in competitive sectors."
  },
  {
    id: "women-economic-empowerment",
    number: "Theme 03",
    title: "Women's Economic Integration.",
    copy: "Facilitating preferential procurement, unlocking market access, and mapping sustainable economic entries for women-owned businesses."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Mrs. Happy MaKhumalo Ngidi is a graduate in Comms and is in the middle of completing her Bachelor of Arts in International Relations. Happy MaKhumalo Ngidi is a businesswoman, social entrepreneur, budding author, motivational speaker and PR and Marketing Executive. She joined Proudly South African as the CMO in 2015 to head up the organisation’s Marketing and Communications department.",
  "As a marketing, communications and PR professional, she brings much value, vision and purpose plus over twenty years of corporate experience to Proudly SA. Mrs. Ngidi was previously the Founder and Managing Director of a public relations boutique firm that assisted clients to form strong relationships with media giants. She’s also the former Head of PR and Communications for SABC radio station, Metro FM. She was the Official Spokesperson of the SABC for its flagship annual event as well as for ad hoc PR projects of national importance. Ngidi also has extensive experience in driving strategy development, turnaround strategies as well as brand and product management for a number of multinational and local brands in the hospitality, marketing & FMCG and broadcasting services sectors.",
  "Her experience spans a number of companies including Seagram SA, SABC, Chivas Regal, the Forum Company, Metro FM, Cell C, Divine Relations, Haba Productions and Primi Group as a franchisee, to mention but a few. Through her sheer force of personality, she continuously strives to be the best performer and visionary in her craft and to make a formidable difference in every task she undertakes both in the public and private sectors.",
  "She is currently a Member of the BRICS (WBA) Women Business Alliance – South Africa, launched and championed by the Department of Business Development, who’s mandate is to unlock economic value within South Africa, the continent and BRIC countries for development, growth and sustainability of women owned businesses. Ms Ngidi is an active member of WECONA (Women Economic Assembly) an Assembly launched by President Cyril Ramaphosa in 2021, which comprises of Women from the private sector, civil society, women’s organisations, businesswomen and government."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "proudlysa", name: "PROUDLY SOUTH AFRICAN" },
  { id: "metrofm", name: "METRO FM" },
  { id: "wecona", name: "WECONA" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "happy-art-1",
      headline: "Get to know the woman behind Proudly SA's innovative marketing",
      publication: "TrueLove / News24",
      date: "09 Apr 2024",
      action: "Read Interview",
      url: "https://www.news24.com/truelove/boss-up/careers/get-to-know-the-woman-behind-proudly-sas-innovative-marketing-happy-ngidi-20240409",
      image: "/speakers/Happy Ngidi/Happy-MaKhumalo-Ngidi-The-Speakers-Firm-2.jpg"
    },
    {
      id: "happy-art-2",
      headline: "'Babes Welocal' – Happy MaKhumalo Ngidi leads buy-local drive",
      publication: "Sowetan Live",
      date: "16 Apr 2025",
      action: "Read Story",
      url: "https://www.sowetanlive.co.za/s-mag/living/2025-04-16-babes-welocal-happy-makhumalo-ngidi/",
      image: "/speakers/Happy Ngidi/Happy-MaKhumalo-Ngidi-The-Speakers-Firm-3.jpg"
    }
  ];

  const customGallery = [
    {
      id: "happy-gal-1",
      src: "/speakers/Happy Ngidi/Happy-MaKhumalo-Ngidi-The-Speakers-Firm-4.jpg",
      alt: "Happy Ngidi speaking",
      caption: "CMO Happy Ngidi addressing the Proudly SA summit",
      className: "sm:col-span-2 lg:col-span-2"
    },
    {
      id: "happy-gal-2",
      src: "/speakers/Happy Ngidi/Happy-MaKhumalo-Ngidi-The-Speakers-Firm-5.jpg",
      alt: "Bella Wines launch",
      caption: "Launching Bella Wines personal brand in 2022",
      className: ""
    },
    {
      id: "happy-gal-3",
      src: "/speakers/Happy Ngidi/Happy-MaKhumalo-Ngidi-The-Speakers-Firm-6.jpg",
      alt: "PR masterclass",
      caption: "Hosting a brand positioning masterclass",
      className: ""
    }
  ];

  const customVideos = [
    {
      id: "happy-vid-1",
      label: "Happy MaKhumalo Ngidi - Buy Local Campaign Interview",
      youtubeId: "zm2by4kPml4"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Happy MaKhumalo Ngidi"
      speakerTitle="Mrs"
      speakerDesignation="Brand Activist, Marketing Strategist & Localization Advocate"
      speakerRole="CMO of Proudly South African, social entrepreneur, and BRICS WBA member."
      speakerRef="TSF-HN-08"
      heroBackgroundImage="/speakers/Happy Ngidi/Happy-MaKhumalo-Ngidi-The-Speakers-Firm.jpg"
      biographyImage="/speakers/Happy Ngidi/happy_ngidi.jpg"
      bioHook="“Localization is not just a marketing campaign; it is a critical engine of economic recovery and job creation.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="happy-makhumalo-ngidi-2" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="happy-makhumalo-ngidi-2" 
        customGallery={customGallery} 
        customIntroText="Brand alignment dialogues, local enterprise development panels, and CMO briefs by Happy MaKhumalo Ngidi."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};
