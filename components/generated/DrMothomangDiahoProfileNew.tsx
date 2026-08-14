"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "spiral-aloe",
    label: "Founder of Spiral Aloe",
    subtitle: "Medical Director of Spiral Aloe, pioneers of lifestyle as medicine."
  },
  {
    id: "nelson-mandela",
    label: "Former Head of Mandela Dialogue",
    subtitle: "Led the Nelson Mandela Foundation's strategic Dialogue and Advocacy programme."
  },
  {
    id: "teach-sa",
    label: "Co-Founder of TEACH South Africa",
    subtitle: "Co-founded the NGO improving quality education in SA schools."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "lifestyle-medicine",
    number: "Theme 01",
    title: "The Six Pillars of Lifestyle Medicine.",
    copy: "Integrating nutrition, sleep, exercise, stress management, relationships, and avoiding risky substances into daily wellness."
  },
  {
    id: "workplace-burnout",
    number: "Theme 02",
    title: "Dismantling Corporate Burnout.",
    copy: "Moving past band-aid wellness fixes to redesign systemic corporate environments and foster sustainable human performance."
  },
  {
    id: "dialogue-leadership",
    number: "Theme 03",
    title: "Facilitating High-Stakes Dialogues.",
    copy: "Lessons from the Nelson Mandela Foundation on leading tough corporate transformation discussions."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Dr. Mothomang Diaho is a highly respected medical doctor, public health practitioner, and thought leader with over 34 years of healthcare experience. She is the Founder and Medical Director of Spiral Aloe, an integrative lifestyle clinic advocating for 'lifestyle as medicine'.",
  "A dedicated champion of corporate wellness, Dr. Diaho has held several high-level leadership roles, including serving as the Head of the Nelson Mandela Foundation’s Dialogue programme, a co-founder of TEACH South Africa, and the Lead Independent Director at Tshikululu Social Investments.",
  "She has consulted on health policies across several African countries and lectures regularly on public health and wellness at Wits School of Public Health and GIBS Business School.",
  "Through her speaking engagements, Dr. Diaho challenges corporate executives to address burnout as a systemic leadership failure rather than a personal struggle, helping companies build thriving, high-performance workforces."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "spiral-aloe-logo", name: "SPIRAL ALOE LIFESTYLE" },
  { id: "mandela-foundation", name: "NELSON MANDELA FOUNDATION" },
  { id: "teach-sa-logo", name: "TEACH SOUTH AFRICA" }
];

const MOTHOMANG_MEDIA = [
  {
    id: "mothomang-art-1",
    headline: "The Six Pillars of Lifestyle Medicine",
    publication: "Urban Street Culture",
    date: "14 Oct 2023",
    action: "Read Article",
    url: "https://urbanstreetculture.co.za/the-six-pillars-of-lifestyle-medicine/",
    image: "/speakers/Mothomang Diaho/Dr-Mothomang-Diaho-The-Speakers-Firm-13.jpg"
  },
  {
    id: "mothomang-art-2",
    headline: "Beyond the clinic: Nurturing wellness through the six pillars of lifestyle medicine",
    publication: "The Star / Independent News",
    date: "13 Sep 2024",
    action: "Read Opinion",
    url: "https://thestar.co.za/opinion/2024-09-13-beyond-the-clinic-nurturing-wellness-through-the-six-pillars-of-lifestyle-medicine/",
    image: "/speakers/Mothomang Diaho/Dr-Mothomang-Diaho-The-Speakers-Firm-12.jpg"
  },
  {
    id: "mothomang-art-3",
    headline: "Your future self is proud of you: Dr. Mothomang Diaho",
    publication: "Africa Leadership Institute",
    date: "25 May 2022",
    action: "Read Interview",
    url: "https://africaleadership.net/your-future-self-is-proud-of-you-dr-mothomang-diaho/",
    image: "/speakers/Mothomang Diaho/Dr-Mothomang-Diaho-The-Speakers-Firm-10.jpg"
  }
];

export const AboutTeamSection = () => {
  const customVideos = [
    {
      id: "mothomang-vid-1",
      label: "Dr. Mothomang Diaho on Wellness",
      youtubeId: "0qMZGlb6QKo"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Mothomang Diaho"
      speakerTitle="Dr."
      speakerDesignation="Medical Doctor, Public Health Specialist & Wellness Thought Leader"
      speakerRole="Founder of Spiral Aloe, former Mandela Foundation director, and co-founder of TEACH SA."
      speakerRef="TSF-MD-01"
      heroBackgroundImage="/speakers/Mothomang Diaho/Dr-Mothomang-Diaho-The-Speakers-Firm-2.jpg"
      biographyImage="/speakers/Mothomang Diaho/Dr-Mothomang-Diaho-The-Speakers-Firm.jpg"
      bioHook="“Shifting corporate cultures from burnout recovery to sustainable, lifestyle-medicine wellness foundations.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      books={[]}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="dr-mothomang-diaho" customMedia={MOTHOMANG_MEDIA} />
      }
    >
      <ProfileAdditionalSections speakerId="dr-mothomang-diaho" customVideos={customVideos} />
    </SpeakerProfileTemplate>
  );
};
