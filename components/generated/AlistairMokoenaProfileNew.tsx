"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "google-director",
    label: "Google SA Country Director",
    subtitle: "blue chip corporate executive leading digital and tech initiatives."
  },
  {
    id: "prof-practice",
    label: "Extraordinary Professor of Practice",
    subtitle: "NWU Business School, visiting faculty at Oxford Said Business School."
  },
  {
    id: "marketer",
    label: "Chartered Marketer",
    subtitle: "27 years of blue-chip corporate marketing leadership."
  },
  {
    id: "education-fund",
    label: "Education Philanthropist",
    subtitle: "Founder of the Dr Alistair Mokoena Education Fund."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "self-mastery-leadership",
    number: "Theme 01",
    title: "Self-Mastery and Leadership Strategy",
    copy: "Drawing on his book 'Servings of self-mastery', Dr. Mokoena teaches practical frameworks for professional growth, high-performance coaching, and strategic corporate governance."
  },
  {
    id: "digital-disruption",
    number: "Theme 02",
    title: "Digital Transformation & Responsible AI",
    copy: "Helping organizations navigate digital disruption, bridge the digital divide, and implement Artificial Intelligence ethically to achieve sustainable development goals."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Dr Alistair Mokoena is an international keynote speaker and a Chartered Marketer with 27 years blue chip corporate experience. Some of his previous roles include Unilever Brand Manager, SABMiller Marketing Manager, Absa Head of Marketing, Ogilvy South Africa Chief Executive Officer and Google South Africa Country Director. He’s the author of a self-effectiveness book called “Servings of self-mastery” which was featured in Exclusive Books’ prestigious HomeBru Campaign in May 2024.",
  "He is currently an Extraordinary Professor of Practice at the North-West University Business School, and visiting faculty at local and international business schools including the University of Oxford Said Business School. He has published many articles, presented conference papers, reviewed and co-authored numerous books. His academic qualifications include Bcom, LLB, MDP (Management Development Programme), EDP (Executive Development Programme), MBA, PhD, and he is in the process of completing a DBA (Doctor of Business Administration).",
  "He has received many industry awards over the years including the Global Brands Magazine’s Best Advertising and Marketing Leader Award in South Africa (2019), North-West University’s Alumni Excellence Award for Business Leadership (2023), a Finalist in the IMM (Institute of Marketing Management) Marketing Excellence Awards (2023) and Rhodes University Distinguished Alumni Award (2024).",
  "Dr Mokoena is also a philanthropist. In March 2024 he established the Dr Alistair Mokoena Education Fund at Rhodes University, North-West University and the University of Johannesburg which supports students that cannot afford university fees. He is passionate about bridging the digital divide and is an advocate for the role that responsible Artificial Intelligence can play in making the United Nations’ 17 Sustainable Development Goals a reality in our lifetime.",
  "He sits on the following boards: UJ Council, UJInvt (Pty) Ltd, UJ School of Tourism and Hospitality Advisory Board, North-West University Business School Advisory Board."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "google", name: "GOOGLE" },
  { id: "nwu", name: "NORTH-WEST UNIVERSITY" },
  { id: "rhodes", name: "RHODES UNIVERSITY" },
  { id: "uj-council", name: "UJ COUNCIL" }
];

const customMedia = [
  {
    id: "alistair-media-1",
    headline: "From Vision to Action: Alistair Mokoena sets up an Education Fund",
    publication: "Rhodes University",
    date: "",
    url: "https://www.ru.ac.za/latestnews/fromvisiontoactionalistairmokoenasetsupaneducationfund.html",
    action: "Read Article",
    image: "/speakers/Dr%20Alistair%20Mokoena/Dr-Alistair-Mokoena-8.jpg"
  },
  {
    id: "alistair-media-2",
    headline: "Prof Alistair Mokoena: investing in good education is key",
    publication: "NWU News",
    date: "",
    url: "https://news.nwu.ac.za/prof-alistair-mokoena-investing-good-education-key",
    action: "Read Article",
    image: "/speakers/Dr%20Alistair%20Mokoena/Dr-Alistair-Mokoena-9.jpg"
  },
  {
    id: "alistair-media-3",
    headline: "Business Talk – In conversation with Google South Africa’s Alistair Mokoena",
    publication: "BusinessTech",
    date: "",
    url: "https://businesstech.co.za/news/business-opinion/512370/business-talk-in-conversation-with-google-south-africas-alistair-mokoena/",
    action: "Read Article",
    image: "/speakers/Dr%20Alistair%20Mokoena/Dr%20Alistair%20Mokoena-4.jpg"
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Alistair Mokoena"
      speakerTitle="Dr"
      speakerDesignation="Country Director: Google South Africa & Extraordinary Professor of Practice"
      speakerRole="The Architect of Digital Futures."
      speakerRef="TSF-AM-17"
      heroBackgroundImage="/speakers/Dr%20Alistair%20Mokoena/Dr-Alistair-Mokoena-7.jpg"
      biographyImage="/speakers/Dr%20Alistair%20Mokoena/Dr-Alistair-Mokoena-6.jpg"
      bioHook="“Bridging the digital divide and deploying responsible AI to change our world.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      books={[
        {
          id: "alistair-book-1",
          title: "Servings of Self-Mastery",
          description: "Dr. Alistair Mokoena's reflection and guidance on self-leadership, purpose, and self-mastery.",
          coverImage: "/speakers/Dr%20Alistair%20Mokoena/Servings-of-self-mastery.jpeg",
          url: "https://mandatemolefi.co.za/product/a-journey-of-diversity-inclusion-by-nene-molefi-ebook/"
        },
        {
          id: "alistair-book-2",
          title: "The Book Every Leader Needs to Read",
          description: "Essential strategies and leading perspectives for modern institutional and corporate leaders.",
          coverImage: "/speakers/Dr%20Alistair%20Mokoena/The-Book-Every-Leader-Needs-to-Read.jpg",
          url: "https://traceymcdonaldpublishers.com/product/the-book-every-leader-needs-to-read/"
        },
        {
          id: "alistair-book-3",
          title: "The Book Every Business Owner Must Read",
          description: "Practical guides and rules of engagement for marketing and commercial scaling.",
          coverImage: "/speakers/Dr%20Alistair%20Mokoena/The-Book-Every-Marketer-Should-Most-Definitely-Read.jpg",
          url: "https://traceymcdonaldpublishers.com/product/the-book-every-business-owner-must-read/"
        }
      ]}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="dr-alistair-mokoena" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="dr-alistair-mokoena" 
        customVideos={[
          {
            id: "alistair-video-1",
            label: "Experience Reel",
            youtubeId: "QxhsFLlO6oM"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
