"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "exec-chairman",
    label: "Chairman, Selekane International",
    subtitle: "Leading interventions in strategy, action learning, and cultural alignment globally."
  },
  {
    id: "psasa-president",
    label: "Former President of PSASA",
    subtitle: "Past President of the Professional Speakers Association of Southern Africa."
  },
  {
    id: "expy-honoree",
    label: "CSP, SASHoF, EXPY Honoree",
    subtitle: "Internationally certified speaking professional and Speaker Hall of Fame member."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "organisational-culture",
    number: "Theme 01",
    title: "Organisational Culture & Trust.",
    copy: "Building deep trust, accountability, and a high-performance culture within corporate boards and executive leadership teams."
  },
  {
    id: "strategy-formulation",
    number: "Theme 02",
    title: "Action Learning & Strategy.",
    copy: "Formulating business strategy that moves beyond paper into execution, utilizing action learning models for Fortune 500 teams."
  },
  {
    id: "navigating-tough-times",
    number: "Theme 03",
    title: "Leadership in Macroeconomic Pressure.",
    copy: "Empowering leadership to manage organizational change, navigate crises, and sustain team focus during economic downturns."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "At The Speakers Firm, we proudly represent Dr Billy Selekane, a globally recognised International Keynote Speaker, Bestselling Author, Coach, and Organisational Culture Expert. His work transforms leadership effectiveness, team performance, and organisational culture across industries and continents.",
  "As Executive Chairman of Billy Selekane International, he leads an influential presence across Africa, the Middle East, Singapore, Sweden, the UK, and the USA, driving excellence in Action Learning, Strategy Formulation, and Organisational Effectiveness. His portfolio includes work with Fortune 500 companies such as 3M, Nike, DBSA, Nokia, Eskom, Pam Golding, and Roche.",
  "A former President of the Professional Speakers Association of Southern Africa, Dr Selekane brings a commanding presence, practical insight, and transformative frameworks that energise leadership teams and inspire peak performance.",
  "Perfect for year-end functions, executive retreats, and strategy sessions, Dr Selekane delivers tailored keynotes and interventions that unlock purpose, clarity, and measurable results."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "nike", name: "NIKE" },
  { id: "3m", name: "3M" },
  { id: "dbsa", name: "DBSA" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "billy-art-1",
      headline: "Master Class session with Billy Selekane on how to navigate tough times",
      publication: "TEA Alexandra",
      date: "2024",
      action: "Watch Masterclass",
      url: "https://www.youtube.com/watch?v=BlYrv5ucXnY",
      image: "/speakers/Billy Selekane/Dr-Billy-Selekane-The-Speakers-Firm-2.jpg"
    },
    {
      id: "billy-art-2",
      headline: "The Power of a Dream: Strategic Purpose and Action",
      publication: "YouTube",
      date: "2023",
      action: "Watch Keynote",
      url: "https://www.youtube.com/watch?v=jue_3k4fxsg",
      image: "/speakers/Billy Selekane/Dr-Billy-Selekane-The-Speakers-Firm-3.jpg"
    }
  ];

  const customGallery = [
    {
      id: "billy-gal-1",
      src: "/speakers/Billy Selekane/billy-selekane-the-speakers-firm.jpg",
      alt: "Dr Billy Selekane stage",
      caption: "International keynote presentation on corporate culture",
      className: "sm:col-span-2 lg:col-span-2"
    },
    {
      id: "billy-gal-2",
      src: "/speakers/Billy Selekane/Dr-Billy-Selekane-The-Speakers-Firm-4.jpg",
      alt: "Dr Billy Selekane seminar",
      caption: "Facilitating executive change management retreat",
      className: ""
    },
    {
      id: "billy-gal-3",
      src: "/speakers/Billy Selekane/Dr-Billy-Selekane-The-Speakers-Firm-5.jpg",
      alt: "Billy Selekane book session",
      caption: "Signing bestselling leadership publications",
      className: ""
    }
  ];

  const customVideos = [
    {
      id: "billy-vid-1",
      label: "Dr Billy Selekane - International Speaker Showcase",
      youtubeId: "4bzTPS46M8I"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Dr Billy Selekane"
      speakerTitle="Dr"
      speakerDesignation="Keynote Speaker, Author & Organisational Culture Specialist"
      speakerRole="Executive Chairman of Billy Selekane International, past PSASA President, and coach."
      speakerRef="TSF-BS-10"
      heroBackgroundImage="/speakers/Billy Selekane/bg_billy.jpg"
      biographyImage="/speakers/Billy Selekane/Dr-Billy-Selekane-The-Speakers-Firm.jpg"
      bioHook="“Transformative strategy only works when the culture has been primed to receive it.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="dr-billy-selekane" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="dr-billy-selekane" 
        customGallery={customGallery} 
        customIntroText="International speaker briefs, corporate effectiveness lectures and book tours by Dr Billy Selekane."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};
