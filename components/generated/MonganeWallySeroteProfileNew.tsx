"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "mws-laureate",
    label: "National Poet Laureate",
    subtitle: "Inaugurated in 2018 as South Africa's National Poet Laureate for outstanding literary contributions."
  },
  {
    id: "mws-jonker",
    label: "Ingrid Jonker Prize Winner",
    subtitle: "Received the prestigious poetry award in 1972 for his debut collection Yakhal'inkomo."
  },
  {
    id: "mws-fulbright",
    label: "Fulbright Scholar & MFA",
    subtitle: "Earned his Master of Fine Arts from Columbia University in 1979 under the Fulbright Program."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "literary-resistance",
    number: "Theme 01",
    title: "Poetry, Voice & Liberation.",
    copy: "Analyzing literature as a vehicle for expressing cultural consciousness, political resistance, and national memory."
  },
  {
    id: "arts-policy-heritage",
    number: "Theme 02",
    title: "Shaping Post-Apartheid Culture.",
    copy: "Strategic frameworks for developing national arts policy, indigenous languages, and cultural heritage structures."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Dr. Mongane Wally Serote is one of South Africa's most distinguished poets, novelists, and cultural activists. Born in Sophiatown, Johannesburg, he experienced the forced removals of the apartheid era and grew up in Alexandra. He became deeply involved in the anti-apartheid struggle through the African National Congress (ANC) and the Black Consciousness Movement, using his writings as a powerful voice of resistance.",
  "In 1969, Serote was arrested under the Terrorism Act and spent nine months in solitary confinement. Following his release, he published his debut poetry collection, *Yakhal'inkomo* (1972), which won the Ingrid Jonker Prize. He later went into exile, living in Botswana and London, where he co-founded the Medu Art Ensemble, an influential collective of anti-apartheid artists.",
  "Serote pursued his studies at Columbia University, New York, earning an MFA on a Fulbright Scholarship in 1979. Upon returning to South Africa in 1990, he headed the ANC's Department of Arts and Culture and later chaired the Parliamentary Portfolio Committee on Arts, Culture, Science, and Technology. In 2018, he was honored as South Africa's National Poet Laureate.",
  "Book Dr. Mongane Wally Serote through The Speakers Firm, A Leading African Speakers Bureau, to deliver legendary keynote presentations on South African cultural history, national heritage, and the power of creative expression."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "parliament", name: "SA PARLIAMENT" },
  { id: "columbia", name: "COLUMBIA UNIVERSITY" },
  { id: "anc", name: "ANC DEPT OF ARTS & CULTURE" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "mws-art-1",
      headline: "Mongane Wally Serote: Poetry and Liberation in South Africa",
      publication: "Struggle Archives / YouTube",
      date: "2023",
      action: "Watch Video",
      url: "https://www.youtube.com/watch?v=_Hc_CWFwJDA",
      image: "/speakers/Mongane Wally Serote/Mongane-Wally-Serote-The-Speakers-Firm5.jpg"
    },
    {
      id: "mws-art-2",
      headline: "Mongane Wally Serote Interview: Heritage, Poetry, and National Identity",
      publication: "National Heritage Dialogues / YouTube",
      date: "2022",
      action: "Watch Interview",
      url: "https://www.youtube.com/watch?v=SYVUfQ_9mc0",
      image: "/speakers/Mongane Wally Serote/Mongane-Wally-Serote-The-Speakers-Firm2.jpg"
    },
    {
      id: "mws-art-3",
      headline: "Wally Serote: The Voice of Alexandra and the Black Consciousness Movement",
      publication: "Literary History Channel / YouTube",
      date: "2024",
      action: "Watch Feature",
      url: "https://www.youtube.com/watch?v=6FqT8q_vf9g",
      image: "/speakers/Mongane Wally Serote/Mongane-Wally-Serote-The-Speakers-Firm3.jpg"
    }
  ];

  const customVideos = [
    {
      id: "mws-vid-1",
      label: "Mongane Wally Serote Poetry Reading & Discussion",
      youtubeId: "B4CkxYiTVsc"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Dr. Mongane Wally Serote"
      speakerTitle=""
      speakerDesignation="National Poet Laureate, Acclaimed Novelist & Activist"
      speakerRole="Liberation Literature & National Heritage Keynote"
      speakerRef="TSF-MWS-68"
      heroBackgroundImage="/speakers/Mongane Wally Serote/Mongane-Wally-Serote-The-Speakers-Firm4.jpg"
      biographyImage="/speakers/Mongane Wally Serote/Mongane-Wally-Serote-The-Speakers-Firm.jpg"
      bioHook="“Using the power of words, poetry, and cultural activism to capture the voice of the liberation struggle and preserve the legacy of our heritage.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="mongane-wally-serote" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="mongane-wally-serote" 
        customIntroText="Poetry masterclasses, national heritage colloquiums, and cultural policy keynotes led by Dr. Mongane Wally Serote."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
