"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "published-author",
    label: "Published Author",
    subtitle: "Author of 'Handle Black Tax Like a Pro – Setting Boundaries, Improving Relationships and Achieving Freedom'."
  },
  {
    id: "nlp-coach",
    label: "NLP Certified Coach",
    subtitle: "Certified Neuro-Linguistic Programming coach with a focus on mental transformation."
  },
  {
    id: "capacity-expert",
    label: "Capacity Development Expert",
    subtitle: "Consulting experience with world-class brands like Ernst & Young, Sasfin Bank, and UJ."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "boundary-architecture",
    number: "Theme 01",
    title: "Boundary Architecture & Self-Love.",
    copy: "Establishing boundaries as a fundamental building block for self-preservation, career pathing, and personal goals."
  },
  {
    id: "managing-black-tax",
    number: "Theme 02",
    title: "Unpacking & Managing Black Tax.",
    copy: "Striking a healthy balance between supporting family obligations and achieving individual financial freedom."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Ndumi Hadebe is a published author of Handle Black Tax Like a Pro – Setting Boundaries, Improving Relationships and Achieving Freedom, a book about how to strike a healthy balance of helping family or relatives while allowing space for personal financial goals – through the practice of healthy boundaries.",
  "The more Time-Money-Energy she invested working on this book, the more she realised that boundaries are the basis of self-preservation and self-love; and concluded that it’s impossible to lead yourself in the direction of your vision or goals without a clear assertion of boundaries in the various areas of life.",
  "She has more than a decade of corporate experience and another as an entrepreneur – consulting in as a capacity development expert for world renowned brands such Ernst & Young, Nordex SA, Sasfin Bank, University of Johannesburg and Bureau Veritas Zambia. Her business endeavours are supported by a BCom in Marketing and an NLP Certificate for Coaches and a deliberate ongoing lifestyle of learning and healing.",
  "Through her workshops and talks, Ndumi guides professionals to manage expectations, negotiate healthy support structures, and break free from toxic financial dynamics to enable true financial independence for both sides.",
  "Book Ndumi Hadebe through The Speakers Firm, A Leading African Speakers Bureau, to bring boundary integration, financial wellness mastery, and transformative relationship coaching to your next corporate wellness day or leadership seminar."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "ey", name: "ERNST & YOUNG" },
  { id: "sasfin", name: "SASFIN BANK" },
  { id: "uj", name: "UNIVERSITY OF JOHANNESBURG" }
];

const BOOKS = [
  {
    id: "handle-black-tax",
    title: "Handle Black Tax Like a Pro",
    description: "Setting Boundaries, Improving Relationships and Achieving Freedom. A practical guide to managing extended family financial dynamics while securing personal growth.",
    coverImage: "/speakers/Ndumi Hadebe/Handle-Black-Tax-Like-A-Pro-Ndumi-Hadebe.jpg",
    url: "https://www.penguinrandomhouse.co.za/book/handle-black-tax-pro/9781776391028"
  }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "hadebe-art-1",
      headline: "Handle Black tax like a Pro: Writing the book was a journey",
      publication: "City Press / News24",
      date: "2023",
      action: "Read Interview",
      url: "https://www.news24.com/citypress/personal-finance/writing-the-book-was-a-journey-20230507",
      image: "/speakers/Ndumi Hadebe/Ndumi-Hadebe-The-Speakers-Firm-4.png"
    },
    {
      id: "hadebe-art-2",
      headline: "Making black tax manageable begins with accountability",
      publication: "Moonstone",
      date: "2023",
      action: "Read Article",
      url: "https://www.moonstone.co.za/making-black-tax-manageable-begins-with-accountability/",
      image: "/speakers/Ndumi Hadebe/Ndumi-Hadebe-The-Speakers-Firm-7.jpg"
    },
    {
      id: "hadebe-art-3",
      headline: "Black tax is not so much about money as it is about boundaries",
      publication: "Daily Maverick",
      date: "2023",
      action: "Read Analysis",
      url: "https://www.dailymaverick.co.za/article/2023-04-10-black-tax-is-not-so-much-about-money-as-it-is-about-boundaries/",
      image: "/speakers/Ndumi Hadebe/Ndumi-Hadebe-The-Speakers-Firm-5.jpg"
    }
  ];

  const customVideos = [
    {
      id: "hadebe-vid-1",
      label: "Ndumi Hadebe on Handle Black Tax Like a Pro",
      youtubeId: "Jvi2VISwPIw"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Ndumi Hadebe"
      speakerTitle=""
      speakerDesignation="Financial Wellness Advocate & Author"
      speakerRole="Setting Boundaries, Improving Relationships & Achieving Freedom"
      speakerRef="TSF-NH-28"
      heroBackgroundImage="/speakers/Ndumi Hadebe/Ndumi-Hadebe-The-Speakers-Firm.jpg"
      biographyImage="/speakers/Ndumi Hadebe/Ndumi-Hadebe-The-Speakers-Firm-2.jpg"
      bioHook="“Boundaries are the basis of self-preservation and self-love. It is impossible to lead yourself without them.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      books={BOOKS}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="ndumi-hadebe" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="ndumi-hadebe" 
        customIntroText="Boundary architecture keynotes, financial wellness seminars, and corporate relationship coaching sessions led by Ndumi Hadebe."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};
