"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "jm-ceo",
    label: "CEO, Farmers of Thought",
    subtitle: "Leads an institute focused on raising consciousness and improving the human experience."
  },
  {
    id: "jm-theologian",
    label: "Theologian & Philosopher",
    subtitle: "Graduate of Andrews University (USA) with a Degree in Philosophy (BA Theology)."
  },
  {
    id: "jm-expert",
    label: "Multidisciplinary Expert",
    subtitle: "Outcome-based qualifications from the ILO; consultant for Vodacom, Absa, PRASA, and SALGA."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "pan-african-consciousness",
    number: "Theme 01",
    title: "Pan-African Consciousness.",
    copy: "Unpacking African culture, identity, and mental decolonization to build localized strategic growth."
  },
  {
    id: "change-management",
    number: "Theme 02",
    title: "Change Management & Consultancy.",
    copy: "Facilitating corporate motivation, crisis management, business negotiations, and strategic sessions."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Maponga Joshua III (also known as Bishop Joshua Maponga) has spent years in the corporate, religious and social space—a time that has made him own the title a ‘creative powerhouse’. Maponga is the CEO of the institute Farmers of Thought, a core business to raise consciousness and improve the quality of human experiences.",
  "He is a pragmatic African citizen with a global view: “Think globally and act locally” as he says it. He plays a dozen musical instruments, and is an author, life coach and social entrepreneur—indeed, he is a man of no limitations. Maponga is a graduate of Andrews University (Berrien Springs, Michigan, USA), holding a Degree in Philosophy (BA Theology) and Personal Ministries, with a variety of Outcome-based qualifications from international institutes such as the ILO (International Labor Organization).",
  "He has a wide range of experience in branding, banking, non-profit organisations, and the project management space with companies such as Vodacom, SAPO, Absa, World Vision, SETA, PRASA, SALGA, Milpark College, and the SAPS. His involvement in the corporate space includes motivation, crisis management, business negotiations, strategic sessions, change management, material development and turn-key solutions in consultancy.",
  "Book Joshua Maponga through The Speakers Firm, Africa’s #1 Strategic Speakers Bureau, to bring Pan-African philosophy, strategic consciousness lectures, and social change insights to your next corporate or community event."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "farmersofthought", name: "FARMERS OF THOUGHT" },
  { id: "absa", name: "ABSA" },
  { id: "worldvision", name: "WORLD VISION" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "jm-art-1",
      headline: "Joshua Maponga on His Message for Africa & where He Stands with the Bible",
      publication: "YouTube / Maponga Joshua III",
      date: "2024",
      action: "Watch Interview",
      url: "https://www.youtube.com/watch?v=ULW7sHGNAvM",
      image: "/speakers/Joshua Maponga/joshua-maponga-the-speakers-firm-4.jpg"
    },
    {
      id: "jm-art-2",
      headline: "Joshua Maponga on Christianity, Culture, Politics & Decolonisation",
      publication: "The Denny J Show",
      date: "2024",
      action: "Watch Episode",
      url: "https://www.youtube.com/watch?v=QGOpYbftYOQ",
      image: "/speakers/Joshua Maponga/Joshua-Maponga-The-Speakers-Firm-6.jpg"
    },
    {
      id: "jm-art-3",
      headline: "Joshua Maponga | Zimbabwe, Gold Mafia, Christianity & BRICS",
      publication: "SABC News / YouTube",
      date: "2023",
      action: "Watch Analysis",
      url: "https://www.youtube.com/watch?v=xEBTkQRMzxI",
      image: "/speakers/Joshua Maponga/joshua-maponga-the-speakers-firm.jpg"
    }
  ];

  const customVideos = [
    {
      id: "jm-vid-1",
      label: "Joshua Maponga on Decolonisation & African Heritage",
      youtubeId: "QGOpYbftYOQ"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Joshua Maponga"
      speakerTitle=""
      speakerDesignation="Philosopher & Pan-African Cultural Visionary"
      speakerRole="CEO of Farmers of Thought & Author"
      speakerRef="TSF-JM-64"
      heroBackgroundImage="/speakers/Joshua Maponga/joshua-maponga-the-speakers-firm-9.jpg"
      biographyImage="/speakers/Joshua Maponga/joshua-maponga-the-speakers-firm-5.jpg"
      bioHook="“A pragmatic African citizen with a global view, dedicated to raising consciousness and improving the quality of the human experience.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="joshua-maponga" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="joshua-maponga" 
        customIntroText="Motivational keynotes, Pan-African consciousness lectures, and decolonisation strategic dialogues led by Joshua Maponga."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
