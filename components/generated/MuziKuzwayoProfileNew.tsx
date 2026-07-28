"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "agency-ceo",
    label: "Former CEO, TBWA",
    subtitle: "Led TBWA\\Hunt\\Lascaris, one of South Africa's premier creative advertising agencies."
  },
  {
    id: "ignitive-founder",
    label: "Founder of Ignitive",
    subtitle: "Brand consulting pioneer aligning worker interests with shareholder goals."
  },
  {
    id: "author-prof",
    label: "Visiting Professor & Author",
    subtitle: "Visiting professor at UCT Graduate School of Business and best-selling brand author."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "grassroots-marketing",
    number: "Theme 01",
    title: "Marketing through Mud and Dust.",
    copy: "Understanding the unique dynamics of the South African consumer landscape and building authentic brands from retail up."
  },
  {
    id: "corporate-culture",
    number: "Theme 02",
    title: "Tsotsis in the Boardroom.",
    copy: "Aligning worker representation, social dynamics, and institutional structure to foster shared economic prosperity."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "At The Speakers Firm, we proudly represent Muzi Kuzwayo, a legendary brand strategist, visiting professor at UCT GSB, and marketing disruptor.",
  "Muzi Kuzwayo is the founder of Ignitive, the former CEO of TBWAHuntLascaris, a leading advertising agency, non-executive director of Spur Holdings and chairman of Project Literacy, an organisation dedicated to promoting literacy in South Africa. Muzi was also a director and shareholder of King James, an advertising agency, as well as a director of the Association of Communication Agencies, an industry body that represents advertising and communication agencies.",
  "Muzi is a visiting professor at UCT’s Graduate School of Business and author of the best-selling books Marketing through Mud and Dust and There’s a Tsotsi in the Boardroom, and was a columnist for the newspapers The Saturday Star and The Argus, commenting on advertising and marketing. Six years ago he bought two Pick ‘n Pay franchise stores which he ran personally, giving him a complete understanding of building brands right through to retail. He also has extensive knowledge of the South African work force and the ability to align the interests of workers with those of shareholders."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "tbwa", name: "TBWA \\ HUNT \\ LASCARIS" },
  { id: "uct", name: "UCT GRADUATE SCHOOL" },
  { id: "picknpay", name: "PICK 'N PAY" }
];

const BOOKS = [
  {
    id: "south-africas-promise",
    title: "South Africa's Promise",
    description: "A visionary blueprint detailing how collective commitment can build a prosperous, united, and values-driven South Africa.",
    coverImage: "/speakers/Muzi Kuzwayo/south-africas-promise-book-1.jpg",
    url: "https://www.southafricaspromise.org.za/get-the-book/"
  },
  {
    id: "black-mans-medicine",
    title: "Black Man's Medicine",
    description: "An insightful analysis of the corporate and cultural paths that black professionals steer through in South Africa.",
    coverImage: "/speakers/Muzi Kuzwayo/muzi-kuzwayo-black-mans-medicine.jpg",
    url: "https://www.loot.co.za/product/muzi-kuzwayo-black-man-s-medicine/fwcl-2187-g960"
  },
  {
    id: "tsotsi-boardroom",
    title: "There’s a Tsotsi in the Boardroom",
    description: "An eye-opening exploration of how to align corporate boardroom governance with the cultural realities of South African workers.",
    coverImage: "/speakers/Muzi Kuzwayo/muzi-kuzwayo-theres-a-tsotsi-in-the-boardroom.jpg",
    url: "https://www.loot.co.za/product/muzi-kuzwayo-there-s-a-tsotsi-in-the-boardroom/ftmc-202-g350"
  },
  {
    id: "marketing-mud-dust",
    title: "Marketing through Mud and Dust",
    description: "An essential guide to understanding the purchasing power and consumer habits of South Africa's township economies.",
    coverImage: "/speakers/Muzi Kuzwayo/Muzi-Kuzwayo-Marketing-Through-Mud-and-Dust---Marketing-to-Black-South-Africans.jpg",
    url: "https://www.loot.co.za/product/muzi-kuzwayo-marketing-through-mud-and-dust/frty-331-g230"
  }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "kuzwayo-art-1",
      headline: "Friends & Friction | Learn to ask the right questions",
      publication: "City Press / News24",
      date: "24 Jan 2020",
      action: "Read Article",
      url: "https://www.news24.com/citypress/business/friends-friction-learn-to-ask-the-right-questions-20200124",
      image: "/speakers/Muzi Kuzwayo/muzi-kuzwayo-the-speakers-firm-12.jpg"
    },
    {
      id: "kuzwayo-art-2",
      headline: "Friends & Friction | Harness new social forces to build the nation we want",
      publication: "City Press / News24",
      date: "14 Feb 2021",
      action: "Read Column",
      url: "https://www.news24.com/citypress/columnists/muzikuzwayo/friends-friction-harness-new-social-forces-to-build-the-nation-we-want-20210214",
      image: "/speakers/Muzi Kuzwayo/muzi-kuzwayo-the-speakers-firm-13.jpg"
    },
    {
      id: "kuzwayo-art-3",
      headline: "Friends & Friction: Will the real leaders please stand up?",
      publication: "City Press / News24",
      date: "12 Mar 2020",
      action: "Read Article",
      url: "https://www.news24.com/citypress/business/friends-friction-will-the-real-leaders-please-stand-up-20200312",
      image: "/speakers/Muzi Kuzwayo/muzi-kuzwayo-the-speakers-firm-14.jpg"
    }
  ];

  const customGallery = [
    {
      id: "kuzwayo-gal-1",
      src: "/speakers/Muzi Kuzwayo/muzi-kuzwayo-the-speakers-firm8.jpg",
      alt: "Muzi Kuzwayo speaking",
      caption: "Muzi Kuzwayo sharing brand disruption insights",
      className: "sm:col-span-2 lg:col-span-2"
    },
    {
      id: "kuzwayo-gal-2",
      src: "/speakers/Muzi Kuzwayo/muzi-kuzwayo-the-speakers-firm-12.jpg",
      alt: "TBWA Hunt Lascaris CEO session",
      caption: "Boardroom governance and alignment workshop",
      className: ""
    },
    {
      id: "kuzwayo-gal-3",
      src: "/speakers/Muzi Kuzwayo/muzi-kuzwayo-the-speakers-firm-13.jpg",
      alt: "Muzi Kuzwayo on stage",
      caption: "Keynote presentation at strategic business forum",
      className: ""
    },
    {
      id: "kuzwayo-gal-4",
      src: "/speakers/Muzi Kuzwayo/muzi-kuzwayo-the-speakers-firm9.jpg",
      alt: "Muzi Kuzwayo keynote",
      caption: "Marketing through mud and dust retail insights",
      className: "sm:col-span-2 lg:col-span-2"
    },
    {
      id: "kuzwayo-gal-5",
      src: "/speakers/Muzi Kuzwayo/muzi-kuzwayo-the-speakers-firm-15.jpg",
      alt: "Corporate roundtable",
      caption: "Advancing shared growth and worker alignment",
      className: ""
    }
  ];

  const customVideos = [
    {
      id: "kuzwayo-vid-1",
      label: "Muzi Kuzwayo on Brand Strategy & South Africa's Promise",
      youtubeId: "WosJQUdP_oE"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Muzi Kuzwayo"
      speakerTitle=""
      speakerDesignation="Founder of Ignitive, Former CEO of TBWA Hunt Lascaris & Author"
      speakerRole="Pioneering advertising executive, GSB professor, and consumer marketing strategist."
      speakerRef="TSF-MK-15"
      heroBackgroundImage="/speakers/Muzi Kuzwayo/muzi-kuzwayo-the-speakers-firm-6.jpg"
      biographyImage="/speakers/Muzi Kuzwayo/Muzi-Kuzwayo-the-speakers-firm-second.jpg"
      bioHook="“To build a brand in Africa, you must learn to walk through the mud and dust of retail realities.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      books={BOOKS}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="siphiwe-moyo" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="siphiwe-moyo" 
        customGallery={customGallery} 
        customIntroText="Brand strategy presentations, advertising masterclasses, and retail consumer analysis keynotes led by Muzi Kuzwayo."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};
