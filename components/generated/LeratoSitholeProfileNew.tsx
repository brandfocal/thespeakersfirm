"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "deloitte-partner",
    label: "Former Deloitte Partner",
    subtitle: "Served as Partner and Managing Partner in Sustainability Consulting."
  },
  {
    id: "think-grow-ceo",
    label: "CEO of Think & Grow Rich Africa",
    subtitle: "Exclusive African continent licensee for Napoleon Hill's framework."
  },
  {
    id: "luxury-brand-founder",
    label: "Founder of LERADIS",
    subtitle: "Founder of the luxury perfume house LERADIS (Distinction is Everything)."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "purpose-mindset",
    number: "Theme 01",
    title: "Purpose-Driven Leadership & Napoleon Hill Principles.",
    copy: "Applying Think and Grow Rich philosophies to modern enterprise strategy, leadership capability, and mindset expansion."
  },
  {
    id: "sustainability-commercial",
    number: "Theme 02",
    title: "Sustainable Business Strategy & Commercial Scale.",
    copy: "Integrating environmental and social sustainability with commercial growth and profitability across Africa."
  },
  {
    id: "personal-distinction",
    number: "Theme 03",
    title: "Personal Branding & Corporate Distinction.",
    copy: "Building premium personal brands and positioning leaders for maximum visibility and long-term reputation value."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Lerato Sithole is a visionary leader, transformation coach, global keynote speaker, and brand architect. Her career is a remarkable journey of transformation—transitioning from starting as a cleaner to becoming an acclaimed global changemaker, keynote speaker, and executive advisor.",
  "She is the Founder and CEO of Think and Grow Rich Africa, holding the exclusive license to implement Napoleon Hill's legendary success philosophy across the African continent through films, coaching, and strategic development programs.",
  "Her corporate credentials include major leadership roles at three of the 'Big Four' professional services firms. Notably, she served as a partner at Deloitte, managing highly profitable portfolios, and served as Managing Partner and Commercial Director for Africa in sustainability consulting.",
  "Beyond her advisory work, Lerato is the founder of LERADIS, a luxury perfume brand built on the philosophy of 'Distinction is Everything,' promoting unique value propositions in business and personal branding. She is a dedicated advocate for purpose-driven leadership, wealth creation, and sustainable business strategies."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "think-grow-rich", name: "THINK AND GROW RICH" },
  { id: "deloitte", name: "DELOITTE" },
  { id: "leradis", name: "LERADIS LUXURY" }
];

const LERATO_MEDIA = [
  {
    id: "lerato-art-1",
    headline: "Napoleon Hill Success Philosophy & Mindset Transformation",
    publication: "YouTube Interview",
    date: "10 Aug 2023",
    action: "Watch Video",
    url: "https://www.youtube.com/watch?v=2knY57LK6So",
    image: "/speakers/Lerato Sithole/Lerato-Sithole-The-Speakers-Firm5.jpg"
  },
  {
    id: "lerato-art-2",
    headline: "From Cleaning to Global Partner: Purpose-Driven Scaling",
    publication: "YouTube Feature",
    date: "14 Nov 2023",
    action: "Watch Feature",
    url: "https://www.youtube.com/watch?v=e8WbD0Gorfk",
    image: "/speakers/Lerato Sithole/Lerato-Sithole-The-Speakers-Firm7.jpg"
  },
  {
    id: "lerato-art-3",
    headline: "Sustainable Leadership & Business Transformation in Africa",
    publication: "YouTube Dialogue",
    date: "05 Apr 2024",
    action: "Watch Dialogue",
    url: "https://www.youtube.com/watch?v=E48pPGDsy60",
    image: "/speakers/Lerato Sithole/Lerato-Sithole-The-Speakers-Firm4.jpg"
  }
];

export const AboutTeamSection = () => {
  const customVideos = [
    {
      id: "lerato-vid-1",
      label: "Lerato Sithole in Action",
      youtubeId: "85HEq8FYHY8"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Lerato Sithole"
      speakerTitle=""
      speakerDesignation="CEO of Think & Grow Rich Africa & Visionary Coach"
      speakerRole="Former Deloitte Partner, global keynote speaker, and luxury brand architect."
      speakerRef="TSF-LS-01"
      heroBackgroundImage="/speakers/Lerato Sithole/Lerato-Sithole-The-Speakers-Firm6.jpg"
      biographyImage="/speakers/Lerato Sithole/Lerato-Sithole-The-Speakers-Firm2.jpg"
      bioHook="“Guiding leaders to transition from clean slates to global impact, anchored in purpose and mindset expansion.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      books={[]}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="lerato-sithole" customMedia={LERATO_MEDIA} />
      }
    >
      <ProfileAdditionalSections speakerId="lerato-sithole" customVideos={customVideos} />
    </SpeakerProfileTemplate>
  );
};
