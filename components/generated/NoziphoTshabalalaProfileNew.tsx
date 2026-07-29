"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "conversation-strategists",
    label: "CEO of Conversation Strategists",
    subtitle: "Architecting high-stakes, strategic discussions that drive measurable societal change."
  },
  {
    id: "global-moderator",
    label: "UN & World Bank Moderator",
    subtitle: "Facilitates critical global roundtables for the World Bank, IMF, UN and African Union."
  },
  {
    id: "broadcast-journalist",
    label: "CNBC Africa Alum",
    subtitle: "Former anchor and editor with a deep background in business journalism."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "conversation-architecture",
    number: "Theme 01",
    title: "Conversation Architecture & Transformation.",
    copy: "Structuring high-impact dialogues that drive collaboration, alignment, and strategic action across multinational environments."
  },
  {
    id: "global-development",
    number: "Theme 02",
    title: "Development, Economics & Geopolitical Strategy.",
    copy: "Facilitating panels on development economics, gender equity, global sustainability policies, and socio-political systems."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Nozipho Mbanjwa-Tshabalala is the CEO of the Conversation Strategists, an organization dedicated to designing and delivering impactful conversations that drives measurable outcomes and societal change.",
  "The Conversation Strategists have become more than facilitators—they are the architects of transformation, partnering with visionary organizations to spark conversations that inspire action and achieve strategic objectives.",
  "As the go-to person for high-level conversations, Nozipho has facilitated critical global conversations for leading institutions, including the World Bank, the International Monetary Fund, the United Nations, the African Union, as well as major multinationals.",
  "Known for her exceptional ability to distil complexity into simplicity whilst ensuring depth and intellectual insight, she operates at the intersection of development, economics, business strategy, and politics."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "world-bank", name: "WORLD BANK" },
  { id: "imf", name: "IMF" },
  { id: "united-nations", name: "UNITED NATIONS" },
  { id: "african-union", name: "AFRICAN UNION" }
];

const PUBLISHED_BOOKS = [
  {
    id: "after-fires",
    title: "After the Fires",
    description: "Nozipho's highly acclaimed memoir exploring resilience, transformation, and leadership.",
    coverImage: "/speakers/Nozipho Tshabalala/Nozipho Tshabalala After the Fires.jpg",
    url: "https://www.exclusivebooks.co.za/product/9781776193738"
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Nozipho Tshabalala"
      speakerTitle=""
      speakerDesignation="Global Moderator & Conversation Architect"
      speakerRole="CEO of Conversation Strategists, former CNBC anchor, and global dialogue facilitator."
      speakerRef="TSF-NT-05"
      heroBackgroundImage="/speakers/Nozipho Tshabalala/Nozipho-Tshabalala-The-Speakers-Firm-9.jpg"
      biographyImage="/speakers/Nozipho Tshabalala/Nozipho-Tshabalala-The-Speakers-Firm.jpg"
      bioHook="“Designing conversations that drive measurable outcomes, accountability, and systemic change.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      books={PUBLISHED_BOOKS}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="nozipho-tshabalala" />
      }
    >
      <ProfileAdditionalSections speakerId="nozipho-tshabalala" />
    </SpeakerProfileTemplate>
  );
};
