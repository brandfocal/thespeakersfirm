"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "netflix-original",
    label: "Netflix Original Creator",
    subtitle: "Creator and showrunner of 'Queen Sono', the first African original series on Netflix."
  },
  {
    id: "emmy-nominee",
    label: "International Emmy Nominee",
    subtitle: "Co-founder and show-runner of the twice-nominated satire news show 'Late Nite News'."
  },
  {
    id: "film-maverick",
    label: "Award-Winning Filmmaker",
    subtitle: "Director, writer and producer of cinematic hits 'Matwetwe' and 'Catching Feelings'."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "film-disruption",
    number: "Theme 01",
    title: "Film & Media Disruption.",
    copy: "Challenging traditional broadcast patterns through pioneering independent cinematic production and storytelling."
  },
  {
    id: "satirical-comedy",
    number: "Theme 02",
    title: "Pioneering Satirical Comedy.",
    copy: "Using intellectual satire and cultural critique to prompt critical thinking and social engagement."
  },
  {
    id: "creative-leadership",
    number: "Theme 03",
    title: "Creative Leadership.",
    copy: "Managing complex production ecosystems and spearheading creative projects for global streaming networks."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Recognized today as one of the country’s pioneering black comedians, Kagiso Lediga has certainly earned his right to be called a South African comedy legend, producing some of the most groundbreaking comedy content this country has ever seen. Kagiso Lediga is a well-known stand-up comedian from South Africa who has won numerous accolades as an actor, writer, director, and producer of motion pictures and television.",
  "In addition to being co-founder and show-runner of the twice-nominated International Emmy-winning satire news programme Late Nite News with Loyiso Gola (LNN), he is the originator of the groundbreaking South African comic sketch show The Pure Monate Show (PMS). 2018 saw the global premiere of Lediga’s first feature film, Catching Feelings, as a Netflix Original.",
  "Following its highly regarded International Film Festival Rotterdam debut the following year, his second feature film, Matwetwe (Wizard), became a cult hit when it was shown in theatres in South Africa. In 2020, Lediga served as the creator and showrunner of Queen Sono, the first African original series on Netflix. Kagiso Lediga is a natural storyteller with an enigmatic comedy style that blends schoolboy charm with creative genius, sharp intelligence & wit."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "netflix", name: "NETFLIX" },
  { id: "emmy", name: "INTERNATIONAL EMMYS" },
  { id: "rotterdam", name: "IFF ROTTERDAM" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "lediga-art-1",
      headline: "Inside ‘Sabbatical’, SA’s new film where family breaks expose hidden truths",
      publication: "TimesLIVE",
      date: "2025",
      action: "Read Article",
      url: "https://www.timeslive.co.za/sunday-times-daily/lifestyle/2025-05-02-inside-sabbatical-sas-new-film-where-family-breaks-expose-hidden-truths/",
      image: "/speakers/Kagiso Lediga/Kagiso-Lediga-The-Speakers-Firm-4.jpeg"
    },
    {
      id: "lediga-art-2",
      headline: "Mzansi’s Lebo M and Kagiso Lediga lend their voices to the ‘Mufasa: The Lion King’ soundtrack",
      publication: "IOL",
      date: "2024",
      action: "Read Article",
      url: "https://iol.co.za/entertainment/celebrity-news/local/2024-12-04-mzansis-lebo-m-and-kagiso-lediga-lend-their-voices-to-the-mufasa-the-lion-king-soundtrack/",
      image: "/speakers/Kagiso Lediga/Kagiso-Lediga-The-Speakers-Firm-8.jpg"
    },
    {
      id: "lediga-art-3",
      headline: "How Kagiso Lediga became the most sought-after filmmaker in South Africa",
      publication: "Al Jazeera",
      date: "2024",
      action: "Read Article",
      url: "https://www.aljazeera.com/features/2024/2/24/how-kagiso-lediga-became-the-most-sought-after-filmmaker-in-south-africa",
      image: "/speakers/Kagiso Lediga/Kagiso-Lediga-The-Speakers-Firm-11.jpg"
    }
  ];

  const customVideos = [
    {
      id: "lediga-vid-1",
      label: "Kagiso Lediga Creative Journey",
      youtubeId: "r_S7o66RndE"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Kagiso Lediga"
      speakerTitle=""
      speakerDesignation="Comedy Legend, Emmy-Nominated Director & Showrunner"
      speakerRole="Pioneering filmmaker, stand-up comedian, writer, and Netflix creator."
      speakerRef="TSF-KL-27"
      heroBackgroundImage="/speakers/Kagiso Lediga/Kagiso-Lediga-The-Speakers-Firm-6.jpg"
      biographyImage="/speakers/Kagiso Lediga/Kagiso-Lediga-The-Speakers-Firm--10.png"
      bioHook="“Creative genius begins with schoolboy charm and ends in disruptive, groundbreaking storytelling.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="kagiso-lediga" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="kagiso-lediga" 
        customGallery={[]} 
        customIntroText="Creative direction, screenwriting keynotes, and media innovation masterclasses by Kagiso Lediga."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};
