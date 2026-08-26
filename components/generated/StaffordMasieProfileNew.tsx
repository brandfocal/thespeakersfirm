"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "google-ceo",
    label: "Former CEO, Google SA",
    subtitle: "Led Google's expansion, technology scaling, and search business across Southern Africa."
  },
  {
    id: "tech-futurist",
    label: "Technology Futurist",
    subtitle: "Highly regarded advisor on decentralized systems, blockchain, and artificial intelligence."
  },
  {
    id: "angel-investor",
    label: "Fintech Angel Investor",
    subtitle: "Invests in and mentors high-growth fintech startups scaling globally."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "digital-disruption",
    number: "Theme 01",
    title: "Digital Disruption & Intelligent Enterprise.",
    copy: "Understanding blockchain, artificial intelligence, and how decentralized networks reshape global commercial models."
  },
  {
    id: "human-technology",
    number: "Theme 02",
    title: "The Human Element in Technology.",
    copy: "Reframing technological innovation around human capability, psychological safety, and organizational purpose."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Stafford Masie has been in the ICT industry for more than 30 years. He began his career as a software developer, network engineer & technology analyst for Telkom and thereafter, recruited to be the National Software Strategist for Dimension Data. Stafford has held various other technology leadership positions in his career, such as Co-CEO, co-founder and strategist for Redstar Networks (his first startup), the Product Director for Novell South Africa, a Global Corporate Business Strategist for Novell Inc. based in the USA (Utah) and returned to SA after 7.5 years to become Managing Director for Novell Sub-Saharan Africa.",
  "Thereafter he joined Google, established Google’s first South Africa presence and became Google’s first Sub-Saharan Africa leader. Stafford built the first Google SA team, launched several of Google’s mainstream platforms, prepared all application services in unison with the World Cup Organizing Committee to ensure SA services were updated and available on all Google’s applications, globally. He and the team compiled, published and maintained Google’s first African strategy.",
  "After Google, Stafford established several leading technology startups; notably “thumbzup” where he and his team invented several world-first financial services (fintech) payment technologies, raised international venture capital (via Visa Inc and Entré Capital) and also launched that fintech business in several global markets (partnering closely with leading international banks).",
  "After thumbzup he established SauronAi and built several leading edge artificial intelligence solutions for the retail sector.",
  "He has also served on the board of Advtech for 7.5 years as an independent non-executive director (and member of the investment and risk subcommittees) and during that tenure joined the board of the CSIR for a 4.5 year term.",
  "Stafford is a well known businessman and technology investor, who is often a guest on international and local podcasts, radio, and tv news/talk shows. He is also specifically recognized as a tech startup angel investor, executive-MBA guest lecturer (GIBS, Henley, UJ/Wits business schools), and international keynote speaker.",
  "He presently serves as a non-exec director on the board of Discovery Bank, is the Chairman of the board at Altvest Capital, additionally the Chairman of the board at the WITS/Telkom Innovation Lab, whilst angel investing in several emerging technology startups (most notably focused on Ai and Bitcoin (Lightning Network))."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "google", name: "GOOGLE" },
  { id: "csir", name: "CSIR" },
  { id: "wits", name: "WITS BUSINESS SCHOOL" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "stafford-art-1",
      headline: "Which FAANG stocks are worth keeping? Stafford Masie",
      publication: "BizNews",
      date: "12 May 2022",
      action: "Watch Fireside Chat",
      url: "https://www.biznews.com/wealth-creating/2022/05/12/stafford-masie-faang-stocks",
      image: "/speakers/Stafford Masie/stafford-masie-the-speakers-firm.jpg"
    },
    {
      id: "stafford-art-2",
      headline: "Interview: WeWork South Africa GM Stafford Masie on building trust",
      publication: "TechCentral",
      date: "05 Nov 2019",
      action: "Read Interview",
      url: "https://techcentral.co.za/wework-sa-gm-stafford-masie-on-building-trust/93645/",
      image: "/speakers/Stafford Masie/stafford-masie-the-speakers-firm-second.jpg"
    },
    {
      id: "stafford-art-3",
      headline: "Love: The Future of Work",
      publication: "StaffordMasie.com",
      date: "14 Feb 2024",
      action: "Read Article",
      url: "https://staffordmasie.com/love-the-future-of-work/",
      image: "/speakers/Stafford Masie/Stafford-Massie_featured-image.jpg"
    }
  ];

  const customGallery = [
    {
      id: "stafford-gal-1",
      src: "/speakers/Stafford Masie/Stafford-Masie-the-speakers-firm-third.jpg",
      alt: "Stafford Masie digital innovation presentation",
      caption: "Technology Futurist, Former CEO of Google SA & Angel Investor",
      className: "sm:col-span-2 lg:col-span-2"
    },
    {
      id: "stafford-gal-2",
      src: "/speakers/Stafford Masie/Stafford-Masie-the-speakers-firm-fourth.jpg",
      alt: "Decentralized ecosystem tech summit roundtable",
      caption: "Stewardship and technological transformation panel",
      className: ""
    },
    {
      id: "stafford-gal-3",
      src: "/speakers/Stafford Masie/Stafford-Masie-the-speakers-firm-fifth.jpg",
      alt: "Stafford Masie live keynote address",
      caption: "Addressing corporate leadership teams",
      className: ""
    },
    {
      id: "stafford-gal-4",
      src: "/speakers/Stafford Masie/Stafford-Masie-the-speakers-firm-sixth.jpg",
      alt: "Innovation summit keynote",
      caption: "Navigating digital disruption",
      className: ""
    },
    {
      id: "stafford-gal-5",
      src: "/speakers/Stafford Masie/Stafford-Masie-the-speakers-firm-seventh.jpg",
      alt: "Stafford Masie fintech mentoring",
      caption: "Mentoring tech startup founders",
      className: ""
    }
  ];

  const customVideos = [
    {
      id: "stafford-vid-1",
      label: "Stafford Masie Keynote & Technology Address",
      youtubeId: "NK4-LeozO34"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Stafford Masie"
      speakerTitle=""
      speakerDesignation="Technology Futurist, Former CEO of Google SA & Angel Investor"
      speakerRole="Global technology strategist, Google veteran, and payment systems pioneer."
      speakerRef="TSF-SM-11"
      heroBackgroundImage="/speakers/Stafford Masie/Stafford-Masie.jpg"
      heroMobileBackgroundImage="/speakers/Stafford%20Masie/stafford-masie-mobile.jpg"
      biographyImage="/speakers/Stafford Masie/stafford-masie-the-speakers-firm.jpg"
      bioHook="“Technology is not about gadgets; it is about absolute human empowerment and decentralized freedom.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="stafford-masie" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="stafford-masie" 
        customGallery={customGallery} 
        customIntroText="Technology summits and digital disruption briefings by Stafford Masie."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};
