"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "mipad-100",
    label: "MIPAD Top 100 Leader",
    subtitle: "Named among the Most Influential Persons of African Descent Class of 2018."
  },
  {
    id: "tnc-founder",
    label: "TNC Wealth Partners Founder",
    subtitle: "Founder and CEO of a leading personal and small business wealth coaching consultancy."
  },
  {
    id: "investec-mintek",
    label: "Investec Alumna & Mintek Board",
    subtitle: "Former private banker at Investec Specialist Bank and youngest board member of MINTEK."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "financial-sovereignty",
    number: "Theme 01",
    title: "Financial Independence & Empowerment.",
    copy: "Advocating for individual financial sovereignty, especially for women, to mitigate financial vulnerability."
  },
  {
    id: "wealth-coaching",
    number: "Theme 02",
    title: "Wealth Coaching & Debt Dissolution.",
    copy: "Empowering professionals and corporate workforces through structured budgeting, wealth consciousness, and debt reduction programs."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Samke Mhlongo is Founder and Chief Executive of The Next Chapter (“TNC”) Wealth Partners – a personal and small business wealth coaching consultancy that partners with various industry experts to provide financial wellness and coaching services to individuals and small businesses.",
  "Through her consultancy, this ex-private banker and SETA accredited trainer has established herself as an international wealth coach whose repeat clients include Anglo American and Standard Bank, and whose presentations have been delivered across South Africa through to Kenya and Cyprus.",
  "Her business accolades include being named MIPAD Top 100 Most Influential Persons of African Descent Class of 2018, Entrepreneur Magazine Top 50 Black African Women Entrepreneurs to Watch 2018, and Brand SA “Play Your Part” Ambassador in the field of Entrepreneurship.",
  "Mhlongo also promotes financial literacy as resident finance columnist for BONA magazine; a South African glossy with over 3million readers; and as presenter of the daily FreshBIZ report on Metro FM, South Africa’s largest commercial radio station with over 4million listeners.",
  "Mhlongo sharpened her finance expertise during her 7-year tenure at Investec Specialist Bank and Asset Manager. She is also the youngest board member of state-owned mineral research technology agency MINTEK and sits on its Audit & Risk Committee. She holds an UCT Accounting degree, Wits Business School Postgraduate Diploma in Management, and an MBA with a focus on factors contributing to over-indebtedness of black South African females.",
  "Book Samke Mhlongo through The Speakers Firm, Africa’s #1 Strategic Speakers Bureau, to bring dynamic wealth coaching, small business financial wellness, and inspirational financial consciousness keynotes to your next event."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "investec", name: "INVESTEC" },
  { id: "standardbank", name: "STANDARD BANK" },
  { id: "anglo", name: "ANGLO AMERICAN" }
];

const BOOKS = [
  {
    id: "ringfence-book",
    title: "Ringfence",
    description: "A compelling exploration of relationship wealth dynamics, estate planning, and financial boundary integration.",
    coverImage: "/speakers/Samke Mhlongo/Samke-Mhlongo-Ringfence.jpg",
    url: "https://exclusivebooks.co.za/products/9780620880947"
  }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "mhlongo-art-1",
      headline: "Women must have their own money regardless of relationship status",
      publication: "News24",
      date: "2023",
      action: "Read Interview",
      url: "https://www.news24.com/life/relationships/author-of-ringfence-samke-mhlongo-on-marrying-rich-and-what-leaves-women-financially-vulnerable-20220920",
      image: "/speakers/Samke Mhlongo/Samke-Mhlongo-The-Speakers-Firm-8.jpg"
    },
    {
      id: "mhlongo-art-2",
      headline: "Savvy with Samke: A New Series Helping SA Professionals",
      publication: "Good Things Guy",
      date: "2023",
      action: "Read Story",
      url: "https://www.goodthingsguy.com/lifestyle/savvy-with-samke-a-4-part-series-getting-into-the-nitty-gritty-of-life/",
      image: "/speakers/Samke Mhlongo/Samke-Mhlongo-The-Speakers-Firm-9.jpg"
    },
    {
      id: "mhlongo-art-3",
      headline: "Profile: Meet Samke Mhlongo, South Africa’s Most Sought-After Financial Coach",
      publication: "Women of Rubies",
      date: "2024",
      action: "Read Profile",
      url: "https://womenofrubies.com/profile-meet-samke-mhlongo-south-africas-most-sought-after-financial-coach/",
      image: "/speakers/Samke Mhlongo/Samke-Mhlongo-The-Speakers-Firm-10.jpg"
    }
  ];

  const customVideos = [
    {
      id: "mhlongo-vid-1",
      label: "Samke Mhlongo: Money Magic & Ringfence Discussion",
      youtubeId: "fCUpydcB7Vo"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Samke Mhlongo"
      speakerTitle=""
      speakerDesignation="Wealth Coach, Author & Board Director"
      speakerRole="Founder and CEO of TNC Wealth Partners"
      speakerRef="TSF-SM-30"
      heroBackgroundImage="/speakers/Samke Mhlongo/Samke-Mhlongo-The-Speakers-Firm-6.jpg"
      biographyImage="/speakers/Samke Mhlongo/Samke-Mhlongo-The-Speakers-Firm-7.jpg"
      bioHook="“Women must have their own money regardless of relationship status. Setting the stage for personal and small business wealth empowerment.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      books={BOOKS}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="samke-mhlongo" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="samke-mhlongo" 
        customIntroText="Structured small business coaching masterclasses, women-focused wealth seminars, and corporate employee financial wellness drives led by Samke Mhlongo."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};
