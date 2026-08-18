"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "mb-ceo",
    label: "Former CEO of Mineworkers Investment Company",
    subtitle: "Led MIC through a transformative 15-year tenure, unlocking massive shareholder value."
  },
  {
    id: "mb-director",
    label: "Lead Independent Director, Kumba Iron Ore",
    subtitle: "Chairs the strategy committee and serves on multiple prominent corporate boards."
  },
  {
    id: "mb-thinker",
    label: "Fearless Thinker Award Finalist",
    subtitle: "Shortlisted for RMB Africa’s Fearless Thinker Award."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "inclusive-growth",
    number: "Theme 01",
    title: "Shareholder Value & Inclusive Growth.",
    copy: "Designing and executing strategic initiatives that achieve robust corporate growth while supporting socio-economic development and education."
  },
  {
    id: "turnaround",
    number: "Theme 02",
    title: "Turnaround Strategy & Mentorship.",
    copy: "Building strong operational teams to implement business turnarounds in highly complex corporate cultures."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Mary Bomela is a world-class executive who previously held the role of CEO for Mineworker’s Investment Company (MIC). With over ten years of experience as CEO and sixteen years in senior management roles, Mary has proven herself to be a commercial executive with a reputation of unlocking shareholder value through not only implementing focused and driven strategies, but also creating strong operational teams to implement these turnaround initiatives.",
  "Mary has accumulated an impressive career that continues to develop in stature and influence. Her current portfolio includes non-executive directorships within businesses across industry sectors such as media, telecoms, mining and industrial. Her ability to immerse herself as a commercial leader and in a capacity as a non-executive director and effect large-scale business turnarounds in highly complex corporate cultures has proven to be her greatest strength.",
  "Book Mary Bomela through The Speakers Firm, Africa’s #1 Strategic Speakers Bureau, to bring high-level corporate strategy insights, turnaround leadership keynotes, and inclusive growth briefings to your boardroom or summit."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "mic", name: "MIC" },
  { id: "kumba", name: "KUMBA IRON ORE" },
  { id: "metrofile", name: "METROFILE" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "mb-art-1",
      headline: "MIC CEO Mary Bomela To Step Down After 15 Years Of Service",
      publication: "TechFinancials",
      date: "2025",
      action: "Read Article",
      url: "https://techfinancials.co.za/2025/02/28/mic-ceo-mary-bomela-to-step-down-after-15-years-of-service/",
      image: "/speakers/Mary Bomela/Mary-Bomela-The-Speakers-Firm-2.jpg"
    },
    {
      id: "mb-art-2",
      headline: "Work. Life. And The Female Juggler",
      publication: "Forbes Africa",
      date: "2015",
      action: "Read Interview",
      url: "https://www.forbesafrica.com/woman/2015/08/01/work-life-and-the-female-juggler",
      image: "/speakers/Mary Bomela/Mary-Bomela-The-Speakers-Firm-3.jpg"
    },
    {
      id: "mb-art-3",
      headline: "MIC CEO Mary Bomela Finalist for Fearless Thinker Award",
      publication: "SME Tech Guru",
      date: "2023",
      action: "Read Article",
      url: "https://www.smetechguru.co.za/mary-bomela-ceo-of-mic-shortlisted-for-rmb-africas-fearless-thinker-award/",
      image: "/speakers/Mary Bomela/Mary-Bomela-The-Speakers-Firm-4.jpg"
    }
  ];

  const customVideos = [
    {
      id: "mb-vid-1",
      label: "Mary Bomela on Business Strategy & Inclusive Growth",
      youtubeId: "INOSSwpIlv8"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Mary Bomela"
      speakerTitle=""
      speakerDesignation="Business Executive & Strategy Consultant"
      speakerRole="Former CEO of MIC & Lead Independent Director"
      speakerRef="TSF-MB-83"
      heroBackgroundImage="/speakers/Mary Bomela/Mary-Bomela-The-Speakers-Firm-5.jpg"
      biographyImage="/speakers/Mary Bomela/Mary-Bomela-The-Speakers-Firm.jpg"
      bioHook="“Building robust business architecture and strong operational teams is vital to implement high-level strategies.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="mary-bomela" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="mary-bomela" 
        customIntroText="Corporate turnaround seminars, inclusive growth panels, and board governance keynotes led by Mary Bomela."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
