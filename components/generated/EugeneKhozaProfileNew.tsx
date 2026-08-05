"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "countdown-2010",
    label: "SABC1 TV Host",
    subtitle: "Co-host of SABC1's Countdown 2010 sports magazine show."
  },
  {
    id: "multilingual-delivery",
    label: "Multilingual Performer",
    subtitle: "Highly praised for engaging diverse audiences across multiple South African cultures."
  },
  {
    id: "comedy-champ",
    label: "Ricoffy Comedy Winner",
    subtitle: "Winner of the Ricoffy Comedy Challenge and semi-finalist in M-Net's Laugh Out Loud."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "cultural-engagement",
    number: "Theme 01",
    title: "Cultural & Linguistic Engagement.",
    copy: "Using deep cultural understanding and multilingual humor to bridge corporate gaps and connect teams."
  },
  {
    id: "resilience-abundance",
    number: "Theme 02",
    title: "Resilience & Abundance.",
    copy: "Profound, thoughtful discussions on processing personal loss, adapting to change, and finding inner abundance."
  },
  {
    id: "broadcast-excellence",
    number: "Theme 03",
    title: "Broadcast & Hosting Excellence.",
    copy: "Drawing on extensive live television experience to manage programs and direct large corporate awards."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Eugene Khoza is a South African comedian and television presenter best known for co-hosting (with Fezile Makhanya and Lebo Motsoeli) the SABC1 sports magazine show Countdown 2010, from 2008-2010.",
  "Born and bred in the Pretoria area, Eugene has advanced in the world of local comedy and can now be found performing all over the country. His growing ethnic fan base has been accredited to his multilingual delivery and his understanding of cultures and being able to engage them all on a humorous level.",
  "It is this ability that took him from performing open spots to hosting the popular Horror Café Comedy Night for a year. His rise in the comedy ranks began when he made the semi-finals of M-Net’s Laugh Out Loud comedy competition and in the same year won the Ricoffy Comedy Challenge. Those achievements led to him being put on the line-up for Arts Alive 2007, as well as two of the country’s biggest comedy shows: Blacks Only and the Heavyweight Comedy Jam."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "sabc1", name: "SABC 1" },
  { id: "mnet", name: "M-NET" },
  { id: "ricoffy", name: "RICOFFY COMEDY" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "khoza-art-1",
      headline: "Step Aside: Comedian Eugene Khoza is back after a five year break",
      publication: "Saturday Star",
      date: "2022",
      action: "Read Article",
      url: "https://iol.co.za/saturday-star/news/2022-10-29-step-aside-comedian-eugene-khoza-is-back-after-a-five-year-break/",
      image: "/speakers/Eugene Khoza/Eugene-Khoza-The-Speakers-Firm-4.jpg"
    },
    {
      id: "khoza-art-2",
      headline: "EPISODE 411 | Eugene Khoza, Cristiano Ronaldo, Msaki, Comedy, Boity, Trevor Noah",
      publication: "Podcast Show",
      date: "2024",
      action: "Watch Interview",
      url: "https://www.youtube.com/watch?v=yZde3ohZC5s",
      image: "/speakers/Eugene Khoza/Eugene-Khoza-The-Speakers-Firm-3.jpg"
    },
    {
      id: "khoza-art-3",
      headline: "Meet Eugene Khoza – One of My Favorite People | What Now? with Trevor Noah Podcast",
      publication: "What Now? with Trevor Noah",
      date: "2023",
      action: "Watch Interview",
      url: "https://www.youtube.com/watch?v=GhlhkbAtN1g",
      image: "/speakers/Eugene Khoza/Eugene-Khoza-The-Speakers-Firm-12.jpg"
    }
  ];

  const customGallery = [
    {
      id: "khoza-gal-1",
      src: "/speakers/Eugene Khoza/Eugene-Khoza-The-Speakers-Firm-6.jpg",
      alt: "Eugene Khoza stage",
      caption: "Eugene performing live for a corporate conference.",
      className: "sm:col-span-2 lg:col-span-2"
    },
    {
      id: "khoza-gal-2",
      src: "/speakers/Eugene Khoza/Eugene-Khoza-The-Speakers-Firm-7.jpg",
      alt: "Eugene Khoza smiling",
      caption: "Hosting a creative dialogue workshop.",
      className: ""
    },
    {
      id: "khoza-gal-3",
      src: "/speakers/Eugene Khoza/Eugene-Khoza-The-Speakers-Firm-8.jpg",
      alt: "Eugene Khoza portrait",
      caption: "Promotional photoshoot for national tour.",
      className: ""
    }
  ];

  const customVideos = [
    {
      id: "khoza-vid-1",
      label: "Eugene Khoza with Trevor Noah",
      youtubeId: "GhlhkbAtN1g"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Eugene Khoza"
      speakerTitle=""
      speakerDesignation="Multilingual Stand-Up Comedian, TV Host & Cultural Analyst"
      speakerRole="Highly sought-after multilingual stand-up comedian and television presenter."
      speakerRef="TSF-EK-28"
      heroBackgroundImage="/speakers/Eugene Khoza/Eugene-Khoza-The-Speakers-Firm-2.jpg"
      biographyImage="/speakers/Eugene Khoza/Eugene-Khoza-The-Speakers-Firm-9.png"
      bioHook="“Understanding cultures and engaging them on a humorous level is the true art of connection.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="eugene-khoza" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="eugene-khoza" 
        customGallery={[]} 
        customIntroText="Thoughtful comedy performances, live television hosting, and multicultural team-building sessions with Eugene Khoza."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};
