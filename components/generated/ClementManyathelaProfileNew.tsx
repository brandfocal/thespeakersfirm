"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "radio-host",
    label: "Radio 702 Host",
    subtitle: "Acclaimed host of 'The Clement Manyathela Show' on South Africa's leading talk platform."
  },
  {
    id: "up-alum",
    label: "UP Journalism Alum",
    subtitle: "Holds a Bachelor of Arts in Journalism from the University of Pretoria."
  },
  {
    id: "broadcast-exec",
    label: "Broadcaster & Journalist",
    subtitle: "Over a decade of anchor experience across eNCA, SABC News, Power FM and e.tv."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "facilitation-mc",
    number: "Theme 01",
    title: "Master of Ceremonies & Moderation.",
    copy: "Leveraging intellectual depth and media sophistication to moderate high-stakes debates, anchor national conferences, and lead corporate discussions."
  },
  {
    id: "public-discourse",
    number: "Theme 02",
    title: "Media, Leadership & Culture.",
    copy: "Navigating South Africa's public discourse landscape, bridging societal viewpoints, and conducting accountability interviews with national leaders."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "At The Speakers Firm, we proudly represent Clement Manyathela, one of South Africa’s most influential broadcast journalists, moderators, and public thought leaders. Renowned for his sharp intellect, authenticity, and commanding presence, Clement stands at the intersection of media, leadership, and culture, shaping conversations that inform, challenge, and inspire.",
  "Originally from Vaalbank, Mpumalanga, Clement holds a Bachelor of Arts in Journalism from the University of Pretoria, and brings over a decade of experience across South Africa’s leading newsrooms. From his early beginnings at The Pretoria News and SABC News Online, to prominent roles at Power FM, e.tv’s The Morning Show, and Eyewitness News, Clement has built an extraordinary career grounded in credibility, insight, and a rare ability to make complex issues both accessible and relevant.",
  "Today, Clement is the acclaimed host of “The Clement Manyathela Show” on Radio 702, one of South Africa’s most respected and influential talk radio platforms. His ability to connect with audiences, engage leaders, and distill meaning from complexity has positioned him as one of the country’s most sought-after interviewers, speakers, and moderators. His mastery of conversation has elevated dialogues that span politics, leadership, business, and culture, creating a national space for reflection, accountability, and progress.",
  "Clement has conducted powerful interviews with global and national figures including President Cyril Ramaphosa, Chief Justice Mogoeng Mogoeng, Sir Richard Branson, Reserve Bank Governor Lesetja Kganyago, Helen Zille, Romeo Khumalo, Lillian Dube, and Caiphus Semenya. His approach transcends traditional interviewing, he builds conversations that reveal character, challenge assumptions, and inspire action.",
  "As a moderator, keynote speaker, and corporate MC, Clement brings intellectual depth, emotional intelligence, and media sophistication to every engagement. Whether anchoring high-level leadership summits, corporate conferences, or policy dialogues, he transforms ordinary discussions into moments of strategic insight and human connection.",
  "Book Clement Manyathela through The Speakers Firm, Africa’s #1 Strategic Speakers Bureau, for your next leadership dialogue, corporate forum, or executive summit, and experience a world-class host who redefines what meaningful, intelligent conversation looks like."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "sabc", name: "SABC NEWS" },
  { id: "radio702", name: "RADIO 702" },
  { id: "powerfm", name: "POWER FM" },
  { id: "etv", name: "E.TV" }
];

export const AboutTeamSection = () => {
  const customVideos = [
    {
      id: "clement-vid-1",
      label: "Clement Manyathela in Action",
      youtubeId: "M7gLLEM0KPg"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Clement Manyathela"
      speakerTitle=""
      speakerDesignation="Radio Talk Show Host & Broadcaster"
      speakerRole="Acclaimed interviewer, moderator, and host of The Clement Manyathela Show."
      speakerRef="TSF-CM-03"
      heroBackgroundImage="/speakers/Clement Manyathela/Clement-Manyathela-The-Speakers-Firm-2.jpg"
      heroImagePosition="object-[center_22%]"
      biographyImage="/speakers/Clement Manyathela/Clement-Manyathela-The-Speakers-Firm-8.jpg"
      bioHook="“Building conversations that reveal character, challenge assumptions, and inspire action.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="clement-manyathela" />
      }
    >
      <ProfileAdditionalSections speakerId="clement-manyathela" customVideos={customVideos} />
    </SpeakerProfileTemplate>
  );
};
