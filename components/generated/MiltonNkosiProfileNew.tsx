import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  { id: "bbc-correspondent", label: "Veteran Correspondent", subtitle: "BBC News (30+ Years)" },
  { id: "geopolitical-analyst", label: "Geopolitical Analyst", subtitle: "African & Global Affairs" },
  { id: "media-trainer", label: "Media Trainer", subtitle: "Executive Communications" },
  { id: "international-spk", label: "International Speaker", subtitle: "Global Journalism & Public Affairs" }
];

const STRATEGIC_THEMES = [
  {
    id: "theme-1",
    number: "01",
    title: "Global Media Dynamics & Geopolitical Risk",
    copy: "Deconstructing African and international news narratives, geopolitical shifts, socio-economic trends, and international media perception."
  },
  {
    id: "theme-2",
    number: "02",
    title: "Crisis Reporting & Executive Media Engagement",
    copy: "Equipping C-suite executives and institutions to navigate intense international media scrutiny and crisis communication landscapes."
  },
  {
    id: "theme-3",
    number: "03",
    title: "Storytelling, Truth & Public Diplomacy in Africa",
    copy: "Highlighting authentic African narratives, broadcasting ethics, global diplomacy, and the power of truthful journalism."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "At The Speakers Firm, we proudly represent Milton Nkosi, an award-winning journalist, international correspondent, and thought leader whose work has chronicled some of the most pivotal moments in South Africa’s and Africa’s modern history. With over three decades of experience at the BBC, Milton is widely respected for his credibility, integrity, and deep understanding of the political, social, and human dimensions shaping the African continent.",
  "Originally trained in civil engineering education, Milton transitioned into journalism in the late 1980s, beginning his career as a freelance assistant producer for Visnews (now Reuters TV), NBC News, and BBC News. His early reporting placed him at the epicentre of South Africa’s transformation, documenting the final years of apartheid, the release of Nelson Mandela, and the volatile township wars and political negotiations that followed. His coverage provided global audiences with authentic, on-the-ground perspectives during one of the most defining eras in South Africa’s history.",
  "In 1993, Milton was appointed Producer at BBC News, where he covered historic milestones including the assassination of Chris Hani and the nation’s first democratic elections. His exceptional reporting and editorial leadership led to his promotion as Africa Producer in 1996, and subsequently Bureau Editor in 2000, overseeing BBC’s newsgathering operations across the continent.",
  "A journalist of global standing, Milton became the first-ever recipient of the One BBC Global Ambassador Award in 2004, recognising his contribution to international journalism and his role in strengthening cross-continental newsroom collaboration. Over the years, he has interviewed and reported on global leaders, liberation icons, and emerging changemakers, offering sharp analysis on Africa’s political and socio-economic developments.",
  "Beyond the newsroom, Milton continues to influence the field of journalism through his leadership roles as a board member of the Southern Africa Foreign Correspondents Association and a member of the South African National Editors’ Forum (SANEF). His commitment to ethical reporting, freedom of the press, and mentorship of young journalists reflects his dedication to advancing responsible journalism across Africa.",
  "As a speaker, moderator, and media advisor, Milton brings unmatched insight into African geopolitics, global media, and democracy, offering audiences a nuanced understanding of how narratives shape nations and influence international perception.",
  "Book Milton Nkosi through The Speakers Firm, Africa’s #1 Strategic Speakers Bureau, for your next leadership dialogue, media forum, or global affairs conference, and engage with a journalist whose storytelling bridges continents and generations."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "bbc-news", name: "BBC NEWS" },
  { id: "global-media", name: "INTERNATIONAL BROADCASTING" },
  { id: "african-union", name: "AFRICAN & GLOBAL AFFAIRS" }
];

const customMedia = [
  {
    id: "milton-media-1",
    headline: "Milton Nkosi on Global Journalism, BBC Experience & African Geopolitics",
    publication: "The Speakers Firm",
    date: "",
    url: "https://thespeakersfirm.co.za/media-brand-reputation/milton-nkosi/",
    action: "BOOK THE SPEAKER",
    image: "/speakers/Milton%20Nkosi/Milton-Nkosi-The-Speakers-Firm.jpg"
  }
];

const customGallery = [
  {
    id: "milton-gal-1",
    src: "/speakers/Milton%20Nkosi/Milton-Nkosi---The-Speakers-Firm2.jpg",
    alt: "Milton Nkosi Portrait",
    caption: "Milton Nkosi - BBC Veteran Correspondent",
    className: ""
  },
  {
    id: "milton-gal-2",
    src: "/speakers/Milton%20Nkosi/Milton-Nkosi---The-Speakers-Firm4.jpg",
    alt: "Milton Nkosi Broadcasting",
    caption: "International Media Commentary",
    className: ""
  },
  {
    id: "milton-gal-3",
    src: "/speakers/Milton%20Nkosi/Milton-Nkosi-The-Speakers-Firm3.jpg",
    alt: "Milton Nkosi Moderating Panel",
    caption: "Global Affairs Forum Moderation",
    className: ""
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Milton Nkosi"
      speakerTitle=""
      speakerDesignation="Veteran BBC News Analyst, Geopolitical Expert & Speaker"
      speakerRole="International Correspondent, Media Strategist & C-Suite Advisor."
      speakerRef="TSF-MN-39"
      heroBackgroundImage="/speakers/Milton%20Nkosi/Milton-Nkosi-The-Speakers-Firm5.jpg"
      biographyImage="/speakers/Milton%20Nkosi/Milton-Nkosi-The-Speakers-Firm.jpg"
      bioHook="“In an era of rapid news cycles and global disruption, clear media insight and authentic narrative shape world perception.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="milton-nkosi" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="milton-nkosi" 
        customGallery={customGallery} 
        customVideos={[
          {
            id: "milton-video-1",
            label: "Experience Reel",
            youtubeId: "43fTXIcLXto"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
