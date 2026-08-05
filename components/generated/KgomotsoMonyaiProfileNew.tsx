"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "award-broadcaster",
    label: "Award-winning Broadcaster",
    subtitle: "Recognised for outstanding contributions in television and radio broadcasting."
  },
  {
    id: "show-producer",
    label: "Show Producer @ 702",
    subtitle: "Producer of the high-profile Aubrey Masango show on Primedia's 702."
  },
  {
    id: "voice-artist",
    label: "Multifaceted Voiceover Artist",
    subtitle: "Sought-after voice for premium brands and narration projects."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "unconventional-storytelling",
    number: "Theme 01",
    title: "Unconventional Storytelling.",
    copy: "Using creative and thought-provoking storytelling methods to connect deeply with contemporary audiences and reflect South African art."
  },
  {
    id: "audience-engagement",
    number: "Theme 02",
    title: "The Art of Audience Engagement.",
    copy: "Practical frameworks for MCs and broadcasters to capture attention, elevate event dynamics, and leave a lasting brand footprint."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Kgomotso Monyai is a Soweto-born creative and broadcaster whose radio journey began at VOWFM, before skyrocketing to Primedia broadcasting, where she is the producer of The Aubrey Masango show at 702 and a presenter/contributor at 947. She aims to contribute to South African Art with thought-provoking and unconventional storytelling.",
  "She is an award-winning Broadcaster and producer. Multifaceted voiceover artist. MC and program director with a passion for hosting memorable events. Known for her ability to engage audiences and keep the energy high throughout any occasion."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "702", name: "TALK RADIO 702" },
  { id: "947", name: "947" },
  { id: "vowfm", name: "VOWFM" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "kgomotso-art-1",
      headline: "Dear Jozi: Hustle, ambition, and opportunity in the City of Gold",
      publication: "Medium",
      date: "2024",
      action: "Read Story",
      url: "https://medium.com/@Momonyai/dear-jozi-11eefa7c344d",
      image: "/speakers/Kgomotso Monyai/Kgomotso-Monyai-The-Speakers-Firm-2.jpg"
    },
    {
      id: "kgomotso-art-2",
      headline: "Starting and Running a Business: The 10 Minute Guide",
      publication: "iono.fm",
      date: "2024",
      action: "Listen to Audio",
      url: "https://iono.fm/e/1094779",
      image: "/speakers/Kgomotso Monyai/Kgomotso-Monyai-The-Speakers-Firm-3.jpg"
    }
  ];

  const customGallery = [
    {
      id: "kgomotso-gal-1",
      src: "/speakers/Kgomotso Monyai/Kgomotso-Monyai-The-Speakers-Firm-4.jpg",
      alt: "Kgomotso Monyai studio recording",
      caption: "Broadcasting live in studio",
      className: "sm:col-span-2 lg:col-span-2"
    },
    {
      id: "kgomotso-gal-2",
      src: "/speakers/Kgomotso Monyai/Kgomotso-Monyai-The-Speakers-Firm-5.jpg",
      alt: "Kgomotso Monyai MC event",
      caption: "Hosting corporate events",
      className: ""
    },
    {
      id: "kgomotso-gal-3",
      src: "/speakers/Kgomotso Monyai/Kgomotso-Monyai-The-Speakers-Firm-6.jpg",
      alt: "Kgomotso Monyai profile shoot",
      caption: "Creative media production and direction",
      className: ""
    }
  ];

  const customVideos = [
    {
      id: "kgomotso-vid-1",
      label: "Kgomotso Monyai - Broadcaster and Creative Reel",
      youtubeId: "4oJj9GsyRkg"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Kgomotso Monyai"
      speakerTitle=""
      speakerDesignation="Broadcaster, Producer & Creative Storyteller"
      speakerRole="Award-winning broadcaster, Primedia producer, and dynamic voiceover artist."
      speakerRef="TSF-KM-03"
      heroBackgroundImage="/speakers/Kgomotso Monyai/Kgomotso-Monyai-The-Speakers-Firm-banner.jpg"
      biographyImage="/speakers/Kgomotso Monyai/Kgomotso-Monyai-The-Speakers-Firm.jpg"
      bioHook="“Storytelling should be unconventional, thought-provoking, and deeply connected to the heartbeat of the people.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="kgomotso-monyai" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="kgomotso-monyai" 
        customGallery={customGallery} 
        customIntroText="Creative broadcasting, events facilitation and production showcases by Kgomotso Monyai."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};
