"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "executive-producer",
    label: "Executive Producer",
    subtitle: "Executive Producer of 702 Weekend Breakfast with Gugs Mhlungu and Global Citizen's Voices of Change."
  },
  {
    id: "radio-broadcaster",
    label: "Broadcaster & Producer @ 702 & 947",
    subtitle: "Accomplished radio broadcaster, show producer, traffic reporter, and commercial voiceover artist."
  },
  {
    id: "moderator-mc",
    label: "Experienced Moderator & MC",
    subtitle: "Facilitator of high-impact conversations, panel dialogues, and energetic stage events."
  },
  {
    id: "wits-honours-writer",
    label: "Published Writer & Performance Artist",
    subtitle: "Honours in Theatre & Performance from Wits University; published in Contemporary South African Monologues and Scenes."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "storytelling-engagement",
    number: "Theme 01",
    title: "Storytelling, Depth & Meaningful Engagement.",
    copy: "Guiding dialogue across diverse platforms and audiences, bringing a thoughtful, dynamic presence that allows for both depth and accessibility in every conversation."
  },
  {
    id: "civic-dialogue",
    number: "Theme 02",
    title: "Civic Spaces, Global Issues & Activism.",
    copy: "Unpacking complex global challenges, civic dialogues, and social change through interactive podcasting and broadcast editorial leadership."
  },
  {
    id: "contemporary-narrative",
    number: "Theme 03",
    title: "Contemporary Narrative, Performance & Literature.",
    copy: "Contributing to the evolving landscape of South African storytelling through theatre, published anthologies, introspective Substack essays, and poetry."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Kgomotso Monyai is a radio broadcaster and producer at 702 and 947, as well as a traffic reporter, voiceover artist, and an experienced moderator, MC, and facilitator of conversations. Her work is rooted in storytelling and meaningful engagement, with a strong ability to guide dialogue across a range of platforms and audiences. She holds an Honours degree in Theatre & Performance from Wits University, where her journey in media began at Voice of Wits before progressing into the commercial radio space.",
  "Over the years, Kgomotso has produced and hosted a wide range of impactful content - spanning in-depth interviews with leading voices across industries to socially relevant conversations that speak directly to the lived experiences of everyday South Africans. Whether on stage or on air, she brings a thoughtful, dynamic presence that allows for both depth and accessibility in every conversation she leads.",
  "A Soweto-born creative and published writer, Kgomotso’s work appears in Between the Pillar and the Post: A Multi-lingual Anthology of Contemporary South African Monologues and Scenes, contributing to the evolving landscape of South African storytelling. She also writes on Substack, where she reflects on themes of love, feminism, and memory with honesty and introspection.",
  "Her voice extends into the podcasting space, where she previously hosted WOT, a platform dedicated to conversations with women navigating success and its many challenges. As a poet, she shares her work on platforms such as WordnSound, continuing to engage audiences through performance and written expression.",
  "A critical thinker with a strong editorial voice, Kgomotso currently serves as the Executive Producer of 702 Weekend Breakfast with Gugs Mhlungu. She is also the Executive Producer of the Global Citizen podcast Voices of Change - an interactive platform that brings together activists, experts, and changemakers to unpack global issues and civic spaces, making them accessible and meaningful to a broad audience."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "702", name: "TALK RADIO 702" },
  { id: "947", name: "947" },
  { id: "global-citizen", name: "GLOBAL CITIZEN" },
  { id: "wits", name: "WITS UNIVERSITY" },
  { id: "vowfm", name: "VOICE OF WITS" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "kgomotso-art-1",
      headline: "Unpacking Unconventional Stories in South African Art",
      publication: "Iono FM",
      date: "2024",
      action: "Listen to Audio",
      url: "https://iono.fm/e/1103955",
      image: "/speakers/Kgomotso%20Monyai/New%20folder%20(2)/Kgomotso-Monyai-The-Speakers-Firm.jpg"
    },
    {
      id: "kgomotso-art-2",
      headline: "Dear Jozi: Hustle, ambition, and opportunity in the City of Gold",
      publication: "Medium",
      date: "2024",
      action: "Read Story",
      url: "https://medium.com/@Momonyai/dear-jozi-11eefa7c344d",
      image: "/speakers/Kgomotso%20Monyai/New%20folder%20(2)/Kgomotso-Monyai-The-Speakers-Firm3.jpg"
    },
    {
      id: "kgomotso-art-3",
      headline: "Starting and Running a Business: The 10 Minute Guide",
      publication: "iono.fm",
      date: "2024",
      action: "Listen to Audio",
      url: "https://iono.fm/e/1094779",
      image: "/speakers/Kgomotso%20Monyai/New%20folder%20(2)/Kgomotso-Monyai-The-Speakers-Firm2.jpg"
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
      speakerDesignation="Radio Broadcaster, Producer, Moderator, MC & Voiceover Artist"
      speakerRole="Executive Producer of 702 Weekend Breakfast and Global Citizen's Voices of Change, broadcaster, and conversation facilitator."
      speakerRef="TSF-KM-03"
      heroBackgroundImage="/speakers/Kgomotso%20Monyai/New%20folder%20(2)/Kgomotso-Monyai-The-Speakers-Firm4.jpg"
      heroMobileBackgroundImage="/speakers/Kgomotso%20Monyai/New%20folder%20(2)/Kgomotso-Monyai-The-Speakers-Firm-mobile.jpg"
      heroImagePosition="object-top"
      biographyImage="/speakers/Kgomotso%20Monyai/New%20folder%20(2)/Kgomotso-Monyai-The-Speakers-Firm5.jpg"
      bioHook="“Whether on stage or on air, she brings a thoughtful, dynamic presence that allows for both depth and accessibility in every conversation she leads.”"
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
        customGallery={[]} 
        customIntroText="Creative broadcasting, events facilitation and production showcases by Kgomotso Monyai."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
