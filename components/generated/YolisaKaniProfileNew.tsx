"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "yk-cbdo",
    label: "Chief Business Development Officer",
    subtitle: "CBDO at a State Owned Entity responsible for group commercial and African trade expansions."
  },
  {
    id: "yk-sector",
    label: "20+ Years Transport & Logistics Veteran",
    subtitle: "Expertise in transport logistics, the built environment, and infrastructure development."
  },
  {
    id: "yk-lecturer",
    label: "LSE Guest Lecturer",
    subtitle: "Invited as a guest lecturer by the London School of Economics."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "infrastructure-growth",
    number: "Theme 01",
    title: "Infrastructure & Economic Growth.",
    copy: "Unpacking opportunities for regional collaborative infrastructure, logistics partnerships, and commercial strategies."
  },
  {
    id: "women-leadership",
    number: "Theme 02",
    title: "Women in Leadership & Society.",
    copy: "Engaging in critical conversations about the challenges, roles, and representation of women in corporate boardrooms."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Ms. Yolisa Kani is an executive with over twenty years of experience in the transport and logistics sector, the built environment and infrastructure development. She currently holds the position of Chief Business Development Officer (CBDO) at a State Owned Entity responsible for group commercial and the Africa business. Yolisa is an international speaker and has been on a few occasions invited as a guest lecturer by the London School of Economics. From earlier on, she has always enjoyed using her voice to engage on everyday issues that affect women in leadership roles and in society and is no stranger to difficult conversations.",
  "Yolisa enjoys reading and the great outdoors, she summited both Mt Kilimanjaro and Salkantay in South America. Her leadership is defined by courage, high executive posture, and a deep commitment to sustainable infrastructure development in Africa.",
  "Book Yolisa Kani through The Speakers Firm, A Leading African Speakers Bureau, to bring infrastructure strategy briefings, crisis leadership keynotes, and women-in-leadership conversations to your next boardroom or conference."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "transnet", name: "TRANSNET" },
  { id: "lse", name: "LONDON SCHOOL OF ECONOMICS" },
  { id: "saic", name: "SA INVESTMENT CONFERENCE" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "yk-art-1",
      headline: "Yolisa Kani, Transnet Chief Business Development Officer",
      publication: "Transnet Episodes / YouTube",
      date: "2024",
      action: "Watch Episode",
      url: "https://www.youtube.com/watch?v=dLvN4EBnT30",
      image: "/speakers/Yolisa Kani/Yolisa-Kani-The-Speakers-Firm3.jpg"
    },
    {
      id: "yk-art-2",
      headline: "Transnet Aims To Revive South Africa’s Economy By Investing In Infrastructure",
      publication: "TechFinancials",
      date: "2023",
      action: "Read Article",
      url: "https://techfinancials.co.za/2023/04/18/transnet-aims-to-revive-south-africas-economy-by-investing-in-infrastructure/",
      image: "/speakers/Yolisa Kani/Yolisa-Kani-The-Speakers-Firm4.jpg"
    },
    {
      id: "yk-art-3",
      headline: "Transnet looks to rest of Africa for collaborative relationships",
      publication: "The Africa Report",
      date: "2023",
      action: "Read Article",
      url: "https://www.theafricareport.com/314494/south-africa-transnet-looks-to-rest-of-africa-for-collaborative-relationships/",
      image: "/speakers/Yolisa Kani/Yolisa-Kani-The-Speakers-Firm5.jpg"
    }
  ];

  const customVideos = [
    {
      id: "yk-vid-1",
      label: "Yolisa Kani on Infrastructure Collaboration & Regional Integration",
      youtubeId: "dLvN4EBnT30"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Yolisa Kani"
      speakerTitle=""
      speakerDesignation="Infrastructure & Logistics Executive"
      speakerRole="Chief Business Development Officer & LSE Guest Lecturer"
      speakerRef="TSF-YK-75"
      heroBackgroundImage="/speakers/Yolisa Kani/Yolisa-Kani-The-Speakers-Firm2.jpg"
      biographyImage="/speakers/Yolisa Kani/Yolisa-Kani-The-Speakers-Firm8.jpg"
      bioHook="“Collaborating regionally and investing in infrastructure development to drive Africa’s future commercial success.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="yolisa-kani" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="yolisa-kani" 
        customIntroText="Group commercial strategy panels, transport logistics keynotes, and women-in-leadership dialogues led by Yolisa Kani."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
