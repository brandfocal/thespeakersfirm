"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "sk-coach",
    label: "Philosopher & Life Coach",
    subtitle: "29+ years leading Shimmy Kotu Ministries and mentoring in mental health and family dynamics."
  },
  {
    id: "sk-public",
    label: "Former EMS Chief of Staff",
    subtitle: "Served in critical civic roles including Executive Director of Prison Fellowship South Africa."
  },
  {
    id: "sk-author",
    label: "Relationship & Faith Author",
    subtitle: "Provides deep guidance on values-driven leadership and family restoration."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "mens-transformation",
    number: "Theme 01",
    title: "Manhood & Family Restoration.",
    copy: "Tackling the modern challenges of manhood, fatherhood, emotional alignment, and family leadership."
  },
  {
    id: "values-leadership",
    number: "Theme 02",
    title: "Values-Driven Strategic Leadership.",
    copy: "Equipping executives and communities with strategies for resilience, personal accountability, and ethical growth."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "At The Speakers Firm, we proudly represent Dr. Shimmy Kotu, a powerful voice in leadership, faith, and men’s transformation. As a respected Life Coach, Philosopher, Author, and Strategist, Dr. Kotu’s work speaks directly to the heart of leadership, family, and emotional well-being. His message transcends pulpit and podium, guiding men, leaders, and communities to restore purpose, rebuild identity, and reclaim balance in a demanding world.",
  "With over 29 years of experience as Founder and Chairman of Shimmy Kotu Ministries, Dr. Kotu has become a trusted mentor in the areas of mental health, fatherhood, faith, and leadership development. His leadership journey includes impactful roles as Executive Director of Prison Fellowship South Africa, Chief of Staff for Johannesburg Emergency Management Services, and Lecturer at the Transvaal Emergency Medical Training College, where he championed values-driven leadership and personal accountability.",
  "A gifted communicator, Dr. Kotu brings deep insight to men’s gatherings, executive retreats, and corporate wellness programmes, equipping leaders to navigate complexity with clarity, empathy, and conviction. His talks address the modern challenges of manhood, from emotional resilience and purpose alignment to family restoration and leadership integrity, making him one of the most relevant and relatable voices in today’s leadership landscape.",
  "Book Dr. Shimmy Kotu through The Speakers Firm, Africa’s #1 Strategic Speakers Bureau, for your next men’s conference, leadership strategy session, or mental wellness retreat, and inspire your teams to lead with authenticity, courage, and faith."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "prisonfellowship", name: "PRISON FELLOWSHIP SA" },
  { id: "johannesburgems", name: "JOHANNESBURG EMS" },
  { id: "skministries", name: "SHIMMY KOTU MINISTRIES" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "sk-art-1",
      headline: "Late Night Conversation: Christian Defenders Protest State Control",
      publication: "POWER 98.7 / Late Night Conversation",
      date: "2024",
      action: "Listen to Podcast",
      url: "https://omny.fm/shows/late-night-conversation/christian-defenders-protest-against-crl-rights-commission-and-state-control-of-faith-sector#description",
      image: "/speakers/Shimmy Kotu/Dr-Shimmy-Kotu-The-Speakers-Firm-second.jpg"
    },
    {
      id: "sk-art-2",
      headline: "Thabo Mdluli is joined by Joshua Maponga and Dr Shimmy Kotu",
      publication: "Newzroom Afrika / YouTube",
      date: "2023",
      action: "Watch Discussion",
      url: "https://www.youtube.com/watch?v=Qo4NdExfoW4",
      image: "/speakers/Shimmy Kotu/Dr-Shimmy-Kotu-The-Speakers-Firm-third.jpg"
    },
    {
      id: "sk-art-3",
      headline: "Dr Shimmy Kotu | The Days Of Glory",
      publication: "Days Of Glory / YouTube",
      date: "2022",
      action: "Watch Sermon",
      url: "https://www.youtube.com/watch?v=EYOPGjwtiEg",
      image: "/speakers/Shimmy Kotu/Dr-Shimmy-Kotu-The-Speakers-Firm-fourth.jpg"
    }
  ];

  const customVideos = [
    {
      id: "sk-vid-1",
      label: "Dr Shimmy Kotu: Faith, Regulation & Community",
      youtubeId: "K6IUdhcVH-M"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Dr. Shimmy Kotu"
      speakerTitle=""
      speakerDesignation="Life Coach, Marriage Counsellor & Strategist"
      speakerRole="Founder of Shimmy Kotu Ministries & Leadership Mentor"
      speakerRef="TSF-SK-29"
      heroBackgroundImage="/speakers/Shimmy Kotu/Dr-Shimmy-Kotu-The-Speakers-Firm5.jpg"
      biographyImage="/speakers/Shimmy Kotu/Dr-Shimmy-Kotu-The-Speakers-Firm7.jpg"
      bioHook="“Restoring purpose, rebuilding identity, and reclaiming balance for men and leaders in a demanding world.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="dr-shimmy-kotu" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="dr-shimmy-kotu" 
        customIntroText="Values-driven leadership retreats, masculinity panels, and mental wellness keynotes led by Dr. Shimmy Kotu."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
