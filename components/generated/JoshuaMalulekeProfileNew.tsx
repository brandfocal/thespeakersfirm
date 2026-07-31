import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  { id: "ceo-mayeke", label: "CEO", subtitle: "Mayeke Holdings" },
  { id: "former-president-abasa", label: "Former President", subtitle: "ABASA National Board" },
  { id: "management-accountant", label: "Qualified", subtitle: "Management Accountant" },
  { id: "author-ent-101", label: "Author", subtitle: "Entrepreneurship 101" }
];

const STRATEGIC_THEMES = [
  {
    id: "theme-1",
    number: "01",
    title: "Demystifying Startup Capital",
    copy: "Shifting the focus from raising large capital to maximizing lean resources, structural execution, and early revenue models."
  },
  {
    id: "theme-2",
    number: "02",
    title: "Financial Stewardship & Governance",
    copy: "Applying management accounting principles to help corporate entities and growing ventures build sustainable financial models."
  },
  {
    id: "theme-3",
    number: "03",
    title: "Strategic Venturing & Scaling",
    copy: "How to design business frameworks that enable sustainable expansion across property, services, and diverse sectors."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Joshua Maluleke is a South African financial consultant, management accountant, entrepreneur, and author of the highly acclaimed book, 'Entrepreneurship 101: Tackling the Basics of Business Start-Ups in South Africa'. Currently serving as the Chief Executive Officer at Mayeke Holdings, Joshua is a respected thought leader on business growth and strategy execution.",
  "He is a qualified management accountant who previously served as the National President of the Association for the Advancement of Black Accountants in Southern Africa (ABASA). Through his extensive work as an entrepreneurial mentor and corporate consultant, he has gained unique insights into the financial, operational, and strategic realities of scaling businesses in the African continent.",
  "In his advisory work, Joshua strongly advocates for self-reliance and strategic preparation in the entrepreneurship journey. Rather than overemphasizing large starting capital, he champions structural execution, market alignment, customer focus, and building businesses based on long-term value creation. He frequently draws inspiration from iconic leaders to show that passion and tenacity are the primary drivers of commercial success.",
  "Mayeke Holdings, under Joshua's guidance, operates across multiple strategic sectors, including properties, events management, and automotive services. As a corporate speaker, Joshua translates complex management accounting, financial planning, and startup mechanics into clear, actionable frameworks for boards, startups, and executive teams."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "mayeke", name: "MAYEKE HOLDINGS" },
  { id: "abasa", name: "ABASA" },
  { id: "deloitte", name: "DELOITTE SA" }
];

const BOOKS = [
  {
    id: "joshua-book-1",
    title: "Entrepreneurship 101: Tackling the Basics of Business Start-Ups in South Africa",
    description: "A practical handbook designed to guide aspiring South African entrepreneurs through the fundamentals of starting, structuring, and operating a successful business.",
    coverImage: "/speakers/Joshua%20Maluleke/Entrepreneurship-101.jpg",
    url: "https://www.youtube.com/watch?v=iNhkddgo1yQ"
  }
];

const customMedia = [
  {
    id: "joshua-media-1",
    headline: "Interview on Entrepreneurship 101 Book by Joshua Maluleke",
    publication: "YouTube Interview",
    date: "",
    url: "https://www.youtube.com/watch?v=iNhkddgo1yQ",
    action: "View Interview",
    image: "/speakers/Joshua%20Maluleke/Joshua-Maluleke-The-Speakers-Firm-5.jpg"
  }
];

const customGallery = [
  {
    id: "joshua-gal-1",
    src: "/speakers/Joshua%20Maluleke/Joshua-Maluleke-The-Speakers-Firm.jpg",
    alt: "Joshua Maluleke Portrait",
    caption: "Joshua Maluleke",
    className: ""
  },
  {
    id: "joshua-gal-2",
    src: "/speakers/Joshua%20Maluleke/Joshua-Maluleke-The-Speakers-Firm-2.jpg",
    alt: "Joshua Speaking Portrait",
    caption: "Business Advisor",
    className: ""
  },
  {
    id: "joshua-gal-3",
    src: "/speakers/Joshua%20Maluleke/Joshua-Maluleke-The-Speakers-Firm-4.jpg",
    alt: "Joshua Maluleke Executive Profile",
    caption: "CEO Mayeke Holdings",
    className: ""
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Joshua Maluleke"
      speakerTitle="Mr"
      speakerDesignation="CEO at Mayeke Holdings, Financial Consultant & Author"
      speakerRole="Author of Entrepreneurship 101 & Former President of ABASA."
      speakerRef="TSF-JM-33"
      heroBackgroundImage="/speakers/Joshua%20Maluleke/Joshua-Maluleke-The-Speakers-Firm-6.jpg"
      biographyImage="/speakers/Joshua%20Maluleke/Joshua-Maluleke-The-Speakers-Firm-3.jpg"
      bioHook="“Passion, structural execution, and customer focus drive business success far more than massive starting capital.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      books={BOOKS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="joshua-maluleke" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="joshua-maluleke" 
        customGallery={[]} 
        customVideos={[
          {
            id: "joshua-video-1",
            label: "Experience Reel",
            youtubeId: "iNhkddgo1yQ"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
