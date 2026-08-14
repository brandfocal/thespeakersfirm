"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "virgin-unite",
    label: "Former Head of Virgin Unite CSI",
    subtitle: "Personally headhunted by Sir Richard Branson to lead Virgin Unite Southern Africa."
  },
  {
    id: "duke-fellow",
    label: "Duke University Fellow",
    subtitle: "Honored Fellow with qualifications from the University of Pretoria."
  },
  {
    id: "global-advocate",
    label: "UN & Global Fund Partner",
    subtitle: "Collaborates with UNICEF, WHO, and the Global Fund on healthcare initiatives."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "resilience-empowerment",
    number: "Theme 01",
    title: "Resilience, Overcoming Grief & Active Leadership.",
    copy: "Transforming personal childhood loss into a global platform for de-stigmatizing HIV/AIDS."
  },
  {
    id: "girls-empowerment",
    number: "Theme 02",
    title: "Women's Health & Economic Participation.",
    copy: "Advocating for the rights, sexual health, and economic empowerment of adolescent girls and young women."
  },
  {
    id: "corporate-social",
    number: "Theme 03",
    title: "CSI, Social Impact & Purposeful Partnerships.",
    copy: "Designing sustainable, high-impact social investments that align corporate growth with human dignity."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Sibulele Sibaca-Nomnganga is a prominent international speaker, social entrepreneur, and global health advocate. Having lost both of her parents to AIDS as a teenager, Sibulele turned her personal tragedy into a lifelong mission to de-stigmatize the disease and champion women's health.",
  "Her impactful leadership led to her being handhunted by Sir Richard Branson to serve as the Head of the Virgin Unite CSI division in Southern Africa. Since then, she has collaborated with major international bodies such as UNICEF, the World Health Organization (WHO), and the Global Fund.",
  "As an acclaimed speaker, she has addressed global leaders and heads of state, including Nelson Mandela, Bill Clinton, Bill and Melinda Gates, and delegates at G20 summits.",
  "Sibulele is a University of Pretoria graduate, a Duke University Fellow, and continues to drive youth-centered health initiatives and women's empowerment forums across the continent."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "unicef", name: "UNICEF" },
  { id: "virgin-unite-logo", name: "VIRGIN UNITE" },
  { id: "global-fund", name: "THE GLOBAL FUND" }
];

const SIBULELE_MEDIA = [
  {
    id: "sibulele-art-1",
    headline: "Orphaned at 16, Sibulele Sibaca has grown up to join forces with the UN to empower girls",
    publication: "News24 Wellness",
    date: "05 Oct 2018",
    action: "Read Article",
    url: "https://www.news24.com/life/wellness/body/orphaned-at-16-years-old-sibulele-sibaca-has-grown-up-to-join-forces-with-the-un-to-empower-girls-20181005",
    image: "/speakers/Sibulele Sibaca/Sibulele-Sibaca-The-Speakers-Firm5.jpg"
  },
  {
    id: "sibulele-art-2",
    headline: "Patterns of Past, Present, Promise: A Ritual of Resilience",
    publication: "The Global Fund",
    date: "02 May 2025",
    action: "Watch Ritual",
    url: "https://www.theglobalfund.org/en/video/2025/2025-05-02-patterns-of-past-present-promise-a-ritual-of-resilience/",
    image: "/speakers/Sibulele Sibaca/Sibulele-Sibaca-The-Speakers-Firm3.jpg"
  },
  {
    id: "sibulele-art-3",
    headline: "HIV Campaigner fights stigma and empowers young girls in SA",
    publication: "ONE.org",
    date: "12 Dec 2021",
    action: "Read Story",
    url: "https://www.one.org/stories/hiv-campaigner-fights-stigma/",
    image: "/speakers/Sibulele Sibaca/Sibulele-Sibaca-The-Speakers-Firm4.jpg"
  }
];

export const AboutTeamSection = () => {
  const customVideos = [
    {
      id: "sibulele-vid-1",
      label: "Sibulele Sibaca Global Address",
      youtubeId: "Fq4Dx3jOwwE"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Sibulele Sibaca"
      speakerTitle=""
      speakerDesignation="Social Entrepreneur, Health Advocate & International Speaker"
      speakerRole="Former Head of Virgin Unite Southern Africa, UN partner, and youth advocate."
      speakerRef="TSF-SS-01"
      heroBackgroundImage="/speakers/Sibulele Sibaca/Sibulele-Sibaca-The-Speakers-Firm2.jpg"
      biographyImage="/speakers/Sibulele Sibaca/Sibulele-Sibaca-The-Speakers-Firm6.jpg"
      bioHook="“Turning historical pain into a purposeful blueprint for youth health and inclusive leadership.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      books={[]}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="sibulele-sibaca" customMedia={SIBULELE_MEDIA} />
      }
    >
      <ProfileAdditionalSections speakerId="sibulele-sibaca" customVideos={customVideos} />
    </SpeakerProfileTemplate>
  );
};
