"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "gentleman-of-comedy",
    label: "Gentleman of Comedy",
    subtitle: "Renowned for polished, cross-cultural storytelling style."
  },
  {
    id: "global-comedian",
    label: "Global Comedy Act",
    subtitle: "Performed across Africa, the UK, Europe, and at Switzerland's Montreux Comedy Festival."
  },
  {
    id: "brand-personality",
    label: "Brand Ambassador",
    subtitle: "Widely recognized voice and face of national TV advertising campaigns."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "narrative-connection",
    number: "Theme 01",
    title: "The Narrative Connection.",
    copy: "Connecting diverse corporate and public audiences through down-to-earth, thoughtful, and shared human experiences."
  },
  {
    id: "cross-border-accessibility",
    number: "Theme 02",
    title: "Cross-Border Accessibility.",
    copy: "Tailoring comedy and narrative content to resonate seamlessly across international cultures and global stages."
  },
  {
    id: "emcee-excellence",
    number: "Theme 03",
    title: "Corporate Emcee Excellence.",
    copy: "Hosting high-level corporate and private gatherings with warm humor and booming professional presence."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Ndumiso Lindi – or ‘Roosta’ to his friends – has become known as the gentleman of the South African comedy circuit. He is a brilliant comedian whose accessible and well-constructed narrative has endeared him to audiences of all races across the country.",
  "Ndumiso’s novel blend of nu-school style and solid tradition makes for a brilliant and outstanding South African comedy act. His deep voice, soul-warming smile, booming laughter, original content and seamless delivery leaves you proud to be African and laughing from the belly.",
  "He is an expert at capturing characters and moments directly from life around him and sketching himself for the amusement of his fans. His inspiration comes from what he knows – his family, his experiences, his culture and his music. His sold out second one-man show, 'Diluted People', followed on the success of his first show, 'Colour Mine' which was aired on Comedy Central Africa."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "debonairs", name: "DEBONAIRS PIZZA" },
  { id: "mzansi-magic", name: "MZANSI MAGIC" },
  { id: "comedy-central", name: "COMEDY CENTRAL" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "ndumiso-art-1",
      headline: "NDUMISO LINDI on Family Feuds | Lil Tay | Dricus Du Plessis | Sol Kaya Suspension | Lasizwe | Comedy",
      publication: "YouTube Show",
      date: "2024",
      action: "Watch Interview",
      url: "https://www.youtube.com/watch?v=2wf79qWT9lI",
      image: "/speakers/Ndumiso Lindi/Ndumiso-Lindi-The-Speakers-Firm-2.jpg"
    },
    {
      id: "ndumiso-art-2",
      headline: "Standup comedy legend Ndumiso Lindi performing in Nelson Mandela Bay",
      publication: "The Herald",
      date: "2024",
      action: "Read Article",
      url: "https://www.theherald.co.za/news/2024-07-26-standup-comedy-legend-ndumiso-lindi-performing-in-nelson-mandela-bay/",
      image: "/speakers/Ndumiso Lindi/Ndumiso-Lindi-The-Speakers-Firm-5.jpg"
    },
    {
      id: "ndumiso-art-3",
      headline: "Comedian Ndumiso Lindi on grief, loss and his one-man show Boys don't cry",
      publication: "Drum Magazine",
      date: "2023",
      action: "Read Article",
      url: "https://www.news24.com/drum/celebs/news/comedian-ndumiso-lindi-on-grief-loss-and-his-one-man-show-boys-dont-cry-20230123",
      image: "/speakers/Ndumiso Lindi/Ndumiso-Lindi-The-Speakers-Firm-6.jpg"
    }
  ];

  const customVideos = [
    {
      id: "ndumiso-vid-1",
      label: "Ndumiso Lindi Live Comedy",
      youtubeId: "I0_tDPmCALM"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Ndumiso Lindi"
      speakerTitle=""
      speakerDesignation="Stand-Up Comedian, Master of Ceremonies & Broadcaster"
      speakerRole="The Gentleman of South African comedy and narrative storyteller."
      speakerRef="TSF-NL-24"
      heroBackgroundImage="/speakers/Ndumiso Lindi/Ndumiso-Lindi-The-Speakers-Firm-8.jpg"
      biographyImage="/speakers/Ndumiso Lindi/Ndumiso-Lindi-The-Speakers-Firm-3.jpg"
      bioHook="“Understanding your audience and delivering down-to-earth stories is how you keep people laughing from the belly.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="ndumiso-lindi" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="ndumiso-lindi" 
        customGallery={[]} 
        customIntroText="Thoughtful comedy, premium corporate emceeing, and cross-cultural audience engagement sessions with Ndumiso Lindi."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};
