"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "dzana-ceo",
    label: "CEO, Dzana Investments",
    subtitle: "Leads a Family Office holding company with interests in commercial property, renewable energy, and private equity."
  },
  {
    id: "pe-partner",
    label: "Private Equity Partner",
    subtitle: "Co-founder of Hlayisani Capital, investing in high-growth businesses across Sub-Saharan Africa."
  },
  {
    id: "governance-chair",
    label: "Governance & Non-Profit Chair",
    subtitle: "Chairs Italtile's Social & Ethics Committee and the National Mentorship Movement."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "inclusive-growth",
    number: "Theme 01",
    title: "Inclusive Growth & Transformation.",
    copy: "Driving socio-economic transformation through private equity, venture capital, and rural commercial property developments."
  },
  {
    id: "mentorship-dev",
    number: "Theme 02",
    title: "Strategic Mentorship & Youth Development.",
    copy: "Leveraging structured mentorship platforms to scale entrepreneurial ventures and empower future leaders."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Nkateko Khoza is an MBA and BCom Graduate with majors in Information Systems, Accounting and Economics. She began her career in 1999 as a graduate trainee at BMW South Africa, where she advanced to the roles of Business Analyst and Junior Project Manager. She further honed her project management and business analysis expertise at EDS, managing projects for the Nedbank Customer Care Centre Account.",
  "In 2002, she joined Barloworld Information Systems and AVIS Car Rental, where she successfully led the implementation of various CRM and ERP systems. Her strategic capabilities led her to a consulting role in 2006 at the Gauteng Shared Services Centre, where she served as the Lead Account Director.",
  "In 2014, Nkateko co-founded Dzana Investments, a Family Office investment holding company where she serves as Chief Executive Officer, with diversified interests in commercial property, renewable energy, private equity, and strategic sectors. She also co-founded Hlayisani Capital, a private equity and venture capital firm that invests in high-growth businesses across Sub-Saharan Africa, focused on catalysing socio-economic transformation and global competitiveness.",
  "Nkateko has served for seven years on the board of Italtile, where she chaired the Group Social and Ethics Committee. She is the Chairperson of the National Mentorship Movement, sits on the board of Endeavor South Africa, and serves as Chairperson of the Board of Mzansi Ballet NPC. Reflecting her deep commitment to rural development, she has driven multiple rural commercial property development and mixed-use initiatives since 2012.",
  "Book Nkateko Khoza through The Speakers Firm, A Leading African Speakers Bureau, to bring strategic investment insights, corporate governance expertise, and passionate advocacy for inclusive growth to your next leadership event."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "dzana", name: "DZANA INVESTMENTS" },
  { id: "hlayisani", name: "HLAYISANI CAPITAL" },
  { id: "deloitte", name: "DELOITTE" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "khoza-art-1",
      headline: "Nkateko Khoza on Dzana Investments and Scaling Sub-Saharan Business",
      publication: "YouTube",
      date: "2024",
      action: "Watch Interview",
      url: "https://www.youtube.com/watch?v=LTiB6ZgTelY",
      image: "/speakers/Nkateko Khoza/Nkateko-Khoza-The-Speakers-Firm-5.jpg"
    },
    {
      id: "khoza-art-2",
      headline: "Fireside Chat with Dzana Investments CEO Nkateko Khoza",
      publication: "YouTube",
      date: "2024",
      action: "Watch Discussion",
      url: "https://www.youtube.com/watch?v=wfgahdi44vA",
      image: "/speakers/Nkateko Khoza/Nkateko-Khoza-The-Speakers-Firm.jpg"
    }
  ];

  const customVideos = [
    {
      id: "khoza-vid-1",
      label: "Nkateko Khoza on Strategic Growth & Private Equity",
      youtubeId: "6uvfnMbaeZc"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Nkateko Khoza"
      speakerTitle=""
      speakerDesignation="CEO, Private Equity Partner & Governance Chair"
      speakerRole="Co-Founder of Dzana Investments & Hlayisani Capital"
      speakerRef="TSF-NK-29"
      heroBackgroundImage="/speakers/Nkateko Khoza/Nkateko-Khoza-The-Speakers-Firm-2.jpg"
      biographyImage="/speakers/Nkateko Khoza/Nkateko-Khoza-The-Speakers-Firm-4.jpg"
      bioHook="“Catalysing socio-economic transformation, scaling high-growth businesses, and championing mentorship for youth development.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="nkateko-khoza" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="nkateko-khoza" 
        customIntroText="Strategic investment keynotes, corporate governance briefings, and transformation workshops led by Nkateko Khoza."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};
