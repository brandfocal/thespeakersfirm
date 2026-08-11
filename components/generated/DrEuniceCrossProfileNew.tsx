"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "phd-wits",
    label: "PhD in Entrepreneurship",
    subtitle: "Wits Business School, focusing on gender and race relations."
  },
  {
    id: "founder-ec-advisory",
    label: "Founder: EC Advisory",
    subtitle: "Legal consultancy serving infrastructure, energy, and corporate sectors."
  },
  {
    id: "director-solomonholmes",
    label: "Director & Shareholder",
    subtitle: "Solomonholmes corporate law firm."
  },
  {
    id: "board-member",
    label: "Board & Committee Director",
    subtitle: "JSE-listed Equites Property Fund and Cape Gate Marepha Pty Ltd."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "commercial-corporate-law",
    number: "Theme 01",
    title: "Commercial & Corporate Law",
    copy: "Strategic formulation, mergers and acquisitions, banking and finance law, and operational corporate governance."
  },
  {
    id: "esg-advocacy",
    number: "Theme 02",
    title: "Environmental, Social, & Governance (ESG)",
    copy: "Driving positive change in ESG practices, contributing significantly to sustainability and board effectiveness."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Dr. Eunice Cross is an attorney, entrepreneur, and founder of EC Advisory, a legal consultancy serving diverse corporate clients across sectors such as infrastructure, property, energy, and oil and gas. Eunice is a director of solomonholmes and has taken up a significant shareholding in the firm.",
  "With over 20 years of experience, Dr. Cross has held significant positions at the Industrial Development Corporation of South Africa Limited, Absa Bank Limited, and Bowmans (Law Firm). Her expertise spans commercial and corporate law, mergers and acquisitions, banking and finance law, and corporate governance.",
  "Apart from her legal qualifications, Dr. Cross’s academic pursuits include a PhD from Wits Business School, focusing on entrepreneurship studies with an emphasis on gender and race relations. She is a member of the Executive Committee of the Wits University Convocation, contributing her insights and expertise to the advancement of the institution. Her active involvement in various boards and committees, including JSE-listed Equites Property Fund and Cape Gate Marepha Pty Ltd, highlights her commitment to driving positive change in environmental, social, and governance practices, contributing significantly to the success of the organisations she serves."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "ec-advisory", name: "EC ADVISORY" },
  { id: "wits-business-school", name: "WITS BUSINESS SCHOOL" },
  { id: "equites", name: "EQUITES PROPERTY FUND" },
  { id: "solomonholmes", name: "SOLOMONHOLMES" }
];

const customMedia = [
  {
    id: "eunice-art-1",
    headline: "Women drive change in property and cities",
    publication: "The Citizen",
    date: "29 Apr 2025",
    url: "https://www.citizen.co.za/randburg-sun/news-headlines/2025/04/29/women-drive-change-in-property-and-cities/",
    action: "Read Article",
    image: "/speakers/Dr Eunice Cross/Dr-Eunice-Cross-3.jpg"
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Eunice Cross"
      speakerTitle="Dr."
      speakerDesignation="Founder of EC Advisory, Corporate Attorney & Board Director"
      speakerRole="Driving legal strategy, entrepreneurship, and ESG excellence."
      speakerRef="TSF-EC-02"
      heroBackgroundImage="/speakers/Dr Eunice Cross/Dr-Eunice-Cross-6.jpg"
      biographyImage="/speakers/Dr Eunice Cross/Dr-Eunice-Cross.jpg"
      bioHook="“Driving environmental, social, and governance transformation across corporate and industrial sectors.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="dr-eunice-cross" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="dr-eunice-cross" 
        customIntroText="Moments from Dr. Eunice Cross's board oversight, entrepreneurship studies, and corporate workshops."
        customGallery={[]}
        customVideos={[
          {
            id: "eunice-video-1",
            label: "Dr. Eunice Cross Keynote Presentation",
            youtubeId: "-UY3r0ocLnU"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
