"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "rising-star",
    label: "Rising Comedy Star",
    subtitle: "A highly acclaimed stand-up comedian bringing fresh and energetic perspectives from Orange Farm."
  },
  {
    id: "academic-mc",
    label: "Confident Master of Ceremonies",
    subtitle: "Class clown turned confident emcee and host for campus and public functions."
  },
  {
    id: "mentorship-focus",
    label: "Comedic Mentor",
    subtitle: "Dedicated to using comedy to help people overcome hardships and mentoring upcoming artists."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "confidence-presence",
    number: "Theme 01",
    title: "Confidence & Stage Presence.",
    copy: "Transitioning from high school hobby to high-confidence stand-up and emcee performance that commands attention."
  },
  {
    id: "community-storytelling",
    number: "Theme 02",
    title: "Community Storytelling.",
    copy: "Drawing hilarious and relatable narrative comedy from life in Orange Farm and student culture."
  },
  {
    id: "social-healing",
    number: "Theme 03",
    title: "Social Healing Through Comedy.",
    copy: "Utilizing narrative humor to help corporate teams relieve stress, build trust, and 'laugh their problems away'."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Hailing all the way from Orange Farm, Summary has made his mark in the comedy industry and has rubbed shoulders – forgive the pun – with the likes of renowned comedian Mashabela Galane. It started as just a hobby at school when Summary was often Master of Ceremonies during school functions. He also knew that he loved comedy but the idea of him doing it did not get to him. It was because of lack of information that was not presented to him that it took so long for him to make his first appearance.",
  "Summary was advised at a tender age, while he was in high school to study something that was in line with his talent. Instead, after completing his matric he came across a learnership which he did for six years, and while he was at it his colleagues advised him that he was in the wrong field. It was then that he resigned from the learnership and enrolled with the University of Johannesburg`s faculty of Management.",
  "The likes of Professor Duplessis are also witness to this young and talented comedian`s work. Another reason for Summary not taking comedy seriously was that he lacked confidence, but this changed over time as he was the class clown in the lecture room, and subsequently oozed the necessary confidence level. UJ FM has so far hosted this comedian various times.",
  "Summary’s goal is not to become famous because of his talent, but to use his talent wisely to make people laugh their problems away, and also to help up and coming comedians. “Summary is becoming more popular and is doing a marvellous job on stage; therefore the future is bright in the entertainment industry for me."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "ujfm", name: "UJFM 95.4" },
  { id: "uj", name: "UNIVERSITY OF JOHANNESBURG" },
  { id: "drum", name: "DRUM MAGAZINE" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "summary-art-1",
      headline: "Meet comedian Summary, the ‘funniest man God ever created’",
      publication: "Drum Magazine / News24",
      date: "2020",
      action: "Read Article",
      url: "https://www.news24.com/drum/Celebs/News/meet-comedian-summary-the-funniest-man-god-ever-created-20201120",
      image: "/speakers/Summary/Summary-The-Speakers-Firm-1.jpg"
    },
    {
      id: "summary-art-2",
      headline: "Utlwa di Jokes with Summary Comedian | Latest African comedy 2025",
      publication: "YouTube",
      date: "2025",
      action: "Watch Interview",
      url: "https://www.youtube.com/watch?v=qwoL8o9qQ9k",
      image: "/speakers/Summary/Summary-The-Speakers-Firm-2.jpg"
    },
    {
      id: "summary-art-3",
      headline: "Summary Comedian Interview | South African | Comedy Heavy Weights",
      publication: "Heavyweights International Comedy",
      date: "2024",
      action: "Watch Interview",
      url: "https://www.youtube.com/watch?v=ZkIQ5j0HD_I",
      image: "/speakers/Summary/Summary-The-Speakers-Firm-3.jpg"
    }
  ];

  const customGallery = [
    {
      id: "summary-gal-1",
      src: "/speakers/Summary/Summary-The-Speakers-Firm-2.jpg",
      alt: "Summary live show",
      caption: "Summary live on stage delivering his stand-up comedy.",
      className: "sm:col-span-2 lg:col-span-2"
    },
    {
      id: "summary-gal-2",
      src: "/speakers/Summary/Summary-The-Speakers-Firm-3.jpg",
      alt: "Summary portrait",
      caption: "Studio photo of Summary.",
      className: ""
    },
    {
      id: "summary-gal-3",
      src: "/speakers/Summary/Summary-The-Speakers-Firm.jpg",
      alt: "Summary promo card",
      caption: "Promotional card for corporate workshops.",
      className: ""
    }
  ];

  const customVideos = [
    {
      id: "summary-vid-1",
      label: "Summary Comedian Interview",
      youtubeId: "LoZwKjm6X0M"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Summary"
      speakerTitle="Summary"
      speakerDesignation="Stand-Up Comedian, Event Emcee & Media Personality"
      speakerRole="Rising stand-up comedian bringing Orange Farm storytelling to national stages."
      speakerRef="TSF-SC-31"
      heroBackgroundImage="/speakers/Summary/Summary-The-Speakers-Firm.jpg"
      biographyImage="/speakers/Summary/Summary-The-Speakers-Firm-1.jpg"
      bioHook="“Using comedy wisely to make people laugh their problems away, and helping the next generation rise.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="summary" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="summary" 
        customGallery={customGallery} 
        customIntroText="Corporate team building comedy, student emcee masterclasses, and community outreach engagements with Summary."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};
