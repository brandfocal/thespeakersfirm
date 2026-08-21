"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "bl-sayc",
    label: "General Secretary, SAYC",
    subtitle: "Steers national policy advocacy and represents youth interests across state and private sectors."
  },
  {
    id: "bl-cooldads",
    label: "Founder of Cool Dads Foundation",
    subtitle: "Established a prominent NGO advocating for active fatherhood and positive parenting."
  },
  {
    id: "bl-theologian",
    label: "Theologian & Author",
    subtitle: "Combines academic theological training with practical ethics, authoring multiple books."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "positive-fatherhood",
    number: "Theme 01",
    title: "Responsible Fatherhood.",
    copy: "Supporting young and corporate fathers to become emotionally present, accountable, and nurturing parents."
  },
  {
    id: "youth-policy",
    number: "Theme 02",
    title: "Youth Leadership & Transformation.",
    copy: "Mobilizing youth voices to shape national policies, economic integration, and social justice."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Bongani Luvalo is a respected media personality, philanthropist, and men’s empowerment advocate redefining leadership, fatherhood, and social responsibility in South Africa and beyond. As the General Secretary of the South African Youth Council, he stands at the forefront of national transformation, championing youth voices across political, business, faith-based, and community structures.",
  "He is the Founder of the Cool Dads Foundation, a groundbreaking movement mobilising young fathers to become emotionally present, responsible, and engaged parents. Through this initiative, Bongani is shaping a generation of men who lead with empathy, integrity, and purpose, advancing positive masculinity as a cornerstone of family and national development.",
  "As a media personality and social commentator, Bongani is a familiar voice on Kaya FM, SAfm, and Power FM, where he leads thought-provoking conversations on leadership, masculinity, and fatherhood. Having addressed audiences on global stages such as the World Council of Churches Peace Conference (Jamaica) and COP17 (Durban), Bongani continues to amplify Africa’s voice in global conversations about leadership, morality, and humanity.",
  "With academic credentials in Theology, Project Management, Corporate Communication, and ongoing studies in Business Management, he brings intellectual depth, moral conviction, and practical insight to every engagement.",
  "Book Bongani Luvalo through The Speakers Firm, A Leading African Speakers Bureau, to bring responsible fatherhood keynotes, youth development seminars, and leadership workshops to your organization."
];

const BOOKS = [
  {
    id: "ntliziyo-ungumkhohlisi",
    title: "Ntliziyo Ungumkhohlisi",
    description: "A deeply reflective Xhosa work examining the complexities of the human heart, relationships, and moral choices in South African society.",
    coverImage: "/speakers/Bongani Luvalo/Ntliziyo-Ungamkhohlisi.jpg",
    url: "https://www.sirbonganiluvalo.co.za/ntliziyo-ungumkhohlisi"
  },
  {
    id: "father-stranger",
    title: "A Father, A Stranger: Mzansi's Memoirs of Fatherhood",
    description: "A collection of moving memoirs exploring the impacts of absent fathers and the journey of reclaiming positive fatherhood in South Africa.",
    coverImage: "/speakers/Bongani Luvalo/A-Father-A-Stranger.jpg",
    url: "https://xarrabooks.com/shop/a-father-a-stranger-mzansis-memoirs-of-fatherhood/"
  }
];

const SOCIAL_PROOF_LOGOS = [
  { id: "sayc", name: "SA YOUTH COUNCIL" },
  { id: "cooldads", name: "COOL DADS FOUNDATION" },
  { id: "kaya", name: "KAYA FM" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "luvalo-art-1",
      headline: "‘The Country’s Husband’ Bongani Luvalo launches second book Ntliziyo Ungumkhohlisi",
      publication: "TimesLive",
      date: "2025",
      action: "Read Announcement",
      url: "https://www.timeslive.co.za/tshisa-live/tshisa-live/2025-09-03-the-countrys-husband-bongani-luvalo-launches-second-book/",
      image: "/speakers/Bongani Luvalo/Bongani-Luvalo-The-Speakers-Firm-2.jpg"
    },
    {
      id: "luvalo-art-2",
      headline: "‘The gospel of positive fatherhood’: Bongani Luvalo and the Cool Dads Foundation inspire change",
      publication: "News24",
      date: "2024",
      action: "Read Feature",
      url: "https://www.news24.com/life/relationships/parenting/the-gospel-of-positive-fatherhood-bongani-luvalo-and-the-cool-dads-foundation-inspire-change-20241108",
      image: "/speakers/Bongani Luvalo/Bongani-Luvalo-The-Speakers-Firm-5.jpg"
    },
    {
      id: "luvalo-art-3",
      headline: "MONDAY MENDAY Guest: Role of Men in Ending GBV",
      publication: "Radio 2000",
      date: "2023",
      action: "Listen to Podcast",
      url: "https://www.radio2000.co.za/radio2000/podcasts/mondaymenday-where-do-we-go-from-here-the-role-of-men-in-ending-gbv/",
      image: "/speakers/Bongani Luvalo/Bongani-Luvalo-The-Speakers-Firm-7.jpg"
    }
  ];

  const customVideos = [
    {
      id: "luvalo-vid-1",
      label: "Bongani Luvalo on Responsible Fatherhood & Youth Advocacy",
      youtubeId: "RrG1-twi7Yw"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Bongani Luvalo"
      speakerTitle=""
      speakerDesignation="Media Personality, Philanthropist & Activist"
      speakerRole="General Secretary of SAYC & Founder of Cool Dads"
      speakerRef="TSF-BL-47"
      heroBackgroundImage="/speakers/Bongani Luvalo/Bongani-Luvalo-The-Speakers-Firm-hero.jpg"
      biographyImage="/speakers/Bongani Luvalo/Bongani-Luvalo-The-Speakers-Firm-bio.jpg"
      bioHook="“Redefining modern masculinity and positive fatherhood as the cornerstones of strong families and national development.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      books={BOOKS}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="bongani-luvalo" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="bongani-luvalo" 
        customIntroText="Fatherhood workshops, youth development forums, and ethics panels led by Bongani Luvalo."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
