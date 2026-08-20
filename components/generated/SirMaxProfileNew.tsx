"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "sm-academic",
    label: "Lecturer & On-Air Personality",
    subtitle: "Lecturer at North West University and broadcast presenter on North West FM."
  },
  {
    id: "sm-author",
    label: "Published Author",
    subtitle: "Author of 'Become your portrait' and 'It’s your mentality, not your ability'."
  },
  {
    id: "sm-scholar",
    label: "Multidisciplinary Scholar",
    subtitle: "Holds an MA in International Relations and Postgraduate Business Management qualifications."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "mentality-vs-ability",
    number: "Theme 01",
    title: "Mentality Over Ability.",
    copy: "Shifting cognitive perspectives to overcome institutional inertia and drive high performance."
  },
  {
    id: "strategic-planning",
    number: "Theme 02",
    title: "Strategic Planning & Mind Power.",
    copy: "Using lateral thinking and mental agility models to navigate organizational change and development."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Sir Max is a highly sought-after 'knowledgepreneur', leadership captain, academic, and philosopher who has been professionally speaking since 2003. He is also a lecturer at the North West University (Mafikeng Campus) and a popular on-air personality at North West FM. He is the founder of the Sir Max Corporation and an honorary member of the Golden Key International Honor Society.",
  "With a rich academic background, Sir Max holds a BA in Tourism Management, a Postgraduate Diploma in Business Management, and an MA in International Relations, and has also pursued PhD research. As a strategic and lateral thinker, he specializes in inspirational talks, team building, strategic planning, leadership coaching, management consulting, and organizational development.",
  "Sir Max is the author of two bestselling books: *Become your portrait* and *It’s your mentality, not your ability*. His core philosophy is centered on the 'powers of the mind' and shifting organizational thinking to add immense value to investors, customers, and employees alike. His life's assignment is helping people find answers in their hearts and true meaning for their lives.",
  "Book Sir Max through The Speakers Firm, Africa’s #1 Strategic Speakers Bureau, to deliver high-impact leadership lectures, mindset shift keynotes, and strategic planning sessions at your next corporate event."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "nwu", name: "NORTH WEST UNIVERSITY" },
  { id: "nwfm", name: "NORTH WEST FM" },
  { id: "goldenkey", name: "GOLDEN KEY SOCIETY" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "sm-art-1",
      headline: "Sir Max on Mentality, Leadership, and Mind Power",
      publication: "North West FM / YouTube",
      date: "2024",
      action: "Watch Presentation",
      url: "https://www.youtube.com/watch?v=_g0r1Bbc-Q0",
      image: "/speakers/Sir Max/Sir-Max-The-Speakers-Firm5.jpg"
    },
    {
      id: "sm-art-2",
      headline: "Cultivating organizational value through lateral thinking",
      publication: "Sir Max Corporation Journal",
      date: "2023",
      action: "Read Feature",
      url: "https://taungdailynews.com/2016/07/13/north-west-fm-presenter-inspires-the-youth/",
      image: "/speakers/Sir Max/Sir-Max-The-Speakers-Firm6.jpg"
    },
    {
      id: "sm-art-3",
      headline: "Become your portrait: Finding answers and meaning in life",
      publication: "North West University Academic Press",
      date: "2024",
      action: "Read Profile",
      url: "https://www.listennotes.com/podcasts/sir-max-network/sirmaxnetwork-podcast-guest-28xNsmKyT0h/",
      image: "/speakers/Sir Max/Sir-Max-The-Speakers-Firm10.jpg"
    }
  ];

  const customVideos = [
    {
      id: "sm-vid-1",
      label: "Sir Max on Mind Shift, Leadership, and Capitalizing on Mentality",
      youtubeId: "UWBKtLwMPcI"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Sir Max"
      speakerTitle=""
      speakerDesignation="Leadership Captain, Academic & Author"
      speakerRole="Founder, Sir Max Corporation"
      speakerRef="TSF-SM-67"
      heroBackgroundImage="/speakers/Sir Max/Sir-Max-The-Speakers-Firm7.jpg"
      biographyImage="/speakers/Sir Max/Sir-Max-The-Speakers-Firm8.jpg"
      bioHook="“It's your mentality, not your ability, that makes all the difference in life. Unlock the power of strategic thinking to find meaning and purpose.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="sir-max" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="sir-max" 
        customIntroText="Cognitive shifting keynotes, leadership development workshops, and strategic organizational sessions led by Sir Max."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
