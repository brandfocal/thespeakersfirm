"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "zm-imbongi",
    label: "Imbongi Yesizwe",
    subtitle: "Appointed Poet of the Nation in 1991, performing famously as Nelson Mandela's official poet laureate."
  },
  {
    id: "zm-academic",
    label: "Social Sciences Scholar",
    subtitle: "Graduated with a Social Sciences degree from the University of the Western Cape (UWC)."
  },
  {
    id: "zm-leader",
    label: "Public Representative",
    subtitle: "Member of Parliament (NCOP) and serving as CEO of the Xhosa Royal Council."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "oral-poetry-identity",
    number: "Theme 01",
    title: "Izibongo & Cultural Power.",
    copy: "Leveraging traditional Xhosa praise poetry and oral folklore to express national identity and drive community alignment."
  },
  {
    id: "heritage-policy-dialogue",
    number: "Theme 02",
    title: "Heritage Tourism & Royal Council.",
    copy: "Strategic development of national heritage initiatives (e.g. Ancestors Day) and integration of traditional systems into governance."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Zolani Mkiva is one of South Africa's most prominent contemporary praise poets (*imbongi*), cultural practitioners, and social commentators. Born in Idutywa in the Eastern Cape, he inherited the gift of oratory from a family lineage of oral chroniclers. He rose to international acclaim in 1990 when he performed at the welcome home rally for Nelson Mandela, subsequently serving as Mandela's personal poet laureate.",
  "Mkiva studied Social Sciences at the University of the Western Cape, blending ancient oral storytelling traditions with modern academic, political, and cultural analysis. In 1991, he was designated *Imbongi Yesizwe* (Poet of the Nation) and performed at the historic 1994 presidential inauguration of Nelson Mandela, capturing the spirit of South Africa's democratic transition.",
  "In addition to his literary achievements, Zolani Mkiva has released several music-poetry fusion albums and served in public office, including roles in the South African Parliament as a Member of the National Council of Provinces (NCOP). As the CEO of the Xhosa Royal Council, he spearheaded national initiatives such as Ancestors Day to activate heritage and community leadership.",
  "Book Zolani Mkiva through The Speakers Firm, A Leading African Speakers Bureau, to bring powerful cultural performances, strategic heritage lectures, and inspiring social commentary to your event."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "parliament", name: "SA PARLIAMENT" },
  { id: "uwc", name: "UNIV OF THE WESTERN CAPE" },
  { id: "xhosaroyal", name: "XHOSA ROYAL COUNCIL" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "zm-art-1",
      headline: "Zolani Mkiva spearheads the first Ancestors Day",
      publication: "Drum Magazine / News24",
      date: "2021",
      action: "Read Article",
      url: "https://www.news24.com/drum/Celebs/News/zolani-mkiva-spearheads-the-first-ancestors-day-20210423",
      image: "/speakers/Zolani Mkiva/Zolani-Mkiva-The-Speakers-Firm.jpg"
    },
    {
      id: "zm-art-2",
      headline: "Call for another South African public holiday to honour ancestors",
      publication: "Daily Maverick",
      date: "2022",
      action: "Read Feature",
      url: "https://www.dailymaverick.co.za/article/2022-05-06-call-for-another-south-african-public-holiday-to-honour-ancestors/",
      image: "/speakers/Zolani Mkiva/Zolani-Mkiva-The-Speakers-Firm4.jpg"
    },
    {
      id: "zm-art-3",
      headline: "We don't want to romanticise Ancestors Day - Zolani Mkiva",
      publication: "Sunday World",
      date: "2021",
      action: "Read Article",
      url: "https://sundayworld.co.za/news/we-dont-want-to-romanticize-ancestors-day-zolani-mkiva/",
      image: "/speakers/Zolani Mkiva/Zolani-Mkiva-The-Speakers-Firm5.jpg"
    }
  ];

  const customVideos = [
    {
      id: "zm-vid-1",
      label: "Zolani Mkiva: Praise Poetry Performance and Traditional Wisdom",
      youtubeId: "tzMfxwJrYa4"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Zolani Mkiva"
      speakerTitle=""
      speakerDesignation="Imbongi Yesizwe, Royal Council CEO & MP"
      speakerRole="Praise Poetry Performance & Traditional Heritage Keynote"
      speakerRef="TSF-ZM-91"
      heroBackgroundImage="/speakers/Zolani Mkiva/Zolani-Mkiva-The-Speakers-Firm6.jpg"
      biographyImage="/speakers/Zolani Mkiva/Zolani-Mkiva-The-Speakers-Firm7.jpg"
      bioHook="“Harnessing the ancient art of praise poetry (izibongo) to serve as the voice of our community, activate heritage tourism, and preserve national memory.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="zolani-mkiva" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="zolani-mkiva" 
        customIntroText="Praise poetry recitations, national heritage seminars, and traditional leadership keynote addresses led by Zolani Mkiva."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
