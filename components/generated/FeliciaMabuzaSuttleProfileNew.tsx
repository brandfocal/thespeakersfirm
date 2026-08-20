"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "fms-talk",
    label: "First Lady of Talk",
    subtitle: "Pioneered South Africa's premier social dialogue television talk shows."
  },
  {
    id: "fms-author",
    label: "Bestselling Author & Speaker",
    subtitle: "Author of multiple memoirs and an international speaker on personal empowerment."
  },
  {
    id: "fms-entrepreneur",
    label: "Serial Entrepreneur",
    subtitle: "Founder of FMS Productions, Pamodzi Investments, and Back of the Moon."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "personal-transformation",
    number: "Theme 01",
    title: "Personal Transformation & Self-Actualization.",
    copy: "How to break barriers, dare to dream, and develop the mental resilience required to achieve your potential."
  },
  {
    id: "female-leadership",
    number: "Theme 02",
    title: "Female Leadership & Brand Building.",
    copy: "Empowering women in business, building brand legacies, and mentoring the next generation of leaders."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Felicia Mabuza-Suttle (widely known as South Africa's 'First Lady of Talk') is a legendary talk show hostess, entrepreneur, and international keynote speaker. She began her pioneering television career at the SABC in 1992, hosting Top Level, which later evolved into the iconic The Felicia Show (1995) and ultimately Felicia (2000), which captivated millions by addressing critical social issues and entertainment.",
  "Beyond her legendary television status, Felicia is a successful and dynamic entrepreneur. She has launched numerous business ventures including FMS Productions, Pamodzi Investments, the popular Back of the Moon restaurant, and a highly regarded line of signature apparel and accessories. Her business successes have continuously funded her extensive humanitarian initiatives.",
  "As a highly sought-after global keynote speaker and bestselling author, Felicia is passionate about leadership, self-actualization, and socio-economic transformation. She continuously advocates for drug and crime prevention, using her platforms and resources to mentor young leaders and support community development campaigns.",
  "Book Felicia Mabuza-Suttle through The Speakers Firm, Africa’s #1 Strategic Speakers Bureau, to deliver powerful keynote addresses on personal transformation, female leadership, and entrepreneurial resilience."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "sabc", name: "SABC TV" },
  { id: "pamodzi", name: "PAMODZI INVESTMENTS" },
  { id: "fms", name: "FMS PRODUCTIONS" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "fms-art-1",
      headline: "Felicia Mabuza-Suttle on media, legacy, and South African television",
      publication: "SABC Archives / YouTube",
      date: "2024",
      action: "Watch Retrospective",
      url: "https://www.citizen.co.za/lifestyle/entertainment/the-hairdo-symbolised-black-confidence-felicia-mabuza-suttle-after-being-honoured-for-her-90s-hair/",
      image: "/speakers/Felicia Mabuza-Suttle/felicia-mabuza-suttle-the-speakers-firm-8.jpg"
    },
    {
      id: "fms-art-2",
      headline: "Dare to Dream: Felicia's blueprint for personal transformation",
      publication: "Female Keynote Speakers Monthly",
      date: "2023",
      action: "Read Article",
      url: "https://www.msn.com/en-za/news/other/felicia-mabuza-suttle-honoured-for-celebrating-african-women-s-hair-in-the-90s/ar-AA1Ovor6",
      image: "/speakers/Felicia Mabuza-Suttle/felicia-mabuza-suttle-the-speakers-firm-11.jpg"
    },
    {
      id: "fms-art-3",
      headline: "FMS Productions and the evolution of Black investment in SA",
      publication: "Entrepreneurial Pioneers Review",
      date: "2024",
      action: "Read Feature",
      url: "https://iol.co.za/entertainment/celebrity-news/local/2020-09-23-felicia-mabuza-suttle-south-africas-first-lady-of-talk/",
      image: "/speakers/Felicia Mabuza-Suttle/felicia-mabuza-suttle-the-speakers-firm-13.jpg"
    }
  ];

  const customVideos = [
    {
      id: "fms-vid-1",
      label: "Felicia Mabuza-Suttle on Dare to Dream and Leaving a Legacy",
      youtubeId: "HmA8suXVIck"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Felicia Mabuza-Suttle"
      speakerTitle=""
      speakerDesignation="First Lady of Talk, Bestselling Author & Entrepreneur"
      speakerRole="Talk Show Host & Transnational Keynote Speaker"
      speakerRef="TSF-FMS-73"
      heroBackgroundImage="/speakers/Felicia Mabuza-Suttle/felicia-mabuza-suttle-the-speakers-firm-14.jpg"
      biographyImage="/speakers/Felicia Mabuza-Suttle/felicia-mabuza-suttle-the-speakers-firm-2.jpg"
      bioHook="“Dare to dream, stand out, and lift as you rise: using media and enterprise to drive transformation and build a legacy of hope.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="felicia-mabuza-suttle" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="felicia-mabuza-suttle" 
        customIntroText="Inspirational motivation keynotes, leadership development workshops, and media legacy lectures led by Felicia Mabuza-Suttle."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
