"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "lm-nomatshawe",
    label: "Founder & Director, Nomatshawe Consulting",
    subtitle: "Over 17 years in audit, finance, and strategic corporate consulting."
  },
  {
    id: "lm-bbc",
    label: "VP for Professionals, Black Business Council",
    subtitle: "Advocates for corporate transformation and professional ethics across Africa."
  },
  {
    id: "lm-yali",
    label: "YALI Fellow & Global Influencer Nominee",
    subtitle: "Aligned with Aspen Global Leadership Network; named on Drum Top 50 Women Power List."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "governance-renewal",
    number: "Theme 01",
    title: "Ethics, Governance & Renewal.",
    copy: "Driving socio-economic renewal and robust corporate governance within emerging markets."
  },
  {
    id: "corporate-transformation",
    number: "Theme 02",
    title: "Transformation & Women in Leadership.",
    copy: "Navigating difficult conversations to champion women in leadership roles and build inclusive executive structures."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Linda Maqoma is a formidable voice in leadership, governance, and transformation, whose influence continues to redefine excellence across Africa’s corporate, public, and civic sectors. With over 17 years of experience in audit, finance, and strategic leadership, she is the Founder and Director of Nomatshawe Consulting Group. She currently serves as Interim Chair and Non-Executive Director at Cornerstone Performance Solutions, Vice President for Professionals at the Black Business Council, and Global Advisory Board Member at Makosi Audit.",
  "Linda is a Fellow of the Young African Leadership Initiative (YALI) and is aligned with the Aspen Global Leadership Network. Her accolades include being an Honorary Member of the Golden Key International Honour Society, a 2024 Global Women of Influence Awards nominee, and an honouree on the Drum Magazine Top 50 Women Power List. From early on, she has always enjoyed using her voice to engage on everyday issues that affect women in leadership roles and in society, and is no stranger to difficult conversations.",
  "Book Linda Maqoma through The Speakers Firm, A Leading African Speakers Bureau, to bring corporate governance briefings, leadership transformation keynotes, and ethical transformation seminars to your next corporate or civic event."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "nomatshawe", name: "NOMATSHAWE CONSULTING" },
  { id: "bbc", name: "BLACK BUSINESS COUNCIL" },
  { id: "saica", name: "SAICA COUNCIL" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "lm-art-1",
      headline: "Linda Maqoma: Navigating Audit and Strategic Corporate Leadership",
      publication: "Nomatshawe Consulting Insights",
      date: "2024",
      action: "Read Brief",
      url: "https://www.youtube.com/watch?v=xCFSwG5K090",
      image: "/speakers/Linda Maqoma/Linda Maqoma.jpeg"
    },
    {
      id: "lm-art-2",
      headline: "BBC VP Linda Maqoma Nominated for Global Women of Influence Award",
      publication: "Black Business Council News",
      date: "2024",
      action: "Read Release",
      url: "https://abmagazine.accaglobal.com/global/articles/2022/may/practice/the-long-road-to-inclusion.html",
      image: "/speakers/Linda Maqoma/Linda-Maqoma-The-Speakers-Firm-11.jpg"
    },
    {
      id: "lm-art-3",
      headline: "Drum Magazine Top 50 Women Power List Honouree Linda Maqoma",
      publication: "Drum Magazine / The Speakers Firm",
      date: "2023",
      action: "Read Feature",
      url: "https://transformsa.co.za/2023/05/abasa-signs-a-memorandum-of-understanding-with-fasset/",
      image: "/speakers/Linda Maqoma/Linda-Maqoma-The-Speakers-Firm-12.jpg"
    }
  ];

  const customVideos = [
    {
      id: "lm-vid-1",
      label: "Linda Maqoma on Corporate Governance & Transformation",
      youtubeId: "1CoeB3wMUu4"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Linda Maqoma"
      speakerTitle=""
      speakerDesignation="Auditor, Governance Strategist & Speaker"
      speakerRole="Founder of Nomatshawe Consulting & BBC VP"
      speakerRef="TSF-LM-10"
      heroBackgroundImage="/speakers/Linda Maqoma/Linda-Maqoma-The-Speakers-Firm-10.jpg"
      biographyImage="/speakers/Linda Maqoma/Linda-Maqoma-2.jpg"
      bioHook="“Using our voices to address corporate governance, ethical transformation, and the representation of women in leadership.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="linda-maqoma" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="linda-maqoma" 
        customIntroText="Corporate governance seminars, ethical audit briefings, and transformation workshops led by Linda Maqoma."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
