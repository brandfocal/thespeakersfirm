"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "bm-coach",
    label: "DEI & Deep Coach",
    subtitle: "One of only four certified Deep Coaches in private practice on the African continent."
  },
  {
    id: "bm-faculty",
    label: "Adjunct Business Faculty",
    subtitle: "Lectures at Henley, Wits, Duke CE, and Johannesburg Business School."
  },
  {
    id: "bm-researcher",
    label: "Senior Researcher",
    subtitle: "Researcher at the Henley Centre for Leadership (Africa), specializing in somatic intelligence."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "dei-transformation",
    number: "Theme 01",
    title: "Diversity, Equity & Inclusion (DEI).",
    copy: "Navigating structural transformation, emotional & somatic intelligence, and inclusive leadership development."
  },
  {
    id: "systemic-coaching",
    number: "Theme 02",
    title: "Systemic Executive Coaching.",
    copy: "Coaching executive leaders and boards to improve performance, alignment, and institutional health."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Brian Mhlanga is a DEI specialist, an executive coach, educator, facilitator, mediator, speaker and leadership development practitioner with more than 15 years of experience working in higher education, finance, project management, international relations, communications, and advocacy.",
  "He works systemically with individuals, teams and organisations to improve performance, grow leadership competence, emotional and somatic intelligence. He works as an adjunct faculty lecturer at Henley Business School, Wits Business School (WBS), Duke CE & Johannesburg Business School (University of Johannesburg). He is also a senior researcher at the Henley Centre for Leadership (Africa).",
  "He is one of four Deep Coaches on the African continent in private practise and has extensive experience working with the private and public sector. Brian also serves on a few boards.",
  "Book Brian Mhlanga through The Speakers Firm, Africa’s #1 Strategic Speakers Bureau, to guide your leadership team through diversity, equity, and inclusion, somatic intelligence, and systemic organizational transformation."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "henley", name: "HENLEY BUSINESS SCHOOL" },
  { id: "wits", name: "WITS BUSINESS SCHOOL" },
  { id: "enca", name: "ENCA" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "bm-art-1",
      headline: "Ramaphosa’s broken promises – a leader’s failure",
      publication: "BBrief",
      date: "2025",
      action: "Read Article",
      url: "https://www.bbrief.co.za/2025/02/24/ramaphosas-broken-promises-a-leaders-failure/",
      image: "/speakers/Brian Mhlanga/Brian-Mhlanga-The-Speakers-Firm.jpg"
    },
    {
      id: "bm-art-2",
      headline: "Mental health | Developing a healthy mind and body",
      publication: "eNCA",
      date: "2024",
      action: "Watch Interview",
      url: "https://www.enca.com/news/mental-health-developing-healthy-mind-and-body",
      image: "/speakers/Brian Mhlanga/Brian-Mhlanga-The-Speakers-Firm5.jpg"
    },
    {
      id: "bm-art-3",
      headline: "THE LETTER (GUEST: BRIAN MHLANGA – Life and Leadership Coach)",
      publication: "Omny FM",
      date: "2024",
      action: "Listen to Podcast",
      url: "https://omny.fm/shows/life-love-and-all/the-letter-guest-brian-mhlanga-life-and-leadership-coach-www-brianmhlanga-com-reitumetsi-mthembu-registered-counselor-counselling-with-reitumetsi-whattsapp-call-064-388-7324-info-reitumetsewellness-co-za#description",
      image: "/speakers/Brian Mhlanga/Brian-Mhlanga-The-Speakers-Firm3.jpg"
    }
  ];

  const customVideos = [
    {
      id: "bm-vid-1",
      label: "Brian Mhlanga on Leadership Development & Somatic Intelligence",
      youtubeId: "Jw7YmbfzSTM"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Brian Mhlanga"
      speakerTitle=""
      speakerDesignation="DEI Specialist, Executive Coach & Lecturer"
      speakerRole="Leadership Development Practitioner & Deep Coach"
      speakerRef="TSF-BM-61"
      heroBackgroundImage="/speakers/Brian Mhlanga/Brian-Mhlanga-The-Speakers-Firm7.jpg"
      biographyImage="/speakers/Brian Mhlanga/Brian-Mhlanga-The-Speakers-Firm4.jpg"
      bioHook="“Working systemically with individuals, teams and organisations to improve performance, grow leadership competence, emotional and somatic intelligence.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="brian-mhlanga" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="brian-mhlanga" 
        customIntroText="Leadership seminars, DEI strategy development, and individual executive coaching led by Brian Mhlanga."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
