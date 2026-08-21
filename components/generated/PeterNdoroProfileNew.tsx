"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "peter-news",
    label: "SABC News Anchor",
    subtitle: "Renowned former news anchor for SABC, broadcasting global current affairs to millions of households."
  },
  {
    id: "peter-moderator",
    label: "Global Moderator",
    subtitle: "Highly trusted moderator for high-level summits, including WEF Africa and UN conventions."
  },
  {
    id: "peter-business",
    label: "Business Broadcaster",
    subtitle: "Decades of experience anchoring business and financial news shows across the continent."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "geopolitics-media",
    number: "Theme 01",
    title: "Media Strategy & Current Affairs.",
    copy: "Analyzing the role of journalism, public relations, and public information systems in shaping democratic values and governance."
  },
  {
    id: "summit-moderation",
    number: "Theme 02",
    title: "Executive Event Moderation.",
    copy: "Designing and facilitating high-stakes strategic debates, state panel discussions, and international business convocations."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Peter Ndoro is one of Africa's most prominent, recognized, and respected broadcast journalists. With a career spanning over three decades in television and radio news anchoring, he has been a steady voice delivering global current affairs, business updates, and political analyses to millions of homes across the continent.",
  "Peter has worked with leading broadcasters including SABC News, CNBC Africa, and M-Net. He is highly sought after as a master of ceremonies and panel moderator for prestigious local and international summits, including the World Economic Forum (WEF) Africa, state banquets, and continental corporate retreats.",
  "Drawing on his deep expertise in communication, Peter also guides corporate executives on crisis communication, media strategy, and building executive presence in public forums.",
  "Book Peter Ndoro through The Speakers Firm, A Leading African Speakers Bureau, to bring the unmatched authority, grace, and professionalism of a broadcasting legend to your next conference."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "sabc-news", name: "SABC News" },
  { id: "cnbc-africa", name: "CNBC Africa" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "peter-art-1",
      headline: "Peter Ndoro on anchoring major historical events and political transitions",
      publication: "Broadcasting Africa Monthly",
      date: "2024",
      action: "Read Feature",
      url: "https://www.timeslive.co.za/tshisa-live/tshisa-live/2025-04-03-peter-ndoro-bags-new-sabc-show/",
      image: "/speakers/Peter Ndoro/Peter-Ndoro-The-Speakers-Firm.jpg"
    },
    {
      id: "peter-art-2",
      headline: "How premium moderation drives executive alignment at summits",
      publication: "Executive Convening Journal",
      date: "2024",
      action: "Read Article",
      url: "https://iharare.com/the-impressive-qualifications-and-experience-that-landed-zimbabwes-news-anchor-peter-ndoro-the-job-at-sabc/",
      image: "/speakers/Peter Ndoro/Peter-Ndoro-The-Speakers-Firm2.png"
    },
    {
      id: "peter-art-3",
      headline: "Peter Ndoro: Decades of excellence in African journalism",
      publication: "Media Legacy Review",
      date: "2023",
      action: "Read Spotlight",
      url: "https://iol.co.za/news/south-africa/2023-12-31-sabc-says-documentary-25-years-on-brings-to-life-the-close-bond-between-south-africa-and-china/",
      image: "/speakers/Peter Ndoro/Peter-Ndoro-The-Speakers-Firm7.jpg"
    }
  ];

  const customVideos = [
    {
      id: "peter-vid-1",
      label: "Peter Ndoro Anchoring and Interviewing Highlight",
      youtubeId: "v8MIK3lHeGM"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Peter Ndoro"
      speakerTitle=""
      speakerDesignation="Veteran Broadcaster, News Anchor & Professional Moderator"
      speakerRole="Global Summit Host & Communication Expert"
      speakerRef="TSF-PN-44"
      heroBackgroundImage="/speakers/Peter Ndoro/peter-ndoro-the-speakers-firm5.jpg"
      biographyImage="/speakers/Peter Ndoro/Peter-Ndoro-The-Speakers-Firm3.jpg"
      bioHook="“Summits and dialogues are the boardrooms of nations. Facilitating them requires absolute neutrality, quick intellect, and the composure of a seasoned newsman.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="peter-ndoro" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="peter-ndoro" 
        customIntroText="Summit moderation advisories, broadcast media consultancy, and high-profile keynote facilitation led by Peter Ndoro."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
