"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "blacks-only-headliner",
    label: "Blacks Only Headliner",
    subtitle: "Headlined the national Blacks Only Comedy Show at the Sandton Convention Centre."
  },
  {
    id: "radio-champ",
    label: "YFM Comedy Champion",
    subtitle: "Undisputed Y-FM comedy champion for a year and co-host of weekend talk segments."
  },
  {
    id: "sitcom-actor",
    label: "Sitcom Lead Actor",
    subtitle: "Star of SABC1's hit sitcom 'Him, Her and the Guys' as Mkhandazonke."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "multilingual-comedy",
    number: "Theme 01",
    title: "Multilingual Comedy.",
    copy: "Engaging coastal and inland audiences with Zulu, English, and multi-dialect storytelling that appeals to everyone."
  },
  {
    id: "live-emcee-directing",
    number: "Theme 02",
    title: "Live Emcee Directing.",
    copy: "Experienced master of ceremonies for premium events, celebrity birthdays, and national gospel music festivals."
  },
  {
    id: "vosloorus-story",
    number: "Theme 03",
    title: "Grassroots Creative Arts.",
    copy: "Inspiring youth through Vosloorus-born comedy development and regional creative arts empowerment."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Isaac Gampu is a well-known stand-up comedian who has shared the stage with some big names. He headlined the Blacks Only Comedy Show that was held at the Sandton Convention Centre alongside Marc Lottering. The event was hosted by David Kau.",
  "It all began on air with Y-FM in which the comedian was an undisputed comedy champ for a year and was automatically the co-host on Light it Up with Chubster on Saturday and Sunday nights from 9 to midnight. Comedy came to him in a dare, and it began in a club gig in Vosloorus at Spiros Café. It was a five minute debut that resulted in him being an anchor of Thursday shows.",
  "This led him to meet experienced comedians and being Vosloo’s comedy export to clubs like Caprivi Tembisa, Djembe in Meropa Polokwane, Ragging Bull and Cofi. In Witbank he did Cappello and a regular favourite at Cappello Mbombela. Talamanca in East London, Carnival in Brakpan with Jon Vlismas and Mark Banks, Set and Mi Bar in Rosebank, Europa in Pretoria, The Ozone in Soweto, Silver Lakes in Springs and a number of club gigs, which polished and shaped this Ekurhuleni specifically Vosloorican Comedian.",
  "Headlining The Blacks Only Comedy Show was like a milestone for Isaac, as he had his Blacks debut a year prior at the Emperors Palace, which followed another show at Carnival City in October 2012. That was his third one within a year. Isaac is a multilingual favourite, especially on the coast for doing multiple shows with the 99% Zulu Comedy Shows. He also sold out at the Lyrical Theatre in Feb 2013."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "yfm", name: "YFM 99.2" },
  { id: "sabc1", name: "SABC 1" },
  { id: "radio2000", name: "RADIO 2000" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "gampu-art-1",
      headline: "From fashion to comedy, acting and now his new gig on Radio2000, Isaac Gampu loves it all",
      publication: "News24 / Drum",
      date: "2023",
      action: "Read Article",
      url: "https://www.news24.com/drum/celebs/news/from-fashion-to-comedy-acting-and-now-his-new-gig-on-radio2000-isaac-gampu-loves-it-all-20230425",
      image: "/speakers/Isaac Gampu/Isaac-Gampu-The-Speakers-Firm-two.jpg"
    },
    {
      id: "gampu-art-2",
      headline: "COMEDIAN ISAAC GAMBU SHARES HIS JOURNEY TO COMEDY PROMINENCE",
      publication: "On A Lighter Note",
      date: "2023",
      action: "Listen to Interview",
      url: "https://omny.fm/shows/on-a-lighter-note/comedian-isaac-gambu-shares-his-journey-to-comedy#description",
      image: "/speakers/Isaac Gampu/Isaac-Gampu-The-Speakers-Firm-three.jpg"
    },
    {
      id: "gampu-art-3",
      headline: "Isaac Gampu On Blom Blom With Skhumba And Ndumiso",
      publication: "The Speakers Firm Comedy",
      date: "2022",
      action: "Read Article",
      url: "https://thespeakersfirm.co.za/comedy/isaac-gampu/",
      image: "/speakers/Isaac Gampu/Isaac-Gampu-The-Speakers-Firm-four.jpg"
    }
  ];

  const customGallery = [
    {
      id: "gampu-gal-1",
      src: "/speakers/Isaac Gampu/Isaac-Gampu-The-Speakers-Firm-five.jpg",
      alt: "Isaac Gampu stage",
      caption: "Isaac performing live at a national comedy tour.",
      className: "sm:col-span-2 lg:col-span-2"
    },
    {
      id: "gampu-gal-2",
      src: "/speakers/Isaac Gampu/Isaac-Gampu-The-Speakers-Firm-six.jpg",
      alt: "Isaac Gampu emcee",
      caption: "Hosting a public sector conference program.",
      className: ""
    },
    {
      id: "gampu-gal-3",
      src: "/speakers/Isaac Gampu/Isaac-Gampu-The-Speakers-Firm-seven.jpg",
      alt: "Isaac Gampu radio",
      caption: "Radio presenting session at Radio 2000 studio.",
      className: ""
    }
  ];

  const customVideos = [
    {
      id: "gampu-vid-1",
      label: "Isaac Gampu Standup Showcase",
      youtubeId: "cNEHNcItviY"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Isaac Gampu"
      speakerTitle="Isaac"
      speakerDesignation="Veteran Stand-Up Comedian, Actor & Radio Presenter"
      speakerRole="Pioneering multilingual stand-up comedian and television sitcom lead."
      speakerRef="TSF-IG-29"
      heroBackgroundImage="/speakers/Isaac Gampu/IMG-20190728-WA0003.jpg"
      biographyImage="/speakers/Isaac Gampu/Isaac-Gampu-South-African-comedian-1.jpg"
      bioHook="“Vosloorus-born comedy exporter shaping modern satire and radio hosting across South African airwaves.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="isaac-gampu" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="isaac-gampu" 
        customGallery={customGallery} 
        customIntroText="Dynamic multilingual stand-up, celebrity emcee programs, and corporate culture advisory with Isaac Gampu."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};
