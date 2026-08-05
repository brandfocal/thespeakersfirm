"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "tut-founder",
    label: "TUT Radio Pioneer",
    subtitle: "Launched the first on-campus black radio station at TUT in 1993."
  },
  {
    id: "birchwood-mc",
    label: "Birchwood Resident MC",
    subtitle: "Over 17 years resident MC for Ekurhuleni Comes Alive Jazz Concerts."
  },
  {
    id: "radio-host",
    label: "Broadcaster & Presenter",
    subtitle: "Loved radio voice across Kaya FM, Radio Bop, Capricorn FM, and North West FM."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "audience-engagement-hector",
    number: "Theme 01",
    title: "Dynamic Audience Engagement.",
    copy: "Redefining events hosting through infectious enthusiasm, blending professional structure with humour and authentic connection."
  },
  {
    id: "personal-branding",
    number: "Theme 02",
    title: "Personal Branding & Media Longevity.",
    copy: "Building authority, maintaining career consistency, and surviving media disruptions through a robust personal brand."
  },
  {
    id: "laughter-leadership",
    number: "Theme 03",
    title: "Laughter & Leadership.",
    copy: "Utilizing humour and motivational speaking to build unity, energise teams, and inspire corporate stakeholders."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "At The Speakers Firm, we proudly represent Hector Motivator, a powerhouse of energy, charisma, and authenticity who has redefined the art of hosting and audience engagement across South Africa. Known for his infectious enthusiasm and magnetic presence, Hector brings an unmatched blend of professionalism, humour, and heart to every stage he graces.",
  "Described as a fresh morning breeze by those who experience his work, Hector’s journey began while studying for a Public Administration diploma at the Tshwane University of Technology (then Technikon Northern) in 1993, where he made history by launching the first on-campus black radio station. His natural flair for communication quickly made him the undisputed MC for campus events and community gatherings, setting the foundation for a dynamic career in broadcasting and live hosting.",
  "Hector went on to become one of South Africa’s most loved radio voices, hosting the top-rated “Midday Madness” show on Radio Bop, before joining Kaya FM, Capricorn FM, and North West FM. His effortless ability to connect with diverse audiences established him as a trusted voice in entertainment, corporate, and government circles.",
  "For over 17 years, Hector served as the resident MC at the Ekurhuleni Comes Alive Jazz Concerts at the Birchwood Executive Hotel and OR Tambo Conference Centre, where he hosted icons including Judith Sephuma, Oliver Mtukudzi, Sibongile Khumalo, Tsepo Tshola, Ntando, and Amanda Black. His longevity and consistency speak to his mastery of craft, delivering not just entertainment, but a sense of belonging and joy to every occasion."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "kayafm", name: "KAYA FM" },
  { id: "tut", name: "TUT UNIVERSITY" },
  { id: "birchwood", name: "BIRCHWOOD HOTEL" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "hector-art-1",
      headline: "TUT enables radio guru's dreams: Hector Motau's journey",
      publication: "Tshwane University of Technology",
      date: "2023",
      action: "Read Alumni Story",
      url: "https://www.tut.ac.za/latest-news/154-tut-enables-radio-gurus-dreams",
      image: "/speakers/Hector Motivator/Hector-Motivator-2.jpg"
    },
    {
      id: "hector-art-2",
      headline: "Hector Motivator on Life, Leadership & Energy",
      publication: "YouTube Show",
      date: "2024",
      action: "Watch Interview",
      url: "https://www.youtube.com/watch?v=Y5uN_ZzcU0k",
      image: "/speakers/Hector Motivator/Hector-Motivator-The-Speakers-Firm-3.jpg"
    },
    {
      id: "hector-art-3",
      headline: "In Conversation with GPL Chairpersons on Provincial Government",
      publication: "Mail & Guardian",
      date: "30 Jun 2021",
      action: "Read Coverage",
      url: "https://mg.co.za/special-reports/2021-06-30-in-conversation-with-gpl-chairpersons-part-2-of-4/",
      image: "/speakers/Hector Motivator/Hector-Motivator-The-Speakers-Firm-4.jpg"
    }
  ];

  const customVideos = [
    {
      id: "hector-vid-1",
      label: "King David Studio Interview with Hector Motivator",
      youtubeId: "2nl04MO49Zg"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Hector Motivator"
      speakerTitle=""
      speakerDesignation="Speaker, MC & Charismatic Broadcaster"
      speakerRole="Pioneering radiopreneur, 17-year resident concert MC, and audience motivator."
      speakerRef="TSF-HM-11"
      heroBackgroundImage="/speakers/Hector Motivator/Hector-Motivator-The-Speakers-Firm-6.jpg"
      biographyImage="/speakers/Hector Motivator/Hector-Motivator-The-Speakers-Firm.jpg"
      bioHook="“Hosting is not just about keeping the mic warm; it is about creating a community of joy on the stage.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="hector-motivator" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="hector-motivator" 
        customGallery={[]} 
        customIntroText="Broadcasting highlights, community gatherings and events direction by Hector Motivator."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};
