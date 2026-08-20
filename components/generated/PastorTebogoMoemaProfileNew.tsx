"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "tebogo-pastor",
    label: "Community Pastor",
    subtitle: "Highly respected spiritual leader guiding communities on values-driven living and marriage counselor."
  },
  {
    id: "tebogo-author",
    label: "Relationship Author",
    subtitle: "Author of relationships books providing tools for marital alignment and personal growth."
  },
  {
    id: "tebogo-speaker",
    label: "Family Keynote Speaker",
    subtitle: "Speaker delivering critical dialogues on positive family building and domestic values."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "relationship-alignment",
    number: "Theme 01",
    title: "Marital & Relationship Alignment.",
    copy: "Providing practical counseling and communication frameworks to build strong, enduring marital partnerships."
  },
  {
    id: "family-values",
    number: "Theme 02",
    title: "Family Values & Personal Growth.",
    copy: "Encouraging personal accountability, positive family dynamics, and values-driven community leadership."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Pastor Tebogo Moema is a highly respected South African spiritual leader, relationship counselor, author, and speaker. With a deep commitment to family building and community development, he has spent decades guiding couples and individuals towards marital alignment and personal growth.",
  "As an expert in family counseling and marriage coaching, Pastor Tebogo facilitates courageous dialogues around domestic communication, emotional maturity, and deconstructing limiting relationship archetypes.",
  "He frequently hosts relationship seminars, couples' retreats, and community upliftment forums, providing practical guidance that helps build values-driven families and cohesive communities.",
  "Book Pastor Tebogo Moema through The Speakers Firm, Africa’s #1 Strategic Speakers Bureau, to deliver deeply inspiring seminars, workshops, and keynotes on relationship dynamics and family values."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "family-ministry", name: "Family Ministry Forum" },
  { id: "community-church", name: "Community Church Network" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "tebogo-art-1",
      headline: "Pastor Tebogo Moema on establishing effective communication channels in marriage",
      publication: "Family & Values Quarterly",
      date: "2024",
      action: "Read Feature",
      url: "https://thespeakersfirm.co.za/gender/pastor-tebogo-moema/",
      image: "/speakers/Tebogo Moema/Tebogo-Moema-The-Speakers-Firm2.jpg"
    },
    {
      id: "tebogo-art-2",
      headline: "The role of family units in building resilient community structures",
      publication: "Social Development Journal",
      date: "2024",
      action: "Read Article",
      url: "https://thespeakersfirm.co.za/gender/pastor-tebogo-moema/",
      image: "/speakers/Tebogo Moema/Tebogo-Moema-The-Speakers-Firm3.jpg"
    },
    {
      id: "tebogo-art-3",
      headline: "Pastor Tebogo Moema: Guiding couples through contemporary relationship challenges",
      publication: "Counseling & Growth Review",
      date: "2023",
      action: "Read Spotlight",
      url: "https://thespeakersfirm.co.za/gender/pastor-tebogo-moema/",
      image: "/speakers/Tebogo Moema/Tebogo-Moema-The-Speakers-Firm5.jpg"
    }
  ];

  const customVideos = [
    {
      id: "tebogo-vid-1",
      label: "Pastor Tebogo Moema Keynote Address on Relationships",
      youtubeId: "V7R_Py5aZVE"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Pastor Tebogo Moema"
      speakerTitle="Pastor"
      speakerDesignation="Spiritual Leader, Relationship Counselor & Bestselling Author"
      speakerRole="Family Dynamics & Alignment Consultant"
      speakerRef="TSF-TM-67"
      heroBackgroundImage="/speakers/Tebogo Moema/Tebogo-Moema-The-Speakers-Firm.jpg"
      biographyImage="/speakers/Tebogo Moema/Tebogo-Moema-The-Speakers-Firm4.jpg"
      bioHook="“A strong nation is built on strong families. Fostering positive family values requires communication, respect, and mutual alignment.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="pastor-tebogo-moema" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="pastor-tebogo-moema" 
        customIntroText="Relationship counseling workshops, family dynamics seminars, and values-driven community keynotes led by Pastor Tebogo Moema."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
