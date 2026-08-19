"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "gm-prisoner",
    label: "Robben Island Alumnus",
    subtitle: "Spent six years as a political prisoner before obtaining a Fulbright-Hayes Fellowship."
  },
  {
    id: "gm-leader",
    label: "Corporate Finance Pioneer",
    subtitle: "Former Head of African Bank, Chair of FABCOS, and current Chairman of Thamaga Holdings."
  },
  {
    id: "gm-bee",
    label: "BEE Architect",
    subtitle: "Pioneered early economic transformation and black economic empowerment frameworks in SA."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "resilient-leadership",
    number: "Theme 01",
    title: "Resilient Leadership.",
    copy: "Lessons in overcoming adversity, maintaining integrity, and leading teams through periods of massive systemic transition."
  },
  {
    id: "corporate-governance",
    number: "Theme 02",
    title: "Corporate Governance & Ethics.",
    copy: "Structuring corporate governance, risk intelligence, and audit committees to ensure long-term value creation."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Gaby Magomola is a highly respected South African business leader, author, and political activist who has dedicated over 30 years to corporate finance, banking, and general management across multiple countries. He currently serves as the Chairman of Thamaga Holdings and is a Director and Chairman of the Audit Committee for Global Asset Management, which is listed on the JSE.",
  "Gaby’s journey is one of incredible resilience. He spent six years as a political prisoner on Robben Island. Following his release, he was awarded a prestigious Fulbright-Hayes Fellowship, allowing him to pursue an MBA in International Finance from Ball State University (USA) and gain valuable financial experience in the United States, including an internship and tenure at Citibank.",
  "Upon returning to South Africa in the mid-1980s, Gaby became a central figure in business transformation, heading African Bank and chairing FABCOS (a coalition of black business organizations). He also served as a Divisional Director at the CSIR and played a pivotal role in early initiatives that led to the development of Black Economic Empowerment (BEE).",
  "Book Gaby Magomola through The Speakers Firm, Africa’s #1 Strategic Speakers Bureau, to bring seasoned business leadership, corporate governance insights, and powerful stories of personal resilience to your next conference or corporate event."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "thamaga", name: "THAMAGA HOLDINGS" },
  { id: "citibank", name: "CITIBANK" },
  { id: "unisa", name: "UNISA" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "gm-art-1",
      headline: "Gaby Magomola on corporate governance and economic transformation",
      publication: "Thamaga Holdings News",
      date: "2024",
      action: "Watch Discussion",
      url: "https://www.youtube.com/watch?v=GoFpDfLxYPM",
      image: "/speakers/Gaby Magomola/Gaby-Magomola-The-Speakers-Firm2.jpg"
    },
    {
      id: "gm-art-2",
      headline: "From Robben Island to Wall Street: The Gaby Magomola Story",
      publication: "Global Asset Management Profile",
      date: "2023",
      action: "Read Profile",
      url: "https://thespeakersfirm.co.za/inspirational-keynote-speakers/gaby-magomola/",
      image: "/speakers/Gaby Magomola/Gaby-Magomola-The-Speakers-Firm4.jpg"
    },
    {
      id: "gm-art-3",
      headline: "Black Economic Empowerment: Laying the Foundations in the 1980s",
      publication: "History of BEE Feature",
      date: "2024",
      action: "Read Memoir Excerpt",
      url: "https://thespeakersfirm.co.za/inspirational-keynote-speakers/gaby-magomola/",
      image: "/speakers/Gaby Magomola/Gaby-Magomola-The-Speakers-Firm6.jpg"
    }
  ];

  const customVideos = [
    {
      id: "gm-vid-1",
      label: "Gaby Magomola on Leadership, Activism and Business in South Africa",
      youtubeId: "GoFpDfLxYPM"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Gaby Magomola"
      speakerTitle=""
      speakerDesignation="Chairman of Thamaga Holdings & Author"
      speakerRole="Robben Island Alumnus & Finance Leader"
      speakerRef="TSF-GM-66"
      heroBackgroundImage="/speakers/Gaby Magomola/Gaby-Magomola-The-Speakers-Firm8.jpg"
      biographyImage="/speakers/Gaby Magomola/Gaby-Magomola-The-Speakers-Firm7.jpg"
      bioHook="“From Robben Island to corporate leadership, proving that resilience, ethical governance, and economic inclusion are the keys to a prosperous nation.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="gaby-magomola" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="gaby-magomola" 
        customIntroText="Ethical governance dialogues, resilience keynotes, and economic empowerment discussions led by Gaby Magomola."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
