"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "gmb-legend",
    label: "Legend Storyteller Award",
    subtitle: "Recipient of the MultiChoice AFRICA Legend Storyteller Award and SAFTA Lifetime Achievement Award."
  },
  {
    id: "gmb-day",
    label: "National Storytelling Day",
    subtitle: "Her birthday (October 24) is recognized as National Storytelling Day in South Africa."
  },
  {
    id: "gmb-literacy",
    label: "Literacy Advocate",
    subtitle: "Founder of the Nozincwadi Literacy Campaign, promoting reading in rural South African communities."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "power-storytelling",
    number: "Theme 01",
    title: "The Power of Storytelling.",
    copy: "Preserving cultural heritage, oral history, and indigenous wisdom to foster belonging and connection."
  },
  {
    id: "literacy-education",
    number: "Theme 02",
    title: "Literacy & Education.",
    copy: "Promoting reading cultures, educational empowerment, and youth development across rural Africa."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Dr. Gcina Mhlophe Becker is a celebrated South African storyteller, author, poet, playwright, director, and activist. For decades, she has been a radiant beacon in the world of storytelling and literature, known for creating tales that bridge cultures and generations, and for her lifelong dedication to preserving Africa's oral history and heritage.",
  "Her extensive accolades include the South African Music Award (SAMA), the Obie and Joseph Jefferson Awards, the Fringe First at the Edinburgh Festival, and the MultiChoice AFRICA Legend Storyteller Award. She has also been awarded several honorary doctorates, including one from the Durban University of Technology in 2024. In 2022, she was recognized as one of the 'Mothers of the Nation' by the Charlotte Manya-Maxeke Institute, and her birthday (October 24th) has been designated as National Storytelling Day in South Africa.",
  "Dr. Mhlophe is the founder of the Nozincwadi Literacy Campaign, established in 2001, which promotes reading and donates books to rural communities across South Africa. She also hosts the highly acclaimed podcast, 'Africa Story Magic with Gcina Mhlophe,' which was named Podcast of the Year at the 2024 DStv Content Creator Awards.",
  "Book Dr. Gcina Mhlophe Becker through The Speakers Firm, Africa’s #1 Strategic Speakers Bureau, to bring the magic of African storytelling, cultural preservation, and literacy advocacy to your corporate summit, cultural retreat, or keynote stage."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "safta", name: "SAFTA" },
  { id: "sama", name: "SAMA" },
  { id: "dut", name: "DUT" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "gmb-art-1",
      headline: "Africa Story Magic podcast wins big at Content Creator Awards",
      publication: "The Speakers Firm",
      date: "2024",
      action: "Listen to Podcast",
      url: "https://www.citizen.co.za/entertainment/im-an-action-woman-meetings-will-bore-me-gcina-mhlophe-urges-action-at-national-dialogue/",
      image: "/speakers/Gcina Mhlophe Becker/Gcina-Mhlophe-Becker-The-Speakers-Firm-4.jpg"
    },
    {
      id: "gmb-art-2",
      headline: "Dr. Gcina Mhlophe awarded Honorary Doctorate at DUT",
      publication: "DUT News",
      date: "2024",
      action: "Read Article",
      url: "https://witness.co.za/news/2021/05/24/mam-gcina-recognised-for-her-lifes-work-20210523/",
      image: "/speakers/Gcina Mhlophe Becker/Gcina-Mhlophe-Becker-The-Speakers-Firm-5.jpg"
    },
    {
      id: "gmb-art-3",
      headline: "Nozincwadi: promoting a culture of reading in South Africa",
      publication: "Nozincwadi Trust",
      date: "2023",
      action: "Read Article",
      url: "https://www.puku.co.za/2018/05/02/looking-for-more-of-author-gcina-mhlophes-books/",
      image: "/speakers/Gcina Mhlophe Becker/Gcina-Mhlophe-Becker-The-Speakers-Firm-8.jpg"
    }
  ];

  const customVideos = [
    {
      id: "gmb-vid-1",
      label: "Dr. Gcina Mhlophe Becker on Storytelling & Literacy",
      youtubeId: "kVDtm-J29DM"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Dr. Gcina Mhlophe Becker"
      speakerTitle=""
      speakerDesignation="Celebrated Storyteller, Author & Activist"
      speakerRole="Founder of the Nozincwadi Literacy Campaign"
      speakerRef="TSF-GMB-63"
      heroBackgroundImage="/speakers/Gcina Mhlophe Becker/Gcina-Mhlophe-Becker-The-Speakers-Firm-7.jpg"
      biographyImage="/speakers/Gcina Mhlophe Becker/Gcina-Mhlophe-Becker-The-Speakers-Firm-6.jpg"
      bioHook="“A radiant beacon in the world of storytelling and literature, creating tales that bridge cultures, preserve heritage, and inspire generations.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="gcina-mhlophe-becker" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="gcina-mhlophe-becker" 
        customIntroText="Keynote storytelling performances, literacy workshops, and cultural heritage lectures led by Dr. Gcina Mhlophe Becker."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
