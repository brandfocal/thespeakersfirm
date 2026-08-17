"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "top-100-influential",
    label: "Top 100 Influential South African",
    subtitle: "Named one of the Top 100 Most Influential Young South Africans by Avance Media."
  },
  {
    id: "money-coach-exec",
    label: "Accredited Money Coach & CEO",
    subtitle: "Founder of ODEL Coaching and CEO of Isipho Sempilo HSE Solutions."
  },
  {
    id: "bestselling-author",
    label: "Bestselling Author & Speaker",
    subtitle: "Author of 'Money and Black People' and recipient of multiple entrepreneurship awards."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "money-consciousness",
    number: "Theme 01",
    title: "Money Consciousness & Energy.",
    copy: "Clearing subconscious money blocks and aligning emotional energy to transition from debt cycles to abundance."
  },
  {
    id: "org-wellness",
    number: "Theme 02",
    title: "Organizational Financial Wellness.",
    copy: "Empowering workforces through money coaching, career transitions, and emotional intelligence for holistic productivity."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Busi Selesho is an Internationally Accredited Money Coach, Money Consciousness Teacher and Speaker, empowering individuals to have a better relationship with money, how to get out of the debt cycles and enjoy financial wellness and abundance.",
  "She is listed as one of the Top 100 Most Influential Young South Africans in 2017 by Avance Media. She is an Award Winning, International Bestselling Author of Money and Black People: Why black people don’t have money, and how to heal your money story. She teaches her clients how to tap into their skills sets, how to use their unused skills to make money, to take care of themselves and to impact others’ lives. She teaches her clients about the energy of money, how to connect with money on an emotional level, clear money blocks and allow money to flow in their lives, how to get unstuck and achieve the things they want in life.",
  "She runs a Coaching Firm called ODEL Coaching that helps businesses and organisations take care of their most valuable asset, their people, through money coaching, emotional intelligence, career change, financial wellness and emotional wellness. She is an entrepreneur, CEO of Isipho Sempilo HSE Solutions, and has been married for over 10 years and is a mother of 4. She is the founder of Money Breakfast where she hosts seminars and workshops on money consciousness, money energy, how-to-get-out-of-debt energy, and having a better relationship with money.",
  "She has created Online Money programmes to help those who cannot attend courses, accessible on www.busiselesho.com. She has won the Best Entrepreneur of the year award, Best Innovative Business of the year award, Best Speaker of the year award, and several other honors.",
  "Book Busi Selesho through The Speakers Firm, Africa’s #1 Strategic Speakers Bureau, to bring empowering financial wellness strategies, money coaching, and authentic consciousness workshops to your team or organization."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "odel", name: "ODEL COACHING" },
  { id: "capitec", name: "CAPITEC" },
  { id: "isipho", name: "ISIPHO SEMPILO HSE SOLUTIONS" }
];

const BOOKS = [
  {
    id: "money-black-people",
    title: "Money and Black People",
    description: "Why black people don't have money, and how to heal your money story. An international bestseller that unpacks money trauma and guides readers to build lasting wealth.",
    coverImage: "/speakers/Busi Selesho/Busi-Selesho-Money-And-Black-People.jpg",
    url: "https://www.amazon.com/dp/B079BYMK15/ref=cm_sw_r_wa_apa_i_l5GxEbEJXNJN4"
  }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "selesho-art-1",
      headline: "Why are you struggling with debt? | Money Magic",
      publication: "Moya",
      date: "2023",
      action: "Watch Discussion",
      url: "https://www.youtube.com/watch?v=KtI1uzlEt4g",
      image: "/speakers/Busi Selesho/Busi-Selesho-The-Speakers-Firm-5.jpg"
    },
    {
      id: "selesho-art-2",
      headline: "Having a money mindset | Live Better Talks",
      publication: "Live Better Talks",
      date: "2023",
      action: "Watch Address",
      url: "https://www.youtube.com/watch?v=TLSy2I971gY",
      image: "/speakers/Busi Selesho/Busi-Selesho-The-Speakers-Firm-3.jpg"
    },
    {
      id: "selesho-art-3",
      headline: "BOOK REVIEW: Money and Black People",
      publication: "SABC News",
      date: "2023",
      action: "Watch Review",
      url: "https://www.youtube.com/watch?v=r-1zsUcD0EY",
      image: "/speakers/Busi Selesho/Busi-Selesho-The-Speakers-Firm-4.jpg"
    }
  ];

  const customVideos = [
    {
      id: "selesho-vid-1",
      label: "Busi Selesho on Cape Town Live Better Talks",
      youtubeId: "VWU5IKdEHeA"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Busi Selesho"
      speakerTitle=""
      speakerDesignation="Money Coach, Author & Speaker"
      speakerRole="Internationally Accredited Money Consciousness Teacher"
      speakerRef="TSF-BS-25"
      heroBackgroundImage="/speakers/Busi Selesho/Busi-Selesho-The-Speakers-Firm-9.jpg"
      biographyImage="/speakers/Busi Selesho/Busi-Selesho-The-Speakers-Firm.jpg"
      bioHook="“Connect with money on an emotional level, clear money blocks and allow abundance to flow in your life.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      books={BOOKS}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="busi-selesho" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="busi-selesho" 
        customIntroText="Interactive Money Consciousness seminars, leadership wellness coaching, and financial alignment workshops led by Busi Selesho."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};
