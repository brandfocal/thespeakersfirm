"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "broadcasting-veteran",
    label: "16+ Years Broadcasting",
    subtitle: "Producer and broadcaster across Urban Brew Studios, Newzroom Afrika, and Kaya 959."
  },
  {
    id: "safta-nominated",
    label: "SAFTA-Nominated Presenter",
    subtitle: "On-screen presenter for YO.TV Live, Blue Couch, One Day Leader, and Future Leaders."
  },
  {
    id: "global-voice-artist",
    label: "Global Voice Artist",
    subtitle: "5 years as the promotional voice of Walt Disney across Africa and the Middle East."
  },
  {
    id: "youth-visionary",
    label: "Youth Leadership Visionary",
    subtitle: "Senior youth leader and founder of the AL!VE youth empowerment movement."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "conversation-architecture",
    number: "Theme 01",
    title: "Conversation Architecture & Executive Moderation.",
    copy: "Leading discussions that are insightful, engaging, and authentic, connecting diverse audiences, corporate executives, and high-level stakeholders with ease."
  },
  {
    id: "storytelling-production",
    number: "Theme 02",
    title: "Compelling Storytelling & Broadcast Media Production.",
    copy: "Combining creative broadcast storytelling with impactful audience engagement to drive measurable results and shape culture across platforms."
  },
  {
    id: "youth-civic-leadership",
    number: "Theme 03",
    title: "Youth Leadership, Purpose & Civic Empowerment.",
    copy: "Discipling and empowering the next generation with ethical leadership, nation building, resilience, and community transformation."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Jessica Dube is a seasoned professional speaker, executive master of ceremonies, moderator, and media professional, who speaks with resonance, and carries audiences with remarkable flair. With more than 16 years of experience in broadcasting and strategic communications, Jessica is a gifted conversation architect, who leads discussions that are insightful, engaging, and real. Her natural warmth and undeniable substance, allows audiences to connect and engage with ease.",
  "As a broadcast producer, Jessica has produced talk, current affairs, and entertainment content for leading media organisations including Urban Brew Studios, Newzroom Afrika, and Kaya 959. Her work is recognised for combining compelling storytelling with meaningful engagement, that grows audiences and delivers results.",
  "Jessica is a SAFTA-nominated television presenter, with her on-screen work including SABC 1's YO.TV Live, Blue Couch, One Day Leader, and Future Leaders, as well as One Gospel special broadcasts on DStv. She is a sought-after MC, keynote speaker, and discussion moderator, having hosted and lead impactful events and conversations for entities including Jaguar, The Change Collective Africa, the U.S. Embassy in South Africa, the African Union, EmpowaWorx, and The Frank Dialogue series with Prof. JJ Tabane, among many other esteemed platforms & events.",
  "As an international voice artist, Jessica has mastered her craft since 2010, in conversational, soft-sell, hard sell, and corporate voice work. She served for five years as the promotional voice of Walt Disney across Africa and the Middle East and has voiced campaigns for major brands including KFC, Vodacom, Standard Bank, Kellogg's, Clover Krush, and HiFi Corporation, among countless other well recognized brands.",
  "From news and current affairs to popular culture, Jessica offers researched insights and critical analysis across South Africa's most notable news channels, lifestyle shows, and podcasts on topics of civic engagement, nation building, youth development, and women's empowerment. She also serves as a senior leader over youth ministry, discipling hundreds of young leaders and founding the cornerstone 'AL!VE' youth gathering."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "disney", name: "WALT DISNEY" },
  { id: "newzroom", name: "NEWZROOM AFRIKA" },
  { id: "kaya959", name: "KAYA 959" },
  { id: "urbanbrew", name: "URBAN BREW STUDIOS" },
  { id: "usembassy", name: "U.S. EMBASSY" }
];

export const AboutTeamSection = () => {
  const customMedia: any[] = [];

  const customVideos = [
    {
      id: "jessica-vid-1",
      label: "Jessica Dube - Broadcast Producer, Presenter & Global Voice Artist",
      youtubeId: "VHrJM-9U_IM"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Jessica Dube"
      speakerTitle=""
      speakerDesignation="Broadcast Producer, Executive MC, Moderator & Global Voice Artist"
      speakerRole="SAFTA-nominated television presenter, conversation architect, and global voice artist."
      speakerRef="TSF-JD-48"
      heroBackgroundImage="/speakers/Jessica Dube/Jessica-Dube-The-Speakers-Firm4.jpg"
      biographyImage="/speakers/Jessica Dube/Jessica-Dube-The-Speakers-Firm2.jpg"
      bioHook="“Combining compelling storytelling with meaningful engagement that connects, empowers, and moves audiences.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="jessica-dube" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="jessica-dube" 
        customGallery={[]} 
        customIntroText="Executive event facilitation, live television hosting, and strategic conversation dialogues led by Jessica Dube."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
