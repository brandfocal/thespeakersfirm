"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "comedian-of-the-year",
    label: "Comedian of the Year",
    subtitle: "Crowned Comedian of the Year at the 11th Annual Savanna Comics Choice Awards (2024)."
  },
  {
    id: "versatile-host",
    label: "Premium Corporate Host",
    subtitle: "Charismatic master of ceremonies for award galas, corporate festivals, and executive summits."
  },
  {
    id: "tv-presenter",
    label: "Television Presenter",
    subtitle: "Host of major television productions including season 5 of 'Most Ridiculous'."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "charismatic-elevation",
    number: "Theme 01",
    title: "Charismatic Event Elevation.",
    copy: "Unifying diverse corporate audiences through dynamic hosting, high energy, and infectious stage presence."
  },
  {
    id: "social-satire",
    number: "Theme 02",
    title: "Insightful Social Satire.",
    copy: "Blending lighthearted humor with sharp commentary on modern culture, commercial trends, and executive life."
  },
  {
    id: "laughter-connection",
    number: "Theme 03",
    title: "Authentic Laughter & Connection.",
    copy: "Leveraging humor as an essential tool for team-building, stress relief, and cross-cultural corporate engagement."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "At The Speakers Firm, we proudly represent Mpho Popps Modikoane, one of South Africa’s most charismatic and beloved comedians, actors, and entertainers. With a magnetic stage presence and razor-sharp wit, Mpho Popps has become a household name whose humour, authenticity, and energy transcend generations and audiences alike.",
  "Mpho first captured the hearts of South Africans through his unforgettable appearance on Strictly Come Dancing, where his charm, spontaneity, and comedic timing made him an instant fan favourite. Since then, he has gone on to become one of the country’s most in-demand comedians and entertainers, headlining major comedy festivals, television shows, and corporate events with his signature blend of intelligence, humour, and heart.",
  "Whether performing stand-up, hosting awards, or entertaining executives at corporate galas, Mpho Popps delivers performances that are both funny and thought-provoking, offering social commentary that is as insightful as it is hilarious. His natural ability to read a room, connect across cultures, and elevate any event with effortless humour has cemented his reputation as one of the most versatile comedic talents in the country."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "savanna", name: "SAVANNA COMICS CHOICE" },
  { id: "comedy-central", name: "COMEDY CENTRAL" },
  { id: "dstv", name: "DSTV" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "mpho-art-1",
      headline: "Mpho Popps wins big at the 11th Annual Savanna Comics Choice Awards",
      publication: "IOL",
      date: "2024",
      action: "Read Article",
      url: "https://iol.co.za/entertainment/celebrity-news/local/2024-04-15-mpho-popps-wins-big-at-the-11th-annual-savanna-comics-choice-awards/",
      image: "/speakers/Mpho Popps/Mpho-Popps-The-Speakers-Firm-2.jpg"
    },
    {
      id: "mpho-art-2",
      headline: "Mpho Popps takes the helm of season 5 of ‘Most Ridiculous’ and promises unmatched madness, hilarity",
      publication: "IOL",
      date: "2024",
      action: "Read Article",
      url: "https://iol.co.za/entertainment/tv/local/2024-02-01-mpho-popps-takes-the-helm-of-season-5-of-most-ridiculous-and-promises-unmatched-madness-hilarity/",
      image: "/speakers/Mpho Popps/Mpho-Popps-The-Speakers-Firm-3.jpg"
    },
    {
      id: "mpho-art-3",
      headline: "Mpho Popps, Vafa Naraghi and Khanyisa Bunu lead new stand-up special ‘The F-Show’",
      publication: "The Star",
      date: "2024",
      action: "Read Article",
      url: "https://iol.co.za/the-star/news/2024-08-23-mpho-popps-vafa-naraghi-and-khanyisa-bunu-lead-new-stand-up-special-the-f-show/",
      image: "/speakers/Mpho Popps/Mpho-Popps-The-Speakers-Firm-4.jpg"
    }
  ];

  const customGallery = [
    {
      id: "mpho-gal-1",
      src: "/speakers/Mpho Popps/Mpho-Popps-The-Speakers-Firm-5.jpg",
      alt: "Mpho Popps emcee",
      caption: "Hosting a high-profile corporate awards gala.",
      className: "sm:col-span-2 lg:col-span-2"
    },
    {
      id: "mpho-gal-2",
      src: "/speakers/Mpho Popps/Mpho-Popps-The-Speakers-Firm-6.jpg",
      alt: "Mpho Popps live",
      caption: "Connecting with the audience during a live comedy gig.",
      className: ""
    },
    {
      id: "mpho-gal-3",
      src: "/speakers/Mpho Popps/Mpho-Popps-The-Speakers-Firm.jpg",
      alt: "Mpho Popps portrait",
      caption: "Creative director and host headshot.",
      className: ""
    }
  ];

  const customVideos = [
    {
      id: "mpho-vid-1",
      label: "Mpho Popps Comedy Showcase",
      youtubeId: "x6t2e0roe2M"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Mpho Popps"
      speakerTitle="Mpho Popps Modikoane"
      speakerDesignation="Charismatic Comedian, Actor, Presenter & Master of Ceremonies"
      speakerRole="One of South Africa's most charismatic, award-winning comedic personalities."
      speakerRef="TSF-MP-25"
      heroBackgroundImage="/speakers/Mpho Popps/EAEZKeIWwAA_wBZ.jpg"
      biographyImage="/speakers/Mpho Popps/Mpho-Popps.jpg"
      bioHook="“Laughter is not just entertainment, it is a powerful form of connection, healing, and cultural celebration.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="mpho-popps" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="mpho-popps" 
        customGallery={customGallery} 
        customIntroText="Versatile corporate comedy hosting, brand visibility strategy, and executive entertainment by Mpho Popps."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};
