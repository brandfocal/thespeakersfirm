"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "ceo-lesaka",
    label: "CEO of Lesaka Technologies",
    subtitle: "Highly experienced chief executive leading financial technology services across Southern Africa."
  },
  {
    id: "banking-exec",
    label: "Banking Executive Veteran",
    subtitle: "Over two decades of leadership roles within Standard Bank Group and banking associations."
  },
  {
    id: "leadership-author",
    label: "Author & Advocate",
    subtitle: "Renowned writer on ethical leadership models, culture, and professional integrity."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "leadership-culture",
    number: "Theme 01",
    title: "Leadership & Organisational Culture.",
    copy: "Building transparent, values-driven corporate environments that foster trust, integrity, and long-term sustainability."
  },
  {
    id: "fintech-inclusion",
    number: "Theme 02",
    title: "Fintech, Inclusivity & Growth.",
    copy: "Exploring the role of digital transformation, payments infrastructure, and consumer finance in driving financial inclusion."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Lincoln Mali was appointed as our Chief Executive Officer: Southern Africa on May 1, 2021. He is a financial services executive with over 25 years in the industry. Until April 2021, he was the Head of Group Card and Payments at Standard Bank Group, having served in many different roles within that organisation since 2001. Lincoln chaired the board of directors of Diners Club South Africa until April 2021 and was a member of the Central and Eastern Europe, Middle East and Africa Business Council for Visa. Besides his other qualifications, he has attended an Advanced Management Program at Harvard Business School and holds various diplomas in banking and management."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "lesaka", name: "LESAKA TECHNOLOGIES" },
  { id: "standardbank", name: "STANDARD BANK" },
  { id: "wits", name: "WITS UNIVERSITY" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "lincoln-art-1",
      headline: "Lesaka's Lincoln Mali on the fintech opportunity in South Africa",
      publication: "TechCentral",
      date: "04 Aug 2022",
      action: "Read Interview",
      url: "https://techcentral.co.za/lesaka-lincoln-mali-fintech-opportunity/253827/",
      image: "/speakers/Lincoln Mali/Lincoln-Mali-The-Speakers-Firm-3.jpg"
    },
    {
      id: "lincoln-art-2",
      headline: "Sunday Times Books Extract: Blazing a Trail by Lincoln Mali",
      publication: "TimesLIVE",
      date: "17 Oct 2022",
      action: "Read Extract",
      url: "https://www.timeslive.co.za/sunday-times/books/non-fiction/2022-10-17-extract-blazing-a-trail-by-lincoln-mali/",
      image: "/speakers/Lincoln Mali/Lincoln-Mali-The-Speakers-Firm-4.jpg"
    },
    {
      id: "lincoln-art-3",
      headline: "Lincoln Mali launches book on African leadership",
      publication: "The Herald",
      date: "23 Nov 2022",
      action: "Read News Article",
      url: "https://www.theherald.co.za/news/politics/2022-11-23-ex-politician-lincoln-mali-launches-book-on-african-leadership/",
      image: "/speakers/Lincoln Mali/Lincoln-Mali-The-Speakers-Firm-2.jpg"
    }
  ];

  const customGallery = [
    {
      id: "lincoln-gal-1",
      src: "/speakers/Lincoln Mali/Lincoln-Mali-The-Speakers-Firm-5.jpg",
      alt: "Lincoln Mali speaking at standard bank conference",
      caption: "Corporate Executive, Leadership Writer & CEO",
      className: "sm:col-span-2 lg:col-span-2"
    },
    {
      id: "lincoln-gal-2",
      src: "/speakers/Lincoln Mali/Lincoln-Mali-The-Speakers-Firm-6.jpg",
      alt: "Corporate leadership advisory session",
      caption: "Aligning values-driven leadership in the boardroom",
      className: ""
    },
    {
      id: "lincoln-gal-3",
      src: "/speakers/Lincoln Mali/Lincoln-Mali-The-Speakers-Firm-7.jpg",
      alt: "Lincoln Mali roundtable event",
      caption: "Leadership roundtable exchange",
      className: ""
    }
  ];

  const PUBLISHED_BOOKS = [
    {
      id: "blazing-a-trail",
      title: "Blazing a Trail",
      description: "A framework and personal reflections on ethics, courage, and accountability in African corporate and public leadership landscapes.",
      coverImage: "/speakers/Lincoln Mali/Blazing-a-Trail-Lincoln-Mali.jpg",
      buyUrl: "https://www.timeslive.co.za/sunday-times/books/non-fiction/2022-10-17-extract-blazing-a-trail-by-lincoln-mali/"
    }
  ];

  const customVideos = [
    {
      id: "lincoln-vid-1",
      label: "Lincoln Mali on Leadership Integrity",
      youtubeId: "bBbnXOq92hA"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Lincoln Mali"
      speakerTitle=""
      speakerDesignation="Corporate Executive, Leadership Writer & CEO"
      speakerRole="Experienced banking executive, CEO, and writer on values-driven leadership."
      speakerRef="TSF-LM-10"
      heroBackgroundImage="/speakers/Lincoln Mali/Lincoln-Mali-The-Speakers-Firm9.jpg"
      heroMobileBackgroundImage="/speakers/Lincoln%20Mali/lincoln-mali-mobile.jpg"
      biographyImage="/speakers/Lincoln Mali/Lincoln-Mali-The-Speakers-Firm.jpg"
      bioHook="“Leadership is not a title; it is a commitment to lead with values, courage, and accountability.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      books={PUBLISHED_BOOKS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="lincoln-mali" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="lincoln-mali" 
        customGallery={customGallery} 
        customIntroText="Corporate leadership transformation forums and addresses by Lincoln Mali."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};
