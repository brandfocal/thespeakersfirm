"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "dudu-strategy",
    label: "Strategy Advisor",
    subtitle: "Highly regarded advisor to corporate boards, providing decisive frameworks for governance and growth."
  },
  {
    id: "dudu-governance",
    label: "Governance Pioneer",
    subtitle: "Board director and thought leader championing ethical leadership, risk management, and diversity."
  },
  {
    id: "dudu-author",
    label: "Thought Leader & Author",
    subtitle: "Frequent contributor to business publications and speaker on transformation in emerging markets."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "corporate-governance",
    number: "Theme 01",
    title: "Ethical Stewardship & Boardroom Integrity.",
    copy: "Elevating corporate governance models to cultivate transparency, accountability, and resilient ethical leadership."
  },
  {
    id: "strategic-transformation",
    number: "Theme 02",
    title: "Diversity & Inclusion as Growth Enablers.",
    copy: "Leveraging diverse leadership models to drive innovation, strategy execution, and sustainable institutional performance."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Dudu Msomi is one of South Africa's most respected corporate governance authorities, strategy advisors, and board facilitators. With a distinguished career advising executive boards and leadership teams across private, public, and non-profit sectors, she offers invaluable perspectives on ethical stewardship and organizational resilience.",
  "As the founder and CEO of Busara Leadership Partners, Dudu has designed and implemented numerous executive development, mentorship, and corporate strategy programs, empowering the next generation of business leaders.",
  "Dudu is a passionate advocate for diversity, equity, and inclusion in the boardroom. She frequently speaks and writes on shifting leadership archetypes, strategic transformation, and building values-driven organizations that achieve sustainable growth.",
  "Book Dudu Msomi through The Speakers Firm, Africa’s #1 Strategic Speakers Bureau, to deliver critical keynote sessions on boardroom ethics, strategic transformation, and inclusive governance."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "busara", name: "Busara Leadership" },
  { id: "iodsa", name: "IoDSA Member" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "dudu-art-1",
      headline: "Dudu Msomi on boardroom ethics and corporate accountability",
      publication: "Corporate Governance Review",
      date: "2024",
      action: "Read Article",
      url: "https://thespeakersfirm.co.za/dudu-msomi/",
      image: "/speakers/Dudu Msomi/Dudu-Msomi-The-Speakers-Firm-2.jpg"
    },
    {
      id: "dudu-art-2",
      headline: "Diversity as a strategic driver for corporate growth",
      publication: "Strategic Leadership Journal",
      date: "2024",
      action: "Read Feature",
      url: "https://thespeakersfirm.co.za/dudu-msomi/",
      image: "/speakers/Dudu Msomi/Dudu-Msomi-The-Speakers-Firm-4.jpg"
    },
    {
      id: "dudu-art-3",
      headline: "Mentoring the next generation of African business executives",
      publication: "Busara Leadership Partners Review",
      date: "2023",
      action: "Read Article",
      url: "https://thespeakersfirm.co.za/dudu-msomi/",
      image: "/speakers/Dudu Msomi/Dudu-Msomi-The-Speakers-Firm-9.jpg"
    }
  ];

  const customVideos = [
    {
      id: "dudu-vid-1",
      label: "Dudu Msomi Keynote on Inclusive Governance",
      youtubeId: "IV2EwG5N71w"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Dudu Msomi"
      speakerTitle=""
      speakerDesignation="Corporate Governance Authority, Board Advisor & Speaker"
      speakerRole="Strategy Consultant & Executive Coach"
      speakerRef="TSF-DM-66"
      heroBackgroundImage="/speakers/Dudu Msomi/Dudu-Msomi-The-Speakers-Firm.jpg"
      biographyImage="/speakers/Dudu Msomi/Dudu-Msomi-The-Speakers-Firm-10.jpg"
      bioHook="“ Boardroom leadership and corporate agility succeed only when they are hardwired with systemic ethics, inclusivity, and strategic vision.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="dudu-msomi" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="dudu-msomi" 
        customIntroText="Corporate governance seminars, ethical stewardship advisories, and strategic leadership masterclasses led by Dudu Msomi."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
