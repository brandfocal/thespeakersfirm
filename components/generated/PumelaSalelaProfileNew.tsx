"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "pumela-ceo",
    label: "CEO, Invest Global",
    subtitle: "Leading initiatives that connect global investors, governments, and businesses across Africa."
  },
  {
    id: "pumela-diplomat",
    label: "Economic Diplomat",
    subtitle: "Former UK Country Head for Brand South Africa and Chief Director for Economic Development."
  },
  {
    id: "pumela-scholar",
    label: "Nelson Mandela Scholar",
    subtitle: "Holding a PhD in Management and an MBA from the United Kingdom."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "economic-diplomacy",
    number: "Theme 01",
    title: "Economic Diplomacy & Trade.",
    copy: "Positioning Africa as a globally competitive investment destination through international trade and AfCFTA integration."
  },
  {
    id: "country-branding",
    number: "Theme 02",
    title: "Country Branding & FDI Attraction.",
    copy: "Unpacking country branding as a strategic tool to build reputation and attract Foreign Direct Investment (FDI)."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Dr. Pumela Salela, MBA, PhD, is an internationally recognized expert in trade, investment, and economic diplomacy. Currently serving as the CEO of Invest Global, she is the executive voice behind high-level conversations that shape trade and economic policies across Africa and the world.",
  "Previously, Dr. Salela served as the Country Head for the United Kingdom at Brand South Africa, where she promoted South Africa internationally, attracted Foreign Direct Investment (FDI), and strengthened the country's global reputation. Her career also includes senior executive roles within the South African Government and advisory consultations for the World Bank and the Rockefeller Foundation.",
  "Dr. Salela combines academic excellence as a Nelson Mandela Scholar with decades of lived executive experience negotiating international partnerships, advising senior policymakers, and moderating CEO roundtables at global forums.",
  "Book Dr. Pumela Salela through The Speakers Firm, Africa’s #1 Strategic Speakers Bureau, to deliver authoritative keynotes, board advisories, and strategic moderations at international summits."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "invest-global", name: "Invest Global" },
  { id: "brand-sa", name: "Brand South Africa" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "pumela-art-1",
      headline: "Dr. Pumela Salela on the future of economic diplomacy and African market entry",
      publication: "Economic Diplomacy Today",
      date: "2024",
      action: "Read Feature",
      url: "https://thespeakersfirm.co.za/digital-identity-cybersecurity-and-data-sovereignty/sid-peimer/",
      image: "/speakers/Dr Pumela Salela/Pamela-Salela-The-Speakers-Firm3.jpg"
    },
    {
      id: "pumela-art-2",
      headline: "Country branding as a strategic economic lever for FDI attraction",
      publication: "International Trade & Investment Review",
      date: "2024",
      action: "Read Article",
      url: "https://thespeakersfirm.co.za/digital-identity-cybersecurity-and-data-sovereignty/sid-peimer/",
      image: "/speakers/Dr Pumela Salela/Pamela-Salela-The-Speakers-Firm4.jpg"
    },
    {
      id: "pumela-art-3",
      headline: "Strategic Partnerships Across Borders: Bridging public and private sectors",
      publication: "Global Business Journal",
      date: "2023",
      action: "Read Spotlight",
      url: "https://thespeakersfirm.co.za/digital-identity-cybersecurity-and-data-sovereignty/sid-peimer/",
      image: "/speakers/Dr Pumela Salela/Pamela-Salela-The-Speakers-Firm5.jpg"
    }
  ];

  const customVideos = [
    {
      id: "pumela-vid-1",
      label: "Dr. Pumela Salela on Investment & Economic Diplomacy",
      youtubeId: "SEeymv8o9OY"
    },
    {
      id: "pumela-vid-2",
      label: "Brand South Africa UK Address",
      youtubeId: "KbUE6f9wiZQ"
    },
    {
      id: "pumela-vid-3",
      label: "Economic Diplomacy Discussion",
      youtubeId: "zxNAW5qHT90"
    },
    {
      id: "pumela-vid-4",
      label: "AfCFTA and Regional Integration Forum",
      youtubeId: "LluKbHgHIKU"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Dr Pumela Salela"
      speakerTitle="Dr"
      speakerDesignation="CEO of Invest Global, Economic Diplomacy Expert & Keynote Speaker"
      speakerRole="Global Trade & Investment Authority"
      speakerRef="TSF-PS-77"
      heroBackgroundImage="/speakers/Dr Pumela Salela/Pamela-Salela-The-Speakers-Firm7.jpg"
      biographyImage="/speakers/Dr Pumela Salela/Pamela-Salela-The-Speakers-Firm.jpg"
      bioHook="“Economic diplomacy is not just about negotiating trade agreements; it is about building strategic partnerships that drive inclusive and sustainable development.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="pumela-salela" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="pumela-salela" 
        customIntroText="Economic diplomacy keynotes, FDI attraction advisory, and international trade moderation led by Dr. Pumela Salela."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
