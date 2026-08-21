"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "op-conductor",
    label: "Pioneering African Conductor",
    subtitle: "The first young, black female conductor of an all-black orchestra and choir in Africa."
  },
  {
    id: "op-architect",
    label: "Architect & Creative Director",
    subtitle: "Creative director of Anchored Sound, merging architectural principles with classical orchestration."
  },
  {
    id: "op-scholar",
    label: "UCT Music Scholar",
    subtitle: "Enrolled in a specialized PG Diploma in Music Performance at the University of Cape Town."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "belonging-inclusivity",
    number: "Theme 01",
    title: "Inclusivity in Male-Dominated Spaces.",
    copy: "Asserting presence and defending creative vision in boardrooms and soundstages to inspire belonging and diversity."
  },
  {
    id: "creative-synthesis",
    number: "Theme 02",
    title: "Unexpected Syntheses & Collaborations.",
    copy: "Merging classical orchestral music with modern genres (like Amapiano with Kabza De Small) to pioneer new forms of cultural expression."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Ofentse Pitse is a creative visionary who, though enchanted by the continent she comes from, possesses a wide-eyed enthusiasm for the world of architecture, music, and curated experiences. Hailing from the capital city of South Africa – Pretoria; her musical roots stem from her beloved late mother’s love for old school music, as well as her family’s deep heritage in The Salvation Army church, with her grandfather being one of the most prominent jazz trumpeters and a co-founder of the iconic Sophiatown jazz band – The Jazz Maniacs.",
  "Pitse’s curiosity and love for music, led her to the introduction of the trumpet at just twelve-years of age. She received mentorship and earned the title of – 'the first young, black female conductor of an all-black orchestra and choir in Africa.' Her hard work and dedication have seen her break barriers in the orchestra world, garnering recognition from global brands such as Veuve Clicquot, Forbes Africa, CHANEL, Woolworths, Bidvest, Toyota Global, Netflix, and Redbull. One of her most notable collaborations was that of conducting and taking part in the recording with a 74-piece global female orchestra of color for the Netflix series Queen Charlotte.",
  "Book Ofentse Pitse through The Speakers Firm, A Leading African Speakers Bureau, to bring creative innovation keynotes, diversity and assertion briefings, and custom performance curations to your next corporate summit."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "anchoredsound", name: "ANCHORED SOUND" },
  { id: "netflix", name: "NETFLIX" },
  { id: "forbes", name: "FORBES AFRICA" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "op-art-1",
      headline: "From SA to Bridgerton? Conductor Ofentse Pitse on her 'greatest career highlight'",
      publication: "News24",
      date: "2023",
      action: "Read Interview",
      url: "https://www.ofentsepitse.com/2023/05/04/from-sa-to-bridgerton-pioneering-conductor-ofentse-pitse-on-her-greatest-career-highlight-so-far-news24/",
      image: "/speakers/Ofentse Pitse/Ofentse-Pitse-The-Speakers-Firm5.jpg"
    },
    {
      id: "op-art-2",
      headline: "Red Bull Symphonic: Kabza De Small With Ofentse Pitse",
      publication: "OfentsePitse.com",
      date: "2024",
      action: "Read Review",
      url: "https://www.ofentsepitse.com/2024/04/26/red-bull-symphonic-kabza-de-small-with-ofentse-pitse-and-the-symphonic-orchestra/",
      image: "/speakers/Ofentse Pitse/Ofentse-Pitse-The-Speakers-Firm4.jpg"
    },
    {
      id: "op-art-3",
      headline: "Ofentse Pitse is first black woman to own an all-black orchestra",
      publication: "AOL",
      date: "2023",
      action: "Read Article",
      url: "https://www.ofentsepitse.com/2023/05/05/ofentse-pitse-is-first-black-woman-to-own-an-all-black-orchestra-aol/",
      image: "/speakers/Ofentse Pitse/Ofentse-Pitse-The-Speakers-Firm6.jpg"
    }
  ];

  const customVideos = [
    {
      id: "op-vid-1",
      label: "Ofentse Pitse: Red Bull Symphonic & Kabza De Small",
      youtubeId: "wkOj3e0GUNw"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Ofentse Pitse"
      speakerTitle=""
      speakerDesignation="Orchestral Conductor & Architect"
      speakerRole="Founder of Anchored Sound & UCT Music Scholar"
      speakerRef="TSF-OP-66"
      heroBackgroundImage="/speakers/Ofentse Pitse/Ofentse-Pitse-The-Speakers-Firm7.jpg"
      biographyImage="/speakers/Ofentse Pitse/Ofentse-Pitse-The-Speakers-Firm3.jpg"
      bioHook="“To say to others who feel that they don’t belong – you can, you do, you must. There is no limit to what you can achieve.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="ofentse-pitse" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="ofentse-pitse" 
        customIntroText="Creative leadership workshops, unexpected genre collaboration keynotes, and architecture-orchestra integration seminars led by Ofentse Pitse."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
