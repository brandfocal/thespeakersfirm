import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  { id: "ma", label: "MA", subtitle: "Politics (Wits)" },
  { id: "ba-hons", label: "BA Hons", subtitle: "Wits" },
  { id: "research-fellow", label: "Research Fellow", subtitle: "Al Sharq Forum" }
];

const STRATEGIC_THEMES = [
  {
    id: "theme-1",
    number: "01",
    title: "Middle East-Africa Geopolitical Relations",
    copy: "Analyzing diplomatic pivots, trade flows, and foreign policy strategies connecting the Middle East and African markets."
  },
  {
    id: "theme-2",
    number: "02",
    title: "International Media & Broadcast Strategy",
    copy: "Structuring broadcast networks and international news production systems. Leveraging tenured Al Jazeera experience to analyze global media narratives."
  },
  {
    id: "theme-3",
    number: "03",
    title: "Global South Policy & Democracy",
    copy: "Evaluating active citizenship, human rights solidarity, and democratic policy changes across developing regions and African nations."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Mr Thembisa Fakude has a wealth of experience in media and communications. He currently holds a Master’s Degree in Politics as well as a Bachelor of Arts with Honors both from the University of the Witwatersrand South Africa. He has held Chairpersonship in the Foreign Correspondents Association of Southern Africa (FCASA), he’s a Board member of the Mail and Guardian Newspaper. He was also a member of the Organizing Committee Women Deliver 4th Conference, Copenhagen in 2016. Mr Fakude is also a Research Fellow at the Al Sharq Forum in Istanbul, Turkey.",
  "Mr Fakude was part of the Al Jazeera Media Network for over ten years and worked as a senior news producer, researcher and Head of the English Unit Research for the Network. Mr Fakude was also a Member of the Organizing Committee for the World Media Summit at Doha, Qatar in 2016.",
  "Mr Fakude is a Columnist for the Middle East Monitor in London, United Kingdom (UK). He is also the Deputy Chairperson of the Common Action Forum in Madrid."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "al-jazeera", name: "AL JAZEERA NETWORK" },
  { id: "mail-guardian", name: "MAIL & GUARDIAN" },
  { id: "al-sharq", name: "AL SHARQ FORUM" },
  { id: "common-action", name: "COMMON ACTION FORUM" }
];

const customMedia = [
  {
    id: "thembisa-media-1",
    headline: "I don’t see Putin backing down: Fakude",
    publication: "SABC News",
    date: "",
    url: "https://www.sabcnews.com/sabcnews/thembisa-fakude/",
    action: "Read Article",
    image: "/speakers/Thembisa%20Fakude/Thembisa-Fakude-The-Speakers-Firm-3.jpg"
  },
  {
    id: "thembisa-media-2",
    headline: "Ouattara poised to win Cote d’Ivoire’s October presidential elections",
    publication: "Mail & Guardian",
    date: "2025-08-25",
    url: "https://mg.co.za/thought-leader/2025-08-25-ouattara-poised-to-win-cote-divoires-october-presidential-elections/",
    action: "Read Article",
    image: "/speakers/Thembisa%20Fakude/Thembisa-Fakude-The-Speakers-Firm-4.jpg"
  },
  {
    id: "thembisa-media-3",
    headline: "Zuma’s visit to Morocco triggers a relook at SA foreign policy",
    publication: "Mail & Guardian",
    date: "2025-07-31",
    url: "https://mg.co.za/thought-leader/opinion/2025-07-31-zumas-visit-to-morocco-triggers-a-relook-at-sa-foreign-policy/",
    action: "Read Article",
    image: "/speakers/Thembisa%20Fakude/Thembisa-Fakude-The-Speakers-Firm-5.jpg"
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Thembisa Fakude"
      speakerTitle=""
      speakerDesignation="Political Analyst, Author & Middle East-Africa Relations Specialist"
      speakerRole="Chairperson of FCASA & Research Fellow at Al Sharq Forum."
      speakerRef="TSF-TF-26"
      heroBackgroundImage="/speakers/Thembisa%20Fakude/Thembisa-Fakude-The-Speakers-Firm-6.jpg"
      biographyImage="/speakers/Thembisa%20Fakude/Thembisa-Fakude-The-Speakers-Firm.jpg"
      bioHook="“Foreign policy must remain committed to the advancement of human rights and international solidarity.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="thembisa-fakude" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="thembisa-fakude" 
        customVideos={[
          {
            id: "thembisa-video-1",
            label: "Experience Reel",
            youtubeId: "LkGl2r-hR40"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
